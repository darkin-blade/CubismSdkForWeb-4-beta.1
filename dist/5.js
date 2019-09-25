/*!******************************************!*\
  !*** ./Framework/effect/cubismbreath.ts ***!
  \******************************************/
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
         * 呼吸機能
         *
         * 呼吸機能を提供する。
         */
        var CubismBreath = /** @class */ (function () {
            /**
             * コンストラクタ
             */
            function CubismBreath() {
                this._currentTime = 0.0;
            }
            /**
             * インスタンスの作成
             */
            CubismBreath.create = function () {
                return new CubismBreath();
            };
            /**
             * インスタンスの破棄
             * @param instance 対象のCubismBreath
             */
            CubismBreath.delete = function (instance) {
                if (instance != null) {
                    instance = null;
                }
            };
            /**
             * 呼吸のパラメータの紐づけ
             * @param breathParameters 呼吸を紐づけたいパラメータのリスト
             */
            CubismBreath.prototype.setParameters = function (breathParameters) {
                this._breathParameters = breathParameters;
            };
            /**
             * 呼吸に紐づいているパラメータの取得
             * @return 呼吸に紐づいているパラメータのリスト
             */
            CubismBreath.prototype.getParameters = function () {
                return this._breathParameters;
            };
            /**
             * モデルのパラメータの更新
             * @param model 対象のモデル
             * @param deltaTimeSeconds デルタ時間[秒]
             */
            CubismBreath.prototype.updateParameters = function (model, deltaTimeSeconds) {
                this._currentTime += deltaTimeSeconds;
                var t = this._currentTime * 2.0 * 3.14159;
                for (var i = 0; i < this._breathParameters.getSize(); ++i) {
                    var data = this._breathParameters.at(i);
                    model.addParameterValueById(data.parameterId, data.offset + (data.peak * Math.sin(t / data.cycle)), data.weight);
                }
            };
            return CubismBreath;
        }());
        Live2DCubismFramework.CubismBreath = CubismBreath;
        /**
         * 呼吸のパラメータ情報
         */
        var BreathParameterData = /** @class */ (function () {
            /**
             * コンストラクタ
             * @param parameterId   呼吸をひもづけるパラメータID
             * @param offset        呼吸を正弦波としたときの、波のオフセット
             * @param peak          呼吸を正弦波としたときの、波の高さ
             * @param cycle         呼吸を正弦波としたときの、波の周期
             * @param weight        パラメータへの重み
             */
            function BreathParameterData(parameterId, offset, peak, cycle, weight) {
                this.parameterId = (parameterId == undefined)
                    ? null
                    : parameterId;
                this.offset = (offset == undefined)
                    ? 0.0
                    : offset;
                this.peak = (peak == undefined)
                    ? 0.0
                    : peak;
                this.cycle = (cycle == undefined)
                    ? 0.0
                    : cycle;
                this.weight = (weight == undefined)
                    ? 0.0
                    : weight;
            }
            return BreathParameterData;
        }());
        Live2DCubismFramework.BreathParameterData = BreathParameterData;
    })(Live2DCubismFramework || (Live2DCubismFramework = {}));
    
    
    /***/ }),
    
    /*!********************************************!*\
      !*** ./Framework/effect/cubismeyeblink.ts ***!
      \********************************************/
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
         * 自動まばたき機能
         *
         * 自動まばたき機能を提供する。
         */
        var CubismEyeBlink = /** @class */ (function () {
            /**
             * コンストラクタ
             * @param modelSetting モデルの設定情報
             */
            function CubismEyeBlink(modelSetting) {
                this._blinkingState = EyeState.EyeState_First;
                this._nextBlinkingTime = 0.0;
                this._stateStartTimeSeconds = 0.0;
                this._blinkingIntervalSeconds = 4.0;
                this._closingSeconds = 0.1;
                this._closedSeconds = 0.05;
                this._openingSeconds = 0.15;
                this._userTimeSeconds = 0.0;
                this._parameterIds = new csmVector();
                if (modelSetting == null) {
                    return;
                }
                for (var i = 0; i < modelSetting.getEyeBlinkParameterCount(); ++i) {
                    this._parameterIds.pushBack(modelSetting.getEyeBlinkParameterId(i));
                }
            }
            /**
             * インスタンスを作成する
             * @param modelSetting モデルの設定情報
             * @return 作成されたインスタンス
             * @note 引数がNULLの場合、パラメータIDが設定されていない空のインスタンスを作成する。
             */
            CubismEyeBlink.create = function (modelSetting) {
                if (modelSetting === void 0) { modelSetting = null; }
                return new CubismEyeBlink(modelSetting);
            };
            /**
             * インスタンスの破棄
             * @param eyeBlink 対象のCubismEyeBlink
             */
            CubismEyeBlink.delete = function (eyeBlink) {
                if (eyeBlink != null) {
                    eyeBlink = null;
                }
            };
            /**
             * まばたきの間隔の設定
             * @param blinkingInterval まばたきの間隔の時間[秒]
             */
            CubismEyeBlink.prototype.setBlinkingInterval = function (blinkingInterval) {
                this._blinkingIntervalSeconds = blinkingInterval;
            };
            /**
             * まばたきのモーションの詳細設定
             * @param closing   まぶたを閉じる動作の所要時間[秒]
             * @param closed    まぶたを閉じている動作の所要時間[秒]
             * @param opening   まぶたを開く動作の所要時間[秒]
             */
            CubismEyeBlink.prototype.setBlinkingSetting = function (closing, closed, opening) {
                this._closingSeconds = closing;
                this._closedSeconds = closed;
                this._openingSeconds = opening;
            };
            /**
             * まばたきさせるパラメータIDのリストの設定
             * @param parameterIds パラメータのIDのリスト
             */
            CubismEyeBlink.prototype.setParameterIds = function (parameterIds) {
                this._parameterIds = parameterIds;
            };
            /**
             * まばたきさせるパラメータIDのリストの取得
             * @return パラメータIDのリスト
             */
            CubismEyeBlink.prototype.getParameterIds = function () {
                return this._parameterIds;
            };
            /**
             * モデルのパラメータの更新
             * @param model 対象のモデル
             * @param deltaTimeSeconds デルタ時間[秒]
             */
            CubismEyeBlink.prototype.updateParameters = function (model, deltaTimeSeconds) {
                this._userTimeSeconds += deltaTimeSeconds;
                var parameterValue;
                var t = 0.0;
                switch (this._blinkingState) {
                    case EyeState.EyeState_Closing:
                        t = ((this._userTimeSeconds - this._stateStartTimeSeconds) / this._closingSeconds);
                        if (t >= 1.0) {
                            t = 1.0;
                            this._blinkingState = EyeState.EyeState_Closed;
                            this._stateStartTimeSeconds = this._userTimeSeconds;
                        }
                        parameterValue = 1.0 - t;
                        break;
                    case EyeState.EyeState_Closed:
                        t = ((this._userTimeSeconds - this._stateStartTimeSeconds) / this._closedSeconds);
                        if (t >= 1.0) {
                            this._blinkingState = EyeState.EyeState_Opening;
                            this._stateStartTimeSeconds = this._userTimeSeconds;
                        }
                        parameterValue = 0.0;
                        break;
                    case EyeState.EyeState_Opening:
                        t = ((this._userTimeSeconds - this._stateStartTimeSeconds) / this._openingSeconds);
                        if (t >= 1.0) {
                            t = 1.0;
                            this._blinkingState = EyeState.EyeState_Interval;
                            this._nextBlinkingTime = this.determinNextBlinkingTiming();
                        }
                        parameterValue = t;
                        break;
                    case EyeState.EyeState_Interval:
                        if (this._nextBlinkingTime < this._userTimeSeconds) {
                            this._blinkingState = EyeState.EyeState_Closing;
                            this._stateStartTimeSeconds = this._userTimeSeconds;
                        }
                        parameterValue = 1.0;
                        break;
                    case EyeState.EyeState_First:
                    default:
                        this._blinkingState = EyeState.EyeState_Interval;
                        this._nextBlinkingTime = this.determinNextBlinkingTiming();
                        parameterValue = 1.0;
                        break;
                }
                if (!CubismEyeBlink.CloseIfZero) {
                    parameterValue = -parameterValue;
                }
                for (var i = 0; i < this._parameterIds.getSize(); ++i) {
                    model.setParameterValueById(this._parameterIds.at(i), parameterValue);
                }
            };
            /**
             * 次の瞬きのタイミングの決定
             *
             * @return 次のまばたきを行う時刻[秒]
             */
            CubismEyeBlink.prototype.determinNextBlinkingTiming = function () {
                var r = Math.random();
                return this._userTimeSeconds + (r * (2.0 * this._blinkingIntervalSeconds - 1.0));
            };
            /**
             * IDで指定された目のパラメータが、0のときに閉じるなら true 、1の時に閉じるなら false 。
             */
            CubismEyeBlink.CloseIfZero = true;
            return CubismEyeBlink;
        }());
        Live2DCubismFramework.CubismEyeBlink = CubismEyeBlink;
        /**
         * まばたきの状態
         *
         * まばたきの状態を表す列挙型
         */
        var EyeState;
        (function (EyeState) {
            EyeState[EyeState["EyeState_First"] = 0] = "EyeState_First";
            EyeState[EyeState["EyeState_Interval"] = 1] = "EyeState_Interval";
            EyeState[EyeState["EyeState_Closing"] = 2] = "EyeState_Closing";
            EyeState[EyeState["EyeState_Closed"] = 3] = "EyeState_Closed";
            EyeState[EyeState["EyeState_Opening"] = 4] = "EyeState_Opening"; // まぶたが開いていく途中の状態
        })(EyeState = Live2DCubismFramework.EyeState || (Live2DCubismFramework.EyeState = {}));
    })(Live2DCubismFramework || (Live2DCubismFramework = {}));
    
    
    /***/ }),
    
    /*!****************************************!*\
      !*** ./Framework/effect/cubismpose.ts ***!
      \****************************************/
    /*! exports provided: Live2DCubismFramework */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
    /* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
    /* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
    /* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cubismjson */ "./Framework/utils/cubismjson.ts");
    /**
     * Copyright(c) Live2D Inc. All rights reserved.
     *
     * Use of this source code is governed by the Live2D Open Software license
     * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
     */
    
    
    
    var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmVector;
    var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismFramework;
    var CubismJson = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismJson;
    var Live2DCubismFramework;
    (function (Live2DCubismFramework) {
        var Epsilon = 0.001;
        var DefaultFadeInSeconds = 0.5;
        // Pose.jsonのタグ
        var FadeIn = "FadeInTime";
        var Link = "Link";
        var Groups = "Groups";
        var Id = "Id";
        /**
         * パーツの不透明度の設定
         *
         * パーツの不透明度の管理と設定を行う。
         */
        var CubismPose = /** @class */ (function () {
            /**
             * コンストラクタ
             */
            function CubismPose() {
                this._fadeTimeSeconds = DefaultFadeInSeconds;
                this._lastModel = null;
                this._partGroups = new csmVector();
                this._partGroupCounts = new csmVector();
            }
            /**
             * インスタンスの作成
             * @param pose3json pose3.jsonのデータ
             * @param size pose3.jsonのデータのサイズ[byte]
             * @return 作成されたインスタンス
             */
            CubismPose.create = function (pose3json, size) {
                var ret = new CubismPose();
                var json = CubismJson.create(pose3json, size);
                var root = json.getRoot();
                // フェード時間の指定
                if (!root.getValueByString(FadeIn).isNull()) {
                    ret._fadeTimeSeconds = root.getValueByString(FadeIn).toFloat(DefaultFadeInSeconds);
                    if (ret._fadeTimeSeconds <= 0.0) {
                        ret._fadeTimeSeconds = DefaultFadeInSeconds;
                    }
                }
                // パーツグループ
                var poseListInfo = root.getValueByString(Groups);
                var poseCount = poseListInfo.getSize();
                for (var poseIndex = 0; poseIndex < poseCount; ++poseIndex) {
                    var idListInfo = poseListInfo.getValueByIndex(poseIndex);
                    var idCount = idListInfo.getSize();
                    var groupCount = 0;
                    for (var groupIndex = 0; groupIndex < idCount; ++groupIndex) {
                        var partInfo = idListInfo.getValueByIndex(groupIndex);
                        var partData = new PartData();
                        var parameterId = CubismFramework.getIdManager().getId(partInfo.getValueByString(Id).getRawString());
                        partData.partId = parameterId;
                        // リンクするパーツの設定
                        if (!partInfo.getValueByString(Link).isNull()) {
                            var linkListInfo = partInfo.getValueByString(Link);
                            var linkCount = linkListInfo.getSize();
                            for (var linkIndex = 0; linkIndex < linkCount; ++linkIndex) {
                                var linkPart = new PartData();
                                var linkId = CubismFramework.getIdManager().getId(linkListInfo.getValueByIndex(linkIndex).getString());
                                linkPart.partId = linkId;
                                partData.link.pushBack(linkPart);
                            }
                        }
                        ret._partGroups.pushBack(partData.clone());
                        ++groupCount;
                    }
                    ret._partGroupCounts.pushBack(groupCount);
                }
                CubismJson.delete(json);
                return ret;
            };
            /**
             * インスタンスを破棄する
             * @param pose 対象のCubismPose
             */
            CubismPose.delete = function (pose) {
                if (pose != null) {
                    pose = null;
                }
            };
            /**
             * モデルのパラメータの更新
             * @param model 対象のモデル
             * @param deltaTimeSeconds デルタ時間[秒]
             */
            CubismPose.prototype.updateParameters = function (model, deltaTimeSeconds) {
                // 前回のモデルと同じでない場合は初期化が必要
                if (model != this._lastModel) {
                    // パラメータインデックスの初期化
                    this.reset(model);
                }
                this._lastModel = model;
                // 設定から時間を変更すると、経過時間がマイナスになる事があるので、経過時間0として対応
                if (deltaTimeSeconds < 0.0) {
                    deltaTimeSeconds = 0.0;
                }
                var beginIndex = 0;
                for (var i = 0; i < this._partGroupCounts.getSize(); i++) {
                    var partGroupCount = this._partGroupCounts.at(i);
                    this.doFade(model, deltaTimeSeconds, beginIndex, partGroupCount);
                    beginIndex += partGroupCount;
                }
                this.copyPartOpacities(model);
            };
            /**
             * 表示を初期化
             * @param model 対象のモデル
             * @note 不透明度の初期値が0でないパラメータは、不透明度を１に設定する
             */
            CubismPose.prototype.reset = function (model) {
                var beginIndex = 0;
                for (var i = 0; i < this._partGroupCounts.getSize(); ++i) {
                    var groupCount = this._partGroupCounts.at(i);
                    for (var j = beginIndex; j < beginIndex + groupCount; ++j) {
                        this._partGroups.at(j).initialize(model);
                        var partsIndex = this._partGroups.at(j).partIndex;
                        var paramIndex = this._partGroups.at(j).parameterIndex;
                        if (partsIndex < 0) {
                            continue;
                        }
                        model.setPartOpacityByIndex(partsIndex, (j == beginIndex ? 1.0 : 0.0));
                        model.setParameterValueByIndex(paramIndex, (j == beginIndex ? 1.0 : 0.0));
                        for (var k = 0; k < this._partGroups.at(j).link.getSize(); ++k) {
                            this._partGroups.at(j).link.at(k).initialize(model);
                        }
                    }
                    beginIndex += groupCount;
                }
            };
            /**
             * パーツの不透明度をコピー
             *
             * @param model 対象のモデル
             */
            CubismPose.prototype.copyPartOpacities = function (model) {
                for (var groupIndex = 0; groupIndex < this._partGroups.getSize(); ++groupIndex) {
                    var partData = this._partGroups.at(groupIndex);
                    if (partData.link.getSize() == 0) {
                        continue; // 連動するパラメータはない
                    }
                    var partIndex = this._partGroups.at(groupIndex).partIndex;
                    var opacity = model.getPartOpacityByIndex(partIndex);
                    for (var linkIndex = 0; linkIndex < partData.link.getSize(); ++linkIndex) {
                        var linkPart = partData.link.at(linkIndex);
                        var linkPartIndex = linkPart.partIndex;
                        if (linkPartIndex < 0) {
                            continue;
                        }
                        model.setPartOpacityByIndex(linkPartIndex, opacity);
                    }
                }
            };
            /**
             * パーツのフェード操作を行う。
             * @param model 対象のモデル
             * @param deltaTimeSeconds デルタ時間[秒]
             * @param beginIndex フェード操作を行うパーツグループの先頭インデックス
             * @param partGroupCount フェード操作を行うパーツグループの個数
             */
            CubismPose.prototype.doFade = function (model, deltaTimeSeconds, beginIndex, partGroupCount) {
                var visiblePartIndex = -1;
                var newOpacity = 1.0;
                var phi = 0.5;
                var backOpacityThreshold = 0.15;
                // 現在、表示状態になっているパーツを取得
                for (var i = beginIndex; i < beginIndex + partGroupCount; ++i) {
                    var partIndex = this._partGroups.at(i).partIndex;
                    var paramIndex = this._partGroups.at(i).parameterIndex;
                    if (model.getParameterValueByIndex(paramIndex) > Epsilon) {
                        if (visiblePartIndex >= 0) {
                            break;
                        }
                        visiblePartIndex = i;
                        newOpacity = model.getPartOpacityByIndex(partIndex);
                        // 新しい不透明度を計算
                        newOpacity += (deltaTimeSeconds / this._fadeTimeSeconds);
                        if (newOpacity > 1.0) {
                            newOpacity = 1.0;
                        }
                    }
                }
                if (visiblePartIndex < 0) {
                    visiblePartIndex = 0;
                    newOpacity = 1.0;
                }
                // 表示パーツ、非表示パーツの不透明度を設定する
                for (var i = beginIndex; i < beginIndex + partGroupCount; ++i) {
                    var partsIndex = this._partGroups.at(i).partIndex;
                    // 表示パーツの設定
                    if (visiblePartIndex == i) {
                        model.setPartOpacityByIndex(partsIndex, newOpacity); // 先に設定
                    }
                    // 非表示パーツの設定
                    else {
                        var opacity = model.getPartOpacityByIndex(partsIndex);
                        var a1 = void 0; // 計算によって求められる不透明度
                        if (newOpacity < phi) {
                            a1 = newOpacity * (phi - 1) / phi + 1.0; // (0,1),(phi,phi)を通る直線式
                        }
                        else {
                            a1 = (1 - newOpacity) * phi / (1.0 - phi); // (1,0),(phi,phi)を通る直線式
                        }
                        // 背景の見える割合を制限する場合
                        var backOpacity = (1.0 - a1) * (1.0 - newOpacity);
                        if (backOpacity > backOpacityThreshold) {
                            a1 = 1.0 - backOpacityThreshold / (1.0 - newOpacity);
                        }
                        if (opacity > a1) {
                            opacity = a1; // 計算の不透明度よりも大きければ（濃ければ）不透明度を上げる
                        }
                        model.setPartOpacityByIndex(partsIndex, opacity);
                    }
                }
            };
            return CubismPose;
        }());
        Live2DCubismFramework.CubismPose = CubismPose;
        /**
         * パーツにまつわるデータを管理
         */
        var PartData = /** @class */ (function () {
            /**
             * コンストラクタ
             */
            function PartData(v) {
                this.parameterIndex = 0;
                this.partIndex = 0;
                this.link = new csmVector();
                if (v != undefined) {
                    this.partId = v.partId;
                    for (var ite = v.link.begin(); ite.notEqual(v.link.end()); ite.preIncrement()) {
                        this.link.pushBack(ite.ptr().clone());
                    }
                }
            }
            /**
             * =演算子のオーバーロード
             */
            PartData.prototype.assignment = function (v) {
                this.partId = v.partId;
                for (var ite = v.link.begin(); ite.notEqual(v.link.end()); ite.preIncrement()) {
                    this.link.pushBack(ite.ptr().clone());
                }
                return this;
            };
            /**
             * 初期化
             * @param model 初期化に使用するモデル
             */
            PartData.prototype.initialize = function (model) {
                this.parameterIndex = model.getParameterIndex(this.partId);
                this.partIndex = model.getPartIndex(this.partId);
                model.setParameterValueByIndex(this.parameterIndex, 1);
            };
            /**
             * オブジェクトのコピーを生成する
             */
            PartData.prototype.clone = function () {
                var clonePartData = new PartData();
                clonePartData.partId = this.partId;
                clonePartData.parameterIndex = this.parameterIndex;
                clonePartData.partIndex = this.partIndex;
                clonePartData.link = new csmVector();
                for (var ite = this.link.begin(); ite.notEqual(this.link.end()); ite.increment()) {
                    clonePartData.link.pushBack(ite.ptr().clone());
                }
                return clonePartData;
            };
            return PartData;
        }());
        Live2DCubismFramework.PartData = PartData;
    })(Live2DCubismFramework || (Live2DCubismFramework = {}));
    
    
    /***/ })    