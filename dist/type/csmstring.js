/*!*************************************!*\
  !*** ./Framework/type/csmstring.ts ***!
  \*************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * 文字列クラス。
       */
      var csmString = /** @class */ (function () {
          /**
           * 引数付きコンストラクタ
           */
          function csmString(s) {
              this.s = s;
          }
          /**
           * 文字列を後方に追加する
           *
           * @param c 追加する文字列
           * @return 更新された文字列
           */
          csmString.prototype.append = function (c, length) {
              this.s += (length !== undefined)
                  ? c.substr(0, length)
                  : c;
              return this;
          };
          /**
           * 文字サイズを拡張して文字を埋める
           * @param length    拡張する文字数
           * @param v         埋める文字
           * @return 更新された文字列
           */
          csmString.prototype.expansion = function (length, v) {
              var ret = this;
              for (var i = 0; i < length; i++) {
                  ret.append(v);
              }
              return ret;
          };
          /**
           * 文字列の長さをバイト数で取得する
           */
          csmString.prototype.getBytes = function () {
              return encodeURIComponent(this.s).replace(/%../g, "x").length;
          };
          /**
           * 文字列の長さを返す
           */
          csmString.prototype.getLength = function () {
              return this.s.length;
          };
          /**
           * 文字列比較　<
           * @param s 比較する文字列
           * @return true:    比較する文字列より小さい
           * @return false:   比較する文字列より大きい
           */
          csmString.prototype.isLess = function (s) {
              return this.s < s.s;
          };
          /**
           * 文字列比較 >
           * @param s 比較する文字列
           * @return true:    比較する文字列より大きい
           * @return false:   比較する文字列より小さい
           */
          csmString.prototype.isGreat = function (s) {
              return this.s > s.s;
          };
          /**
           * 文字列比較 ==
           * @param s 比較する文字列
           * @return true:    比較する文字列と等しい
           * @return false:   比較する文字列と異なる
           */
          csmString.prototype.isEqual = function (s) {
              return this.s == s;
          };
          /**
           * 文字列が空かどうか
           * @return true: 空の文字列
           * @return false: 値が設定されている
           */
          csmString.prototype.isEmpty = function () {
              return this.s.length == 0;
          };
          return csmString;
      }());
      Live2DCubismFramework.csmString = csmString;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })