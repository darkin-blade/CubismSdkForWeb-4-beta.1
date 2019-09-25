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
  
  
  
  /***/ })  