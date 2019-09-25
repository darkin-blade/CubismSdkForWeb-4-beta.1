/*!**************************************!*\
  !*** ./Framework/math/cubismmath.ts ***!
  \**************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _cubismvector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismvector2 */ "./Framework/math/cubismvector2.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  var CubismVector2 = _cubismvector2__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismVector2;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * 数値計算などに使用するユーティリティクラス
       */
      var CubismMath = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismMath() {
          }
          /**
           * 第一引数の値を最小値と最大値の範囲に収めた値を返す
           *
           * @param value 収められる値
           * @param min   範囲の最小値
           * @param max   範囲の最大値
           * @return 最小値と最大値の範囲に収めた値
           */
          CubismMath.range = function (value, min, max) {
              if (value < min) {
                  value = min;
              }
              else if (value > max) {
                  value = max;
              }
              return value;
          };
          /**
           * サイン関数の値を求める
           *
           * @param x 角度値（ラジアン）
           * @return サイン関数sin(x)の値
           */
          CubismMath.sin = function (x) {
              return Math.sin(x);
          };
          /**
           * コサイン関数の値を求める
           *
           * @param x 角度値(ラジアン)
           * @return コサイン関数cos(x)の値
           */
          CubismMath.cos = function (x) {
              return Math.cos(x);
          };
          /**
           * 値の絶対値を求める
           *
           * @param x 絶対値を求める値
           * @return 値の絶対値
           */
          CubismMath.abs = function (x) {
              return Math.abs(x);
          };
          /**
           * 平方根(ルート)を求める
           * @param x -> 平方根を求める値
           * @return 値の平方根
           */
          CubismMath.sqrt = function (x) {
              return Math.sqrt(x);
          };
          /**
           * イージング処理されたサインを求める
           * フェードイン・アウト時のイージングに利用できる
           *
           * @param value イージングを行う値
           * @return イージング処理されたサイン値
           */
          CubismMath.getEasingSine = function (value) {
              if (value < 0.0) {
                  return 0.0;
              }
              else if (value > 1.0) {
                  return 1.0;
              }
              return 0.5 - 0.5 * this.cos(value * Math.PI);
          };
          /**
           * 大きい方の値を返す
           *
           * @param left 左辺の値
           * @param right 右辺の値
           * @return 大きい方の値
           */
          CubismMath.max = function (left, right) {
              return (left > right)
                  ? left
                  : right;
          };
          /**
           * 小さい方の値を返す
           *
           * @param left  左辺の値
           * @param right 右辺の値
           * @return 小さい方の値
           */
          CubismMath.min = function (left, right) {
              return (left > right)
                  ? right
                  : left;
          };
          /**
           * 角度値をラジアン値に変換する
           *
           * @param degrees   角度値
           * @return 角度値から変換したラジアン値
           */
          CubismMath.degreesToRadian = function (degrees) {
              return (degrees / 180.0) * Math.PI;
          };
          /**
           * ラジアン値を角度値に変換する
           *
           * @param radian    ラジアン値
           * @return ラジアン値から変換した角度値
           */
          CubismMath.radianToDegrees = function (radian) {
              return (radian * 180.0) / Math.PI;
          };
          /**
           * ２つのベクトルからラジアン値を求める
           *
           * @param from  始点ベクトル
           * @param to    終点ベクトル
           * @return ラジアン値から求めた方向ベクトル
           */
          CubismMath.directionToRadian = function (from, to) {
              var q1 = Math.atan2(to.y, to.x);
              var q2 = Math.atan2(from.y, from.x);
              var ret = q1 - q2;
              while (ret < -Math.PI) {
                  ret += Math.PI * 2.0;
              }
              while (ret > Math.PI) {
                  ret -= Math.PI * 2.0;
              }
              return ret;
          };
          /**
           * ２つのベクトルから角度値を求める
           *
           * @param from  始点ベクトル
           * @param to    終点ベクトル
           * @return 角度値から求めた方向ベクトル
           */
          CubismMath.directionToDegrees = function (from, to) {
              var radian = this.directionToRadian(from, to);
              var degree = this.radianToDegrees(radian);
              if ((to.x - from.x) > 0.0) {
                  degree = -degree;
              }
              return degree;
          };
          /**
           * ラジアン値を方向ベクトルに変換する。
           *
           * @param totalAngle    ラジアン値
           * @return ラジアン値から変換した方向ベクトル
           */
          CubismMath.radianToDirection = function (totalAngle) {
              var ret = new CubismVector2();
              ret.x = this.sin(totalAngle);
              ret.y = this.cos(totalAngle);
              return ret;
          };
          return CubismMath;
      }());
      Live2DCubismFramework.CubismMath = CubismMath;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!******************************************!*\
    !*** ./Framework/math/cubismmatrix44.ts ***!
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
       * 4x4の行列
       *
       * 4x4行列の便利クラス。
       */
      var CubismMatrix44 = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismMatrix44() {
              this._tr = new Float32Array(16); // 4 * 4のサイズ
              this.loadIdentity();
          }
          /**
           * 受け取った２つの行列の乗算を行う。
           *
           * @param a 行列a
           * @param b 行列b
           * @return 乗算結果の行列
           */
          CubismMatrix44.multiply = function (a, b, dst) {
              var c = new Float32Array([
                  0.0, 0.0, 0.0, 0.0,
                  0.0, 0.0, 0.0, 0.0,
                  0.0, 0.0, 0.0, 0.0,
                  0.0, 0.0, 0.0, 0.0
              ]);
              var n = 4;
              for (var i = 0; i < n; ++i) {
                  for (var j = 0; j < n; ++j) {
                      for (var k = 0; k < n; ++k) {
                          c[j + i * 4] += a[k + i * 4] * b[j + k * 4];
                      }
                  }
              }
              for (var i = 0; i < 16; ++i) {
                  dst[i] = c[i];
              }
          };
          /**
           * 単位行列に初期化する
           */
          CubismMatrix44.prototype.loadIdentity = function () {
              var c = new Float32Array([
                  1.0, 0.0, 0.0, 0.0,
                  0.0, 1.0, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  0.0, 0.0, 0.0, 1.0
              ]);
              this.setMatrix(c);
          };
          /**
           * 行列を設定
           *
           * @param tr 16個の浮動小数点数で表される4x4の行列
           */
          CubismMatrix44.prototype.setMatrix = function (tr) {
              for (var i = 0; i < 16; ++i) {
                  this._tr[i] = tr[i];
              }
          };
          /**
           * 行列を浮動小数点数の配列で取得
           *
           * @return 16個の浮動小数点数で表される4x4の行列
           */
          CubismMatrix44.prototype.getArray = function () {
              return this._tr;
          };
          /**
           * X軸の拡大率を取得
           * @return X軸の拡大率
           */
          CubismMatrix44.prototype.getScaleX = function () {
              return this._tr[0];
          };
          /**
           * Y軸の拡大率を取得する
           *
           * @return Y軸の拡大率
           */
          CubismMatrix44.prototype.getScaleY = function () {
              return this._tr[5];
          };
          /**
           * X軸の移動量を取得
           * @return X軸の移動量
           */
          CubismMatrix44.prototype.getTranslateX = function () {
              return this._tr[12];
          };
          /**
           * Y軸の移動量を取得
           * @return Y軸の移動量
           */
          CubismMatrix44.prototype.getTranslateY = function () {
              return this._tr[13];
          };
          /**
           * X軸の値を現在の行列で計算
           *
           * @param src X軸の値
           * @return 現在の行列で計算されたX軸の値
           */
          CubismMatrix44.prototype.transformX = function (src) {
              return this._tr[0] * src + this._tr[12];
          };
          /**
           * Y軸の値を現在の行列で計算
           *
           * @param src Y軸の値
           * @return　現在の行列で計算されたY軸の値
           */
          CubismMatrix44.prototype.transformY = function (src) {
              return this._tr[5] * src + this._tr[13];
          };
          /**
           * X軸の値を現在の行列で逆計算
           */
          CubismMatrix44.prototype.invertTransformX = function (src) {
              return (src - this._tr[12]) / this._tr[0];
          };
          /**
           * Y軸の値を現在の行列で逆計算
           */
          CubismMatrix44.prototype.invertTransformY = function (src) {
              return (src - this._tr[13]) / this._tr[5];
          };
          /**
           * 現在の行列の位置を起点にして移動
           *
           * 現在の行列の位置を起点にして相対的に移動する。
           *
           * @param x X軸の移動量
           * @param y Y軸の移動量
           */
          CubismMatrix44.prototype.translateRelative = function (x, y) {
              var tr1 = new Float32Array([
                  1.0, 0.0, 0.0, 0.0,
                  0.0, 1.0, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  x, y, 0.0, 1.0
              ]);
              CubismMatrix44.multiply(tr1, this._tr, this._tr);
          };
          /**
           * 現在の行列の位置を移動
           *
           * 現在の行列の位置を指定した位置へ移動する
           *
           * @param x X軸の移動量
           * @param y y軸の移動量
           */
          CubismMatrix44.prototype.translate = function (x, y) {
              this._tr[12] = x;
              this._tr[13] = y;
          };
          /**
           * 現在の行列のX軸の位置を指定した位置へ移動する
           *
           * @param x X軸の移動量
           */
          CubismMatrix44.prototype.translateX = function (x) {
              this._tr[12] = x;
          };
          /**
           * 現在の行列のY軸の位置を指定した位置へ移動する
           *
           * @param y Y軸の移動量
           */
          CubismMatrix44.prototype.translateY = function (y) {
              this._tr[13] = y;
          };
          /**
           * 現在の行列の拡大率を相対的に設定する
           *
           * @param x X軸の拡大率
           * @param y Y軸の拡大率
           */
          CubismMatrix44.prototype.scaleRelative = function (x, y) {
              var tr1 = new Float32Array([
                  x, 0.0, 0.0, 0.0,
                  0.0, y, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  0.0, 0.0, 0.0, 1.0
              ]);
              CubismMatrix44.multiply(tr1, this._tr, this._tr);
          };
          /**
           * 現在の行列の拡大率を指定した倍率に設定する
           *
           * @param x X軸の拡大率
           * @param y Y軸の拡大率
           */
          CubismMatrix44.prototype.scale = function (x, y) {
              this._tr[0] = x;
              this._tr[5] = y;
          };
          /**
           * 現在の行列に行列を乗算
           *
           * @param m 行列
           */
          CubismMatrix44.prototype.multiplyByMatrix = function (m) {
              CubismMatrix44.multiply(m.getArray(), this._tr, this._tr);
          };
          /**
           * オブジェクトのコピーを生成する
           */
          CubismMatrix44.prototype.clone = function () {
              var cloneMatrix = new CubismMatrix44();
              for (var i = 0; i < this._tr.length; i++) {
                  cloneMatrix._tr[i] = this._tr[i];
              }
              return cloneMatrix;
          };
          return CubismMatrix44;
      }());
      Live2DCubismFramework.CubismMatrix44 = CubismMatrix44;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!*********************************************!*\
    !*** ./Framework/math/cubismmodelmatrix.ts ***!
    \*********************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
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
  
  var CubismMatrix44 = _cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * モデル座標設定用の4x4行列
       *
       * モデル座標設定用の4x4行列クラス
       */
      var CubismModelMatrix = /** @class */ (function (_super) {
          __extends(CubismModelMatrix, _super);
          /**
           * コンストラクタ
           *
           * @param w 横幅
           * @param h 縦幅
           */
          function CubismModelMatrix(w, h) {
              var _this = _super.call(this) || this;
              _this._width = (w !== undefined)
                  ? w
                  : 0.0;
              _this._height = (h !== undefined)
                  ? h
                  : 0.0;
              _this.setHeight(1.0);
              return _this;
          }
          /**
           * 横幅を設定
           *
           * @param w 横幅
           */
          CubismModelMatrix.prototype.setWidth = function (w) {
              var scaleX = w / this._width;
              var scaleY = scaleX;
              this.scale(scaleX, scaleY);
          };
          /**
           * 縦幅を設定
           * @param h 縦幅
           */
          CubismModelMatrix.prototype.setHeight = function (h) {
              var scaleX = h / this._height;
              var scaleY = scaleX;
              this.scale(scaleX, scaleY);
          };
          /**
           * 位置を設定
           *
           * @param x X軸の位置
           * @param y Y軸の位置
           */
          CubismModelMatrix.prototype.setPosition = function (x, y) {
              this.translate(x, y);
          };
          /**
           * 中心位置を設定
           *
           * @param x X軸の中心位置
           * @param y Y軸の中心位置
           *
           * @note widthかheightを設定したあとでないと、拡大率が正しく取得できないためずれる。
           */
          CubismModelMatrix.prototype.setCenterPosition = function (x, y) {
              this.centerX(x);
              this.centerY(y);
          };
          /**
           * 上辺の位置を設定する
           *
           * @param y 上辺のY軸位置
           */
          CubismModelMatrix.prototype.top = function (y) {
              this.setY(y);
          };
          /**
           * 下辺の位置を設定する
           *
           * @param y 下辺のY軸位置
           */
          CubismModelMatrix.prototype.bottom = function (y) {
              var h = this._height * this.getScaleY();
              this.translateY(y - h);
          };
          /**
           * 左辺の位置を設定
           *
           * @param x 左辺のX軸位置
           */
          CubismModelMatrix.prototype.left = function (x) {
              this.setX(x);
          };
          /**
           * 右辺の位置を設定
           *
           * @param x 右辺のX軸位置
           */
          CubismModelMatrix.prototype.right = function (x) {
              var w = this._width * this.getScaleX();
              this.translateX(x - w);
          };
          /**
           * X軸の中心位置を設定
           *
           * @param x X軸の中心位置
           */
          CubismModelMatrix.prototype.centerX = function (x) {
              var w = this._width * this.getScaleX();
              this.translateX(x - (w / 2.0));
          };
          /**
           * X軸の位置を設定
           *
           * @param x X軸の位置
           */
          CubismModelMatrix.prototype.setX = function (x) {
              this.translateX(x);
          };
          /**
           * Y軸の中心位置を設定
           *
           * @param y Y軸の中心位置
           */
          CubismModelMatrix.prototype.centerY = function (y) {
              var h = this._height * this.getScaleY();
              this.translateY(y - (h / 2.0));
          };
          /**
           * Y軸の位置を設定する
           *
           * @param y Y軸の位置
           */
          CubismModelMatrix.prototype.setY = function (y) {
              this.translateY(y);
          };
          /**
           * レイアウト情報から位置を設定
           *
           * @param layout レイアウト情報
           */
          CubismModelMatrix.prototype.setupFromLayout = function (layout) {
              var keyWidth = "width";
              var keyHeight = "height";
              var keyX = "x";
              var keyY = "y";
              var keyCenterX = "center_x";
              var keyCenterY = "center_y";
              var keyTop = "top";
              var keyBottom = "bottom";
              var keyLeft = "left";
              var keyRight = "right";
              for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
                  var key = ite.ptr().first;
                  var value = ite.ptr().second;
                  if (key == keyWidth) {
                      this.setWidth(value);
                  }
                  else if (key == keyHeight) {
                      this.setHeight(value);
                  }
              }
              for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
                  var key = ite.ptr().first;
                  var value = ite.ptr().second;
                  if (key == keyX) {
                      this.setX(value);
                  }
                  else if (key == keyY) {
                      this.setY(value);
                  }
                  else if (key == keyCenterX) {
                      this.centerX(value);
                  }
                  else if (key == keyCenterY) {
                      this.centerY(value);
                  }
                  else if (key == keyTop) {
                      this.top(value);
                  }
                  else if (key == keyBottom) {
                      this.bottom(value);
                  }
                  else if (key == keyLeft) {
                      this.left(value);
                  }
                  else if (key == keyRight) {
                      this.right(value);
                  }
              }
          };
          return CubismModelMatrix;
      }(CubismMatrix44));
      Live2DCubismFramework.CubismModelMatrix = CubismModelMatrix;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!*********************************************!*\
    !*** ./Framework/math/cubismtargetpoint.ts ***!
    \*********************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _cubismmath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmath */ "./Framework/math/cubismmath.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  var CubismMath = _cubismmath__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMath;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      var FrameRate = 30;
      var Epsilon = 0.01;
      /**
       * 顔の向きの制御機能
       *
       * 顔の向きの制御機能を提供するクラス。
       */
      var CubismTargetPoint = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismTargetPoint() {
              this._faceTargetX = 0.0;
              this._faceTargetY = 0.0;
              this._faceX = 0.0;
              this._faceY = 0.0;
              this._faceVX = 0.0;
              this._faceVY = 0.0;
              this._lastTimeSeconds = 0.0;
              this._userTimeSeconds = 0.0;
          }
          /**
           * 更新処理
           */
          CubismTargetPoint.prototype.update = function (deltaTimeSeconds) {
              // デルタ時間を加算する
              this._userTimeSeconds += deltaTimeSeconds;
              // 首を中央から左右に振るときの平均的な速さは　秒速度。加速・減速を考慮して、その２倍を最高速度とする
              // 顔の振り具合を、中央（0.0）から、左右は（+-1.0）とする
              var faceParamMaxV = 40.0 / 10.0; // 7.5秒間に40分移動(5.3/sc)
              var maxV = faceParamMaxV * 1.0 / FrameRate; // 1frameあたりに変化できる速度の上限
              if (this._lastTimeSeconds == 0.0) {
                  this._lastTimeSeconds = this._userTimeSeconds;
                  return;
              }
              var deltaTimeWeight = (this._userTimeSeconds - this._lastTimeSeconds) * FrameRate;
              this._lastTimeSeconds = this._userTimeSeconds;
              // 最高速度になるまでの時間を
              var timeToMaxSpeed = 0.15;
              var frameToMaxSpeed = timeToMaxSpeed * FrameRate; // sec * frame/sec
              var maxA = deltaTimeWeight * maxV / frameToMaxSpeed; // 1frameあたりの加速度
              // 目指す向きは、（dx, dy）方向のベクトルとなる
              var dx = this._faceTargetX - this._faceX;
              var dy = this._faceTargetY - this._faceY;
              if (CubismMath.abs(dx) <= Epsilon && CubismMath.abs(dy) <= Epsilon) {
                  return; // 変化なし
              }
              // 速度の最大よりも大きい場合は、速度を落とす
              var d = CubismMath.sqrt((dx * dx) + (dy * dy));
              // 進行方向の最大速度ベクトル
              var vx = maxV * dx / d;
              var vy = maxV * dy / d;
              // 現在の速度から、新規速度への変化（加速度）を求める
              var ax = vx - this._faceVX;
              var ay = vy - this._faceVY;
              var a = CubismMath.sqrt((ax * ax) + (ay * ay));
              // 加速のとき
              if (a < -maxA || a > maxA) {
                  ax *= maxA / a;
                  ay *= maxA / a;
              }
              // 加速度を元の速度に足して、新速度とする
              this._faceVX += ax;
              this._faceVY += ay;
              // 目的の方向に近づいたとき、滑らかに減速するための処理
              // 設定された加速度で止まる事の出来る距離と速度の関係から
              // 現在とりうる最高速度を計算し、それ以上の時は速度を落とす
              // ※本来、人間は筋力で力（加速度）を調整できるため、より自由度が高いが、簡単な処理で済ませている
              {
                  // 加速度、速度、距離の関係式。
                  //            2  6           2               3
                  //      sqrt(a  t  + 16 a h t  - 8 a h) - a t
                  // v = --------------------------------------
                  //                    2
                  //                 4 t  - 2
                  // (t=1)
                  // 	時刻tは、あらかじめ加速度、速度を1/60(フレームレート、単位なし)で
                  // 	考えているので、t＝１として消してよい（※未検証）
                  var maxV_1 = 0.5 * (CubismMath.sqrt((maxA * maxA) + 16.0 * maxA * d - 8.0 * maxA * d) - maxA);
                  var curV = CubismMath.sqrt((this._faceVX * this._faceVX) + (this._faceVY * this._faceVY));
                  if (curV > maxV_1) {
                      // 現在の速度 > 最高速度のとき、最高速度まで減速
                      this._faceVX *= maxV_1 / curV;
                      this._faceVY *= maxV_1 / curV;
                  }
              }
              this._faceX += this._faceVX;
              this._faceY += this._faceVY;
          };
          /**
           * X軸の顔の向きの値を取得
           *
           * @return X軸の顔の向きの値（-1.0 ~ 1.0）
           */
          CubismTargetPoint.prototype.getX = function () {
              return this._faceX;
          };
          /**
           * Y軸の顔の向きの値を取得
           *
           * @return Y軸の顔の向きの値（-1.0 ~ 1.0）
           */
          CubismTargetPoint.prototype.getY = function () {
              return this._faceY;
          };
          /**
           * 顔の向きの目標値を設定
           *
           * @param x X軸の顔の向きの値（-1.0 ~ 1.0）
           * @param y Y軸の顔の向きの値（-1.0 ~ 1.0）
           */
          CubismTargetPoint.prototype.set = function (x, y) {
              this._faceTargetX = x;
              this._faceTargetY = y;
          };
          return CubismTargetPoint;
      }());
      Live2DCubismFramework.CubismTargetPoint = CubismTargetPoint;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!*****************************************!*\
    !*** ./Framework/math/cubismvector2.ts ***!
    \*****************************************/
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
       * 2次元ベクトル型
       *
       * 2次元ベクトル型の機能を提供する。
       */
      var CubismVector2 = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function CubismVector2(x, y) {
              this.x = x;
              this.y = y;
              this.x = (x == undefined)
                  ? 0.0
                  : x;
              this.y = (y == undefined)
                  ? 0.0
                  : y;
          }
          /**
           * ベクトルの加算
           *
           * @param vector2 加算するベクトル値
           * @return 加算結果 ベクトル値
           */
          CubismVector2.prototype.add = function (vector2) {
              var ret = new CubismVector2(0.0, 0.0);
              ret.x = this.x + vector2.x;
              ret.y = this.y + vector2.y;
              return ret;
          };
          /**
           * ベクトルの減算
           *
           * @param vector2 減算するベクトル値
           * @return 減算結果 ベクトル値
           */
          CubismVector2.prototype.substract = function (vector2) {
              var ret = new CubismVector2(0.0, 0.0);
              ret.x = this.x - vector2.x;
              ret.y = this.y - vector2.y;
              return ret;
          };
          /**
           * ベクトルの乗算
           *
           * @param vector2 乗算するベクトル値
           * @return 乗算結果　ベクトル値
           */
          CubismVector2.prototype.multiply = function (vector2) {
              var ret = new CubismVector2(0.0, 0.0);
              ret.x = this.x * vector2.x;
              ret.y = this.y * vector2.y;
              return ret;
          };
          /**
           * ベクトルの乗算(スカラー)
           *
           * @param scalar 乗算するスカラー値
           * @return 乗算結果　ベクトル値
           */
          CubismVector2.prototype.multiplyByScaler = function (scalar) {
              return this.multiply(new CubismVector2(scalar, scalar));
          };
          /**
           * ベクトルの除算
           *
           * @param vector2 除算するベクトル値
           * @return 除算結果　ベクトル値
           */
          CubismVector2.prototype.division = function (vector2) {
              var ret = new CubismVector2(0.0, 0.0);
              ret.x = this.x / vector2.x;
              ret.y = this.y / vector2.y;
              return ret;
          };
          /**
           * ベクトルの除算(スカラー)
           *
           * @param scalar 除算するスカラー値
           * @return 除算結果　ベクトル値
           */
          CubismVector2.prototype.divisionByScalar = function (scalar) {
              return this.division(new CubismVector2(scalar, scalar));
          };
          /**
           * ベクトルの長さを取得する
           *
           * @return ベクトルの長さ
           */
          CubismVector2.prototype.getLength = function () {
              return Math.sqrt(this.x * this.x + this.y * this.y);
          };
          /**
           * ベクトルの距離の取得
           *
           * @param a 点
           * @return ベクトルの距離
           */
          CubismVector2.prototype.getDistanceWith = function (a) {
              return Math.sqrt(((this.x - a.x) * (this.x - a.x)) + ((this.y - a.y) * (this.y - a.y)));
          };
          /**
           * ドット積の計算
           *
           * @param a 値
           * @return 結果
           */
          CubismVector2.prototype.dot = function (a) {
              return (this.x * a.x) + (this.y * a.y);
          };
          /**
           * 正規化の適用
           */
          CubismVector2.prototype.normalize = function () {
              var length = Math.pow((this.x * this.x) + (this.y * this.y), 0.5);
              this.x = this.x / length;
              this.y = this.y / length;
          };
          /**
           * 等しさの確認（等しいか？）
           *
           * 値が等しいか？
           *
           * @param rhs 確認する値
           * @return true 値は等しい
           * @return false 値は等しくない
           */
          CubismVector2.prototype.isEqual = function (rhs) {
              return (this.x == rhs.x) && (this.y == rhs.y);
          };
          /**
           * 等しさの確認（等しくないか？）
           *
           * 値が等しくないか？
           *
           * @param rhs 確認する値
           * @return true 値は等しくない
           * @return false 値は等しい
           */
          CubismVector2.prototype.isNotEqual = function (rhs) {
              return !(this.isEqual(rhs));
          };
          return CubismVector2;
      }());
      Live2DCubismFramework.CubismVector2 = CubismVector2;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!********************************************!*\
    !*** ./Framework/math/cubismviewmatrix.ts ***!
    \********************************************/
  /*! exports provided: Live2DCubismFramework */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
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
  
  var CubismMatrix44 = _cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * カメラの位置変更に使うと便利な4x4行列
       *
       * カメラの位置変更に使うと便利な4x4行列のクラス。
       */
      var CubismViewMatrix = /** @class */ (function (_super) {
          __extends(CubismViewMatrix, _super);
          /**
           * コンストラクタ
           */
          function CubismViewMatrix() {
              var _this = _super.call(this) || this;
              _this._screenLeft = 0.0;
              _this._screenRight = 0.0;
              _this._screenTop = 0.0;
              _this._screenBottom = 0.0;
              _this._maxLeft = 0.0;
              _this._maxRight = 0.0;
              _this._maxTop = 0.0;
              _this._maxBottom = 0.0;
              _this._maxScale = 0.0;
              _this._minScale = 0.0;
              return _this;
          }
          /**
           * 移動を調整
           *
           * @param x X軸の移動量
           * @param y Y軸の移動量
           */
          CubismViewMatrix.prototype.adjustTranslate = function (x, y) {
              if (this._tr[0] * this._maxLeft + (this._tr[12] + x) > this._screenLeft) {
                  x = this._screenLeft - this._tr[0] * this._maxLeft - this._tr[12];
              }
              if (this._tr[0] * this._maxRight + (this._tr[12] + x) < this._screenRight) {
                  x = this._screenRight - this._tr[0] * this._maxRight - this._tr[12];
              }
              if (this._tr[5] * this._maxTop + (this._tr[13] + y) < this._screenTop) {
                  y = this._screenTop - this._tr[5] * this._maxTop - this._tr[13];
              }
              if (this._tr[5] * this._maxBottom + (this._tr[13] + y) > this._screenBottom) {
                  y = this._screenBottom - this._tr[5] * this._maxBottom - this._tr[13];
              }
              var tr1 = new Float32Array([
                  1.0, 0.0, 0.0, 0.0,
                  0.0, 1.0, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  x, y, 0.0, 1.0
              ]);
              CubismMatrix44.multiply(tr1, this._tr, this._tr);
          };
          /**
           * 拡大率を調整
           *
           * @param cx 拡大を行うX軸の中心位置
           * @param cy 拡大を行うY軸の中心位置
           * @param scale　拡大率
           */
          CubismViewMatrix.prototype.adjustScale = function (cx, cy, scale) {
              var maxScale = this.getMaxScale();
              var minScale = this.getMinScale();
              var targetScale = scale * this._tr[0];
              if (targetScale < minScale) {
                  if (this._tr[0] > 0.0) {
                      scale = minScale / this._tr[0];
                  }
              }
              else if (targetScale > maxScale) {
                  if (this._tr[0] > 0.0) {
                      scale = maxScale / this._tr[0];
                  }
              }
              var tr1 = new Float32Array([
                  1.0, 0.0, 0.0, 0.0,
                  0.0, 1.0, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  cx, cy, 0.0, 1.0
              ]);
              var tr2 = new Float32Array([
                  scale, 0.0, 0.0, 0.0,
                  0.0, scale, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  0.0, 0.0, 0.0, 1.0
              ]);
              var tr3 = new Float32Array([
                  1.0, 0.0, 0.0, 0.0,
                  0.0, 1.0, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  -cx, -cy, 0.0, 1.0,
              ]);
              CubismMatrix44.multiply(tr3, this._tr, this._tr);
              CubismMatrix44.multiply(tr2, this._tr, this._tr);
              CubismMatrix44.multiply(tr1, this._tr, this._tr);
          };
          /**
           * デバイスに対応する論理座養生の範囲の設定
           *
           * @param left      左辺のX軸の位置
           * @param right     右辺のX軸の位置
           * @param bottom    下辺のY軸の位置
           * @param top       上辺のY軸の位置
           */
          CubismViewMatrix.prototype.setScreenRect = function (left, right, bottom, top) {
              this._screenLeft = left;
              this._screenRight = right;
              this._screenBottom = bottom;
              this._screenTop = top;
          };
          /**
           * デバイスに対応する論理座標上の移動可能範囲の設定
           * @param left      左辺のX軸の位置
           * @param right     右辺のX軸の位置
           * @param bottom    下辺のY軸の位置
           * @param top       上辺のY軸の位置
           */
          CubismViewMatrix.prototype.setMaxScreenRect = function (left, right, bottom, top) {
              this._maxLeft = left;
              this._maxRight = right;
              this._maxTop = top;
              this._maxBottom = bottom;
          };
          /**
           * 最大拡大率の設定
           * @param maxScale 最大拡大率
           */
          CubismViewMatrix.prototype.setMaxScale = function (maxScale) {
              this._maxScale = maxScale;
          };
          /**
           * 最小拡大率の設定
           * @param minScale 最小拡大率
           */
          CubismViewMatrix.prototype.setMinScale = function (minScale) {
              this._minScale = minScale;
          };
          /**
           * 最大拡大率の取得
           * @return 最大拡大率
           */
          CubismViewMatrix.prototype.getMaxScale = function () {
              return this._maxScale;
          };
          /**
           * 最小拡大率の取得
           * @return 最小拡大率
           */
          CubismViewMatrix.prototype.getMinScale = function () {
              return this._minScale;
          };
          /**
           * 拡大率が最大になっているかを確認する
           *
           * @return true 拡大率は最大
           * @return false 拡大率は最大ではない
           */
          CubismViewMatrix.prototype.isMaxScale = function () {
              return this.getScaleX() >= this._maxScale;
          };
          /**
           * 拡大率が最小になっているかを確認する
           *
           * @return true 拡大率は最小
           * @return false 拡大率は最小ではない
           */
          CubismViewMatrix.prototype.isMinScale = function () {
              return this.getScaleX() <= this._minScale;
          };
          /**
           * デバイスに対応する論理座標の左辺のＸ軸位置を取得する
           * @return デバイスに対応する論理座標の左辺のX軸位置
           */
          CubismViewMatrix.prototype.getScreenLeft = function () {
              return this._screenLeft;
          };
          /**
           * デバイスに対応する論理座標の右辺のＸ軸位置を取得する
           * @return デバイスに対応する論理座標の右辺のX軸位置
           */
          CubismViewMatrix.prototype.getScreenRight = function () {
              return this._screenRight;
          };
          /**
           * デバイスに対応する論理座標の下辺のY軸位置を取得する
           * @return デバイスに対応する論理座標の下辺のY軸位置
           */
          CubismViewMatrix.prototype.getScreenBottom = function () {
              return this._screenBottom;
          };
          /**
           * デバイスに対応する論理座標の上辺のY軸位置を取得する
           * @return デバイスに対応する論理座標の上辺のY軸位置
           */
          CubismViewMatrix.prototype.getScreenTop = function () {
              return this._screenTop;
          };
          /**
           * 左辺のX軸位置の最大値の取得
           * @return 左辺のX軸位置の最大値
           */
          CubismViewMatrix.prototype.getMaxLeft = function () {
              return this._maxLeft;
          };
          /**
           * 右辺のX軸位置の最大値の取得
           * @return 右辺のX軸位置の最大値
           */
          CubismViewMatrix.prototype.getMaxRight = function () {
              return this._maxRight;
          };
          /**
           * 下辺のY軸位置の最大値の取得
           * @return 下辺のY軸位置の最大値
           */
          CubismViewMatrix.prototype.getMaxBottom = function () {
              return this._maxBottom;
          };
          /**
           * 上辺のY軸位置の最大値の取得
           * @return 上辺のY軸位置の最大値
           */
          CubismViewMatrix.prototype.getMaxTop = function () {
              return this._maxTop;
          };
          return CubismViewMatrix;
      }(CubismMatrix44));
      Live2DCubismFramework.CubismViewMatrix = CubismViewMatrix;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })