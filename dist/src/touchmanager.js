/*!****************************************************!*\
  !*** ./Sample/TypeScript/Demo/src/touchmanager.ts ***!
  \****************************************************/
/*! exports provided: TouchManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchManager", function() { return TouchManager; });
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  var TouchManager = /** @class */ (function () {
      /**
       * コンストラクタ
       */
      function TouchManager() {
          this._startX = 0.0;
          this._startY = 0.0;
          this._lastX = 0.0;
          this._lastY = 0.0;
          this._lastX1 = 0.0;
          this._lastY1 = 0.0;
          this._lastX2 = 0.0;
          this._lastY2 = 0.0;
          this._lastTouchDistance = 0.0;
          this._deltaX = 0.0;
          this._deltaY = 0.0;
          this._scale = 1.0;
          this._touchSingle = false;
          this._flipAvailable = false;
      }
      TouchManager.prototype.getCenterX = function () {
          return this._lastX;
      };
      TouchManager.prototype.getCenterY = function () {
          return this._lastY;
      };
      TouchManager.prototype.getDeltaX = function () {
          return this._deltaX;
      };
      TouchManager.prototype.getDeltaY = function () {
          return this._deltaY;
      };
      TouchManager.prototype.getStartX = function () {
          return this._startX;
      };
      TouchManager.prototype.getStartY = function () {
          return this._startY;
      };
      TouchManager.prototype.getScale = function () {
          return this._scale;
      };
      TouchManager.prototype.getX = function () {
          return this._lastX;
      };
      TouchManager.prototype.getY = function () {
          return this._lastY;
      };
      TouchManager.prototype.getX1 = function () {
          return this._lastX1;
      };
      TouchManager.prototype.getY1 = function () {
          return this._lastY1;
      };
      TouchManager.prototype.getX2 = function () {
          return this._lastX2;
      };
      TouchManager.prototype.getY2 = function () {
          return this._lastY2;
      };
      TouchManager.prototype.isSingleTouch = function () {
          return this._touchSingle;
      };
      TouchManager.prototype.isFlickAvailable = function () {
          return this._flipAvailable;
      };
      TouchManager.prototype.disableFlick = function () {
          this._flipAvailable = false;
      };
      /**
       * タッチ開始時イベント
       * @param deviceX タッチした画面のxの値
       * @param deviceY タッチした画面のyの値
       */
      TouchManager.prototype.touchesBegan = function (deviceX, deviceY) {
          this._lastX = deviceX;
          this._lastY = deviceY;
          this._startX = deviceX;
          this._startY = deviceY;
          this._lastTouchDistance = -1.0;
          this._flipAvailable = true;
          this._touchSingle = true;
      };
      /**
       * ドラッグ時のイベント
       * @param deviceX タッチした画面のxの値
       * @param deviceY タッチした画面のyの値
       */
      TouchManager.prototype.touchesMoved = function (deviceX, deviceY) {
          this._lastX = deviceX;
          this._lastY = deviceY;
          this._lastTouchDistance = -1.0;
          this._touchSingle = true;
      };
      /**
       * フリックの距離測定
       * @return フリック距離
       */
      TouchManager.prototype.getFlickDistance = function () {
          return this.calculateDistance(this._startX, this._startY, this._lastX, this._lastY);
      };
      /**
       * 点１から点２への距離を求める
       *
       * @param x1 １つ目のタッチした画面のxの値
       * @param y1 １つ目のタッチした画面のyの値
       * @param x2 ２つ目のタッチした画面のxの値
       * @param y2 ２つ目のタッチした画面のyの値
       */
      TouchManager.prototype.calculateDistance = function (x1, y1, x2, y2) {
          return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
      };
      /**
       * ２つ目の値から、移動量を求める。
       * 違う方向の場合は移動量０。同じ方向の場合は、絶対値が小さい方の値を参照する。
       *
       * @param v1 １つ目の移動量
       * @param v2 ２つ目の移動量
       *
       * @return 小さい方の移動量
       */
      TouchManager.prototype.calculateMovingAmount = function (v1, v2) {
          if ((v1 > 0.0) != (v2 > 0.0)) {
              return 0.0;
          }
          var sign = v1 > 0.0 ? 1.0 : -1.0;
          var absoluteValue1 = Math.abs(v1);
          var absoluteValue2 = Math.abs(v2);
          return sign * ((absoluteValue1 < absoluteValue2) ? absoluteValue1 : absoluteValue2);
      };
      return TouchManager;
  }());
  
  
  
  /***/ })