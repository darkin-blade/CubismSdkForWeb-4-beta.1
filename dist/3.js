/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_VERBOSE", function() { return CSM_LOG_LEVEL_VERBOSE; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_DEBUG", function() { return CSM_LOG_LEVEL_DEBUG; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_INFO", function() { return CSM_LOG_LEVEL_INFO; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_WARNING", function() { return CSM_LOG_LEVEL_WARNING; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_ERROR", function() { return CSM_LOG_LEVEL_ERROR; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_OFF", function() { return CSM_LOG_LEVEL_OFF; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL", function() { return CSM_LOG_LEVEL; });
    /**
     * Copyright(c) Live2D Inc. All rights reserved.
     *
     * Use of this source code is governed by the Live2D Open Software license
     * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
     */
    //========================================================
    //  ログ出力関数の設定
    //========================================================
    //---------- ログ出力レベル 選択項目 定義 ----------
    /// 詳細ログ出力設定
    var CSM_LOG_LEVEL_VERBOSE = 0;
    /// デバッグログ出力設定
    var CSM_LOG_LEVEL_DEBUG = 1;
    /// Infoログ出力設定
    var CSM_LOG_LEVEL_INFO = 2;
    /// 警告ログ出力設定
    var CSM_LOG_LEVEL_WARNING = 3;
    /// エラーログ出力設定
    var CSM_LOG_LEVEL_ERROR = 4;
    /// ログ出力オフ設定
    var CSM_LOG_LEVEL_OFF = 5;
    /**
    * ログ出力レベル設定。
    *
    * 強制的にログ出力レベルを変える時に定義を有効にする。
    * CSM_LOG_LEVEL_VERBOSE ～ CSM_LOG_LEVEL_OFF を選択する。
    */
    var CSM_LOG_LEVEL = CSM_LOG_LEVEL_VERBOSE;
    
    
    /***/ }) 