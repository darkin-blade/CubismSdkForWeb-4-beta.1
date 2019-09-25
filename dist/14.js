/*!**********************************!*\
  !*** ./Framework/type/csmmap.ts ***!
  \**********************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
  /* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
  /**
   * Copyright(c) Live2D Inc. All rights reserved.
   *
   * Use of this source code is governed by the Live2D Open Software license
   * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
   */
  
  var Live2DCubismFramework;
  (function (Live2DCubismFramework) {
      /**
       * Key-Valueのペアを定義するクラス
       * csmMapクラスの内部データで使用する。
       */
      var csmPair = /** @class */ (function () {
          /**
           * コンストラクタ
           * @param key Keyとしてセットする値
           * @param value Valueとしてセットする値
           */
          function csmPair(key, value) {
              this.first = (key == undefined)
                  ? null
                  : key;
              this.second = (value == undefined)
                  ? null
                  : value;
          }
          return csmPair;
      }());
      Live2DCubismFramework.csmPair = csmPair;
      /**
       * マップ型
       */
      var csmMap = /** @class */ (function () {
          /**
           * 引数付きコンストラクタ
           * @param size 初期化時点で確保するサイズ
           */
          function csmMap(size) {
              if (size != undefined) {
                  if (size < 1) {
                      this._keyValues = new Array();
                      this._dummyValue = null;
                      this._size = 0;
                  }
                  else {
                      this._keyValues = new Array(size);
                      this._size = size;
                  }
              }
              else {
                  this._keyValues = new Array();
                  this._dummyValue = null;
                  this._size = 0;
              }
          }
          /**
           * デストラクタ
           */
          csmMap.prototype.release = function () {
              this.clear();
          };
          /**
           * キーを追加する
           * @param key 新たに追加するキー
           */
          csmMap.prototype.appendKey = function (key) {
              // 新しくKey/Valueのペアを作る
              this.prepareCapacity(this._size + 1, false); // 1つ以上入る隙間を作る
              // 新しいkey/valueのインデックスは_size
              this._keyValues[this._size] = new csmPair(key);
              this._size += 1;
          };
          /**
           * 添字演算子[key]のオーバーロード(get)
           * @param key 添字から特定されるValue値
           */
          csmMap.prototype.getValue = function (key) {
              var found = -1;
              for (var i = 0; i < this._size; i++) {
                  if (this._keyValues[i].first == key) {
                      found = i;
                      break;
                  }
              }
              if (found >= 0) {
                  return this._keyValues[found].second;
              }
              else {
                  this.appendKey(key); // 新規キーを追加
                  return this._keyValues[this._size - 1].second;
              }
          };
          /**
           * 添字演算子[key]のオーバーロード(set)
           * @param key 添字から特定されるValue値
           * @param value 代入するValue値
           */
          csmMap.prototype.setValue = function (key, value) {
              var found = -1;
              for (var i = 0; i < this._size; i++) {
                  if (this._keyValues[i].first == key) {
                      found = i;
                      break;
                  }
              }
              if (found >= 0) {
                  this._keyValues[found].second = value;
              }
              else {
                  this.appendKey(key); // 新規キーを追加
                  this._keyValues[this._size - 1].second = value;
              }
          };
          /**
           * 引数で渡したKeyを持つ要素が存在するか
           * @param key 存在を確認するkey
           * @return true 引数で渡したkeyを持つ要素が存在する
           * @return false 引数で渡したkeyを持つ要素が存在しない
           */
          csmMap.prototype.isExist = function (key) {
              for (var i = 0; i < this._size; i++) {
                  if (this._keyValues[i].first == key) {
                      return true;
                  }
              }
              return false;
          };
          /**
           * keyValueのポインタを全て解放する
           */
          csmMap.prototype.clear = function () {
              this._keyValues = void 0;
              this._keyValues = null;
              this._keyValues = new Array();
              this._size = 0;
          };
          /**
           * コンテナのサイズを取得する
           *
           * @return コンテナのサイズ
           */
          csmMap.prototype.getSize = function () {
              return this._size;
          };
          /**
           * コンテナのキャパシティを確保する
           * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない。
           * @param fitToSize trueなら指定したサイズに合わせる。falseならサイズを2倍確保しておく。
           */
          csmMap.prototype.prepareCapacity = function (newSize, fitToSize) {
              if (newSize > this._keyValues.length) {
                  if (this._keyValues.length == 0) {
                      if (!fitToSize && newSize < csmMap.DefaultSize)
                          newSize = csmMap.DefaultSize;
                      this._keyValues.length = newSize;
                  }
                  else {
                      if (!fitToSize && newSize < this._keyValues.length * 2)
                          newSize = this._keyValues.length * 2;
                      this._keyValues.length = newSize;
                  }
              }
          };
          /**
           * コンテナの先頭要素を返す
           */
          csmMap.prototype.begin = function () {
              var ite = new iterator(this, 0);
              return ite;
          };
          /**
           * コンテナの終端要素を返す
           */
          csmMap.prototype.end = function () {
              var ite = new iterator(this, this._size); // 終了
              return ite;
          };
          /**
           * コンテナから要素を削除する
           *
           * @param ite 削除する要素
           */
          csmMap.prototype.erase = function (ite) {
              var index = ite._index;
              if (index < 0 || this._size <= index) {
                  return ite; // 削除範囲外
              }
              // 削除
              this._keyValues.splice(index, 1);
              --this._size;
              var ite2 = new iterator(this, index); // 終了
              return ite2;
          };
          /**
           * コンテナの値を32ビット符号付き整数型でダンプする
           */
          csmMap.prototype.dumpAsInt = function () {
              for (var i = 0; i < this._size; i++) {
                  Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__["CubismLogDebug"])("{0} ,", this._keyValues[i]);
                  Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__["CubismLogDebug"])("\n");
              }
          };
          csmMap.DefaultSize = 10; // コンテナの初期化のデフォルトサイズ
          return csmMap;
      }());
      Live2DCubismFramework.csmMap = csmMap;
      /**
       * csmMap<T>のイテレータ
       */
      var iterator = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function iterator(v, idx) {
              this._map = (v != undefined)
                  ? v
                  : new csmMap();
              this._index = (idx != undefined)
                  ? idx
                  : 0;
          }
          /**
           * =演算子のオーバーロード
           */
          iterator.prototype.set = function (ite) {
              this._index = ite._index;
              this._map = ite._map;
              return this;
          };
          /**
           * 前置き++演算子のオーバーロード
           */
          iterator.prototype.preIncrement = function () {
              ++this._index;
              return this;
          };
          /**
           * 前置き--演算子のオーバーロード
           */
          iterator.prototype.preDecrement = function () {
              --this._index;
              return this;
          };
          /**
           * 後置き++演算子のオーバーロード
           */
          iterator.prototype.increment = function () {
              var iteold = new iterator(this._map, this._index++); // 古い値を保存
              this._map = iteold._map;
              this._index = iteold._index;
              return this;
          };
          /**
           * 後置き--演算子のオーバーロード
           */
          iterator.prototype.decrement = function () {
              var iteold = new iterator(this._map, this._index); // 古い値を保存
              this._map = iteold._map;
              this._index = iteold._index;
              return this;
          };
          /**
           * *演算子のオーバーロード
           */
          iterator.prototype.ptr = function () {
              return this._map._keyValues[this._index];
          };
          /**
           * !=演算
           */
          iterator.prototype.notEqual = function (ite) {
              return (this._index != ite._index) || (this._map != ite._map);
          };
          return iterator;
      }());
      Live2DCubismFramework.iterator = iterator;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!************************************!*\
    !*** ./Framework/type/csmrectf.ts ***!
    \************************************/
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
       * 矩形形状（座標・長さはfloat値）を定義するクラス
       */
      var csmRect = /** @class */ (function () {
          /**
           * コンストラクタ
           * @param x 左端X座標
           * @param y 上端Y座標
           * @param w 幅
           * @param h 高さ
           */
          function csmRect(x, y, w, h) {
              this.x = x;
              this.y = y;
              this.width = w;
              this.height = h;
          }
          /**
           * 矩形中央のX座標を取得する
           */
          csmRect.prototype.getCenterX = function () {
              return this.x + 0.5 * this.width;
          };
          /**
           * 矩形中央のY座標を取得する
           */
          csmRect.prototype.getCenterY = function () {
              return this.y + 0.5 * this.height;
          };
          /**
           * 右側のX座標を取得する
           */
          csmRect.prototype.getRight = function () {
              return this.x + this.width;
          };
          /**
           * 下端のY座標を取得する
           */
          csmRect.prototype.getBottom = function () {
              return this.y + this.height;
          };
          /**
           * 矩形に値をセットする
           * @param r 矩形のインスタンス
           */
          csmRect.prototype.setRect = function (r) {
              this.x = r.x;
              this.y = r.y;
              this.width = r.width;
              this.height = r.height;
          };
          /**
           * 矩形中央を軸にして縦横を拡縮する
           * @param w 幅方向に拡縮する量
           * @param h 高さ方向に拡縮する量
           */
          csmRect.prototype.expand = function (w, h) {
              this.x -= w;
              this.y -= h;
              this.width += w * 2.0;
              this.height += h * 2.0;
          };
          return csmRect;
      }());
      Live2DCubismFramework.csmRect = csmRect;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!*************************************!*\
    !*** ./Framework/type/csmstring.ts ***!
    \*************************************/
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
       * 文字列クラス。
       */
      var csmString = /** @class */ (function () {
          /**
           * 引数付きコンストラクタ
           */
          function csmString(s) {
              this.s = s;
          }
          /**
           * 文字列を後方に追加する
           *
           * @param c 追加する文字列
           * @return 更新された文字列
           */
          csmString.prototype.append = function (c, length) {
              this.s += (length !== undefined)
                  ? c.substr(0, length)
                  : c;
              return this;
          };
          /**
           * 文字サイズを拡張して文字を埋める
           * @param length    拡張する文字数
           * @param v         埋める文字
           * @return 更新された文字列
           */
          csmString.prototype.expansion = function (length, v) {
              var ret = this;
              for (var i = 0; i < length; i++) {
                  ret.append(v);
              }
              return ret;
          };
          /**
           * 文字列の長さをバイト数で取得する
           */
          csmString.prototype.getBytes = function () {
              return encodeURIComponent(this.s).replace(/%../g, "x").length;
          };
          /**
           * 文字列の長さを返す
           */
          csmString.prototype.getLength = function () {
              return this.s.length;
          };
          /**
           * 文字列比較　<
           * @param s 比較する文字列
           * @return true:    比較する文字列より小さい
           * @return false:   比較する文字列より大きい
           */
          csmString.prototype.isLess = function (s) {
              return this.s < s.s;
          };
          /**
           * 文字列比較 >
           * @param s 比較する文字列
           * @return true:    比較する文字列より大きい
           * @return false:   比較する文字列より小さい
           */
          csmString.prototype.isGreat = function (s) {
              return this.s > s.s;
          };
          /**
           * 文字列比較 ==
           * @param s 比較する文字列
           * @return true:    比較する文字列と等しい
           * @return false:   比較する文字列と異なる
           */
          csmString.prototype.isEqual = function (s) {
              return this.s == s;
          };
          /**
           * 文字列が空かどうか
           * @return true: 空の文字列
           * @return false: 値が設定されている
           */
          csmString.prototype.isEmpty = function () {
              return this.s.length == 0;
          };
          return csmString;
      }());
      Live2DCubismFramework.csmString = csmString;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ }),
  
  /*!*************************************!*\
    !*** ./Framework/type/csmvector.ts ***!
    \*************************************/
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
       * ベクター型（可変配列型）
       */
      var csmVector = /** @class */ (function () {
          /**
           * 引数付きコンストラクタ
           * @param iniitalCapacity 初期化後のキャパシティ。データサイズは_capacity * sizeof(T)
           * @param zeroClear trueなら初期化時に確保した領域を0で埋める
           */
          function csmVector(initialCapacity) {
              if (initialCapacity === void 0) { initialCapacity = 0; }
              if (initialCapacity < 1) {
                  this._ptr = new Array();
                  this._capacity = 0;
                  this._size = 0;
              }
              else {
                  this._ptr = new Array(initialCapacity);
                  this._capacity = initialCapacity;
                  this._size = 0;
              }
          }
          /**
           * インデックスで指定した要素を返す
           */
          csmVector.prototype.at = function (index) {
              return this._ptr[index];
          };
          /**
           * 要素をセット
           * @param index 要素をセットするインデックス
           * @param value セットする要素
           */
          csmVector.prototype.set = function (index, value) {
              this._ptr[index] = value;
          };
          /**
           * コンテナを取得する
           */
          csmVector.prototype.get = function (offset) {
              if (offset === void 0) { offset = 0; }
              var ret = new Array();
              for (var i = offset; i < this._size; i++) {
                  ret.push(this._ptr[i]);
              }
              return ret;
          };
          /**
           * pushBack処理、コンテナに新たな要素を追加する
           * @param value PushBack処理で追加する値
           */
          csmVector.prototype.pushBack = function (value) {
              if (this._size >= this._capacity) {
                  this.prepareCapacity(this._capacity == 0 ? csmVector.s_defaultSize : this._capacity * 2);
              }
              this._ptr[this._size++] = value;
          };
          /**
           * コンテナの全要素を解放する
           */
          csmVector.prototype.clear = function () {
              this._ptr.length = 0;
              this._size = 0;
          };
          /**
           * コンテナの要素数を返す
           * @return コンテナの要素数
           */
          csmVector.prototype.getSize = function () {
              return this._size;
          };
          /**
           * コンテナの全要素に対して代入処理を行う
           * @param newSize 代入処理後のサイズ
           * @param value 要素に代入する値
           */
          csmVector.prototype.assign = function (newSize, value) {
              var curSize = this._size;
              if (curSize < newSize) {
                  this.prepareCapacity(newSize); // capacity更新
              }
              for (var i = 0; i < newSize; i++) {
                  this._ptr[i] = value;
              }
              this._size = newSize;
          };
          /**
           * サイズ変更
           */
          csmVector.prototype.resize = function (newSize, value) {
              if (value === void 0) { value = null; }
              this.updateSize(newSize, value, true);
          };
          /**
           * サイズ変更
           */
          csmVector.prototype.updateSize = function (newSize, value, callPlacementNew) {
              if (value === void 0) { value = null; }
              if (callPlacementNew === void 0) { callPlacementNew = true; }
              var curSize = this._size;
              if (curSize < newSize) {
                  this.prepareCapacity(newSize); // capacity更新
                  if (callPlacementNew) {
                      for (var i = this._size; i < newSize; i++) {
                          if (typeof value == 'function') // new
                           {
                              this._ptr[i] = JSON.parse(JSON.stringify(new value()));
                          }
                          else // プリミティブ型なので値渡し
                           {
                              this._ptr[i] = value;
                          }
                      }
                  }
                  else {
                      for (var i = this._size; i < newSize; i++) {
                          this._ptr[i] = value;
                      }
                  }
              }
              else {
                  // newSize <= this._size
                  //---
                  var sub = this._size - newSize;
                  this._ptr.splice(this._size - sub, sub); // 不要なので破棄する
              }
              this._size = newSize;
          };
          /**
           * コンテナにコンテナ要素を挿入する
           * @param position 挿入する位置
           * @param begin　挿入するコンテナの開始位置
           * @param end 挿入するコンテナの終端位置
           */
          csmVector.prototype.insert = function (position, begin, end) {
              var dstSi = position._index;
              var srcSi = begin._index;
              var srcEi = end._index;
              var addCount = srcEi - srcSi;
              this.prepareCapacity(this._size + addCount);
              // 挿入用の既存データをシフトして隙間を作る
              var addSize = this._size - dstSi;
              if (addSize > 0) {
                  for (var i = 0; i < addSize; i++) {
                      this._ptr.splice(dstSi + i, 0, null);
                  }
              }
              for (var i = srcSi; i < srcEi; i++, dstSi++) {
                  this._ptr[dstSi] = begin._vector._ptr[i];
              }
              this._size = this._size + addCount;
          };
          /**
           * コンテナからインデックスで指定した要素を削除する
           * @param index インデックス値
           * @return true 削除実行
           * @return false 削除範囲外
           */
          csmVector.prototype.remove = function (index) {
              if (index < 0 || this._size <= index) {
                  return false; // 削除範囲外
              }
              this._ptr.splice(index, 1);
              --this._size;
              return true;
          };
          /**
           * コンテナから要素を削除して他の要素をシフトする
           * @param ite 削除する要素
           */
          csmVector.prototype.erase = function (ite) {
              var index = ite._index;
              if (index < 0 || this._size <= index) {
                  return ite; // 削除範囲外
              }
              // 削除
              this._ptr.splice(index, 1);
              --this._size;
              var ite2 = new iterator(this, index); // 終了
              return ite2;
          };
          /**
           * コンテナのキャパシティを確保する
           * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない.
           */
          csmVector.prototype.prepareCapacity = function (newSize) {
              if (newSize > this._capacity) {
                  if (this._capacity == 0) {
                      this._ptr = new Array(newSize);
                      this._capacity = newSize;
                  }
                  else {
                      this._ptr.length = newSize;
                      this._capacity = newSize;
                  }
              }
          };
          /**
           * コンテナの先頭要素を返す
           */
          csmVector.prototype.begin = function () {
              var ite = (this._size == 0)
                  ? this.end()
                  : new iterator(this, 0);
              return ite;
          };
          /**
           * コンテナの終端要素を返す
           */
          csmVector.prototype.end = function () {
              var ite = new iterator(this, this._size);
              return ite;
          };
          csmVector.prototype.getOffset = function (offset) {
              var newVector = new csmVector();
              newVector._ptr = this.get(offset);
              newVector._size = this.get(offset).length;
              newVector._capacity = this.get(offset).length;
              return newVector;
          };
          csmVector.s_defaultSize = 10; // コンテナ初期化のデフォルトサイズ
          return csmVector;
      }());
      Live2DCubismFramework.csmVector = csmVector;
      var iterator = /** @class */ (function () {
          /**
           * コンストラクタ
           */
          function iterator(v, index) {
              this._vector = (v != undefined) ? v : null;
              this._index = (index != undefined) ? index : 0;
          }
          /**
           * 代入
           */
          iterator.prototype.set = function (ite) {
              this._index = ite._index;
              this._vector = ite._vector;
              return this;
          };
          /**
           * 前置き++演算
           */
          iterator.prototype.preIncrement = function () {
              ++this._index;
              return this;
          };
          /**
           * 前置き--演算
           */
          iterator.prototype.preDecrement = function () {
              --this._index;
              return this;
          };
          /**
           * 後置き++演算子
           */
          iterator.prototype.increment = function () {
              var iteold = new iterator(this._vector, this._index++);
              this._vector = iteold._vector;
              this._index = iteold._index;
              return this;
          };
          /**
           * 後置き--演算子
           */
          iterator.prototype.decrement = function () {
              var iteold = new iterator(this._vector, this._index--); // 古い値を保存
              this._vector = iteold._vector;
              this._index = iteold._index;
              return this;
          };
          /**
           * ptr
           */
          iterator.prototype.ptr = function () {
              return this._vector._ptr[this._index];
          };
          /**
           * =演算子のオーバーロード
           */
          iterator.prototype.substitution = function (ite) {
              this._index = ite._index;
              this._vector = ite._vector;
              return this;
          };
          /**
           * !=演算子のオーバーロード
           */
          iterator.prototype.notEqual = function (ite) {
              return (this._index != ite._index) || (this._vector != ite._vector);
          };
          return iterator;
      }());
      Live2DCubismFramework.iterator = iterator;
  })(Live2DCubismFramework || (Live2DCubismFramework = {}));
  
  
  /***/ })  