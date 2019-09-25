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
  
  
  /***/ })  