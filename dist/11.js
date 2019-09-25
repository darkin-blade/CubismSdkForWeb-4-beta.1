/*!*******************************************!*\
  !*** ./Framework/motion/acubismmotion.ts ***!
  \*******************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _math_cubismmath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/cubismmath */ "./Framework/math/cubismmath.ts");
  /* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
  /* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  
  var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
  var CubismMath = _math_cubismmath__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMath;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * モーションの抽象基底クラス
       *
       * モーションの抽象基底クラス。MotionQueueManagerによってモーションの再生を管理する。
       */
      var ACubismMotion = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function ACubismMotion() {
              this._fadeInSeconds = -1.0;
              this._fadeOutSeconds = -1.0;
              this._weight = 1.0;
              this._offsetSeconds = 0.0; // 再生の開始時刻
              this._firedEventValues = new csmVector();
          }
          /**
           * インスタンスの破棄
           */
          ACubismMotion.delete = function (motion) {
              motion.release();
              motion = void 0;
              motion = null;
          };
          /**
           * デストラクタ相当の処理
           */
          ACubismMotion.prototype.release = function () {
              this._weight = 0.0;
          };
          /**
           * モデルのパラメータ
           * @param model 対象のモデル
           * @param motionQueueEntry CubismMotionQueueManagerで管理されているモーション
           * @param userTimeSeconds デルタ時間の積算値[秒]
           */
          ACubismMotion.prototype.updateParameters = function (model, motionQueueEntry, userTimeSeconds) {
              if (!motionQueueEntry.isAvailable() || motionQueueEntry.isFinished()) {
                  return;
              }
              if (!motionQueueEntry.isStarted()) {
                  motionQueueEntry.setIsStarted(true);
                  motionQueueEntry.setStartTime(userTimeSeconds - this._offsetSeconds); // モーションの開始時刻を記録
                  motionQueueEntry.setFadeInStartTime(userTimeSeconds); // フェードインの開始時刻
                  var duration = this.getDuration();
                  if (motionQueueEntry.getEndTime() < 0) {
                      // 開始していないうちに終了設定している場合がある。
                      motionQueueEntry.setEndTime((duration <= 0) ? -1 : motionQueueEntry.getStartTime() + duration);
                      // duration == -1 の場合はループする
                  }
              }
              var fadeWeight = this._weight; // 現在の値と掛け合わせる割合
              //---- フェードイン・アウトの処理 ----
              // 単純なサイン関数でイージングする
              var fadeIn = this._fadeInSeconds == 0.0
                  ? 1.0
                  : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / this._fadeInSeconds);
              var fadeOut = (this._fadeOutSeconds == 0.0 || motionQueueEntry.getEndTime() < 0.0)
                  ? 1.0
                  : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / this._fadeOutSeconds);
              fadeWeight = fadeWeight * fadeIn * fadeOut;
              motionQueueEntry.setState(userTimeSeconds, fadeWeight);
              Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_2__["CSM_ASSERT"])(0.0 <= fadeWeight && fadeWeight <= 1.0);
              //---- 全てのパラメータIDをループする ----
              this.doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry);
              // 後処理
              // 終了時刻を過ぎたら終了フラグを立てる(CubismMotionQueueManager)
              if ((motionQueueEntry.getEndTime() > 0) && (motionQueueEntry.getEndTime() < userTimeSeconds)) {
                  motionQueueEntry.setIsFinished(true); // 終了
              }
          };
          /**
           * フェードインの時間を設定する
           * @param fadeInSeconds フェードインにかかる時間[秒]
           */
          ACubismMotion.prototype.setFadeInTime = function (fadeInSeconds) {
              this._fadeInSeconds = fadeInSeconds;
          };
          /**
           * フェードアウトの時間を設定する
           * @param fadeOutSeconds フェードアウトにかかる時間[秒]
           */
          ACubismMotion.prototype.setFadeOutTime = function (fadeOutSeconds) {
              this._fadeOutSeconds = fadeOutSeconds;
          };
          /**
           * フェードアウトにかかる時間の取得
           * @return フェードアウトにかかる時間[秒]
           */
          ACubismMotion.prototype.getFadeOutTime = function () {
              return this._fadeOutSeconds;
          };
          /**
           * フェードインにかかる時間の取得
           * @return フェードインにかかる時間[秒]
           */
          ACubismMotion.prototype.getFadeInTime = function () {
              return this._fadeInSeconds;
          };
          /**
           * モーション適用の重みの設定
           * @param weight 重み（0.0 - 1.0）
           */
          ACubismMotion.prototype.setWeight = function (weight) {
              this._weight = weight;
          };
          /**
           * モーション適用の重みの取得
           * @return 重み（0.0 - 1.0）
           */
          ACubismMotion.prototype.getWeight = function () {
              return this._weight;
          };
          /**
           * モーションの長さの取得
           * @return モーションの長さ[秒]
           *
           * @note ループの時は「-1」。
           *       ループでない場合は、オーバーライドする。
           *       正の値の時は取得される時間で終了する。
           *       「-1」の時は外部から停止命令がない限り終わらない処理となる。
           */
          ACubismMotion.prototype.getDuration = function () {
              return -1.0;
          };
          /**
           * モーションのループ1回分の長さの取得
           * @return モーションのループ一回分の長さ[秒]
           *
           * @note ループしない場合は、getDuration()と同じ値を返す
           *       ループ一回分の長さが定義できない場合(プログラム的に動き続けるサブクラスなど)の場合は「-1」を返す
           */
          ACubismMotion.prototype.getLoopDuration = function () {
              return -1.0;
          };
          /**
           * モーション再生の開始時刻の設定
           * @param offsetSeconds モーション再生の開始時刻[秒]
           */
          ACubismMotion.prototype.setOffsetTime = function (offsetSeconds) {
              this._offsetSeconds = offsetSeconds;
          };
          /**
           * モデルのパラメータ更新
           *
           * イベント発火のチェック。
           * 入力する時間は呼ばれるモーションタイミングを０とした秒数で行う。
           *
           * @param beforeCheckTimeSeconds 前回のイベントチェック時間[秒]
           * @param motionTimeSeconds 今回の再生時間[秒]
           */
          ACubismMotion.prototype.getFiredEvent = function (beforeCheckTimeSeconds, motionTimeSeconds) {
              return this._firedEventValues;
          };
          return ACubismMotion;
      }());
      Live2DCubismFramework.ACubismMotion = ACubismMotion;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!****************************************************!*\
    !*** ./Framework/motion/cubismexpressionmotion.ts ***!
    \****************************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _acubismmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acubismmotion */ "./Framework/motion/acubismmotion.ts");
  /* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cubismjson */ "./Framework/utils/cubismjson.ts");
  /* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
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
  
  
  
  
  var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].csmVector;
  var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismFramework;
  var CubismJson = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismJson;
  var ACubismMotion = _acubismmotion__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].ACubismMotion;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      // exp3.jsonのキーとデフォルト
      var ExpressionKeyFadeIn = "FadeInTime";
      var ExpressionKeyFadeOut = "FadeOutTime";
      var ExpressionKeyParameters = "Parameters";
      var ExpressionKeyId = "Id";
      var ExpressionKeyValue = "Value";
      var ExpressionKeyBlend = "Blend";
      var BlendValueAdd = "Add";
      var BlendValueMultiply = "Multiply";
      var BlendValueOverwrite = "Overwrite";
      var DefaultFadeTime = 1.0;
      /**
       * 表情のモーション
       *
       * 表情のモーションクラス。
       */
      var CubismExpressionMotion = /** @class */ (function (_super) {
          __extends(CubismExpressionMotion, _super);
          /**
           * コンストラクタ
           */
          function CubismExpressionMotion() {
              var _this = _super.call(this) || this;
              _this._parameters = new csmVector();
              return _this;
          }
          /**
           * インスタンスを作成する。
           * @param buffer expファイルが読み込まれているバッファ
           * @param size バッファのサイズ
           * @return 作成されたインスタンス
           */
          CubismExpressionMotion.create = function (buffer, size) {
              var expression = new CubismExpressionMotion();
              var json = CubismJson.create(buffer, size);
              var root = json.getRoot();
              expression.setFadeInTime(root.getValueByString(ExpressionKeyFadeIn).toFloat(DefaultFadeTime)); // フェードイン
              expression.setFadeOutTime(root.getValueByString(ExpressionKeyFadeOut).toFloat(DefaultFadeTime)); // フェードアウト
              // 各パラメータについて
              var parameterCount = root.getValueByString(ExpressionKeyParameters).getSize();
              expression._parameters.prepareCapacity(parameterCount);
              for (var i = 0; i < parameterCount; ++i) {
                  var param = root.getValueByString(ExpressionKeyParameters).getValueByIndex(i);
                  var parameterId = CubismFramework.getIdManager().getId(param.getValueByString(ExpressionKeyId).getRawString()); // パラメータID
                  var value = param.getValueByString(ExpressionKeyValue).toFloat(); // 値
                  // 計算方法の設定
                  var blendType = void 0;
                  if (param.getValueByString(ExpressionKeyBlend).isNull() || param.getValueByString(ExpressionKeyBlend).getString() == BlendValueAdd) {
                      blendType = ExpressionBlendType.ExpressionBlendType_Add;
                  }
                  else if (param.getValueByString(ExpressionKeyBlend).getString() == BlendValueMultiply) {
                      blendType = ExpressionBlendType.ExpressionBlendType_Multiply;
                  }
                  else if (param.getValueByString(ExpressionKeyBlend).getString() == BlendValueOverwrite) {
                      blendType = ExpressionBlendType.ExpressionBlendType_Overwrite;
                  }
                  else {
                      // その他 仕様にない値を設定した時は加算モードにすることで復旧
                      blendType = ExpressionBlendType.ExpressionBlendType_Add;
                  }
                  // 設定オブジェクトを作成してリストに追加する
                  var item = new ExpressionParameter();
                  item.parameterId = parameterId;
                  item.blendType = blendType;
                  item.value = value;
                  expression._parameters.pushBack(item);
              }
              CubismJson.delete(json); // JSONデータは不要になったら削除する
              return expression;
          };
          /**
           * モデルのパラメータの更新の実行
           * @param model 対象のモデル
           * @param userTimeSeconds デルタ時間の積算値[秒]
           * @param weight モーションの重み
           * @param motionQueueEntry CubismMotionQueueManagerで管理されているモーション
           */
          CubismExpressionMotion.prototype.doUpdateParameters = function (model, userTimeSeconds, weight, motionQueueEntry) {
              for (var i = 0; i < this._parameters.getSize(); ++i) {
                  var parameter = this._parameters.at(i);
                  switch (parameter.blendType) {
                      case ExpressionBlendType.ExpressionBlendType_Add:
                          {
                              model.addParameterValueById(parameter.parameterId, parameter.value, weight);
                              break;
                          }
                      case ExpressionBlendType.ExpressionBlendType_Multiply:
                          {
                              model.multiplyParameterValueById(parameter.parameterId, parameter.value, weight);
                              break;
                          }
                      case ExpressionBlendType.ExpressionBlendType_Overwrite:
                          {
                              model.setParameterValueById(parameter.parameterId, parameter.value, weight);
                              break;
                          }
                      default:
                          // 仕様にない値を設定した時はすでに加算モードになっている
                          break;
                  }
              }
          };
          return CubismExpressionMotion;
      }(ACubismMotion));
      Live2DCubismFramework.CubismExpressionMotion = CubismExpressionMotion;
      /**
       * 表情パラメータ値の計算方式
       */
      var ExpressionBlendType;
      (function (ExpressionBlendType) {
          ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Add"] = 0] = "ExpressionBlendType_Add";
          ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Multiply"] = 1] = "ExpressionBlendType_Multiply";
          ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Overwrite"] = 2] = "ExpressionBlendType_Overwrite"; // 上書き
      })(ExpressionBlendType = Live2DCubismFramework.ExpressionBlendType || (Live2DCubismFramework.ExpressionBlendType = {}));
      /**
       * 表情のパラメータ情報
       */
      var ExpressionParameter = /** @class */ (function () {
          function ExpressionParameter() {
          }
          return ExpressionParameter;
      }());
      Live2DCubismFramework.ExpressionParameter = ExpressionParameter;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!******************************************!*\
    !*** ./Framework/motion/cubismmotion.ts ***!
    \******************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _cubismmotionjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmotionjson */ "./Framework/motion/cubismmotionjson.ts");
  /* harmony import */ var _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cubismmotioninternal */ "./Framework/motion/cubismmotioninternal.ts");
  /* harmony import */ var _acubismmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acubismmotion */ "./Framework/motion/acubismmotion.ts");
  /* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /* harmony import */ var _math_cubismmath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/cubismmath */ "./Framework/math/cubismmath.ts");
  /* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
  /* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
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
  
  
  
  
  
  
  
  var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_5__["Live2DCubismFramework"].csmString;
  var CubismMotionData = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionData;
  var CubismMotionSegment = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionSegment;
  var CubismMotionPoint = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionPoint;
  var CubismMotionEvent = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionEvent;
  var CubismMotionSegmentType = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionSegmentType;
  var CubismMotionCurve = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionCurve;
  var CubismMotionCurveTarget = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionCurveTarget;
  var CubismMath = _math_cubismmath__WEBPACK_IMPORTED_MODULE_4__["Live2DCubismFramework"].CubismMath;
  var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].CubismFramework;
  var ACubismMotion = _acubismmotion__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].ACubismMotion;
  var CubismMotionJson = _cubismmotionjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMotionJson;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      var EffectNameEyeBlink = "EyeBlink";
      var EffectNameLipSync = "LipSync";
      var TargetNameModel = "Model";
      var TargetNameParameter = "Parameter";
      var TargetNamePartOpacity = "PartOpacity";
      function lerpPoints(a, b, t) {
          var result = new CubismMotionPoint();
          result.time = a.time + ((b.time - a.time) * t);
          result.value = a.value + ((b.value - a.value) * t);
          return result;
      }
      function linearEvaluate(points, time) {
          var t = (time - points[0].time) / (points[1].time - points[0].time);
          if (t < 0.0) {
              t = 0.0;
          }
          return points[0].value + ((points[1].value - points[0].value) * t);
      }
      function bezierEvaluate(points, time) {
          var t = (time - points[0].time) / (points[3].time - points[0].time);
          if (t < 0.0) {
              t = 0.0;
          }
          var p01 = lerpPoints(points[0], points[1], t);
          var p12 = lerpPoints(points[1], points[2], t);
          var p23 = lerpPoints(points[2], points[3], t);
          var p012 = lerpPoints(p01, p12, t);
          var p123 = lerpPoints(p12, p23, t);
          return lerpPoints(p012, p123, t).value;
      }
      function steppedEvaluate(points, time) {
          return points[0].value;
      }
      function inverseSteppedEvaluate(points, time) {
          return points[1].value;
      }
      function evaluateCurve(motionData, index, time) {
          // Find segment to evaluate.
          var curve = motionData.curves.at(index);
          var target = -1;
          var totalSegmentCount = curve.baseSegmentIndex + curve.segmentCount;
          var pointPosition = 0;
          for (var i = curve.baseSegmentIndex; i < totalSegmentCount; ++i) {
              // Get first point of next segment.
              pointPosition = motionData.segments.at(i).basePointIndex
                  + (motionData.segments.at(i).segmentType == CubismMotionSegmentType.CubismMotionSegmentType_Bezier
                      ? 3
                      : 1);
              // Break if time lies within current segment.
              if (motionData.points.at(pointPosition).time > time) {
                  target = i;
                  break;
              }
          }
          if (target == -1) {
              return motionData.points.at(pointPosition).value;
          }
          var segment = motionData.segments.at(target);
          return segment.evaluate(motionData.points.get(segment.basePointIndex), time);
      }
      /**
       * モーションクラス
       *
       * モーションのクラス。
       */
      var CubismMotion = /** @class */ (function (_super) {
          __extends(CubismMotion, _super);
          /**
           * コンストラクタ
           */
          function CubismMotion() {
              var _this = _super.call(this) || this;
              _this._sourceFrameRate = 30.0;
              _this._loopDurationSeconds = -1.0;
              _this._isLoop = false; // trueから false へデフォルトを変更
              _this._isLoopFadeIn = true; // ループ時にフェードインが有効かどうかのフラグ
              _this._lastWeight = 0.0;
              _this._motionData = null;
              _this._modelCurveIdEyeBlink = null;
              _this._modelCurveIdLipSync = null;
              _this._eyeBlinkParameterIds = null;
              _this._lipSyncParameterIds = null;
              return _this;
          }
          /**
           * インスタンスを作成する
           *
           * @param buffer motion3.jsonが読み込まれているバッファ
           * @param size バッファのサイズ
           * @return 作成されたインスタンス
           */
          CubismMotion.create = function (buffer, size) {
              var ret = new CubismMotion();
              ret.parse(buffer, size);
              ret._sourceFrameRate = ret._motionData.fps;
              ret._loopDurationSeconds = ret._motionData.duration;
              // NOTE: Editorではループありのモーション書き出しは非対応
              // ret->_loop = (ret->_motionData->Loop > 0);
              return ret;
          };
          /**
           * モデルのパラメータの更新の実行
           * @param model             対象のモデル
           * @param userTimeSeconds   現在の時刻[秒]
           * @param fadeWeight        モーションの重み
           * @param motionQueueEntry  CubismMotionQueueManagerで管理されているモーション
           */
          CubismMotion.prototype.doUpdateParameters = function (model, userTimeSeconds, fadeWeight, motionQueueEntry) {
              if (this._modelCurveIdEyeBlink == null) {
                  this._modelCurveIdEyeBlink = CubismFramework.getIdManager().getId(EffectNameEyeBlink);
              }
              if (this._modelCurveIdLipSync == null) {
                  this._modelCurveIdLipSync = CubismFramework.getIdManager().getId(EffectNameLipSync);
              }
              var timeOffsetSeconds = userTimeSeconds - motionQueueEntry.getStartTime();
              if (timeOffsetSeconds < 0.0) {
                  timeOffsetSeconds = 0.0; // エラー回避
              }
              var lipSyncValue = Number.MAX_VALUE;
              var eyeBlinkValue = Number.MAX_VALUE;
              //まばたき、リップシンクのうちモーションの適用を検出するためのビット（maxFlagCount個まで
              var MaxTargetSize = 64;
              var lipSyncFlags = 0;
              var eyeBlinkFlags = 0;
              //瞬き、リップシンクのターゲット数が上限を超えている場合
              if (this._eyeBlinkParameterIds.getSize() > MaxTargetSize) {
                  Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogDebug"])("too many eye blink targets : {0}", this._eyeBlinkParameterIds.getSize());
              }
              if (this._lipSyncParameterIds.getSize() > MaxTargetSize) {
                  Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogDebug"])("too many lip sync targets : {0}", this._lipSyncParameterIds.getSize());
              }
              var tmpFadeIn = (this._fadeInSeconds <= 0.0)
                  ? 1.0
                  : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / this._fadeInSeconds);
              var tmpFadeOut = (this._fadeOutSeconds <= 0.0 || motionQueueEntry.getEndTime() < 0.0)
                  ? 1.0
                  : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / this._fadeOutSeconds);
              var value;
              var c, parameterIndex;
              // 'Repeat' time as necessary.
              var time = timeOffsetSeconds;
              if (this._isLoop) {
                  while (time > this._motionData.duration) {
                      time -= this._motionData.duration;
                  }
              }
              var curves = this._motionData.curves;
              // Evaluate model curves.
              for (c = 0; c < this._motionData.curveCount && curves.at(c).type == CubismMotionCurveTarget.CubismMotionCurveTarget_Model; ++c) {
                  // Evaluate curve and call handler.
                  value = evaluateCurve(this._motionData, c, time);
                  if (curves.at(c).id == this._modelCurveIdEyeBlink) {
                      eyeBlinkValue = value;
                  }
                  else if (curves.at(c).id == this._modelCurveIdLipSync) {
                      lipSyncValue = value;
                  }
              }
              var parameterMotionCurveCount = 0;
              for (; c < this._motionData.curveCount && curves.at(c).type == CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter; ++c) {
                  parameterMotionCurveCount++;
                  // Find parameter index.
                  parameterIndex = model.getParameterIndex(curves.at(c).id);
                  // Skip curve evaluation if no value in sink.
                  if (parameterIndex == -1) {
                      continue;
                  }
                  var sourceValue = model.getParameterValueByIndex(parameterIndex);
                  // Evaluate curve and apply value.
                  value = evaluateCurve(this._motionData, c, time);
                  if (eyeBlinkValue != Number.MAX_VALUE) {
                      for (var i = 0; i < this._eyeBlinkParameterIds.getSize() && i < MaxTargetSize; ++i) {
                          if (this._eyeBlinkParameterIds.at(i) == curves.at(c).id) {
                              value *= eyeBlinkValue;
                              eyeBlinkFlags |= 1 << i;
                              break;
                          }
                      }
                  }
                  if (lipSyncValue != Number.MAX_VALUE) {
                      for (var i = 0; i < this._lipSyncParameterIds.getSize() && i < MaxTargetSize; ++i) {
                          if (this._lipSyncParameterIds.at(i) == curves.at(c).id) {
                              value += lipSyncValue;
                              lipSyncFlags |= 1 << i;
                              break;
                          }
                      }
                  }
                  var v = void 0;
                  // パラメータごとのフェード
                  if (curves.at(c).fadeInTime < 0.0 && curves.at(c).fadeOutTime < 0.0) {
                      // モーションのフェードを適用
                      v = sourceValue + (value - sourceValue) * fadeWeight;
                  }
                  else {
                      // パラメータに対してフェードインかフェードアウトが設定してある場合はそちらを適用
                      var fin = void 0;
                      var fout = void 0;
                      if (curves.at(c).fadeInTime < 0.0) {
                          fin = tmpFadeIn;
                      }
                      else {
                          fin = curves.at(c).fadeInTime == 0.0
                              ? 1.0
                              : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / curves.at(c).fadeInTime);
                      }
                      if (curves.at(c).fadeOutTime < 0.0) {
                          fout = tmpFadeOut;
                      }
                      else {
                          fout = (curves.at(c).fadeOutTime == 0.0 || motionQueueEntry.getEndTime() < 0.0)
                              ? 1.0
                              : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / curves.at(c).fadeOutTime);
                      }
                      var paramWeight = this._weight * fin * fout;
                      // パラメータごとのフェードを適用
                      v = sourceValue + (value - sourceValue) * paramWeight;
                  }
                  model.setParameterValueByIndex(parameterIndex, v, 1.0);
              }
              {
                  if (eyeBlinkValue != Number.MAX_VALUE) {
                      for (var i = 0; i < this._eyeBlinkParameterIds.getSize() && i < MaxTargetSize; ++i) {
                          var sourceValue = model.getParameterValueById(this._eyeBlinkParameterIds.at(i));
                          // モーションでの上書きがあった時にはまばたきは適用しない
                          if ((eyeBlinkFlags >> i) & 0x01) {
                              continue;
                          }
                          var v = sourceValue + (eyeBlinkValue - sourceValue) * fadeWeight;
                          model.setParameterValueById(this._eyeBlinkParameterIds.at(i), v);
                      }
                  }
                  if (lipSyncValue != Number.MAX_VALUE) {
                      for (var i = 0; i < this._lipSyncParameterIds.getSize() && i < MaxTargetSize; ++i) {
                          var sourceValue = model.getParameterValueById(this._lipSyncParameterIds.at(i));
                          // モーションでの上書きがあった時にはリップシンクは適用しない
                          if ((lipSyncFlags >> i) & 0x01) {
                              continue;
                          }
                          var v = sourceValue + (lipSyncValue - sourceValue) * fadeWeight;
                          model.setParameterValueById(this._lipSyncParameterIds.at(i), v);
                      }
                  }
              }
              for (; c < this._motionData.curveCount && curves.at(c).type == CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity; ++c) {
                  // Find parameter index.
                  parameterIndex = model.getParameterIndex(curves.at(c).id);
                  // Skip curve evaluation if no value in sink.
                  if (parameterIndex == -1) {
                      continue;
                  }
                  // Evaluate curve and apply value.
                  value = evaluateCurve(this._motionData, c, time);
                  model.setParameterValueByIndex(parameterIndex, value);
              }
              if (timeOffsetSeconds >= this._motionData.duration) {
                  if (this._isLoop) {
                      motionQueueEntry.setStartTime(userTimeSeconds); // 最初の状態へ
                      if (this._isLoopFadeIn) {
                          // ループ内でループ用フェードインが有効の時は、フェードイン設定し直し
                          motionQueueEntry.setFadeInStartTime(userTimeSeconds);
                      }
                  }
                  else {
                      motionQueueEntry.setIsFinished(true);
                  }
              }
              this._lastWeight = fadeWeight;
          };
          /**
           * ループ情報の設定
           * @param loop ループ情報
           */
          CubismMotion.prototype.setIsLoop = function (loop) {
              this._isLoop = loop;
          };
          /**
           * ループ情報の取得
           * @return true ループする
           * @return false ループしない
           */
          CubismMotion.prototype.isLoop = function () {
              return this._isLoop;
          };
          /**
           * ループ時のフェードイン情報の設定
           * @param loopFadeIn  ループ時のフェードイン情報
           */
          CubismMotion.prototype.setIsLoopFadeIn = function (loopFadeIn) {
              this._isLoopFadeIn = loopFadeIn;
          };
          /**
           * ループ時のフェードイン情報の取得
           *
           * @return  true    する
           * @return  false   しない
           */
          CubismMotion.prototype.isLoopFadeIn = function () {
              return this._isLoopFadeIn;
          };
          /**
           * モーションの長さを取得する。
           *
           * @return  モーションの長さ[秒]
           */
          CubismMotion.prototype.getDuration = function () {
              return this._isLoop ? -1.0 : this._loopDurationSeconds;
          };
          /**
           * モーションのループ時の長さを取得する。
           *
           * @return  モーションのループ時の長さ[秒]
           */
          CubismMotion.prototype.getLoopDuration = function () {
              return this._loopDurationSeconds;
          };
          /**
           * パラメータに対するフェードインの時間を設定する。
           *
           * @param parameterId     パラメータID
           * @param value           フェードインにかかる時間[秒]
           */
          CubismMotion.prototype.setParameterFadeInTime = function (parameterId, value) {
              var curves = this._motionData.curves;
              for (var i = 0; i < this._motionData.curveCount; ++i) {
                  if (parameterId == curves.at(i).id) {
                      curves.at(i).fadeInTime = value;
                      return;
                  }
              }
          };
          /**
          * パラメータに対するフェードアウトの時間の設定
          * @param parameterId     パラメータID
          * @param value           フェードアウトにかかる時間[秒]
          */
          CubismMotion.prototype.setParameterFadeOutTime = function (parameterId, value) {
              var curves = this._motionData.curves;
              for (var i = 0; i < this._motionData.curveCount; ++i) {
                  if (parameterId == curves.at(i).id) {
                      curves.at(i).fadeOutTime = value;
                      return;
                  }
              }
          };
          /**
          * パラメータに対するフェードインの時間の取得
          * @param    parameterId     パラメータID
          * @return   フェードインにかかる時間[秒]
          */
          CubismMotion.prototype.getParameterFadeInTime = function (parameterId) {
              var curves = this._motionData.curves;
              for (var i = 0; i < this._motionData.curveCount; ++i) {
                  if (parameterId == curves.at(i).id) {
                      return curves.at(i).fadeInTime;
                  }
              }
              return -1;
          };
          /**
          * パラメータに対するフェードアウトの時間を取得
          *
          * @param   parameterId     パラメータID
          * @return   フェードアウトにかかる時間[秒]
          */
          CubismMotion.prototype.getParameterFadeOutTime = function (parameterId) {
              var curves = this._motionData.curves;
              for (var i = 0; i < this._motionData.curveCount; ++i) {
                  if (parameterId == curves.at(i).id) {
                      return curves.at(i).fadeOutTime;
                  }
              }
              return -1;
          };
          /**
           * 自動エフェクトがかかっているパラメータIDリストの設定
           * @param eyeBlinkParameterIds    自動まばたきがかかっているパラメータIDのリスト
           * @param lipSyncParameterIds     リップシンクがかかっているパラメータIDのリスト
           */
          CubismMotion.prototype.setEffectIds = function (eyeBlinkParameterIds, lipSyncParameterIds) {
              this._eyeBlinkParameterIds = eyeBlinkParameterIds;
              this._lipSyncParameterIds = lipSyncParameterIds;
          };
          /**
           * デストラクタ相当の処理
           */
          CubismMotion.prototype.release = function () {
              this._motionData = void 0;
              this._motionData = null;
          };
          /**
           * motion3.jsonをパースする。
           *
           * @param motionJson  motion3.jsonが読み込まれているバッファ
           * @param size        バッファのサイズ
           */
          CubismMotion.prototype.parse = function (motionJson, size) {
              this._motionData = new CubismMotionData();
              var json = new CubismMotionJson(motionJson, size);
              this._motionData.duration = json.getMotionDuration();
              this._motionData.loop = json.isMotionLoop();
              this._motionData.curveCount = json.getMotionCurveCount();
              this._motionData.fps = json.getMotionFps();
              this._motionData.eventCount = json.getEventCount();
              if (json.isExistMotionFadeInTime()) {
                  this._fadeInSeconds = (json.getMotionFadeInTime() < 0.0)
                      ? 1.0
                      : json.getMotionFadeInTime();
              }
              else {
                  this._fadeInSeconds = 1.0;
              }
              if (json.isExistMotionFadeOutTime()) {
                  this._fadeOutSeconds = (json.getMotionFadeOutTime() < 0.0)
                      ? 1.0
                      : json.getMotionFadeOutTime();
              }
              else {
                  this._fadeOutSeconds = 1.0;
              }
              this._motionData.curves.updateSize(this._motionData.curveCount, CubismMotionCurve, true);
              this._motionData.segments.updateSize(json.getMotionTotalSegmentCount(), CubismMotionSegment, true);
              this._motionData.points.updateSize(json.getMotionTotalPointCount(), CubismMotionPoint, true);
              this._motionData.events.updateSize(this._motionData.eventCount, CubismMotionEvent, true);
              var totalPointCount = 0;
              var totalSegmentCount = 0;
              // Curves
              for (var curveCount = 0; curveCount < this._motionData.curveCount; ++curveCount) {
                  if (json.getMotionCurveTarget(curveCount) == TargetNameModel) {
                      this._motionData.curves.at(curveCount).type = CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
                  }
                  else if (json.getMotionCurveTarget(curveCount) == TargetNameParameter) {
                      this._motionData.curves.at(curveCount).type = CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter;
                  }
                  else if (json.getMotionCurveTarget(curveCount) == TargetNamePartOpacity) {
                      this._motionData.curves.at(curveCount).type = CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity;
                  }
                  this._motionData.curves.at(curveCount).id = json.getMotionCurveId(curveCount);
                  this._motionData.curves.at(curveCount).baseSegmentIndex = totalSegmentCount;
                  this._motionData.curves.at(curveCount).fadeInTime =
                      (json.isExistMotionCurveFadeInTime(curveCount))
                          ? json.getMotionCurveFadeInTime(curveCount)
                          : -1.0;
                  this._motionData.curves.at(curveCount).fadeOutTime =
                      (json.isExistMotionCurveFadeOutTime(curveCount))
                          ? json.getMotionCurveFadeOutTime(curveCount)
                          : -1.0;
                  // Segments
                  for (var segmentPosition = 0; segmentPosition < json.getMotionCurveSegmentCount(curveCount);) {
                      if (segmentPosition == 0) {
                          this._motionData.segments.at(totalSegmentCount).basePointIndex = totalPointCount;
                          this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition);
                          this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                          totalPointCount += 1;
                          segmentPosition += 2;
                      }
                      else {
                          this._motionData.segments.at(totalSegmentCount).basePointIndex = totalPointCount - 1;
                      }
                      var segment = json.getMotionCurveSegment(curveCount, segmentPosition);
                      switch (segment) {
                          case CubismMotionSegmentType.CubismMotionSegmentType_Linear:
                              {
                                  this._motionData.segments.at(totalSegmentCount).segmentType = CubismMotionSegmentType.CubismMotionSegmentType_Linear;
                                  this._motionData.segments.at(totalSegmentCount).evaluate = linearEvaluate;
                                  this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 1));
                                  this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 2));
                                  totalPointCount += 1;
                                  segmentPosition += 3;
                                  break;
                              }
                          case CubismMotionSegmentType.CubismMotionSegmentType_Bezier:
                              {
                                  this._motionData.segments.at(totalSegmentCount).segmentType = CubismMotionSegmentType.CubismMotionSegmentType_Bezier;
                                  this._motionData.segments.at(totalSegmentCount).evaluate = bezierEvaluate;
                                  this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 1));
                                  this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 2));
                                  this._motionData.points.at(totalPointCount + 1).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 3));
                                  this._motionData.points.at(totalPointCount + 1).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 4));
                                  this._motionData.points.at(totalPointCount + 2).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 5));
                                  this._motionData.points.at(totalPointCount + 2).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 6));
                                  totalPointCount += 3;
                                  segmentPosition += 7;
                                  break;
                              }
                          case CubismMotionSegmentType.CubismMotionSegmentType_Stepped:
                              {
                                  this._motionData.segments.at(totalSegmentCount).segmentType = CubismMotionSegmentType.CubismMotionSegmentType_Stepped;
                                  this._motionData.segments.at(totalSegmentCount).evaluate = steppedEvaluate;
                                  this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 1));
                                  this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 2));
                                  totalPointCount += 1;
                                  segmentPosition += 3;
                                  break;
                              }
                          case CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped:
                              {
                                  this._motionData.segments.at(totalSegmentCount).segmentType = CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped;
                                  this._motionData.segments.at(totalSegmentCount).evaluate = inverseSteppedEvaluate;
                                  this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 1));
                                  this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 2));
                                  totalPointCount += 1;
                                  segmentPosition += 3;
                                  break;
                              }
                          default:
                              {
                                  Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CSM_ASSERT"])(0);
                                  break;
                              }
                      }
                      ++this._motionData.curves.at(curveCount).segmentCount;
                      ++totalSegmentCount;
                  }
              }
              for (var userdatacount = 0; userdatacount < json.getEventCount(); ++userdatacount) {
                  this._motionData.events.at(userdatacount).fireTime = json.getEventTime(userdatacount);
                  this._motionData.events.at(userdatacount).value = json.getEventValue(userdatacount);
              }
              json.release();
              json = void 0;
              json = null;
          };
          /**
           * モデルのパラメータ更新
           *
           * イベント発火のチェック。
           * 入力する時間は呼ばれるモーションタイミングを０とした秒数で行う。
           *
           * @param beforeCheckTimeSeconds   前回のイベントチェック時間[秒]
           * @param motionTimeSeconds        今回の再生時間[秒]
           */
          CubismMotion.prototype.getFiredEvent = function (beforeCheckTimeSeconds, motionTimeSeconds) {
              this._firedEventValues.updateSize(0);
              // イベントの発火チェック
              for (var u = 0; u < this._motionData.eventCount; ++u) {
                  if ((this._motionData.events.at(u).fireTime > beforeCheckTimeSeconds) &&
                      (this._motionData.events.at(u).fireTime <= motionTimeSeconds)) {
                      this._firedEventValues.pushBack(new csmString(this._motionData.events.at(u).value.s));
                  }
              }
              return this._firedEventValues;
          };
          return CubismMotion;
      }(ACubismMotion));
      Live2DCubismFramework.CubismMotion = CubismMotion;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!**************************************************!*\
    !*** ./Framework/motion/cubismmotioninternal.ts ***!
    \**************************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmVector;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * @brief モーションカーブの種類
       *
       * モーションカーブの種類。
       */
      var CubismMotionCurveTarget;
      (function (CubismMotionCurveTarget) {
          CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Model"] = 0] = "CubismMotionCurveTarget_Model";
          CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Parameter"] = 1] = "CubismMotionCurveTarget_Parameter";
          CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_PartOpacity"] = 2] = "CubismMotionCurveTarget_PartOpacity"; // パーツの不透明度に対して
      })(CubismMotionCurveTarget = Live2DCubismFramework.CubismMotionCurveTarget || (Live2DCubismFramework.CubismMotionCurveTarget = {}));
      ;
      /**
       * @brief モーションカーブのセグメントの種類
       *
       * モーションカーブのセグメントの種類。
       */
      var CubismMotionSegmentType;
      (function (CubismMotionSegmentType) {
          CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Linear"] = 0] = "CubismMotionSegmentType_Linear";
          CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Bezier"] = 1] = "CubismMotionSegmentType_Bezier";
          CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Stepped"] = 2] = "CubismMotionSegmentType_Stepped";
          CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_InverseStepped"] = 3] = "CubismMotionSegmentType_InverseStepped"; // インバースステップ
      })(CubismMotionSegmentType = Live2DCubismFramework.CubismMotionSegmentType || (Live2DCubismFramework.CubismMotionSegmentType = {}));
      ;
      /**
       * @brief モーションカーブの制御点
       *
       * モーションカーブの制御点。
       */
      var CubismMotionPoint = /** @class */ (function () {
          function CubismMotionPoint() {
              this.time = 0.0; // 時間[秒]
              this.value = 0.0; // 値
          }
          return CubismMotionPoint;
      }());
      Live2DCubismFramework.CubismMotionPoint = CubismMotionPoint;
      ;
      /**
       * @brief モーションカーブのセグメント
       *
       * モーションカーブのセグメント。
       */
      var CubismMotionSegment = /** @class */ (function () {
          /**
           * @brief コンストラクタ
           *
           * コンストラクタ。
           */
          function CubismMotionSegment() {
              this.evaluate = null;
              this.basePointIndex = 0;
              this.segmentType = 0;
          }
          return CubismMotionSegment;
      }());
      Live2DCubismFramework.CubismMotionSegment = CubismMotionSegment;
      ;
      /**
       * @brief モーションカーブ
       *
       * モーションカーブ。
       */
      var CubismMotionCurve = /** @class */ (function () {
          function CubismMotionCurve() {
              this.type = CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
              this.segmentCount = 0;
              this.baseSegmentIndex = 0;
              this.fadeInTime = 0.0;
              this.fadeOutTime = 0.0;
          }
          return CubismMotionCurve;
      }());
      Live2DCubismFramework.CubismMotionCurve = CubismMotionCurve;
      ;
      /**
      * イベント。
      */
      var CubismMotionEvent = /** @class */ (function () {
          function CubismMotionEvent() {
              this.fireTime = 0.0;
          }
          return CubismMotionEvent;
      }());
      Live2DCubismFramework.CubismMotionEvent = CubismMotionEvent;
      ;
      /**
       * @brief モーションデータ
       *
       * モーションデータ。
       */
      var CubismMotionData = /** @class */ (function () {
          function CubismMotionData() {
              this.duration = 0.0;
              this.loop = false;
              this.curveCount = 0;
              this.eventCount = 0;
              this.fps = 0.0;
              this.curves = new csmVector();
              this.segments = new csmVector();
              this.points = new csmVector();
              this.events = new csmVector();
          }
          return CubismMotionData;
      }());
      Live2DCubismFramework.CubismMotionData = CubismMotionData;
      ;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!**********************************************!*\
    !*** ./Framework/motion/cubismmotionjson.ts ***!
    \**********************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubismjson */ "./Framework/utils/cubismjson.ts");
  /* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  
  var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].csmString;
  var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismFramework;
  var CubismJson = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismJson;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      // JSON keys
      var Meta = "Meta";
      var Duration = "Duration";
      var Loop = "Loop";
      var CurveCount = "CurveCount";
      var Fps = "Fps";
      var TotalSegmentCount = "TotalSegmentCount";
      var TotalPointCount = "TotalPointCount";
      var Curves = "Curves";
      var Target = "Target";
      var Id = "Id";
      var FadeInTime = "FadeInTime";
      var FadeOutTime = "FadeOutTime";
      var Segments = "Segments";
      var UserData = "UserData";
      var UserDataCount = "UserDataCount";
      var TotalUserDataSize = "TotalUserDataSize";
      var Time = "Time";
      var Value = "Value";
      /**
       * motion3.jsonのコンテナ。
       */
      var CubismMotionJson = /** @class */ (function () {
          /**
           * コンストラクタ
           * @param buffer motion3.jsonが読み込まれているバッファ
           * @param size バッファのサイズ
           */
          function CubismMotionJson(buffer, size) {
              this._json = CubismJson.create(buffer, size);
          }
          /**
           * デストラクタ相当の処理
           */
          CubismMotionJson.prototype.release = function () {
              CubismJson.delete(this._json);
          };
          /**
           * モーションの長さを取得する
           * @return モーションの長さ[秒]
           */
          CubismMotionJson.prototype.getMotionDuration = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(Duration).toFloat();
          };
          /**
           * モーションのループ情報の取得
           * @return true ループする
           * @return false ループしない
           */
          CubismMotionJson.prototype.isMotionLoop = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(Loop).toBoolean();
          };
          /**
           * モーションカーブの個数の取得
           * @return モーションカーブの個数
           */
          CubismMotionJson.prototype.getMotionCurveCount = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(CurveCount).toInt();
          };
          /**
           * モーションのフレームレートの取得
           * @return フレームレート[FPS]
           */
          CubismMotionJson.prototype.getMotionFps = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(Fps).toFloat();
          };
          /**
           * モーションのセグメントの総合計の取得
           * @return モーションのセグメントの取得
           */
          CubismMotionJson.prototype.getMotionTotalSegmentCount = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(TotalSegmentCount).toInt();
          };
          /**
           * モーションのカーブの制御店の総合計の取得
           * @return モーションのカーブの制御点の総合計
           */
          CubismMotionJson.prototype.getMotionTotalPointCount = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(TotalPointCount).toInt();
          };
          /**
           * モーションのフェードイン時間の存在
           * @return true 存在する
           * @return false 存在しない
           */
          CubismMotionJson.prototype.isExistMotionFadeInTime = function () {
              return !this._json.getRoot().getValueByString(Meta).getValueByString(FadeInTime).isNull();
          };
          /**
           * モーションのフェードアウト時間の存在
           * @return true 存在する
           * @return false 存在しない
           */
          CubismMotionJson.prototype.isExistMotionFadeOutTime = function () {
              return !this._json.getRoot().getValueByString(Meta).getValueByString(FadeOutTime).isNull();
          };
          /**
           * モーションのフェードイン時間の取得
           * @return フェードイン時間[秒]
           */
          CubismMotionJson.prototype.getMotionFadeInTime = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(FadeInTime).toFloat();
          };
          /**
           * モーションのフェードアウト時間の取得
           * @return フェードアウト時間[秒]
           */
          CubismMotionJson.prototype.getMotionFadeOutTime = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(FadeOutTime).toFloat();
          };
          /**
           * モーションのカーブの種類の取得
           * @param curveIndex カーブのインデックス
           * @return カーブの種類
           */
          CubismMotionJson.prototype.getMotionCurveTarget = function (curveIndex) {
              return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(Target).getRawString();
          };
          /**
           * モーションのカーブのIDの取得
           * @param curveIndex カーブのインデックス
           * @return カーブのID
           */
          CubismMotionJson.prototype.getMotionCurveId = function (curveIndex) {
              return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(Id).getRawString());
          };
          /**
           * モーションのカーブのフェードイン時間の存在
           * @param curveIndex カーブのインデックス
           * @return true 存在する
           * @return false 存在しない
           */
          CubismMotionJson.prototype.isExistMotionCurveFadeInTime = function (curveIndex) {
              return !this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeInTime).isNull();
          };
          /**
           * モーションのカーブのフェードアウト時間の存在
           * @param curveIndex カーブのインデックス
           * @return true 存在する
           * @return false 存在しない
           */
          CubismMotionJson.prototype.isExistMotionCurveFadeOutTime = function (curveIndex) {
              return !this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeOutTime).isNull();
          };
          /**
           * モーションのカーブのフェードイン時間の取得
           * @param curveIndex カーブのインデックス
           * @return フェードイン時間[秒]
           */
          CubismMotionJson.prototype.getMotionCurveFadeInTime = function (curveIndex) {
              return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeInTime).toFloat();
          };
          /**
           * モーションのカーブのフェードアウト時間の取得
           * @param curveIndex カーブのインデックス
           * @return フェードアウト時間[秒]
           */
          CubismMotionJson.prototype.getMotionCurveFadeOutTime = function (curveIndex) {
              return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeOutTime).toFloat();
          };
          /**
           * モーションのカーブのセグメントの個数を取得する
           * @param curveIndex カーブのインデックス
           * @return モーションのカーブのセグメントの個数
           */
          CubismMotionJson.prototype.getMotionCurveSegmentCount = function (curveIndex) {
              return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(Segments).getVector().getSize();
          };
          /**
           * モーションのカーブのセグメントの値の取得
           * @param curveIndex カーブのインデックス
           * @param segmentIndex セグメントのインデックス
           * @return セグメントの値
           */
          CubismMotionJson.prototype.getMotionCurveSegment = function (curveIndex, segmentIndex) {
              return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(Segments).getValueByIndex(segmentIndex).toFloat();
          };
          /**
           * イベントの個数の取得
           * @return イベントの個数
           */
          CubismMotionJson.prototype.getEventCount = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(UserDataCount).toInt();
          };
          /**
           *  イベントの総文字数の取得
           * @return イベントの総文字数
           */
          CubismMotionJson.prototype.getTotalEventValueSize = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(TotalUserDataSize).toInt();
          };
          /**
           * イベントの時間の取得
           * @param userDataIndex イベントのインデックス
           * @return イベントの時間[秒]
           */
          CubismMotionJson.prototype.getEventTime = function (userDataIndex) {
              return this._json.getRoot().getValueByString(UserData).getValueByIndex(userDataIndex).getValueByString(Time).toInt();
          };
          /**
           * イベントの取得
           * @param userDataIndex イベントのインデックス
           * @return イベントの文字列
           */
          CubismMotionJson.prototype.getEventValue = function (userDataIndex) {
              return new csmString(this._json.getRoot().getValueByString(UserData).getValueByIndex(userDataIndex).getValueByString(Value).getRawString());
          };
          return CubismMotionJson;
      }());
      Live2DCubismFramework.CubismMotionJson = CubismMotionJson;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!*************************************************!*\
    !*** ./Framework/motion/cubismmotionmanager.ts ***!
    \*************************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _cubismmotionqueuemanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmotionqueuemanager */ "./Framework/motion/cubismmotionqueuemanager.ts");
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
  
  var CubismMotionQueueManager = _cubismmotionqueuemanager__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMotionQueueManager;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * モーションの管理
       *
       * モーションの管理を行うクラス
       */
      var CubismMotionManager = /** @class */ (function (_super) {
          __extends(CubismMotionManager, _super);
          /**
           * コンストラクタ
           */
          function CubismMotionManager() {
              var _this = _super.call(this) || this;
              _this._currentPriority = 0;
              _this._reservePriority = 0;
              return _this;
          }
          /**
           * 再生中のモーションの優先度の取得
           * @return  モーションの優先度
           */
          CubismMotionManager.prototype.getCurrentPriority = function () {
              return this._currentPriority;
          };
          /**
           * 予約中のモーションの優先度を取得する。
           * @return  モーションの優先度
           */
          CubismMotionManager.prototype.getReservePriority = function () {
              return this._reservePriority;
          };
          /**
           * 予約中のモーションの優先度を設定する。
           * @param   val     優先度
           */
          CubismMotionManager.prototype.setReservePriority = function (val) {
              this._reservePriority = val;
          };
          /**
           * 優先度を設定してモーションを開始する。
           *
           * @param motion          モーション
           * @param autoDelete      再生が狩猟したモーションのインスタンスを削除するならtrue
           * @param priority        優先度
           * @return                開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するIsFinished()の引数で使用する。開始できない時は「-1」
           */
          CubismMotionManager.prototype.startMotionPriority = function (motion, autoDelete, priority) {
              if (priority == this._reservePriority) {
                  this._reservePriority = 0; // 予約を解除
              }
              this._currentPriority = priority; // 再生中モーションの優先度を設定
              return _super.prototype.startMotion.call(this, motion, autoDelete, this._userTimeSeconds);
          };
          /**
           * モーションを更新して、モデルにパラメータ値を反映する。
           *
           * @param model   対象のモデル
           * @param deltaTimeSeconds    デルタ時間[秒]
           * @return  true    更新されている
           * @return  false   更新されていない
           */
          CubismMotionManager.prototype.updateMotion = function (model, deltaTimeSeconds) {
              this._userTimeSeconds += deltaTimeSeconds;
              var updated = _super.prototype.doUpdateMotion.call(this, model, this._userTimeSeconds);
              if (this.isFinished()) {
                  this._currentPriority = 0; // 再生中のモーションの優先度を解除
              }
              return updated;
          };
          /**
           * モーションを予約する。
           *
           * @param   priority    優先度
           * @return  true    予約できた
           * @return  false   予約できなかった
           */
          CubismMotionManager.prototype.reserveMotion = function (priority) {
              if ((priority <= this._reservePriority) || (priority <= this._currentPriority)) {
                  return false;
              }
              this._reservePriority = priority;
              return true;
          };
          return CubismMotionManager;
      }(CubismMotionQueueManager));
      Live2DCubismFramework.CubismMotionManager = CubismMotionManager;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!****************************************************!*\
    !*** ./Framework/motion/cubismmotionqueueentry.ts ***!
    \****************************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _acubismmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acubismmotion */ "./Framework/motion/acubismmotion.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  var ACubismMotion = _acubismmotion__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].ACubismMotion;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * CubismMotionQueueManagerで再生している各モーションの管理クラス。
       */
      var CubismMotionQueueEntry = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismMotionQueueEntry() {
              this._autoDelete = false;
              this._motion = null;
              this._available = true;
              this._finished = false;
              this._started = false;
              this._startTimeSeconds = -1.0;
              this._fadeInStartTimeSeconds = 0.0;
              this._endTimeSeconds = -1.0;
              this._stateTimeSeconds = 0.0;
              this._stateWeight = 0.0;
              this._lastEventCheckSeconds = 0.0;
              this._motionQueueEntryHandle = this;
          }
          /**
           * デストラクタ相当の処理
           */
          CubismMotionQueueEntry.prototype.release = function () {
              if (this._autoDelete && this._motion) {
                  ACubismMotion.delete(this._motion); //
              }
          };
          /**
           * フェードアウトの開始
           * @param fadeOutSeconds フェードアウトにかかる時間[秒]
           * @param userTimeSeconds デルタ時間の積算値[秒]
           */
          CubismMotionQueueEntry.prototype.startFadeout = function (fadeoutSeconds, userTimeSeconds) {
              var newEndTimeSeconds = userTimeSeconds + fadeoutSeconds;
              if (this._endTimeSeconds < 0.0 || newEndTimeSeconds < this._endTimeSeconds) {
                  this._endTimeSeconds = newEndTimeSeconds;
              }
          };
          /**
           * モーションの終了の確認
           *
           * @return true モーションが終了した
           * @return false 終了していない
           */
          CubismMotionQueueEntry.prototype.isFinished = function () {
              return this._finished;
          };
          /**
           * モーションの開始の確認
           * @return true モーションが開始した
           * @return false 開始していない
           */
          CubismMotionQueueEntry.prototype.isStarted = function () {
              return this._started;
          };
          /**
           * モーションの開始時刻の取得
           * @return モーションの開始時刻[秒]
           */
          CubismMotionQueueEntry.prototype.getStartTime = function () {
              return this._startTimeSeconds;
          };
          /**
           * フェードインの開始時刻の取得
           * @return フェードインの開始時刻[秒]
           */
          CubismMotionQueueEntry.prototype.getFadeInStartTime = function () {
              return this._fadeInStartTimeSeconds;
          };
          /**
           * フェードインの終了時刻の取得
           * @return フェードインの終了時刻の取得
           */
          CubismMotionQueueEntry.prototype.getEndTime = function () {
              return this._endTimeSeconds;
          };
          /**
           * モーションの開始時刻の設定
           * @param startTime モーションの開始時刻
           */
          CubismMotionQueueEntry.prototype.setStartTime = function (startTime) {
              this._startTimeSeconds = startTime;
          };
          /**
           * フェードインの開始時刻の設定
           * @param startTime フェードインの開始時刻[秒]
           */
          CubismMotionQueueEntry.prototype.setFadeInStartTime = function (startTime) {
              this._fadeInStartTimeSeconds = startTime;
          };
          /**
           * フェードインの終了時刻の設定
           * @param endTime フェードインの終了時刻[秒]
           */
          CubismMotionQueueEntry.prototype.setEndTime = function (endTime) {
              this._endTimeSeconds = endTime;
          };
          /**
           * モーションの終了の設定
           * @param f trueならモーションの終了
           */
          CubismMotionQueueEntry.prototype.setIsFinished = function (f) {
              this._finished = f;
          };
          /**
           * モーション開始の設定
           * @param f trueならモーションの開始
           */
          CubismMotionQueueEntry.prototype.setIsStarted = function (f) {
              this._started = f;
          };
          /**
           * モーションの有効性の確認
           * @return true モーションは有効
           * @return false モーションは無効
           */
          CubismMotionQueueEntry.prototype.isAvailable = function () {
              return this._available;
          };
          /**
           * モーションの有効性の設定
           * @param v trueならモーションは有効
           */
          CubismMotionQueueEntry.prototype.setIsAvailable = function (v) {
              this._available = v;
          };
          /**
           * モーションの状態の設定
           * @param timeSeconds 現在時刻[秒]
           * @param weight モーション尾重み
           */
          CubismMotionQueueEntry.prototype.setState = function (timeSeconds, weight) {
              this._stateTimeSeconds = timeSeconds;
              this._stateWeight = weight;
          };
          /**
           * モーションの現在時刻の取得
           * @return モーションの現在時刻[秒]
           */
          CubismMotionQueueEntry.prototype.getStateTime = function () {
              return this._stateTimeSeconds;
          };
          /**
           * モーションの重みの取得
           * @return モーションの重み
           */
          CubismMotionQueueEntry.prototype.getStateWeight = function () {
              return this._stateWeight;
          };
          /**
           * 最後にイベントの発火をチェックした時間を取得
           *
           * @return 最後にイベントの発火をチェックした時間[秒]
           */
          CubismMotionQueueEntry.prototype.getLastCheckEventTime = function () {
              return this._lastEventCheckSeconds;
          };
          /**
           * 最後にイベントをチェックした時間を設定
           * @param checkTime 最後にイベントをチェックした時間[秒]
           */
          CubismMotionQueueEntry.prototype.setLastCheckEventTime = function (checkTime) {
              this._lastEventCheckSeconds = checkTime;
          };
          return CubismMotionQueueEntry;
      }());
      Live2DCubismFramework.CubismMotionQueueEntry = CubismMotionQueueEntry;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!******************************************************!*\
    !*** ./Framework/motion/cubismmotionqueuemanager.ts ***!
    \******************************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _cubismmotionqueueentry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmotionqueueentry */ "./Framework/motion/cubismmotionqueueentry.ts");
  /* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
  var CubismMotionQueueEntry = _cubismmotionqueueentry__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMotionQueueEntry;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * モーション再生の管理
       *
       * モーション再生の管理用クラス。CubismMotionモーションなどACubismMotionのサブクラスを再生するために使用する。
       *
       * @note 再生中に別のモーションが StartMotion()された場合は、新しいモーションに滑らかに変化し旧モーションは中断する。
       *       表情用モーション、体用モーションなどを分けてモーション化した場合など、
       *       複数のモーションを同時に再生させる場合は、複数のCubismMotionQueueManagerインスタンスを使用する。
       */
      var CubismMotionQueueManager = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismMotionQueueManager() {
              this._userTimeSeconds = 0.0;
              this._eventCallBack = null;
              this._eventCustomData = null;
              this._motions = new csmVector();
          }
          /**
           * デストラクタ
           */
          CubismMotionQueueManager.prototype.release = function () {
              for (var i = 0; i < this._motions.getSize(); ++i) {
                  if (this._motions.at(i)) {
                      this._motions.at(i).release();
                      this._motions.set(i, void 0);
                      this._motions.set(i, null);
                  }
              }
              this._motions = null;
          };
          /**
           * 指定したモーションの開始
           *
           * 指定したモーションを開始する。同じタイプのモーションが既にある場合は、既存のモーションに終了フラグを立て、フェードアウトを開始させる。
           *
           * @param   motion          開始するモーション
           * @param   autoDelete      再生が終了したモーションのインスタンスを削除するなら true
           * @param   userTimeSeconds デルタ時間の積算値[秒]
           * @return                      開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するIsFinished()の引数で使用する。開始できない時は「-1」
           */
          CubismMotionQueueManager.prototype.startMotion = function (motion, autoDelete, userTimeSeconds) {
              if (motion == null) {
                  return Live2DCubismFramework.InvalidMotionQueueEntryHandleValue;
              }
              var motionQueueEntry = null;
              // 既にモーションがあれば終了フラグを立てる
              for (var i = 0; i < this._motions.getSize(); ++i) {
                  motionQueueEntry = this._motions.at(i);
                  if (motionQueueEntry == null) {
                      continue;
                  }
                  motionQueueEntry.startFadeout(motionQueueEntry._motion.getFadeOutTime(), userTimeSeconds); // フェードアウトを開始し終了する
              }
              motionQueueEntry = new CubismMotionQueueEntry(); // 終了時に破棄する
              motionQueueEntry._autoDelete = autoDelete;
              motionQueueEntry._motion = motion;
              this._motions.pushBack(motionQueueEntry);
              return motionQueueEntry._motionQueueEntryHandle;
          };
          /**
           * 全てのモーションの終了の確認
           * @return true 全て終了している
           * @return false 終了していない
           */
          CubismMotionQueueManager.prototype.isFinished = function () {
              // ------- 処理を行う -------
              // 既にモーションがあれば終了フラグを立てる
              for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
                  var motionQueueEntry = ite.ptr();
                  if (motionQueueEntry == null) {
                      ite = this._motions.erase(ite); // 削除
                      continue;
                  }
                  var motion = motionQueueEntry._motion;
                  if (motion == null) {
                      motionQueueEntry.release();
                      motionQueueEntry = void 0;
                      motionQueueEntry = null;
                      ite = this._motions.erase(ite); // 削除
                      continue;
                  }
                  // ----- 終了済みの処理があれば削除する ------
                  if (!motionQueueEntry.isFinished()) {
                      return false;
                  }
                  else {
                      ite.preIncrement();
                  }
              }
              return true;
          };
          /**
           * 指定したモーションの終了の確認
           * @param motionQueueEntryNumber モーションの識別番号
           * @return true 全て終了している
           * @return false 終了していない
           */
          CubismMotionQueueManager.prototype.isFinishedByHandle = function (motionQueueEntryNumber) {
              // 既にモーションがあれば終了フラグを立てる
              for (var ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.increment()) {
                  var motionQueueEntry = ite.ptr();
                  if (motionQueueEntry == null) {
                      continue;
                  }
                  if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber && !motionQueueEntry.isFinished()) {
                      return false;
                  }
              }
              return true;
          };
          /**
           * 全てのモーションを停止する
           */
          CubismMotionQueueManager.prototype.stopAllMotions = function () {
              // ------- 処理を行う -------
              // 既にモーションがあれば終了フラグを立てる
              for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
                  var motionQueueEntry = ite.ptr();
                  if (motionQueueEntry == null) {
                      ite = this._motions.erase(ite);
                      continue;
                  }
                  // ----- 終了済みの処理があれば削除する ------
                  motionQueueEntry.release();
                  motionQueueEntry = void 0;
                  motionQueueEntry = null;
                  ite = this._motions.erase(ite); // 削除
              }
          };
          /**
           * 指定したCubismMotionQueueEntryの取得
  
           * @param   motionQueueEntryNumber  モーションの識別番号
           * @return  指定したCubismMotionQueueEntry
           * @return  null   見つからなかった
           */
          CubismMotionQueueManager.prototype.getCubismMotionQueueEntry = function (motionQueueEntryNumber) {
              //------- 処理を行う -------
              // 既にモーションがあれば終了フラグを立てる
              for (var ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.preIncrement()) {
                  var motionQueueEntry = ite.ptr();
                  if (motionQueueEntry == null) {
                      continue;
                  }
                  if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber) {
                      return motionQueueEntry;
                  }
              }
              return null;
          };
          /**
           * イベントを受け取るCallbackの登録
           *
           * @param callback コールバック関数
           * @param customData コールバックに返されるデータ
           */
          CubismMotionQueueManager.prototype.setEventCallback = function (callback, customData) {
              if (customData === void 0) { customData = null; }
              this._eventCallBack = callback;
              this._eventCustomData = customData;
          };
          /**
           * モーションを更新して、モデルにパラメータ値を反映する。
           *
           * @param   model   対象のモデル
           * @param   userTimeSeconds   デルタ時間の積算値[秒]
           * @return  true    モデルへパラメータ値の反映あり
           * @return  false   モデルへパラメータ値の反映なし(モーションの変化なし)
           */
          CubismMotionQueueManager.prototype.doUpdateMotion = function (model, userTimeSeconds) {
              var updated = false;
              // ------- 処理を行う --------
              // 既にモーションがあれば終了フラグを立てる
              for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
                  var motionQueueEntry = ite.ptr();
                  if (motionQueueEntry == null) {
                      ite = this._motions.erase(ite); // 削除
                      continue;
                  }
                  var motion = motionQueueEntry._motion;
                  if (motion == null) {
                      motionQueueEntry.release();
                      motionQueueEntry = void 0;
                      motionQueueEntry = null;
                      ite = this._motions.erase(ite); // 削除
                      continue;
                  }
                  // ------ 値を反映する ------
                  motion.updateParameters(model, motionQueueEntry, userTimeSeconds);
                  updated = true;
                  // ------ ユーザトリガーイベントを検査する ----
                  var firedList = motion.getFiredEvent(motionQueueEntry.getLastCheckEventTime() - motionQueueEntry.getStartTime(), userTimeSeconds - motionQueueEntry.getStartTime());
                  for (var i = 0; i < firedList.getSize(); ++i) {
                      this._eventCallBack(this, firedList.at(i), this._eventCustomData);
                  }
                  motionQueueEntry.setLastCheckEventTime(userTimeSeconds);
                  // ------ 終了済みの処理があれば削除する ------
                  if (motionQueueEntry.isFinished()) {
                      motionQueueEntry.release();
                      motionQueueEntry = void 0;
                      motionQueueEntry = null;
                      ite = this._motions.erase(ite); // 削除
                  }
                  else {
                      ite.preIncrement();
                  }
              }
              return updated;
          };
          return CubismMotionQueueManager;
      }());
      Live2DCubismFramework.CubismMotionQueueManager = CubismMotionQueueManager;
      Live2DCubismFramework.InvalidMotionQueueEntryHandleValue = -1;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })