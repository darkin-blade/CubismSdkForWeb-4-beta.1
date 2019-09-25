/*!********************************************!*\
  !*** ./Framework/physics/cubismphysics.ts ***!
  \********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismphysicsinternal */ "./Framework/physics/cubismphysicsinternal.ts");
  /* harmony import */ var _math_cubismvector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/cubismvector2 */ "./Framework/math/cubismvector2.ts");
  /* harmony import */ var _math_cubismmath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/cubismmath */ "./Framework/math/cubismmath.ts");
  /* harmony import */ var _cubismphysicsjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubismphysicsjson */ "./Framework/physics/cubismphysicsjson.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  
  
  var CubismPhysicsJson = _cubismphysicsjson__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].CubismPhysicsJson;
  var CubismMath = _math_cubismmath__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismMath;
  var CubismPhysicsRig = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsRig;
  var CubismPhysicsSubRig = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsSubRig;
  var CubismPhysicsInput = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsInput;
  var CubismPhysicsOutput = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsOutput;
  var CubismPhysicsParticle = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsParticle;
  var CubismPhysicsSource = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsSource;
  var CubismPhysicsTargetType = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsTargetType;
  var CubismVector2 = _math_cubismvector2__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismVector2;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /// physics types tags.
      var PhysicsTypeTagX = "X";
      var PhysicsTypeTagY = "Y";
      var PhysicsTypeTagAngle = "Angle";
      /// Constant of air resistance.
      var AirResistance = 5.0;
      /// Constant of maximum weight of input and output ratio.
      var MaximumWeight = 100.0;
      /// Constant of threshold of movement.
      var MovementThreshold = 0.001;
      /**
       * 物理演算クラス
       */
      var CubismPhysics = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismPhysics() {
              this._physicsRig = null;
              // set default options
              this._options = new Options();
              this._options.gravity.y = -1.0;
              this._options.gravity.x = 0;
              this._options.wind.x = 0;
              this._options.wind.y = 0;
          }
          /**
           * インスタンスの作成
           * @param buffer    physics3.jsonが読み込まれているバッファ
           * @param size      バッファのサイズ
           * @return 作成されたインスタンス
           */
          CubismPhysics.create = function (buffer, size) {
              var ret = new CubismPhysics();
              ret.parse(buffer, size);
              ret._physicsRig.gravity.y = 0;
              return ret;
          };
          /**
           * インスタンスを破棄する
           * @param physics 破棄するインスタンス
           */
          CubismPhysics.delete = function (physics) {
              if (physics != null) {
                  physics.release();
                  physics = null;
              }
          };
          /**
           * 物理演算の評価
           * @param model 物理演算の結果を適用するモデル
           * @param deltaTimeSeconds デルタ時間[秒]
           */
          CubismPhysics.prototype.evaluate = function (model, deltaTimeSeconds) {
              var totalAngle;
              var weight;
              var radAngle;
              var outputValue;
              var totalTranslation = new CubismVector2();
              var currentSetting;
              var currentInput;
              var currentOutput;
              var currentParticles;
              var parameterValue;
              var parameterMaximumValue;
              var parameterMinimumValue;
              var parameterDefaultValue;
              parameterValue = model.getModel().parameters.values;
              parameterMaximumValue = model.getModel().parameters.maximumValues;
              parameterMinimumValue = model.getModel().parameters.minimumValues;
              parameterDefaultValue = model.getModel().parameters.defaultValues;
              for (var settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
                  totalAngle = { angle: 0.0 };
                  totalTranslation.x = 0.0;
                  totalTranslation.y = 0.0;
                  currentSetting = this._physicsRig.settings.at(settingIndex);
                  currentInput = this._physicsRig.inputs.get(currentSetting.baseInputIndex);
                  currentOutput = this._physicsRig.outputs.get(currentSetting.baseOutputIndex);
                  currentParticles = this._physicsRig.particles.get(currentSetting.baseParticleIndex);
                  // Load input parameters
                  for (var i = 0; i < currentSetting.inputCount; ++i) {
                      weight = currentInput[i].weight / MaximumWeight;
                      if (currentInput[i].sourceParameterIndex == -1) {
                          currentInput[i].sourceParameterIndex = model.getParameterIndex(currentInput[i].source.id);
                      }
                      currentInput[i].getNormalizedParameterValue(totalTranslation, totalAngle, parameterValue[currentInput[i].sourceParameterIndex], parameterMinimumValue[currentInput[i].sourceParameterIndex], parameterMaximumValue[currentInput[i].sourceParameterIndex], parameterDefaultValue[currentInput[i].sourceParameterIndex], currentSetting.normalizationPosition, currentSetting.normalizationAngle, currentInput[0].reflect, weight);
                  }
                  radAngle = CubismMath.degreesToRadian(-totalAngle.angle);
                  totalTranslation.x = (totalTranslation.x * CubismMath.cos(radAngle) - totalTranslation.y * CubismMath.sin(radAngle));
                  totalTranslation.y = (totalTranslation.x * CubismMath.sin(radAngle) + totalTranslation.y * CubismMath.cos(radAngle));
                  // Calculate particles position.
                  updateParticles(currentParticles, currentSetting.particleCount, totalTranslation, totalAngle.angle, this._options.wind, MovementThreshold * currentSetting.normalizationPosition.maximum, deltaTimeSeconds, AirResistance);
                  // Update output parameters.
                  for (var i = 0; i < currentSetting.outputCount; ++i) {
                      var particleIndex = currentOutput[i].vertexIndex;
                      if (particleIndex < 1 || particleIndex >= currentSetting.particleCount) {
                          break;
                      }
                      if (currentOutput[i].destinationParameterIndex == -1) {
                          currentOutput[i].destinationParameterIndex = model.getParameterIndex(currentOutput[i].destination.id);
                      }
                      var translation = new CubismVector2();
                      translation.x = currentParticles[particleIndex].position.x - currentParticles[particleIndex - 1].position.x;
                      translation.y = currentParticles[particleIndex].position.y - currentParticles[particleIndex - 1].position.y;
                      outputValue = currentOutput[i].getValue(translation, currentParticles, particleIndex, currentOutput[i].reflect, this._options.gravity);
                      var destinationParameterIndex = currentOutput[i].destinationParameterIndex;
                      var outParameterValue = (!Float32Array.prototype.slice && 'subarray' in Float32Array.prototype)
                          ? JSON.parse(JSON.stringify(parameterValue.subarray(destinationParameterIndex))) // 値渡しするため、JSON.parse, JSON.stringify
                          : parameterValue.slice(destinationParameterIndex);
                      updateOutputParameterValue(outParameterValue, parameterMinimumValue[destinationParameterIndex], parameterMaximumValue[destinationParameterIndex], outputValue, currentOutput[i]);
                      // 値を反映
                      for (var offset = destinationParameterIndex, outParamIndex = 0; offset < parameterValue.length; offset++, outParamIndex++) {
                          parameterValue[offset] = outParameterValue[outParamIndex];
                      }
                  }
              }
          };
          /**
           * オプションの設定
           * @param options オプション
           */
          CubismPhysics.prototype.setOptions = function (options) {
              this._options = options;
          };
          /**
           * オプションの取得
           * @return オプション
           */
          CubismPhysics.prototype.getOption = function () {
              return this._options;
          };
          /**
           * デストラクタ相当の処理
           */
          CubismPhysics.prototype.release = function () {
              this._physicsRig = void 0;
              this._physicsRig = null;
          };
          /**
           * physics3.jsonをパースする。
           * @param physicsJson physics3.jsonが読み込まれているバッファ
           * @param size バッファのサイズ
           */
          CubismPhysics.prototype.parse = function (physicsJson, size) {
              this._physicsRig = new CubismPhysicsRig();
              var json = new CubismPhysicsJson(physicsJson, size);
              this._physicsRig.gravity = json.getGravity();
              this._physicsRig.wind = json.getWind();
              this._physicsRig.subRigCount = json.getSubRigCount();
              this._physicsRig.settings.updateSize(this._physicsRig.subRigCount, CubismPhysicsSubRig, true);
              this._physicsRig.inputs.updateSize(json.getTotalInputCount(), CubismPhysicsInput, true);
              this._physicsRig.outputs.updateSize(json.getTotalOutputCount(), CubismPhysicsOutput, true);
              this._physicsRig.particles.updateSize(json.getVertexCount(), CubismPhysicsParticle, true);
              var inputIndex = 0, outputIndex = 0, particleIndex = 0;
              for (var i = 0; i < this._physicsRig.settings.getSize(); ++i) {
                  this._physicsRig.settings.at(i).normalizationPosition.minimum = json.getNormalizationPositionMinimumValue(i);
                  this._physicsRig.settings.at(i).normalizationPosition.maximum = json.getNormalizationPositionMaximumValue(i);
                  this._physicsRig.settings.at(i).normalizationPosition.defalut = json.getNormalizationPositionDefaultValue(i);
                  this._physicsRig.settings.at(i).normalizationAngle.minimum = json.getNormalizationAngleMinimumValue(i);
                  this._physicsRig.settings.at(i).normalizationAngle.maximum = json.getNormalizationAngleMaximumValue(i);
                  this._physicsRig.settings.at(i).normalizationAngle.defalut = json.getNormalizationAngleDefaultValue(i);
                  // Input
                  this._physicsRig.settings.at(i).inputCount = json.getInputCount(i);
                  this._physicsRig.settings.at(i).baseInputIndex = inputIndex;
                  for (var j = 0; j < this._physicsRig.settings.at(i).inputCount; ++j) {
                      this._physicsRig.inputs.at(inputIndex + j).sourceParameterIndex = -1;
                      this._physicsRig.inputs.at(inputIndex + j).weight = json.getInputWeight(i, j);
                      this._physicsRig.inputs.at(inputIndex + j).reflect = json.getInputReflect(i, j);
                      if (json.getInputType(i, j) == PhysicsTypeTagX) {
                          this._physicsRig.inputs.at(inputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_X;
                          this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputTranslationXFromNormalizedParameterValue;
                      }
                      else if (json.getInputType(i, j) == PhysicsTypeTagY) {
                          this._physicsRig.inputs.at(inputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_Y;
                          this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputTranslationYFromNormalizedParamterValue;
                      }
                      else if (json.getInputType(i, j) == PhysicsTypeTagAngle) {
                          this._physicsRig.inputs.at(inputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_Angle;
                          this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputAngleFromNormalizedParameterValue;
                      }
                      this._physicsRig.inputs.at(inputIndex + j).source.targetType = CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
                      this._physicsRig.inputs.at(inputIndex + j).source.id = json.getInputSourceId(i, j);
                  }
                  inputIndex += this._physicsRig.settings.at(i).inputCount;
                  // Output
                  this._physicsRig.settings.at(i).outputCount = json.getOutputCount(i);
                  this._physicsRig.settings.at(i).baseOutputIndex = outputIndex;
                  for (var j = 0; j < this._physicsRig.settings.at(i).outputCount; ++j) {
                      this._physicsRig.outputs.at(outputIndex + j).destinationParameterIndex = -1;
                      this._physicsRig.outputs.at(outputIndex + j).vertexIndex = json.getOutputVertexIndex(i, j);
                      this._physicsRig.outputs.at(outputIndex + j).angleScale = json.getOutputAngleScale(i, j);
                      this._physicsRig.outputs.at(outputIndex + j).weight = json.getOutputWeight(i, j);
                      this._physicsRig.outputs.at(outputIndex + j).destination.targetType = CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
                      this._physicsRig.outputs.at(outputIndex + j).destination.id = json.getOutputDestinationId(i, j);
                      if (json.getOutputType(i, j) == PhysicsTypeTagX) {
                          this._physicsRig.outputs.at(outputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_X;
                          this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputTranslationX;
                          this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleTranslationX;
                      }
                      else if (json.getOutputType(i, j) == PhysicsTypeTagY) {
                          this._physicsRig.outputs.at(outputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_Y;
                          this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputTranslationY;
                          this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleTranslationY;
                      }
                      else if (json.getOutputType(i, j) == PhysicsTypeTagAngle) {
                          this._physicsRig.outputs.at(outputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_Angle;
                          this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputAngle;
                          this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleAngle;
                      }
                      this._physicsRig.outputs.at(outputIndex + j).reflect = json.getOutputReflect(i, j);
                  }
                  outputIndex += this._physicsRig.settings.at(i).outputCount;
                  // Particle
                  this._physicsRig.settings.at(i).particleCount = json.getParticleCount(i);
                  this._physicsRig.settings.at(i).baseParticleIndex = particleIndex;
                  for (var j = 0; j < this._physicsRig.settings.at(i).particleCount; ++j) {
                      this._physicsRig.particles.at(particleIndex + j).mobility = json.getParticleMobility(i, j);
                      this._physicsRig.particles.at(particleIndex + j).delay = json.getParticleDelay(i, j);
                      this._physicsRig.particles.at(particleIndex + j).acceleration = json.getParticleAcceleration(i, j);
                      this._physicsRig.particles.at(particleIndex + j).radius = json.getParticleRadius(i, j);
                      this._physicsRig.particles.at(particleIndex + j).position = json.getParticlePosition(i, j);
                  }
                  particleIndex += this._physicsRig.settings.at(i).particleCount;
              }
              this.initialize();
              json.release();
              json = void 0;
              json = null;
          };
          /**
           * 初期化する
           */
          CubismPhysics.prototype.initialize = function () {
              var strand;
              var currentSetting;
              var radius;
              for (var settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
                  currentSetting = this._physicsRig.settings.at(settingIndex);
                  strand = this._physicsRig.particles.get(currentSetting.baseParticleIndex);
                  // Initialize the top of particle.
                  strand[0].initialPosition = new CubismVector2(0.0, 0.0);
                  strand[0].lastPosition = new CubismVector2(strand[0].initialPosition.x, strand[0].initialPosition.y);
                  strand[0].lastGravity = new CubismVector2(0.0, -1.0);
                  strand[0].lastGravity.y *= -1.0;
                  strand[0].velocity = new CubismVector2(0.0, 0.0);
                  strand[0].force = new CubismVector2(0.0, 0.0);
                  // Initialize paritcles.
                  for (var i = 1; i < currentSetting.particleCount; ++i) {
                      radius = new CubismVector2(0.0, 0.0);
                      radius.y = strand[i].radius;
                      strand[i].initialPosition = new CubismVector2(strand[i - 1].initialPosition.x + radius.x, strand[i - 1].initialPosition.y + radius.y);
                      strand[i].position = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
                      strand[i].lastPosition = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
                      strand[i].lastGravity = new CubismVector2(0.0, -1.0);
                      strand[i].lastGravity.y *= -1.0;
                      strand[i].velocity = new CubismVector2(0.0, 0.0);
                      strand[i].force = new CubismVector2(0.0, 0.0);
                  }
              }
          };
          return CubismPhysics;
      }());
      Live2DCubismFramework.CubismPhysics = CubismPhysics;
      /**
       * 物理演算のオプション
       */
      var Options = /** @class */ (function () {
          function Options() {
              this.gravity = new CubismVector2(0, 0);
              this.wind = new CubismVector2(0, 0);
          }
          return Options;
      }());
      Live2DCubismFramework.Options = Options;
      /**
       * Gets sign.
       *
       * @param value Evaluation target value.
       *
       * @return Sign of value.
       */
      function sign(value) {
          var ret = 0;
          if (value > 0.0) {
              ret = 1;
          }
          else if (value < 0.0) {
              ret = -1;
          }
          return ret;
      }
      function getInputTranslationXFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
          targetTranslation.x += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
      }
      function getInputTranslationYFromNormalizedParamterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
          targetTranslation.y += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
      }
      function getInputAngleFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizaitionPosition, normalizationAngle, isInverted, weight) {
          targetAngle.angle += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationAngle.minimum, normalizationAngle.maximum, normalizationAngle.defalut, isInverted) * weight;
      }
      function getOutputTranslationX(translation, particles, particleIndex, isInverted, parentGravity) {
          var outputValue = translation.x;
          if (isInverted) {
              outputValue *= -1.0;
          }
          return outputValue;
      }
      function getOutputTranslationY(translation, particles, particleIndex, isInverted, parentGravity) {
          var outputValue = translation.y;
          if (isInverted) {
              outputValue *= -1.0;
          }
          return outputValue;
      }
      function getOutputAngle(translation, particles, particleIndex, isInverted, parentGravity) {
          var outputValue;
          if (particleIndex >= 2) {
              parentGravity = particles[particleIndex - 1].position.substract(particles[particleIndex - 2].position);
          }
          else {
              parentGravity = parentGravity.multiplyByScaler(-1.0);
          }
          outputValue = CubismMath.directionToRadian(parentGravity, translation);
          if (isInverted) {
              outputValue *= -1.0;
          }
          return outputValue;
      }
      function getRangeValue(min, max) {
          var maxValue = CubismMath.max(min, max);
          var minValue = CubismMath.min(min, max);
          return CubismMath.abs(maxValue - minValue);
      }
      function getDefaultValue(min, max) {
          var minValue = CubismMath.min(min, max);
          return minValue + (getRangeValue(min, max) / 2.0);
      }
      function getOutputScaleTranslationX(translationScale, angleScale) {
          return JSON.parse(JSON.stringify(translationScale.x));
      }
      function getOutputScaleTranslationY(translationScale, angleScale) {
          return JSON.parse(JSON.stringify(translationScale.y));
      }
      function getOutputScaleAngle(translationScale, angleScale) {
          return JSON.parse(JSON.stringify(angleScale));
      }
      /**
       * Updates particles.
       *
       * @param strand                Target array of particle.
       * @param strandCount           Count of particle.
       * @param totalTranslation      Total translation value.
       * @param totalAngle            Total angle.
       * @param windDirection         Direction of Wind.
       * @param thresholdValue        Threshold of movement.
       * @param deltaTimeSeconds      Delta time.
       * @param airResistance         Air resistance.
       */
      function updateParticles(strand, strandCount, totalTranslation, totalAngle, windDirection, thresholdValue, deltaTimeSeconds, airResistance) {
          var totalRadian;
          var delay;
          var radian;
          var currentGravity;
          var direction = new CubismVector2(0.0, 0.0);
          var velocity = new CubismVector2(0.0, 0.0);
          var force = new CubismVector2(0.0, 0.0);
          var newDirection = new CubismVector2(0.0, 0.0);
          strand[0].position = new CubismVector2(totalTranslation.x, totalTranslation.y);
          totalRadian = CubismMath.degreesToRadian(totalAngle);
          currentGravity = CubismMath.radianToDirection(totalRadian);
          currentGravity.normalize();
          for (var i = 1; i < strandCount; ++i) {
              strand[i].force = currentGravity.multiplyByScaler(strand[i].acceleration).add(windDirection);
              strand[i].lastPosition = new CubismVector2(strand[i].position.x, strand[i].position.y);
              delay = strand[i].delay * deltaTimeSeconds * 30.0;
              direction = strand[i].position.substract(strand[i - 1].position);
              radian = CubismMath.directionToRadian(strand[i].lastGravity, currentGravity) / airResistance;
              direction.x = ((CubismMath.cos(radian) * direction.x) - (direction.y * CubismMath.sin(radian)));
              direction.y = ((CubismMath.sin(radian) * direction.x) + (direction.y * CubismMath.cos(radian)));
              strand[i].position = strand[i - 1].position.add(direction);
              velocity = strand[i].velocity.multiplyByScaler(delay);
              force = strand[i].force.multiplyByScaler(delay).multiplyByScaler(delay);
              strand[i].position = strand[i].position.add(velocity).add(force);
              newDirection = strand[i].position.substract(strand[i - 1].position);
              newDirection.normalize();
              strand[i].position = strand[i - 1].position.add(newDirection.multiplyByScaler(strand[i].radius));
              if (CubismMath.abs(strand[i].position.x) < thresholdValue) {
                  strand[i].position.x = 0.0;
              }
              if (delay != 0.0) {
                  strand[i].velocity = strand[i].position.substract(strand[i].lastPosition);
                  strand[i].velocity = strand[i].velocity.divisionByScalar(delay);
                  strand[i].velocity = strand[i].velocity.multiplyByScaler(strand[i].mobility);
              }
              strand[i].force = new CubismVector2(0.0, 0.0);
              strand[i].lastGravity = new CubismVector2(currentGravity.x, currentGravity.y);
          }
      }
      /**
       * Updates output parameter value.
       * @param parameterValue            Target parameter value.
       * @param parameterValueMinimum     Minimum of parameter value.
       * @param parameterValueMaximum     Maximum of parameter value.
       * @param translation               Translation value.
       */
      function updateOutputParameterValue(parameterValue, parameterValueMinimum, parameterValueMaximum, translation, output) {
          var outputScale;
          var value;
          var weight;
          outputScale = output.getScale(output.translationScale, output.angleScale);
          value = translation * outputScale;
          if (value < parameterValueMinimum) {
              if (value < output.valueBelowMinimum) {
                  output.valueBelowMinimum = value;
              }
              value = parameterValueMinimum;
          }
          else if (value > parameterValueMaximum) {
              if (value > output.valueExceededMaximum) {
                  output.valueExceededMaximum = value;
              }
              value = parameterValueMaximum;
          }
          weight = (output.weight / MaximumWeight);
          if (weight >= 1.0) {
              parameterValue[0] = value;
          }
          else {
              value = (parameterValue[0] * (1.0 - weight)) + (value * weight);
              parameterValue[0] = value;
          }
      }
      function normalizeParameterValue(value, parameterMinimum, parameterMaximum, parameterDefault, normalizedMinimum, normalizedMaximum, normalizedDefault, isInverted) {
          var result = 0.0;
          var maxValue = CubismMath.max(parameterMaximum, parameterMinimum);
          if (maxValue < value) {
              value = maxValue;
          }
          var minValue = CubismMath.min(parameterMaximum, parameterMinimum);
          if (minValue > value) {
              value = minValue;
          }
          var minNormValue = CubismMath.min(normalizedMinimum, normalizedMaximum);
          var maxNormValue = CubismMath.max(normalizedMinimum, normalizedMaximum);
          var middleNormValue = normalizedDefault;
          var middleValue = getDefaultValue(minValue, maxValue);
          var paramValue = value - middleValue;
          switch (sign(paramValue)) {
              case 1:
                  {
                      var nLength = maxNormValue - middleNormValue;
                      var pLength = maxValue - middleValue;
                      if (pLength != 0.0) {
                          result = paramValue * (nLength / pLength);
                          result += middleNormValue;
                      }
                      break;
                  }
              case -1:
                  {
                      var nLength = minNormValue - middleNormValue;
                      var pLength = minValue - middleValue;
                      if (pLength != 0.0) {
                          result = paramValue * (nLength / pLength);
                          result += middleNormValue;
                      }
                      break;
                  }
              case 0:
                  {
                      result = middleNormValue;
                      break;
                  }
              default:
                  {
                      break;
                  }
          }
          return (isInverted)
              ? result
              : (result * -1.0);
      }
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!****************************************************!*\
    !*** ./Framework/physics/cubismphysicsinternal.ts ***!
    \****************************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _math_cubismvector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/cubismvector2 */ "./Framework/math/cubismvector2.ts");
  /* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
  var CubismVector2 = _math_cubismvector2__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismVector2;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * 物理演算の適用先の種類
       */
      var CubismPhysicsTargetType;
      (function (CubismPhysicsTargetType) {
          CubismPhysicsTargetType[CubismPhysicsTargetType["CubismPhysicsTargetType_Parameter"] = 0] = "CubismPhysicsTargetType_Parameter";
      })(CubismPhysicsTargetType = Live2DCubismFramework.CubismPhysicsTargetType || (Live2DCubismFramework.CubismPhysicsTargetType = {}));
      /**
       * 物理演算の入力の種類
       */
      var CubismPhysicsSource;
      (function (CubismPhysicsSource) {
          CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_X"] = 0] = "CubismPhysicsSource_X";
          CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Y"] = 1] = "CubismPhysicsSource_Y";
          CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Angle"] = 2] = "CubismPhysicsSource_Angle";
      })(CubismPhysicsSource = Live2DCubismFramework.CubismPhysicsSource || (Live2DCubismFramework.CubismPhysicsSource = {}));
      /**
       * @brief 物理演算で使用する外部の力
       *
       * 物理演算で使用する外部の力。
       */
      var PhysicsJsonEffectiveForces = /** @class */ (function () {
          function PhysicsJsonEffectiveForces() {
              this.gravity = new CubismVector2(0, 0);
              this.wind = new CubismVector2(0, 0);
          }
          return PhysicsJsonEffectiveForces;
      }());
      Live2DCubismFramework.PhysicsJsonEffectiveForces = PhysicsJsonEffectiveForces;
      /**
       * 物理演算のパラメータ情報
       */
      var CubismPhysicsParameter = /** @class */ (function () {
          function CubismPhysicsParameter() {
          }
          return CubismPhysicsParameter;
      }());
      Live2DCubismFramework.CubismPhysicsParameter = CubismPhysicsParameter;
      /**
       * 物理演算の正規化情報
       */
      var CubismPhysicsNormalization = /** @class */ (function () {
          function CubismPhysicsNormalization() {
          }
          return CubismPhysicsNormalization;
      }());
      Live2DCubismFramework.CubismPhysicsNormalization = CubismPhysicsNormalization;
      /**
       * 物理演算の演算委使用する物理点の情報
       */
      var CubismPhysicsParticle = /** @class */ (function () {
          function CubismPhysicsParticle() {
              this.initialPosition = new CubismVector2(0, 0);
              this.position = new CubismVector2(0, 0);
              this.lastPosition = new CubismVector2(0, 0);
              this.lastGravity = new CubismVector2(0, 0);
              this.force = new CubismVector2(0, 0);
              this.velocity = new CubismVector2(0, 0);
          }
          return CubismPhysicsParticle;
      }());
      Live2DCubismFramework.CubismPhysicsParticle = CubismPhysicsParticle;
      /**
       * 物理演算の物理点の管理
       */
      var CubismPhysicsSubRig = /** @class */ (function () {
          function CubismPhysicsSubRig() {
              this.normalizationPosition = new CubismPhysicsNormalization();
              this.normalizationAngle = new CubismPhysicsNormalization();
          }
          return CubismPhysicsSubRig;
      }());
      Live2DCubismFramework.CubismPhysicsSubRig = CubismPhysicsSubRig;
      /**
       * 物理演算の入力情報
       */
      var CubismPhysicsInput = /** @class */ (function () {
          function CubismPhysicsInput() {
              this.source = new CubismPhysicsParameter();
          }
          return CubismPhysicsInput;
      }());
      Live2DCubismFramework.CubismPhysicsInput = CubismPhysicsInput;
      /**
       * @brief 物理演算の出力情報
       *
       * 物理演算の出力情報。
       */
      var CubismPhysicsOutput = /** @class */ (function () {
          function CubismPhysicsOutput() {
              this.destination = new CubismPhysicsParameter();
              this.translationScale = new CubismVector2(0, 0);
          }
          return CubismPhysicsOutput;
      }());
      Live2DCubismFramework.CubismPhysicsOutput = CubismPhysicsOutput;
      /**
       * @brief 物理演算のデータ
       *
       * 物理演算のデータ。
       */
      var CubismPhysicsRig = /** @class */ (function () {
          function CubismPhysicsRig() {
              this.settings = new csmVector();
              this.inputs = new csmVector();
              this.outputs = new csmVector();
              this.particles = new csmVector();
              this.gravity = new CubismVector2(0, 0);
              this.wind = new CubismVector2(0, 0);
          }
          return CubismPhysicsRig;
      }());
      Live2DCubismFramework.CubismPhysicsRig = CubismPhysicsRig;
      ;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!************************************************!*\
    !*** ./Framework/physics/cubismphysicsjson.ts ***!
    \************************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubismjson */ "./Framework/utils/cubismjson.ts");
  /* harmony import */ var _math_cubismvector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/cubismvector2 */ "./Framework/math/cubismvector2.ts");
  /* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  
  var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismFramework;
  var CubismVector2 = _math_cubismvector2__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismVector2;
  var CubismJson = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismJson;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      // JSON keys
      var Position = "Position";
      var X = "X";
      var Y = "Y";
      var Angle = "Angle";
      var Type = "Type";
      var Id = "Id";
      // Meta
      var Meta = "Meta";
      var EffectiveForces = "EffectiveForces";
      var TotalInputCount = "TotalInputCount";
      var TotalOutputCount = "TotalOutputCount";
      var PhysicsSettingCount = "PhysicsSettingCount";
      var Gravity = "Gravity";
      var Wind = "Wind";
      var VertexCount = "VertexCount";
      // PhysicsSettings
      var PhysicsSettings = "PhysicsSettings";
      var Normalization = "Normalization";
      var Minimum = "Minimum";
      var Maximum = "Maximum";
      var Default = "Default";
      var Reflect = "Reflect";
      var Weight = "Weight";
      // Input
      var Input = "Input";
      var Source = "Source";
      // Output
      var Output = "Output";
      var Scale = "Scale";
      var VertexIndex = "VertexIndex";
      var Destination = "Destination";
      // Particle
      var Vertices = "Vertices";
      var Mobility = "Mobility";
      var Delay = "Delay";
      var Radius = "Radius";
      var Acceleration = "Acceleration";
      /**
       * physics3.jsonのコンテナ。
       */
      var CubismPhysicsJson = /** @class */ (function () {
          /**
           * コンストラクタ
           * @param buffer physics3.jsonが読み込まれているバッファ
           * @param size バッファのサイズ
           */
          function CubismPhysicsJson(buffer, size) {
              this._json = CubismJson.create(buffer, size);
          }
          /**
           * デストラクタ相当の処理
           */
          CubismPhysicsJson.prototype.release = function () {
              CubismJson.delete(this._json);
          };
          /**
           * 重力の取得
           * @return 重力
           */
          CubismPhysicsJson.prototype.getGravity = function () {
              var ret = new CubismVector2(0, 0);
              ret.x = this._json.getRoot().getValueByString(Meta).getValueByString(EffectiveForces).getValueByString(Gravity).getValueByString(X).toFloat();
              ret.y = this._json.getRoot().getValueByString(Meta).getValueByString(EffectiveForces).getValueByString(Gravity).getValueByString(Y).toFloat();
              return ret;
          };
          /**
           * 風の取得
           * @return 風
           */
          CubismPhysicsJson.prototype.getWind = function () {
              var ret = new CubismVector2(0, 0);
              ret.x = this._json.getRoot().getValueByString(Meta).getValueByString(EffectiveForces).getValueByString(Wind).getValueByString(X).toFloat();
              ret.y = this._json.getRoot().getValueByString(Meta).getValueByString(EffectiveForces).getValueByString(Wind).getValueByString(Y).toFloat();
              return ret;
          };
          /**
           * 物理店の管理の個数の取得
           * @return 物理店の管理の個数
           */
          CubismPhysicsJson.prototype.getSubRigCount = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(PhysicsSettingCount).toInt();
          };
          /**
           * 入力の総合計の取得
           * @return 入力の総合計
           */
          CubismPhysicsJson.prototype.getTotalInputCount = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(TotalInputCount).toInt();
          };
          /**
           * 出力の総合計の取得
           * @return 出力の総合計
           */
          CubismPhysicsJson.prototype.getTotalOutputCount = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(TotalOutputCount).toInt();
          };
          /**
           * 物理点の個数の取得
           * @return 物理点の個数
           */
          CubismPhysicsJson.prototype.getVertexCount = function () {
              return this._json.getRoot().getValueByString(Meta).getValueByString(VertexCount).toInt();
          };
          /**
           * 正規化された位置の最小値の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @return 正規化された位置の最小値
           */
          CubismPhysicsJson.prototype.getNormalizationPositionMinimumValue = function (physicsSettingIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Position).getValueByString(Minimum).toFloat();
          };
          /**
           * 正規化された位置の最大値の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @return 正規化された位置の最大値
           */
          CubismPhysicsJson.prototype.getNormalizationPositionMaximumValue = function (physicsSettingIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Position).getValueByString(Maximum).toFloat();
          };
          /**
           * 正規化された位置のデフォルト値の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @return 正規化された位置のデフォルト値
           */
          CubismPhysicsJson.prototype.getNormalizationPositionDefaultValue = function (physicsSettingIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Position).getValueByString(Default).toFloat();
          };
          /**
           * 正規化された角度の最小値の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @return 正規化された角度の最小値
           */
          CubismPhysicsJson.prototype.getNormalizationAngleMinimumValue = function (physicsSettingIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Angle).getValueByString(Minimum).toFloat();
          };
          /**
           * 正規化された角度の最大値の取得
           * @param physicsSettingIndex
           * @return 正規化された角度の最大値
           */
          CubismPhysicsJson.prototype.getNormalizationAngleMaximumValue = function (physicsSettingIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Angle).getValueByString(Maximum).toFloat();
          };
          /**
           * 正規化された角度のデフォルト値の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @return 正規化された角度のデフォルト値
           */
          CubismPhysicsJson.prototype.getNormalizationAngleDefaultValue = function (physicsSettingIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Angle).getValueByString(Default).toFloat();
          };
          /**
           * 入力の個数の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @return 入力の個数
           */
          CubismPhysicsJson.prototype.getInputCount = function (physicsSettingIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getVector().getSize();
          };
          /**
           * 入力の重みの取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param inputIndex 入力のインデックス
           * @return 入力の重み
           */
          CubismPhysicsJson.prototype.getInputWeight = function (physicsSettingIndex, inputIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Weight).toFloat();
          };
          /**
           * 入力の反転の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param inputIndex 入力のインデックス
           * @return 入力の反転
           */
          CubismPhysicsJson.prototype.getInputReflect = function (physicsSettingIndex, inputIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Reflect).toBoolean();
          };
          /**
           * 入力の種類の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param inputIndex 入力のインデックス
           * @return 入力の種類
           */
          CubismPhysicsJson.prototype.getInputType = function (physicsSettingIndex, inputIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Type).getRawString();
          };
          /**
           * 入力元のIDの取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param inputIndex 入力のインデックス
           * @return 入力元のID
           */
          CubismPhysicsJson.prototype.getInputSourceId = function (physicsSettingIndex, inputIndex) {
              return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Source).getValueByString(Id).getRawString());
          };
          /**
           * 出力の個数の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @return 出力の個数
           */
          CubismPhysicsJson.prototype.getOutputCount = function (physicsSettingIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getVector().getSize();
          };
          /**
           * 出力の物理点のインデックスの取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param outputIndex 出力のインデックス
           * @return 出力の物理点のインデックス
           */
          CubismPhysicsJson.prototype.getOutputVertexIndex = function (physicsSettingIndex, outputIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(VertexIndex).toInt();
          };
          /**
           * 出力の角度のスケールを取得する
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param outputIndex 出力のインデックス
           * @return 出力の角度のスケール
           */
          CubismPhysicsJson.prototype.getOutputAngleScale = function (physicsSettingIndex, outputIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Scale).toFloat();
          };
          /**
           * 出力の重みの取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param outputIndex 出力のインデックス
           * @return 出力の重み
           */
          CubismPhysicsJson.prototype.getOutputWeight = function (physicsSettingIndex, outputIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Weight).toFloat();
          };
          /**
           * 出力先のIDの取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param outputIndex　出力のインデックス
           * @return 出力先のID
           */
          CubismPhysicsJson.prototype.getOutputDestinationId = function (physicsSettingIndex, outputIndex) {
              return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Destination).getValueByString(Id).getRawString());
          };
          /**
           * 出力の種類の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param outputIndex 出力のインデックス
           * @return 出力の種類
           */
          CubismPhysicsJson.prototype.getOutputType = function (physicsSettingIndex, outputIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Type).getRawString();
          };
          /**
           * 出力の反転の取得
           * @param physicsSettingIndex 物理演算のインデックス
           * @param outputIndex 出力のインデックス
           * @return 出力の反転
           */
          CubismPhysicsJson.prototype.getOutputReflect = function (physicsSettingIndex, outputIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Reflect).toBoolean();
          };
          /**
           * 物理点の個数の取得
           * @param physicsSettingIndex 物理演算男設定のインデックス
           * @return 物理点の個数
           */
          CubismPhysicsJson.prototype.getParticleCount = function (physicsSettingIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getVector().getSize();
          };
          /**
           * 物理点の動きやすさの取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param vertexIndex 物理点のインデックス
           * @return 物理点の動きやすさ
           */
          CubismPhysicsJson.prototype.getParticleMobility = function (physicsSettingIndex, vertexIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Mobility).toFloat();
          };
          /**
           * 物理点の遅れの取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param vertexIndex 物理点のインデックス
           * @return 物理点の遅れ
           */
          CubismPhysicsJson.prototype.getParticleDelay = function (physicsSettingIndex, vertexIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Delay).toFloat();
          };
          /**
           * 物理点の加速度の取得
           * @param physicsSettingIndex 物理演算の設定
           * @param vertexIndex 物理点のインデックス
           * @return 物理点の加速度
           */
          CubismPhysicsJson.prototype.getParticleAcceleration = function (physicsSettingIndex, vertexIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Acceleration).toFloat();
          };
          /**
           * 物理点の距離の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param vertexIndex 物理点のインデックス
           * @return 物理点の距離
           */
          CubismPhysicsJson.prototype.getParticleRadius = function (physicsSettingIndex, vertexIndex) {
              return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Radius).toInt();
          };
          /**
           * 物理点の位置の取得
           * @param physicsSettingIndex 物理演算の設定のインデックス
           * @param vertexInde 物理点のインデックス
           * @return 物理点の位置
           */
          CubismPhysicsJson.prototype.getParticlePosition = function (physicsSettingIndex, vertexIndex) {
              var ret = new CubismVector2(0, 0);
              ret.x = this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Position).getValueByString(X).toFloat();
              ret.y = this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Position).getValueByString(Y).toFloat();
              return ret;
          };
          return CubismPhysicsJson;
      }());
      Live2DCubismFramework.CubismPhysicsJson = CubismPhysicsJson;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })