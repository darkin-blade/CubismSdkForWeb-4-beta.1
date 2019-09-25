/*!************************************************!*\
  !*** ./Framework/model/cubismmodeluserdata.ts ***!
  \************************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _cubismmodeluserdatajson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmodeluserdatajson */ "./Framework/model/cubismmodeluserdatajson.ts");
  /* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
  /* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
  /* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  
  
  var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].CubismFramework;
  var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].csmVector;
  var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmString;
  var CubismModelUserDataJson = _cubismmodeluserdatajson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismModelUserDataJson;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      var ArtMesh = "ArtMesh";
      /**
       * ユーザーデータインターフェース
       *
       * Jsonから読み込んだユーザーデータを記録しておくための構造体
       */
      var CubismModelUserDataNode = /** @class */ (function () {
          function CubismModelUserDataNode() {
          }
          return CubismModelUserDataNode;
      }());
      Live2DCubismFramework.CubismModelUserDataNode = CubismModelUserDataNode;
      /**
       * ユーザデータの管理クラス
       *
       * ユーザデータをロード、管理、検索インターフェイス、解放までを行う。
       */
      var CubismModelUserData = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismModelUserData() {
              this._userDataNodes = new csmVector();
              this._artMeshUserDataNode = new csmVector();
          }
          /**
           * インスタンスの作成
           *
           * @param buffer    userdata3.jsonが読み込まれているバッファ
           * @param size      バッファのサイズ
           * @return 作成されたインスタンス
           */
          CubismModelUserData.create = function (buffer, size) {
              var ret = new CubismModelUserData();
              ret.parseUserData(buffer, size);
              return ret;
          };
          /**
           * インスタンスを破棄する
           *
           * @param modelUserData 破棄するインスタンス
           */
          CubismModelUserData.delete = function (modelUserData) {
              if (modelUserData != null) {
                  modelUserData.release();
                  modelUserData = null;
              }
          };
          /**
           * ArtMeshのユーザーデータのリストの取得
           *
           * @return ユーザーデータリスト
           */
          CubismModelUserData.prototype.getArtMeshUserDatas = function () {
              return this._artMeshUserDataNode;
          };
          /**
           * userdata3.jsonのパース
           *
           * @param buffer    userdata3.jsonが読み込まれているバッファ
           * @param size      バッファのサイズ
           */
          CubismModelUserData.prototype.parseUserData = function (buffer, size) {
              var json = new CubismModelUserDataJson(buffer, size);
              var typeOfArtMesh = CubismFramework.getIdManager().getId(ArtMesh);
              var nodeCount = json.getUserDataCount();
              for (var i = 0; i < nodeCount; i++) {
                  var addNode = new CubismModelUserDataNode();
                  addNode.targetId = json.getUserDataId(i);
                  addNode.targetType = CubismFramework.getIdManager().getId(json.getUserDataTargetType(i));
                  addNode.value = new csmString(json.getUserDataValue(i));
                  this._userDataNodes.pushBack(addNode);
                  if (addNode.targetType == typeOfArtMesh) {
                      this._artMeshUserDataNode.pushBack(addNode);
                  }
              }
              json.release();
              json = void 0;
          };
          /**
           * デストラクタ相当の処理
           *
           * ユーザーデータ構造体配列を解放する
           */
          CubismModelUserData.prototype.release = function () {
              for (var i = 0; i < this._userDataNodes.getSize(); ++i) {
                  this._userDataNodes.set(i, null);
              }
              this._userDataNodes = null;
          };
          return CubismModelUserData;
      }());
      Live2DCubismFramework.CubismModelUserData = CubismModelUserData;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })  