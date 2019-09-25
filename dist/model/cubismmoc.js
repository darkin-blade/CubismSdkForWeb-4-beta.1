/*!**************************************!*\
  !*** ./Framework/model/cubismmoc.ts ***!
  \**************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _cubismmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmodel */ "./Framework/model/cubismmodel.ts");
  /* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  /// <reference path="../../Core/live2dcubismcore.d.ts" />
  
  var CubismModel = _cubismmodel__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismModel;
  
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * Mocデータの管理
       *
       * Mocデータの管理を行うクラス。
       */
      var CubismMoc = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismMoc(moc) {
              this._moc = moc;
              this._modelCount = 0;
          }
          /**
           * Mocデータの作成
           */
          CubismMoc.create = function (mocBytes) {
              var cubismMoc = null;
              var moc = Live2DCubismCore.Moc.fromArrayBuffer(mocBytes);
              if (moc) {
                  cubismMoc = new CubismMoc(moc);
              }
              return cubismMoc;
          };
          /**
           * Mocデータを削除
           *
           * Mocデータを削除する
           */
          CubismMoc.delete = function (moc) {
              moc._moc._release();
              moc._moc = null;
              moc = null;
          };
          /**
           * モデルを作成する
           *
           * @return Mocデータから作成されたモデル
           */
          CubismMoc.prototype.createModel = function () {
              var cubismModel = null;
              var model = Live2DCubismCore.Model.fromMoc(this._moc);
              if (model) {
                  cubismModel = new CubismModel(model);
                  cubismModel.initialize();
                  ++this._modelCount;
              }
              return cubismModel;
          };
          /**
           * モデルを削除する
           */
          CubismMoc.prototype.deleteModel = function (model) {
              if (model != null) {
                  model.release();
                  model = null;
                  --this._modelCount;
              }
          };
          /**
           * デストラクタ相当の処理
           */
          CubismMoc.prototype.release = function () {
              Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_1__["CSM_ASSERT"])(this._modelCount == 0);
              this._moc._release();
              this._moc = null;
          };
          return CubismMoc;
      }());
      Live2DCubismFramework.CubismMoc = CubismMoc;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })  