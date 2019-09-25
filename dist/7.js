/*!**********************************!*\
  !*** ./Framework/id/cubismid.ts ***!
  \**********************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
    /* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
    /**
     * Copyright(c) Live2D Inc. All rights reserved.
     *
     * Use of this source code is governed by the Live2D Open Software license
     * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
     */
    
    var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmString;
    var Live2DCubismFramework;
    (function (Live2DCubismFramework) {
        /**
         * パラメータ名・パーツ名・Drawable名を保持
         *
         * パラメータ名・パーツ名・Drawable名を保持するクラス。
         */
        var CubismId = /** @class */ (function () {
            /**
             * コンストラクタ
             */
            function CubismId(id) {
                if (typeof (id) === 'string') {
                    this._id = new csmString(id);
                    return;
                }
                this._id = id;
            }
            /**
             * ID名を取得する
             */
            CubismId.prototype.getString = function () {
                return this._id;
            };
            /**
             * idを比較
             * @param c 比較するid
             * @return 同じならばtrue,異なっていればfalseを返す
             */
            CubismId.prototype.isEqual = function (c) {
                if (typeof (c) === 'string') {
                    return this._id.isEqual(c);
                }
                else if (c instanceof csmString) {
                    return this._id.isEqual(c.s);
                }
                else if (c instanceof CubismId) {
                    return this._id.isEqual(c._id.s);
                }
                return false;
            };
            /**
             * idを比較
             * @param c 比較するid
             * @return 同じならばtrue,異なっていればfalseを返す
             */
            CubismId.prototype.isNotEqual = function (c) {
                if (typeof (c) == 'string') {
                    return !this._id.isEqual(c);
                }
                else if (c instanceof csmString) {
                    return !this._id.isEqual(c.s);
                }
                else if (c instanceof CubismId) {
                    return !this._id.isEqual(c._id.s);
                }
                return false;
            };
            return CubismId;
        }());
        Live2DCubismFramework.CubismId = CubismId;
    })(Live2DCubismFramework || (Live2DCubismFramework = {}));
    
    
    /***/ }),
    
    /*!*****************************************!*\
      !*** ./Framework/id/cubismidmanager.ts ***!
      \*****************************************/
    /*! exports provided: Live2DCubismFramework */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
    /* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
    /* harmony import */ var _cubismid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cubismid */ "./Framework/id/cubismid.ts");
    /**
     * Copyright(c) Live2D Inc. All rights reserved.
     *
     * Use of this source code is governed by the Live2D Open Software license
     * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
     */
    
    
    var CubismId = _cubismid__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismId;
    var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmVector;
    var Live2DCubismFramework;
    (function (Live2DCubismFramework) {
        /**
         * ID名の管理
         *
         * ID名を管理する。
         */
        var CubismIdManager = /** @class */ (function () {
            /**
             * コンストラクタ
             */
            function CubismIdManager() {
                this._ids = new csmVector();
            }
            /**
             * デストラクタ相当の処理
             */
            CubismIdManager.prototype.release = function () {
                for (var i = 0; i < this._ids.getSize(); ++i) {
                    this._ids.set(i, void 0);
                }
                this._ids = null;
            };
            /**
             * ID名をリストから登録
             *
             * @param ids ID名リスト
             * @param count IDの個数
             */
            CubismIdManager.prototype.registerIds = function (ids) {
                for (var i = 0; i < ids.length; i++) {
                    this.registerId(ids[i]);
                }
            };
            /**
             * ID名を登録
             *
             * @param id ID名
             */
            CubismIdManager.prototype.registerId = function (id) {
                var result = null;
                if ('string' == typeof (id)) {
                    if ((result = this.findId(id)) != null) {
                        return result;
                    }
                    result = new CubismId(id);
                    this._ids.pushBack(result);
                }
                else {
                    return this.registerId(id.s);
                }
                return result;
            };
            /**
             * ID名からIDを取得する
             *
             * @param id ID名
             */
            CubismIdManager.prototype.getId = function (id) {
                return this.registerId(id);
            };
            /**
             * ID名からIDの確認
             *
             * @return true 存在する
             * @return false 存在しない
             */
            CubismIdManager.prototype.isExist = function (id) {
                if ('string' == typeof (id)) {
                    return (this.findId(id) != null);
                }
                return this.isExist(id.s);
            };
            /**
             * ID名からIDを検索する。
             *
             * @param id ID名
             * @return 登録されているID。なければNULL。
             */
            CubismIdManager.prototype.findId = function (id) {
                for (var i = 0; i < this._ids.getSize(); ++i) {
                    if (this._ids.at(i).getString().isEqual(id)) {
                        return this._ids.at(i);
                    }
                }
                return null;
            };
            return CubismIdManager;
        }());
        Live2DCubismFramework.CubismIdManager = CubismIdManager;
    })(Live2DCubismFramework || (Live2DCubismFramework = {}));
    
    
    /***/ })    