/*!********************************************!*\
  !*** ./Sample/TypeScript/Demo/src/main.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _lappdelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lappdelegate */ "./Sample/TypeScript/Demo/src/lappdelegate.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  console.log("main define");
  /* var */ main = function () {// 使用JsManager的全局变量,将其改成函数
      // create the application instance
      if (_lappdelegate__WEBPACK_IMPORTED_MODULE_0__["LAppDelegate"].getInstance().initialize() == false) {
          return;
      }
      _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["LAppDelegate"].getInstance().run();
  };
  // main();// 入口函数
  /**
   * 終了時の処理
   */
  window.onbeforeunload = function () {
      _lappdelegate__WEBPACK_IMPORTED_MODULE_0__["LAppDelegate"].releaseInstance();
  };
  
  
  /***/ })