/*!****************************************!*\
  !*** ./Framework/utils/cubismdebug.ts ***!
  \****************************************/
/*! exports provided: CubismLogPrint, CubismLogPrintIn, CSM_ASSERT, CubismLogVerbose, CubismLogDebug, CubismLogInfo, CubismLogWarning, CubismLogError, Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogPrint", function() { return CubismLogPrint; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogPrintIn", function() { return CubismLogPrintIn; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_ASSERT", function() { return CSM_ASSERT; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogVerbose", function() { return CubismLogVerbose; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogDebug", function() { return CubismLogDebug; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogInfo", function() { return CubismLogInfo; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogWarning", function() { return CubismLogWarning; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogError", function() { return CubismLogError; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
  /* harmony import */ var _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cubismframeworkconfig */ "./Framework/cubismframeworkconfig.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  
  var CubismLogPrint = function (level, fmt, args) {
      Live2DCubismFramework.CubismDebug.print(level, "[CSM]" + fmt, args);
  };
  var CubismLogPrintIn = function (level, fmt, args) {
      CubismLogPrint(level, fmt + "\n", args);
  };
  var CSM_ASSERT = function (expr) {
      console.assert(expr);
  };
  var CubismLogVerbose = function (fmt) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
      }
  };
  var CubismLogDebug = function (fmt) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
      }
  };
  var CubismLogInfo = function (fmt) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
      }
  };
  var CubismLogWarning = function (fmt) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
      }
  };
  var CubismLogError = function (fmt) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
      }
  };
  if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] <= _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_VERBOSE"]) {
      CubismLogVerbose = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Verbose, "[V]" + fmt, args);
      };
      CubismLogDebug = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Debug, "[D]" + fmt, args);
      };
      CubismLogInfo = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
      };
      CubismLogWarning = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
      };
      CubismLogError = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
      };
  }
  else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_DEBUG"]) {
      CubismLogDebug = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Debug, "[D]" + fmt, args);
      };
      CubismLogInfo = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
      };
      CubismLogWarning = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
      };
      CubismLogError = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
      };
  }
  else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_INFO"]) {
      CubismLogInfo = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
      };
      CubismLogWarning = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
      };
      CubismLogError = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
      };
  }
  else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_WARNING"]) {
      CubismLogWarning = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
      };
      CubismLogError = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
      };
  }
  else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_ERROR"]) {
      CubismLogError = function (fmt) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
      };
  }
  //------------ LIVE2D NAMESPACE ------------
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * デバッグ用のユーティリティクラス。
       * ログの出力、バイトのダンプなど
       */
      var CubismDebug = /** @class */ (function () {
          /**
           * private コンストラクタ
           */
          function CubismDebug() {
          }
          /**
           * ログを出力する。第一引数にログレベルを設定する。
           * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
           *
           * @param logLevel ログレベルの設定
           * @param format 書式付き文字列
           * @param args 可変長引数
           */
          CubismDebug.print = function (logLevel, format, args) {
              // オプションで設定されたログ出力レベルを下回る場合はログに出さない
              if (logLevel < _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework.getLoggingLevel()) {
                  return;
              }
              var logPrint = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework.coreLogFunction;
              if (!logPrint)
                  return;
              var buffer = format.replace(/\{(\d+)\}/g, function (m, k) {
                  return args[k];
              });
              logPrint(buffer);
          };
          /**
           * データから指定した長さだけダンプ出力する。
           * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
           *
           * @param logLevel ログレベルの設定
           * @param data ダンプするデータ
           * @param length ダンプする長さ
           */
          CubismDebug.dumpBytes = function (logLevel, data, length) {
              for (var i = 0; i < length; i++) {
                  if (i % 16 == 0 && i > 0)
                      this.print(logLevel, "\n");
                  else if (i % 8 == 0 && i > 0)
                      this.print(logLevel, "  ");
                  this.print(logLevel, "{0} ", [(data[i] & 0xFF)]);
              }
              this.print(logLevel, "\n");
          };
          return CubismDebug;
      }());
      Live2DCubismFramework.CubismDebug = CubismDebug;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  //------------ LIVE2D NAMESPACE ------------
  
  
  /***/ })