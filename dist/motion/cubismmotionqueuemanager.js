/*!******************************************************!*\
  !*** ./Framework/motion/cubismmotionqueuemanager.ts ***!
  \******************************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _cubismmotionqueueentry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmotionqueueentry */ "./Framework/motion/cubismmotionqueueentry.ts");
  /* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
  var CubismMotionQueueEntry = _cubismmotionqueueentry__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMotionQueueEntry;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * モーション再生の管理
       *
       * モーション再生の管理用クラス。CubismMotionモーションなどACubismMotionのサブクラスを再生するために使用する。
       *
       * @note 再生中に別のモーションが StartMotion()された場合は、新しいモーションに滑らかに変化し旧モーションは中断する。
       *       表情用モーション、体用モーションなどを分けてモーション化した場合など、
       *       複数のモーションを同時に再生させる場合は、複数のCubismMotionQueueManagerインスタンスを使用する。
       */
      var CubismMotionQueueManager = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismMotionQueueManager() {
              this._userTimeSeconds = 0.0;
              this._eventCallBack = null;
              this._eventCustomData = null;
              this._motions = new csmVector();
          }
          /**
           * デストラクタ
           */
          CubismMotionQueueManager.prototype.release = function () {
              for (var i = 0; i < this._motions.getSize(); ++i) {
                  if (this._motions.at(i)) {
                      this._motions.at(i).release();
                      this._motions.set(i, void 0);
                      this._motions.set(i, null);
                  }
              }
              this._motions = null;
          };
          /**
           * 指定したモーションの開始
           *
           * 指定したモーションを開始する。同じタイプのモーションが既にある場合は、既存のモーションに終了フラグを立て、フェードアウトを開始させる。
           *
           * @param   motion          開始するモーション
           * @param   autoDelete      再生が終了したモーションのインスタンスを削除するなら true
           * @param   userTimeSeconds デルタ時間の積算値[秒]
           * @return                      開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するIsFinished()の引数で使用する。開始できない時は「-1」
           */
          CubismMotionQueueManager.prototype.startMotion = function (motion, autoDelete, userTimeSeconds) {
              if (motion == null) {
                  return Live2DCubismFramework.InvalidMotionQueueEntryHandleValue;
              }
              var motionQueueEntry = null;
              // 既にモーションがあれば終了フラグを立てる
              for (var i = 0; i < this._motions.getSize(); ++i) {
                  motionQueueEntry = this._motions.at(i);
                  if (motionQueueEntry == null) {
                      continue;
                  }
                  motionQueueEntry.startFadeout(motionQueueEntry._motion.getFadeOutTime(), userTimeSeconds); // フェードアウトを開始し終了する
              }
              motionQueueEntry = new CubismMotionQueueEntry(); // 終了時に破棄する
              motionQueueEntry._autoDelete = autoDelete;
              motionQueueEntry._motion = motion;
              this._motions.pushBack(motionQueueEntry);
              return motionQueueEntry._motionQueueEntryHandle;
          };
          /**
           * 全てのモーションの終了の確認
           * @return true 全て終了している
           * @return false 終了していない
           */
          CubismMotionQueueManager.prototype.isFinished = function () {
              // ------- 処理を行う -------
              // 既にモーションがあれば終了フラグを立てる
              for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
                  var motionQueueEntry = ite.ptr();
                  if (motionQueueEntry == null) {
                      ite = this._motions.erase(ite); // 削除
                      continue;
                  }
                  var motion = motionQueueEntry._motion;
                  if (motion == null) {
                      motionQueueEntry.release();
                      motionQueueEntry = void 0;
                      motionQueueEntry = null;
                      ite = this._motions.erase(ite); // 削除
                      continue;
                  }
                  // ----- 終了済みの処理があれば削除する ------
                  if (!motionQueueEntry.isFinished()) {
                      return false;
                  }
                  else {
                      ite.preIncrement();
                  }
              }
              return true;
          };
          /**
           * 指定したモーションの終了の確認
           * @param motionQueueEntryNumber モーションの識別番号
           * @return true 全て終了している
           * @return false 終了していない
           */
          CubismMotionQueueManager.prototype.isFinishedByHandle = function (motionQueueEntryNumber) {
              // 既にモーションがあれば終了フラグを立てる
              for (var ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.increment()) {
                  var motionQueueEntry = ite.ptr();
                  if (motionQueueEntry == null) {
                      continue;
                  }
                  if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber && !motionQueueEntry.isFinished()) {
                      return false;
                  }
              }
              return true;
          };
          /**
           * 全てのモーションを停止する
           */
          CubismMotionQueueManager.prototype.stopAllMotions = function () {
              // ------- 処理を行う -------
              // 既にモーションがあれば終了フラグを立てる
              for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
                  var motionQueueEntry = ite.ptr();
                  if (motionQueueEntry == null) {
                      ite = this._motions.erase(ite);
                      continue;
                  }
                  // ----- 終了済みの処理があれば削除する ------
                  motionQueueEntry.release();
                  motionQueueEntry = void 0;
                  motionQueueEntry = null;
                  ite = this._motions.erase(ite); // 削除
              }
          };
          /**
           * 指定したCubismMotionQueueEntryの取得
  
           * @param   motionQueueEntryNumber  モーションの識別番号
           * @return  指定したCubismMotionQueueEntry
           * @return  null   見つからなかった
           */
          CubismMotionQueueManager.prototype.getCubismMotionQueueEntry = function (motionQueueEntryNumber) {
              //------- 処理を行う -------
              // 既にモーションがあれば終了フラグを立てる
              for (var ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.preIncrement()) {
                  var motionQueueEntry = ite.ptr();
                  if (motionQueueEntry == null) {
                      continue;
                  }
                  if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber) {
                      return motionQueueEntry;
                  }
              }
              return null;
          };
          /**
           * イベントを受け取るCallbackの登録
           *
           * @param callback コールバック関数
           * @param customData コールバックに返されるデータ
           */
          CubismMotionQueueManager.prototype.setEventCallback = function (callback, customData) {
              if (customData === void 0) { customData = null; }
              this._eventCallBack = callback;
              this._eventCustomData = customData;
          };
          /**
           * モーションを更新して、モデルにパラメータ値を反映する。
           *
           * @param   model   対象のモデル
           * @param   userTimeSeconds   デルタ時間の積算値[秒]
           * @return  true    モデルへパラメータ値の反映あり
           * @return  false   モデルへパラメータ値の反映なし(モーションの変化なし)
           */
          CubismMotionQueueManager.prototype.doUpdateMotion = function (model, userTimeSeconds) {
            //   console.log("CubismMotionQueueManager doUpdateMotion " + userTimeSeconds);
              userTimeSeconds *= 1;// TODO 加速
              var updated = false;
              // ------- 処理を行う --------
              // 既にモーションがあれば終了フラグを立てる
              for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
                  var motionQueueEntry = ite.ptr();
                  if (motionQueueEntry == null) {
                      ite = this._motions.erase(ite); // 削除
                      continue;
                  }
                  var motion = motionQueueEntry._motion;
                  if (motion == null) {
                      motionQueueEntry.release();
                      motionQueueEntry = void 0;
                      motionQueueEntry = null;
                      ite = this._motions.erase(ite); // 削除
                      continue;
                  }
                  // ------ 値を反映する ------
                  motion.updateParameters(model, motionQueueEntry, userTimeSeconds);
                  updated = true;
                  // ------ ユーザトリガーイベントを検査する ----
                  var firedList = motion.getFiredEvent(motionQueueEntry.getLastCheckEventTime() - motionQueueEntry.getStartTime(), userTimeSeconds - motionQueueEntry.getStartTime());
                  for (var i = 0; i < firedList.getSize(); ++i) {
                      this._eventCallBack(this, firedList.at(i), this._eventCustomData);
                  }
                  motionQueueEntry.setLastCheckEventTime(userTimeSeconds);
                  // ------ 終了済みの処理があれば削除する ------
                  if (motionQueueEntry.isFinished()) {
                      motionQueueEntry.release();
                      motionQueueEntry = void 0;
                      motionQueueEntry = null;
                      ite = this._motions.erase(ite); // 削除
                  }
                  else {
                      ite.preIncrement();
                  }
              }
              return updated;
          };
          return CubismMotionQueueManager;
      }());
      Live2DCubismFramework.CubismMotionQueueManager = CubismMotionQueueManager;
      Live2DCubismFramework.InvalidMotionQueueEntryHandleValue = -1;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })