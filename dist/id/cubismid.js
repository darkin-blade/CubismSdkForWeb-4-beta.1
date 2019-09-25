/*!**********************************!*\
  !*** ./Framework/id/cubismid.ts ***!
  \**********************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmString;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * パラメータ名・パーツ名・Drawable名を保持
       *
       * パラメータ名・パーツ名・Drawable名を保持するクラス。
       */
      var CubismId = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismId(id) {
              if (typeof (id) === 'string') {
                  this._id = new csmString(id);
                  return;
              }
              this._id = id;
          }
          /**
           * ID名を取得する
           */
          CubismId.prototype.getString = function () {
              return this._id;
          };
          /**
           * idを比較
           * @param c 比較するid
           * @return 同じならばtrue,異なっていればfalseを返す
           */
          CubismId.prototype.isEqual = function (c) {
              if (typeof (c) === 'string') {
                  return this._id.isEqual(c);
              }
              else if (c instanceof csmString) {
                  return this._id.isEqual(c.s);
              }
              else if (c instanceof CubismId) {
                  return this._id.isEqual(c._id.s);
              }
              return false;
          };
          /**
           * idを比較
           * @param c 比較するid
           * @return 同じならばtrue,異なっていればfalseを返す
           */
          CubismId.prototype.isNotEqual = function (c) {
              if (typeof (c) == 'string') {
                  return !this._id.isEqual(c);
              }
              else if (c instanceof csmString) {
                  return !this._id.isEqual(c.s);
              }
              else if (c instanceof CubismId) {
                  return !this._id.isEqual(c._id.s);
              }
              return false;
          };
          return CubismId;
      }());
      Live2DCubismFramework.CubismId = CubismId;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })  