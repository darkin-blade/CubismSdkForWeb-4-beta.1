/*!*********************************************************!*\
  !*** ./Sample/TypeScript/Demo/src/lapplive2dmanager.ts ***!
  \*********************************************************/
/*! exports provided: s_instance, LAppLive2DManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ // TODO __webpack_require__.d(__webpack_exports__, "s_instance", function() { return s_instance; });
  /* harmony export (binding) */ // TODO __webpack_require__.d(__webpack_exports__, "LAppLive2DManager", function() { return LAppLive2DManager; });
  /* harmony import */ var _Framework_math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Framework/math/cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
  /* harmony import */ var _Framework_type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Framework/type/csmvector */ "./Framework/type/csmvector.ts");
  /* harmony import */ var _lappmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lappmodel */ "./Sample/TypeScript/Demo/src/lappmodel.ts");
  /* harmony import */ var _lappdefine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lappdefine */ "./Sample/TypeScript/Demo/src/lappdefine.ts");
  /* harmony import */ var _lapppal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lapppal */ "./Sample/TypeScript/Demo/src/lapppal.ts");
  /* harmony import */ var _lappdelegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lappdelegate */ "./Sample/TypeScript/Demo/src/lappdelegate.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  var Csm_csmVector = _Framework_type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
  var Csm_CubismMatrix44 = _Framework_math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
  
  
  
  
  var s_instance = null;
  /**
   * サンプルアプリケーションにおいてCubismModelを管理するクラス
   * モデル生成と破棄、タップイベントの処理、モデル切り替えを行う。
   */
  var LAppLive2DManager = /** @class */ (function () {
      /**
       * コンストラクタ
       */
      function LAppLive2DManager() {
          this._viewMatrix = new Csm_CubismMatrix44();
          this._models = new Csm_csmVector();
          this._sceneIndex = 0;
          this.changeScene(this._sceneIndex);
      }
      /**
       * クラスのインスタンス（シングルトン）を返す。
       * インスタンスが生成されていない場合は内部でインスタンスを生成する。
       *
       * @return クラスのインスタンス
       */
      LAppLive2DManager.getInstance = function () {
          if (s_instance == null) {
              s_instance = new LAppLive2DManager();
          }
          return s_instance;
      };
      /**
       * クラスのインスタンス（シングルトン）を解放する。
       */
      LAppLive2DManager.releaseInstance = function () {
          if (s_instance != null) {
              s_instance = void 0;
          }
          s_instance = null;
      };
      /**
       * 現在のシーンで保持しているモデルを返す。
       *
       * @param no モデルリストのインデックス値
       * @return モデルのインスタンスを返す。インデックス値が範囲外の場合はNULLを返す。
       */
      LAppLive2DManager.prototype.getModel = function (no) {
          if (no < this._models.getSize()) {
              return this._models.at(no);
          }
          return null;
      };
      /**
       * 現在のシーンで保持しているすべてのモデルを解放する
       */
      LAppLive2DManager.prototype.releaseAllModel = function () {
          for (var i = 0; i < this._models.getSize(); i++) {
              this._models.at(i).release();
              this._models.set(i, null);
          }
          this._models.clear();
      };
      /**
       * 画面をドラッグした時の処理
       *
       * @param x 画面のX座標
       * @param y 画面のY座標
       */
      LAppLive2DManager.prototype.onDrag = function (x, y) {
        //   console.log("LAppLive2DManager onDarg (" + x + ", " + y + ")");
          for (var i = 0; i < this._models.getSize(); i++) {
              var model = this.getModel(i);
              if (model) {
                  model.setDragging(x, y);
              }
          }
      };
      /**
       * 画面をタップした時の処理
       *
       * @param x 画面のX座標
       * @param y 画面のY座標
       */
      LAppLive2DManager.prototype.onTap = function (x, y) {
          var scale_rate = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ScaleRate;
          x /= scale_rate;
          y /= scale_rate;
          console.log("LAppLive2DManager onTap");
          if (_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].DebugLogEnable) {
              _lapppal__WEBPACK_IMPORTED_MODULE_4__["LAppPal"].printLog("[APP]tap point: {x: {0} y: {1}}", x.toFixed(2), y.toFixed(2));
          }
          for (var i = 0; i < this._models.getSize(); i++) {
              if (this._models.at(i).hitTest(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].HitAreaNameHead, x, y)) {
                  if (_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].DebugLogEnable) {
                      _lapppal__WEBPACK_IMPORTED_MODULE_4__["LAppPal"].printLog("[APP]hit area: [{0}]", _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].HitAreaNameHead);
                  }
                  this._models.at(i).setRandomExpression();
              }
              else if (this._models.at(i).hitTest(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].HitAreaNameBody, x, y)) {
                  if (_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].DebugLogEnable) {
                      _lapppal__WEBPACK_IMPORTED_MODULE_4__["LAppPal"].printLog("[APP]hit area: [{0}]", _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].HitAreaNameBody);
                  }
                  this._models.at(i).startRandomMotion(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].MotionGroupTapBody, _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].PriorityNormal);
              }
          }
      };
      /**
       * 画面を更新するときの処理
       * モデルの更新処理及び描画処理を行う
       */
      LAppLive2DManager.prototype.onUpdate = function () {
          var projection = new Csm_CubismMatrix44();
          var width, height;
          width = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].width;
          height = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].height;
        //   console.log("LAppLive2DManager onUpdate: " + width + ", " + height);
          var scale_rate = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ScaleRate;
          projection.scale(scale_rate, width / height * scale_rate);// 调整放缩倍数
          // projection.scale(1.0, width / height * 1);
          if (this._viewMatrix != null) {
              projection.multiplyByMatrix(this._viewMatrix);
          }
          var saveProjection = projection.clone();
          var modelCount = this._models.getSize();
          for (var i = 0; i < modelCount; ++i) {
              var model = this.getModel(i);
              projection = saveProjection.clone();
              model.update();
              model.draw(projection); // 参照渡しなのでprojectionは変質する。
          }
      };
      /**
       * 次のシーンに切りかえる
       * サンプルアプリケーションではモデルセットの切り替えを行う。
       */
      LAppLive2DManager.prototype.nextScene = function () {
          var no = (this._sceneIndex + 1) % _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ModelDirSize;
          this.changeScene(no);
      };
      /**
       * シーンを切り替える
       * サンプルアプリケーションではモデルセットの切り替えを行う。
       */
      LAppLive2DManager.prototype.changeScene = function (index) {
          this._sceneIndex = index;
          if (_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].DebugLogEnable) {
              _lapppal__WEBPACK_IMPORTED_MODULE_4__["LAppPal"].printLog("[APP]model index: {0}", this._sceneIndex);
          }
          // ModelDir[]に保持したディレクトリ名から
          // model3.jsonのパスを決定する。
          // ディレクトリ名とmodel3.jsonの名前を一致させておくこと。
          var model = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ModelDir[index];
          var modelPath = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ResourcesPath + model + "/";
          var modelJsonName = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ModelDir[index];
          modelJsonName += ".model3.json";
          this.releaseAllModel();
          this._models.pushBack(new _lappmodel__WEBPACK_IMPORTED_MODULE_2__["LAppModel"]());
          this._models.at(0).loadAssets(modelPath, modelJsonName);
      };
      return LAppLive2DManager;
  }());
  
  
  
  /***/ })