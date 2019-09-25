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
  
  
  
  /***/ })