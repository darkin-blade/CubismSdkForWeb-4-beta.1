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
      function LAppTextureManager(num) {
          this._num = num;// TODO 多重canvas
          console.log("LAppTextureManager " + this._num);
          this._textures = new Csm_csmVector();
      }
      /**
       * 解放する。
       */
      LAppTextureManager.prototype.release = function () {
          for (var ite = this._textures.begin(); ite.notEqual(this._textures.end()); ite.preIncrement()) {
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][this._num].deleteTexture(ite.ptr().id);
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
          var tempNum = this._num;
          img.onload = function () {
              // テクスチャオブジェクトの作成
              var tex = _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].createTexture();
              // テクスチャを選択
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].bindTexture(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].TEXTURE_2D, tex);
              // テクスチャにピクセルを書き込む
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].texParameteri(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].TEXTURE_2D, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].TEXTURE_MIN_FILTER, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].LINEAR_MIPMAP_LINEAR);
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].texParameteri(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].TEXTURE_2D, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].TEXTURE_MAG_FILTER, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].LINEAR);
              // Premult処理を行わせる
              if (usePremultiply) {
                  _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].pixelStorei(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
              }
              // テクスチャにピクセルを書き込む
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].texImage2D(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].TEXTURE_2D, 0, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].RGBA, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].RGBA, _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].UNSIGNED_BYTE, img);
              // ミップマップを生成
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].generateMipmap(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].TEXTURE_2D);
              // テクスチャをバインド
              _lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].bindTexture(_lappdelegate__WEBPACK_IMPORTED_MODULE_1__["gl"][tempNum].TEXTURE_2D, null);
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
  
  
  
  /***/ })