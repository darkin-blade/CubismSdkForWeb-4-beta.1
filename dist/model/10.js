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
  
  
  /***/ }),
  
  /*!****************************************!*\
    !*** ./Framework/model/cubismmodel.ts ***!
    \****************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rendering/cubismrenderer */ "./Framework/rendering/cubismrenderer.ts");
  /* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /* harmony import */ var _type_csmmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/csmmap */ "./Framework/type/csmmap.ts");
  /* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
  /* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  /// <reference path="../../Core/live2dcubismcore.d.ts" />
  
  
  
  
  
  var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismFramework;
  var CubismBlendMode = _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismBlendMode;
  var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].csmVector;
  var csmMap = _type_csmmap__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].csmMap;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * モデル
       *
       * Mocデータから生成されるモデルのクラス。
       */
      var CubismModel = /** @class */ (function () {
          /**
           * コンストラクタ
           * @param model モデル
           */
          function CubismModel(model) {
              this._model = model;
              this._parameterValues = null;
              this._parameterMaximumValues = null;
              this._parameterMinimumValues = null;
              this._partOpacities = null;
              this._savedParameters = new csmVector();
              this._parameterIds = new csmVector();
              this._drawableIds = new csmVector();
              this._partIds = new csmVector();
              this._notExistPartId = new csmMap();
              this._notExistParameterId = new csmMap();
              this._notExistParameterValues = new csmMap();
              this._notExistPartOpacities = new csmMap();
          }
          /**
           * モデルのパラメータの更新
           */
          CubismModel.prototype.update = function () {
              // Update model
              this._model.update();
              this._model.drawables.resetDynamicFlags();
          };
          /**
           * キャンバスの幅を取得する
           */
          CubismModel.prototype.getCanvasWidth = function () {
              if (this._model == null) {
                  return 0.0;
              }
              return this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit;
          };
          /**
           * キャンバスの高さを取得する
           */
          CubismModel.prototype.getCanvasHeight = function () {
              if (this._model == null) {
                  return 0.0;
              }
              return this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit;
          };
          /**
           * パラメータを保存する
           */
          CubismModel.prototype.saveParameters = function () {
              var parameterCount = this._model.parameters.count;
              var savedParameterCount = this._savedParameters.getSize();
              for (var i = 0; i < parameterCount; ++i) {
                  if (i < savedParameterCount) {
                      this._savedParameters.set(i, this._parameterValues[i]);
                  }
                  else {
                      this._savedParameters.pushBack(this._parameterValues[i]);
                  }
              }
          };
          /**
           * モデルを取得
           */
          CubismModel.prototype.getModel = function () {
              return this._model;
          };
          /**
           * パーツのインデックスを取得
           * @param partId パーツのID
           * @return パーツのインデックス
           */
          CubismModel.prototype.getPartIndex = function (partId) {
              var partIndex;
              var partCount = this._model.parts.count;
              for (partIndex = 0; partIndex < partCount; ++partIndex) {
                  if (partId == this._partIds.at(partIndex)) {
                      return partIndex;
                  }
              }
              // モデルに存在していない場合、非存在パーツIDリスト内にあるかを検索し、そのインデックスを返す
              if (this._notExistPartId.isExist(partId)) {
                  return this._notExistPartId.getValue(partId);
              }
              // 非存在パーツIDリストにない場合、新しく要素を追加する
              partIndex = partCount + this._notExistPartId.getSize();
              this._notExistPartId.setValue(partId, partIndex);
              this._notExistPartOpacities.appendKey(partIndex);
              return partIndex;
          };
          /**
           * パーツの個数の取得
           * @return パーツの個数
           */
          CubismModel.prototype.getPartCount = function () {
              var partCount = this._model.parts.count;
              return partCount;
          };
          /**
           * パーツの不透明度の設定(Index)
           * @param partIndex パーツのインデックス
           * @param opacity 不透明度
           */
          CubismModel.prototype.setPartOpacityByIndex = function (partIndex, opacity) {
              if (this._notExistPartOpacities.isExist(partIndex)) {
                  this._notExistPartOpacities.setValue(partIndex, opacity);
                  return;
              }
              // インデックスの範囲内検知
              Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= partIndex && partIndex < this.getPartCount());
              this._partOpacities[partIndex] = opacity;
          };
          /**
           * パーツの不透明度の設定(Id)
           * @param partId パーツのID
           * @param opacity パーツの不透明度
           */
          CubismModel.prototype.setPartOpacityById = function (partId, opacity) {
              // 高速化のためにPartIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
              var index = this.getPartIndex(partId);
              if (index < 0) {
                  return; // パーツがないのでスキップ
              }
              this.setPartOpacityByIndex(index, opacity);
          };
          /**
           * パーツの不透明度の取得(index)
           * @param partIndex パーツのインデックス
           * @return パーツの不透明度
           */
          CubismModel.prototype.getPartOpacityByIndex = function (partIndex) {
              if (this._notExistPartOpacities.isExist(partIndex)) {
                  // モデルに存在しないパーツIDの場合、非存在パーツリストから不透明度を返す。
                  return this._notExistPartOpacities.getValue(partIndex);
              }
              // インデックスの範囲内検知
              Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= partIndex && partIndex < this.getPartCount());
              return this._partOpacities[partIndex];
          };
          /**
           * パーツの不透明度の取得(id)
           * @param partId パーツのＩｄ
           * @return パーツの不透明度
           */
          CubismModel.prototype.getPartOpacityById = function (partId) {
              // 高速化のためにPartIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
              var index = this.getPartIndex(partId);
              if (index < 0) {
                  return 0; // パーツが無いのでスキップ
              }
              return this.getPartOpacityByIndex(index);
          };
          /**
           * パラメータのインデックスの取得
           * @param パラメータID
           * @return パラメータのインデックス
           */
          CubismModel.prototype.getParameterIndex = function (parameterId) {
              var parameterIndex;
              var idCount = this._model.parameters.count;
              for (parameterIndex = 0; parameterIndex < idCount; ++parameterIndex) {
                  if (parameterId != this._parameterIds.at(parameterIndex)) {
                      continue;
                  }
                  return parameterIndex;
              }
              // モデルに存在していない場合、非存在パラメータIDリスト内を検索し、そのインデックスを返す
              if (this._notExistParameterId.isExist(parameterId)) {
                  return this._notExistParameterId.getValue(parameterId);
              }
              // 非存在パラメータIDリストにない場合新しく要素を追加する
              parameterIndex = this._model.parameters.count + this._notExistParameterId.getSize();
              this._notExistParameterId.setValue(parameterId, parameterIndex);
              this._notExistParameterValues.appendKey(parameterIndex);
              return parameterIndex;
          };
          /**
           * パラメータの個数の取得
           * @return パラメータの個数
           */
          CubismModel.prototype.getParameterCount = function () {
              return this._model.parameters.count;
          };
          /**
           * パラメータの最大値の取得
           * @param parameterIndex パラメータのインデックス
           * @return パラメータの最大値
           */
          CubismModel.prototype.getParameterMaximumValue = function (parameterIndex) {
              return this._model.parameters.maximumValues[parameterIndex];
          };
          /**
           * パラメータの最小値の取得
           * @param parameterIndex パラメータのインデックス
           * @return パラメータの最小値
           */
          CubismModel.prototype.getParameterMinimumValue = function (parameterIndex) {
              return this._model.parameters.minimumValues[parameterIndex];
          };
          /**
           * パラメータのデフォルト値の取得
           * @param parameterIndex パラメータのインデックス
           * @return パラメータのデフォルト値
           */
          CubismModel.prototype.getParameterDefaultValue = function (parameterIndex) {
              return this._model.parameters.defaultValues[parameterIndex];
          };
          /**
           * パラメータの値の取得
           * @param parameterIndex    パラメータのインデックス
           * @return パラメータの値
           */
          CubismModel.prototype.getParameterValueByIndex = function (parameterIndex) {
              if (this._notExistParameterValues.isExist(parameterIndex)) {
                  return this._notExistParameterValues.getValue(parameterIndex);
              }
              // インデックスの範囲内検知
              Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= parameterIndex && parameterIndex < this.getParameterCount());
              return this._parameterValues[parameterIndex];
          };
          /**
           * パラメータの値の取得
           * @param parameterId    パラメータのID
           * @return パラメータの値
           */
          CubismModel.prototype.getParameterValueById = function (parameterId) {
              // 高速化のためにparameterIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
              var parameterIndex = this.getParameterIndex(parameterId);
              return this.getParameterValueByIndex(parameterIndex);
          };
          /**
           * パラメータの値の設定
           * @param parameterIndex パラメータのインデックス
           * @param value パラメータの値
           * @param weight 重み
           */
          CubismModel.prototype.setParameterValueByIndex = function (parameterIndex, value, weight) {
              if (weight === void 0) { weight = 1.0; }
              if (this._notExistParameterValues.isExist(parameterIndex)) {
                  this._notExistParameterValues.setValue(parameterIndex, (weight == 1)
                      ? value
                      : (this._notExistParameterValues.getValue(parameterIndex) * (1 - weight)) + (value * weight));
                  return;
              }
              // インデックスの範囲内検知
              Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= parameterIndex && parameterIndex < this.getParameterCount());
              if (this._model.parameters.maximumValues[parameterIndex] < value) {
                  value = this._model.parameters.maximumValues[parameterIndex];
              }
              if (this._model.parameters.minimumValues[parameterIndex] > value) {
                  value = this._model.parameters.minimumValues[parameterIndex];
              }
              this._parameterValues[parameterIndex] = (weight == 1)
                  ? value
                  : this._parameterValues[parameterIndex] = (this._parameterValues[parameterIndex] * (1 - weight)) + (value * weight);
          };
          /**
           * パラメータの値の設定
           * @param parameterId パラメータのID
           * @param value パラメータの値
           * @param weight 重み
           */
          CubismModel.prototype.setParameterValueById = function (parameterId, value, weight) {
              if (weight === void 0) { weight = 1.0; }
              var index = this.getParameterIndex(parameterId);
              this.setParameterValueByIndex(index, value, weight);
          };
          /**
           * パラメータの値の加算(index)
           * @param parameterIndex パラメータインデックス
           * @param value 加算する値
           * @param weight 重み
           */
          CubismModel.prototype.addParameterValueByIndex = function (parameterIndex, value, weight) {
              if (weight === void 0) { weight = 1.0; }
              this.setParameterValueByIndex(parameterIndex, (this.getParameterValueByIndex(parameterIndex) + (value * weight)));
          };
          /**
           * パラメータの値の加算(id)
           * @param parameterId パラメータＩＤ
           * @param value 加算する値
           * @param weight 重み
           */
          CubismModel.prototype.addParameterValueById = function (parameterId, value, weight) {
              if (weight === void 0) { weight = 1.0; }
              var index = this.getParameterIndex(parameterId);
              this.addParameterValueByIndex(index, value, weight);
          };
          /**
           * パラメータの値の乗算
           * @param parameterId パラメータのID
           * @param value 乗算する値
           * @param weight 重み
           */
          CubismModel.prototype.multiplyParameterValueById = function (parameterId, value, weight) {
              if (weight === void 0) { weight = 1.0; }
              var index = this.getParameterIndex(parameterId);
              this.multiplyParameterValueByIndex(index, value, weight);
          };
          /**
           * パラメータの値の乗算
           * @param parameterIndex パラメータのインデックス
           * @param value　乗算する値
           * @param weight 重み
           */
          CubismModel.prototype.multiplyParameterValueByIndex = function (parameterIndex, value, weight) {
              if (weight === void 0) { weight = 1.0; }
              this.setParameterValueByIndex(parameterIndex, (this.getParameterValueByIndex(parameterIndex) * (1.0 + (value - 1.0) * weight)));
          };
          /**
           * Drawableのインデックスの取得
           * @param drawableId DrawableのID
           * @return Drawableのインデックス
           */
          CubismModel.prototype.getDrawableIndex = function (drawableId) {
              var drawableCount = this._model.drawables.count;
              for (var drawableIndex = 0; drawableIndex < drawableCount; ++drawableIndex) {
                  if (this._drawableIds.at(drawableIndex) == drawableId) {
                      return drawableIndex;
                  }
              }
              return -1;
          };
          /**
           * Drawableの個数の取得
           * @return drawableの個数
           */
          CubismModel.prototype.getDrawableCount = function () {
              var drawableCount = this._model.drawables.count;
              return drawableCount;
          };
          /**
           * DrawableのIDを取得する
           * @param drawableIndex Drawableのインデックス
           * @return drawableのID
           */
          CubismModel.prototype.getDrawableId = function (drawableIndex) {
              var parameterIds = this._model.drawables.ids;
              return CubismFramework.getIdManager().getId(parameterIds[drawableIndex]);
          };
          /**
           * Drawableの描画順リストの取得
           * @return Drawableの描画順リスト
           */
          CubismModel.prototype.getDrawableRenderOrders = function () {
              var renderOrders = this._model.drawables.renderOrders;
              return renderOrders;
          };
          /**
           * Drawableのテクスチャインデックスリストの取得
           * @param drawableIndex Drawableのインデックス
           * @return drawableのテクスチャインデックスリスト
           */
          CubismModel.prototype.getDrawableTextureIndices = function (drawableIndex) {
              var textureIndices = this._model.drawables.textureIndices;
              return textureIndices[drawableIndex];
          };
          /**
           * DrawableのVertexPositionsの変化情報の取得
           *
           * 直近のCubismModel.update関数でDrawableの頂点情報が変化したかを取得する。
           *
           * @param   drawableIndex   Drawableのインデックス
           * @retval  true    Drawableの頂点情報が直近のCubismModel.update関数で変化した
           * @retval  false   Drawableの頂点情報が直近のCubismModel.update関数で変化していない
           */
          CubismModel.prototype.getDrawableDynamicFlagVertexPositionsDidChange = function (drawableIndex) {
              var dynamicFlags = this._model.drawables.dynamicFlags;
              return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(dynamicFlags[drawableIndex]);
          };
          /**
           * Drawableの頂点インデックスの個数の取得
           * @param drawableIndex Drawableのインデックス
           * @return drawableの頂点インデックスの個数
           */
          CubismModel.prototype.getDrawableVertexIndexCount = function (drawableIndex) {
              var indexCounts = this._model.drawables.indexCounts;
              return indexCounts[drawableIndex];
          };
          /**
           * Drawableの頂点の個数の取得
           * @param drawableIndex Drawableのインデックス
           * @return drawableの頂点の個数
           */
          CubismModel.prototype.getDrawableVertexCount = function (drawableIndex) {
              var vertexCounts = this._model.drawables.vertexCounts;
              return vertexCounts[drawableIndex];
          };
          /**
           * Drawableの頂点リストの取得
           * @param drawableIndex drawableのインデックス
           * @return drawableの頂点リスト
           */
          CubismModel.prototype.getDrawableVertices = function (drawableIndex) {
              return this.getDrawableVertexPositions(drawableIndex);
          };
          /**
           * Drawableの頂点インデックスリストの取得
           * @param drarableIndex Drawableのインデックス
           * @return drawableの頂点インデックスリスト
           */
          CubismModel.prototype.getDrawableVertexIndices = function (drawableIndex) {
              var indicesArray = this._model.drawables.indices;
              return indicesArray[drawableIndex];
          };
          /**
           * Drawableの頂点リストの取得
           * @param drawableIndex Drawableのインデックス
           * @return drawableの頂点リスト
           */
          CubismModel.prototype.getDrawableVertexPositions = function (drawableIndex) {
              var verticesArray = this._model.drawables.vertexPositions;
              return verticesArray[drawableIndex];
          };
          /**
           * Drawableの頂点のUVリストの取得
           * @param drawableIndex Drawableのインデックス
           * @return drawableの頂点UVリスト
           */
          CubismModel.prototype.getDrawableVertexUvs = function (drawableIndex) {
              var uvsArray = this._model.drawables.vertexUvs;
              return uvsArray[drawableIndex];
          };
          /**
           * Drawableの不透明度の取得
           * @param drawableIndex Drawableのインデックス
           * @return drawableの不透明度
           */
          CubismModel.prototype.getDrawableOpacity = function (drawableIndex) {
              var opacities = this._model.drawables.opacities;
              return opacities[drawableIndex];
          };
          /**
           * Drawableのカリング情報の取得
           * @param drawableIndex Drawableのインデックス
           * @return drawableのカリング情報
           */
          CubismModel.prototype.getDrawableCulling = function (drawableIndex) {
              var constantFlags = this._model.drawables.constantFlags;
              return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(constantFlags[drawableIndex]);
          };
          /**
           * Drawableのブレンドモードを取得
           * @param drawableIndex Drawableのインデックス
           * @return drawableのブレンドモード
           */
          CubismModel.prototype.getDrawableBlendMode = function (drawableIndex) {
              var constantFlags = this._model.drawables.constantFlags;
              return (Live2DCubismCore.Utils.hasBlendAdditiveBit(constantFlags[drawableIndex]))
                  ? CubismBlendMode.CubismBlendMode_Additive
                  : (Live2DCubismCore.Utils.hasBlendMultiplicativeBit(constantFlags[drawableIndex]))
                      ? CubismBlendMode.CubismBlendMode_Multiplicative
                      : CubismBlendMode.CubismBlendMode_Normal;
          };
          /**
           * Drawableのマスクの反転使用の取得
           *
           * Drawableのマスク使用時の反転設定を取得する。
           * マスクを使用しない場合は無視される。
           *
           * @param drawableIndex Drawableのインデックス
           * @return Drawableの反転設定
           */
          CubismModel.prototype.getDrawableInvertedMaskBit = function (drawableIndex) {
              var constantFlags = this._model.drawables.constantFlags;
              return (Live2DCubismCore.Utils.hasIsInvertedMaskBit(constantFlags[drawableIndex]));
          };
          /**
           * Drawableのクリッピングマスクリストの取得
           * @return Drawableのクリッピングマスクリスト
           */
          CubismModel.prototype.getDrawableMasks = function () {
              var masks = this._model.drawables.masks;
              return masks;
          };
          /**
           * Drawableのクリッピングマスクの個数リストの取得
           * @return Drawableのクリッピングマスクの個数リスト
           */
          CubismModel.prototype.getDrawableMaskCounts = function () {
              var maskCounts = this._model.drawables.maskCounts;
              return maskCounts;
          };
          /**
           * クリッピングマスクの使用状態
           *
           * @return true クリッピングマスクを使用している
           * @return false クリッピングマスクを使用していない
           */
          CubismModel.prototype.isUsingMasking = function () {
              for (var d = 0; d < this._model.drawables.count; ++d) {
                  if (this._model.drawables.maskCounts[d] <= 0) {
                      continue;
                  }
                  return true;
              }
              return false;
          };
          /**
           * Drawableの表示情報を取得する
           *
           * @param drawableIndex Drawableのインデックス
           * @return true Drawableが表示
           * @return false Drawableが非表示
           */
          CubismModel.prototype.getDrawableDynamicFlagIsVisible = function (drawableIndex) {
              var dynamicFlags = this._model.drawables.dynamicFlags;
              return Live2DCubismCore.Utils.hasIsVisibleBit(dynamicFlags[drawableIndex]);
          };
          /**
           * DrawableのDrawOrderの変化情報の取得
           *
           * 直近のCubismModel.update関数でdrawableのdrawOrderが変化したかを取得する。
           * drawOrderはartMesh上で指定する0から1000の情報
           * @param drawableIndex drawableのインデックス
           * @return true drawableの不透明度が直近のCubismModel.update関数で変化した
           * @return false drawableの不透明度が直近のCubismModel.update関数で変化している
           */
          CubismModel.prototype.getDrawableDynamicFlagVisibilityDidChange = function (drawableIndex) {
              var dynamicFlags = this._model.drawables.dynamicFlags;
              return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(dynamicFlags[drawableIndex]);
          };
          /**
           * Drawableの不透明度の変化情報の取得
           *
           * 直近のCubismModel.update関数でdrawableの不透明度が変化したかを取得する。
           *
           * @param drawableIndex drawableのインデックス
           * @return true Drawableの不透明度が直近のCubismModel.update関数で変化した
           * @return false Drawableの不透明度が直近のCubismModel.update関数で変化してない
           */
          CubismModel.prototype.getDrawableDynamicFlagOpacityDidChange = function (drawableIndex) {
              var dynamicFlags = this._model.drawables.dynamicFlags;
              return Live2DCubismCore.Utils.hasOpacityDidChangeBit(dynamicFlags[drawableIndex]);
          };
          /**
           * Drawableの描画順序の変化情報の取得
           *
           * 直近のCubismModel.update関数でDrawableの描画の順序が変化したかを取得する。
           *
           * @param drawableIndex Drawableのインデックス
           * @return true Drawableの描画の順序が直近のCubismModel.update関数で変化した
           * @return false Drawableの描画の順序が直近のCubismModel.update関数で変化してない
           */
          CubismModel.prototype.getDrawableDynamicFlagRenderOrderDidChange = function (drawableIndex) {
              var dynamicFlags = this._model.drawables.dynamicFlags;
              return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(dynamicFlags[drawableIndex]);
          };
          /**
           * 保存されたパラメータの読み込み
           */
          CubismModel.prototype.loadParameters = function () {
              var parameterCount = this._model.parameters.count;
              var savedParameterCount = this._savedParameters.getSize();
              if (parameterCount > savedParameterCount) {
                  parameterCount = savedParameterCount;
              }
              for (var i = 0; i < parameterCount; ++i) {
                  this._parameterValues[i] = this._savedParameters.at(i);
              }
          };
          /**
           * 初期化する
           */
          CubismModel.prototype.initialize = function () {
              Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(this._model);
              this._parameterValues = this._model.parameters.values;
              this._partOpacities = this._model.parts.opacities;
              this._parameterMaximumValues = this._model.parameters.maximumValues;
              this._parameterMinimumValues = this._model.parameters.minimumValues;
              {
                  var parameterIds = this._model.parameters.ids;
                  var parameterCount = this._model.parameters.count;
                  this._parameterIds.prepareCapacity(parameterCount);
                  for (var i = 0; i < parameterCount; ++i) {
                      this._parameterIds.pushBack(CubismFramework.getIdManager().getId(parameterIds[i]));
                  }
              }
              {
                  var partIds = this._model.parts.ids;
                  var partCount = this._model.parts.count;
                  this._partIds.prepareCapacity(partCount);
                  for (var i = 0; i < partCount; ++i) {
                      this._partIds.pushBack(CubismFramework.getIdManager().getId(partIds[i]));
                  }
              }
              {
                  var drawableIds = this._model.drawables.ids;
                  var drawableCount = this._model.drawables.count;
                  this._drawableIds.prepareCapacity(drawableCount);
                  for (var i = 0; i < drawableCount; ++i) {
                      this._drawableIds.pushBack(CubismFramework.getIdManager().getId(drawableIds[i]));
                  }
              }
          };
          /**
           * デストラクタ相当の処理
           */
          CubismModel.prototype.release = function () {
              this._model.release();
              this._model = null;
          };
          return CubismModel;
      }());
      Live2DCubismFramework.CubismModel = CubismModel;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
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
  
  
  /***/ }),
  
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
  
  
  /***/ }),
  
  /*!********************************************!*\
    !*** ./Framework/model/cubismusermodel.ts ***!
    \********************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /* harmony import */ var _motion_cubismmotionmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../motion/cubismmotionmanager */ "./Framework/motion/cubismmotionmanager.ts");
  /* harmony import */ var _math_cubismtargetpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/cubismtargetpoint */ "./Framework/math/cubismtargetpoint.ts");
  /* harmony import */ var _math_cubismmodelmatrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/cubismmodelmatrix */ "./Framework/math/cubismmodelmatrix.ts");
  /* harmony import */ var _cubismmoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cubismmoc */ "./Framework/model/cubismmoc.ts");
  /* harmony import */ var _motion_cubismmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../motion/cubismmotion */ "./Framework/motion/cubismmotion.ts");
  /* harmony import */ var _motion_cubismexpressionmotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../motion/cubismexpressionmotion */ "./Framework/motion/cubismexpressionmotion.ts");
  /* harmony import */ var _effect_cubismpose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../effect/cubismpose */ "./Framework/effect/cubismpose.ts");
  /* harmony import */ var _cubismmodeluserdata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cubismmodeluserdata */ "./Framework/model/cubismmodeluserdata.ts");
  /* harmony import */ var _physics_cubismphysics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../physics/cubismphysics */ "./Framework/physics/cubismphysics.ts");
  /* harmony import */ var _effect_cubismbreath__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../effect/cubismbreath */ "./Framework/effect/cubismbreath.ts");
  /* harmony import */ var _effect_cubismeyeblink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../effect/cubismeyeblink */ "./Framework/effect/cubismeyeblink.ts");
  /* harmony import */ var _rendering_cubismrenderer_webgl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rendering/cubismrenderer_webgl */ "./Framework/rendering/cubismrenderer_webgl.ts");
  /* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var CubismRenderer_WebGL = _rendering_cubismrenderer_webgl__WEBPACK_IMPORTED_MODULE_12__["Live2DCubismFramework"].CubismRenderer_WebGL;
  var CubismEyeBlink = _effect_cubismeyeblink__WEBPACK_IMPORTED_MODULE_11__["Live2DCubismFramework"].CubismEyeBlink;
  var CubismBreath = _effect_cubismbreath__WEBPACK_IMPORTED_MODULE_10__["Live2DCubismFramework"].CubismBreath;
  var Constant = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].Constant;
  var CubismPhysics = _physics_cubismphysics__WEBPACK_IMPORTED_MODULE_9__["Live2DCubismFramework"].CubismPhysics;
  var CubismModelUserData = _cubismmodeluserdata__WEBPACK_IMPORTED_MODULE_8__["Live2DCubismFramework"].CubismModelUserData;
  var CubismPose = _effect_cubismpose__WEBPACK_IMPORTED_MODULE_7__["Live2DCubismFramework"].CubismPose;
  var CubismExpressionMotion = _motion_cubismexpressionmotion__WEBPACK_IMPORTED_MODULE_6__["Live2DCubismFramework"].CubismExpressionMotion;
  var CubismMotion = _motion_cubismmotion__WEBPACK_IMPORTED_MODULE_5__["Live2DCubismFramework"].CubismMotion;
  var CubismMoc = _cubismmoc__WEBPACK_IMPORTED_MODULE_4__["Live2DCubismFramework"].CubismMoc;
  var CubismModelMatrix = _math_cubismmodelmatrix__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].CubismModelMatrix;
  var CubismTargetPoint = _math_cubismtargetpoint__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismTargetPoint;
  var CubismMotionManager = _motion_cubismmotionmanager__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionManager;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * ユーザーが実際に使用するモデル
       *
       * ユーザーが実際に使用するモデルの基底クラス。これを継承してユーザーが実装する。
       */
      var CubismUserModel = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismUserModel() {
              // 各変数初期化
              this._moc = null;
              this._model = null;
              this._motionManager = null;
              this._expressionManager = null;
              this._eyeBlink = null;
              this._breath = null;
              this._modelMatrix = null;
              this._pose = null;
              this._dragManager = null;
              this._physics = null;
              this._modelUserData = null;
              this._initialized = false;
              this._updating = false;
              this._opacity = 1.0;
              this._lipsync = true;
              this._lastLipSyncValue = 0.0;
              this._dragX = 0.0;
              this._dragY = 0.0;
              this._accelerationX = 0.0;
              this._accelerationY = 0.0;
              this._accelerationZ = 0.0;
              this._debugMode = false;
              this._renderer = null;
              // モーションマネージャーを作成
              this._motionManager = new CubismMotionManager();
              this._motionManager.setEventCallback(CubismUserModel.cubismDefaultMotionEventCallback, this);
              // 表情マネージャーを作成
              this._expressionManager = new CubismMotionManager();
              // ドラッグによるアニメーション
              this._dragManager = new CubismTargetPoint();
          }
          /**
           * 初期化状態の取得
           *
           * 初期化されている状態か？
           *
           * @return true     初期化されている
           * @return false    初期化されていない
           */
          CubismUserModel.prototype.isInitialized = function () {
              return this._initialized;
          };
          /**
           * 初期化状態の設定
           *
           * 初期化状態を設定する。
           *
           * @param v 初期化状態
           */
          CubismUserModel.prototype.setInitialized = function (v) {
              this._initialized = v;
          };
          /**
           * 更新状態の取得
           *
           * 更新されている状態か？
           *
           * @return true     更新されている
           * @return false    更新されていない
           */
          CubismUserModel.prototype.isUpdating = function () {
              return this._updating;
          };
          /**
           * 更新状態の設定
           *
           * 更新状態を設定する
           *
           * @param v 更新状態
           */
          CubismUserModel.prototype.setUpdating = function (v) {
              this._updating = v;
          };
          /**
           * マウスドラッグ情報の設定
           * @param ドラッグしているカーソルのX位置
           * @param ドラッグしているカーソルのY位置
           */
          CubismUserModel.prototype.setDragging = function (x, y) {
              this._dragManager.set(x, y);
          };
          /**
           * 加速度の情報を設定する
           * @param x X軸方向の加速度
           * @param y Y軸方向の加速度
           * @param z Z軸方向の加速度
           */
          CubismUserModel.prototype.setAcceleration = function (x, y, z) {
              this._accelerationX = x;
              this._accelerationY = y;
              this._accelerationZ = z;
          };
          /**
           * モデル行列を取得する
           * @return モデル行列
           */
          CubismUserModel.prototype.getModelMatrix = function () {
              return this._modelMatrix;
          };
          /**
           * 不透明度の設定
           * @param a 不透明度
           */
          CubismUserModel.prototype.setOpacity = function (a) {
              this._opacity = a;
          };
          /**
           * 不透明度の取得
           * @return 不透明度
           */
          CubismUserModel.prototype.getOpacity = function () {
              return this._opacity;
          };
          /**
           * モデルデータを読み込む
           *
           * @param buffer    moc3ファイルが読み込まれているバッファ
           */
          CubismUserModel.prototype.loadModel = function (buffer) {
              this._moc = CubismMoc.create(buffer);
              this._model = this._moc.createModel();
              this._model.saveParameters();
              if ((this._moc == null) || (this._model == null)) {
                  Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_13__["CubismLogError"])("Failed to CreateModel().");
                  return;
              }
              this._modelMatrix = new CubismModelMatrix(this._model.getCanvasWidth(), this._model.getCanvasHeight());
          };
          /**
           * モーションデータを読み込む
           * @param buffer motion3.jsonファイルが読み込まれているバッファ
           * @param size バッファのサイズ
           * @param name モーションの名前
           * @return モーションクラス
           */
          CubismUserModel.prototype.loadMotion = function (buffer, size, name) {
              return CubismMotion.create(buffer, size);
          };
          /**
           * 表情データの読み込み
           * @param buffer expファイルが読み込まれているバッファ
           * @param size バッファのサイズ
           * @param name 表情の名前
           */
          CubismUserModel.prototype.loadExpression = function (buffer, size, name) {
              return CubismExpressionMotion.create(buffer, size);
          };
          /**
           * ポーズデータの読み込み
           * @param buffer pose3.jsonが読み込まれているバッファ
           * @param size バッファのサイズ
           */
          CubismUserModel.prototype.loadPose = function (buffer, size) {
              this._pose = CubismPose.create(buffer, size);
          };
          /**
           * モデルに付属するユーザーデータを読み込む
           * @param buffer userdata3.jsonが読み込まれているバッファ
           * @param size バッファのサイズ
           */
          CubismUserModel.prototype.loadUserData = function (buffer, size) {
              this._modelUserData = CubismModelUserData.create(buffer, size);
          };
          /**
           * 物理演算データの読み込み
           * @param buffer  physics3.jsonが読み込まれているバッファ
           * @param size    バッファのサイズ
           */
          CubismUserModel.prototype.loadPhysics = function (buffer, size) {
              this._physics = CubismPhysics.create(buffer, size);
          };
          /**
           * 当たり判定の取得
           * @param drawableId 検証したいDrawableのID
           * @param pointX X位置
           * @param pointY Y位置
           * @return true ヒットしている
           * @return false ヒットしていない
           */
          CubismUserModel.prototype.isHit = function (drawableId, pointX, pointY) {
              var drawIndex = this._model.getDrawableIndex(drawableId);
              if (drawIndex < 0) {
                  return false; // 存在しない場合はfalse
              }
              var count = this._model.getDrawableVertexCount(drawIndex);
              var vertices = this._model.getDrawableVertices(drawIndex);
              var left = vertices[0];
              var right = vertices[0];
              var top = vertices[1];
              var bottom = vertices[1];
              for (var j = 1; j < count; ++j) {
                  var x = vertices[Constant.vertexOffset + j * Constant.vertexStep];
                  var y = vertices[Constant.vertexOffset + j * Constant.vertexStep + 1];
                  if (x < left) {
                      left = x; // Min x
                  }
                  if (x > right) {
                      right = x; // Max x
                  }
                  if (y < top) {
                      top = y; // Min y
                  }
                  if (y > bottom) {
                      bottom = y; // Max y
                  }
              }
              var tx = this._modelMatrix.invertTransformX(pointX);
              var ty = this._modelMatrix.invertTransformY(pointY);
              return ((left <= tx) && (tx <= right) && (top <= ty) && (ty <= bottom));
          };
          /**
           * モデルの取得
           * @return モデル
           */
          CubismUserModel.prototype.getModel = function () {
              return this._model;
          };
          /**
           * レンダラの取得
           * @return レンダラ
           */
          CubismUserModel.prototype.getRenderer = function () {
              return this._renderer;
          };
          /**
           * レンダラを作成して初期化を実行する
           */
          CubismUserModel.prototype.createRenderer = function () {
              if (this._renderer) {
                  this.deleteRenderer();
              }
              this._renderer = new CubismRenderer_WebGL();
              this._renderer.initialize(this._model);
          };
          /**
           * レンダラの解放
           */
          CubismUserModel.prototype.deleteRenderer = function () {
              if (this._renderer != null) {
                  this._renderer.release();
                  this._renderer = null;
              }
          };
          /**
           * イベント発火時の標準処理
           *
           * Eventが再生処理時にあった場合の処理をする。
           * 継承で上書きすることを想定している。
           * 上書きしない場合はログ出力をする。
           *
           * @param eventValue 発火したイベントの文字列データ
           */
          CubismUserModel.prototype.motionEventFired = function (eventValue) {
              Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_13__["CubismLogInfo"])("{0}", eventValue.s);
          };
          /**
           * イベント用のコールバック
           *
           * CubismMotionQueueManagerにイベント用に登録するためのCallback。
           * CubismUserModelの継承先のEventFiredを呼ぶ。
           *
           * @param caller 発火したイベントを管理していたモーションマネージャー、比較用
           * @param eventValue 発火したイベントの文字列データ
           * @param customData CubismUserModelを継承したインスタンスを想定
           */
          CubismUserModel.cubismDefaultMotionEventCallback = function (caller, eventValue, customData) {
              var model = customData;
              if (model != null) {
                  model.motionEventFired(eventValue);
              }
          };
          /**
           * デストラクタに相当する処理
           */
          CubismUserModel.prototype.release = function () {
              if (this._motionManager != null) {
                  this._motionManager.release();
                  this._motionManager = null;
              }
              if (this._expressionManager != null) {
                  this._expressionManager.release();
                  this._expressionManager = null;
              }
              if (this._moc != null) {
                  this._moc.deleteModel(this._model);
                  this._moc.release();
                  this._moc = null;
              }
              this._modelMatrix = null;
              CubismPose.delete(this._pose);
              CubismEyeBlink.delete(this._eyeBlink);
              CubismBreath.delete(this._breath);
              this._dragManager = null;
              CubismPhysics.delete(this._physics);
              CubismModelUserData.delete(this._modelUserData);
              this.deleteRenderer();
          };
          return CubismUserModel;
      }());
      Live2DCubismFramework.CubismUserModel = CubismUserModel;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })