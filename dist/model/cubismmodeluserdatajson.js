/*!****************************************************!*\
  !*** ./Framework/model/cubismmodeluserdatajson.ts ***!
  \****************************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubismjson */ "./Framework/utils/cubismjson.ts");
  /* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismFramework;
  var CubismJson = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismJson;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      var Meta = "Meta";
      var UserDataCount = "UserDataCount";
      var TotalUserDataSize = "TotalUserDataSize";
      var UserData = "UserData";
      var Target = "Target";
      var Id = "Id";
      var Value = "Value";
      var CubismModelUserDataJson = /** @class */ (function () {
          /**
           * コンストラクタ
           * @param buffer    userdata3.jsonが読み込まれているバッファ
           * @param size      バッファのサイズ
           */
          function CubismModelUserDataJson(buffer, size) {
              this._json = CubismJson.create(buffer, size);
          }
          /**
           * デストラクタ相当の処理
           */
          CubismModelUserDataJson.prototype.release = function () {
              CubismJson.delete(this._json);
          };
          /**
           * ユーザーデータ個数の取得
           * @return ユーザーデータの個数
           */
          CubismModelUserDataJson.prototype.getUserDataCount = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(UserDataCount).toInt();
          };
          /**
           * ユーザーデータ総文字列数の取得
           *
           * @return ユーザーデータ総文字列数
           */
          CubismModelUserDataJson.prototype.getTotalUserDataSize = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(TotalUserDataSize).toInt();
          };
          /**
           * ユーザーデータのタイプの取得
           *
           * @return ユーザーデータのタイプ
           */
          CubismModelUserDataJson.prototype.getUserDataTargetType = function (i) {
              return this._json.getRoot().getValueByString(UserData).getValueByIndex(i).getValueByString(Target).getRawString();
          };
          /**
           * ユーザーデータのターゲットIDの取得
           *
           * @param i インデックス
           * @return ユーザーデータターゲットID
           */
          CubismModelUserDataJson.prototype.getUserDataId = function (i) {
              return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(UserData).getValueByIndex(i).getValueByString(Id).getRawString());
          };
          /**
           * ユーザーデータの文字列の取得
           *
           * @param i インデックス
           * @return ユーザーデータ
           */
          CubismModelUserDataJson.prototype.getUserDataValue = function (i) {
              return this._json.getRoot().getValueByString(UserData).getValueByIndex(i).getValueByString(Value).getRawString();
          };
          return CubismModelUserDataJson;
      }());
      Live2DCubismFramework.CubismModelUserDataJson = CubismModelUserDataJson;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })