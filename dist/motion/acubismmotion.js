/*!*******************************************!*\
  !*** ./Framework/motion/acubismmotion.ts ***!
  \*******************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _math_cubismmath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/cubismmath */ "./Framework/math/cubismmath.ts");
  /* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
  /* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  
  var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
  var CubismMath = _math_cubismmath__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMath;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * モーションの抽象基底クラス
       *
       * モーションの抽象基底クラス。MotionQueueManagerによってモーションの再生を管理する。
       */
      var ACubismMotion = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function ACubismMotion() {
              this._fadeInSeconds = -1.0;
              this._fadeOutSeconds = -1.0;
              this._weight = 1.0;
              this._offsetSeconds = 0.0; // 再生の開始時刻
              this._firedEventValues = new csmVector();
          }
          /**
           * インスタンスの破棄
           */
          ACubismMotion.delete = function (motion) {
              motion.release();
              motion = void 0;
              motion = null;
          };
          /**
           * デストラクタ相当の処理
           */
          ACubismMotion.prototype.release = function () {
              this._weight = 0.0;
          };
          /**
           * モデルのパラメータ
           * @param model 対象のモデル
           * @param motionQueueEntry CubismMotionQueueManagerで管理されているモーション
           * @param userTimeSeconds デルタ時間の積算値[秒]
           */
          ACubismMotion.prototype.updateParameters = function (model, motionQueueEntry, userTimeSeconds) {
              if (!motionQueueEntry.isAvailable() || motionQueueEntry.isFinished()) {
                  return;
              }
              if (!motionQueueEntry.isStarted()) {
                  motionQueueEntry.setIsStarted(true);
                  motionQueueEntry.setStartTime(userTimeSeconds - this._offsetSeconds); // モーションの開始時刻を記録
                  motionQueueEntry.setFadeInStartTime(userTimeSeconds); // フェードインの開始時刻
                  var duration = this.getDuration();
                  if (motionQueueEntry.getEndTime() < 0) {
                      // 開始していないうちに終了設定している場合がある。
                      motionQueueEntry.setEndTime((duration <= 0) ? -1 : motionQueueEntry.getStartTime() + duration);
                      // duration == -1 の場合はループする
                  }
              }
              var fadeWeight = this._weight; // 現在の値と掛け合わせる割合
              //---- フェードイン・アウトの処理 ----
              // 単純なサイン関数でイージングする
              var fadeIn = this._fadeInSeconds == 0.0
                  ? 1.0
                  : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / this._fadeInSeconds);
              var fadeOut = (this._fadeOutSeconds == 0.0 || motionQueueEntry.getEndTime() < 0.0)
                  ? 1.0
                  : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / this._fadeOutSeconds);
              fadeWeight = fadeWeight * fadeIn * fadeOut;
              motionQueueEntry.setState(userTimeSeconds, fadeWeight);
              Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_2__["CSM_ASSERT"])(0.0 <= fadeWeight && fadeWeight <= 1.0);
              //---- 全てのパラメータIDをループする ----
              this.doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry);
              // 後処理
              // 終了時刻を過ぎたら終了フラグを立てる(CubismMotionQueueManager)
              if ((motionQueueEntry.getEndTime() > 0) && (motionQueueEntry.getEndTime() < userTimeSeconds)) {
                  motionQueueEntry.setIsFinished(true); // 終了
              }
          };
          /**
           * フェードインの時間を設定する
           * @param fadeInSeconds フェードインにかかる時間[秒]
           */
          ACubismMotion.prototype.setFadeInTime = function (fadeInSeconds) {
              this._fadeInSeconds = fadeInSeconds;
          };
          /**
           * フェードアウトの時間を設定する
           * @param fadeOutSeconds フェードアウトにかかる時間[秒]
           */
          ACubismMotion.prototype.setFadeOutTime = function (fadeOutSeconds) {
              this._fadeOutSeconds = fadeOutSeconds;
          };
          /**
           * フェードアウトにかかる時間の取得
           * @return フェードアウトにかかる時間[秒]
           */
          ACubismMotion.prototype.getFadeOutTime = function () {
              return this._fadeOutSeconds;
          };
          /**
           * フェードインにかかる時間の取得
           * @return フェードインにかかる時間[秒]
           */
          ACubismMotion.prototype.getFadeInTime = function () {
              return this._fadeInSeconds;
          };
          /**
           * モーション適用の重みの設定
           * @param weight 重み（0.0 - 1.0）
           */
          ACubismMotion.prototype.setWeight = function (weight) {
              this._weight = weight;
          };
          /**
           * モーション適用の重みの取得
           * @return 重み（0.0 - 1.0）
           */
          ACubismMotion.prototype.getWeight = function () {
              return this._weight;
          };
          /**
           * モーションの長さの取得
           * @return モーションの長さ[秒]
           *
           * @note ループの時は「-1」。
           *       ループでない場合は、オーバーライドする。
           *       正の値の時は取得される時間で終了する。
           *       「-1」の時は外部から停止命令がない限り終わらない処理となる。
           */
          ACubismMotion.prototype.getDuration = function () {
              return -1.0;
          };
          /**
           * モーションのループ1回分の長さの取得
           * @return モーションのループ一回分の長さ[秒]
           *
           * @note ループしない場合は、getDuration()と同じ値を返す
           *       ループ一回分の長さが定義できない場合(プログラム的に動き続けるサブクラスなど)の場合は「-1」を返す
           */
          ACubismMotion.prototype.getLoopDuration = function () {
              return -1.0;
          };
          /**
           * モーション再生の開始時刻の設定
           * @param offsetSeconds モーション再生の開始時刻[秒]
           */
          ACubismMotion.prototype.setOffsetTime = function (offsetSeconds) {
              this._offsetSeconds = offsetSeconds;
          };
          /**
           * モデルのパラメータ更新
           *
           * イベント発火のチェック。
           * 入力する時間は呼ばれるモーションタイミングを０とした秒数で行う。
           *
           * @param beforeCheckTimeSeconds 前回のイベントチェック時間[秒]
           * @param motionTimeSeconds 今回の再生時間[秒]
           */
          ACubismMotion.prototype.getFiredEvent = function (beforeCheckTimeSeconds, motionTimeSeconds) {
              return this._firedEventValues;
          };
          return ACubismMotion;
      }());
      Live2DCubismFramework.ACubismMotion = ACubismMotion;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })