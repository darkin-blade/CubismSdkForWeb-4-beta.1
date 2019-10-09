/*!************************************************!*\
  !*** ./Sample/TypeScript/Demo/src/lappview.ts ***!
  \************************************************/
/*! exports provided: LAppView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAppView", function() { return LAppView; });
  /* harmony import */ var _Framework_math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Framework/math/cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
  /* harmony import */ var _Framework_math_cubismviewmatrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Framework/math/cubismviewmatrix */ "./Framework/math/cubismviewmatrix.ts");
  /* harmony import */ var _touchmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./touchmanager */ "./Sample/TypeScript/Demo/src/touchmanager.ts");
  /* harmony import */ var _lappdefine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lappdefine */ "./Sample/TypeScript/Demo/src/lappdefine.ts");
  /* harmony import */ var _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lapplive2dmanager */ "./Sample/TypeScript/Demo/src/lapplive2dmanager.ts");
  /* harmony import */ var _lappdelegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lappdelegate */ "./Sample/TypeScript/Demo/src/lappdelegate.ts");
  /* harmony import */ var _lappsprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lappsprite */ "./Sample/TypeScript/Demo/src/lappsprite.ts");
  /* harmony import */ var _lapppal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lapppal */ "./Sample/TypeScript/Demo/src/lapppal.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  var Csm_CubismViewMatrix = _Framework_math_cubismviewmatrix__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismViewMatrix;
  var Csm_CubismMatrix44 = _Framework_math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
  
  
  
  
  
  
  /**
   * 描画クラス。
   */
  var LAppView = /** @class */ (function () {
      /**
       * コンストラクタ
       */
      function LAppView() {
          this._programId = null;
          this._back = null;
          this._gear = null;
          // タッチ関係のイベント管理
          this._touchManager = new _touchmanager__WEBPACK_IMPORTED_MODULE_2__["TouchManager"]();
          // デバイス座標からスクリーン座標に変換するための
          this._deviceToScreen = new Csm_CubismMatrix44();
          // 画面の表示の拡大縮小や移動の変換を行う行列
          this._viewMatrix = new Csm_CubismViewMatrix();
      }
      /**
       * 初期化する。
       */
      LAppView.prototype.initialize = function () {
          var width, height;
          width = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].width;
          height = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].height;
          var ratio = height / width;
          var left = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalLeft;
          var right = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalRight;
          var bottom = -ratio;
          var top = ratio;
          this._viewMatrix.setScreenRect(left, right, bottom, top); // デバイスに対応する画面の範囲。 Xの左端、Xの右端、Yの下端、Yの上端
          var screenW = Math.abs(left - right);
          this._deviceToScreen.scaleRelative(screenW / width, -screenW / width);
          this._deviceToScreen.translateRelative(-width * 0.5, -height * 0.5);
          // 表示範囲の設定
          this._viewMatrix.setMaxScale(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewMaxScale); // 限界拡張率
          this._viewMatrix.setMinScale(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewMinScale); // 限界縮小率
          // 表示できる最大範囲
          this._viewMatrix.setMaxScreenRect(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalMaxLeft, _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalMaxRight, _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalMaxBottom, _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalMaxTop);
      };
      /**
       * 解放する
       */
      LAppView.prototype.release = function () {
          this._viewMatrix = null;
          this._touchManager = null;
          this._deviceToScreen = null;
          this._gear.release();
          this._gear = null;
          this._back.release();
          this._back = null;
          _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["gl"].deleteProgram(this._programId);
          this._programId = null;
      };
      /**
       * 描画する。
       */
      LAppView.prototype.render = function () {
          _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["gl"].useProgram(this._programId);
          if (this._back) {
              this._back.render(this._programId);
          }
          if (this._gear) {
              this._gear.render(this._programId);
          }
          _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["gl"].flush();
          var live2DManager = _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__["LAppLive2DManager"].getInstance();
          live2DManager.onUpdate();
      };
      /**
       * 画像の初期化を行う。
       */
      LAppView.prototype.initializeSprite = function () {
          var _this = this;
          var width = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].width;
          var height = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].height;
          var textureManager = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["LAppDelegate"].getInstance().getTextureManager();
          var resourcesPath = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ResourcesPath;
          var imageName = "";
        //   // 背景画像初期化
        //   imageName = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].BackImageName;
        //   // 非同期なのでコールバック関数を作成
        //   var initBackGroundTexture = function (textureInfo) {
        //       var x = width * 0.5;
        //       var y = height * 0.5;
        //       var fwidth = textureInfo.width * 2.0;
        //       var fheight = height * 0.95;
        //       _this._back = new _lappsprite__WEBPACK_IMPORTED_MODULE_6__["LAppSprite"](x, y, fwidth, fheight, textureInfo.id);
        //   };
        //   textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initBackGroundTexture);
        //   // 歯車画像初期化
        //   imageName = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].GearImageName;
        //   var initGearTexture = function (textureInfo) {
        //       var x = width - textureInfo.width * 0.5;
        //       var y = height - textureInfo.height * 0.5;
        //       var fwidth = textureInfo.width;
        //       var fheight = textureInfo.height;
        //       _this._gear = new _lappsprite__WEBPACK_IMPORTED_MODULE_6__["LAppSprite"](x, y, fwidth, fheight, textureInfo.id);
        //   };
        //   textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initGearTexture);
          // シェーダーを作成
          if (this._programId == null) {
              this._programId = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["LAppDelegate"].getInstance().createShader();
          }
      };
      /**
       * タッチされた時に呼ばれる。
       *
       * @param pointX スクリーンX座標
       * @param pointY スクリーンY座標
       */
      LAppView.prototype.onTouchesBegan = function (pointX, pointY) {
          this._touchManager.touchesBegan(pointX, pointY);
      };
      /**
       * タッチしているときにポインタが動いたら呼ばれる。
       *
       * @param pointX スクリーンX座標
       * @param pointY スクリーンY座標
       */
      LAppView.prototype.onTouchesMoved = function (pointX, pointY) {
          var viewX = this.transformViewX(this._touchManager.getX());
          var viewY = this.transformViewY(this._touchManager.getY());
          this._touchManager.touchesMoved(pointX, pointY);
          var live2DManager = _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__["LAppLive2DManager"].getInstance();
          live2DManager.onDrag(viewX, viewY);
      };
      /**
       * タッチが終了したら呼ばれる。
       *
       * @param pointX スクリーンX座標
       * @param pointY スクリーンY座標
       */
      LAppView.prototype.onTouchesEnded = function (pointX, pointY) {
          // タッチ終了
          var live2DManager = _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__["LAppLive2DManager"].getInstance();
          live2DManager.onDrag(0.0, 0.0);
          {
              // シングルタップ
              var x = this._deviceToScreen.transformX(this._touchManager.getX()); // 論理座標変換した座標を取得。
              var y = this._deviceToScreen.transformY(this._touchManager.getY()); // 論理座標変化した座標を取得。
              if (_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].DebugTouchLogEnable) {
                  _lapppal__WEBPACK_IMPORTED_MODULE_7__["LAppPal"].printLog("[APP]touchesEnded x: {0} y: {1}", x, y);
              }
              live2DManager.onTap(x, y);
            //   // 歯車にタップしたか
            //   if (this._gear.isHit(pointX, pointY)) {
            //       live2DManager.nextScene();
            //   }
          }
      };
      /**
       * X座標をView座標に変換する。
       *
       * @param deviceX デバイスX座標
       */
      LAppView.prototype.transformViewX = function (deviceX) {
          var screenX = this._deviceToScreen.transformX(deviceX); // 論理座標変換した座標を取得。
          return this._viewMatrix.invertTransformX(screenX); // 拡大、縮小、移動後の値。
      };
      /**
       * Y座標をView座標に変換する。
       *
       * @param deviceY デバイスY座標
       */
      LAppView.prototype.transformViewY = function (deviceY) {
          var screenY = this._deviceToScreen.transformY(deviceY); // 論理座標変換した座標を取得。
          return this._viewMatrix.invertTransformY(screenY);
      };
      /**
       * X座標をScreen座標に変換する。
       * @param deviceX デバイスX座標
       */
      LAppView.prototype.transformScreenX = function (deviceX) {
          return this._deviceToScreen.transformX(deviceX);
      };
      /**
       * Y座標をScreen座標に変換する。
       *
       * @param deviceY デバイスY座標
       */
      LAppView.prototype.transformScreenY = function (deviceY) {
          return this._deviceToScreen.transformY(deviceY);
      };
      return LAppView;
  }());
  
  
  
  /***/ })