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
              canvas.onmousedown = onClickBegan;// 执行动画
              // canvas.onmousemove = onMouseMoved;
              canvas.onmouseup = onClickEnded;// 需要执行动画
              // document.onmouseenter = onClickBegan;
              document.onmousemove = onMouseMoved;
              document.onmouseleave = onClickEnded;// 回头
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
      LAppDelegate.getInstance()._captured = true;// TODO
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
      // var rect = e.target.getBoundingClientRect();
      // var posX = e.clientX - rect.left;
      // var posY = e.clientY - rect.top;
      // LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
      LAppDelegate.getInstance()._view.onTouchesEnded(0, 0);
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
  
  
  /***/ })