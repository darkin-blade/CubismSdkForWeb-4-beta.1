/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Proprietary Software license
 * that can be found at https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html.
 */
var Live2DCubismCore;
(function (Live2DCubismCore) {
    /** C calls. */
    var _csm = /** @class */ (function () {
        function _csm() {}
        _csm.getVersion = function () {
            return _em.ccall("csmGetVersion", "number", [], []);
        };
        _csm.getLatestMocVersion = function () {
            return _em.ccall("csmGetLatestMocVersion", "number", [], []);
        };
        _csm.getMocVersion = function (moc) {
            return _em.ccall("csmGetMocVersion", "number", ["number"], [moc]);
        };
        _csm.getSizeofModel = function (moc) {
            return _em.ccall("csmGetSizeofModel", "number", ["number"], [moc]);
        };
        _csm.reviveMocInPlace = function (memory, mocSize) {
            return _em.ccall("csmReviveMocInPlace", "number", ["number", "number"], [memory, mocSize]);
        };
        _csm.initializeModelInPlace = function (moc, memory, modelSize) {
            return _em.ccall("csmInitializeModelInPlace", "number", ["number", "number", "number"], [moc, memory, modelSize]);
        };
        _csm.getParameterCount = function (model) {
            return _em.ccall("csmGetParameterCount", "number", ["number"], [model]);
        };
        _csm.getParameterIds = function (model) {
            return _em.ccall("csmGetParameterIds", "number", ["number"], [model]);
        };
        _csm.getParameterMinimumValues = function (model) {
            return _em.ccall("csmGetParameterMinimumValues", "number", ["number"], [model]);
        };
        _csm.getParameterMaximumValues = function (model) {
            return _em.ccall("csmGetParameterMaximumValues", "number", ["number"], [model]);
        };
        _csm.getParameterDefaultValues = function (model) {
            return _em.ccall("csmGetParameterDefaultValues", "number", ["number"], [model]);
        };
        _csm.getParameterValues = function (model) {
            return _em.ccall("csmGetParameterValues", "number", ["number"], [model]);
        };
        _csm.getPartCount = function (model) {
            return _em.ccall("csmGetPartCount", "number", ["number"], [model]);
        };
        _csm.getPartIds = function (model) {
            return _em.ccall("csmGetPartIds", "number", ["number"], [model]);
        };
        _csm.getPartOpacities = function (model) {
            return _em.ccall("csmGetPartOpacities", "number", ["number"], [model]);
        };
        _csm.getPartParentPartIndices = function (model) {
            return _em.ccall("csmGetPartParentPartIndices", "number", ["number"], [model]);
        };
        _csm.getDrawableCount = function (model) {
            return _em.ccall("csmGetDrawableCount", "number", ["number"], [model]);
        };
        _csm.getDrawableIds = function (model) {
            return _em.ccall("csmGetDrawableIds", "number", ["number"], [model]);
        };
        _csm.getDrawableConstantFlags = function (model) {
            return _em.ccall("csmGetDrawableConstantFlags", "number", ["number"], [model]);
        };
        _csm.getDrawableDynamicFlags = function (model) {
            return _em.ccall("csmGetDrawableDynamicFlags", "number", ["number"], [model]);
        };
        _csm.getDrawableTextureIndices = function (model) {
            return _em.ccall("csmGetDrawableTextureIndices", "number", ["number"], [model]);
        };
        _csm.getDrawableDrawOrders = function (model) {
            return _em.ccall("csmGetDrawableDrawOrders", "number", ["number"], [model]);
        };
        _csm.getDrawableRenderOrders = function (model) {
            return _em.ccall("csmGetDrawableRenderOrders", "number", ["number"], [model]);
        };
        _csm.getDrawableOpacities = function (model) {
            return _em.ccall("csmGetDrawableOpacities", "number", ["number"], [model]);
        };
        _csm.getDrawableMaskCounts = function (model) {
            return _em.ccall("csmGetDrawableMaskCounts", "number", ["number"], [model]);
        };
        _csm.getDrawableMasks = function (model) {
            return _em.ccall("csmGetDrawableMasks", "number", ["number"], [model]);
        };
        _csm.getDrawableVertexCounts = function (model) {
            return _em.ccall("csmGetDrawableVertexCounts", "number", ["number"], [model]);
        };
        _csm.getDrawableVertexPositions = function (model) {
            return _em.ccall("csmGetDrawableVertexPositions", "number", ["number"], [model]);
        };
        _csm.getDrawableVertexUvs = function (model) {
            return _em.ccall("csmGetDrawableVertexUvs", "number", ["number"], [model]);
        };
        _csm.getDrawableIndexCounts = function (model) {
            return _em.ccall("csmGetDrawableIndexCounts", "number", ["number"], [model]);
        };
        _csm.getDrawableIndices = function (model) {
            return _em.ccall("csmGetDrawableIndices", "number", ["number"], [model]);
        };
        _csm.mallocMoc = function (mocSize) {
            return _em.ccall("csmMallocMoc", "number", ["number"], [mocSize]);
        };
        _csm.mallocModelAndInitialize = function (moc) {
            return _em.ccall("csmMallocModelAndInitialize", "number", ["number"], [moc]);
        };
        _csm.malloc = function (size) {
            return _em.ccall("csmMalloc", "number", ["number"], [size]);
        };
        _csm.setLogFunction = function (handler) {
            _em.ccall("csmSetLogFunction", null, ["number"], [handler]);
        };
        _csm.updateModel = function (model) {
            _em.ccall("csmUpdateModel", null, ["number"], [model]);
        };
        _csm.readCanvasInfo = function (model, outSizeInPixels, outOriginInPixels, outPixelsPerUnit) {
            _em.ccall("csmReadCanvasInfo", null, ["number", "number", "number", "number"], [model, outSizeInPixels, outOriginInPixels, outPixelsPerUnit]);
        };
        _csm.resetDrawableDynamicFlags = function (model) {
            _em.ccall("csmResetDrawableDynamicFlags", null, ["number"], [model]);
        };
        _csm.free = function (memory) {
            _em.ccall("csmFree", null, ["number"], [memory]);
        };
        return _csm;
    }());;
    /** Cubism version. */
    var Version = /** @class */ (function () {
        function Version() {}
        /**
         * Queries Core version.
         *
         * @return Core version.
         */
        Version.csmGetVersion = function () {
            return _csm.getVersion();
        };
        /**
         * Gets Moc file supported latest version.
         *
         * @return Moc file latest format version.
         */
        Version.csmGetLatestMocVersion = function () {
            return _csm.getLatestMocVersion();
        };
        /**
         * Gets Moc file format version.
         *
         * @param moc Moc
         *
         * @return csmMocVersion
         */
        Version.csmGetMocVersion = function (moc) {
            return _csm.getMocVersion(moc._ptr);
        };
        return Version;
    }());
    Live2DCubismCore.Version = Version;
    /** Cubism logging. */
    var Logging = /** @class */ (function () {
        function Logging() {}
        /**
         * Sets log handler.
         *
         * @param handler  Handler to use.
         */
        Logging.csmSetLogFunction = function (handler) {
            // Cache log handler.
            Logging.logFunction = handler;
            // Wrap function to pointer.
            var pointer = _em.addFunction(Logging.wrapLogFunction, 'vi');
            // Sets log handler.
            _csm.setLogFunction(pointer);
        };
        /**
         * Queries log handler.
         *
         * @return Log handler.
         */
        Logging.csmGetLogFunction = function () {
            return Logging.logFunction;
        };
        /**
         * Wrap log function.
         *
         * @param messagePtr number
         *
         * @return string
         */
        Logging.wrapLogFunction = function (messagePtr) {
            // Pointer to string.
            var messageStr = _em.UTF8ToString(messagePtr);
            // Run log function.
            Logging.logFunction(messageStr);
        };
        return Logging;
    }());
    Live2DCubismCore.Logging = Logging;
    /** Cubism moc. */
    var Moc = /** @class */ (function () {
        /**
         * Initializes instance.
         *
         * @param mocBytes Moc bytes.
         */
        function Moc(mocBytes) {
            // Allocate memory.
            var memory = _csm.mallocMoc(mocBytes.byteLength);
            if (!memory) {
                return;
            }
            // Initialize memory.
            var destination = new Uint8Array(_em.HEAPU8.buffer, memory, mocBytes.byteLength);
            destination.set(new Uint8Array(mocBytes));
            // Revive moc.
            this._ptr = _csm.reviveMocInPlace(memory, mocBytes.byteLength);
            if (!this._ptr) {
                _csm.free(memory);
            }
        }
        /** Creates [[Moc]] from [[ArrayBuffer]].
         *
         * @param buffer Array buffer
         *
         * @return [[Moc]] on success; [[null]] otherwise.
         */
        Moc.fromArrayBuffer = function (buffer) {
            if (!buffer) {
                return null;
            }
            var moc = new Moc(buffer);
            return (moc._ptr) ?
                moc :
                null;
        };
        /** Releases instance. */
        Moc.prototype._release = function () {
            _csm.free(this._ptr);
            this._ptr = 0;
        };
        return Moc;
    }());
    Live2DCubismCore.Moc = Moc;
    /** Cubism model. */
    var Model = /** @class */ (function () {
        /**
         * Initializes instance.
         *
         * @param moc Moc
         */
        function Model(moc) {
            this._ptr = _csm.mallocModelAndInitialize(moc._ptr);
            if (!this._ptr) {
                return;
            }
            this.parameters = new Parameters(this._ptr);
            this.parts = new Parts(this._ptr);
            this.drawables = new Drawables(this._ptr);
            this.canvasinfo = new CanvasInfo(this._ptr);
        }
        /**
         * Creates [[Model]] from [[Moc]].
         *
         * @param moc Moc
         *
         * @return [[Model]] on success; [[null]] otherwise.
         */
        Model.fromMoc = function (moc) {
            var model = new Model(moc);
            return (model._ptr) ?
                model :
                null;
        };
        /** Updates instance. */
        Model.prototype.update = function () {
            _csm.updateModel(this._ptr);
        };
        /** Releases instance. */
        Model.prototype.release = function () {
            _csm.free(this._ptr);
            this._ptr = 0;
        };
        return Model;
    }());
    Live2DCubismCore.Model = Model;
    /** Canvas information interface. */
    var CanvasInfo = /** @class */ (function () {
        /**
         * Initializes instance.
         *
         * @param modelPtr Native model pointer.
         */
        function CanvasInfo(modelPtr) {
            if (!modelPtr) {
                return;
            }
            // Preserve the pointer ant heap for get data throw args.
            var _canvasSize_data = new Float32Array(2);
            var _canvasSize_nDataBytes = _canvasSize_data.length * _canvasSize_data.BYTES_PER_ELEMENT;
            var _canvasSize_dataPtr = _csm.malloc(_canvasSize_nDataBytes);
            var _canvasSize_dataHeap = new Uint8Array(_em.HEAPU8.buffer, _canvasSize_dataPtr, _canvasSize_nDataBytes);
            _canvasSize_dataHeap.set(new Uint8Array(_canvasSize_data.buffer));
            var _canvasOrigin_data = new Float32Array(2);
            var _canvasOrigin_nDataBytes = _canvasOrigin_data.length * _canvasOrigin_data.BYTES_PER_ELEMENT;
            var _canvasOrigin_dataPtr = _csm.malloc(_canvasOrigin_nDataBytes);
            var _canvasOrigin_dataHeap = new Uint8Array(_em.HEAPU8.buffer, _canvasOrigin_dataPtr, _canvasOrigin_nDataBytes);
            _canvasOrigin_dataHeap.set(new Uint8Array(_canvasOrigin_data.buffer));
            var _canvasPPU_data = new Float32Array(1);
            var _canvasPPU_nDataBytes = _canvasPPU_data.length * _canvasPPU_data.BYTES_PER_ELEMENT;
            var _canvasPPU_dataPtr = _csm.malloc(_canvasPPU_nDataBytes);
            var _canvasPPU_dataHeap = new Uint8Array(_em.HEAPU8.buffer, _canvasPPU_dataPtr, _canvasPPU_nDataBytes);
            _canvasPPU_dataHeap.set(new Uint8Array(_canvasPPU_data.buffer));
            // Call function and get result
            _csm.readCanvasInfo(modelPtr, _canvasSize_dataHeap.byteOffset, _canvasOrigin_dataHeap.byteOffset, _canvasPPU_dataHeap.byteOffset);
            _canvasSize_data = new Float32Array(_canvasSize_dataHeap.buffer, _canvasSize_dataHeap.byteOffset, _canvasSize_dataHeap.length);
            _canvasOrigin_data = new Float32Array(_canvasOrigin_dataHeap.buffer, _canvasOrigin_dataHeap.byteOffset, _canvasOrigin_dataHeap.length);
            _canvasPPU_data = new Float32Array(_canvasPPU_dataHeap.buffer, _canvasPPU_dataHeap.byteOffset, _canvasPPU_dataHeap.length);
            this.CanvasWidth = _canvasSize_data[0];
            this.CanvasHeight = _canvasSize_data[1];
            this.CanvasOriginX = _canvasOrigin_data[0];
            this.CanvasOriginY = _canvasOrigin_data[1];
            this.PixelsPerUnit = _canvasPPU_data[0];
            // Free heap memory
            _csm.free(_canvasSize_dataHeap.byteOffset);
            _csm.free(_canvasOrigin_dataHeap.byteOffset);
            _csm.free(_canvasPPU_dataHeap.byteOffset);
        }
        return CanvasInfo;
    }());
    Live2DCubismCore.CanvasInfo = CanvasInfo;
    /** Cubism model parameters */
    var Parameters = /** @class */ (function () {
        /**
         * Initializes instance.
         *
         * @param modelPtr Native model.
         */
        function Parameters(modelPtr) {
            var length = 0;
            this.count = _csm.getParameterCount(modelPtr);
            length = _csm.getParameterCount(modelPtr);
            this.ids = new Array(length);
            var _ids = new Uint32Array(_em.HEAPU32.buffer, _csm.getParameterIds(modelPtr), length);
            for (var i = 0; i < _ids.length; i++) {
                this.ids[i] = _em.UTF8ToString(_ids[i]);
            }
            length = _csm.getParameterCount(modelPtr);
            this.minimumValues = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterMinimumValues(modelPtr), length);
            length = _csm.getParameterCount(modelPtr);
            this.maximumValues = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterMaximumValues(modelPtr), length);
            length = _csm.getParameterCount(modelPtr);
            this.defaultValues = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterDefaultValues(modelPtr), length);
            length = _csm.getParameterCount(modelPtr);
            this.values = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterValues(modelPtr), length);
        }
        return Parameters;
    }());
    Live2DCubismCore.Parameters = Parameters;
    /** Cubism model parts */
    var Parts = /** @class */ (function () {
        /**
         * Initializes instance.
         *
         * @param modelPtr Native model.
         */
        function Parts(modelPtr) {
            var length = 0;
            this.count = _csm.getPartCount(modelPtr);
            length = _csm.getPartCount(modelPtr);
            this.ids = new Array(length);
            var _ids = new Uint32Array(_em.HEAPU32.buffer, _csm.getPartIds(modelPtr), length);
            for (var i = 0; i < _ids.length; i++) {
                this.ids[i] = _em.UTF8ToString(_ids[i]);
            }
            length = _csm.getPartCount(modelPtr);
            this.opacities = new Float32Array(_em.HEAPF32.buffer, _csm.getPartOpacities(modelPtr), length);
            length = _csm.getPartCount(modelPtr);
            this.parentIndices = new Int32Array(_em.HEAP32.buffer, _csm.getPartParentPartIndices(modelPtr), length);
        }
        return Parts;
    }());
    Live2DCubismCore.Parts = Parts;
    /** Cubism model drawables */
    var Drawables = /** @class */ (function () {
        /**
         * Initializes instance.
         *
         * @param modelPtr Native model.
         */
        function Drawables(modelPtr) {
            this._modelPtr = modelPtr;
            var length = 0;
            var length2 = null;
            this.count = _csm.getDrawableCount(modelPtr);
            length = _csm.getDrawableCount(modelPtr);
            this.ids = new Array(length);
            var _ids = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableIds(modelPtr), length);
            for (var i = 0; i < _ids.length; i++) {
                this.ids[i] = _em.UTF8ToString(_ids[i]);
            }
            length = _csm.getDrawableCount(modelPtr);
            this.constantFlags = new Uint8Array(_em.HEAPU8.buffer, _csm.getDrawableConstantFlags(modelPtr), length);
            length = _csm.getDrawableCount(modelPtr);
            this.dynamicFlags = new Uint8Array(_em.HEAPU8.buffer, _csm.getDrawableDynamicFlags(modelPtr), length);
            length = _csm.getDrawableCount(modelPtr);
            this.textureIndices = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableTextureIndices(modelPtr), length);
            length = _csm.getDrawableCount(modelPtr);
            this.drawOrders = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableDrawOrders(modelPtr), length);
            length = _csm.getDrawableCount(modelPtr);
            this.renderOrders = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableRenderOrders(modelPtr), length);
            length = _csm.getDrawableCount(modelPtr);
            this.opacities = new Float32Array(_em.HEAPF32.buffer, _csm.getDrawableOpacities(modelPtr), length);
            length = _csm.getDrawableCount(modelPtr);
            this.maskCounts = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableMaskCounts(modelPtr), length);
            length = _csm.getDrawableCount(modelPtr);
            this.vertexCounts = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableVertexCounts(modelPtr), length);
            length = _csm.getDrawableCount(modelPtr);
            this.indexCounts = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableIndexCounts(modelPtr), length);
            length = _csm.getDrawableCount(modelPtr);
            length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableMaskCounts(modelPtr), length);
            this.masks = new Array(length);
            var _masks = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableMasks(modelPtr), length);
            for (var i = 0; i < _masks.length; i++) {
                this.masks[i] = new Int32Array(_em.HEAP32.buffer, _masks[i], length2[i]);
            }
            length = _csm.getDrawableCount(modelPtr);
            length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableVertexCounts(modelPtr), length);
            this.vertexPositions = new Array(length);
            var _vertexPositions = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableVertexPositions(modelPtr), length);
            for (var i = 0; i < _vertexPositions.length; i++) {
                this.vertexPositions[i] = new Float32Array(_em.HEAPF32.buffer, _vertexPositions[i], length2[i] * 2);
            }
            length = _csm.getDrawableCount(modelPtr);
            length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableVertexCounts(modelPtr), length);
            this.vertexUvs = new Array(length);
            var _vertexUvs = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableVertexUvs(modelPtr), length);
            for (var i = 0; i < _vertexUvs.length; i++) {
                this.vertexUvs[i] = new Float32Array(_em.HEAPF32.buffer, _vertexUvs[i], length2[i] * 2);
            }
            length = _csm.getDrawableCount(modelPtr);
            length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableIndexCounts(modelPtr), length);
            this.indices = new Array(length);
            var _indices = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableIndices(modelPtr), length);
            for (var i = 0; i < _indices.length; i++) {
                this.indices[i] = new Uint16Array(_em.HEAPU16.buffer, _indices[i], length2[i]);
            }
        }
        /** Resets all dynamic drawable flags.. */
        Drawables.prototype.resetDynamicFlags = function () {
            _csm.resetDrawableDynamicFlags(this._modelPtr);
        };
        return Drawables;
    }());
    Live2DCubismCore.Drawables = Drawables;
    /** Utility functions. */
    var Utils = /** @class */ (function () {
        function Utils() {}
        /**
         * Checks whether flag is set in bitfield.
         *
         * @param bitfield Bitfield to query against.
         *
         * @return [[true]] if bit set; [[false]] otherwise
         */
        Utils.hasBlendAdditiveBit = function (bitfield) {
            return (bitfield & (1 << 0)) == (1 << 0);
        };
        /**
         * Checks whether flag is set in bitfield.
         *
         * @param bitfield Bitfield to query against.
         *
         * @return [[true]] if bit set; [[false]] otherwise
         */
        Utils.hasBlendMultiplicativeBit = function (bitfield) {
            return (bitfield & (1 << 1)) == (1 << 1);
        };
        /**
         * Checks whether flag is set in bitfield.
         *
         * @param bitfield Bitfield to query against.
         *
         * @return [[true]] if bit set; [[false]] otherwise
         */
        Utils.hasIsDoubleSidedBit = function (bitfield) {
            return (bitfield & (1 << 2)) == (1 << 2);
        };
        /**
         * Checks whether flag is set in bitfield.
         *
         * @param bitfield Bitfield to query against.
         *
         * @return [[true]] if bit set; [[false]] otherwise
         */
        Utils.hasIsInvertedMaskBit = function (bitfield) {
            return (bitfield & (1 << 3)) == (1 << 3);
        };
        /**
         * Checks whether flag is set in bitfield.
         *
         * @param bitfield Bitfield to query against.
         *
         * @return [[true]] if bit set; [[false]] otherwise
         */
        Utils.hasIsVisibleBit = function (bitfield) {
            return (bitfield & (1 << 0)) == (1 << 0);
        };
        /**
         * Checks whether flag is set in bitfield.
         *
         * @param bitfield Bitfield to query against.
         *
         * @return [[true]] if bit set; [[false]] otherwise
         */
        Utils.hasVisibilityDidChangeBit = function (bitfield) {
            return (bitfield & (1 << 1)) == (1 << 1);
        };
        /**
         * Checks whether flag is set in bitfield.
         *
         * @param bitfield Bitfield to query against.
         *
         * @return [[true]] if bit set; [[false]] otherwise
         */
        Utils.hasOpacityDidChangeBit = function (bitfield) {
            return (bitfield & (1 << 2)) == (1 << 2);
        };
        /**
         * Checks whether flag is set in bitfield.
         *
         * @param bitfield Bitfield to query against.
         *
         * @return [[true]] if bit set; [[false]] otherwise
         */
        Utils.hasDrawOrderDidChangeBit = function (bitfield) {
            return (bitfield & (1 << 3)) == (1 << 3);
        };
        /**
         * Checks whether flag is set in bitfield.
         *
         * @param bitfield Bitfield to query against.
         *
         * @return [[true]] if bit set; [[false]] otherwise
         */
        Utils.hasRenderOrderDidChangeBit = function (bitfield) {
            return (bitfield & (1 << 4)) == (1 << 4);
        };
        /**
         * Checks whether flag is set in bitfield.
         *
         * @param bitfield Bitfield to query against.
         *
         * @return [[true]] if bit set; [[false]] otherwise
         */
        Utils.hasVertexPositionsDidChangeBit = function (bitfield) {
            return (bitfield & (1 << 5)) == (1 << 5);
        };
        return Utils;
    }());
    Live2DCubismCore.Utils = Utils;
    /** Emscripten Cubism Core module. */
    var _em_module = function () {
        var _scriptDir = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0;
        return function (_em_module) {
            var key, Module = void 0 !== (_em_module = _em_module || {}) ? _em_module : {},
                moduleOverrides = {};
            for (key in Module) Module.hasOwnProperty(key) && (moduleOverrides[key] = Module[key]);
            var ENVIRONMENT_IS_WEB, ENVIRONMENT_IS_WORKER, ENVIRONMENT_HAS_NODE, ENVIRONMENT_IS_SHELL, ENVIRONMENT_IS_NODE = !1;
            ENVIRONMENT_IS_WEB = "object" == typeof window, ENVIRONMENT_IS_WORKER = "function" == typeof importScripts, ENVIRONMENT_HAS_NODE = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, ENVIRONMENT_IS_NODE = ENVIRONMENT_HAS_NODE && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER, ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
            var read_, readAsync, readBinary, nodeFS, nodePath, scriptDirectory = "";
            ENVIRONMENT_IS_NODE ? (scriptDirectory = __dirname + "/", read_ = function (filename, binary) {
                var ret;
                return (ret = tryParseAsDataURI(filename)) || (nodeFS = nodeFS || require("fs"), filename = (nodePath = nodePath || require("path")).normalize(filename), ret = nodeFS.readFileSync(filename)), binary ? ret : ret.toString()
            }, readBinary = function (filename) {
                var ret = read_(filename, !0);
                return ret.buffer || (ret = new Uint8Array(ret)), assert(ret.buffer), ret
            }, 1 < process.argv.length && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function (ex) {
                if (!(ex instanceof
                        function (status) {
                            this.name = "ExitStatus", this.message = "Program terminated with exit(" + status + ")", this.status = status
                        })) throw ex
            }), process.on("unhandledRejection", abort), Module.inspect = function () {
                return "[Emscripten Module object]"
            }) : ENVIRONMENT_IS_SHELL ? ("undefined" != typeof read && (read_ = function (f) {
                var data = tryParseAsDataURI(f);
                return data ? intArrayToString(data) : read(f)
            }), readBinary = function (f) {
                var data;
                return (data = tryParseAsDataURI(f)) ? data : "function" == typeof readbuffer ? new Uint8Array(readbuffer(f)) : (assert("object" == typeof (data = read(f, "binary"))), data)
            }, "undefined" != typeof scriptArgs && scriptArgs, "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && (ENVIRONMENT_IS_WORKER ? scriptDirectory = self.location.href : document.currentScript && (scriptDirectory = document.currentScript.src), _scriptDir && (scriptDirectory = _scriptDir), scriptDirectory = 0 !== scriptDirectory.indexOf("blob:") ? scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1) : "", read_ = function (url) {
                try {
                    var xhr = new XMLHttpRequest;
                    return xhr.open("GET", url, !1), xhr.send(null), xhr.responseText
                } catch (err) {
                    var data = tryParseAsDataURI(url);
                    if (data) return intArrayToString(data);
                    throw err
                }
            }, ENVIRONMENT_IS_WORKER && (readBinary = function (url) {
                try {
                    var xhr = new XMLHttpRequest;
                    return xhr.open("GET", url, !1), xhr.responseType = "arraybuffer", xhr.send(null), new Uint8Array(xhr.response)
                } catch (err) {
                    var data = tryParseAsDataURI(url);
                    if (data) return data;
                    throw err
                }
            }), readAsync = function (url, onload, onerror) {
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, !0), xhr.responseType = "arraybuffer", xhr.onload = function () {
                    if (200 == xhr.status || 0 == xhr.status && xhr.response) onload(xhr.response);
                    else {
                        var data = tryParseAsDataURI(url);
                        data ? onload(data.buffer) : onerror()
                    }
                }, xhr.onerror = onerror, xhr.send(null)
            });
            var out = Module.print || console.log.bind(console),
                err = Module.printErr || console.warn.bind(console);
            for (key in moduleOverrides) moduleOverrides.hasOwnProperty(key) && (Module[key] = moduleOverrides[key]);
            moduleOverrides = null, Module.arguments && Module.arguments, Module.thisProgram && Module.thisProgram, Module.quit && Module.quit;
            var functionPointers = new Array(1);
            var tempRet0 = 0;
            Module.wasmBinary && Module.wasmBinary;
            var ABORT = !1;

            function assert(condition, text) {
                condition || abort("Assertion failed: " + text)
            }
            var UTF8Decoder = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

            function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
                for (var endIdx = idx + maxBytesToRead, endPtr = idx; u8Array[endPtr] && !(endIdx <= endPtr);) ++endPtr;
                if (16 < endPtr - idx && u8Array.subarray && UTF8Decoder) return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
                for (var str = ""; idx < endPtr;) {
                    var u0 = u8Array[idx++];
                    if (128 & u0) {
                        var u1 = 63 & u8Array[idx++];
                        if (192 != (224 & u0)) {
                            var u2 = 63 & u8Array[idx++];
                            if ((u0 = 224 == (240 & u0) ? (15 & u0) << 12 | u1 << 6 | u2 : (7 & u0) << 18 | u1 << 12 | u2 << 6 | 63 & u8Array[idx++]) < 65536) str += String.fromCharCode(u0);
                            else {
                                var ch = u0 - 65536;
                                str += String.fromCharCode(55296 | ch >> 10, 56320 | 1023 & ch)
                            }
                        } else str += String.fromCharCode((31 & u0) << 6 | u1)
                    } else str += String.fromCharCode(u0)
                }
                return str
            }

            function UTF8ToString(ptr, maxBytesToRead) {
                return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : ""
            }
            var buffer, HEAP8, HEAPU8, HEAP32;
            "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");

            function alignUp(x, multiple) {
                return 0 < x % multiple && (x += multiple - x % multiple), x
            }

            function updateGlobalBufferViews() {
                Module.HEAP8 = HEAP8 = new Int8Array(buffer), Module.HEAP16 = new Int16Array(buffer), Module.HEAP32 = HEAP32 = new Int32Array(buffer), Module.HEAPU8 = HEAPU8 = new Uint8Array(buffer), Module.HEAPU16 = new Uint16Array(buffer), Module.HEAPU32 = new Uint32Array(buffer), Module.HEAPF32 = new Float32Array(buffer), Module.HEAPF64 = new Float64Array(buffer)
            }
            var DYNAMICTOP_PTR = 4400,
                INITIAL_TOTAL_MEMORY = Module.TOTAL_MEMORY || 16777216;

            function callRuntimeCallbacks(callbacks) {
                for (; 0 < callbacks.length;) {
                    var callback = callbacks.shift();
                    if ("function" != typeof callback) {
                        var func = callback.func;
                        "number" == typeof func ? void 0 === callback.arg ? Module.dynCall_v(func) : Module.dynCall_vi(func, callback.arg) : func(void 0 === callback.arg ? null : callback.arg)
                    } else callback()
                }
            }
            INITIAL_TOTAL_MEMORY = (buffer = Module.buffer ? Module.buffer : new ArrayBuffer(INITIAL_TOTAL_MEMORY)).byteLength, updateGlobalBufferViews(), HEAP32[DYNAMICTOP_PTR >> 2] = 5247312;
            var __ATPRERUN__ = [],
                __ATINIT__ = [],
                __ATMAIN__ = [],
                __ATPOSTRUN__ = [];
            Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function (a, b) {
                var al = 65535 & a,
                    bl = 65535 & b;
                return al * bl + ((a >>> 16) * bl + al * (b >>> 16) << 16) | 0
            }), Math.clz32 || (Math.clz32 = function (x) {
                var n = 32,
                    y = x >> 16;
                return y && (n -= 16, x = y), (y = x >> 8) && (n -= 8, x = y), (y = x >> 4) && (n -= 4, x = y), (y = x >> 2) && (n -= 2, x = y), (y = x >> 1) ? n - 2 : n - x
            }), Math.trunc || (Math.trunc = function (x) {
                return x < 0 ? Math.ceil(x) : Math.floor(x)
            });
            Math.abs, Math.ceil, Math.floor, Math.min;
            var runDependencies = 0,
                runDependencyWatcher = null,
                dependenciesFulfilled = null;
            Module.preloadedImages = {}, Module.preloadedAudios = {};
            var memoryInitializer = null,
                dataURIPrefix = "data:application/octet-stream;base64,";

            function isDataURI(filename) {
                return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : 0 === filename.indexOf(dataURIPrefix)
            }

            function demangle(func) {
                return func
            }

            function demangleAll(text) {
                return text.replace(/\b__Z[\w\d_]+/g, function (x) {
                    var y = demangle(x);
                    return x === y ? x : y + " [" + x + "]"
                })
            }

            function jsStackTrace() {
                var err = new Error;
                if (!err.stack) {
                    try {
                        throw new Error(0)
                    } catch (e) {
                        err = e
                    }
                    if (!err.stack) return "(no stack trace available)"
                }
                return err.stack.toString()
            }
            var SYSCALLS = {
                buffers: [null, [],
                    []
                ],
                printChar: function (stream, curr) {
                    var buffer = SYSCALLS.buffers[stream];
                    0 === curr || 10 === curr ? ((1 === stream ? out : err)(UTF8ArrayToString(buffer, 0)), buffer.length = 0) : buffer.push(curr)
                },
                varargs: 0,
                get: function (varargs) {
                    return SYSCALLS.varargs += 4, HEAP32[SYSCALLS.varargs - 4 >> 2]
                },
                getStr: function () {
                    return UTF8ToString(SYSCALLS.get())
                },
                get64: function () {
                    var low = SYSCALLS.get();
                    SYSCALLS.get();
                    return low
                },
                getZero: function () {
                    SYSCALLS.get()
                }
            };

            function _emscripten_get_heap_size() {
                return HEAP8.length
            }

            function emscripten_realloc_buffer(size) {
                try {
                    var newBuffer = new ArrayBuffer(size);
                    if (newBuffer.byteLength != size) return !1;
                    new Int8Array(newBuffer).set(HEAP8)
                } catch (e) {
                    return !1
                }
                return buffer = newBuffer, Module._emscripten_replace_memory(newBuffer), !0
            }
            var ASSERTIONS = !(memoryInitializer = "data:application/octet-stream;base64,AAAAAAAAAAARAAoAERERAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABEADwoREREDCgcAARMJCwsAAAkGCwAACwAGEQAAABEREQAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAARAAoKERERAAoAAAIACQsAAAAJAAsAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAA0AAAAEDQAAAAAJDgAAAAAADgAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAPAAAAAA8AAAAACRAAAAAAABAAABAAABIAAAASEhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAABISEgAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAoAAAAACgAAAAAJCwAAAAAACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAADAxMjM0NTY3ODlBQkNERUYFAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAgAAACgKAAAABAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAK/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABcDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFtDU01dIFtFXUluaXRpYWxpemVEZWZvcm1lcnMoKTogVW5rbm93biBEZWZvcm1lciBUeXBlLgoATGl2ZTJEIEN1YmlzbSBTREsgQ29yZSBWZXJzaW9uICVkLiVkLiVkAE1PQzMAW0NTTV0gW0VdY3NtUmV2aXZlTW9jSW5QbGFjZSBpcyBmYWlsZWQuIENvcnJ1cHRlZCAgbW9jMyBmaWxlLgoAW0NTTV0gW0VdY3NtUmV2aXZlTW9jSW5QbGFjZSBpcyBmYWlsZWQuIFRoZSBDb3JlIHVuc3VwcG9ydCBsYXRlciB0aGFuIG1vYzMgdmVyOlslZF0uIFRoaXMgbW9jMyB2ZXIgaXMgWyVkXS4KAFtDU01dIFtFXWNzbUdldE1vY1ZlcnNpb24gaXMgZmFpbGVkLiBDb3JydXB0ZWQgbW9jMyBmaWxlLgoAW0NTTV0gW0VdJXM6ICVzCgBjc21HZXRNb2NWZXJzaW9uACJhZGRyZXNzIiBpcyBudWxsLgBjc21SZXZpdmVNb2NJblBsYWNlACJhZGRyZXNzIiBhbGlnbm1lbnQgaXMgaW52YWxpZC4AInNpemUiIGlzIGludmFsaWQuAGNzbVJlYWRDYW52YXNJbmZvACJtb2RlbCIgaXMgaW52YWxpZC4AIm91dFNpemVJblBpeGVscyIgaXMgbnVsbC4AIm91dE9yaWdpbkluUGl4ZWxzIiBpcyBudWxsLgAib3V0UGl4ZWxzUGVyVW5pdCIgaXMgbnVsbC4AY3NtR2V0U2l6ZW9mTW9kZWwAIm1vYyIgaXMgaW52YWxpZC4AY3NtSW5pdGlhbGl6ZU1vZGVsSW5QbGFjZQAic2l6ZSIgaXMgaW52YWxpZABjc21VcGRhdGVNb2RlbABjc21HZXRQYXJhbWV0ZXJDb3VudABjc21HZXRQYXJhbWV0ZXJJZHMAY3NtR2V0UGFyYW1ldGVyTWluaW11bVZhbHVlcwBjc21HZXRQYXJhbWV0ZXJNYXhpbXVtVmFsdWVzAGNzbUdldFBhcmFtZXRlckRlZmF1bHRWYWx1ZXMAY3NtR2V0UGFyYW1ldGVyVmFsdWVzAGNzbUdldFBhcnRDb3VudABjc21HZXRQYXJ0SWRzAGNzbUdldFBhcnRPcGFjaXRpZXMAY3NtR2V0UGFydFBhcmVudFBhcnRJbmRpY2VzAGNzbUdldERyYXdhYmxlQ291bnQAY3NtR2V0RHJhd2FibGVJZHMAY3NtR2V0RHJhd2FibGVDb25zdGFudEZsYWdzAGNzbUdldERyYXdhYmxlRHluYW1pY0ZsYWdzAGNzbUdldERyYXdhYmxlVGV4dHVyZUluZGljZXMAY3NtR2V0RHJhd2FibGVEcmF3T3JkZXJzAGNzbUdldERyYXdhYmxlUmVuZGVyT3JkZXJzAGNzbUdldERyYXdhYmxlT3BhY2l0aWVzAGNzbUdldERyYXdhYmxlTWFza0NvdW50cwBjc21HZXREcmF3YWJsZU1hc2tzAGNzbUdldERyYXdhYmxlVmVydGV4Q291bnRzAGNzbUdldERyYXdhYmxlVmVydGV4UG9zaXRpb25zAGNzbUdldERyYXdhYmxlVmVydGV4VXZzAGNzbUdldERyYXdhYmxlSW5kZXhDb3VudHMAY3NtR2V0RHJhd2FibGVJbmRpY2VzAGNzbVJlc2V0RHJhd2FibGVEeW5hbWljRmxhZ3MAW0NTTV0gW0VdV2FycERlZm9ybWVyOjpUcmFuc2Zvcm1UYXJnZXQoKSBlcnJvci4gWyVkXSBwMDE9KCUuNGYgLCAlLjRmKQoAW0NTTV0gW1ddUm90YXRpb25EZWZvcm1lcjogTm90IGZvdW5kIHRyYW5zZm9ybWVkIERpcmVjdGlvbi4KAFtDU01dIFtFXVVwZGF0ZURlZm9ybWVySGllcmFyY2h5KCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KACVzCgAtKyAgIDBYMHgAKG51bGwpAC0wWCswWCAwWC0weCsweCAweABpbmYASU5GAG5hbgBOQU4ALg==");

            function intArrayToString(array) {
                for (var ret = [], i = 0; i < array.length; i++) {
                    var chr = array[i];
                    255 < chr && (ASSERTIONS && assert(!1, "Character code " + chr + " (" + String.fromCharCode(chr) + ")  at offset " + i + " not in 0x00-0xFF."), chr &= 255), ret.push(String.fromCharCode(chr))
                }
                return ret.join("")
            }
            var decodeBase64 = "function" == typeof atob ? atob : function (input) {
                var chr1, chr2, chr3, enc2, enc3, enc4, keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    output = "",
                    i = 0;
                for (input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); chr1 = keyStr.indexOf(input.charAt(i++)) << 2 | (enc2 = keyStr.indexOf(input.charAt(i++))) >> 4, chr2 = (15 & enc2) << 4 | (enc3 = keyStr.indexOf(input.charAt(i++))) >> 2, chr3 = (3 & enc3) << 6 | (enc4 = keyStr.indexOf(input.charAt(i++))), output += String.fromCharCode(chr1), 64 !== enc3 && (output += String.fromCharCode(chr2)), 64 !== enc4 && (output += String.fromCharCode(chr3)), i < input.length;);
                return output
            };

            function tryParseAsDataURI(filename) {
                if (isDataURI(filename)) return function (s) {
                    if ("boolean" == typeof ENVIRONMENT_IS_NODE && ENVIRONMENT_IS_NODE) {
                        var buf;
                        try {
                            buf = Buffer.from(s, "base64")
                        } catch (_) {
                            buf = new Buffer(s, "base64")
                        }
                        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength)
                    }
                    try {
                        for (var decoded = decodeBase64(s), bytes = new Uint8Array(decoded.length), i = 0; i < decoded.length; ++i) bytes[i] = decoded.charCodeAt(i);
                        return bytes
                    } catch (_) {
                        throw new Error("Converting base64 string to bytes failed.")
                    }
                }(filename.slice(dataURIPrefix.length))
            }
            var path, calledRun, asm = function (global, env, buffer) {
                    var a = new global.Int8Array(buffer),
                        b = new global.Int16Array(buffer),
                        c = new global.Int32Array(buffer),
                        d = new global.Uint8Array(buffer),
                        e = new global.Uint16Array(buffer),
                        f = new global.Float32Array(buffer),
                        g = new global.Float64Array(buffer),
                        h = 0 | env.A,
                        i = 0 | env.B,
                        r = global.Math.floor,
                        s = global.Math.pow,
                        t = global.Math.cos,
                        u = global.Math.sin,
                        v = global.Math.atan2,
                        w = global.Math.imul,
                        x = global.Math.clz32,
                        y = env.a,
                        z = env.b,
                        A = env.c,
                        B = env.d,
                        C = env.e,
                        D = env.f,
                        E = env.g,
                        F = env.h,
                        G = env.i,
                        H = env.j,
                        I = env.k,
                        J = env.l,
                        K = env.m,
                        L = env.n,
                        M = env.o,
                        N = env.p,
                        O = env.q,
                        P = env.r,
                        Q = env.s,
                        R = env.t,
                        Y = 4432;

                    function ma(a, b, d) {
                        b |= 0, d |= 0;
                        var e, f, h, g = 0;
                        Y = (h = Y) + 272 | 0, e = h + 16 | 0, f = h, 0 <= (a |= 0) >>> 0 && 0 | (g = 0 | c[908]) && (c[f >> 2] = d, cc(e, 256, b, f), ea[1 & g](e)), Y = h
                    }

                    function oa(a, b, d) {
                        a |= 0, d |= 0;
                        var n, e = 0,
                            f = 0,
                            g = 0,
                            h = 0,
                            i = 0,
                            j = 0,
                            k = 0,
                            l = 0,
                            m = 0,
                            o = 0;
                        if (c[(b |= 0) >> 2] = 384, n = 0 | c[a >> 2], 0 < (0 | (i = 0 | c[n >> 2]))) {
                            for (g = 0 | c[a + 296 >> 2], h = 0 | c[a + 16 >> 2], f = e = 0; e = (1 << c[g + (c[h + (f << 2) >> 2] << 2) >> 2]) + e | 0, (0 | (f = f + 1 | 0)) != (0 | i););
                            e <<= 2
                        } else e = 0;
                        if (c[b + 4 >> 2] = i << 3, c[b + 8 >> 2] = c[n >> 2] << 2, c[b + 12 >> 2] = c[n >> 2] << 2, c[b + 16 >> 2] = c[n >> 2] << 2, c[b + 20 >> 2] = c[n >> 2] << 2, c[b + 24 >> 2] = c[n >> 2] << 2, c[b + 28 >> 2] = c[n >> 2] << 2, c[b + 32 >> 2] = e, c[b + 36 >> 2] = e, c[b + 40 >> 2] = e, 0 < (0 | (h = 0 | c[(m = 8 + n | 0) >> 2]))) {
                            for (i = 0 | c[a + 88 >> 2], j = 0 | c[a + 296 >> 2], k = 0 | c[a + 76 >> 2], e = l = g = f = 0; g = (0 | g) < (0 | (o = 0 | c[i + (f << 2) >> 2])) ? o : g, e = (15 + (o << 3) & -16) + e | 0, l = (1 << c[j + (c[k + (f << 2) >> 2] << 2) >> 2]) + l | 0, (0 | (f = f + 1 | 0)) != (0 | h););
                            g <<= 3, f = l << 2
                        } else e = f = g = 0;
                        if (i = 4 + n | 0, c[b + 44 >> 2] = c[i >> 2] << 5, c[b + 48 >> 2] = 24 * (0 | c[m >> 2]), j = 12 + n | 0, c[b + 52 >> 2] = c[j >> 2] << 5, c[b + 56 >> 2] = c[i >> 2] << 2, c[b + 60 >> 2] = c[m >> 2] << 2, c[b + 64 >> 2] = c[j >> 2] << 2, c[b + 68 >> 2] = c[i >> 2] << 2, c[b + 72 >> 2] = c[i >> 2] << 2, c[b + 76 >> 2] = e, c[b + 80 >> 2] = c[m >> 2] << 2, c[b + 84 >> 2] = c[m >> 2] << 2, c[b + 88 >> 2] = f, c[b + 92 >> 2] = f, c[b + 96 >> 2] = f, c[b + 100 >> 2] = f, c[b + 104 >> 2] = g, 0 < (0 | (i = 0 | c[j >> 2]))) {
                            for (g = 0 | c[a + 296 >> 2], h = 0 | c[a + 100 >> 2], f = e = 0; f = (1 << c[g + (c[h + (e << 2) >> 2] << 2) >> 2]) + f | 0, (0 | (e = e + 1 | 0)) != (0 | i););
                            e = f << 2
                        } else e = 0;
                        if (c[b + 108 >> 2] = i << 2, c[b + 112 >> 2] = c[j >> 2] << 2, c[b + 116 >> 2] = e, c[b + 120 >> 2] = e, c[b + 124 >> 2] = e, c[b + 128 >> 2] = e, c[b + 132 >> 2] = e, c[b + 136 >> 2] = e, c[b + 140 >> 2] = e, c[b + 144 >> 2] = e, c[b + 148 >> 2] = e, c[b + 152 >> 2] = e, c[b + 156 >> 2] = e, 0 < (0 | (m = 0 | c[(l = 16 + n | 0) >> 2]))) {
                            for (h = 0 | c[a + 172 >> 2], i = 0 | c[a + 296 >> 2], j = 0 | c[a + 136 >> 2], g = e = k = f = 0; f = (0 | f) < (0 | (o = 0 | c[h + (g << 2) >> 2])) ? o : f, e = (15 + (o << 3) & -16) + e | 0, k = (1 << c[i + (c[j + (g << 2) >> 2] << 2) >> 2]) + k | 0, (0 | (g = g + 1 | 0)) != (0 | m););
                            g = f << 3, f = k << 2
                        } else e = f = g = 0;
                        if (c[b + 160 >> 2] = m << 4, c[b + 164 >> 2] = c[l >> 2] << 2, c[b + 168 >> 2] = c[l >> 2], c[b + 172 >> 2] = c[l >> 2] << 2, c[b + 176 >> 2] = c[l >> 2] << 2, c[b + 180 >> 2] = c[l >> 2] << 2, c[b + 184 >> 2] = e, c[b + 188 >> 2] = c[l >> 2] << 2, c[b + 192 >> 2] = c[l >> 2] << 2, c[b + 196 >> 2] = c[l >> 2] << 2, c[b + 200 >> 2] = c[l >> 2] << 2, c[b + 204 >> 2] = c[l >> 2] << 2, c[b + 208 >> 2] = c[l >> 2] << 2, c[b + 212 >> 2] = f, c[b + 216 >> 2] = f, c[b + 220 >> 2] = f, c[b + 224 >> 2] = f, c[b + 228 >> 2] = f, c[b + 232 >> 2] = f, c[b + 236 >> 2] = g, h = 20 + n | 0, c[b + 240 >> 2] = 40 * (0 | c[h >> 2]), c[b + 244 >> 2] = c[h >> 2] << 2, c[b + 248 >> 2] = 28 * (0 | c[52 + n >> 2]), 0 < (0 | (h = 0 | c[48 + n >> 2]))) {
                            for (g = 0 | c[a + 296 >> 2], f = e = 0; e = (1 << c[g + (f << 2) >> 2]) + e | 0, (0 | (f = f + 1 | 0)) != (0 | h););
                            e <<= 2
                        } else e = 0;
                        if (c[b + 252 >> 2] = 36 * h, c[b + 256 >> 2] = e, c[b + 260 >> 2] = e, g = 72 + n | 0, c[b + 264 >> 2] = 28 * (0 | c[g >> 2]), 0 < (0 | (g = 0 | c[g >> 2]))) {
                            for (h = 0 | c[a + 328 >> 2], i = 0 | c[a + 336 >> 2], j = 0 | c[a + 340 >> 2], f = k = e = 0; e = (0 | e) < (0 | (o = 0 | c[h + (f << 2) >> 2])) ? o : e, k = (0 | (o = (0 | c[i + (f << 2) >> 2]) - (0 | c[j + (f << 2) >> 2]) | 0)) < (0 | k) ? k : o + 1 | 0, (0 | (f = f + 1 | 0)) != (0 | g););
                            f = e << 2, e = k << 2
                        } else e = f = 0;
                        if (c[b + 268 >> 2] = c[76 + n >> 2] << 4, c[b + 272 >> 2] = e, c[b + 276 >> 2] = f, c[b + 280 >> 2] = e, 0 < (0 | (j = 0 | c[(i = 80 + n | 0) >> 2]))) {
                            for (h = 0 | c[a + 296 >> 2], g = 0 | c[a + 364 >> 2], f = e = 0; e = (1 << c[h + (c[g + (f << 2) >> 2] << 2) >> 2]) + e | 0, (0 | (f = f + 1 | 0)) != (0 | j););
                            e <<= 2
                        } else e = 0;
                        for (c[b + 284 >> 2] = 24 * j, c[b + 288 >> 2] = c[i >> 2] << 2, c[b + 292 >> 2] = c[i >> 2] << 2, c[b + 296 >> 2] = e, c[b + 300 >> 2] = e, c[b + 304 >> 2] = e, c[b >> 2] = 0, e = 1, f = 384; f = (o = 15 + (0 | c[b + (e << 2) >> 2]) & -16) + (c[b + (e << 2) >> 2] = f) | 0, 77 != (0 | (e = e + 1 | 0)););
                        c[d >> 2] = f
                    }

                    function pa(b, e, g) {
                        e |= 0, g |= 0;
                        var z, A, B, C, D, E, F, G, H, I, K, L, h = 0,
                            i = 0,
                            j = 0,
                            k = 0,
                            l = 0,
                            m = 0,
                            n = 0,
                            o = 0,
                            p = 0,
                            q = 0,
                            r = 0,
                            t = 0,
                            u = 0,
                            v = 0,
                            w = 0,
                            x = 0,
                            y = 0,
                            J = 0,
                            M = 0,
                            N = 0,
                            O = 0,
                            P = 0;
                        if (Y = (L = Y) + 320 | 0, z = L + 312 | 0, h = (t = L) + 316 | 0, o = (b |= 0) + 704 | 0, uc(0 | t, 0, 308), oa(o, t, h), g >>> 0 < (h = 0 | c[h >> 2]) >>> 0) return Y = L, (b = 0) | b;
                        if (uc(0 | e, 0, 0 | h), K = e + (0 | c[t >> 2]) | 0, c[(v = 8 + K | 0) >> 2] = e + (0 | c[t + 4 >> 2]), c[36 + K >> 2] = e + (0 | c[t + 8 >> 2]), c[44 + K >> 2] = e + (0 | c[t + 12 >> 2]), c[48 + K >> 2] = e + (0 | c[t + 16 >> 2]), c[(w = 52 + K | 0) >> 2] = e + (0 | c[t + 20 >> 2]), c[(x = 12 + K | 0) >> 2] = e + (0 | c[t + 24 >> 2]), c[16 + K >> 2] = e + (0 | c[t + 28 >> 2]), c[20 + K >> 2] = e + (0 | c[t + 32 >> 2]), c[28 + K >> 2] = e + (0 | c[t + 36 >> 2]), c[32 + K >> 2] = e + (0 | c[t + 40 >> 2]), j = 0 | c[o >> 2], c[(y = 60 + K | 0) >> 2] = e + (0 | c[t + 44 >> 2]), i = e + (0 | c[t + 48 >> 2]) | 0, c[(A = 68 + K | 0) >> 2] = i, c[(C = 76 + K | 0) >> 2] = e + (0 | c[t + 52 >> 2]), c[168 + K >> 2] = e + (0 | c[t + 56 >> 2]), c[172 + K >> 2] = e + (0 | c[t + 60 >> 2]), c[176 + K >> 2] = e + (0 | c[t + 64 >> 2]), c[192 + K >> 2] = e + (0 | c[t + 68 >> 2]), c[196 + K >> 2] = e + (0 | c[t + 72 >> 2]), 0 < (0 | (j = 0 | c[j + 8 >> 2])))
                            for (k = 0 | c[b + 792 >> 2], g = e + (0 | c[t + 76 >> 2]) | 0, h = 0; c[i + (24 * h | 0) + 20 >> 2] = g, (0 | (l = h + 1 | 0)) != (0 | j);) g = g + (15 + (c[k + (h << 2) >> 2] << 3) & -16) | 0, h = l;
                        if (c[(B = 80 + K | 0) >> 2] = e + (0 | c[t + 80 >> 2]), c[84 + K >> 2] = e + (0 | c[t + 84 >> 2]), c[88 + K >> 2] = e + (0 | c[t + 88 >> 2]), c[96 + K >> 2] = e + (0 | c[t + 92 >> 2]), c[100 + K >> 2] = e + (0 | c[t + 96 >> 2]), c[104 + K >> 2] = e + (0 | c[t + 100 >> 2]), c[108 + K >> 2] = e + (0 | c[t + 104 >> 2]), c[(D = 112 + K | 0) >> 2] = e + (0 | c[t + 108 >> 2]), c[116 + K >> 2] = e + (0 | c[t + 112 >> 2]), c[120 + K >> 2] = e + (0 | c[t + 116 >> 2]), c[128 + K >> 2] = e + (0 | c[t + 120 >> 2]), c[132 + K >> 2] = e + (0 | c[t + 124 >> 2]), c[136 + K >> 2] = e + (0 | c[t + 128 >> 2]), c[140 + K >> 2] = e + (0 | c[t + 132 >> 2]), c[144 + K >> 2] = e + (0 | c[t + 136 >> 2]), c[148 + K >> 2] = e + (0 | c[t + 140 >> 2]), c[152 + K >> 2] = e + (0 | c[t + 144 >> 2]), c[156 + K >> 2] = e + (0 | c[t + 148 >> 2]), c[160 + K >> 2] = e + (0 | c[t + 152 >> 2]), c[164 + K >> 2] = e + (0 | c[t + 156 >> 2]), k = 0 | c[o >> 2], c[(G = 204 + K | 0) >> 2] = e + (0 | c[t + 160 >> 2]), c[248 + K >> 2] = e + (0 | c[t + 164 >> 2]), c[260 + K >> 2] = e + (0 | c[t + 168 >> 2]), c[264 + K >> 2] = e + (0 | c[t + 172 >> 2]), c[268 + K >> 2] = e + (0 | c[t + 176 >> 2]), g = e + (0 | c[t + 180 >> 2]) | 0, c[(j = 272 + K | 0) >> 2] = g, 0 < (0 | (k = 0 | c[k + 16 >> 2])) && (m = e + (0 | c[t + 184 >> 2]) | 0, n = b + 876 | 0, c[g >> 2] = m, 1 != (0 | k)))
                            for (h = m, g = 0, i = 1; h = h + (15 + (c[(0 | c[n >> 2]) + (g << 2) >> 2] << 3) & -16) | 0, c[(0 | c[j >> 2]) + (i << 2) >> 2] = h, !((0 | k) <= (0 | (g = i + 1 | 0)));) J = i, i = g, g = J;
                        if (c[276 + K >> 2] = e + (0 | c[t + 188 >> 2]), c[280 + K >> 2] = e + (0 | c[t + 192 >> 2]), c[284 + K >> 2] = e + (0 | c[t + 196 >> 2]), c[288 + K >> 2] = e + (0 | c[t + 200 >> 2]), c[(F = 208 + K | 0) >> 2] = e + (0 | c[t + 204 >> 2]), c[212 + K >> 2] = e + (0 | c[t + 208 >> 2]), c[216 + K >> 2] = e + (0 | c[t + 212 >> 2]), c[224 + K >> 2] = e + (0 | c[t + 216 >> 2]), c[228 + K >> 2] = e + (0 | c[t + 220 >> 2]), c[232 + K >> 2] = e + (0 | c[t + 224 >> 2]), c[236 + K >> 2] = e + (0 | c[t + 228 >> 2]), c[240 + K >> 2] = e + (0 | c[t + 232 >> 2]), c[244 + K >> 2] = e + (0 | c[t + 236 >> 2]), q = 0 | c[t + 244 >> 2], p = e + (0 | c[t + 240 >> 2]) | 0, c[296 + K >> 2] = p, q = e + q | 0, c[300 + K >> 2] = q, r = e + (0 | c[t + 248 >> 2]) | 0, c[308 + K >> 2] = r, g = 0 | c[t + 256 >> 2], h = 0 | c[t + 260 >> 2], k = 0 | c[o >> 2], u = e + (0 | c[t + 252 >> 2]) | 0, c[(J = 316 + K | 0) >> 2] = u, 0 < (0 | (k = 0 | c[k + 48 >> 2])))
                            for (l = 0 | c[b + 1e3 >> 2], i = e + g | (j = 0), g = e + h | 0; c[u + (36 * j | 0) + 16 >> 2] = i, c[u + (36 * j | 0) + 20 >> 2] = g, h = 1 << c[l + (j << 2) >> 2], (0 | (j = j + 1 | 0)) != (0 | k);) i = i + (h << 2) | 0, g = g + (h << 2) | 0;
                        if (j = 0 | c[o >> 2], i = e + (0 | c[t + 264 >> 2]) | 0, c[(E = 324 + K | 0) >> 2] = i, 0 < (0 | (j = 0 | c[j + 72 >> 2])))
                            for (k = 0 | c[b + 1032 >> 2], g = e + (0 | c[t + 268 >> 2]) | 0, h = 0; c[i + (28 * h | 0) + 12 >> 2] = g, (0 | (l = h + 1 | 0)) != (0 | j);) g = g + (c[k + (h << 2) >> 2] << 4) | 0, h = l;
                        if (c[328 + K >> 2] = e + (0 | c[t + 272 >> 2]), c[332 + K >> 2] = e + (0 | c[t + 276 >> 2]), c[336 + K >> 2] = e + (0 | c[t + 280 >> 2]), c[(H = 344 + K | 0) >> 2] = e + (0 | c[t + 284 >> 2]), c[(I = 348 + K | 0) >> 2] = e + (0 | c[t + 288 >> 2]), c[352 + K >> 2] = e + (0 | c[t + 292 >> 2]), c[356 + K >> 2] = e + (0 | c[t + 296 >> 2]), c[364 + K >> 2] = e + (0 | c[t + 300 >> 2]), c[368 + K >> 2] = e + (0 | c[t + 304 >> 2]), c[376 + K >> 2] = 1, c[380 + K >> 2] = 1 & a[20 + (0 | c[b + 708 >> 2]) >> 0], e = 0 | c[(t = b + 704 | 0) >> 2], g = 0 | c[e + 20 >> 2], 0 < (0 | (c[292 + K >> 2] = g))) {
                            for (i = 0 | c[b + 912 >> 2], j = 0 | c[b + 908 >> 2], k = 0 | c[b + 920 >> 2], o = 0 | c[b + 916 >> 2], l = 0 | c[b + 924 >> 2], m = 0 | c[b + 928 >> 2], n = 0 | c[b + 932 >> 2], h = g; O = i + ((h = (M = h) + -1 | 0) << 2) | 0, c[p + (40 * h | 0) >> 2] = c[O >> 2], P = j + (h << 2) | 0, c[p + (40 * h | 0) + 4 >> 2] = c[P >> 2], f[p + (40 * h | 0) + 8 >> 2] = +f[P >> 2] - +f[O >> 2], c[p + (40 * h | 0) + 12 >> 2] = c[k + (h << 2) >> 2], c[p + (40 * h | 0) + 32 >> 2] = c[o + (h << 2) >> 2], N = +s(.10000000149011612, + +(0 | c[l + (h << 2) >> 2])), f[p + (40 * h | 0) + 16 >> 2] = N, f[p + (40 * h | 0) + 20 >> 2] = 1.5 * N, c[p + (40 * h | 0) + 24 >> 2] = c[m + (h << 2) >> 2], c[p + (40 * h | 0) + 28 >> 2] = c[n + (h << 2) >> 2], (c[p + (40 * h | 0) + 36 >> 2] = 1) < (0 | M););
                            for (; c[q + ((g = (P = g) + -1 | 0) << 2) >> 2] = c[o + (g << 2) >> 2], 1 < (0 | P););
                        }
                        if (g = 0 | c[e + 52 >> 2], 0 < (0 | (c[304 + K >> 2] = g)))
                            for (h = 0 | c[b + 1008 >> 2], i = 0 | c[b + 1012 >> 2], j = 0 | c[b + 1004 >> 2]; c[r + (28 * (g = (P = g) + -1 | 0) | 0) >> 2] = c[h + (g << 2) >> 2], c[r + (28 * g | 0) + 4 >> 2] = i + (c[j + (g << 2) >> 2] << 2), f[r + (28 * g | 0) + 12 >> 2] = 0, c[r + (28 * g | 0) + 20 >> 2] = 1, (c[r + (28 * g | 0) + 24 >> 2] = 1) < (0 | P););
                        if (g = 0 | c[e + 48 >> 2], 0 < (0 | (c[312 + K >> 2] = g)))
                            for (h = 0 | c[b + 1e3 >> 2], i = 0 | c[b + 992 >> 2], j = 0 | c[b + 996 >> 2]; O = 0 | c[h + ((g = (P = g) + -1 | 0) << 2) >> 2], c[u + (36 * g | 0) >> 2] = O, c[u + (36 * g | 0) + 4 >> 2] = 1 << O, c[u + (36 * g | 0) + 12 >> 2] = i + (c[j + (g << 2) >> 2] << 2), c[u + (36 * g | 0) + 24 >> 2] = 1, (c[u + (36 * g | 0) + 28 >> 2] = 1) < (0 | P););
                        if (h = 0 | c[e >> 2], c[4 + K >> 2] = h, n = 0 | c[b + 720 >> 2], c[40 + K >> 2] = n, 0 < (0 | h)) {
                            for (j = 0 | c[v >> 2], k = 0 | c[b + 740 >> 2], l = 0 | c[b + 736 >> 2], m = 0 | c[b + 732 >> 2], i = 0 | c[w >> 2], g = h; c[j + ((g = (P = g) + -1 | 0) << 3) >> 2] = c[k + (g << 2) >> 2], c[j + (g << 3) + 4 >> 2] = c[l + (g << 2) >> 2], f[i + (g << 2) >> 2] = 0 == (0 | c[m + (g << 2) >> 2]) ? 0 : 1, 1 < (0 | P););
                            for (i = 0 | c[x >> 2], g = 0; O = 0 | c[u + (36 * (0 | c[n + ((h = (P = h) + -1 | 0) << 2) >> 2]) | 0) + 4 >> 2], g = (c[i + (h << 2) >> 2] = O) + g | 0, 1 < (0 | P););
                        } else g = 0;
                        if (c[24 + K >> 2] = g, g = 0 | c[e + 4 >> 2], c[56 + K >> 2] = g, c[180 + K >> 2] = c[b + 752 >> 2], c[(p = 184 + K | 0) >> 2] = c[b + 780 >> 2], c[(q = 188 + K | 0) >> 2] = c[b + 804 >> 2], 0 < (0 | g)) {
                            k = b + 764 | 0, l = b + 768 | 0, m = b + 772 | 0, n = b + 776 | 0, o = b + 760 | 0;
                            do {
                                switch (g = (h = g) + -1 | 0, i = 0 | c[y >> 2], c[i + (g << 5) >> 2] = c[(0 | c[k >> 2]) + (g << 2) >> 2], c[i + (g << 5) + 4 >> 2] = c[(0 | c[l >> 2]) + (g << 2) >> 2], P = 0 | c[(0 | c[m >> 2]) + (g << 2) >> 2], c[i + (g << 5) + 8 >> 2] = P, j = 0 | c[(0 | c[n >> 2]) + (g << 2) >> 2], c[i + (g << 5) + 12 >> 2] = j, c[i + (g << 5) + 28 >> 2] = c[(0 | c[o >> 2]) + (g << 2) >> 2], 0 | P) {
                                    case 0:
                                        c[i + (g << 5) + 16 >> 2] = 2, c[i + (g << 5) + 20 >> 2] = 2, c[i + (g << 5) + 24 >> 2] = (0 | c[A >> 2]) + (24 * j | 0);
                                        break;
                                    case 1:
                                        c[i + (g << 5) + 16 >> 2] = 3, c[i + (g << 5) + 20 >> 2] = 3, c[i + (g << 5) + 24 >> 2] = (0 | c[C >> 2]) + (j << 5);
                                        break;
                                    default:
                                        ma(4, 1032, z)
                                }
                            } while (1 < (0 | h));
                            y = 0 | c[t >> 2]
                        } else y = e;
                        if (n = 0 | c[y + 8 >> 2], g = (c[64 + K >> 2] = n) + -1 | 0, m = 0 < (0 | n))
                            if (i = 0 | c[A >> 2], j = 0 | c[b + 796 >> 2], k = 0 | c[b + 800 >> 2], l = 0 | c[b + 792 >> 2], 1 < (0 | d[b + 4 >> 0]))
                                for (h = 0 | c[b + 1108 >> 2]; c[i + (24 * g | 0) >> 2] = c[j + (g << 2) >> 2], c[i + (24 * g | 0) + 4 >> 2] = c[k + (g << 2) >> 2], c[i + (24 * g | 0) + 12 >> 2] = c[l + (g << 2) >> 2], c[i + (24 * g | 0) + 8 >> 2] = c[h + (g << 2) >> 2], 0 < (0 | g);) g = g + -1 | 0;
                            else
                                for (; c[i + (24 * g | 0) >> 2] = c[j + (g << 2) >> 2], c[i + (24 * g | 0) + 4 >> 2] = c[k + (g << 2) >> 2], c[i + (24 * g | 0) + 12 >> 2] = c[l + (g << 2) >> 2], (c[i + (24 * g | 0) + 8 >> 2] = 0) < (0 | g);) g = g + -1 | 0;
                        if (h = 0 | c[y + 12 >> 2], 0 < (0 | (c[(l = 72 + K | 0) >> 2] = h)))
                            for (i = 0 | c[C >> 2], j = 0 | c[b + 816 >> 2], g = h; c[i + ((g = (P = g) + -1 | 0) << 5) >> 2] = c[j + (g << 2) >> 2], 1 < (0 | P););
                        if (m) {
                            for (k = 0 | c[J >> 2], j = 0 | c[p >> 2], i = 0 | c[B >> 2], g = 0, h = n; O = 0 | c[k + (36 * (0 | c[j + ((h = (P = h) + -1 | 0) << 2) >> 2]) | 0) + 4 >> 2], g = (c[i + (h << 2) >> 2] = O) + g | 0, 1 < (0 | P););
                            h = 0 | c[l >> 2]
                        } else g = 0;
                        if (c[92 + K >> 2] = g, 0 < (0 | h))
                            for (k = 0 | c[J >> 2], j = 0 | c[q >> 2], i = 0 | c[D >> 2], g = 0; O = 0 | c[k + (36 * (0 | c[j + ((h = (P = h) + -1 | 0) << 2) >> 2]) | 0) + 4 >> 2], g = (c[i + (h << 2) >> 2] = O) + g | 0, 1 < (0 | P););
                        else g = 0;
                        if (c[124 + K >> 2] = g, h = 0 | c[y + 16 >> 2], c[200 + K >> 2] = h, n = 0 | c[b + 840 >> 2], c[252 + K >> 2] = n, 0 < (0 | h)) {
                            for (i = 0 | c[G >> 2], j = 0 | c[b + 860 >> 2], k = 0 | c[b + 864 >> 2], l = 0 | c[b + 876 >> 2], m = 0 | c[b + 856 >> 2], g = h; c[i + ((g = (P = g) + -1 | 0) << 4) >> 2] = c[j + (g << 2) >> 2], c[i + (g << 4) + 4 >> 2] = c[k + (g << 2) >> 2], c[i + (g << 4) + 12 >> 2] = c[l + (g << 2) >> 2], c[i + (g << 4) + 8 >> 2] = c[m + (g << 2) >> 2], 1 < (0 | P););
                            for (j = 0 | c[J >> 2], i = 0 | c[F >> 2], g = 0; O = 0 | c[j + (36 * (0 | c[n + ((h = (P = h) + -1 | 0) << 2) >> 2]) | 0) + 4 >> 2], g = (c[i + (h << 2) >> 2] = O) + g | 0, 1 < (0 | P););
                        } else g = 0;
                        if (c[220 + K >> 2] = g, x = 0 | c[y + 72 >> 2], 0 < (0 | (c[320 + K >> 2] = x))) {
                            i = 0 | c[E >> 2], j = 0 | c[b + 1032 >> 2], k = 0 | c[b + 1036 >> 2], l = 0 | c[b + 1040 >> 2], m = 0 | c[b + 1044 >> 2], n = 0 | c[b + 1028 >> 2], o = b + 1052 | 0, p = b + 1048 | 0, q = b + 1056 | 0, g = 0;
                            do {
                                if (e = 0 | c[j + (g << 2) >> 2], c[i + (28 * g | 0) + 4 >> 2] = e, c[i + (28 * g | 0) >> 2] = c[k + (g << 2) >> 2], P = 0 | c[l + (g << 2) >> 2], c[i + (28 * g | 0) + 16 >> 2] = P, r = 0 | c[m + (g << 2) >> 2], c[i + (28 * g | 0) + 20 >> 2] = r, c[i + (28 * g | 0) + 24 >> 2] = P + 1 - r, r = (c[i + (28 * g | 0) + 8 >> 2] = 0) | c[n + (g << 2) >> 2], 0 < (0 | e))
                                    for (t = 0 | c[i + (28 * g | 0) + 12 >> 2], u = 0 | c[o >> 2], v = 0 | c[p >> 2], w = 0 | c[q >> 2], h = 0; P = h + r | 0, c[t + (h << 4) + 4 >> 2] = c[u + (P << 2) >> 2], c[t + (h << 4) >> 2] = c[v + (P << 2) >> 2], c[t + (h << 4) + 8 >> 2] = c[w + (P << 2) >> 2], (0 | (h = h + 1 | (c[t + (h << 4) + 12 >> 2] = 0))) != (0 | e););
                                g = g + 1 | 0
                            } while ((0 | g) != (0 | x))
                        }
                        if (g = 0 | c[y + 80 >> 2], c[(o = 340 + K | 0) >> 2] = g, p = 0 | c[b + 1068 >> 2], c[372 + K >> 2] = p, 0 < (0 | g)) {
                            for (h = 0 | c[H >> 2], i = 0 | c[b + 1080 >> 2], j = 0 | c[b + 1084 >> 2], k = 0 | c[b + 1092 >> 2], l = 0 | c[b + 1096 >> 2], m = 0 | c[b + 1088 >> 2], n = 0 | c[b + 1100 >> 2]; c[h + (24 * (g = (P = g) + -1 | 0) | 0) >> 2] = c[i + (g << 2) >> 2], c[h + (24 * g | 0) + 4 >> 2] = c[j + (g << 2) >> 2], c[h + (24 * g | 0) + 8 >> 2] = c[k + (g << 2) >> 2], O = 0 | c[m + (g << 2) >> 2], c[h + (24 * g | 0) + 12 >> 2] = l + (O << 2), c[h + (24 * g | 0) + 16 >> 2] = n + (O << 1), 1 < (0 | P););
                            if (0 < (0 | (h = 0 | c[o >> 2])))
                                for (j = 0 | c[J >> 2], i = 0 | c[I >> 2], g = 0; O = 0 | c[j + (36 * (0 | c[p + ((h = (P = h) + -1 | 0) << 2) >> 2]) | 0) + 4 >> 2], g = (c[i + (h << 2) >> 2] = O) + g | 0, 1 < (0 | P););
                            else g = 0
                        } else g = 0;
                        return c[360 + K >> 2] = g, c[K >> 2] = b, rb(K), Y = L, 0 | (P = K)
                    }

                    function qa(d, e) {
                        d |= 0, e |= 0;
                        var t, g = 0,
                            h = 0,
                            i = 0,
                            j = 0,
                            k = 0,
                            l = 0,
                            m = 0,
                            n = 0,
                            o = 0,
                            p = 0,
                            q = 0,
                            r = 0,
                            s = 0;
                        if (Y = (t = Y) + 32 | 0, g = t + 24 | 0, c[(h = t) >> 2] = 4, c[h + 4 >> 2] = 0, c[h + 8 >> 2] = 0, function (a, b) {
                                a |= 0, b |= 0;
                                var d, e, f;
                                Y = (d = Y) + 272 | 0, e = d + 16 | 0, c[(f = d) >> 2] = b, cc(e, 256, a, f),
                                    function (a) {
                                        a |= 0;
                                        var b, d, e;
                                        Y = (b = Y) + 16 | 0, d = b, e = 0 | c[196], c[d >> 2] = a,
                                            function (a, b, d) {
                                                a |= 0, b |= 0, d |= 0;
                                                var e, f;
                                                Y = (e = Y) + 16 | 0, c[(f = e) >> 2] = d, d = 0 | Nb(a, b, f), Y = e
                                            }(e, 2526, d), Y = b
                                    }(e), Y = d
                            }(1088, h), h = 1, 0 | ec(d, 1128, 4)) return ma(4, 1133, t + 16 | 0), Y = t, (s = 0) | s;
                        if (3 < (255 & (e = 0 | a[(k = d + 4 | 0) >> 0]))) return c[g >> 2] = 3, c[g + 4 >> 2] = 255 & e, ma(4, 1196, g), Y = t, (s = 0) | s;
                        for (e = (j = (0 | h) != (0 == (0 | a[(e = d + 5 | 0) >> 0]) | 0)) ? (s = d + 64 | 0, cb(k, 1), db(s, 4, 160), a[e >> 0] = 0 == (0 | h) & 1, s) : d + 64 | 0, h = i = d + 704 | 0, g = 102; g = g + -1 | 0, c[h >> 2] = d + (0 | c[e >> 2]), g;) h = h + 4 | 0, e = e + 4 | 0;
                        if (s = (j && (s = 0 | a[k >> 0], db(0 | c[i >> 2], 4, 32), cb(0 | c[(r = d + 708 | 0) >> 2], 4), cb(4 + (0 | c[r >> 2]) | 0, 4), cb(8 + (0 | c[r >> 2]) | 0, 4), cb(12 + (0 | c[r >> 2]) | 0, 4), cb(16 + (0 | c[r >> 2]) | 0, 4), cb(20 + (0 | c[r >> 2]) | 0, 1), db(0 | c[d + 720 >> 2], 4, 0 | c[c[i >> 2] >> 2]), db(0 | c[d + 724 >> 2], 4, 0 | c[c[i >> 2] >> 2]), db(0 | c[d + 728 >> 2], 4, 0 | c[c[i >> 2] >> 2]), db(0 | c[d + 732 >> 2], 4, 0 | c[c[i >> 2] >> 2]), db(0 | c[d + 736 >> 2], 4, 0 | c[c[i >> 2] >> 2]), db(0 | c[d + 740 >> 2], 4, 0 | c[c[i >> 2] >> 2]), db(0 | c[d + 752 >> 2], 4, 0 | c[4 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 756 >> 2], 4, 0 | c[4 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 760 >> 2], 4, 0 | c[4 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 764 >> 2], 4, 0 | c[4 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 768 >> 2], 4, 0 | c[4 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 772 >> 2], 4, 0 | c[4 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 776 >> 2], 4, 0 | c[4 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 780 >> 2], 4, 0 | c[8 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 784 >> 2], 4, 0 | c[8 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 788 >> 2], 4, 0 | c[8 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 792 >> 2], 4, 0 | c[8 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 796 >> 2], 4, 0 | c[8 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 800 >> 2], 4, 0 | c[8 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 804 >> 2], 4, 0 | c[12 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 808 >> 2], 4, 0 | c[12 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 812 >> 2], 4, 0 | c[12 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 816 >> 2], 4, 0 | c[12 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 840 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 844 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 848 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 852 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 856 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 860 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 864 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 868 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 872 >> 2], 1, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 876 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 880 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 884 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 888 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 892 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 896 >> 2], 4, 0 | c[16 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 908 >> 2], 4, 0 | c[20 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 912 >> 2], 4, 0 | c[20 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 916 >> 2], 4, 0 | c[20 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 920 >> 2], 4, 0 | c[20 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 924 >> 2], 4, 0 | c[20 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 928 >> 2], 4, 0 | c[20 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 932 >> 2], 4, 0 | c[20 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 936 >> 2], 4, 0 | c[24 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 940 >> 2], 4, 0 | c[28 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 944 >> 2], 4, 0 | c[28 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 948 >> 2], 4, 0 | c[32 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 952 >> 2], 4, 0 | c[32 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 956 >> 2], 4, 0 | c[32 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 960 >> 2], 4, 0 | c[32 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 964 >> 2], 4, 0 | c[32 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 968 >> 2], 4, 0 | c[32 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 972 >> 2], 4, 0 | c[32 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 976 >> 2], 4, 0 | c[36 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 980 >> 2], 4, 0 | c[36 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 984 >> 2], 4, 0 | c[36 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 988 >> 2], 4, 0 | c[40 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 992 >> 2], 4, 0 | c[44 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 996 >> 2], 4, 0 | c[48 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1e3 >> 2], 4, 0 | c[48 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1004 >> 2], 4, 0 | c[52 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1008 >> 2], 4, 0 | c[52 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1012 >> 2], 4, 0 | c[56 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1016 >> 2], 4, 0 | c[60 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1020 >> 2], 2, 0 | c[64 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1024 >> 2], 4, 0 | c[68 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1028 >> 2], 4, 0 | c[72 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1032 >> 2], 4, 0 | c[72 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1036 >> 2], 4, 0 | c[72 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1040 >> 2], 4, 0 | c[72 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1044 >> 2], 4, 0 | c[72 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1048 >> 2], 4, 0 | c[76 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1052 >> 2], 4, 0 | c[76 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1056 >> 2], 4, 0 | c[76 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1068 >> 2], 4, 0 | c[80 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1072 >> 2], 4, 0 | c[80 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1076 >> 2], 4, 0 | c[80 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1080 >> 2], 4, 0 | c[80 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1084 >> 2], 4, 0 | c[80 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1088 >> 2], 4, 0 | c[80 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1092 >> 2], 4, 0 | c[80 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1096 >> 2], 4, 0 | c[84 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1100 >> 2], 2, 0 | c[84 + (0 | c[i >> 2]) >> 2]), db(0 | c[d + 1104 >> 2], 4, 0 | c[88 + (0 | c[i >> 2]) >> 2]), 1 < (255 & s)) && db(0 | c[d + 1108 >> 2], 4, 0 | c[8 + (0 | c[i >> 2]) >> 2]), i), e = 0 | c[s >> 2], 0 < (0 | c[e >> 2]))
                            for (h = d + 716 | 0, i = d + 712 | 0, g = 0; c[(0 | c[i >> 2]) + (g << 2) >> 2] = (0 | c[h >> 2]) + (g << 6), g = g + 1 | 0, e = 0 | c[s >> 2], (0 | g) < (0 | c[e >> 2]););
                        if (0 < (0 | c[e + 4 >> 2]))
                            for (h = d + 748 | 0, i = d + 744 | 0, g = 0; c[(0 | c[i >> 2]) + (g << 2) >> 2] = (0 | c[h >> 2]) + (g << 6), g = g + 1 | 0, e = 0 | c[s >> 2], (0 | g) < (0 | c[e + 4 >> 2]););
                        if (0 < (0 | c[e + 16 >> 2]))
                            for (h = d + 836 | 0, i = d + 820 | 0, j = d + 1016 | 0, k = d + 880 | 0, l = d + 824 | 0, m = d + 1020 | 0, n = d + 884 | 0, o = d + 828 | 0, p = d + 1024 | 0, q = d + 892 | 0, r = d + 832 | 0, g = 0; c[(0 | c[i >> 2]) + (g << 2) >> 2] = (0 | c[h >> 2]) + (g << 6), c[(0 | c[l >> 2]) + (g << 2) >> 2] = (0 | c[j >> 2]) + (c[(0 | c[k >> 2]) + (g << 2) >> 2] << 2), c[(0 | c[o >> 2]) + (g << 2) >> 2] = (0 | c[m >> 2]) + (c[(0 | c[n >> 2]) + (g << 2) >> 2] << 1), c[(0 | c[r >> 2]) + (g << 2) >> 2] = (0 | c[p >> 2]) + (c[(0 | c[q >> 2]) + (g << 2) >> 2] << 2), g = g + 1 | 0, e = 0 | c[s >> 2], (0 | g) < (0 | c[e + 16 >> 2]););
                        if (0 < (0 | c[e + 20 >> 2]))
                            for (h = d + 904 | 0, i = d + 900 | 0, g = 0; c[(0 | c[i >> 2]) + (g << 2) >> 2] = (0 | c[h >> 2]) + (g << 6), g = g + 1 | 0, e = 0 | c[s >> 2], (0 | g) < (0 | c[e + 20 >> 2]););
                        if (0 < (0 | c[e + 80 >> 2]))
                            for (h = d + 1064 | 0, i = d + 1060 | 0, g = 0; c[(0 | c[i >> 2]) + (g << 2) >> 2] = (0 | c[h >> 2]) + (g << 6), g = g + 1 | 0, e = 0 | c[s >> 2], (0 | g) < (0 | c[e + 80 >> 2]););
                        if (1 & a[20 + (0 | c[d + 708 >> 2]) >> 0]) return Y = t, 0 | (s = d);
                        if ((0 | (m = 0 | c[e + 16 >> 2])) <= 0) return Y = t, 0 | (s = d);
                        h = 0 | c[d + 1020 >> 2], i = 0 | c[d + 884 >> 2], j = 0 | c[d + 888 >> 2], g = 0;
                        do {
                            if (k = h + (c[i + (g << 2) >> 2] << 1) | 0, l = (s = 0 | c[j + (g << 2) >> 2]) + -1 | 0, 1 < (0 | s))
                                for (e = 0; r = 0 | b[(q = k + (e << 1) | 0) >> 1], s = k + (e + 2 << 1) | 0, b[q >> 1] = 0 | b[s >> 1], b[s >> 1] = r, (0 | (e = e + 3 | 0)) < (0 | l););
                            g = g + 1 | 0
                        } while ((0 | g) != (0 | m));
                        h = 0 | c[d + 1016 >> 2], i = 0 | c[d + 880 >> 2], j = 0 | c[d + 876 >> 2], g = 0;
                        do {
                            if (k = (e = h + (c[i + (g << 2) >> 2] << 2) | 0) + ((s = 0 | c[j + (g << 2) >> 2]) << 1 << 2) | 0, 0 < (0 | s))
                                for (e = e + 4 | 0; f[e >> 2] = 1 - +f[e >> 2], (e = e + 8 | 0) >>> 0 < k >>> 0;);
                            g = g + 1 | 0
                        } while ((0 | g) != (0 | m));
                        return Y = t, 0 | d
                    }

                    function ra(a, b) {
                        return b |= 0, Y = (b = Y) + 16 | 0, 0 | ec(a |= 0, 1128, 4) ? (ma(4, 1305, b), Y = b, (a = 0) | a) : (a = 0 | d[a + 4 >> 0], Y = b, 0 | a)
                    }

                    function za(a) {
                        var d, b = 0;
                        return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | function (a) {
                            var b, d, e;
                            return a |= 0, Y = (d = Y) + 320 | 0, b = (e = d) + 308 | 0, uc(0 | e, 0, 308), oa(a + 704 | 0, e, b), Y = d, 0 | c[b >> 2]
                        }(a), Y = d, 0 | b) : (c[b >> 2] = 1610, c[b + 4 >> 2] = 1628, ma(4, 1364, b), Y = d, (b = 0) | b)
                    }

                    function Aa(a, b, d) {
                        b |= 0, d |= 0;
                        var e, g, i, f = 0,
                            h = 0;
                        return Y = (i = Y) + 32 | 0, h = i + 24 | 0, g = i + 16 | 0, f = i + 8 | 0, e = i, (a |= 0) ? b ? ((f = b) + 15 & -16 | 0) != (0 | f) ? (c[g >> 2] = 1646, c[4 + g >> 2] = 1437, ma(4, 1364, g), Y = i, (h = 0) | h) : (a = 0 | pa(a, b, d)) ? (Y = i, 0 | (h = a)) : (c[h >> 2] = 1646, c[h + 4 >> 2] = 1672, ma(4, 1364, h), Y = i, (h = 0) | h) : (c[f >> 2] = 1646, c[f + 4 >> 2] = 1398, ma(4, 1364, f), Y = i, (h = 0) | h) : (c[e >> 2] = 1646, c[e + 4 >> 2] = 1628, ma(4, 1364, e), Y = i, (h = 0) | h)
                    }

                    function ab(a, b) {
                        b |= 0;
                        var c = 0;
                        if (c = +v(+ +f[(a |= 0) + 4 >> 2], + +f[a >> 2]), (c -= +v(+ +f[b + 4 >> 2], + +f[b >> 2])) < -3.1415927410125732)
                            for (;
                                (c += 6.2831854820251465) < -3.1415927410125732;);
                        if (!(3.1415927410125732 < c)) return +c;
                        for (; 3.1415927410125732 < (c += -6.2831854820251465););
                        return +c
                    }

                    function cb(b, c) {
                        var d = 0;
                        if (!((c = (b |= 0) + (c |= 0) + -1 | 0) >>> 0 <= b >>> 0))
                            for (; d = 0 | a[b >> 0], a[b >> 0] = 0 | a[c >> 0], b = b + 1 | 0, a[c >> 0] = d, b >>> 0 < (c = c + -1 | 0) >>> 0;);
                    }

                    function db(b, c, d) {
                        b |= 0, c |= 0;
                        var e = 0,
                            f = 0,
                            g = 0;
                        if (d |= 0)
                            do {
                                if (d = d + -1 | 0, (e = b) >>> 0 < (f = (b = b + c | 0) + -1 | 0) >>> 0)
                                    for (; g = 0 | a[e >> 0], a[e >> 0] = 0 | a[f >> 0], e = e + 1 | 0, a[f >> 0] = g, e >>> 0 < (f = f + -1 | 0) >>> 0;);
                            } while (0 != (0 | d))
                    }

                    function pb(a) {
                        var m, b = 0,
                            d = 0,
                            g = 0,
                            h = 0,
                            i = 0,
                            j = 0,
                            k = 0,
                            l = 0,
                            n = 0,
                            o = 0,
                            p = 0,
                            q = 0,
                            r = 0,
                            s = 0,
                            t = 0,
                            u = 0,
                            v = 0,
                            w = 0;
                        if (m = (b = 0 | c[(a |= 0) + 344 >> 2]) + (24 * (l = 0 | c[a + 340 >> 2]) | 0) | 0, !((0 | l) <= 0)) {
                            l = 0 | c[a + 272 >> 2];
                            do {
                                if (d = 0 | c[b + 8 >> 2], g = 0 | c[l + (c[b >> 2] << 2) >> 2], h = 0 | c[l + (c[b + 4 >> 2] << 2) >> 2], i = 0 | c[b + 12 >> 2], j = 0 | c[b + 16 >> 2], k = +f[b + 20 >> 2], 0 < (0 | d))
                                    for (a = 0; n = 1 | a, v = +f[i + (a << 2) >> 2], q = +f[i + (n << 2) >> 2], u = (0 | e[j + (a << 1) >> 1]) << 1 & 65534, t = +f[(w = g + (u << 2) | 0) >> 2], p = +f[(u = g + ((1 | u) << 2) | 0) >> 2], n = (0 | e[j + (n << 1) >> 1]) << 1 & 65534, s = +f[(r = h + (n << 2) | 0) >> 2], o = +f[(n = h + ((1 | n) << 2) | 0) >> 2], f[w >> 2] = t + k * (v * (s - t)), f[u >> 2] = p + k * (v * (o - p)), f[r >> 2] = s + k * (q * (t - s)), f[n >> 2] = o + k * (q * (p - o)), (0 | (a = a + 2 | 0)) < (0 | d););
                                b = b + 24 | 0
                            } while (b >>> 0 < m >>> 0)
                        }
                    }

                    function rb(b) {
                        var X, Z, sa, d = 0,
                            e = 0,
                            g = 0,
                            h = 0,
                            i = 0,
                            j = 0,
                            k = 0,
                            l = 0,
                            m = 0,
                            n = 0,
                            o = 0,
                            p = 0,
                            q = 0,
                            s = 0,
                            t = 0,
                            u = 0,
                            v = 0,
                            x = 0,
                            y = 0,
                            z = 0,
                            A = 0,
                            B = 0,
                            C = 0,
                            D = 0,
                            E = 0,
                            F = 0,
                            G = 0,
                            H = 0,
                            I = 0,
                            J = 0,
                            K = 0,
                            L = 0,
                            M = 0,
                            N = 0,
                            O = 0,
                            P = 0,
                            Q = 0,
                            R = 0,
                            S = 0,
                            T = 0,
                            U = 0,
                            V = 0,
                            W = 0,
                            _ = 0,
                            $ = 0,
                            aa = 0,
                            ba = 0,
                            ca = 0,
                            da = 0,
                            ea = 0,
                            fa = 0,
                            ia = 0,
                            ja = 0,
                            ka = 0,
                            la = 0,
                            na = 0,
                            oa = 0,
                            pa = 0,
                            qa = 0,
                            ra = 0,
                            ta = 0;
                        if (Y = (sa = Y) + 16 | 0, I = sa, 0 | c[(ra = (b |= 0) + 256 | 0) >> 2] && (ba = c[b + 200 >> 2] << 2, tc(0 | c[b + 280 >> 2], 0 | c[b + 264 >> 2], 0 | ba), tc(0 | c[b + 284 >> 2], 0 | c[b + 268 >> 2], 0 | ba), tc(0 | c[b + 288 >> 2], 0 | c[b + 276 >> 2], 0 | ba)), i = 0 | c[b + 292 >> 2], o = (k = 0 | c[b + 296 >> 2]) + (40 * i | 0) | 0, i = 0 < (0 | i)) {
                            for (g = 0 | c[b + 300 >> 2], h = k; q = +f[g >> 2], q = (j = 0 == (0 | c[h + 12 >> 2])) ? (T = +f[h >> 2], U = +f[h + 4 >> 2], q < T ? T : U < q ? U : q) : (U = +f[h + 8 >> 2], (T = +f[h >> 2]) + U * ((q = (q - T) / U) - +(0 | ~~+r(+q)))), e = h + 36 | 0, +f[(d = h + 32 | 0) >> 2] != q ? (c[e >> 2] = 1, f[d >> 2] = q) : c[e >> 2] = 0, j && (f[g >> 2] = q), !(o >>> 0 <= (h = h + 40 | 0) >>> 0);) g = g + 4 | 0;
                            if (i) {
                                m = 0 | c[b + 308 >> 2], n = 0 == (0 | c[b + 376 >> 2]);
                                do {
                                    S = +f[k + 32 >> 2], T = +f[k + 16 >> 2], U = +f[k + 20 >> 2], l = (d = m + (28 * (0 | c[k + 24 >> 2]) | 0) | 0) + (28 * (ba = 0 | c[k + 28 >> 2]) | 0) | 0;
                                    a: do {
                                        if (0 < (0 | ba)) {
                                            if (!n)
                                                for (;;) {
                                                    i = 0 | c[d >> 2];
                                                    do {
                                                        if (1 <= (0 | i)) {
                                                            if (g = 0 | c[d + 4 >> 2], q = (A = +f[g >> 2]) - T, 1 == (0 | i)) {
                                                                h = !(S < T + A) | !(q < S), q = e = 0, fa = 53;
                                                                break
                                                            }
                                                            if (S < q) {
                                                                h = 1, g = d + 16 | (e = q = 0), fa = 55;
                                                                break
                                                            }
                                                            if (S < T + A) q = e = h = 0, fa = 53;
                                                            else {
                                                                for (e = 1; !(S < T + (q = +f[g + (e << 2) >> 2]));) {
                                                                    if (!((0 | (e = e + 1 | 0)) < (0 | i))) {
                                                                        fa = 52;
                                                                        break
                                                                    }
                                                                    A = q
                                                                }
                                                                if (52 == (0 | fa)) {
                                                                    e = i + -(h = 1) | (q = 0), g = d + 16 | 0, fa = 55;
                                                                    break
                                                                }
                                                                fa = (q = q - T < S ? h = 0 : (e = e + -1 | 0, (q -= A) < U ? h = 0 : (h = 0, (S - A) / q)), 53)
                                                            }
                                                        } else q = e = h = 0, fa = 53
                                                    } while (0);
                                                    if (53 == (0 | fa) && (h | (fa = 0) == (0 | c[(g = d + 16 | 0) >> 2]) ? (h &= 1, fa = 55) : (c[d + 24 >> 2] = 1, c[d + 20 >> 2] = 1, i = d + 12 | (h = 0), j = d + 8 | 0)), 55 == (0 | fa) && (aa = (A = +f[(i = d + 12 | (fa = 0)) >> 2]) != q, ba = 1 & ((0 | c[(j = d + 8 | 0) >> 2]) != (0 | e) | aa & (0 == q | 0 == A)), c[d + 24 >> 2] = 1 & aa, c[d + 20 >> 2] = ba), f[i >> 2] = q, c[j >> 2] = e, c[g >> 2] = h, l >>> 0 <= (d = d + 28 | 0) >>> 0) break a
                                                }
                                            if (!(0 | c[k + 36 >> 2]))
                                                for (;;)
                                                    if (c[d + 24 >> 2] = 0, l >>> (c[d + 20 >> 2] = 0) <= (d = d + 28 | 0) >>> 0) break a;
                                            do {
                                                i = 0 | c[d >> 2];
                                                do {
                                                    if (1 <= (0 | i)) {
                                                        if (g = 0 | c[d + 4 >> 2], q = (A = +f[g >> 2]) - T, 1 == (0 | i)) {
                                                            h = !(S < T + A) | !(q < S), q = e = 0, fa = 36;
                                                            break
                                                        }
                                                        if (S < q) {
                                                            h = 1, g = d + 16 | (e = q = 0), fa = 38;
                                                            break
                                                        }
                                                        if (S < T + A) q = e = h = 0, fa = 36;
                                                        else {
                                                            for (e = 1; !(S < T + (q = +f[g + (e << 2) >> 2]));) {
                                                                if (!((0 | (e = e + 1 | 0)) < (0 | i))) {
                                                                    fa = 33;
                                                                    break
                                                                }
                                                                A = q
                                                            }
                                                            if (33 == (0 | fa)) {
                                                                e = i + -(h = 1) | (q = 0), g = d + 16 | 0, fa = 38;
                                                                break
                                                            }
                                                            fa = (q = q - T < S ? h = 0 : (e = e + -1 | 0, (q -= A) < U ? h = 0 : (h = 0, (S - A) / q)), 36)
                                                        }
                                                    } else q = e = h = 0, fa = 36
                                                } while (0);
                                                36 == (0 | fa) && (h | (fa = 0) == (0 | c[(g = d + 16 | 0) >> 2]) ? (h &= 1, fa = 38) : (c[d + 24 >> 2] = 1, c[d + 20 >> 2] = 1, i = d + 12 | (h = 0), j = d + 8 | 0)), 38 == (0 | fa) && (aa = (A = +f[(i = d + 12 | (fa = 0)) >> 2]) != q, ba = 1 & ((0 | c[(j = d + 8 | 0) >> 2]) != (0 | e) | aa & (0 == q | 0 == A)), c[d + 24 >> 2] = 1 & aa, c[d + 20 >> 2] = ba), f[i >> 2] = q, c[j >> 2] = e, c[g >> 2] = h, d = d + 28 | 0
                                            } while (d >>> 0 < l >>> 0)
                                        }
                                    } while (0);
                                    k = k + 40 | 0
                                } while (k >>> 0 < o >>> 0)
                            }
                        }
                        if (u = (d = 0 | c[(ba = b + 316 | 0) >> 2]) + (36 * (aa = 0 | c[b + 312 >> 2]) | 0) | 0, 0 < (0 | aa)) {
                            t = b + 308 | 0, v = 0 == (0 | c[b + 376 >> 2]);
                            do {
                                p = 0 | c[t >> 2], s = (m = 0 | c[d + 12 >> 2]) + ((k = 0 | c[d >> 2]) << 2) | 0;
                                b: do {
                                    if (0 < (0 | k))
                                        for (j = m, e = g = h = 0;;) {
                                            if (i = 0 | c[j >> 2], 0 | c[p + (28 * i | 0) + 16 >> 2]) {
                                                h = 1, e = g = 0;
                                                break b
                                            }
                                            if (h = h || 0 | c[p + (28 * i | 0) + 24 >> 2], e = e || 0 | c[p + (28 * i | 0) + 20 >> 2], g = g + (0 != +f[p + (28 * i | 0) + 12 >> 2] & 1) | 0, s >>> 0 <= (j = j + 4 | 0) >>> 0) {
                                                j = g, fa = 68;
                                                break
                                            }
                                        } else e = j = h = 0, fa = 68
                                } while (0);
                                c: do {
                                    if (68 == (0 | fa))
                                        if (g = v ? e : 1, (fa = 0) != ((e = v ? h : 1) | g | 0) && (x = 1 << j, c[d + 8 >> 2] = x, y = 0 | c[d + 16 >> 2], z = 0 | c[d + 20 >> 2], B = y + (x << 2) | 0, 31 != (0 | j))) {
                                            for (uc(0 | y, 0, ((i = y + 4 | 0) >>> 0 < B >>> 0 ? B : i) + ~y + 4 & -4 | 0), i = z + (x << 2) | 0, h = z; f[h >> 2] = 1, (h = h + 4 | 0) >>> 0 < i >>> 0;);
                                            if (1 <= (0 | k)) {
                                                if (!j)
                                                    for (i = m, j = 1;;) {
                                                        if (k = 0 | c[i >> 2], q = +f[p + (28 * k | 0) + 12 >> 2], l = 0 | w(0 | c[p + (28 * k | 0) + 8 >> 2], j), 0 == q)
                                                            for (h = 0; c[(aa = y + (h << 2) | 0) >> 2] = (0 | c[aa >> 2]) + l, (0 | (h = h + 1 | 0)) != (0 | x););
                                                        else c[y >> 2] = (0 | c[y >> 2]) + l, f[z >> 2] = (1 - q) * +f[z >> 2];
                                                        if (i = i + 4 | 0, j = 0 | w(0 | c[p + (28 * k | 0) >> 2], j), s >>> 0 <= i >>> 0) {
                                                            h = 0;
                                                            break c
                                                        }
                                                    }
                                                h = n = 1;
                                                do {
                                                    if (o = 0 | c[m >> 2], q = +f[(k = p + (28 * o | 0) + 12 | 0) >> 2], i = 0 | c[p + (28 * o | 0) + 8 >> 2], l = 0 | w(i, n), 0 == q)
                                                        for (i = 0; c[(aa = y + (i << 2) | 0) >> 2] = (0 | c[aa >> 2]) + l, (0 | (i = i + 1 | 0)) != (0 | x););
                                                    else {
                                                        for (j = 0 | w(i + 1 | 0, n), c[y >> 2] = (0 | c[y >> 2]) + l, f[z >> 2] = (1 - q) * +f[z >> 2], i = 1; U = +f[k >> 2], $ = 0 != (i & h | 0), c[(aa = y + (i << 2) | 0) >> 2] = ($ ? j : l) + (0 | c[aa >> 2]), f[(aa = z + (i << 2) | 0) >> 2] = ($ ? U : 1 - U) * +f[aa >> 2], (0 | (i = i + 1 | 0)) != (0 | x););
                                                        h <<= 1
                                                    }
                                                    m = m + 4 | 0, n = 0 | w(0 | c[p + (28 * o | 0) >> 2], n)
                                                } while (m >>> 0 < s >>> 0);
                                                h = 0
                                            } else h = 0
                                        } else h = 0
                                } while (0);
                                c[d + 28 >> 2] = e, c[d + 24 >> 2] = g, c[d + 32 >> 2] = h, d = d + 36 | 0
                            } while (d >>> 0 < u >>> 0)
                        }
                        if (g = 0 | c[($ = b + 4 | 0) >> 2], e = (d = 0 | c[(aa = b + 52 | 0) >> 2]) + (g << 2) | 0, i = 0 < (0 | g)) {
                            for (; U = +f[d >> 2], f[d >> 2] = U < 0 ? 0 : 1 < U ? 1 : U, (d = d + 4 | 0) >>> 0 < e >>> 0;);
                            if (k = (h = 0 | c[(e = b + 8 | 0) >> 2]) + (g << 3) | 0, v = 0 | c[ba >> 2], l = 0 | c[(d = b + 36 | 0) >> 2], i) {
                                for (g = 0 | c[b + 40 >> 2], i = l;;) {
                                    do {
                                        if (0 | c[h + 4 >> 2]) {
                                            if (-1 != (0 | (_ = 0 | c[h >> 2])) && 0 == (0 | c[l + (_ << 2) >> 2])) {
                                                j = 0;
                                                break
                                            }
                                            j = 0 == (0 | c[v + (36 * (0 | c[g >> 2]) | 0) + 32 >> 2])
                                        } else j = 0
                                    } while (0);
                                    if (c[i >> 2] = 1 & j, k >>> 0 <= (h = h + 8 | 0) >>> 0) break;
                                    g = g + 4 | 0, i = i + 4 | 0
                                }
                                if (o = 0 | c[$ >> 2], g = 0 | c[b >> 2], p = 0 | c[g + 724 >> 2], 0 < (0 | o))
                                    for (s = b + 16 | 0, t = b + 28 | 0, u = b + 20 | 0, m = g + 936 | 0, j = 0 | c[b + 40 >> 2], l = k = 0;;) {
                                        if (n = 0 | c[j >> 2], (0 != (0 | c[(g = v + (36 * n | 0) + 24 | 0) >> 2]) || 0 | c[v + (36 * n | 0) + 28 >> 2]) && (fa = 105), 105 == (0 | fa) && (C = v + (36 * n | (fa = 0)) + 8 | 0, c[(0 | c[s >> 2]) + (l << 2) >> 2] = c[C >> 2], 0 | c[g >> 2]) && (D = 0 | c[p + (l << 2) >> 2], F = (E = 0 | c[v + (36 * n | 0) + 16 >> 2]) + ((_ = 0 | c[C >> 2]) << 2) | 0, 0 < (0 | _)))
                                            for (i = 0 | c[m >> 2], g = (0 | c[t >> 2]) + (k << 2) | 0, h = E; c[g >> 2] = c[i + ((0 | c[h >> 2]) + D << 2) >> 2], !(F >>> 0 <= (h = h + 4 | 0) >>> 0);) g = g + 4 | 0;
                                        if (0 | c[v + (36 * n | 0) + 28 >> 2] && (H = (G = 0 | c[v + (36 * n | 0) + 20 >> 2]) + ((_ = 0 | c[v + (36 * n | 0) + 8 >> 2]) << 2) | 0, 0 < (0 | _)))
                                            for (g = G, h = (0 | c[u >> 2]) + (k << 2) | 0; c[h >> 2] = c[g >> 2], !(H >>> 0 <= (g = g + 4 | 0) >>> 0);) h = h + 4 | 0;
                                        if ((0 | (l = l + 1 | 0)) == (0 | o)) {
                                            _ = d, V = b, W = e;
                                            break
                                        }
                                        j = j + 4 | 0, k = (0 | c[v + (36 * n | 0) + 4 >> 2]) + k | 0
                                    } else _ = d, V = b, W = e
                            } else fa = 100
                        } else d = b + 36 | 0, e = b + 8 | 0, fa = 100;
                        if (100 == (0 | fa) && (_ = d, V = b, W = e), function (a) {
                                var k, l, m, n, b = 0,
                                    d = 0,
                                    e = 0,
                                    g = 0,
                                    h = 0,
                                    i = 0,
                                    j = 0;
                                if (n = 0 | c[(a |= 0) + 4 >> 2], j = 0 | c[a + 36 >> 2], 0 < (0 | (g = 0 | c[a + 24 >> 2])))
                                    for (h = 0 | c[a + 28 >> 2], d = 0 | c[a + 20 >> 2], e = 0 | c[a + 32 >> 2], b = 0; f[e + (b << 2) >> 2] = +f[h + (b << 2) >> 2] * +f[d + (b << 2) >> 2], (0 | (b = b + 1 | 0)) != (0 | g););
                                if (!((0 | n) <= 0))
                                    for (k = 0 | c[a + 12 >> 2], l = a + 16 | 0, m = a + 44 | 0, a = a + 32 | 0, g = h = 0;;) {
                                        if (0 | c[j >> 2]) {
                                            if (d = (e = 0 | c[(0 | c[l >> 2]) + (h << 2) >> 2]) + g | 0, 0 < (0 | e))
                                                for (e = 0 | c[a >> 2], i = 0, b = g; i += +f[e + (b << 2) >> 2], (0 | (b = b + 1 | 0)) < (0 | d););
                                            else i = 0;
                                            c[(0 | c[m >> 2]) + (h << 2) >> 2] = ~~(i + .0010000000474974513)
                                        }
                                        if (g = (0 | c[k + (h << 2) >> 2]) + g | 0, (0 | (h = h + 1 | 0)) == (0 | n)) break;
                                        j = j + 4 | 0
                                    }
                            }(b), i = (d = 0 | c[(Z = b + 60 | 0) >> 2]) + ((R = 0 | c[b + 56 >> 2]) << 5) | 0, j = 0 | c[ba >> 2], k = 0 | c[_ >> 2], l = 0 | c[(X = b + 168 | 0) >> 2], m = 0 | c[b + 172 >> 2], n = 0 | c[b + 176 >> 2], 0 < (0 | R)) {
                            for (g = 0 | c[b + 180 >> 2], h = l;;) {
                                do {
                                    if (0 | c[d + 28 >> 2]) {
                                        if (-1 != (0 | (R = 0 | c[d >> 2])) && 0 == (0 | c[k + (R << 2) >> 2])) {
                                            e = 0;
                                            break
                                        }
                                        if (-1 != (0 | (R = 0 | c[d + 4 >> 2])) && 0 == (0 | c[l + (R << 2) >> 2])) {
                                            e = 0;
                                            break
                                        }
                                        e = 0 == (0 | c[j + (36 * (0 | c[g >> 2]) | 0) + 32 >> 2])
                                    } else e = 0
                                } while (0);
                                switch (e &= 1, c[h >> 2] = e, 0 | c[d + 8 >> 2]) {
                                    case 0:
                                        c[m + (c[d + 12 >> 2] << 2) >> 2] = e;
                                        break;
                                    case 1:
                                        c[n + (c[d + 12 >> 2] << 2) >> 2] = e;
                                        break;
                                    default:
                                        ma(4, 2466, I)
                                }
                                if (i >>> 0 <= (d = d + 32 | 0) >>> 0) break;
                                g = g + 4 | 0, h = h + 4 | 0
                            }
                            j = 0 | c[ba >> 2]
                        }
                        if (d = 0 | c[V >> 2], n = 0 | c[d + 784 >> 2], o = 0 | c[b + 64 >> 2], p = 0 | c[d + 988 >> 2], 0 < (0 | o)) {
                            for (s = b + 84 | 0, t = b + 100 | 0, u = b + 96 | 0, v = b + 88 | 0, x = d + 944 | 0, l = d + 940 | 0, k = (i = h = 0) | c[b + 184 >> 2];;) {
                                if (m = 0 | c[k >> 2], (0 != (0 | c[(d = j + (36 * m | 0) + 24 | 0) >> 2]) || 0 | c[j + (36 * m | 0) + 28 >> 2]) && (fa = 132), 132 == (0 | fa) && (J = j + (36 * m | (fa = 0)) + 8 | 0, c[(0 | c[s >> 2]) + (i << 2) >> 2] = c[J >> 2], 0 | c[d >> 2]) && (K = 0 | c[n + (i << 2) >> 2], M = (L = 0 | c[j + (36 * m | 0) + 16 >> 2]) + ((R = 0 | c[J >> 2]) << 2) | 0, 0 < (0 | R)))
                                    for (d = L, e = (0 | c[u >> 2]) + (h << 2) | 0, g = (0 | c[t >> 2]) + (h << 2) | 0; R = (0 | c[d >> 2]) + K | 0, c[g >> 2] = p + (c[(0 | c[x >> 2]) + (R << 2) >> 2] << 2), c[e >> 2] = c[(0 | c[l >> 2]) + (R << 2) >> 2], !(M >>> 0 <= (d = d + 4 | 0) >>> 0);) e = e + 4 | 0, g = g + 4 | 0;
                                if (0 | c[j + (36 * m | 0) + 28 >> 2] && (O = (N = 0 | c[j + (36 * m | 0) + 20 >> 2]) + ((R = 0 | c[j + (36 * m | 0) + 8 >> 2]) << 2) | 0, 0 < (0 | R)))
                                    for (d = N, e = (0 | c[v >> 2]) + (h << 2) | 0; c[e >> 2] = c[d >> 2], !(O >>> 0 <= (d = d + 4 | 0) >>> 0);) e = e + 4 | 0;
                                if ((0 | (i = i + 1 | 0)) == (0 | o)) break;
                                h = (0 | c[j + (36 * m | 0) + 4 >> 2]) + h | 0, k = k + 4 | 0
                            }
                            d = 0 | c[V >> 2], j = 0 | c[ba >> 2]
                        }
                        if (C = 0 | c[d + 808 >> 2], D = 0 | c[b + 72 >> 2], E = 0 | c[b + 76 >> 2], 0 < (0 | D))
                            for (F = b + 116 | 0, G = b + 132 | 0, H = b + 136 | 0, I = b + 140 | 0, J = b + 144 | 0, K = b + 128 | 0, L = b + 120 | 0, M = d + 952 | 0, N = d + 956 | 0, O = d + 960 | 0, P = d + 964 | 0, Q = d + 948 | 0, R = d + 968 | 0, z = d + 972 | 0, v = 0 | c[b + 188 >> 2], y = x = 0;;) {
                                if (B = 0 | c[v >> 2], (0 != (0 | c[(d = j + (36 * B | 0) + 24 | 0) >> 2]) || 0 | c[j + (36 * B | 0) + 28 >> 2]) && (fa = 146), 146 == (0 | fa) && (ca = j + (36 * B | (fa = 0)) + 8 | 0, c[(0 | c[F >> 2]) + (y << 2) >> 2] = c[ca >> 2], 0 | c[d >> 2])) {
                                    if (l = 0 | c[C + (y << 2) >> 2], n = (m = 0 | c[j + (36 * B | 0) + 16 >> 2]) + ((u = 0 | c[ca >> 2]) << 2) | 0, 0 < (0 | u))
                                        for (o = 0 | c[M >> 2], p = 0 | c[N >> 2], s = 0 | c[O >> 2], t = 0 | c[P >> 2], u = 0 | c[Q >> 2], d = (0 | c[K >> 2]) + (x << 2) | 0, e = (0 | c[J >> 2]) + (x << 2) | 0, g = (0 | c[I >> 2]) + (x << 2) | 0, h = (0 | c[H >> 2]) + (x << 2) | 0, i = (0 | c[G >> 2]) + (x << 2) | 0, k = m; ta = (0 | c[k >> 2]) + l | 0, c[i >> 2] = c[o + (ta << 2) >> 2], c[h >> 2] = c[p + (ta << 2) >> 2], c[g >> 2] = c[s + (ta << 2) >> 2], c[e >> 2] = c[t + (ta << 2) >> 2], c[d >> 2] = c[u + (ta << 2) >> 2], !(n >>> 0 <= (k = k + 4 | 0) >>> 0);) d = d + 4 | 0, e = e + 4 | 0, g = g + 4 | 0, h = h + 4 | 0, i = i + 4 | 0;
                                    ta = (0 | c[m >> 2]) + l | 0, c[E + (y << 5) + 24 >> 2] = c[(0 | c[R >> 2]) + (ta << 2) >> 2], c[E + (y << 5) + 28 >> 2] = c[(0 | c[z >> 2]) + (ta << 2) >> 2]
                                }
                                if (0 | c[j + (36 * B | 0) + 28 >> 2] && (ea = (da = 0 | c[j + (36 * B | 0) + 20 >> 2]) + ((ta = 0 | c[j + (36 * B | 0) + 8 >> 2]) << 2) | 0, 0 < (0 | ta)))
                                    for (d = da, e = (0 | c[L >> 2]) + (x << 2) | 0; c[e >> 2] = c[d >> 2], !(ea >>> 0 <= (d = d + 4 | 0) >>> 0);) e = e + 4 | 0;
                                if ((0 | (y = y + 1 | 0)) == (0 | D)) break;
                                v = v + 4 | 0, x = (0 | c[j + (36 * B | 0) + 4 >> 2]) + x | 0
                            }
                        if (function (a) {
                                var q, r, s, t, u, v, w, x, b = 0,
                                    d = 0,
                                    e = 0,
                                    g = 0,
                                    h = 0,
                                    i = 0,
                                    j = 0,
                                    k = 0,
                                    l = 0,
                                    m = 0,
                                    n = 0,
                                    o = 0,
                                    p = 0;
                                if (w = 0 | c[(a |= 0) + 68 >> 2], x = 0 | c[a + 64 >> 2], j = 0 | c[a + 172 >> 2], 0 < (0 | (h = 0 | c[a + 92 >> 2])))
                                    for (d = 0 | c[a + 96 >> 2], e = 0 | c[a + 88 >> 2], g = 0 | c[a + 104 >> 2], b = 0; f[g + (b << 2) >> 2] = +f[d + (b << 2) >> 2] * +f[e + (b << 2) >> 2], (0 | (b = b + 1 | 0)) != (0 | h););
                                if (!((0 | x) <= 0))
                                    for (r = 0 | c[a + 80 >> 2], s = a + 84 | 0, t = a + 104 | 0, u = a + 100 | 0, v = a + 88 | 0, q = a + 108 | 0, n = p = 0;;) {
                                        if (0 | c[j >> 2]) {
                                            if (o = (e = 0 | c[(0 | c[s >> 2]) + (p << 2) >> 2]) + n | 0, e = 0 < (0 | e))
                                                for (d = 0 | c[t >> 2], b = n, i = 0; i += +f[d + (b << 2) >> 2], (0 | (b = b + 1 | 0)) < (0 | o););
                                            else i = 0;
                                            if (f[w + (24 * p | 0) + 16 >> 2] = i, m = (b = 0 | c[w + (24 * p | 0) + 12 >> 2]) << 1, (b = 0 < (0 | b)) && uc(0 | c[w + (24 * p | 0) + 20 >> 2], 0, (1 < (0 | m) ? m : 1) << 2 | 0), e & b) {
                                                h = 0 | c[u >> 2], a = 0 | c[v >> 2], k = 0 | c[q >> 2], l = 0 | c[w + (24 * p | 0) + 20 >> 2], g = n;
                                                do {
                                                    for (d = 0 | c[h + (g << 2) >> 2], e = a + (g << 2) | 0, b = 0; f[k + (b << 2) >> 2] = +f[d + (b << 2) >> 2] * +f[e >> 2], (0 | (b = b + 1 | 0)) < (0 | m););
                                                    for (b = 0; f[(e = l + (b << 2) | 0) >> 2] = +f[k + (b << 2) >> 2] + +f[e >> 2], (0 | (b = b + 1 | 0)) < (0 | m););
                                                    g = g + 1 | 0
                                                } while ((0 | g) < (0 | o))
                                            }
                                        }
                                        if (n = (0 | c[r + (p << 2) >> 2]) + n | 0, (0 | (p = p + 1 | 0)) == (0 | x)) break;
                                        j = j + 4 | 0
                                    }
                            }(b), function (a) {
                                var k, l, m, n, o, p, q, r, s, t, b = 0,
                                    d = 0,
                                    e = 0,
                                    g = 0,
                                    h = 0,
                                    i = 0,
                                    j = 0,
                                    u = 0;
                                if (s = 0 | c[(a |= 0) + 76 >> 2], t = 0 | c[a + 72 >> 2], r = 0 | c[a + 176 >> 2], i = 0 < (0 | (j = 0 | c[a + 124 >> 2]))) {
                                    for (d = 0 | c[a + 128 >> 2], e = 0 | c[a + 120 >> 2], g = 0 | c[a + 148 >> 2], b = 0; f[g + (b << 2) >> 2] = +f[d + (b << 2) >> 2] * +f[e + (b << 2) >> 2], (0 | (b = b + 1 | 0)) != (0 | j););
                                    if (i) {
                                        for (d = 0 | c[a + 132 >> 2], e = 0 | c[a + 120 >> 2], g = 0 | c[a + 152 >> 2], b = 0; f[g + (b << 2) >> 2] = +f[d + (b << 2) >> 2] * +f[e + (b << 2) >> 2], (0 | (b = b + 1 | 0)) != (0 | j););
                                        if (i) {
                                            for (d = 0 | c[a + 136 >> 2], e = 0 | c[a + 120 >> 2], g = 0 | c[a + 156 >> 2], b = 0; f[g + (b << 2) >> 2] = +f[d + (b << 2) >> 2] * +f[e + (b << 2) >> 2], (0 | (b = b + 1 | 0)) != (0 | j););
                                            if (i) {
                                                for (d = 0 | c[a + 140 >> 2], e = 0 | c[a + 120 >> 2], g = 0 | c[a + 160 >> 2], b = 0; f[g + (b << 2) >> 2] = +f[d + (b << 2) >> 2] * +f[e + (b << 2) >> 2], (0 | (b = b + 1 | 0)) != (0 | j););
                                                if (i)
                                                    for (d = 0 | c[a + 144 >> 2], e = 0 | c[a + 120 >> 2], g = 0 | c[a + 164 >> 2], b = 0; f[g + (b << 2) >> 2] = +f[d + (b << 2) >> 2] * +f[e + (b << 2) >> 2], (0 | (b = b + 1 | 0)) != (0 | j););
                                            }
                                        }
                                    }
                                }
                                if (!((0 | t) <= 0))
                                    for (l = 0 | c[a + 112 >> 2], m = a + 116 | 0, n = a + 148 | 0, o = a + 152 | 0, p = a + 156 | 0, q = a + 160 | 0, k = a + 164 | 0, i = r, j = a = 0;;) {
                                        if (0 | c[i >> 2]) {
                                            if (g = (e = 0 | c[(0 | c[m >> 2]) + (a << 2) >> 2]) + j | 0, e = 0 < (0 | e)) {
                                                for (d = 0 | c[n >> 2], b = j, h = 0; h += +f[d + (b << 2) >> 2], (0 | (b = b + 1 | 0)) < (0 | g););
                                                if (f[s + (a << 5) + 4 >> 2] = h, e) {
                                                    for (d = 0 | c[o >> 2], b = j, h = 0; h += +f[d + (b << 2) >> 2], (0 | (b = b + 1 | 0)) < (0 | g););
                                                    if (f[s + (a << 5) + 20 >> 2] = h, e) {
                                                        for (d = 0 | c[p >> 2], b = j, h = 0; h += +f[d + (b << 2) >> 2], (0 | (b = b + 1 | 0)) < (0 | g););
                                                        if (f[s + (a << 5) + 12 >> 2] = h, e) {
                                                            for (d = 0 | c[q >> 2], b = j, h = 0; h += +f[d + (b << 2) >> 2], (0 | (b = b + 1 | 0)) < (0 | g););
                                                            if (f[s + (a << 5) + 16 >> 2] = h, e)
                                                                for (d = 0 | c[k >> 2], h = 0, b = j; h += +f[d + (b << 2) >> 2], (0 | (b = b + 1 | 0)) < (0 | g););
                                                            else h = 0
                                                        } else u = 34
                                                    } else u = 30
                                                } else u = 26
                                            } else f[s + (a << 5) + 4 >> 2] = 0, u = 26;
                                            26 == (0 | u) && (f[s + (a << 5) + 20 >> 2] = 0, u = 30), 30 == (0 | u) && (f[s + (a << 5) + 12 >> 2] = 0, u = 34), 34 == (0 | u) && (u = 0, h = f[s + (a << 5) + 16 >> 2] = 0), f[s + (a << 5) + 8 >> 2] = h
                                        }
                                        if (j = (0 | c[l + (a << 2) >> 2]) + j | 0, (0 | (a = a + 1 | 0)) == (0 | t)) break;
                                        i = i + 4 | 0
                                    }
                            }(b), k = (d = 0 | c[(C = b + 204 | 0) >> 2]) + ((ta = 0 | c[(D = b + 200 | 0) >> 2]) << 4) | 0, B = 0 | c[ba >> 2], i = 0 | c[_ >> 2], j = 0 | c[X >> 2], 0 < (0 | ta)) {
                            for (e = 0 | c[b + 252 >> 2], g = 0 | c[b + 248 >> 2];;) {
                                do {
                                    if (0 | c[d + 8 >> 2]) {
                                        if (-1 != (0 | (ta = 0 | c[d >> 2])) && 0 == (0 | c[i + (ta << 2) >> 2])) {
                                            h = 0;
                                            break
                                        }
                                        if (-1 != (0 | (ta = 0 | c[d + 4 >> 2])) && 0 == (0 | c[j + (ta << 2) >> 2])) {
                                            h = 0;
                                            break
                                        }
                                        h = 0 == (0 | c[B + (36 * (0 | c[e >> 2]) | 0) + 32 >> 2])
                                    } else h = 0
                                } while (0);
                                if (c[g >> 2] = 1 & h, k >>> 0 <= (d = d + 16 | 0) >>> 0) break;
                                e = e + 4 | 0, g = g + 4 | 0
                            }
                            if (z = 0 | c[D >> 2], d = 0 | c[V >> 2], n = 0 | c[d + 844 >> 2], o = 0 | c[d + 988 >> 2], 0 < (0 | z))
                                for (p = b + 212 | 0, s = b + 232 | 0, t = b + 224 | 0, u = b + 228 | 0, v = b + 216 | 0, x = d + 984 | 0, y = d + 976 | 0, l = d + 980 | 0, i = 0 | c[b + 252 >> 2], k = j = 0;;) {
                                    if (m = 0 | c[i >> 2], (0 != (0 | c[(d = B + (36 * m | 0) + 24 | 0) >> 2]) || 0 | c[B + (36 * m | 0) + 28 >> 2]) && (fa = 169), 169 == (0 | fa) && (ia = B + (36 * m | (fa = 0)) + 8 | 0, c[(0 | c[p >> 2]) + (k << 2) >> 2] = c[ia >> 2], 0 | c[d >> 2]) && (ja = 0 | c[n + (k << 2) >> 2], la = (ka = 0 | c[B + (36 * m | 0) + 16 >> 2]) + ((ta = 0 | c[ia >> 2]) << 2) | 0, 0 < (0 | ta)))
                                        for (d = (0 | c[u >> 2]) + (j << 2) | 0, e = (0 | c[t >> 2]) + (j << 2) | 0, g = (0 | c[s >> 2]) + (j << 2) | 0, h = ka; ta = (0 | c[h >> 2]) + ja | 0, c[g >> 2] = o + (c[(0 | c[x >> 2]) + (ta << 2) >> 2] << 2), c[e >> 2] = c[(0 | c[y >> 2]) + (ta << 2) >> 2], c[d >> 2] = c[(0 | c[l >> 2]) + (ta << 2) >> 2], !(la >>> 0 <= (h = h + 4 | 0) >>> 0);) d = d + 4 | 0, e = e + 4 | 0, g = g + 4 | 0;
                                    if (0 | c[B + (36 * m | 0) + 28 >> 2] && (oa = (na = 0 | c[B + (36 * m | 0) + 20 >> 2]) + ((ta = 0 | c[B + (36 * m | 0) + 8 >> 2]) << 2) | 0, 0 < (0 | ta)))
                                        for (d = na, e = (0 | c[v >> 2]) + (j << 2) | 0; c[e >> 2] = c[d >> 2], !(oa >>> 0 <= (d = d + 4 | 0) >>> 0);) e = e + 4 | 0;
                                    if ((0 | (k = k + 1 | 0)) == (0 | z)) break;
                                    i = i + 4 | 0, j = (0 | c[B + (36 * m | 0) + 4 >> 2]) + j | 0
                                }
                        }
                        if (function (a) {
                                var q, r, s, t, u, v, w, x, y, z, A, B, b = 0,
                                    d = 0,
                                    e = 0,
                                    g = 0,
                                    h = 0,
                                    i = 0,
                                    j = 0,
                                    k = 0,
                                    l = 0,
                                    m = 0,
                                    n = 0,
                                    o = 0,
                                    p = 0;
                                if (A = 0 | c[(a |= 0) + 204 >> 2], B = 0 | c[a + 200 >> 2], k = 0 | c[a + 248 >> 2], h = 0 < (0 | (i = 0 | c[a + 220 >> 2]))) {
                                    for (d = 0 | c[a + 224 >> 2], e = 0 | c[a + 216 >> 2], g = 0 | c[a + 236 >> 2], b = 0; f[g + (b << 2) >> 2] = +f[d + (b << 2) >> 2] * +f[e + (b << 2) >> 2], (0 | (b = b + 1 | 0)) != (0 | i););
                                    if (h)
                                        for (d = 0 | c[a + 228 >> 2], e = 0 | c[a + 216 >> 2], g = 0 | c[a + 240 >> 2], b = 0; f[g + (b << 2) >> 2] = +f[d + (b << 2) >> 2] * +f[e + (b << 2) >> 2], (0 | (b = b + 1 | 0)) != (0 | i););
                                }
                                if (!((0 | B) <= 0))
                                    for (r = 0 | c[a + 208 >> 2], s = a + 212 | 0, t = a + 276 | 0, u = a + 236 | 0, v = a + 268 | 0, w = a + 272 | 0, x = a + 240 | 0, y = a + 232 | 0, z = a + 216 | 0, q = a + 244 | 0, n = p = 0;;) {
                                        if (0 | c[k >> 2]) {
                                            if (o = (e = 0 | c[(0 | c[s >> 2]) + (p << 2) >> 2]) + n | 0, e = 0 < (0 | e)) {
                                                for (d = 0 | c[u >> 2], b = n, j = 0; j += +f[d + (b << 2) >> 2], (0 | (b = b + 1 | 0)) < (0 | o););
                                                if (f[(0 | c[t >> 2]) + (p << 2) >> 2] = j, e)
                                                    for (d = 0 | c[x >> 2], b = n, j = 0; j += +f[d + (b << 2) >> 2], (0 | (b = b + 1 | 0)) < (0 | o););
                                                else j = 0
                                            } else j = f[(0 | c[t >> 2]) + (p << 2) >> 2] = 0;
                                            if (c[(0 | c[v >> 2]) + (p << 2) >> 2] = ~~(j + .0010000000474974513), l = (b = 0 | c[A + (p << 4) + 12 >> 2]) << 1, m = 0 | c[(0 | c[w >> 2]) + (p << 2) >> 2], (b = 0 < (0 | b)) && uc(0 | m, 0, (1 < (0 | l) ? l : 1) << 2 | 0), e & b) {
                                                h = 0 | c[y >> 2], i = 0 | c[z >> 2], a = 0 | c[q >> 2], g = n;
                                                do {
                                                    for (d = 0 | c[h + (g << 2) >> 2], e = i + (g << 2) | 0, b = 0; f[a + (b << 2) >> 2] = +f[d + (b << 2) >> 2] * +f[e >> 2], (0 | (b = b + 1 | 0)) < (0 | l););
                                                    for (b = 0; f[(e = m + (b << 2) | 0) >> 2] = +f[a + (b << 2) >> 2] + +f[e >> 2], (0 | (b = b + 1 | 0)) < (0 | l););
                                                    g = g + 1 | 0
                                                } while ((0 | g) < (0 | o))
                                            }
                                        }
                                        if (n = (0 | c[r + (p << 2) >> 2]) + n | 0, (0 | (p = p + 1 | 0)) == (0 | B)) break;
                                        k = k + 4 | 0
                                    }
                            }(b), function (a) {
                                var i, j, k, l, n, r, t, b = 0,
                                    d = 0,
                                    e = 0,
                                    f = 0,
                                    g = 0,
                                    h = 0,
                                    m = 0,
                                    o = 0,
                                    p = 0,
                                    q = 0,
                                    s = 0,
                                    u = 0;
                                if (b = 0 | c[(a |= 0) >> 2], n = 0 | c[a + 316 >> 2], r = 0 | c[b + 1072 >> 2], !((0 | (t = 0 | c[a + 340 >> 2])) <= 0))
                                    for (j = a + 352 | 0, k = a + 364 | 0, l = a + 356 | 0, i = b + 1104 | 0, e = 0 | c[a + 372 >> 2], g = f = 0;;) {
                                        if (h = 0 | c[e >> 2], (0 != (0 | c[(b = n + (36 * h | 0) + 24 | 0) >> 2]) || 0 | c[n + (36 * h | 0) + 28 >> 2]) && (u = 6), 6 == (0 | u) && (c[((u = 0) | c[j >> 2]) + (g << 2) >> 2] = c[n + (36 * h | 0) + 8 >> 2], 0 | c[b >> 2]) && (m = 0 | c[r + (g << 2) >> 2], p = (o = 0 | c[n + (36 * h | 0) + 16 >> 2]) + ((d = 0 | c[n + (36 * h | 0) + 8 >> 2]) << 2) | 0, 0 < (0 | d)))
                                            for (d = 0 | c[i >> 2], b = (0 | c[k >> 2]) + (f << 2) | 0, a = o; c[b >> 2] = c[d + ((0 | c[a >> 2]) + m << 2) >> 2], !(p >>> 0 <= (a = a + 4 | 0) >>> 0);) b = b + 4 | 0;
                                        if (0 | c[n + (36 * h | 0) + 28 >> 2] && (s = (q = 0 | c[n + (36 * h | 0) + 20 >> 2]) + ((d = 0 | c[n + (36 * h | 0) + 8 >> 2]) << 2) | 0, 0 < (0 | d)))
                                            for (b = q, a = (0 | c[l >> 2]) + (f << 2) | 0; c[a >> 2] = c[b >> 2], !(s >>> 0 <= (b = b + 4 | 0) >>> 0);) a = a + 4 | 0;
                                        if ((0 | (g = g + 1 | 0)) == (0 | t)) break;
                                        e = e + 4 | 0, f = (0 | c[n + (36 * h | 0) + 4 >> 2]) + f | 0
                                    }
                            }(b), function (a) {
                                var j, k, l, m, b = 0,
                                    d = 0,
                                    e = 0,
                                    g = 0,
                                    h = 0,
                                    i = 0;
                                if (m = 0 | c[(a |= 0) + 340 >> 2], 0 < (0 | (e = 0 | c[a + 360 >> 2])))
                                    for (g = 0 | c[a + 364 >> 2], h = 0 | c[a + 356 >> 2], d = 0 | c[a + 368 >> 2], b = 0; f[d + (b << 2) >> 2] = +f[g + (b << 2) >> 2] * +f[h + (b << 2) >> 2], (0 | (b = b + 1 | 0)) != (0 | e););
                                if (!((0 | m) <= 0)) {
                                    j = 0 | c[a + 352 >> 2], k = 0 | c[a + 344 >> 2], l = 0 | c[a + 348 >> 2], a = a + 368 | 0, h = g = 0;
                                    do {
                                        if (d = (e = 0 | c[j + (g << 2) >> 2]) + h | 0, 0 < (0 | e))
                                            for (e = 0 | c[a >> 2], i = 0, b = h; i += +f[e + (b << 2) >> 2], (0 | (b = b + 1 | 0)) < (0 | d););
                                        else i = 0;
                                        f[k + (24 * g | 0) + 20 >> 2] = i, h = (0 | c[l + (g << 2) >> 2]) + h | 0, g = g + 1 | 0
                                    } while ((0 | g) != (0 | m))
                                }
                            }(b), i = (d = 0 | c[W >> 2]) + ((ta = 0 | c[$ >> 2]) << 3) | 0, n = 0 | c[(j = b + 48 | 0) >> 2], 0 < (0 | ta))
                            for (e = 0 | c[aa >> 2], g = 0 | c[_ >> 2], h = n; 0 | c[g >> 2] && (pa = +f[e >> 2], f[h >> 2] = pa, -1 != (0 | (qa = 0 | c[d >> 2]))) && (f[h >> 2] = pa * +f[n + (qa << 2) >> 2]), !(i >>> 0 <= (d = d + 8 | 0) >>> 0);) e = e + 4 | 0, g = g + 4 | 0, h = h + 4 | 0;
                        if (0 < (0 | (i = 0 | c[(h = b + 56 | 0) >> 2]))) {
                            for (d = 0 | c[X >> 2], e = 0 | c[Z >> 2], g = 0; 0 | c[d >> 2] && ga[3 & c[e + 16 >> 2]](e, g, h), (0 | (g = g + 1 | 0)) != (0 | i);) d = d + 4 | 0, e = e + 32 | 0;
                            n = 0 | c[j >> 2]
                        }
                        if (l = (d = 0 | c[C >> 2]) + ((ta = 0 | c[D >> 2]) << 4) | 0, m = 0 | c[b + 192 >> 2], j = 0 | c[Z >> 2], 0 < (0 | ta))
                            for (g = 0 | c[(k = b + 248 | 0) >> 2], h = 0 | c[b + 276 >> 2], i = 0 | c[b + 272 >> 2]; 0 | c[g >> 2] && (-1 != (0 | (e = 0 | c[d >> 2])) && (f[h >> 2] = +f[n + (e << 2) >> 2] * +f[h >> 2]), -1 != (0 | (e = 0 | c[d + 4 >> 2])) && (f[h >> 2] = +f[m + (e << 2) >> 2] * +f[h >> 2], ta = 0 | c[i >> 2], ha[3 & c[j + (e << 5) + 20 >> 2]](0 | c[j + (e << 5) + 24 >> 2], ta, ta, 0 | c[d + 12 >> 2]))), !(l >>> 0 <= (d = d + 16 | 0) >>> 0);) g = g + 4 | 0, h = h + 4 | 0, i = i + 4 | 0;
                        else k = b + 248 | 0;
                        if (pb(b), function (a) {
                                var i, b = 0,
                                    d = 0,
                                    e = 0,
                                    g = 0,
                                    h = 0,
                                    j = 0;
                                if (!(0 | c[(a |= 0) + 380 >> 2] || (i = (b = 0 | c[a + 204 >> 2]) + ((e = 0 | c[a + 200 >> 2]) << 4) | 0, (0 | e) <= 0)))
                                    for (e = 0 | c[a + 248 >> 2], d = 0 | c[a + 272 >> 2], a = b;;) {
                                        if (0 | c[e >> 2] && (g = 0 | c[d >> 2], h = (b = 0 | c[a + 12 >> 2]) << 1, 0 < (0 | b)))
                                            for (b = 1; f[(j = g + (b << 2) | 0) >> 2] = - +f[j >> 2], (0 | (b = b + 2 | 0)) < (0 | h););
                                        if (i >>> 0 <= (a = a + 16 | 0) >>> 0) break;
                                        e = e + 4 | 0, d = d + 4 | 0
                                    }
                            }(b), z = 0 | c[b + 320 >> 2], n = (B = 0 | c[b + 324 >> 2]) + (28 * z | 0) | 0, g = 0 | c[(C = b + 268 | 0) >> 2], o = 0 | c[b + 44 >> 2], i = 0 | c[_ >> 2], e = 0 | c[k >> 2], 0 < (0 | z)) {
                            h = B;
                            do {
                                if (0 < (0 | (j = 0 | c[h + 4 >> 2])))
                                    for (l = 0 | c[h + 12 >> 2], m = h + 20 | 0, d = 0; ta = 0 | c[l + (d << 4) + 4 >> 2], qa = 1 == (0 | c[l + (d << 4) >> 2]), c[l + (d << 4) + 12 >> 2] = c[(0 == (0 | c[(qa ? i : e) + (ta << 2) >> 2]) ? m : (qa ? o : g) + (ta << 2) | 0) >> 2], (0 | (d = d + 1 | 0)) != (0 | j););
                                h = h + 28 | 0
                            } while (h >>> 0 < n >>> 0);
                            t = 0 | c[b + 264 >> 2], u = b + 328 | 0, v = b + 332 | 0, x = b + 336 | 0, s = 0;
                            do {
                                if (0 < (0 | c[(y = B + (28 * s | 0) + 24 | 0) >> 2])) {
                                    for (h = 0 | c[u >> 2], d = 0; c[h + (d << 2) >> 2] = -1, (0 | (d = d + 1 | 0)) < (0 | (i = 0 | c[y >> 2])););
                                    if (0 < (0 | i))
                                        for (h = 0 | c[x >> 2], d = 0; c[h + (d << 2) >> 2] = -1, (0 | (d = d + 1 | 0)) < (0 | c[y >> 2]););
                                }
                                if (0 < (0 | c[(o = B + (28 * s | 0) + 4 | 0) >> 2])) {
                                    for (p = 0 | c[v >> 2], d = 0; c[p + (d << 2) >> 2] = -1, (0 | (d = d + 1 | 0)) < (0 | (h = 0 | c[o >> 2])););
                                    if (0 < (0 | h))
                                        for (j = 0 | c[B + (28 * s | 0) + 12 >> 2], l = B + (28 * s | 0) + 20 | 0, m = 0 | c[x >> 2], i = 0; d = (0 | c[j + (i << 4) + 12 >> 2]) - (0 | c[l >> 2]) | 0, d = -1 == (0 | (h = 0 | c[(n = m + (d << 2) | 0) >> 2])) ? (0 | c[u >> 2]) + (d << 2) | 0 : p + (h << 2) | 0, c[d >> 2] = i, (0 | (i = (c[n >> 2] = i) + 1 | 0)) < (0 | c[o >> 2]););
                                }
                                if (0 < (0 | (d = 0 | c[y >> 2]))) {
                                    n = 0 | c[u >> 2], o = B + (28 * s | 0) + 12 | 0, h = (m = 0) | c[B + (28 * s | 0) + 8 >> 2];
                                    do {
                                        if (-1 != (0 | (i = 0 | c[n + (m << 2) >> 2]))) {
                                            for (j = 0 | c[o >> 2], l = 0 | c[v >> 2]; h = (d = 1 == (0 | c[j + (i << 4) >> 2]) ? (d = 0 | c[j + (i << 4) + 8 >> 2], c[B + (28 * d | 0) + 8 >> 2] = h, 0 | c[B + (28 * d | 0) >> 2]) : (c[t + (c[j + (i << 4) + 4 >> 2] << 2) >> 2] = h, 1)) + h | 0, !((0 | (i = 0 | c[l + ((ta = i) << 2) >> 2])) <= (0 | ta) | -1 == (0 | i)););
                                            d = 0 | c[y >> 2]
                                        }
                                        m = m + 1 | 0
                                    } while ((0 | m) < (0 | d))
                                }
                                s = s + 1 | 0
                            } while ((0 | s) != (0 | z))
                        }
                        if (o = 0 | c[D >> 2], 0 | c[(p = b + 376 | 0) >> 2]) {
                            if (((c[ra >> 2] = 0) | o) <= 0) return c[p >> 2] = 0, void(Y = sa);
                            for (h = b + 260 | 0, g = b + 276 | 0, d = 0; e = 0 != (0 | c[e + (d << 2) >> 2]) && 0 != +f[(0 | c[g >> 2]) + (d << 2) >> 2] ? 63 : 62, a[(0 | c[h >> 2]) + d >> 0] = e, (0 | (d = d + 1 | 0)) != (0 | o);) e = 0 | c[k >> 2];
                            return c[p >> 2] = 0, void(Y = sa)
                        }
                        if (0 | c[ra >> 2]) {
                            if (((c[ra >> 2] = 0) | o) <= 0) return c[p >> 2] = 0, void(Y = sa);
                            for (i = b + 260 | 0, j = b + 276 | 0, l = b + 288 | 0, m = b + 284 | 0, n = b + 264 | 0, h = b + 280 | 0, d = 0; ra = 0 == (0 | c[e + (d << 2) >> 2]), b = 0 != (pa = +f[(0 | c[j >> 2]) + (d << 2) >> 2]) & (1 ^ ra) & 1, ta = (0 | c[i >> 2]) + d | 0, b = (1 & a[ta >> 0]) == b << 24 >> 24 ? b : 2 | b, b = pa != +f[(0 | c[l >> 2]) + (d << 2) >> 2] ? 4 | b : b, b = (0 | c[g + (d << 2) >> 2]) == (0 | c[(0 | c[m >> 2]) + (d << 2) >> 2]) ? b : 8 | b, b = (0 | c[(0 | c[n >> 2]) + (d << 2) >> 2]) == (0 | c[(0 | c[h >> 2]) + (d << 2) >> 2]) ? b : 16 | b, a[ta >> 0] = ra ? b : 32 | b, (0 | (d = d + 1 | 0)) != (0 | o);) e = 0 | c[k >> 2], g = 0 | c[C >> 2];
                            return c[p >> 2] = 0, void(Y = sa)
                        }
                        if ((0 | o) <= 0) return c[p >> 2] = 0, void(Y = sa);
                        for (h = b + 260 | 0, g = b + 276 | 0, d = 0; 0 != (0 | c[e + (d << 2) >> 2]) && 0 != +f[(0 | c[g >> 2]) + (d << 2) >> 2] ? (ta = (0 | c[h >> 2]) + d | 0, a[ta >> 0] = 1 | a[ta >> 0]) : (ta = (0 | c[h >> 2]) + d | 0, a[ta >> 0] = -2 & a[ta >> 0]), (0 | (d = d + 1 | 0)) != (0 | o);) e = 0 | c[k >> 2];
                        c[p >> 2] = 0, Y = sa
                    }

                    function zb(a, b, d) {
                        b |= 0, d |= 0;
                        var h, i, j, k, m, e = 0,
                            f = 0,
                            g = 0,
                            l = 0,
                            n = 0,
                            o = 0;
                        Y = (m = Y) + 48 | 0, k = m + 32 | 0, g = m + 16 | 0, f = m, e = 0 | c[(i = (a |= 0) + 28 | 0) >> 2], c[f >> 2] = e, e = (0 | c[(j = a + 20 | 0) >> 2]) - e | 0, c[f + 4 >> 2] = e, c[f + 8 >> 2] = b, e = e + (c[f + 12 >> 2] = d) | 0, h = a + 60 | 0, c[g >> 2] = c[h >> 2], c[g + 4 >> 2] = f, c[g + 8 >> 2] = 2, g = 0 | Bb(0 | L(146, 0 | g));
                        a: do {
                            if ((0 | e) != (0 | g)) {
                                for (b = 2; !((0 | g) < 0);)
                                    if (e = e - g | 0, b = b + ((n = (o = 0 | c[f + 4 >> 2]) >>> 0 < g >>> 0) << 31 >> 31) | 0, o = g - (n ? o : 0) | 0, c[(f = n ? f + 8 | 0 : f) >> 2] = (0 | c[f >> 2]) + o, c[(n = f + 4 | 0) >> 2] = (0 | c[n >> 2]) - o, c[k >> 2] = c[h >> 2], c[4 + k >> 2] = f, c[8 + k >> 2] = b, (0 | e) == (0 | (g = 0 | Bb(0 | L(146, 0 | k))))) {
                                        l = 3;
                                        break a
                                    } c[a + 16 >> 2] = 0, c[i >> 2] = 0, c[j >> 2] = 0, c[a >> 2] = 32 | c[a >> 2], d = 2 == (0 | b) ? 0 : d - (0 | c[f + 4 >> 2]) | 0
                            } else l = 3
                        } while (0);
                        return 3 == (0 | l) && (o = 0 | c[a + 44 >> 2], c[a + 16 >> 2] = o + (0 | c[a + 48 >> 2]), c[i >> 2] = o, c[j >> 2] = o), Y = m, 0 | d
                    }

                    function Bb(a) {
                        return 4294963200 < (a |= 0) >>> 0 && (c[3700 >> 2] = 0 - a, a = -1), 0 | a
                    }

                    function Cb() {
                        return 3700
                    }

                    function Fb(a) {
                        return ((a |= 0) + -48 | 0) >>> 0 < 10 | 0
                    }

                    function Kb(b, d, e) {
                        b |= 0, d |= 0;
                        var f = 0,
                            g = 0,
                            h = 0,
                            i = 0,
                            j = 0;
                        (g = 0 | c[(f = (e |= 0) + 16 | 0) >> 2]) ? h = 5: 0 | function (b) {
                            var d = 0,
                                e = 0;
                            return e = 0 | a[(d = (b |= 0) + 74 | 0) >> 0], a[d >> 0] = e + 255 | e, 0 | (b = 8 & (d = 0 | c[b >> 2]) ? (c[b >> 2] = 32 | d, -1) : (c[b + 8 >> 2] = 0, e = (c[b + 4 >> 2] = 0) | c[b + 44 >> 2], c[b + 28 >> 2] = e, c[b + 20 >> 2] = e, c[b + 16 >> 2] = e + (0 | c[b + 48 >> 2]), 0))
                        }(e) ? f = 0 : (g = 0 | c[f >> 2], h = 5);
                        a: do {
                            if (5 == (0 | h)) {
                                if ((g - (f = i = 0 | c[(j = e + 20 | 0) >> 2]) | 0) >>> 0 < d >>> 0) {
                                    f = 0 | ca[7 & c[e + 36 >> 2]](e, b, d);
                                    break
                                }
                                b: do {
                                    if ((0 | a[e + 75 >> 0]) < 0 | 0 == (0 | d)) h = 0, g = b;
                                    else {
                                        for (i = d; 10 != (0 | a[b + (g = i + -1 | 0) >> 0]);) {
                                            if (!g) {
                                                h = 0, g = b;
                                                break b
                                            }
                                            i = g
                                        }
                                        if ((f = 0 | ca[7 & c[e + 36 >> 2]](e, b, i)) >>> 0 < i >>> 0) break a;
                                        g = b + (h = i) | 0, d = d - i | 0, f = 0 | c[j >> 2]
                                    }
                                } while (0);
                                tc(0 | f, 0 | g, 0 | d), c[j >> 2] = (0 | c[j >> 2]) + d, f = h + d | 0
                            }
                        } while (0);
                        return 0 | f
                    }

                    function Lb(b, d, e) {
                        b |= 0;
                        var f = 0,
                            g = 0,
                            h = 0,
                            i = 0;
                        h = 255 & (d |= 0), f = 0 != (0 | (e |= 0));
                        a: do {
                            if (f & 0 != (3 & b | 0))
                                for (g = 255 & d;;) {
                                    if ((0 | a[b >> 0]) == g << 24 >> 24) {
                                        i = 6;
                                        break a
                                    }
                                    if (!((f = 0 != (0 | (e = e + -1 | 0))) & 0 != (3 & (b = b + 1 | 0) | 0))) {
                                        i = 5;
                                        break
                                    }
                                } else i = 5
                        } while (0);
                        5 == (0 | i) && (i = f ? 6 : 16);
                        b: do {
                            if (6 == (0 | i)) {
                                if (g = 255 & d, (0 | a[b >> 0]) == g << 24 >> 24) {
                                    if (e) break;
                                    i = 16;
                                    break
                                }
                                f = 0 | w(h, 16843009);
                                c: do {
                                    if (3 < e >>> 0)
                                        for (;;) {
                                            if ((-2139062144 & (h = c[b >> 2] ^ f) ^ -2139062144) & h + -16843009 | 0) break c;
                                            if (b = b + 4 | 0, (e = e + -4 | 0) >>> 0 <= 3) {
                                                i = 11;
                                                break
                                            }
                                        } else i = 11
                                } while (0);
                                if (11 == (0 | i) && !e) {
                                    i = 16;
                                    break
                                }
                                for (;;) {
                                    if ((0 | a[b >> 0]) == g << 24 >> 24) break b;
                                    if (!(e = e + -1 | 0)) {
                                        i = 16;
                                        break
                                    }
                                    b = b + 1 | 0
                                }
                            }
                        } while (0);
                        return 16 == (0 | i) && (b = 0), 0 | b
                    }

                    function Nb(a, b, c) {
                        return 0 | Qb(a |= 0, b |= 0, c |= 0, 2, 2)
                    }

                    function Qb(b, d, e, f, g) {
                        b |= 0, d |= 0, e |= 0, f |= 0, g |= 0;
                        var p, q, r, s, t, h = 0,
                            i = 0,
                            j = 0,
                            k = 0,
                            l = 0,
                            m = 0,
                            n = 0;
                        for (Y = (t = Y) + 224 | 0, p = t + 208 | 0, r = t + 80 | 0, i = (h = q = (s = t) + 160 | 0) + 40 | 0;
                            (0 | (h = h + 4 | (c[h >> 2] = 0))) < (0 | i););
                        return c[p >> 2] = c[e >> 2], e = (0 | Rb(0, d, p, r, q, f, g)) < 0 ? -1 : (-1 < (0 | c[b + 76 >> 2]) ? 1 : 0, n = 32 & (e = 0 | c[b >> 2]), (0 | a[b + 74 >> 0]) < 1 && (c[b >> 2] = -33 & e), 0 | c[(h = b + 48 | 0) >> 2] ? e = 0 | Rb(b, d, p, r, q, f, g) : (j = 0 | c[(i = b + 44 | 0) >> 2], c[i >> 2] = s, c[(k = b + 28 | 0) >> 2] = s, c[(l = b + 20 | 0) >> 2] = s, c[h >> 2] = 80, c[(m = b + 16 | 0) >> 2] = s + 80, e = 0 | Rb(b, d, p, r, q, f, g), j && (ca[7 & c[b + 36 >> 2]](b, 0, 0), e = 0 == (0 | c[l >> 2]) ? -1 : e, c[i >> 2] = j, c[h >> 2] = 0, c[m >> 2] = 0, c[k >> 2] = 0, c[l >> 2] = 0)), h = 0 | c[b >> 2], c[b >> 2] = h | n, 0 == (32 & h | 0) ? e : -1), Y = t, 0 | e
                    }

                    function Rb(d, e, f, h, i, j, k) {
                        d |= 0, e |= 0, f |= 0, h |= 0, i |= 0, j |= 0, k |= 0;
                        var x, y, z, C, D, E, G, I, J, l = 0,
                            m = 0,
                            n = 0,
                            o = 0,
                            p = 0,
                            q = 0,
                            r = 0,
                            s = 0,
                            t = 0,
                            u = 0,
                            v = 0,
                            w = 0,
                            B = 0,
                            F = 0,
                            H = 0,
                            K = 0;
                        Y = (J = Y) + 64 | 0, I = J + 40 | 0, D = (B = J) + 48 | 0, E = J + 60 | 0, c[(G = J + 56 | 0) >> 2] = e, x = 0 != (0 | d), z = y = B + 40 | 0, B = B + 39 | 0, C = 4 + D | 0, n = e = l = 0;
                        a: for (;;) {
                            do {
                                do {
                                    if (-1 < (0 | e)) {
                                        if ((2147483647 - e | 0) < (0 | l)) {
                                            c[(e = 3700) >> 2] = 75, e = -1;
                                            break
                                        }
                                        e = l + e | 0;
                                        break
                                    }
                                } while (0);
                                if (r = 0 | c[G >> 2], !((l = 0 | a[r >> 0]) << 24 >> 24)) {
                                    w = 92;
                                    break a
                                }
                                m = r;
                                b: for (;;) {
                                    switch (l << 24 >> 24) {
                                        case 37:
                                            w = 10;
                                            break b;
                                        case 0:
                                            l = m;
                                            break b
                                    }
                                    v = m + 1 | 0, c[G >> 2] = v, l = 0 | a[v >> 0], m = v
                                }
                                c: do {
                                    if (10 == (0 | w)) {
                                        w = 0, l = m;
                                        do {
                                            if (37 != (0 | a[m + 1 >> 0])) break c;
                                            l = l + 1 | 0, m = m + 2 | 0, c[G >> 2] = m
                                        } while (37 == (0 | a[m >> 0]))
                                    }
                                } while (0);
                                l = l - r | 0, x && Sb(d, r, l)
                            } while (0 != (0 | l));
                            if (v = 0 == (0 | Fb(0 | a[1 + (0 | c[G >> 2]) >> 0])), l = (m = 0 | c[G >> 2]) + (l = v || 36 != (0 | a[m + 2 >> 0]) ? (t = -1, p = n, 1) : (t = (0 | a[m + 1 >> 0]) - 48 | 0, p = 1, 3)) | 0, c[G >> 2] = l, 31 < (n = ((m = 0 | a[l >> 0]) << 24 >> 24) - 32 | 0) >>> 0 | 0 == (1 << n & 75913 | 0)) o = 0;
                            else
                                for (o = 0; o |= 1 << n, l = l + 1 | 0, c[G >> 2] = l, !(31 < (n = ((m = 0 | a[l >> 0]) << 24 >> 24) - 32 | 0) >>> 0 | 0 == (1 << n & 75913 | 0)););
                            if (m << 24 >> 24 == 42) {
                                if (0 != (0 | Fb(0 | a[l + 1 >> 0])) && (H = 0 | c[G >> 2], 36 == (0 | a[H + 2 >> 0]))) c[i + ((0 | a[(l = H + 1 | 0) >> 0]) - 48 << 2) >> 2] = 10, l = 0 | c[h + ((0 | a[l >> 0]) - 48 << 3) >> 2], n = 1, m = H + 3 | 0;
                                else {
                                    if (0 | p) {
                                        e = -1;
                                        break
                                    }
                                    x ? (v = 3 + (0 | c[f >> 2]) & -4, l = 0 | c[v >> 2], c[f >> 2] = v + 4) : l = 0, m = 1 + ((n = 0) | c[G >> 2]) | 0
                                }
                                c[G >> 2] = m, u = (v = (0 | l) < 0) ? 0 - l | 0 : l, o = v ? 8192 | o : o, v = n
                            } else {
                                if ((0 | (l = 0 | Tb(G))) < 0) {
                                    e = -1;
                                    break
                                }
                                u = l, v = p, m = 0 | c[G >> 2]
                            }
                            do {
                                if (46 == (0 | a[m >> 0])) {
                                    if (42 != (0 | a[(l = m + 1 | 0) >> 0])) {
                                        c[G >> 2] = l, l = 0 | Tb(G), m = 0 | c[G >> 2];
                                        break
                                    }
                                    if (0 | Fb(0 | a[m + 2 >> 0]) && (F = 0 | c[G >> 2], 36 == (0 | a[F + 3 >> 0]))) {
                                        c[i + ((0 | a[(l = F + 2 | 0) >> 0]) - 48 << 2) >> 2] = 10, l = 0 | c[h + ((0 | a[l >> 0]) - 48 << 3) >> 2], m = F + 4 | 0, c[G >> 2] = m;
                                        break
                                    }
                                    if (0 | v) {
                                        e = -1;
                                        break a
                                    }
                                    x ? (s = 3 + (0 | c[f >> 2]) & -4, l = 0 | c[s >> 2], c[f >> 2] = s + 4) : l = 0, m = 2 + (0 | c[G >> 2]) | 0, c[G >> 2] = m
                                } else l = -1
                            } while (0);
                            for (s = 0;;) {
                                if (57 < ((0 | a[m >> 0]) - 65 | 0) >>> 0) {
                                    e = -1;
                                    break a
                                }
                                if (m = (n = m) + 1 | 0, c[G >> 2] = m, 8 <= ((p = 255 & (n = 0 | a[(0 | a[n >> 0]) - 65 + (16 + (58 * s | 0)) >> 0])) + -1 | 0) >>> 0) break;
                                s = p
                            }
                            if (!(n << 24 >> 24)) {
                                e = -1;
                                break
                            }
                            q = -1 < (0 | t);
                            do {
                                if (n << 24 >> 24 == 19) {
                                    if (q) {
                                        e = -1;
                                        break a
                                    }
                                    w = 54
                                } else {
                                    if (q) {
                                        c[i + (t << 2) >> 2] = p, t = 0 | c[(q = h + (t << 3) | 0) + 4 >> 2], c[(w = I) >> 2] = c[q >> 2], c[w + 4 >> 2] = t, w = 54;
                                        break
                                    }
                                    if (!x) {
                                        e = 0;
                                        break a
                                    }
                                    Ub(I, p, f, k), m = 0 | c[G >> 2], w = 55
                                }
                            } while (0);
                            54 == (0 | w) && (w = 0, x ? w = 55 : l = 0);
                            d: do {
                                if (55 == (0 | w)) {
                                    m = (w = 0) != (0 | s) & 3 == (15 & (m = 0 | a[m + -1 >> 0]) | 0) ? -33 & m : m, n = -65537 & o, t = 0 == (8192 & o | 0) ? o : n;
                                    e: do {
                                        switch (0 | m) {
                                            case 110:
                                                switch ((255 & s) << 24 >> 24) {
                                                    case 0:
                                                    case 1:
                                                        c[c[I >> 2] >> 2] = e, l = 0;
                                                        break d;
                                                    case 2:
                                                        l = 0 | c[I >> 2], c[l >> 2] = e, c[l + 4 >> 2] = ((0 | e) < 0) << 31 >> 31, l = 0;
                                                        break d;
                                                    case 3:
                                                        b[c[I >> 2] >> 1] = e, l = 0;
                                                        break d;
                                                    case 4:
                                                        a[c[I >> 2] >> 0] = e, l = 0;
                                                        break d;
                                                    case 6:
                                                        c[c[I >> 2] >> 2] = e, l = 0;
                                                        break d;
                                                    case 7:
                                                        l = 0 | c[I >> 2], c[l >> 2] = e, c[l + 4 >> 2] = ((0 | e) < 0) << 31 >> 31, l = 0;
                                                        break d;
                                                    default:
                                                        l = 0;
                                                        break d
                                                }
                                                case 112:
                                                    m = 120, l = 8 < l >>> 0 ? l : 8, n = 8 | t, w = 67;
                                                    break;
                                                case 88:
                                                case 120:
                                                    n = t, w = 67;
                                                    break;
                                                case 111:
                                                    p = 2530, l = (o = 0) == (8 & t | 0) | (0 | (n = z - (q = 0 | Wb(0 | c[(q = I) >> 2], 0 | c[q + 4 >> 2], y)) | 0)) < (0 | l) ? l : n + 1 | 0, n = t, w = 73;
                                                    break;
                                                case 105:
                                                case 100:
                                                    if (m = 0 | c[(n = I) >> 2], (0 | (n = 0 | c[n + 4 >> 2])) < 0) {
                                                        m = 0 | nc(0, 0, 0 | m, 0 | n), n = 0 | A(), c[(o = I) >> 2] = m, c[o + 4 >> 2] = n, o = 1, p = 2530, w = 72;
                                                        break e
                                                    }
                                                    o = 0 != (2049 & t | 0) & 1, p = 0 == (2048 & t | 0) ? 0 == (1 & t | 0) ? 2530 : 2532 : 2531, w = 72;
                                                    break e;
                                                case 117:
                                                    p = 2530, m = (o = 0) | c[(n = I) >> 2], n = 0 | c[n + 4 >> 2], w = 72;
                                                    break;
                                                case 99:
                                                    a[B >> 0] = c[I >> 2], r = B, o = 0, p = 2530, q = 1, m = n, l = z;
                                                    break;
                                                case 115:
                                                    r = s = 0 == (0 | (s = 0 | c[I >> 2])) ? 2540 : s, p = 2530, q = (K = (o = 0) == (0 | (t = 0 | Lb(s, 0, l)))) ? l : t - s | 0, m = n, l = K ? s + l | 0 : t;
                                                    break;
                                                case 67:
                                                    c[D >> 2] = c[I >> 2], c[C >> 2] = 0, c[I >> 2] = D, p = -1, w = 79;
                                                    break;
                                                case 83:
                                                    w = l ? (p = l, 79) : (Yb(d, 32, u, 0, t), l = 0, 89);
                                                    break;
                                                case 65:
                                                case 71:
                                                case 70:
                                                case 69:
                                                case 97:
                                                case 103:
                                                case 102:
                                                case 101:
                                                    l = 0 | ba[3 & j](d, +g[I >> 3], u, l, t, m);
                                                    break d;
                                                default:
                                                    o = 0, p = 2530, q = l, m = t, l = z
                                        }
                                    } while (0);
                                    f: do {
                                        if (67 == (0 | w)) q = 0 | Vb(0 | c[(q = I) >> 2], 0 | c[q + 4 >> 2], y, 32 & m), o = (p = 0 == (8 & n | 0) | 0 == (0 | c[(p = I) >> 2]) & 0 == (0 | c[p + 4 >> 2])) ? 0 : 2, p = p ? 2530 : 2530 + (m >>> 4) | 0, w = 73;
                                        else if (72 == (0 | w)) q = 0 | Xb(m, n, y), n = t, w = 73;
                                        else if (79 == (0 | w)) {
                                            for (o = (w = 0) | c[I >> 2], l = 0; m = 0 | c[o >> 2];) {
                                                if ((n = (0 | (m = 0 | Zb(E, m))) < 0) | (p - l | 0) >>> 0 < m >>> 0) {
                                                    w = 83;
                                                    break
                                                }
                                                if (!((l = m + l | 0) >>> 0 < p >>> 0)) break;
                                                o = o + 4 | 0
                                            }
                                            if (83 == (0 | w) && (w = 0, n)) {
                                                e = -1;
                                                break a
                                            }
                                            if (Yb(d, 32, u, l, t), l)
                                                for (n = 0 | c[I >> 2], o = 0;;) {
                                                    if (!(m = 0 | c[n >> 2])) {
                                                        w = 89;
                                                        break f
                                                    }
                                                    if ((0 | l) < (0 | (o = (m = 0 | Zb(E, m)) + o | 0))) {
                                                        w = 89;
                                                        break f
                                                    }
                                                    if (Sb(d, E, m), l >>> 0 <= o >>> 0) {
                                                        w = 89;
                                                        break
                                                    }
                                                    n = n + 4 | 0
                                                } else l = 0, w = 89
                                        }
                                    } while (0);
                                    if (73 == (0 | w)) K = (w = 0) != (0 | l) | (m = 0 != (0 | c[(m = I) >> 2]) | 0 != (0 | c[m + 4 >> 2])), m = z - q + (1 & (1 ^ m)) | 0, r = K ? q : y, q = K ? (0 | m) < (0 | l) ? l : m : 0, m = -1 < (0 | l) ? -65537 & n : n, l = z;
                                    else if (89 == (0 | w)) {
                                        w = 0, Yb(d, 32, u, l, 8192 ^ t), l = (0 | l) < (0 | u) ? u : l;
                                        break
                                    }
                                    Yb(d, 32, l = (0 | u) < (0 | (K = (s = (0 | q) < (0 | (t = l - r | 0)) ? t : q) + o | 0)) ? K : u, K, m), Sb(d, p, o), Yb(d, 48, l, K, 65536 ^ m), Yb(d, 48, s, t, 0), Sb(d, r, t), Yb(d, 32, l, K, 8192 ^ m)
                                }
                            } while (0);
                            n = v
                        }
                        g: do {
                            if (92 == (0 | w) && !d)
                                if (n) {
                                    for (e = 1; l = 0 | c[i + (e << 2) >> 2];)
                                        if (Ub(h + (e << 3) | 0, l, f, k), 10 <= (e = e + 1 | 0) >>> 0) {
                                            e = 1;
                                            break g
                                        } for (;;) {
                                        if (0 | c[i + (e << 2) >> 2]) {
                                            e = -1;
                                            break g
                                        }
                                        if (10 <= (e = e + 1 | 0) >>> 0) {
                                            e = 1;
                                            break
                                        }
                                    }
                                } else e = 0
                        } while (0);
                        return Y = J, 0 | e
                    }

                    function Sb(a, b, d) {
                        b |= 0, d |= 0, 32 & c[(a |= 0) >> 2] || Kb(b, d, a)
                    }

                    function Tb(b) {
                        var d = 0,
                            e = 0;
                        if (0 | Fb(0 | a[c[(b |= 0) >> 2] >> 0]))
                            for (d = 0; e = 0 | c[b >> 2], d = (10 * d | 0) - 48 + (0 | a[e >> 0]) | 0, e = e + 1 | 0, c[b >> 2] = e, 0 != (0 | Fb(0 | a[e >> 0])););
                        else d = 0;
                        return 0 | d
                    }

                    function Ub(a, b, d, e) {
                        a |= 0, b |= 0, d |= 0, e |= 0;
                        var f = 0,
                            h = 0;
                        a: do {
                            if (b >>> 0 <= 20) {
                                switch (0 | b) {
                                    case 9:
                                        b = 3 + (0 | c[d >> 2]) & -4, e = 0 | c[b >> 2], c[d >> 2] = b + 4, c[a >> 2] = e;
                                        break a;
                                    case 10:
                                        e = 3 + (0 | c[d >> 2]) & -4, b = 0 | c[e >> 2], c[d >> 2] = e + 4, c[(e = a) >> 2] = b, c[e + 4 >> 2] = ((0 | b) < 0) << 31 >> 31;
                                        break a;
                                    case 11:
                                        e = 3 + (0 | c[d >> 2]) & -4, b = 0 | c[e >> 2], c[d >> 2] = e + 4, c[(e = a) >> 2] = b, c[e + 4 >> 2] = 0;
                                        break a;
                                    case 12:
                                        e = 7 + (0 | c[d >> 2]) & -8, f = 0 | c[(b = e) >> 2], b = 0 | c[b + 4 >> 2], c[d >> 2] = e + 8, c[(e = a) >> 2] = f, c[e + 4 >> 2] = b;
                                        break a;
                                    case 13:
                                        f = 3 + (0 | c[d >> 2]) & -4, e = 0 | c[f >> 2], c[d >> 2] = f + 4, e = (65535 & e) << 16 >> 16, c[(f = a) >> 2] = e, c[f + 4 >> 2] = ((0 | e) < 0) << 31 >> 31;
                                        break a;
                                    case 14:
                                        f = 3 + (0 | c[d >> 2]) & -4, e = 0 | c[f >> 2], c[d >> 2] = f + 4, c[(f = a) >> 2] = 65535 & e, c[f + 4 >> 2] = 0;
                                        break a;
                                    case 15:
                                        f = 3 + (0 | c[d >> 2]) & -4, e = 0 | c[f >> 2], c[d >> 2] = f + 4, e = (255 & e) << 24 >> 24, c[(f = a) >> 2] = e, c[f + 4 >> 2] = ((0 | e) < 0) << 31 >> 31;
                                        break a;
                                    case 16:
                                        f = 3 + (0 | c[d >> 2]) & -4, e = 0 | c[f >> 2], c[d >> 2] = f + 4, c[(f = a) >> 2] = 255 & e, c[f + 4 >> 2] = 0;
                                        break a;
                                    case 17:
                                        f = 7 + (0 | c[d >> 2]) & -8, h = +g[f >> 3], c[d >> 2] = f + 8, g[a >> 3] = h;
                                        break a;
                                    case 18:
                                        fa[3 & e](a, d);
                                        break a;
                                    default:
                                        break a
                                }
                            }
                        } while (0)
                    }

                    function Vb(b, c, e, f) {
                        if (e |= 0, f |= 0, !(0 == (0 | (b |= 0)) & 0 == (0 | (c |= 0))))
                            for (; a[(e = e + -1 | 0) >> 0] = 0 | d[480 + (15 & b) >> 0] | f, !(0 == (0 | (b = 0 | rc(0 | b, 0 | c, 4))) & 0 == (0 | (c = 0 | A()))););
                        return 0 | e
                    }

                    function Wb(b, c, d) {
                        if (d |= 0, !(0 == (0 | (b |= 0)) & 0 == (0 | (c |= 0))))
                            for (; a[(d = d + -1 | 0) >> 0] = 7 & b | 48, !(0 == (0 | (b = 0 | rc(0 | b, 0 | c, 3))) & 0 == (0 | (c = 0 | A()))););
                        return 0 | d
                    }

                    function Xb(b, c, d) {
                        d |= 0;
                        var e = 0,
                            f = 0,
                            g = 0;
                        if (0 < (c |= 0) >>> 0 | 0 == (0 | c) & 4294967295 < (b |= 0) >>> 0) {
                            for (; g = 0 | nc(0 | (e = b), 0 | (f = c), 0 | (g = 0 | lc(0 | (b = 0 | qc(0 | b, 0 | c, 10, 0)), 0 | (c = 0 | A()), 10, 0)), 0 | A()), A(), a[(d = d + -1 | 0) >> 0] = 255 & g | 48, 9 < f >>> 0 | 9 == (0 | f) & 4294967295 < e >>> 0;);
                            c = b
                        } else c = b;
                        if (c)
                            for (; c = ((g = c) >>> 0) / 10 | 0, a[(d = d + -1 | 0) >> 0] = g - (10 * c | 0) | 48, 10 <= g >>> 0;);
                        return 0 | d
                    }

                    function Yb(a, b, c, d, e) {
                        a |= 0, b |= 0;
                        var f, g;
                        if (Y = (g = Y) + 256 | 0, f = g, (0 | (d |= 0)) < (0 | (c |= 0)) & 0 == (73728 & (e |= 0) | 0)) {
                            if (uc(0 | f, b << 24 >> 24 | 0, 0 | ((e = c - d | 0) >>> 0 < 256 ? e : 256)), 255 < e >>> 0) {
                                for (b = c - d | 0; Sb(a, f, 256), 255 < (e = e + -256 | 0) >>> 0;);
                                e = 255 & b
                            }
                            Sb(a, f, e)
                        }
                        Y = g
                    }

                    function Zb(a, b) {
                        return b |= 0, 0 | (a = (a |= 0) ? 0 | _b(a, b, 0) : 0)
                    }

                    function _b(b, d) {
                        b |= 0, d |= 0;
                        do {
                            if (b) {
                                if (d >>> 0 < 128) {
                                    a[b >> 0] = d, b = 1;
                                    break
                                }
                                if (!(0 | c[c[976 >> 2] >> 2])) {
                                    if (57216 == (-128 & d | 0)) {
                                        a[b >> 0] = d, b = 1;
                                        break
                                    }
                                    c[(b = 3700) >> 2] = 84, b = -1;
                                    break
                                }
                                if (d >>> 0 < 2048) {
                                    a[b >> 0] = d >>> 6 | 192, a[b + 1 >> 0] = 63 & d | 128, b = 2;
                                    break
                                }
                                if (d >>> 0 < 55296 | 57344 == (-8192 & d | 0)) {
                                    a[b >> 0] = d >>> 12 | 224, a[b + 1 >> 0] = d >>> 6 & 63 | 128, a[b + 2 >> 0] = 63 & d | 128, b = 3;
                                    break
                                }
                                if ((d + -65536 | 0) >>> 0 < 1048576) {
                                    a[b >> 0] = d >>> 18 | 240, a[b + 1 >> 0] = d >>> 12 & 63 | 128, a[b + 2 >> 0] = d >>> 6 & 63 | 128, a[b + 3 >> 0] = 63 & d | 128, b = 4;
                                    break
                                }
                                c[(b = 3700) >> 2] = 84, b = -1;
                                break
                            }
                            b = 1
                        } while (0);
                        return 0 | b
                    }

                    function ac(a) {
                        a = +a;
                        var b;
                        return g[h >> 3] = a, b = 0 | c[h >> 2], z(0 | c[h + 4 >> 2]), 0 | b
                    }

                    function bc(a, b) {
                        a = +a, b |= 0;
                        var e, f, d = 0;
                        switch (g[h >> 3] = a, f = 0 | rc(0 | (d = 0 | c[h >> 2]), 0 | (e = 0 | c[h + 4 >> 2]), 52), A(), 2047 & f) {
                            case 0:
                                d = 0 != a ? (a = +bc(0x10000000000000000 * a, b), (0 | c[b >> 2]) - 64 | 0) : 0, c[b >> 2] = d;
                                break;
                            case 2047:
                                break;
                            default:
                                c[b >> 2] = (2047 & f) - 1022, c[h >> 2] = d, c[h + 4 >> 2] = -2146435073 & e | 1071644672, a = +g[h >> 3]
                        }
                        return +a
                    }

                    function cc(b, d, e, f) {
                        b |= 0, d |= 0, e |= 0, f |= 0;
                        var j, g = 0,
                            h = 0,
                            i = 0;
                        return Y = (j = Y) + 160 | 0, g = j + 144 | 0, tc(0 | (i = j), 640, 144), 2147483646 < (d + -1 | 0) >>> 0 ? d ? (c[(d = 3700) >> 2] = 75, d = -1) : (b = g, d = 1, h = 4) : h = 4, 4 == (0 | h) && (h = (h = -2 - b | 0) >>> 0 < d >>> 0 ? h : d, c[i + 48 >> 2] = h, c[(g = i + 20 | 0) >> 2] = b, d = (c[i + 44 >> 2] = b) + h | 0, c[(b = i + 16 | 0) >> 2] = d, c[i + 28 >> 2] = d, d = 0 | Nb(i, e, f), h && (i = 0 | c[g >> 2], a[i + (((0 | i) == (0 | c[b >> 2])) << 31 >> 31) >> 0] = 0)), Y = j, 0 | d
                    }

                    function ec(b, c, e) {
                        b |= 0, c |= 0;
                        var f = 0,
                            g = 0;
                        if (e |= 0) {
                            f = 0 | a[b >> 0];
                            a: do {
                                if (f << 24 >> 24)
                                    for (;;) {
                                        if (e = e + -1 | 0, !(f << 24 >> 24 == (g = 0 | a[c >> 0]) << 24 >> 24 & 0 != (0 | e) & g << 24 >> 24 != 0)) break a;
                                        if (c = c + 1 | 0, !((f = 0 | a[(b = b + 1 | 0) >> 0]) << 24 >> 24)) {
                                            f = 0;
                                            break
                                        }
                                    } else f = 0
                            } while (0);
                            f = (255 & f) - (0 | d[c >> 0]) | 0
                        } else f = 0;
                        return 0 | f
                    }

                    function fc(a) {
                        a |= 0;
                        var w, b = 0,
                            d = 0,
                            e = 0,
                            f = 0,
                            g = 0,
                            h = 0,
                            i = 0,
                            j = 0,
                            k = 0,
                            l = 0,
                            m = 0,
                            n = 0,
                            o = 0,
                            p = 0,
                            q = 0,
                            r = 0,
                            s = 0,
                            t = 0,
                            u = 0,
                            v = 0;
                        Y = (w = Y) + 16 | 0, n = w;
                        do {
                            if (a >>> 0 < 245) {
                                if (a = (k = a >>> 0 < 11 ? 16 : a + 11 & -8) >>> 3, m = 0 | c[926], 3 & (d = a ? m >>> a : m) | 0) return e = 0 | c[(d = (a = 3744 + ((b = (1 & d ^ 1) + a | 0) << 1 << 2) | 0) + 8 | 0) >> 2], (0 | (g = 0 | c[(f = e + 8 | 0) >> 2])) == (0 | a) ? c[926] = m & ~(1 << b) : (c[g + 12 >> 2] = a, c[d >> 2] = g), v = b << 3, c[e + 4 >> 2] = 3 | v, c[(v = e + v + 4 | 0) >> 2] = 1 | c[v >> 2], Y = w, 0 | (v = f);
                                if ((l = 0 | c[928]) >>> 0 < k >>> 0) {
                                    if (0 | d) return g = 0 | c[(a = (b = 3744 + ((e = ((d = (e = (i = (e = ((e = d << a & ((e = 2 << a) | 0 - e)) & 0 - e) - 1 | 0) >>> 12 & 16) ? e >>> i : e) >>> 5 & 8) | i | (g = (e = d ? e >>> d : e) >>> 2 & 4) | (a = (e = g ? e >>> g : e) >>> 1 & 2) | (b = (e = a ? e >>> a : e) >>> 1 & 1)) + (b ? e >>> b : e) | 0) << 1 << 2) | 0) + 8 | 0) >> 2], (0 | (d = 0 | c[(i = g + 8 | 0) >> 2])) == (0 | b) ? (a = m & ~(1 << e), c[926] = a) : (c[d + 12 >> 2] = b, c[a >> 2] = d, a = m), h = (v = e << 3) - k | 0, c[g + 4 >> 2] = 3 | k, c[(f = g + k | 0) + 4 >> 2] = 1 | h, c[g + v >> 2] = h, 0 | l && (e = 0 | c[931], d = 3744 + ((b = l >>> 3) << 1 << 2) | 0, a & (b = 1 << b) ? b = 0 | c[(a = d + 8 | 0) >> 2] : (c[926] = a | b, a = (b = d) + 8 | 0), c[a >> 2] = e, c[b + 12 >> 2] = e, c[e + 8 >> 2] = b, c[e + 12 >> 2] = d), c[928] = h, c[931] = f, Y = w, 0 | (v = i);
                                    if (g = 0 | c[927]) {
                                        for (j = 0 | c[4008 + (((e = (j = (f = (j = (g & 0 - g) - 1 | 0) >>> 12 & 16) ? j >>> f : j) >>> 5 & 8) | f | (h = (j = e ? j >>> e : j) >>> 2 & 4) | (i = (j = h ? j >>> h : j) >>> 1 & 2) | (d = (j = i ? j >>> i : j) >>> 1 & 1)) + (d ? j >>> d : j) << 2) >> 2], j = (-8 & c[(i = d = j) + 4 >> 2]) - k | 0;
                                            (a = 0 | c[d + 16 >> 2]) || (a = 0 | c[d + 20 >> 2]);) i = (f = (h = (-8 & c[(d = a) + 4 >> 2]) - k | 0) >>> 0 < j >>> 0) ? a : i, j = f ? h : j;
                                        if (i >>> 0 < (h = i + k | 0) >>> 0) {
                                            f = 0 | c[i + 24 >> 2], b = 0 | c[i + 12 >> 2];
                                            do {
                                                if ((0 | b) == (0 | i)) {
                                                    if (!(b = 0 | c[(a = i + 20 | 0) >> 2]) && !(b = 0 | c[(a = i + 16 | 0) >> 2])) {
                                                        d = 0;
                                                        break
                                                    }
                                                    for (;;)
                                                        if (d = 0 | c[(e = b + 20 | 0) >> 2]) b = d, a = e;
                                                        else {
                                                            if (!(d = 0 | c[(e = b + 16 | 0) >> 2])) break;
                                                            b = d, a = e
                                                        } c[a >> 2] = 0, d = b
                                                } else d = 0 | c[i + 8 >> 2], c[d + 12 >> 2] = b, c[b + 8 >> 2] = d, d = b
                                            } while (0);
                                            do {
                                                if (0 | f) {
                                                    if (b = 0 | c[i + 28 >> 2], (0 | i) == (0 | c[(a = 4008 + (b << 2) | 0) >> 2])) {
                                                        if (!(c[a >> 2] = d)) {
                                                            c[927] = g & ~(1 << b);
                                                            break
                                                        }
                                                    } else if (!(c[((0 | c[(v = f + 16 | 0) >> 2]) == (0 | i) ? v : f + 20 | 0) >> 2] = d)) break;
                                                    c[d + 24 >> 2] = f, 0 | (b = 0 | c[i + 16 >> 2]) && (c[d + 16 >> 2] = b, c[b + 24 >> 2] = d), 0 | (b = 0 | c[i + 20 >> 2]) && (c[d + 20 >> 2] = b, c[b + 24 >> 2] = d)
                                                }
                                            } while (0);
                                            return j >>> 0 < 16 ? (v = j + k | 0, c[i + 4 >> 2] = 3 | v, c[(v = i + v + 4 | 0) >> 2] = 1 | c[v >> 2]) : (c[i + 4 >> 2] = 3 | k, c[h + 4 >> 2] = 1 | j, c[h + j >> 2] = j, 0 | l && (e = 0 | c[931], d = 3744 + ((b = l >>> 3) << 1 << 2) | 0, (b = 1 << b) & m ? b = 0 | c[(a = d + 8 | 0) >> 2] : (c[926] = b | m, a = (b = d) + 8 | 0), c[a >> 2] = e, c[b + 12 >> 2] = e, c[e + 8 >> 2] = b, c[e + 12 >> 2] = d), c[928] = j, c[931] = h), Y = w, 0 | (v = i + 8 | 0)
                                        }
                                        m = k
                                    } else m = k
                                } else m = k
                            } else if (a >>> 0 <= 4294967231)
                                if (k = -8 & (a = a + 11 | 0), e = 0 | c[927]) {
                                    f = 0 - k | 0, j = (a >>>= 8) ? 16777215 < k >>> 0 ? 31 : 1 & ((q = (j = 14 - ((i = (i = (j = a << (m = (m = a + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | m | (q = (q = (j <<= i) + 245760 | 0) >>> 16 & 2)) + ((j <<= q) >>> 15) | 0) + 7 | 0) ? k >>> q : k) | j << 1 : 0, d = 0 | c[4008 + (j << 2) >> 2];
                                    a: do {
                                        if (d)
                                            for (i = k << (31 == ((a = 0) | j) ? 0 : 25 - (j >>> 1) | 0), g = 0;;) {
                                                if ((h = (-8 & c[d + 4 >> 2]) - k | 0) >>> 0 < f >>> 0) {
                                                    if (!h) {
                                                        a = d, f = 0, q = 65;
                                                        break a
                                                    }
                                                    a = d, f = h
                                                }
                                                if (g = 0 == (0 | (q = 0 | c[d + 20 >> 2])) | (0 | q) == (0 | (d = 0 | c[d + 16 + (i >>> 31 << 2) >> 2])) ? g : q, !d) {
                                                    d = g, q = 61;
                                                    break
                                                }
                                                i <<= 1
                                            } else a = d = 0, q = 61
                                    } while (0);
                                    if (61 == (0 | q)) {
                                        if (0 == (0 | d) & 0 == (0 | a)) {
                                            if (!(a = ((a = 2 << j) | 0 - a) & e)) {
                                                m = k;
                                                break
                                            }
                                            d = (a & 0 - a) - 1 | 0, d = (a = 0) | c[4008 + (((g = (d = (h = d >>> 12 & 16) ? d >>> h : d) >>> 5 & 8) | h | (i = (d = g ? d >>> g : d) >>> 2 & 4) | (j = (d = i ? d >>> i : d) >>> 1 & 2) | (m = (d = j ? d >>> j : d) >>> 1 & 1)) + (m ? d >>> m : d) << 2) >> 2]
                                        }
                                        d ? q = 65 : (i = a, h = f)
                                    }
                                    if (65 == (0 | q))
                                        for (g = d;;) {
                                            if (f = (d = (m = (-8 & c[g + 4 >> 2]) - k | 0) >>> 0 < f >>> 0) ? m : f, a = d ? g : a, !(d = (d = 0 | c[g + 16 >> 2]) || 0 | c[g + 20 >> 2])) {
                                                i = a, h = f;
                                                break
                                            }
                                            g = d
                                        }
                                    if (0 != (0 | i) && h >>> 0 < ((0 | c[928]) - k | 0) >>> 0 && i >>> 0 < (l = i + k | 0) >>> 0) {
                                        g = 0 | c[i + 24 >> 2], b = 0 | c[i + 12 >> 2];
                                        do {
                                            if ((0 | b) == (0 | i)) {
                                                if (!(b = 0 | c[(a = i + 20 | 0) >> 2]) && !(b = 0 | c[(a = i + 16 | 0) >> 2])) {
                                                    b = 0;
                                                    break
                                                }
                                                for (;;)
                                                    if (d = 0 | c[(f = b + 20 | 0) >> 2]) b = d, a = f;
                                                    else {
                                                        if (!(d = 0 | c[(f = b + 16 | 0) >> 2])) break;
                                                        b = d, a = f
                                                    } c[a >> 2] = 0
                                            } else v = 0 | c[i + 8 >> 2], c[v + 12 >> 2] = b, c[b + 8 >> 2] = v
                                        } while (0);
                                        do {
                                            if (g) {
                                                if (a = 0 | c[i + 28 >> 2], (0 | i) == (0 | c[(d = 4008 + (a << 2) | 0) >> 2])) {
                                                    if (!(c[d >> 2] = b)) {
                                                        e &= ~(1 << a), c[927] = e;
                                                        break
                                                    }
                                                } else if (!(c[((0 | c[(v = g + 16 | 0) >> 2]) == (0 | i) ? v : g + 20 | 0) >> 2] = b)) break;
                                                c[b + 24 >> 2] = g, 0 | (a = 0 | c[i + 16 >> 2]) && (c[b + 16 >> 2] = a, c[a + 24 >> 2] = b), (a = 0 | c[i + 20 >> 2]) && (c[b + 20 >> 2] = a, c[a + 24 >> 2] = b)
                                            }
                                        } while (0);
                                        b: do {
                                            if (h >>> 0 < 16) v = h + k | 0, c[i + 4 >> 2] = 3 | v, c[(v = i + v + 4 | 0) >> 2] = 1 | c[v >> 2];
                                            else {
                                                if (c[i + 4 >> 2] = 3 | k, c[l + 4 >> 2] = 1 | h, b = (c[l + h >> 2] = h) >>> 3, h >>> 0 < 256) {
                                                    d = 3744 + (b << 1 << 2) | 0, (a = 0 | c[926]) & (b = 1 << b) ? b = 0 | c[(a = d + 8 | 0) >> 2] : (c[926] = a | b, a = (b = d) + 8 | 0), c[a >> 2] = l, c[b + 12 >> 2] = l, c[l + 8 >> 2] = b, c[l + 12 >> 2] = d;
                                                    break
                                                }
                                                if (b = 4008 + ((d = (b = h >>> 8) ? 16777215 < h >>> 0 ? 31 : 1 & ((v = (d = 14 - ((t = (t = (d = b << (u = (u = b + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | u | (v = (v = (d <<= t) + 245760 | 0) >>> 16 & 2)) + ((d <<= v) >>> 15) | 0) + 7 | 0) ? h >>> v : h) | d << 1 : 0) << 2) | 0, c[l + 28 >> 2] = d, c[(a = l + 16 | 0) + 4 >> 2] = 0, c[a >> 2] = 0, !(e & (a = 1 << d))) {
                                                    c[927] = e | a, c[b >> 2] = l, c[l + 24 >> 2] = b, c[l + 12 >> 2] = l, c[l + 8 >> 2] = l;
                                                    break
                                                }
                                                b = 0 | c[b >> 2];
                                                c: do {
                                                    if ((-8 & c[b + 4 >> 2] | 0) != (0 | h)) {
                                                        for (e = h << (31 == (0 | d) ? 0 : 25 - (d >>> 1) | 0); a = 0 | c[(d = b + 16 + (e >>> 31 << 2) | 0) >> 2];) {
                                                            if ((-8 & c[a + 4 >> 2] | 0) == (0 | h)) {
                                                                b = a;
                                                                break c
                                                            }
                                                            e <<= 1, b = a
                                                        }
                                                        c[d >> 2] = l, c[l + 24 >> 2] = b, c[l + 12 >> 2] = l, c[l + 8 >> 2] = l;
                                                        break b
                                                    }
                                                } while (0);
                                                v = 0 | c[(u = b + 8 | 0) >> 2], c[v + 12 >> 2] = l, c[u >> 2] = l, c[l + 8 >> 2] = v, c[l + 12 >> 2] = b, c[l + 24 >> 2] = 0
                                            }
                                        } while (0);
                                        return Y = w, 0 | (v = i + 8 | 0)
                                    }
                                    m = k
                                } else m = k;
                            else m = -1
                        } while (0);
                        if (m >>> 0 <= (d = 0 | c[928]) >>> 0) return b = d - m | 0, a = 0 | c[931], 15 < b >>> 0 ? (v = a + m | 0, c[931] = v, c[928] = b, c[v + 4 >> 2] = 1 | b, c[a + d >> 2] = b, c[a + 4 >> 2] = 3 | m) : (c[928] = 0, c[931] = 0, c[a + 4 >> 2] = 3 | d, c[(v = a + d + 4 | 0) >> 2] = 1 | c[v >> 2]), Y = w, 0 | (v = a + 8 | 0);
                        if (m >>> 0 < (h = 0 | c[929]) >>> 0) return t = h - m | 0, c[929] = t, u = (v = 0 | c[932]) + m | 0, c[932] = u, c[u + 4 >> 2] = 1 | t, c[v + 4 >> 2] = 3 | m, Y = w, 0 | (v = v + 8 | 0);
                        if (i = m + 48 | 0, (k = (g = (a = 0 | c[1044] ? 0 | c[1046] : (c[1046] = 4096, c[1045] = 4096, c[1047] = -1, c[1048] = -1, c[1049] = 0, c[1037] = 0, c[1044] = -16 & n ^ 1431655768, 4096)) + (j = m + 47 | 0) | 0) & (f = 0 - a | 0)) >>> 0 <= m >>> 0) return Y = w, (v = 0) | v;
                        if (0 | (a = 0 | c[1036]) && (n = (l = 0 | c[1034]) + k | 0) >>> 0 <= l >>> 0 | a >>> 0 < n >>> 0) return Y = w, (v = 0) | v;
                        d: do {
                            if (4 & c[1037]) b = 0, q = 143;
                            else {
                                d = 0 | c[932];
                                e: do {
                                    if (d) {
                                        for (e = 4152; !((n = 0 | c[e >> 2]) >>> 0 <= d >>> 0 && (n + (0 | c[e + 4 >> 2]) | 0) >>> 0 > d >>> 0);) {
                                            if (!(a = 0 | c[e + 8 >> 2])) {
                                                q = 128;
                                                break e
                                            }
                                            e = a
                                        }
                                        if ((b = g - h & f) >>> 0 < 2147483647)
                                            if ((0 | (a = 0 | vc(0 | b))) == ((0 | c[e >> 2]) + (0 | c[e + 4 >> 2]) | 0)) {
                                                if (-1 != (0 | a)) {
                                                    h = b, g = a, q = 145;
                                                    break d
                                                }
                                            } else e = a, q = 136;
                                        else b = 0
                                    } else q = 128
                                } while (0);
                                do {
                                    if (128 == (0 | q))
                                        if (-1 != (0 | (d = 0 | vc(0))) && (b = d, p = (b = (0 == ((p = (o = 0 | c[1045]) + -1 | 0) & b | 0) ? 0 : (p + b & 0 - o) - b | 0) + k | 0) + (o = 0 | c[1034]) | 0, m >>> 0 < b >>> 0 & b >>> 0 < 2147483647)) {
                                            if (0 | (n = 0 | c[1036]) && p >>> 0 <= o >>> 0 | n >>> 0 < p >>> 0) {
                                                b = 0;
                                                break
                                            }
                                            if ((0 | (a = 0 | vc(0 | b))) == (0 | d)) {
                                                h = b, g = d, q = 145;
                                                break d
                                            }
                                            e = a, q = 136
                                        } else b = 0
                                } while (0);
                                do {
                                    if (136 == (0 | q)) {
                                        if (d = 0 - b | 0, !(b >>> 0 < i >>> 0 & b >>> 0 < 2147483647 & -1 != (0 | e))) {
                                            if (-1 == (0 | e)) {
                                                b = 0;
                                                break
                                            }
                                            h = b, g = e, q = 145;
                                            break d
                                        }
                                        if (2147483647 <= (a = j - b + (a = 0 | c[1046]) & 0 - a) >>> 0) {
                                            h = b, g = e, q = 145;
                                            break d
                                        }
                                        if (-1 == (0 | vc(0 | a))) {
                                            vc(0 | d), b = 0;
                                            break
                                        }
                                        h = a + b | 0, g = e, q = 145;
                                        break d
                                    }
                                } while (0);
                                c[1037] = 4 | c[1037], q = 143
                            }
                        } while (0);
                        if (143 == (0 | q) && k >>> 0 < 2147483647 && !(-1 == (0 | (t = 0 | vc(0 | k))) | 1 ^ (s = (m + 40 | 0) >>> 0 < (r = (p = 0 | vc(0)) - t | 0) >>> 0) | t >>> 0 < p >>> 0 & -1 != (0 | t) & -1 != (0 | p) ^ 1) && (h = s ? r : b, g = t, q = 145), 145 == (0 | q)) {
                            b = (0 | c[1034]) + h | 0, (c[1034] = b) >>> 0 > (0 | c[1035]) >>> 0 && (c[1035] = b), j = 0 | c[932];
                            f: do {
                                if (j) {
                                    for (b = 4152;;) {
                                        if ((0 | g) == ((a = 0 | c[b >> 2]) + (d = 0 | c[b + 4 >> 2]) | 0)) {
                                            q = 154;
                                            break
                                        }
                                        if (!(e = 0 | c[b + 8 >> 2])) break;
                                        b = e
                                    }
                                    if (154 == (0 | q) && (u = b + 4 | 0, 0 == (8 & c[b + 12 >> 2] | 0)) && j >>> 0 < g >>> 0 & a >>> 0 <= j >>> 0) {
                                        c[u >> 2] = d + h, u = j + (t = 0 == (7 & (t = j + 8 | 0) | 0) ? 0 : 0 - t & 7) | 0, t = (v = (0 | c[929]) + h | 0) - t | 0, c[932] = u, c[929] = t, c[u + 4 >> 2] = 1 | t, c[j + v + 4 >> 2] = 40, c[933] = c[1048];
                                        break
                                    }
                                    for (g >>> 0 < (0 | c[930]) >>> 0 && (c[930] = g), d = g + h | 0, b = 4152;;) {
                                        if ((0 | c[b >> 2]) == (0 | d)) {
                                            q = 162;
                                            break
                                        }
                                        if (!(a = 0 | c[b + 8 >> 2])) break;
                                        b = a
                                    }
                                    if (162 == (0 | q) && 0 == (8 & c[b + 12 >> 2] | 0)) {
                                        c[b >> 2] = g, c[(l = b + 4 | 0) >> 2] = (0 | c[l >> 2]) + h, k = (l = g + (0 == (7 & (l = g + 8 | 0) | 0) ? 0 : 0 - l & 7) | 0) + m | 0, i = (b = d + (0 == (7 & (b = d + 8 | 0) | 0) ? 0 : 0 - b & 7) | 0) - l - m | 0, c[l + 4 >> 2] = 3 | m;
                                        g: do {
                                            if ((0 | j) == (0 | b)) v = (0 | c[929]) + i | 0, c[929] = v, c[932] = k, c[k + 4 >> 2] = 1 | v;
                                            else {
                                                if ((0 | c[931]) == (0 | b)) {
                                                    v = (0 | c[928]) + i | 0, c[928] = v, c[931] = k, c[k + 4 >> 2] = 1 | v, c[k + v >> 2] = v;
                                                    break
                                                }
                                                if (1 == (3 & (a = 0 | c[b + 4 >> 2]) | 0)) {
                                                    h = -8 & a, e = a >>> 3;
                                                    h: do {
                                                        if (a >>> 0 < 256) {
                                                            if (a = 0 | c[b + 8 >> 2], (0 | (d = 0 | c[b + 12 >> 2])) == (0 | a)) {
                                                                c[926] = c[926] & ~(1 << e);
                                                                break
                                                            }
                                                            c[a + 12 >> 2] = d, c[d + 8 >> 2] = a;
                                                            break
                                                        }
                                                        g = 0 | c[b + 24 >> 2], a = 0 | c[b + 12 >> 2];
                                                        do {
                                                            if ((0 | a) == (0 | b)) {
                                                                if (a = 0 | c[(e = (d = b + 16 | 0) + 4 | 0) >> 2]) d = e;
                                                                else if (!(a = 0 | c[d >> 2])) {
                                                                    a = 0;
                                                                    break
                                                                }
                                                                for (;;)
                                                                    if (e = 0 | c[(f = a + 20 | 0) >> 2]) a = e, d = f;
                                                                    else {
                                                                        if (!(e = 0 | c[(f = a + 16 | 0) >> 2])) break;
                                                                        a = e, d = f
                                                                    } c[d >> 2] = 0
                                                            } else v = 0 | c[b + 8 >> 2], c[v + 12 >> 2] = a, c[a + 8 >> 2] = v
                                                        } while (0);
                                                        if (!g) break;
                                                        e = 4008 + ((d = 0 | c[b + 28 >> 2]) << 2) | 0;
                                                        do {
                                                            if ((0 | c[e >> 2]) == (0 | b)) {
                                                                if (0 | (c[e >> 2] = a)) break;
                                                                c[927] = c[927] & ~(1 << d);
                                                                break h
                                                            }
                                                            if (!(c[((0 | c[(v = g + 16 | 0) >> 2]) == (0 | b) ? v : g + 20 | 0) >> 2] = a)) break h
                                                        } while (0);
                                                        if (c[a + 24 >> 2] = g, 0 | (e = 0 | c[(d = b + 16 | 0) >> 2]) && (c[a + 16 >> 2] = e, c[e + 24 >> 2] = a), !(d = 0 | c[d + 4 >> 2])) break;
                                                        c[a + 20 >> 2] = d, c[d + 24 >> 2] = a
                                                    } while (0);
                                                    b = b + h | 0, f = h + i | 0
                                                } else f = i;
                                                if (c[(b = b + 4 | 0) >> 2] = -2 & c[b >> 2], c[k + 4 >> 2] = 1 | f, b = (c[k + f >> 2] = f) >>> 3, f >>> 0 < 256) {
                                                    d = 3744 + (b << 1 << 2) | 0, (a = 0 | c[926]) & (b = 1 << b) ? b = 0 | c[(a = d + 8 | 0) >> 2] : (c[926] = a | b, a = (b = d) + 8 | 0), c[a >> 2] = k, c[b + 12 >> 2] = k, c[k + 8 >> 2] = b, c[k + 12 >> 2] = d;
                                                    break
                                                }
                                                b = f >>> 8;
                                                do {
                                                    if (b) {
                                                        if (16777215 < f >>> 0) {
                                                            e = 31;
                                                            break
                                                        }
                                                        e = 1 & ((v = (e = 14 - ((t = (t = (e = b << (u = (u = b + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | u | (v = (v = (e <<= t) + 245760 | 0) >>> 16 & 2)) + ((e <<= v) >>> 15) | 0) + 7 | 0) ? f >>> v : f) | e << 1
                                                    } else e = 0
                                                } while (0);
                                                if (b = 4008 + (e << 2) | 0, c[k + 28 >> 2] = e, c[(a = k + 16 | 0) + 4 >> 2] = 0, !((a = (c[a >> 2] = 0) | c[927]) & (d = 1 << e))) {
                                                    c[927] = a | d, c[b >> 2] = k, c[k + 24 >> 2] = b, c[k + 12 >> 2] = k, c[k + 8 >> 2] = k;
                                                    break
                                                }
                                                b = 0 | c[b >> 2];
                                                i: do {
                                                    if ((-8 & c[b + 4 >> 2] | 0) != (0 | f)) {
                                                        for (e = f << (31 == (0 | e) ? 0 : 25 - (e >>> 1) | 0); a = 0 | c[(d = b + 16 + (e >>> 31 << 2) | 0) >> 2];) {
                                                            if ((-8 & c[a + 4 >> 2] | 0) == (0 | f)) {
                                                                b = a;
                                                                break i
                                                            }
                                                            e <<= 1, b = a
                                                        }
                                                        c[d >> 2] = k, c[k + 24 >> 2] = b, c[k + 12 >> 2] = k, c[k + 8 >> 2] = k;
                                                        break g
                                                    }
                                                } while (0);
                                                v = 0 | c[(u = b + 8 | 0) >> 2], c[v + 12 >> 2] = k, c[u >> 2] = k, c[k + 8 >> 2] = v, c[k + 12 >> 2] = b, c[k + 24 >> 2] = 0
                                            }
                                        } while (0);
                                        return Y = w, 0 | (v = l + 8 | 0)
                                    }
                                    for (b = 4152; !((a = 0 | c[b >> 2]) >>> 0 <= j >>> 0 && j >>> 0 < (v = a + (0 | c[b + 4 >> 2]) | 0) >>> 0);) b = 0 | c[b + 8 >> 2];
                                    for (b = (a = (a = (f = v + -47 | 0) + (0 == (7 & (a = f + 8 | 0) | 0) ? 0 : 0 - a & 7) | 0) >>> 0 < (f = j + 16 | 0) >>> 0 ? j : a) + 8 | 0, u = g + (t = 0 == (7 & (t = g + 8 | 0) | 0) ? 0 : 0 - t & 7) | 0, t = (d = h + -40 | 0) - t | 0, c[932] = u, c[929] = t, c[u + 4 >> 2] = 1 | t, c[g + d + 4 >> 2] = 40, c[933] = c[1048], c[(d = a + 4 | 0) >> 2] = 27, c[b >> 2] = c[1038], c[b + 4 >> 2] = c[1039], c[b + 8 >> 2] = c[1040], c[b + 12 >> 2] = c[1041], c[1038] = g, c[1039] = h, c[1041] = 0, c[1040] = b, b = a + 24 | 0; c[(b = (u = b) + 4 | 0) >> 2] = 7, (u + 8 | 0) >>> 0 < v >>> 0;);
                                    if ((0 | a) != (0 | j)) {
                                        if (g = a - j | 0, c[d >> 2] = -2 & c[d >> 2], c[j + 4 >> 2] = 1 | g, b = (c[a >> 2] = g) >>> 3, g >>> 0 < 256) {
                                            d = 3744 + (b << 1 << 2) | 0, (a = 0 | c[926]) & (b = 1 << b) ? b = 0 | c[(a = d + 8 | 0) >> 2] : (c[926] = a | b, a = (b = d) + 8 | 0), c[a >> 2] = j, c[b + 12 >> 2] = j, c[j + 8 >> 2] = b, c[j + 12 >> 2] = d;
                                            break
                                        }
                                        if (d = 4008 + ((e = (b = g >>> 8) ? 16777215 < g >>> 0 ? 31 : 1 & ((v = (e = 14 - ((t = (t = (e = b << (u = (u = b + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | u | (v = (v = (e <<= t) + 245760 | 0) >>> 16 & 2)) + ((e <<= v) >>> 15) | 0) + 7 | 0) ? g >>> v : g) | e << 1 : 0) << 2) | 0, c[j + 28 >> 2] = e, c[j + 20 >> 2] = 0, !((b = (c[f >> 2] = 0) | c[927]) & (a = 1 << e))) {
                                            c[927] = b | a, c[d >> 2] = j, c[j + 24 >> 2] = d, c[j + 12 >> 2] = j, c[j + 8 >> 2] = j;
                                            break
                                        }
                                        b = 0 | c[d >> 2];
                                        j: do {
                                            if ((-8 & c[b + 4 >> 2] | 0) != (0 | g)) {
                                                for (e = g << (31 == (0 | e) ? 0 : 25 - (e >>> 1) | 0); a = 0 | c[(d = b + 16 + (e >>> 31 << 2) | 0) >> 2];) {
                                                    if ((-8 & c[a + 4 >> 2] | 0) == (0 | g)) {
                                                        b = a;
                                                        break j
                                                    }
                                                    e <<= 1, b = a
                                                }
                                                c[d >> 2] = j, c[j + 24 >> 2] = b, c[j + 12 >> 2] = j, c[j + 8 >> 2] = j;
                                                break f
                                            }
                                        } while (0);
                                        v = 0 | c[(u = b + 8 | 0) >> 2], c[v + 12 >> 2] = j, c[u >> 2] = j, c[j + 8 >> 2] = v, c[j + 12 >> 2] = b, c[j + 24 >> 2] = 0
                                    }
                                } else 0 == (0 | (v = 0 | c[930])) | g >>> 0 < v >>> 0 && (c[930] = g), c[1038] = g, c[1039] = h, c[1041] = 0, c[935] = c[1044], c[934] = -1, c[939] = 3744, c[938] = 3744, c[941] = 3752, c[940] = 3752, c[943] = 3760, c[942] = 3760, c[945] = 3768, c[944] = 3768, c[947] = 3776, c[946] = 3776, c[949] = 3784, c[948] = 3784, c[951] = 3792, c[950] = 3792, c[953] = 3800, c[952] = 3800, c[955] = 3808, c[954] = 3808, c[957] = 3816, c[956] = 3816, c[959] = 3824, c[958] = 3824, c[961] = 3832, c[960] = 3832, c[963] = 3840, c[962] = 3840, c[965] = 3848, c[964] = 3848, c[967] = 3856, c[966] = 3856, c[969] = 3864, c[968] = 3864, c[971] = 3872, c[970] = 3872, c[973] = 3880, c[972] = 3880, c[975] = 3888, c[974] = 3888, c[977] = 3896, c[976] = 3896, c[979] = 3904, c[978] = 3904, c[981] = 3912, c[980] = 3912, c[983] = 3920, c[982] = 3920, c[985] = 3928, c[984] = 3928, c[987] = 3936, c[986] = 3936, c[989] = 3944, c[988] = 3944, c[991] = 3952, c[990] = 3952, c[993] = 3960, c[992] = 3960, c[995] = 3968, c[994] = 3968, c[997] = 3976, c[996] = 3976, c[999] = 3984, c[998] = 3984, c[1001] = 3992, c[1e3] = 3992, u = g + (t = 0 == (7 & (t = g + 8 | 0) | 0) ? 0 : 0 - t & 7) | 0, t = (v = h + -40 | 0) - t | 0, c[932] = u, c[929] = t, c[u + 4 >> 2] = 1 | t, c[g + v + 4 >> 2] = 40, c[933] = c[1048]
                            } while (0);
                            if (m >>> 0 < (b = 0 | c[929]) >>> 0) return t = b - m | 0, c[929] = t, u = (v = 0 | c[932]) + m | 0, c[932] = u, c[u + 4 >> 2] = 1 | t, c[v + 4 >> 2] = 3 | m, Y = w, 0 | (v = v + 8 | 0)
                        }
                        return c[(v = 3700) >> 2] = 12, Y = w, (v = 0) | v
                    }

                    function gc(a) {
                        var b = 0,
                            d = 0,
                            e = 0,
                            f = 0,
                            g = 0,
                            h = 0,
                            i = 0,
                            j = 0;
                        if (a |= 0) {
                            d = a + -8 | 0, f = 0 | c[930], j = d + (b = -8 & (a = 0 | c[a + -4 >> 2])) | 0;
                            do {
                                if (1 & a) h = i = d;
                                else {
                                    if (e = 0 | c[d >> 2], !(3 & a)) return;
                                    if (g = e + b | 0, (h = d + (0 - e) | 0) >>> 0 < f >>> 0) return;
                                    if ((0 | c[931]) == (0 | h)) {
                                        if (3 == (3 & (b = 0 | c[(a = j + 4 | 0) >> 2]) | 0)) return c[928] = g, c[a >> 2] = -2 & b, c[h + 4 >> 2] = 1 | g, void(c[h + g >> 2] = g);
                                        i = h, b = g;
                                        break
                                    }
                                    if (d = e >>> 3, e >>> 0 < 256) {
                                        if (a = 0 | c[h + 8 >> 2], (0 | (b = 0 | c[h + 12 >> 2])) == (0 | a)) {
                                            c[926] = c[926] & ~(1 << d), i = h, b = g;
                                            break
                                        }
                                        c[a + 12 >> 2] = b, c[b + 8 >> 2] = a, i = h, b = g;
                                        break
                                    }
                                    f = 0 | c[h + 24 >> 2], a = 0 | c[h + 12 >> 2];
                                    do {
                                        if ((0 | a) == (0 | h)) {
                                            if (a = 0 | c[(d = (b = h + 16 | 0) + 4 | 0) >> 2]) b = d;
                                            else if (!(a = 0 | c[b >> 2])) {
                                                a = 0;
                                                break
                                            }
                                            for (;;)
                                                if (d = 0 | c[(e = a + 20 | 0) >> 2]) a = d, b = e;
                                                else {
                                                    if (!(d = 0 | c[(e = a + 16 | 0) >> 2])) break;
                                                    a = d, b = e
                                                } c[b >> 2] = 0
                                        } else i = 0 | c[h + 8 >> 2], c[i + 12 >> 2] = a, c[a + 8 >> 2] = i
                                    } while (0);
                                    if (f) {
                                        if (b = 0 | c[h + 28 >> 2], (0 | c[(d = 4008 + (b << 2) | 0) >> 2]) == (0 | h)) {
                                            if (!(c[d >> 2] = a)) {
                                                c[927] = c[927] & ~(1 << b), i = h, b = g;
                                                break
                                            }
                                        } else if (!(c[((0 | c[(i = f + 16 | 0) >> 2]) == (0 | h) ? i : f + 20 | 0) >> 2] = a)) {
                                            i = h, b = g;
                                            break
                                        }
                                        c[a + 24 >> 2] = f, 0 | (d = 0 | c[(b = h + 16 | 0) >> 2]) && (c[a + 16 >> 2] = d, c[d + 24 >> 2] = a), b = (i = ((b = 0 | c[b + 4 >> 2]) && (c[a + 20 >> 2] = b, c[b + 24 >> 2] = a), h), g)
                                    } else i = h, b = g
                                }
                            } while (0);
                            if (!(j >>> 0 <= h >>> 0) && 1 & (e = 0 | c[(a = j + 4 | 0) >> 2])) {
                                if (2 & e) c[a >> 2] = -2 & e, c[i + 4 >> 2] = 1 | b, f = c[h + b >> 2] = b;
                                else {
                                    if ((0 | c[932]) == (0 | j)) {
                                        if (j = (0 | c[929]) + b | 0, c[929] = j, c[932] = i, c[i + 4 >> 2] = 1 | j, (0 | i) != (0 | c[931])) return;
                                        return c[931] = 0, void(c[928] = 0)
                                    }
                                    if ((0 | c[931]) == (0 | j)) return j = (0 | c[928]) + b | 0, c[928] = j, c[931] = h, c[i + 4 >> 2] = 1 | j, void(c[h + j >> 2] = j);
                                    f = (-8 & e) + b | 0, d = e >>> 3;
                                    do {
                                        if (e >>> 0 < 256) {
                                            if (b = 0 | c[j + 8 >> 2], (0 | (a = 0 | c[j + 12 >> 2])) == (0 | b)) {
                                                c[926] = c[926] & ~(1 << d);
                                                break
                                            }
                                            c[b + 12 >> 2] = a, c[a + 8 >> 2] = b;
                                            break
                                        }
                                        g = 0 | c[j + 24 >> 2], a = 0 | c[j + 12 >> 2];
                                        do {
                                            if ((0 | a) == (0 | j)) {
                                                if (a = 0 | c[(d = (b = j + 16 | 0) + 4 | 0) >> 2]) b = d;
                                                else if (!(a = 0 | c[b >> 2])) {
                                                    d = 0;
                                                    break
                                                }
                                                for (;;)
                                                    if (d = 0 | c[(e = a + 20 | 0) >> 2]) a = d, b = e;
                                                    else {
                                                        if (!(d = 0 | c[(e = a + 16 | 0) >> 2])) break;
                                                        a = d, b = e
                                                    } c[b >> 2] = 0, d = a
                                            } else d = 0 | c[j + 8 >> 2], c[d + 12 >> 2] = a, c[a + 8 >> 2] = d, d = a
                                        } while (0);
                                        if (0 | g) {
                                            if (a = 0 | c[j + 28 >> 2], (0 | c[(b = 4008 + (a << 2) | 0) >> 2]) == (0 | j)) {
                                                if (!(c[b >> 2] = d)) {
                                                    c[927] = c[927] & ~(1 << a);
                                                    break
                                                }
                                            } else if (!(c[((0 | c[(e = g + 16 | 0) >> 2]) == (0 | j) ? e : g + 20 | 0) >> 2] = d)) break;
                                            c[d + 24 >> 2] = g, 0 | (b = 0 | c[(a = j + 16 | 0) >> 2]) && (c[d + 16 >> 2] = b, c[b + 24 >> 2] = d), 0 | (a = 0 | c[a + 4 >> 2]) && (c[d + 20 >> 2] = a, c[a + 24 >> 2] = d)
                                        }
                                    } while (0);
                                    if (c[i + 4 >> 2] = 1 | f, c[h + f >> 2] = f, (0 | i) == (0 | c[931])) return void(c[928] = f)
                                }
                                if (a = f >>> 3, f >>> 0 < 256) return d = 3744 + (a << 1 << 2) | 0, (b = 0 | c[926]) & (a = 1 << a) ? a = 0 | c[(b = d + 8 | 0) >> 2] : (c[926] = b | a, b = (a = d) + 8 | 0), c[b >> 2] = i, c[a + 12 >> 2] = i, c[i + 8 >> 2] = a, void(c[i + 12 >> 2] = d);
                                a = 4008 + ((e = (a = f >>> 8) ? 16777215 < f >>> 0 ? 31 : 1 & ((j = (e = 14 - ((g = (g = (e = a << (h = (h = a + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | h | (j = (j = (e <<= g) + 245760 | 0) >>> 16 & 2)) + ((e <<= j) >>> 15) | 0) + 7 | 0) ? f >>> j : f) | e << 1 : 0) << 2) | 0, c[i + 28 >> 2] = e, c[i + 20 >> 2] = 0, b = (c[i + 16 >> 2] = 0) | c[927], d = 1 << e;
                                a: do {
                                    if (b & d) {
                                        a = 0 | c[a >> 2];
                                        b: do {
                                            if ((-8 & c[a + 4 >> 2] | 0) != (0 | f)) {
                                                for (e = f << (31 == (0 | e) ? 0 : 25 - (e >>> 1) | 0); b = 0 | c[(d = a + 16 + (e >>> 31 << 2) | 0) >> 2];) {
                                                    if ((-8 & c[b + 4 >> 2] | 0) == (0 | f)) {
                                                        a = b;
                                                        break b
                                                    }
                                                    e <<= 1, a = b
                                                }
                                                c[d >> 2] = i, c[i + 24 >> 2] = a, c[i + 12 >> 2] = i, c[i + 8 >> 2] = i;
                                                break a
                                            }
                                        } while (0);
                                        j = 0 | c[(h = a + 8 | 0) >> 2], c[j + 12 >> 2] = i, c[h >> 2] = i, c[i + 8 >> 2] = j, c[i + 12 >> 2] = a, c[i + 24 >> 2] = 0
                                    } else c[927] = b | d, c[a >> 2] = i, c[i + 24 >> 2] = a, c[i + 12 >> 2] = i, c[i + 8 >> 2] = i
                                } while (0);
                                if (j = (0 | c[934]) - 1 | 0, !(0 | (c[934] = j))) {
                                    for (a = 4160; a = 0 | c[a >> 2];) a = a + 8 | 0;
                                    c[934] = -1
                                }
                            }
                        }
                    }

                    function hc(a, b) {
                        var d = 0,
                            e = 0,
                            f = 0,
                            g = 0,
                            h = 0,
                            i = 0;
                        i = (a |= 0) + (b |= 0) | 0, d = 0 | c[a + 4 >> 2];
                        do {
                            if (1 & d) h = a;
                            else {
                                if (f = 0 | c[a >> 2], !(3 & d)) return;
                                if (h = a + (0 - f) | 0, b = f + b | 0, (0 | c[931]) == (0 | h)) {
                                    if (3 != (3 & (d = 0 | c[(a = i + 4 | 0) >> 2]) | 0)) break;
                                    return c[928] = b, c[a >> 2] = -2 & d, c[h + 4 >> 2] = 1 | b, void(c[i >> 2] = b)
                                }
                                if (e = f >>> 3, f >>> 0 < 256) {
                                    if (a = 0 | c[h + 8 >> 2], (0 | (d = 0 | c[h + 12 >> 2])) == (0 | a)) {
                                        c[926] = c[926] & ~(1 << e);
                                        break
                                    }
                                    c[a + 12 >> 2] = d, c[d + 8 >> 2] = a;
                                    break
                                }
                                g = 0 | c[h + 24 >> 2], a = 0 | c[h + 12 >> 2];
                                do {
                                    if ((0 | a) == (0 | h)) {
                                        if (a = 0 | c[(e = (d = h + 16 | 0) + 4 | 0) >> 2]) d = e;
                                        else if (!(a = 0 | c[d >> 2])) {
                                            a = 0;
                                            break
                                        }
                                        for (;;)
                                            if (e = 0 | c[(f = a + 20 | 0) >> 2]) a = e, d = f;
                                            else {
                                                if (!(e = 0 | c[(f = a + 16 | 0) >> 2])) break;
                                                a = e, d = f
                                            } c[d >> 2] = 0
                                    } else f = 0 | c[h + 8 >> 2], c[f + 12 >> 2] = a, c[a + 8 >> 2] = f
                                } while (0);
                                if (g) {
                                    if (d = 0 | c[h + 28 >> 2], (0 | c[(e = 4008 + (d << 2) | 0) >> 2]) == (0 | h)) {
                                        if (!(c[e >> 2] = a)) {
                                            c[927] = c[927] & ~(1 << d);
                                            break
                                        }
                                    } else if (!(c[((0 | c[(f = g + 16 | 0) >> 2]) == (0 | h) ? f : g + 20 | 0) >> 2] = a)) break;
                                    c[a + 24 >> 2] = g, 0 | (e = 0 | c[(d = h + 16 | 0) >> 2]) && (c[a + 16 >> 2] = e, c[e + 24 >> 2] = a), (d = 0 | c[d + 4 >> 2]) && (c[a + 20 >> 2] = d, c[d + 24 >> 2] = a)
                                }
                            }
                        } while (0);
                        if (2 & (e = 0 | c[(a = i + 4 | 0) >> 2])) c[a >> 2] = -2 & e, c[h + 4 >> 2] = 1 | b, f = c[h + b >> 2] = b;
                        else {
                            if ((0 | c[932]) == (0 | i)) {
                                if (i = (0 | c[929]) + b | 0, c[929] = i, c[932] = h, c[h + 4 >> 2] = 1 | i, (0 | h) != (0 | c[931])) return;
                                return c[931] = 0, void(c[928] = 0)
                            }
                            if ((0 | c[931]) == (0 | i)) return i = (0 | c[928]) + b | 0, c[928] = i, c[931] = h, c[h + 4 >> 2] = 1 | i, void(c[h + i >> 2] = i);
                            f = (-8 & e) + b | 0, d = e >>> 3;
                            do {
                                if (e >>> 0 < 256) {
                                    if (a = 0 | c[i + 8 >> 2], (0 | (b = 0 | c[i + 12 >> 2])) == (0 | a)) {
                                        c[926] = c[926] & ~(1 << d);
                                        break
                                    }
                                    c[a + 12 >> 2] = b, c[b + 8 >> 2] = a;
                                    break
                                }
                                g = 0 | c[i + 24 >> 2], b = 0 | c[i + 12 >> 2];
                                do {
                                    if ((0 | b) == (0 | i)) {
                                        if (b = 0 | c[(d = (a = i + 16 | 0) + 4 | 0) >> 2]) a = d;
                                        else if (!(b = 0 | c[a >> 2])) {
                                            d = 0;
                                            break
                                        }
                                        for (;;)
                                            if (d = 0 | c[(e = b + 20 | 0) >> 2]) b = d, a = e;
                                            else {
                                                if (!(d = 0 | c[(e = b + 16 | 0) >> 2])) break;
                                                b = d, a = e
                                            } c[a >> 2] = 0, d = b
                                    } else d = 0 | c[i + 8 >> 2], c[d + 12 >> 2] = b, c[b + 8 >> 2] = d, d = b
                                } while (0);
                                if (0 | g) {
                                    if (b = 0 | c[i + 28 >> 2], (0 | c[(a = 4008 + (b << 2) | 0) >> 2]) == (0 | i)) {
                                        if (!(c[a >> 2] = d)) {
                                            c[927] = c[927] & ~(1 << b);
                                            break
                                        }
                                    } else if (!(c[((0 | c[(e = g + 16 | 0) >> 2]) == (0 | i) ? e : g + 20 | 0) >> 2] = d)) break;
                                    c[d + 24 >> 2] = g, 0 | (a = 0 | c[(b = i + 16 | 0) >> 2]) && (c[d + 16 >> 2] = a, c[a + 24 >> 2] = d), 0 | (b = 0 | c[b + 4 >> 2]) && (c[d + 20 >> 2] = b, c[b + 24 >> 2] = d)
                                }
                            } while (0);
                            if (c[h + 4 >> 2] = 1 | f, c[h + f >> 2] = f, (0 | h) == (0 | c[931])) return void(c[928] = f)
                        }
                        if (b = f >>> 3, f >>> 0 < 256) return d = 3744 + (b << 1 << 2) | 0, (a = 0 | c[926]) & (b = 1 << b) ? b = 0 | c[(a = d + 8 | 0) >> 2] : (c[926] = a | b, a = (b = d) + 8 | 0), c[a >> 2] = h, c[b + 12 >> 2] = h, c[h + 8 >> 2] = b, void(c[h + 12 >> 2] = d);
                        if (b = 4008 + ((e = (b = f >>> 8) ? 16777215 < f >>> 0 ? 31 : 1 & ((i = (e = 14 - ((d = (d = (e = b << (g = (g = b + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | g | (i = (i = (e <<= d) + 245760 | 0) >>> 16 & 2)) + ((e <<= i) >>> 15) | 0) + 7 | 0) ? f >>> i : f) | e << 1 : 0) << 2) | 0, c[h + 28 >> 2] = e, c[h + 20 >> 2] = 0, !((a = (c[h + 16 >> 2] = 0) | c[927]) & (d = 1 << e))) return c[927] = a | d, c[b >> 2] = h, c[h + 24 >> 2] = b, c[h + 12 >> 2] = h, void(c[h + 8 >> 2] = h);
                        b = 0 | c[b >> 2];
                        a: do {
                            if ((-8 & c[b + 4 >> 2] | 0) != (0 | f)) {
                                for (e = f << (31 == (0 | e) ? 0 : 25 - (e >>> 1) | 0); a = 0 | c[(d = b + 16 + (e >>> 31 << 2) | 0) >> 2];) {
                                    if ((-8 & c[a + 4 >> 2] | 0) == (0 | f)) {
                                        b = a;
                                        break a
                                    }
                                    e <<= 1, b = a
                                }
                                return c[d >> 2] = h, c[h + 24 >> 2] = b, c[h + 12 >> 2] = h, void(c[h + 8 >> 2] = h)
                            }
                        } while (0);
                        i = 0 | c[(g = b + 8 | 0) >> 2], c[i + 12 >> 2] = h, c[g >> 2] = h, c[h + 8 >> 2] = i, c[h + 12 >> 2] = b, c[h + 24 >> 2] = 0
                    }

                    function ic(a, b) {
                        b |= 0;
                        var g, d = 0,
                            e = 0,
                            f = 0,
                            h = 0,
                            i = 0;
                        if ((d = 16 < (a |= 0) >>> 0 ? a : 16) + -1 & d)
                            for (a = 16; a >>> 0 < d >>> 0;) a <<= 1;
                        else a = d;
                        if ((-64 - a | 0) >>> 0 <= b >>> 0) return c[(h = 3700) >> 2] = 12, (h = 0) | h;
                        if (!(d = 0 | fc(12 + (g = b >>> 0 < 11 ? 16 : b + 11 & -8) + a | 0))) return (h = 0) | h;
                        f = d + -8 | 0;
                        do {
                            if (a + -1 & d) {
                                if (b = (e = 15 < ((e = (d + a + -1 & 0 - a) - 8 | 0) - (b = f) | 0) >>> 0 ? e : e + a | 0) - b | 0, d = (-8 & (i = 0 | c[(a = d + -4 | 0) >> 2])) - b | 0, 3 & i) {
                                    c[(i = e + 4 | 0) >> 2] = d | 1 & c[i >> 2] | 2, c[(d = e + d + 4 | 0) >> 2] = 1 | c[d >> 2], c[a >> 2] = b | 1 & c[a >> 2] | 2, c[i >> 2] = 1 | c[i >> 2], hc(f, b), b = a = e;
                                    break
                                }
                                c[e >> 2] = (0 | c[f >> 2]) + b, c[e + 4 >> 2] = d, b = a = e;
                                break
                            }
                            b = a = f
                        } while (0);
                        return 3 & (d = 0 | c[(a = a + 4 | 0) >> 2]) | 0 && (16 + g | 0) >>> 0 < (h = -8 & d) >>> 0 && (i = h - g | 0, f = b + g | 0, c[a >> 2] = g | 1 & d | 2, c[f + 4 >> 2] = 3 | i, c[(h = b + h + 4 | 0) >> 2] = 1 | c[h >> 2], hc(f, i)), 0 | (i = b + 8 | 0)
                    }

                    function jc(a, b, d) {
                        a |= 0, b |= 0, d |= 0;
                        var e = 0;
                        do {
                            if (8 != (0 | b)) {
                                if (0 != (3 & b | 0) | 0 == (0 | (e = b >>> 2))) return 0 | (a = 22);
                                if (e + 1073741823 & e | 0) return 0 | (a = 22);
                                if ((-64 - b | 0) >>> 0 < d >>> 0) return 0 | (a = 12);
                                b = 0 | ic(16 < b >>> 0 ? b : 16, d);
                                break
                            }
                            b = 0 | fc(d)
                        } while (0);
                        return b ? (c[a >> 2] = b, (a = 0) | a) : 0 | (a = 12)
                    }

                    function lc(a, b, c, d) {
                        b |= 0, d |= 0;
                        var e, f;
                        return c = 0 | function (a, b) {
                            var c, d, f, e = 0;
                            return a = ((c = 0 | w(e = 65535 & (b |= 0), f = 65535 & (a |= 0))) >>> 16) + (0 | w(e, d = a >>> 16)) | 0, b = 0 | w(e = b >>> 16, f), 0 | (z((a >>> 16) + (0 | w(e, d)) + (((65535 & a) + b | 0) >>> 16) | 0), a + b << 16 | 65535 & c | 0)
                        }(e = a |= 0, f = c |= 0), a = 0 | A(), 0 | (z((0 | w(b, f)) + (0 | w(d, e)) + a | 0 & a | 0), 0 | c)
                    }

                    function mc(a, b, c, d) {
                        return 0 | (z((b |= 0) + (d |= 0) + ((c = (a |= 0) + (c |= 0) >>> 0) >>> 0 < a >>> 0 | 0) >>> 0 | 0), 0 | c)
                    }

                    function nc(a, b, c, d) {
                        return 0 | (z(0 | (d = (b |= 0) - (d |= 0) - ((a |= 0) >>> 0 < (c |= 0) >>> 0 | 0) >>> 0)), a - c >>> 0 | 0)
                    }

                    function oc(a) {
                        return 0 | ((a |= 0) ? 31 - (0 | x(a ^ a - 1)) | 0 : 32)
                    }

                    function pc(a, b, d, e, f) {
                        f |= 0;
                        var g = 0,
                            h = 0,
                            i = 0,
                            j = 0,
                            k = 0,
                            l = 0,
                            m = 0,
                            n = 0,
                            o = 0,
                            p = 0;
                        if (l = a |= 0, h = d |= 0, i = n = e |= 0, !(k = j = b |= 0)) return g = 0 != (0 | f), i ? (g && (c[f >> 2] = 0 | a, c[f + 4 >> 2] = 0 & b), (f = n = 0) | (z(0 | n), f)) : (g && (c[f >> 2] = (l >>> 0) % (h >>> 0), c[f + 4 >> 2] = 0), f = (l >>> (n = 0)) / (h >>> 0) >>> 0, 0 | (z(0 | n), f));
                        g = 0 == (0 | i);
                        do {
                            if (h) {
                                if (!g) {
                                    if ((g = (0 | x(0 | i)) - (0 | x(0 | k)) | 0) >>> 0 <= 31) {
                                        a = l >>> ((h = m = g + 1 | 0) >>> 0) & (b = g - 31 >> 31) | k << (i = 31 - g | 0), b &= k >>> (m >>> 0), g = 0, i = l << i;
                                        break
                                    }
                                    return f && (c[f >> 2] = 0 | a, c[f + 4 >> 2] = j | 0 & b), (f = n = 0) | (z(0 | n), f)
                                }
                                if ((g = h - 1 | 0) & h | 0) {
                                    a = (m = 32 - (i = 33 + (0 | x(0 | h)) - (0 | x(0 | k)) | 0) | 0) - 1 >> 31 & k >>> ((o = i - 32 | 0) >>> 0) | (k << m | l >>> ((h = i) >>> 0)) & (b = o >> 31), b &= k >>> (i >>> 0), g = l << (p = 64 - i | 0) & (j = m >> 31), i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
                                    break
                                }
                                return 0 | f && (c[f >> 2] = g & l, c[f + 4 >> 2] = 0), 1 == (0 | h) ? (p = 0 | a, 0 | (z(0 | (o = j | 0 & b)), p)) : (o = k >>> ((p = 0 | oc(0 | h)) >>> 0) | 0, p = k << 32 - p | l >>> (p >>> 0) | 0, 0 | (z(0 | o), p))
                            }
                            if (g) return 0 | f && (c[f >> 2] = (k >>> 0) % (h >>> 0), c[f + 4 >> 2] = 0), p = (k >>> (o = 0)) / (h >>> 0) >>> 0, 0 | (z(0 | o), p);
                            if (!l) return 0 | f && (c[f >> 2] = 0, c[f + 4 >> 2] = (k >>> 0) % (i >>> 0)), p = (k >>> (o = 0)) / (i >>> 0) >>> 0, 0 | (z(0 | o), p);
                            if (!((g = i - 1 | 0) & i)) return 0 | f && (c[f >> 2] = 0 | a, c[f + 4 >> 2] = g & k | 0 & b), p = k >>> (((o = 0) | oc(0 | i)) >>> 0), 0 | (z(0 | o), p);
                            if ((g = (0 | x(0 | i)) - (0 | x(0 | k)) | 0) >>> 0 <= 30) {
                                a = k << (i = 31 - g | 0) | l >>> ((h = b = g + 1 | 0) >>> 0), b = k >>> (b >>> 0), g = 0, i = l << i;
                                break
                            }
                            return f && (c[f >> 2] = 0 | a, c[f + 4 >> 2] = j | 0 & b), (p = o = 0) | (z(0 | o), p)
                        } while (0);
                        if (h) {
                            for (k = 0 | mc(0 | (m = 0 | d), 0 | (l = n | 0 & e), -1, -1), d = 0 | A(), j = i, i = 0; j = g >>> 31 | (e = j) << 1, g = i | g << 1, nc(0 | k, 0 | d, 0 | (e = a << 1 | e >>> 31 | 0), 0 | (n = a >>> 31 | b << 1 | 0)), i = 1 & (o = (p = 0 | A()) >> 31 | ((0 | p) < 0 ? -1 : 0) << 1), a = 0 | nc(0 | e, 0 | n, o & m | 0, (((0 | p) < 0 ? -1 : 0) >> 31 | ((0 | p) < 0 ? -1 : 0) << 1) & l | 0), b = 0 | A(), 0 != (0 | (h = h - 1 | 0)););
                            k = j, j = 0
                        } else k = i, i = j = 0;
                        return (h = 0) | f && (c[f >> 2] = a, c[f + 4 >> 2] = b), p = -2 & (g << 1 | 0) | i, 0 | (z(0 | (o = (0 | g) >>> 31 | (k | h) << 1 | 0 & (h << 1 | g >>> 31) | j)), p)
                    }

                    function qc(a, b, c, d) {
                        return 0 | pc(a |= 0, b |= 0, c |= 0, d |= 0, 0)
                    }

                    function rc(a, b, c) {
                        return a |= 0, b |= 0, (0 | (c |= 0)) < 32 ? (z(b >>> c | 0), a >>> c | (b & (1 << c) - 1) << 32 - c) : (z(0), b >>> c - 32 | 0)
                    }

                    function sc(a, b, c) {
                        return a |= 0, b |= 0, (0 | (c |= 0)) < 32 ? (z(b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c | 0), a << c) : (z(a << c - 32 | 0), 0)
                    }

                    function tc(b, d, e) {
                        b |= 0, d |= 0;
                        var g, h, f = 0;
                        if (8192 <= (0 | (e |= 0))) return P(0 | b, 0 | d, 0 | e), 0 | b;
                        if (h = 0 | b, g = b + e | 0, (3 & b) == (3 & d)) {
                            for (; 3 & b;) {
                                if (!e) return 0 | h;
                                a[b >> 0] = 0 | a[d >> 0], b = b + 1 | 0, d = d + 1 | 0, e = e - 1 | 0
                            }
                            for (f = (e = -4 & g | 0) - 64 | 0;
                                (0 | b) <= (0 | f);) c[b >> 2] = c[d >> 2], c[b + 4 >> 2] = c[d + 4 >> 2], c[b + 8 >> 2] = c[d + 8 >> 2], c[b + 12 >> 2] = c[d + 12 >> 2], c[b + 16 >> 2] = c[d + 16 >> 2], c[b + 20 >> 2] = c[d + 20 >> 2], c[b + 24 >> 2] = c[d + 24 >> 2], c[b + 28 >> 2] = c[d + 28 >> 2], c[b + 32 >> 2] = c[d + 32 >> 2], c[b + 36 >> 2] = c[d + 36 >> 2], c[b + 40 >> 2] = c[d + 40 >> 2], c[b + 44 >> 2] = c[d + 44 >> 2], c[b + 48 >> 2] = c[d + 48 >> 2], c[b + 52 >> 2] = c[d + 52 >> 2], c[b + 56 >> 2] = c[d + 56 >> 2], c[b + 60 >> 2] = c[d + 60 >> 2], b = b + 64 | 0, d = d + 64 | 0;
                            for (;
                                (0 | b) < (0 | e);) c[b >> 2] = c[d >> 2], b = b + 4 | 0, d = d + 4 | 0
                        } else
                            for (e = g - 4 | 0;
                                (0 | b) < (0 | e);) a[b >> 0] = 0 | a[d >> 0], a[b + 1 >> 0] = 0 | a[d + 1 >> 0], a[b + 2 >> 0] = 0 | a[d + 2 >> 0], a[b + 3 >> 0] = 0 | a[d + 3 >> 0], b = b + 4 | 0, d = d + 4 | 0;
                        for (;
                            (0 | b) < (0 | g);) a[b >> 0] = 0 | a[d >> 0], b = b + 1 | 0, d = d + 1 | 0;
                        return 0 | h
                    }

                    function uc(b, d, e) {
                        d |= 0;
                        var h, f = 0,
                            g = 0,
                            i = 0;
                        if (h = (b |= 0) + (e |= 0) | 0, d &= 255, 67 <= (0 | e)) {
                            for (; 3 & b;) a[b >> 0] = d, b = b + 1 | 0;
                            for (i = d | d << 8 | d << 16 | d << 24, g = (f = -4 & h | 0) - 64 | 0;
                                (0 | b) <= (0 | g);) c[b >> 2] = i, c[b + 4 >> 2] = i, c[b + 8 >> 2] = i, c[b + 12 >> 2] = i, c[b + 16 >> 2] = i, c[b + 20 >> 2] = i, c[b + 24 >> 2] = i, c[b + 28 >> 2] = i, c[b + 32 >> 2] = i, c[b + 36 >> 2] = i, c[b + 40 >> 2] = i, c[b + 44 >> 2] = i, c[b + 48 >> 2] = i, c[b + 52 >> 2] = i, c[b + 56 >> 2] = i, c[b + 60 >> 2] = i, b = b + 64 | 0;
                            for (;
                                (0 | b) < (0 | f);) c[b >> 2] = i, b = b + 4 | 0
                        }
                        for (;
                            (0 | b) < (0 | h);) a[b >> 0] = d, b = b + 1 | 0;
                        return h - e | 0
                    }

                    function vc(a) {
                        a |= 0;
                        var b, d, e;
                        return e = 0 | O(), 0 < (0 | a) & (0 | (b = (d = 0 | c[i >> 2]) + a | 0)) < (0 | d) | (0 | b) < 0 ? (R(0 | b), J(12), -1) : (0 | e) < (0 | b) && !(0 | Q(0 | b)) ? (J(12), -1) : (c[i >> 2] = b, 0 | d)
                    }

                    function Mc(a) {
                        return 0, y(0), 0
                    }

                    function Nc(a, b, c, d, e, f) {
                        return 0, b = +b, 0, 0, 0, 0, y(1), 0
                    }

                    function Oc(a, b, c) {
                        return 0, 0, 0, y(2), 0
                    }

                    function Pc(a, b, c, d) {
                        return 0, 0, 0, 0, y(3), 0
                    }

                    function Rc(a, b) {
                        y(5)
                    }
                    var aa = [Mc, function (a) {
                            return 0 | B(0, 0 | (a |= 0))
                        }, function (a) {
                            var b, d;
                            return Y = (b = Y) + 16 | 0, d = b, a = 0 | function (a) {
                                return 0 | (a |= 0)
                            }(0 | c[(a |= 0) + 60 >> 2]), c[d >> 2] = a, a = 0 | Bb(0 | N(6, 0 | d)), Y = b, 0 | a
                        }, Mc],
                        ba = [Nc, function (a, b, c, d, e, f) {
                            return 0 | C(0, 0 | (a |= 0), +(b = +b), 0 | (c |= 0), 0 | (d |= 0), 0 | (e |= 0), 0 | (f |= 0))
                        }, function (b, e, f, g, h, i) {
                            b |= 0, e = +e, f |= 0, g |= 0, h |= 0, i |= 0;
                            var H, j = 0,
                                k = 0,
                                l = 0,
                                m = 0,
                                n = 0,
                                o = 0,
                                p = 0,
                                q = 0,
                                r = 0,
                                s = 0,
                                t = 0,
                                u = 0,
                                v = 0,
                                x = 0,
                                y = 0,
                                z = 0,
                                B = 0,
                                C = 0,
                                D = 0,
                                E = 0,
                                F = 0,
                                G = 0;
                            Y = (H = Y) + 560 | 0, l = H + 32 | 0, F = G = H, E = (m = H + 540 | 0) + 12 | (c[(u = H + 536 | 0) >> 2] = 0), ac(e), (0 | (j = 0 | A())) < 0 ? (ac(e = -e), D = 1, C = 2547, j = 0 | A()) : (D = 0 != (2049 & h | 0) & 1, C = 0 == (2048 & h | 0) ? 0 == (1 & h | 0) ? 2548 : 2553 : 2550);
                            do {
                                if (!0 & 2146435072 == (2146435072 & j | 0)) G = 0 != (32 & i | 0), Yb(b, 32, f, j = D + 3 | 0, -65537 & h), Sb(b, C, D), Sb(b, e != e | !1 ? G ? 2574 : 2578 : G ? 2566 : 2570, 3), Yb(b, 32, f, j, 8192 ^ h);
                                else {
                                    if ((j = 0 != (q = 2 * +bc(e, u))) && (c[u >> 2] = (0 | c[u >> 2]) - 1), 97 == (0 | (t = 32 | i))) {
                                        r = 0 == (0 | (o = 32 & i)) ? C : C + 9 | 0, p = 2 | D, j = 12 - g | 0;
                                        do {
                                            if (!(11 < g >>> 0 | 0 == (0 | j))) {
                                                for (e = 8; e *= 16, 0 != (0 | (j = j + -1 | 0)););
                                                if (45 == (0 | a[r >> 0])) {
                                                    e = -(e + (-q - e));
                                                    break
                                                }
                                                e = q + e - e;
                                                break
                                            }
                                            e = q
                                        } while (0);
                                        for ((0 | (j = 0 | Xb(j = (0 | (k = 0 | c[u >> 2])) < 0 ? 0 - k | 0 : k, ((0 | j) < 0) << 31 >> 31, E))) == (0 | E) && (a[(j = m + 11 | 0) >> 0] = 48), a[j + -1 >> 0] = 43 + (k >> 31 & 2), a[(n = j + -2 | 0) >> 0] = i + 15, k = (0 | g) < 1, l = 0 == (8 & h | 0), m = G; D = ~~e, j = m + 1 | 0, a[m >> 0] = o | d[480 + D >> 0], e = 16 * (e - +(0 | D)), m = 1 != (j - F | 0) || l & k & 0 == e ? j : (a[j >> 0] = 46, m + 2 | 0), 0 != e;);
                                        Yb(b, 32, f, E = (j = 0 != (0 | g) && (-2 - F + m | 0) < (0 | g) ? g + 2 + (k = E) - (l = n) | 0 : (k = E) - F - (l = n) + m | 0) + p | 0, h), Sb(b, r, p), Yb(b, 48, f, E, 65536 ^ h), Sb(b, G, F = m - F | 0), Yb(b, 48, j - (F + (G = k - l | 0)) | 0, 0, 0), Sb(b, n, G), Yb(b, 32, f, E, 8192 ^ h), j = E;
                                        break
                                    }
                                    for (k = (0 | g) < 0 ? 6 : g, j ? (j = (0 | c[u >> 2]) - 28 | 0, c[u >> 2] = j, e = 268435456 * q) : (e = q, j = 0 | c[u >> 2]), l = B = (0 | j) < 0 ? l : l + 288 | 0; y = ~~e >>> 0, c[l >> 2] = y, l = l + 4 | 0, 0 != (e = 1e9 * (e - +(y >>> 0))););
                                    if (y = B, 0 < (0 | j))
                                        for (o = B;;) {
                                            if (n = (0 | j) < 29 ? j : 29, o >>> 0 <= (j = l + -4 | 0) >>> 0) {
                                                for (m = 0; x = 0 | nc(0 | (s = 0 | mc(0 | (s = 0 | sc(0 | c[j >> 2], 0, 0 | n)), 0 | A(), 0 | m, 0)), 0 | (v = 0 | A()), 0 | (x = 0 | lc(0 | (m = 0 | qc(0 | s, 0 | v, 1e9, 0)), 0 | A(), 1e9, 0)), 0 | A()), A(), c[j >> 2] = x, o >>> 0 <= (j = j + -4 | 0) >>> 0;);
                                                m = m ? (c[(x = o + -4 | 0) >> 2] = m, x) : o
                                            } else m = o;
                                            a: do {
                                                if (m >>> 0 < l >>> 0)
                                                    for (j = l;;) {
                                                        if (0 | c[(l = j + -4 | 0) >> 2]) {
                                                            l = j;
                                                            break a
                                                        }
                                                        if (!(m >>> 0 < l >>> 0)) break;
                                                        j = l
                                                    }
                                            } while (0);
                                            if (j = (0 | c[u >> 2]) - n | 0, !(0 < (0 | (c[u >> 2] = j)))) break;
                                            o = m
                                        } else m = B;
                                    if ((0 | j) < 0) {
                                        g = 1 + ((k + 25 | 0) / 9 | 0) | 0, s = 102 == (0 | t);
                                        do {
                                            if (r = (0 | (r = 0 - j | 0)) < 9 ? r : 9, m >>> 0 < l >>> 0) {
                                                for (n = (1 << r) - 1 | 0, o = r ? 1e9 >>> r : 1e9, p = 0, j = m; x = 0 | c[j >> 2], c[j >> 2] = (r ? x >>> r : x) + p, p = 0 | w(x & n, o), (j = j + 4 | 0) >>> 0 < l >>> 0;);
                                                m = 0 == (0 | c[m >> 2]) ? m + 4 | 0 : m, p && (c[l >> 2] = p, l = l + 4 | 0)
                                            } else m = 0 == (0 | c[m >> 2]) ? m + 4 | 0 : m;
                                            l = (0 | g) < ((x = l - (j = s ? B : m) | 0) >> 2 | 0) ? j + (g << 2) | 0 : l, j = (0 | c[u >> 2]) + r | 0, c[u >> 2] = j
                                        } while ((0 | j) < 0);
                                        s = m
                                    } else s = m;
                                    if (s >>> 0 < l >>> 0) {
                                        if (j = 9 * ((j = y - s | 0) >> 2) | 0, 10 <= (n = 0 | c[s >> 2]) >>> 0)
                                            for (m = 10; j = j + 1 | 0, (m = 10 * m | 0) >>> 0 <= n >>> 0;);
                                    } else j = 0;
                                    if ((0 | (m = k - (102 == (0 | t) ? 0 : j) + (((x = 0 != (0 | k)) & (v = 103 == (0 | t))) << 31 >> 31) | 0)) < ((9 * ((u = l - y | 0) >> 2) | 0) - 9 | 0)) {
                                        if (g = B + 4 + ((m = (0 | (u = m + 9216 | 0)) / 9 | 0) + -1024 << 2) | 0, (0 | (m = u - (9 * m | 0) | 0)) < 8)
                                            for (n = 10; n = 10 * n | 0, (0 | m) < 7;) m = m + 1 | 0;
                                        else n = 10;
                                        if ((o = (g + 4 | 0) == (0 | l)) & 0 == (0 | (r = (p = 0 | c[g >> 2]) - (0 | w(m = (p >>> 0) / (n >>> 0) | 0, n)) | 0))) m = g, n = s;
                                        else if (q = 0 == (1 & m | 0) ? 9007199254740992 : 9007199254740994, e = r >>> 0 < (u = n >>> 1) >>> 0 ? .5 : o & (0 | r) == (0 | u) ? 1 : 1.5, D && (e = (u = 45 == (0 | a[C >> 0])) ? -e : e, q = u ? -q : q), m = p - r | 0, c[g >> 2] = m, q + e != q) {
                                            if (u = m + n | 0, 999999999 < (c[g >> 2] = u) >>> 0)
                                                for (n = g, j = s;;) {
                                                    if ((m = n + -4 | 0) >>> (c[n >> 2] = 0) < j >>> 0 && (c[(j = j + -4 | 0) >> 2] = 0), u = 1 + (0 | c[m >> 2]) | 0, !(999999999 < (c[m >> 2] = u) >>> 0)) {
                                                        n = j;
                                                        break
                                                    }
                                                    n = m
                                                } else m = g, n = s;
                                            if (j = 9 * ((j = y - n | 0) >> 2) | 0, 10 <= (p = 0 | c[n >> 2]) >>> 0)
                                                for (o = 10; j = j + 1 | 0, (o = 10 * o | 0) >>> 0 <= p >>> 0;);
                                        } else m = g, n = s;
                                        l = (u = m + 4 | 0) >>> 0 < l >>> 0 ? u : l
                                    } else n = s;
                                    g = 0 - j | 0;
                                    b: do {
                                        if (n >>> 0 < l >>> 0)
                                            for (;;) {
                                                if (0 | c[(m = l + -4 | 0) >> 2]) {
                                                    u = l, t = 1;
                                                    break b
                                                }
                                                if (!(n >>> 0 < m >>> 0)) {
                                                    u = m, t = 0;
                                                    break
                                                }
                                                l = m
                                            } else u = l, t = 0
                                    } while (0);
                                    do {
                                        if (v) {
                                            if (k = (0 | j) < (0 | (k = k + (1 & (1 ^ x)) | 0)) & -5 < (0 | j) ? (o = i + -1 | 0, k + -1 - j | 0) : (o = i + -2 | 0, k + -1 | 0), !(8 & h)) {
                                                if (t && 0 != (0 | (z = 0 | c[u + -4 >> 2])))
                                                    if ((z >>> 0) % 10 | 0) m = 0;
                                                    else
                                                        for (m = 0, l = 10; m = m + 1 | 0, !(0 | (z >>> 0) % ((l = 10 * l | 0) >>> 0)););
                                                else m = 9;
                                                if (l = (9 * ((l = u - y | 0) >> 2) | 0) - 9 | 0, 102 == (32 | o)) {
                                                    k = (0 | k) < (0 | (i = 0 < (0 | (i = l - m | 0)) ? i : 0)) ? k : i;
                                                    break
                                                }
                                                k = (0 | k) < (0 | (i = 0 < (0 | (i = l + j - m | 0)) ? i : 0)) ? k : i;
                                                break
                                            }
                                        } else o = i
                                    } while (0);
                                    if (p = (s = 0 != (0 | k)) ? 1 : h >>> 3 & 1, r = 102 == (32 | o)) j = (v = 0) < (0 | j) ? j : 0;
                                    else {
                                        if (((m = E) - (l = 0 | Xb(l = (0 | j) < 0 ? g : j, ((0 | l) < 0) << 31 >> 31, E)) | 0) < 2)
                                            for (; a[(l = l + -1 | 0) >> 0] = 48, (m - l | 0) < 2;);
                                        a[l + -1 >> 0] = 43 + (j >> 31 & 2), a[(j = l + -2 | 0) >> 0] = o, j = m - (v = j) | 0
                                    }
                                    if (Yb(b, 32, f, j = D + 1 + k + p + j | 0, h), Sb(b, C, D), Yb(b, 48, f, j, 65536 ^ h), r) {
                                        p = B >>> 0 < n >>> 0 ? B : n, n = r = G + 9 | 0, o = G + 8 | 0, m = p;
                                        do {
                                            if (l = 0 | Xb(0 | c[m >> 2], 0, r), (0 | m) == (0 | p))(0 | l) == (0 | r) && (a[o >> 0] = 48, l = o);
                                            else if (G >>> 0 < l >>> 0)
                                                for (uc(0 | G, 48, l - F | 0); G >>> 0 < (l = l + -1 | 0) >>> 0;);
                                            Sb(b, l, n - l | 0), m = m + 4 | 0
                                        } while (m >>> 0 <= B >>> 0);
                                        if (0 == (8 & h | 0) & (1 ^ s) || Sb(b, 2582, 1), m >>> 0 < u >>> 0 & 0 < (0 | k))
                                            for (;;) {
                                                if (G >>> 0 < (l = 0 | Xb(0 | c[m >> 2], 0, r)) >>> 0)
                                                    for (uc(0 | G, 48, l - F | 0); G >>> 0 < (l = l + -1 | 0) >>> 0;);
                                                if (Sb(b, l, (0 | k) < 9 ? k : 9), l = k + -9 | 0, !((m = m + 4 | 0) >>> 0 < u >>> 0 & 9 < (0 | k))) {
                                                    k = l;
                                                    break
                                                }
                                                k = l
                                            }
                                        Yb(b, 48, k + 9 | 0, 9, 0)
                                    } else {
                                        if (n >>> 0 < (u = t ? u : n + 4 | 0) >>> 0 & -1 < (0 | k)) {
                                            s = 0 == (8 & h | 0), t = g = G + 9 | 0, p = 0 - F | 0, r = G + 8 | 0, o = n;
                                            do {
                                                (0 | (l = 0 | Xb(0 | c[o >> 2], 0, g))) == (0 | g) && (a[r >> 0] = 48, l = r);
                                                do {
                                                    if ((0 | o) == (0 | n)) {
                                                        if (m = l + 1 | 0, Sb(b, l, 1), s & (0 | k) < 1) {
                                                            l = m;
                                                            break
                                                        }
                                                        Sb(b, 2582, 1), l = m
                                                    } else {
                                                        if (l >>> 0 <= G >>> 0) break;
                                                        for (uc(0 | G, 48, l + p | 0); G >>> 0 < (l = l + -1 | 0) >>> 0;);
                                                    }
                                                } while (0);
                                                Sb(b, l, (0 | (F = t - l | 0)) < (0 | k) ? F : k), k = k - F | 0, o = o + 4 | 0
                                            } while (o >>> 0 < u >>> 0 & -1 < (0 | k))
                                        }
                                        Yb(b, 48, k + 18 | 0, 18, 0), Sb(b, v, E - v | 0)
                                    }
                                    Yb(b, 32, f, j, 8192 ^ h)
                                }
                            } while (0);
                            return Y = H, 0 | ((0 | j) < (0 | f) ? f : j)
                        }, Nc],
                        ca = [Oc, function (a, b, c) {
                            return 0 | D(0, 0 | (a |= 0), 0 | (b |= 0), 0 | (c |= 0))
                        }, function (b, d, e) {
                            d |= 0, e |= 0;
                            var g, f = 0;
                            return Y = (g = Y) + 32 | 0, f = g, c[(b |= 0) + 36 >> 2] = 4, 0 == (64 & c[b >> 2] | 0) && (c[f >> 2] = c[b + 60 >> 2], c[f + 4 >> 2] = 21523, c[f + 8 >> 2] = g + 16, 0 | M(54, 0 | f)) && (a[b + 75 >> 0] = -1), f = 0 | zb(b, d, e), Y = g, 0 | f
                        }, function (a, b, d) {
                            var e, f;
                            return b |= 0, d |= 0, tc(0 | (f = 0 | c[(e = (a |= 0) + 20 | 0) >> 2]), 0 | b, 0 | (a = d >>> 0 < (a = (0 | c[a + 16 >> 2]) - f | 0) >>> 0 ? d : a)), c[e >> 2] = (0 | c[e >> 2]) + a, 0 | d
                        }, zb, Oc, Oc, Oc],
                        da = [Pc, function (a, b, c, d) {
                            return 0 | E(0, 0 | (a |= 0), 0 | (b |= 0), 0 | (c |= 0), 0 | (d |= 0))
                        }, function (a, b, d, e) {
                            var f, g, h;
                            return a |= 0, b |= 0, d |= 0, e |= 0, Y = (g = Y) + 32 | 0, c[(h = (f = g) + 8 | 0) >> 2] = c[a + 60 >> 2], c[4 + h >> 2] = d, c[8 + h >> 2] = b, c[12 + h >> 2] = f, c[16 + h >> 2] = e, b = (0 | Bb(0 | K(140, 0 | h))) < 0 ? (c[(a = f) >> 2] = -1, a = c[a + 4 >> 2] = -1) : (a = 0 | c[(b = f) + 4 >> 2], 0 | c[b >> 2]), z(0 | a), Y = g, 0 | b
                        }, Pc],
                        ea = [function (a) {
                            y(4)
                        }, function (a) {
                            F(0, 0 | (a |= 0))
                        }],
                        fa = [Rc, function (a, b) {
                            G(0, 0 | (a |= 0), 0 | (b |= 0))
                        }, function (a, b) {
                            var d, e;
                            a |= 0, e = 7 + (0 | c[(b |= 0) >> 2]) & -8, d = +g[e >> 3], c[b >> 2] = 8 + e, g[a >> 3] = d
                        }, Rc],
                        ga = [function (a, b, c) {
                            y(6)
                        }, function (a, b, c) {
                            H(0, 0 | (a |= 0), 0 | (b |= 0), 0 | (c |= 0))
                        }, function (a, b, d) {
                            b |= 0, d |= 0;
                            var e, g, h, i, j = 0;
                            return g = 0 | c[(a |= 0) + 24 >> 2], h = 0 | c[d + 136 >> 2], i = 0 | c[d + 140 >> 2], -1 == (0 | (a = 0 | c[(e = a + 4 | 0) >> 2])) ? (c[h + (b << 2) >> 2] = c[16 + g >> 2], void(f[i + (b << 2) >> 2] = 1)) : (j = 0 | c[d + 4 >> 2], d = 0 | c[20 + g >> 2], ha[3 & c[j + (a << 5) + 20 >> 2]](0 | c[j + (a << 5) + 24 >> 2], d, d, 0 | c[12 + g >> 2]), d = 0 | c[e >> 2], f[h + (b << 2) >> 2] = +f[16 + g >> 2] * +f[h + (d << 2) >> 2], void(c[i + (b << 2) >> 2] = c[i + (d << 2) >> 2]))
                        }, function (a, b, d) {
                            b |= 0, d |= 0;
                            var i, l, n, o, p, r, s, t, v, w, x, z, A, D, e = 0,
                                g = 0,
                                h = 0,
                                j = 0,
                                k = 0,
                                m = 0,
                                q = 0,
                                u = 0,
                                y = 0,
                                B = 0,
                                C = 0,
                                E = 0,
                                F = 0;
                            if (Y = (D = Y) + 64 | 0, C = D + 16 | 0, s = D + 56 | 0, t = D + 48 | 0, y = D + 8 | 0, u = D + 40 | 0, z = D + 32 | 0, A = D + 24 | 0, B = D, v = 0 | c[(a |= 0) + 24 >> 2], w = 0 | c[d + 136 >> 2], x = 0 | c[d + 140 >> 2], -1 == (0 | (a = 0 | c[(r = a + 4 | 0) >> 2]))) return c[w + (b << 2) >> 2] = c[4 + v >> 2], c[x + (b << 2) >> 2] = c[8 + v >> 2], void(Y = D);
                            for (m = 0 | c[d + 4 >> 2], k = 0 | c[(n = 12 + v | 0) >> 2], c[z >> 2] = k, o = 4 + z | 0, q = 0 | c[(p = 16 + v | 0) >> 2], c[o >> 2] = q, l = 1 == ((f[A >> 2] = 0) | c[m + (a << 5) + 8 >> 2]) ? -10 : -.10000000149011612, f[4 + A >> 2] = l, c[s >> 2] = k, c[(k = 4 + s | 0) >> 2] = q, q = m + (a << 5) + 20 | 0, m = m + (a << 5) + 24 | 0, ha[3 & c[q >> 2]](0 | c[m >> 2], s, t, 1), a = u + 4 | 0, d = 4 + t | 0, i = y + 4 | 0, h = 1, j = 9;;) {
                                if (e = 0 * h, f[u >> 2] = e + +f[s >> 2], g = l * h, f[a >> 2] = g + +f[k >> 2], ha[3 & c[q >> 2]](0 | c[m >> 2], u, y, 1), F = +f[y >> 2] - +f[t >> 2], f[y >> 2] = F, E = +f[i >> 2] - +f[d >> 2], 0 != F | 0 != (f[i >> 2] = E)) {
                                    a = 5;
                                    break
                                }
                                if (f[u >> 2] = +f[s >> 2] - e, f[a >> 2] = +f[k >> 2] - g, ha[3 & c[q >> 2]](0 | c[m >> 2], u, y, 1), e = +f[y >> 2] - +f[t >> 2], f[y >> 2] = e, g = +f[i >> 2] - +f[d >> 2], 0 != e | 0 != (f[i >> 2] = g)) {
                                    a = 7;
                                    break
                                }
                                if (!j) {
                                    a = 9;
                                    break
                                }
                                h *= .10000000149011612, j = j + -1 | 0
                            }
                            5 == (0 | a) ? (y = 0 | c[(u = y) + 4 >> 2], c[(C = B) >> 2] = c[u >> 2], c[C + 4 >> 2] = y) : 7 == (0 | a) ? (f[B >> 2] = -e, f[B + 4 >> 2] = -g) : 9 == (0 | a) && ma(3, 2405, C), F = 180 * +ab(A, B) / 3.1415927410125732, ha[3 & c[q >> 2]](0 | c[m >> 2], z, z, 1), c[n >> 2] = c[z >> 2], c[p >> 2] = c[o >> 2], f[(B = 20 + v | 0) >> 2] = +f[B >> 2] - F, B = 0 | c[r >> 2], f[w + (b << 2) >> 2] = +f[4 + v >> 2] * +f[w + (B << 2) >> 2], F = +f[(C = 8 + v | 0) >> 2] * +f[x + (B << 2) >> 2], f[x + (b << 2) >> 2] = F, f[C >> 2] = F, Y = D
                        }],
                        ha = [function (a, b, c, d) {
                            y(7)
                        }, function (a, b, c, d) {
                            I(0, 0 | (a |= 0), 0 | (b |= 0), 0 | (c |= 0), 0 | (d |= 0))
                        }, function (a, b, d, e) {
                            b |= 0, d |= 0, e |= 0;
                            var G, H, I, J, K, L, M, N, P, Q, R, S, T, U, V, W, X, Z, h = 0,
                                i = 0,
                                j = 0,
                                k = 0,
                                l = 0,
                                m = 0,
                                n = 0,
                                o = 0,
                                p = 0,
                                q = 0,
                                r = 0,
                                s = 0,
                                t = 0,
                                u = 0,
                                v = 0,
                                x = 0,
                                y = 0,
                                z = 0,
                                A = 0,
                                B = 0,
                                C = 0,
                                D = 0,
                                E = 0,
                                F = 0,
                                O = 0,
                                _ = 0,
                                $ = 0,
                                aa = 0,
                                ba = 0,
                                ca = 0,
                                da = 0,
                                ea = 0,
                                fa = 0;
                            if (Y = (Z = Y) + 32 | 0, X = Z, T = 0 | c[(a |= 0) + 20 >> 2], U = 0 | c[a + 4 >> 2], V = 0 | c[a >> 2], W = 1 + U | 0, (0 | e) <= 0) Y = Z;
                            else {
                                for (R = +(0 | U), S = +(0 | V), G = 0 == (0 | c[a + 8 >> 2]), H = T + (U << 3) | 0, J = T + ((I = 0 | w(V, W)) << 3) | 0, K = T + ((O = I + U | 0) << 3) | 0, L = 4 + T | 0, M = T + (U << 3) + 4 | 0, N = T + (I << 3) + 4 | 0, O = T + (O << 3) + 4 | 0, P = U - 1 | 0, Q = V - 1 | 0, s = E = D = v = r = q = p = o = h = C = B = A = n = m = l = k = F = x = 0;;) {
                                    t = (u = +f[b + (F << 3) >> 2]) * R, z = (y = +f[b + (F << 3) + 4 >> 2]) * S, i = !(1 <= u), j = !(1 <= y);
                                    do {
                                        if (j & i & !(u < 0) & !(y < 0)) {
                                            if (i = ~~t, a = (0 | w(W, j = ~~z)) + i | 0, h = t - +(0 | i), s = z - +(0 | j), !G) {
                                                z = 1 - h, y = 1 - s, _ = a + 1 | 0, j = (i = a + W | 0) + 1 | 0, f[d + (F << 3) >> 2] = y * (z * +f[T + (a << 3) >> 2]) + y * (h * +f[T + (_ << 3) >> 2]) + s * (z * +f[T + (i << 3) >> 2]) + s * (h * +f[T + (j << 3) >> 2]), z = y * (z * +f[T + (a << 3) + 4 >> 2]) + y * (h * +f[T + (_ << 3) + 4 >> 2]) + s * (z * +f[T + (i << 3) + 4 >> 2]), y = s * (h * +f[T + (j << 3) + 4 >> 2]), u = D, t = E;
                                                break
                                            }
                                            if (h + s <= 1) {
                                                z = 1 - h - s, j = a + 1 | 0, _ = a + W | 0, f[d + (F << 3) >> 2] = z * +f[T + (a << 3) >> 2] + h * +f[T + (j << 3) >> 2] + s * +f[T + (_ << 3) >> 2], z = z * +f[T + (a << 3) + 4 >> 2] + h * +f[T + (j << 3) + 4 >> 2], y = s * +f[T + (_ << 3) + 4 >> 2], u = D, t = E;
                                                break
                                            }
                                            i = (j = a + W | 0) + 1 | 0, u = h + -1 + s, z = 1 - h, _ = a + 1 | 0, y = 1 - s, f[d + (F << 3) >> 2] = u * +f[T + (i << 3) >> 2] + z * +f[T + (j << 3) >> 2] + y * +f[T + (_ << 3) >> 2], z = u * +f[T + (i << 3) + 4 >> 2] + z * +f[T + (j << 3) + 4 >> 2], y *= +f[T + (_ << 3) + 4 >> 2], u = D, t = E;
                                            break
                                        }
                                        if (x || (fa = +f[T >> 2], ea = +f[H >> 2], da = +f[J >> 2], v = +f[K >> 2], ca = +f[L >> 2], ba = +f[M >> 2], aa = +f[N >> 2], x = 1, A = .5 * ((C = v - fa) - (B = ea - da)), B = .5 * (B + C), C = .25 * (fa + ea + da + v) - .5 * C, v = .5 * ((E = ($ = +f[O >> 2]) - ca) - (D = ba - aa)), D = .5 * (D + E), E = .25 * (ca + ba + aa + $) - .5 * E), !(y < 3 & -2 < u & u < 3 & -2 < y)) {
                                            f[d + (F << 3) >> 2] = y * A + (u * B + C), z = y * v, y = u * D + E, u = D, t = E;
                                            break
                                        }
                                        do {
                                            if (u <= 0) {
                                                if (y <= 0) {
                                                    r = E - 2 * D, q = 2 * v, k = (m = C - 2 * B) - (l = 2 * A), l = C - l, n = +f[T >> 2], h = .5 * (u + 2), o = E - q, q = (p = r) - q, r = +f[L >> 2], s = .5 * (y + 2);
                                                    break
                                                }
                                                if (j) {
                                                    r = (s = +(0 | (j = (0 | V) == (0 | (j = ~~z)) ? Q : j))) / S, p = +(0 | (_ = j + 1 | 0)) / S, j = 0 | w(j, W), _ = 0 | w(_, W), q = E - 2 * D, k = r * A + (m = C - 2 * B), l = +f[T + (j << 3) >> 2], m = p * A + m, n = +f[T + (_ << 3) >> 2], h = .5 * (u + 2), o = +f[T + (j << 3) + 4 >> 2], p = p * v + q, q = r * v + q, r = +f[T + (_ << 3) + 4 >> 2], s = z - s;
                                                    break
                                                }
                                                q = E - 2 * D, n = 3 * A, r = 3 * v, k = A + (m = C - 2 * B), l = +f[J >> 2], m = n + m, n += C, h = .5 * (u + 2), o = +f[N >> 2], p = r + q, q = v + q, r += E, s = .5 * (y + -1);
                                                break
                                            }
                                            if (a = y <= 0, i) {
                                                if (a) {
                                                    q = 2 * v, k = (r = (h = +(0 | (j = (0 | U) == (0 | (j = ~~t)) ? P : j))) / R) * B + C - (l = 2 * A), l = (o = +(0 | (_ = j + 1 | 0)) / R) * B + C - l, m = +f[T + (j << 3) >> 2], n = +f[T + (_ << 3) >> 2], h = t - h, o = o * D + E - q, p = +f[T + (j << 3) + 4 >> 2], q = r * D + E - q, r = +f[T + (_ << 3) + 4 >> 2], s = .5 * (y + 2);
                                                    break
                                                }
                                                if (j) {
                                                    c[X >> 2] = F, g[X + 8 >> 3] = u, g[X + 16 >> 3] = y, ma(4, 2333, X);
                                                    break
                                                }
                                                p = (h = +(0 | (_ = (0 | U) == (0 | (_ = ~~t)) ? P : _))) / R, r = +(0 | (j = _ + 1 | 0)) / R, j = j + I | 0, n = 3 * A, s = 3 * v, k = +f[T + ((_ = _ + I | 0) << 3) >> 2], l = +f[T + (j << 3) >> 2], m = n + (p * B + C), n += r * B + C, h = t - h, o = +f[T + (j << 3) + 4 >> 2], p = s + (p * D + E), q = +f[T + (_ << 3) + 4 >> 2], r = s + (r * D + E), s = .5 * (y + -1);
                                                break
                                            }
                                            if (a) {
                                                r = 3 * D + E, q = 2 * v, k = B + C - (l = 2 * A), l = (n = 3 * B + C) - l, m = +f[H >> 2], h = .5 * (u + -1), o = r - q, p = +f[M >> 2], q = D + E - q, s = .5 * (y + 2);
                                                break
                                            }
                                            if (j) {
                                                o = (s = +(0 | (_ = (0 | V) == (0 | (_ = ~~z)) ? Q : _))) / S, fa = +(0 | (j = _ + 1 | 0)) / S, _ = (0 | w(_, W)) + U | 0, j = (0 | w(j, W)) + U | 0, n = 3 * B + C, r = 3 * D + E, k = +f[T + (_ << 3) >> 2], l = o * A + n, m = +f[T + (j << 3) >> 2], n = fa * A + n, h = .5 * (u + -1), o = o * v + r, p = +f[T + (j << 3) + 4 >> 2], q = +f[T + (_ << 3) + 4 >> 2], r = fa * v + r, s = z - s;
                                                break
                                            }
                                            n = 3 * B + C, r = 3 * D + E, h = 3 * A, s = 3 * v, k = +f[K >> 2], l = A + n, m = h + (B + C), n = h + n, h = .5 * (u + -1), o = v + r, p = s + (D + E), q = +f[O >> 2], r = s + r, s = .5 * (y + -1);
                                            break
                                        } while (0);
                                        if (h + s <= 1) {
                                            f[d + (F << 3) >> 2] = k + (l - k) * h + (m - k) * s, z = q + (o - q) * h, y = (p - q) * s, u = D, t = E;
                                            break
                                        }
                                        z = 1 - h, y = 1 - s, f[d + (F << 3) >> 2] = n + (m - n) * z + (l - n) * y, z = r + (p - r) * z, y *= o - r, u = D, t = E;
                                        break
                                    } while (0);
                                    if (f[d + (F << 3) + 4 >> 2] = z + y, (0 | (F = F + 1 | 0)) == (0 | e)) break;
                                    D = u, E = t
                                }
                                Y = Z
                            }
                        }, function (a, b, d, e) {
                            b |= 0, d |= 0, e |= 0;
                            var h, g = 0,
                                i = 0,
                                j = 0,
                                k = 0,
                                l = 0,
                                m = 0,
                                n = 0;
                            if (l = 3.1415927410125732 * (+f[(a |= 0) >> 2] + +f[a + 20 >> 2]) / 180, j = +u(+l), l = +t(+l), i = +f[a + 8 >> 2], h = (g = 0 == (0 | c[a + 24 >> 2]) ? 1 : -1) * (l *= i), i = (j *= i) * (k = 0 == (0 | c[a + 28 >> 2]) ? 1 : -1), j *= g, k *= l, l = +f[a + 12 >> 2], g = +f[a + 16 >> 2], !((0 | e) <= 0))
                                for (a = 0; n = +f[b + (a << 3) >> 2], m = +f[b + (a << 3) + 4 >> 2], f[d + (a << 3) >> 2] = l + (h * n - i * m), f[d + (a << 3) + 4 >> 2] = g + (j * n + k * m), (0 | (a = a + 1 | 0)) != (0 | e););
                        }];
                    return {
                        ___errno_location: Cb,
                        ___muldi3: lc,
                        ___udivdi3: qc,
                        _bitshift64Lshr: rc,
                        _bitshift64Shl: sc,
                        _csmFree: function (a) {
                            gc(a |= 0)
                        },
                        _csmGetDrawableConstantFlags: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[872 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 1970, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableCount: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[a + 200 >> 2], Y = d, 0 | b) : (c[b >> 2] = 1932, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, 0 | (b = -1))
                        },
                        _csmGetDrawableDrawOrders: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[a + 268 >> 2], Y = d, 0 | b) : (c[b >> 2] = 2054, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableDynamicFlags: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[a + 260 >> 2], Y = d, 0 | b) : (c[b >> 2] = 1998, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableIds: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[820 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 1952, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableIndexCounts: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[888 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 2256, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableIndices: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[828 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 2282, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableMaskCounts: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[896 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 2130, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableMasks: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[832 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 2155, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableOpacities: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[a + 276 >> 2], Y = d, 0 | b) : (c[b >> 2] = 2106, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableRenderOrders: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[a + 264 >> 2], Y = d, 0 | b) : (c[b >> 2] = 2079, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableTextureIndices: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[868 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 2025, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableVertexCounts: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[876 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 2175, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableVertexPositions: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[a + 272 >> 2], Y = d, 0 | b) : (c[b >> 2] = 2202, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetDrawableVertexUvs: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[824 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 2232, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetLatestMocVersion: function () {
                            return 3
                        },
                        _csmGetMocVersion: function (a, b) {
                            b |= 0;
                            var e, d = 0;
                            return Y = (e = Y) + 16 | 0, d = e, (a |= 0) ? (d = 0 | ra(a, b), Y = e, 0 | d) : (c[d >> 2] = 1381, c[d + 4 >> 2] = 1398, ma(4, 1364, d), Y = e, (d = 0) | d)
                        },
                        _csmGetParameterCount: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[a + 292 >> 2], Y = d, 0 | b) : (c[b >> 2] = 1705, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, 0 | (b = -1))
                        },
                        _csmGetParameterDefaultValues: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[916 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 1803, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetParameterIds: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[900 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 1726, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetParameterMaximumValues: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[908 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 1774, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetParameterMinimumValues: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[912 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 1745, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetParameterValues: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[a + 300 >> 2], Y = d, 0 | b) : (c[b >> 2] = 1832, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetPartCount: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[a + 4 >> 2], Y = d, 0 | b) : (c[b >> 2] = 1854, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, 0 | (b = -1))
                        },
                        _csmGetPartIds: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[712 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 1870, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetPartOpacities: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[a + 52 >> 2], Y = d, 0 | b) : (c[b >> 2] = 1884, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetPartParentPartIndices: function (a) {
                            var d, b = 0;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? (b = 0 | c[740 + (0 | c[a >> 2]) >> 2], Y = d, 0 | b) : (c[b >> 2] = 1904, c[b + 4 >> 2] = 1506, ma(4, 1364, b), Y = d, (b = 0) | b)
                        },
                        _csmGetSizeofModel: za,
                        _csmGetVersion: function () {
                            return 67108864
                        },
                        _csmInitializeModelInPlace: Aa,
                        _csmMalloc: function (a) {
                            return 0 | fc(a |= 0)
                        },
                        _csmMallocMoc: function (a) {
                            var b, d;
                            return Y = (d = Y) + 16 | 0, jc(b = d, 64, a |= 0), Y = d, 0 | c[b >> 2]
                        },
                        _csmMallocModelAndInitialize: function (a) {
                            var d, e, b = 0;
                            return Y = (e = Y) + 16 | 0, d = e, 0 != (0 | (a |= 0)) && 0 == (0 | jc(d, 16, b = 0 | za(a))) ? (a = 0 | Aa(a, 0 | c[d >> 2], b)) || (gc(0 | c[d >> 2]), a = 0) : a = 0, Y = e, 0 | a
                        },
                        _csmReadCanvasInfo: function (a, b, d, e) {
                            b |= 0, d |= 0, e |= 0;
                            var f, g, h, j, i = 0;
                            return Y = (j = Y) + 32 | 0, g = j + 24 | 0, i = j + 16 | 0, h = j + 8 | 0, f = j, (a |= 0) ? b ? d ? e ? (i = 0 | c[708 + (0 | c[a >> 2]) >> 2], c[b >> 2] = c[i + 12 >> 2], c[b + 4 >> 2] = c[i + 16 >> 2], c[d >> 2] = c[i + 4 >> 2], c[d + 4 >> 2] = c[i + 8 >> 2], c[e >> 2] = c[i >> 2]) : (c[g >> 2] = 1488, c[4 + g >> 2] = 1582, ma(4, 1364, g)) : (c[i >> 2] = 1488, c[i + 4 >> 2] = 1553, ma(4, 1364, i)) : (c[h >> 2] = 1488, c[4 + h >> 2] = 1526, ma(4, 1364, h)) : (c[f >> 2] = 1488, c[f + 4 >> 2] = 1506, ma(4, 1364, f)), void(Y = j)
                        },
                        _csmResetDrawableDynamicFlags: function (a) {
                            var b, d;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? c[a + 256 >> 2] = 1 : (c[b >> 2] = 2304, c[b + 4 >> 2] = 1506, ma(4, 1364, b)), void(Y = d)
                        },
                        _csmReviveMocInPlace: function (a, b) {
                            b |= 0;
                            var e, g, d = 0,
                                f = 0;
                            return Y = (g = Y) + 32 | 0, f = g + 16 | 0, e = g + 8 | 0, d = g, (a |= 0) ? ((d = a) + 63 & -64 | 0) != (0 | d) ? (c[e >> 2] = 1417, c[4 + e >> 2] = 1437, ma(4, 1364, e), Y = g, (f = 0) | f) : 0 | b && (b + 63 & -64 | 0) == (0 | b) ? (f = 0 | qa(a, b), Y = g, 0 | f) : (c[f >> 2] = 1417, c[f + 4 >> 2] = 1469, ma(4, 1364, f), Y = g, (f = 0) | f) : (c[d >> 2] = 1417, c[d + 4 >> 2] = 1398, ma(4, 1364, d), Y = g, (f = 0) | f)
                        },
                        _csmSetLogFunction: function (a) {
                            a |= 0, c[908] = a
                        },
                        _csmUpdateModel: function (a) {
                            var b, d;
                            return Y = (d = Y) + 16 | 0, b = d, (a |= 0) ? rb(a) : (c[b >> 2] = 1690, c[b + 4 >> 2] = 1506, ma(4, 1364, b)), void(Y = d)
                        },
                        _emscripten_replace_memory: function (newBuffer) {
                            return a = new Int8Array(newBuffer), d = new Uint8Array(newBuffer), b = new Int16Array(newBuffer), e = new Uint16Array(newBuffer), c = new Int32Array(newBuffer), f = new Float32Array(newBuffer), g = new Float64Array(newBuffer), buffer = newBuffer, !0
                        },
                        _free: gc,
                        _i64Add: mc,
                        _i64Subtract: nc,
                        _malloc: fc,
                        _memcpy: tc,
                        _memset: uc,
                        _sbrk: vc,
                        dynCall_ii: function (a, b) {
                            return b |= 0, 0 | aa[3 & (a |= 0)](0 | b)
                        },
                        dynCall_iidiiii: function (a, b, c, d, e, f, g) {
                            return b |= 0, c = +c, d |= 0, e |= 0, f |= 0, g |= 0, 0 | ba[3 & (a |= 0)](0 | b, +c, 0 | d, 0 | e, 0 | f, 0 | g)
                        },
                        dynCall_iiii: function (a, b, c, d) {
                            return b |= 0, c |= 0, d |= 0, 0 | ca[7 & (a |= 0)](0 | b, 0 | c, 0 | d)
                        },
                        dynCall_iiiii: function (a, b, c, d, e) {
                            return b |= 0, c |= 0, d |= 0, e |= 0, 0 | da[3 & (a |= 0)](0 | b, 0 | c, 0 | d, 0 | e)
                        },
                        dynCall_vi: function (a, b) {
                            b |= 0, ea[1 & (a |= 0)](0 | b)
                        },
                        dynCall_vii: function (a, b, c) {
                            b |= 0, c |= 0, fa[3 & (a |= 0)](0 | b, 0 | c)
                        },
                        dynCall_viii: function (a, b, c, d) {
                            b |= 0, c |= 0, d |= 0, ga[3 & (a |= 0)](0 | b, 0 | c, 0 | d)
                        },
                        dynCall_viiii: function (a, b, c, d, e) {
                            b |= 0, c |= 0, d |= 0, e |= 0, ha[3 & (a |= 0)](0 | b, 0 | c, 0 | d, 0 | e)
                        },
                        establishStackSpace: function (a, b) {
                            Y = a |= 0, b |= 0
                        },
                        stackAlloc: function (a) {
                            var b;
                            return Y = (Y = (b = Y) + (a |= 0) | 0) + 15 & -16, 0 | b
                        },
                        stackRestore: function (a) {
                            Y = a |= 0
                        },
                        stackSave: function () {
                            return 0 | Y
                        }
                    }
                }({
                    Math: Math,
                    Int8Array: Int8Array,
                    Int16Array: Int16Array,
                    Int32Array: Int32Array,
                    Uint8Array: Uint8Array,
                    Uint16Array: Uint16Array,
                    Float32Array: Float32Array,
                    Float64Array: Float64Array
                }, {
                    a: abort,
                    b: function (value) {
                        tempRet0 = value
                    },
                    c: function () {
                        return tempRet0
                    },
                    d: function (index, a1) {
                        return functionPointers[index](a1)
                    },
                    e: function (index, a1, a2, a3, a4, a5, a6) {
                        return functionPointers[index](a1, a2, a3, a4, a5, a6)
                    },
                    f: function (index, a1, a2, a3) {
                        return functionPointers[index](a1, a2, a3)
                    },
                    g: function (index, a1, a2, a3, a4) {
                        return functionPointers[index](a1, a2, a3, a4)
                    },
                    h: function (index, a1) {
                        functionPointers[index](a1)
                    },
                    i: function (index, a1, a2) {
                        functionPointers[index](a1, a2)
                    },
                    j: function (index, a1, a2, a3) {
                        functionPointers[index](a1, a2, a3)
                    },
                    k: function (index, a1, a2, a3, a4) {
                        functionPointers[index](a1, a2, a3, a4)
                    },
                    l: function (value) {
                        return Module.___errno_location && (HEAP32[Module.___errno_location() >> 2] = value), value
                    },
                    m: function (which, varargs) {
                        SYSCALLS.varargs = varargs;
                        try {
                            SYSCALLS.getStreamFromFD(), SYSCALLS.get(), SYSCALLS.get(), SYSCALLS.get(), SYSCALLS.get();
                            return 0
                        } catch (e) {
                            return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                        }
                    },
                    n: function (which, varargs) {
                        SYSCALLS.varargs = varargs;
                        try {
                            for (var stream = SYSCALLS.get(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get(), ret = 0, i = 0; i < iovcnt; i++) {
                                for (var ptr = HEAP32[iov + 8 * i >> 2], len = HEAP32[iov + (8 * i + 4) >> 2], j = 0; j < len; j++) SYSCALLS.printChar(stream, HEAPU8[ptr + j]);
                                ret += len
                            }
                            return ret
                        } catch (e) {
                            return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                        }
                    },
                    o: function (which, varargs) {
                        SYSCALLS.varargs = varargs;
                        try {
                            return 0
                        } catch (e) {
                            return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                        }
                    },
                    p: function (which, varargs) {
                        SYSCALLS.varargs = varargs;
                        try {
                            SYSCALLS.getStreamFromFD();
                            return 0
                        } catch (e) {
                            return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                        }
                    },
                    q: _emscripten_get_heap_size,
                    r: function (dest, src, num) {
                        HEAPU8.set(HEAPU8.subarray(src, src + num), dest)
                    },
                    s: function (requestedSize) {
                        var oldSize = _emscripten_get_heap_size();
                        if (2130706432 < requestedSize) return !1;
                        for (var newSize = Math.max(oldSize, 16777216); newSize < requestedSize;) newSize = newSize <= 536870912 ? alignUp(2 * newSize, 16777216) : Math.min(alignUp((3 * newSize + 2147483648) / 4, 16777216), 2130706432);
                        return !!emscripten_realloc_buffer(newSize) && (updateGlobalBufferViews(), !0)
                    },
                    t: function (requestedSize) {
                        abort("OOM")
                    },
                    u: demangle,
                    v: demangleAll,
                    w: emscripten_realloc_buffer,
                    x: function () {
                        var fflush = Module._fflush;
                        fflush && fflush(0);
                        var buffers = SYSCALLS.buffers;
                        buffers[1].length && SYSCALLS.printChar(1, 10), buffers[2].length && SYSCALLS.printChar(2, 10)
                    },
                    y: jsStackTrace,
                    z: function () {
                        var js = jsStackTrace();
                        return Module.extraStackTrace && (js += "\n" + Module.extraStackTrace()), demangleAll(js)
                    },
                    A: 4416,
                    B: DYNAMICTOP_PTR
                }, buffer),
                stackAlloc = (Module.___errno_location = asm.___errno_location, Module.___muldi3 = asm.___muldi3, Module.___udivdi3 = asm.___udivdi3, Module._bitshift64Lshr = asm._bitshift64Lshr, Module._bitshift64Shl = asm._bitshift64Shl, Module._csmFree = asm._csmFree, Module._csmGetDrawableConstantFlags = asm._csmGetDrawableConstantFlags, Module._csmGetDrawableCount = asm._csmGetDrawableCount, Module._csmGetDrawableDrawOrders = asm._csmGetDrawableDrawOrders, Module._csmGetDrawableDynamicFlags = asm._csmGetDrawableDynamicFlags, Module._csmGetDrawableIds = asm._csmGetDrawableIds, Module._csmGetDrawableIndexCounts = asm._csmGetDrawableIndexCounts, Module._csmGetDrawableIndices = asm._csmGetDrawableIndices, Module._csmGetDrawableMaskCounts = asm._csmGetDrawableMaskCounts, Module._csmGetDrawableMasks = asm._csmGetDrawableMasks, Module._csmGetDrawableOpacities = asm._csmGetDrawableOpacities, Module._csmGetDrawableRenderOrders = asm._csmGetDrawableRenderOrders, Module._csmGetDrawableTextureIndices = asm._csmGetDrawableTextureIndices, Module._csmGetDrawableVertexCounts = asm._csmGetDrawableVertexCounts, Module._csmGetDrawableVertexPositions = asm._csmGetDrawableVertexPositions, Module._csmGetDrawableVertexUvs = asm._csmGetDrawableVertexUvs, Module._csmGetLatestMocVersion = asm._csmGetLatestMocVersion, Module._csmGetMocVersion = asm._csmGetMocVersion, Module._csmGetParameterCount = asm._csmGetParameterCount, Module._csmGetParameterDefaultValues = asm._csmGetParameterDefaultValues, Module._csmGetParameterIds = asm._csmGetParameterIds, Module._csmGetParameterMaximumValues = asm._csmGetParameterMaximumValues, Module._csmGetParameterMinimumValues = asm._csmGetParameterMinimumValues, Module._csmGetParameterValues = asm._csmGetParameterValues, Module._csmGetPartCount = asm._csmGetPartCount, Module._csmGetPartIds = asm._csmGetPartIds, Module._csmGetPartOpacities = asm._csmGetPartOpacities, Module._csmGetPartParentPartIndices = asm._csmGetPartParentPartIndices, Module._csmGetSizeofModel = asm._csmGetSizeofModel, Module._csmGetVersion = asm._csmGetVersion, Module._csmInitializeModelInPlace = asm._csmInitializeModelInPlace, Module._csmMalloc = asm._csmMalloc, Module._csmMallocMoc = asm._csmMallocMoc, Module._csmMallocModelAndInitialize = asm._csmMallocModelAndInitialize, Module._csmReadCanvasInfo = asm._csmReadCanvasInfo, Module._csmResetDrawableDynamicFlags = asm._csmResetDrawableDynamicFlags, Module._csmReviveMocInPlace = asm._csmReviveMocInPlace, Module._csmSetLogFunction = asm._csmSetLogFunction, Module._csmUpdateModel = asm._csmUpdateModel, Module._emscripten_replace_memory = asm._emscripten_replace_memory, Module._free = asm._free, Module._i64Add = asm._i64Add, Module._i64Subtract = asm._i64Subtract, Module._malloc = asm._malloc, Module._memcpy = asm._memcpy, Module._memset = asm._memset, Module._sbrk = asm._sbrk, Module.establishStackSpace = asm.establishStackSpace, Module.stackAlloc = asm.stackAlloc),
                stackRestore = Module.stackRestore = asm.stackRestore,
                stackSave = Module.stackSave = asm.stackSave;
            Module.dynCall_ii = asm.dynCall_ii, Module.dynCall_iidiiii = asm.dynCall_iidiiii, Module.dynCall_iiii = asm.dynCall_iiii, Module.dynCall_iiiii = asm.dynCall_iiiii, Module.dynCall_vi = asm.dynCall_vi, Module.dynCall_vii = asm.dynCall_vii, Module.dynCall_viii = asm.dynCall_viii, Module.dynCall_viiii = asm.dynCall_viiii;
            if (Module.asm = asm, Module.ccall = function (ident, returnType, argTypes, args, opts) {
                    var toC = {
                            string: function (str) {
                                var ret = 0;
                                if (null != str && 0 !== str) {
                                    var len = 1 + (str.length << 2);
                                    (function (str, outPtr, maxBytesToWrite) {
                                        (function (str, outU8Array, outIdx, maxBytesToWrite) {
                                            if (!(0 < maxBytesToWrite)) return;
                                            for (var startIdx = outIdx, endIdx = outIdx + maxBytesToWrite - 1, i = 0; i < str.length; ++i) {
                                                var u = str.charCodeAt(i);
                                                if (55296 <= u && u <= 57343) {
                                                    var u1 = str.charCodeAt(++i);
                                                    u = 65536 + ((1023 & u) << 10) | 1023 & u1
                                                }
                                                if (u <= 127) {
                                                    if (endIdx <= outIdx) break;
                                                    outU8Array[outIdx++] = u
                                                } else if (u <= 2047) {
                                                    if (endIdx <= outIdx + 1) break;
                                                    outU8Array[outIdx++] = 192 | u >> 6, outU8Array[outIdx++] = 128 | 63 & u
                                                } else if (u <= 65535) {
                                                    if (endIdx <= outIdx + 2) break;
                                                    outU8Array[outIdx++] = 224 | u >> 12, outU8Array[outIdx++] = 128 | u >> 6 & 63, outU8Array[outIdx++] = 128 | 63 & u
                                                } else {
                                                    if (endIdx <= outIdx + 3) break;
                                                    outU8Array[outIdx++] = 240 | u >> 18, outU8Array[outIdx++] = 128 | u >> 12 & 63, outU8Array[outIdx++] = 128 | u >> 6 & 63, outU8Array[outIdx++] = 128 | 63 & u
                                                }
                                            }
                                            outU8Array[outIdx] = 0
                                        })(str, HEAPU8, outPtr, maxBytesToWrite)
                                    })(str, ret = stackAlloc(len), len)
                                }
                                return ret
                            },
                            array: function (arr) {
                                var ret = stackAlloc(arr.length);
                                return function (array, buffer) {
                                    HEAP8.set(array, buffer)
                                }(arr, ret), ret
                            }
                        },
                        func = function (ident) {
                            var func = Module["_" + ident];
                            return assert(func, "Cannot call unknown function " + ident + ", make sure it is exported"), func
                        }(ident),
                        cArgs = [],
                        stack = 0;
                    if (args)
                        for (var i = 0; i < args.length; i++) {
                            var converter = toC[argTypes[i]];
                            converter ? (0 === stack && (stack = stackSave()), cArgs[i] = converter(args[i])) : cArgs[i] = args[i]
                        }
                    var ret = func.apply(null, cArgs);
                    return ret = function (ret) {
                        return "string" === returnType ? UTF8ToString(ret) : "boolean" === returnType ? Boolean(ret) : ret
                    }(ret), 0 !== stack && stackRestore(stack), ret
                }, Module.UTF8ToString = UTF8ToString, Module.addFunction = function (func, sig) {
                    for (var i = 0; i < 1; i++)
                        if (!functionPointers[i]) return functionPointers[i] = func, 1 + i;
                    throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."
                }, memoryInitializer)
                if (isDataURI(memoryInitializer) || (path = memoryInitializer, memoryInitializer = Module.locateFile ? Module.locateFile(path, scriptDirectory) : scriptDirectory + path), ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
                    var data = readBinary(memoryInitializer);
                    HEAPU8.set(data, 8)
                } else {
                    runDependencies++, Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies);

                    function applyMemoryInitializer(data) {
                        data.byteLength && (data = new Uint8Array(data)), HEAPU8.set(data, 8), Module.memoryInitializerRequest && delete Module.memoryInitializerRequest.response,
                            function () {
                                if (runDependencies--, Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies), 0 == runDependencies && (null !== runDependencyWatcher && (clearInterval(runDependencyWatcher), runDependencyWatcher = null), dependenciesFulfilled)) {
                                    var callback = dependenciesFulfilled;
                                    dependenciesFulfilled = null, callback()
                                }
                            }()
                    }

                    function doBrowserLoad() {
                        readAsync(memoryInitializer, applyMemoryInitializer, function () {
                            throw "could not load memory initializer " + memoryInitializer
                        })
                    }
                    var memoryInitializerBytes = tryParseAsDataURI(memoryInitializer);
                    if (memoryInitializerBytes) applyMemoryInitializer(memoryInitializerBytes.buffer);
                    else if (Module.memoryInitializerRequest) {
                        function useRequest() {
                            var request = Module.memoryInitializerRequest,
                                response = request.response;
                            if (200 !== request.status && 0 !== request.status) {
                                var data = tryParseAsDataURI(Module.memoryInitializerRequestURL);
                                if (!data) return console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + request.status + ", retrying " + memoryInitializer), void doBrowserLoad();
                                response = data.buffer
                            }
                            applyMemoryInitializer(response)
                        }
                        Module.memoryInitializerRequest.response ? setTimeout(useRequest, 0) : Module.memoryInitializerRequest.addEventListener("load", useRequest)
                    } else doBrowserLoad()
                }
            function run(args) {
                function doRun() {
                    calledRun || (calledRun = !0, ABORT || (!0, callRuntimeCallbacks(__ATINIT__), callRuntimeCallbacks(__ATMAIN__), Module.onRuntimeInitialized && Module.onRuntimeInitialized(), function () {
                        if (Module.postRun)
                            for ("function" == typeof Module.postRun && (Module.postRun = [Module.postRun]); Module.postRun.length;) cb = Module.postRun.shift(), __ATPOSTRUN__.unshift(cb);
                        var cb;
                        callRuntimeCallbacks(__ATPOSTRUN__)
                    }()))
                }
                0 < runDependencies || (function () {
                    if (Module.preRun)
                        for ("function" == typeof Module.preRun && (Module.preRun = [Module.preRun]); Module.preRun.length;) cb = Module.preRun.shift(), __ATPRERUN__.unshift(cb);
                    var cb;
                    callRuntimeCallbacks(__ATPRERUN__)
                }(), 0 < runDependencies || (Module.setStatus ? (Module.setStatus("Running..."), setTimeout(function () {
                    setTimeout(function () {
                        Module.setStatus("")
                    }, 1), doRun()
                }, 1)) : doRun()))
            }

            function abort(what) {
                throw Module.onAbort && Module.onAbort(what), out(what += ""), err(what), ABORT = !0, 1, "abort(" + what + "). Build with -s ASSERTIONS=1 for more info."
            }
            if (Module.then = function (func) {
                    if (calledRun) func(Module);
                    else {
                        var old = Module.onRuntimeInitialized;
                        Module.onRuntimeInitialized = function () {
                            old && old(), func(Module)
                        }
                    }
                    return Module
                }, dependenciesFulfilled = function runCaller() {
                    calledRun || run(), calledRun || (dependenciesFulfilled = runCaller)
                }, Module.run = run, Module.abort = abort, Module.preInit)
                for ("function" == typeof Module.preInit && (Module.preInit = [Module.preInit]); 0 < Module.preInit.length;) Module.preInit.pop()();
            return Module.noExitRuntime = !0, run(), _em_module
        }
    }();
    "object" == typeof exports && "object" == typeof module ? module.exports = _em_module : "function" == typeof define && define.amd ? define([], function () {
        return _em_module
    }) : "object" == typeof exports && (exports._em_module = _em_module);
    var _em = _em_module();
})(Live2DCubismCore || (Live2DCubismCore = {}));
//# sourceMappingURL=live2dcubismcore.js.map