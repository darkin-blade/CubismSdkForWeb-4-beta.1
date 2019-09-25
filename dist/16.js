/*!**************************************************!*\
  !*** ./Sample/TypeScript/Demo/src/lappdefine.ts ***!
  \**************************************************/
/*! exports provided: LAppDefine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAppDefine", function() { return LAppDefine; });
  /* harmony import */ var _Framework_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Framework/live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  /**
   * Sample Appで使用する定数
   */
  var LAppDefine;
  (function (LAppDefine) {
      // 画面
      LAppDefine.ViewMaxScale = 2.0;
      LAppDefine.ViewMinScale = 0.8;
      LAppDefine.ViewLogicalLeft = -1.0;
      LAppDefine.ViewLogicalRight = 1.0;
      LAppDefine.ViewLogicalMaxLeft = -2.0;
      LAppDefine.ViewLogicalMaxRight = 2.0;
      LAppDefine.ViewLogicalMaxBottom = -2.0;
      LAppDefine.ViewLogicalMaxTop = 2.0;
      // 相対パス
      LAppDefine.ResourcesPath = "./Resources/";
      // モデルの後ろにある背景の画像ファイル
      LAppDefine.BackImageName = "back_class_normal.png";
      // 歯車
      LAppDefine.GearImageName = "icon_gear.png";
      // 終了ボタン
      LAppDefine.PowerImageName = "CloseNormal.png";
      // モデル定義---------------------------------------------
      // モデルを配置したディレクトリ名の配列
      // ディレクトリ名とmodel3.jsonの名前を一致させておくこと
      LAppDefine.ModelDir = [
          "Rice",
          "Natori",
          "Mark",
          "Haru",
          "Hiyori",
      ];
      LAppDefine.ModelDirSize = LAppDefine.ModelDir.length;
      // 外部定義ファイル（json）と合わせる
      LAppDefine.MotionGroupIdle = "Idle"; // アイドリング
      LAppDefine.MotionGroupTapBody = "TapBody"; // 体をタップしたとき
      // 外部定義ファイル（json）と合わせる
      LAppDefine.HitAreaNameHead = "Head";
      LAppDefine.HitAreaNameBody = "Body";
      // モーションの優先度定数
      LAppDefine.PriorityNone = 0;
      LAppDefine.PriorityIdle = 1;
      LAppDefine.PriorityNormal = 2;
      LAppDefine.PriorityForce = 3;
      // デバッグ用ログの表示オプション
      LAppDefine.DebugLogEnable = true;
      LAppDefine.DebugTouchLogEnable = false;
      // Frameworkから出力するログのレベル設定
      LAppDefine.CubismLoggingLevel = _Framework_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Verbose;
  })(LAppDefine || (LAppDefine = {}));
  
  
  /***/ }),
  
  /*!****************************************************!*\
    !*** ./Sample/TypeScript/Demo/src/lappdelegate.ts ***!
    \****************************************************/
  /*! exports provided: canvas, s_instance, gl, frameBuffer, LAppDelegate */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_instance", function() { return s_instance; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gl", function() { return gl; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frameBuffer", function() { return frameBuffer; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAppDelegate", function() { return LAppDelegate; });
  /* harmony import */ var _Framework_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Framework/live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /* harmony import */ var _Framework_math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Framework/math/cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
  /* harmony import */ var _lappview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lappview */ "./Sample/TypeScript/Demo/src/lappview.ts");
  /* harmony import */ var _lapppal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lapppal */ "./Sample/TypeScript/Demo/src/lapppal.ts");
  /* harmony import */ var _lapptexturemanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lapptexturemanager */ "./Sample/TypeScript/Demo/src/lapptexturemanager.ts");
  /* harmony import */ var _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lapplive2dmanager */ "./Sample/TypeScript/Demo/src/lapplive2dmanager.ts");
  /* harmony import */ var _lappdefine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lappdefine */ "./Sample/TypeScript/Demo/src/lappdefine.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  var Csm_CubismMatrix44 = _Framework_math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMatrix44;
  var Csm_CubismFramework = _Framework_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework;
  
  
  
  
  
  var canvas = null;
  var s_instance = null;
  var gl = null;
  var frameBuffer = null;
  /**
   * アプリケーションクラス。
   * Cubism SDKの管理を行う。
   */
  var LAppDelegate = /** @class */ (function () {
      /**
       * コンストラクタ
       */
      function LAppDelegate() {
          this._captured = false;
          this._mouseX = 0.0;
          this._mouseY = 0.0;
          this._isEnd = false;
          this._cubismOption = new _Framework_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Option"]();
          this._view = new _lappview__WEBPACK_IMPORTED_MODULE_2__["LAppView"]();
          this._textureManager = new _lapptexturemanager__WEBPACK_IMPORTED_MODULE_4__["LAppTextureManager"]();
      }
      /**
       * クラスのインスタンス（シングルトン）を返す。
       * インスタンスが生成されていない場合は内部でインスタンスを生成する。
       *
       * @return クラスのインスタンス
       */
      LAppDelegate.getInstance = function () {
          if (s_instance == null) {
              s_instance = new LAppDelegate();
          }
          return s_instance;
      };
      /**
       * クラスのインスタンス（シングルトン）を解放する。
       */
      LAppDelegate.releaseInstance = function () {
          if (s_instance != null) {
              s_instance.release();
          }
          s_instance = null;
      };
      /**
       * APPに必要な物を初期化する。
       */
      LAppDelegate.prototype.initialize = function () {
          // キャンバスの取得
          canvas = document.getElementById("SAMPLE");
          // glコンテキストを初期化
          gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
          if (!gl) {
              alert("WebGLを初期化できません。ブラウザはサポートしていないようです。");
              gl = null;
              // gl初期化失敗
              return false;
          }
          if (!frameBuffer) {
              frameBuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
          }
          // 透過設定
          gl.enable(gl.BLEND);
          gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
          var supportTouch = 'ontouchend' in canvas;
          if (supportTouch) {
              // タッチ関連コールバック関数登録
              canvas.ontouchstart = onTouchBegan;
              canvas.ontouchmove = onTouchMoved;
              canvas.ontouchend = onTouchEnded;
              canvas.ontouchcancel = onTouchCancel;
          }
          else {
              // マウス関連コールバック関数登録
              canvas.onmousedown = onClickBegan;
              canvas.onmousemove = onMouseMoved;
              canvas.onmouseup = onClickEnded;
          }
          // AppViewの初期化
          this._view.initialize();
          // Cubism SDKの初期化
          this.initializeCubism();
          return true;
      };
      /**
       * 解放する。
       */
      LAppDelegate.prototype.release = function () {
          this._textureManager.release();
          this._textureManager = null;
          this._view.release();
          this._view = null;
          // リソースを解放
          _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_5__["LAppLive2DManager"].releaseInstance();
          // Cubism SDKの解放
          Csm_CubismFramework.dispose();
      };
      /**
       * 実行処理。
       */
      LAppDelegate.prototype.run = function () {
          var _this = this;
          // メインループ
          var loop = function () {
              // インスタンスの有無の確認
              if (s_instance == null) {
                  return;
              }
              // 時間更新
              _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].updateTime();
              // 画面の初期化
              gl.clearColor(0.0, 0.0, 0.0, 1.0);
              // 深度テストを有効化
              gl.enable(gl.DEPTH_TEST);
              // 近くにある物体は、遠くにある物体を覆い隠す
              gl.depthFunc(gl.LEQUAL);
              // カラーバッファや深度バッファをクリアする
              gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
              gl.clearDepth(1.0);
              // 透過設定
              gl.enable(gl.BLEND);
              gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
              // 描画更新
              _this._view.render();
              // ループのために再帰呼び出し
              requestAnimationFrame(loop);
          };
          loop();
      };
      /**
       * シェーダーを登録する。
       */
      LAppDelegate.prototype.createShader = function () {
          // バーテックスシェーダーのコンパイル
          var vertexShaderId = gl.createShader(gl.VERTEX_SHADER);
          if (vertexShaderId == null) {
              _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].printLog("failed to create vertexShader");
              return null;
          }
          var vertexShader = "precision mediump float;" +
              "attribute vec3 position;" +
              "attribute vec2 uv;" +
              "varying vec2 vuv;" +
              "void main(void)" +
              "{" +
              "   gl_Position = vec4(position, 1.0);" +
              "   vuv = uv;" +
              "}";
          gl.shaderSource(vertexShaderId, vertexShader);
          gl.compileShader(vertexShaderId);
          // フラグメントシェーダのコンパイル
          var fragmentShaderId = gl.createShader(gl.FRAGMENT_SHADER);
          if (fragmentShaderId == null) {
              _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].printLog("failed to create fragmentShader");
              return null;
          }
          var fragmentShader = "precision mediump float;" +
              "varying vec2 vuv;" +
              "uniform sampler2D texture;" +
              "void main(void)" +
              "{" +
              "   gl_FragColor = texture2D(texture, vuv);" +
              "}";
          gl.shaderSource(fragmentShaderId, fragmentShader);
          gl.compileShader(fragmentShaderId);
          // プログラムオブジェクトの作成
          var programId = gl.createProgram();
          gl.attachShader(programId, vertexShaderId);
          gl.attachShader(programId, fragmentShaderId);
          gl.deleteShader(vertexShaderId);
          gl.deleteShader(fragmentShaderId);
          // リンク
          gl.linkProgram(programId);
          gl.useProgram(programId);
          return programId;
      };
      /**
       * View情報を取得する。
       */
      LAppDelegate.prototype.getView = function () {
          return this._view;
      };
      LAppDelegate.prototype.getTextureManager = function () {
          return this._textureManager;
      };
      /**
       * Cubism SDKの初期化
       */
      LAppDelegate.prototype.initializeCubism = function () {
          // setup cubism
          this._cubismOption.logFunction = _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].printMessage;
          this._cubismOption.loggingLevel = _lappdefine__WEBPACK_IMPORTED_MODULE_6__["LAppDefine"].CubismLoggingLevel;
          Csm_CubismFramework.startUp(this._cubismOption);
          // initialize cubism
          Csm_CubismFramework.initialize();
          // load model
          _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_5__["LAppLive2DManager"].getInstance();
          // default proj
          var projection = new Csm_CubismMatrix44();
          _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].updateTime();
          this._view.initializeSprite();
      };
      return LAppDelegate;
  }());
  
  /**
   * クリックしたときに呼ばれる。
   */
  function onClickBegan(e) {
      if (!LAppDelegate.getInstance()._view) {
          _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].printLog("view notfound");
          return;
      }
      LAppDelegate.getInstance()._captured = true;
      var posX = e.pageX;
      var posY = e.pageY;
      LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
  }
  /**
   * マウスポインタが動いたら呼ばれる。
   */
  function onMouseMoved(e) {
      if (!LAppDelegate.getInstance()._captured) {
          return;
      }
      if (!LAppDelegate.getInstance()._view) {
          _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].printLog("view notfound");
          return;
      }
      var rect = e.target.getBoundingClientRect();
      var posX = e.clientX - rect.left;
      var posY = e.clientY - rect.top;
      LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
  }
  /**
   * クリックが終了したら呼ばれる。
   */
  function onClickEnded(e) {
      LAppDelegate.getInstance()._captured = false;
      if (!LAppDelegate.getInstance()._view) {
          _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].printLog("view notfound");
          return;
      }
      var rect = e.target.getBoundingClientRect();
      var posX = e.clientX - rect.left;
      var posY = e.clientY - rect.top;
      LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
  }
  /**
   * タッチしたときに呼ばれる。
   */
  function onTouchBegan(e) {
      if (!LAppDelegate.getInstance()._view) {
          _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].printLog("view notfound");
          return;
      }
      LAppDelegate.getInstance()._captured = true;
      var posX = e.changedTouches[0].pageX;
      var posY = e.changedTouches[0].pageY;
      LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
  }
  /**
   * スワイプすると呼ばれる。
   */
  function onTouchMoved(e) {
      if (!LAppDelegate.getInstance()._captured) {
          return;
      }
      if (!LAppDelegate.getInstance()._view) {
          _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].printLog("view notfound");
          return;
      }
      var rect = e.target.getBoundingClientRect();
      var posX = e.changedTouches[0].clientX - rect.left;
      var posY = e.changedTouches[0].clientY - rect.top;
      LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
  }
  /**
   * タッチが終了したら呼ばれる。
   */
  function onTouchEnded(e) {
      LAppDelegate.getInstance()._captured = false;
      if (!LAppDelegate.getInstance()._view) {
          _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].printLog("view notfound");
          return;
      }
      var rect = e.target.getBoundingClientRect();
      var posX = e.changedTouches[0].clientX - rect.left;
      var posY = e.changedTouches[0].clientY - rect.top;
      LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
  }
  /**
   * タッチがキャンセルされると呼ばれる。
   */
  function onTouchCancel(e) {
      LAppDelegate.getInstance()._captured = false;
      if (!LAppDelegate.getInstance()._view) {
          _lapppal__WEBPACK_IMPORTED_MODULE_3__["LAppPal"].printLog("view notfound");
          return;
      }
      var rect = e.target.getBoundingClientRect();
      var posX = e.changedTouches[0].clientX - rect.left;
      var posY = e.changedTouches[0].clientY - rect.top;
      LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
  }
  
  
  /***/ }),
  
  /*!*********************************************************!*\
    !*** ./Sample/TypeScript/Demo/src/lapplive2dmanager.ts ***!
    \*********************************************************/
  /*! exports provided: s_instance, LAppLive2DManager */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_instance", function() { return s_instance; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAppLive2DManager", function() { return LAppLive2DManager; });
  /* harmony import */ var _Framework_math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Framework/math/cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
  /* harmony import */ var _Framework_type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Framework/type/csmvector */ "./Framework/type/csmvector.ts");
  /* harmony import */ var _lappmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lappmodel */ "./Sample/TypeScript/Demo/src/lappmodel.ts");
  /* harmony import */ var _lappdefine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lappdefine */ "./Sample/TypeScript/Demo/src/lappdefine.ts");
  /* harmony import */ var _lapppal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lapppal */ "./Sample/TypeScript/Demo/src/lapppal.ts");
  /* harmony import */ var _lappdelegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lappdelegate */ "./Sample/TypeScript/Demo/src/lappdelegate.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  var Csm_csmVector = _Framework_type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
  var Csm_CubismMatrix44 = _Framework_math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
  
  
  
  
  var s_instance = null;
  /**
   * サンプルアプリケーションにおいてCubismModelを管理するクラス
   * モデル生成と破棄、タップイベントの処理、モデル切り替えを行う。
   */
  var LAppLive2DManager = /** @class */ (function () {
      /**
       * コンストラクタ
       */
      function LAppLive2DManager() {
          this._viewMatrix = new Csm_CubismMatrix44();
          this._models = new Csm_csmVector();
          this._sceneIndex = 0;
          this.changeScene(this._sceneIndex);
      }
      /**
       * クラスのインスタンス（シングルトン）を返す。
       * インスタンスが生成されていない場合は内部でインスタンスを生成する。
       *
       * @return クラスのインスタンス
       */
      LAppLive2DManager.getInstance = function () {
          if (s_instance == null) {
              s_instance = new LAppLive2DManager();
          }
          return s_instance;
      };
      /**
       * クラスのインスタンス（シングルトン）を解放する。
       */
      LAppLive2DManager.releaseInstance = function () {
          if (s_instance != null) {
              s_instance = void 0;
          }
          s_instance = null;
      };
      /**
       * 現在のシーンで保持しているモデルを返す。
       *
       * @param no モデルリストのインデックス値
       * @return モデルのインスタンスを返す。インデックス値が範囲外の場合はNULLを返す。
       */
      LAppLive2DManager.prototype.getModel = function (no) {
          if (no < this._models.getSize()) {
              return this._models.at(no);
          }
          return null;
      };
      /**
       * 現在のシーンで保持しているすべてのモデルを解放する
       */
      LAppLive2DManager.prototype.releaseAllModel = function () {
          for (var i = 0; i < this._models.getSize(); i++) {
              this._models.at(i).release();
              this._models.set(i, null);
          }
          this._models.clear();
      };
      /**
       * 画面をドラッグした時の処理
       *
       * @param x 画面のX座標
       * @param y 画面のY座標
       */
      LAppLive2DManager.prototype.onDrag = function (x, y) {
          for (var i = 0; i < this._models.getSize(); i++) {
              var model = this.getModel(i);
              if (model) {
                  model.setDragging(x, y);
              }
          }
      };
      /**
       * 画面をタップした時の処理
       *
       * @param x 画面のX座標
       * @param y 画面のY座標
       */
      LAppLive2DManager.prototype.onTap = function (x, y) {
          if (_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].DebugLogEnable) {
              _lapppal__WEBPACK_IMPORTED_MODULE_4__["LAppPal"].printLog("[APP]tap point: {x: {0} y: {1}}", x.toFixed(2), y.toFixed(2));
          }
          for (var i = 0; i < this._models.getSize(); i++) {
              if (this._models.at(i).hitTest(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].HitAreaNameHead, x, y)) {
                  if (_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].DebugLogEnable) {
                      _lapppal__WEBPACK_IMPORTED_MODULE_4__["LAppPal"].printLog("[APP]hit area: [{0}]", _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].HitAreaNameHead);
                  }
                  this._models.at(i).setRandomExpression();
              }
              else if (this._models.at(i).hitTest(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].HitAreaNameBody, x, y)) {
                  if (_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].DebugLogEnable) {
                      _lapppal__WEBPACK_IMPORTED_MODULE_4__["LAppPal"].printLog("[APP]hit area: [{0}]", _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].HitAreaNameBody);
                  }
                  this._models.at(i).startRandomMotion(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].MotionGroupTapBody, _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].PriorityNormal);
              }
          }
      };
      /**
       * 画面を更新するときの処理
       * モデルの更新処理及び描画処理を行う
       */
      LAppLive2DManager.prototype.onUpdate = function () {
          var projection = new Csm_CubismMatrix44();
          var width, height;
          width = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].width;
          height = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].height;
          projection.scale(1.0, width / height);
          if (this._viewMatrix != null) {
              projection.multiplyByMatrix(this._viewMatrix);
          }
          var saveProjection = projection.clone();
          var modelCount = this._models.getSize();
          for (var i = 0; i < modelCount; ++i) {
              var model = this.getModel(i);
              projection = saveProjection.clone();
              model.update();
              model.draw(projection); // 参照渡しなのでprojectionは変質する。
          }
      };
      /**
       * 次のシーンに切りかえる
       * サンプルアプリケーションではモデルセットの切り替えを行う。
       */
      LAppLive2DManager.prototype.nextScene = function () {
          var no = (this._sceneIndex + 1) % _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ModelDirSize;
          this.changeScene(no);
      };
      /**
       * シーンを切り替える
       * サンプルアプリケーションではモデルセットの切り替えを行う。
       */
      LAppLive2DManager.prototype.changeScene = function (index) {
          this._sceneIndex = index;
          if (_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].DebugLogEnable) {
              _lapppal__WEBPACK_IMPORTED_MODULE_4__["LAppPal"].printLog("[APP]model index: {0}", this._sceneIndex);
          }
          // ModelDir[]に保持したディレクトリ名から
          // model3.jsonのパスを決定する。
          // ディレクトリ名とmodel3.jsonの名前を一致させておくこと。
          var model = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ModelDir[index];
          var modelPath = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ResourcesPath + model + "/";
          var modelJsonName = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ModelDir[index];
          modelJsonName += ".model3.json";
          this.releaseAllModel();
          this._models.pushBack(new _lappmodel__WEBPACK_IMPORTED_MODULE_2__["LAppModel"]());
          this._models.at(0).loadAssets(modelPath, modelJsonName);
      };
      return LAppLive2DManager;
  }());
  
  
  
  /***/ }),
  
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
  
  
  
  /***/ }),
  
  /*!***********************************************!*\
    !*** ./Sample/TypeScript/Demo/src/lapppal.ts ***!
    \***********************************************/
  /*! exports provided: LAppPal */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAppPal", function() { return LAppPal; });
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  /**
   * プラットフォーム依存機能を抽象化する Cubism Platform Abstraction Layer.
   *
   * ファイル読み込みや時刻取得等のプラットフォームに依存する関数をまとめる。
   */
  var LAppPal = /** @class */ (function () {
      function LAppPal() {
      }
      /**
       * ファイルをバイトデータとして読みこむ
       *
       * @param filePath 読み込み対象ファイルのパス
       * @return
       * {
       *      buffer,   読み込んだバイトデータ
       *      size        ファイルサイズ
       * }
       */
      LAppPal.loadFileAsBytes = function (filePath, callback) {
          //filePath;//
          var path = filePath;
          var size = 0;
          fetch(path).then(function (response) {
              return response.arrayBuffer();
          }).then(function (arrayBuffer) {
              size = arrayBuffer.byteLength;
              callback(arrayBuffer, size);
          });
      };
      /**
       * バイトデータを解放する
       * @param byteData 解放したいバイトデータ
       */
      LAppPal.releaseBytes = function (byteData) {
          byteData = void 0;
      };
      /**
       * デルタ時間（前回フレームとの差分）を取得する
       * @return デルタ時間[ms]
       */
      LAppPal.getDeltaTime = function () {
          return this.s_deltaTime;
      };
      LAppPal.updateTime = function () {
          this.s_currentFrame = Date.now();
          this.s_deltaTime = (this.s_currentFrame - this.s_lastFrame) / 1000;
          this.s_lastFrame = this.s_currentFrame;
      };
      /**
       * ログを出力する
       * @param format 書式付き文字列
       * @param ... args（可変長引数）文字列
       */
      LAppPal.printLog = function (format) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          console.log(format.replace(/\{(\d+)\}/g, function (m, k) {
              return args[k];
          }));
      };
      /**
       * メッセージを出力する
       * @param message 文字列
       */
      LAppPal.printMessage = function (message) {
          LAppPal.printLog(message);
      };
      LAppPal.lastUpdate = Date.now();
      LAppPal.s_currentFrame = 0.0;
      LAppPal.s_lastFrame = 0.0;
      LAppPal.s_deltaTime = 0.0;
      return LAppPal;
  }());
  
  
  
  /***/ }),
  
  /*!**************************************************!*\
    !*** ./Sample/TypeScript/Demo/src/lappsprite.ts ***!
    \**************************************************/
  /*! exports provided: LAppSprite, Rect */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAppSprite", function() { return LAppSprite; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
  /* harmony import */ var _lappdelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lappdelegate */ "./Sample/TypeScript/Demo/src/lappdelegate.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  /**
   * スプライトを実装するクラス
   *
   * テクスチャＩＤ、Rectの管理
   */
  var LAppSprite = /** @class */ (function () {
      /**
       * コンストラクタ
       * @param x            x座標
       * @param y            y座標
       * @param width        横幅
       * @param height       高さ
       * @param textureId    テクスチャ
       */
      function LAppSprite(x, y, width, height, textureId) {
          this._rect = new Rect();
          this._rect.left = (x - width * 0.5);
          this._rect.right = (x + width * 0.5);
          this._rect.up = (y + height * 0.5);
          this._rect.down = (y - height * 0.5);
          this._texture = textureId;
          this._vertexBuffer = null;
          this._uvBuffer = null;
          this._indexBuffer = null;
          this._positionLocation = null;
          this._uvLocation = null;
          this._textureLocation = null;
          this._positionArray = null;
          this._uvArray = null;
          this._indexArray = null;
          this._firstDraw = true;
      }
      /**
       * 解放する。
       */
      LAppSprite.prototype.release = function () {
          this._rect = null;
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteTexture(this._texture);
          this._texture = null;
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteBuffer(this._uvBuffer);
          this._uvBuffer = null;
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteBuffer(this._vertexBuffer);
          this._vertexBuffer = null;
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteBuffer(this._indexBuffer);
          this._indexBuffer = null;
      };
      /**
       * テクスチャを返す
       */
      LAppSprite.prototype.getTexture = function () {
          return this._texture;
      };
      /**
       * 描画する。
       * @param programId シェーダープログラム
       * @param canvas 描画するキャンパス情報
       */
      LAppSprite.prototype.render = function (programId) {
          if (this._texture == null) {
              // ロードが完了していない
              return;
          }
          // 初回描画時
          if (this._firstDraw) {
              // 何番目のattribute変数か取得
              this._positionLocation = _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].getAttribLocation(programId, "position");
              _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].enableVertexAttribArray(this._positionLocation);
              this._uvLocation = _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].getAttribLocation(programId, "uv");
              _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].enableVertexAttribArray(this._uvLocation);
              // 何番目のuniform変数か取得
              this._textureLocation = _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].getUniformLocation(programId, "texture");
              // uniform属性の登録
              _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].uniform1i(this._textureLocation, 0);
              // uvバッファ、座標初期化
              {
                  this._uvArray = new Float32Array([
                      1.0, 0.0,
                      0.0, 0.0,
                      0.0, 1.0,
                      1.0, 1.0
                  ]);
                  // uvバッファを作成
                  this._uvBuffer = _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].createBuffer();
              }
              // 頂点バッファ、座標初期化
              {
                  var maxWidth = _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["canvas"].width;
                  var maxHeight = _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["canvas"].height;
                  // 頂点データ
                  this._positionArray = new Float32Array([
                      (this._rect.right - maxWidth * 0.5) / (maxWidth * 0.5), (this._rect.up - maxHeight * 0.5) / (maxHeight * 0.5),
                      (this._rect.left - maxWidth * 0.5) / (maxWidth * 0.5), (this._rect.up - maxHeight * 0.5) / (maxHeight * 0.5),
                      (this._rect.left - maxWidth * 0.5) / (maxWidth * 0.5), (this._rect.down - maxHeight * 0.5) / (maxHeight * 0.5),
                      (this._rect.right - maxWidth * 0.5) / (maxWidth * 0.5), (this._rect.down - maxHeight * 0.5) / (maxHeight * 0.5)
                  ]);
                  // 頂点バッファを作成
                  this._vertexBuffer = _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].createBuffer();
              }
              // 頂点インデックスバッファ、初期化
              {
                  // インデックスデータ
                  this._indexArray = new Uint16Array([
                      0, 1, 2,
                      3, 2, 0
                  ]);
                  // インデックスバッファを作成
                  this._indexBuffer = _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].createBuffer();
              }
              this._firstDraw = false;
          }
          // UV座標登録
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].bindBuffer(_lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].ARRAY_BUFFER, this._uvBuffer);
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].bufferData(_lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].ARRAY_BUFFER, this._uvArray, _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].STATIC_DRAW);
          // attribute属性を登録
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].vertexAttribPointer(this._uvLocation, 2, _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].FLOAT, false, 0, 0);
          // 頂点座標を登録
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].bindBuffer(_lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].ARRAY_BUFFER, this._vertexBuffer);
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].bufferData(_lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].ARRAY_BUFFER, this._positionArray, _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].STATIC_DRAW);
          // attribute属性を登録
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].vertexAttribPointer(this._positionLocation, 2, _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].FLOAT, false, 0, 0);
          // 頂点インデックスを作成
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].bindBuffer(_lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].ELEMENT_ARRAY_BUFFER, this._indexBuffer);
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].bufferData(_lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].ELEMENT_ARRAY_BUFFER, this._indexArray, _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].DYNAMIC_DRAW);
          // モデルの描画
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].bindTexture(_lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, this._texture);
          _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].drawElements(_lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].TRIANGLES, this._indexArray.length, _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["gl"].UNSIGNED_SHORT, 0);
      };
      /**
       * 当たり判定
       * @param pointX x座標
       * @param pointY y座標
       */
      LAppSprite.prototype.isHit = function (pointX, pointY) {
          // 画面サイズを取得する。
          var maxWidth, maxHeight;
          maxWidth = _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["canvas"].width;
          maxHeight = _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["canvas"].height;
          // Y座標は変換する必要あり
          var y = maxHeight - pointY;
          return (pointX >= this._rect.left && pointX <= this._rect.right && y <= this._rect.up && y >= this._rect.down);
      };
      return LAppSprite;
  }());
  
  var Rect = /** @class */ (function () {
      function Rect() {
      }
      return Rect;
  }());
  
  
  
  /***/ }),
  
  /*!**********************************************************!*\
    !*** ./Sample/TypeScript/Demo/src/lapptexturemanager.ts ***!
    \**********************************************************/
  /*! exports provided: LAppTextureManager, TextureInfo */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAppTextureManager", function() { return LAppTextureManager; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureInfo", function() { return TextureInfo; });
  /* harmony import */ var _Framework_type_csmvector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Framework/type/csmvector */ "./Framework/type/csmvector.ts");
  /* harmony import */ var _lappdelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lappdelegate */ "./Sample/TypeScript/Demo/src/lappdelegate.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  var Csm_csmVector = _Framework_type_csmvector__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmVector;
  
  /**
   * テクスチャ管理クラス
   * 画像読み込み、管理を行うクラス。
   */
  var LAppTextureManager = /** @class */ (function () {
      /**
       * コンストラクタ
       */
      function LAppTextureManager() {
          this._textures = new Csm_csmVector();
      }
      /**
       * 解放する。
       */
      LAppTextureManager.prototype.release = function () {
          for (var ite = this._textures.begin(); ite.notEqual(this._textures.end()); ite.preIncrement()) {
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].deleteTexture(ite.ptr().id);
          }
          this._textures = null;
      };
      /**
       * 画像読み込み
       *
       * @param fileName 読み込む画像ファイルパス名
       * @param usePremultiply Premult処理を有効にするか
       * @return 画像情報、読み込み失敗時はnullを返す
       */
      LAppTextureManager.prototype.createTextureFromPngFile = function (fileName, usePremultiply, callback) {
          var _this = this;
          var _loop_1 = function (ite) {
              if (ite.ptr().fileName == fileName && ite.ptr().usePremultply == usePremultiply) {
                  // 2回目以降はキャッシュが使用される(待ち時間なし)
                  // WebKitでは同じImageのonloadを再度呼ぶには再インスタンスが必要
                  // 詳細：https://stackoverflow.com/a/5024181
                  ite.ptr().img = new Image();
                  ite.ptr().img.onload = function () {
                      callback(ite.ptr());
                  };
                  ite.ptr().img.src = fileName;
                  return { value: void 0 };
              }
          };
          // search loaded texture already
          for (var ite = this._textures.begin(); ite.notEqual(this._textures.end()); ite.preIncrement()) {
              var state_1 = _loop_1(ite);
              if (typeof state_1 === "object")
                  return state_1.value;
          }
          // データのオンロードをトリガーにする
          var img = new Image();
          img.onload = function () {
              // テクスチャオブジェクトの作成
              var tex = _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].createTexture();
              // テクスチャを選択
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].bindTexture(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].TEXTURE_2D, tex);
              // テクスチャにピクセルを書き込む
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].texParameteri(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].TEXTURE_2D, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].TEXTURE_MIN_FILTER, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].LINEAR_MIPMAP_LINEAR);
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].texParameteri(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].TEXTURE_2D, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].TEXTURE_MAG_FILTER, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].LINEAR);
              // Premult処理を行わせる
              if (usePremultiply) {
                  _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].pixelStorei(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
              }
              // テクスチャにピクセルを書き込む
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].texImage2D(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].TEXTURE_2D, 0, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].RGBA, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].RGBA, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].UNSIGNED_BYTE, img);
              // ミップマップを生成
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].generateMipmap(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].TEXTURE_2D);
              // テクスチャをバインド
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].bindTexture(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"].TEXTURE_2D, null);
              var textureInfo = new TextureInfo();
              if (textureInfo != null) {
                  textureInfo.fileName = fileName;
                  textureInfo.width = img.width;
                  textureInfo.height = img.height;
                  textureInfo.id = tex;
                  textureInfo.img = img;
                  textureInfo.usePremultply = usePremultiply;
                  _this._textures.pushBack(textureInfo);
              }
              callback(textureInfo);
          };
          img.src = fileName;
      };
      /**
       * 画像の解放
       *
       * 配列に存在する画像全てを解放する。
       */
      LAppTextureManager.prototype.releaseTextures = function () {
          for (var i = 0; i < this._textures.getSize(); i++) {
              this._textures.set(i, null);
          }
          this._textures.clear();
      };
      /**
       * 画像の解放
       *
       * 指定したテクスチャの画像を解放する。
       * @param texture 解放するテクスチャ
       */
      LAppTextureManager.prototype.releaseTextureByTexture = function (texture) {
          for (var i = 0; i < this._textures.getSize(); i++) {
              if (this._textures.at(i).id != texture) {
                  continue;
              }
              this._textures.set(i, null);
              this._textures.remove(i);
              break;
          }
      };
      /**
       * 画像の解放
       *
       * 指定した名前の画像を解放する。
       * @param fileName 解放する画像ファイルパス名
       */
      LAppTextureManager.prototype.releaseTextureByFilePath = function (fileName) {
          for (var i = 0; i < this._textures.getSize(); i++) {
              if (this._textures.at(i).fileName == fileName) {
                  this._textures.set(i, null);
                  this._textures.remove(i);
                  break;
              }
          }
      };
      return LAppTextureManager;
  }());
  
  /**
   * 画像情報構造体
   */
  var TextureInfo = /** @class */ (function () {
      function TextureInfo() {
          this.id = null; // テクスチャ
          this.width = 0; // 横幅
          this.height = 0; // 高さ
      }
      return TextureInfo;
  }());
  
  
  
  /***/ }),
  
  /*!************************************************!*\
    !*** ./Sample/TypeScript/Demo/src/lappview.ts ***!
    \************************************************/
  /*! exports provided: LAppView */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAppView", function() { return LAppView; });
  /* harmony import */ var _Framework_math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Framework/math/cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
  /* harmony import */ var _Framework_math_cubismviewmatrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Framework/math/cubismviewmatrix */ "./Framework/math/cubismviewmatrix.ts");
  /* harmony import */ var _touchmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./touchmanager */ "./Sample/TypeScript/Demo/src/touchmanager.ts");
  /* harmony import */ var _lappdefine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lappdefine */ "./Sample/TypeScript/Demo/src/lappdefine.ts");
  /* harmony import */ var _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lapplive2dmanager */ "./Sample/TypeScript/Demo/src/lapplive2dmanager.ts");
  /* harmony import */ var _lappdelegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lappdelegate */ "./Sample/TypeScript/Demo/src/lappdelegate.ts");
  /* harmony import */ var _lappsprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lappsprite */ "./Sample/TypeScript/Demo/src/lappsprite.ts");
  /* harmony import */ var _lapppal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lapppal */ "./Sample/TypeScript/Demo/src/lapppal.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  var Csm_CubismViewMatrix = _Framework_math_cubismviewmatrix__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismViewMatrix;
  var Csm_CubismMatrix44 = _Framework_math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
  
  
  
  
  
  
  /**
   * 描画クラス。
   */
  var LAppView = /** @class */ (function () {
      /**
       * コンストラクタ
       */
      function LAppView() {
          this._programId = null;
          this._back = null;
          this._gear = null;
          // タッチ関係のイベント管理
          this._touchManager = new _touchmanager__WEBPACK_IMPORTED_MODULE_2__["TouchManager"]();
          // デバイス座標からスクリーン座標に変換するための
          this._deviceToScreen = new Csm_CubismMatrix44();
          // 画面の表示の拡大縮小や移動の変換を行う行列
          this._viewMatrix = new Csm_CubismViewMatrix();
      }
      /**
       * 初期化する。
       */
      LAppView.prototype.initialize = function () {
          var width, height;
          width = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].width;
          height = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].height;
          var ratio = height / width;
          var left = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalLeft;
          var right = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalRight;
          var bottom = -ratio;
          var top = ratio;
          this._viewMatrix.setScreenRect(left, right, bottom, top); // デバイスに対応する画面の範囲。 Xの左端、Xの右端、Yの下端、Yの上端
          var screenW = Math.abs(left - right);
          this._deviceToScreen.scaleRelative(screenW / width, -screenW / width);
          this._deviceToScreen.translateRelative(-width * 0.5, -height * 0.5);
          // 表示範囲の設定
          this._viewMatrix.setMaxScale(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewMaxScale); // 限界拡張率
          this._viewMatrix.setMinScale(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewMinScale); // 限界縮小率
          // 表示できる最大範囲
          this._viewMatrix.setMaxScreenRect(_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalMaxLeft, _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalMaxRight, _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalMaxBottom, _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ViewLogicalMaxTop);
      };
      /**
       * 解放する
       */
      LAppView.prototype.release = function () {
          this._viewMatrix = null;
          this._touchManager = null;
          this._deviceToScreen = null;
          this._gear.release();
          this._gear = null;
          this._back.release();
          this._back = null;
          _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["gl"].deleteProgram(this._programId);
          this._programId = null;
      };
      /**
       * 描画する。
       */
      LAppView.prototype.render = function () {
          _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["gl"].useProgram(this._programId);
          if (this._back) {
              this._back.render(this._programId);
          }
          if (this._gear) {
              this._gear.render(this._programId);
          }
          _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["gl"].flush();
          var live2DManager = _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__["LAppLive2DManager"].getInstance();
          live2DManager.onUpdate();
      };
      /**
       * 画像の初期化を行う。
       */
      LAppView.prototype.initializeSprite = function () {
          var _this = this;
          var width = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].width;
          var height = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["canvas"].height;
          var textureManager = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["LAppDelegate"].getInstance().getTextureManager();
          var resourcesPath = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].ResourcesPath;
          var imageName = "";
          // 背景画像初期化
          imageName = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].BackImageName;
          // 非同期なのでコールバック関数を作成
          var initBackGroundTexture = function (textureInfo) {
              var x = width * 0.5;
              var y = height * 0.5;
              var fwidth = textureInfo.width * 2.0;
              var fheight = height * 0.95;
              _this._back = new _lappsprite__WEBPACK_IMPORTED_MODULE_6__["LAppSprite"](x, y, fwidth, fheight, textureInfo.id);
          };
          textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initBackGroundTexture);
          // 歯車画像初期化
          imageName = _lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].GearImageName;
          var initGearTexture = function (textureInfo) {
              var x = width - textureInfo.width * 0.5;
              var y = height - textureInfo.height * 0.5;
              var fwidth = textureInfo.width;
              var fheight = textureInfo.height;
              _this._gear = new _lappsprite__WEBPACK_IMPORTED_MODULE_6__["LAppSprite"](x, y, fwidth, fheight, textureInfo.id);
          };
          textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initGearTexture);
          // シェーダーを作成
          if (this._programId == null) {
              this._programId = _lappdelegate__WEBPACK_IMPORTED_MODULE_5__["LAppDelegate"].getInstance().createShader();
          }
      };
      /**
       * タッチされた時に呼ばれる。
       *
       * @param pointX スクリーンX座標
       * @param pointY スクリーンY座標
       */
      LAppView.prototype.onTouchesBegan = function (pointX, pointY) {
          this._touchManager.touchesBegan(pointX, pointY);
      };
      /**
       * タッチしているときにポインタが動いたら呼ばれる。
       *
       * @param pointX スクリーンX座標
       * @param pointY スクリーンY座標
       */
      LAppView.prototype.onTouchesMoved = function (pointX, pointY) {
          var viewX = this.transformViewX(this._touchManager.getX());
          var viewY = this.transformViewY(this._touchManager.getY());
          this._touchManager.touchesMoved(pointX, pointY);
          var live2DManager = _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__["LAppLive2DManager"].getInstance();
          live2DManager.onDrag(viewX, viewY);
      };
      /**
       * タッチが終了したら呼ばれる。
       *
       * @param pointX スクリーンX座標
       * @param pointY スクリーンY座標
       */
      LAppView.prototype.onTouchesEnded = function (pointX, pointY) {
          // タッチ終了
          var live2DManager = _lapplive2dmanager__WEBPACK_IMPORTED_MODULE_4__["LAppLive2DManager"].getInstance();
          live2DManager.onDrag(0.0, 0.0);
          {
              // シングルタップ
              var x = this._deviceToScreen.transformX(this._touchManager.getX()); // 論理座標変換した座標を取得。
              var y = this._deviceToScreen.transformY(this._touchManager.getY()); // 論理座標変化した座標を取得。
              if (_lappdefine__WEBPACK_IMPORTED_MODULE_3__["LAppDefine"].DebugTouchLogEnable) {
                  _lapppal__WEBPACK_IMPORTED_MODULE_7__["LAppPal"].printLog("[APP]touchesEnded x: {0} y: {1}", x, y);
              }
              live2DManager.onTap(x, y);
              // 歯車にタップしたか
              if (this._gear.isHit(pointX, pointY)) {
                  live2DManager.nextScene();
              }
          }
      };
      /**
       * X座標をView座標に変換する。
       *
       * @param deviceX デバイスX座標
       */
      LAppView.prototype.transformViewX = function (deviceX) {
          var screenX = this._deviceToScreen.transformX(deviceX); // 論理座標変換した座標を取得。
          return this._viewMatrix.invertTransformX(screenX); // 拡大、縮小、移動後の値。
      };
      /**
       * Y座標をView座標に変換する。
       *
       * @param deviceY デバイスY座標
       */
      LAppView.prototype.transformViewY = function (deviceY) {
          var screenY = this._deviceToScreen.transformY(deviceY); // 論理座標変換した座標を取得。
          return this._viewMatrix.invertTransformY(screenY);
      };
      /**
       * X座標をScreen座標に変換する。
       * @param deviceX デバイスX座標
       */
      LAppView.prototype.transformScreenX = function (deviceX) {
          return this._deviceToScreen.transformX(deviceX);
      };
      /**
       * Y座標をScreen座標に変換する。
       *
       * @param deviceY デバイスY座標
       */
      LAppView.prototype.transformScreenY = function (deviceY) {
          return this._deviceToScreen.transformY(deviceY);
      };
      return LAppView;
  }());
  
  
  
  /***/ })