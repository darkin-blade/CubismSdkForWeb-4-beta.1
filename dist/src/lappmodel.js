/*!*************************************************!*\
  !*** ./Sample/TypeScript/Demo/src/lappmodel.ts ***!
  \*************************************************/
/*! exports provided: LAppModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAppModel", function() { return LAppModel; });
  /* harmony import */ var _Framework_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Framework/live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /* harmony import */ var _Framework_model_cubismusermodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Framework/model/cubismusermodel */ "./Framework/model/cubismusermodel.ts");
  /* harmony import */ var _Framework_cubismmodelsettingjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Framework/cubismmodelsettingjson */ "./Framework/cubismmodelsettingjson.ts");
  /* harmony import */ var _Framework_cubismdefaultparameterid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Framework/cubismdefaultparameterid */ "./Framework/cubismdefaultparameterid.ts");
  /* harmony import */ var _Framework_motion_acubismmotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Framework/motion/acubismmotion */ "./Framework/motion/acubismmotion.ts");
  /* harmony import */ var _Framework_effect_cubismeyeblink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Framework/effect/cubismeyeblink */ "./Framework/effect/cubismeyeblink.ts");
  /* harmony import */ var _Framework_effect_cubismbreath__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Framework/effect/cubismbreath */ "./Framework/effect/cubismbreath.ts");
  /* harmony import */ var _Framework_type_csmvector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Framework/type/csmvector */ "./Framework/type/csmvector.ts");
  /* harmony import */ var _Framework_type_csmmap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Framework/type/csmmap */ "./Framework/type/csmmap.ts");
  /* harmony import */ var _Framework_utils_cubismstring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../Framework/utils/cubismstring */ "./Framework/utils/cubismstring.ts");
  /* harmony import */ var _Framework_motion_cubismmotionqueuemanager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Framework/motion/cubismmotionqueuemanager */ "./Framework/motion/cubismmotionqueuemanager.ts");
  /* harmony import */ var _Framework_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../Framework/utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
  /* harmony import */ var _lappdefine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lappdefine */ "./Sample/TypeScript/Demo/src/lappdefine.ts");
  /* harmony import */ var _lapppal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lapppal */ "./Sample/TypeScript/Demo/src/lapppal.ts");
  /* harmony import */ var _lappdelegate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lappdelegate */ "./Sample/TypeScript/Demo/src/lappdelegate.ts");
  /* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  var __extends = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  
  
  
  
  
  
  
  
  
  
  
  
  var InvalidMotionQueueEntryHandleValue = _Framework_motion_cubismmotionqueuemanager__WEBPACK_IMPORTED_MODULE_10__["Live2DCubismFramework"].InvalidMotionQueueEntryHandleValue;
  var CubismString = _Framework_utils_cubismstring__WEBPACK_IMPORTED_MODULE_9__["Live2DCubismFramework"].CubismString;
  var csmMap = _Framework_type_csmmap__WEBPACK_IMPORTED_MODULE_8__["Live2DCubismFramework"].csmMap;
  var csmVector = _Framework_type_csmvector__WEBPACK_IMPORTED_MODULE_7__["Live2DCubismFramework"].csmVector;
  var CubismBreath = _Framework_effect_cubismbreath__WEBPACK_IMPORTED_MODULE_6__["Live2DCubismFramework"].CubismBreath;
  var BreathParameterData = _Framework_effect_cubismbreath__WEBPACK_IMPORTED_MODULE_6__["Live2DCubismFramework"].BreathParameterData;
  var CubismEyeBlink = _Framework_effect_cubismeyeblink__WEBPACK_IMPORTED_MODULE_5__["Live2DCubismFramework"].CubismEyeBlink;
  var ACubismMotion = _Framework_motion_acubismmotion__WEBPACK_IMPORTED_MODULE_4__["Live2DCubismFramework"].ACubismMotion;
  var CubismFramework = _Framework_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework;
  var CubismUserModel = _Framework_model_cubismusermodel__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismUserModel;
  var CubismModelSettingJson = _Framework_cubismmodelsettingjson__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismModelSettingJson;
  var CubismDefaultParameterId = _Framework_cubismdefaultparameterid__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"];
  
  
  
  
  function createBuffer(path, callBack) {
      _lapppal__WEBPACK_IMPORTED_MODULE_13__["LAppPal"].loadFileAsBytes(path, callBack);
  }
  function deleteBuffer(buffer, path) {
      if (path === void 0) { path = ""; }
      _lapppal__WEBPACK_IMPORTED_MODULE_13__["LAppPal"].releaseBytes(buffer);
  }
  var LoadStep;
  (function (LoadStep) {
      LoadStep[LoadStep["LoadAssets"] = 0] = "LoadAssets";
      LoadStep[LoadStep["LoadModel"] = 1] = "LoadModel";
      LoadStep[LoadStep["WaitLoadModel"] = 2] = "WaitLoadModel";
      LoadStep[LoadStep["LoadExpression"] = 3] = "LoadExpression";
      LoadStep[LoadStep["WaitLoadExpression"] = 4] = "WaitLoadExpression";
      LoadStep[LoadStep["LoadPhysics"] = 5] = "LoadPhysics";
      LoadStep[LoadStep["WaitLoadPhysics"] = 6] = "WaitLoadPhysics";
      LoadStep[LoadStep["LoadPose"] = 7] = "LoadPose";
      LoadStep[LoadStep["WaitLoadPose"] = 8] = "WaitLoadPose";
      LoadStep[LoadStep["SetupEyeBlink"] = 9] = "SetupEyeBlink";
      LoadStep[LoadStep["SetupBreath"] = 10] = "SetupBreath";
      LoadStep[LoadStep["LoadUserData"] = 11] = "LoadUserData";
      LoadStep[LoadStep["WaitLoadUserData"] = 12] = "WaitLoadUserData";
      LoadStep[LoadStep["SetupEyeBlinkIds"] = 13] = "SetupEyeBlinkIds";
      LoadStep[LoadStep["SetupLipSyncIds"] = 14] = "SetupLipSyncIds";
      LoadStep[LoadStep["SetupLayout"] = 15] = "SetupLayout";
      LoadStep[LoadStep["LoadMotion"] = 16] = "LoadMotion";
      LoadStep[LoadStep["WaitLoadMotion"] = 17] = "WaitLoadMotion";
      LoadStep[LoadStep["CompleteInitialize"] = 18] = "CompleteInitialize";
      LoadStep[LoadStep["CompleteSetupModel"] = 19] = "CompleteSetupModel";
      LoadStep[LoadStep["LoadTexture"] = 20] = "LoadTexture";
      LoadStep[LoadStep["WaitLoadTexture"] = 21] = "WaitLoadTexture";
      LoadStep[LoadStep["CompleteSetup"] = 22] = "CompleteSetup";
  })(LoadStep || (LoadStep = {}));
  /**
   * ユーザーが実際に使用するモデルの実装クラス<br>
   * モデル生成、機能コンポーネント生成、更新処理とレンダリングの呼び出しを行う。
   */
  var LAppModel = /** @class */ (function (_super) {
      __extends(LAppModel, _super);
      /**
       * コンストラクタ
       */
      function LAppModel() {
          console.log("LAppModel");
          var _this = _super.call(this) || this;
          _this._modelSetting = null;
          _this._modelHomeDir = null;
          _this._userTimeSeconds = 0.0;
          _this._eyeBlinkIds = new csmVector();
          _this._lipSyncIds = new csmVector();
          _this._motions = new csmMap();
          _this._expressions = new csmMap();
          _this._hitArea = new csmVector();
          _this._userArea = new csmVector();
          _this._idParamAngleX = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamAngleX);
          _this._idParamAngleY = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamAngleY);
          _this._idParamAngleZ = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamAngleZ);
          _this._idParamEyeBallX = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamEyeBallX);
          _this._idParamEyeBallY = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamEyeBallY);
          _this._idParamBodyAngleX = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamBodyAngleX);
          _this._state = LoadStep.LoadAssets;
          _this._expressionCount = 0;
          _this._textureCount = 0;
          _this._motionCount = 0;
          _this._allMotionCount = 0;
          return _this;
      }
      /**
       * model3.jsonが置かれたディレクトリとファイルパスからモデルを生成する
       * @param dir
       * @param fileName
       */
      LAppModel.prototype.loadAssets = function (dir, fileName) {
          var _this = this;
          this._modelHomeDir = dir;
          var path = dir + fileName;
          fetch(path).then(function (response) {
              return response.arrayBuffer();
          }).then(function (arrayBuffer) {
              var buffer = arrayBuffer;
              var size = buffer.byteLength;
              var setting = new CubismModelSettingJson(buffer, size);
              // ステートを更新
              _this._state = LoadStep.LoadModel;
              // 結果を保存
              _this.setupModel(setting);
          });
      };
      /**
       * model3.jsonからモデルを生成する。
       * model3.jsonの記述に従ってモデル生成、モーション、物理演算などのコンポーネント生成を行う。
       *
       * @param setting ICubismModelSettingのインスタンス
       */
      LAppModel.prototype.setupModel = function (setting) {
          var _this = this;
          this._updating = true;
          this._initialized = false;
          this._modelSetting = setting;
          var buffer;
          var size;
          // CubismModel
          if (this._modelSetting.getModelFileName() != "") {
              var path_1 = this._modelSetting.getModelFileName();
              path_1 = this._modelHomeDir + path_1;
              fetch(path_1).then(function (response) {
                  return response.arrayBuffer();
              }).then(function (arrayBuffer) {
                  buffer = arrayBuffer;
                  _this.loadModel(buffer);
                  deleteBuffer(buffer, path_1);
                  _this._state = LoadStep.LoadExpression;
                  // callback
                  loadCubismExpression();
              });
              this._state = LoadStep.WaitLoadModel;
          }
          else {
              _lapppal__WEBPACK_IMPORTED_MODULE_13__["LAppPal"].printLog("Model data does not exist.");
          }
          // Expression
          var loadCubismExpression = function () {
              if (_this._modelSetting.getExpressionCount() > 0) {
                  var count_1 = _this._modelSetting.getExpressionCount();
                  var _loop_1 = function (i) {
                      var name_1 = _this._modelSetting.getExpressionName(i);
                      var path = _this._modelSetting.getExpressionFileName(i);
                      path = _this._modelHomeDir + path;
                      fetch(path).then(function (response) {
                          return response.arrayBuffer();
                      }).then(function (arrayBuffer) {
                          var buffer = arrayBuffer;
                          var size = buffer.byteLength;
                          var motion = _this.loadExpression(buffer, size, name_1);
                          if (_this._expressions.getValue(name_1) != null) {
                              ACubismMotion.delete(_this._expressions.getValue(name_1));
                              _this._expressions.setValue(name_1, null);
                          }
                          _this._expressions.setValue(name_1, motion);
                          deleteBuffer(buffer, path);
                          _this._expressionCount++;
                          if (_this._expressionCount >= count_1) {
                              _this._state = LoadStep.LoadPhysics;
                              // callback
                              loadCubismPhysics();
                          }
                      });
                  };
                  for (var i = 0; i < count_1; i++) {
                      _loop_1(i);
                  }
                  _this._state = LoadStep.WaitLoadExpression;
              }
              else {
                  _this._state = LoadStep.LoadPhysics;
                  // callback
                  loadCubismPhysics();
              }
          };
          // Physics
          var loadCubismPhysics = function () {
              if (_this._modelSetting.getPhysicsFileName() != "") {
                  var path_2 = _this._modelSetting.getPhysicsFileName();
                  path_2 = _this._modelHomeDir + path_2;
                  fetch(path_2).then(function (response) {
                      return response.arrayBuffer();
                  }).then(function (arrayBuffer) {
                      var buffer = arrayBuffer;
                      var size = buffer.byteLength;
                      _this.loadPhysics(buffer, size);
                      deleteBuffer(buffer, path_2);
                      _this._state = LoadStep.LoadPose;
                      // callback
                      loadCubismPose();
                  });
                  _this._state = LoadStep.WaitLoadPhysics;
              }
              else {
                  _this._state = LoadStep.LoadPose;
                  // callback
                  loadCubismPose();
              }
          };
          // Pose
          var loadCubismPose = function () {
              if (_this._modelSetting.getPoseFileName() != "") {
                  var path_3 = _this._modelSetting.getPoseFileName();
                  path_3 = _this._modelHomeDir + path_3;
                  fetch(path_3).then(function (response) {
                      return response.arrayBuffer();
                  }).then(function (arrayBuffer) {
                      var buffer = arrayBuffer;
                      var size = buffer.byteLength;
                      _this.loadPose(buffer, size);
                      deleteBuffer(buffer, path_3);
                      _this._state = LoadStep.SetupEyeBlink;
                      // callback
                      setupEyeBlink();
                  });
                  _this._state = LoadStep.WaitLoadPose;
              }
              else {
                  _this._state = LoadStep.SetupEyeBlink;
                  // callback
                  setupEyeBlink();
              }
          };
          // EyeBlink
          var setupEyeBlink = function () {
              if (_this._modelSetting.getEyeBlinkParameterCount() > 0) {
                  _this._eyeBlink = CubismEyeBlink.create(_this._modelSetting);
                  _this._state = LoadStep.SetupBreath;
              }
              // callback
              setupBreath();
          };
          // Breath
          var setupBreath = function () {
              _this._breath = CubismBreath.create();
              var breathParameters = new csmVector();
              breathParameters.pushBack(new BreathParameterData(_this._idParamAngleX, 0.0, 15.0, 6.5345, 0.5));
              breathParameters.pushBack(new BreathParameterData(_this._idParamAngleY, 0.0, 8.0, 3.5345, 0.5));
              breathParameters.pushBack(new BreathParameterData(_this._idParamAngleZ, 0.0, 10.0, 5.5345, 0.5));
              breathParameters.pushBack(new BreathParameterData(_this._idParamBodyAngleX, 0.0, 4.0, 15.5345, 0.5));
              breathParameters.pushBack(new BreathParameterData(CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamBreath), 0.0, 0.5, 3.2345, 0.5));
              _this._breath.setParameters(breathParameters);
              _this._state = LoadStep.LoadUserData;
              // callback
              loadUserData();
          };
          // UserData
          var loadUserData = function () {
              if (_this._modelSetting.getUserDataFile() != "") {
                  var path_4 = _this._modelSetting.getUserDataFile();
                  path_4 = _this._modelHomeDir + path_4;
                  fetch(path_4).then(function (response) {
                      return response.arrayBuffer();
                  }).then(function (arrayBuffer) {
                      var buffer = arrayBuffer;
                      var size = buffer.byteLength;
                      _this.loadUserData(buffer, size);
                      deleteBuffer(buffer, path_4);
                      _this._state = LoadStep.SetupEyeBlinkIds;
                      // callback
                      setupEyeBlinkIds();
                  });
                  _this._state = LoadStep.WaitLoadUserData;
              }
              else {
                  _this._state = LoadStep.SetupEyeBlinkIds;
                  // callback
                  setupEyeBlinkIds();
              }
          };
          // EyeBlinkIds
          var setupEyeBlinkIds = function () {
              var eyeBlinkIdCount = _this._modelSetting.getEyeBlinkParameterCount();
              for (var i = 0; i < eyeBlinkIdCount; ++i) {
                  _this._eyeBlinkIds.pushBack(_this._modelSetting.getEyeBlinkParameterId(i));
              }
              _this._state = LoadStep.SetupLipSyncIds;
              // callback
              setupLipSyncIds();
          };
          // LipSyncIds
          var setupLipSyncIds = function () {
              var lipSyncIdCount = _this._modelSetting.getLipSyncParameterCount();
              for (var i = 0; i < lipSyncIdCount; ++i) {
                  _this._lipSyncIds.pushBack(_this._modelSetting.getLipSyncParameterId(i));
              }
              _this._state = LoadStep.SetupLayout;
              // callback
              setupLayout();
          };
          // Layout
          var setupLayout = function () {
              var layout = new csmMap();
              _this._modelSetting.getLayoutMap(layout);
              _this._modelMatrix.setupFromLayout(layout);
              _this._state = LoadStep.LoadMotion;
              // callback
              loadCubismMotion();
          };
          // Motion
          var loadCubismMotion = function () {
              _this._state = LoadStep.WaitLoadMotion;
              _this._model.saveParameters();
              _this._allMotionCount = 0;
              _this._motionCount = 0;
              var group = [];
              var motionGroupCount = _this._modelSetting.getMotionGroupCount();
              // モーションの総数を求める
              for (var i = 0; i < motionGroupCount; i++) {
                  group[i] = _this._modelSetting.getMotionGroupName(i);
                  _this._allMotionCount += _this._modelSetting.getMotionCount(group[i]);
              }
              // モーションの読み込み
              for (var i = 0; i < motionGroupCount; i++) {
                  _this.preLoadMotionGroup(group[i]);
              }
              // モーションがない場合
              if (motionGroupCount == 0) {
                  _this._state = LoadStep.LoadTexture;
                  // 全てのモーションを停止する
                  _this._motionManager.stopAllMotions();
                  _this._updating = false;
                  _this._initialized = true;
                  _this.createRenderer();
                  _this.setupTextures();
                  _this.getRenderer().startUp(_lappdelegate__WEBPACK_IMPORTED_MODULE_14__["gl"]);
              }
          };
      };
      /**
       * テクスチャユニットにテクスチャをロードする
       */
      LAppModel.prototype.setupTextures = function () {
          var _this = this;
          // iPhoneでのアルファ品質向上のためTypescriptではpremultipliedAlphaを採用
          var usePremultiply = true;
          if (this._state == LoadStep.LoadTexture) {
              // テクスチャ読み込み用
              var textureCount_1 = this._modelSetting.getTextureCount();
              var _loop_2 = function (modelTextureNumber) {
                  // テクスチャ名が空文字だった場合はロード・バインド処理をスキップ
                  if (this_1._modelSetting.getTextureFileName(modelTextureNumber) == "") {
                      console.log("getTextureFileName null");
                      return "continue";
                  }
                  // WebGLのテクスチャユニットにテクスチャをロードする
                  var texturePath = this_1._modelSetting.getTextureFileName(modelTextureNumber);
                  texturePath = this_1._modelHomeDir + texturePath;
                  // ロード完了時に呼び出すコールバック関数
                  var onLoad = function (textureInfo) {
                      _this.getRenderer().bindTexture(modelTextureNumber, textureInfo.id);
                      _this._textureCount++;
                      if (_this._textureCount >= textureCount_1) {
                          // ロード完了
                          _this._state = LoadStep.CompleteSetup;
                      }
                  };
                  // 読み込み
                  _lappdelegate__WEBPACK_IMPORTED_MODULE_14__["LAppDelegate"].getInstance().getTextureManager().createTextureFromPngFile(texturePath, usePremultiply, onLoad);
                  this_1.getRenderer().setIsPremultipliedAlpha(usePremultiply);
              };
              var this_1 = this;
              for (var modelTextureNumber = 0; modelTextureNumber < textureCount_1; modelTextureNumber++) {
                  _loop_2(modelTextureNumber);
              }
              this._state = LoadStep.WaitLoadTexture;
          }
      };
      /**
       * レンダラを再構築する
       */
      LAppModel.prototype.reloadRenderer = function () {
          this.deleteRenderer();
          this.createRenderer();
          this.setupTextures();
      };
      /**
       * 更新
       */
      LAppModel.prototype.update = function () {
          if (this._state != LoadStep.CompleteSetup)
              return;
          var deltaTimeSeconds = _lapppal__WEBPACK_IMPORTED_MODULE_13__["LAppPal"].getDeltaTime();
          this._userTimeSeconds += deltaTimeSeconds;
          this._dragManager.update(deltaTimeSeconds);
          this._dragX = this._dragManager.getX();
          this._dragY = this._dragManager.getY();
          // モーションによるパラメータ更新の有無
          var motionUpdated = false;
          //--------------------------------------------------------------------------
          this._model.loadParameters(); // 前回セーブされた状態をロード
          if (this._motionManager.isFinished()) {
              // モーションの再生がない場合、待機モーションの中からランダムで再生する
              this.startRandomMotion(_lappdefine__WEBPACK_IMPORTED_MODULE_12__["LAppDefine"].MotionGroupIdle, _lappdefine__WEBPACK_IMPORTED_MODULE_12__["LAppDefine"].PriorityIdle);
          }
          else {
              motionUpdated = this._motionManager.updateMotion(this._model, deltaTimeSeconds); // モーションを更新
          }
          this._model.saveParameters(); // 状態を保存
          //--------------------------------------------------------------------------
          // まばたき
          if (!motionUpdated) {
              if (this._eyeBlink != null) {
                  // メインモーションの更新がないとき
                  this._eyeBlink.updateParameters(this._model, deltaTimeSeconds); // 目パチ
              }
          }
          if (this._expressionManager != null) {
              this._expressionManager.updateMotion(this._model, deltaTimeSeconds); // 表情でパラメータ更新（相対変化）
          }
          // ドラッグによる変化
          // ドラッグによる顔の向きの調整
          this._model.addParameterValueById(this._idParamAngleX, this._dragX * 30); // -30から30の値を加える
          this._model.addParameterValueById(this._idParamAngleY, this._dragY * 30);
          this._model.addParameterValueById(this._idParamAngleZ, this._dragX * this._dragY * -30);
          // ドラッグによる体の向きの調整
          this._model.addParameterValueById(this._idParamBodyAngleX, this._dragX * 10); // -10から10の値を加える
          // ドラッグによる目の向きの調整
          this._model.addParameterValueById(this._idParamEyeBallX, this._dragX); // -1から1の値を加える
          this._model.addParameterValueById(this._idParamEyeBallY, this._dragY);
          // 呼吸など
          if (this._breath != null) {
              this._breath.updateParameters(this._model, deltaTimeSeconds);
          }
          // 物理演算の設定
          if (this._physics != null) {
              this._physics.evaluate(this._model, deltaTimeSeconds);
          }
          // リップシンクの設定
          if (this._lipsync) {
              var value = 0; // リアルタイムでリップシンクを行う場合、システムから音量を取得して、0~1の範囲で値を入力します。
              for (var i = 0; i < this._lipSyncIds.getSize(); ++i) {
                  this._model.addParameterValueById(this._lipSyncIds.at(i), value, 0.8);
              }
          }
          // ポーズの設定
          if (this._pose != null) {
              this._pose.updateParameters(this._model, deltaTimeSeconds);
          }
          this._model.update();
      };
      /**
       * 引数で指定したモーションの再生を開始する
       * @param group モーショングループ名
       * @param no グループ内の番号
       * @param priority 優先度
       * @return 開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するisFinished()の引数で使用する。開始できない時は[-1]
       */
      LAppModel.prototype.startMotion = function (group, no, priority) {
          var _this = this;
          if (priority == _lappdefine__WEBPACK_IMPORTED_MODULE_12__["LAppDefine"].PriorityForce) {
              this._motionManager.setReservePriority(priority);
          }
          else if (!this._motionManager.reserveMotion(priority)) {
              if (this._debugMode) {
                  _lapppal__WEBPACK_IMPORTED_MODULE_13__["LAppPal"].printLog("[APP]can't start motion.");
              }
              return InvalidMotionQueueEntryHandleValue;
          }
          var fileName = this._modelSetting.getMotionFileName(group, no);
          // ex) idle_0
          var name = CubismString.getFormatedString("{0}_{1}", group, no);
          var motion = this._motions.getValue(name);
          var autoDelete = false;
          if (motion == null) {
              var path_5 = fileName;
              path_5 = this._modelHomeDir + path_5;
              fetch(path_5).then(function (response) {
                  return response.arrayBuffer();
              }).then(function (arrayBuffer) {
                  var buffer = arrayBuffer;
                  var size = buffer.byteLength;
                  motion = _this.loadMotion(buffer, size, null);
                  var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, no);
                  if (fadeTime >= 0.0) {
                      motion.setFadeInTime(fadeTime);
                  }
                  fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, no);
                  if (fadeTime >= 0.0) {
                      motion.setFadeOutTime(fadeTime);
                  }
                  motion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
                  autoDelete = true; // 終了時にメモリから削除
                  deleteBuffer(buffer, path_5);
              });
          }
          if (this._debugMode) {
              _lapppal__WEBPACK_IMPORTED_MODULE_13__["LAppPal"].printLog("[APP]start motion: [{0}_{1}", group, no);
          }
          return this._motionManager.startMotionPriority(motion, autoDelete, priority);
      };
      /**
       * ランダムに選ばれたモーションの再生を開始する。
       * @param group モーショングループ名
       * @param priority 優先度
       * @return 開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するisFinished()の引数で使用する。開始できない時は[-1]
       */
      LAppModel.prototype.startRandomMotion = function (group, priority) {
          if (this._modelSetting.getMotionCount(group) == 0) {
              return InvalidMotionQueueEntryHandleValue;
          }
          var no = Math.floor(Math.random() * this._modelSetting.getMotionCount(group));
          return this.startMotion(group, no, priority);
      };
      /**
       * 引数で指定した表情モーションをセットする
       *
       * @param expressionId 表情モーションのID
       */
      LAppModel.prototype.setExpression = function (expressionId) {
          var motion = this._expressions.getValue(expressionId);
          if (this._debugMode) {
              _lapppal__WEBPACK_IMPORTED_MODULE_13__["LAppPal"].printLog("[APP]expression: [{0}]", expressionId);
          }
          if (motion != null) {
              this._expressionManager.startMotionPriority(motion, false, _lappdefine__WEBPACK_IMPORTED_MODULE_12__["LAppDefine"].PriorityForce);
          }
          else {
              if (this._debugMode) {
                  _lapppal__WEBPACK_IMPORTED_MODULE_13__["LAppPal"].printLog("[APP]expression[{0}] is null", expressionId);
              }
          }
      };
      /**
       * ランダムに選ばれた表情モーションをセットする
       */
      LAppModel.prototype.setRandomExpression = function () {
          if (this._expressions.getSize() == 0) {
              return;
          }
          var no = Math.floor(Math.random() * this._expressions.getSize());
          for (var i = 0; i < this._expressions.getSize(); i++) {
              if (i == no) {
                  var name_2 = this._expressions._keyValues[i].first;
                  this.setExpression(name_2);
                  return;
              }
          }
      };
      /**
       * イベントの発火を受け取る
       */
      LAppModel.prototype.motionEventFired = function (eventValue) {
          Object(_Framework_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_11__["CubismLogInfo"])("{0} is fired on LAppModel!!", eventValue.s);
      };
      /**
       * 当たり判定テスト
       * 指定ＩＤの頂点リストから矩形を計算し、座標をが矩形範囲内か判定する。
       *
       * @param hitArenaName  当たり判定をテストする対象のID
       * @param x             判定を行うX座標
       * @param y             判定を行うY座標
       */
      LAppModel.prototype.hitTest = function (hitArenaName, x, y) {
          // 透明時は当たり判定無し。
          if (this._opacity < 1) {
              return false;
          }
          var count = this._modelSetting.getHitAreasCount();
          for (var i = 0; i < count; i++) {
              if (this._modelSetting.getHitAreaName(i) == hitArenaName) {
                  var drawId = this._modelSetting.getHitAreaId(i);
                  return this.isHit(drawId, x, y);
              }
          }
          return false;
      };
      /**
       * モーションデータをグループ名から一括でロードする。
       * モーションデータの名前は内部でModelSettingから取得する。
       *
       * @param group モーションデータのグループ名
       */
      LAppModel.prototype.preLoadMotionGroup = function (group) {
          var _this = this;
          var _loop_3 = function (i) {
              // ex idle_0
              var name_3 = CubismString.getFormatedString("{0}_{1}", group, i);
              var path = this_2._modelSetting.getMotionFileName(group, i);
              path = this_2._modelHomeDir + path;
              if (this_2._debugMode) {
                  _lapppal__WEBPACK_IMPORTED_MODULE_13__["LAppPal"].printLog("[APP]load motion: {0} => [{1}_{2}]", path, group, i);
              }
              fetch(path).then(function (response) {
                  return response.arrayBuffer();
              }).then(function (arrayBuffer) {
                  var buffer = arrayBuffer;
                  var size = buffer.byteLength;
                  var tmpMotion = _this.loadMotion(buffer, size, name_3);
                  var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, i);
                  if (fadeTime >= 0.0) {
                      tmpMotion.setFadeInTime(fadeTime);
                  }
                  fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, i);
                  if (fadeTime >= 0.0) {
                      tmpMotion.setFadeOutTime(fadeTime);
                  }
                  tmpMotion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
                  if (_this._motions.getValue(name_3) != null) {
                      ACubismMotion.delete(_this._motions.getValue(name_3));
                  }
                  _this._motions.setValue(name_3, tmpMotion);
                  deleteBuffer(buffer, path);
                  _this._motionCount++;
                  if (_this._motionCount >= _this._allMotionCount) {
                      _this._state = LoadStep.LoadTexture;
                      // 全てのモーションを停止する
                      _this._motionManager.stopAllMotions();
                      _this._updating = false;
                      _this._initialized = true;
                      _this.createRenderer();
                      _this.setupTextures();
                      _this.getRenderer().startUp(_lappdelegate__WEBPACK_IMPORTED_MODULE_14__["gl"]);
                  }
              });
          };
          var this_2 = this;
          for (var i = 0; i < this._modelSetting.getMotionCount(group); i++) {
              _loop_3(i);
          }
      };
      /**
       * すべてのモーションデータを解放する。
       */
      LAppModel.prototype.releaseMotions = function () {
          this._motions.clear();
      };
      /**
       * 全ての表情データを解放する。
       */
      LAppModel.prototype.releaseExpressions = function () {
          this._expressions.clear();
      };
      /**
       * モデルを描画する処理。モデルを描画する空間のView-Projection行列を渡す。
       */
      LAppModel.prototype.doDraw = function () {
          if (this._model == null)
              return;
          // キャンバスサイズを渡す
          var viewport = [
              0,
              0,
              _lappdelegate__WEBPACK_IMPORTED_MODULE_14__["canvas"].width,
              _lappdelegate__WEBPACK_IMPORTED_MODULE_14__["canvas"].height
          ];
          this.getRenderer().setRenderState(_lappdelegate__WEBPACK_IMPORTED_MODULE_14__["frameBuffer"], viewport);
          this.getRenderer().drawModel();
      };
      /**
       * モデルを描画する処理。モデルを描画する空間のView-Projection行列を渡す。
       */
      LAppModel.prototype.draw = function (matrix) {
          if (this._model == null) {
              return;
          }
          // 各読み込み終了後
          if (this._state == LoadStep.CompleteSetup) {
              matrix.multiplyByMatrix(this._modelMatrix);
              this.getRenderer().setMvpMatrix(matrix);
              this.doDraw();
          }
      };
      return LAppModel;
  }(CubismUserModel));
  


/***/ })