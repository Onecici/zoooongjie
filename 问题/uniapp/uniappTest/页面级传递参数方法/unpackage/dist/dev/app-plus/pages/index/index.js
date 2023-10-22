"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */,
/* 4 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 5)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 6);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 5)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!*********************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/main.js?{"type":"appStyle"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 18).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTJDIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 19);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 20 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \**********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 17);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 20);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 27);\n\n        \n        \n        \n        \n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBOEQ7QUFDOUQsUUFBUSwyRUFBRztBQUNYLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsZ0JBQWdCLDJFQUFHIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCAndW5pLXBvbHlmaWxsJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvaW5kZXgvaW5kZXgnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!****************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/pages/index/index.nvue?mpType=page ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&mpType=page */ 28);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 98);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 108).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 108).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"3946b20c\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG9FQUEyRDtBQUMvRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsb0VBQTJEO0FBQ3BIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjkwOTQwMiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIzOTQ2YjIwY1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&mpType=page */ 29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 29 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    zPaging: __webpack_require__(/*! @/uni_modules/z-paging/components/z-paging/z-paging.vue */ 30)
      .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        { staticClass: ["content"] },
        [
          _c(
            "z-paging",
            {
              ref: "paging",
              attrs: {
                lowerThreshold: 380,
                nvueBounce: false,
                useChatRecordMode: true,
              },
              on: {
                scroll: _vm.scrollEVENT,
                cellStyleChange: _vm.cellStyleChange,
                query: _vm.queryList,
              },
              scopedSlots: _vm._u([
                {
                  key: "bottom",
                  fn: function () {
                    return [
                      _c(
                        "view",
                        {
                          staticClass: ["sendBoxWrap"],
                          style: _vm.sendBoxStyle,
                        },
                        [
                          _c(
                            "view",
                            { staticClass: ["sendBox"] },
                            [_c("u-textarea", { staticClass: ["messgeBox"] })],
                            1
                          ),
                          _c("view", { staticClass: ["sendBtn"] }, [
                            _c(
                              "u-text",
                              {
                                staticStyle: {
                                  fontSize: "40rpx",
                                  color: "#ffc",
                                },
                                appendAsTree: true,
                                attrs: { append: "tree" },
                              },
                              [_vm._v("发送")]
                            ),
                          ]),
                        ]
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
              model: {
                value: _vm.dataList,
                callback: function ($$v) {
                  _vm.dataList = $$v
                },
                expression: "dataList",
              },
            },
            _vm._l(_vm.dataList, function (item, index) {
              return _c(
                "cell",
                {
                  key: item.name,
                  ref: "z-paging-" + index,
                  refInFor: true,
                  staticClass: ["item"],
                  style: _vm.cellStyle,
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [
                  _c("chatItem", {
                    ref: "chatItem",
                    refInFor: true,
                    attrs: { item: item },
                  }),
                ],
                1
              )
            }),
            0
          ),
          _c(
            "view",
            {
              staticClass: ["scrollBoxWrap"],
              style: { height: _vm.visibleHeight + "px" },
            },
            [
              _c("view", {
                staticClass: ["scrollBox"],
                style: _vm.scrollBoxStyle,
              }),
            ]
          ),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 30 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/z-paging.vue ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _z_paging_vue_vue_type_template_id_0f887f1e_scoped_true_name_z_paging___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./z-paging.vue?vue&type=template&id=0f887f1e&scoped=true&name=z-paging& */ 31);\n/* harmony import */ var _js_z_paging_main_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/z-paging-main.js?vue&type=script&lang=js& */ 41);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _js_z_paging_main_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _js_z_paging_main_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./z-paging.vue?vue&type=style&index=0&id=0f887f1e&scoped=true&lang=css& */ 96).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./z-paging.vue?vue&type=style&index=0&id=0f887f1e&scoped=true&lang=css& */ 96).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _js_z_paging_main_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _z_paging_vue_vue_type_template_id_0f887f1e_scoped_true_name_z_paging___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _z_paging_vue_vue_type_template_id_0f887f1e_scoped_true_name_z_paging___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0f887f1e\",\n  \"0f0eccc1\",\n  false,\n  _z_paging_vue_vue_type_template_id_0f887f1e_scoped_true_name_z_paging___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/z-paging/components/z-paging/z-paging.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0k7QUFDL0k7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlGQUF5RTtBQUM3SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUZBQXlFO0FBQ2xJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSw2R0FBTTtBQUNSLEVBQUUsc0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUhBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vei1wYWdpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmODg3ZjFlJnNjb3BlZD10cnVlJm5hbWU9ei1wYWdpbmcmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9qcy96LXBhZ2luZy1tYWluLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9qcy96LXBhZ2luZy1tYWluLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vei1wYWdpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGY4ODdmMWUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3otcGFnaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmODg3ZjFlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBmODg3ZjFlXCIsXG4gIFwiMGYwZWNjYzFcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy96LXBhZ2luZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!********************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/z-paging.vue?vue&type=template&id=0f887f1e&scoped=true&name=z-paging& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_vue_vue_type_template_id_0f887f1e_scoped_true_name_z_paging___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-paging.vue?vue&type=template&id=0f887f1e&scoped=true&name=z-paging& */ 32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_vue_vue_type_template_id_0f887f1e_scoped_true_name_z_paging___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_vue_vue_type_template_id_0f887f1e_scoped_true_name_z_paging___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_vue_vue_type_template_id_0f887f1e_scoped_true_name_z_paging___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_vue_vue_type_template_id_0f887f1e_scoped_true_name_z_paging___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 32 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/z-paging.vue?vue&type=template&id=0f887f1e&scoped=true&name=z-paging& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    zPagingEmptyView:
      __webpack_require__(/*! @/uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue */ 33)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    _vm.finalNvueSuperListIs,
    {
      tag: "component",
      class: { "z-paging-content-fixed": _vm.fixed && !_vm.usePageScroll },
      style: [_vm.finalPagingStyle],
      attrs: { scrollable: false },
    },
    [
      _vm.zSlots.top
        ? _c(
            "view",
            {
              ref: "zp-page-top",
              class: { "zp-page-top": _vm.usePageScroll },
              style: [
                _vm.usePageScroll
                  ? { top: _vm.windowTop + "px", "z-index": _vm.topZIndex }
                  : {},
              ],
            },
            [_vm._t("top")],
            2
          )
        : _vm._e(),
      _c(
        _vm.finalNvueSuperListIs,
        {
          tag: "component",
          staticClass: ["zp-n-list-container"],
          attrs: { scrollable: false },
        },
        [
          _vm.zSlots.left
            ? _c("view", { staticClass: ["zp-page-left"] }, [_vm._t("left")], 2)
            : _vm._e(),
          _c(
            _vm.finalNvueListIs,
            {
              ref: "zp-n-list",
              tag: "component",
              style: [
                { flex: 1, top: _vm.isIos ? "0px" : "-1px" },
                _vm.usePageScroll ? _vm.scrollViewStyle : {},
                _vm.nChatRecordRotateStyle,
              ],
              attrs: {
                id: _vm.nvueListId,
                alwaysScrollableVertical: true,
                fixFreezing: _vm.nFixFreezing,
                showScrollbar: _vm.showScrollbar && !_vm.useChatRecordMode,
                loadmoreoffset: _vm.finalLowerThreshold,
                enableBackToTop: _vm.enableBackToTop,
                scrollable:
                  _vm.scrollable &&
                  _vm.scrollEnable &&
                  (_vm.refresherCompleteScrollable
                    ? true
                    : _vm.refresherStatus !== _vm.R.Complete),
                bounce: _vm.nvueBounce,
                columnCount: _vm.nWaterfallColumnCount,
                columnWidth: _vm.nWaterfallColumnWidth,
                columnGap: _vm.nWaterfallColumnGap,
                leftGap: _vm.nWaterfallLeftGap,
                rightGap: _vm.nWaterfallRightGap,
                pagingEnabled: _vm.nvuePagingEnabled,
                offsetAccuracy: _vm.offsetAccuracy,
              },
              on: { loadmore: _vm._nOnLoadmore, scroll: _vm._nOnScroll },
            },
            [
              (_vm.zSlots.top ? _vm.cacheTopHeight !== -1 : true) &&
              _vm.finalNvueRefresherEnabled
                ? _c(
                    "refresh",
                    {
                      staticClass: ["zp-n-refresh"],
                      style: [_vm.nvueRefresherStyle],
                      attrs: {
                        display: _vm.nRefresherLoading ? "show" : "hide",
                      },
                      on: {
                        refresh: _vm._nOnRrefresh,
                        pullingdown: _vm._nOnPullingdown,
                      },
                    },
                    [
                      _c(
                        "view",
                        {
                          ref: "zp-n-refresh-container",
                          staticClass: ["zp-n-refresh-container"],
                          style: [
                            {
                              background: _vm.refresherBackground,
                              width: _vm.nRefresherWidth,
                            },
                          ],
                          attrs: { id: "zp-n-refresh-container" },
                        },
                        [
                          _vm.zSlots.refresherComplete &&
                          _vm.refresherStatus === _vm.R.Complete
                            ? _vm._t("refresherComplete")
                            : (_vm.nScopedSlots ? _vm.nScopedSlots : _vm.zSlots)
                                .refresher
                            ? _vm._t("refresher", null, {
                                refresherStatus: _vm.refresherStatus,
                              })
                            : _c("z-paging-refresh", {
                                ref: "refresh",
                                attrs: {
                                  status: _vm.refresherStatus,
                                  defaultThemeStyle:
                                    _vm.finalRefresherThemeStyle,
                                  defaultText: _vm.finalRefresherDefaultText,
                                  pullingText: _vm.finalRefresherPullingText,
                                  refreshingText:
                                    _vm.finalRefresherRefreshingText,
                                  completeText: _vm.finalRefresherCompleteText,
                                  defaultImg: _vm.refresherDefaultImg,
                                  pullingImg: _vm.refresherPullingImg,
                                  refreshingImg: _vm.refresherRefreshingImg,
                                  completeImg: _vm.refresherCompleteImg,
                                  refreshingAnimated:
                                    _vm.refresherRefreshingAnimated,
                                  showUpdateTime: _vm.showRefresherUpdateTime,
                                  updateTimeKey: _vm.refresherUpdateTimeKey,
                                  updateTimeTextMap:
                                    _vm.finalRefresherUpdateTimeTextMap,
                                  imgStyle: _vm.refresherImgStyle,
                                  titleStyle: _vm.refresherTitleStyle,
                                  updateTimeStyle: _vm.refresherUpdateTimeStyle,
                                },
                              }),
                        ],
                        2
                      ),
                    ]
                  )
                : _vm._e(),
              (
                _vm.isIos && !_vm.useChatRecordMode
                  ? _vm.oldScrollTop > 10
                  : true
              )
                ? _c(_vm.nViewIs, {
                    ref: "zp-n-list-top-tag",
                    tag: "component",
                    staticClass: ["zp-n-list-top-tag"],
                    staticStyle: { marginTop: "-1rpx" },
                    style: [
                      { height: _vm.finalNvueRefresherEnabled ? "0px" : "1px" },
                    ],
                  })
                : _vm._e(),
              _vm.nShowRefresherReveal
                ? _c(
                    _vm.nViewIs,
                    {
                      ref: "zp-n-list-refresher-reveal",
                      tag: "component",
                      style: [
                        {
                          transform:
                            "translateY(-" +
                            _vm.nShowRefresherRevealHeight +
                            "px)",
                        },
                        { background: _vm.refresherBackground },
                      ],
                    },
                    [
                      _vm.zSlots.refresherComplete &&
                      _vm.refresherStatus === _vm.R.Complete
                        ? _vm._t("refresherComplete")
                        : (_vm.nScopedSlots ? _vm.nScopedSlots : _vm.$slots)
                            .refresher
                        ? _vm._t("refresher", null, {
                            refresherStatus: _vm.R.Loading,
                          })
                        : _c("z-paging-refresh", {
                            ref: "refresh",
                            attrs: {
                              status: _vm.R.Loading,
                              defaultThemeStyle: _vm.finalRefresherThemeStyle,
                              defaultText: _vm.finalRefresherDefaultText,
                              pullingText: _vm.finalRefresherPullingText,
                              refreshingText: _vm.finalRefresherRefreshingText,
                              completeText: _vm.finalRefresherCompleteText,
                              defaultImg: _vm.refresherDefaultImg,
                              pullingImg: _vm.refresherPullingImg,
                              refreshingImg: _vm.refresherRefreshingImg,
                              completeImg: _vm.refresherCompleteImg,
                              refreshingAnimated:
                                _vm.refresherRefreshingAnimated,
                              showUpdateTime: _vm.showRefresherUpdateTime,
                              updateTimeKey: _vm.refresherUpdateTimeKey,
                              updateTimeTextMap:
                                _vm.finalRefresherUpdateTimeTextMap,
                              imgStyle: _vm.refresherImgStyle,
                              titleStyle: _vm.refresherTitleStyle,
                              updateTimeStyle: _vm.refresherUpdateTimeStyle,
                            },
                          }),
                    ],
                    2
                  )
                : _vm._e(),
              _vm.finalUseInnerList
                ? [
                    _c(
                      _vm.nViewIs,
                      { tag: "component" },
                      [_vm._t("header")],
                      2
                    ),
                    _vm._l(_vm.realTotalData, function (item, index) {
                      return _c(
                        _vm.nViewIs,
                        {
                          key: _vm.finalCellKeyName.length
                            ? item[_vm.finalCellKeyName]
                            : index,
                          tag: "component",
                          staticClass: ["zp-list-cell"],
                        },
                        [_vm._t("cell", null, { item: item, index: index })],
                        2
                      )
                    }),
                    _c(
                      _vm.nViewIs,
                      { tag: "component" },
                      [_vm._t("footer")],
                      2
                    ),
                  ]
                : [_vm._t("default")],
              _vm.showLoading && _vm.zSlots.loading && !_vm.loadingFullFixed
                ? _c(
                    _vm.nViewIs,
                    {
                      tag: "component",
                      class: { "z-paging-content-fixed": _vm.usePageScroll },
                      staticStyle: { flex: "1" },
                      style: [_vm.nChatRecordRotateStyle],
                    },
                    [_vm._t("loading")],
                    2
                  )
                : _vm._e(),
              _vm.showEmpty
                ? _c(
                    _vm.nViewIs,
                    {
                      tag: "component",
                      class: { "z-paging-content-fixed": _vm.usePageScroll },
                      staticStyle: { flex: "1" },
                      style: [
                        _vm.emptyViewSuperStyle,
                        _vm.nChatRecordRotateStyle,
                      ],
                    },
                    [
                      _c(
                        "view",
                        {
                          class: {
                            "zp-empty-view": true,
                            "zp-empty-view-center": _vm.emptyViewCenter,
                          },
                        },
                        [
                          _vm.zSlots.empty
                            ? _vm._t("empty", null, {
                                isLoadFailed: _vm.isLoadFailed,
                              })
                            : _c("z-paging-empty-view", {
                                attrs: {
                                  emptyViewImg: _vm.finalEmptyViewImg,
                                  emptyViewText: _vm.finalEmptyViewText,
                                  showEmptyViewReload:
                                    _vm.finalShowEmptyViewReload,
                                  emptyViewReloadText:
                                    _vm.finalEmptyViewReloadText,
                                  isLoadFailed: _vm.isLoadFailed,
                                  emptyViewStyle: _vm.emptyViewStyle,
                                  emptyViewTitleStyle: _vm.emptyViewTitleStyle,
                                  emptyViewImgStyle: _vm.emptyViewImgStyle,
                                  emptyViewReloadStyle:
                                    _vm.emptyViewReloadStyle,
                                  emptyViewZIndex: _vm.emptyViewZIndex,
                                  emptyViewFixed: _vm.emptyViewFixed,
                                },
                                on: {
                                  reload: _vm._emptyViewReload,
                                  viewClick: _vm._emptyViewClick,
                                },
                              }),
                        ],
                        2
                      ),
                    ]
                  )
                : _vm._e(),
              !_vm.hideNvueBottomTag
                ? _c("header", {
                    ref: "zp-n-list-bottom-tag",
                    tag: "component",
                    staticClass: ["zp-n-list-bottom-tag"],
                  })
                : _vm._e(),
              !_vm.refresherOnly && _vm.loadingMoreEnabled
                ? _c(_vm.nViewIs, { tag: "component" }, [
                    _vm.useChatRecordMode
                      ? _c("view", [
                          _vm.loadingStatus !== _vm.M.NoMore &&
                          _vm.realTotalData.length
                            ? _c(
                                "view",
                                [
                                  _vm.zSlots.chatLoading
                                    ? _vm._t("chatLoading")
                                    : _c(
                                        "view",
                                        {
                                          staticClass: [
                                            "zp-chat-record-loading-container",
                                          ],
                                        },
                                        [
                                          _vm.loadingStatus !== _vm.M.Loading
                                            ? _c(
                                                "u-text",
                                                {
                                                  class:
                                                    _vm.defaultThemeStyle ===
                                                    "white"
                                                      ? "zp-loading-more-text zp-loading-more-text-white"
                                                      : "zp-loading-more-text zp-loading-more-text-black",
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                  on: {
                                                    click: _vm._onScrollToUpper,
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.chatRecordLoadingMoreText
                                                    )
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _c("view", [
                                            _vm.loadingStatus === _vm.M.Loading
                                              ? _c("loading-indicator", {
                                                  staticClass: [
                                                    "zp-line-loading-image",
                                                  ],
                                                  attrs: { animating: true },
                                                })
                                              : _vm._e(),
                                          ]),
                                        ]
                                      ),
                                ],
                                2
                              )
                            : _vm._e(),
                        ])
                      : _vm._e(),
                    _c(
                      "view",
                      {
                        style: _vm.nLoadingMoreFixedHeight
                          ? {
                              height:
                                _vm.loadingMoreCustomStyle &&
                                _vm.loadingMoreCustomStyle.height
                                  ? _vm.loadingMoreCustomStyle.height
                                  : "80rpx",
                            }
                          : {},
                      },
                      [
                        _vm.showLoadingMoreDefault
                          ? _vm._t("loadingMoreDefault")
                          : _vm.showLoadingMoreLoading
                          ? _vm._t("loadingMoreLoading")
                          : _vm.showLoadingMoreNoMore
                          ? _vm._t("loadingMoreNoMore")
                          : _vm.showLoadingMoreFail
                          ? _vm._t("loadingMoreFail")
                          : _vm.showLoadingMoreCustom
                          ? _c("z-paging-load-more", {
                              attrs: { zConfig: _vm.zLoadMoreConfig },
                              on: {
                                doClick: function ($event) {
                                  _vm._onLoadingMore("click")
                                },
                              },
                            })
                          : _vm._e(),
                        _vm.safeAreaInsetBottom && _vm.useSafeAreaPlaceholder
                          ? _c("view", {
                              staticClass: ["zp-safe-area-placeholder"],
                              style: [{ height: _vm.safeAreaBottom + "px" }],
                            })
                          : _vm._e(),
                      ],
                      2
                    ),
                  ])
                : _vm._e(),
            ],
            2
          ),
          _vm.zSlots.right
            ? _c(
                "view",
                { staticClass: ["zp-page-right"] },
                [_vm._t("right")],
                2
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._t("bottom"),
      _vm.showBackToTopClass
        ? _c(
            "view",
            {
              class: _vm.backToTopClass,
              style: [_vm.finalBackToTopStyle],
              on: { click: _vm._backToTopClick },
            },
            [
              _vm.zSlots.backToTop
                ? _vm._t("backToTop")
                : _c("u-image", {
                    staticClass: ["zp-back-to-top-img"],
                    attrs: {
                      src: _vm.backToTopImg.length
                        ? _vm.backToTopImg
                        : _vm.base64BackToTop,
                    },
                  }),
            ],
            2
          )
        : _vm._e(),
      _vm.showLoading && _vm.zSlots.loading && _vm.loadingFullFixed
        ? _c(
            "view",
            { staticClass: ["zp-loading-fixed"] },
            [_vm._t("loading")],
            2
          )
        : _vm._e(),
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 33 */
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _z_paging_empty_view_vue_vue_type_template_id_a664708e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./z-paging-empty-view.vue?vue&type=template&id=a664708e&scoped=true& */ 34);\n/* harmony import */ var _z_paging_empty_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./z-paging-empty-view.vue?vue&type=script&lang=js& */ 36);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _z_paging_empty_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _z_paging_empty_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./z-paging-empty-view.vue?vue&type=style&index=0&id=a664708e&scoped=true&lang=css& */ 39).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./z-paging-empty-view.vue?vue&type=style&index=0&id=a664708e&scoped=true&lang=css& */ 39).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _z_paging_empty_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _z_paging_empty_view_vue_vue_type_template_id_a664708e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _z_paging_empty_view_vue_vue_type_template_id_a664708e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"a664708e\",\n  \"4e3c204f\",\n  false,\n  _z_paging_empty_view_vue_vue_type_template_id_a664708e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDRGQUFvRjtBQUN4SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNEZBQW9GO0FBQzdJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vei1wYWdpbmctZW1wdHktdmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTY2NDcwOGUmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi96LXBhZ2luZy1lbXB0eS12aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vei1wYWdpbmctZW1wdHktdmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi96LXBhZ2luZy1lbXB0eS12aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE2NjQ3MDhlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi96LXBhZ2luZy1lbXB0eS12aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE2NjQ3MDhlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImE2NjQ3MDhlXCIsXG4gIFwiNGUzYzIwNGZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy1lbXB0eS12aWV3L3otcGFnaW5nLWVtcHR5LXZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!****************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue?vue&type=template&id=a664708e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_template_id_a664708e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-paging-empty-view.vue?vue&type=template&id=a664708e&scoped=true& */ 35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_template_id_a664708e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_template_id_a664708e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_template_id_a664708e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_template_id_a664708e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 35 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue?vue&type=template&id=a664708e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      class: { "zp-container": true, "zp-container-fixed": _vm.emptyViewFixed },
      style: [_vm.finalEmptyViewStyle],
      on: { click: _vm.emptyViewClick },
    },
    [
      _c(
        "view",
        { staticClass: ["zp-main"] },
        [
          !_vm.emptyViewImg.length
            ? _c("u-image", {
                staticClass: ["zp-main-image"],
                style: [_vm.emptyViewImgStyle],
                attrs: { src: _vm.emptyImg },
              })
            : _c("u-image", {
                staticClass: ["zp-main-image"],
                style: [_vm.emptyViewImgStyle],
                attrs: { mode: "aspectFit", src: _vm.emptyViewImg },
              }),
          _c(
            "u-text",
            {
              staticClass: ["zp-main-title"],
              style: [_vm.emptyViewTitleStyle],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v(_vm._s(_vm.emptyViewText))]
          ),
          _vm.showEmptyViewReload
            ? _c(
                "u-text",
                {
                  staticClass: ["zp-main-error-btn"],
                  style: [_vm.emptyViewReloadStyle],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                  on: { click: _vm.reloadClick },
                },
                [_vm._v(_vm._s(_vm.emptyViewReloadText))]
              )
            : _vm._e(),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 36 */
/*!**********************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-paging-empty-view.vue?vue&type=script&lang=js& */ 37);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWliLENBQWdCLDZkQUFHLEVBQUMiLCJmaWxlIjoiMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vei1wYWdpbmctZW1wdHktdmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi96LXBhZ2luZy1lbXB0eS12aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _zPagingStatic = _interopRequireDefault(__webpack_require__(/*! ../z-paging/js/z-paging-static */ 38));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 = {\n  name: \"z-paging-empty-view\",\n  data: function data() {\n    return {};\n  },\n  props: {\n    //空数据描述文字\n    emptyViewText: {\n      type: String,\n      default: '没有数据哦~'\n    },\n    //空数据图片\n    emptyViewImg: {\n      type: String,\n      default: ''\n    },\n    //是否显示空数据图重新加载按钮\n    showEmptyViewReload: {\n      type: Boolean,\n      default: false\n    },\n    //空数据点击重新加载文字\n    emptyViewReloadText: {\n      type: String,\n      default: '重新加载'\n    },\n    //是否是加载失败\n    isLoadFailed: {\n      type: Boolean,\n      default: false\n    },\n    //空数据图样式\n    emptyViewStyle: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    //空数据图img样式\n    emptyViewImgStyle: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    //空数据图描述文字样式\n    emptyViewTitleStyle: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    //空数据图重新加载按钮样式\n    emptyViewReloadStyle: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    //空数据图z-index\n    emptyViewZIndex: {\n      type: Number,\n      default: 9\n    },\n    //空数据图片是否使用fixed布局并铺满z-paging\n    emptyViewFixed: {\n      type: Boolean,\n      default: true\n    }\n  },\n  computed: {\n    emptyImg: function emptyImg() {\n      return this.isLoadFailed ? _zPagingStatic.default.base64Error : _zPagingStatic.default.base64Empty;\n    },\n    finalEmptyViewStyle: function finalEmptyViewStyle() {\n      this.emptyViewStyle['z-index'] = this.emptyViewZIndex;\n      return this.emptyViewStyle;\n    }\n  },\n  methods: {\n    reloadClick: function reloadClick() {\n      this.$emit('reload');\n    },\n    emptyViewClick: function emptyViewClick() {\n      this.$emit('viewClick');\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy1lbXB0eS12aWV3L3otcGFnaW5nLWVtcHR5LXZpZXcudnVlIl0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwicHJvcHMiLCJlbXB0eVZpZXdUZXh0IiwidHlwZSIsImRlZmF1bHQiLCJlbXB0eVZpZXdJbWciLCJzaG93RW1wdHlWaWV3UmVsb2FkIiwiZW1wdHlWaWV3UmVsb2FkVGV4dCIsImlzTG9hZEZhaWxlZCIsImVtcHR5Vmlld1N0eWxlIiwiZW1wdHlWaWV3SW1nU3R5bGUiLCJlbXB0eVZpZXdUaXRsZVN0eWxlIiwiZW1wdHlWaWV3UmVsb2FkU3R5bGUiLCJlbXB0eVZpZXdaSW5kZXgiLCJlbXB0eVZpZXdGaXhlZCIsImNvbXB1dGVkIiwiZW1wdHlJbWciLCJmaW5hbEVtcHR5Vmlld1N0eWxlIiwibWV0aG9kcyIsInJlbG9hZENsaWNrIiwiZW1wdHlWaWV3Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFDQTtFQUNBQTtFQUNBQztJQUNBLFFBRUE7RUFDQTtFQUNBQztJQUNBO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQTtJQUNBQztNQUNBRjtNQUNBQztJQUNBO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBO0lBQ0FHO01BQ0FKO01BQ0FDO0lBQ0E7SUFDQTtJQUNBSTtNQUNBTDtNQUNBQztJQUNBO0lBQ0E7SUFDQUs7TUFDQU47TUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBTTtNQUNBUDtNQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FPO01BQ0FSO01BQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQVE7TUFDQVQ7TUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBUztNQUNBVjtNQUNBQztJQUNBO0lBQ0E7SUFDQVU7TUFDQVg7TUFDQUM7SUFDQTtFQUNBO0VBQ0FXO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIHotcGFnaW5nIC0tPlxuPCEtLSBnaXRodWLlnLDlnYA6aHR0cHM6Ly9naXRodWIuY29tL1NtaWxlWlhMZWUvdW5pLXotcGFnaW5nIC0tPlxuPCEtLSBkY2xvdWTlnLDlnYA6aHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MzkzNSAtLT5cbjwhLS0g5Y+N6aaIUVHnvqTvvJo3OTA0NjA3MTEgLS0+XG5cbjwhLS0g56m65pWw5o2u5Y2g5L2Ndmlld++8jOatpOe7hOS7tuaUr+aMgWVhc3ljb23op4TojIPvvIzlj6/ku6XlnKjpobnnm67kuK3nm7TmjqXlvJXnlKggLS0+XG48dGVtcGxhdGU+XG5cdDx2aWV3IDpjbGFzcz1cInsnenAtY29udGFpbmVyJzp0cnVlLCd6cC1jb250YWluZXItZml4ZWQnOmVtcHR5Vmlld0ZpeGVkfVwiIDpzdHlsZT1cIltmaW5hbEVtcHR5Vmlld1N0eWxlXVwiIEBjbGljaz1cImVtcHR5Vmlld0NsaWNrXCI+XG5cdFx0PHZpZXcgY2xhc3M9XCJ6cC1tYWluXCI+XG5cdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFlbXB0eVZpZXdJbWcubGVuZ3RoXCIgY2xhc3M9XCJ6cC1tYWluLWltYWdlXCIgOnN0eWxlPVwiW2VtcHR5Vmlld0ltZ1N0eWxlXVwiIDpzcmM9XCJlbXB0eUltZ1wiIC8+XG5cdFx0XHQ8aW1hZ2Ugdi1lbHNlIGNsYXNzPVwienAtbWFpbi1pbWFnZVwiIG1vZGU9XCJhc3BlY3RGaXRcIiA6c3R5bGU9XCJbZW1wdHlWaWV3SW1nU3R5bGVdXCIgOnNyYz1cImVtcHR5Vmlld0ltZ1wiIC8+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cInpwLW1haW4tdGl0bGVcIiA6c3R5bGU9XCJbZW1wdHlWaWV3VGl0bGVTdHlsZV1cIj57e2VtcHR5Vmlld1RleHR9fTwvdGV4dD5cblx0XHRcdDx0ZXh0IHYtaWY9XCJzaG93RW1wdHlWaWV3UmVsb2FkXCIgY2xhc3M9XCJ6cC1tYWluLWVycm9yLWJ0blwiIDpzdHlsZT1cIltlbXB0eVZpZXdSZWxvYWRTdHlsZV1cIiBAY2xpY2suc3RvcD1cInJlbG9hZENsaWNrXCI+e3tlbXB0eVZpZXdSZWxvYWRUZXh0fX08L3RleHQ+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgelN0YXRpYyBmcm9tICcuLi96LXBhZ2luZy9qcy96LXBhZ2luZy1zdGF0aWMnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiBcInotcGFnaW5nLWVtcHR5LXZpZXdcIixcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0cHJvcHM6IHtcblx0XHRcdC8v56m65pWw5o2u5o+P6L+w5paH5a2XXG5cdFx0XHRlbXB0eVZpZXdUZXh0OiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJ+ayoeacieaVsOaNruWTpn4nXG5cdFx0XHR9LFxuXHRcdFx0Ly/nqbrmlbDmja7lm77niYdcblx0XHRcdGVtcHR5Vmlld0ltZzoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9LFxuXHRcdFx0Ly/mmK/lkKbmmL7npLrnqbrmlbDmja7lm77ph43mlrDliqDovb3mjInpkq5cblx0XHRcdHNob3dFbXB0eVZpZXdSZWxvYWQ6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHQvL+epuuaVsOaNrueCueWHu+mHjeaWsOWKoOi9veaWh+Wtl1xuXHRcdFx0ZW1wdHlWaWV3UmVsb2FkVGV4dDoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICfph43mlrDliqDovb0nXG5cdFx0XHR9LFxuXHRcdFx0Ly/mmK/lkKbmmK/liqDovb3lpLHotKVcblx0XHRcdGlzTG9hZEZhaWxlZDoge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdC8v56m65pWw5o2u5Zu+5qC35byPXG5cdFx0XHRlbXB0eVZpZXdTdHlsZToge1xuXHRcdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9LFxuXHRcdFx0Ly/nqbrmlbDmja7lm75pbWfmoLflvI9cblx0XHRcdGVtcHR5Vmlld0ltZ1N0eWxlOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCAgICByZXR1cm4ge31cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8v56m65pWw5o2u5Zu+5o+P6L+w5paH5a2X5qC35byPXG5cdFx0XHRlbXB0eVZpZXdUaXRsZVN0eWxlOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCAgICByZXR1cm4ge31cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8v56m65pWw5o2u5Zu+6YeN5paw5Yqg6L295oyJ6ZKu5qC35byPXG5cdFx0XHRlbXB0eVZpZXdSZWxvYWRTdHlsZToge1xuXHRcdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQgICAgcmV0dXJuIHt9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvL+epuuaVsOaNruWbvnotaW5kZXhcblx0XHRcdGVtcHR5Vmlld1pJbmRleDoge1xuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6IDlcblx0XHRcdH0sXG5cdFx0XHQvL+epuuaVsOaNruWbvueJh+aYr+WQpuS9v+eUqGZpeGVk5biD5bGA5bm26ZO65ruhei1wYWdpbmdcblx0XHRcdGVtcHR5Vmlld0ZpeGVkOiB7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRlbXB0eUltZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRGYWlsZWQgPyB6U3RhdGljLmJhc2U2NEVycm9yIDogelN0YXRpYy5iYXNlNjRFbXB0eTtcblx0XHRcdH0sXG5cdFx0XHRmaW5hbEVtcHR5Vmlld1N0eWxlKCl7XG5cdFx0XHRcdHRoaXMuZW1wdHlWaWV3U3R5bGVbJ3otaW5kZXgnXSA9IHRoaXMuZW1wdHlWaWV3WkluZGV4O1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5lbXB0eVZpZXdTdHlsZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHJlbG9hZENsaWNrKCkge1xuXHRcdFx0XHR0aGlzLiRlbWl0KCdyZWxvYWQnKTtcblx0XHRcdH0sXG5cdFx0XHRlbXB0eVZpZXdDbGljaygpIHtcblx0XHRcdFx0dGhpcy4kZW1pdCgndmlld0NsaWNrJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblx0LnpwLWNvbnRhaW5lcntcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5cdC56cC1jb250YWluZXItZml4ZWQge1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xuXHRcdGZsZXg6IDE7XG5cdFx0LyogI2VuZGlmICovXG5cdH1cblxuXHQuenAtbWFpbntcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDUwcnB4IDBycHg7XG5cdH1cblxuXHQuenAtbWFpbi1pbWFnZSB7XG5cdFx0d2lkdGg6IDIwMHJweDtcblx0XHRoZWlnaHQ6IDIwMHJweDtcblx0fVxuXG5cdC56cC1tYWluLXRpdGxlIHtcblx0XHRmb250LXNpemU6IDI2cnB4O1xuXHRcdGNvbG9yOiAjYWFhYWFhO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcblx0fVxuXG5cdC56cC1tYWluLWVycm9yLWJ0biB7XG5cdFx0Zm9udC1zaXplOiAyNnJweDtcblx0XHRwYWRkaW5nOiA4cnB4IDI0cnB4O1xuXHRcdGJvcmRlcjogc29saWQgMXB4ICNkZGRkZGQ7XG5cdFx0Ym9yZGVyLXJhZGl1czogNnJweDtcblx0XHRjb2xvcjogI2FhYWFhYTtcblx0XHRtYXJnaW4tdG9wOiA1MHJweDtcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/z-paging-static.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// [z-paging]公用的静态图片资源\nvar _default = {\n  base64Arrow: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcExRUVFMTExRUVFRUVE9CdWsAAAABHRSTlMAjjrY9ZnUjwAAAQFJREFUWMPt2MsNgzAMgGEEE1B1gKJmAIRYoCH7z9RCXrabh33iYktcIv35EEg5ZBh07pvxJU6MFSPOSRnjnBUjUsaciRUjMsb4xIoRCWNiYsUInzE5sWKEyxiYWDbyefqHx1zIeiYTk7mQYziTYecxHvEJjwmIT3hMQELCYSISEg4TkZj0mYTEpM8kJCU9JiMp6TEZyUmbAUhO2gxAQNJiIAKSFgMRmNQZhMCkziAEJTUGIyipMRjBSZkhCE7KDEFIUmTeGCHJxWz0zXaE0GTCG8ZFtEaS347r/1fe11YyHYVfubxayfjoHmc0YYwmmmiiiSaaaKLJ7ckyz5ve+dw3Xw2emdwm9xSbAAAAAElFTkSuQmCC',\n  base64ArrowWhite: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz///////////////////+IGTx/AAAABnRSTlMA/dAkXZOhASU/AAABYElEQVRYw+2YwXLCIBCGsdAHWGbyAKZ4zxi9O017rxLf/1UaWFAgA1m8dcpedNSPf/l/Vh0Ya/Wn6hN0JcGvoCqRM4C8VBFiDwBqqNuJKV0rAnCgy3AUqZE57x0iqTL8Br4U3WBf/YWaIlTKfAcELU/h9w72CSVPa3C3OCDvhpHbRp/s2vq4fHhCeiCl2A3m4Qd71DQR257mFBlMcTlbFnFWzNtHxewYEfSiaLS4el8d8nyhmKJd1CF4eOS0keLMAuSxubLBIeIGQW8YHCFFo7EH9+YDcQt9FMZEswTheaNxTHwHT8SZorJjMrEVwo4Zo0U8HSEyZvJMOg4RjnmmRr8nDYeIz3OMkbfE/QhBo+U9RnZJxjGCRh/WKmHEMWLNkfPKsGh/CWJk1JjG0kcuJggTt34VDP8aWAFhp4nybVb5+9qQhjSkIQ1pSEMa8k+Q5U9rV3dF8MpFBK+/7miVq1/HZ2qmo9D+pAAAAABJRU5ErkJggg==',\n  base64Flower: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEVHcEzDw8Ovr6+pqamUlJTCwsKenp61tbWxsbGysrLNzc2bm5u5ubmjo6MpovhuAAAACnRSTlMA/P79/sHDhiZS0DxZowAABBBJREFUWMPtl89rE0EUx7ctTXatB3MI1SWnDbUKPUgXqh4ED8Uf7KUVSm3ooVSpSii0Fn/gD4j4o+APiEoVmos9FO2celiqZVgwgaKHPQiCCkv+F99kM7Ozm5kxq1dfD91k9pPve9/3ZjbRNHHok/mKli4eIPNgSuRObuN9SqSEzM20iGnm0yIbqCuV7NSSSIV7uyPM6JMBYdeTOanh/QihJYZsUCSby+VkMj2AvOt0rAeQAwqE3lfKMZVlQCZk1QOCKkkVPadITCfIRNKxfoJI5+0OIFtJx14CMSg1mRSDko7VAfksRQzEbGYqxOJcVTWMCH2I1/IACNW0PWU2M8cmAVHtnH5mM1VRWtwKZjOd5JbF6s1IbaYqaotjNlPHgDAnlAizubTR6ovMYn052g/U5qcmOpi0WL8xTS/3IfSet5m8MEr5ajjF5le6dq/OJpobrdY0t3i9QgefWrxW9/1BLhk0E9m8FeUMhhXal499iD0eQRfDF+ts/tttORRerfp+oV7f4xJj82iUYm1Yzod+ZQEAlS/8mMBwKebVmCVp1f0JLS6zKd17+iwRKTARVg2SHtz3iEbBH+Q+U28zW2Jiza8Tjb1YFoYZMsJyjDqp3M9XBQdSdPLFdxEpvOB37JrHcmR/y9+LgoTlCFGZEa2sc6d4PGlweEa2JSVPoVm+IfGG3ZL037iV9oH+P+Jxc4HGVflNq1M0pivao/EopO4b/ojVCP9GjmiXOeS0DOn1o/iiccT4ORnyvBGF3yUywkQajW4Ti0SGuiy/wVSg/L8w+X/8Q+hvUx8Xd90z4oV5a1i88MbFWHz0WZZ1UrTwBGPX3Rat9AFiXRMRjoMdIdJLEOt2h7jrYOzgOamKZSWSNspOS0X8SAqRYmxRL7sg4eLzYmNehcxh3uoyud/BH2Udux4ywxFTc1xC7Mgf4vMhc5S+kSH3Y7yj+qpwIWSoPTVCOOPVthGx9FbGqrwFw6wSFxJr+17zeKcztt3u+2roAEVgUjDd+AHGuxHy2rZHaa8JMkTHEeyi85ANPO9j9BVuBRD2FY5LDMo/Sz/2hReqGIs/KiFin+CsPsYO/yvM3jL2vE8EbX7/Bf8ejtr2GLN65bioAdgLd8Bis/mD5GmP2qeqyo2ZwQEOtAjRIDH7mBKpUcMoApbZJ5UIxkEwxyMZyMxW/uKFvHCFR3SSmerHyDNQ2dF4JG6zIMpBgLfjSF9x1D6smFcYnGApjmSLICO3ecCDWrQ48geba9DI3STy2i7ax6WIB62fSyIZIiO3GFQqSURp8wCo7GhJBGwuSovJBNjb7kT6FPVnIa9qJ2Ko+l9mefGIdinaMp0yC1URYiwsdfNE45EuA5Cx9EhalfvN5s+UyItm81vaB3p4joniN+SCP7Qc1hblAAAAAElFTkSuQmCC',\n  base64FlowerWhite: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEX///9HcEz///////////////84chYNAAAABnRSTlP/AGzCOYZj5g1nAAACfklEQVRYw+2YTVPDIBCGtza9Jw25a0bvcax30o73OOr//yvma2F3YWlpPTijXNpAHrK8LLALVPFium2vNIFSbwGKTGQA2GUiHcD29yDNy3sMIdUBQl7r2H8mOEVqAHgPkYZUS6Qc2zYhQqtjyDZEximCZwWZLIBeIgYShs2NzxKpSUehYpMJhURGb+O+w5BpMCAREKPnCDHbIY20SzhM5yxziAXpOiBXydrekT9i5XDEq4NIIHHgyU5mRGqviII4mREJJA4QJzMiILwlRJzpKxJKvCBm8OsBBbLux0tsPl4RKYm5aPu6jw1U4mGxEUR9g8M1PcqBEp/WJliNgYOXueBzS4jZSIcgY5lCtevgDSgyzE+rAfuOTQMq0yzvoGH18qju27Mayzs4fPyMziCx81NJa5RNfW7vPYK9KOfDiVkBxFHG8hAj9txuoBuSWORsFfkpBf7xKFLSeaOefEojh5jz22DJEqMP8fUyaKdQx+RnG+yXMpe8Aars8ueR1pVH/bW3FyyvPRw90upLDHwpgBDtg4aUBNkxRLXMAi03IhcZtr1m+FeI/O/JNyDmmL1djLOauSlNflBpW18RQ2bPqXI22MXXEk75KRHTnkPkYbESbdKP2ZFk0r5sIwffAjy1lx+vx7NLjB6/E7Jfv5ERKhzpN0w8IDE8IGFDv5dhz10s7GFiXRZcUeLCEG5P5nDq9k4PFDcoMpE3GY4OuxuCXhmuyNB6k0RsLIAvqp9NE5r8ZCSS8gxnUp7ODdYhZTqxuiJ9uyJJtPmpqJ7wVj+XVieS903iViHziqAhchLEJAyb7jWU647EpUofQ0ziUuXXXhDddtlllSwjgSQu7r4BRWhQqfDPMVwAAAAASUVORK5CYII=',\n  base64Success: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVRUVFHcExTU1NRUVFRUVFRUVFOSlSUAAAABnRSTlP/AI6+VySB3ZENAAACcElEQVRYw+2YyYKCMAyGI8hdpdxdZu7gcpdZ7jL6/s8yYheSNi0aPdqbwOffpGmaFOYPD3gj4bisN7vddv17N/JVgxn5x12IWgIaWTuO/IE3PseQbwjGPo2cgRmHFLJwdm/X643zwiqOKPPJ1nj3sjEP2iiifZWj5bhopSyGaEO2HX5fbQJzwJ+W7x/jw5ZFjsEU0PMph9xE8i5EqprKALW95eJQURkgzw98uJ/JvwGecR7bIjWWsUgVrrIfFZ2HlLy3sKETD1mmRLRMRhGVssRa0xJkdn3SpJBymBkM8+pSSDXMDNyDaToVHd2fgpNt0sjwiUZO19+jGQ+gQEg9Oq+bufmAVGihomNmjQG7UG3020vrlm7lkFnKFGU3kZ0KGAdmKe821pipQ+qEKcrZeTL2g5FsUks4cStjEZWwXg0b0n4GxmEpkWwIs5VBynjgK7xZaz1/0D7OxkVuLpsY5BQNFyLS84VBjjbg0iL2r2EQHBOxBhikuUOkdxODVF1cxHoWtPPsiyXO455Iv34hssCO8EV4ZIYTjS8SR4qYSHRiTiYQ4ZFbHi0iIhhBTi6dTCgSWRcnw4h4yGTuyTAiOGBIWGoZTgSHJQl+LcOJ4OCnW6yX2bMnJ9pidCOXtkTkTrIGpYuOynAiOF14SamMiOCk5Ke+mq8BcOrrvym8d0zKIQnWT+M1WwOQNO4fFiWb18hhERxJPx2fblbPHHyC41VyiAtKBUFBIih7JMWVoIQTFIr3lKPN80WvoLSWFPC653ioTZA0I0FrQ7qU6asaK0H7JmkSJa2ooOGVtNUsc3j9FYHkIkJy3SG6VHnfXKXGP9t4N9Q4Ye98AAAAAElFTkSuQmCC',\n  base64SuccessWhite: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAGFBMVEVHcEz///////////////////////////8dS1W+AAAAB3RSTlMAiVYk6KvDHLfaegAAAo1JREFUWMPtWEtzmzAQNhCTq910ytXpiyvxTNOr60zrayepx9d02gnX4sTm7xcEiJX2gdnkGJ1A4tOnfWqXyeR1vMRYzrcPD9v5h5MBl3/Ldvx4cxIg/FWC8X0xjLjalM54uhhCfCrRuJURX0pi3EmIqZV7O59vrRZmguStHL9b7S7ftfLwOtiZDw7AHMtmquAQ12b5Wwbnordm8g9zLLO49qc/m2n6aKnhwPOGZ08hAiNHhheiHae1lOUPGZpQkPKa3q0mOUjaRzSRaGUjpy/mmWSwySSpllcEteBKAT52KEnSbblA51pJEPxBQoiH1FP4E3s5+FJv07h6/ylD6ui7B+9fq/ehrFB98ghec9EoVtyjK8pqCHLmCBOwMWSCeWFNN4MbPAk55NhsvoFHSSVR0k5TCTTEzlUGcqV/nVp7n9oIVkmtaqbAEqEgfdgHJPwsEAyZ9r4VAZXFjpEwyaw3+H2v42KYxKhs1XvY/gSSGv+IHyUSuHXCeZhLAgVI3EjgSGo1Fb3xO0tGGU9S2/KAIbtjxpJASG73qox6w5LUq0cEOa+iIONIWIilQSQ0pPa2jgaRQAgQP7c0mITRWGxpMAmEQFN2NAQJNCV0mI6GIIEO47hlQ0ORQLd0nL+hoUjg1m6I1TRr8uYEAriBHLcVFQ5UEMiBe3XkTBEG04WXlGKGxPnMS305XQPA1Ocn2JiuAZwE66fxnKwBnDTuXxZTMq85lwW6kt5ndLqZPefiU1yvmktcUSooChJF2aMprhQlnKJQ5FxRKkcVRa+itNYU8Io2oVkY14w0NMWYlqft91Bj9VHq+ca3b43BxjWJmla0sfKohlfTVpPN+93L/yLQ/IjQ/O5Q/VR5HdL4D7mlxmjwVdELAAAAAElFTkSuQmCC',\n  base64Empty: 'data:image/png;base64,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',\n  base64Error: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAJFBMVEVHcEzo6Oibm5ukpKSbm5uampqbm5ubm5u5ubnn5+fm5ub6+vpGpDPdAAAAC3RSTlMA/v4hb+u20dq8aQhnHL4AAATwSURBVHja7ZvNb+JGGMbdjjdVe3NPodzeMhj1ZMUGujkh28B9wKR7iwwBqafWSbPqsbm0uTWtVlrTS9v0Et9yqLQS/1zHNiTZMMB4bO92d+dRUITt8c/PvPPx2h4URUpKSkpKSkpK6m3K6lFN73Q+S/+es3W3fzabTh2Dl0FAXEM+BgrgeXxRsdILTDU9n7J0vz/+EsCYC9KEiSFc06pf5zouqAkjkGWo0OG5Fq6j2IwZ6I4/4DhyTxc20oUjAj5PRTTrwvGAZ9p+ADzlD4RDctCoLhb7JUP87xeLxS3BZUIQ+YNCFi8wRwc4GIqGRK/GkM+5ILV8kFflOmkkkH/LddJ4c05eSSfSyTvrZPEmnCw+UCeuk84QvTSnUF0uCL68fBle/swF+RL1QZ/EpU6gHtOsAM64pnjPwxgTLsjoBM58ODNaAXYBT5QeGdr0KwcEA8He0TkPBLCjUDNHpG4qlg8eTCzXht1FVd1MxTPHj5LTtUiSrKK+7iDf8wBGxk4If3arLv/HF4Tox0A2nlFIGp+CIA+LzSamgbp4TNvZjECtDAjyMcB5HybLO6NxsRA1vmFCNjguNXDGWygbRPXh/B+zn9zPWK5RCkT18QxA57YgAqE+HGS6/tAoD4JO0ts+M2tbyQJpc95a5oI0xXNhCZGQ/x8E0VSCkUZY6Z6CIE/qdO5eL+yPlW6tMMgefPs3o7Bdt8iguJj4DThlZSY/rJ0yB+RraLDK2jAQCHyr4zIhT9mQ7vowygMZjpgQG+CYUV2E1EWqixyzICr8eFFnBB5ba1Y4IIfeKQvysW7ssZrwQLEFmvCBM2U6oRkdI5Wgm1QnO8RUTDlASoiESIiESMh7BDHKhlhu/LbSNUuEqL3lu1p945vO3BArADiaum7vBGDUKQfSIjBykooyrRPQnTIglHFfSagHeqd4iErwa9duEebpckGQjx/VT4v5fC0XhJHAd1mPRvJAVMZiAeQzTpgHYrPKqkGnUEiX+dCoNS4UgniHMTnUS4iESIiE7IS0x+mnVAidglDwVcmQJpy2WQ8VC4UgogfbA1RE4Nuw3UghEBV2rKl7V5ygAJPSY9KGQbP01mVjA5Fa2f1kQN2U3k+M9POWB8gnJUNMZJioWTMzKwOklyxgDrCXVcMMEF90tXM9C2TiCqmfCdIRi/jeewNpyerKok9WkGuzfCdYC+fXRsmBxxpVGG2zY0ZBbieJKvPrDQce3lxppBhIjGFWGkVoxUEoZt0Mukn2XBQH0bTHZpaMIp2sU/6qasU70W6/eHjM09VmYSc6C6Jpvz+orKvVxot8kL3HkMr9IZ9qeZ2o6RrO9mOI9ufdIR9peZ2gNIW31yC/MpyI9ngUDNIsezPks3vIsWDGdYA7cZa9pbqUVeCr/neiaR3U3R4BfXPg75vwb8I/b7HjxChobDZCO+Ny4wuxxaVxPPowcoNnrzPmzGFlX3RJHz2FafbhJ41n8PLx2DCM7KkwQgpqka1DVzKdJNHfJwBe9l/n0eSZFsIPjVSY8xZKZpSXnogwled98wAx3xRcdBNq1f1fhFVdIcL5tvaDolC7XaqaWStEtLOJHkbhlSauMLrma4yHEa03AVUoIUs/M2NQFkchBZiGUPeKonAnqhLOo4hrKf0WTyZ1FcU0Ki0hVrSr+Mucnvya7jYUKSkpKSkpKSmpD0f/AXq+Umj5XnXDAAAAAElFTkSuQmCC',\n  base64BackToTop: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAElBMVEVRUVH+/v5HcEyZmZlRUVFRUVGm1ByOAAAABnRSTlPMzADMTZAJBBGsAAAEnElEQVR42t2cS27jMAyGf7/2U+QCQeDsbeQCgZDujaC5/1UmkzaJn+JDFGcw3LdfflKibJkkDnxrL7dbg7sNt6+L4O8OYBM+B0ys+QrGkHZG+OEEQ8g6go8Bx1GIGMdpNOQyIG6XdMgnSPtKhLQDGEZFBgYMkhKFtGBb0EIEjDgFRowoBVaMGAWpMedEfxMiZtwpUsgZCqtlkCNUdpVAWigtCCCDFtLwIWeoreZCWiRYYEKGFEjDg+yRZCUH0iLRAgNyToXUNCRZyMqWhGnUN2IPm3wSlwJ7IUspyCBkIQUZhCykIIeQuRTkEDKXAuM9srrtYbrZN7Y98giZSoFd+t1OxmMITG0dcrSFXFchZ1tIvQZpYWxhBbK3hpQrkMEa0iwh5t4a+QvZvDXyF7J5a+Qv5PPW21/I5623v5DPW29/IaO3Xv5Clrw1y1/Ikrdm+Qs5svw83yNnSJ5BQb4F/F7EIEJSnThGBAXxkFQfLOviQUE8JAUPsosHBfGQfDAtHhREQ1JxIV00KIgmrnRI84S0yAd5BAXxxJUck0f6Qnwr9qmr6xF5xLMjcwn/iudIEAdWnyjkEXlQKZiRVzoqRyLbgeUKKR8Q4alY7cSnoxzSf2ggsqehKr6YVpcXpOd7H93f60cKhOd7Re2LteUF4eLqiVS1mr0ge4io6C2+soaFkJ7MuuuQs1yITEp9hwwKISIpzR2iESKSIoT0rLNwuVHQqoSIpAQJpGce60vIUSdEIuUqgPTsJ5QFZK8UIpBS8iG94GFrDjlrhfCl8CG96Llxmle4kEr6vKWBPIVo9kqDQSRk9/3cWoikcCFPAd33v4dIChPyEvLzBA6RlEYWke4JEUnhKXkLeUEKxRHJFfKCQHGucIW8IdZSRkLeEGMpYyEjiK2UsZARxFTKRMgYYillImQMMZQyFTKB2EmZCplAuFLIHT8TMoWwpQwiIVMIUwqpZP5bp5CCvCTiQKr5f5lCQN+tPCBn2ZvVDFJwIDUP0m1BYAfZYRNSsCB7BqTbhoARePIxtZ9tgwWkoJcwCalmv3MBAemtO4R6dah2HaKQqj8Zvp9sQDjvJ21+SPCBHPJDDk6QITekEV7gqCC19CpKAym9IMfckKv4olMBCeIrWwVEfvkshzQekO9r9P1/ALk+IG1eSPCDiCJfyG+FyU+A6ZCa/piZDinpz7LpkCv5gdkAEshP5emQhv7onw6pGeULyZCSUYiRDAmMkpJkCKs4JhFSq8p8hJBSVbAkhARV6ZUQoisik0FqXTmcDHLVFfbJIEFXoiiCNMpiSxGkVJaNiiBBWQArgTTaUl4JpNQWJUsgQVteXQg+AKkLxQWFGKW+5J2+eVp4S168X3CF1CltCKdTJ8lb84YK2bUBO+wZW0Pqv9nk4tKu49N45NJC5dMM5tLW5tOg59Jq6NM06dL+abFXwr/RkuvTXJwae1abtE/Dt0/ruksTvs84AZ/BCC4jHnyGVfiM3VBQFANEXEah+Ax18RlP4zNox2dkkM/wI58xTn8yDCXGYCDV3W5RGSajtXyGhG1jbpbjzpwGt/0MJft8jqC7iUbQ/QZaxdnKqcIftwAAAABJRU5ErkJggg=='\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy96LXBhZ2luZy1zdGF0aWMuanMiXSwibmFtZXMiOlsiYmFzZTY0QXJyb3ciLCJiYXNlNjRBcnJvd1doaXRlIiwiYmFzZTY0Rmxvd2VyIiwiYmFzZTY0Rmxvd2VyV2hpdGUiLCJiYXNlNjRTdWNjZXNzIiwiYmFzZTY0U3VjY2Vzc1doaXRlIiwiYmFzZTY0RW1wdHkiLCJiYXNlNjRFcnJvciIsImJhc2U2NEJhY2tUb1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxlQUVlO0VBQ2RBLFdBQVcsRUFBRSxvZkFBb2Y7RUFDamdCQyxnQkFBZ0IsRUFBRSw0bkJBQTRuQjtFQUM5b0JDLFlBQVksRUFBRSxvakRBQW9qRDtFQUNsa0RDLGlCQUFpQixFQUFFLHcvQkFBdy9CO0VBQzNnQ0MsYUFBYSxFQUFFLG8rQkFBbytCO0VBQ24vQkMsa0JBQWtCLEVBQUUsb2hDQUFvaEM7RUFDeGlDQyxXQUFXLEVBQUUsb3ZGQUFvdkY7RUFDandGQyxXQUFXLEVBQUUsdzFEQUF3MUQ7RUFDcjJEQyxlQUFlLEVBQUU7QUFDbEIsQ0FBQztBQUFBIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3otcGFnaW5nXeWFrOeUqOeahOmdmeaAgeWbvueJh+i1hOa6kFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGJhc2U2NEFycm93OiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUJrQkFNQUFBQ0N6SWhuQUFBQUQxQk1WRVZIY0V4UlVWRk1URXhSVVZGUlVWRTlDZFdzQUFBQUJIUlNUbE1BampyWTlablVqd0FBQVFGSlJFRlVXTVB0Mk1zTmd6QU1nR0VFRTFCMWdLSm1BSVJZb0NIN3o5UkNYcmFiaDMzaVlrdGNJdjM1RUVnNVpCaDA3cHZ4SlU2TUZTUE9TUm5qbkJValVzYWNpUlVqTXNiNHhJb1JDV05pWXNVSW56RTVzV0tFeXhpWVdEYnllZnFIeDF6SWVpWVRrN21RWXppVFllY3hIdkVKandtSVQzaE1RRUxDWVNJU0VnNFRrWmowbVlURXBNOGtKQ1U5SmlNcDZURVp5VW1iQVVoTzJneEFRTkppSUFLU0ZnTVJtTlFaaE1Da3ppQUVKVFVHSXlpcE1SakJTWmtoQ0U3S0RFRklVbVRlR0NISnhXejB6WGFFMEdUQ0c4WkZ0RWFTMzQ3ci8xZmUxMVl5SFlWZnVieGF5ZmpvSG1jMFlZd21tbWlpaVNhYWFLTEo3Y2t5ejV2ZStkdzNYdzJlbWR3bTl4U2JBQUFBQUVsRlRrU3VRbUNDJyxcclxuXHRiYXNlNjRBcnJvd1doaXRlOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUJrQkFNQUFBQ0N6SWhuQUFBQUVsQk1WRVZIY0V6Ly8vLy8vLy8vLy8vLy8vLy8vLytJR1R4L0FBQUFCblJTVGxNQS9kQWtYWk9oQVNVL0FBQUJZRWxFUVZSWXcrMll3WExDSUJDR3NkQUhXR2J5QUtaNHp4aTlPMDE3cnhMZi8xVWFXRkFnQTFtOGRjcGVkTlNQZi9sL1ZoMFlhL1duNmhOMEpjR3ZvQ3FSTTRDOFZCRmlEd0JxcU51SktWMHJBbkNneTNBVXFaRTU3eDBpcVRMOEJyNFUzV0JmL1lXYUlsVEtmQWNFTFUvaDl3NzJDU1ZQYTNDM09DRHZocEhiUnAvczJ2cTRmSGhDZWlDbDJBM200UWQ3MURRUjI1N21GQmxNY1RsYkZuRld6TnRIeGV3WUVmU2lhTFM0ZWw4ZDhueWhtS0pkMUNGNGVPUzBrZUxNQXVTeHViTEJJZUlHUVc4WUhDRkZvN0VIOStZRGNRdDlGTVpFc3dUaGVhTnhUSHdIVDhTWm9ySmpNckVWd280Wm8wVThIU0V5WnZKTU9nNFJqbm1tUnI4bkRZZUl6M09Na2JmRS9RaEJvK1U5Um5aSnhqR0NSaC9XS21IRU1XTE5rZlBLc0doL0NXSmsxSmpHMGtjdUpnZ1R0MzRWRFA4YVdBRmhwNG55YlZiNSs5cVFoalNrSVExcFNFTWE4aytRNVU5clYzZEY4TXBGQksrLzdtaVZxMS9IWjJxbW85RCtwQUFBQUFCSlJVNUVya0pnZ2c9PScsXHJcblx0YmFzZTY0Rmxvd2VyOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUJrQkFNQUFBQ0N6SWhuQUFBQUtsQk1WRVZIY0V6RHc4T3ZyNitwcWFtVWxKVEN3c0tlbnA2MXRiV3hzYkd5c3JMTnpjMmJtNXU1dWJtam82TXBvdmh1QUFBQUNuUlNUbE1BL1A3OS9zSERoaVpTMER4Wm93QUFCQkJKUkVGVVdNUHRsODlyRTBFVXg3Y3RUWGF0QjNNSTFTV25EYlVLUFVnWHFoNEVEOFVmN0tVVlNtM29vVlNwU2lpMEZuL2dENGo0bytBUGlFb1Ztb3M5Rk8yY2VsaXFaVmd3Z2FLSFBRaUNDa3YrRjk5a003T3ptNWt4cTFkZkQ5MWs5cFB2ZTkvM1pqYlJOSEhvay9tS2xpNGVJUE5nU3VST2J1TjlTcVNFek0yMGlHbm0weUlicUN1VjdOU1NTSVY3dXlQTTZKTUJZZGVUT2FuaC9RaWhKWVpzVUNTYnkrVmtNajJBdk90MHJBZVFBd3FFM2xmS01aVmxRQ1prMVFPQ0tra1ZQYWRJVENmSVJOS3hmb0pJNSswT0lGdEp4MTRDTVNnMW1SU0RrbzdWQWZrc1JRekViR1lxeE9KY1ZUV01DSDJJMS9JQUNOVzBQV1UyTThjbUFWSHRuSDVtTTFWUld0d0taak9kNUpiRjZzMUliYVlxYW90ak5sUEhnREFubEFpenViVFI2b3ZNWW4wNTJnL1U1cWNtT3BpMFdMOHhUUy8zSWZTZXQ1bThNRXI1YWpqRjVsZTZkcS9PSnBvYnJkWTB0M2k5UWdlZldyeFc5LzFCTGhrMEU5bThGZVVNaGhYYWw0OTlpRDBlUVJmREYrdHMvdHR0T1JSZXJmcCtvVjdmNHhKajgyaVVZbTFZem9kK1pRRUFsUy84bU1Cd0tlYlZtQ1ZwMWYwSkxTNnpLZDE3K2l3UktUQVJWZzJTSHR6M2lFYkJIK1ErVTI4elcySml6YThUamIxWUZvWVpNc0p5akRxcDNNOVhCUWRTZFBMRmR4RXB2T0IzN0pySGNtUi95OStMZ29UbENGR1pFYTJzYzZkNFBHbHdlRWEySlNWUG9WbStJZkdHM1pMMDM3aVY5b0grUCtKeGM0SEdWZmxOcTFNMHBpdmFvL0VvcE80Yi9valZDUDlHam1pWE9lUzBET24xby9paWNjVDRPUm55dkJHRjN5VXl3a1Fhalc0VGkwU0d1aXkvd1ZTZy9MOHcrWC84UStodlV4OFhkOTB6NG9WNWExaTg4TWJGV0h6MFdaWjFVclR3QkdQWDNSYXQ5QUZpWFJNUmpvTWRJZEpMRU90Mmg3anJZT3pnT2FtS1pTV1NOc3BPUzBYOFNBcVJZbXhSTDdzZzRlTHpZbU5laGN4aDN1b3l1ZC9CSDJVZHV4NHl3eEZUYzF4QzdNZ2Y0dk1oYzVTK2tTSDNZN3lqK3Fwd0lXU29QVFZDT09QVnRoR3g5RmJHcXJ3Rnc2d1NGeEpyKzE3emVLY3p0dDN1KzJyb0FFVmdVakRkK0FIR3V4SHkyclpIYWE4Sk1rVEhFZXlpODVBTlBPOWo5QlZ1QlJEMkZZNUxETW8vU3ovMmhSZXFHSXMvS2lGaW4rQ3NQc1lPL3l2TTNqTDJ2RThFYlg3L0JmOGVqdHIyR0xONjViaW9BZGdMZDhCaXMvbUQ1R21QMnFlcXlvMlp3UUVPdEFqUklESDdtQktwVWNNb0FwYlpKNVVJeGtFd3h5TVp5TXhXL3VLRnZIQ0ZSM1NTbWVySHlETlEyZEY0Skc2eklNcEJnTGZqU0Y5eDFENnNtRmNZbkdBcGptU0xJQ08zZWNDRFdyUTQ4Z2ViYTlESTNTVHkyaTdheDZXSUI2MmZTeUlaSWlPM0dGUXFTVVJwOHdDbzdHaEpCR3d1U292SkJOamI3a1Q2RlBWbklhOXFKMktvK2w5bWVmR0lkaW5hTXAweUMxVVJZaXdzZGZORTQ1RXVBNUN4OUVoYWxmdk41cytVeUl0bTgxdmFCM3A0am9uaU4rU0NQN1FjMWhibEFBQUFBRWxGVGtTdVFtQ0MnLFxyXG5cdGJhc2U2NEZsb3dlcldoaXRlOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUJrQkFNQUFBQ0N6SWhuQUFBQUVsQk1WRVgvLy85SGNFei8vLy8vLy8vLy8vLy8vLzg0Y2hZTkFBQUFCblJTVGxQL0FHekNPWVpqNWcxbkFBQUNma2xFUVZSWXcrMllUVlBESUJDR3R6YTlKdzI1YTBidmNheDMwbzczT09yLy95dm1hMkYzWVdscFBUaWpYTnBBSHJLOExMQUxWUEZpdW0ydk5JRlNid0dLVEdRQTJHVWlIY0QyOXlETnkzc01JZFVCUWw3cjJIOG1PRVZxQUhnUGtZWlVTNlFjMnpZaFFxdGp5RFpFeGltQ1p3V1pMSUJlSWdZU2hzMk56eEtwU1VlaFlwTUpoVVJHYitPK3c1QnBNQ0FSRUtQbkNESGJJWTIwU3poTTV5eHppQVhwT2lCWHlkcmVrVDlpNVhERXE0TklJSEhneVU1bVJHcXZpSUk0bVJFSkpBNFFKek1pSUx3bFJKenBLeEpLdkNCbThPc0JCYkx1eDB0c1BsNFJLWW01YVB1Nmp3MVU0bUd4RVVSOWc4TTFQY3FCRXAvV0psaU5nWU9YdWVCelM0alpTSWNnWTVsQ3RldmdEU2d5ekUrckFmdU9UUU1xMHl6dm9HSDE4cWp1MjdNYXl6czRmUHlNemlDeDgxTkphNVJOZlc3dlBZSzlLT2ZEaVZrQnhGSEc4aEFqOXR4dW9CdVNXT1JzRmZrcEJmN3hLRkxTZWFPZWZFb2poNWp6MjJESkVxTVA4ZlV5YUtkUXgrUm5HK3lYTXBlOEFhcnM4dWVSMXBWSC9iVzNGeXl2UFJ3OTB1cExESHdwZ0JEdGc0YVVCTmt4UkxYTUFpMDNJaGNadHIxbStGZUkvTy9KTnlEbW1MMWRqTE9hdVNsTmZsQnBXMThSUTJiUHFYSTIyTVhYRWs3NUtSSFRua1BrWWJFU2JkS1AyWkZrMHI1c0l3ZmZBankxbHgrdng3TkxqQjYvRTdKZnY1RVJLaHpwTjB3OElERThJR0ZEdjVkaHoxMHM3R0ZpWFJaY1VlTENFRzVQNW5EcTlrNFBGRGNvTXBFM0dZNE91eHVDWGhtdXlOQjZrMFJzTElBdnFwOU5FNXI4WkNTUzhneG5VcDdPRGRZaFpUcXh1aUo5dXlKSnRQbXBxSjd3VmorWFZpZVM5MDNpVmlIemlxQWhjaExFSkF5YjdqV1U2NDdFcFVvZlEwemlVdVhYWGhEZGR0bGxsU3dqZ1NRdTdyNEJSV2hRcWZEUE1Wd0FBQUFBU1VWT1JLNUNZSUk9JyxcclxuXHRiYXNlNjRTdWNjZXNzOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUJrQkFNQUFBQ0N6SWhuQUFBQUVsQk1WRVZSVVZGSGNFeFRVMU5SVVZGUlVWRlJVVkZPU2xTVUFBQUFCblJTVGxQL0FJNitWeVNCM1pFTkFBQUNjRWxFUVZSWXcrMll5WUtDTUF5R0k4aGRwZHhkWnU3Z2NwZFo3akw2L3M4eVloZVNOaTBhUGRxYndPZmZwR21hRk9ZUEQzZ2o0YmlzTjd2ZGR2MTdOL0pWZ3huNXgxMklXZ0lhV1R1Ty9JRTNQc2VRYndqR1BvMmNnUm1IRkxKd2RtL1g2NDN6d2lxT0tQUEoxbmozc2pFUDJpaWlmWldqNWJob3BTeUdhRU8ySFg1ZmJRSnp3SitXN3gvanc1WkZqc0VVMFBNcGg5eEU4aTVFcXByS0FMVzk1ZUpRVVJrZ3p3OTh1Si9KdndHZWNSN2JJaldXc1VnVnJySWZGWjJIbEx5M3NLRVREMW1tUkxSTVJoR1Zzc1JhMHhKa2RuM1NwSkJ5bUJrTTgrcFNTRFhNRE55RGFUb1ZIZDJmZ3BOdDBzandpVVpPMTkrakdRK2dRRWc5T3ErYnVmbUFWR2lob21ObWpRRzdVRzMwMjB2cmxtN2xrRm5LRkdVM2taMEtHQWRtS2U4MjFwaXBRK3FFS2NyWmVUTDJnNUZzVWtzNGNTdGpFWld3WGcwYjBuNEd4bUVwa1d3SXM1VkJ5bmpnSzd4WmF6MS8wRDdPeGtWdUxwc1k1QlFORnlMUzg0VkJqamJnMGlMMnIyRVFIQk94Qmhpa3VVT2tkeE9EVkYxY3hIb1d0UFBzaXlYTzQ1NUl2MzRoc3NDTzhFVjRaSVlUalM4U1I0cVlTSFJpVGlZUTRaRmJIaTBpSWhoQlRpNmRUQ2dTV1Jjbnc0aDR5R1R1eVRBaU9HQklXR29aVGdTSEpRbCtMY09KNE9Dblc2eVgyYk1uSjlwaWRDT1h0a1RrVHJJR3BZdU95bkFpT0YxNFNhbU1pT0NrNUtlK21xOEJjT3JydnltOGQwektJUW5XVCtNMVd3T1FOTzRmRmlXYjE4aGhFUnhKUHgyZmJsYlBISHlDNDFWeWlBdEtCVUZCSWloN0pNV1ZvSVFURklyM2xLUE44MFd2b0xTV0ZQQzY1M2lvVFpBMEkwRnJRN3FVNmFzYUswSDdKbWtTSmEyb29PR1Z0TlVzYzNqOUZZSGtJa0p5M1NHNlZIbmZYS1hHUDl0NE45UTRZZTk4QUFBQUFFbEZUa1N1UW1DQycsXHJcblx0YmFzZTY0U3VjY2Vzc1doaXRlOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUJrQkFNQUFBQ0N6SWhuQUFBQUdGQk1WRVZIY0V6Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOGRTMVcrQUFBQUIzUlNUbE1BaVZZazZLdkRITGZhZWdBQUFvMUpSRUZVV01QdFdFdHptekFRTmhDVHE5MTB5dFhwaXl2eFROT3I2MHpyYXllcHg5ZDAyZ25YNHNUbTd4Y0VpSlgyZ2Rua0dKMUE0dE9uZldxWHllUjF2TVJZenJjUEQ5djVoNU1CbDMvTGR2eDRjeElnL0ZXQzhYMHhqTGphbE01NHVoaENmQ3JSdUpVUlgwcGkzRW1JcVpWN081OXZyUlptZ3VTdEhMOWI3UzdmdGZMd090aVpEdzdBSE10bXF1QVExMmI1V3dibm9yZG04Zzl6TExPNDlxYy9tMm42YUtuaHdQT0daMDhoQWlOSGhoZWlIYWUxbE9VUEdacFFrUEthM3EwbU9VamFSelNSYUdVanB5L21tV1N3eVNTcGxsY0V0ZUJLQVQ1MktFblNiYmxBNTFwSkVQeEJRb2lIMUZQNEUzczUrRkp2MDdoNi95bEQ2dWk3Qis5ZnEvZWhyRkI5OGdoZWM5RW9WdHlqSzhwcUNITG1DQk93TVdTQ2VXRk5ONE1iUEFrNTVOaHN2b0ZIU1NWUjBrNVRDVFRFemxVR2NxVi9uVnA3bjlvSVZrbXRhcWJBRXFFZ2ZkZ0hKUHdzRUF5WjlyNFZBWlhGanBFd3lhdzMrSDJ2NDJLWXhLaHMxWHZZL2dTU0d2K0lIeVVTdUhYQ2VaaExBZ1ZJM0VqZ1NHbzFGYjN4TzB0R0dVOVMyL0tBSWJ0anhwSkFTRzczcW94Nnc1TFVxMGNFT2EraUlPTklXSWlsUVNRMHBQYTJqZ2FSUUFnUVA3YzBtSVRSV0d4cE1BbUVRRk4yTkFRSk5DVjBtSTZHSUlFTzQ3aGxRME9SUUxkMG5MK2hvVWpnMW02STFUUnI4dVlFQXJpQkhMY1ZGUTVVRU1pQmUzWGtUQkVHMDRXWGxHS0d4UG5NUzMwNVhRUEExT2NuMkppdUFad0U2NmZ4bkt3Qm5EVHVYeFpUTXE4NWx3VzZrdDVuZExxWlBlZmlVMXl2bWt0Y1VTb29DaEpGMmFNcHJoUWxuS0pRNUZ4UktrY1ZSYStpdE5ZVThJbzJvVmtZMTR3ME5NV1lscWZ0OTFCajlWSHErY2EzYjQzQnhqV0ptbGEwc2ZLb2hsZlRWcFBOKzkzTC95TFEvSWpRL081US9WUjVIZEw0RDdtbHhtandWZEVMQUFBQUFFbEZUa1N1UW1DQycsXHJcblx0YmFzZTY0RW1wdHk6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElCQU1BQUFCZmRyT3RBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQUZ6VWtkQ0FLN09IT2tBQUFBYlVFeFVSZHZjM0Vkd1RNTEJ3Y2pJeUxTenMvSHg4ZmYzOS8vLy8xOWRYWHo3SUpFQUFBQUZkRkpPVS80QTZKOVFEeXl1dEFBQUI1VkpSRUZVZU5ydG5NMXo0allZeGhVSGtSNGhkdTllVTdaNzVDdDdqZ1BiczlaWm1TdVRyVVdQbVhUQTE4NmUrTE1yZjB1V0xNdGYyV2tIWFFnemxuODhldDVYZWlWTXdQUWRHcmhDcnBBcjVBcTVRdjRUa0owN09HUUZNTHAxQjRWWUN6K2tEYmxEUWhKR2VINGVFRExCWWRMT0h3YURXTkJQSWVITFlKQUozbWVRODNJb0NNVEhEQktPQm9LWUdPZU04RzBneUQwTE9ibkRRQjVaU0N0VE5DQmZzTTlBYm9hQlBMQ1FjREFJTTF6aHQvZFFFa01zZDFEakk0aHB3Mll6TXRCSmVCYnlkV3BDVEpzM1lES0dYNjJZZ2ZHb1Z3aTlLd3RaSkF6Y1lISFJtN3NZQ0tEMzkwblFTSW9PNUpHWklFT1l4Tm9aNCtkZUlTWUx5ZUw1aExIYkoyUUs5OFcwa3VkTWdKZTlRaDczb2RoTytLWkh5TllHdmdRUzlnbUpLaFVpZ3dTajNpQlBVaFh4ZVBXbXhCcUh3ME1lajlXUTNxSUxWakxDMTc3eXhOeFhRLzd1SytNbjFhTlZMc0dzQlRhV3JTQVBvYllsMGFVSHQyZklzMlJnejdjOVFZTDBwU1RrU3pJTExGdEFKTUgxY2lkTjk5OFQ5RTAvU2c3My9wRUV3cmdrWVJoODZ3bEM5NDlnSnNSNkVvYkJjejhoSE9WZ0tZaTJtNmtadG9kSWtqRVF2RjNRamJHcG1wbEI0L2xSZ0poeGdSUzJOMTVpaWpBdlBtQnlEdEN4ZlFoUEo4SjRDUjgycmdDQ0JJTGFyU2N3NlgwT2NNVXlZckZWbWJ4RXJsMFphY0ZJb2xvT0xkSkFPNDJxWStOTURzczJrS1M4eG1pWnhjQ3BGS1hXdnBSR2JRcUpwNWl4eVJmSk1tUjZ4MEZrK3oyOWttZ1dEWUk1emlGYmR1Zy84NEh4dmR1aFdoTE9KMlN0UERRck1KUFNqTkFOa2xoOFFoQjdkQk8weVRHUnduMWZrT2s4cmJRamlCOFltd3crSnVpdU4waWNtU2NjSzRuYUxNV1lhL2V1TDArbTIzR3lNOGtnQWM2c1llTDR6MDRRYTRXakdlcGNLSWxpTzhFVUdTazdkOU9HV09zb0szMU9TZHk4VFFaNTlZL2hXYmFWMUlWczUvRWQ2VXpHSzRuQU5BSml5R2hSc1pQVWcyeXpMZTloTHlpSkl5Q2FEVTd1ZEMydXk5cG5rS3ZpZGxCVUVsdHpGQXF4UmhCckJabTdIZlpuakVRSTNib3FUc0pxMTVQVURFYUtaTGdpSlljOE9adEN0bk0vNEc5M09GWW9vWHB2ZHkwZ3V3V1dOUWtFSGwvajdKdzFYUm10bFM5SFlKa1NQamsxSVVueXlScVVLUW40NU5TRGxQMW1jZzlpNkVuMVpVMklBRG5FdEhGMVErSndJY1MvZDVZYWtQdURVYW1FU2hHVUhIaWtBejlvUUNhRTBDc3JwWWpEQlZrRUhRWWR5SytFa0tQaFZFcnhxaDF4Ykovb1FmNGdFZVZzT0lFYzQxV0pOQXdjZDlHQmZDWkplelhzSmhBdkgrSW1FRUlPemx3WGdwdzV3UTBnSDNNSU9jc2lRQWFoWnVTRDY5L1VReXhjUUVnZ2lRQVJRc2VWRk8vQVNBTUNnTTlnamtIWm1oTEVOemkxQU9oQTd1bGxrTVdVcmZIS2ZwTWlEQkh0REl4NnlDUzZqc2VFbkRVZTd6Y1Q2REdDdG5ySVkzb2xadzFoclBIa2Z1Y0lBSmExRUR1L2xzVkV5Vm1HR0E2N2NvS2lqZW9nRm5NeGxFYUFWNWdoUmREbTFrRHV1YXRaVEpCR2dKZE90aEl6c3ZaYkRXUlJ1aDZTY2dSNEVRTGdhZ1F2UlFJeHhRNHN4cWNSNEdFK2M0Q2tqWlFRVzlZRjg5WTRPRkFqT0NraTVLbWlEeHNCTDNQbFNKV2xBRlZvZ2FvSWVQbFlpMkNsQ0pBSFJhL2NtcmU1ZXFUaWk0dXZpc3FRSnhxbmlwNnBOZDY4RGhFdnlFczV4SXlIQk5kaDR0aENLaFUrKzEwa0Q3R3kxVXAxQS9vNTZGS3VSSlFXU0ZDdWY4ZHBiaXN4aHFIU0tsU1Nndkc3VlRhRktPNVR6WUQ1Vk1QVXhFQjJZSk5pcXEzeFlKMEtycm9IOG1xN3hwb1hxRVpnZmdOUlVRc0R0VFZ2VU9rM3NMVUticXJCcjdZR3ZrQ2tRTkMvOVNBK3ZUWXR2RVJyeGlLRW1jb2drNFpxQ0xVZDU5TUlFaUZZSGxJb3hlbENhSldETW10T1BJYTgwWFZMYmtiNmh6YUV3d1RjUEVtVjRBSVJsQkdOSUVtdUpCRndMQVpvSENsSjM2SjhoK3d4aWhwQ3FKb3NBbkpyU0t3RWNRT0ZBRmVXTjRSUU1ZYzBBbzRKaGc1Z3BBU3p5V2NEdmpwdURJbFRrckdHSkVybzFySElqSEtSM3dKQ0FqK3o1b3lpMTFnSkJrWHk5UUZKSWlBdTc4ZCtwZ1NqdVdoR04wZ1VBWkFjRW5jU0pmNExSclo4STk0V0VtY05DSkpxQldZalZiRTliZzJKeGl5clZpQld0eTZRdk81NkQ4alBWV0xBNFpYOGRma3h2SkpQbDh0OGFDWCtwVS9JejFTQ2Y3bGM0T0JLME9XZlFhS0xQMFRLamo5NlZ2SXArL0JEWmp3TktGMkl0VjJ2TjdzV1N0QWw4N29Xa20zZForazNsRU1vWVhlOGNUMWVxMlRPZVBKREQ4S2ZRZHh1NmlFUHhhblVaYTRIbVpScTNkdW5Hc2ozQnpGcTZ5RDN3blpOWDRuMmVtSTJoWHlYUXBpNlJSWmRmU2d4SE51eFZaQkZkeVZlQlBEbUNzaWtzeEtVaURBVUVLdXprdlJVRXMwVjA4cGpWeVUyL3lxRm1GMlZaR1lvcDNwZWl0ZFVpUWQxcG5yTDdxVEUwMXRQekU2ZWFFS20yM2RRd2gyak5sYmlheSsvMjQ1emw5NGFidzQ1Q3pOUHlxWVEyKytreEhHVjFjcld6ZzRBMnl2UitCWTd3eml3blJMTjcrTzM2YUE1NCtaS0dqeFpZSzN0eEpweFF5VU5uNUd3dHF1SUk0K0FDaVd0bnZhd2R1dTFBM1NWdEg1dWhUdkFWU3BCRzdmRFl6NlJRK002SldqbUttNmcrUnZUbGE5VU10c3B1K3MrMzdWYlZDdXBOcVB4NDNDc05hd1NiMVBidGNtRGZRV21VSUxXN3JSWFNQSHRTcTVrNXVyMGEvaGI3RFFDVWlXM0c3MWVqWC93dlYxa1NveU5icDhXdnlxbjFsQ0lLdmw2Z05Ea05CWXp0MEdIZHIrUHQ5eEdsMS8vbmNBVmNvVmNJVmZJRlhLRlhDRlh5UDhJOGk4U3lUVzR5VHoybHdBQUFBQkpSVTVFcmtKZ2dnPT0nLFxyXG5cdGJhc2U2NEVycm9yOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQURJQkFNQUFBQmZkck90QUFBQUpGQk1WRVZIY0V6bzZPaWJtNXVrcEtTYm01dWFtcHFibTV1Ym01dTV1Ym5uNStmbTV1YjYrdnBHcERQZEFBQUFDM1JTVGxNQS92NGhiK3UyMGRxOGFRaG5ITDRBQUFUd1NVUkJWSGphN1p2TmIrSkdHTWJkampkVmUzTlBvZHplTWhqMVpNVUd1amtoMjhCOXdLUjdpd3dCcWFmV1NiUHFzYm0wdVRXdFZsclRTOXYwRXQ5eXFMUVMvMXpITmlUWk1NQjRiTzkyZCtkUlVJVHQ4Yy9QdlBQeDJoNFVSVXBLU2twS1NrcEs2bTNLNmxGTjczUStTLytlczNXM2Z6YWJUaDJEbDBGQVhFTStCZ3JnZVh4UnNkSUxURFU5bjdKMHZ6LytFc0NZQzlLRWlTRmMwNnBmNXpvdXFBa2prR1dvME9HNUZxNmoySXdaNkk0LzREaHlUeGMyMG9VakFqNVBSVFRyd3ZHQVo5cCtBRHpsRDRSRGN0Q29MaGI3SlVQODd4ZUx4UzNCWlVJUStZTkNGaTh3UndjNEdJcUdSSy9Ha00rNUlMVjhrRmZsT21ra2tIL0xkZEo0YzA1ZVNTZlN5VHZyWlBFbW5DdytVQ2V1azg0UXZUU25VRjB1Q0w2OGZCbGUvc3dGK1JMMVFaL0VwVTZnSHRPc0FNNjRwbmpQd3hnVExzam9CTTU4T0ROYUFYWUJUNVFlR2RyMEt3Y0VBOEhlMFRrUEJMQ2pVRE5IcEc0cWxnOGVUQ3pYaHQxRlZkMU14VFBIajVMVHRVaVNyS0srN2lEZjh3Qkd4azRJZjNhckx2L0hGNFRveDBBMm5sRklHcCtDSUErTHpTYW1nYnA0VE52WmpFQ3REQWp5TWNCNUh5YkxPNk54c1JBMXZtRkNOamd1TlhER1d5Z2JSUFhoL0Irem45elBXSzVSQ2tUMThReEE1N1lnQXFFK0hHUzYvdEFvRDRKTzB0cytNMnRieVFKcGM5NWE1b0kweFhOaENaR1EveDhFMFZTQ2tVWlk2WjZDSUUvcWRPNWVMK3lQbFc2dE1NZ2VmUHMzbzdCZHQ4aWd1Smo0RFRobFpTWS9ySjB5QitScmFMREsyakFRQ0h5cjR6SWhUOW1RN3Zvd3lnTVpqcGdRRytDWVVWMkUxRVdxaXh5eklDcjhlRkZuQkI1YmExWTRJSWZlS1F2eXNXN3NzWnJ3UUxFRm12Q0JNMlU2b1JrZEk1V2dtMVFuTzhSVVREbEFTb2lFU0lpRVNNaDdCREhLaGxodS9MYlNOVXVFcUwzbHUxcDk0NXZPM0JBckFEaWF1bTd2QkdEVUtRZlNJakJ5a29veXJSUFFuVElnbEhGZlNhZ0hlcWQ0aUVyd2E5ZHVFZWJwY2tHUWp4L1ZUNHY1ZkMwWGhKSEFkMW1QUnZKQVZNWmlBZVF6VHBnSFlyUEtxa0duVUVpWCtkQ29OUzRVZ25pSE1UblVTNGlFU0lpRTdJUzB4K21uVkFpZGdsRHdWY21RSnB5MldROFZDNFVnb2dmYkExUkU0TnV3M1VnaEVCVjJyS2w3VjV5Z0FKUFNZOUtHUWJQMDFtVmpBNUZhMmYxa1FOMlUzaytNOVBPV0I4Z25KVU5NWkppb1dUTXpLd09rbHl4Z0RyQ1hWY01NRUY5MHRYTTlDMlRpQ3FtZkNkSVJpL2plZXdOcHllcktvazlXa0d1emZDZFlDK2ZYUnNtQnh4cFZHRzJ6WTBaQmJpZUpLdlByRFFjZTNseHBwQmhJakdGV0drVm94VUVvWnQwTXVrbjJYQlFIMGJUSFpwYU1JcDJzVS82cWFzVTcwVzYvZUhqTTA5Vm1ZU2M2QzZKcHZ6K29yS3ZWeG90OGtMM0hrTXI5SVo5cWVaMm82UnJPOW1PSTl1ZmRJUjlwZVoyZ05JVzMxeUMvTXB5STluZ1VETklzZXpQa3MzdklzV0RHZFlBN2NaYTlwYnFVVmVDci9uZWlhUjNVM1I0QmZYUGc3NXZ3YjhJL2I3SGp4Q2hvYkRaQ08rTnk0d3V4eGFWeFBQb3djb05ucnpQbXpHRmxYM1JKSHoyRmFmYmhKNDFuOFBMeDJEQ003S2t3UWdwcWthMURWektkSk5IZkp3QmU5bC9uMGVTWkZzSVBqVlNZOHhaS1pwU1hub2d3bGVkOTh3QXgzeFJjZEJOcTFmMWZoRlZkSWNMNXR2YURvbEM3WGFxYVdTdEV0TE9KSGtiaGxTYXVNTHJtYTR5SEVhMDNBVlVvSVVzL00yTlFGa2NoQlppR1VQZUtvbkFucWhMT280aHJLZjBXVHlaMUZjVTBLaTBoVnJTcitNdWNudnlhN2pZVUtTa3BLU2twS1NtcEQwZi9BWHErVW1qNVhuWERBQUFBQUVsRlRrU3VRbUNDJyxcclxuXHRiYXNlNjRCYWNrVG9Ub3A6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElCQU1BQUFCZmRyT3RBQUFBRWxCTVZFVlJVVkgrL3Y1SGNFeVptWmxSVVZGUlVWR20xQnlPQUFBQUJuUlNUbFBNekFETVRaQUpCQkdzQUFBRW5FbEVRVlI0MnQyY1MyN2pNQXlHZjcvMlUrUUNRZURzYmVRQ2daRHVqYUM1LzFVbWt6YUpuK0pERkdjdzNMZGZmbEtpYkpra0RueHJMN2RiZzdzTnQ2K0w0TzhPWUJNK0IweXMrUXJHa0haRytPRUVROGc2Z284QngxR0lHTWRwTk9ReUlHNlhkTWduU1B0S2hMUURHRVpGQmdZTWtoS0Z0R0JiMEVJRWpEZ0ZSb3dvQlZhTUdBV3BNZWRFZnhNaVp0d3BVc2daQ3F0bGtDTlVkcFZBV2lndENDQ0RGdEx3SVdlb3JlWkNXaVJZWUVLR0ZFakRnK3lSWkNVSDBpTFJBZ055VG9YVU5DUlp5TXFXaEduVU4ySVBtM3dTbHdKN0lVc3B5Q0JrSVFVWmhDeWtJSWVRdVJUa0VES1hBdU05c3JydFliclpON1k5OGdpWlNvRmQrdDFPeG1NSVRHMGRjclNGWEZjaFoxdEl2UVpwWVd4aEJiSzNocFFya01FYTBpd2g1dDRhK1F2WnZEWHlGN0o1YStRdjVQUFcyMS9JNTYyM3Y1RFBXMjkvSWFPM1h2NUNscncxeTEvSWtyZG0rUXM1c3Z3ODN5Tm5TSjVCUWI0Ri9GN0VJRUpTblRoR0JBWHhrRlFmTE92aVFVRThKQVVQc29zSEJmR1FmREF0SGhSRVExSnhJVjAwS0lnbXJuUkk4NFMweUFkNUJBWHh4SlVjazBmNlFud3I5cW1yNnhGNXhMTWpjd24vaXVkSUVBZFdueWprRVhsUUtaaVJWem9xUnlMYmdlVUtLUjhRNGFsWTdjU25veHpTZjJnZ3NxZWhLcjZZVnBjWHBPZDdIOTNmNjBjS2hPZDdSZTJMdGVVRjRlTHFpVlMxbXIwZ2U0aW82QzIrc29hRmtKN011dXVRczF5SVRFcDlod3dLSVNJcHpSMmlFU0tTSW9UMHJMTnd1VkhRcW9TSXBBUUpwR2NlNjB2SVVTZEVJdVVxZ1BUc0o1UUZaSzhVSXBCUzhpRzk0R0ZyRGpscmhmQ2w4Q0c5NkxseG1sZTRrRXI2dktXQlBJVm85a3FEUVNSazkvM2NXb2lrY0NGUEFkMzN2NGRJQ2hQeUV2THpCQTZSbEVZV2tlNEpFVW5oS1hrTGVVRUt4UkhKRmZLQ1FIR3VjSVc4SWRaU1JrTGVFR01wWXlFamlLMlVzWkFSeEZUS1JNZ1lZaWxsSW1RTU1aUXlGVEtCMkVtWkNwbEF1RkxJSFQ4VE1vV3dwUXdpSVZNSVV3cXBaUDVicDVDQ3ZDVGlRS3I1ZjVsQ1FOK3RQQ0JuMlp2VkRGSndJRFVQMG0xQllBZlpZUk5Tc0NCN0JxVGJob0FSZVBJeHRaOXRnd1drb0pjd0NhbG12M01CQWVtdE80UjZkYWgySGFLUXFqOFp2cDlzUURqdkoyMStTUENCSFBKRERrNlFJVGVrRVY3Z3FDQzE5Q3BLQXltOUlNZmNrS3Y0b2xNQkNlSXJXd1ZFZnZrc2h6UWVrTzlyOVAxL0FMaytJRzFlU1BDRGlDSmZ5RytGeVUrQTZaQ2EvcGlaRGlucHo3THBrQ3Y1Z2RrQUVzaFA1ZW1RaHY3b253NnBHZVVMeVpDU1VZaVJEQW1Na3BKa0NLczRKaEZTcThwOGhKQlNWYkFraEFSVjZaVVFvaXNpazBGcVhUbWNESExWRmZiSklFRlhvaWlDTk1waVN4R2tWSmFOaWlCQldRQXJnVFRhVWw0SnBOUVdKVXNnUVZ0ZVhRZytBS2tMeFFXRkdLVys1SjIrZVZwNFMxNjhYM0NGMUNsdENLZFRKOGxiODRZSzJiVUJPK3daVzBQcXY5bms0dEt1NDlONDVOSkM1ZE1NNXRMVzV0T2c1OUpxNk5NMDZkTCthYkZYd3IvUmt1dlRYSndhZTFhYnRFL0R0MC9ydWtzVHZzODRBWi9CQ0M0akhueUdWZmlNM1ZCUUZBTkVYRWFoK0F4MThSbFA0ek5veDJka2tNL3dJNTh4VG44eURDWEdZQ0RWM1c1UkdTYWp0WHlHaEcxamJwYmp6cHdHdC8wTUpmdDhqcUM3aVViUS9RWmF4ZG5LcWNJZnR3QUFBQUJKUlU1RXJrSmdnZz09JyxcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!******************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue?vue&type=style&index=0&id=a664708e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_style_index_0_id_a664708e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-paging-empty-view.vue?vue&type=style&index=0&id=a664708e&scoped=true&lang=css& */ 40);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_style_index_0_id_a664708e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_style_index_0_id_a664708e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_style_index_0_id_a664708e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_style_index_0_id_a664708e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_empty_view_vue_vue_type_style_index_0_id_a664708e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 40 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue?vue&type=style&index=0&id=a664708e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".zp-container": {
    "": {
      "alignItems": [
        "center",
        0,
        0,
        0
      ],
      "justifyContent": [
        "center",
        0,
        0,
        0
      ]
    }
  },
  ".zp-container-fixed": {
    "": {
      "flex": [
        1,
        0,
        0,
        1
      ]
    }
  },
  ".zp-main": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        2
      ],
      "alignItems": [
        "center",
        0,
        0,
        2
      ],
      "paddingTop": [
        "50rpx",
        0,
        0,
        2
      ],
      "paddingRight": [
        "0rpx",
        0,
        0,
        2
      ],
      "paddingBottom": [
        "50rpx",
        0,
        0,
        2
      ],
      "paddingLeft": [
        "0rpx",
        0,
        0,
        2
      ]
    }
  },
  ".zp-main-image": {
    "": {
      "width": [
        "200rpx",
        0,
        0,
        3
      ],
      "height": [
        "200rpx",
        0,
        0,
        3
      ]
    }
  },
  ".zp-main-title": {
    "": {
      "fontSize": [
        "26rpx",
        0,
        0,
        4
      ],
      "color": [
        "#aaaaaa",
        0,
        0,
        4
      ],
      "textAlign": [
        "center",
        0,
        0,
        4
      ],
      "marginTop": [
        "10rpx",
        0,
        0,
        4
      ]
    }
  },
  ".zp-main-error-btn": {
    "": {
      "fontSize": [
        "26rpx",
        0,
        0,
        5
      ],
      "paddingTop": [
        "8rpx",
        0,
        0,
        5
      ],
      "paddingRight": [
        "24rpx",
        0,
        0,
        5
      ],
      "paddingBottom": [
        "8rpx",
        0,
        0,
        5
      ],
      "paddingLeft": [
        "24rpx",
        0,
        0,
        5
      ],
      "borderWidth": [
        "1",
        0,
        0,
        5
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        5
      ],
      "borderColor": [
        "#dddddd",
        0,
        0,
        5
      ],
      "borderRadius": [
        "6rpx",
        0,
        0,
        5
      ],
      "color": [
        "#aaaaaa",
        0,
        0,
        5
      ],
      "marginTop": [
        "50rpx",
        0,
        0,
        5
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 41 */
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/z-paging-main.js?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_z_paging_main_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./z-paging-main.js?vue&type=script&lang=js& */ 42);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_z_paging_main_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_z_paging_main_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_z_paging_main_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_z_paging_main_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_z_paging_main_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlTLENBQWdCLDBWQUFHLEVBQUMiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhLi96LXBhZ2luZy1tYWluLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhLi96LXBhZ2luZy1tYWluLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/z-paging-main.js?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 43));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 45));\nvar _zPagingStatic = _interopRequireDefault(__webpack_require__(/*! ./z-paging-static */ 38));\nvar _zPagingConstant = _interopRequireDefault(__webpack_require__(/*! ./z-paging-constant */ 46));\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! ./z-paging-utils */ 47));\nvar _zPagingRefresh = _interopRequireDefault(__webpack_require__(/*! ../components/z-paging-refresh */ 52));\nvar _zPagingLoadMore = _interopRequireDefault(__webpack_require__(/*! ../components/z-paging-load-more */ 60));\nvar _zPagingEmptyView = _interopRequireDefault(__webpack_require__(/*! ../../z-paging-empty-view/z-paging-empty-view */ 33));\nvar _commonLayout = _interopRequireDefault(__webpack_require__(/*! ./modules/common-layout */ 67));\nvar _dataHandle = _interopRequireDefault(__webpack_require__(/*! ./modules/data-handle */ 68));\nvar _i18n = _interopRequireDefault(__webpack_require__(/*! ./modules/i18n */ 80));\nvar _nvue = _interopRequireDefault(__webpack_require__(/*! ./modules/nvue */ 88));\nvar _empty = _interopRequireDefault(__webpack_require__(/*! ./modules/empty */ 89));\nvar _refresher = _interopRequireDefault(__webpack_require__(/*! ./modules/refresher */ 90));\nvar _loadMore = _interopRequireDefault(__webpack_require__(/*! ./modules/load-more */ 91));\nvar _loading = _interopRequireDefault(__webpack_require__(/*! ./modules/loading */ 92));\nvar _scroller = _interopRequireDefault(__webpack_require__(/*! ./modules/scroller */ 93));\nvar _backToTop = _interopRequireDefault(__webpack_require__(/*! ./modules/back-to-top */ 94));\nvar _virtualList = _interopRequireDefault(__webpack_require__(/*! ./modules/virtual-list */ 95));\nvar _zPagingEnum = _interopRequireDefault(__webpack_require__(/*! ./z-paging-enum */ 57));\n// [z-paging]核心js\n\n// modules\n\nvar systemInfo = uni.getSystemInfoSync();\nvar _default2 = {\n  name: \"z-paging\",\n  components: {\n    zPagingRefresh: _zPagingRefresh.default,\n    zPagingLoadMore: _zPagingLoadMore.default,\n    zPagingEmptyView: _zPagingEmptyView.default\n  },\n  mixins: [_commonLayout.default, _dataHandle.default, _i18n.default, _nvue.default, _empty.default, _refresher.default, _loadMore.default, _loading.default, _scroller.default, _backToTop.default, _virtualList.default],\n  data: function data() {\n    return {\n      //--------------静态资源---------------\n      base64Arrow: _zPagingStatic.default.base64Arrow,\n      base64Flower: _zPagingStatic.default.base64Flower,\n      base64BackToTop: _zPagingStatic.default.base64BackToTop,\n      //-------------全局数据相关--------------\n      //当前加载类型\n      loadingType: _zPagingEnum.default.LoadingType.Refresher,\n      requestTimeStamp: 0,\n      chatRecordLoadingMoreText: '',\n      wxsPropType: '',\n      renderPropScrollTop: -1,\n      checkScrolledToBottomTimeOut: null,\n      cacheTopHeight: -1,\n      //--------------状态&判断---------------\n      insideOfPaging: -1,\n      isLoadFailed: false,\n      isIos: systemInfo.platform === 'ios',\n      disabledBounce: false,\n      fromCompleteEmit: false,\n      disabledCompleteEmit: false,\n      //---------------wxs相关---------------\n      wxsIsScrollTopInTopRange: true,\n      wxsScrollTop: 0,\n      wxsPageScrollTop: 0,\n      wxsOnPullingDown: false\n    };\n  },\n  props: {\n    //调用complete后延迟处理的时间，单位为毫秒，默认0毫秒，优先级高于minDelay\n    delay: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('delay', 0)\n    },\n    //触发@query后最小延迟处理的时间，单位为毫秒，默认0毫秒，优先级低于delay（假设设置为300毫秒，若分页请求时间小于300毫秒，则在调用complete后延迟[300毫秒-请求时长]；若请求时长大于300毫秒，则不延迟），当show-refresher-when-reload为true或reload(true)时，其最小值为400\n    minDelay: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('minDelay', 0)\n    },\n    //设置z-paging的style，部分平台(如微信小程序)无法直接修改组件的style，可使用此属性代替\n    pagingStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('pagingStyle', {});\n      }\n    },\n    //z-paging的高度，优先级低于pagingStyle中设置的height；传字符串，如100px、100rpx、100%\n    height: {\n      type: String,\n      default: _zPagingUtils.default.gc('height', '')\n    },\n    //z-paging的宽度，优先级低于pagingStyle中设置的width；传字符串，如100px、100rpx、100%\n    width: {\n      type: String,\n      default: _zPagingUtils.default.gc('width', '')\n    },\n    //z-paging的背景色，优先级低于pagingStyle中设置的background。传字符串，如\"#ffffff\"\n    bgColor: {\n      type: String,\n      default: _zPagingUtils.default.gc('bgColor', '')\n    },\n    //设置z-paging的容器(插槽的父view)的style\n    pagingContentStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('pagingContentStyle', {});\n      }\n    },\n    //z-paging是否自动高度，若自动高度则会自动铺满屏幕\n    autoHeight: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('autoHeight', false)\n    },\n    //z-paging是否自动高度时，附加的高度，注意添加单位px或rpx，若需要减少高度，则传负数\n    autoHeightAddition: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('autoHeightAddition', '0px')\n    },\n    //loading(下拉刷新、上拉加载更多)的主题样式，支持black，white，默认black\n    defaultThemeStyle: {\n      type: String,\n      default: _zPagingUtils.default.gc('defaultThemeStyle', 'black')\n    },\n    //z-paging是否使用fixed布局，若使用fixed布局，则z-paging的父view无需固定高度，z-paging高度默认为100%，默认为是(当使用内置scroll-view滚动时有效)\n    fixed: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('fixed', true)\n    },\n    //是否开启底部安全区域适配\n    safeAreaInsetBottom: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('safeAreaInsetBottom', false)\n    },\n    //开启底部安全区域适配后，是否使用placeholder形式实现，默认为否。为否时滚动区域会自动避开底部安全区域，也就是所有滚动内容都不会挡住底部安全区域，若设置为是，则滚动时滚动内容会挡住底部安全区域，但是当滚动到底部时才会避开底部安全区域\n    useSafeAreaPlaceholder: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('useSafeAreaPlaceholder', false)\n    },\n    //slot=\"top\"的view的z-index，默认为99，仅使用页面滚动时有效\n    topZIndex: {\n      type: Number,\n      default: _zPagingUtils.default.gc('topZIndex', 99)\n    },\n    //z-paging内容容器父view的z-index，默认为1\n    superContentZIndex: {\n      type: Number,\n      default: _zPagingUtils.default.gc('superContentZIndex', 1)\n    },\n    //z-paging内容容器部分的z-index，默认为10\n    contentZIndex: {\n      type: Number,\n      default: _zPagingUtils.default.gc('contentZIndex', 10)\n    },\n    //使用页面滚动时，是否在不满屏时自动填充满屏幕，默认为是\n    autoFullHeight: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('autoFullHeight', true)\n    },\n    //是否监听列表触摸方向改变，默认为否\n    watchTouchDirectionChange: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('watchTouchDirectionChange', false)\n    }\n  },\n  created: function created() {\n    if (this.createdReload && !this.refresherOnly && this.auto) {\n      this._startLoading();\n      this._preReload();\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n    this.wxsPropType = _zPagingUtils.default.getTime().toString();\n    this.renderJsIgnore;\n    if (!this.createdReload && !this.refresherOnly && this.auto) {\n      this.$nextTick(this._preReload);\n    }\n    this.finalUseCache && this._setListByLocalCache();\n    var delay = 0;\n    this.$nextTick(function () {\n      _this.systemInfo = uni.getSystemInfoSync();\n      !_this.usePageScroll && _this.autoHeight && _this._setAutoHeight();\n      _this.loaded = true;\n    });\n    this.updatePageScrollTopHeight();\n    this.updatePageScrollBottomHeight();\n    this.updateLeftAndRightWidth();\n    if (this.finalRefresherEnabled && this.useCustomRefresher) {\n      this.$nextTick(function () {\n        _this.isTouchmoving = true;\n      });\n    }\n    this._onEmit();\n    if (!this.isIos && !this.useChatRecordMode) {\n      this.nLoadingMoreFixedHeight = true;\n    }\n    this._nUpdateRefresherWidth();\n  },\n  destroyed: function destroyed() {\n    this._offEmit();\n  },\n  watch: {\n    defaultThemeStyle: {\n      handler: function handler(newVal) {\n        if (newVal.length) {\n          this.finalRefresherDefaultStyle = newVal;\n        }\n      },\n      immediate: true\n    },\n    autoHeight: function autoHeight(newVal) {\n      this.loaded && !this.usePageScroll && this._setAutoHeight(newVal);\n    },\n    autoHeightAddition: function autoHeightAddition(newVal) {\n      this.loaded && !this.usePageScroll && this.autoHeight && this._setAutoHeight(newVal);\n    }\n  },\n  computed: {\n    finalPagingStyle: function finalPagingStyle() {\n      var pagingStyle = this.pagingStyle;\n      if (!this.systemInfo) return pagingStyle;\n      var windowTop = this.windowTop,\n        windowBottom = this.windowBottom;\n      if (!this.usePageScroll && this.fixed) {\n        if (windowTop && !pagingStyle.top) {\n          pagingStyle.top = windowTop + 'px';\n        }\n        if (windowBottom && !pagingStyle.bottom) {\n          pagingStyle.bottom = windowBottom + 'px';\n        }\n      }\n      if (this.bgColor.length && !pagingStyle['background']) {\n        pagingStyle['background'] = this.bgColor;\n      }\n      if (this.height.length && !pagingStyle['height']) {\n        pagingStyle['height'] = this.height;\n      }\n      if (this.width.length && !pagingStyle['width']) {\n        pagingStyle['width'] = this.width;\n      }\n      return pagingStyle;\n    },\n    finalLowerThreshold: function finalLowerThreshold() {\n      return _zPagingUtils.default.convertToPx(this.lowerThreshold);\n    },\n    finalPagingContentStyle: function finalPagingContentStyle() {\n      if (this.contentZIndex != 1) {\n        this.pagingContentStyle['z-index'] = this.contentZIndex;\n        this.pagingContentStyle['position'] = 'relative';\n      }\n      return this.pagingContentStyle;\n    },\n    renderJsIgnore: function renderJsIgnore() {\n      var _this2 = this;\n      if (this.usePageScroll && this.useChatRecordMode || !this.refresherEnabled || !this.useCustomRefresher) {\n        this.$nextTick(function () {\n          _this2.renderPropScrollTop = 10;\n        });\n      }\n      return 0;\n    },\n    windowHeight: function windowHeight() {\n      if (!this.systemInfo) return 0;\n      return this.systemInfo.windowHeight || 0;\n    },\n    windowBottom: function windowBottom() {\n      if (!this.systemInfo) return 0;\n      var windowBottom = this.systemInfo.windowBottom || 0;\n      if (this.safeAreaInsetBottom && !this.useSafeAreaPlaceholder) {\n        windowBottom += this.safeAreaBottom;\n      }\n      return windowBottom;\n    },\n    isIosAndH5: function isIosAndH5() {\n      return false;\n      return this.isIos;\n    }\n  },\n  methods: {\n    //当前版本号\n    getVersion: function getVersion() {\n      return \"z-paging v\".concat(_zPagingConstant.default.version);\n    },\n    //设置nvue List的specialEffects\n    setSpecialEffects: function setSpecialEffects(args) {\n      this.setListSpecialEffects(args);\n    },\n    //与setSpecialEffects等效，兼容旧版本\n    setListSpecialEffects: function setListSpecialEffects(args) {\n      this.nFixFreezing = args && Object.keys(args).length;\n      if (this.isIos) {\n        this.privateRefresherEnabled = 0;\n      }\n      !this.usePageScroll && this.$refs['zp-n-list'].setSpecialEffects(args);\n    },\n    //使手机发生较短时间的振动（15ms）\n    _doVibrateShort: function _doVibrateShort() {\n      if (this.isIos) {\n        var UISelectionFeedbackGenerator = plus.ios.importClass('UISelectionFeedbackGenerator');\n        var feedbackGenerator = new UISelectionFeedbackGenerator();\n        feedbackGenerator.init();\n        setTimeout(function () {\n          feedbackGenerator.selectionChanged();\n        }, 0);\n      } else {\n        plus.device.vibrate(15);\n      }\n    },\n    //设置z-paging高度\n    _setAutoHeight: function _setAutoHeight() {\n      var _arguments = arguments,\n        _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var shouldFullHeight, scrollViewNode, heightKey, finalScrollViewNode, finalScrollBottomNode, scrollViewTop, scrollViewHeight, additionHeight, finalHeight;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                shouldFullHeight = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : true;\n                scrollViewNode = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : null;\n                heightKey = 'min-height';\n                _context.prev = 3;\n                if (!shouldFullHeight) {\n                  _context.next = 17;\n                  break;\n                }\n                _context.t0 = scrollViewNode;\n                if (_context.t0) {\n                  _context.next = 10;\n                  break;\n                }\n                _context.next = 9;\n                return _this3._getNodeClientRect('.zp-scroll-view');\n              case 9:\n                _context.t0 = _context.sent;\n              case 10:\n                finalScrollViewNode = _context.t0;\n                _context.next = 13;\n                return _this3._getNodeClientRect('.zp-page-bottom');\n              case 13:\n                finalScrollBottomNode = _context.sent;\n                if (finalScrollViewNode) {\n                  scrollViewTop = finalScrollViewNode[0].top;\n                  scrollViewHeight = _this3.windowHeight - scrollViewTop;\n                  scrollViewHeight -= finalScrollBottomNode ? finalScrollBottomNode[0].height : 0;\n                  additionHeight = _zPagingUtils.default.convertToPx(_this3.autoHeightAddition);\n                  finalHeight = scrollViewHeight + additionHeight - (_this3.insideMore ? 1 : 0) + 'px !important';\n                  _this3.$set(_this3.scrollViewStyle, heightKey, finalHeight);\n                  _this3.$set(_this3.scrollViewInStyle, heightKey, finalHeight);\n                }\n                _context.next = 19;\n                break;\n              case 17:\n                _this3.$delete(_this3.scrollViewStyle, heightKey);\n                _this3.$delete(_this3.scrollViewInStyle, heightKey);\n              case 19:\n                _context.next = 23;\n                break;\n              case 21:\n                _context.prev = 21;\n                _context.t1 = _context[\"catch\"](3);\n              case 23:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[3, 21]]);\n      }))();\n    },\n    //触发更新是否超出页面状态\n    _updateInsideOfPaging: function _updateInsideOfPaging() {\n      this.insideMore && this.insideOfPaging === true && setTimeout(this.doLoadMore, 200);\n    },\n    //清除timeout\n    _cleanTimeout: function _cleanTimeout(timeout) {\n      if (timeout) {\n        clearTimeout(timeout);\n        timeout = null;\n      }\n      return timeout;\n    },\n    //添加全局emit监听\n    _onEmit: function _onEmit() {\n      var _this4 = this;\n      uni.$on(_zPagingConstant.default.errorUpdateKey, function () {\n        _this4.loading && _this4.complete(false);\n      });\n      uni.$on(_zPagingConstant.default.completeUpdateKey, function (data) {\n        setTimeout(function () {\n          if (_this4.loading) {\n            if (!_this4.disabledCompleteEmit) {\n              var type = data.type || 'normal';\n              var list = data.list || data;\n              var rule = data.rule;\n              _this4.fromCompleteEmit = true;\n              switch (type) {\n                case 'normal':\n                  _this4.complete(list);\n                  break;\n                case 'total':\n                  _this4.completeByTotal(list, rule);\n                  break;\n                case 'nomore':\n                  _this4.completeByNoMore(list, rule);\n                  break;\n                case 'key':\n                  _this4.completeByKey(list, rule);\n                  break;\n                default:\n                  break;\n              }\n            } else {\n              _this4.disabledCompleteEmit = false;\n            }\n          }\n        }, 1);\n      });\n    },\n    //销毁全局emit和listener监听\n    _offEmit: function _offEmit() {\n      uni.$off(_zPagingConstant.default.errorUpdateKey);\n      uni.$off(_zPagingConstant.default.completeUpdateKey);\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy96LXBhZ2luZy1tYWluLmpzIl0sIm5hbWVzIjpbInN5c3RlbUluZm8iLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIm5hbWUiLCJjb21wb25lbnRzIiwielBhZ2luZ1JlZnJlc2giLCJ6UGFnaW5nTG9hZE1vcmUiLCJ6UGFnaW5nRW1wdHlWaWV3IiwibWl4aW5zIiwiY29tbW9uTGF5b3V0TW9kdWxlIiwiZGF0YUhhbmRsZU1vZHVsZSIsImkxOG5Nb2R1bGUiLCJudnVlTW9kdWxlIiwiZW1wdHlNb2R1bGUiLCJyZWZyZXNoZXJNb2R1bGUiLCJsb2FkTW9yZU1vZHVsZSIsImxvYWRpbmdNb2R1bGUiLCJzY3JvbGxlck1vZHVsZSIsImJhY2tUb1RvcE1vZHVsZSIsInZpcnR1YWxMaXN0TW9kdWxlIiwiZGF0YSIsImJhc2U2NEFycm93IiwielN0YXRpYyIsImJhc2U2NEZsb3dlciIsImJhc2U2NEJhY2tUb1RvcCIsImxvYWRpbmdUeXBlIiwiRW51bSIsIkxvYWRpbmdUeXBlIiwiUmVmcmVzaGVyIiwicmVxdWVzdFRpbWVTdGFtcCIsImNoYXRSZWNvcmRMb2FkaW5nTW9yZVRleHQiLCJ3eHNQcm9wVHlwZSIsInJlbmRlclByb3BTY3JvbGxUb3AiLCJjaGVja1Njcm9sbGVkVG9Cb3R0b21UaW1lT3V0IiwiY2FjaGVUb3BIZWlnaHQiLCJpbnNpZGVPZlBhZ2luZyIsImlzTG9hZEZhaWxlZCIsImlzSW9zIiwicGxhdGZvcm0iLCJkaXNhYmxlZEJvdW5jZSIsImZyb21Db21wbGV0ZUVtaXQiLCJkaXNhYmxlZENvbXBsZXRlRW1pdCIsInd4c0lzU2Nyb2xsVG9wSW5Ub3BSYW5nZSIsInd4c1Njcm9sbFRvcCIsInd4c1BhZ2VTY3JvbGxUb3AiLCJ3eHNPblB1bGxpbmdEb3duIiwicHJvcHMiLCJkZWxheSIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJkZWZhdWx0IiwidSIsImdjIiwibWluRGVsYXkiLCJwYWdpbmdTdHlsZSIsIk9iamVjdCIsImhlaWdodCIsIndpZHRoIiwiYmdDb2xvciIsInBhZ2luZ0NvbnRlbnRTdHlsZSIsImF1dG9IZWlnaHQiLCJCb29sZWFuIiwiYXV0b0hlaWdodEFkZGl0aW9uIiwiZGVmYXVsdFRoZW1lU3R5bGUiLCJmaXhlZCIsInNhZmVBcmVhSW5zZXRCb3R0b20iLCJ1c2VTYWZlQXJlYVBsYWNlaG9sZGVyIiwidG9wWkluZGV4Iiwic3VwZXJDb250ZW50WkluZGV4IiwiY29udGVudFpJbmRleCIsImF1dG9GdWxsSGVpZ2h0Iiwid2F0Y2hUb3VjaERpcmVjdGlvbkNoYW5nZSIsImNyZWF0ZWQiLCJjcmVhdGVkUmVsb2FkIiwicmVmcmVzaGVyT25seSIsImF1dG8iLCJfc3RhcnRMb2FkaW5nIiwiX3ByZVJlbG9hZCIsIm1vdW50ZWQiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJyZW5kZXJKc0lnbm9yZSIsIiRuZXh0VGljayIsImZpbmFsVXNlQ2FjaGUiLCJfc2V0TGlzdEJ5TG9jYWxDYWNoZSIsInVzZVBhZ2VTY3JvbGwiLCJfc2V0QXV0b0hlaWdodCIsImxvYWRlZCIsInVwZGF0ZVBhZ2VTY3JvbGxUb3BIZWlnaHQiLCJ1cGRhdGVQYWdlU2Nyb2xsQm90dG9tSGVpZ2h0IiwidXBkYXRlTGVmdEFuZFJpZ2h0V2lkdGgiLCJmaW5hbFJlZnJlc2hlckVuYWJsZWQiLCJ1c2VDdXN0b21SZWZyZXNoZXIiLCJpc1RvdWNobW92aW5nIiwiX29uRW1pdCIsInVzZUNoYXRSZWNvcmRNb2RlIiwibkxvYWRpbmdNb3JlRml4ZWRIZWlnaHQiLCJfblVwZGF0ZVJlZnJlc2hlcldpZHRoIiwiZGVzdHJveWVkIiwiX29mZkVtaXQiLCJ3YXRjaCIsImhhbmRsZXIiLCJuZXdWYWwiLCJsZW5ndGgiLCJmaW5hbFJlZnJlc2hlckRlZmF1bHRTdHlsZSIsImltbWVkaWF0ZSIsImNvbXB1dGVkIiwiZmluYWxQYWdpbmdTdHlsZSIsIndpbmRvd1RvcCIsIndpbmRvd0JvdHRvbSIsInRvcCIsImJvdHRvbSIsImZpbmFsTG93ZXJUaHJlc2hvbGQiLCJjb252ZXJ0VG9QeCIsImxvd2VyVGhyZXNob2xkIiwiZmluYWxQYWdpbmdDb250ZW50U3R5bGUiLCJyZWZyZXNoZXJFbmFibGVkIiwid2luZG93SGVpZ2h0Iiwic2FmZUFyZWFCb3R0b20iLCJpc0lvc0FuZEg1IiwibWV0aG9kcyIsImdldFZlcnNpb24iLCJjIiwidmVyc2lvbiIsInNldFNwZWNpYWxFZmZlY3RzIiwiYXJncyIsInNldExpc3RTcGVjaWFsRWZmZWN0cyIsIm5GaXhGcmVlemluZyIsImtleXMiLCJwcml2YXRlUmVmcmVzaGVyRW5hYmxlZCIsIiRyZWZzIiwiX2RvVmlicmF0ZVNob3J0IiwiVUlTZWxlY3Rpb25GZWVkYmFja0dlbmVyYXRvciIsInBsdXMiLCJpb3MiLCJpbXBvcnRDbGFzcyIsImZlZWRiYWNrR2VuZXJhdG9yIiwiaW5pdCIsInNldFRpbWVvdXQiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiZGV2aWNlIiwidmlicmF0ZSIsInNob3VsZEZ1bGxIZWlnaHQiLCJzY3JvbGxWaWV3Tm9kZSIsImhlaWdodEtleSIsIl9nZXROb2RlQ2xpZW50UmVjdCIsImZpbmFsU2Nyb2xsVmlld05vZGUiLCJmaW5hbFNjcm9sbEJvdHRvbU5vZGUiLCJzY3JvbGxWaWV3VG9wIiwic2Nyb2xsVmlld0hlaWdodCIsImFkZGl0aW9uSGVpZ2h0IiwiZmluYWxIZWlnaHQiLCJpbnNpZGVNb3JlIiwiJHNldCIsInNjcm9sbFZpZXdTdHlsZSIsInNjcm9sbFZpZXdJblN0eWxlIiwiJGRlbGV0ZSIsIl91cGRhdGVJbnNpZGVPZlBhZ2luZyIsImRvTG9hZE1vcmUiLCJfY2xlYW5UaW1lb3V0IiwidGltZW91dCIsImNsZWFyVGltZW91dCIsIiRvbiIsImVycm9yVXBkYXRlS2V5IiwibG9hZGluZyIsImNvbXBsZXRlIiwiY29tcGxldGVVcGRhdGVLZXkiLCJsaXN0IiwicnVsZSIsImNvbXBsZXRlQnlUb3RhbCIsImNvbXBsZXRlQnlOb01v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RDtJQUNBMkQsUUFBUSxzQkFBRTtNQUNUbkcsR0FBRyxDQUFDNEssSUFBSSxDQUFDbEQsd0JBQUMsQ0FBQ3lDLGNBQWMsQ0FBQztNQUMxQm5LLEdBQUcsQ0FBQzRLLElBQUksQ0FBQ2xELHdCQUFDLENBQUM0QyxpQkFBaUIsQ0FBQztJQUM5QjtFQUNEO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6IjQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3otcGFnaW5nXeaguOW/g2pzXG5cbmltcG9ydCB6U3RhdGljIGZyb20gJy4vei1wYWdpbmctc3RhdGljJ1xuaW1wb3J0IGMgZnJvbSAnLi96LXBhZ2luZy1jb25zdGFudCdcbmltcG9ydCB1IGZyb20gJy4vei1wYWdpbmctdXRpbHMnXG5cbmltcG9ydCB6UGFnaW5nUmVmcmVzaCBmcm9tICcuLi9jb21wb25lbnRzL3otcGFnaW5nLXJlZnJlc2gnXG5pbXBvcnQgelBhZ2luZ0xvYWRNb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvei1wYWdpbmctbG9hZC1tb3JlJ1xuaW1wb3J0IHpQYWdpbmdFbXB0eVZpZXcgZnJvbSAnLi4vLi4vei1wYWdpbmctZW1wdHktdmlldy96LXBhZ2luZy1lbXB0eS12aWV3J1xuXG4vLyBtb2R1bGVzXG5pbXBvcnQgY29tbW9uTGF5b3V0TW9kdWxlIGZyb20gJy4vbW9kdWxlcy9jb21tb24tbGF5b3V0J1xuaW1wb3J0IGRhdGFIYW5kbGVNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL2RhdGEtaGFuZGxlJ1xuaW1wb3J0IGkxOG5Nb2R1bGUgZnJvbSAnLi9tb2R1bGVzL2kxOG4nXG5pbXBvcnQgbnZ1ZU1vZHVsZSBmcm9tICcuL21vZHVsZXMvbnZ1ZSdcbmltcG9ydCBlbXB0eU1vZHVsZSBmcm9tICcuL21vZHVsZXMvZW1wdHknXG5pbXBvcnQgcmVmcmVzaGVyTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9yZWZyZXNoZXInXG5pbXBvcnQgbG9hZE1vcmVNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL2xvYWQtbW9yZSdcbmltcG9ydCBsb2FkaW5nTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9sb2FkaW5nJ1xuaW1wb3J0IHNjcm9sbGVyTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9zY3JvbGxlcidcbmltcG9ydCBiYWNrVG9Ub3BNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL2JhY2stdG8tdG9wJ1xuaW1wb3J0IHZpcnR1YWxMaXN0TW9kdWxlIGZyb20gJy4vbW9kdWxlcy92aXJ0dWFsLWxpc3QnXG5cbmltcG9ydCBFbnVtIGZyb20gJy4vei1wYWdpbmctZW51bSdcblxuY29uc3Qgc3lzdGVtSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6IFwiei1wYWdpbmdcIixcblx0Y29tcG9uZW50czoge1xuXHRcdHpQYWdpbmdSZWZyZXNoLFxuXHRcdHpQYWdpbmdMb2FkTW9yZSxcblx0XHR6UGFnaW5nRW1wdHlWaWV3XG5cdH0sXG5cdG1peGluczogW1xuXHRcdGNvbW1vbkxheW91dE1vZHVsZSxcblx0XHRkYXRhSGFuZGxlTW9kdWxlLFxuXHRcdGkxOG5Nb2R1bGUsXG5cdFx0bnZ1ZU1vZHVsZSxcblx0XHRlbXB0eU1vZHVsZSxcblx0XHRyZWZyZXNoZXJNb2R1bGUsXG5cdFx0bG9hZE1vcmVNb2R1bGUsXG5cdFx0bG9hZGluZ01vZHVsZSxcblx0XHRzY3JvbGxlck1vZHVsZSxcblx0XHRiYWNrVG9Ub3BNb2R1bGUsXG5cdFx0dmlydHVhbExpc3RNb2R1bGVcblx0XSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLemdmeaAgei1hOa6kC0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0YmFzZTY0QXJyb3c6IHpTdGF0aWMuYmFzZTY0QXJyb3csXG5cdFx0XHRiYXNlNjRGbG93ZXI6IHpTdGF0aWMuYmFzZTY0Rmxvd2VyLFxuXHRcdFx0YmFzZTY0QmFja1RvVG9wOiB6U3RhdGljLmJhc2U2NEJhY2tUb1RvcCxcblxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0t5YWo5bGA5pWw5o2u55u45YWzLS0tLS0tLS0tLS0tLS1cblx0XHRcdC8v5b2T5YmN5Yqg6L2957G75Z6LXG5cdFx0XHRsb2FkaW5nVHlwZTogRW51bS5Mb2FkaW5nVHlwZS5SZWZyZXNoZXIsXG5cdFx0XHRyZXF1ZXN0VGltZVN0YW1wOiAwLFxuXHRcdFx0Y2hhdFJlY29yZExvYWRpbmdNb3JlVGV4dDogJycsXG5cdFx0XHR3eHNQcm9wVHlwZTogJycsXG5cdFx0XHRyZW5kZXJQcm9wU2Nyb2xsVG9wOiAtMSxcblx0XHRcdGNoZWNrU2Nyb2xsZWRUb0JvdHRvbVRpbWVPdXQ6IG51bGwsXG5cdFx0XHRjYWNoZVRvcEhlaWdodDogLTEsXG5cblx0XHRcdC8vLS0tLS0tLS0tLS0tLS3nirbmgIEm5Yik5patLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHRpbnNpZGVPZlBhZ2luZzogLTEsXG5cdFx0XHRpc0xvYWRGYWlsZWQ6IGZhbHNlLFxuXHRcdFx0aXNJb3M6IHN5c3RlbUluZm8ucGxhdGZvcm0gPT09ICdpb3MnLFxuXHRcdFx0ZGlzYWJsZWRCb3VuY2U6IGZhbHNlLFxuXHRcdFx0ZnJvbUNvbXBsZXRlRW1pdDogZmFsc2UsXG5cdFx0XHRkaXNhYmxlZENvbXBsZXRlRW1pdDogZmFsc2UsXG5cdFx0XHRcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0td3hz55u45YWzLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHR3eHNJc1Njcm9sbFRvcEluVG9wUmFuZ2U6IHRydWUsXG5cdFx0XHR3eHNTY3JvbGxUb3A6IDAsXG5cdFx0XHR3eHNQYWdlU2Nyb2xsVG9wOiAwLFxuXHRcdFx0d3hzT25QdWxsaW5nRG93bjogZmFsc2UsXG5cdFx0fTtcblx0fSxcblx0cHJvcHM6IHtcblx0XHQvL+iwg+eUqGNvbXBsZXRl5ZCO5bu26L+f5aSE55CG55qE5pe26Ze077yM5Y2V5L2N5Li65q+r56eS77yM6buY6K6kMOavq+enku+8jOS8mOWFiOe6p+mrmOS6jm1pbkRlbGF5XG5cdFx0ZGVsYXk6IHtcblx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdkZWxheScsIDApLFxuXHRcdH0sXG5cdFx0Ly/op6blj5FAcXVlcnnlkI7mnIDlsI/lu7bov5/lpITnkIbnmoTml7bpl7TvvIzljZXkvY3kuLrmr6vnp5LvvIzpu5jorqQw5q+r56eS77yM5LyY5YWI57qn5L2O5LqOZGVsYXnvvIjlgYforr7orr7nva7kuLozMDDmr6vnp5LvvIzoi6XliIbpobXor7fmsYLml7bpl7TlsI/kuo4zMDDmr6vnp5LvvIzliJnlnKjosIPnlKhjb21wbGV0ZeWQjuW7tui/n1szMDDmr6vnp5It6K+35rGC5pe26ZW/Xe+8m+iLpeivt+axguaXtumVv+Wkp+S6jjMwMOavq+enku+8jOWImeS4jeW7tui/n++8ie+8jOW9k3Nob3ctcmVmcmVzaGVyLXdoZW4tcmVsb2Fk5Li6dHJ1ZeaIlnJlbG9hZCh0cnVlKeaXtu+8jOWFtuacgOWwj+WAvOS4ujQwMFxuXHRcdG1pbkRlbGF5OiB7XG5cdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnbWluRGVsYXknLCAwKSxcblx0XHR9LFxuXHRcdC8v6K6+572uei1wYWdpbmfnmoRzdHlsZe+8jOmDqOWIhuW5s+WPsCjlpoLlvq7kv6HlsI/nqIvluo8p5peg5rOV55u05o6l5L+u5pS557uE5Lu255qEc3R5bGXvvIzlj6/kvb/nlKjmraTlsZ7mgKfku6Pmm79cblx0XHRwYWdpbmdTdHlsZToge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB1LmdjKCdwYWdpbmdTdHlsZScsIHt9KTtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQvL3otcGFnaW5n55qE6auY5bqm77yM5LyY5YWI57qn5L2O5LqOcGFnaW5nU3R5bGXkuK3orr7nva7nmoRoZWlnaHTvvJvkvKDlrZfnrKbkuLLvvIzlpoIxMDBweOOAgTEwMHJweOOAgTEwMCVcblx0XHRoZWlnaHQ6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2hlaWdodCcsICcnKVxuXHRcdH0sXG5cdFx0Ly96LXBhZ2luZ+eahOWuveW6pu+8jOS8mOWFiOe6p+S9juS6jnBhZ2luZ1N0eWxl5Lit6K6+572u55qEd2lkdGjvvJvkvKDlrZfnrKbkuLLvvIzlpoIxMDBweOOAgTEwMHJweOOAgTEwMCVcblx0XHR3aWR0aDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnd2lkdGgnLCAnJylcblx0XHR9LFxuXHRcdC8vei1wYWdpbmfnmoTog4zmma/oibLvvIzkvJjlhYjnuqfkvY7kuo5wYWdpbmdTdHlsZeS4reiuvue9rueahGJhY2tncm91bmTjgILkvKDlrZfnrKbkuLLvvIzlpoJcIiNmZmZmZmZcIlxuXHRcdGJnQ29sb3I6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2JnQ29sb3InLCAnJylcblx0XHR9LFxuXHRcdC8v6K6+572uei1wYWdpbmfnmoTlrrnlmago5o+S5qe955qE54i2dmlldynnmoRzdHlsZVxuXHRcdHBhZ2luZ0NvbnRlbnRTdHlsZToge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB1LmdjKCdwYWdpbmdDb250ZW50U3R5bGUnLCB7fSk7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Ly96LXBhZ2luZ+aYr+WQpuiHquWKqOmrmOW6pu+8jOiLpeiHquWKqOmrmOW6puWImeS8muiHquWKqOmTuua7oeWxj+W5lVxuXHRcdGF1dG9IZWlnaHQ6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdhdXRvSGVpZ2h0JywgZmFsc2UpXG5cdFx0fSxcblx0XHQvL3otcGFnaW5n5piv5ZCm6Ieq5Yqo6auY5bqm5pe277yM6ZmE5Yqg55qE6auY5bqm77yM5rOo5oSP5re75Yqg5Y2V5L2NcHjmiJZycHjvvIzoi6XpnIDopoHlh4/lsJHpq5jluqbvvIzliJnkvKDotJ/mlbBcblx0XHRhdXRvSGVpZ2h0QWRkaXRpb246IHtcblx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdhdXRvSGVpZ2h0QWRkaXRpb24nLCAnMHB4Jylcblx0XHR9LFxuXHRcdC8vbG9hZGluZyjkuIvmi4nliLfmlrDjgIHkuIrmi4nliqDovb3mm7TlpJop55qE5Li76aKY5qC35byP77yM5pSv5oyBYmxhY2vvvIx3aGl0Ze+8jOm7mOiupGJsYWNrXG5cdFx0ZGVmYXVsdFRoZW1lU3R5bGU6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2RlZmF1bHRUaGVtZVN0eWxlJywgJ2JsYWNrJylcblx0XHR9LFxuXHRcdC8vei1wYWdpbmfmmK/lkKbkvb/nlKhmaXhlZOW4g+WxgO+8jOiLpeS9v+eUqGZpeGVk5biD5bGA77yM5YiZei1wYWdpbmfnmoTniLZ2aWV35peg6ZyA5Zu65a6a6auY5bqm77yMei1wYWdpbmfpq5jluqbpu5jorqTkuLoxMDAl77yM6buY6K6k5Li65pivKOW9k+S9v+eUqOWGhee9rnNjcm9sbC12aWV35rua5Yqo5pe25pyJ5pWIKVxuXHRcdGZpeGVkOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnZml4ZWQnLCB0cnVlKVxuXHRcdH0sXG5cdFx0Ly/mmK/lkKblvIDlkK/lupXpg6jlronlhajljLrln5/pgILphY1cblx0XHRzYWZlQXJlYUluc2V0Qm90dG9tOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnc2FmZUFyZWFJbnNldEJvdHRvbScsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/lvIDlkK/lupXpg6jlronlhajljLrln5/pgILphY3lkI7vvIzmmK/lkKbkvb/nlKhwbGFjZWhvbGRlcuW9ouW8j+WunueOsO+8jOm7mOiupOS4uuWQpuOAguS4uuWQpuaXtua7muWKqOWMuuWfn+S8muiHquWKqOmBv+W8gOW6lemDqOWuieWFqOWMuuWfn++8jOS5n+WwseaYr+aJgOaciea7muWKqOWGheWuuemDveS4jeS8muaMoeS9j+W6lemDqOWuieWFqOWMuuWfn++8jOiLpeiuvue9ruS4uuaYr++8jOWImea7muWKqOaXtua7muWKqOWGheWuueS8muaMoeS9j+W6lemDqOWuieWFqOWMuuWfn++8jOS9huaYr+W9k+a7muWKqOWIsOW6lemDqOaXtuaJjeS8mumBv+W8gOW6lemDqOWuieWFqOWMuuWfn1xuXHRcdHVzZVNhZmVBcmVhUGxhY2Vob2xkZXI6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCd1c2VTYWZlQXJlYVBsYWNlaG9sZGVyJywgZmFsc2UpXG5cdFx0fSxcblx0XHQvL3Nsb3Q9XCJ0b3BcIueahHZpZXfnmoR6LWluZGV477yM6buY6K6k5Li6OTnvvIzku4Xkvb/nlKjpobXpnaLmu5rliqjml7bmnInmlYhcblx0XHR0b3BaSW5kZXg6IHtcblx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3RvcFpJbmRleCcsIDk5KVxuXHRcdH0sXG5cdFx0Ly96LXBhZ2luZ+WGheWuueWuueWZqOeItnZpZXfnmoR6LWluZGV477yM6buY6K6k5Li6MVxuXHRcdHN1cGVyQ29udGVudFpJbmRleDoge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnc3VwZXJDb250ZW50WkluZGV4JywgMSlcblx0XHR9LFxuXHRcdC8vei1wYWdpbmflhoXlrrnlrrnlmajpg6jliIbnmoR6LWluZGV477yM6buY6K6k5Li6MTBcblx0XHRjb250ZW50WkluZGV4OiB7XG5cdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdjb250ZW50WkluZGV4JywgMTApXG5cdFx0fSxcblx0XHQvL+S9v+eUqOmhtemdoua7muWKqOaXtu+8jOaYr+WQpuWcqOS4jea7oeWxj+aXtuiHquWKqOWhq+WFhea7oeWxj+W5le+8jOm7mOiupOS4uuaYr1xuXHRcdGF1dG9GdWxsSGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnYXV0b0Z1bGxIZWlnaHQnLCB0cnVlKVxuXHRcdH0sXG5cdFx0Ly/mmK/lkKbnm5HlkKzliJfooajop6bmkbjmlrnlkJHmlLnlj5jvvIzpu5jorqTkuLrlkKZcblx0XHR3YXRjaFRvdWNoRGlyZWN0aW9uQ2hhbmdlOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnd2F0Y2hUb3VjaERpcmVjdGlvbkNoYW5nZScsIGZhbHNlKVxuXHRcdH0sXG5cdH0sXG5cdGNyZWF0ZWQoKXtcblx0XHRpZiAodGhpcy5jcmVhdGVkUmVsb2FkICYmICF0aGlzLnJlZnJlc2hlck9ubHkgJiYgdGhpcy5hdXRvKSB7XG5cdFx0XHR0aGlzLl9zdGFydExvYWRpbmcoKTtcblx0XHRcdHRoaXMuX3ByZVJlbG9hZCgpO1xuXHRcdH1cblx0fSxcblx0bW91bnRlZCgpIHtcblx0XHR0aGlzLnd4c1Byb3BUeXBlID0gdS5nZXRUaW1lKCkudG9TdHJpbmcoKTtcblx0XHR0aGlzLnJlbmRlckpzSWdub3JlO1xuXHRcdGlmICghdGhpcy5jcmVhdGVkUmVsb2FkICYmICF0aGlzLnJlZnJlc2hlck9ubHkgJiYgdGhpcy5hdXRvKSB7XG5cdFx0XHR0aGlzLiRuZXh0VGljayh0aGlzLl9wcmVSZWxvYWQpO1xuXHRcdH1cblx0XHR0aGlzLmZpbmFsVXNlQ2FjaGUgJiYgdGhpcy5fc2V0TGlzdEJ5TG9jYWxDYWNoZSgpO1xuXHRcdGxldCBkZWxheSA9IDA7XG5cblxuXG5cdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0dGhpcy5zeXN0ZW1JbmZvID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XG5cdFx0XHQhdGhpcy51c2VQYWdlU2Nyb2xsICYmIHRoaXMuYXV0b0hlaWdodCAmJiB0aGlzLl9zZXRBdXRvSGVpZ2h0KCk7XG5cdFx0XHR0aGlzLmxvYWRlZCA9IHRydWU7XG5cdFx0fSlcblx0XHR0aGlzLnVwZGF0ZVBhZ2VTY3JvbGxUb3BIZWlnaHQoKTtcblx0XHR0aGlzLnVwZGF0ZVBhZ2VTY3JvbGxCb3R0b21IZWlnaHQoKTtcblx0XHR0aGlzLnVwZGF0ZUxlZnRBbmRSaWdodFdpZHRoKCk7XG5cdFx0aWYgKHRoaXMuZmluYWxSZWZyZXNoZXJFbmFibGVkICYmIHRoaXMudXNlQ3VzdG9tUmVmcmVzaGVyKSB7XG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaXNUb3VjaG1vdmluZyA9IHRydWU7XG5cdFx0XHR9KVxuXHRcdH1cblx0XHR0aGlzLl9vbkVtaXQoKTtcblxuXHRcdGlmICghdGhpcy5pc0lvcyAmJiAhdGhpcy51c2VDaGF0UmVjb3JkTW9kZSkge1xuXHRcdFx0dGhpcy5uTG9hZGluZ01vcmVGaXhlZEhlaWdodCA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMuX25VcGRhdGVSZWZyZXNoZXJXaWR0aCgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblx0fSxcblx0ZGVzdHJveWVkKCkge1xuXHRcdHRoaXMuX29mZkVtaXQoKTtcblx0fSxcblxuXG5cblxuXG5cdHdhdGNoOiB7XG5cdFx0ZGVmYXVsdFRoZW1lU3R5bGU6IHtcblx0XHRcdGhhbmRsZXIobmV3VmFsKSB7XG5cdFx0XHRcdGlmIChuZXdWYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGhpcy5maW5hbFJlZnJlc2hlckRlZmF1bHRTdHlsZSA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdH0sXG5cdFx0YXV0b0hlaWdodChuZXdWYWwpIHtcblx0XHRcdHRoaXMubG9hZGVkICYmICF0aGlzLnVzZVBhZ2VTY3JvbGwgJiYgdGhpcy5fc2V0QXV0b0hlaWdodChuZXdWYWwpO1xuXHRcdH0sXG5cdFx0YXV0b0hlaWdodEFkZGl0aW9uKG5ld1ZhbCkge1xuXHRcdFx0dGhpcy5sb2FkZWQgJiYgIXRoaXMudXNlUGFnZVNjcm9sbCAmJiB0aGlzLmF1dG9IZWlnaHQgJiYgdGhpcy5fc2V0QXV0b0hlaWdodChuZXdWYWwpO1xuXHRcdH0sXG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0ZmluYWxQYWdpbmdTdHlsZSgpIHtcblx0XHRcdGNvbnN0IHBhZ2luZ1N0eWxlID0gdGhpcy5wYWdpbmdTdHlsZTtcblx0XHRcdGlmICghdGhpcy5zeXN0ZW1JbmZvKSByZXR1cm4gcGFnaW5nU3R5bGU7XG5cdFx0XHRjb25zdCB7IHdpbmRvd1RvcCwgd2luZG93Qm90dG9tIH0gPSB0aGlzO1xuXHRcdFx0aWYgKCF0aGlzLnVzZVBhZ2VTY3JvbGwgJiYgdGhpcy5maXhlZCkge1xuXHRcdFx0XHRpZiAod2luZG93VG9wICYmICFwYWdpbmdTdHlsZS50b3ApIHtcblx0XHRcdFx0XHRwYWdpbmdTdHlsZS50b3AgPSB3aW5kb3dUb3AgKyAncHgnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh3aW5kb3dCb3R0b20gJiYgIXBhZ2luZ1N0eWxlLmJvdHRvbSkge1xuXHRcdFx0XHRcdHBhZ2luZ1N0eWxlLmJvdHRvbSA9IHdpbmRvd0JvdHRvbSArICdweCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmJnQ29sb3IubGVuZ3RoICYmICFwYWdpbmdTdHlsZVsnYmFja2dyb3VuZCddKSB7XG5cdFx0XHRcdHBhZ2luZ1N0eWxlWydiYWNrZ3JvdW5kJ10gPSB0aGlzLmJnQ29sb3I7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5oZWlnaHQubGVuZ3RoICYmICFwYWdpbmdTdHlsZVsnaGVpZ2h0J10pIHtcblx0XHRcdFx0cGFnaW5nU3R5bGVbJ2hlaWdodCddID0gdGhpcy5oZWlnaHQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy53aWR0aC5sZW5ndGggJiYgIXBhZ2luZ1N0eWxlWyd3aWR0aCddKSB7XG5cdFx0XHRcdHBhZ2luZ1N0eWxlWyd3aWR0aCddID0gdGhpcy53aWR0aDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwYWdpbmdTdHlsZTtcblx0XHR9LFxuXHRcdGZpbmFsTG93ZXJUaHJlc2hvbGQoKSB7XG5cdFx0XHRyZXR1cm4gdS5jb252ZXJ0VG9QeCh0aGlzLmxvd2VyVGhyZXNob2xkKTtcblx0XHR9LFxuXHRcdGZpbmFsUGFnaW5nQ29udGVudFN0eWxlKCkge1xuXHRcdFx0aWYgKHRoaXMuY29udGVudFpJbmRleCAhPSAxKSB7XG5cdFx0XHRcdHRoaXMucGFnaW5nQ29udGVudFN0eWxlWyd6LWluZGV4J10gPSB0aGlzLmNvbnRlbnRaSW5kZXg7XG5cdFx0XHRcdHRoaXMucGFnaW5nQ29udGVudFN0eWxlWydwb3NpdGlvbiddID0gJ3JlbGF0aXZlJztcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnBhZ2luZ0NvbnRlbnRTdHlsZTtcblx0XHR9LFxuXHRcdHJlbmRlckpzSWdub3JlKCkge1xuXHRcdFx0aWYgKCh0aGlzLnVzZVBhZ2VTY3JvbGwgJiYgdGhpcy51c2VDaGF0UmVjb3JkTW9kZSkgfHwgIXRoaXMucmVmcmVzaGVyRW5hYmxlZCB8fCAhdGhpcy51c2VDdXN0b21SZWZyZXNoZXIpIHtcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVuZGVyUHJvcFNjcm9sbFRvcCA9IDEwO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSxcblx0XHR3aW5kb3dIZWlnaHQoKSB7XG5cdFx0XHRpZiAoIXRoaXMuc3lzdGVtSW5mbykgcmV0dXJuIDA7XG5cdFx0XHRyZXR1cm4gdGhpcy5zeXN0ZW1JbmZvLndpbmRvd0hlaWdodCB8fCAwO1xuXHRcdH0sXG5cdFx0d2luZG93Qm90dG9tKCkge1xuXHRcdFx0aWYgKCF0aGlzLnN5c3RlbUluZm8pIHJldHVybiAwO1xuXHRcdFx0bGV0IHdpbmRvd0JvdHRvbSA9IHRoaXMuc3lzdGVtSW5mby53aW5kb3dCb3R0b20gfHwgMDtcblx0XHRcdGlmICh0aGlzLnNhZmVBcmVhSW5zZXRCb3R0b20gJiYgIXRoaXMudXNlU2FmZUFyZWFQbGFjZWhvbGRlcikge1xuXHRcdFx0XHR3aW5kb3dCb3R0b20gKz0gdGhpcy5zYWZlQXJlYUJvdHRvbTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB3aW5kb3dCb3R0b207XG5cdFx0fSxcblx0XHRpc0lvc0FuZEg1KCkge1xuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdHJldHVybiB0aGlzLmlzSW9zO1xuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdC8v5b2T5YmN54mI5pys5Y+3XG5cdFx0Z2V0VmVyc2lvbigpIHtcblx0XHRcdHJldHVybiBgei1wYWdpbmcgdiR7Yy52ZXJzaW9ufWA7XG5cdFx0fSxcblx0XHQvL+iuvue9rm52dWUgTGlzdOeahHNwZWNpYWxFZmZlY3RzXG5cdFx0c2V0U3BlY2lhbEVmZmVjdHMoYXJncykge1xuXHRcdFx0dGhpcy5zZXRMaXN0U3BlY2lhbEVmZmVjdHMoYXJncyk7XG5cdFx0fSxcblx0XHQvL+S4jnNldFNwZWNpYWxFZmZlY3Rz562J5pWI77yM5YW85a655pen54mI5pysXG5cdFx0c2V0TGlzdFNwZWNpYWxFZmZlY3RzKGFyZ3MpIHtcblx0XHRcdHRoaXMubkZpeEZyZWV6aW5nID0gYXJncyAmJiBPYmplY3Qua2V5cyhhcmdzKS5sZW5ndGg7XG5cdFx0XHRpZiAodGhpcy5pc0lvcykge1xuXHRcdFx0XHR0aGlzLnByaXZhdGVSZWZyZXNoZXJFbmFibGVkID0gMDtcblx0XHRcdH1cblx0XHRcdCF0aGlzLnVzZVBhZ2VTY3JvbGwgJiYgdGhpcy4kcmVmc1snenAtbi1saXN0J10uc2V0U3BlY2lhbEVmZmVjdHMoYXJncyk7XG5cdFx0fSxcblx0XHQvL+S9v+aJi+acuuWPkeeUn+i+g+efreaXtumXtOeahOaMr+WKqO+8iDE1bXPvvIlcblx0XHRfZG9WaWJyYXRlU2hvcnQoKSB7XG5cblx0XHRcdGlmICh0aGlzLmlzSW9zKSB7XG5cdFx0XHRcdGNvbnN0IFVJU2VsZWN0aW9uRmVlZGJhY2tHZW5lcmF0b3IgPSBwbHVzLmlvcy5pbXBvcnRDbGFzcygnVUlTZWxlY3Rpb25GZWVkYmFja0dlbmVyYXRvcicpO1xuXHRcdFx0XHRjb25zdCBmZWVkYmFja0dlbmVyYXRvciA9IG5ldyBVSVNlbGVjdGlvbkZlZWRiYWNrR2VuZXJhdG9yKCk7XG5cdFx0XHRcdGZlZWRiYWNrR2VuZXJhdG9yLmluaXQoKTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0ZmVlZGJhY2tHZW5lcmF0b3Iuc2VsZWN0aW9uQ2hhbmdlZCgpO1xuXHRcdFx0XHR9LCAwKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGx1cy5kZXZpY2UudmlicmF0ZSgxNSk7XG5cdFx0XHR9XG5cblxuXG5cblx0XHR9LFxuXHRcdC8v6K6+572uei1wYWdpbmfpq5jluqZcblx0XHRhc3luYyBfc2V0QXV0b0hlaWdodChzaG91bGRGdWxsSGVpZ2h0ID0gdHJ1ZSwgc2Nyb2xsVmlld05vZGUgPSBudWxsKSB7XG5cdFx0XHRsZXQgaGVpZ2h0S2V5ID0gJ21pbi1oZWlnaHQnO1xuXG5cblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKHNob3VsZEZ1bGxIZWlnaHQpIHtcblx0XHRcdFx0XHRsZXQgZmluYWxTY3JvbGxWaWV3Tm9kZSA9IHNjcm9sbFZpZXdOb2RlIHx8IGF3YWl0IHRoaXMuX2dldE5vZGVDbGllbnRSZWN0KCcuenAtc2Nyb2xsLXZpZXcnKTtcblx0XHRcdFx0XHRsZXQgZmluYWxTY3JvbGxCb3R0b21Ob2RlID0gYXdhaXQgdGhpcy5fZ2V0Tm9kZUNsaWVudFJlY3QoJy56cC1wYWdlLWJvdHRvbScpO1xuXHRcdFx0XHRcdGlmIChmaW5hbFNjcm9sbFZpZXdOb2RlKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzY3JvbGxWaWV3VG9wID0gZmluYWxTY3JvbGxWaWV3Tm9kZVswXS50b3A7XG5cdFx0XHRcdFx0XHRsZXQgc2Nyb2xsVmlld0hlaWdodCA9IHRoaXMud2luZG93SGVpZ2h0IC0gc2Nyb2xsVmlld1RvcDtcblx0XHRcdFx0XHRcdHNjcm9sbFZpZXdIZWlnaHQgLT0gZmluYWxTY3JvbGxCb3R0b21Ob2RlID8gZmluYWxTY3JvbGxCb3R0b21Ob2RlWzBdLmhlaWdodCA6IDA7XG5cdFx0XHRcdFx0XHRjb25zdCBhZGRpdGlvbkhlaWdodCA9IHUuY29udmVydFRvUHgodGhpcy5hdXRvSGVpZ2h0QWRkaXRpb24pO1xuXHRcdFx0XHRcdFx0Y29uc3QgZmluYWxIZWlnaHQgPSBzY3JvbGxWaWV3SGVpZ2h0ICsgYWRkaXRpb25IZWlnaHQgLSAodGhpcy5pbnNpZGVNb3JlID8gMSA6IDApICsgJ3B4ICFpbXBvcnRhbnQnO1xuXHRcdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuc2Nyb2xsVmlld1N0eWxlLCBoZWlnaHRLZXksIGZpbmFsSGVpZ2h0KTtcblx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLnNjcm9sbFZpZXdJblN0eWxlLCBoZWlnaHRLZXksIGZpbmFsSGVpZ2h0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy4kZGVsZXRlKHRoaXMuc2Nyb2xsVmlld1N0eWxlLCBoZWlnaHRLZXkpO1xuXHRcdFx0XHRcdHRoaXMuJGRlbGV0ZSh0aGlzLnNjcm9sbFZpZXdJblN0eWxlLCBoZWlnaHRLZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH0sXG5cdFx0Ly/op6blj5Hmm7TmlrDmmK/lkKbotoXlh7rpobXpnaLnirbmgIFcblx0XHRfdXBkYXRlSW5zaWRlT2ZQYWdpbmcoKSB7XG5cdFx0XHR0aGlzLmluc2lkZU1vcmUgJiYgdGhpcy5pbnNpZGVPZlBhZ2luZyA9PT0gdHJ1ZSAmJiBzZXRUaW1lb3V0KHRoaXMuZG9Mb2FkTW9yZSwgMjAwKVxuXHRcdH0sXG5cdFx0Ly/muIXpmaR0aW1lb3V0XG5cdFx0X2NsZWFuVGltZW91dCh0aW1lb3V0KSB7XG5cdFx0XHRpZiAodGltZW91dCkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRpbWVvdXQ7XG5cdFx0fSxcblx0XHQvL+a3u+WKoOWFqOWxgGVtaXTnm5HlkKxcblx0XHRfb25FbWl0KCkge1xuXHRcdFx0dW5pLiRvbihjLmVycm9yVXBkYXRlS2V5LCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZGluZyAmJiB0aGlzLmNvbXBsZXRlKGZhbHNlKTtcblx0XHRcdH0pXG5cdFx0XHR1bmkuJG9uKGMuY29tcGxldGVVcGRhdGVLZXksIChkYXRhKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmxvYWRpbmcpIHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5kaXNhYmxlZENvbXBsZXRlRW1pdCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0eXBlID0gZGF0YS50eXBlIHx8ICdub3JtYWwnO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBsaXN0ID0gZGF0YS5saXN0IHx8IGRhdGE7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJ1bGUgPSBkYXRhLnJ1bGU7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZnJvbUNvbXBsZXRlRW1pdCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAodHlwZSl7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnbm9ybWFsJzpcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY29tcGxldGUobGlzdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRjYXNlICd0b3RhbCc6XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNvbXBsZXRlQnlUb3RhbChsaXN0LCBydWxlKTtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ25vbW9yZSc6XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNvbXBsZXRlQnlOb01vcmUobGlzdCwgcnVsZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdrZXknOlxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5jb21wbGV0ZUJ5S2V5KGxpc3QsIHJ1bGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRpc2FibGVkQ29tcGxldGVFbWl0ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCAxKTtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvL+mUgOavgeWFqOWxgGVtaXTlkoxsaXN0ZW5lcuebkeWQrFxuXHRcdF9vZmZFbWl0KCl7XG5cdFx0XHR1bmkuJG9mZihjLmVycm9yVXBkYXRlS2V5KTtcblx0XHRcdHVuaS4kb2ZmKGMuY29tcGxldGVVcGRhdGVLZXkpO1xuXHRcdH1cblx0fSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 5);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 44)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 44 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 5)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 45 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 46 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/z-paging-constant.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// [z-paging]常量\nvar _default = {\n  version: '2.5.7',\n  delayTime: 100,\n  errorUpdateKey: 'z-paging-error-emit',\n  completeUpdateKey: 'z-paging-complete-emit',\n  cachePrefixKey: 'z-paging-cache',\n  listCellIndexKey: 'zp_index',\n  listCellIndexUniqueKey: 'zp_unique_index'\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy96LXBhZ2luZy1jb25zdGFudC5qcyJdLCJuYW1lcyI6WyJ2ZXJzaW9uIiwiZGVsYXlUaW1lIiwiZXJyb3JVcGRhdGVLZXkiLCJjb21wbGV0ZVVwZGF0ZUtleSIsImNhY2hlUHJlZml4S2V5IiwibGlzdENlbGxJbmRleEtleSIsImxpc3RDZWxsSW5kZXhVbmlxdWVLZXkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUEsZUFFZTtFQUNkQSxPQUFPLEVBQUUsT0FBTztFQUNoQkMsU0FBUyxFQUFFLEdBQUc7RUFDZEMsY0FBYyxFQUFFLHFCQUFxQjtFQUNyQ0MsaUJBQWlCLEVBQUUsd0JBQXdCO0VBQzNDQyxjQUFjLEVBQUUsZ0JBQWdCO0VBRWhDQyxnQkFBZ0IsRUFBRSxVQUFVO0VBQzVCQyxzQkFBc0IsRUFBRTtBQUN6QixDQUFDO0FBQUEiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbei1wYWdpbmdd5bi46YePXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dmVyc2lvbjogJzIuNS43JyxcclxuXHRkZWxheVRpbWU6IDEwMCxcclxuXHRlcnJvclVwZGF0ZUtleTogJ3otcGFnaW5nLWVycm9yLWVtaXQnLFxyXG5cdGNvbXBsZXRlVXBkYXRlS2V5OiAnei1wYWdpbmctY29tcGxldGUtZW1pdCcsXHJcblx0Y2FjaGVQcmVmaXhLZXk6ICd6LXBhZ2luZy1jYWNoZScsXHJcblx0XHJcblx0bGlzdENlbGxJbmRleEtleTogJ3pwX2luZGV4JyxcclxuXHRsaXN0Q2VsbEluZGV4VW5pcXVlS2V5OiAnenBfdW5pcXVlX2luZGV4J1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/z-paging-utils.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _zPagingConfig = _interopRequireDefault(__webpack_require__(/*! ./z-paging-config */ 48));\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../config/index */ 49));\nvar _zPagingConstant = _interopRequireDefault(__webpack_require__(/*! ./z-paging-constant */ 46));\n// [z-paging]工具类\n\nvar storageKey = 'Z-PAGING-REFRESHER-TIME-STORAGE-KEY';\nvar config = null;\nvar timeoutMap = {};\n\n/*\r\n当z-paging未使用uni_modules管理时，控制台会有警告：WARNING: Module not found: Error: Can't resolve '@/uni_modules/z-paging'...\r\n此时注释下方try中的代码即可\r\n*/\n\ntry {\n  var contextKeys = __webpack_require__(50).keys();\n  if (contextKeys.length) {\n    var suffix = '.js';\n    config = __webpack_require__(51)(\"./z-paging-config\" + suffix);\n  }\n} catch (e) {}\n\n//获取默认配置信息\nfunction gc(key, defaultValue) {\n  if (!config) {\n    if (_index.default && Object.keys(_index.default).length) {\n      config = _index.default;\n    } else {\n      var tempConfig = _zPagingConfig.default.getConfig();\n      if (_zPagingConfig.default && tempConfig) {\n        config = tempConfig;\n      }\n    }\n  }\n  if (!config) return defaultValue;\n  var value = config[_toKebab(key)];\n  return value === undefined ? defaultValue : value;\n}\n\n//获取最终的touch位置\nfunction getTouch(e) {\n  var touch = null;\n  if (e.touches && e.touches.length) {\n    touch = e.touches[0];\n  } else if (e.changedTouches && e.changedTouches.length) {\n    touch = e.changedTouches[0];\n  } else if (e.datail && e.datail != {}) {\n    touch = e.datail;\n  } else {\n    return {\n      touchX: 0,\n      touchY: 0\n    };\n  }\n  return {\n    touchX: touch.clientX,\n    touchY: touch.clientY\n  };\n}\n\n//判断当前手势是否在z-paging内触发\nfunction getTouchFromZPaging(target) {\n  if (target && target.tagName && target.tagName !== 'BODY' && target.tagName !== 'UNI-PAGE-BODY') {\n    var classList = target.classList;\n    if (classList && classList.contains('z-paging-content')) {\n      return {\n        isFromZp: true,\n        isPageScroll: classList.contains('z-paging-content-page'),\n        isReachedTop: classList.contains('z-paging-reached-top')\n      };\n    } else {\n      return getTouchFromZPaging(target.parentNode);\n    }\n  } else {\n    return {\n      isFromZp: false\n    };\n  }\n}\n\n//获取z-paging所在的parent\nfunction getParent(parent) {\n  if (!parent) return null;\n  if (parent.$refs.paging) return parent;\n  return getParent(parent.$parent);\n}\n\n//打印错误信息\nfunction consoleErr(err) {\n  __f__(\"error\", \"[z-paging]\".concat(err), \" at uni_modules/z-paging/components/z-paging/js/z-paging-utils.js:91\");\n}\n\n//延时操作，如果key存在，调用时根据key停止之前的延时操作\nfunction delay(callback) {\n  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _zPagingConstant.default.delayTime;\n  var key = arguments.length > 2 ? arguments[2] : undefined;\n  var timeout = setTimeout(callback, ms);\n  ;\n  if (!!key) {\n    timeoutMap[key] && clearTimeout(timeoutMap[key]);\n    timeoutMap[key] = timeout;\n  }\n  return timeout;\n}\n\n//设置下拉刷新时间\nfunction setRefesrherTime(time, key) {\n  var datas = getRefesrherTime() || {};\n  datas[key] = time;\n  uni.setStorageSync(storageKey, datas);\n}\n\n//获取下拉刷新时间\nfunction getRefesrherTime() {\n  return uni.getStorageSync(storageKey);\n}\n\n//通过下拉刷新标识key获取下拉刷新时间\nfunction getRefesrherTimeByKey(key) {\n  var datas = getRefesrherTime();\n  return datas && datas[key] ? datas[key] : null;\n}\n\n//通过下拉刷新标识key获取下拉刷新时间(格式化之后)\nfunction getRefesrherFormatTimeByKey(key, textMap) {\n  var time = getRefesrherTimeByKey(key);\n  var timeText = time ? _timeFormat(time, textMap) : textMap.none;\n  return \"\".concat(textMap.title).concat(timeText);\n}\n\n//将文本的px或者rpx转为px的值\nfunction convertToPx(text) {\n  var dataType = Object.prototype.toString.call(text);\n  if (dataType === '[object Number]') return text;\n  var isRpx = false;\n  if (text.indexOf('rpx') !== -1 || text.indexOf('upx') !== -1) {\n    text = text.replace('rpx', '').replace('upx', '');\n    isRpx = true;\n  } else if (text.indexOf('px') !== -1) {\n    text = text.replace('px', '');\n  }\n  if (!isNaN(text)) {\n    if (isRpx) return Number(uni.upx2px(text));\n    return Number(text);\n  }\n  return 0;\n}\n\n//获取当前时间\nfunction getTime() {\n  return new Date().getTime();\n}\n\n//获取z-paging实例id\nfunction getInstanceId() {\n  var s = [];\n  var hexDigits = \"0123456789abcdef\";\n  for (var i = 0; i < 10; i++) {\n    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);\n  }\n  return s.join('') + getTime();\n}\n\n//------------------ 私有方法 ------------------------\n//时间格式化\nfunction _timeFormat(time, textMap) {\n  var date = new Date(time);\n  var currentDate = new Date();\n  var dateDay = new Date(time).setHours(0, 0, 0, 0);\n  var currentDateDay = new Date().setHours(0, 0, 0, 0);\n  var disTime = dateDay - currentDateDay;\n  var dayStr = '';\n  var timeStr = _dateTimeFormat(date);\n  if (disTime === 0) {\n    dayStr = textMap.today;\n  } else if (disTime === -86400000) {\n    dayStr = textMap.yesterday;\n  } else {\n    dayStr = _dateDayFormat(date, date.getFullYear() !== currentDate.getFullYear());\n  }\n  return \"\".concat(dayStr, \" \").concat(timeStr);\n}\n\n//date格式化为年月日\nfunction _dateDayFormat(date) {\n  var showYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var year = date.getFullYear();\n  var month = date.getMonth() + 1;\n  var day = date.getDate();\n  return showYear ? \"\".concat(year, \"-\").concat(_fullZeroToTwo(month), \"-\").concat(_fullZeroToTwo(day)) : \"\".concat(_fullZeroToTwo(month), \"-\").concat(_fullZeroToTwo(day));\n}\n\n//data格式化为时分\nfunction _dateTimeFormat(date) {\n  var hour = date.getHours();\n  var minute = date.getMinutes();\n  return \"\".concat(_fullZeroToTwo(hour), \":\").concat(_fullZeroToTwo(minute));\n}\n\n//不满2位在前面填充0\nfunction _fullZeroToTwo(str) {\n  str = str.toString();\n  return str.length === 1 ? '0' + str : str;\n}\n\n//驼峰转短横线\nfunction _toKebab(value) {\n  return value.replace(/([A-Z])/g, \"-$1\").toLowerCase();\n}\nvar _default = {\n  gc: gc,\n  setRefesrherTime: setRefesrherTime,\n  getRefesrherFormatTimeByKey: getRefesrherFormatTimeByKey,\n  getTouch: getTouch,\n  getTouchFromZPaging: getTouchFromZPaging,\n  getParent: getParent,\n  convertToPx: convertToPx,\n  getTime: getTime,\n  getInstanceId: getInstanceId,\n  consoleErr: consoleErr,\n  delay: delay\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy96LXBhZ2luZy11dGlscy5qcyJdLCJuYW1lcyI6WyJzdG9yYWdlS2V5IiwiY29uZmlnIiwidGltZW91dE1hcCIsImNvbnRleHRLZXlzIiwicmVxdWlyZSIsImtleXMiLCJsZW5ndGgiLCJzdWZmaXgiLCJlIiwiZ2MiLCJrZXkiLCJkZWZhdWx0VmFsdWUiLCJ6TG9jYWxDb25maWciLCJPYmplY3QiLCJ0ZW1wQ29uZmlnIiwiekNvbmZpZyIsImdldENvbmZpZyIsInZhbHVlIiwiX3RvS2ViYWIiLCJ1bmRlZmluZWQiLCJnZXRUb3VjaCIsInRvdWNoIiwidG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwiZGF0YWlsIiwidG91Y2hYIiwidG91Y2hZIiwiY2xpZW50WCIsImNsaWVudFkiLCJnZXRUb3VjaEZyb21aUGFnaW5nIiwidGFyZ2V0IiwidGFnTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaXNGcm9tWnAiLCJpc1BhZ2VTY3JvbGwiLCJpc1JlYWNoZWRUb3AiLCJwYXJlbnROb2RlIiwiZ2V0UGFyZW50IiwicGFyZW50IiwiJHJlZnMiLCJwYWdpbmciLCIkcGFyZW50IiwiY29uc29sZUVyciIsImVyciIsImRlbGF5IiwiY2FsbGJhY2siLCJtcyIsImMiLCJkZWxheVRpbWUiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInNldFJlZmVzcmhlclRpbWUiLCJ0aW1lIiwiZGF0YXMiLCJnZXRSZWZlc3JoZXJUaW1lIiwidW5pIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTdG9yYWdlU3luYyIsImdldFJlZmVzcmhlclRpbWVCeUtleSIsImdldFJlZmVzcmhlckZvcm1hdFRpbWVCeUtleSIsInRleHRNYXAiLCJ0aW1lVGV4dCIsIl90aW1lRm9ybWF0Iiwibm9uZSIsInRpdGxlIiwiY29udmVydFRvUHgiLCJ0ZXh0IiwiZGF0YVR5cGUiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpc1JweCIsImluZGV4T2YiLCJyZXBsYWNlIiwiaXNOYU4iLCJOdW1iZXIiLCJ1cHgycHgiLCJnZXRUaW1lIiwiRGF0ZSIsImdldEluc3RhbmNlSWQiLCJzIiwiaGV4RGlnaXRzIiwiaSIsInN1YnN0ciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImpvaW4iLCJkYXRlIiwiY3VycmVudERhdGUiLCJkYXRlRGF5Iiwic2V0SG91cnMiLCJjdXJyZW50RGF0ZURheSIsImRpc1RpbWUiLCJkYXlTdHIiLCJ0aW1lU3RyIiwiX2RhdGVUaW1lRm9ybWF0IiwidG9kYXkiLCJ5ZXN0ZXJkYXkiLCJfZGF0ZURheUZvcm1hdCIsImdldEZ1bGxZZWFyIiwic2hvd1llYXIiLCJ5ZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJfZnVsbFplcm9Ub1R3byIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzdHIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUpBOztBQU1BLElBQU1BLFVBQVUsR0FBRyxxQ0FBcUM7QUFDeEQsSUFBSUMsTUFBTSxHQUFHLElBQUk7QUFDakIsSUFBTUMsVUFBVSxHQUFHLENBQUMsQ0FBQzs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtFQUNILElBQU1DLFdBQVcsR0FBR0MsdUJBQXFFLENBQUNDLElBQUksRUFBRTtFQUNoRyxJQUFJRixXQUFXLENBQUNHLE1BQU0sRUFBRTtJQUN2QixJQUFNQyxNQUFNLEdBQUcsS0FBSztJQUNwQk4sTUFBTSxHQUFHRyx3QkFBUSxtQkFBd0MsR0FBR0csTUFBTSxDQUFDO0VBQ3BFO0FBQ0QsQ0FBQyxDQUFDLE9BQU9DLENBQUMsRUFBRSxDQUFDOztBQUdiO0FBQ0EsU0FBU0MsRUFBRSxDQUFDQyxHQUFHLEVBQUVDLFlBQVksRUFBRTtFQUM5QixJQUFJLENBQUNWLE1BQU0sRUFBRTtJQUNaLElB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RCxLQUFLLEVBQUU7RUFDeEIsT0FBT0EsS0FBSyxDQUFDMEQsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQ3dDLFdBQVcsRUFBRTtBQUN0RDtBQUFDLGVBRWM7RUFDZDFHLEVBQUUsRUFBRkEsRUFBRTtFQUNGNEMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7RUFDaEJRLDJCQUEyQixFQUEzQkEsMkJBQTJCO0VBQzNCekMsUUFBUSxFQUFSQSxRQUFRO0VBQ1JTLG1CQUFtQixFQUFuQkEsbUJBQW1CO0VBQ25CUyxTQUFTLEVBQVRBLFNBQVM7RUFDVDZCLFdBQVcsRUFBWEEsV0FBVztFQUNYWSxPQUFPLEVBQVBBLE9BQU87RUFDUEUsYUFBYSxFQUFiQSxhQUFhO0VBQ2J0QyxVQUFVLEVBQVZBLFVBQVU7RUFDVkUsS0FBSyxFQUFMQTtBQUNELENBQUM7QUFBQSwyQiIsImZpbGUiOiI0Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFt6LXBhZ2luZ13lt6XlhbfnsbtcclxuXHJcbmltcG9ydCB6Q29uZmlnIGZyb20gJy4vei1wYWdpbmctY29uZmlnJ1xyXG5pbXBvcnQgekxvY2FsQ29uZmlnIGZyb20gJy4uL2NvbmZpZy9pbmRleCdcclxuaW1wb3J0IGMgZnJvbSAnLi96LXBhZ2luZy1jb25zdGFudCdcclxuXHJcbmNvbnN0IHN0b3JhZ2VLZXkgPSAnWi1QQUdJTkctUkVGUkVTSEVSLVRJTUUtU1RPUkFHRS1LRVknO1xyXG5sZXQgY29uZmlnID0gbnVsbDtcclxuY29uc3QgdGltZW91dE1hcCA9IHt9O1xyXG5cclxuLypcclxu5b2Tei1wYWdpbmfmnKrkvb/nlKh1bmlfbW9kdWxlc+euoeeQhuaXtu+8jOaOp+WItuWPsOS8muacieitpuWRiu+8mldBUk5JTkc6IE1vZHVsZSBub3QgZm91bmQ6IEVycm9yOiBDYW4ndCByZXNvbHZlICdAL3VuaV9tb2R1bGVzL3otcGFnaW5nJy4uLlxyXG7mraTml7bms6jph4rkuIvmlrl0cnnkuK3nmoTku6PnoIHljbPlj69cclxuKi9cclxuXHJcbnRyeSB7XHJcblx0Y29uc3QgY29udGV4dEtleXMgPSByZXF1aXJlLmNvbnRleHQoJ0AvdW5pX21vZHVsZXMvei1wYWdpbmcnLCBmYWxzZSwgL1xcei1wYWdpbmctY29uZmlnJC8pLmtleXMoKTtcclxuXHRpZiAoY29udGV4dEtleXMubGVuZ3RoKSB7XHJcblx0XHRjb25zdCBzdWZmaXggPSAnLmpzJztcclxuXHRcdGNvbmZpZyA9IHJlcXVpcmUoJ0AvdW5pX21vZHVsZXMvei1wYWdpbmcvei1wYWdpbmctY29uZmlnJyArIHN1ZmZpeCk7XHJcblx0fVxyXG59IGNhdGNoIChlKSB7fVxyXG5cclxuXHJcbi8v6I635Y+W6buY6K6k6YWN572u5L+h5oGvXHJcbmZ1bmN0aW9uIGdjKGtleSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0aWYgKCFjb25maWcpIHtcclxuXHRcdGlmICh6TG9jYWxDb25maWcgJiYgT2JqZWN0LmtleXMoekxvY2FsQ29uZmlnKS5sZW5ndGgpIHtcclxuXHRcdFx0Y29uZmlnID0gekxvY2FsQ29uZmlnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgdGVtcENvbmZpZyA9IHpDb25maWcuZ2V0Q29uZmlnKCk7XHJcblx0XHRcdGlmICh6Q29uZmlnICYmIHRlbXBDb25maWcpIHtcclxuXHRcdFx0XHRjb25maWcgPSB0ZW1wQ29uZmlnO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmICghY29uZmlnKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cdGNvbnN0IHZhbHVlID0gY29uZmlnW190b0tlYmFiKGtleSldO1xyXG5cdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XHJcbn1cclxuXHJcblxyXG4vL+iOt+WPluacgOe7iOeahHRvdWNo5L2N572uXHJcbmZ1bmN0aW9uIGdldFRvdWNoKGUpIHtcclxuXHRsZXQgdG91Y2ggPSBudWxsO1xyXG5cdGlmIChlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCkge1xyXG5cdFx0dG91Y2ggPSBlLnRvdWNoZXNbMF07XHJcblx0fSBlbHNlIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XHJcblx0XHR0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0fSBlbHNlIGlmIChlLmRhdGFpbCAmJiBlLmRhdGFpbCAhPSB7fSkge1xyXG5cdFx0dG91Y2ggPSBlLmRhdGFpbDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dG91Y2hYOiAwLFxyXG5cdFx0XHR0b3VjaFk6IDBcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHtcclxuXHRcdHRvdWNoWDogdG91Y2guY2xpZW50WCxcclxuXHRcdHRvdWNoWTogdG91Y2guY2xpZW50WVxyXG5cdH07XHJcbn1cclxuXHJcbi8v5Yik5pat5b2T5YmN5omL5Yq/5piv5ZCm5Zyoei1wYWdpbmflhoXop6blj5FcclxuZnVuY3Rpb24gZ2V0VG91Y2hGcm9tWlBhZ2luZyh0YXJnZXQpIHtcclxuXHRpZiAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lICYmIHRhcmdldC50YWdOYW1lICE9PSAnQk9EWScgJiYgdGFyZ2V0LnRhZ05hbWUgIT09ICdVTkktUEFHRS1CT0RZJykge1xyXG5cdFx0Y29uc3QgY2xhc3NMaXN0ID0gdGFyZ2V0LmNsYXNzTGlzdDtcclxuXHRcdGlmIChjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnRhaW5zKCd6LXBhZ2luZy1jb250ZW50JykpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpc0Zyb21acDogdHJ1ZSwgXHJcblx0XHRcdFx0aXNQYWdlU2Nyb2xsOiBjbGFzc0xpc3QuY29udGFpbnMoJ3otcGFnaW5nLWNvbnRlbnQtcGFnZScpLCBcclxuXHRcdFx0XHRpc1JlYWNoZWRUb3A6IGNsYXNzTGlzdC5jb250YWlucygnei1wYWdpbmctcmVhY2hlZC10b3AnKVxyXG5cdFx0XHR9O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGdldFRvdWNoRnJvbVpQYWdpbmcodGFyZ2V0LnBhcmVudE5vZGUpO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4geyBpc0Zyb21acDogZmFsc2UgfTtcclxuXHR9XHJcbn1cclxuXHJcbi8v6I635Y+Wei1wYWdpbmfmiYDlnKjnmoRwYXJlbnRcclxuZnVuY3Rpb24gZ2V0UGFyZW50KHBhcmVudCkge1xyXG5cdGlmICghcGFyZW50KSByZXR1cm4gbnVsbDtcclxuXHRpZiAocGFyZW50LiRyZWZzLnBhZ2luZykgcmV0dXJuIHBhcmVudDtcclxuXHRyZXR1cm4gZ2V0UGFyZW50KHBhcmVudC4kcGFyZW50KTtcclxufVxyXG5cclxuLy/miZPljbDplJnor6/kv6Hmga9cclxuZnVuY3Rpb24gY29uc29sZUVycihlcnIpIHtcclxuXHRjb25zb2xlLmVycm9yKGBbei1wYWdpbmddJHtlcnJ9YCk7XHJcbn1cclxuXHJcbi8v5bu25pe25pON5L2c77yM5aaC5p6ca2V55a2Y5Zyo77yM6LCD55So5pe25qC55o2ua2V55YGc5q2i5LmL5YmN55qE5bu25pe25pON5L2cXHJcbmZ1bmN0aW9uIGRlbGF5KGNhbGxiYWNrLCBtcyA9IGMuZGVsYXlUaW1lLCBrZXkpIHtcclxuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChjYWxsYmFjaywgbXMpOztcclxuXHRpZiAoISFrZXkpIHtcclxuXHRcdHRpbWVvdXRNYXBba2V5XSAmJiBjbGVhclRpbWVvdXQodGltZW91dE1hcFtrZXldKTtcclxuXHRcdHRpbWVvdXRNYXBba2V5XSA9IHRpbWVvdXQ7XHJcblx0fVxyXG5cdHJldHVybiB0aW1lb3V0O1xyXG59XHJcblxyXG4vL+iuvue9ruS4i+aLieWIt+aWsOaXtumXtFxyXG5mdW5jdGlvbiBzZXRSZWZlc3JoZXJUaW1lKHRpbWUsIGtleSkge1xyXG5cdGNvbnN0IGRhdGFzID0gZ2V0UmVmZXNyaGVyVGltZSgpIHx8IHt9O1xyXG5cdGRhdGFzW2tleV0gPSB0aW1lO1xyXG5cdHVuaS5zZXRTdG9yYWdlU3luYyhzdG9yYWdlS2V5LCBkYXRhcyk7XHJcbn1cclxuXHJcbi8v6I635Y+W5LiL5ouJ5Yi35paw5pe26Ze0XHJcbmZ1bmN0aW9uIGdldFJlZmVzcmhlclRpbWUoKSB7XHJcblx0cmV0dXJuIHVuaS5nZXRTdG9yYWdlU3luYyhzdG9yYWdlS2V5KTtcclxufVxyXG5cclxuLy/pgJrov4fkuIvmi4nliLfmlrDmoIfor4ZrZXnojrflj5bkuIvmi4nliLfmlrDml7bpl7RcclxuZnVuY3Rpb24gZ2V0UmVmZXNyaGVyVGltZUJ5S2V5KGtleSkge1xyXG5cdGNvbnN0IGRhdGFzID0gZ2V0UmVmZXNyaGVyVGltZSgpO1xyXG5cdHJldHVybiBkYXRhcyAmJiBkYXRhc1trZXldID8gZGF0YXNba2V5XSA6IG51bGw7XHJcbn1cclxuXHJcbi8v6YCa6L+H5LiL5ouJ5Yi35paw5qCH6K+Ga2V56I635Y+W5LiL5ouJ5Yi35paw5pe26Ze0KOagvOW8j+WMluS5i+WQjilcclxuZnVuY3Rpb24gZ2V0UmVmZXNyaGVyRm9ybWF0VGltZUJ5S2V5KGtleSwgdGV4dE1hcCkge1xyXG5cdGNvbnN0IHRpbWUgPSBnZXRSZWZlc3JoZXJUaW1lQnlLZXkoa2V5KTtcclxuXHRjb25zdCB0aW1lVGV4dCA9IHRpbWUgPyBfdGltZUZvcm1hdCh0aW1lLCB0ZXh0TWFwKSA6IHRleHRNYXAubm9uZTtcclxuXHRyZXR1cm4gYCR7dGV4dE1hcC50aXRsZX0ke3RpbWVUZXh0fWA7XHJcbn1cclxuXHJcbi8v5bCG5paH5pys55qEcHjmiJbogIVycHjovazkuLpweOeahOWAvFxyXG5mdW5jdGlvbiBjb252ZXJ0VG9QeCh0ZXh0KSB7XHJcblx0Y29uc3QgZGF0YVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGV4dCk7XHJcblx0aWYgKGRhdGFUeXBlID09PSAnW29iamVjdCBOdW1iZXJdJykgcmV0dXJuIHRleHQ7XHJcblx0bGV0IGlzUnB4ID0gZmFsc2U7XHJcblx0aWYgKHRleHQuaW5kZXhPZigncnB4JykgIT09IC0xIHx8IHRleHQuaW5kZXhPZigndXB4JykgIT09IC0xKSB7XHJcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKCdycHgnLCAnJykucmVwbGFjZSgndXB4JywgJycpO1xyXG5cdFx0aXNScHggPSB0cnVlO1xyXG5cdH0gZWxzZSBpZiAodGV4dC5pbmRleE9mKCdweCcpICE9PSAtMSkge1xyXG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSgncHgnLCAnJyk7XHJcblx0fVxyXG5cdGlmICghaXNOYU4odGV4dCkpIHtcclxuXHRcdGlmIChpc1JweCkgcmV0dXJuIE51bWJlcih1bmkudXB4MnB4KHRleHQpKTtcclxuXHRcdHJldHVybiBOdW1iZXIodGV4dCk7XHJcblx0fVxyXG5cdHJldHVybiAwO1xyXG59XHJcblxyXG4vL+iOt+WPluW9k+WJjeaXtumXtFxyXG5mdW5jdGlvbiBnZXRUaW1lKCkge1xyXG5cdHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG59XHJcblxyXG4vL+iOt+WPlnotcGFnaW5n5a6e5L6LaWRcclxuZnVuY3Rpb24gZ2V0SW5zdGFuY2VJZCgpIHtcclxuICAgIGNvbnN0IHMgPSBbXTtcclxuICAgIGNvbnN0IGhleERpZ2l0cyA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgc1tpXSA9IGhleERpZ2l0cy5zdWJzdHIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHgxMCksIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHMuam9pbignJykgKyBnZXRUaW1lKCk7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tIOengeacieaWueazlSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy/ml7bpl7TmoLzlvI/ljJZcclxuZnVuY3Rpb24gX3RpbWVGb3JtYXQodGltZSwgdGV4dE1hcCkge1xyXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuXHRjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0Y29uc3QgZGF0ZURheSA9IG5ldyBEYXRlKHRpbWUpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG5cdGNvbnN0IGN1cnJlbnREYXRlRGF5ID0gbmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuXHRjb25zdCBkaXNUaW1lID0gZGF0ZURheSAtIGN1cnJlbnREYXRlRGF5O1xyXG5cdGxldCBkYXlTdHIgPSAnJztcclxuXHRjb25zdCB0aW1lU3RyID0gX2RhdGVUaW1lRm9ybWF0KGRhdGUpO1xyXG5cdGlmIChkaXNUaW1lID09PSAwKSB7XHJcblx0XHRkYXlTdHIgPSB0ZXh0TWFwLnRvZGF5O1xyXG5cdH0gZWxzZSBpZiAoZGlzVGltZSA9PT0gLTg2NDAwMDAwKSB7XHJcblx0XHRkYXlTdHIgPSB0ZXh0TWFwLnllc3RlcmRheTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZGF5U3RyID0gX2RhdGVEYXlGb3JtYXQoZGF0ZSwgZGF0ZS5nZXRGdWxsWWVhcigpICE9PSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuXHR9XHJcblx0cmV0dXJuIGAke2RheVN0cn0gJHt0aW1lU3RyfWA7XHJcbn1cclxuXHJcbi8vZGF0ZeagvOW8j+WMluS4uuW5tOaciOaXpVxyXG5mdW5jdGlvbiBfZGF0ZURheUZvcm1hdChkYXRlLCBzaG93WWVhciA9IHRydWUpIHtcclxuXHRjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuXHRyZXR1cm4gc2hvd1llYXIgPyBgJHt5ZWFyfS0ke19mdWxsWmVyb1RvVHdvKG1vbnRoKX0tJHtfZnVsbFplcm9Ub1R3byhkYXkpfWAgOiBgJHtfZnVsbFplcm9Ub1R3byhtb250aCl9LSR7X2Z1bGxaZXJvVG9Ud28oZGF5KX1gO1xyXG59XHJcblxyXG4vL2RhdGHmoLzlvI/ljJbkuLrml7bliIZcclxuZnVuY3Rpb24gX2RhdGVUaW1lRm9ybWF0KGRhdGUpIHtcclxuXHRjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG5cdGNvbnN0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG5cdHJldHVybiBgJHtfZnVsbFplcm9Ub1R3byhob3VyKX06JHtfZnVsbFplcm9Ub1R3byhtaW51dGUpfWA7XHJcbn1cclxuXHJcbi8v5LiN5ruhMuS9jeWcqOWJjemdouWhq+WFhTBcclxuZnVuY3Rpb24gX2Z1bGxaZXJvVG9Ud28oc3RyKSB7XHJcblx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XHJcblx0cmV0dXJuIHN0ci5sZW5ndGggPT09IDEgPyAnMCcgKyBzdHIgOiBzdHI7XHJcbn1cclxuXHJcbi8v6am85bOw6L2s55+t5qiq57q/XHJcbmZ1bmN0aW9uIF90b0tlYmFiKHZhbHVlKSB7XHJcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoLyhbQS1aXSkvZywgXCItJDFcIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGdjLFxyXG5cdHNldFJlZmVzcmhlclRpbWUsXHJcblx0Z2V0UmVmZXNyaGVyRm9ybWF0VGltZUJ5S2V5LFxyXG5cdGdldFRvdWNoLFxyXG5cdGdldFRvdWNoRnJvbVpQYWdpbmcsXHJcblx0Z2V0UGFyZW50LFxyXG5cdGNvbnZlcnRUb1B4LFxyXG5cdGdldFRpbWUsXHJcblx0Z2V0SW5zdGFuY2VJZCxcclxuXHRjb25zb2xlRXJyLFxyXG5cdGRlbGF5XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///47\n");

/***/ }),
/* 48 */
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/z-paging-config.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// [z-paging]处理main.js中的配置信息工具\n\nvar config = null;\nvar getedStorage = false;\nvar storageKey = 'Z-PAGING-CONFIG-STORAGE-KEY';\nfunction setConfig(value) {\n  uni.setStorageSync(storageKey, value);\n}\nfunction getConfig() {\n  if (getedStorage) return config;\n  config = uni.getStorageSync(storageKey);\n  getedStorage = true;\n  return config;\n}\nvar _default = {\n  setConfig: setConfig,\n  getConfig: getConfig\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy96LXBhZ2luZy1jb25maWcuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiZ2V0ZWRTdG9yYWdlIiwic3RvcmFnZUtleSIsInNldENvbmZpZyIsInZhbHVlIiwidW5pIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRDb25maWciLCJnZXRTdG9yYWdlU3luYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQUk7QUFDakIsSUFBSUMsWUFBWSxHQUFHLEtBQUs7QUFDeEIsSUFBTUMsVUFBVSxHQUFHLDZCQUE2QjtBQUVoRCxTQUFTQyxTQUFTLENBQUNDLEtBQUssRUFBRTtFQUN6QkMsR0FBRyxDQUFDQyxjQUFjLENBQUNKLFVBQVUsRUFBRUUsS0FBSyxDQUFDO0FBQ3RDO0FBRUEsU0FBU0csU0FBUyxHQUFHO0VBQ3BCLElBQUlOLFlBQVksRUFBRSxPQUFPRCxNQUFNO0VBQy9CQSxNQUFNLEdBQUdLLEdBQUcsQ0FBQ0csY0FBYyxDQUFDTixVQUFVLENBQUM7RUFDdkNELFlBQVksR0FBRyxJQUFJO0VBQ25CLE9BQU9ELE1BQU07QUFDZDtBQUFDLGVBRWM7RUFDZEcsU0FBUyxFQUFUQSxTQUFTO0VBQ1RJLFNBQVMsRUFBVEE7QUFDRCxDQUFDO0FBQUEiLCJmaWxlIjoiNDguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbei1wYWdpbmdd5aSE55CGbWFpbi5qc+S4reeahOmFjee9ruS/oeaBr+W3peWFt1xyXG5cclxubGV0IGNvbmZpZyA9IG51bGw7XHJcbmxldCBnZXRlZFN0b3JhZ2UgPSBmYWxzZTtcclxuY29uc3Qgc3RvcmFnZUtleSA9ICdaLVBBR0lORy1DT05GSUctU1RPUkFHRS1LRVknXHJcblxyXG5mdW5jdGlvbiBzZXRDb25maWcodmFsdWUpIHtcclxuXHR1bmkuc2V0U3RvcmFnZVN5bmMoc3RvcmFnZUtleSwgdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb25maWcoKSB7XHJcblx0aWYgKGdldGVkU3RvcmFnZSkgcmV0dXJuIGNvbmZpZztcclxuXHRjb25maWcgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoc3RvcmFnZUtleSk7XHJcblx0Z2V0ZWRTdG9yYWdlID0gdHJ1ZTtcclxuXHRyZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0c2V0Q29uZmlnLFxyXG5cdGdldENvbmZpZ1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/config/index.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// z-paging全局配置文件，注意避免更新时此文件被覆盖，若被覆盖，可在此文件中右键->点击本地历史记录，找回覆盖前的配置\nvar _default = {};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9jb25maWcvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxlQUVlLENBQUMsQ0FBQztBQUFBIiwiZmlsZSI6IjQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gei1wYWdpbmflhajlsYDphY3nva7mlofku7bvvIzms6jmhI/pgb/lhY3mm7TmlrDml7bmraTmlofku7booqvopobnm5bvvIzoi6Xooqvopobnm5bvvIzlj6/lnKjmraTmlofku7bkuK3lj7PplK4tPueCueWHu+acrOWcsOWOhuWPsuiusOW9le+8jOaJvuWbnuimhuebluWJjeeahOmFjee9rlxuXG5leHBvcnQgZGVmYXVsdCB7fSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging sync nonrecursive \z-paging-config$ ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 50;

/***/ }),
/* 51 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging sync ^\.\/z\-paging\-config.*$ ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 51;

/***/ }),
/* 52 */
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-refresh.vue ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _z_paging_refresh_vue_vue_type_template_id_9e33a538_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./z-paging-refresh.vue?vue&type=template&id=9e33a538&scoped=true& */ 53);\n/* harmony import */ var _z_paging_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./z-paging-refresh.vue?vue&type=script&lang=js& */ 55);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _z_paging_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _z_paging_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./z-paging-refresh.vue?vue&type=style&index=0&id=9e33a538&scoped=true&lang=css& */ 58).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./z-paging-refresh.vue?vue&type=style&index=0&id=9e33a538&scoped=true&lang=css& */ 58).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _z_paging_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _z_paging_refresh_vue_vue_type_template_id_9e33a538_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _z_paging_refresh_vue_vue_type_template_id_9e33a538_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"9e33a538\",\n  \"8a94727e\",\n  false,\n  _z_paging_refresh_vue_vue_type_template_id_9e33a538_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/z-paging/components/z-paging/components/z-paging-refresh.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlGQUFpRjtBQUNySSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseUZBQWlGO0FBQzFJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vei1wYWdpbmctcmVmcmVzaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWUzM2E1Mzgmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi96LXBhZ2luZy1yZWZyZXNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vei1wYWdpbmctcmVmcmVzaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi96LXBhZ2luZy1yZWZyZXNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllMzNhNTM4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi96LXBhZ2luZy1yZWZyZXNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllMzNhNTM4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjllMzNhNTM4XCIsXG4gIFwiOGE5NDcyN2VcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9jb21wb25lbnRzL3otcGFnaW5nLXJlZnJlc2gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///52\n");

/***/ }),
/* 53 */
/*!*************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-refresh.vue?vue&type=template&id=9e33a538&scoped=true& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_template_id_9e33a538_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-paging-refresh.vue?vue&type=template&id=9e33a538&scoped=true& */ 54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_template_id_9e33a538_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_template_id_9e33a538_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_template_id_9e33a538_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_template_id_9e33a538_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 54 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-refresh.vue?vue&type=template&id=9e33a538&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticStyle: { height: "100%" } }, [
    _c(
      "view",
      {
        class: _vm.showUpdateTime
          ? "zp-r-container zp-r-container-padding"
          : "zp-r-container",
      },
      [
        _c(
          "view",
          { staticClass: ["zp-r-left"] },
          [
            _vm.status !== _vm.R.Loading
              ? _c("u-image", {
                  class: _vm.leftImageClass,
                  style: [_vm.leftImageStyle, _vm.imgStyle],
                  attrs: { src: _vm.leftImageSrc },
                })
              : _c(
                  "view",
                  {
                    style: [
                      {
                        "margin-right": _vm.showUpdateTime ? "18rpx" : "12rpx",
                      },
                    ],
                  },
                  [
                    _c("loading-indicator", {
                      class: _vm.isIos
                        ? "zp-loading-image-ios"
                        : "zp-loading-image-android",
                      style: [
                        { color: _vm.zTheme.indicator[_vm.ts] },
                        _vm.imgStyle,
                      ],
                      attrs: { animating: true },
                    }),
                  ]
                ),
          ],
          1
        ),
        _c("view", { staticClass: ["zp-r-right"] }, [
          _c(
            "u-text",
            {
              staticClass: ["zp-r-right-text"],
              style: [_vm.rightTextStyle, _vm.titleStyle],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v(_vm._s(_vm.currentTitle))]
          ),
          _vm.showUpdateTime && _vm.refresherTimeText.length
            ? _c(
                "u-text",
                {
                  staticClass: ["zp-r-right-text", "zp-r-right-time-text"],
                  style: [_vm.rightTextStyle, _vm.updateTimeStyle],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v(_vm._s(_vm.refresherTimeText))]
              )
            : _vm._e(),
        ]),
      ]
    ),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 55 */
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-refresh.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-paging-refresh.vue?vue&type=script&lang=js& */ 56);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThhLENBQWdCLDBkQUFHLEVBQUMiLCJmaWxlIjoiNTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vei1wYWdpbmctcmVmcmVzaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi96LXBhZ2luZy1yZWZyZXNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-refresh.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _zPagingStatic = _interopRequireDefault(__webpack_require__(/*! ../js/z-paging-static */ 38));\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! ../js/z-paging-utils */ 47));\nvar _zPagingEnum = _interopRequireDefault(__webpack_require__(/*! ../js/z-paging-enum */ 57));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  name: 'z-paging-refresh',\n  data: function data() {\n    return {\n      R: _zPagingEnum.default.Refresher,\n      isIos: uni.getSystemInfoSync().platform === 'ios',\n      refresherTimeText: '',\n      zTheme: {\n        title: {\n          white: '#efefef',\n          black: '#555555'\n        },\n        arrow: {\n          white: _zPagingStatic.default.base64ArrowWhite,\n          black: _zPagingStatic.default.base64Arrow\n        },\n        flower: {\n          white: _zPagingStatic.default.base64FlowerWhite,\n          black: _zPagingStatic.default.base64Flower\n        },\n        success: {\n          white: _zPagingStatic.default.base64SuccessWhite,\n          black: _zPagingStatic.default.base64Success\n        },\n        indicator: {\n          white: '#eeeeee',\n          black: '#777777'\n        }\n      }\n    };\n  },\n  props: ['status', 'defaultThemeStyle', 'defaultText', 'pullingText', 'refreshingText', 'completeText', 'defaultImg', 'pullingImg', 'refreshingImg', 'completeImg', 'refreshingAnimated', 'showUpdateTime', 'updateTimeKey', 'imgStyle', 'titleStyle', 'updateTimeStyle', 'updateTimeTextMap'],\n  computed: {\n    ts: function ts() {\n      return this.defaultThemeStyle;\n    },\n    statusTextArr: function statusTextArr() {\n      this.updateTime();\n      return [this.defaultText, this.pullingText, this.refreshingText, this.completeText];\n    },\n    currentTitle: function currentTitle() {\n      return this.statusTextArr[this.status] || this.defaultText;\n    },\n    leftImageClass: function leftImageClass() {\n      if (this.status === this.R.Complete) return 'zp-r-left-image-pre-size';\n      return \"zp-r-left-image zp-r-left-image-pre-size \".concat(this.status === this.R.Default ? 'zp-r-arrow-down' : 'zp-r-arrow-top');\n    },\n    leftImageStyle: function leftImageStyle() {\n      var showUpdateTime = this.showUpdateTime;\n      var size = showUpdateTime ? '36rpx' : '30rpx';\n      return {\n        width: size,\n        height: size,\n        'margin-right': showUpdateTime ? '20rpx' : '9rpx'\n      };\n    },\n    leftImageSrc: function leftImageSrc() {\n      var R = this.R;\n      var status = this.status;\n      if (status === R.Default) {\n        if (!!this.defaultImg) return this.defaultImg;\n        return this.zTheme.arrow[this.ts];\n      } else if (status === R.ReleaseToRefresh) {\n        if (!!this.pullingImg) return this.pullingImg;\n        if (!!this.defaultImg) return this.defaultImg;\n        return this.zTheme.arrow[this.ts];\n      } else if (status === R.Loading) {\n        if (!!this.refreshingImg) return this.refreshingImg;\n        return this.zTheme.flower[this.ts];\n        ;\n      } else if (status === R.Complete) {\n        if (!!this.completeImg) return this.completeImg;\n        return this.zTheme.success[this.ts];\n        ;\n      }\n      return '';\n    },\n    rightTextStyle: function rightTextStyle() {\n      var stl = {};\n      var textHeight = this.showUpdateTime ? '40rpx' : '80rpx';\n      stl = {\n        'height': textHeight,\n        'line-height': textHeight\n      };\n      stl['color'] = this.zTheme.title[this.ts];\n      return stl;\n    }\n  },\n  methods: {\n    updateTime: function updateTime() {\n      if (this.showUpdateTime) {\n        this.refresherTimeText = _zPagingUtils.default.getRefesrherFormatTimeByKey(this.updateTimeKey, this.updateTimeTextMap);\n      }\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9jb21wb25lbnRzL3otcGFnaW5nLXJlZnJlc2gudnVlIl0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwiUiIsImlzSW9zIiwicmVmcmVzaGVyVGltZVRleHQiLCJ6VGhlbWUiLCJ0aXRsZSIsIndoaXRlIiwiYmxhY2siLCJhcnJvdyIsImZsb3dlciIsInN1Y2Nlc3MiLCJpbmRpY2F0b3IiLCJwcm9wcyIsImNvbXB1dGVkIiwidHMiLCJzdGF0dXNUZXh0QXJyIiwiY3VycmVudFRpdGxlIiwibGVmdEltYWdlQ2xhc3MiLCJsZWZ0SW1hZ2VTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdEltYWdlU3JjIiwicmlnaHRUZXh0U3R5bGUiLCJzdGwiLCJtZXRob2RzIiwidXBkYXRlVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRUE7RUFDQUE7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztRQUNBQztVQUFBQztVQUFBQztRQUFBO1FBQ0FDO1VBQUFGO1VBQUFDO1FBQUE7UUFDQUU7VUFBQUg7VUFBQUM7UUFBQTtRQUNBRztVQUFBSjtVQUFBQztRQUFBO1FBQ0FJO1VBQUFMO1VBQUFDO1FBQUE7TUFDQTtJQUNBO0VBQ0E7RUFDQUssbUlBQ0EsMEpBQ0E7RUFDQUM7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtRQUFBQztRQUFBQztRQUFBO01BQUE7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtRQUNBO1FBQ0E7TUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO1FBQ0E7UUFDQTtRQUFBO01BQ0E7UUFDQTtRQUNBO1FBQUE7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUVBO01BQ0FDO1FBQUE7UUFBQTtNQUFBO01BRUFBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIFt6LXBhZ2luZ13kuIvmi4nliLfmlrB2aWV3IC0tPlxuPHRlbXBsYXRlPlxuXHQ8dmlldyBzdHlsZT1cImhlaWdodDogMTAwJTtcIj5cblx0XHQ8dmlldyA6Y2xhc3M9XCJzaG93VXBkYXRlVGltZT8nenAtci1jb250YWluZXIgenAtci1jb250YWluZXItcGFkZGluZyc6J3pwLXItY29udGFpbmVyJ1wiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ6cC1yLWxlZnRcIj5cblx0XHRcdFx0PGltYWdlIHYtaWY9XCJzdGF0dXMhPT1SLkxvYWRpbmdcIiA6Y2xhc3M9XCJsZWZ0SW1hZ2VDbGFzc1wiIDpzdHlsZT1cIltsZWZ0SW1hZ2VTdHlsZSxpbWdTdHlsZV1cIiA6c3JjPVwibGVmdEltYWdlU3JjXCIgLz5cblx0XHRcdFx0PCEtLSAjaWZuZGVmIEFQUC1OVlVFIC0tPlxuXHRcdFx0XHQ8aW1hZ2Ugdi1lbHNlIDpjbGFzcz1cInsnenAtbGluZS1sb2FkaW5nLWltYWdlJzpyZWZyZXNoaW5nQW5pbWF0ZWQsJ3pwLXItbGVmdC1pbWFnZSc6dHJ1ZX1cIiA6c3R5bGU9XCJbbGVmdEltYWdlU3R5bGUsaW1nU3R5bGVdXCIgOnNyYz1cImxlZnRJbWFnZVNyY1wiIC8+XG5cdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdFx0XHQ8IS0tICNpZmRlZiBBUFAtTlZVRSAtLT5cblx0XHRcdFx0PHZpZXcgdi1lbHNlIDpzdHlsZT1cIlt7J21hcmdpbi1yaWdodCc6c2hvd1VwZGF0ZVRpbWU/JzE4cnB4JzonMTJycHgnfV1cIj5cblx0XHRcdFx0XHQ8bG9hZGluZy1pbmRpY2F0b3IgOmNsYXNzPVwiaXNJb3M/J3pwLWxvYWRpbmctaW1hZ2UtaW9zJzonenAtbG9hZGluZy1pbWFnZS1hbmRyb2lkJ1wiIFxuXHRcdFx0XHRcdDpzdHlsZT1cIlt7Y29sb3I6elRoZW1lLmluZGljYXRvclt0c119LGltZ1N0eWxlXVwiIDphbmltYXRpbmc9XCJ0cnVlXCIgLz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwienAtci1yaWdodFwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInpwLXItcmlnaHQtdGV4dFwiIDpzdHlsZT1cIltyaWdodFRleHRTdHlsZSx0aXRsZVN0eWxlXVwiPnt7Y3VycmVudFRpdGxlfX08L3RleHQ+XG5cdFx0XHRcdDx0ZXh0IHYtaWY9XCJzaG93VXBkYXRlVGltZSYmcmVmcmVzaGVyVGltZVRleHQubGVuZ3RoXCIgY2xhc3M9XCJ6cC1yLXJpZ2h0LXRleHQgenAtci1yaWdodC10aW1lLXRleHRcIiA6c3R5bGU9XCJbcmlnaHRUZXh0U3R5bGUsdXBkYXRlVGltZVN0eWxlXVwiPlxuXHRcdFx0XHRcdHt7cmVmcmVzaGVyVGltZVRleHR9fVxuXHRcdFx0XHQ8L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0aW1wb3J0IHpTdGF0aWMgZnJvbSAnLi4vanMvei1wYWdpbmctc3RhdGljJ1xuXHRpbXBvcnQgdSBmcm9tICcuLi9qcy96LXBhZ2luZy11dGlscydcblx0aW1wb3J0IEVudW0gZnJvbSAnLi4vanMvei1wYWdpbmctZW51bSdcblx0XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnei1wYWdpbmctcmVmcmVzaCcsXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFI6IEVudW0uUmVmcmVzaGVyLFxuXHRcdFx0XHRpc0lvczogdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT09ICdpb3MnLFxuXHRcdFx0XHRyZWZyZXNoZXJUaW1lVGV4dDogJycsXG5cdFx0XHRcdHpUaGVtZToge1xuXHRcdFx0XHRcdHRpdGxlOiB7IHdoaXRlOiAnI2VmZWZlZicsIGJsYWNrOiAnIzU1NTU1NScgfSxcblx0XHRcdFx0XHRhcnJvdzogeyB3aGl0ZTogelN0YXRpYy5iYXNlNjRBcnJvd1doaXRlLCBibGFjazogelN0YXRpYy5iYXNlNjRBcnJvdyB9LFxuXHRcdFx0XHRcdGZsb3dlcjogeyB3aGl0ZTogelN0YXRpYy5iYXNlNjRGbG93ZXJXaGl0ZSwgYmxhY2s6IHpTdGF0aWMuYmFzZTY0Rmxvd2VyIH0sXG5cdFx0XHRcdFx0c3VjY2VzczogeyB3aGl0ZTogelN0YXRpYy5iYXNlNjRTdWNjZXNzV2hpdGUsIGJsYWNrOiB6U3RhdGljLmJhc2U2NFN1Y2Nlc3MgfSxcblx0XHRcdFx0XHRpbmRpY2F0b3I6IHsgd2hpdGU6ICcjZWVlZWVlJywgYmxhY2s6ICcjNzc3Nzc3JyB9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fSxcblx0XHRwcm9wczogWydzdGF0dXMnLCAnZGVmYXVsdFRoZW1lU3R5bGUnLCAnZGVmYXVsdFRleHQnLCAncHVsbGluZ1RleHQnLCAncmVmcmVzaGluZ1RleHQnLCAnY29tcGxldGVUZXh0JywgJ2RlZmF1bHRJbWcnLCAncHVsbGluZ0ltZycsIFxuXHRcdFx0J3JlZnJlc2hpbmdJbWcnLCAnY29tcGxldGVJbWcnLCAncmVmcmVzaGluZ0FuaW1hdGVkJywgJ3Nob3dVcGRhdGVUaW1lJywgJ3VwZGF0ZVRpbWVLZXknLCAnaW1nU3R5bGUnLCAndGl0bGVTdHlsZScsICd1cGRhdGVUaW1lU3R5bGUnLCAndXBkYXRlVGltZVRleHRNYXAnXG5cdFx0XSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0dHMoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmRlZmF1bHRUaGVtZVN0eWxlO1xuXHRcdFx0fSxcblx0XHRcdHN0YXR1c1RleHRBcnIoKSB7XG5cdFx0XHRcdHRoaXMudXBkYXRlVGltZSgpO1xuXHRcdFx0XHRyZXR1cm4gW3RoaXMuZGVmYXVsdFRleHQsdGhpcy5wdWxsaW5nVGV4dCx0aGlzLnJlZnJlc2hpbmdUZXh0LHRoaXMuY29tcGxldGVUZXh0XTtcblx0XHRcdH0sXG5cdFx0XHRjdXJyZW50VGl0bGUoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnN0YXR1c1RleHRBcnJbdGhpcy5zdGF0dXNdIHx8IHRoaXMuZGVmYXVsdFRleHQ7XG5cdFx0XHR9LFxuXHRcdFx0bGVmdEltYWdlQ2xhc3MoKSB7XG5cdFx0XHRcdGlmICh0aGlzLnN0YXR1cyA9PT0gdGhpcy5SLkNvbXBsZXRlKSByZXR1cm4gJ3pwLXItbGVmdC1pbWFnZS1wcmUtc2l6ZSc7XG5cdFx0XHRcdHJldHVybiBgenAtci1sZWZ0LWltYWdlIHpwLXItbGVmdC1pbWFnZS1wcmUtc2l6ZSAke3RoaXMuc3RhdHVzID09PSB0aGlzLlIuRGVmYXVsdCA/ICd6cC1yLWFycm93LWRvd24nIDogJ3pwLXItYXJyb3ctdG9wJ31gO1xuXHRcdFx0fSxcblx0XHRcdGxlZnRJbWFnZVN0eWxlKCkge1xuXHRcdFx0XHRjb25zdCBzaG93VXBkYXRlVGltZSA9IHRoaXMuc2hvd1VwZGF0ZVRpbWU7XG5cdFx0XHRcdGNvbnN0IHNpemUgPSBzaG93VXBkYXRlVGltZSA/ICczNnJweCcgOiAnMzBycHgnO1xuXHRcdFx0XHRyZXR1cm4ge3dpZHRoOiBzaXplLGhlaWdodDogc2l6ZSwnbWFyZ2luLXJpZ2h0Jzogc2hvd1VwZGF0ZVRpbWUgPyAnMjBycHgnIDogJzlycHgnfTtcblx0XHRcdH0sXG5cdFx0XHRsZWZ0SW1hZ2VTcmMoKSB7XG5cdFx0XHRcdGNvbnN0IFIgPSB0aGlzLlI7XG5cdFx0XHRcdGNvbnN0IHN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuXHRcdFx0XHRpZiAoc3RhdHVzID09PSBSLkRlZmF1bHQpIHtcblx0XHRcdFx0XHRpZiAoISF0aGlzLmRlZmF1bHRJbWcpIHJldHVybiB0aGlzLmRlZmF1bHRJbWc7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuelRoZW1lLmFycm93W3RoaXMudHNdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHN0YXR1cyAgPT09IFIuUmVsZWFzZVRvUmVmcmVzaCkge1xuXHRcdFx0XHRcdGlmICghIXRoaXMucHVsbGluZ0ltZykgcmV0dXJuIHRoaXMucHVsbGluZ0ltZztcblx0XHRcdFx0XHRpZiAoISF0aGlzLmRlZmF1bHRJbWcpIHJldHVybiB0aGlzLmRlZmF1bHRJbWc7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuelRoZW1lLmFycm93W3RoaXMudHNdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHN0YXR1cyAgPT09IFIuTG9hZGluZykge1xuXHRcdFx0XHRcdGlmICghIXRoaXMucmVmcmVzaGluZ0ltZykgcmV0dXJuIHRoaXMucmVmcmVzaGluZ0ltZztcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy56VGhlbWUuZmxvd2VyW3RoaXMudHNdOztcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0dXMgID09PSBSLkNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0aWYgKCEhdGhpcy5jb21wbGV0ZUltZykgcmV0dXJuIHRoaXMuY29tcGxldGVJbWc7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuelRoZW1lLnN1Y2Nlc3NbdGhpcy50c107O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH0sXG5cdFx0XHRyaWdodFRleHRTdHlsZSgpIHtcblx0XHRcdFx0bGV0IHN0bCA9IHt9O1xuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcblx0XHRcdFx0Y29uc3QgdGV4dEhlaWdodCA9IHRoaXMuc2hvd1VwZGF0ZVRpbWUgPyAnNDBycHgnIDogJzgwcnB4Jztcblx0XHRcdFx0c3RsID0geydoZWlnaHQnOiB0ZXh0SGVpZ2h0LCAnbGluZS1oZWlnaHQnOiB0ZXh0SGVpZ2h0fVxuXHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0c3RsWydjb2xvciddID0gdGhpcy56VGhlbWUudGl0bGVbdGhpcy50c107XG5cdFx0XHRcdHJldHVybiBzdGw7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHR1cGRhdGVUaW1lKCkge1xuXHRcdFx0XHRpZiAodGhpcy5zaG93VXBkYXRlVGltZSkge1xuXHRcdFx0XHRcdHRoaXMucmVmcmVzaGVyVGltZVRleHQgPSB1LmdldFJlZmVzcmhlckZvcm1hdFRpbWVCeUtleSh0aGlzLnVwZGF0ZVRpbWVLZXksIHRoaXMudXBkYXRlVGltZVRleHRNYXApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblx0QGltcG9ydCBcIi4uL2Nzcy96LXBhZ2luZy1zdGF0aWMuY3NzXCI7XG5cblx0LnpwLXItY29udGFpbmVyIHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cblx0LnpwLXItY29udGFpbmVyLXBhZGRpbmcge1xuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xuXHRcdHBhZGRpbmc6IDE1cnB4IDBycHg7XG5cdFx0LyogI2VuZGlmICovXG5cdH1cblxuXHQuenAtci1sZWZ0IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHQvKiAjaWZkZWYgTVAtQUxJUEFZICovXG5cdFx0bWFyZ2luLXRvcDogLTRycHg7XG5cdFx0LyogI2VuZGlmICovXG5cdH1cblxuXHQuenAtci1sZWZ0LWltYWdlIHtcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuXHRcdGNvbG9yOiAjNjY2NjY2O1xuXHR9XG5cdFxuXHQuenAtci1sZWZ0LWltYWdlLXByZS1zaXple1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHR3aWR0aDogMzBycHg7XG5cdFx0aGVpZ2h0OiAzMHJweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cblx0LnpwLXItYXJyb3ctdG9wIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXG5cdC56cC1yLWFycm93LWRvd24ge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG5cdH1cblxuXHQuenAtci1yaWdodCB7XG5cdFx0Zm9udC1zaXplOiAyN3JweDtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblxuXHQuenAtci1yaWdodC10ZXh0IHtcblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cblx0LnpwLXItcmlnaHQtdGltZS10ZXh0IHtcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcblx0XHRmb250LXNpemU6IDI0cnB4O1xuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!******************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/z-paging-enum.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// [z-paging]枚举\nvar _default = {\n  //当前加载类型 0.下拉刷新 1.上拉加载更多\n  LoadingType: {\n    Refresher: 0,\n    LoadingMore: 1\n  },\n  //下拉刷新状态 0.默认状态 1.松手立即刷新 2.刷新中 3.刷新结束\n  Refresher: {\n    Default: 0,\n    ReleaseToRefresh: 1,\n    Loading: 2,\n    Complete: 3\n  },\n  //底部加载更多状态 0.默认状态 1.加载中 2.没有更多数据 3.加载失败\n  More: {\n    Default: 0,\n    Loading: 1,\n    NoMore: 2,\n    Fail: 3\n  },\n  //@query触发来源 0.用户主动下拉刷新 1.通过reload触发 2.通过refresh触发 3.通过滚动到底部加载更多或点击底部加载更多触发\n  QueryFrom: {\n    UserPullDown: 0,\n    Reload: 1,\n    Refresh: 2,\n    LoadingMore: 3\n  },\n  //虚拟列表cell高度模式\n  CellHeightMode: {\n    //固定高度\n    Fixed: 'fixed',\n    //动态高度\n    Dynamic: 'dynamic'\n  },\n  //列表缓存模式\n  CacheMode: {\n    //默认模式，只会缓存一次\n    Default: 'default',\n    //总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存\n    Always: 'always'\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy96LXBhZ2luZy1lbnVtLmpzIl0sIm5hbWVzIjpbIkxvYWRpbmdUeXBlIiwiUmVmcmVzaGVyIiwiTG9hZGluZ01vcmUiLCJEZWZhdWx0IiwiUmVsZWFzZVRvUmVmcmVzaCIsIkxvYWRpbmciLCJDb21wbGV0ZSIsIk1vcmUiLCJOb01vcmUiLCJGYWlsIiwiUXVlcnlGcm9tIiwiVXNlclB1bGxEb3duIiwiUmVsb2FkIiwiUmVmcmVzaCIsIkNlbGxIZWlnaHRNb2RlIiwiRml4ZWQiLCJEeW5hbWljIiwiQ2FjaGVNb2RlIiwiQWx3YXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLGVBRWU7RUFDZDtFQUNBQSxXQUFXLEVBQUU7SUFDWkMsU0FBUyxFQUFFLENBQUM7SUFDWkMsV0FBVyxFQUFFO0VBQ2QsQ0FBQztFQUNEO0VBQ0FELFNBQVMsRUFBRTtJQUNWRSxPQUFPLEVBQUUsQ0FBQztJQUNWQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CQyxPQUFPLEVBQUUsQ0FBQztJQUNWQyxRQUFRLEVBQUU7RUFDWCxDQUFDO0VBQ0Q7RUFDQUMsSUFBSSxFQUFFO0lBQ0xKLE9BQU8sRUFBRSxDQUFDO0lBQ1ZFLE9BQU8sRUFBRSxDQUFDO0lBQ1ZHLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLElBQUksRUFBRTtFQUNQLENBQUM7RUFDRDtFQUNBQyxTQUFTLEVBQUU7SUFDVkMsWUFBWSxFQUFFLENBQUM7SUFDZkMsTUFBTSxFQUFFLENBQUM7SUFDVEMsT0FBTyxFQUFFLENBQUM7SUFDVlgsV0FBVyxFQUFFO0VBQ2QsQ0FBQztFQUNEO0VBQ0FZLGNBQWMsRUFBRTtJQUNmO0lBQ0FDLEtBQUssRUFBRSxPQUFPO0lBQ2Q7SUFDQUMsT0FBTyxFQUFFO0VBQ1YsQ0FBQztFQUNEO0VBQ0FDLFNBQVMsRUFBRTtJQUNWO0lBQ0FkLE9BQU8sRUFBRSxTQUFTO0lBQ2xCO0lBQ0FlLE1BQU0sRUFBRTtFQUNUO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6IjU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3otcGFnaW5nXeaemuS4vlxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdC8v5b2T5YmN5Yqg6L2957G75Z6LIDAu5LiL5ouJ5Yi35pawIDEu5LiK5ouJ5Yqg6L295pu05aSaXG5cdExvYWRpbmdUeXBlOiB7XG5cdFx0UmVmcmVzaGVyOiAwLFxuXHRcdExvYWRpbmdNb3JlOiAxXG5cdH0sXG5cdC8v5LiL5ouJ5Yi35paw54q25oCBIDAu6buY6K6k54q25oCBIDEu5p2+5omL56uL5Y2z5Yi35pawIDIu5Yi35paw5LitIDMu5Yi35paw57uT5p2fXG5cdFJlZnJlc2hlcjoge1xuXHRcdERlZmF1bHQ6IDAsXG5cdFx0UmVsZWFzZVRvUmVmcmVzaDogMSxcblx0XHRMb2FkaW5nOiAyLFxuXHRcdENvbXBsZXRlOiAzXG5cdH0sXG5cdC8v5bqV6YOo5Yqg6L295pu05aSa54q25oCBIDAu6buY6K6k54q25oCBIDEu5Yqg6L295LitIDIu5rKh5pyJ5pu05aSa5pWw5o2uIDMu5Yqg6L295aSx6LSlXG5cdE1vcmU6IHtcblx0XHREZWZhdWx0OiAwLFxuXHRcdExvYWRpbmc6IDEsXG5cdFx0Tm9Nb3JlOiAyLFxuXHRcdEZhaWw6IDNcblx0fSxcblx0Ly9AcXVlcnnop6blj5HmnaXmupAgMC7nlKjmiLfkuLvliqjkuIvmi4nliLfmlrAgMS7pgJrov4dyZWxvYWTop6blj5EgMi7pgJrov4dyZWZyZXNo6Kem5Y+RIDMu6YCa6L+H5rua5Yqo5Yiw5bqV6YOo5Yqg6L295pu05aSa5oiW54K55Ye75bqV6YOo5Yqg6L295pu05aSa6Kem5Y+RXG5cdFF1ZXJ5RnJvbToge1xuXHRcdFVzZXJQdWxsRG93bjogMCxcblx0XHRSZWxvYWQ6IDEsXG5cdFx0UmVmcmVzaDogMixcblx0XHRMb2FkaW5nTW9yZTogM1xuXHR9LFxuXHQvL+iZmuaLn+WIl+ihqGNlbGzpq5jluqbmqKHlvI9cblx0Q2VsbEhlaWdodE1vZGU6IHtcblx0XHQvL+WbuuWumumrmOW6plxuXHRcdEZpeGVkOiAnZml4ZWQnLFxuXHRcdC8v5Yqo5oCB6auY5bqmXG5cdFx0RHluYW1pYzogJ2R5bmFtaWMnXG5cdH0sXG5cdC8v5YiX6KGo57yT5a2Y5qih5byPXG5cdENhY2hlTW9kZToge1xuXHRcdC8v6buY6K6k5qih5byP77yM5Y+q5Lya57yT5a2Y5LiA5qyhXG5cdFx0RGVmYXVsdDogJ2RlZmF1bHQnLFxuXHRcdC8v5oC75piv57yT5a2Y77yM5q+P5qyh5YiX6KGo5Yi35pawKOS4i+aLieWIt+aWsOOAgeiwg+eUqHJlbG9hZOetiSnpg73kvJrmm7TmlrDnvJPlrZhcblx0XHRBbHdheXM6ICdhbHdheXMnXG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///57\n");

/***/ }),
/* 58 */
/*!***************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-refresh.vue?vue&type=style&index=0&id=9e33a538&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_style_index_0_id_9e33a538_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-paging-refresh.vue?vue&type=style&index=0&id=9e33a538&scoped=true&lang=css& */ 59);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_style_index_0_id_9e33a538_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_style_index_0_id_9e33a538_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_style_index_0_id_9e33a538_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_style_index_0_id_9e33a538_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_refresh_vue_vue_type_style_index_0_id_9e33a538_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-refresh.vue?vue&type=style&index=0&id=9e33a538&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".zp-line-loading-image": {
    "": {
      "marginRight": [
        "8rpx",
        0,
        0,
        1
      ],
      "width": [
        "28rpx",
        0,
        0,
        1
      ],
      "height": [
        "28rpx",
        0,
        0,
        1
      ],
      "color": [
        "#666666",
        0,
        0,
        1
      ]
    }
  },
  ".zp-loading-image-ios": {
    "": {
      "width": [
        "20",
        0,
        0,
        2
      ],
      "height": [
        "20",
        0,
        0,
        2
      ]
    }
  },
  ".zp-loading-image-android": {
    "": {
      "width": [
        "32rpx",
        0,
        0,
        3
      ],
      "height": [
        "32rpx",
        0,
        0,
        3
      ]
    }
  },
  ".zp-r-container": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        4
      ],
      "justifyContent": [
        "center",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ]
    }
  },
  ".zp-r-container-padding": {
    "": {
      "paddingTop": [
        "15rpx",
        0,
        0,
        5
      ],
      "paddingRight": [
        "0rpx",
        0,
        0,
        5
      ],
      "paddingBottom": [
        "15rpx",
        0,
        0,
        5
      ],
      "paddingLeft": [
        "0rpx",
        0,
        0,
        5
      ]
    }
  },
  ".zp-r-left": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        6
      ],
      "alignItems": [
        "center",
        0,
        0,
        6
      ],
      "overflow": [
        "hidden",
        0,
        0,
        6
      ]
    }
  },
  ".zp-r-left-image": {
    "": {
      "transitionDuration": [
        200,
        0,
        0,
        7
      ],
      "transitionProperty": [
        "transform",
        0,
        0,
        7
      ],
      "color": [
        "#666666",
        0,
        0,
        7
      ]
    }
  },
  ".zp-r-arrow-top": {
    "": {
      "transform": [
        "rotate(0deg)",
        0,
        0,
        9
      ]
    }
  },
  ".zp-r-arrow-down": {
    "": {
      "transform": [
        "rotate(180deg)",
        0,
        0,
        10
      ]
    }
  },
  ".zp-r-right": {
    "": {
      "fontSize": [
        "27rpx",
        0,
        0,
        11
      ],
      "flexDirection": [
        "column",
        0,
        0,
        11
      ],
      "alignItems": [
        "center",
        0,
        0,
        11
      ],
      "justifyContent": [
        "center",
        0,
        0,
        11
      ]
    }
  },
  ".zp-r-right-text": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        12
      ]
    }
  },
  ".zp-r-right-time-text": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        13
      ],
      "fontSize": [
        "24rpx",
        0,
        0,
        13
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 60 */
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-load-more.vue ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _z_paging_load_more_vue_vue_type_template_id_ef0d5cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./z-paging-load-more.vue?vue&type=template&id=ef0d5cb6&scoped=true& */ 61);\n/* harmony import */ var _z_paging_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./z-paging-load-more.vue?vue&type=script&lang=js& */ 63);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _z_paging_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _z_paging_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./z-paging-load-more.vue?vue&type=style&index=0&id=ef0d5cb6&scoped=true&lang=css& */ 65).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./z-paging-load-more.vue?vue&type=style&index=0&id=ef0d5cb6&scoped=true&lang=css& */ 65).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _z_paging_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _z_paging_load_more_vue_vue_type_template_id_ef0d5cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _z_paging_load_more_vue_vue_type_template_id_ef0d5cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"ef0d5cb6\",\n  \"5cc807c2\",\n  false,\n  _z_paging_load_more_vue_vue_type_template_id_ef0d5cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/z-paging/components/z-paging/components/z-paging-load-more.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJGQUFtRjtBQUN2SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkZBQW1GO0FBQzVJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vei1wYWdpbmctbG9hZC1tb3JlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZjBkNWNiNiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3otcGFnaW5nLWxvYWQtbW9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3otcGFnaW5nLWxvYWQtbW9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi96LXBhZ2luZy1sb2FkLW1vcmUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWYwZDVjYjYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3otcGFnaW5nLWxvYWQtbW9yZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lZjBkNWNiNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlZjBkNWNiNlwiLFxuICBcIjVjYzgwN2MyXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3otcGFnaW5nL2NvbXBvbmVudHMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy1sb2FkLW1vcmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///60\n");

/***/ }),
/* 61 */
/*!***************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-load-more.vue?vue&type=template&id=ef0d5cb6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_template_id_ef0d5cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-paging-load-more.vue?vue&type=template&id=ef0d5cb6&scoped=true& */ 62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_template_id_ef0d5cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_template_id_ef0d5cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_template_id_ef0d5cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_template_id_ef0d5cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 62 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-load-more.vue?vue&type=template&id=ef0d5cb6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["zp-l-container"],
      style: [_vm.c.customStyle],
      on: { click: _vm.doClick },
    },
    [
      !_vm.c.hideContent
        ? [
            _vm.c.showNoMoreLine && _vm.finalStatus === _vm.M.NoMore
              ? _c("u-text", {
                  staticClass: ["zp-l-line"],
                  style: [
                    { backgroundColor: _vm.zTheme.line[_vm.ts] },
                    _vm.c.noMoreLineCustomStyle,
                  ],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                })
              : _vm._e(),
            _c("view", [
              _vm.finalStatus === _vm.M.Loading &&
              _vm.finalLoadingIconType !== "circle"
                ? _c("loading-indicator", {
                    staticClass: ["zp-line-loading-image"],
                    style: [{ color: _vm.zTheme.indicator[_vm.ts] }],
                    attrs: { animating: true },
                  })
                : _vm._e(),
            ]),
            _vm.finalStatus === _vm.M.Loading &&
            _vm.finalLoadingIconType === "circle" &&
            !_vm.c.loadingIconCustomImage.length
              ? _c("u-text", {
                  staticClass: ["zp-l-circle-loading-view"],
                  style: [
                    {
                      borderColor: _vm.zTheme.circleBorder[_vm.ts],
                      borderTopColor: _vm.zTheme.circleBorderTop[_vm.ts],
                    },
                    _vm.c.iconCustomStyle,
                  ],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                })
              : _vm._e(),
            _c(
              "u-text",
              {
                staticClass: ["zp-l-text"],
                style: [
                  { color: _vm.zTheme.title[_vm.ts] },
                  _vm.c.titleCustomStyle,
                ],
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v(_vm._s(_vm.ownLoadingMoreText))]
            ),
            _vm.c.showNoMoreLine && _vm.finalStatus === _vm.M.NoMore
              ? _c("u-text", {
                  staticClass: ["zp-l-line"],
                  style: [
                    { backgroundColor: _vm.zTheme.line[_vm.ts] },
                    _vm.c.noMoreLineCustomStyle,
                  ],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                })
              : _vm._e(),
          ]
        : _vm._e(),
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 63 */
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-load-more.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-paging-load-more.vue?vue&type=script&lang=js& */ 64);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdiLENBQWdCLDRkQUFHLEVBQUMiLCJmaWxlIjoiNjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vei1wYWdpbmctbG9hZC1tb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3otcGFnaW5nLWxvYWQtbW9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///63\n");

/***/ }),
/* 64 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-load-more.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _zPagingStatic = _interopRequireDefault(__webpack_require__(/*! ../js/z-paging-static */ 38));\nvar _zPagingEnum = _interopRequireDefault(__webpack_require__(/*! ../js/z-paging-enum */ 57));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  name: 'z-paging-load-more',\n  data: function data() {\n    return {\n      M: _zPagingEnum.default.More,\n      zTheme: {\n        title: {\n          white: '#efefef',\n          black: '#a4a4a4'\n        },\n        line: {\n          white: '#efefef',\n          black: '#eeeeee'\n        },\n        circleBorder: {\n          white: '#aaaaaa',\n          black: '#c8c8c8'\n        },\n        circleBorderTop: {\n          white: '#ffffff',\n          black: '#444444'\n        },\n        flower: {\n          white: _zPagingStatic.default.base64FlowerWhite,\n          black: _zPagingStatic.default.base64Flower\n        },\n        indicator: {\n          white: '#eeeeee',\n          black: '#777777'\n        }\n      }\n    };\n  },\n  props: ['zConfig'],\n  computed: {\n    ts: function ts() {\n      return this.c.defaultThemeStyle;\n    },\n    c: function c() {\n      return this.zConfig;\n    },\n    ownLoadingMoreText: function ownLoadingMoreText() {\n      var statusTextArr = [this.c.defaultText, this.c.loadingText, this.c.noMoreText, this.c.failText];\n      return statusTextArr[this.finalStatus];\n    },\n    finalStatus: function finalStatus() {\n      if (this.c.defaultAsLoading && this.c.status === this.M.Default) return this.M.Loading;\n      return this.c.status;\n    },\n    finalLoadingIconType: function finalLoadingIconType() {\n      return 'flower';\n      return this.c.loadingIconType;\n    }\n  },\n  methods: {\n    doClick: function doClick() {\n      this.$emit('doClick');\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9jb21wb25lbnRzL3otcGFnaW5nLWxvYWQtbW9yZS52dWUiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJNIiwielRoZW1lIiwidGl0bGUiLCJ3aGl0ZSIsImJsYWNrIiwibGluZSIsImNpcmNsZUJvcmRlciIsImNpcmNsZUJvcmRlclRvcCIsImZsb3dlciIsImluZGljYXRvciIsInByb3BzIiwiY29tcHV0ZWQiLCJ0cyIsImMiLCJvd25Mb2FkaW5nTW9yZVRleHQiLCJmaW5hbFN0YXR1cyIsImZpbmFsTG9hZGluZ0ljb25UeXBlIiwibWV0aG9kcyIsImRvQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUF3QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0E7RUFDQUE7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztRQUNBQztVQUFBQztVQUFBQztRQUFBO1FBQ0FDO1VBQUFGO1VBQUFDO1FBQUE7UUFDQUU7VUFBQUg7VUFBQUM7UUFBQTtRQUNBRztVQUFBSjtVQUFBQztRQUFBO1FBQ0FJO1VBQUFMO1VBQUFDO1FBQUE7UUFDQUs7VUFBQU47VUFBQUM7UUFBQTtNQUNBO0lBQ0E7RUFDQTtFQUNBTTtFQUNBQztJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BRUE7TUFFQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBbei1wYWdpbmdd5LiK5ouJ5Yqg6L295pu05aSadmlldyAtLT5cbjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJ6cC1sLWNvbnRhaW5lclwiIDpzdHlsZT1cIltjLmN1c3RvbVN0eWxlXVwiIEBjbGljaz1cImRvQ2xpY2tcIj5cblx0XHQ8dGVtcGxhdGUgdi1pZj1cIiFjLmhpZGVDb250ZW50XCI+XG5cdFx0XHQ8dGV4dCB2LWlmPVwiYy5zaG93Tm9Nb3JlTGluZSYmZmluYWxTdGF0dXM9PT1NLk5vTW9yZVwiIGNsYXNzPVwienAtbC1saW5lXCIgOnN0eWxlPVwiW3tiYWNrZ3JvdW5kQ29sb3I6elRoZW1lLmxpbmVbdHNdfSxjLm5vTW9yZUxpbmVDdXN0b21TdHlsZV1cIiAvPlxuXHRcdFx0PCEtLSAjaWZuZGVmIEFQUC1OVlVFIC0tPlxuXHRcdFx0PGltYWdlIHYtaWY9XCJmaW5hbFN0YXR1cz09PU0uTG9hZGluZyYmISFjLmxvYWRpbmdJY29uQ3VzdG9tSW1hZ2VcIlxuXHRcdFx0XHQ6c3JjPVwiYy5sb2FkaW5nSWNvbkN1c3RvbUltYWdlXCIgOnN0eWxlPVwiW2MuaWNvbkN1c3RvbVN0eWxlXVwiIDpjbGFzcz1cInsnenAtbC1saW5lLWxvYWRpbmctY3VzdG9tLWltYWdlJzp0cnVlLCd6cC1sLWxpbmUtbG9hZGluZy1jdXN0b20taW1hZ2UtYW5pbWF0ZWQnOmMubG9hZGluZ0FuaW1hdGVkfVwiIC8+XG5cdFx0XHQ8aW1hZ2Ugdi1pZj1cImZpbmFsU3RhdHVzPT09TS5Mb2FkaW5nJiZmaW5hbExvYWRpbmdJY29uVHlwZT09PSdmbG93ZXInJiYhYy5sb2FkaW5nSWNvbkN1c3RvbUltYWdlLmxlbmd0aFwiXG5cdFx0XHRcdGNsYXNzPVwienAtbGluZS1sb2FkaW5nLWltYWdlXCIgOnN0eWxlPVwiW2MuaWNvbkN1c3RvbVN0eWxlXVwiIDpzcmM9XCJ6VGhlbWUuZmxvd2VyW3RzXVwiIC8+XG5cdFx0XHQ8IS0tICNlbmRpZiAtLT5cblx0XHRcdDwhLS0gI2lmZGVmIEFQUC1OVlVFIC0tPlxuXHRcdFx0PHZpZXc+XG5cdFx0XHRcdDxsb2FkaW5nLWluZGljYXRvciB2LWlmPVwiZmluYWxTdGF0dXM9PT1NLkxvYWRpbmcmJmZpbmFsTG9hZGluZ0ljb25UeXBlIT09J2NpcmNsZSdcIiBjbGFzcz1cInpwLWxpbmUtbG9hZGluZy1pbWFnZVwiIDpzdHlsZT1cIlt7Y29sb3I6elRoZW1lLmluZGljYXRvclt0c119XVwiIDphbmltYXRpbmc9XCJ0cnVlXCIgLz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdFx0PHRleHQgdi1pZj1cImZpbmFsU3RhdHVzPT09TS5Mb2FkaW5nJiZmaW5hbExvYWRpbmdJY29uVHlwZT09PSdjaXJjbGUnJiYhYy5sb2FkaW5nSWNvbkN1c3RvbUltYWdlLmxlbmd0aFwiXG5cdFx0XHRcdGNsYXNzPVwienAtbC1jaXJjbGUtbG9hZGluZy12aWV3XCIgOnN0eWxlPVwiW3tib3JkZXJDb2xvcjp6VGhlbWUuY2lyY2xlQm9yZGVyW3RzXSxib3JkZXJUb3BDb2xvcjp6VGhlbWUuY2lyY2xlQm9yZGVyVG9wW3RzXX0sYy5pY29uQ3VzdG9tU3R5bGVdXCIgLz5cblx0XHRcdDx0ZXh0IGNsYXNzPVwienAtbC10ZXh0XCIgOnN0eWxlPVwiW3tjb2xvcjp6VGhlbWUudGl0bGVbdHNdfSxjLnRpdGxlQ3VzdG9tU3R5bGVdXCI+e3tvd25Mb2FkaW5nTW9yZVRleHR9fTwvdGV4dD5cblx0XHRcdDx0ZXh0IHYtaWY9XCJjLnNob3dOb01vcmVMaW5lJiZmaW5hbFN0YXR1cz09PU0uTm9Nb3JlXCIgY2xhc3M9XCJ6cC1sLWxpbmVcIiA6c3R5bGU9XCJbe2JhY2tncm91bmRDb2xvcjp6VGhlbWUubGluZVt0c119LGMubm9Nb3JlTGluZUN1c3RvbVN0eWxlXVwiIC8+XG5cdFx0PC90ZW1wbGF0ZT5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGltcG9ydCB6U3RhdGljIGZyb20gJy4uL2pzL3otcGFnaW5nLXN0YXRpYydcblx0aW1wb3J0IEVudW0gZnJvbSAnLi4vanMvei1wYWdpbmctZW51bSdcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICd6LXBhZ2luZy1sb2FkLW1vcmUnLFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRNOiBFbnVtLk1vcmUsXG5cdFx0XHRcdHpUaGVtZToge1xuXHRcdFx0XHRcdHRpdGxlOiB7IHdoaXRlOiAnI2VmZWZlZicsIGJsYWNrOiAnI2E0YTRhNCcgfSxcblx0XHRcdFx0XHRsaW5lOiB7IHdoaXRlOiAnI2VmZWZlZicsIGJsYWNrOiAnI2VlZWVlZScgfSxcblx0XHRcdFx0XHRjaXJjbGVCb3JkZXI6IHsgd2hpdGU6ICcjYWFhYWFhJywgYmxhY2s6ICcjYzhjOGM4JyB9LFxuXHRcdFx0XHRcdGNpcmNsZUJvcmRlclRvcDogeyB3aGl0ZTogJyNmZmZmZmYnLCBibGFjazogJyM0NDQ0NDQnIH0sXG5cdFx0XHRcdFx0Zmxvd2VyOiB7IHdoaXRlOiB6U3RhdGljLmJhc2U2NEZsb3dlcldoaXRlLCBibGFjazogelN0YXRpYy5iYXNlNjRGbG93ZXIgfSxcblx0XHRcdFx0XHRpbmRpY2F0b3I6IHsgd2hpdGU6ICcjZWVlZWVlJywgYmxhY2s6ICcjNzc3Nzc3JyB9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fSxcblx0XHRwcm9wczogWyd6Q29uZmlnJ10sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHRzKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jLmRlZmF1bHRUaGVtZVN0eWxlO1xuXHRcdFx0fSxcblx0XHRcdGMoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnpDb25maWc7XG5cdFx0XHR9LFxuXHRcdFx0b3duTG9hZGluZ01vcmVUZXh0KCkge1xuXHRcdFx0XHRjb25zdCBzdGF0dXNUZXh0QXJyID0gW3RoaXMuYy5kZWZhdWx0VGV4dCx0aGlzLmMubG9hZGluZ1RleHQsdGhpcy5jLm5vTW9yZVRleHQsdGhpcy5jLmZhaWxUZXh0XTtcblx0XHRcdFx0cmV0dXJuIHN0YXR1c1RleHRBcnJbdGhpcy5maW5hbFN0YXR1c107XG5cdFx0XHR9LFxuXHRcdFx0ZmluYWxTdGF0dXMoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmMuZGVmYXVsdEFzTG9hZGluZyAmJiB0aGlzLmMuc3RhdHVzID09PSB0aGlzLk0uRGVmYXVsdCkgcmV0dXJuIHRoaXMuTS5Mb2FkaW5nO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jLnN0YXR1cztcblx0XHRcdH0sXG5cdFx0XHRmaW5hbExvYWRpbmdJY29uVHlwZSgpIHtcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXG5cdFx0XHRcdHJldHVybiAnZmxvd2VyJztcblx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHRcdHJldHVybiB0aGlzLmMubG9hZGluZ0ljb25UeXBlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0ZG9DbGljaygpIHtcblx0XHRcdFx0dGhpcy4kZW1pdCgnZG9DbGljaycpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cdEBpbXBvcnQgXCIuLi9jc3Mvei1wYWdpbmctc3RhdGljLmNzc1wiO1xuXG5cdC56cC1sLWNvbnRhaW5lciB7XG5cdFx0aGVpZ2h0OiA4MHJweDtcblx0XHRmb250LXNpemU6IDI3cnB4O1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRjbGVhcjogYm90aDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxuXG5cdC56cC1sLWxpbmUtbG9hZGluZy1jdXN0b20taW1hZ2Uge1xuXHRcdGNvbG9yOiAjYTRhNGE0O1xuXHRcdG1hcmdpbi1yaWdodDogOHJweDtcblx0XHR3aWR0aDogMjhycHg7XG5cdFx0aGVpZ2h0OiAyOHJweDtcblx0fVxuXHRcblx0LnpwLWwtbGluZS1sb2FkaW5nLWN1c3RvbS1pbWFnZS1hbmltYXRlZHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0YW5pbWF0aW9uOiBsb2FkaW5nLWNpcmNsZSAxcyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0LyogI2VuZGlmICovXG5cdH1cblxuXHQuenAtbC1jaXJjbGUtbG9hZGluZy12aWV3IHtcblx0XHRtYXJnaW4tcmlnaHQ6IDhycHg7XG5cdFx0d2lkdGg6IDIzcnB4O1xuXHRcdGhlaWdodDogMjNycHg7XG5cdFx0Ym9yZGVyOiAzcnB4IHNvbGlkICNkZGRkZGQ7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRhbmltYXRpb246IGxvYWRpbmctY2lyY2xlIDFzIGxpbmVhciBpbmZpbml0ZTtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cblx0XHR3aWR0aDogMzBycHg7XG5cdFx0aGVpZ2h0OiAzMHJweDtcblx0XHQvKiAjZW5kaWYgKi9cblx0fVxuXG5cdC56cC1sLXRleHQge1xuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xuXHRcdGZvbnQtc2l6ZTogMzBycHg7XG5cdFx0bWFyZ2luOiAwcnB4IDEwcnB4O1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cblx0LnpwLWwtbGluZSB7XG5cdFx0aGVpZ2h0OiAxcHg7XG5cdFx0d2lkdGg6IDEwMHJweDtcblx0XHRtYXJnaW46IDBycHggMTBycHg7XG5cdH1cblxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdEBrZXlmcmFtZXMgbG9hZGluZy1jaXJjbGUge1xuXHRcdDAlIHtcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHR9XG5cdFx0MTAwJSB7XG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHRcdH1cblx0fVxuXHQvKiAjZW5kaWYgKi9cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///64\n");

/***/ }),
/* 65 */
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-load-more.vue?vue&type=style&index=0&id=ef0d5cb6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_style_index_0_id_ef0d5cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-paging-load-more.vue?vue&type=style&index=0&id=ef0d5cb6&scoped=true&lang=css& */ 66);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_style_index_0_id_ef0d5cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_style_index_0_id_ef0d5cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_style_index_0_id_ef0d5cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_style_index_0_id_ef0d5cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_load_more_vue_vue_type_style_index_0_id_ef0d5cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 66 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/components/z-paging-load-more.vue?vue&type=style&index=0&id=ef0d5cb6&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".zp-line-loading-image": {
    "": {
      "marginRight": [
        "8rpx",
        0,
        0,
        1
      ],
      "width": [
        "28rpx",
        0,
        0,
        1
      ],
      "height": [
        "28rpx",
        0,
        0,
        1
      ],
      "color": [
        "#666666",
        0,
        0,
        1
      ]
    }
  },
  ".zp-loading-image-ios": {
    "": {
      "width": [
        "20",
        0,
        0,
        2
      ],
      "height": [
        "20",
        0,
        0,
        2
      ]
    }
  },
  ".zp-loading-image-android": {
    "": {
      "width": [
        "32rpx",
        0,
        0,
        3
      ],
      "height": [
        "32rpx",
        0,
        0,
        3
      ]
    }
  },
  ".zp-l-container": {
    "": {
      "height": [
        "80rpx",
        0,
        0,
        4
      ],
      "fontSize": [
        "27rpx",
        0,
        0,
        4
      ],
      "flexDirection": [
        "row",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ],
      "justifyContent": [
        "center",
        0,
        0,
        4
      ]
    }
  },
  ".zp-l-line-loading-custom-image": {
    "": {
      "color": [
        "#a4a4a4",
        0,
        0,
        5
      ],
      "marginRight": [
        "8rpx",
        0,
        0,
        5
      ],
      "width": [
        "28rpx",
        0,
        0,
        5
      ],
      "height": [
        "28rpx",
        0,
        0,
        5
      ]
    }
  },
  ".zp-l-circle-loading-view": {
    "": {
      "marginRight": [
        "8rpx",
        0,
        0,
        7
      ],
      "width": [
        "30rpx",
        0,
        0,
        7
      ],
      "height": [
        "30rpx",
        0,
        0,
        7
      ],
      "borderWidth": [
        "3rpx",
        0,
        0,
        7
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        7
      ],
      "borderColor": [
        "#dddddd",
        0,
        0,
        7
      ],
      "borderRadius": [
        50,
        0,
        0,
        7
      ]
    }
  },
  ".zp-l-text": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        8
      ],
      "marginTop": [
        "0rpx",
        0,
        0,
        8
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        8
      ],
      "marginBottom": [
        "0rpx",
        0,
        0,
        8
      ],
      "marginLeft": [
        "10rpx",
        0,
        0,
        8
      ]
    }
  },
  ".zp-l-line": {
    "": {
      "height": [
        "1",
        0,
        0,
        9
      ],
      "width": [
        "100rpx",
        0,
        0,
        9
      ],
      "marginTop": [
        "0rpx",
        0,
        0,
        9
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        9
      ],
      "marginBottom": [
        "0rpx",
        0,
        0,
        9
      ],
      "marginLeft": [
        "10rpx",
        0,
        0,
        9
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 67 */
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/modules/common-layout.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// [z-paging]通用布局相关模块\n\nvar weexDom = weex.requireModule('dom');\nvar _default = {\n  data: function data() {\n    return {\n      systemInfo: null,\n      cssSafeAreaInsetBottom: -1\n    };\n  },\n  computed: {\n    windowTop: function windowTop() {\n      if (!this.systemInfo) return 0;\n      //暂时修复vue3中隐藏系统导航栏后windowTop获取不正确的问题，具体bug详见https://ask.dcloud.net.cn/question/141634\n      //感谢litangyu！！https://github.com/SmileZXLee/uni-z-paging/issues/25\n\n      return this.systemInfo.windowTop || 0;\n    },\n    safeAreaBottom: function safeAreaBottom() {\n      if (!this.systemInfo) return 0;\n      var safeAreaBottom = 0;\n      safeAreaBottom = this.systemInfo.safeAreaInsets.bottom || 0;\n      return safeAreaBottom;\n    },\n    isOldWebView: function isOldWebView() {\n      return false;\n    },\n    zSlots: function zSlots() {\n      return this.$scopedSlots || this.$slots;\n      return this.$slots;\n    }\n  },\n  methods: {\n    //获取节点尺寸\n    _getNodeClientRect: function _getNodeClientRect(select) {\n      var inDom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      var scrollOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      select = select.replace(/[.|#]/g, '');\n      var ref = this.$refs[select];\n      return new Promise(function (resolve, reject) {\n        if (ref) {\n          weexDom.getComponentRect(ref, function (option) {\n            resolve(option && option.result ? [option.size] : false);\n          });\n        } else {\n          resolve(false);\n        }\n      });\n      return;\n      var res = !!inDom ? uni.createSelectorQuery().in(inDom === true ? this : inDom) : uni.createSelectorQuery();\n      scrollOffset ? res.select(select).scrollOffset() : res.select(select).boundingClientRect();\n      return new Promise(function (resolve, reject) {\n        res.exec(function (data) {\n          resolve(data && data != '' && data != undefined && data.length ? data : false);\n        });\n      });\n    },\n    //获取slot=\"left\"和slot=\"right\"宽度并且更新布局\n    _updateLeftAndRightWidth: function _updateLeftAndRightWidth(targetStyle, parentNodePrefix) {\n      var _this = this;\n      this.$nextTick(function () {\n        var delayTime = 0;\n        setTimeout(function () {\n          ['left', 'right'].map(function (position) {\n            _this._getNodeClientRect(\".\".concat(parentNodePrefix, \"-\").concat(position)).then(function (res) {\n              _this.$set(targetStyle, position, res ? res[0].width + 'px' : '0px');\n            });\n          });\n        }, delayTime);\n      });\n    },\n    //通过获取css设置的底部安全区域占位view高度设置bottom距离\n    _getCssSafeAreaInsetBottom: function _getCssSafeAreaInsetBottom(success) {\n      var _this2 = this;\n      this._getNodeClientRect('.zp-safe-area-inset-bottom').then(function (res) {\n        _this2.cssSafeAreaInsetBottom = res ? res[0].height : -1;\n        res && success && success();\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy9tb2R1bGVzL2NvbW1vbi1sYXlvdXQuanMiXSwibmFtZXMiOlsid2VleERvbSIsIndlZXgiLCJyZXF1aXJlTW9kdWxlIiwiZGF0YSIsInN5c3RlbUluZm8iLCJjc3NTYWZlQXJlYUluc2V0Qm90dG9tIiwiY29tcHV0ZWQiLCJ3aW5kb3dUb3AiLCJzYWZlQXJlYUJvdHRvbSIsInNhZmVBcmVhSW5zZXRzIiwiYm90dG9tIiwiaXNPbGRXZWJWaWV3IiwielNsb3RzIiwiJHNjb3BlZFNsb3RzIiwiJHNsb3RzIiwibWV0aG9kcyIsIl9nZXROb2RlQ2xpZW50UmVjdCIsInNlbGVjdCIsImluRG9tIiwic2Nyb2xsT2Zmc2V0IiwicmVwbGFjZSIsInJlZiIsIiRyZWZzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRDb21wb25lbnRSZWN0Iiwib3B0aW9uIiwicmVzdWx0Iiwic2l6ZSIsInJlcyIsInVuaSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImV4ZWMiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJfdXBkYXRlTGVmdEFuZFJpZ2h0V2lkdGgiLCJ0YXJnZXRTdHlsZSIsInBhcmVudE5vZGVQcmVmaXgiLCIkbmV4dFRpY2siLCJkZWxheVRpbWUiLCJzZXRUaW1lb3V0IiwibWFwIiwicG9zaXRpb24iLCJ0aGVuIiwiJHNldCIsIndpZHRoIiwiX2dldENzc1NhZmVBcmVhSW5zZXRCb3R0b20iLCJzdWNjZXNzIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUFDLGVBRzNCO0VBQ2RDLElBQUksa0JBQUc7SUFDTixPQUFPO01BQ05DLFVBQVUsRUFBRSxJQUFJO01BQ2hCQyxzQkFBc0IsRUFBRSxDQUFD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QUFnQixjQUFJSyxRQUFRLEVBQUcsQ0FBQ0MsSUFBSSxDQUFDLFVBQUFoQixHQUFHLEVBQUk7Y0FDdkUsS0FBSSxDQUFDaUIsSUFBSSxDQUFDUixXQUFXLEVBQUVNLFFBQVEsRUFBRWYsR0FBRyxHQUFHQSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNrQixLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNwRSxDQUFDLENBQUM7VUFDSCxDQUFDLENBQUM7UUFDSCxDQUFDLEVBQUVOLFNBQVMsQ0FBQztNQUNkLENBQUMsQ0FBQztJQUNILENBQUM7SUFDRDtJQUNBTywwQkFBMEIsc0NBQUNDLE9BQU8sRUFBRTtNQUFBO01BQ25DLElBQUksQ0FBQ2xDLGtCQUFrQixDQUFDLDRCQUE0QixDQUFDLENBQUM4QixJQUFJLENBQUMsVUFBQWhCLEdBQUcsRUFBSTtRQUNqRSxNQUFJLENBQUN6QixzQkFBc0IsR0FBR3lCLEdBQUcsR0FBR0EsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDcUIsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN0RHJCLEdBQUcsSUFBSW9CLE9BQU8sSUFBSUEsT0FBTyxFQUFFO01BQzVCLENBQUMsQ0FBQztJQUNIO0VBQ0Q7QUFDRCxDQUFDO0FBQUEiLCJmaWxlIjoiNjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbei1wYWdpbmdd6YCa55So5biD5bGA55u45YWz5qih5Z2XXG5cblxuY29uc3Qgd2VleERvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzeXN0ZW1JbmZvOiBudWxsLFxuXHRcdFx0Y3NzU2FmZUFyZWFJbnNldEJvdHRvbTogLTEsXG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdHdpbmRvd1RvcCgpIHtcblx0XHRcdGlmICghdGhpcy5zeXN0ZW1JbmZvKSByZXR1cm4gMDtcblx0XHRcdC8v5pqC5pe25L+u5aSNdnVlM+S4remakOiXj+ezu+e7n+WvvOiIquagj+WQjndpbmRvd1RvcOiOt+WPluS4jeato+ehrueahOmXrumimO+8jOWFt+S9k2J1Z+ivpuingWh0dHBzOi8vYXNrLmRjbG91ZC5uZXQuY24vcXVlc3Rpb24vMTQxNjM0XG5cdFx0XHQvL+aEn+iwomxpdGFuZ3l177yB77yBaHR0cHM6Ly9naXRodWIuY29tL1NtaWxlWlhMZWUvdW5pLXotcGFnaW5nL2lzc3Vlcy8yNVxuXG5cblxuXG5cdFx0XHRyZXR1cm4gdGhpcy5zeXN0ZW1JbmZvLndpbmRvd1RvcCB8fCAwO1xuXHRcdH0sXG5cdFx0c2FmZUFyZWFCb3R0b20oKSB7XG5cdFx0XHRpZiAoIXRoaXMuc3lzdGVtSW5mbykgcmV0dXJuIDA7XG5cdFx0XHRsZXQgc2FmZUFyZWFCb3R0b20gPSAwO1xuXG5cdFx0XHRzYWZlQXJlYUJvdHRvbSA9IHRoaXMuc3lzdGVtSW5mby5zYWZlQXJlYUluc2V0cy5ib3R0b20gfHwgMCA7XG5cblxuXG5cblx0XHRcdHJldHVybiBzYWZlQXJlYUJvdHRvbTtcblx0XHR9LFxuXHRcdGlzT2xkV2ViVmlldygpIHtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdHpTbG90cygpIHtcblxuXHRcdFx0XG5cblxuXG5cdFx0XHRcblx0XHRcdHJldHVybiB0aGlzLiRzY29wZWRTbG90cyB8fCB0aGlzLiRzbG90cztcblxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gdGhpcy4kc2xvdHM7XG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Ly/ojrflj5boioLngrnlsLrlr7hcblx0XHRfZ2V0Tm9kZUNsaWVudFJlY3Qoc2VsZWN0LCBpbkRvbSA9IHRydWUsIHNjcm9sbE9mZnNldCA9IGZhbHNlKSB7XG5cblx0XHRcdHNlbGVjdCA9IHNlbGVjdC5yZXBsYWNlKC9bLnwjXS9nLCAnJyk7XG5cdFx0XHRjb25zdCByZWYgPSB0aGlzLiRyZWZzW3NlbGVjdF07XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRpZiAocmVmKSB7XG5cdFx0XHRcdFx0d2VleERvbS5nZXRDb21wb25lbnRSZWN0KHJlZiwgb3B0aW9uID0+IHtcblx0XHRcdFx0XHRcdHJlc29sdmUob3B0aW9uICYmIG9wdGlvbi5yZXN1bHQgPyBbb3B0aW9uLnNpemVdIDogZmFsc2UpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXG5cblxuXG5cdFx0XHRsZXQgcmVzID0gISFpbkRvbSA/IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4oaW5Eb20gPT09IHRydWUgPyB0aGlzIDogaW5Eb20pIDogdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKTtcblx0XHRcdHNjcm9sbE9mZnNldCA/IHJlcy5zZWxlY3Qoc2VsZWN0KS5zY3JvbGxPZmZzZXQoKSA6IHJlcy5zZWxlY3Qoc2VsZWN0KS5ib3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHJlcy5leGVjKGRhdGEgPT4ge1xuXHRcdFx0XHRcdHJlc29sdmUoKGRhdGEgJiYgZGF0YSAhPSAnJyAmJiBkYXRhICE9IHVuZGVmaW5lZCAmJiBkYXRhLmxlbmd0aCkgPyBkYXRhIDogZmFsc2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0Ly/ojrflj5ZzbG90PVwibGVmdFwi5ZKMc2xvdD1cInJpZ2h0XCLlrr3luqblubbkuJTmm7TmlrDluIPlsYBcblx0XHRfdXBkYXRlTGVmdEFuZFJpZ2h0V2lkdGgodGFyZ2V0U3R5bGUsIHBhcmVudE5vZGVQcmVmaXgpIHtcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0bGV0IGRlbGF5VGltZSA9IDA7XG5cblxuXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFsnbGVmdCcsJ3JpZ2h0J10ubWFwKHBvc2l0aW9uID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuX2dldE5vZGVDbGllbnRSZWN0KGAuJHtwYXJlbnROb2RlUHJlZml4fS0ke3Bvc2l0aW9ufWApLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRcdFx0dGhpcy4kc2V0KHRhcmdldFN0eWxlLCBwb3NpdGlvbiwgcmVzID8gcmVzWzBdLndpZHRoICsgJ3B4JyA6ICcwcHgnKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0sIGRlbGF5VGltZSlcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvL+mAmui/h+iOt+WPlmNzc+iuvue9rueahOW6lemDqOWuieWFqOWMuuWfn+WNoOS9jXZpZXfpq5jluqborr7nva5ib3R0b23ot53nprtcblx0XHRfZ2V0Q3NzU2FmZUFyZWFJbnNldEJvdHRvbShzdWNjZXNzKSB7XG5cdFx0XHR0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnLnpwLXNhZmUtYXJlYS1pbnNldC1ib3R0b20nKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdHRoaXMuY3NzU2FmZUFyZWFJbnNldEJvdHRvbSA9IHJlcyA/IHJlc1swXS5oZWlnaHQgOiAtMTtcblx0XHRcdFx0cmVzICYmIHN1Y2Nlc3MgJiYgc3VjY2VzcygpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///67\n");

/***/ }),
/* 68 */
/*!************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/modules/data-handle.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 69));\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 75));\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! .././z-paging-utils */ 47));\nvar _zPagingConstant = _interopRequireDefault(__webpack_require__(/*! .././z-paging-constant */ 46));\nvar _zPagingEnum = _interopRequireDefault(__webpack_require__(/*! .././z-paging-enum */ 57));\nvar _zPagingInterceptor = _interopRequireDefault(__webpack_require__(/*! ../z-paging-interceptor */ 79));\n// [z-paging]数据处理模块\nvar _default2 = {\n  props: {\n    //自定义初始的pageNo，默认为1\n    defaultPageNo: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('defaultPageNo', 1),\n      observer: function observer(newVal) {\n        this.pageNo = newVal;\n      }\n    },\n    //自定义pageSize，默认为10\n    defaultPageSize: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('defaultPageSize', 10),\n      validator: function validator(value) {\n        if (value <= 0) _zPagingUtils.default.consoleErr('default-page-size必须大于0！');\n        return value > 0;\n      }\n    },\n    //为保证数据一致，设置当前tab切换时的标识key，并在complete中传递相同key，若二者不一致，则complete将不会生效\n    dataKey: {\n      type: [Number, String, Object],\n      default: function _default() {\n        return _zPagingUtils.default.gc('dataKey', null);\n      }\n    },\n    //使用缓存，若开启将自动缓存第一页的数据，默认为否。请注意，因考虑到切换tab时不同tab数据不同的情况，默认仅会缓存组件首次加载时第一次请求到的数据，后续的下拉刷新操作不会更新缓存。\n    useCache: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('useCache', false)\n    },\n    //使用缓存时缓存的key，用于区分不同列表的缓存数据，useCache为true时必须设置，否则缓存无效\n    cacheKey: {\n      type: String,\n      default: _zPagingUtils.default.gc('cacheKey', null)\n    },\n    //缓存模式，默认仅会缓存组件首次加载时第一次请求到的数据，可设置为always，即代表总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存\n    cacheMode: {\n      type: String,\n      default: _zPagingUtils.default.gc('cacheMode', _zPagingEnum.default.CacheMode.Default)\n    },\n    //自动注入的list名，可自动修改父view(包含ref=\"paging\")中对应name的list值\n    autowireListName: {\n      type: String,\n      default: _zPagingUtils.default.gc('autowireListName', '')\n    },\n    //自动注入的query名，可自动调用父view(包含ref=\"paging\")中的query方法\n    autowireQueryName: {\n      type: String,\n      default: _zPagingUtils.default.gc('autowireQueryName', '')\n    },\n    //z-paging mounted后自动调用reload方法(mounted后自动调用接口)，默认为是\n    auto: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('auto', true)\n    },\n    //用户下拉刷新时是否触发reload方法，默认为是\n    reloadWhenRefresh: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('reloadWhenRefresh', true)\n    },\n    //reload时自动滚动到顶部，默认为是\n    autoScrollToTopWhenReload: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('autoScrollToTopWhenReload', true)\n    },\n    //reload时立即自动清空原list，默认为是，若立即自动清空，则在reload之后、请求回调之前页面是空白的\n    autoCleanListWhenReload: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('autoCleanListWhenReload', true)\n    },\n    //列表刷新时自动显示下拉刷新view，默认为否\n    showRefresherWhenReload: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('showRefresherWhenReload', false)\n    },\n    //列表刷新时自动显示加载更多view，且为加载中状态，默认为否\n    showLoadingMoreWhenReload: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('showLoadingMoreWhenReload', false)\n    },\n    //组件created时立即触发reload(可解决一些情况下先看到页面再看到loading的问题)，auto为true时有效。为否时将在mounted+nextTick后触发reload，默认为否\n    createdReload: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('createdReload', false)\n    },\n    //本地分页时上拉加载更多延迟时间，单位为毫秒，默认200毫秒\n    localPagingLoadingTime: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('localPagingLoadingTime', 200)\n    },\n    //使用聊天记录模式，默认为否\n    useChatRecordMode: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('useChatRecordMode', false)\n    },\n    //使用聊天记录模式时是否自动隐藏键盘：在用户触摸列表时候自动隐藏键盘，默认为是\n    autoHideKeyboardWhenChat: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('autoHideKeyboardWhenChat', true)\n    },\n    //自动拼接complete中传过来的数组(使用聊天记录模式时无效)\n    concat: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('concat', true)\n    },\n    //父组件v-model所绑定的list的值\n    value: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    }\n  },\n  data: function data() {\n    return {\n      currentData: [],\n      totalData: [],\n      realTotalData: [],\n      totalLocalPagingList: [],\n      dataPromiseResultMap: {\n        reload: null,\n        complete: null,\n        localPaging: null\n      },\n      isSettingCacheList: false,\n      pageNo: 1,\n      currentRefreshPageSize: 0,\n      isLocalPaging: false,\n      isAddedData: false,\n      isTotalChangeFromAddData: false,\n      privateConcat: true,\n      myParentQuery: -1,\n      firstPageLoaded: false,\n      pagingLoaded: false,\n      loaded: false,\n      isUserReload: true,\n      fromEmptyViewReload: false,\n      queryFrom: '',\n      listRendering: false\n    };\n  },\n  computed: {\n    pageSize: function pageSize() {\n      return this.defaultPageSize;\n    },\n    finalConcat: function finalConcat() {\n      return this.concat && this.privateConcat;\n    },\n    finalUseCache: function finalUseCache() {\n      if (this.useCache && !this.cacheKey) {\n        _zPagingUtils.default.consoleErr('use-cache为true时，必须设置cache-key，否则缓存无效！');\n      }\n      return this.useCache && !!this.cacheKey;\n    },\n    finalCacheKey: function finalCacheKey() {\n      return this.cacheKey ? \"\".concat(_zPagingConstant.default.cachePrefixKey, \"-\").concat(this.cacheKey) : null;\n    },\n    isFirstPage: function isFirstPage() {\n      return this.pageNo === this.defaultPageNo;\n    }\n  },\n  watch: {\n    totalData: function totalData(newVal, oldVal) {\n      this._totalDataChange(newVal, oldVal);\n    },\n    currentData: function currentData(newVal, oldVal) {\n      this._currentDataChange(newVal, oldVal);\n    },\n    useChatRecordMode: function useChatRecordMode(newVal, oldVal) {\n      if (newVal) {\n        this.nLoadingMoreFixedHeight = false;\n      }\n    },\n    value: {\n      handler: function handler(newVal) {\n        this.realTotalData = newVal;\n      },\n      immediate: true\n    }\n  },\n  methods: {\n    //请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为是否成功(默认是是）\n    complete: function complete(data) {\n      var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      this.customNoMore = -1;\n      return this.addData(data, success);\n    },\n    //【保证数据一致】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为dataKey，需与:data-key绑定的一致，第三个参数为是否成功(默认为是）\n    completeByKey: function completeByKey(data) {\n      var dataKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var success = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      if (dataKey !== null && this.dataKey !== null && dataKey !== this.dataKey) {\n        this.isFirstPage && this.endRefresh();\n        return new Promise(function (resolve) {\n          return resolve();\n        });\n      }\n      this.customNoMore = -1;\n      return this.addData(data, success);\n    },\n    //【通过total判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为total(列表总数)，第三个参数为是否成功(默认为是）\n    completeByTotal: function completeByTotal(data, total) {\n      var _this = this;\n      var success = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      if (total == 'undefined') {\n        this.customNoMore = -1;\n      } else {\n        var dataTypeRes = this._checkDataType(data, success, false);\n        data = dataTypeRes.data;\n        success = dataTypeRes.success;\n        if (total >= 0 && success) {\n          return new Promise(function (resolve, reject) {\n            _this.$nextTick(function () {\n              var nomore = false;\n              var realTotalDataCount = _this.pageNo == _this.defaultPageNo ? 0 : _this.realTotalData.length;\n              var dataLength = _this.privateConcat ? data.length : 0;\n              var exceedCount = realTotalDataCount + dataLength - total;\n              if (exceedCount >= 0) {\n                nomore = true;\n                exceedCount = _this.defaultPageSize - exceedCount;\n                if (_this.privateConcat && exceedCount > 0 && exceedCount < data.length) {\n                  data = data.splice(0, exceedCount);\n                }\n              }\n              _this.completeByNoMore(data, nomore, success).then(function (res) {\n                return resolve(res);\n              }).catch(function () {\n                return reject();\n              });\n            });\n          });\n        }\n      }\n      return this.addData(data, success);\n    },\n    //【自行判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为是否有更多数据，第三个参数为是否成功(默认是是）\n    completeByNoMore: function completeByNoMore(data, nomore) {\n      var success = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      if (nomore != 'undefined') {\n        this.customNoMore = nomore == true ? 1 : 0;\n      }\n      return this.addData(data, success);\n    },\n    //与上方complete方法功能一致，新版本中设置服务端回调数组请使用complete方法\n    addData: function addData(data) {\n      var _this2 = this;\n      var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      if (!this.fromCompleteEmit) {\n        this.disabledCompleteEmit = true;\n        this.fromCompleteEmit = false;\n      }\n      var currentTimeStamp = _zPagingUtils.default.getTime();\n      var disTime = currentTimeStamp - this.requestTimeStamp;\n      var minDelay = this.minDelay;\n      if (this.isFirstPage && this.finalShowRefresherWhenReload) {\n        minDelay = Math.max(400, minDelay);\n      }\n      var addDataDalay = this.requestTimeStamp > 0 && disTime < minDelay ? minDelay - disTime : 0;\n      this.$nextTick(function () {\n        _zPagingUtils.default.delay(function () {\n          _this2._addData(data, success, false);\n        }, _this2.delay > 0 ? _this2.delay : addDataDalay);\n      });\n      return new Promise(function (resolve, reject) {\n        _this2.dataPromiseResultMap.complete = {\n          resolve: resolve,\n          reject: reject\n        };\n      });\n    },\n    //从顶部添加数据，不会影响分页的pageNo和pageSize\n    addDataFromTop: function addDataFromTop(data) {\n      var _this3 = this;\n      var toTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      var toTopWithAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      data = Object.prototype.toString.call(data) !== '[object Array]' ? [data] : data;\n      this.totalData = [].concat((0, _toConsumableArray2.default)(data), (0, _toConsumableArray2.default)(this.totalData));\n      if (toTop) {\n        _zPagingUtils.default.delay(function () {\n          _this3._scrollToTop(toTopWithAnimate);\n        });\n      }\n    },\n    //重新设置列表数据，调用此方法不会影响pageNo和pageSize，也不会触发请求。适用场景：当需要删除列表中某一项时，将删除对应项后的数组通过此方法传递给z-paging。(当出现类似的需要修改列表数组的场景时，请使用此方法，请勿直接修改page中:list.sync绑定的数组)\n    resetTotalData: function resetTotalData(data) {\n      this.isTotalChangeFromAddData = true;\n      data = Object.prototype.toString.call(data) !== '[object Array]' ? [data] : data;\n      this.totalData = data;\n    },\n    //添加聊天记录\n    addChatRecordData: function addChatRecordData(data) {\n      var _this4 = this;\n      var toBottom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      var toBottomWithAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      data = Object.prototype.toString.call(data) !== '[object Array]' ? [data] : data;\n      if (!this.useChatRecordMode) return;\n      this.isTotalChangeFromAddData = true;\n      this.totalData = this.nIsFirstPageAndNoMore ? [].concat((0, _toConsumableArray2.default)(this.totalData), (0, _toConsumableArray2.default)(data)) : [].concat((0, _toConsumableArray2.default)(data), (0, _toConsumableArray2.default)(this.totalData));\n      if (toBottom) {\n        _zPagingUtils.default.delay(function () {\n          _this4.nIsFirstPageAndNoMore ? _this4._scrollToBottom(toBottomWithAnimate) : _this4._scrollToTop(toBottomWithAnimate);\n        });\n      }\n    },\n    //设置本地分页数据，请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging作分页处理（若调用了此方法，则上拉加载更多时内部会自动分页，不会触发@query所绑定的事件）\n    setLocalPaging: function setLocalPaging(data) {\n      var _this5 = this;\n      var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      this.isLocalPaging = true;\n      this.$nextTick(function () {\n        _this5._addData(data, success, true);\n      });\n      return new Promise(function (resolve, reject) {\n        _this5.dataPromiseResultMap.localPaging = {\n          resolve: resolve,\n          reject: reject\n        };\n      });\n    },\n    //重新加载分页数据，pageNo会恢复为默认值，相当于下拉刷新的效果(animate为true时会展示下拉刷新动画，默认为false)\n    reload: function reload() {\n      var _this6 = this;\n      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showRefresherWhenReload;\n      if (animate) {\n        this.privateShowRefresherWhenReload = animate;\n        this.isUserPullDown = true;\n      }\n      if (!this.showLoadingMoreWhenReload) {\n        this.listRendering = true;\n      }\n      this.$nextTick(function () {\n        _this6._preReload(animate, false);\n      });\n      return new Promise(function (resolve, reject) {\n        _this6.dataPromiseResultMap.reload = {\n          resolve: resolve,\n          reject: reject\n        };\n      });\n    },\n    //刷新列表数据，pageNo和pageSize不会重置，列表数据会重新从服务端获取。必须保证@query绑定的方法中的pageNo和pageSize和传给服务端的一致\n    refresh: function refresh() {\n      var _this7 = this;\n      if (!this.realTotalData.length) return this.reload();\n      var disPageNo = this.pageNo - this.defaultPageNo + 1;\n      if (disPageNo >= 1) {\n        this.loading = true;\n        this.privateConcat = false;\n        var totalPageSize = disPageNo * this.pageSize;\n        this.currentRefreshPageSize = totalPageSize;\n        this._emitQuery(this.defaultPageNo, totalPageSize, _zPagingEnum.default.QueryFrom.Refresh);\n        this._callMyParentQuery(this.defaultPageNo, totalPageSize);\n      }\n      return new Promise(function (resolve, reject) {\n        _this7.dataPromiseResultMap.reload = {\n          resolve: resolve,\n          reject: reject\n        };\n      });\n    },\n    //手动更新列表缓存数据，将自动截取v-model绑定的list中的前pageSize条覆盖缓存，请确保在list数据更新到预期结果后再调用此方法\n    updateCache: function updateCache() {\n      if (this.finalUseCache && this.totalData.length) {\n        this._saveLocalCache(this.totalData.slice(0, Math.min(this.totalData.length, this.pageSize)));\n      }\n    },\n    //清空分页数据\n    clean: function clean() {\n      this._reload(true);\n      this._addData([], true, false);\n    },\n    //清空分页数据\n    clear: function clear() {\n      this.clean();\n    },\n    //手动触发滚动到顶部加载更多，聊天记录模式时有效\n    doChatRecordLoadMore: function doChatRecordLoadMore() {\n      this.useChatRecordMode && this._onLoadingMore('click');\n    },\n    //reload之前的一些处理\n    _preReload: function _preReload() {\n      var _this8 = this;\n      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showRefresherWhenReload;\n      var isFromMounted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      this.isUserReload = true;\n      this.loadingType = _zPagingEnum.default.LoadingType.Refresher;\n      if (animate) {\n        this.privateShowRefresherWhenReload = animate;\n        this.refresherStatus = _zPagingEnum.default.Refresher.Loading;\n        this.refresherRevealStackCount++;\n        _zPagingUtils.default.delay(function () {\n          _this8._getNodeClientRect('zp-n-refresh-container', false).then(function (node) {\n            if (node) {\n              var nodeHeight = node[0].height;\n              _this8.nShowRefresherReveal = true;\n              _this8.nShowRefresherRevealHeight = nodeHeight;\n              _zPagingUtils.default.delay(function () {\n                _this8._nDoRefresherEndAnimation(0, -nodeHeight, false, false);\n                _zPagingUtils.default.delay(function () {\n                  _this8._nDoRefresherEndAnimation(nodeHeight, 0);\n                }, 10);\n              }, 10);\n            }\n            _this8._reload(false, isFromMounted);\n            _this8._doRefresherLoad(false);\n          });\n        }, this.pagingLoaded ? 10 : 100);\n        return;\n      } else {\n        this._refresherEnd(false, false, false, false);\n      }\n      this._reload(false, isFromMounted);\n    },\n    //重新加载分页数据\n    _reload: function _reload() {\n      var _this9 = this;\n      var isClean = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var isFromMounted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var isUserPullDown = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      this.isAddedData = false;\n      this.insideOfPaging = -1;\n      this.cacheScrollNodeHeight = -1;\n      this.pageNo = this.defaultPageNo;\n      this._cleanRefresherEndTimeout();\n      !this.privateShowRefresherWhenReload && !isClean && this._startLoading(true);\n      this.firstPageLoaded = true;\n      this.isTotalChangeFromAddData = false;\n      if (!this.isSettingCacheList) {\n        this.totalData = [];\n      }\n      if (!isClean) {\n        this._emitQuery(this.pageNo, this.defaultPageSize, isUserPullDown ? _zPagingEnum.default.QueryFrom.UserPullDown : _zPagingEnum.default.QueryFrom.Reload);\n        var delay = 0;\n        _zPagingUtils.default.delay(this._callMyParentQuery, delay);\n        if (!isFromMounted && this.autoScrollToTopWhenReload) {\n          var checkedNRefresherLoading = true;\n          checkedNRefresherLoading = !this.nRefresherLoading;\n          checkedNRefresherLoading && this._scrollToTop(false);\n        }\n      }\n      this.$nextTick(function () {\n        _this9.nShowBottom = _this9.realTotalData.length > 0;\n      });\n    },\n    //处理服务端返回的数组\n    _addData: function _addData(data, success, isLocal) {\n      var _this10 = this;\n      this.isAddedData = true;\n      this.fromEmptyViewReload = false;\n      this.isTotalChangeFromAddData = true;\n      this.refresherTriggered = false;\n      this._endSystemLoadingAndRefresh();\n      var tempIsUserPullDown = this.isUserPullDown;\n      if (this.showRefresherUpdateTime && this.isFirstPage) {\n        _zPagingUtils.default.setRefesrherTime(_zPagingUtils.default.getTime(), this.refresherUpdateTimeKey);\n        this.$refs.refresh && this.$refs.refresh.updateTime();\n      }\n      if (!isLocal && tempIsUserPullDown && this.isFirstPage) {\n        this.isUserPullDown = false;\n      }\n      if (!this.isFirstPage) {\n        this.listRendering = true;\n        this.$nextTick(function () {\n          _zPagingUtils.default.delay(function () {\n            _this10.listRendering = false;\n          });\n        });\n      } else {\n        this.listRendering = false;\n      }\n      var dataTypeRes = this._checkDataType(data, success, isLocal);\n      data = dataTypeRes.data;\n      success = dataTypeRes.success;\n      var delayTime = _zPagingConstant.default.delayTime;\n      if (this.useChatRecordMode) delayTime = 0;\n      this.loadingForNow = false;\n      _zPagingUtils.default.delay(function () {\n        _this10.pagingLoaded = true;\n        _this10.$nextTick(function () {\n          !isLocal && _this10._refresherEnd(delayTime > 0, true, tempIsUserPullDown);\n        });\n      });\n      if (this.isFirstPage) {\n        this.isLoadFailed = !success;\n        this.$emit('isLoadFailedChange', this.isLoadFailed);\n        if (this.finalUseCache && success && (this.cacheMode === _zPagingEnum.default.CacheMode.Always ? true : this.isSettingCacheList)) {\n          this._saveLocalCache(data);\n        }\n      }\n      this.isSettingCacheList = false;\n      if (success) {\n        if (!(this.privateConcat === false && this.loadingStatus === _zPagingEnum.default.More.NoMore)) {\n          this.loadingStatus = _zPagingEnum.default.More.Default;\n        }\n        if (isLocal) {\n          this.totalLocalPagingList = data;\n          var localPageNo = this.defaultPageNo;\n          var localPageSize = this.queryFrom !== _zPagingEnum.default.QueryFrom.Refresh ? this.defaultPageSize : this.currentRefreshPageSize;\n          this._localPagingQueryList(localPageNo, localPageSize, 0, function (res) {\n            _this10.completeByTotal(res, _this10.totalLocalPagingList.length);\n          });\n        } else {\n          var dataChangeDelayTime = 0;\n          if (this.privateShowRefresherWhenReload && this.finalNvueListIs === 'waterfall') {\n            dataChangeDelayTime = 150;\n          }\n          _zPagingUtils.default.delay(function () {\n            _this10._currentDataChange(data, _this10.currentData);\n            _this10._callDataPromise(true, _this10.totalData);\n          }, dataChangeDelayTime);\n        }\n      } else {\n        this._currentDataChange(data, this.currentData);\n        this._callDataPromise(false);\n        this.loadingStatus = _zPagingEnum.default.More.Fail;\n        if (this.loadingType === _zPagingEnum.default.LoadingType.LoadingMore) {\n          this.pageNo--;\n        }\n      }\n    },\n    //所有数据改变时调用\n    _totalDataChange: function _totalDataChange(newVal, oldVal) {\n      var _this11 = this;\n      var eventThrow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      if ((!this.isUserReload || !this.autoCleanListWhenReload) && this.firstPageLoaded && !newVal.length && oldVal.length) {\n        return;\n      }\n      this._doCheckScrollViewShouldFullHeight(newVal);\n      if (!this.realTotalData.length && !newVal.length) {\n        eventThrow = false;\n      }\n      this.realTotalData = newVal;\n      if (eventThrow) {\n        this.$emit('input', newVal);\n        this.$emit('update:list', newVal);\n        this.$emit('listChange', newVal);\n        this._callMyParentList(newVal);\n      }\n      this.firstPageLoaded = false;\n      this.isTotalChangeFromAddData = false;\n      this.$nextTick(function () {\n        _zPagingUtils.default.delay(function () {\n          _this11._getNodeClientRect('.zp-paging-container-content').then(function (res) {\n            res && _this11.$emit('contentHeightChanged', res[0].height);\n          });\n        }, _zPagingConstant.default.delayTime * (_this11.isIos ? 1 : 3));\n        if (_this11.useChatRecordMode && _this11.nIsFirstPageAndNoMore && _this11.isFirstPage && !_this11.nFirstPageAndNoMoreChecked) {\n          _this11.nFirstPageAndNoMoreChecked = true;\n          _this11._scrollToBottom(false);\n        }\n        _zPagingUtils.default.delay(function () {\n          _this11.nShowBottom = true;\n        }, _zPagingConstant.default.delayTime * 6, 'nShowBottomDelay');\n      });\n    },\n    //当前数据改变时调用\n    _currentDataChange: function _currentDataChange(newVal, oldVal) {\n      newVal = (0, _toConsumableArray2.default)(newVal);\n      if (this.isFirstPage && this.finalConcat) {\n        this.totalData = [];\n      }\n      if (this.customNoMore !== -1) {\n        if (this.customNoMore === 1 || !newVal.length) {\n          this.loadingStatus = _zPagingEnum.default.More.NoMore;\n        }\n      } else {\n        if (!newVal.length || newVal.length && newVal.length < this.defaultPageSize) {\n          this.loadingStatus = _zPagingEnum.default.More.NoMore;\n        }\n      }\n      if (!this.totalData.length) {\n        if (this.finalConcat) {\n          if (this.useChatRecordMode && this.isFirstPage && this.loadingStatus === _zPagingEnum.default.More.NoMore) {\n            newVal.reverse();\n          }\n          this.totalData = newVal;\n        }\n        if (this.useChatRecordMode) {}\n      } else {\n        if (this.useChatRecordMode) {\n          this.totalData = [].concat((0, _toConsumableArray2.default)(this.totalData), (0, _toConsumableArray2.default)(newVal));\n        } else {\n          if (this.finalConcat) {\n            var currentScrollTop = this.oldScrollTop;\n            this.totalData = [].concat((0, _toConsumableArray2.default)(this.totalData), (0, _toConsumableArray2.default)(newVal));\n          } else {\n            this.totalData = newVal;\n          }\n        }\n      }\n      this.privateConcat = true;\n    },\n    //本地分页请求\n    _localPagingQueryList: function _localPagingQueryList(pageNo, pageSize, localPagingLoadingTime, callback) {\n      pageNo = Math.max(1, pageNo);\n      pageSize = Math.max(1, pageSize);\n      var totalPagingList = (0, _toConsumableArray2.default)(this.totalLocalPagingList);\n      var pageNoIndex = (pageNo - 1) * pageSize;\n      var finalPageNoIndex = Math.min(totalPagingList.length, pageNoIndex + pageSize);\n      var resultPagingList = totalPagingList.splice(pageNoIndex, finalPageNoIndex - pageNoIndex);\n      _zPagingUtils.default.delay(function () {\n        return callback(resultPagingList);\n      }, localPagingLoadingTime);\n    },\n    //存储列表缓存数据\n    _saveLocalCache: function _saveLocalCache(data) {\n      uni.setStorageSync(this.finalCacheKey, data);\n    },\n    //通过缓存数据填充列表数据\n    _setListByLocalCache: function _setListByLocalCache() {\n      this.totalData = uni.getStorageSync(this.finalCacheKey) || [];\n      this.isSettingCacheList = true;\n    },\n    //修改父view的list\n    _callMyParentList: function _callMyParentList(newVal) {\n      if (this.autowireListName.length) {\n        var myParent = _zPagingUtils.default.getParent(this.$parent);\n        if (myParent && myParent[this.autowireListName]) {\n          myParent[this.autowireListName] = newVal;\n        }\n      }\n    },\n    //调用父view的query\n    _callMyParentQuery: function _callMyParentQuery() {\n      var customPageNo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      var customPageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      if (this.autowireQueryName) {\n        if (this.myParentQuery === -1) {\n          var myParent = _zPagingUtils.default.getParent(this.$parent);\n          if (myParent && myParent[this.autowireQueryName]) {\n            this.myParentQuery = myParent[this.autowireQueryName];\n          }\n        }\n        if (this.myParentQuery !== -1) {\n          customPageSize > 0 ? this.myParentQuery(customPageNo, customPageSize) : this.myParentQuery(this.pageNo, this.defaultPageSize);\n        }\n      }\n    },\n    //emit query事件\n    _emitQuery: function _emitQuery(pageNo, pageSize, from) {\n      this.queryFrom = from;\n      this.requestTimeStamp = _zPagingUtils.default.getTime();\n      var _this$realTotalData$s = this.realTotalData.slice(-1),\n        _this$realTotalData$s2 = (0, _slicedToArray2.default)(_this$realTotalData$s, 1),\n        lastItem = _this$realTotalData$s2[0];\n      this.$emit.apply(this, ['query'].concat((0, _toConsumableArray2.default)(_zPagingInterceptor.default._handleQuery(pageNo, pageSize, from, lastItem || null))));\n    },\n    //触发数据改变promise\n    _callDataPromise: function _callDataPromise(success, totalList) {\n      for (var key in this.dataPromiseResultMap) {\n        var obj = this.dataPromiseResultMap[key];\n        success ? !!obj && obj.resolve({\n          totalList: totalList,\n          noMore: this.loadingStatus === _zPagingEnum.default.More.NoMore\n        }) : !!obj && obj.reject();\n      }\n    },\n    //检查complete data的类型\n    _checkDataType: function _checkDataType(data, success, isLocal) {\n      var dataType = Object.prototype.toString.call(data);\n      if (dataType === '[object Boolean]') {\n        success = data;\n        data = [];\n      } else if (dataType !== '[object Array]') {\n        data = [];\n        if (dataType !== '[object Undefined]' && dataType !== '[object Null]') {\n          _zPagingUtils.default.consoleErr(\"\".concat(isLocal ? 'setLocalPaging' : 'complete', \"\\u53C2\\u6570\\u7C7B\\u578B\\u4E0D\\u6B63\\u786E\\uFF0C\\u7B2C\\u4E00\\u4E2A\\u53C2\\u6570\\u7C7B\\u578B\\u5FC5\\u987B\\u4E3AArray!\"));\n        }\n      }\n      return {\n        data: data,\n        success: success\n      };\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy9tb2R1bGVzL2RhdGEtaGFuZGxlLmpzIl0sIm5hbWVzIjpbInByb3BzIiwiZGVmYXVsdFBhZ2VObyIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJkZWZhdWx0IiwidSIsImdjIiwib2JzZXJ2ZXIiLCJuZXdWYWwiLCJwYWdlTm8iLCJkZWZhdWx0UGFnZVNpemUiLCJ2YWxpZGF0b3IiLCJ2YWx1ZSIsImNvbnNvbGVFcnIiLCJkYXRhS2V5IiwiT2JqZWN0IiwidXNlQ2FjaGUiLCJCb29sZWFuIiwiY2FjaGVLZXkiLCJjYWNoZU1vZGUiLCJFbnVtIiwiQ2FjaGVNb2RlIiwiRGVmYXVsdCIsImF1dG93aXJlTGlzdE5hbWUiLCJhdXRvd2lyZVF1ZXJ5TmFtZSIsImF1dG8iLCJyZWxvYWRXaGVuUmVmcmVzaCIsImF1dG9TY3JvbGxUb1RvcFdoZW5SZWxvYWQiLCJhdXRvQ2xlYW5MaXN0V2hlblJlbG9hZCIsInNob3dSZWZyZXNoZXJXaGVuUmVsb2FkIiwic2hvd0xvYWRpbmdNb3JlV2hlblJlbG9hZCIsImNyZWF0ZWRSZWxvYWQiLCJsb2NhbFBhZ2luZ0xvYWRpbmdUaW1lIiwidXNlQ2hhdFJlY29yZE1vZGUiLCJhdXRvSGlkZUtleWJvYXJkV2hlbkNoYXQiLCJjb25jYXQiLCJBcnJheSIsImRhdGEiLCJjdXJyZW50RGF0YSIsInRvdGFsRGF0YSIsInJlYWxUb3RhbERhdGEiLCJ0b3RhbExvY2FsUGFnaW5nTGlzdCIsImRhdGFQcm9taXNlUmVzdWx0TWFwIiwicmVsb2FkIiwiY29tcGxldGUiLCJsb2NhbFBhZ2luZyIsImlzU2V0dGluZ0NhY2hlTGlzdCIsImN1cnJlbnRSZWZyZXNoUGFnZVNpemUiLCJpc0xvY2FsUGFnaW5nIiwiaXNBZGRlZERhdGEiLCJpc1RvdGFsQ2hhbmdlRnJvbUFkZERhdGEiLCJwcml2YXRlQ29uY2F0IiwibXlQYXJlbnRRdWVyeSIsImZpcnN0UGFnZUxvYWRlZCIsInBhZ2luZ0xvYWRlZCIsImxvYWRlZCIsImlzVXNlclJlbG9hZCIsImZyb21FbXB0eVZpZXdSZWxvYWQiLCJxdWVyeUZyb20iLCJsaXN0UmVuZGVyaW5nIiwiY29tcHV0ZWQiLCJwYWdlU2l6ZSIsImZpbmFsQ29uY2F0IiwiZmluYWxVc2VDYWNoZSIsImZpbmFsQ2FjaGVLZXkiLCJjIiwiY2FjaGVQcmVmaXhLZXkiLCJpc0ZpcnN0UGFnZSIsIndhdGNoIiwib2xkVmFsIiwiX3RvdGFsRGF0YUNoYW5nZSIsIl9jdXJyZW50RGF0YUNoYW5nZSIsIm5Mb2FkaW5nTW9yZUZpeGVkSGVpZ2h0IiwiaGFuZGxlciIsImltbWVkaWF0ZSIsIm1ldGhvZHMiLCJzdWNjZXNzIiwiY3VzdG9tTm9Nb3JlIiwiYWRkRGF0YSIsImNvbXBsZXRlQnlLZXkiLCJlbmRSZWZyZXNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjb21wbGV0ZUJ5VG90YWwiLCJ0b3RhbCIsImRhdGFUeXBlUmVzIiwiX2NoZWNrRGF0YVR5cGUiLCJyZWplY3QiLCIkbmV4dFRpY2siLCJub21vcmUiLCJyZWFsVG90YWxEYXRhQ291bnQiLCJsZW5ndGgiLCJkYXRhTGVuZ3RoIiwiZXhjZWVkQ291bnQiLCJzcGxpY2UiLCJjb21wbGV0ZUJ5Tm9Nb3JlIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZnJvbUNvbXBsZXRlRW1pdCIsImRpc2FibGVkQ29tcGxldGVFbWl0IiwiY3VycmVudFRpbWVTdGFtcCIsImdldFRpbWUiLCJkaXNUaW1lIiwicmVxdWVzdFRpbWVTdGFtcCIsIm1pbkRlbGF5IiwiZmluYWxTaG93UmVmcmVzaGVyV2hlblJlbG9hZCIsIk1hdGgiLCJtYXgiLCJhZGREYXRhRGFsYXkiLCJkZWxheSIsIl9hZGREYXRhIiwiYWRkRGF0YUZyb21Ub3AiLCJ0b1RvcCIsInRvVG9wV2l0aEFuaW1hdGUiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJfc2Nyb2xsVG9Ub3AiLCJyZXNldFRvdGFsRGF0YSIsImFkZENoYXRSZWNvcmREYXRhIiwidG9Cb3R0b20iLCJ0b0JvdHRvbVdpdGhBbmltYXRlIiwibklzRmlyc3RQYWdlQW5kTm9Nb3JlIiwiX3Njcm9sbFRvQm90dG9tIiwic2V0TG9jYWxQYWdpbmciLCJhbmltYXRlIiwicHJpdmF0ZVNob3dSZWZyZXNoZXJXaGVuUmVsb2FkIiwiaXNVc2VyUHVsbERvd24iLCJfcHJlUmVsb2FkIiwicmVmcmVzaCIsImRpc1BhZ2VObyIsImxvYWRpbmciLCJ0b3RhbFBhZ2VTaXplIiwiX2VtaXRRdWVyeSIsIlF1ZXJ5RnJvbSIsIlJlZnJlc2giLCJfY2FsbE15UGFyZW50UXVlcnkiLCJ1cGRhdGVDYWNoZSIsIl9zYXZlTG9jYWxDYWNoZSIsInNsaWNlIiwibWluIiwiY2xlYW4iLCJfcmVsb2FkIiwiY2xlYXIiLCJkb0NoYXRSZWNvcmRMb2FkTW9yZSIsIl9vbkxvYWRpbmdNb3JlIiwiaXNGcm9tTW91bnRlZCIsImxvYWRpbmdUeXBlIiwiTG9hZGluZ1R5cGUiLCJSZWZyZXNoZXIiLCJyZWZyZXNoZXJTdGF0dXMiLCJMb2FkaW5nIiwicmVmcmVzaGVyUmV2ZWFsU3RhY2tDb3VudCIsIl9nZXROb2RlQ2xpZW50UmVjdCIsIm5vZGUiLCJub2RlSGVpZ2h0IiwiaGVpZ2h0IiwiblNob3dSZWZyZXNoZXJSZXZlYWwiLCJuU2hvd1JlZnJlc2hlclJldmVhbEhlaWdodCIsIl9uRG9SZWZyZXNoZXJFbmRBbmltYXRpb24iLCJfZG9SZWZyZXNoZXJMb2FkIiwiX3JlZnJlc2hlckVuZCIsImlzQ2xlYW4iLCJpbnNpZGVPZlBhZ2luZyIsImNhY2hlU2Nyb2xsTm9kZUhlaWdodCIsIl9jbGVhblJlZnJlc2hlckVuZFRpbWVvdXQiLCJfc3RhcnRMb2FkaW5nIiwiVXNlclB1bGxEb3duIiwiUmVsb2FkIiwiY2hlY2tlZE5SZWZyZXNoZXJMb2FkaW5nIiwiblJlZnJlc2hlckxvYWRpbmciLCJuU2hvd0JvdHRvbSIsImlzTG9jYWwiLCJyZWZyZXNoZXJUcmlnZ2VyZWQiLCJfZW5kU3lzdGVtTG9hZGluZ0FuZFJlZnJlc2giLCJ0ZW1wSXNVc2VyUHVsbERvd24iLCJzaG93UmVmcmVzaGVyVXBkYXRlVGltZSIsInNldFJlZmVzcmhlclRpbWUiLCJyZWZyZXNoZXJVcGRhdGVUaW1lS2V5IiwiJHJlZnMiLCJ1cGRhdGVUaW1lIiwiZGVsYXlUaW1lIiwibG9hZGluZ0Zvck5vdyIsImlzTG9hZEZhaWxlZCIsIiRlbWl0IiwiQWx3YXlzIiwibG9hZGluZ1N0YXR1cyIsIk1vcmUiLCJOb01vcmUiLCJsb2NhbFBhZ2VObyIsImxvY2FsUGFnZVNpemUiLCJfbG9jYWxQYWdpbmdRdWVyeUxpc3QiLCJkYXRhQ2hhbmdlRGVsYXlUaW1lIiwiZmluYWxOdnVlTGlzdElzIiwiX2NhbGxEYXRhUHJvbWlzZSIsIkZhaWwiLCJMb2FkaW5nTW9yZSIsImV2ZW50VGhyb3ciLCJfZG9DaGVja1Njcm9sbFZpZXdTaG91bGRGdWxsSGVpZ2h0IiwiX2NhbGxNeVBhcmVudExpc3QiLCJpc0lvcyIsIm5GaXJzdFBhZ2VBbmROb01vcmVDaGVja2VkIiwicmV2ZXJzZSIsImN1cnJlbnRTY3JvbGxUb3AiLCJvbGRTY3JvbGxUb3AiLCJjYWxsYmFjayIsInRvdGFsUGFnaW5nTGlzdCIsInBhZ2VOb0luZGV4IiwiZmluYWxQYWdlTm9JbmRleCIsInJlc3VsdFBhZ2luZ0xpc3QiLCJ1bmkiLCJzZXRTdG9yYWdlU3luYyIsIl9zZXRMaXN0QnlMb2NhbENhY2hlIiwiZ2V0U3RvcmFnZVN5bmMiLCJteVBhcmVudCIsImdldFBhcmVudCIsIiRwYXJlbnQiLCJjdXN0b21QYWdlTm8iLCJjdXN0b21QYWdlU2l6ZSIsImZyb20iLCJsYXN0SXRlbSIsImludGVyY2VwdG9yIiwiX2hhbmRsZVF1ZXJ5IiwidG90YWxMaXN0Iiwia2V5Iiwib2JqIiwibm9Nb3JlIiwiZGF0YVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQSxnQkFNZTtFQUNkQSxLQUFLLEVBQUU7SUFDTjtJQUNBQyxhQUFhLEVBQUU7TUFD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R0FBRyxJQUFJQSxHQUFHLENBQUNoSixPQUFPLENBQUM7VUFBRThJLFNBQVMsRUFBVEEsU0FBUztVQUFFRyxNQUFNLEVBQUUsSUFBSSxDQUFDeEMsYUFBYSxLQUFLdkssb0JBQUksQ0FBQ3dLLElBQUksQ0FBQ0M7UUFBTyxDQUFDLENBQUMsR0FBSyxDQUFDLENBQUNxQyxHQUFHLElBQUlBLEdBQUcsQ0FBQzNJLE1BQU0sRUFBRztNQUMzSDtJQUNELENBQUM7SUFDRDtJQUNBRCxjQUFjLDBCQUFDakQsSUFBSSxFQUFFdUMsT0FBTyxFQUFFaUcsT0FBTyxFQUFFO01BQ3RDLElBQU11RCxRQUFRLEdBQUdyTixNQUFNLENBQUNvRyxTQUFTLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDaEYsSUFBSSxDQUFDO01BQ3JELElBQUkrTCxRQUFRLEtBQUssa0JBQWtCLEVBQUU7UUFDcEN4SixPQUFPLEdBQUd2QyxJQUFJO1FBQ2RBLElBQUksR0FBRyxFQUFFO01BQ1YsQ0FBQyxNQUFNLElBQUkrTCxRQUFRLEtBQUssZ0JBQWdCLEVBQUU7UUFDekMvTCxJQUFJLEdBQUcsRUFBRTtRQUNULElBQUkrTCxRQUFRLEtBQUssb0JBQW9CLElBQUlBLFFBQVEsS0FBSyxlQUFlLEVBQUU7VUFDdEUvTixxQkFBQyxDQUFDUSxVQUFVLFdBQUlnSyxPQUFPLEdBQUcsZ0JBQWdCLEdBQUcsVUFBVSx3SEFBMkI7UUFDbkY7TUFDRDtNQUNBLE9BQU87UUFBRXhJLElBQUksRUFBSkEsSUFBSTtRQUFFdUMsT0FBTyxFQUFQQTtNQUFRLENBQUM7SUFDekI7RUFDRDtBQUNELENBQUM7QUFBQSIsImZpbGUiOiI2OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFt6LXBhZ2luZ13mlbDmja7lpITnkIbmqKHlnZdcbmltcG9ydCB1IGZyb20gJy4uLy4vei1wYWdpbmctdXRpbHMnXG5pbXBvcnQgYyBmcm9tICcuLi8uL3otcGFnaW5nLWNvbnN0YW50J1xuaW1wb3J0IEVudW0gZnJvbSAnLi4vLi96LXBhZ2luZy1lbnVtJ1xuaW1wb3J0IGludGVyY2VwdG9yIGZyb20gJy4uL3otcGFnaW5nLWludGVyY2VwdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiB7XG5cdFx0Ly/oh6rlrprkuYnliJ3lp4vnmoRwYWdlTm/vvIzpu5jorqTkuLoxXG5cdFx0ZGVmYXVsdFBhZ2VObzoge1xuXHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2RlZmF1bHRQYWdlTm8nLCAxKSxcblx0XHRcdG9ic2VydmVyOiBmdW5jdGlvbihuZXdWYWwpIHtcblx0XHRcdFx0dGhpcy5wYWdlTm8gPSBuZXdWYWw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYlwYWdlU2l6Ze+8jOm7mOiupOS4ujEwXG5cdFx0ZGVmYXVsdFBhZ2VTaXplOiB7XG5cdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnZGVmYXVsdFBhZ2VTaXplJywgMTApLFxuXHRcdFx0dmFsaWRhdG9yOiAodmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKHZhbHVlIDw9IDApIHUuY29uc29sZUVycignZGVmYXVsdC1wYWdlLXNpemXlv4XpobvlpKfkuo4w77yBJyk7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA+IDA7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+S4uuS/neivgeaVsOaNruS4gOiHtO+8jOiuvue9ruW9k+WJjXRhYuWIh+aNouaXtueahOagh+ivhmtlee+8jOW5tuWcqGNvbXBsZXRl5Lit5Lyg6YCS55u45ZCMa2V577yM6Iul5LqM6ICF5LiN5LiA6Ie077yM5YiZY29tcGxldGXlsIbkuI3kvJrnlJ/mlYhcblx0XHRkYXRhS2V5OiB7XG5cdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmcsIE9iamVjdF0sXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHUuZ2MoJ2RhdGFLZXknLCBudWxsKTtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQvL+S9v+eUqOe8k+WtmO+8jOiLpeW8gOWQr+WwhuiHquWKqOe8k+WtmOesrOS4gOmhteeahOaVsOaNru+8jOm7mOiupOS4uuWQpuOAguivt+azqOaEj++8jOWboOiAg+iZkeWIsOWIh+aNonRhYuaXtuS4jeWQjHRhYuaVsOaNruS4jeWQjOeahOaDheWGte+8jOm7mOiupOS7heS8mue8k+WtmOe7hOS7tummluasoeWKoOi9veaXtuesrOS4gOasoeivt+axguWIsOeahOaVsOaNru+8jOWQjue7reeahOS4i+aLieWIt+aWsOaTjeS9nOS4jeS8muabtOaWsOe8k+WtmOOAglxuXHRcdHVzZUNhY2hlOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygndXNlQ2FjaGUnLCBmYWxzZSlcblx0XHR9LFxuXHRcdC8v5L2/55So57yT5a2Y5pe257yT5a2Y55qEa2V577yM55So5LqO5Yy65YiG5LiN5ZCM5YiX6KGo55qE57yT5a2Y5pWw5o2u77yMdXNlQ2FjaGXkuLp0cnVl5pe25b+F6aG76K6+572u77yM5ZCm5YiZ57yT5a2Y5peg5pWIXG5cdFx0Y2FjaGVLZXk6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2NhY2hlS2V5JywgbnVsbClcblx0XHR9LFxuXHRcdC8v57yT5a2Y5qih5byP77yM6buY6K6k5LuF5Lya57yT5a2Y57uE5Lu26aaW5qyh5Yqg6L295pe256ys5LiA5qyh6K+35rGC5Yiw55qE5pWw5o2u77yM5Y+v6K6+572u5Li6YWx3YXlz77yM5Y2z5Luj6KGo5oC75piv57yT5a2Y77yM5q+P5qyh5YiX6KGo5Yi35pawKOS4i+aLieWIt+aWsOOAgeiwg+eUqHJlbG9hZOetiSnpg73kvJrmm7TmlrDnvJPlrZhcblx0XHRjYWNoZU1vZGU6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2NhY2hlTW9kZScsIEVudW0uQ2FjaGVNb2RlLkRlZmF1bHQpXG5cdFx0fSxcblx0XHQvL+iHquWKqOazqOWFpeeahGxpc3TlkI3vvIzlj6/oh6rliqjkv67mlLnniLZ2aWV3KOWMheWQq3JlZj1cInBhZ2luZ1wiKeS4reWvueW6lG5hbWXnmoRsaXN05YC8XG5cdFx0YXV0b3dpcmVMaXN0TmFtZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnYXV0b3dpcmVMaXN0TmFtZScsICcnKVxuXHRcdH0sXG5cdFx0Ly/oh6rliqjms6jlhaXnmoRxdWVyeeWQje+8jOWPr+iHquWKqOiwg+eUqOeItnZpZXco5YyF5ZCrcmVmPVwicGFnaW5nXCIp5Lit55qEcXVlcnnmlrnms5Vcblx0XHRhdXRvd2lyZVF1ZXJ5TmFtZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnYXV0b3dpcmVRdWVyeU5hbWUnLCAnJylcblx0XHR9LFxuXHRcdC8vei1wYWdpbmcgbW91bnRlZOWQjuiHquWKqOiwg+eUqHJlbG9hZOaWueazlShtb3VudGVk5ZCO6Ieq5Yqo6LCD55So5o6l5Y+jKe+8jOm7mOiupOS4uuaYr1xuXHRcdGF1dG86IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdhdXRvJywgdHJ1ZSlcblx0XHR9LFxuXHRcdC8v55So5oi35LiL5ouJ5Yi35paw5pe25piv5ZCm6Kem5Y+RcmVsb2Fk5pa55rOV77yM6buY6K6k5Li65pivXG5cdFx0cmVsb2FkV2hlblJlZnJlc2g6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdyZWxvYWRXaGVuUmVmcmVzaCcsIHRydWUpXG5cdFx0fSxcblx0XHQvL3JlbG9hZOaXtuiHquWKqOa7muWKqOWIsOmhtumDqO+8jOm7mOiupOS4uuaYr1xuXHRcdGF1dG9TY3JvbGxUb1RvcFdoZW5SZWxvYWQ6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdhdXRvU2Nyb2xsVG9Ub3BXaGVuUmVsb2FkJywgdHJ1ZSlcblx0XHR9LFxuXHRcdC8vcmVsb2Fk5pe256uL5Y2z6Ieq5Yqo5riF56m65Y6fbGlzdO+8jOm7mOiupOS4uuaYr++8jOiLpeeri+WNs+iHquWKqOa4heepuu+8jOWImeWcqHJlbG9hZOS5i+WQjuOAgeivt+axguWbnuiwg+S5i+WJjemhtemdouaYr+epuueZveeahFxuXHRcdGF1dG9DbGVhbkxpc3RXaGVuUmVsb2FkOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnYXV0b0NsZWFuTGlzdFdoZW5SZWxvYWQnLCB0cnVlKVxuXHRcdH0sXG5cdFx0Ly/liJfooajliLfmlrDml7boh6rliqjmmL7npLrkuIvmi4nliLfmlrB2aWV377yM6buY6K6k5Li65ZCmXG5cdFx0c2hvd1JlZnJlc2hlcldoZW5SZWxvYWQ6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdzaG93UmVmcmVzaGVyV2hlblJlbG9hZCcsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/liJfooajliLfmlrDml7boh6rliqjmmL7npLrliqDovb3mm7TlpJp2aWV377yM5LiU5Li65Yqg6L295Lit54q25oCB77yM6buY6K6k5Li65ZCmXG5cdFx0c2hvd0xvYWRpbmdNb3JlV2hlblJlbG9hZDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3Nob3dMb2FkaW5nTW9yZVdoZW5SZWxvYWQnLCBmYWxzZSlcblx0XHR9LFxuXHRcdC8v57uE5Lu2Y3JlYXRlZOaXtueri+WNs+inpuWPkXJlbG9hZCjlj6/op6PlhrPkuIDkupvmg4XlhrXkuIvlhYjnnIvliLDpobXpnaLlho3nnIvliLBsb2FkaW5n55qE6Zeu6aKYKe+8jGF1dG/kuLp0cnVl5pe25pyJ5pWI44CC5Li65ZCm5pe25bCG5ZyobW91bnRlZCtuZXh0VGlja+WQjuinpuWPkXJlbG9hZO+8jOm7mOiupOS4uuWQplxuXHRcdGNyZWF0ZWRSZWxvYWQ6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdjcmVhdGVkUmVsb2FkJywgZmFsc2UpXG5cdFx0fSxcblx0XHQvL+acrOWcsOWIhumhteaXtuS4iuaLieWKoOi9veabtOWkmuW7tui/n+aXtumXtO+8jOWNleS9jeS4uuavq+enku+8jOm7mOiupDIwMOavq+enklxuXHRcdGxvY2FsUGFnaW5nTG9hZGluZ1RpbWU6IHtcblx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdsb2NhbFBhZ2luZ0xvYWRpbmdUaW1lJywgMjAwKVxuXHRcdH0sXG5cdFx0Ly/kvb/nlKjogYrlpKnorrDlvZXmqKHlvI/vvIzpu5jorqTkuLrlkKZcblx0XHR1c2VDaGF0UmVjb3JkTW9kZToge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3VzZUNoYXRSZWNvcmRNb2RlJywgZmFsc2UpXG5cdFx0fSxcblx0XHQvL+S9v+eUqOiBiuWkqeiusOW9leaooeW8j+aXtuaYr+WQpuiHquWKqOmakOiXj+mUruebmO+8muWcqOeUqOaIt+inpuaRuOWIl+ihqOaXtuWAmeiHquWKqOmakOiXj+mUruebmO+8jOm7mOiupOS4uuaYr1xuXHRcdGF1dG9IaWRlS2V5Ym9hcmRXaGVuQ2hhdDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2F1dG9IaWRlS2V5Ym9hcmRXaGVuQ2hhdCcsIHRydWUpXG5cdFx0fSxcblx0XHQvL+iHquWKqOaLvOaOpWNvbXBsZXRl5Lit5Lyg6L+H5p2l55qE5pWw57uEKOS9v+eUqOiBiuWkqeiusOW9leaooeW8j+aXtuaXoOaViClcblx0XHRjb25jYXQ6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdjb25jYXQnLCB0cnVlKVxuXHRcdH0sXG5cdFx0Ly/niLbnu4Tku7Z2LW1vZGVs5omA57uR5a6a55qEbGlzdOeahOWAvFxuXHRcdHZhbHVlOiB7XG5cdFx0XHR0eXBlOiBBcnJheSxcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9XG5cdFx0fSxcblxuXG5cblxuXG5cblxuXG5cdH0sXG5cdGRhdGEgKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGN1cnJlbnREYXRhOiBbXSxcblx0XHRcdHRvdGFsRGF0YTogW10sXG5cdFx0XHRyZWFsVG90YWxEYXRhOiBbXSxcblx0XHRcdHRvdGFsTG9jYWxQYWdpbmdMaXN0OiBbXSxcblx0XHRcdGRhdGFQcm9taXNlUmVzdWx0TWFwOiB7XG5cdFx0XHRcdHJlbG9hZDogbnVsbCxcblx0XHRcdFx0Y29tcGxldGU6IG51bGwsXG5cdFx0XHRcdGxvY2FsUGFnaW5nOiBudWxsXG5cdFx0XHR9LFxuXHRcdFx0aXNTZXR0aW5nQ2FjaGVMaXN0OiBmYWxzZSxcblx0XHRcdHBhZ2VObzogMSxcblx0XHRcdGN1cnJlbnRSZWZyZXNoUGFnZVNpemU6IDAsXG5cdFx0XHRpc0xvY2FsUGFnaW5nOiBmYWxzZSxcblx0XHRcdGlzQWRkZWREYXRhOiBmYWxzZSxcblx0XHRcdGlzVG90YWxDaGFuZ2VGcm9tQWRkRGF0YTogZmFsc2UsXG5cdFx0XHRwcml2YXRlQ29uY2F0OiB0cnVlLFxuXHRcdFx0bXlQYXJlbnRRdWVyeTogLTEsXG5cdFx0XHRmaXJzdFBhZ2VMb2FkZWQ6IGZhbHNlLFxuXHRcdFx0cGFnaW5nTG9hZGVkOiBmYWxzZSxcblx0XHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0XHRpc1VzZXJSZWxvYWQ6IHRydWUsXG5cdFx0XHRmcm9tRW1wdHlWaWV3UmVsb2FkOiBmYWxzZSxcblx0XHRcdHF1ZXJ5RnJvbTogJycsXG5cdFx0XHRsaXN0UmVuZGVyaW5nOiBmYWxzZSxcblx0XHR9XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0cGFnZVNpemUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kZWZhdWx0UGFnZVNpemU7XG5cdFx0fSxcblx0XHRmaW5hbENvbmNhdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbmNhdCAmJiB0aGlzLnByaXZhdGVDb25jYXQ7XG5cdFx0fSxcblx0XHRmaW5hbFVzZUNhY2hlKCkge1xuXHRcdFx0aWYgKHRoaXMudXNlQ2FjaGUgJiYgIXRoaXMuY2FjaGVLZXkpIHtcblx0XHRcdFx0dS5jb25zb2xlRXJyKCd1c2UtY2FjaGXkuLp0cnVl5pe277yM5b+F6aG76K6+572uY2FjaGUta2V577yM5ZCm5YiZ57yT5a2Y5peg5pWI77yBJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy51c2VDYWNoZSAmJiAhIXRoaXMuY2FjaGVLZXk7XG5cdFx0fSxcblx0XHRmaW5hbENhY2hlS2V5KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2FjaGVLZXkgPyBgJHtjLmNhY2hlUHJlZml4S2V5fS0ke3RoaXMuY2FjaGVLZXl9YCA6IG51bGw7IFxuXHRcdH0sXG5cdFx0aXNGaXJzdFBhZ2UoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYWdlTm8gPT09IHRoaXMuZGVmYXVsdFBhZ2VObztcblx0XHR9XG5cdH0sXG5cdHdhdGNoOiB7XG5cdFx0dG90YWxEYXRhKG5ld1ZhbCwgb2xkVmFsKSB7XG5cdFx0XHR0aGlzLl90b3RhbERhdGFDaGFuZ2UobmV3VmFsLCBvbGRWYWwpO1xuXHRcdH0sXG5cdFx0Y3VycmVudERhdGEobmV3VmFsLCBvbGRWYWwpIHtcblx0XHRcdHRoaXMuX2N1cnJlbnREYXRhQ2hhbmdlKG5ld1ZhbCwgb2xkVmFsKTtcblx0XHR9LFxuXHRcdHVzZUNoYXRSZWNvcmRNb2RlKG5ld1ZhbCwgb2xkVmFsKSB7XG5cdFx0XHRpZiAobmV3VmFsKSB7XG5cdFx0XHRcdHRoaXMubkxvYWRpbmdNb3JlRml4ZWRIZWlnaHQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHZhbHVlOiB7XG5cdFx0XHRoYW5kbGVyKG5ld1ZhbCkge1xuXHRcdFx0XHR0aGlzLnJlYWxUb3RhbERhdGEgPSBuZXdWYWw7XG5cdFx0XHR9LFxuXHRcdFx0aW1tZWRpYXRlOiB0cnVlXG5cdFx0fSxcblxuXG5cblxuXG5cblxuXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHQvL+ivt+axgue7k+adnyjmiJDlip/miJbogIXlpLHotKUp6LCD55So5q2k5pa55rOV77yM5bCG6K+35rGC55qE57uT5p6c5Lyg6YCS57uZei1wYWdpbmflpITnkIbvvIznrKzkuIDkuKrlj4LmlbDkuLror7fmsYLnu5PmnpzmlbDnu4TvvIznrKzkuozkuKrlj4LmlbDkuLrmmK/lkKbmiJDlip8o6buY6K6k5piv5piv77yJXG5cdFx0Y29tcGxldGUoZGF0YSwgc3VjY2VzcyA9IHRydWUpIHtcblx0XHRcdHRoaXMuY3VzdG9tTm9Nb3JlID0gLTE7XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGREYXRhKGRhdGEsIHN1Y2Nlc3MpO1xuXHRcdH0sXG5cdFx0Ly/jgJDkv53or4HmlbDmja7kuIDoh7TjgJHor7fmsYLnu5PmnZ8o5oiQ5Yqf5oiW6ICF5aSx6LSlKeiwg+eUqOatpOaWueazle+8jOWwhuivt+axgueahOe7k+aenOS8oOmAkue7mXotcGFnaW5n5aSE55CG77yM56ys5LiA5Liq5Y+C5pWw5Li66K+35rGC57uT5p6c5pWw57uE77yM56ys5LqM5Liq5Y+C5pWw5Li6ZGF0YUtlee+8jOmcgOS4jjpkYXRhLWtleee7keWumueahOS4gOiHtO+8jOesrOS4ieS4quWPguaVsOS4uuaYr+WQpuaIkOWKnyjpu5jorqTkuLrmmK/vvIlcblx0XHRjb21wbGV0ZUJ5S2V5KGRhdGEsIGRhdGFLZXkgPSBudWxsLCBzdWNjZXNzID0gdHJ1ZSkge1xuXHRcdFx0aWYgKGRhdGFLZXkgIT09IG51bGwgJiYgdGhpcy5kYXRhS2V5ICE9PSBudWxsICYmIGRhdGFLZXkgIT09IHRoaXMuZGF0YUtleSkge1xuXHRcdFx0XHR0aGlzLmlzRmlyc3RQYWdlICYmIHRoaXMuZW5kUmVmcmVzaCgpO1xuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNvbHZlKCkpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXN0b21Ob01vcmUgPSAtMTtcblx0XHRcdHJldHVybiB0aGlzLmFkZERhdGEoZGF0YSwgc3VjY2Vzcyk7XG5cdFx0fSxcblx0XHQvL+OAkOmAmui/h3RvdGFs5Yik5pat5piv5ZCm5pyJ5pu05aSa5pWw5o2u44CR6K+35rGC57uT5p2fKOaIkOWKn+aIluiAheWksei0pSnosIPnlKjmraTmlrnms5XvvIzlsIbor7fmsYLnmoTnu5PmnpzkvKDpgJLnu5l6LXBhZ2luZ+WkhOeQhu+8jOesrOS4gOS4quWPguaVsOS4uuivt+axgue7k+aenOaVsOe7hO+8jOesrOS6jOS4quWPguaVsOS4unRvdGFsKOWIl+ihqOaAu+aVsCnvvIznrKzkuInkuKrlj4LmlbDkuLrmmK/lkKbmiJDlip8o6buY6K6k5Li65piv77yJXG5cdFx0Y29tcGxldGVCeVRvdGFsKGRhdGEsIHRvdGFsLCBzdWNjZXNzID0gdHJ1ZSkge1xuXHRcdFx0aWYgKHRvdGFsID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRoaXMuY3VzdG9tTm9Nb3JlID0gLTE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBkYXRhVHlwZVJlcyA9IHRoaXMuX2NoZWNrRGF0YVR5cGUoZGF0YSwgc3VjY2VzcywgZmFsc2UpO1xuXHRcdFx0XHRkYXRhID0gZGF0YVR5cGVSZXMuZGF0YTtcblx0XHRcdFx0c3VjY2VzcyA9IGRhdGFUeXBlUmVzLnN1Y2Nlc3M7XG5cdFx0XHRcdGlmICh0b3RhbCA+PSAwICYmIHN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRsZXQgbm9tb3JlID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJlYWxUb3RhbERhdGFDb3VudCA9IHRoaXMucGFnZU5vID09IHRoaXMuZGVmYXVsdFBhZ2VObyA/IDAgOiB0aGlzLnJlYWxUb3RhbERhdGEubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhTGVuZ3RoID0gdGhpcy5wcml2YXRlQ29uY2F0ID8gZGF0YS5sZW5ndGggOiAwO1xuXHRcdFx0XHRcdFx0XHRsZXQgZXhjZWVkQ291bnQgPSByZWFsVG90YWxEYXRhQ291bnQgKyBkYXRhTGVuZ3RoIC0gdG90YWw7XG5cdFx0XHRcdFx0XHRcdGlmIChleGNlZWRDb3VudCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0bm9tb3JlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRleGNlZWRDb3VudCA9IHRoaXMuZGVmYXVsdFBhZ2VTaXplIC0gZXhjZWVkQ291bnQ7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucHJpdmF0ZUNvbmNhdCAmJiBleGNlZWRDb3VudCA+IDAgJiYgZXhjZWVkQ291bnQgPCBkYXRhLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YSA9IGRhdGEuc3BsaWNlKDAsIGV4Y2VlZENvdW50KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dGhpcy5jb21wbGV0ZUJ5Tm9Nb3JlKGRhdGEsIG5vbW9yZSwgc3VjY2VzcykudGhlbihyZXMgPT4gcmVzb2x2ZShyZXMpKS5jYXRjaCgoKSA9PiByZWplY3QoKSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGREYXRhKGRhdGEsIHN1Y2Nlc3MpO1xuXHRcdH0sXG5cdFx0Ly/jgJDoh6rooYzliKTmlq3mmK/lkKbmnInmm7TlpJrmlbDmja7jgJHor7fmsYLnu5PmnZ8o5oiQ5Yqf5oiW6ICF5aSx6LSlKeiwg+eUqOatpOaWueazle+8jOWwhuivt+axgueahOe7k+aenOS8oOmAkue7mXotcGFnaW5n5aSE55CG77yM56ys5LiA5Liq5Y+C5pWw5Li66K+35rGC57uT5p6c5pWw57uE77yM56ys5LqM5Liq5Y+C5pWw5Li65piv5ZCm5pyJ5pu05aSa5pWw5o2u77yM56ys5LiJ5Liq5Y+C5pWw5Li65piv5ZCm5oiQ5YqfKOm7mOiupOaYr+aYr++8iVxuXHRcdGNvbXBsZXRlQnlOb01vcmUoZGF0YSwgbm9tb3JlLCBzdWNjZXNzID0gdHJ1ZSkge1xuXHRcdFx0aWYgKG5vbW9yZSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aGlzLmN1c3RvbU5vTW9yZSA9IG5vbW9yZSA9PSB0cnVlID8gMSA6IDA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGREYXRhKGRhdGEsIHN1Y2Nlc3MpO1xuXHRcdH0sXG5cdFx0Ly/kuI7kuIrmlrljb21wbGV0ZeaWueazleWKn+iDveS4gOiHtO+8jOaWsOeJiOacrOS4reiuvue9ruacjeWKoeerr+Wbnuiwg+aVsOe7hOivt+S9v+eUqGNvbXBsZXRl5pa55rOVXG5cdFx0YWRkRGF0YShkYXRhLCBzdWNjZXNzID0gdHJ1ZSkge1xuXHRcdFx0aWYgKCF0aGlzLmZyb21Db21wbGV0ZUVtaXQpIHtcblx0XHRcdFx0dGhpcy5kaXNhYmxlZENvbXBsZXRlRW1pdCA9IHRydWU7XG5cdFx0XHRcdHRoaXMuZnJvbUNvbXBsZXRlRW1pdCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VycmVudFRpbWVTdGFtcCA9IHUuZ2V0VGltZSgpO1xuXHRcdFx0Y29uc3QgZGlzVGltZSA9IGN1cnJlbnRUaW1lU3RhbXAgLSB0aGlzLnJlcXVlc3RUaW1lU3RhbXA7XG5cdFx0XHRsZXQgbWluRGVsYXkgPSB0aGlzLm1pbkRlbGF5O1xuXHRcdFx0aWYgKHRoaXMuaXNGaXJzdFBhZ2UgJiYgdGhpcy5maW5hbFNob3dSZWZyZXNoZXJXaGVuUmVsb2FkKSB7XG5cdFx0XHRcdG1pbkRlbGF5ID0gTWF0aC5tYXgoNDAwLCBtaW5EZWxheSk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBhZGREYXRhRGFsYXkgPSAodGhpcy5yZXF1ZXN0VGltZVN0YW1wID4gMCAmJiBkaXNUaW1lIDwgbWluRGVsYXkpID8gbWluRGVsYXkgLSBkaXNUaW1lIDogMDtcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0dS5kZWxheSgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fYWRkRGF0YShkYXRhLCBzdWNjZXNzLCBmYWxzZSk7XG5cdFx0XHRcdH0sIHRoaXMuZGVsYXkgPiAwID8gdGhpcy5kZWxheSA6IGFkZERhdGFEYWxheSlcblx0XHRcdH0pXG5cdFx0XHRcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHRoaXMuZGF0YVByb21pc2VSZXN1bHRNYXAuY29tcGxldGUgPSB7IHJlc29sdmUsIHJlamVjdCB9O1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvL+S7jumhtumDqOa3u+WKoOaVsOaNru+8jOS4jeS8muW9seWTjeWIhumhteeahHBhZ2VOb+WSjHBhZ2VTaXplXG5cdFx0YWRkRGF0YUZyb21Ub3AoZGF0YSwgdG9Ub3AgPSB0cnVlLCB0b1RvcFdpdGhBbmltYXRlID0gdHJ1ZSkge1xuXHRcdFx0ZGF0YSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKSAhPT0gJ1tvYmplY3QgQXJyYXldJyA/IFtkYXRhXSA6IGRhdGE7XG5cdFx0XHR0aGlzLnRvdGFsRGF0YSA9IFsuLi5kYXRhLCAuLi50aGlzLnRvdGFsRGF0YV07XG5cdFx0XHRpZiAodG9Ub3ApIHtcblx0XHRcdFx0dS5kZWxheSgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fc2Nyb2xsVG9Ub3AodG9Ub3BXaXRoQW5pbWF0ZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+mHjeaWsOiuvue9ruWIl+ihqOaVsOaNru+8jOiwg+eUqOatpOaWueazleS4jeS8muW9seWTjXBhZ2VOb+WSjHBhZ2VTaXpl77yM5Lmf5LiN5Lya6Kem5Y+R6K+35rGC44CC6YCC55So5Zy65pmv77ya5b2T6ZyA6KaB5Yig6Zmk5YiX6KGo5Lit5p+Q5LiA6aG55pe277yM5bCG5Yig6Zmk5a+55bqU6aG55ZCO55qE5pWw57uE6YCa6L+H5q2k5pa55rOV5Lyg6YCS57uZei1wYWdpbmfjgIIo5b2T5Ye6546w57G75Ly855qE6ZyA6KaB5L+u5pS55YiX6KGo5pWw57uE55qE5Zy65pmv5pe277yM6K+35L2/55So5q2k5pa55rOV77yM6K+35Yu/55u05o6l5L+u5pS5cGFnZeS4rTpsaXN0LnN5bmPnu5HlrprnmoTmlbDnu4QpXG5cdFx0cmVzZXRUb3RhbERhdGEoZGF0YSkge1xuXHRcdFx0dGhpcy5pc1RvdGFsQ2hhbmdlRnJvbUFkZERhdGEgPSB0cnVlO1xuXHRcdFx0ZGF0YSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKSAhPT0gJ1tvYmplY3QgQXJyYXldJyA/IFtkYXRhXSA6IGRhdGE7XG5cdFx0XHR0aGlzLnRvdGFsRGF0YSA9IGRhdGE7XG5cdFx0fSxcblx0XHQvL+a3u+WKoOiBiuWkqeiusOW9lVxuXHRcdGFkZENoYXRSZWNvcmREYXRhKGRhdGEsIHRvQm90dG9tID0gdHJ1ZSwgdG9Cb3R0b21XaXRoQW5pbWF0ZSA9IHRydWUpIHtcblx0XHRcdGRhdGEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkgIT09ICdbb2JqZWN0IEFycmF5XScgPyBbZGF0YV0gOiBkYXRhO1xuXHRcdFx0aWYgKCF0aGlzLnVzZUNoYXRSZWNvcmRNb2RlKSByZXR1cm47XG5cdFx0XHR0aGlzLmlzVG90YWxDaGFuZ2VGcm9tQWRkRGF0YSA9IHRydWU7XG5cblxuXG5cblx0XHRcdHRoaXMudG90YWxEYXRhID0gdGhpcy5uSXNGaXJzdFBhZ2VBbmROb01vcmUgPyBbLi4udGhpcy50b3RhbERhdGEsIC4uLmRhdGFdIDogWy4uLmRhdGEsIC4uLnRoaXMudG90YWxEYXRhXTtcblxuXHRcdFx0aWYgKHRvQm90dG9tKSB7XG5cdFx0XHRcdHUuZGVsYXkoKCkgPT4ge1xuXG5cblxuXG5cdFx0XHRcdFx0dGhpcy5uSXNGaXJzdFBhZ2VBbmROb01vcmUgPyB0aGlzLl9zY3JvbGxUb0JvdHRvbSh0b0JvdHRvbVdpdGhBbmltYXRlKSA6IHRoaXMuX3Njcm9sbFRvVG9wKHRvQm90dG9tV2l0aEFuaW1hdGUpO1xuXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+iuvue9ruacrOWcsOWIhumhteaVsOaNru+8jOivt+axgue7k+adnyjmiJDlip/miJbogIXlpLHotKUp6LCD55So5q2k5pa55rOV77yM5bCG6K+35rGC55qE57uT5p6c5Lyg6YCS57uZei1wYWdpbmfkvZzliIbpobXlpITnkIbvvIjoi6XosIPnlKjkuobmraTmlrnms5XvvIzliJnkuIrmi4nliqDovb3mm7TlpJrml7blhoXpg6jkvJroh6rliqjliIbpobXvvIzkuI3kvJrop6blj5FAcXVlcnnmiYDnu5HlrprnmoTkuovku7bvvIlcblx0XHRzZXRMb2NhbFBhZ2luZyhkYXRhLCBzdWNjZXNzID0gdHJ1ZSkge1xuXHRcdFx0dGhpcy5pc0xvY2FsUGFnaW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0dGhpcy5fYWRkRGF0YShkYXRhLCBzdWNjZXNzLCB0cnVlKTtcblx0XHRcdH0pXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHR0aGlzLmRhdGFQcm9taXNlUmVzdWx0TWFwLmxvY2FsUGFnaW5nID0geyByZXNvbHZlLCByZWplY3QgfTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0Ly/ph43mlrDliqDovb3liIbpobXmlbDmja7vvIxwYWdlTm/kvJrmgaLlpI3kuLrpu5jorqTlgLzvvIznm7jlvZPkuo7kuIvmi4nliLfmlrDnmoTmlYjmnpwoYW5pbWF0ZeS4unRydWXml7bkvJrlsZXnpLrkuIvmi4nliLfmlrDliqjnlLvvvIzpu5jorqTkuLpmYWxzZSlcblx0XHRyZWxvYWQoYW5pbWF0ZSA9IHRoaXMuc2hvd1JlZnJlc2hlcldoZW5SZWxvYWQpIHtcblx0XHRcdGlmIChhbmltYXRlKSB7XG5cdFx0XHRcdHRoaXMucHJpdmF0ZVNob3dSZWZyZXNoZXJXaGVuUmVsb2FkID0gYW5pbWF0ZTtcblx0XHRcdFx0dGhpcy5pc1VzZXJQdWxsRG93biA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMuc2hvd0xvYWRpbmdNb3JlV2hlblJlbG9hZCkge1xuXHRcdFx0XHR0aGlzLmxpc3RSZW5kZXJpbmcgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9wcmVSZWxvYWQoYW5pbWF0ZSwgZmFsc2UpO1xuXHRcdFx0fSlcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHRoaXMuZGF0YVByb21pc2VSZXN1bHRNYXAucmVsb2FkID0geyByZXNvbHZlLCByZWplY3QgfTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0Ly/liLfmlrDliJfooajmlbDmja7vvIxwYWdlTm/lkoxwYWdlU2l6ZeS4jeS8mumHjee9ru+8jOWIl+ihqOaVsOaNruS8mumHjeaWsOS7juacjeWKoeerr+iOt+WPluOAguW/hemhu+S/neivgUBxdWVyeee7keWumueahOaWueazleS4reeahHBhZ2VOb+WSjHBhZ2VTaXpl5ZKM5Lyg57uZ5pyN5Yqh56uv55qE5LiA6Ie0XG5cdFx0cmVmcmVzaCgpIHtcblx0XHRcdGlmICghdGhpcy5yZWFsVG90YWxEYXRhLmxlbmd0aCkgcmV0dXJuIHRoaXMucmVsb2FkKCk7XG5cdFx0XHRjb25zdCBkaXNQYWdlTm8gPSB0aGlzLnBhZ2VObyAtIHRoaXMuZGVmYXVsdFBhZ2VObyArIDE7XG5cdFx0XHRpZiAoZGlzUGFnZU5vID49IDEpIHtcblx0XHRcdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5wcml2YXRlQ29uY2F0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHRvdGFsUGFnZVNpemUgPSBkaXNQYWdlTm8gKiB0aGlzLnBhZ2VTaXplO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRSZWZyZXNoUGFnZVNpemUgPSB0b3RhbFBhZ2VTaXplO1xuXHRcdFx0XHR0aGlzLl9lbWl0UXVlcnkodGhpcy5kZWZhdWx0UGFnZU5vLCB0b3RhbFBhZ2VTaXplLCBFbnVtLlF1ZXJ5RnJvbS5SZWZyZXNoKTtcblx0XHRcdFx0dGhpcy5fY2FsbE15UGFyZW50UXVlcnkodGhpcy5kZWZhdWx0UGFnZU5vLCB0b3RhbFBhZ2VTaXplKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHRoaXMuZGF0YVByb21pc2VSZXN1bHRNYXAucmVsb2FkID0geyByZXNvbHZlLCByZWplY3QgfTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0Ly/miYvliqjmm7TmlrDliJfooajnvJPlrZjmlbDmja7vvIzlsIboh6rliqjmiKrlj5Z2LW1vZGVs57uR5a6a55qEbGlzdOS4reeahOWJjXBhZ2VTaXpl5p2h6KaG55uW57yT5a2Y77yM6K+356Gu5L+d5ZyobGlzdOaVsOaNruabtOaWsOWIsOmihOacn+e7k+aenOWQjuWGjeiwg+eUqOatpOaWueazlVxuXHRcdHVwZGF0ZUNhY2hlKCkge1xuXHRcdFx0aWYgKHRoaXMuZmluYWxVc2VDYWNoZSAmJiB0aGlzLnRvdGFsRGF0YS5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5fc2F2ZUxvY2FsQ2FjaGUodGhpcy50b3RhbERhdGEuc2xpY2UoMCwgTWF0aC5taW4odGhpcy50b3RhbERhdGEubGVuZ3RoLCB0aGlzLnBhZ2VTaXplKSkpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/muIXnqbrliIbpobXmlbDmja5cblx0XHRjbGVhbigpIHtcblx0XHRcdHRoaXMuX3JlbG9hZCh0cnVlKTtcblx0XHRcdHRoaXMuX2FkZERhdGEoW10sIHRydWUsIGZhbHNlKTtcblx0XHR9LFxuXHRcdC8v5riF56m65YiG6aG15pWw5o2uXG5cdFx0Y2xlYXIoKSB7XG5cdFx0XHR0aGlzLmNsZWFuKCk7XG5cdFx0fSxcblx0XHQvL+aJi+WKqOinpuWPkea7muWKqOWIsOmhtumDqOWKoOi9veabtOWkmu+8jOiBiuWkqeiusOW9leaooeW8j+aXtuacieaViFxuXHRcdGRvQ2hhdFJlY29yZExvYWRNb3JlKCkge1xuXHRcdFx0dGhpcy51c2VDaGF0UmVjb3JkTW9kZSAmJiB0aGlzLl9vbkxvYWRpbmdNb3JlKCdjbGljaycpO1xuXHRcdH0sXG5cdFx0Ly9yZWxvYWTkuYvliY3nmoTkuIDkupvlpITnkIZcblx0XHRfcHJlUmVsb2FkKGFuaW1hdGUgPSB0aGlzLnNob3dSZWZyZXNoZXJXaGVuUmVsb2FkLCBpc0Zyb21Nb3VudGVkID0gdHJ1ZSkge1xuXHRcdFx0dGhpcy5pc1VzZXJSZWxvYWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5sb2FkaW5nVHlwZSA9IEVudW0uTG9hZGluZ1R5cGUuUmVmcmVzaGVyO1xuXHRcdFx0aWYgKGFuaW1hdGUpIHtcblx0XHRcdFx0dGhpcy5wcml2YXRlU2hvd1JlZnJlc2hlcldoZW5SZWxvYWQgPSBhbmltYXRlO1xuXG5cblxuXG5cblxuXG5cblx0XHRcdFx0dGhpcy5yZWZyZXNoZXJTdGF0dXMgPSBFbnVtLlJlZnJlc2hlci5Mb2FkaW5nO1xuXHRcdFx0XHR0aGlzLnJlZnJlc2hlclJldmVhbFN0YWNrQ291bnQgKys7XG5cdFx0XHRcdHUuZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuX2dldE5vZGVDbGllbnRSZWN0KCd6cC1uLXJlZnJlc2gtY29udGFpbmVyJywgZmFsc2UpLnRoZW4oKG5vZGUpID0+IHtcblx0XHRcdFx0XHRcdGlmIChub2RlKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBub2RlSGVpZ2h0ID0gbm9kZVswXS5oZWlnaHQ7XG5cdFx0XHRcdFx0XHRcdHRoaXMublNob3dSZWZyZXNoZXJSZXZlYWwgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm5TaG93UmVmcmVzaGVyUmV2ZWFsSGVpZ2h0ID0gbm9kZUhlaWdodDtcblx0XHRcdFx0XHRcdFx0dS5kZWxheSgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fbkRvUmVmcmVzaGVyRW5kQW5pbWF0aW9uKDAsIC1ub2RlSGVpZ2h0LCBmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdHUuZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fbkRvUmVmcmVzaGVyRW5kQW5pbWF0aW9uKG5vZGVIZWlnaHQsIDApO1xuXHRcdFx0XHRcdFx0XHRcdH0sIDEwKVxuXHRcdFx0XHRcdFx0XHR9LCAxMClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuX3JlbG9hZChmYWxzZSwgaXNGcm9tTW91bnRlZCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9kb1JlZnJlc2hlckxvYWQoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LCB0aGlzLnBhZ2luZ0xvYWRlZCA/IDEwIDogMTAwKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3JlZnJlc2hlckVuZChmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9yZWxvYWQoZmFsc2UsIGlzRnJvbU1vdW50ZWQpO1xuXHRcdH0sXG5cdFx0Ly/ph43mlrDliqDovb3liIbpobXmlbDmja5cblx0XHRfcmVsb2FkKGlzQ2xlYW4gPSBmYWxzZSwgaXNGcm9tTW91bnRlZCA9IGZhbHNlLCBpc1VzZXJQdWxsRG93biA9IGZhbHNlKSB7XG5cdFx0XHR0aGlzLmlzQWRkZWREYXRhID0gZmFsc2U7XG5cdFx0XHR0aGlzLmluc2lkZU9mUGFnaW5nID0gLTE7XG5cdFx0XHR0aGlzLmNhY2hlU2Nyb2xsTm9kZUhlaWdodCA9IC0xO1xuXHRcdFx0dGhpcy5wYWdlTm8gPSB0aGlzLmRlZmF1bHRQYWdlTm87XG5cdFx0XHR0aGlzLl9jbGVhblJlZnJlc2hlckVuZFRpbWVvdXQoKTtcblx0XHRcdCF0aGlzLnByaXZhdGVTaG93UmVmcmVzaGVyV2hlblJlbG9hZCAmJiAhaXNDbGVhbiAmJiB0aGlzLl9zdGFydExvYWRpbmcodHJ1ZSk7XG5cdFx0XHR0aGlzLmZpcnN0UGFnZUxvYWRlZCA9IHRydWU7XG5cdFx0XHR0aGlzLmlzVG90YWxDaGFuZ2VGcm9tQWRkRGF0YSA9IGZhbHNlO1xuXHRcdFx0aWYgKCF0aGlzLmlzU2V0dGluZ0NhY2hlTGlzdCkge1xuXHRcdFx0XHR0aGlzLnRvdGFsRGF0YSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFpc0NsZWFuKSB7XG5cdFx0XHRcdHRoaXMuX2VtaXRRdWVyeSh0aGlzLnBhZ2VObywgdGhpcy5kZWZhdWx0UGFnZVNpemUsIGlzVXNlclB1bGxEb3duID8gRW51bS5RdWVyeUZyb20uVXNlclB1bGxEb3duIDogRW51bS5RdWVyeUZyb20uUmVsb2FkKTtcblx0XHRcdFx0bGV0IGRlbGF5ID0gMDtcblxuXG5cblx0XHRcdFx0dS5kZWxheSh0aGlzLl9jYWxsTXlQYXJlbnRRdWVyeSwgZGVsYXkpO1xuXHRcdFx0XHRpZiAoIWlzRnJvbU1vdW50ZWQgJiYgdGhpcy5hdXRvU2Nyb2xsVG9Ub3BXaGVuUmVsb2FkKSB7XG5cdFx0XHRcdFx0bGV0IGNoZWNrZWROUmVmcmVzaGVyTG9hZGluZyA9IHRydWU7XG5cblx0XHRcdFx0XHRjaGVja2VkTlJlZnJlc2hlckxvYWRpbmcgPSAhdGhpcy5uUmVmcmVzaGVyTG9hZGluZztcblxuXHRcdFx0XHRcdGNoZWNrZWROUmVmcmVzaGVyTG9hZGluZyAmJiB0aGlzLl9zY3JvbGxUb1RvcChmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm5TaG93Qm90dG9tID0gdGhpcy5yZWFsVG90YWxEYXRhLmxlbmd0aCA+IDA7XG5cdFx0XHR9KVxuXG5cdFx0fSxcblx0XHQvL+WkhOeQhuacjeWKoeerr+i/lOWbnueahOaVsOe7hFxuXHRcdF9hZGREYXRhKGRhdGEsIHN1Y2Nlc3MsIGlzTG9jYWwpIHtcblx0XHRcdHRoaXMuaXNBZGRlZERhdGEgPSB0cnVlO1xuXHRcdFx0dGhpcy5mcm9tRW1wdHlWaWV3UmVsb2FkID0gZmFsc2U7XG5cdFx0XHR0aGlzLmlzVG90YWxDaGFuZ2VGcm9tQWRkRGF0YSA9IHRydWU7XG5cdFx0XHR0aGlzLnJlZnJlc2hlclRyaWdnZXJlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fZW5kU3lzdGVtTG9hZGluZ0FuZFJlZnJlc2goKTtcblx0XHRcdGNvbnN0IHRlbXBJc1VzZXJQdWxsRG93biA9IHRoaXMuaXNVc2VyUHVsbERvd247XG5cdFx0XHRpZiAodGhpcy5zaG93UmVmcmVzaGVyVXBkYXRlVGltZSAmJiB0aGlzLmlzRmlyc3RQYWdlKSB7XG5cdFx0XHRcdHUuc2V0UmVmZXNyaGVyVGltZSh1LmdldFRpbWUoKSwgdGhpcy5yZWZyZXNoZXJVcGRhdGVUaW1lS2V5KTtcblx0XHRcdFx0dGhpcy4kcmVmcy5yZWZyZXNoICYmIHRoaXMuJHJlZnMucmVmcmVzaC51cGRhdGVUaW1lKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWlzTG9jYWwgJiYgdGVtcElzVXNlclB1bGxEb3duICYmIHRoaXMuaXNGaXJzdFBhZ2UpIHtcblx0XHRcdFx0dGhpcy5pc1VzZXJQdWxsRG93biA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLmlzRmlyc3RQYWdlKSB7XG5cdFx0XHRcdHRoaXMubGlzdFJlbmRlcmluZyA9IHRydWU7XG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHR1LmRlbGF5KCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMubGlzdFJlbmRlcmluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxpc3RSZW5kZXJpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGxldCBkYXRhVHlwZVJlcyA9IHRoaXMuX2NoZWNrRGF0YVR5cGUoZGF0YSwgc3VjY2VzcywgaXNMb2NhbCk7XG5cdFx0XHRkYXRhID0gZGF0YVR5cGVSZXMuZGF0YTtcblx0XHRcdHN1Y2Nlc3MgPSBkYXRhVHlwZVJlcy5zdWNjZXNzO1xuXHRcdFx0bGV0IGRlbGF5VGltZSA9IGMuZGVsYXlUaW1lO1xuXG5cdFx0XHRpZiAodGhpcy51c2VDaGF0UmVjb3JkTW9kZSkgZGVsYXlUaW1lID0gMDtcblxuXHRcdFx0dGhpcy5sb2FkaW5nRm9yTm93ID0gZmFsc2U7XG5cdFx0XHR1LmRlbGF5KCgpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdpbmdMb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKT0+e1xuXHRcdFx0XHRcdCFpc0xvY2FsICYmIHRoaXMuX3JlZnJlc2hlckVuZChkZWxheVRpbWUgPiAwLCB0cnVlLCB0ZW1wSXNVc2VyUHVsbERvd24pO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHRcdGlmICh0aGlzLmlzRmlyc3RQYWdlKSB7XG5cdFx0XHRcdHRoaXMuaXNMb2FkRmFpbGVkID0gIXN1Y2Nlc3M7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2lzTG9hZEZhaWxlZENoYW5nZScsIHRoaXMuaXNMb2FkRmFpbGVkKTtcblx0XHRcdFx0aWYgKHRoaXMuZmluYWxVc2VDYWNoZSAmJiBzdWNjZXNzICYmICh0aGlzLmNhY2hlTW9kZSA9PT0gRW51bS5DYWNoZU1vZGUuQWx3YXlzID8gdHJ1ZSA6IHRoaXMuaXNTZXR0aW5nQ2FjaGVMaXN0KSkge1xuXHRcdFx0XHRcdHRoaXMuX3NhdmVMb2NhbENhY2hlKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzU2V0dGluZ0NhY2hlTGlzdCA9IGZhbHNlO1xuXHRcdFx0aWYgKHN1Y2Nlc3MpIHtcblx0XHRcdFx0aWYgKCEodGhpcy5wcml2YXRlQ29uY2F0ID09PSBmYWxzZSAmJiB0aGlzLmxvYWRpbmdTdGF0dXMgPT09IEVudW0uTW9yZS5Ob01vcmUpKSB7XG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nU3RhdHVzID0gRW51bS5Nb3JlLkRlZmF1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGlzTG9jYWwpIHtcblx0XHRcdFx0XHR0aGlzLnRvdGFsTG9jYWxQYWdpbmdMaXN0ID0gZGF0YTtcblx0XHRcdFx0XHRjb25zdCBsb2NhbFBhZ2VObyA9IHRoaXMuZGVmYXVsdFBhZ2VObztcblx0XHRcdFx0XHRjb25zdCBsb2NhbFBhZ2VTaXplID0gdGhpcy5xdWVyeUZyb20gIT09IEVudW0uUXVlcnlGcm9tLlJlZnJlc2ggPyB0aGlzLmRlZmF1bHRQYWdlU2l6ZSA6IHRoaXMuY3VycmVudFJlZnJlc2hQYWdlU2l6ZTtcblx0XHRcdFx0XHR0aGlzLl9sb2NhbFBhZ2luZ1F1ZXJ5TGlzdChsb2NhbFBhZ2VObywgbG9jYWxQYWdlU2l6ZSwgMCwgcmVzID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuY29tcGxldGVCeVRvdGFsKHJlcywgdGhpcy50b3RhbExvY2FsUGFnaW5nTGlzdC5sZW5ndGgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV0IGRhdGFDaGFuZ2VEZWxheVRpbWUgPSAwO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMucHJpdmF0ZVNob3dSZWZyZXNoZXJXaGVuUmVsb2FkICYmIHRoaXMuZmluYWxOdnVlTGlzdElzID09PSAnd2F0ZXJmYWxsJykge1xuXHRcdFx0XHRcdFx0ZGF0YUNoYW5nZURlbGF5VGltZSA9IDE1MDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR1LmRlbGF5KCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuX2N1cnJlbnREYXRhQ2hhbmdlKGRhdGEsIHRoaXMuY3VycmVudERhdGEpO1xuXHRcdFx0XHRcdFx0dGhpcy5fY2FsbERhdGFQcm9taXNlKHRydWUsIHRoaXMudG90YWxEYXRhKTtcblx0XHRcdFx0XHR9LCBkYXRhQ2hhbmdlRGVsYXlUaW1lKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9jdXJyZW50RGF0YUNoYW5nZShkYXRhLCB0aGlzLmN1cnJlbnREYXRhKTtcblx0XHRcdFx0dGhpcy5fY2FsbERhdGFQcm9taXNlKGZhbHNlKTtcblx0XHRcdFx0dGhpcy5sb2FkaW5nU3RhdHVzID0gRW51bS5Nb3JlLkZhaWw7XG5cdFx0XHRcdGlmICh0aGlzLmxvYWRpbmdUeXBlID09PSBFbnVtLkxvYWRpbmdUeXBlLkxvYWRpbmdNb3JlKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlTm8gLS07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8v5omA5pyJ5pWw5o2u5pS55Y+Y5pe26LCD55SoXG5cdFx0X3RvdGFsRGF0YUNoYW5nZShuZXdWYWwsIG9sZFZhbCwgZXZlbnRUaHJvdz10cnVlKSB7XG5cdFx0XHRpZiAoKCF0aGlzLmlzVXNlclJlbG9hZCB8fCAhdGhpcy5hdXRvQ2xlYW5MaXN0V2hlblJlbG9hZCkgJiYgdGhpcy5maXJzdFBhZ2VMb2FkZWQgJiYgIW5ld1ZhbC5sZW5ndGggJiYgb2xkVmFsLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9kb0NoZWNrU2Nyb2xsVmlld1Nob3VsZEZ1bGxIZWlnaHQobmV3VmFsKTtcblx0XHRcdGlmKCF0aGlzLnJlYWxUb3RhbERhdGEubGVuZ3RoICYmICFuZXdWYWwubGVuZ3RoKXtcblx0XHRcdFx0ZXZlbnRUaHJvdyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZWFsVG90YWxEYXRhID0gbmV3VmFsO1xuXHRcdFx0aWYgKGV2ZW50VGhyb3cpIHtcblx0XHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCBuZXdWYWwpO1xuXG5cblxuXHRcdFx0XHR0aGlzLiRlbWl0KCd1cGRhdGU6bGlzdCcsIG5ld1ZhbCk7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2xpc3RDaGFuZ2UnLCBuZXdWYWwpO1xuXHRcdFx0XHR0aGlzLl9jYWxsTXlQYXJlbnRMaXN0KG5ld1ZhbCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmZpcnN0UGFnZUxvYWRlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5pc1RvdGFsQ2hhbmdlRnJvbUFkZERhdGEgPSBmYWxzZTtcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0dS5kZWxheSgoKT0+e1xuXHRcdFx0XHRcdHRoaXMuX2dldE5vZGVDbGllbnRSZWN0KCcuenAtcGFnaW5nLWNvbnRhaW5lci1jb250ZW50JykudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdFx0cmVzICYmIHRoaXMuJGVtaXQoJ2NvbnRlbnRIZWlnaHRDaGFuZ2VkJywgcmVzWzBdLmhlaWdodCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sIGMuZGVsYXlUaW1lICogKHRoaXMuaXNJb3MgPyAxIDogMykpXG5cblx0XHRcdFx0aWYgKHRoaXMudXNlQ2hhdFJlY29yZE1vZGUgJiYgdGhpcy5uSXNGaXJzdFBhZ2VBbmROb01vcmUgJiYgdGhpcy5pc0ZpcnN0UGFnZSAmJiAhdGhpcy5uRmlyc3RQYWdlQW5kTm9Nb3JlQ2hlY2tlZCkge1xuXHRcdFx0XHRcdHRoaXMubkZpcnN0UGFnZUFuZE5vTW9yZUNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuX3Njcm9sbFRvQm90dG9tKGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR1LmRlbGF5KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLm5TaG93Qm90dG9tID0gdHJ1ZTtcblx0XHRcdFx0fSwgYy5kZWxheVRpbWUgKiA2LCAnblNob3dCb3R0b21EZWxheScpO1xuXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly/lvZPliY3mlbDmja7mlLnlj5jml7bosIPnlKhcblx0XHRfY3VycmVudERhdGFDaGFuZ2UobmV3VmFsLCBvbGRWYWwpIHtcblx0XHRcdG5ld1ZhbCA9IFsuLi5uZXdWYWxdO1xuXG5cblxuXG5cdFx0XHRpZiAodGhpcy5pc0ZpcnN0UGFnZSAmJiB0aGlzLmZpbmFsQ29uY2F0KSB7XG5cdFx0XHRcdHRoaXMudG90YWxEYXRhID0gW107XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jdXN0b21Ob01vcmUgIT09IC0xKSB7XG5cdFx0XHRcdGlmICh0aGlzLmN1c3RvbU5vTW9yZSA9PT0gMSB8fCAhbmV3VmFsLmxlbmd0aCkge1xuXHRcdFx0XHRcdHRoaXMubG9hZGluZ1N0YXR1cyA9IEVudW0uTW9yZS5Ob01vcmU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghbmV3VmFsLmxlbmd0aCB8fCAobmV3VmFsLmxlbmd0aCAmJiBuZXdWYWwubGVuZ3RoIDwgdGhpcy5kZWZhdWx0UGFnZVNpemUpKSB7XG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nU3RhdHVzID0gRW51bS5Nb3JlLk5vTW9yZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLnRvdGFsRGF0YS5sZW5ndGgpIHtcblx0XHRcdFx0aWYgKHRoaXMuZmluYWxDb25jYXQpIHtcblxuXHRcdFx0XHRcdGlmICh0aGlzLnVzZUNoYXRSZWNvcmRNb2RlICYmIHRoaXMuaXNGaXJzdFBhZ2UgJiYgdGhpcy5sb2FkaW5nU3RhdHVzID09PSBFbnVtLk1vcmUuTm9Nb3JlKSB7XG5cdFx0XHRcdFx0XHRuZXdWYWwucmV2ZXJzZSgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMudG90YWxEYXRhID0gbmV3VmFsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnVzZUNoYXRSZWNvcmRNb2RlKSB7XG5cblxuXG5cblxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy51c2VDaGF0UmVjb3JkTW9kZSkge1xuXG5cdFx0XHRcdFx0dGhpcy50b3RhbERhdGEgPSBbLi4udGhpcy50b3RhbERhdGEsIC4uLm5ld1ZhbF07XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0XHRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAodGhpcy5maW5hbENvbmNhdCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFNjcm9sbFRvcCA9IHRoaXMub2xkU2Nyb2xsVG9wO1xuXHRcdFx0XHRcdFx0dGhpcy50b3RhbERhdGEgPSBbLi4udGhpcy50b3RhbERhdGEsIC4uLm5ld1ZhbF07XG5cblxuXG5cblxuXG5cblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvdGFsRGF0YSA9IG5ld1ZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMucHJpdmF0ZUNvbmNhdCA9IHRydWU7XG5cdFx0fSxcblx0XHQvL+acrOWcsOWIhumhteivt+axglxuXHRcdF9sb2NhbFBhZ2luZ1F1ZXJ5TGlzdChwYWdlTm8sIHBhZ2VTaXplLCBsb2NhbFBhZ2luZ0xvYWRpbmdUaW1lLCBjYWxsYmFjaykge1xuXHRcdFx0cGFnZU5vID0gTWF0aC5tYXgoMSwgcGFnZU5vKTtcblx0XHRcdHBhZ2VTaXplID0gTWF0aC5tYXgoMSwgcGFnZVNpemUpO1xuXHRcdFx0Y29uc3QgdG90YWxQYWdpbmdMaXN0ID0gWy4uLnRoaXMudG90YWxMb2NhbFBhZ2luZ0xpc3RdO1xuXHRcdFx0Y29uc3QgcGFnZU5vSW5kZXggPSAocGFnZU5vIC0gMSkgKiBwYWdlU2l6ZTtcblx0XHRcdGNvbnN0IGZpbmFsUGFnZU5vSW5kZXggPSBNYXRoLm1pbih0b3RhbFBhZ2luZ0xpc3QubGVuZ3RoLCBwYWdlTm9JbmRleCArIHBhZ2VTaXplKTtcblx0XHRcdGNvbnN0IHJlc3VsdFBhZ2luZ0xpc3QgPSB0b3RhbFBhZ2luZ0xpc3Quc3BsaWNlKHBhZ2VOb0luZGV4LCBmaW5hbFBhZ2VOb0luZGV4IC0gcGFnZU5vSW5kZXgpO1xuXHRcdFx0dS5kZWxheSgoKSA9PiBjYWxsYmFjayhyZXN1bHRQYWdpbmdMaXN0KSwgbG9jYWxQYWdpbmdMb2FkaW5nVGltZSlcblx0XHR9LFxuXHRcdC8v5a2Y5YKo5YiX6KGo57yT5a2Y5pWw5o2uXG5cdFx0X3NhdmVMb2NhbENhY2hlKGRhdGEpIHtcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyh0aGlzLmZpbmFsQ2FjaGVLZXksIGRhdGEpO1xuXHRcdH0sXG5cdFx0Ly/pgJrov4fnvJPlrZjmlbDmja7loavlhYXliJfooajmlbDmja5cblx0XHRfc2V0TGlzdEJ5TG9jYWxDYWNoZSgpIHtcblx0XHRcdHRoaXMudG90YWxEYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKHRoaXMuZmluYWxDYWNoZUtleSkgfHwgW107XG5cdFx0XHR0aGlzLmlzU2V0dGluZ0NhY2hlTGlzdCA9IHRydWU7XG5cdFx0fSxcblx0XHQvL+S/ruaUueeItnZpZXfnmoRsaXN0XG5cdFx0X2NhbGxNeVBhcmVudExpc3QobmV3VmFsKSB7XG5cdFx0XHRpZiAodGhpcy5hdXRvd2lyZUxpc3ROYW1lLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBteVBhcmVudCA9IHUuZ2V0UGFyZW50KHRoaXMuJHBhcmVudCk7XG5cdFx0XHRcdGlmIChteVBhcmVudCAmJiBteVBhcmVudFt0aGlzLmF1dG93aXJlTGlzdE5hbWVdKSB7XG5cdFx0XHRcdFx0bXlQYXJlbnRbdGhpcy5hdXRvd2lyZUxpc3ROYW1lXSA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/osIPnlKjniLZ2aWV355qEcXVlcnlcblx0XHRfY2FsbE15UGFyZW50UXVlcnkoY3VzdG9tUGFnZU5vID0gMCwgY3VzdG9tUGFnZVNpemUgPSAwKSB7XG5cdFx0XHRpZiAodGhpcy5hdXRvd2lyZVF1ZXJ5TmFtZSkge1xuXHRcdFx0XHRpZiAodGhpcy5teVBhcmVudFF1ZXJ5ID09PSAtMSkge1xuXHRcdFx0XHRcdGNvbnN0IG15UGFyZW50ID0gdS5nZXRQYXJlbnQodGhpcy4kcGFyZW50KTtcblx0XHRcdFx0XHRpZiAobXlQYXJlbnQgJiYgbXlQYXJlbnRbdGhpcy5hdXRvd2lyZVF1ZXJ5TmFtZV0pIHtcblx0XHRcdFx0XHRcdHRoaXMubXlQYXJlbnRRdWVyeSA9IG15UGFyZW50W3RoaXMuYXV0b3dpcmVRdWVyeU5hbWVdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBcblx0XHRcdFx0aWYgKHRoaXMubXlQYXJlbnRRdWVyeSAhPT0gLTEpIHtcblx0XHRcdFx0XHRjdXN0b21QYWdlU2l6ZSA+IDAgPyB0aGlzLm15UGFyZW50UXVlcnkoY3VzdG9tUGFnZU5vLCBjdXN0b21QYWdlU2l6ZSkgOiB0aGlzLm15UGFyZW50UXVlcnkodGhpcy5wYWdlTm8sIHRoaXMuZGVmYXVsdFBhZ2VTaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly9lbWl0IHF1ZXJ55LqL5Lu2XG5cdFx0X2VtaXRRdWVyeShwYWdlTm8sIHBhZ2VTaXplLCBmcm9tKXtcblx0XHRcdHRoaXMucXVlcnlGcm9tID0gZnJvbTtcblx0XHRcdHRoaXMucmVxdWVzdFRpbWVTdGFtcCA9IHUuZ2V0VGltZSgpO1xuXHRcdFx0Y29uc3QgW2xhc3RJdGVtXSA9IHRoaXMucmVhbFRvdGFsRGF0YS5zbGljZSgtMSk7XG5cdFx0XHR0aGlzLiRlbWl0KCdxdWVyeScsIC4uLmludGVyY2VwdG9yLl9oYW5kbGVRdWVyeShwYWdlTm8sIHBhZ2VTaXplLCBmcm9tLCBsYXN0SXRlbSB8fCBudWxsKSk7XG5cdFx0fSxcblx0XHQvL+inpuWPkeaVsOaNruaUueWPmHByb21pc2Vcblx0XHRfY2FsbERhdGFQcm9taXNlKHN1Y2Nlc3MsIHRvdGFsTGlzdCkge1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gdGhpcy5kYXRhUHJvbWlzZVJlc3VsdE1hcCkge1xuXHRcdFx0XHRjb25zdCBvYmogPSB0aGlzLmRhdGFQcm9taXNlUmVzdWx0TWFwW2tleV07XG5cdFx0XHRcdHN1Y2Nlc3MgPyAoISFvYmogJiYgb2JqLnJlc29sdmUoeyB0b3RhbExpc3QsIG5vTW9yZTogdGhpcy5sb2FkaW5nU3RhdHVzID09PSBFbnVtLk1vcmUuTm9Nb3JlIH0pKSA6ICghIW9iaiAmJiBvYmoucmVqZWN0KCkpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/mo4Dmn6Vjb21wbGV0ZSBkYXRh55qE57G75Z6LXG5cdFx0X2NoZWNrRGF0YVR5cGUoZGF0YSwgc3VjY2VzcywgaXNMb2NhbCkge1xuXHRcdFx0Y29uc3QgZGF0YVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSk7XG5cdFx0XHRpZiAoZGF0YVR5cGUgPT09ICdbb2JqZWN0IEJvb2xlYW5dJykge1xuXHRcdFx0XHRzdWNjZXNzID0gZGF0YTtcblx0XHRcdFx0ZGF0YSA9IFtdO1xuXHRcdFx0fSBlbHNlIGlmIChkYXRhVHlwZSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHRcdFx0XHRkYXRhID0gW107XG5cdFx0XHRcdGlmIChkYXRhVHlwZSAhPT0gJ1tvYmplY3QgVW5kZWZpbmVkXScgJiYgZGF0YVR5cGUgIT09ICdbb2JqZWN0IE51bGxdJykge1xuXHRcdFx0XHRcdHUuY29uc29sZUVycihgJHtpc0xvY2FsID8gJ3NldExvY2FsUGFnaW5nJyA6ICdjb21wbGV0ZSd95Y+C5pWw57G75Z6L5LiN5q2j56Gu77yM56ys5LiA5Liq5Y+C5pWw57G75Z6L5b+F6aG75Li6QXJyYXkhYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB7IGRhdGEsIHN1Y2Nlc3MgfTtcblx0XHR9LFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///68\n");

/***/ }),
/* 69 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 70);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 71);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 72);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 74);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 70 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 71 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 72 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 73);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 73 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 74 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 75 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 76);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 77);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 72);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 78);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 76 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 73);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 77 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 78 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 79 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/z-paging-interceptor.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// [z-paging]拦截器\n\n//拦截&处理@query事件\nfunction handleQuery(callback) {\n  try {\n    setTimeout(function () {\n      _getApp().globalData.zp_handleQueryCallback = callback;\n    }, 1);\n  } catch (e) {}\n}\n\n//拦截&处理@query事件(私有，请勿调用)\nfunction _handleQuery(pageNo, pageSize, from, lastItem) {\n  var callback = _getApp().globalData.zp_handleQueryCallback;\n  return callback ? callback(pageNo, pageSize, from, lastItem) : [pageNo, pageSize, from];\n}\n\n//拦截&处理系统language转i18n local\nfunction handleLanguage2Local(callback) {\n  try {\n    setTimeout(function () {\n      _getApp().globalData.zp_handleLanguage2LocalCallback = callback;\n    }, 1);\n  } catch (e) {}\n}\n\n//拦截&处理系统language转i18n local(私有，请勿调用)\nfunction _handleLanguage2Local(language, local) {\n  var callback = _getApp().globalData.zp_handleLanguage2LocalCallback;\n  return callback ? callback(language, local) : local;\n}\n\n//获取当前app对象\nfunction _getApp() {\n  return getApp({\n    allowDefault: true\n  });\n}\nvar _default = {\n  handleQuery: handleQuery,\n  _handleQuery: _handleQuery,\n  handleLanguage2Local: handleLanguage2Local,\n  _handleLanguage2Local: _handleLanguage2Local\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy96LXBhZ2luZy1pbnRlcmNlcHRvci5qcyJdLCJuYW1lcyI6WyJoYW5kbGVRdWVyeSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsIl9nZXRBcHAiLCJnbG9iYWxEYXRhIiwienBfaGFuZGxlUXVlcnlDYWxsYmFjayIsImUiLCJfaGFuZGxlUXVlcnkiLCJwYWdlTm8iLCJwYWdlU2l6ZSIsImZyb20iLCJsYXN0SXRlbSIsImhhbmRsZUxhbmd1YWdlMkxvY2FsIiwienBfaGFuZGxlTGFuZ3VhZ2UyTG9jYWxDYWxsYmFjayIsIl9oYW5kbGVMYW5ndWFnZTJMb2NhbCIsImxhbmd1YWdlIiwibG9jYWwiLCJnZXRBcHAiLCJhbGxvd0RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBO0FBQ0EsU0FBU0EsV0FBVyxDQUFDQyxRQUFRLEVBQUU7RUFDOUIsSUFBSTtJQUNIQyxVQUFVLENBQUMsWUFBVztNQUNyQkMsT0FBTyxFQUFFLENBQUNDLFVBQVUsQ0FBQ0Msc0JBQXNCLEdBQUdKLFFBQVE7SUFDdkQsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQyxPQUFPSyxDQUFDLEVBQUUsQ0FBQztBQUNkOztBQUVBO0FBQ0EsU0FBU0MsWUFBWSxDQUFDQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUM7RUFDdEQsSUFBTVYsUUFBUSxHQUFHRSxPQUFPLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDQyxzQkFBc0I7RUFDNUQsT0FBT0osUUFBUSxHQUFHQSxRQUFRLENBQUNPLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLENBQUNILE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxJQUFJLENBQUM7QUFDeEY7O0FBRUE7QUFDQSxTQUFTRSxvQkFBb0IsQ0FBQ1gsUUFBUSxFQUFFO0VBQ3ZDLElBQUk7SUFDSEMsVUFBVSxDQUFDLFlBQVc7TUFDckJDLE9BQU8sRUFBRSxDQUFDQyxVQUFVLENBQUNTLCtCQUErQixHQUFHWixRQUFRO0lBQ2hFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUMsT0FBT0ssQ0FBQyxFQUFFLENBQUM7QUFDZDs7QUFFQTtBQUNBLFNBQVNRLHFCQUFxQixDQUFDQyxRQUFRLEVBQUVDLEtBQUssRUFBQztFQUM5QyxJQUFNZixRQUFRLEdBQUdFLE9BQU8sRUFBRSxDQUFDQyxVQUFVLENBQUNTLCtCQUErQjtFQUNyRSxPQUFPWixRQUFRLEdBQUdBLFFBQVEsQ0FBQ2MsUUFBUSxFQUFFQyxLQUFLLENBQUMsR0FBR0EsS0FBSztBQUNwRDs7QUFFQTtBQUNBLFNBQVNiLE9BQU8sR0FBRTtFQUtqQixPQUFPYyxNQUFNLENBQUM7SUFBRUMsWUFBWSxFQUFFO0VBQUssQ0FBQyxDQUFDO0FBRXRDO0FBQUMsZUFFYztFQUNkbEIsV0FBVyxFQUFYQSxXQUFXO0VBQ1hPLFlBQVksRUFBWkEsWUFBWTtFQUNaSyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtFQUNwQkUscUJBQXFCLEVBQXJCQTtBQUNELENBQUM7QUFBQSIsImZpbGUiOiI3OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFt6LXBhZ2luZ13mi6bmiKrlmahcblxuLy/mi6bmiKom5aSE55CGQHF1ZXJ55LqL5Lu2XG5mdW5jdGlvbiBoYW5kbGVRdWVyeShjYWxsYmFjaykge1xuXHR0cnkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRfZ2V0QXBwKCkuZ2xvYmFsRGF0YS56cF9oYW5kbGVRdWVyeUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0fSwgMSk7XG5cdH0gY2F0Y2ggKGUpIHt9XG59XG5cbi8v5oum5oiqJuWkhOeQhkBxdWVyeeS6i+S7tijnp4HmnInvvIzor7fli7/osIPnlKgpXG5mdW5jdGlvbiBfaGFuZGxlUXVlcnkocGFnZU5vLCBwYWdlU2l6ZSwgZnJvbSwgbGFzdEl0ZW0pe1xuXHRjb25zdCBjYWxsYmFjayA9IF9nZXRBcHAoKS5nbG9iYWxEYXRhLnpwX2hhbmRsZVF1ZXJ5Q2FsbGJhY2s7XG5cdHJldHVybiBjYWxsYmFjayA/IGNhbGxiYWNrKHBhZ2VObywgcGFnZVNpemUsIGZyb20sIGxhc3RJdGVtKSA6IFtwYWdlTm8sIHBhZ2VTaXplLCBmcm9tXTtcbn1cblxuLy/mi6bmiKom5aSE55CG57O757ufbGFuZ3VhZ2XovaxpMThuIGxvY2FsXG5mdW5jdGlvbiBoYW5kbGVMYW5ndWFnZTJMb2NhbChjYWxsYmFjaykge1xuXHR0cnkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRfZ2V0QXBwKCkuZ2xvYmFsRGF0YS56cF9oYW5kbGVMYW5ndWFnZTJMb2NhbENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0fSwgMSk7XG5cdH0gY2F0Y2ggKGUpIHt9XG59XG5cbi8v5oum5oiqJuWkhOeQhuezu+e7n2xhbmd1YWdl6L2saTE4biBsb2NhbCjnp4HmnInvvIzor7fli7/osIPnlKgpXG5mdW5jdGlvbiBfaGFuZGxlTGFuZ3VhZ2UyTG9jYWwobGFuZ3VhZ2UsIGxvY2FsKXtcblx0Y29uc3QgY2FsbGJhY2sgPSBfZ2V0QXBwKCkuZ2xvYmFsRGF0YS56cF9oYW5kbGVMYW5ndWFnZTJMb2NhbENhbGxiYWNrO1xuXHRyZXR1cm4gY2FsbGJhY2sgPyBjYWxsYmFjayhsYW5ndWFnZSwgbG9jYWwpIDogbG9jYWw7XG59XG5cbi8v6I635Y+W5b2T5YmNYXBw5a+56LGhXG5mdW5jdGlvbiBfZ2V0QXBwKCl7XG5cblxuXG5cblx0cmV0dXJuIGdldEFwcCh7IGFsbG93RGVmYXVsdDogdHJ1ZSB9KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGhhbmRsZVF1ZXJ5LFxuXHRfaGFuZGxlUXVlcnksXG5cdGhhbmRsZUxhbmd1YWdlMkxvY2FsLFxuXHRfaGFuZGxlTGFuZ3VhZ2UyTG9jYWxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///79\n");

/***/ }),
/* 80 */
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/modules/i18n.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 81);\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../../i18n/index.js */ 84));\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! .././z-paging-utils */ 47));\nvar _zPagingConstant = _interopRequireDefault(__webpack_require__(/*! .././z-paging-constant */ 46));\nvar _zPagingInterceptor = _interopRequireDefault(__webpack_require__(/*! ../z-paging-interceptor */ 79));\n// [z-paging]i18n模块\n\nvar _initVueI18n = (0, _uniI18n.initVueI18n)(_index.default),\n  t = _initVueI18n.t;\nvar _default = {\n  data: function data() {\n    return {\n      language: uni.getSystemInfoSync().language\n    };\n  },\n  computed: {\n    finalLanguage: function finalLanguage() {\n      try {\n        var local = uni.getLocale();\n        var language = this.language;\n        return local === 'auto' ? _zPagingInterceptor.default._handleLanguage2Local(language, this._language2Local(language)) : local;\n      } catch (e) {\n        return 'zh-Hans';\n      }\n    },\n    finalRefresherDefaultText: function finalRefresherDefaultText() {\n      return this._getI18nText('zp.refresher.default', this.refresherDefaultText);\n    },\n    finalRefresherPullingText: function finalRefresherPullingText() {\n      return this._getI18nText('zp.refresher.pulling', this.refresherPullingText);\n    },\n    finalRefresherRefreshingText: function finalRefresherRefreshingText() {\n      return this._getI18nText('zp.refresher.refreshing', this.refresherRefreshingText);\n    },\n    finalRefresherCompleteText: function finalRefresherCompleteText() {\n      return this._getI18nText('zp.refresher.complete', this.refresherCompleteText);\n    },\n    finalRefresherUpdateTimeTextMap: function finalRefresherUpdateTimeTextMap() {\n      return {\n        title: t('zp.refresherUpdateTime.title'),\n        none: t('zp.refresherUpdateTime.none'),\n        today: t('zp.refresherUpdateTime.today'),\n        yesterday: t('zp.refresherUpdateTime.yesterday')\n      };\n    },\n    finalLoadingMoreDefaultText: function finalLoadingMoreDefaultText() {\n      return this._getI18nText('zp.loadingMore.default', this.loadingMoreDefaultText);\n    },\n    finalLoadingMoreLoadingText: function finalLoadingMoreLoadingText() {\n      return this._getI18nText('zp.loadingMore.loading', this.loadingMoreLoadingText);\n    },\n    finalLoadingMoreNoMoreText: function finalLoadingMoreNoMoreText() {\n      return this._getI18nText('zp.loadingMore.noMore', this.loadingMoreNoMoreText);\n    },\n    finalLoadingMoreFailText: function finalLoadingMoreFailText() {\n      return this._getI18nText('zp.loadingMore.fail', this.loadingMoreFailText);\n    },\n    finalEmptyViewText: function finalEmptyViewText() {\n      return this.isLoadFailed ? this.finalEmptyViewErrorText : this._getI18nText('zp.emptyView.title', this.emptyViewText);\n    },\n    finalEmptyViewReloadText: function finalEmptyViewReloadText() {\n      return this._getI18nText('zp.emptyView.reload', this.emptyViewReloadText);\n    },\n    finalEmptyViewErrorText: function finalEmptyViewErrorText() {\n      return this._getI18nText('zp.emptyView.error', this.emptyViewErrorText);\n    },\n    finalSystemLoadingText: function finalSystemLoadingText() {\n      return this._getI18nText('zp.systemLoading.title', this.systemLoadingText);\n    }\n  },\n  methods: {\n    //获取当前z-paging的语言\n    getLanguage: function getLanguage() {\n      return this.finalLanguage;\n    },\n    //获取国际化转换后的文本\n    _getI18nText: function _getI18nText(key, value) {\n      var dataType = Object.prototype.toString.call(value);\n      if (dataType === '[object Object]') {\n        var nextValue = value[this.finalLanguage];\n        if (nextValue) return nextValue;\n      } else if (dataType === '[object String]') {\n        return value;\n      }\n      return t(key);\n    },\n    //系统language转i18n local\n    _language2Local: function _language2Local(language) {\n      var formatedLanguage = language.toLowerCase().replace(new RegExp('_', ''), '-');\n      if (formatedLanguage.indexOf('zh') !== -1) {\n        if (formatedLanguage === 'zh' || formatedLanguage === 'zh-cn' || formatedLanguage.indexOf('zh-hans') !== -1) {\n          return 'zh-Hans';\n        }\n        return 'zh-Hant';\n      }\n      if (formatedLanguage.indexOf('en') !== -1) return 'en';\n      return language;\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy9tb2R1bGVzL2kxOG4uanMiXSwibmFtZXMiOlsiaW5pdFZ1ZUkxOG4iLCJtZXNzYWdlcyIsInQiLCJkYXRhIiwibGFuZ3VhZ2UiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsImNvbXB1dGVkIiwiZmluYWxMYW5ndWFnZSIsImxvY2FsIiwiZ2V0TG9jYWxlIiwiaW50ZXJjZXB0b3IiLCJfaGFuZGxlTGFuZ3VhZ2UyTG9jYWwiLCJfbGFuZ3VhZ2UyTG9jYWwiLCJlIiwiZmluYWxSZWZyZXNoZXJEZWZhdWx0VGV4dCIsIl9nZXRJMThuVGV4dCIsInJlZnJlc2hlckRlZmF1bHRUZXh0IiwiZmluYWxSZWZyZXNoZXJQdWxsaW5nVGV4dCIsInJlZnJlc2hlclB1bGxpbmdUZXh0IiwiZmluYWxSZWZyZXNoZXJSZWZyZXNoaW5nVGV4dCIsInJlZnJlc2hlclJlZnJlc2hpbmdUZXh0IiwiZmluYWxSZWZyZXNoZXJDb21wbGV0ZVRleHQiLCJyZWZyZXNoZXJDb21wbGV0ZVRleHQiLCJmaW5hbFJlZnJlc2hlclVwZGF0ZVRpbWVUZXh0TWFwIiwidGl0bGUiLCJub25lIiwidG9kYXkiLCJ5ZXN0ZXJkYXkiLCJmaW5hbExvYWRpbmdNb3JlRGVmYXVsdFRleHQiLCJsb2FkaW5nTW9yZURlZmF1bHRUZXh0IiwiZmluYWxMb2FkaW5nTW9yZUxvYWRpbmdUZXh0IiwibG9hZGluZ01vcmVMb2FkaW5nVGV4dCIsImZpbmFsTG9hZGluZ01vcmVOb01vcmVUZXh0IiwibG9hZGluZ01vcmVOb01vcmVUZXh0IiwiZmluYWxMb2FkaW5nTW9yZUZhaWxUZXh0IiwibG9hZGluZ01vcmVGYWlsVGV4dCIsImZpbmFsRW1wdHlWaWV3VGV4dCIsImlzTG9hZEZhaWxlZCIsImZpbmFsRW1wdHlWaWV3RXJyb3JUZXh0IiwiZW1wdHlWaWV3VGV4dCIsImZpbmFsRW1wdHlWaWV3UmVsb2FkVGV4dCIsImVtcHR5Vmlld1JlbG9hZFRleHQiLCJlbXB0eVZpZXdFcnJvclRleHQiLCJmaW5hbFN5c3RlbUxvYWRpbmdUZXh0Iiwic3lzdGVtTG9hZGluZ1RleHQiLCJtZXRob2RzIiwiZ2V0TGFuZ3VhZ2UiLCJrZXkiLCJ2YWx1ZSIsImRhdGFUeXBlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwibmV4dFZhbHVlIiwiZm9ybWF0ZWRMYW5ndWFnZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIlJlZ0V4cCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBUEE7O0FBR0EsbUJBQWMsSUFBQUEsb0JBQVcsRUFBQ0MsY0FBUSxDQUFDO0VBQTNCQyxDQUFDLGdCQUFEQSxDQUFDO0FBQTBCLGVBTXBCO0VBQ2RDLElBQUksa0JBQUc7SUFDTixPQUFPO01BQ05DLFFBQVEsRUFBRUMsR0FBRyxDQUFDQyxpQkFBaUIsRUFBRSxDQUFDRjtJQUNuQyxDQUFDO0VBQ0YsQ0FBQztFQUNERyxRQUFRLEVBQUU7SUFDVEMsYUFBYSwyQkFBRztNQUNmLElBQUk7UUFDSCxJQUFNQyxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0ssU0FBUyxFQUFFO1FBQzdCLElBQU1OLFFBQVEsR0FBRyxJQUFJLENBQUNBLFFBQVE7UUFDOUIsT0FBT0ssS0FBSyxLQUFLLE1BQU0sR0FBR0UsMkJBQVcsQ0FBQ0MscUJBQXFCLENBQUNSLFFBQVEsRUFBRSxJQUFJLENBQUNTLGVBQWUsQ0FBQ1QsUUFBUSxDQUFDLENBQUMsR0FBR0ssS0FBSztNQUM5RyxDQUFDLENBQUMsT0FBT0ssQ0FBQyxFQUFFO1FBQ1gsT0FBTyxTQUFTO01BQ2pCO0lBQ0QsQ0FBQztJQUNEQyx5QkFBeUIsdUNBQUc7TUFDM0IsT0FBTyxJQUFJLENBQUNDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUNDLG9CQUFvQixDQUFDO0lBQzVFLENBQUM7SUFDREMseUJBQXlCLHVDQUFHO01BQzNCLE9BQU8s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RCxRQUFRLENBQUNxRCxXQUFXLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLElBQUlDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO01BQ2pGLElBQUlILGdCQUFnQixDQUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDMUMsSUFBSUosZ0JBQWdCLEtBQUssSUFBSSxJQUFJQSxnQkFBZ0IsS0FBSyxPQUFPLElBQUlBLGdCQUFnQixDQUFDSSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7VUFDNUcsT0FBTyxTQUFTO1FBQ2pCO1FBQ0EsT0FBTyxTQUFTO01BQ2pCO01BQ0EsSUFBSUosZ0JBQWdCLENBQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPLElBQUk7TUFDdEQsT0FBT3hELFFBQVE7SUFDaEI7RUFDRDtBQUNELENBQUM7QUFBQSIsImZpbGUiOiI4MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFt6LXBhZ2luZ11pMThu5qih5Z2XXG5pbXBvcnQgeyBpbml0VnVlSTE4biB9IGZyb20gJ0BkY2xvdWRpby91bmktaTE4bidcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi9pMThuL2luZGV4LmpzJ1xuY29uc3QgeyB0IH0gPSBpbml0VnVlSTE4bihtZXNzYWdlcylcblxuaW1wb3J0IHUgZnJvbSAnLi4vLi96LXBhZ2luZy11dGlscydcbmltcG9ydCBjIGZyb20gJy4uLy4vei1wYWdpbmctY29uc3RhbnQnXG5pbXBvcnQgaW50ZXJjZXB0b3IgZnJvbSAnLi4vei1wYWdpbmctaW50ZXJjZXB0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFuZ3VhZ2U6IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLmxhbmd1YWdlXG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGZpbmFsTGFuZ3VhZ2UoKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBsb2NhbCA9IHVuaS5nZXRMb2NhbGUoKTtcblx0XHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlO1xuXHRcdFx0XHRyZXR1cm4gbG9jYWwgPT09ICdhdXRvJyA/IGludGVyY2VwdG9yLl9oYW5kbGVMYW5ndWFnZTJMb2NhbChsYW5ndWFnZSwgdGhpcy5fbGFuZ3VhZ2UyTG9jYWwobGFuZ3VhZ2UpKSA6IGxvY2FsO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gJ3poLUhhbnMnO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZmluYWxSZWZyZXNoZXJEZWZhdWx0VGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLl9nZXRJMThuVGV4dCgnenAucmVmcmVzaGVyLmRlZmF1bHQnLCB0aGlzLnJlZnJlc2hlckRlZmF1bHRUZXh0KTtcblx0XHR9LFxuXHRcdGZpbmFsUmVmcmVzaGVyUHVsbGluZ1RleHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fZ2V0STE4blRleHQoJ3pwLnJlZnJlc2hlci5wdWxsaW5nJywgdGhpcy5yZWZyZXNoZXJQdWxsaW5nVGV4dCk7XG5cdFx0fSxcblx0XHRmaW5hbFJlZnJlc2hlclJlZnJlc2hpbmdUZXh0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2dldEkxOG5UZXh0KCd6cC5yZWZyZXNoZXIucmVmcmVzaGluZycsIHRoaXMucmVmcmVzaGVyUmVmcmVzaGluZ1RleHQpO1xuXHRcdH0sXG5cdFx0ZmluYWxSZWZyZXNoZXJDb21wbGV0ZVRleHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fZ2V0STE4blRleHQoJ3pwLnJlZnJlc2hlci5jb21wbGV0ZScsIHRoaXMucmVmcmVzaGVyQ29tcGxldGVUZXh0KTtcblx0XHR9LFxuXHRcdGZpbmFsUmVmcmVzaGVyVXBkYXRlVGltZVRleHRNYXAoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0aXRsZTogdCgnenAucmVmcmVzaGVyVXBkYXRlVGltZS50aXRsZScpLFxuXHRcdFx0XHRub25lOiB0KCd6cC5yZWZyZXNoZXJVcGRhdGVUaW1lLm5vbmUnKSxcblx0XHRcdFx0dG9kYXk6IHQoJ3pwLnJlZnJlc2hlclVwZGF0ZVRpbWUudG9kYXknKSxcblx0XHRcdFx0eWVzdGVyZGF5OiB0KCd6cC5yZWZyZXNoZXJVcGRhdGVUaW1lLnllc3RlcmRheScpXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0ZmluYWxMb2FkaW5nTW9yZURlZmF1bHRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2dldEkxOG5UZXh0KCd6cC5sb2FkaW5nTW9yZS5kZWZhdWx0JywgdGhpcy5sb2FkaW5nTW9yZURlZmF1bHRUZXh0KTtcblx0XHR9LFxuXHRcdGZpbmFsTG9hZGluZ01vcmVMb2FkaW5nVGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLl9nZXRJMThuVGV4dCgnenAubG9hZGluZ01vcmUubG9hZGluZycsIHRoaXMubG9hZGluZ01vcmVMb2FkaW5nVGV4dCk7XG5cdFx0fSxcblx0XHRmaW5hbExvYWRpbmdNb3JlTm9Nb3JlVGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLl9nZXRJMThuVGV4dCgnenAubG9hZGluZ01vcmUubm9Nb3JlJywgdGhpcy5sb2FkaW5nTW9yZU5vTW9yZVRleHQpO1xuXHRcdH0sXG5cdFx0ZmluYWxMb2FkaW5nTW9yZUZhaWxUZXh0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2dldEkxOG5UZXh0KCd6cC5sb2FkaW5nTW9yZS5mYWlsJywgdGhpcy5sb2FkaW5nTW9yZUZhaWxUZXh0KTtcblx0XHR9LFxuXHRcdGZpbmFsRW1wdHlWaWV3VGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmlzTG9hZEZhaWxlZCA/IHRoaXMuZmluYWxFbXB0eVZpZXdFcnJvclRleHQgOiB0aGlzLl9nZXRJMThuVGV4dCgnenAuZW1wdHlWaWV3LnRpdGxlJywgdGhpcy5lbXB0eVZpZXdUZXh0KTtcblx0XHR9LFxuXHRcdGZpbmFsRW1wdHlWaWV3UmVsb2FkVGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLl9nZXRJMThuVGV4dCgnenAuZW1wdHlWaWV3LnJlbG9hZCcsIHRoaXMuZW1wdHlWaWV3UmVsb2FkVGV4dCk7XG5cdFx0fSxcblx0XHRmaW5hbEVtcHR5Vmlld0Vycm9yVGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLl9nZXRJMThuVGV4dCgnenAuZW1wdHlWaWV3LmVycm9yJywgdGhpcy5lbXB0eVZpZXdFcnJvclRleHQpO1xuXHRcdH0sXG5cdFx0ZmluYWxTeXN0ZW1Mb2FkaW5nVGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLl9nZXRJMThuVGV4dCgnenAuc3lzdGVtTG9hZGluZy50aXRsZScsIHRoaXMuc3lzdGVtTG9hZGluZ1RleHQpO1xuXHRcdH0sXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHQvL+iOt+WPluW9k+WJjXotcGFnaW5n55qE6K+t6KiAXG5cdFx0Z2V0TGFuZ3VhZ2UoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maW5hbExhbmd1YWdlO1xuXHRcdH0sXG5cdFx0Ly/ojrflj5blm73pmYXljJbovazmjaLlkI7nmoTmlofmnKxcblx0XHRfZ2V0STE4blRleHQoa2V5LCB2YWx1ZSkge1xuXHRcdFx0Y29uc3QgZGF0YVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXHRcdFx0aWYgKGRhdGFUeXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdFx0XHRjb25zdCBuZXh0VmFsdWUgPSB2YWx1ZVt0aGlzLmZpbmFsTGFuZ3VhZ2VdO1xuXHRcdFx0XHRpZiAobmV4dFZhbHVlKSByZXR1cm4gbmV4dFZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHQoa2V5KTtcblx0XHR9LFxuXHRcdC8v57O757ufbGFuZ3VhZ2XovaxpMThuIGxvY2FsXG5cdFx0X2xhbmd1YWdlMkxvY2FsKGxhbmd1YWdlKSB7XG5cdFx0XHRjb25zdCBmb3JtYXRlZExhbmd1YWdlID0gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKS5yZXBsYWNlKG5ldyBSZWdFeHAoJ18nLCAnJyksICctJyk7XG5cdFx0XHRpZiAoZm9ybWF0ZWRMYW5ndWFnZS5pbmRleE9mKCd6aCcpICE9PSAtMSkge1xuXHRcdFx0XHRpZiAoZm9ybWF0ZWRMYW5ndWFnZSA9PT0gJ3poJyB8fCBmb3JtYXRlZExhbmd1YWdlID09PSAnemgtY24nIHx8IGZvcm1hdGVkTGFuZ3VhZ2UuaW5kZXhPZignemgtaGFucycpICE9PSAtMSkge1xuXHRcdFx0XHRcdHJldHVybiAnemgtSGFucyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICd6aC1IYW50Jztcblx0XHRcdH1cblx0XHRcdGlmIChmb3JtYXRlZExhbmd1YWdlLmluZGV4T2YoJ2VuJykgIT09IC0xKSByZXR1cm4gJ2VuJztcblx0XHRcdHJldHVybiBsYW5ndWFnZTtcblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///80\n");

/***/ }),
/* 81 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 69));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 82));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 83));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 5));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}

/***/ }),
/* 82 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 83 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 4);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 84 */
/*!************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/i18n/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 85));\nvar _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 86));\nvar _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 87));\nvar _default = {\n  en: _en.default,\n  'zh-Hans': _zhHans.default,\n  'zh-Hant': _zhHant.default\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9pMThuL2luZGV4LmpzIl0sIm5hbWVzIjpbImVuIiwiemhIYW5zIiwiemhIYW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQW1DLGVBQ3BCO0VBQ2RBLEVBQUUsRUFBRkEsV0FBRTtFQUNGLFNBQVMsRUFBRUMsZUFBTTtFQUNqQixTQUFTLEVBQUVDO0FBQ1osQ0FBQztBQUFBIiwiZmlsZSI6Ijg0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVuIGZyb20gJy4vZW4uanNvbidcclxuaW1wb3J0IHpoSGFucyBmcm9tICcuL3poLUhhbnMuanNvbidcclxuaW1wb3J0IHpoSGFudCBmcm9tICcuL3poLUhhbnQuanNvbidcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGVuLFxyXG5cdCd6aC1IYW5zJzogemhIYW5zLFxyXG5cdCd6aC1IYW50JzogemhIYW50XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///84\n");

/***/ }),
/* 85 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/i18n/en.json ***!
  \***********************************************************************************************************************/
/*! exports provided: zp.refresher.default, zp.refresher.pulling, zp.refresher.refreshing, zp.refresher.complete, zp.loadingMore.default, zp.loadingMore.loading, zp.loadingMore.noMore, zp.loadingMore.fail, zp.emptyView.title, zp.emptyView.reload, zp.emptyView.error, zp.refresherUpdateTime.title, zp.refresherUpdateTime.none, zp.refresherUpdateTime.today, zp.refresherUpdateTime.yesterday, zp.systemLoading.title, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"zp.refresher.default\\\":\\\"Pull down to refresh\\\",\\\"zp.refresher.pulling\\\":\\\"Release to refresh\\\",\\\"zp.refresher.refreshing\\\":\\\"Refreshing...\\\",\\\"zp.refresher.complete\\\":\\\"Refresh succeeded\\\",\\\"zp.loadingMore.default\\\":\\\"Click to load more\\\",\\\"zp.loadingMore.loading\\\":\\\"Loading...\\\",\\\"zp.loadingMore.noMore\\\":\\\"No more data\\\",\\\"zp.loadingMore.fail\\\":\\\"Load failed,click to reload\\\",\\\"zp.emptyView.title\\\":\\\"No data\\\",\\\"zp.emptyView.reload\\\":\\\"Reload\\\",\\\"zp.emptyView.error\\\":\\\"Sorry,load failed\\\",\\\"zp.refresherUpdateTime.title\\\":\\\"Last update: \\\",\\\"zp.refresherUpdateTime.none\\\":\\\"None\\\",\\\"zp.refresherUpdateTime.today\\\":\\\"Today\\\",\\\"zp.refresherUpdateTime.yesterday\\\":\\\"Yesterday\\\",\\\"zp.systemLoading.title\\\":\\\"Loading...\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI4NS5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///85\n");

/***/ }),
/* 86 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/i18n/zh-Hans.json ***!
  \****************************************************************************************************************************/
/*! exports provided: zp.refresher.default, zp.refresher.pulling, zp.refresher.refreshing, zp.refresher.complete, zp.loadingMore.default, zp.loadingMore.loading, zp.loadingMore.noMore, zp.loadingMore.fail, zp.emptyView.title, zp.emptyView.reload, zp.emptyView.error, zp.refresherUpdateTime.title, zp.refresherUpdateTime.none, zp.refresherUpdateTime.today, zp.refresherUpdateTime.yesterday, zp.systemLoading.title, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"zp.refresher.default\\\":\\\"继续下拉刷新\\\",\\\"zp.refresher.pulling\\\":\\\"松开立即刷新\\\",\\\"zp.refresher.refreshing\\\":\\\"正在刷新...\\\",\\\"zp.refresher.complete\\\":\\\"刷新成功\\\",\\\"zp.loadingMore.default\\\":\\\"点击加载更多\\\",\\\"zp.loadingMore.loading\\\":\\\"正在加载...\\\",\\\"zp.loadingMore.noMore\\\":\\\"没有更多了\\\",\\\"zp.loadingMore.fail\\\":\\\"加载失败，点击重新加载\\\",\\\"zp.emptyView.title\\\":\\\"没有数据哦~\\\",\\\"zp.emptyView.reload\\\":\\\"重新加载\\\",\\\"zp.emptyView.error\\\":\\\"很抱歉，加载失败\\\",\\\"zp.refresherUpdateTime.title\\\":\\\"最后更新：\\\",\\\"zp.refresherUpdateTime.none\\\":\\\"无\\\",\\\"zp.refresherUpdateTime.today\\\":\\\"今天\\\",\\\"zp.refresherUpdateTime.yesterday\\\":\\\"昨天\\\",\\\"zp.systemLoading.title\\\":\\\"加载中...\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI4Ni5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///86\n");

/***/ }),
/* 87 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/i18n/zh-Hant.json ***!
  \****************************************************************************************************************************/
/*! exports provided: zp.refresher.default, zp.refresher.pulling, zp.refresher.refreshing, zp.refresher.complete, zp.loadingMore.default, zp.loadingMore.loading, zp.loadingMore.noMore, zp.loadingMore.fail, zp.emptyView.title, zp.emptyView.reload, zp.emptyView.error, zp.refresherUpdateTime.title, zp.refresherUpdateTime.none, zp.refresherUpdateTime.today, zp.refresherUpdateTime.yesterday, zp.systemLoading.title, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"zp.refresher.default\\\":\\\"繼續下拉重繪\\\",\\\"zp.refresher.pulling\\\":\\\"鬆開立即重繪\\\",\\\"zp.refresher.refreshing\\\":\\\"正在重繪...\\\",\\\"zp.refresher.complete\\\":\\\"重繪成功\\\",\\\"zp.loadingMore.default\\\":\\\"點擊加載更多\\\",\\\"zp.loadingMore.loading\\\":\\\"正在加載...\\\",\\\"zp.loadingMore.noMore\\\":\\\"沒有更多了\\\",\\\"zp.loadingMore.fail\\\":\\\"加載失敗，點擊重新加載\\\",\\\"zp.emptyView.title\\\":\\\"沒有數據哦~\\\",\\\"zp.emptyView.reload\\\":\\\"重新加載\\\",\\\"zp.emptyView.error\\\":\\\"很抱歉，加載失敗\\\",\\\"zp.refresherUpdateTime.title\\\":\\\"最後更新：\\\",\\\"zp.refresherUpdateTime.none\\\":\\\"無\\\",\\\"zp.refresherUpdateTime.today\\\":\\\"今天\\\",\\\"zp.refresherUpdateTime.yesterday\\\":\\\"昨天\\\",\\\"zp.systemLoading.title\\\":\\\"加載中...\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI4Ny5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///87\n");

/***/ }),
/* 88 */
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/modules/nvue.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! .././z-paging-utils */ 47));\nvar _zPagingConstant = _interopRequireDefault(__webpack_require__(/*! .././z-paging-constant */ 46));\nvar _zPagingEnum = _interopRequireDefault(__webpack_require__(/*! .././z-paging-enum */ 57));\n// [z-paging]nvue独有部分模块\n\nvar weexAnimation = weex.requireModule('animation');\nvar _default2 = {\n  props: {\n    //nvue中修改列表类型，可选值有list、waterfall和scroller，默认为list\n    nvueListIs: {\n      type: String,\n      default: _zPagingUtils.default.gc('nvueListIs', 'list')\n    },\n    //nvue waterfall配置，仅在nvue中且nvueListIs=waterfall时有效，配置参数详情参见：https://uniapp.dcloud.io/component/waterfall\n    nvueWaterfallConfig: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('nvueWaterfallConfig', {});\n      }\n    },\n    //nvue 控制是否回弹效果，iOS不支持动态修改\n    nvueBounce: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('nvueBounce', true)\n    },\n    //nvue中通过代码滚动到顶部/底部时，是否加快动画效果(无滚动动画时无效)，默认为否\n    nvueFastScroll: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('nvueFastScroll', false)\n    },\n    //nvue中list的id\n    nvueListId: {\n      type: String,\n      default: _zPagingUtils.default.gc('nvueListId', '')\n    },\n    //nvue中refresh组件的样式\n    nvueRefresherStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('nvueRefresherStyle', {});\n      }\n    },\n    //nvue中是否按分页模式(类似竖向swiper)显示List，默认为false\n    nvuePagingEnabled: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('nvuePagingEnabled', false)\n    },\n    //是否隐藏nvue列表底部的tagView，此view用于标识滚动到底部位置，若隐藏则滚动到底部功能将失效，在nvue中实现吸顶+swiper功能时需将最外层z-paging的此属性设置为true。默认为否\n    hideNvueBottomTag: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('hideNvueBottomTag', false)\n    },\n    //nvue中控制onscroll事件触发的频率：表示两次onscroll事件之间列表至少滚动了10px。注意，将该值设置为较小的数值会提高滚动事件采样的精度，但同时也会降低页面的性能\n    offsetAccuracy: {\n      type: Number,\n      default: _zPagingUtils.default.gc('offsetAccuracy', 10)\n    }\n  },\n  data: function data() {\n    return {\n      nRefresherLoading: false,\n      nListIsDragging: false,\n      nShowBottom: true,\n      nFixFreezing: false,\n      nShowRefresherReveal: false,\n      nIsFirstPageAndNoMore: false,\n      nFirstPageAndNoMoreChecked: false,\n      nLoadingMoreFixedHeight: false,\n      nShowRefresherRevealHeight: 0,\n      nOldShowRefresherRevealHeight: -1,\n      nRefresherWidth: uni.upx2px(750)\n    };\n  },\n  watch: {\n    nIsFirstPageAndNoMore: {\n      handler: function handler(newVal) {\n        var cellStyle = !this.useChatRecordMode || newVal ? {} : {\n          transform: 'rotate(180deg)'\n        };\n        this.$emit('update:cellStyle', cellStyle);\n        this.$emit('cellStyleChange', cellStyle);\n      },\n      immediate: true\n    }\n  },\n  computed: {\n    nScopedSlots: function nScopedSlots() {\n      return this.$scopedSlots;\n    },\n    nWaterfallColumnCount: function nWaterfallColumnCount() {\n      if (this.finalNvueListIs !== 'waterfall') return 0;\n      return this._nGetWaterfallConfig('column-count', 2);\n    },\n    nWaterfallColumnWidth: function nWaterfallColumnWidth() {\n      return this._nGetWaterfallConfig('column-width', 'auto');\n    },\n    nWaterfallColumnGap: function nWaterfallColumnGap() {\n      return this._nGetWaterfallConfig('column-gap', 'normal');\n    },\n    nWaterfallLeftGap: function nWaterfallLeftGap() {\n      return this._nGetWaterfallConfig('left-gap', 0);\n    },\n    nWaterfallRightGap: function nWaterfallRightGap() {\n      return this._nGetWaterfallConfig('right-gap', 0);\n    },\n    nViewIs: function nViewIs() {\n      var is = this.finalNvueListIs;\n      return is === 'scroller' || is === 'view' ? 'view' : is === 'waterfall' ? 'header' : 'cell';\n    },\n    nSafeAreaBottomHeight: function nSafeAreaBottomHeight() {\n      return this.safeAreaInsetBottom ? this.safeAreaBottom : 0;\n    },\n    nChatRecordRotateStyle: function nChatRecordRotateStyle() {\n      return this.useChatRecordMode ? {\n        transform: this.nIsFirstPageAndNoMore ? 'rotate(0deg)' : 'rotate(180deg)'\n      } : {};\n    },\n    finalNvueListIs: function finalNvueListIs() {\n      if (this.usePageScroll) return 'view';\n      var nvueListIsLowerCase = this.nvueListIs.toLowerCase();\n      if (['list', 'waterfall', 'scroller'].indexOf(nvueListIsLowerCase) !== -1) return nvueListIsLowerCase;\n      return 'list';\n    },\n    finalNvueSuperListIs: function finalNvueSuperListIs() {\n      return this.usePageScroll ? 'view' : 'scroller';\n    },\n    finalNvueRefresherEnabled: function finalNvueRefresherEnabled() {\n      return this.finalNvueListIs !== 'view' && this.finalRefresherEnabled && !this.nShowRefresherReveal && !this.useChatRecordMode;\n    }\n  },\n  mounted: function mounted() {\n    //旋转屏幕时更新宽度\n    uni.onWindowResize(function (res) {\n      // this._nUpdateRefresherWidth();\n    });\n  },\n  methods: {\n    //列表滚动时触发\n    _nOnScroll: function _nOnScroll(e) {\n      this.$emit('scroll', e);\n      var contentOffsetY = -e.contentOffset.y;\n      this.oldScrollTop = contentOffsetY;\n      this.nListIsDragging = e.isDragging;\n      this._checkShouldShowBackToTop(contentOffsetY, contentOffsetY - 1);\n    },\n    //下拉刷新刷新中\n    _nOnRrefresh: function _nOnRrefresh() {\n      if (this.nShowRefresherReveal) return;\n      this.nRefresherLoading = true;\n      this.refresherStatus = _zPagingEnum.default.Refresher.Loading;\n      this._doRefresherLoad();\n    },\n    //下拉刷新下拉中\n    _nOnPullingdown: function _nOnPullingdown(e) {\n      if (this.refresherStatus === _zPagingEnum.default.Refresher.Loading || this.isIos && !this.nListIsDragging) return;\n      this._emitTouchmove(e);\n      var viewHeight = e.viewHeight,\n        pullingDistance = e.pullingDistance;\n      this.refresherStatus = pullingDistance >= viewHeight ? _zPagingEnum.default.Refresher.ReleaseToRefresh : _zPagingEnum.default.Refresher.Default;\n    },\n    //下拉刷新结束\n    _nRefresherEnd: function _nRefresherEnd() {\n      var doEnd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      if (doEnd) {\n        this._nDoRefresherEndAnimation(0, -this.nShowRefresherRevealHeight);\n        !this.usePageScroll && this.$refs['zp-n-list'].resetLoadmore();\n        this.nRefresherLoading = false;\n      }\n    },\n    //执行主动触发下拉刷新动画\n    _nDoRefresherEndAnimation: function _nDoRefresherEndAnimation(height, translateY) {\n      var _this = this;\n      var animate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      var checkStack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n      this._cleanRefresherCompleteTimeout();\n      this._cleanRefresherEndTimeout();\n      if (!this.finalShowRefresherWhenReload) {\n        this.refresherEndTimeout = _zPagingUtils.default.delay(function () {\n          _this.refresherStatus = _zPagingEnum.default.Refresher.Default;\n        }, this.refresherCompleteDuration);\n        return;\n      }\n      var stackCount = this.refresherRevealStackCount;\n      if (height === 0 && checkStack) {\n        this.refresherRevealStackCount--;\n        if (stackCount > 1) return;\n        this.refresherEndTimeout = _zPagingUtils.default.delay(function () {\n          _this.refresherStatus = _zPagingEnum.default.Refresher.Default;\n        }, this.refresherCompleteDuration);\n      }\n      if (stackCount > 1) {\n        this.refresherStatus = _zPagingEnum.default.Refresher.Loading;\n      }\n      var duration = animate ? 200 : 0;\n      if (this.nOldShowRefresherRevealHeight !== height) {\n        if (height > 0) {\n          this.nShowRefresherReveal = true;\n        }\n        weexAnimation.transition(this.$refs['zp-n-list-refresher-reveal'], {\n          styles: {\n            height: \"\".concat(height, \"px\"),\n            transform: \"translateY(\".concat(translateY, \"px)\")\n          },\n          duration: duration,\n          timingFunction: 'linear',\n          needLayout: true,\n          delay: 0\n        });\n      }\n      _zPagingUtils.default.delay(function () {\n        if (animate) {\n          _this.nShowRefresherReveal = height > 0;\n        }\n      }, duration > 0 ? duration - 60 : 0);\n      this.nOldShowRefresherRevealHeight = height;\n    },\n    //滚动到底部加载更多\n    _nOnLoadmore: function _nOnLoadmore() {\n      if (this.nShowRefresherReveal || !this.totalData.length) return;\n      this.useChatRecordMode ? this.doChatRecordLoadMore() : this._onLoadingMore('toBottom');\n    },\n    //获取nvue waterfall单项配置\n    _nGetWaterfallConfig: function _nGetWaterfallConfig(key, defaultValue) {\n      return this.nvueWaterfallConfig[key] || defaultValue;\n    },\n    //更新nvue 下拉刷新view容器的宽度\n    _nUpdateRefresherWidth: function _nUpdateRefresherWidth() {\n      var _this2 = this;\n      _zPagingUtils.default.delay(function () {\n        _this2.$nextTick(function () {\n          _this2._getNodeClientRect('.zp-n-list').then(function (node) {\n            if (node) {\n              _this2.nRefresherWidth = node[0].width || _this2.nRefresherWidth;\n            }\n          });\n        });\n      });\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy9tb2R1bGVzL252dWUuanMiXSwibmFtZXMiOlsid2VleEFuaW1hdGlvbiIsIndlZXgiLCJyZXF1aXJlTW9kdWxlIiwicHJvcHMiLCJudnVlTGlzdElzIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ1IiwiZ2MiLCJudnVlV2F0ZXJmYWxsQ29uZmlnIiwiT2JqZWN0IiwibnZ1ZUJvdW5jZSIsIkJvb2xlYW4iLCJudnVlRmFzdFNjcm9sbCIsIm52dWVMaXN0SWQiLCJudnVlUmVmcmVzaGVyU3R5bGUiLCJudnVlUGFnaW5nRW5hYmxlZCIsImhpZGVOdnVlQm90dG9tVGFnIiwib2Zmc2V0QWNjdXJhY3kiLCJOdW1iZXIiLCJkYXRhIiwiblJlZnJlc2hlckxvYWRpbmciLCJuTGlzdElzRHJhZ2dpbmciLCJuU2hvd0JvdHRvbSIsIm5GaXhGcmVlemluZyIsIm5TaG93UmVmcmVzaGVyUmV2ZWFsIiwibklzRmlyc3RQYWdlQW5kTm9Nb3JlIiwibkZpcnN0UGFnZUFuZE5vTW9yZUNoZWNrZWQiLCJuTG9hZGluZ01vcmVGaXhlZEhlaWdodCIsIm5TaG93UmVmcmVzaGVyUmV2ZWFsSGVpZ2h0Iiwibk9sZFNob3dSZWZyZXNoZXJSZXZlYWxIZWlnaHQiLCJuUmVmcmVzaGVyV2lkdGgiLCJ1bmkiLCJ1cHgycHgiLCJ3YXRjaCIsImhhbmRsZXIiLCJuZXdWYWwiLCJjZWxsU3R5bGUiLCJ1c2VDaGF0UmVjb3JkTW9kZSIsInRyYW5zZm9ybSIsIiRlbWl0IiwiaW1tZWRpYXRlIiwiY29tcHV0ZWQiLCJuU2NvcGVkU2xvdHMiLCIkc2NvcGVkU2xvdHMiLCJuV2F0ZXJmYWxsQ29sdW1uQ291bnQiLCJmaW5hbE52dWVMaXN0SXMiLCJfbkdldFdhdGVyZmFsbENvbmZpZyIsIm5XYXRlcmZhbGxDb2x1bW5XaWR0aCIsIm5XYXRlcmZhbGxDb2x1bW5HYXAiLCJuV2F0ZXJmYWxsTGVmdEdhcCIsIm5XYXRlcmZhbGxSaWdodEdhcCIsIm5WaWV3SXMiLCJpcyIsIm5TYWZlQXJlYUJvdHRvbUhlaWdodCIsInNhZmVBcmVhSW5zZXRCb3R0b20iLCJzYWZlQXJlYUJvdHRvbSIsIm5DaGF0UmVjb3JkUm90YXRlU3R5bGUiLCJ1c2VQYWdlU2Nyb2xsIiwibnZ1ZUxpc3RJc0xvd2VyQ2FzZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImZpbmFsTnZ1ZVN1cGVyTGlzdElzIiwiZmluYWxOdnVlUmVmcmVzaGVyRW5hYmxlZCIsImZpbmFsUmVmcmVzaGVyRW5hYmxlZCIsIm1vdW50ZWQiLCJvbldpbmRvd1Jlc2l6ZSIsInJlcyIsIm1ldGhvZHMiLCJfbk9uU2Nyb2xsIiwiZSIsImNvbnRlbnRPZmZzZXRZIiwiY29udGVudE9mZnNldCIsInkiLCJvbGRTY3JvbGxUb3AiLCJpc0RyYWdnaW5nIiwiX2NoZWNrU2hvdWxkU2hvd0JhY2tUb1RvcCIsIl9uT25ScmVmcmVzaCIsInJlZnJlc2hlclN0YXR1cyIsIkVudW0iLCJSZWZyZXNoZXIiLCJMb2FkaW5nIiwiX2RvUmVmcmVzaGVyTG9hZCIsIl9uT25QdWxsaW5nZG93biIsImlzSW9zIiwiX2VtaXRUb3VjaG1vdmUiLCJ2aWV3SGVpZ2h0IiwicHVsbGluZ0Rpc3RhbmNlIiwiUmVsZWFzZVRvUmVmcmVzaCIsIkRlZmF1bHQiLCJfblJlZnJlc2hlckVuZCIsImRvRW5kIiwiX25Eb1JlZnJlc2hlckVuZEFuaW1hdGlvbiIsIiRyZWZzIiwicmVzZXRMb2FkbW9yZSIsImhlaWdodCIsInRyYW5zbGF0ZVkiLCJhbmltYXRlIiwiY2hlY2tTdGFjayIsIl9jbGVhblJlZnJlc2hlckNvbXBsZXRlVGltZW91dCIsIl9jbGVhblJlZnJlc2hlckVuZFRpbWVvdXQiLCJmaW5hbFNob3dSZWZyZXNoZXJXaGVuUmVsb2FkIiwicmVmcmVzaGVyRW5kVGltZW91dCIsImRlbGF5IiwicmVmcmVzaGVyQ29tcGxldGVEdXJhdGlvbiIsInN0YWNrQ291bnQiLCJyZWZyZXNoZXJSZXZlYWxTdGFja0NvdW50IiwiZHVyYXRpb24iLCJ0cmFuc2l0aW9uIiwic3R5bGVzIiwidGltaW5nRnVuY3Rpb24iLCJuZWVkTGF5b3V0IiwiX25PbkxvYWRtb3JlIiwidG90YWxEYXRhIiwibGVuZ3RoIiwiZG9DaGF0UmVjb3JkTG9hZE1vcmUiLCJfb25Mb2FkaW5nTW9yZSIsImtleSIsImRlZmF1bHRWYWx1ZSIsIl9uVXBkYXRlUmVmcmVzaGVyV2lkdGgiLCIkbmV4dFRpY2siLCJfZ2V0Tm9kZUNsaWVudFJlY3QiLCJ0aGVuIiwibm9kZSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBTUEsSUFBTUEsYUFBYSxHQUFHQyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFBQyxnQkFFdkM7RUFDZEMsS0FBSyxFQUFFO0lBRU47SUFDQUMsVUFBVSxFQUFFO01BQ1hDLElBQUksRUFBRUMsTUFBTTtNQUNaQyxPQUFPLEVBQUVDLHFCQUFDLENBQUNDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsTUFBTTtJQUNuQyxDQUFDO0lBQ0Q7SUFDQUMsbUJBQW1CLEVBQUU7TUFDcEJMLElBQUksRUFBRU0sTUFBTTtNQUNaSixPQUFPLEVBQUUsb0JBQVc7UUFDbkIsT0FBT0MscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDO01BQ3ZDO0lBQ0QsQ0FBQztJQUNEO0lBQ0FHLFVBQVUsRUFBRTtNQUNYUCxJQUFJLEVBQUVRLE9BQU87TUFDYk4sT0FBTyxFQUFFQyxxQkFBQyxDQUFDQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUk7SUFDakMsQ0FBQztJQUNEO0lBQ0FLLGNBQWMsRUFBRTtNQUNmVCxJQUFJLEVBQUVRLE9BQU87TUFDYk4sT0FBTyxFQUFFQyxxQkFBQyxDQUFDQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsS0FBSztJQUN0QyxDQUFDO0lBQ0Q7SUFDQU0sVUFBVSxFQUFFO01BQ1hWLElBQUksRUFBRUMsTUFBTTtNQUNaQyxP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b0JBQW9CLEVBQUUsR0FBRyxJQUFJLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDdkYsQ0FBQztJQUNEO0lBQ0FyRSxvQkFBb0IsZ0NBQUNzRSxHQUFHLEVBQUVDLFlBQVksRUFBRTtNQUN2QyxPQUFPLElBQUksQ0FBQzdHLG1CQUFtQixDQUFDNEcsR0FBRyxDQUFDLElBQUlDLFlBQVk7SUFDckQsQ0FBQztJQUNEO0lBQ0FDLHNCQUFzQixvQ0FBRztNQUFBO01BQ3hCaEgscUJBQUMsQ0FBQ2dHLEtBQUssQ0FBQyxZQUFNO1FBQ2IsTUFBSSxDQUFDaUIsU0FBUyxDQUFDLFlBQUk7VUFDbEIsTUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUFDLElBQUksRUFBSTtZQUNsRCxJQUFJQSxJQUFJLEVBQUU7Y0FDVCxNQUFJLENBQUM1RixlQUFlLEdBQUc0RixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUssSUFBSSxNQUFJLENBQUM3RixlQUFlO1lBQzdEO1VBQ0QsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDO01BQ0gsQ0FBQyxDQUFDO0lBQ0g7RUFFRDtBQUNELENBQUM7QUFBQSIsImZpbGUiOiI4OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFt6LXBhZ2luZ11udnVl54us5pyJ6YOo5YiG5qih5Z2XXG5pbXBvcnQgdSBmcm9tICcuLi8uL3otcGFnaW5nLXV0aWxzJ1xuaW1wb3J0IGMgZnJvbSAnLi4vLi96LXBhZ2luZy1jb25zdGFudCdcbmltcG9ydCBFbnVtIGZyb20gJy4uLy4vei1wYWdpbmctZW51bSdcblxuXG5jb25zdCB3ZWV4QW5pbWF0aW9uID0gd2VleC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczoge1xuXG5cdFx0Ly9udnVl5Lit5L+u5pS55YiX6KGo57G75Z6L77yM5Y+v6YCJ5YC85pyJbGlzdOOAgXdhdGVyZmFsbOWSjHNjcm9sbGVy77yM6buY6K6k5Li6bGlzdFxuXHRcdG52dWVMaXN0SXM6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ252dWVMaXN0SXMnLCAnbGlzdCcpXG5cdFx0fSxcblx0XHQvL252dWUgd2F0ZXJmYWxs6YWN572u77yM5LuF5ZyobnZ1ZeS4reS4lG52dWVMaXN0SXM9d2F0ZXJmYWxs5pe25pyJ5pWI77yM6YWN572u5Y+C5pWw6K+m5oOF5Y+C6KeB77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLmlvL2NvbXBvbmVudC93YXRlcmZhbGxcblx0XHRudnVlV2F0ZXJmYWxsQ29uZmlnOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHUuZ2MoJ252dWVXYXRlcmZhbGxDb25maWcnLCB7fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL252dWUg5o6n5Yi25piv5ZCm5Zue5by55pWI5p6c77yMaU9T5LiN5pSv5oyB5Yqo5oCB5L+u5pS5XG5cdFx0bnZ1ZUJvdW5jZToge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ252dWVCb3VuY2UnLCB0cnVlKVxuXHRcdH0sXG5cdFx0Ly9udnVl5Lit6YCa6L+H5Luj56CB5rua5Yqo5Yiw6aG26YOoL+W6lemDqOaXtu+8jOaYr+WQpuWKoOW/q+WKqOeUu+aViOaenCjml6Dmu5rliqjliqjnlLvml7bml6DmlYgp77yM6buY6K6k5Li65ZCmXG5cdFx0bnZ1ZUZhc3RTY3JvbGw6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdudnVlRmFzdFNjcm9sbCcsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly9udnVl5LitbGlzdOeahGlkXG5cdFx0bnZ1ZUxpc3RJZDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnbnZ1ZUxpc3RJZCcsICcnKVxuXHRcdH0sXG5cdFx0Ly9udnVl5LitcmVmcmVzaOe7hOS7tueahOagt+W8j1xuXHRcdG52dWVSZWZyZXNoZXJTdHlsZToge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB1LmdjKCdudnVlUmVmcmVzaGVyU3R5bGUnLCB7fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL252dWXkuK3mmK/lkKbmjInliIbpobXmqKHlvI8o57G75Ly856uW5ZCRc3dpcGVyKeaYvuekukxpc3TvvIzpu5jorqTkuLpmYWxzZVxuXHRcdG52dWVQYWdpbmdFbmFibGVkOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnbnZ1ZVBhZ2luZ0VuYWJsZWQnLCBmYWxzZSlcblx0XHR9LFxuXHRcdC8v5piv5ZCm6ZqQ6JePbnZ1ZeWIl+ihqOW6lemDqOeahHRhZ1ZpZXfvvIzmraR2aWV355So5LqO5qCH6K+G5rua5Yqo5Yiw5bqV6YOo5L2N572u77yM6Iul6ZqQ6JeP5YiZ5rua5Yqo5Yiw5bqV6YOo5Yqf6IO95bCG5aSx5pWI77yM5ZyobnZ1ZeS4reWunueOsOWQuOmhtitzd2lwZXLlip/og73ml7bpnIDlsIbmnIDlpJblsYJ6LXBhZ2luZ+eahOatpOWxnuaAp+iuvue9ruS4unRydWXjgILpu5jorqTkuLrlkKZcblx0XHRoaWRlTnZ1ZUJvdHRvbVRhZzoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2hpZGVOdnVlQm90dG9tVGFnJywgZmFsc2UpXG5cdFx0fSxcblx0XHQvL252dWXkuK3mjqfliLZvbnNjcm9sbOS6i+S7tuinpuWPkeeahOmikeeOh++8muihqOekuuS4pOasoW9uc2Nyb2xs5LqL5Lu25LmL6Ze05YiX6KGo6Iez5bCR5rua5Yqo5LqGMTBweOOAguazqOaEj++8jOWwhuivpeWAvOiuvue9ruS4uui+g+Wwj+eahOaVsOWAvOS8muaPkOmrmOa7muWKqOS6i+S7tumHh+agt+eahOeyvuW6pu+8jOS9huWQjOaXtuS5n+S8mumZjeS9jumhtemdoueahOaAp+iDvVxuXHRcdG9mZnNldEFjY3VyYWN5OiB7XG5cdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdvZmZzZXRBY2N1cmFjeScsIDEwKVxuXHRcdH0sXG5cblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0blJlZnJlc2hlckxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0bkxpc3RJc0RyYWdnaW5nOiBmYWxzZSxcblx0XHRcdG5TaG93Qm90dG9tOiB0cnVlLFxuXHRcdFx0bkZpeEZyZWV6aW5nOiBmYWxzZSxcblx0XHRcdG5TaG93UmVmcmVzaGVyUmV2ZWFsOiBmYWxzZSxcblx0XHRcdG5Jc0ZpcnN0UGFnZUFuZE5vTW9yZTogZmFsc2UsXG5cdFx0XHRuRmlyc3RQYWdlQW5kTm9Nb3JlQ2hlY2tlZDogZmFsc2UsXG5cdFx0XHRuTG9hZGluZ01vcmVGaXhlZEhlaWdodDogZmFsc2UsXG5cdFx0XHRuU2hvd1JlZnJlc2hlclJldmVhbEhlaWdodDogMCxcblx0XHRcdG5PbGRTaG93UmVmcmVzaGVyUmV2ZWFsSGVpZ2h0OiAtMSxcblx0XHRcdG5SZWZyZXNoZXJXaWR0aDogdW5pLnVweDJweCg3NTApLFxuXHRcdH1cblx0fSxcblx0d2F0Y2g6IHtcblxuXHRcdG5Jc0ZpcnN0UGFnZUFuZE5vTW9yZToge1xuXHRcdFx0aGFuZGxlcihuZXdWYWwpIHtcblx0XHRcdFx0Y29uc3QgY2VsbFN0eWxlID0gIXRoaXMudXNlQ2hhdFJlY29yZE1vZGUgfHwgbmV3VmFsID8ge30gOiB7IHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyB9O1xuXHRcdFx0XHR0aGlzLiRlbWl0KCd1cGRhdGU6Y2VsbFN0eWxlJywgY2VsbFN0eWxlKTtcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2VsbFN0eWxlQ2hhbmdlJywgY2VsbFN0eWxlKTtcblx0XHRcdH0sXG5cdFx0XHRpbW1lZGlhdGU6IHRydWVcblx0XHR9LFxuXG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cblx0XHRuU2NvcGVkU2xvdHMoKSB7XG5cblx0XHRcdHJldHVybiB0aGlzLiRzY29wZWRTbG90cztcblxuXG5cblxuXHRcdH0sXG5cdFx0bldhdGVyZmFsbENvbHVtbkNvdW50KCkge1xuXHRcdFx0aWYgKHRoaXMuZmluYWxOdnVlTGlzdElzICE9PSAnd2F0ZXJmYWxsJykgcmV0dXJuIDA7XG5cdFx0XHRyZXR1cm4gdGhpcy5fbkdldFdhdGVyZmFsbENvbmZpZygnY29sdW1uLWNvdW50JywgMik7XG5cdFx0fSxcblx0XHRuV2F0ZXJmYWxsQ29sdW1uV2lkdGgoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fbkdldFdhdGVyZmFsbENvbmZpZygnY29sdW1uLXdpZHRoJywgJ2F1dG8nKTtcblx0XHR9LFxuXHRcdG5XYXRlcmZhbGxDb2x1bW5HYXAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fbkdldFdhdGVyZmFsbENvbmZpZygnY29sdW1uLWdhcCcsICdub3JtYWwnKTtcblx0XHR9LFxuXHRcdG5XYXRlcmZhbGxMZWZ0R2FwKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX25HZXRXYXRlcmZhbGxDb25maWcoJ2xlZnQtZ2FwJywgMCk7XG5cdFx0fSxcblx0XHRuV2F0ZXJmYWxsUmlnaHRHYXAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fbkdldFdhdGVyZmFsbENvbmZpZygncmlnaHQtZ2FwJywgMCk7XG5cdFx0fSxcblx0XHRuVmlld0lzKCkge1xuXHRcdFx0Y29uc3QgaXMgPSB0aGlzLmZpbmFsTnZ1ZUxpc3RJcztcblx0XHRcdHJldHVybiBpcyA9PT0gJ3Njcm9sbGVyJyB8fCBpcyA9PT0gJ3ZpZXcnID8gJ3ZpZXcnIDogaXMgPT09ICd3YXRlcmZhbGwnID8gJ2hlYWRlcicgOiAnY2VsbCc7XG5cdFx0fSxcblx0XHRuU2FmZUFyZWFCb3R0b21IZWlnaHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zYWZlQXJlYUluc2V0Qm90dG9tID8gdGhpcy5zYWZlQXJlYUJvdHRvbSA6IDA7XG5cdFx0fSxcblx0XHRuQ2hhdFJlY29yZFJvdGF0ZVN0eWxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudXNlQ2hhdFJlY29yZE1vZGUgPyB7IHRyYW5zZm9ybTogdGhpcy5uSXNGaXJzdFBhZ2VBbmROb01vcmUgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoMTgwZGVnKScgfSA6IHt9O1xuXHRcdH0sXG5cdFx0ZmluYWxOdnVlTGlzdElzKCkge1xuXHRcdFx0aWYgKHRoaXMudXNlUGFnZVNjcm9sbCkgcmV0dXJuICd2aWV3Jztcblx0XHRcdGNvbnN0IG52dWVMaXN0SXNMb3dlckNhc2UgPSB0aGlzLm52dWVMaXN0SXMudG9Mb3dlckNhc2UoKTtcblx0XHRcdGlmIChbJ2xpc3QnLCd3YXRlcmZhbGwnLCdzY3JvbGxlciddLmluZGV4T2YobnZ1ZUxpc3RJc0xvd2VyQ2FzZSkgIT09IC0xKSByZXR1cm4gbnZ1ZUxpc3RJc0xvd2VyQ2FzZTtcblx0XHRcdHJldHVybiAnbGlzdCc7XG5cdFx0fSxcblx0XHRmaW5hbE52dWVTdXBlckxpc3RJcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnVzZVBhZ2VTY3JvbGwgPyAndmlldycgOiAnc2Nyb2xsZXInO1xuXHRcdH0sXG5cdFx0ZmluYWxOdnVlUmVmcmVzaGVyRW5hYmxlZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmZpbmFsTnZ1ZUxpc3RJcyAhPT0gJ3ZpZXcnICYmIHRoaXMuZmluYWxSZWZyZXNoZXJFbmFibGVkICYmICF0aGlzLm5TaG93UmVmcmVzaGVyUmV2ZWFsICYmICF0aGlzLnVzZUNoYXRSZWNvcmRNb2RlO1xuXHRcdH0sXG5cblx0fSxcblx0bW91bnRlZCgpe1xuXG5cdFx0Ly/ml4vovazlsY/luZXml7bmm7TmlrDlrr3luqZcblx0XHR1bmkub25XaW5kb3dSZXNpemUoKHJlcykgPT4ge1xuXHRcdFx0Ly8gdGhpcy5fblVwZGF0ZVJlZnJlc2hlcldpZHRoKCk7XG5cdFx0fSlcblxuXHR9LFxuXHRtZXRob2RzOiB7XG5cblx0XHQvL+WIl+ihqOa7muWKqOaXtuinpuWPkVxuXHRcdF9uT25TY3JvbGwoZSkge1xuXHRcdFx0dGhpcy4kZW1pdCgnc2Nyb2xsJywgZSk7XG5cdFx0XHRjb25zdCBjb250ZW50T2Zmc2V0WSA9IC1lLmNvbnRlbnRPZmZzZXQueTtcblx0XHRcdHRoaXMub2xkU2Nyb2xsVG9wID0gY29udGVudE9mZnNldFk7XG5cdFx0XHR0aGlzLm5MaXN0SXNEcmFnZ2luZyA9IGUuaXNEcmFnZ2luZztcblx0XHRcdHRoaXMuX2NoZWNrU2hvdWxkU2hvd0JhY2tUb1RvcChjb250ZW50T2Zmc2V0WSwgY29udGVudE9mZnNldFkgLSAxKTtcblx0XHR9LFxuXHRcdC8v5LiL5ouJ5Yi35paw5Yi35paw5LitXG5cdFx0X25PblJyZWZyZXNoKCkge1xuXHRcdFx0aWYgKHRoaXMublNob3dSZWZyZXNoZXJSZXZlYWwpIHJldHVybjtcblx0XHRcdHRoaXMublJlZnJlc2hlckxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0dGhpcy5yZWZyZXNoZXJTdGF0dXMgPSBFbnVtLlJlZnJlc2hlci5Mb2FkaW5nO1xuXHRcdFx0dGhpcy5fZG9SZWZyZXNoZXJMb2FkKCk7XG5cdFx0fSxcblx0XHQvL+S4i+aLieWIt+aWsOS4i+aLieS4rVxuXHRcdF9uT25QdWxsaW5nZG93bihlKSB7XG5cdFx0XHRpZiAodGhpcy5yZWZyZXNoZXJTdGF0dXMgPT09IEVudW0uUmVmcmVzaGVyLkxvYWRpbmcgfHwgKHRoaXMuaXNJb3MgJiYgIXRoaXMubkxpc3RJc0RyYWdnaW5nKSkgcmV0dXJuO1xuXHRcdFx0dGhpcy5fZW1pdFRvdWNobW92ZShlKTtcblx0XHRcdGNvbnN0IHsgdmlld0hlaWdodCwgcHVsbGluZ0Rpc3RhbmNlIH0gPSBlO1xuXHRcdFx0dGhpcy5yZWZyZXNoZXJTdGF0dXMgPSBwdWxsaW5nRGlzdGFuY2UgPj0gdmlld0hlaWdodCA/IEVudW0uUmVmcmVzaGVyLlJlbGVhc2VUb1JlZnJlc2ggOiBFbnVtLlJlZnJlc2hlci5EZWZhdWx0O1xuXHRcdH0sXG5cdFx0Ly/kuIvmi4nliLfmlrDnu5PmnZ9cblx0XHRfblJlZnJlc2hlckVuZChkb0VuZCA9IHRydWUpIHtcblx0XHRcdGlmIChkb0VuZCkge1xuXHRcdFx0ICAgdGhpcy5fbkRvUmVmcmVzaGVyRW5kQW5pbWF0aW9uKDAsIC10aGlzLm5TaG93UmVmcmVzaGVyUmV2ZWFsSGVpZ2h0KTsgXG5cdFx0XHQgICAhdGhpcy51c2VQYWdlU2Nyb2xsICYmIHRoaXMuJHJlZnNbJ3pwLW4tbGlzdCddLnJlc2V0TG9hZG1vcmUoKTtcblx0XHRcdCAgIHRoaXMublJlZnJlc2hlckxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8v5omn6KGM5Li75Yqo6Kem5Y+R5LiL5ouJ5Yi35paw5Yqo55S7XG5cdFx0X25Eb1JlZnJlc2hlckVuZEFuaW1hdGlvbihoZWlnaHQsIHRyYW5zbGF0ZVksIGFuaW1hdGUgPSB0cnVlLCBjaGVja1N0YWNrID0gdHJ1ZSkge1xuXHRcdFx0dGhpcy5fY2xlYW5SZWZyZXNoZXJDb21wbGV0ZVRpbWVvdXQoKTtcblx0XHRcdHRoaXMuX2NsZWFuUmVmcmVzaGVyRW5kVGltZW91dCgpO1xuXHRcdFx0XG5cdFx0XHRpZiAoIXRoaXMuZmluYWxTaG93UmVmcmVzaGVyV2hlblJlbG9hZCkge1xuXHRcdFx0XHR0aGlzLnJlZnJlc2hlckVuZFRpbWVvdXQgPSB1LmRlbGF5KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hlclN0YXR1cyA9IEVudW0uUmVmcmVzaGVyLkRlZmF1bHQ7XG5cdFx0XHRcdH0sIHRoaXMucmVmcmVzaGVyQ29tcGxldGVEdXJhdGlvbik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHN0YWNrQ291bnQgPSB0aGlzLnJlZnJlc2hlclJldmVhbFN0YWNrQ291bnQ7XG5cdFx0XHRpZiAoaGVpZ2h0ID09PSAwICYmIGNoZWNrU3RhY2spIHtcblx0XHRcdFx0dGhpcy5yZWZyZXNoZXJSZXZlYWxTdGFja0NvdW50IC0tO1xuXHRcdFx0XHRpZiAoc3RhY2tDb3VudCA+IDEpIHJldHVybjtcblx0XHRcdFx0dGhpcy5yZWZyZXNoZXJFbmRUaW1lb3V0ID0gdS5kZWxheSgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZWZyZXNoZXJTdGF0dXMgPSBFbnVtLlJlZnJlc2hlci5EZWZhdWx0O1xuXHRcdFx0XHR9LCB0aGlzLnJlZnJlc2hlckNvbXBsZXRlRHVyYXRpb24pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN0YWNrQ291bnQgPiAxKSB7XG5cdFx0XHRcdHRoaXMucmVmcmVzaGVyU3RhdHVzID0gRW51bS5SZWZyZXNoZXIuTG9hZGluZztcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29uc3QgZHVyYXRpb24gPSBhbmltYXRlID8gMjAwIDogMDtcblx0XHRcdGlmICh0aGlzLm5PbGRTaG93UmVmcmVzaGVyUmV2ZWFsSGVpZ2h0ICE9PSBoZWlnaHQpIHtcblx0XHRcdFx0aWYgKGhlaWdodCA+IDApIHtcblx0XHRcdFx0XHR0aGlzLm5TaG93UmVmcmVzaGVyUmV2ZWFsID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR3ZWV4QW5pbWF0aW9uLnRyYW5zaXRpb24odGhpcy4kcmVmc1snenAtbi1saXN0LXJlZnJlc2hlci1yZXZlYWwnXSwge1xuXHRcdFx0XHRcdHN0eWxlczoge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGR1cmF0aW9uLFxuXHRcdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcblx0XHRcdFx0XHRuZWVkTGF5b3V0OiB0cnVlLFxuXHRcdFx0XHRcdGRlbGF5OiAwXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHR1LmRlbGF5KCgpID0+IHtcblx0XHRcdFx0aWYgKGFuaW1hdGUpIHtcblx0XHRcdFx0XHR0aGlzLm5TaG93UmVmcmVzaGVyUmV2ZWFsID0gaGVpZ2h0ID4gMDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgZHVyYXRpb24gPiAwID8gZHVyYXRpb24gLSA2MCA6IDApO1xuXHRcdFx0dGhpcy5uT2xkU2hvd1JlZnJlc2hlclJldmVhbEhlaWdodCA9IGhlaWdodDtcblx0XHR9LFxuXHRcdC8v5rua5Yqo5Yiw5bqV6YOo5Yqg6L295pu05aSaXG5cdFx0X25PbkxvYWRtb3JlKCkge1xuXHRcdFx0aWYgKHRoaXMublNob3dSZWZyZXNoZXJSZXZlYWwgfHwgIXRoaXMudG90YWxEYXRhLmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0dGhpcy51c2VDaGF0UmVjb3JkTW9kZSA/IHRoaXMuZG9DaGF0UmVjb3JkTG9hZE1vcmUoKSA6IHRoaXMuX29uTG9hZGluZ01vcmUoJ3RvQm90dG9tJyk7XG5cdFx0fSxcblx0XHQvL+iOt+WPlm52dWUgd2F0ZXJmYWxs5Y2V6aG56YWN572uXG5cdFx0X25HZXRXYXRlcmZhbGxDb25maWcoa2V5LCBkZWZhdWx0VmFsdWUpIHtcblx0XHRcdHJldHVybiB0aGlzLm52dWVXYXRlcmZhbGxDb25maWdba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG5cdFx0fSxcblx0XHQvL+abtOaWsG52dWUg5LiL5ouJ5Yi35pawdmlld+WuueWZqOeahOWuveW6plxuXHRcdF9uVXBkYXRlUmVmcmVzaGVyV2lkdGgoKSB7XG5cdFx0XHR1LmRlbGF5KCgpID0+IHtcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCk9Pntcblx0XHRcdFx0XHR0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnLnpwLW4tbGlzdCcpLnRoZW4obm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAobm9kZSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm5SZWZyZXNoZXJXaWR0aCA9IG5vZGVbMF0ud2lkdGggfHwgdGhpcy5uUmVmcmVzaGVyV2lkdGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHRcdH0pXHRcblx0XHR9XG5cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///88\n");

/***/ }),
/* 89 */
/*!******************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/modules/empty.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! .././z-paging-utils */ 47));\n// [z-paging]空数据图view模块\nvar _default2 = {\n  props: {\n    //是否强制隐藏空数据图，默认为否\n    hideEmptyView: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('hideEmptyView', false)\n    },\n    //空数据图描述文字，默认为“没有数据哦~”\n    emptyViewText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('emptyViewText', null)\n    },\n    //是否显示空数据图重新加载按钮(无数据时)，默认为否\n    showEmptyViewReload: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('showEmptyViewReload', false)\n    },\n    //加载失败时是否显示空数据图重新加载按钮，默认为是\n    showEmptyViewReloadWhenError: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('showEmptyViewReloadWhenError', true)\n    },\n    //空数据图点击重新加载文字，默认为“重新加载”\n    emptyViewReloadText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('emptyViewReloadText', null)\n    },\n    //空数据图图片，默认使用z-paging内置的图片\n    emptyViewImg: {\n      type: String,\n      default: _zPagingUtils.default.gc('emptyViewImg', '')\n    },\n    //空数据图“加载失败”描述文字，默认为“很抱歉，加载失败”\n    emptyViewErrorText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('emptyViewErrorText', null)\n    },\n    //空数据图“加载失败”图片，默认使用z-paging内置的图片\n    emptyViewErrorImg: {\n      type: String,\n      default: _zPagingUtils.default.gc('emptyViewErrorImg', '')\n    },\n    //空数据图样式\n    emptyViewStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('emptyViewStyle', {});\n      }\n    },\n    //空数据图容器样式\n    emptyViewSuperStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('emptyViewSuperStyle', {});\n      }\n    },\n    //空数据图img样式\n    emptyViewImgStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('emptyViewImgStyle', {});\n      }\n    },\n    //空数据图描述文字样式\n    emptyViewTitleStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('emptyViewTitleStyle', {});\n      }\n    },\n    //空数据图重新加载按钮样式\n    emptyViewReloadStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('emptyViewReloadStyle', {});\n      }\n    },\n    //空数据图片是否铺满z-paging，默认为否，即填充满z-paging内列表(滚动区域)部分。若设置为否，则为填铺满整个z-paging\n    emptyViewFixed: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('emptyViewFixed', false)\n    },\n    //空数据图片是否垂直居中，默认为是，若设置为否即为从空数据容器顶部开始显示。emptyViewFixed为false时有效\n    emptyViewCenter: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('emptyViewCenter', true)\n    },\n    //加载中时是否自动隐藏空数据图，默认为是\n    autoHideEmptyViewWhenLoading: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('autoHideEmptyViewWhenLoading', true)\n    },\n    //用户下拉列表触发下拉刷新加载中时是否自动隐藏空数据图，默认为是\n    autoHideEmptyViewWhenPull: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('autoHideEmptyViewWhenPull', true)\n    },\n    //空数据view的z-index，默认为9\n    emptyViewZIndex: {\n      type: Number,\n      default: _zPagingUtils.default.gc('emptyViewZIndex', 9)\n    }\n  },\n  computed: {\n    finalEmptyViewImg: function finalEmptyViewImg() {\n      return this.isLoadFailed ? this.emptyViewErrorImg : this.emptyViewImg;\n    },\n    finalShowEmptyViewReload: function finalShowEmptyViewReload() {\n      return this.isLoadFailed ? this.showEmptyViewReloadWhenError : this.showEmptyViewReload;\n    },\n    showEmpty: function showEmpty() {\n      if (this.refresherOnly || this.hideEmptyView || this.realTotalData.length) return false;\n      if (this.autoHideEmptyViewWhenLoading) {\n        if (this.isAddedData && !this.firstPageLoaded && !this.loading) return true;\n      } else {\n        return true;\n      }\n      return !this.autoHideEmptyViewWhenPull && !this.isUserReload;\n    }\n  },\n  methods: {\n    //点击了空数据view重新加载按钮\n    _emptyViewReload: function _emptyViewReload() {\n      var _this = this;\n      var callbacked = false;\n      this.$emit('emptyViewReload', function (reload) {\n        if (reload === undefined || reload === true) {\n          _this.fromEmptyViewReload = true;\n          _this.reload();\n        }\n        callbacked = true;\n      });\n      this.$nextTick(function () {\n        if (!callbacked) {\n          _this.fromEmptyViewReload = true;\n          _this.reload();\n        }\n      });\n    },\n    //点击了空数据view\n    _emptyViewClick: function _emptyViewClick() {\n      this.$emit('emptyViewClick');\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy9tb2R1bGVzL2VtcHR5LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaGlkZUVtcHR5VmlldyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInUiLCJnYyIsImVtcHR5Vmlld1RleHQiLCJTdHJpbmciLCJPYmplY3QiLCJzaG93RW1wdHlWaWV3UmVsb2FkIiwic2hvd0VtcHR5Vmlld1JlbG9hZFdoZW5FcnJvciIsImVtcHR5Vmlld1JlbG9hZFRleHQiLCJlbXB0eVZpZXdJbWciLCJlbXB0eVZpZXdFcnJvclRleHQiLCJlbXB0eVZpZXdFcnJvckltZyIsImVtcHR5Vmlld1N0eWxlIiwiZW1wdHlWaWV3U3VwZXJTdHlsZSIsImVtcHR5Vmlld0ltZ1N0eWxlIiwiZW1wdHlWaWV3VGl0bGVTdHlsZSIsImVtcHR5Vmlld1JlbG9hZFN0eWxlIiwiZW1wdHlWaWV3Rml4ZWQiLCJlbXB0eVZpZXdDZW50ZXIiLCJhdXRvSGlkZUVtcHR5Vmlld1doZW5Mb2FkaW5nIiwiYXV0b0hpZGVFbXB0eVZpZXdXaGVuUHVsbCIsImVtcHR5Vmlld1pJbmRleCIsIk51bWJlciIsImNvbXB1dGVkIiwiZmluYWxFbXB0eVZpZXdJbWciLCJpc0xvYWRGYWlsZWQiLCJmaW5hbFNob3dFbXB0eVZpZXdSZWxvYWQiLCJzaG93RW1wdHkiLCJyZWZyZXNoZXJPbmx5IiwicmVhbFRvdGFsRGF0YSIsImxlbmd0aCIsImlzQWRkZWREYXRhIiwiZmlyc3RQYWdlTG9hZGVkIiwibG9hZGluZyIsImlzVXNlclJlbG9hZCIsIm1ldGhvZHMiLCJfZW1wdHlWaWV3UmVsb2FkIiwiY2FsbGJhY2tlZCIsIiRlbWl0IiwicmVsb2FkIiwidW5kZWZpbmVkIiwiZnJvbUVtcHR5Vmlld1JlbG9hZCIsIiRuZXh0VGljayIsIl9lbXB0eVZpZXdDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBREE7QUFBQSxn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QUFJLENBQUMsSUFBSSxDQUFDQyxPQUFPLEVBQUUsT0FBTyxJQUFJO01BQzVFLENBQUMsTUFBTTtRQUNOLE9BQU8sSUFBSTtNQUNaO01BQ0EsT0FBTyxDQUFDLElBQUksQ0FBQ2IseUJBQXlCLElBQUksQ0FBQyxJQUFJLENBQUNjLFlBQVk7SUFDN0Q7RUFDRCxDQUFDO0VBQ0RDLE9BQU8sRUFBRTtJQUNSO0lBQ0FDLGdCQUFnQiw4QkFBRztNQUFBO01BQ2xCLElBQUlDLFVBQVUsR0FBRyxLQUFLO01BQ3RCLElBQUksQ0FBQ0MsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQUFDLE1BQU0sRUFBSTtRQUN2QyxJQUFJQSxNQUFNLEtBQUtDLFNBQVMsSUFBSUQsTUFBTSxLQUFLLElBQUksRUFBRTtVQUM1QyxLQUFJLENBQUNFLG1CQUFtQixHQUFHLElBQUk7VUFDL0IsS0FBSSxDQUFDRixNQUFNLEVBQUU7UUFDZDtRQUNBRixVQUFVLEdBQUcsSUFBSTtNQUNsQixDQUFDLENBQUM7TUFDRixJQUFJLENBQUNLLFNBQVMsQ0FBQyxZQUFNO1FBQ3BCLElBQUksQ0FBQ0wsVUFBVSxFQUFFO1VBQ2hCLEtBQUksQ0FBQ0ksbUJBQW1CLEdBQUcsSUFBSTtVQUMvQixLQUFJLENBQUNGLE1BQU0sRUFBRTtRQUNkO01BQ0QsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNEO0lBQ0FJLGVBQWUsNkJBQUc7TUFDakIsSUFBSSxDQUFDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUM7SUFDN0I7RUFDRDtBQUNELENBQUM7QUFBQSIsImZpbGUiOiI4OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFt6LXBhZ2luZ13nqbrmlbDmja7lm752aWV35qih5Z2XXG5pbXBvcnQgdSBmcm9tICcuLi8uL3otcGFnaW5nLXV0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiB7XG5cdFx0Ly/mmK/lkKblvLrliLbpmpDol4/nqbrmlbDmja7lm77vvIzpu5jorqTkuLrlkKZcblx0XHRoaWRlRW1wdHlWaWV3OiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnaGlkZUVtcHR5VmlldycsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/nqbrmlbDmja7lm77mj4/ov7DmloflrZfvvIzpu5jorqTkuLrigJzmsqHmnInmlbDmja7lk6Z+4oCdXG5cdFx0ZW1wdHlWaWV3VGV4dDoge1xuXHRcdFx0dHlwZTogW1N0cmluZywgT2JqZWN0XSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2VtcHR5Vmlld1RleHQnLCBudWxsKVxuXHRcdH0sXG5cdFx0Ly/mmK/lkKbmmL7npLrnqbrmlbDmja7lm77ph43mlrDliqDovb3mjInpkq4o5peg5pWw5o2u5pe2Ke+8jOm7mOiupOS4uuWQplxuXHRcdHNob3dFbXB0eVZpZXdSZWxvYWQ6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdzaG93RW1wdHlWaWV3UmVsb2FkJywgZmFsc2UpXG5cdFx0fSxcblx0XHQvL+WKoOi9veWksei0peaXtuaYr+WQpuaYvuekuuepuuaVsOaNruWbvumHjeaWsOWKoOi9veaMiemSru+8jOm7mOiupOS4uuaYr1xuXHRcdHNob3dFbXB0eVZpZXdSZWxvYWRXaGVuRXJyb3I6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdzaG93RW1wdHlWaWV3UmVsb2FkV2hlbkVycm9yJywgdHJ1ZSlcblx0XHR9LFxuXHRcdC8v56m65pWw5o2u5Zu+54K55Ye76YeN5paw5Yqg6L295paH5a2X77yM6buY6K6k5Li64oCc6YeN5paw5Yqg6L294oCdXG5cdFx0ZW1wdHlWaWV3UmVsb2FkVGV4dDoge1xuXHRcdFx0dHlwZTogW1N0cmluZywgT2JqZWN0XSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2VtcHR5Vmlld1JlbG9hZFRleHQnLCBudWxsKVxuXHRcdH0sXG5cdFx0Ly/nqbrmlbDmja7lm77lm77niYfvvIzpu5jorqTkvb/nlKh6LXBhZ2luZ+WGhee9rueahOWbvueJh1xuXHRcdGVtcHR5Vmlld0ltZzoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnZW1wdHlWaWV3SW1nJywgJycpXG5cdFx0fSxcblx0XHQvL+epuuaVsOaNruWbvuKAnOWKoOi9veWksei0peKAneaPj+i/sOaWh+Wtl++8jOm7mOiupOS4uuKAnOW+iOaKseatie+8jOWKoOi9veWksei0peKAnVxuXHRcdGVtcHR5Vmlld0Vycm9yVGV4dDoge1xuXHRcdFx0dHlwZTogW1N0cmluZywgT2JqZWN0XSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2VtcHR5Vmlld0Vycm9yVGV4dCcsIG51bGwpXG5cdFx0fSxcblx0XHQvL+epuuaVsOaNruWbvuKAnOWKoOi9veWksei0peKAneWbvueJh++8jOm7mOiupOS9v+eUqHotcGFnaW5n5YaF572u55qE5Zu+54mHXG5cdFx0ZW1wdHlWaWV3RXJyb3JJbWc6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2VtcHR5Vmlld0Vycm9ySW1nJywgJycpXG5cdFx0fSxcblx0XHQvL+epuuaVsOaNruWbvuagt+W8j1xuXHRcdGVtcHR5Vmlld1N0eWxlOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHUuZ2MoJ2VtcHR5Vmlld1N0eWxlJywge30pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/nqbrmlbDmja7lm77lrrnlmajmoLflvI9cblx0XHRlbXB0eVZpZXdTdXBlclN0eWxlOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHUuZ2MoJ2VtcHR5Vmlld1N1cGVyU3R5bGUnLCB7fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+epuuaVsOaNruWbvmltZ+agt+W8j1xuXHRcdGVtcHR5Vmlld0ltZ1N0eWxlOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHUuZ2MoJ2VtcHR5Vmlld0ltZ1N0eWxlJywge30pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/nqbrmlbDmja7lm77mj4/ov7DmloflrZfmoLflvI9cblx0XHRlbXB0eVZpZXdUaXRsZVN0eWxlOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHUuZ2MoJ2VtcHR5Vmlld1RpdGxlU3R5bGUnLCB7fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+epuuaVsOaNruWbvumHjeaWsOWKoOi9veaMiemSruagt+W8j1xuXHRcdGVtcHR5Vmlld1JlbG9hZFN0eWxlOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHUuZ2MoJ2VtcHR5Vmlld1JlbG9hZFN0eWxlJywge30pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/nqbrmlbDmja7lm77niYfmmK/lkKbpk7rmu6F6LXBhZ2luZ++8jOm7mOiupOS4uuWQpu+8jOWNs+Whq+WFhea7oXotcGFnaW5n5YaF5YiX6KGoKOa7muWKqOWMuuWfnynpg6jliIbjgILoi6Xorr7nva7kuLrlkKbvvIzliJnkuLrloavpk7rmu6HmlbTkuKp6LXBhZ2luZ1xuXHRcdGVtcHR5Vmlld0ZpeGVkOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnZW1wdHlWaWV3Rml4ZWQnLCBmYWxzZSlcblx0XHR9LFxuXHRcdC8v56m65pWw5o2u5Zu+54mH5piv5ZCm5Z6C55u05bGF5Lit77yM6buY6K6k5Li65piv77yM6Iul6K6+572u5Li65ZCm5Y2z5Li65LuO56m65pWw5o2u5a655Zmo6aG26YOo5byA5aeL5pi+56S644CCZW1wdHlWaWV3Rml4ZWTkuLpmYWxzZeaXtuacieaViFxuXHRcdGVtcHR5Vmlld0NlbnRlcjoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2VtcHR5Vmlld0NlbnRlcicsIHRydWUpXG5cdFx0fSxcblx0XHQvL+WKoOi9veS4reaXtuaYr+WQpuiHquWKqOmakOiXj+epuuaVsOaNruWbvu+8jOm7mOiupOS4uuaYr1xuXHRcdGF1dG9IaWRlRW1wdHlWaWV3V2hlbkxvYWRpbmc6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdhdXRvSGlkZUVtcHR5Vmlld1doZW5Mb2FkaW5nJywgdHJ1ZSlcblx0XHR9LFxuXHRcdC8v55So5oi35LiL5ouJ5YiX6KGo6Kem5Y+R5LiL5ouJ5Yi35paw5Yqg6L295Lit5pe25piv5ZCm6Ieq5Yqo6ZqQ6JeP56m65pWw5o2u5Zu+77yM6buY6K6k5Li65pivXG5cdFx0YXV0b0hpZGVFbXB0eVZpZXdXaGVuUHVsbDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2F1dG9IaWRlRW1wdHlWaWV3V2hlblB1bGwnLCB0cnVlKVxuXHRcdH0sXG5cdFx0Ly/nqbrmlbDmja52aWV355qEei1pbmRleO+8jOm7mOiupOS4ujlcblx0XHRlbXB0eVZpZXdaSW5kZXg6IHtcblx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2VtcHR5Vmlld1pJbmRleCcsIDkpXG5cdFx0fSxcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRmaW5hbEVtcHR5Vmlld0ltZygpIHtcblx0XHRcdHJldHVybiB0aGlzLmlzTG9hZEZhaWxlZCA/IHRoaXMuZW1wdHlWaWV3RXJyb3JJbWcgOiB0aGlzLmVtcHR5Vmlld0ltZztcblx0XHR9LFxuXHRcdGZpbmFsU2hvd0VtcHR5Vmlld1JlbG9hZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmlzTG9hZEZhaWxlZCA/IHRoaXMuc2hvd0VtcHR5Vmlld1JlbG9hZFdoZW5FcnJvciA6IHRoaXMuc2hvd0VtcHR5Vmlld1JlbG9hZDtcblx0XHR9LFxuXHRcdHNob3dFbXB0eSgpIHtcblx0XHRcdGlmICh0aGlzLnJlZnJlc2hlck9ubHkgfHwgdGhpcy5oaWRlRW1wdHlWaWV3IHx8IHRoaXMucmVhbFRvdGFsRGF0YS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0XHRcdGlmICh0aGlzLmF1dG9IaWRlRW1wdHlWaWV3V2hlbkxvYWRpbmcpIHtcblx0XHRcdFx0aWYgKHRoaXMuaXNBZGRlZERhdGEgJiYgIXRoaXMuZmlyc3RQYWdlTG9hZGVkICYmICF0aGlzLmxvYWRpbmcpIHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gIXRoaXMuYXV0b0hpZGVFbXB0eVZpZXdXaGVuUHVsbCAmJiAhdGhpcy5pc1VzZXJSZWxvYWQ7XG5cdFx0fSxcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdC8v54K55Ye75LqG56m65pWw5o2udmlld+mHjeaWsOWKoOi9veaMiemSrlxuXHRcdF9lbXB0eVZpZXdSZWxvYWQoKSB7XG5cdFx0XHRsZXQgY2FsbGJhY2tlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy4kZW1pdCgnZW1wdHlWaWV3UmVsb2FkJywgcmVsb2FkID0+IHtcblx0XHRcdFx0aWYgKHJlbG9hZCA9PT0gdW5kZWZpbmVkIHx8IHJlbG9hZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMuZnJvbUVtcHR5Vmlld1JlbG9hZCA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5yZWxvYWQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYWxsYmFja2VkID0gdHJ1ZTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRpZiAoIWNhbGxiYWNrZWQpIHtcblx0XHRcdFx0XHR0aGlzLmZyb21FbXB0eVZpZXdSZWxvYWQgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMucmVsb2FkKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvL+eCueWHu+S6huepuuaVsOaNrnZpZXdcblx0XHRfZW1wdHlWaWV3Q2xpY2soKSB7XG5cdFx0XHR0aGlzLiRlbWl0KCdlbXB0eVZpZXdDbGljaycpO1xuXHRcdH0sXG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///89\n");

/***/ }),
/* 90 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/modules/refresher.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! .././z-paging-utils */ 47));\nvar _zPagingConstant = _interopRequireDefault(__webpack_require__(/*! .././z-paging-constant */ 46));\nvar _zPagingEnum = _interopRequireDefault(__webpack_require__(/*! .././z-paging-enum */ 57));\n// [z-paging]下拉刷新view模块\nvar _default2 = {\n  props: {\n    //下拉刷新的主题样式，支持black，white，默认black\n    refresherThemeStyle: {\n      type: String,\n      default: _zPagingUtils.default.gc('refresherThemeStyle', '')\n    },\n    //自定义下拉刷新中左侧图标的样式\n    refresherImgStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('refresherImgStyle', {});\n      }\n    },\n    //自定义下拉刷新中右侧状态描述文字的样式\n    refresherTitleStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('refresherTitleStyle', {});\n      }\n    },\n    //自定义下拉刷新中右侧最后更新时间文字的样式(show-refresher-update-time为true时有效)\n    refresherUpdateTimeStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('refresherUpdateTimeStyle', {});\n      }\n    },\n    //在微信小程序和QQ小程序中，是否实时监听下拉刷新中进度，默认为否\n    watchRefresherTouchmove: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('watchRefresherTouchmove', false)\n    },\n    //底部加载更多的主题样式，支持black，white，默认black\n    loadingMoreThemeStyle: {\n      type: String,\n      default: _zPagingUtils.default.gc('loadingMoreThemeStyle', '')\n    },\n    //是否只使用下拉刷新，设置为true后将关闭mounted自动请求数据、关闭滚动到底部加载更多，强制隐藏空数据图。默认为否\n    refresherOnly: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('refresherOnly', false)\n    },\n    //自定义下拉刷新默认状态下回弹动画时间，单位为毫秒，默认为100毫秒，nvue无效\n    refresherDefaultDuration: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('refresherDefaultDuration', 100)\n    },\n    //自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒，默认为0\n    refresherCompleteDelay: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('refresherCompleteDelay', 0)\n    },\n    //自定义下拉刷新结束回弹动画时间，单位为毫秒，默认为300毫秒(refresherEndBounceEnabled为false时，refresherCompleteDuration为设定值的1/3)，nvue无效\n    refresherCompleteDuration: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('refresherCompleteDuration', 300)\n    },\n    //自定义下拉刷新结束状态下是否允许列表滚动，默认为否\n    refresherCompleteScrollable: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('refresherCompleteScrollable', false)\n    },\n    //是否使用自定义的下拉刷新，默认为是，即使用z-paging的下拉刷新。设置为false即代表使用uni scroll-view自带的下拉刷新，h5、App、微信小程序以外的平台不支持uni scroll-view自带的下拉刷新\n    useCustomRefresher: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('useCustomRefresher', true)\n    },\n    //自定义下拉刷新下拉帧率，默认为40，过高可能会出现抖动问题\n    refresherFps: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('refresherFps', 40)\n    },\n    //自定义下拉刷新允许触发的最大下拉角度，默认为40度，当下拉角度小于设定值时，自定义下拉刷新动画不会被触发\n    refresherMaxAngle: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('refresherMaxAngle', 40)\n    },\n    //自定义下拉刷新的角度由未达到最大角度变到达到最大角度时，是否继续下拉刷新手势，默认为否\n    refresherAngleEnableChangeContinued: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('refresherAngleEnableChangeContinued', false)\n    },\n    //自定义下拉刷新默认状态下的文字\n    refresherDefaultText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('refresherDefaultText', null)\n    },\n    //自定义下拉刷新松手立即刷新状态下的文字\n    refresherPullingText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('refresherPullingText', null)\n    },\n    //自定义下拉刷新刷新中状态下的文字\n    refresherRefreshingText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('refresherRefreshingText', null)\n    },\n    //自定义下拉刷新刷新结束状态下的文字\n    refresherCompleteText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('refresherCompleteText', null)\n    },\n    //自定义下拉刷新默认状态下的图片\n    refresherDefaultImg: {\n      type: String,\n      default: _zPagingUtils.default.gc('refresherDefaultImg', null)\n    },\n    //自定义下拉刷新松手立即刷新状态下的图片，默认与refresherDefaultImg一致\n    refresherPullingImg: {\n      type: String,\n      default: _zPagingUtils.default.gc('refresherPullingImg', null)\n    },\n    //自定义下拉刷新刷新中状态下的图片\n    refresherRefreshingImg: {\n      type: String,\n      default: _zPagingUtils.default.gc('refresherRefreshingImg', null)\n    },\n    //自定义下拉刷新刷新结束状态下的图片\n    refresherCompleteImg: {\n      type: String,\n      default: _zPagingUtils.default.gc('refresherCompleteImg', null)\n    },\n    //自定义下拉刷新刷新中状态下是否展示旋转动画\n    refresherRefreshingAnimated: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('refresherRefreshingAnimated', true)\n    },\n    //是否开启自定义下拉刷新刷新结束回弹效果，默认为是\n    refresherEndBounceEnabled: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('refresherEndBounceEnabled', true)\n    },\n    //是否开启自定义下拉刷新，默认为是\n    refresherEnabled: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('refresherEnabled', true)\n    },\n    //设置自定义下拉刷新阈值，默认为80rpx\n    refresherThreshold: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('refresherThreshold', '80rpx')\n    },\n    //设置系统下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式，默认为black\n    refresherDefaultStyle: {\n      type: String,\n      default: _zPagingUtils.default.gc('refresherDefaultStyle', 'black')\n    },\n    //设置自定义下拉刷新区域背景\n    refresherBackground: {\n      type: String,\n      default: _zPagingUtils.default.gc('refresherBackground', 'transparent')\n    },\n    //设置固定的自定义下拉刷新区域背景\n    refresherFixedBackground: {\n      type: String,\n      default: _zPagingUtils.default.gc('refresherFixedBackground', 'transparent')\n    },\n    //设置固定的自定义下拉刷新区域高度，默认为0\n    refresherFixedBacHeight: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('refresherFixedBacHeight', 0)\n    },\n    //设置自定义下拉刷新下拉超出阈值后继续下拉位移衰减的比例，范围0-1，值越大代表衰减越多。默认为0.65(nvue无效)\n    refresherOutRate: {\n      type: Number,\n      default: _zPagingUtils.default.gc('refresherOutRate', 0.65)\n    },\n    //设置自定义下拉刷新下拉时实际下拉位移与用户下拉距离的比值，默认为0.75，即代表若用户下拉10px，则实际位移为7.5px(nvue无效)\n    refresherPullRate: {\n      type: Number,\n      default: _zPagingUtils.default.gc('refresherPullRate', 0.75)\n    },\n    //是否显示最后更新时间，默认为否\n    showRefresherUpdateTime: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('showRefresherUpdateTime', false)\n    },\n    //如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的`refresher-update-time-key`设置不同的字符串\n    refresherUpdateTimeKey: {\n      type: String,\n      default: _zPagingUtils.default.gc('refresherUpdateTimeKey', 'default')\n    },\n    //下拉刷新时下拉到“松手立即刷新”状态时是否使手机短振动，默认为否（h5无效）\n    refresherVibrate: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('refresherVibrate', false)\n    },\n    //下拉刷新时是否禁止下拉刷新view跟随用户触摸竖直移动，默认为否。注意此属性只是禁止下拉刷新view移动，其他下拉刷新逻辑依然会正常触发\n    refresherNoTransform: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('refresherNoTransform', false)\n    }\n  },\n  data: function data() {\n    return {\n      R: _zPagingEnum.default.Refresher,\n      //下拉刷新状态\n      refresherStatus: _zPagingEnum.default.Refresher.Default,\n      refresherTouchstartY: 0,\n      lastRefresherTouchmove: null,\n      refresherReachMaxAngle: true,\n      refresherTransform: 'translateY(0px)',\n      refresherTransition: '',\n      finalRefresherDefaultStyle: 'black',\n      refresherRevealStackCount: 0,\n      refresherCompleteTimeout: null,\n      refresherCompleteSubTimeout: null,\n      refresherEndTimeout: null,\n      isTouchmovingTimeout: null,\n      refresherTriggered: false,\n      isTouchmoving: false,\n      isTouchEnded: false,\n      isUserPullDown: false,\n      privateRefresherEnabled: -1,\n      privateShowRefresherWhenReload: false,\n      customRefresherHeight: -1,\n      showCustomRefresher: false,\n      doRefreshAnimateAfter: false,\n      isRefresherInComplete: false,\n      pullDownTimeStamp: 0,\n      moveDis: 0,\n      oldMoveDis: 0,\n      currentDis: 0,\n      oldCurrentMoveDis: 0,\n      oldRefresherTouchmoveY: 0,\n      oldTouchDirection: '',\n      oldEmitedTouchDirection: '',\n      oldPullingDistance: -1\n    };\n  },\n  watch: {\n    refresherDefaultStyle: {\n      handler: function handler(newVal) {\n        if (newVal.length) {\n          this.finalRefresherDefaultStyle = newVal;\n        }\n      },\n      immediate: true\n    },\n    refresherStatus: function refresherStatus(newVal) {\n      newVal === _zPagingEnum.default.Refresher.Loading && this._cleanRefresherEndTimeout();\n      this.refresherVibrate && newVal === _zPagingEnum.default.Refresher.ReleaseToRefresh && this._doVibrateShort();\n      this.$emit('refresherStatusChange', newVal);\n      this.$emit('update:refresherStatus', newVal);\n    },\n    refresherEnabled: function refresherEnabled(newVal) {\n      !newVal && this.endRefresh();\n    }\n  },\n  computed: {\n    pullDownDisTimeStamp: function pullDownDisTimeStamp() {\n      return 1000 / this.refresherFps;\n    },\n    finalRefresherEnabled: function finalRefresherEnabled() {\n      if (this.useChatRecordMode) return false;\n      if (this.privateRefresherEnabled === -1) return this.refresherEnabled;\n      return this.privateRefresherEnabled === 1;\n    },\n    finalRefresherThreshold: function finalRefresherThreshold() {\n      var refresherThreshold = this.refresherThreshold;\n      var idDefault = false;\n      if (refresherThreshold === '80rpx') {\n        idDefault = true;\n        if (this.showRefresherUpdateTime) {\n          refresherThreshold = '120rpx';\n        }\n      }\n      if (idDefault && this.customRefresherHeight > 0) return this.customRefresherHeight;\n      return _zPagingUtils.default.convertToPx(refresherThreshold);\n    },\n    finalRefresherFixedBacHeight: function finalRefresherFixedBacHeight() {\n      return _zPagingUtils.default.convertToPx(this.refresherFixedBacHeight);\n    },\n    finalRefresherThemeStyle: function finalRefresherThemeStyle() {\n      return this.refresherThemeStyle.length ? this.refresherThemeStyle : this.defaultThemeStyle;\n    },\n    finalRefresherOutRate: function finalRefresherOutRate() {\n      var rate = this.refresherOutRate;\n      rate = Math.max(0, rate);\n      rate = Math.min(1, rate);\n      return rate;\n    },\n    finalRefresherPullRate: function finalRefresherPullRate() {\n      var rate = this.refresherPullRate;\n      rate = Math.max(0, rate);\n      return rate;\n    },\n    finalRefresherTransform: function finalRefresherTransform() {\n      if (this.refresherNoTransform || this.refresherTransform === 'translateY(0px)') return 'none';\n      return this.refresherTransform;\n    },\n    finalShowRefresherWhenReload: function finalShowRefresherWhenReload() {\n      return this.showRefresherWhenReload || this.privateShowRefresherWhenReload;\n    },\n    finalRefresherTriggered: function finalRefresherTriggered() {\n      if (!(this.finalRefresherEnabled && !this.useCustomRefresher)) return false;\n      return this.refresherTriggered;\n    },\n    showRefresher: function showRefresher() {\n      var showRefresher = this.finalRefresherEnabled && this.useCustomRefresher;\n      return showRefresher;\n    },\n    hasTouchmove: function hasTouchmove() {\n      return true;\n      return this.watchRefresherTouchmove;\n    }\n  },\n  methods: {\n    //终止下拉刷新状态\n    endRefresh: function endRefresh() {\n      this.totalData = this.realTotalData;\n      this._refresherEnd();\n      this._endSystemLoadingAndRefresh();\n      this._handleScrollViewDisableBounce({\n        bounce: true\n      });\n    },\n    handleRefresherStatusChanged: function handleRefresherStatusChanged(func) {\n      this.refresherStatusChangedFunc = func;\n    },\n    //自定义下拉刷新被触发\n    _onRefresh: function _onRefresh() {\n      var fromScrollView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var isUserPullDown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      if (fromScrollView && !(this.finalRefresherEnabled && !this.useCustomRefresher)) return;\n      this.$emit('onRefresh');\n      this.$emit('Refresh');\n      if (this.loading) {\n        _zPagingUtils.default.delay(this._nRefresherEnd, 500);\n        return;\n      }\n      if (this.loading || this.isRefresherInComplete) return;\n      this.loadingType = _zPagingEnum.default.LoadingType.Refresher;\n      if (this.nShowRefresherReveal) return;\n      this.isUserPullDown = isUserPullDown;\n      this.isUserReload = !isUserPullDown;\n      this._startLoading(true);\n      this.refresherTriggered = true;\n      if (this.reloadWhenRefresh && isUserPullDown) {\n        this.useChatRecordMode ? this._onLoadingMore('click') : this._reload(false, false, isUserPullDown);\n      }\n    },\n    //自定义下拉刷新被复位\n    _onRestore: function _onRestore() {\n      this.refresherTriggered = 'restore';\n      this.$emit('onRestore');\n      this.$emit('Restore');\n    },\n    //拖拽开始\n    _refresherTouchstart: function _refresherTouchstart(e) {\n      this._handleListTouchstart();\n      if (this._touchDisabled()) return;\n      this._handleRefresherTouchstart(_zPagingUtils.default.getTouch(e));\n    },\n    //进一步处理拖拽开始结果\n    _handleRefresherTouchstart: function _handleRefresherTouchstart(touch) {\n      if (!this.loading && this.isTouchEnded) {\n        this.isTouchmoving = false;\n      }\n      this.loadingType = _zPagingEnum.default.LoadingType.Refresher;\n      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);\n      this.isTouchEnded = false;\n      this.refresherTransition = '';\n      this.refresherTouchstartY = touch.touchY;\n      this.$emit('refresherTouchstart', this.refresherTouchstartY);\n      this.lastRefresherTouchmove = touch;\n      this._cleanRefresherCompleteTimeout();\n      this._cleanRefresherEndTimeout();\n    },\n    //拖拽中\n    _refresherTouchmove: function _refresherTouchmove(e) {\n      var currentTimeStamp = _zPagingUtils.default.getTime();\n      var touch = null;\n      var refresherTouchmoveY = 0;\n      if (this.watchTouchDirectionChange) {\n        touch = _zPagingUtils.default.getTouch(e);\n        refresherTouchmoveY = touch.touchY;\n        var direction = refresherTouchmoveY > this.oldRefresherTouchmoveY ? 'top' : 'bottom';\n        if (direction === this.oldTouchDirection && direction !== this.oldEmitedTouchDirection) {\n          this._handleTouchDirectionChange({\n            direction: direction\n          });\n          this.oldEmitedTouchDirection = direction;\n        }\n        this.oldTouchDirection = direction;\n        this.oldRefresherTouchmoveY = refresherTouchmoveY;\n      }\n      if (this.pullDownTimeStamp && currentTimeStamp - this.pullDownTimeStamp <= this.pullDownDisTimeStamp) return;\n      if (this._touchDisabled()) return;\n      this.pullDownTimeStamp = Number(currentTimeStamp);\n      touch = _zPagingUtils.default.getTouch(e);\n      refresherTouchmoveY = touch.touchY;\n      var moveDis = refresherTouchmoveY - this.refresherTouchstartY;\n      if (moveDis < 0) return;\n      if (this.refresherMaxAngle >= 0 && this.refresherMaxAngle <= 90 && this.lastRefresherTouchmove && this.lastRefresherTouchmove.touchY <= refresherTouchmoveY) {\n        if (!moveDis && !this.refresherAngleEnableChangeContinued && this.moveDis < 1 && !this.refresherReachMaxAngle) return;\n        var x = Math.abs(touch.touchX - this.lastRefresherTouchmove.touchX);\n        var y = Math.abs(refresherTouchmoveY - this.lastRefresherTouchmove.touchY);\n        var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));\n        if ((x || y) && x > 1) {\n          var angle = Math.asin(y / z) / Math.PI * 180;\n          if (angle < this.refresherMaxAngle) {\n            this.lastRefresherTouchmove = touch;\n            this.refresherReachMaxAngle = false;\n            return;\n          }\n        }\n      }\n      moveDis = this._getFinalRefresherMoveDis(moveDis);\n      this._handleRefresherTouchmove(moveDis, touch);\n      if (!this.disabledBounce) {\n        if (this.isIos) {\n          this._handleScrollViewDisableBounce({\n            bounce: false\n          });\n        }\n        this.disabledBounce = true;\n      }\n      this._emitTouchmove({\n        pullingDistance: moveDis,\n        dy: this.moveDis - this.oldMoveDis\n      });\n    },\n    //进一步处理拖拽中结果\n    _handleRefresherTouchmove: function _handleRefresherTouchmove(moveDis, touch) {\n      this.refresherReachMaxAngle = true;\n      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);\n      this.isTouchmoving = true;\n      this.isTouchEnded = false;\n      this.refresherStatus = moveDis >= this.finalRefresherThreshold ? _zPagingEnum.default.Refresher.ReleaseToRefresh : this.refresherStatus = _zPagingEnum.default.Refresher.Default;\n\n      // this.scrollEnable = false;\n      this.refresherTransform = \"translateY(\".concat(moveDis, \"px)\");\n      this.lastRefresherTouchmove = touch;\n      this.moveDis = moveDis;\n    },\n    //拖拽结束\n    _refresherTouchend: function _refresherTouchend(e) {\n      if (this._touchDisabled() || !this.isTouchmoving) return;\n      var touch = _zPagingUtils.default.getTouch(e);\n      var refresherTouchendY = touch.touchY;\n      var moveDis = refresherTouchendY - this.refresherTouchstartY;\n      moveDis = this._getFinalRefresherMoveDis(moveDis);\n      this._handleRefresherTouchend(moveDis);\n      this._handleScrollViewDisableBounce({\n        bounce: true\n      });\n      this.disabledBounce = false;\n    },\n    //进一步处理拖拽结束结果\n    _handleRefresherTouchend: function _handleRefresherTouchend(moveDis) {\n      var _this = this;\n      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);\n      this.refresherReachMaxAngle = true;\n      this.isTouchEnded = true;\n      var refresherThreshold = this.finalRefresherThreshold;\n      if (moveDis >= refresherThreshold && this.refresherStatus === _zPagingEnum.default.Refresher.ReleaseToRefresh) {\n        this.refresherTransform = \"translateY(\".concat(refresherThreshold, \"px)\");\n        this.refresherTransition = 'transform .1s linear';\n        _zPagingUtils.default.delay(function () {\n          _this._emitTouchmove({\n            pullingDistance: refresherThreshold,\n            dy: _this.moveDis - refresherThreshold\n          });\n        }, 0.1);\n        this.moveDis = refresherThreshold;\n        this.refresherStatus = _zPagingEnum.default.Refresher.Loading;\n        this._doRefresherLoad();\n      } else {\n        this._refresherEnd();\n        this.isTouchmovingTimeout = _zPagingUtils.default.delay(function () {\n          _this.isTouchmoving = false;\n        }, this.refresherDefaultDuration);\n      }\n      this.scrollEnable = true;\n      this.$emit('refresherTouchend', moveDis);\n    },\n    //处理列表触摸开始事件\n    _handleListTouchstart: function _handleListTouchstart() {\n      if (this.useChatRecordMode && this.autoHideKeyboardWhenChat) {\n        uni.hideKeyboard();\n        this.$emit('hidedKeyboard');\n      }\n    },\n    //处理scroll-view bounce是否生效\n    _handleScrollViewDisableBounce: function _handleScrollViewDisableBounce(_ref) {\n      var bounce = _ref.bounce;\n      if (!this.usePageScroll && !this.scrollToTopBounceEnabled) {\n        this.scrollEnable = bounce;\n      }\n    },\n    //wxs正在下拉状态改变处理\n    _handleWxsPullingDownStatusChange: function _handleWxsPullingDownStatusChange(onPullingDown) {\n      this.wxsOnPullingDown = onPullingDown;\n      if (onPullingDown && !this.useChatRecordMode) {\n        this.renderPropScrollTop = 0;\n      }\n    },\n    //wxs正在下拉处理\n    _handleWxsPullingDown: function _handleWxsPullingDown(_ref2) {\n      var moveDis = _ref2.moveDis,\n        diffDis = _ref2.diffDis;\n      this._emitTouchmove({\n        pullingDistance: moveDis,\n        dy: diffDis\n      });\n    },\n    //wxs触摸方向改变\n    _handleTouchDirectionChange: function _handleTouchDirectionChange(_ref3) {\n      var direction = _ref3.direction;\n      this.$emit('touchDirectionChange', direction);\n    },\n    //wxs通知更新其props\n    _handlePropUpdate: function _handlePropUpdate() {\n      this.wxsPropType = _zPagingUtils.default.getTime().toString();\n    },\n    //下拉刷新结束\n    _refresherEnd: function _refresherEnd() {\n      var _this2 = this;\n      var shouldEndLoadingDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      var fromAddData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var isUserPullDown = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var setLoading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n      if (this.loadingType === _zPagingEnum.default.LoadingType.Refresher) {\n        var refresherCompleteDelay = fromAddData && (isUserPullDown || this.showRefresherWhenReload) ? this.refresherCompleteDelay : 0;\n        var refresherStatus = refresherCompleteDelay > 0 ? _zPagingEnum.default.Refresher.Complete : _zPagingEnum.default.Refresher.Default;\n        if (this.finalShowRefresherWhenReload) {\n          var stackCount = this.refresherRevealStackCount;\n          this.refresherRevealStackCount--;\n          if (stackCount > 1) return;\n        }\n        this._cleanRefresherEndTimeout();\n        this.refresherEndTimeout = _zPagingUtils.default.delay(function () {\n          _this2.refresherStatus = refresherStatus;\n        }, this.refresherStatus !== _zPagingEnum.default.Refresher.Default && refresherStatus === _zPagingEnum.default.Refresher.Default ? this.refresherCompleteDuration : 0);\n        this._cleanRefresherCompleteTimeout();\n        this.refresherCompleteTimeout = _zPagingUtils.default.delay(function () {\n          var animateDuration = 1;\n          var animateType = _this2.refresherEndBounceEnabled && fromAddData ? 'cubic-bezier(0.19,1.64,0.42,0.72)' : 'linear';\n          if (fromAddData) {\n            animateDuration = _this2.refresherEndBounceEnabled ? _this2.refresherCompleteDuration / 1000 : _this2.refresherCompleteDuration / 3000;\n          }\n          _this2.refresherTransition = \"transform \".concat(fromAddData ? animateDuration : _this2.refresherDefaultDuration / 1000, \"s \").concat(animateType);\n          _this2.refresherTransform = 'translateY(0px)';\n          _this2.currentDis = 0;\n          _this2._nRefresherEnd();\n          _this2.moveDis = 0;\n          _this2._emitTouchmove({\n            pullingDistance: 0,\n            dy: _this2.moveDis\n          });\n        }, refresherCompleteDelay);\n      }\n      if (setLoading) {\n        _zPagingUtils.default.delay(function () {\n          _this2.loading = false;\n        }, shouldEndLoadingDelay ? _zPagingConstant.default.delayTime : 0);\n        isUserPullDown && this._onRestore();\n      }\n    },\n    //模拟用户手动触发下拉刷新\n    _doRefresherRefreshAnimate: function _doRefresherRefreshAnimate() {\n      this._cleanRefresherCompleteTimeout();\n      this.refresherRevealStackCount++;\n      this.refresherTransform = \"translateY(\".concat(this.finalRefresherThreshold, \"px)\");\n      this.moveDis = this.finalRefresherThreshold;\n      this.refresherStatus = _zPagingEnum.default.Refresher.Loading;\n      this.isTouchmoving = true;\n      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);\n      this._doRefresherLoad(false);\n    },\n    //触发下拉刷新\n    _doRefresherLoad: function _doRefresherLoad() {\n      var isUserPullDown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      this._onRefresh(false, isUserPullDown);\n      this.loading = true;\n    },\n    //获取处理后的moveDis\n    _getFinalRefresherMoveDis: function _getFinalRefresherMoveDis(moveDis) {\n      var diffDis = moveDis - this.oldCurrentMoveDis;\n      this.oldCurrentMoveDis = moveDis;\n      if (diffDis > 0) {\n        diffDis = diffDis * this.finalRefresherPullRate;\n        if (this.currentDis > this.finalRefresherThreshold) {\n          diffDis = diffDis * (1 - this.finalRefresherOutRate);\n        }\n      }\n      diffDis = diffDis > 100 ? diffDis / 100 : diffDis;\n      this.currentDis += diffDis;\n      this.currentDis = Math.max(0, this.currentDis);\n      return this.currentDis;\n    },\n    //判断touch手势是否要触发\n    _touchDisabled: function _touchDisabled() {\n      var checkOldScrollTop = this.oldScrollTop > 5;\n      return this.loading || this.isRefresherInComplete || this.useChatRecordMode || !this.refresherEnabled || !this.useCustomRefresher || this.usePageScroll && this.useCustomRefresher && this.pageScrollTop > 10 || !(this.usePageScroll && this.useCustomRefresher) && checkOldScrollTop;\n    },\n    //更新自定义下拉刷新view高度\n    _updateCustomRefresherHeight: function _updateCustomRefresherHeight() {\n      var _this3 = this;\n      this._getNodeClientRect('.zp-custom-refresher-slot-view').then(function (res) {\n        _this3.customRefresherHeight = res ? res[0].height : 0;\n        _this3.showCustomRefresher = _this3.customRefresherHeight > 0;\n        if (_this3.doRefreshAnimateAfter) {\n          _this3.doRefreshAnimateAfter = false;\n          _this3._doRefresherRefreshAnimate();\n        }\n      });\n    },\n    //发射pullingDown事件\n    _emitTouchmove: function _emitTouchmove(e) {\n      e.rate = e.viewHeight > 0 ? e.pullingDistance / e.viewHeight : 0;\n      this.hasTouchmove && this.oldPullingDistance !== e.pullingDistance && this.$emit('refresherTouchmove', e);\n      this.oldPullingDistance = e.pullingDistance;\n    },\n    //清除refresherCompleteTimeout\n    _cleanRefresherCompleteTimeout: function _cleanRefresherCompleteTimeout() {\n      this.refresherCompleteTimeout = this._cleanTimeout(this.refresherCompleteTimeout);\n      this._nRefresherEnd(false);\n    },\n    //清除refresherEndTimeout\n    _cleanRefresherEndTimeout: function _cleanRefresherEndTimeout() {\n      this.refresherEndTimeout = this._cleanTimeout(this.refresherEndTimeout);\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy9tb2R1bGVzL3JlZnJlc2hlci5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInJlZnJlc2hlclRoZW1lU3R5bGUiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInUiLCJnYyIsInJlZnJlc2hlckltZ1N0eWxlIiwiT2JqZWN0IiwicmVmcmVzaGVyVGl0bGVTdHlsZSIsInJlZnJlc2hlclVwZGF0ZVRpbWVTdHlsZSIsIndhdGNoUmVmcmVzaGVyVG91Y2htb3ZlIiwiQm9vbGVhbiIsImxvYWRpbmdNb3JlVGhlbWVTdHlsZSIsInJlZnJlc2hlck9ubHkiLCJyZWZyZXNoZXJEZWZhdWx0RHVyYXRpb24iLCJOdW1iZXIiLCJyZWZyZXNoZXJDb21wbGV0ZURlbGF5IiwicmVmcmVzaGVyQ29tcGxldGVEdXJhdGlvbiIsInJlZnJlc2hlckNvbXBsZXRlU2Nyb2xsYWJsZSIsInVzZUN1c3RvbVJlZnJlc2hlciIsInJlZnJlc2hlckZwcyIsInJlZnJlc2hlck1heEFuZ2xlIiwicmVmcmVzaGVyQW5nbGVFbmFibGVDaGFuZ2VDb250aW51ZWQiLCJyZWZyZXNoZXJEZWZhdWx0VGV4dCIsInJlZnJlc2hlclB1bGxpbmdUZXh0IiwicmVmcmVzaGVyUmVmcmVzaGluZ1RleHQiLCJyZWZyZXNoZXJDb21wbGV0ZVRleHQiLCJyZWZyZXNoZXJEZWZhdWx0SW1nIiwicmVmcmVzaGVyUHVsbGluZ0ltZyIsInJlZnJlc2hlclJlZnJlc2hpbmdJbWciLCJyZWZyZXNoZXJDb21wbGV0ZUltZyIsInJlZnJlc2hlclJlZnJlc2hpbmdBbmltYXRlZCIsInJlZnJlc2hlckVuZEJvdW5jZUVuYWJsZWQiLCJyZWZyZXNoZXJFbmFibGVkIiwicmVmcmVzaGVyVGhyZXNob2xkIiwicmVmcmVzaGVyRGVmYXVsdFN0eWxlIiwicmVmcmVzaGVyQmFja2dyb3VuZCIsInJlZnJlc2hlckZpeGVkQmFja2dyb3VuZCIsInJlZnJlc2hlckZpeGVkQmFjSGVpZ2h0IiwicmVmcmVzaGVyT3V0UmF0ZSIsInJlZnJlc2hlclB1bGxSYXRlIiwic2hvd1JlZnJlc2hlclVwZGF0ZVRpbWUiLCJyZWZyZXNoZXJVcGRhdGVUaW1lS2V5IiwicmVmcmVzaGVyVmlicmF0ZSIsInJlZnJlc2hlck5vVHJhbnNmb3JtIiwiZGF0YSIsIlIiLCJFbnVtIiwiUmVmcmVzaGVyIiwicmVmcmVzaGVyU3RhdHVzIiwiRGVmYXVsdCIsInJlZnJlc2hlclRvdWNoc3RhcnRZIiwibGFzdFJlZnJlc2hlclRvdWNobW92ZSIsInJlZnJlc2hlclJlYWNoTWF4QW5nbGUiLCJyZWZyZXNoZXJUcmFuc2Zvcm0iLCJyZWZyZXNoZXJUcmFuc2l0aW9uIiwiZmluYWxSZWZyZXNoZXJEZWZhdWx0U3R5bGUiLCJyZWZyZXNoZXJSZXZlYWxTdGFja0NvdW50IiwicmVmcmVzaGVyQ29tcGxldGVUaW1lb3V0IiwicmVmcmVzaGVyQ29tcGxldGVTdWJUaW1lb3V0IiwicmVmcmVzaGVyRW5kVGltZW91dCIsImlzVG91Y2htb3ZpbmdUaW1lb3V0IiwicmVmcmVzaGVyVHJpZ2dlcmVkIiwiaXNUb3VjaG1vdmluZyIsImlzVG91Y2hFbmRlZCIsImlzVXNlclB1bGxEb3duIiwicHJpdmF0ZVJlZnJlc2hlckVuYWJsZWQiLCJwcml2YXRlU2hvd1JlZnJlc2hlcldoZW5SZWxvYWQiLCJjdXN0b21SZWZyZXNoZXJIZWlnaHQiLCJzaG93Q3VzdG9tUmVmcmVzaGVyIiwiZG9SZWZyZXNoQW5pbWF0ZUFmdGVyIiwiaXNSZWZyZXNoZXJJbkNvbXBsZXRlIiwicHVsbERvd25UaW1lU3RhbXAiLCJtb3ZlRGlzIiwib2xkTW92ZURpcyIsImN1cnJlbnREaXMiLCJvbGRDdXJyZW50TW92ZURpcyIsIm9sZFJlZnJlc2hlclRvdWNobW92ZVkiLCJvbGRUb3VjaERpcmVjdGlvbiIsIm9sZEVtaXRlZFRvdWNoRGlyZWN0aW9uIiwib2xkUHVsbGluZ0Rpc3RhbmNlIiwid2F0Y2giLCJoYW5kbGVyIiwibmV3VmFsIiwibGVuZ3RoIiwiaW1tZWRpYXRlIiwiTG9hZGluZyIsIl9jbGVhblJlZnJlc2hlckVuZFRpbWVvdXQiLCJSZWxlYXNlVG9SZWZyZXNoIiwiX2RvVmlicmF0ZVNob3J0IiwiJGVtaXQiLCJlbmRSZWZyZXNoIiwiY29tcHV0ZWQiLCJwdWxsRG93bkRpc1RpbWVTdGFtcCIsImZpbmFsUmVmcmVzaGVyRW5hYmxlZCIsInVzZUNoYXRSZWNvcmRNb2RlIiwiZmluYWxSZWZyZXNoZXJUaHJlc2hvbGQiLCJpZERlZmF1bHQiLCJjb252ZXJ0VG9QeCIsImZpbmFsUmVmcmVzaGVyRml4ZWRCYWNIZWlnaHQiLCJmaW5hbFJlZnJlc2hlclRoZW1lU3R5bGUiLCJkZWZhdWx0VGhlbWVTdHlsZSIsImZpbmFsUmVmcmVzaGVyT3V0UmF0ZSIsInJhdGUiLCJNYXRoIiwibWF4IiwibWluIiwiZmluYWxSZWZyZXNoZXJQdWxsUmF0ZSIsImZpbmFsUmVmcmVzaGVyVHJhbnNmb3JtIiwiZmluYWxTaG93UmVmcmVzaGVyV2hlblJlbG9hZCIsInNob3dSZWZyZXNoZXJXaGVuUmVsb2FkIiwiZmluYWxSZWZyZXNoZXJUcmlnZ2VyZWQiLCJzaG93UmVmcmVzaGVyIiwiaGFzVG91Y2htb3ZlIiwibWV0aG9kcyIsInRvdGFsRGF0YSIsInJlYWxUb3RhbERhdGEiLCJfcmVmcmVzaGVyRW5kIiwiX2VuZFN5c3RlbUxvYWRpbmdBbmRSZWZyZXNoIiwiX2hhbmRsZVNjcm9sbFZpZXdEaXNhYmxlQm91bmNlIiwiYm91bmNlIiwiaGFuZGxlUmVmcmVzaGVyU3RhdHVzQ2hhbmdlZCIsImZ1bmMiLCJyZWZyZXNoZXJTdGF0dXNDaGFuZ2VkRnVuYyIsIl9vblJlZnJlc2giLCJmcm9tU2Nyb2xsVmlldyIsImxvYWRpbmciLCJkZWxheSIsIl9uUmVmcmVzaGVyRW5kIiwibG9hZGluZ1R5cGUiLCJMb2FkaW5nVHlwZSIsIm5TaG93UmVmcmVzaGVyUmV2ZWFsIiwiaXNVc2VyUmVsb2FkIiwiX3N0YXJ0TG9hZGluZyIsInJlbG9hZFdoZW5SZWZyZXNoIiwiX29uTG9hZGluZ01vcmUiLCJfcmVsb2FkIiwiX29uUmVzdG9yZSIsIl9yZWZyZXNoZXJUb3VjaHN0YXJ0IiwiZSIsIl9oYW5kbGVMaXN0VG91Y2hzdGFydCIsIl90b3VjaERpc2FibGVkIiwiX2hhbmRsZVJlZnJlc2hlclRvdWNoc3RhcnQiLCJnZXRUb3VjaCIsInRvdWNoIiwiY2xlYXJUaW1lb3V0IiwidG91Y2hZIiwiX2NsZWFuUmVmcmVzaGVyQ29tcGxldGVUaW1lb3V0IiwiX3JlZnJlc2hlclRvdWNobW92ZSIsImN1cnJlbnRUaW1lU3RhbXAiLCJnZXRUaW1lIiwicmVmcmVzaGVyVG91Y2htb3ZlWSIsIndhdGNoVG91Y2hEaXJlY3Rpb25DaGFuZ2UiLCJkaXJlY3Rpb24iLCJfaGFuZGxlVG91Y2hEaXJlY3Rpb25DaGFuZ2UiLCJ4IiwiYWJzIiwidG91Y2hYIiwieSIsInoiLCJzcXJ0IiwicG93IiwiYW5nbGUiLCJhc2luIiwiUEkiLCJfZ2V0RmluYWxSZWZyZXNoZXJNb3ZlRGlzIiwiX2hhbmRsZVJlZnJlc2hlclRvdWNobW92ZSIsImRpc2FibGVkQm91bmNlIiwiaXNJb3MiLCJfZW1pdFRvdWNobW92ZSIsInB1bGxpbmdEaXN0YW5jZSIsImR5IiwiX3JlZnJlc2hlclRvdWNoZW5kIiwicmVmcmVzaGVyVG91Y2hlbmRZIiwiX2hhbmRsZVJlZnJlc2hlclRvdWNoZW5kIiwiX2RvUmVmcmVzaGVyTG9hZCIsInNjcm9sbEVuYWJsZSIsImF1dG9IaWRlS2V5Ym9hcmRXaGVuQ2hhdCIsInVuaSIsImhpZGVLZXlib2FyZCIsInVzZVBhZ2VTY3JvbGwiLCJzY3JvbGxUb1RvcEJvdW5jZUVuYWJsZWQiLCJfaGFuZGxlV3hzUHVsbGluZ0Rvd25TdGF0dXNDaGFuZ2UiLCJvblB1bGxpbmdEb3duIiwid3hzT25QdWxsaW5nRG93biIsInJlbmRlclByb3BTY3JvbGxUb3AiLCJfaGFuZGxlV3hzUHVsbGluZ0Rvd24iLCJkaWZmRGlzIiwiX2hhbmRsZVByb3BVcGRhdGUiLCJ3eHNQcm9wVHlwZSIsInRvU3RyaW5nIiwic2hvdWxkRW5kTG9hZGluZ0RlbGF5IiwiZnJvbUFkZERhdGEiLCJzZXRMb2FkaW5nIiwiQ29tcGxldGUiLCJzdGFja0NvdW50IiwiYW5pbWF0ZUR1cmF0aW9uIiwiYW5pbWF0ZVR5cGUiLCJjIiwiZGVsYXlUaW1lIiwiX2RvUmVmcmVzaGVyUmVmcmVzaEFuaW1hdGUiLCJjaGVja09sZFNjcm9sbFRvcCIsIm9sZFNjcm9sbFRvcCIsInBhZ2VTY3JvbGxUb3AiLCJfdXBkYXRlQ3VzdG9tUmVmcmVzaGVySGVpZ2h0IiwiX2dldE5vZGVDbGllbnRSZWN0IiwidGhlbiIsInJlcyIsImhlaWdodCIsInZpZXdIZWlnaHQiLCJfY2xlYW5UaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQSxnQkFLZTtFQUNkQSxLQUFLLEVBQUU7SUFDTjtJQUNBQyxtQkFBbUIsRUFBRTtNQUNwQkMsSUFBSSxFQUFFQyxNQUFNO01BQ1pDLE9BQU8sRUFBRUMscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7SUFDeEMsQ0FBQztJQUNEO0lBQ0FDLGlCQUFpQixFQUFFO01BQ2xCTCxJQUFJLEVBQUVNLE1BQU07TUFDWkosT0FBTyxFQUFFLG9CQUFXO1FBQ25CLE9BQU9DLHFCQUFDLENBQUNDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUNyQztJQUNELENBQUM7SUFDRDtJQUNBRyxtQkFBbUIsRUFBRTtNQUNwQlAsSUFBSSxFQUFFTSxNQUFNO01BQ1pKLE9BQU8sRUFBRSxvQkFBVztRQUNuQixPQUFPQyxxQkFBQyxDQUFDQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDdkM7SUFDRCxDQUFDO0lBQ0Q7SUFDQUksd0JBQXdCLEVBQUU7TUFDekJSLElBQUksRUFBRU0sTUFBTTtNQUNaSixPQUFPLEVBQUUsb0JBQVc7UUFDbkIsT0FBT0MscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLDBCQUEwQixF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LEdBQUcsQ0FBQyxHQUFHdEUsQ0FBQyxDQUFDK0IsZUFBZSxHQUFHL0IsQ0FBQyxDQUFDc0UsVUFBVSxHQUFHLENBQUM7TUFDaEUsSUFBSSxDQUFDaEcsWUFBWSxJQUFJLElBQUksQ0FBQ2pDLGtCQUFrQixLQUFLMkQsQ0FBQyxDQUFDK0IsZUFBZSxJQUFJLElBQUksQ0FBQ2hGLEtBQUssQ0FBQyxvQkFBb0IsRUFBRWlELENBQUMsQ0FBQztNQUN6RyxJQUFJLENBQUMzRCxrQkFBa0IsR0FBRzJELENBQUMsQ0FBQytCLGVBQWU7SUFDNUMsQ0FBQztJQUNEO0lBQ0F2Qiw4QkFBOEIsNENBQUc7TUFDaEMsSUFBSSxDQUFDekYsd0JBQXdCLEdBQUcsSUFBSSxDQUFDd0osYUFBYSxDQUFDLElBQUksQ0FBQ3hKLHdCQUF3QixDQUFDO01BRWpGLElBQUksQ0FBQ3NFLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFFM0IsQ0FBQztJQUNEO0lBQ0F6Qyx5QkFBeUIsdUNBQUc7TUFDM0IsSUFBSSxDQUFDM0IsbUJBQW1CLEdBQUcsSUFBSSxDQUFDc0osYUFBYSxDQUFDLElBQUksQ0FBQ3RKLG1CQUFtQixDQUFDO0lBQ3hFO0VBQ0Q7QUFDRCxDQUFDO0FBQUEiLCJmaWxlIjoiOTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbei1wYWdpbmdd5LiL5ouJ5Yi35pawdmlld+aooeWdl1xuaW1wb3J0IHUgZnJvbSAnLi4vLi96LXBhZ2luZy11dGlscydcbmltcG9ydCBjIGZyb20gJy4uLy4vei1wYWdpbmctY29uc3RhbnQnXG5pbXBvcnQgRW51bSBmcm9tICcuLi8uL3otcGFnaW5nLWVudW0nXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IHtcblx0XHQvL+S4i+aLieWIt+aWsOeahOS4u+mimOagt+W8j++8jOaUr+aMgWJsYWNr77yMd2hpdGXvvIzpu5jorqRibGFja1xuXHRcdHJlZnJlc2hlclRoZW1lU3R5bGU6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3JlZnJlc2hlclRoZW1lU3R5bGUnLCAnJylcblx0XHR9LFxuXHRcdC8v6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw5Lit5bem5L6n5Zu+5qCH55qE5qC35byPXG5cdFx0cmVmcmVzaGVySW1nU3R5bGU6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdS5nYygncmVmcmVzaGVySW1nU3R5bGUnLCB7fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+iHquWumuS5ieS4i+aLieWIt+aWsOS4reWPs+S+p+eKtuaAgeaPj+i/sOaWh+Wtl+eahOagt+W8j1xuXHRcdHJlZnJlc2hlclRpdGxlU3R5bGU6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdS5nYygncmVmcmVzaGVyVGl0bGVTdHlsZScsIHt9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8v6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw5Lit5Y+z5L6n5pyA5ZCO5pu05paw5pe26Ze05paH5a2X55qE5qC35byPKHNob3ctcmVmcmVzaGVyLXVwZGF0ZS10aW1l5Li6dHJ1ZeaXtuacieaViClcblx0XHRyZWZyZXNoZXJVcGRhdGVUaW1lU3R5bGU6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdS5nYygncmVmcmVzaGVyVXBkYXRlVGltZVN0eWxlJywge30pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/lnKjlvq7kv6HlsI/nqIvluo/lkoxRUeWwj+eoi+W6j+S4re+8jOaYr+WQpuWunuaXtuebkeWQrOS4i+aLieWIt+aWsOS4rei/m+W6pu+8jOm7mOiupOS4uuWQplxuXHRcdHdhdGNoUmVmcmVzaGVyVG91Y2htb3ZlOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnd2F0Y2hSZWZyZXNoZXJUb3VjaG1vdmUnLCBmYWxzZSlcblx0XHR9LFxuXHRcdC8v5bqV6YOo5Yqg6L295pu05aSa55qE5Li76aKY5qC35byP77yM5pSv5oyBYmxhY2vvvIx3aGl0Ze+8jOm7mOiupGJsYWNrXG5cdFx0bG9hZGluZ01vcmVUaGVtZVN0eWxlOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdsb2FkaW5nTW9yZVRoZW1lU3R5bGUnLCAnJylcblx0XHR9LFxuXHRcdC8v5piv5ZCm5Y+q5L2/55So5LiL5ouJ5Yi35paw77yM6K6+572u5Li6dHJ1ZeWQjuWwhuWFs+mXrW1vdW50ZWToh6rliqjor7fmsYLmlbDmja7jgIHlhbPpl63mu5rliqjliLDlupXpg6jliqDovb3mm7TlpJrvvIzlvLrliLbpmpDol4/nqbrmlbDmja7lm77jgILpu5jorqTkuLrlkKZcblx0XHRyZWZyZXNoZXJPbmx5OiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyT25seScsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnkuIvmi4nliLfmlrDpu5jorqTnirbmgIHkuIvlm57lvLnliqjnlLvml7bpl7TvvIzljZXkvY3kuLrmr6vnp5LvvIzpu5jorqTkuLoxMDDmr6vnp5LvvIxudnVl5peg5pWIXG5cdFx0cmVmcmVzaGVyRGVmYXVsdER1cmF0aW9uOiB7XG5cdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyRGVmYXVsdER1cmF0aW9uJywgMTAwKVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnkuIvmi4nliLfmlrDnu5PmnZ/ku6XlkI7lu7bov5/lm57lvLnnmoTml7bpl7TvvIzljZXkvY3kuLrmr6vnp5LvvIzpu5jorqTkuLowXG5cdFx0cmVmcmVzaGVyQ29tcGxldGVEZWxheToge1xuXHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3JlZnJlc2hlckNvbXBsZXRlRGVsYXknLCAwKVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnkuIvmi4nliLfmlrDnu5PmnZ/lm57lvLnliqjnlLvml7bpl7TvvIzljZXkvY3kuLrmr6vnp5LvvIzpu5jorqTkuLozMDDmr6vnp5IocmVmcmVzaGVyRW5kQm91bmNlRW5hYmxlZOS4umZhbHNl5pe277yMcmVmcmVzaGVyQ29tcGxldGVEdXJhdGlvbuS4uuiuvuWumuWAvOeahDEvMynvvIxudnVl5peg5pWIXG5cdFx0cmVmcmVzaGVyQ29tcGxldGVEdXJhdGlvbjoge1xuXHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3JlZnJlc2hlckNvbXBsZXRlRHVyYXRpb24nLCAzMDApXG5cdFx0fSxcblx0XHQvL+iHquWumuS5ieS4i+aLieWIt+aWsOe7k+adn+eKtuaAgeS4i+aYr+WQpuWFgeiuuOWIl+ihqOa7muWKqO+8jOm7mOiupOS4uuWQplxuXHRcdHJlZnJlc2hlckNvbXBsZXRlU2Nyb2xsYWJsZToge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3JlZnJlc2hlckNvbXBsZXRlU2Nyb2xsYWJsZScsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/mmK/lkKbkvb/nlKjoh6rlrprkuYnnmoTkuIvmi4nliLfmlrDvvIzpu5jorqTkuLrmmK/vvIzljbPkvb/nlKh6LXBhZ2luZ+eahOS4i+aLieWIt+aWsOOAguiuvue9ruS4umZhbHNl5Y2z5Luj6KGo5L2/55SodW5pIHNjcm9sbC12aWV36Ieq5bim55qE5LiL5ouJ5Yi35paw77yMaDXjgIFBcHDjgIHlvq7kv6HlsI/nqIvluo/ku6XlpJbnmoTlubPlj7DkuI3mlK/mjIF1bmkgc2Nyb2xsLXZpZXfoh6rluKbnmoTkuIvmi4nliLfmlrBcblx0XHR1c2VDdXN0b21SZWZyZXNoZXI6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCd1c2VDdXN0b21SZWZyZXNoZXInLCB0cnVlKVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnkuIvmi4nliLfmlrDkuIvmi4nluKfnjofvvIzpu5jorqTkuLo0MO+8jOi/h+mrmOWPr+iDveS8muWHuueOsOaKluWKqOmXrumimFxuXHRcdHJlZnJlc2hlckZwczoge1xuXHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3JlZnJlc2hlckZwcycsIDQwKVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnkuIvmi4nliLfmlrDlhYHorrjop6blj5HnmoTmnIDlpKfkuIvmi4nop5LluqbvvIzpu5jorqTkuLo0MOW6pu+8jOW9k+S4i+aLieinkuW6puWwj+S6juiuvuWumuWAvOaXtu+8jOiHquWumuS5ieS4i+aLieWIt+aWsOWKqOeUu+S4jeS8muiiq+inpuWPkVxuXHRcdHJlZnJlc2hlck1heEFuZ2xlOiB7XG5cdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyTWF4QW5nbGUnLCA0MClcblx0XHR9LFxuXHRcdC8v6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw55qE6KeS5bqm55Sx5pyq6L6+5Yiw5pyA5aSn6KeS5bqm5Y+Y5Yiw6L6+5Yiw5pyA5aSn6KeS5bqm5pe277yM5piv5ZCm57un57ut5LiL5ouJ5Yi35paw5omL5Yq/77yM6buY6K6k5Li65ZCmXG5cdFx0cmVmcmVzaGVyQW5nbGVFbmFibGVDaGFuZ2VDb250aW51ZWQ6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdyZWZyZXNoZXJBbmdsZUVuYWJsZUNoYW5nZUNvbnRpbnVlZCcsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnkuIvmi4nliLfmlrDpu5jorqTnirbmgIHkuIvnmoTmloflrZdcblx0XHRyZWZyZXNoZXJEZWZhdWx0VGV4dDoge1xuXHRcdFx0dHlwZTogW1N0cmluZywgT2JqZWN0XSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3JlZnJlc2hlckRlZmF1bHRUZXh0JywgbnVsbClcblx0XHR9LFxuXHRcdC8v6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw5p2+5omL56uL5Y2z5Yi35paw54q25oCB5LiL55qE5paH5a2XXG5cdFx0cmVmcmVzaGVyUHVsbGluZ1RleHQ6IHtcblx0XHRcdHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdyZWZyZXNoZXJQdWxsaW5nVGV4dCcsIG51bGwpXG5cdFx0fSxcblx0XHQvL+iHquWumuS5ieS4i+aLieWIt+aWsOWIt+aWsOS4reeKtuaAgeS4i+eahOaWh+Wtl1xuXHRcdHJlZnJlc2hlclJlZnJlc2hpbmdUZXh0OiB7XG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyUmVmcmVzaGluZ1RleHQnLCBudWxsKVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnkuIvmi4nliLfmlrDliLfmlrDnu5PmnZ/nirbmgIHkuIvnmoTmloflrZdcblx0XHRyZWZyZXNoZXJDb21wbGV0ZVRleHQ6IHtcblx0XHRcdHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdyZWZyZXNoZXJDb21wbGV0ZVRleHQnLCBudWxsKVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnkuIvmi4nliLfmlrDpu5jorqTnirbmgIHkuIvnmoTlm77niYdcblx0XHRyZWZyZXNoZXJEZWZhdWx0SW1nOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdyZWZyZXNoZXJEZWZhdWx0SW1nJywgbnVsbClcblx0XHR9LFxuXHRcdC8v6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw5p2+5omL56uL5Y2z5Yi35paw54q25oCB5LiL55qE5Zu+54mH77yM6buY6K6k5LiOcmVmcmVzaGVyRGVmYXVsdEltZ+S4gOiHtFxuXHRcdHJlZnJlc2hlclB1bGxpbmdJbWc6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3JlZnJlc2hlclB1bGxpbmdJbWcnLCBudWxsKVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnkuIvmi4nliLfmlrDliLfmlrDkuK3nirbmgIHkuIvnmoTlm77niYdcblx0XHRyZWZyZXNoZXJSZWZyZXNoaW5nSW1nOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdyZWZyZXNoZXJSZWZyZXNoaW5nSW1nJywgbnVsbClcblx0XHR9LFxuXHRcdC8v6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw5Yi35paw57uT5p2f54q25oCB5LiL55qE5Zu+54mHXG5cdFx0cmVmcmVzaGVyQ29tcGxldGVJbWc6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3JlZnJlc2hlckNvbXBsZXRlSW1nJywgbnVsbClcblx0XHR9LFxuXHRcdC8v6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw5Yi35paw5Lit54q25oCB5LiL5piv5ZCm5bGV56S65peL6L2s5Yqo55S7XG5cdFx0cmVmcmVzaGVyUmVmcmVzaGluZ0FuaW1hdGVkOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyUmVmcmVzaGluZ0FuaW1hdGVkJywgdHJ1ZSlcblx0XHR9LFxuXHRcdC8v5piv5ZCm5byA5ZCv6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw5Yi35paw57uT5p2f5Zue5by55pWI5p6c77yM6buY6K6k5Li65pivXG5cdFx0cmVmcmVzaGVyRW5kQm91bmNlRW5hYmxlZDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3JlZnJlc2hlckVuZEJvdW5jZUVuYWJsZWQnLCB0cnVlKVxuXHRcdH0sXG5cdFx0Ly/mmK/lkKblvIDlkK/oh6rlrprkuYnkuIvmi4nliLfmlrDvvIzpu5jorqTkuLrmmK9cblx0XHRyZWZyZXNoZXJFbmFibGVkOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyRW5hYmxlZCcsIHRydWUpXG5cdFx0fSxcblx0XHQvL+iuvue9ruiHquWumuS5ieS4i+aLieWIt+aWsOmYiOWAvO+8jOm7mOiupOS4ujgwcnB4XG5cdFx0cmVmcmVzaGVyVGhyZXNob2xkOiB7XG5cdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyVGhyZXNob2xkJywgJzgwcnB4Jylcblx0XHR9LFxuXHRcdC8v6K6+572u57O757uf5LiL5ouJ5Yi35paw6buY6K6k5qC35byP77yM5pSv5oyB6K6+572uIGJsYWNr77yMd2hpdGXvvIxub25l77yMbm9uZSDooajnpLrkuI3kvb/nlKjpu5jorqTmoLflvI/vvIzpu5jorqTkuLpibGFja1xuXHRcdHJlZnJlc2hlckRlZmF1bHRTdHlsZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyRGVmYXVsdFN0eWxlJywgJ2JsYWNrJylcblx0XHR9LFxuXHRcdC8v6K6+572u6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw5Yy65Z+f6IOM5pmvXG5cdFx0cmVmcmVzaGVyQmFja2dyb3VuZDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyQmFja2dyb3VuZCcsICd0cmFuc3BhcmVudCcpXG5cdFx0fSxcblx0XHQvL+iuvue9ruWbuuWumueahOiHquWumuS5ieS4i+aLieWIt+aWsOWMuuWfn+iDjOaZr1xuXHRcdHJlZnJlc2hlckZpeGVkQmFja2dyb3VuZDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyRml4ZWRCYWNrZ3JvdW5kJywgJ3RyYW5zcGFyZW50Jylcblx0XHR9LFxuXHRcdC8v6K6+572u5Zu65a6a55qE6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw5Yy65Z+f6auY5bqm77yM6buY6K6k5Li6MFxuXHRcdHJlZnJlc2hlckZpeGVkQmFjSGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyRml4ZWRCYWNIZWlnaHQnLCAwKVxuXHRcdH0sXG5cdFx0Ly/orr7nva7oh6rlrprkuYnkuIvmi4nliLfmlrDkuIvmi4notoXlh7rpmIjlgLzlkI7nu6fnu63kuIvmi4nkvY3np7voobDlh4/nmoTmr5TkvovvvIzojIPlm7QwLTHvvIzlgLzotorlpKfku6PooajoobDlh4/otorlpJrjgILpu5jorqTkuLowLjY1KG52dWXml6DmlYgpXG5cdFx0cmVmcmVzaGVyT3V0UmF0ZToge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyT3V0UmF0ZScsIDAuNjUpXG5cdFx0fSxcblx0XHQvL+iuvue9ruiHquWumuS5ieS4i+aLieWIt+aWsOS4i+aLieaXtuWunumZheS4i+aLieS9jeenu+S4jueUqOaIt+S4i+aLiei3neemu+eahOavlOWAvO+8jOm7mOiupOS4ujAuNzXvvIzljbPku6Pooajoi6XnlKjmiLfkuIvmi4kxMHB477yM5YiZ5a6e6ZmF5L2N56e75Li6Ny41cHgobnZ1ZeaXoOaViClcblx0XHRyZWZyZXNoZXJQdWxsUmF0ZToge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyUHVsbFJhdGUnLCAwLjc1KVxuXHRcdH0sXG5cdFx0Ly/mmK/lkKbmmL7npLrmnIDlkI7mm7TmlrDml7bpl7TvvIzpu5jorqTkuLrlkKZcblx0XHRzaG93UmVmcmVzaGVyVXBkYXRlVGltZToge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3Nob3dSZWZyZXNoZXJVcGRhdGVUaW1lJywgZmFsc2UpXG5cdFx0fSxcblx0XHQvL+WmguaenOmcgOimgeWMuuWIq+S4jeWQjOmhtemdoueahOacgOWQjuabtOaWsOaXtumXtO+8jOivt+S4uuS4jeWQjOmhtemdoueahHotcGFnaW5n55qEYHJlZnJlc2hlci11cGRhdGUtdGltZS1rZXlg6K6+572u5LiN5ZCM55qE5a2X56ym5LiyXG5cdFx0cmVmcmVzaGVyVXBkYXRlVGltZUtleToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyVXBkYXRlVGltZUtleScsICdkZWZhdWx0Jylcblx0XHR9LFxuXHRcdC8v5LiL5ouJ5Yi35paw5pe25LiL5ouJ5Yiw4oCc5p2+5omL56uL5Y2z5Yi35paw4oCd54q25oCB5pe25piv5ZCm5L2/5omL5py655+t5oyv5Yqo77yM6buY6K6k5Li65ZCm77yIaDXml6DmlYjvvIlcblx0XHRyZWZyZXNoZXJWaWJyYXRlOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyVmlicmF0ZScsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/kuIvmi4nliLfmlrDml7bmmK/lkKbnpoHmraLkuIvmi4nliLfmlrB2aWV36Lef6ZqP55So5oi36Kem5pG456uW55u056e75Yqo77yM6buY6K6k5Li65ZCm44CC5rOo5oSP5q2k5bGe5oCn5Y+q5piv56aB5q2i5LiL5ouJ5Yi35pawdmlld+enu+WKqO+8jOWFtuS7luS4i+aLieWIt+aWsOmAu+i+keS+neeEtuS8muato+W4uOinpuWPkVxuXHRcdHJlZnJlc2hlck5vVHJhbnNmb3JtOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygncmVmcmVzaGVyTm9UcmFuc2Zvcm0nLCBmYWxzZSlcblx0XHR9LFxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRSOiBFbnVtLlJlZnJlc2hlcixcblx0XHRcdC8v5LiL5ouJ5Yi35paw54q25oCBXG5cdFx0XHRyZWZyZXNoZXJTdGF0dXM6IEVudW0uUmVmcmVzaGVyLkRlZmF1bHQsXG5cdFx0XHRyZWZyZXNoZXJUb3VjaHN0YXJ0WTogMCxcblx0XHRcdGxhc3RSZWZyZXNoZXJUb3VjaG1vdmU6IG51bGwsXG5cdFx0XHRyZWZyZXNoZXJSZWFjaE1heEFuZ2xlOiB0cnVlLFxuXHRcdFx0cmVmcmVzaGVyVHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwcHgpJyxcblx0XHRcdHJlZnJlc2hlclRyYW5zaXRpb246ICcnLFxuXHRcdFx0ZmluYWxSZWZyZXNoZXJEZWZhdWx0U3R5bGU6ICdibGFjaycsXG5cdFx0XHRyZWZyZXNoZXJSZXZlYWxTdGFja0NvdW50OiAwLFxuXHRcdFx0cmVmcmVzaGVyQ29tcGxldGVUaW1lb3V0OiBudWxsLFxuXHRcdFx0cmVmcmVzaGVyQ29tcGxldGVTdWJUaW1lb3V0OiBudWxsLFxuXHRcdFx0cmVmcmVzaGVyRW5kVGltZW91dDogbnVsbCxcblx0XHRcdGlzVG91Y2htb3ZpbmdUaW1lb3V0OiBudWxsLFxuXHRcdFx0cmVmcmVzaGVyVHJpZ2dlcmVkOiBmYWxzZSxcblx0XHRcdGlzVG91Y2htb3Zpbmc6IGZhbHNlLFxuXHRcdFx0aXNUb3VjaEVuZGVkOiBmYWxzZSxcblx0XHRcdGlzVXNlclB1bGxEb3duOiBmYWxzZSxcblx0XHRcdHByaXZhdGVSZWZyZXNoZXJFbmFibGVkOiAtMSxcblx0XHRcdHByaXZhdGVTaG93UmVmcmVzaGVyV2hlblJlbG9hZDogZmFsc2UsXG5cdFx0XHRjdXN0b21SZWZyZXNoZXJIZWlnaHQ6IC0xLFxuXHRcdFx0c2hvd0N1c3RvbVJlZnJlc2hlcjogZmFsc2UsXG5cdFx0XHRkb1JlZnJlc2hBbmltYXRlQWZ0ZXI6IGZhbHNlLFxuXHRcdFx0aXNSZWZyZXNoZXJJbkNvbXBsZXRlOiBmYWxzZSxcblx0XHRcdHB1bGxEb3duVGltZVN0YW1wOiAwLFxuXHRcdFx0bW92ZURpczogMCxcblx0XHRcdG9sZE1vdmVEaXM6IDAsXG5cdFx0XHRjdXJyZW50RGlzOiAwLFxuXHRcdFx0b2xkQ3VycmVudE1vdmVEaXM6IDAsXG5cdFx0XHRvbGRSZWZyZXNoZXJUb3VjaG1vdmVZOiAwLFxuXHRcdFx0b2xkVG91Y2hEaXJlY3Rpb246ICcnLFxuXHRcdFx0b2xkRW1pdGVkVG91Y2hEaXJlY3Rpb246ICcnLFxuXHRcdFx0b2xkUHVsbGluZ0Rpc3RhbmNlOiAtMVxuXHRcdH1cblx0fSxcblx0d2F0Y2g6IHtcblx0XHRyZWZyZXNoZXJEZWZhdWx0U3R5bGU6IHtcblx0XHRcdGhhbmRsZXIobmV3VmFsKSB7XG5cdFx0XHRcdGlmIChuZXdWYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGhpcy5maW5hbFJlZnJlc2hlckRlZmF1bHRTdHlsZSA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdH0sXG5cdFx0cmVmcmVzaGVyU3RhdHVzKG5ld1ZhbCkge1xuXHRcdFx0bmV3VmFsID09PSBFbnVtLlJlZnJlc2hlci5Mb2FkaW5nICYmIHRoaXMuX2NsZWFuUmVmcmVzaGVyRW5kVGltZW91dCgpO1xuXHRcdFx0dGhpcy5yZWZyZXNoZXJWaWJyYXRlICYmIG5ld1ZhbCA9PT0gRW51bS5SZWZyZXNoZXIuUmVsZWFzZVRvUmVmcmVzaCAmJiB0aGlzLl9kb1ZpYnJhdGVTaG9ydCgpO1xuXHRcdFx0dGhpcy4kZW1pdCgncmVmcmVzaGVyU3RhdHVzQ2hhbmdlJywgbmV3VmFsKTtcblx0XHRcdHRoaXMuJGVtaXQoJ3VwZGF0ZTpyZWZyZXNoZXJTdGF0dXMnLCBuZXdWYWwpO1xuXHRcdH0sXG5cdFx0cmVmcmVzaGVyRW5hYmxlZChuZXdWYWwpIHtcblx0XHRcdCFuZXdWYWwgJiYgdGhpcy5lbmRSZWZyZXNoKCk7XG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdHB1bGxEb3duRGlzVGltZVN0YW1wKCkge1xuXHRcdFx0cmV0dXJuIDEwMDAgLyB0aGlzLnJlZnJlc2hlckZwcztcblx0XHR9LFxuXHRcdGZpbmFsUmVmcmVzaGVyRW5hYmxlZCgpIHtcblx0XHRcdGlmICh0aGlzLnVzZUNoYXRSZWNvcmRNb2RlKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRpZiAodGhpcy5wcml2YXRlUmVmcmVzaGVyRW5hYmxlZCA9PT0gLTEpIHJldHVybiB0aGlzLnJlZnJlc2hlckVuYWJsZWQ7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcml2YXRlUmVmcmVzaGVyRW5hYmxlZCA9PT0gMTtcblx0XHR9LFxuXHRcdGZpbmFsUmVmcmVzaGVyVGhyZXNob2xkKCkge1xuXHRcdFx0bGV0IHJlZnJlc2hlclRocmVzaG9sZCA9IHRoaXMucmVmcmVzaGVyVGhyZXNob2xkO1xuXHRcdFx0bGV0IGlkRGVmYXVsdCA9IGZhbHNlO1xuXHRcdFx0aWYgKHJlZnJlc2hlclRocmVzaG9sZCA9PT0gJzgwcnB4Jykge1xuXHRcdFx0XHRpZERlZmF1bHQgPSB0cnVlO1xuXHRcdFx0XHRpZiAodGhpcy5zaG93UmVmcmVzaGVyVXBkYXRlVGltZSkge1xuXHRcdFx0XHRcdHJlZnJlc2hlclRocmVzaG9sZCA9ICcxMjBycHgnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoaWREZWZhdWx0ICYmIHRoaXMuY3VzdG9tUmVmcmVzaGVySGVpZ2h0ID4gMCkgcmV0dXJuIHRoaXMuY3VzdG9tUmVmcmVzaGVySGVpZ2h0O1xuXHRcdFx0cmV0dXJuIHUuY29udmVydFRvUHgocmVmcmVzaGVyVGhyZXNob2xkKTtcblx0XHR9LFxuXHRcdGZpbmFsUmVmcmVzaGVyRml4ZWRCYWNIZWlnaHQoKSB7XG5cdFx0XHRyZXR1cm4gdS5jb252ZXJ0VG9QeCh0aGlzLnJlZnJlc2hlckZpeGVkQmFjSGVpZ2h0KTtcblx0XHR9LFxuXHRcdGZpbmFsUmVmcmVzaGVyVGhlbWVTdHlsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlZnJlc2hlclRoZW1lU3R5bGUubGVuZ3RoID8gdGhpcy5yZWZyZXNoZXJUaGVtZVN0eWxlIDogdGhpcy5kZWZhdWx0VGhlbWVTdHlsZTtcblx0XHR9LFxuXHRcdGZpbmFsUmVmcmVzaGVyT3V0UmF0ZSgpIHtcblx0XHRcdGxldCByYXRlID0gdGhpcy5yZWZyZXNoZXJPdXRSYXRlO1xuXHRcdFx0cmF0ZSA9IE1hdGgubWF4KDAscmF0ZSk7XG5cdFx0XHRyYXRlID0gTWF0aC5taW4oMSxyYXRlKTtcblx0XHRcdHJldHVybiByYXRlO1xuXHRcdH0sXG5cdFx0ZmluYWxSZWZyZXNoZXJQdWxsUmF0ZSgpIHtcblx0XHRcdGxldCByYXRlID0gdGhpcy5yZWZyZXNoZXJQdWxsUmF0ZTtcblx0XHRcdHJhdGUgPSBNYXRoLm1heCgwLHJhdGUpO1xuXHRcdFx0cmV0dXJuIHJhdGU7XG5cdFx0fSxcblx0XHRmaW5hbFJlZnJlc2hlclRyYW5zZm9ybSgpIHtcblx0XHRcdGlmICh0aGlzLnJlZnJlc2hlck5vVHJhbnNmb3JtIHx8IHRoaXMucmVmcmVzaGVyVHJhbnNmb3JtID09PSAndHJhbnNsYXRlWSgwcHgpJykgcmV0dXJuICdub25lJztcblx0XHRcdHJldHVybiB0aGlzLnJlZnJlc2hlclRyYW5zZm9ybTtcblx0XHR9LFxuXHRcdGZpbmFsU2hvd1JlZnJlc2hlcldoZW5SZWxvYWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93UmVmcmVzaGVyV2hlblJlbG9hZCB8fCB0aGlzLnByaXZhdGVTaG93UmVmcmVzaGVyV2hlblJlbG9hZDtcblx0XHR9LFxuXHRcdGZpbmFsUmVmcmVzaGVyVHJpZ2dlcmVkKCkge1xuXHRcdFx0aWYgKCEodGhpcy5maW5hbFJlZnJlc2hlckVuYWJsZWQgJiYgIXRoaXMudXNlQ3VzdG9tUmVmcmVzaGVyKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0cmV0dXJuIHRoaXMucmVmcmVzaGVyVHJpZ2dlcmVkO1xuXHRcdH0sXG5cdFx0c2hvd1JlZnJlc2hlcigpIHtcblx0XHRcdGNvbnN0IHNob3dSZWZyZXNoZXIgPSB0aGlzLmZpbmFsUmVmcmVzaGVyRW5hYmxlZCAmJiB0aGlzLnVzZUN1c3RvbVJlZnJlc2hlcjtcblxuXG5cblxuXG5cblxuXG5cblx0XHRcdHJldHVybiBzaG93UmVmcmVzaGVyO1xuXHRcdH0sXG5cdFx0aGFzVG91Y2htb3ZlKCl7XG5cblxuXG5cblxuXG5cblx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy53YXRjaFJlZnJlc2hlclRvdWNobW92ZTtcblx0XHR9LFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Ly/nu4jmraLkuIvmi4nliLfmlrDnirbmgIFcblx0XHRlbmRSZWZyZXNoKCl7XG5cdFx0XHR0aGlzLnRvdGFsRGF0YSA9IHRoaXMucmVhbFRvdGFsRGF0YTtcblx0XHRcdHRoaXMuX3JlZnJlc2hlckVuZCgpO1xuXHRcdFx0dGhpcy5fZW5kU3lzdGVtTG9hZGluZ0FuZFJlZnJlc2goKTtcblx0XHRcdHRoaXMuX2hhbmRsZVNjcm9sbFZpZXdEaXNhYmxlQm91bmNlKHsgYm91bmNlOiB0cnVlIH0pO1xuXHRcdH0sXG5cdFx0aGFuZGxlUmVmcmVzaGVyU3RhdHVzQ2hhbmdlZChmdW5jKSB7XG5cdFx0XHR0aGlzLnJlZnJlc2hlclN0YXR1c0NoYW5nZWRGdW5jID0gZnVuYztcblx0XHR9LFxuXHRcdC8v6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw6KKr6Kem5Y+RXG5cdFx0X29uUmVmcmVzaChmcm9tU2Nyb2xsVmlldyA9IGZhbHNlLGlzVXNlclB1bGxEb3duID0gdHJ1ZSkge1xuXHRcdFx0aWYgKGZyb21TY3JvbGxWaWV3ICYmICEodGhpcy5maW5hbFJlZnJlc2hlckVuYWJsZWQgJiYgIXRoaXMudXNlQ3VzdG9tUmVmcmVzaGVyKSkgcmV0dXJuO1xuXHRcdFx0dGhpcy4kZW1pdCgnb25SZWZyZXNoJyk7XG5cdFx0XHR0aGlzLiRlbWl0KCdSZWZyZXNoJyk7XG5cblx0XHRcdGlmICh0aGlzLmxvYWRpbmcpIHtcblx0XHRcdFx0dS5kZWxheSh0aGlzLl9uUmVmcmVzaGVyRW5kLCA1MDApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMubG9hZGluZyB8fCB0aGlzLmlzUmVmcmVzaGVySW5Db21wbGV0ZSkgcmV0dXJuO1xuXHRcdFx0dGhpcy5sb2FkaW5nVHlwZSA9IEVudW0uTG9hZGluZ1R5cGUuUmVmcmVzaGVyO1xuXHRcdFx0aWYgKHRoaXMublNob3dSZWZyZXNoZXJSZXZlYWwpIHJldHVybjtcblx0XHRcdHRoaXMuaXNVc2VyUHVsbERvd24gPSBpc1VzZXJQdWxsRG93bjtcblx0XHRcdHRoaXMuaXNVc2VyUmVsb2FkID0gIWlzVXNlclB1bGxEb3duO1xuXHRcdFx0dGhpcy5fc3RhcnRMb2FkaW5nKHRydWUpO1xuXHRcdFx0dGhpcy5yZWZyZXNoZXJUcmlnZ2VyZWQgPSB0cnVlO1xuXHRcdFx0aWYodGhpcy5yZWxvYWRXaGVuUmVmcmVzaCAmJiBpc1VzZXJQdWxsRG93bil7XG5cdFx0XHRcdHRoaXMudXNlQ2hhdFJlY29yZE1vZGUgPyB0aGlzLl9vbkxvYWRpbmdNb3JlKCdjbGljaycpIDogdGhpcy5fcmVsb2FkKGZhbHNlLCBmYWxzZSwgaXNVc2VyUHVsbERvd24pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnkuIvmi4nliLfmlrDooqvlpI3kvY1cblx0XHRfb25SZXN0b3JlKCkge1xuXHRcdFx0dGhpcy5yZWZyZXNoZXJUcmlnZ2VyZWQgPSAncmVzdG9yZSc7XG5cdFx0XHR0aGlzLiRlbWl0KCdvblJlc3RvcmUnKTtcblx0XHRcdHRoaXMuJGVtaXQoJ1Jlc3RvcmUnKTtcblx0XHR9LFxuXG5cdFx0Ly/mi5bmi73lvIDlp4tcblx0XHRfcmVmcmVzaGVyVG91Y2hzdGFydChlKSB7XG5cdFx0XHR0aGlzLl9oYW5kbGVMaXN0VG91Y2hzdGFydCgpO1xuXHRcdFx0aWYgKHRoaXMuX3RvdWNoRGlzYWJsZWQoKSkgcmV0dXJuO1xuXHRcdFx0dGhpcy5faGFuZGxlUmVmcmVzaGVyVG91Y2hzdGFydCh1LmdldFRvdWNoKGUpKTtcblx0XHR9LFxuXG5cdFx0Ly/ov5vkuIDmraXlpITnkIbmi5bmi73lvIDlp4vnu5Pmnpxcblx0XHRfaGFuZGxlUmVmcmVzaGVyVG91Y2hzdGFydCh0b3VjaCkge1xuXHRcdFx0aWYgKCF0aGlzLmxvYWRpbmcgJiYgdGhpcy5pc1RvdWNoRW5kZWQpIHtcblx0XHRcdFx0dGhpcy5pc1RvdWNobW92aW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxvYWRpbmdUeXBlID0gRW51bS5Mb2FkaW5nVHlwZS5SZWZyZXNoZXI7XG5cdFx0XHR0aGlzLmlzVG91Y2htb3ZpbmdUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmlzVG91Y2htb3ZpbmdUaW1lb3V0KTtcblx0XHRcdHRoaXMuaXNUb3VjaEVuZGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLnJlZnJlc2hlclRyYW5zaXRpb24gPSAnJztcblx0XHRcdHRoaXMucmVmcmVzaGVyVG91Y2hzdGFydFkgPSB0b3VjaC50b3VjaFk7XG5cdFx0XHR0aGlzLiRlbWl0KCdyZWZyZXNoZXJUb3VjaHN0YXJ0JywgdGhpcy5yZWZyZXNoZXJUb3VjaHN0YXJ0WSk7XG5cdFx0XHR0aGlzLmxhc3RSZWZyZXNoZXJUb3VjaG1vdmUgPSB0b3VjaDtcblx0XHRcdHRoaXMuX2NsZWFuUmVmcmVzaGVyQ29tcGxldGVUaW1lb3V0KCk7XG5cdFx0XHR0aGlzLl9jbGVhblJlZnJlc2hlckVuZFRpbWVvdXQoKTtcblx0XHR9LFxuXG5cdFx0Ly/mi5bmi73kuK1cblx0XHRfcmVmcmVzaGVyVG91Y2htb3ZlKGUpIHtcblx0XHRcdGNvbnN0IGN1cnJlbnRUaW1lU3RhbXAgPSB1LmdldFRpbWUoKTtcblx0XHRcdGxldCB0b3VjaCA9IG51bGw7XG5cdFx0XHRsZXQgcmVmcmVzaGVyVG91Y2htb3ZlWSA9IDA7XG5cdFx0XHRpZiAodGhpcy53YXRjaFRvdWNoRGlyZWN0aW9uQ2hhbmdlKSB7XG5cdFx0XHRcdHRvdWNoID0gdS5nZXRUb3VjaChlKTtcblx0XHRcdFx0cmVmcmVzaGVyVG91Y2htb3ZlWSA9IHRvdWNoLnRvdWNoWTtcblx0XHRcdFx0Y29uc3QgZGlyZWN0aW9uICA9IHJlZnJlc2hlclRvdWNobW92ZVkgPiB0aGlzLm9sZFJlZnJlc2hlclRvdWNobW92ZVkgPyAndG9wJyA6ICdib3R0b20nO1xuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSB0aGlzLm9sZFRvdWNoRGlyZWN0aW9uICYmIGRpcmVjdGlvbiAhPT0gdGhpcy5vbGRFbWl0ZWRUb3VjaERpcmVjdGlvbikge1xuXHRcdFx0XHRcdHRoaXMuX2hhbmRsZVRvdWNoRGlyZWN0aW9uQ2hhbmdlKHsgZGlyZWN0aW9uIH0pO1xuXHRcdFx0XHRcdHRoaXMub2xkRW1pdGVkVG91Y2hEaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5vbGRUb3VjaERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0XHRcdFx0dGhpcy5vbGRSZWZyZXNoZXJUb3VjaG1vdmVZID0gcmVmcmVzaGVyVG91Y2htb3ZlWTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnB1bGxEb3duVGltZVN0YW1wICYmIGN1cnJlbnRUaW1lU3RhbXAgLSB0aGlzLnB1bGxEb3duVGltZVN0YW1wIDw9IHRoaXMucHVsbERvd25EaXNUaW1lU3RhbXApIHJldHVybjtcblx0XHRcdGlmICh0aGlzLl90b3VjaERpc2FibGVkKCkpIHJldHVybjtcblx0XHRcdHRoaXMucHVsbERvd25UaW1lU3RhbXAgPSBOdW1iZXIoY3VycmVudFRpbWVTdGFtcCk7XG5cdFx0XHR0b3VjaCA9IHUuZ2V0VG91Y2goZSk7XG5cdFx0XHRyZWZyZXNoZXJUb3VjaG1vdmVZID0gdG91Y2gudG91Y2hZO1xuXHRcdFx0bGV0IG1vdmVEaXMgPSByZWZyZXNoZXJUb3VjaG1vdmVZIC0gdGhpcy5yZWZyZXNoZXJUb3VjaHN0YXJ0WTtcblx0XHRcdGlmIChtb3ZlRGlzIDwgMCkgcmV0dXJuO1xuXHRcdFx0aWYgKHRoaXMucmVmcmVzaGVyTWF4QW5nbGUgPj0gMCAmJiB0aGlzLnJlZnJlc2hlck1heEFuZ2xlIDw9IDkwICYmIHRoaXMubGFzdFJlZnJlc2hlclRvdWNobW92ZSAmJiB0aGlzLmxhc3RSZWZyZXNoZXJUb3VjaG1vdmUudG91Y2hZIDw9IHJlZnJlc2hlclRvdWNobW92ZVkpIHtcblx0XHRcdFx0aWYgKCFtb3ZlRGlzICYmICF0aGlzLnJlZnJlc2hlckFuZ2xlRW5hYmxlQ2hhbmdlQ29udGludWVkICYmIHRoaXMubW92ZURpcyA8IDEgJiYgIXRoaXMucmVmcmVzaGVyUmVhY2hNYXhBbmdsZSkgcmV0dXJuO1xuXHRcdFx0XHRjb25zdCB4ID0gTWF0aC5hYnModG91Y2gudG91Y2hYIC0gdGhpcy5sYXN0UmVmcmVzaGVyVG91Y2htb3ZlLnRvdWNoWCk7XG5cdFx0XHRcdGNvbnN0IHkgPSBNYXRoLmFicyhyZWZyZXNoZXJUb3VjaG1vdmVZIC0gdGhpcy5sYXN0UmVmcmVzaGVyVG91Y2htb3ZlLnRvdWNoWSk7XG5cdFx0XHRcdGNvbnN0IHogPSBNYXRoLnNxcnQoTWF0aC5wb3coeCwgMikgKyBNYXRoLnBvdyh5LCAyKSk7XG5cdFx0XHRcdGlmICgoeCB8fCB5KSAmJiB4ID4gMSkge1xuXHRcdFx0XHRcdGNvbnN0IGFuZ2xlID0gTWF0aC5hc2luKHkgLyB6KSAvIE1hdGguUEkgKiAxODA7XG5cdFx0XHRcdFx0aWYgKGFuZ2xlIDwgdGhpcy5yZWZyZXNoZXJNYXhBbmdsZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5sYXN0UmVmcmVzaGVyVG91Y2htb3ZlID0gdG91Y2g7XG5cdFx0XHRcdFx0XHR0aGlzLnJlZnJlc2hlclJlYWNoTWF4QW5nbGUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1vdmVEaXMgPSB0aGlzLl9nZXRGaW5hbFJlZnJlc2hlck1vdmVEaXMobW92ZURpcyk7XG5cdFx0XHR0aGlzLl9oYW5kbGVSZWZyZXNoZXJUb3VjaG1vdmUobW92ZURpcywgdG91Y2gpO1xuXHRcdFx0aWYgKCF0aGlzLmRpc2FibGVkQm91bmNlKSB7XG5cdFx0XHRcdGlmKHRoaXMuaXNJb3Mpe1xuXG5cdFx0XHRcdFx0dGhpcy5faGFuZGxlU2Nyb2xsVmlld0Rpc2FibGVCb3VuY2UoeyBib3VuY2U6IGZhbHNlIH0pO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kaXNhYmxlZEJvdW5jZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9lbWl0VG91Y2htb3ZlKHsgcHVsbGluZ0Rpc3RhbmNlOiBtb3ZlRGlzLCBkeTogdGhpcy5tb3ZlRGlzIC0gdGhpcy5vbGRNb3ZlRGlzIH0pO1xuXHRcdH0sXG5cblx0XHQvL+i/m+S4gOatpeWkhOeQhuaLluaLveS4ree7k+aenFxuXHRcdF9oYW5kbGVSZWZyZXNoZXJUb3VjaG1vdmUobW92ZURpcywgdG91Y2gpIHtcblx0XHRcdHRoaXMucmVmcmVzaGVyUmVhY2hNYXhBbmdsZSA9IHRydWU7XG5cdFx0XHR0aGlzLmlzVG91Y2htb3ZpbmdUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmlzVG91Y2htb3ZpbmdUaW1lb3V0KTtcblx0XHRcdHRoaXMuaXNUb3VjaG1vdmluZyA9IHRydWU7XG5cdFx0XHR0aGlzLmlzVG91Y2hFbmRlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5yZWZyZXNoZXJTdGF0dXMgPSBtb3ZlRGlzID49IHRoaXMuZmluYWxSZWZyZXNoZXJUaHJlc2hvbGQgPyBFbnVtLlJlZnJlc2hlci5SZWxlYXNlVG9SZWZyZXNoIDogdGhpcy5yZWZyZXNoZXJTdGF0dXMgPSBFbnVtLlJlZnJlc2hlci5EZWZhdWx0O1xuXG5cdFx0XHQvLyB0aGlzLnNjcm9sbEVuYWJsZSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5yZWZyZXNoZXJUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke21vdmVEaXN9cHgpYDtcblx0XHRcdHRoaXMubGFzdFJlZnJlc2hlclRvdWNobW92ZSA9IHRvdWNoO1xuXG5cdFx0XHR0aGlzLm1vdmVEaXMgPSBtb3ZlRGlzO1xuXHRcdH0sXG5cblx0XHQvL+aLluaLvee7k+adn1xuXHRcdF9yZWZyZXNoZXJUb3VjaGVuZChlKSB7XG5cdFx0XHRpZiAodGhpcy5fdG91Y2hEaXNhYmxlZCgpIHx8ICF0aGlzLmlzVG91Y2htb3ZpbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IHRvdWNoID0gdS5nZXRUb3VjaChlKTtcblx0XHRcdGxldCByZWZyZXNoZXJUb3VjaGVuZFkgPSB0b3VjaC50b3VjaFk7XG5cdFx0XHRsZXQgbW92ZURpcyA9IHJlZnJlc2hlclRvdWNoZW5kWSAtIHRoaXMucmVmcmVzaGVyVG91Y2hzdGFydFk7XG5cdFx0XHRtb3ZlRGlzID0gdGhpcy5fZ2V0RmluYWxSZWZyZXNoZXJNb3ZlRGlzKG1vdmVEaXMpO1xuXHRcdFx0dGhpcy5faGFuZGxlUmVmcmVzaGVyVG91Y2hlbmQobW92ZURpcyk7XG5cdFx0XHR0aGlzLl9oYW5kbGVTY3JvbGxWaWV3RGlzYWJsZUJvdW5jZSh7Ym91bmNlOiB0cnVlfSk7XG5cdFx0XHR0aGlzLmRpc2FibGVkQm91bmNlID0gZmFsc2U7XG5cdFx0fSxcblxuXHRcdC8v6L+b5LiA5q2l5aSE55CG5ouW5ou957uT5p2f57uT5p6cXG5cdFx0X2hhbmRsZVJlZnJlc2hlclRvdWNoZW5kKG1vdmVEaXMpIHtcblxuXG5cblx0XHRcdHRoaXMuaXNUb3VjaG1vdmluZ1RpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMuaXNUb3VjaG1vdmluZ1RpbWVvdXQpO1xuXHRcdFx0dGhpcy5yZWZyZXNoZXJSZWFjaE1heEFuZ2xlID0gdHJ1ZTtcblx0XHRcdHRoaXMuaXNUb3VjaEVuZGVkID0gdHJ1ZTtcblx0XHRcdGNvbnN0IHJlZnJlc2hlclRocmVzaG9sZCA9IHRoaXMuZmluYWxSZWZyZXNoZXJUaHJlc2hvbGQ7XG5cdFx0XHRpZiAobW92ZURpcyA+PSByZWZyZXNoZXJUaHJlc2hvbGQgJiYgdGhpcy5yZWZyZXNoZXJTdGF0dXMgPT09IEVudW0uUmVmcmVzaGVyLlJlbGVhc2VUb1JlZnJlc2gpIHtcblxuXHRcdFx0XHR0aGlzLnJlZnJlc2hlclRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cmVmcmVzaGVyVGhyZXNob2xkfXB4KWA7XG5cdFx0XHRcdHRoaXMucmVmcmVzaGVyVHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gLjFzIGxpbmVhcic7XG5cblx0XHRcdFx0dS5kZWxheSgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fZW1pdFRvdWNobW92ZSh7IHB1bGxpbmdEaXN0YW5jZTogcmVmcmVzaGVyVGhyZXNob2xkLCBkeTogdGhpcy5tb3ZlRGlzIC0gcmVmcmVzaGVyVGhyZXNob2xkIH0pO1xuXHRcdFx0XHR9LCAwLjEpO1xuXHRcdFx0XHR0aGlzLm1vdmVEaXMgPSByZWZyZXNoZXJUaHJlc2hvbGQ7XG5cdFx0XHRcdHRoaXMucmVmcmVzaGVyU3RhdHVzID0gRW51bS5SZWZyZXNoZXIuTG9hZGluZztcblx0XHRcdFx0dGhpcy5fZG9SZWZyZXNoZXJMb2FkKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9yZWZyZXNoZXJFbmQoKTtcblx0XHRcdFx0dGhpcy5pc1RvdWNobW92aW5nVGltZW91dCA9IHUuZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaXNUb3VjaG1vdmluZyA9IGZhbHNlO1xuXHRcdFx0XHR9LCB0aGlzLnJlZnJlc2hlckRlZmF1bHREdXJhdGlvbik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNjcm9sbEVuYWJsZSA9IHRydWU7XG5cdFx0XHR0aGlzLiRlbWl0KCdyZWZyZXNoZXJUb3VjaGVuZCcsIG1vdmVEaXMpO1xuXHRcdH0sXG5cdFx0Ly/lpITnkIbliJfooajop6bmkbjlvIDlp4vkuovku7Zcblx0XHRfaGFuZGxlTGlzdFRvdWNoc3RhcnQoKSB7XG5cdFx0XHRpZiAodGhpcy51c2VDaGF0UmVjb3JkTW9kZSAmJiB0aGlzLmF1dG9IaWRlS2V5Ym9hcmRXaGVuQ2hhdCkge1xuXHRcdFx0XHR1bmkuaGlkZUtleWJvYXJkKCk7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2hpZGVkS2V5Ym9hcmQnKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8v5aSE55CGc2Nyb2xsLXZpZXcgYm91bmNl5piv5ZCm55Sf5pWIXG5cdFx0X2hhbmRsZVNjcm9sbFZpZXdEaXNhYmxlQm91bmNlKHsgYm91bmNlIH0pIHtcblx0XHRcdGlmICghdGhpcy51c2VQYWdlU2Nyb2xsICYmICF0aGlzLnNjcm9sbFRvVG9wQm91bmNlRW5hYmxlZCkge1xuXG5cblxuXHRcdFx0XHR0aGlzLnNjcm9sbEVuYWJsZSA9IGJvdW5jZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vd3hz5q2j5Zyo5LiL5ouJ54q25oCB5pS55Y+Y5aSE55CGXG5cdFx0X2hhbmRsZVd4c1B1bGxpbmdEb3duU3RhdHVzQ2hhbmdlKG9uUHVsbGluZ0Rvd24pIHtcblx0XHRcdHRoaXMud3hzT25QdWxsaW5nRG93biA9IG9uUHVsbGluZ0Rvd247XG5cdFx0XHRpZiAob25QdWxsaW5nRG93biAmJiAhdGhpcy51c2VDaGF0UmVjb3JkTW9kZSkge1xuXHRcdFx0XHR0aGlzLnJlbmRlclByb3BTY3JvbGxUb3AgPSAwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly93eHPmraPlnKjkuIvmi4nlpITnkIZcblx0XHRfaGFuZGxlV3hzUHVsbGluZ0Rvd24oeyBtb3ZlRGlzLCBkaWZmRGlzIH0pe1xuXHRcdFx0dGhpcy5fZW1pdFRvdWNobW92ZSh7IHB1bGxpbmdEaXN0YW5jZTogbW92ZURpcyxkeTogZGlmZkRpcyB9KTtcblx0XHR9LFxuXHRcdC8vd3hz6Kem5pG45pa55ZCR5pS55Y+YXG5cdFx0X2hhbmRsZVRvdWNoRGlyZWN0aW9uQ2hhbmdlKHsgZGlyZWN0aW9uIH0pIHtcblx0XHRcdHRoaXMuJGVtaXQoJ3RvdWNoRGlyZWN0aW9uQ2hhbmdlJyxkaXJlY3Rpb24pO1xuXHRcdH0sXG5cdFx0Ly93eHPpgJrnn6Xmm7TmlrDlhbZwcm9wc1xuXHRcdF9oYW5kbGVQcm9wVXBkYXRlKCl7XG5cdFx0XHR0aGlzLnd4c1Byb3BUeXBlID0gdS5nZXRUaW1lKCkudG9TdHJpbmcoKTtcblx0XHR9LFxuXHRcdC8v5LiL5ouJ5Yi35paw57uT5p2fXG5cdFx0X3JlZnJlc2hlckVuZChzaG91bGRFbmRMb2FkaW5nRGVsYXkgPSB0cnVlLCBmcm9tQWRkRGF0YSA9IGZhbHNlLCBpc1VzZXJQdWxsRG93biA9IGZhbHNlLCBzZXRMb2FkaW5nID0gdHJ1ZSkge1xuXHRcdFx0aWYgKHRoaXMubG9hZGluZ1R5cGUgPT09IEVudW0uTG9hZGluZ1R5cGUuUmVmcmVzaGVyKSB7XG5cdFx0XHRcdGNvbnN0IHJlZnJlc2hlckNvbXBsZXRlRGVsYXkgPSAoZnJvbUFkZERhdGEgJiYgKGlzVXNlclB1bGxEb3duIHx8IHRoaXMuc2hvd1JlZnJlc2hlcldoZW5SZWxvYWQpKSA/IHRoaXMucmVmcmVzaGVyQ29tcGxldGVEZWxheSA6IDA7XG5cdFx0XHRcdGNvbnN0IHJlZnJlc2hlclN0YXR1cyA9IHJlZnJlc2hlckNvbXBsZXRlRGVsYXkgPiAwID8gRW51bS5SZWZyZXNoZXIuQ29tcGxldGUgOiBFbnVtLlJlZnJlc2hlci5EZWZhdWx0O1xuXHRcdFx0XHRpZiAodGhpcy5maW5hbFNob3dSZWZyZXNoZXJXaGVuUmVsb2FkKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RhY2tDb3VudCA9IHRoaXMucmVmcmVzaGVyUmV2ZWFsU3RhY2tDb3VudDtcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hlclJldmVhbFN0YWNrQ291bnQgLS07XG5cdFx0XHRcdFx0aWYgKHN0YWNrQ291bnQgPiAxKSByZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fY2xlYW5SZWZyZXNoZXJFbmRUaW1lb3V0KCk7XG5cdFx0XHRcdHRoaXMucmVmcmVzaGVyRW5kVGltZW91dCA9IHUuZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVmcmVzaGVyU3RhdHVzID0gcmVmcmVzaGVyU3RhdHVzO1xuXHRcdFx0XHR9LCB0aGlzLnJlZnJlc2hlclN0YXR1cyAhPT0gRW51bS5SZWZyZXNoZXIuRGVmYXVsdCAmJiByZWZyZXNoZXJTdGF0dXMgPT09IEVudW0uUmVmcmVzaGVyLkRlZmF1bHQgPyB0aGlzLnJlZnJlc2hlckNvbXBsZXRlRHVyYXRpb24gOiAwKTtcblx0XHRcdFx0XG5cblxuXG5cblxuXHRcdFx0XHR0aGlzLl9jbGVhblJlZnJlc2hlckNvbXBsZXRlVGltZW91dCgpO1xuXHRcdFx0XHR0aGlzLnJlZnJlc2hlckNvbXBsZXRlVGltZW91dCA9IHUuZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBhbmltYXRlRHVyYXRpb24gPSAxO1xuXHRcdFx0XHRcdGNvbnN0IGFuaW1hdGVUeXBlID0gdGhpcy5yZWZyZXNoZXJFbmRCb3VuY2VFbmFibGVkICYmIGZyb21BZGREYXRhID8gJ2N1YmljLWJlemllcigwLjE5LDEuNjQsMC40MiwwLjcyKScgOiAnbGluZWFyJztcblx0XHRcdFx0XHRpZiAoZnJvbUFkZERhdGEpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGVEdXJhdGlvbiA9IHRoaXMucmVmcmVzaGVyRW5kQm91bmNlRW5hYmxlZCA/IHRoaXMucmVmcmVzaGVyQ29tcGxldGVEdXJhdGlvbiAvIDEwMDAgOiB0aGlzLnJlZnJlc2hlckNvbXBsZXRlRHVyYXRpb24gLyAzMDAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hlclRyYW5zaXRpb24gPSBgdHJhbnNmb3JtICR7ZnJvbUFkZERhdGEgPyBhbmltYXRlRHVyYXRpb24gOiB0aGlzLnJlZnJlc2hlckRlZmF1bHREdXJhdGlvbiAvIDEwMDB9cyAke2FuaW1hdGVUeXBlfWA7XG5cblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hlclRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDBweCknO1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudERpcyA9IDA7XG5cblxuXG5cblxuXHRcdFx0XHRcdHRoaXMuX25SZWZyZXNoZXJFbmQoKTtcblxuXHRcdFx0XHRcdHRoaXMubW92ZURpcyA9IDA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHRcdFx0XHRcdHRoaXMuX2VtaXRUb3VjaG1vdmUoeyBwdWxsaW5nRGlzdGFuY2U6IDAsIGR5OiB0aGlzLm1vdmVEaXMgfSk7XG5cdFx0XHRcdH0sIHJlZnJlc2hlckNvbXBsZXRlRGVsYXkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNldExvYWRpbmcpIHtcblx0XHRcdFx0dS5kZWxheSgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdH0sIHNob3VsZEVuZExvYWRpbmdEZWxheSA/IGMuZGVsYXlUaW1lIDogMCk7XG5cdFx0XHRcdGlzVXNlclB1bGxEb3duICYmIHRoaXMuX29uUmVzdG9yZSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/mqKHmi5/nlKjmiLfmiYvliqjop6blj5HkuIvmi4nliLfmlrBcblx0XHRfZG9SZWZyZXNoZXJSZWZyZXNoQW5pbWF0ZSgpIHtcblx0XHRcdHRoaXMuX2NsZWFuUmVmcmVzaGVyQ29tcGxldGVUaW1lb3V0KCk7XG5cblxuXG5cblxuXG5cblxuXHRcdFx0dGhpcy5yZWZyZXNoZXJSZXZlYWxTdGFja0NvdW50ICsrO1xuXG5cdFx0XHR0aGlzLnJlZnJlc2hlclRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dGhpcy5maW5hbFJlZnJlc2hlclRocmVzaG9sZH1weClgO1xuXG5cblxuXG5cdFx0XHR0aGlzLm1vdmVEaXMgPSB0aGlzLmZpbmFsUmVmcmVzaGVyVGhyZXNob2xkO1xuXHRcdFx0dGhpcy5yZWZyZXNoZXJTdGF0dXMgPSBFbnVtLlJlZnJlc2hlci5Mb2FkaW5nO1xuXHRcdFx0dGhpcy5pc1RvdWNobW92aW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMuaXNUb3VjaG1vdmluZ1RpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMuaXNUb3VjaG1vdmluZ1RpbWVvdXQpO1xuXHRcdFx0dGhpcy5fZG9SZWZyZXNoZXJMb2FkKGZhbHNlKTtcblx0XHR9LFxuXHRcdC8v6Kem5Y+R5LiL5ouJ5Yi35pawXG5cdFx0X2RvUmVmcmVzaGVyTG9hZChpc1VzZXJQdWxsRG93biA9IHRydWUpIHtcblx0XHRcdHRoaXMuX29uUmVmcmVzaChmYWxzZSxpc1VzZXJQdWxsRG93bik7XG5cdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXHRcdH0sXG5cblx0XHQvL+iOt+WPluWkhOeQhuWQjueahG1vdmVEaXNcblx0XHRfZ2V0RmluYWxSZWZyZXNoZXJNb3ZlRGlzKG1vdmVEaXMpIHtcblx0XHRcdGxldCBkaWZmRGlzID0gbW92ZURpcyAtIHRoaXMub2xkQ3VycmVudE1vdmVEaXM7XG5cdFx0XHR0aGlzLm9sZEN1cnJlbnRNb3ZlRGlzID0gbW92ZURpcztcblx0XHRcdGlmIChkaWZmRGlzID4gMCkge1xuXHRcdFx0XHRkaWZmRGlzID0gZGlmZkRpcyAqIHRoaXMuZmluYWxSZWZyZXNoZXJQdWxsUmF0ZTtcblx0XHRcdFx0aWYgKHRoaXMuY3VycmVudERpcyA+IHRoaXMuZmluYWxSZWZyZXNoZXJUaHJlc2hvbGQpIHtcblx0XHRcdFx0XHRkaWZmRGlzID0gZGlmZkRpcyAqICgxIC0gdGhpcy5maW5hbFJlZnJlc2hlck91dFJhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRkaWZmRGlzID0gZGlmZkRpcyA+IDEwMCA/IGRpZmZEaXMgLyAxMDAgOiBkaWZmRGlzO1xuXHRcdFx0dGhpcy5jdXJyZW50RGlzICs9IGRpZmZEaXM7XG5cdFx0XHR0aGlzLmN1cnJlbnREaXMgPSBNYXRoLm1heCgwLCB0aGlzLmN1cnJlbnREaXMpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudERpcztcblx0XHR9LFxuXHRcdC8v5Yik5patdG91Y2jmiYvlir/mmK/lkKbopoHop6blj5Fcblx0XHRfdG91Y2hEaXNhYmxlZCgpIHtcblx0XHRcdGNvbnN0IGNoZWNrT2xkU2Nyb2xsVG9wID0gdGhpcy5vbGRTY3JvbGxUb3AgPiA1O1xuXHRcdFx0cmV0dXJuIHRoaXMubG9hZGluZyB8fCB0aGlzLmlzUmVmcmVzaGVySW5Db21wbGV0ZSB8fCB0aGlzLnVzZUNoYXRSZWNvcmRNb2RlIHx8ICF0aGlzLnJlZnJlc2hlckVuYWJsZWQgfHwgIXRoaXMudXNlQ3VzdG9tUmVmcmVzaGVyIHx8KHRoaXMudXNlUGFnZVNjcm9sbCAmJiB0aGlzLnVzZUN1c3RvbVJlZnJlc2hlciAmJiB0aGlzLnBhZ2VTY3JvbGxUb3AgPiAxMCkgfHwgKCEodGhpcy51c2VQYWdlU2Nyb2xsICYmIHRoaXMudXNlQ3VzdG9tUmVmcmVzaGVyKSAmJiBjaGVja09sZFNjcm9sbFRvcCk7XG5cdFx0fSxcblxuXHRcdC8v5pu05paw6Ieq5a6a5LmJ5LiL5ouJ5Yi35pawdmlld+mrmOW6plxuXHRcdF91cGRhdGVDdXN0b21SZWZyZXNoZXJIZWlnaHQoKSB7XG5cdFx0XHR0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnLnpwLWN1c3RvbS1yZWZyZXNoZXItc2xvdC12aWV3JykudGhlbigocmVzKSA9PiB7XG5cdFx0XHRcdHRoaXMuY3VzdG9tUmVmcmVzaGVySGVpZ2h0ID0gcmVzID8gcmVzWzBdLmhlaWdodCA6IDA7XG5cdFx0XHRcdHRoaXMuc2hvd0N1c3RvbVJlZnJlc2hlciA9IHRoaXMuY3VzdG9tUmVmcmVzaGVySGVpZ2h0ID4gMDtcblx0XHRcdFx0aWYgKHRoaXMuZG9SZWZyZXNoQW5pbWF0ZUFmdGVyKSB7XG5cdFx0XHRcdFx0dGhpcy5kb1JlZnJlc2hBbmltYXRlQWZ0ZXIgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLl9kb1JlZnJlc2hlclJlZnJlc2hBbmltYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0Ly/lj5HlsIRwdWxsaW5nRG93buS6i+S7tlxuXHRcdF9lbWl0VG91Y2htb3ZlKGUpIHtcblxuXG5cblx0XHRcdGUucmF0ZSA9IGUudmlld0hlaWdodCA+IDAgPyBlLnB1bGxpbmdEaXN0YW5jZSAvIGUudmlld0hlaWdodCA6IDA7XG5cdFx0XHR0aGlzLmhhc1RvdWNobW92ZSAmJiB0aGlzLm9sZFB1bGxpbmdEaXN0YW5jZSAhPT0gZS5wdWxsaW5nRGlzdGFuY2UgJiYgdGhpcy4kZW1pdCgncmVmcmVzaGVyVG91Y2htb3ZlJywgZSk7XG5cdFx0XHR0aGlzLm9sZFB1bGxpbmdEaXN0YW5jZSA9IGUucHVsbGluZ0Rpc3RhbmNlO1xuXHRcdH0sXG5cdFx0Ly/muIXpmaRyZWZyZXNoZXJDb21wbGV0ZVRpbWVvdXRcblx0XHRfY2xlYW5SZWZyZXNoZXJDb21wbGV0ZVRpbWVvdXQoKSB7XG5cdFx0XHR0aGlzLnJlZnJlc2hlckNvbXBsZXRlVGltZW91dCA9IHRoaXMuX2NsZWFuVGltZW91dCh0aGlzLnJlZnJlc2hlckNvbXBsZXRlVGltZW91dCk7XG5cblx0XHRcdHRoaXMuX25SZWZyZXNoZXJFbmQoZmFsc2UpO1xuXG5cdFx0fSxcblx0XHQvL+a4hemZpHJlZnJlc2hlckVuZFRpbWVvdXRcblx0XHRfY2xlYW5SZWZyZXNoZXJFbmRUaW1lb3V0KCkge1xuXHRcdFx0dGhpcy5yZWZyZXNoZXJFbmRUaW1lb3V0ID0gdGhpcy5fY2xlYW5UaW1lb3V0KHRoaXMucmVmcmVzaGVyRW5kVGltZW91dCk7XG5cdFx0fSxcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///90\n");

/***/ }),
/* 91 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/modules/load-more.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 43));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 45));\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! .././z-paging-utils */ 47));\nvar _zPagingEnum = _interopRequireDefault(__webpack_require__(/*! .././z-paging-enum */ 57));\n// [z-paging]滚动到底部加载更多模块\nvar _default2 = {\n  props: {\n    //自定义底部加载更多样式\n    loadingMoreCustomStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('loadingMoreCustomStyle', {});\n      }\n    },\n    //自定义底部加载更多文字样式\n    loadingMoreTitleCustomStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('loadingMoreTitleCustomStyle', {});\n      }\n    },\n    //自定义底部加载更多加载中动画样式\n    loadingMoreLoadingIconCustomStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('loadingMoreLoadingIconCustomStyle', {});\n      }\n    },\n    //自定义底部加载更多加载中动画图标类型，可选flower或circle，默认为flower\n    loadingMoreLoadingIconType: {\n      type: String,\n      default: _zPagingUtils.default.gc('loadingMoreLoadingIconType', 'flower')\n    },\n    //自定义底部加载更多加载中动画图标图片\n    loadingMoreLoadingIconCustomImage: {\n      type: String,\n      default: _zPagingUtils.default.gc('loadingMoreLoadingIconCustomImage', '')\n    },\n    //底部加载更多加载中view是否展示旋转动画，默认为是\n    loadingMoreLoadingAnimated: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('loadingMoreLoadingAnimated', true)\n    },\n    //是否启用加载更多数据(含滑动到底部加载更多数据和点击加载更多数据)，默认为是\n    loadingMoreEnabled: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('loadingMoreEnabled', true)\n    },\n    //是否启用滑动到底部加载更多数据，默认为是\n    toBottomLoadingMoreEnabled: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('toBottomLoadingMoreEnabled', true)\n    },\n    //滑动到底部状态为默认状态时，以加载中的状态展示，默认为否。若设置为是，可避免滚动到底部看到默认状态然后立刻变为加载中状态的问题，但分页数量未超过一屏时，不会显示【点击加载更多】\n    loadingMoreDefaultAsLoading: {\n      type: [Boolean],\n      default: _zPagingUtils.default.gc('loadingMoreDefaultAsLoading', false)\n    },\n    //滑动到底部\"默认\"文字，默认为【点击加载更多】\n    loadingMoreDefaultText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('loadingMoreDefaultText', null)\n    },\n    //滑动到底部\"加载中\"文字，默认为【正在加载...】\n    loadingMoreLoadingText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('loadingMoreLoadingText', null)\n    },\n    //滑动到底部\"没有更多\"文字，默认为【没有更多了】\n    loadingMoreNoMoreText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('loadingMoreNoMoreText', null)\n    },\n    //滑动到底部\"加载失败\"文字，默认为【加载失败，点击重新加载】\n    loadingMoreFailText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('loadingMoreFailText', null)\n    },\n    //当没有更多数据且分页内容未超出z-paging时是否隐藏没有更多数据的view，默认为否\n    hideNoMoreInside: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('hideNoMoreInside', false)\n    },\n    //当没有更多数据且分页数组长度少于这个值时，隐藏没有更多数据的view，默认为0，代表不限制。\n    hideNoMoreByLimit: {\n      type: Number,\n      default: _zPagingUtils.default.gc('hideNoMoreByLimit', 0)\n    },\n    //是否显示默认的加载更多text，默认为是\n    showDefaultLoadingMoreText: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('showDefaultLoadingMoreText', true)\n    },\n    //是否显示没有更多数据的view\n    showLoadingMoreNoMoreView: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('showLoadingMoreNoMoreView', true)\n    },\n    //是否显示没有更多数据的分割线，默认为是\n    showLoadingMoreNoMoreLine: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('showLoadingMoreNoMoreLine', true)\n    },\n    //自定义底部没有更多数据的分割线样式\n    loadingMoreNoMoreLineCustomStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('loadingMoreNoMoreLineCustomStyle', {});\n      }\n    },\n    //当分页未满一屏时，是否自动加载更多，默认为否(nvue无效)\n    insideMore: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('insideMore', false)\n    },\n    //距底部/右边多远时（单位px），触发 scrolltolower 事件，默认为100rpx\n    lowerThreshold: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('lowerThreshold', '100rpx')\n    }\n  },\n  data: function data() {\n    return {\n      M: _zPagingEnum.default.More,\n      //底部加载更多状态\n      loadingStatus: _zPagingEnum.default.More.Default,\n      loadingStatusAfterRender: _zPagingEnum.default.More.Default,\n      loadingMoreTimeStamp: 0,\n      loadingMoreDefaultSlot: null,\n      showLoadingMore: false,\n      customNoMore: -1\n    };\n  },\n  computed: {\n    zLoadMoreConfig: function zLoadMoreConfig() {\n      return {\n        status: this.loadingStatusAfterRender,\n        defaultAsLoading: this.loadingMoreDefaultAsLoading,\n        defaultThemeStyle: this.finalLoadingMoreThemeStyle,\n        customStyle: this.loadingMoreCustomStyle,\n        titleCustomStyle: this.loadingMoreTitleCustomStyle,\n        iconCustomStyle: this.loadingMoreLoadingIconCustomStyle,\n        loadingIconType: this.loadingMoreLoadingIconType,\n        loadingIconCustomImage: this.loadingMoreLoadingIconCustomImage,\n        loadingAnimated: this.loadingMoreLoadingAnimated,\n        showNoMoreLine: this.showLoadingMoreNoMoreLine,\n        noMoreLineCustomStyle: this.loadingMoreNoMoreLineCustomStyle,\n        defaultText: this.finalLoadingMoreDefaultText,\n        loadingText: this.finalLoadingMoreLoadingText,\n        noMoreText: this.finalLoadingMoreNoMoreText,\n        failText: this.finalLoadingMoreFailText,\n        hideContent: !this.loadingMoreDefaultAsLoading && this.listRendering\n      };\n    },\n    finalLoadingMoreThemeStyle: function finalLoadingMoreThemeStyle() {\n      return this.loadingMoreThemeStyle.length ? this.loadingMoreThemeStyle : this.defaultThemeStyle;\n    },\n    showLoadingMoreDefault: function showLoadingMoreDefault() {\n      return this._showLoadingMore('Default');\n    },\n    showLoadingMoreLoading: function showLoadingMoreLoading() {\n      return this._showLoadingMore('Loading');\n    },\n    showLoadingMoreNoMore: function showLoadingMoreNoMore() {\n      return this._showLoadingMore('NoMore');\n    },\n    showLoadingMoreFail: function showLoadingMoreFail() {\n      return this._showLoadingMore('Fail');\n    },\n    showLoadingMoreCustom: function showLoadingMoreCustom() {\n      return this._showLoadingMore('Custom');\n    }\n  },\n  methods: {\n    //页面滚动到底部时通知z-paging进行进一步处理\n    pageReachBottom: function pageReachBottom() {\n      !this.useChatRecordMode && this._onLoadingMore('toBottom');\n    },\n    //手动触发上拉加载更多(非必须，可依据具体需求使用)\n    doLoadMore: function doLoadMore(type) {\n      this._onLoadingMore(type);\n    },\n    //通过@scroll事件检测是否滚动到了底部\n    _checkScrolledToBottom: function _checkScrolledToBottom(scrollDiff) {\n      var _this = this;\n      var checked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      if (this.cacheScrollNodeHeight === -1) {\n        this._getNodeClientRect('.zp-scroll-view').then(function (res) {\n          if (res) {\n            var pageScrollNodeHeight = res[0].height;\n            _this.cacheScrollNodeHeight = pageScrollNodeHeight;\n            if (scrollDiff - pageScrollNodeHeight <= _this.finalLowerThreshold) {\n              _this._onLoadingMore('toBottom');\n            }\n          }\n        });\n      } else {\n        if (scrollDiff - this.cacheScrollNodeHeight <= this.finalLowerThreshold) {\n          this._onLoadingMore('toBottom');\n        } else if (scrollDiff - this.cacheScrollNodeHeight <= 500 && !checked) {\n          _zPagingUtils.default.delay(function () {\n            _this._getNodeClientRect('.zp-scroll-view', true, true).then(function (res) {\n              _this.oldScrollTop = res[0].scrollTop;\n              var newScrollDiff = res[0].scrollHeight - _this.oldScrollTop;\n              _this._checkScrolledToBottom(newScrollDiff, true);\n            });\n          }, 150, 'checkScrolledToBottomDelay');\n        }\n      }\n    },\n    //触发加载更多时调用,from:0-滑动到底部触发；1-点击加载更多触发\n    _onLoadingMore: function _onLoadingMore() {\n      var _this2 = this;\n      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'click';\n      if (from === 'toBottom' && !this.scrollToBottomBounceEnabled && this.scrollEnable) {\n        this.scrollEnable = false;\n        this.$nextTick(function () {\n          _this2.scrollEnable = true;\n        });\n      }\n      this.$emit('scrolltolower', from);\n      if (from === 'toBottom' && (!this.toBottomLoadingMoreEnabled || this.useChatRecordMode)) return;\n      if (this.refresherOnly || !this.loadingMoreEnabled || !(this.loadingStatus === _zPagingEnum.default.More.Default || this.loadingStatus === _zPagingEnum.default.More.Fail) || this.loading) return;\n      this._doLoadingMore();\n    },\n    //处理开始加载更多\n    _doLoadingMore: function _doLoadingMore() {\n      var _this3 = this;\n      if (this.pageNo >= this.defaultPageNo && this.loadingStatus !== _zPagingEnum.default.More.NoMore) {\n        this.pageNo++;\n        this._startLoading(false);\n        if (this.isLocalPaging) {\n          this._localPagingQueryList(this.pageNo, this.defaultPageSize, this.localPagingLoadingTime, function (res) {\n            _this3.completeByTotal(res, _this3.totalLocalPagingList.length);\n          });\n        } else {\n          this._emitQuery(this.pageNo, this.defaultPageSize, _zPagingEnum.default.QueryFrom.LoadingMore);\n          this._callMyParentQuery();\n        }\n        this.loadingType = _zPagingEnum.default.LoadingType.LoadingMore;\n      }\n    },\n    //(预处理)判断当没有更多数据且分页内容未超出z-paging时是否显示没有更多数据的view\n    _preCheckShowNoMoreInside: function _preCheckShowNoMoreInside(newVal, scrollViewNode, pagingContainerNode) {\n      var _this4 = this;\n      if (this.loadingStatus === _zPagingEnum.default.More.NoMore && this.hideNoMoreByLimit > 0 && newVal.length) {\n        this.showLoadingMore = newVal.length > this.hideNoMoreByLimit;\n      } else if (this.loadingStatus === _zPagingEnum.default.More.NoMore && this.hideNoMoreInside && newVal.length || this.insideMore && this.insideOfPaging !== false && newVal.length) {\n        this.$nextTick(function () {\n          _this4._checkShowNoMoreInside(newVal, scrollViewNode, pagingContainerNode);\n        });\n        if (this.insideMore && this.insideOfPaging !== false && newVal.length) {\n          this.showLoadingMore = newVal.length;\n        }\n      } else {\n        this.showLoadingMore = newVal.length;\n      }\n    },\n    //判断当没有更多数据且分页内容未超出z-paging时是否显示没有更多数据的view\n    _checkShowNoMoreInside: function _checkShowNoMoreInside(totalData, oldScrollViewNode, oldPagingContainerNode) {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var scrollViewNode, scrollViewTotalH, pagingContainerNode, pagingContainerH, scrollViewH;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.t0 = oldScrollViewNode;\n                if (_context.t0) {\n                  _context.next = 6;\n                  break;\n                }\n                _context.next = 5;\n                return _this5._getNodeClientRect('.zp-scroll-view');\n              case 5:\n                _context.t0 = _context.sent;\n              case 6:\n                scrollViewNode = _context.t0;\n                if (!_this5.usePageScroll) {\n                  _context.next = 11;\n                  break;\n                }\n                if (scrollViewNode) {\n                  scrollViewTotalH = scrollViewNode[0].top + scrollViewNode[0].height;\n                  _this5.insideOfPaging = scrollViewTotalH < _this5.windowHeight;\n                  if (_this5.hideNoMoreInside) {\n                    _this5.showLoadingMore = !_this5.insideOfPaging;\n                  }\n                  _this5._updateInsideOfPaging();\n                }\n                _context.next = 22;\n                break;\n              case 11:\n                _context.t1 = oldPagingContainerNode;\n                if (_context.t1) {\n                  _context.next = 16;\n                  break;\n                }\n                _context.next = 15;\n                return _this5._getNodeClientRect('.zp-paging-container-content');\n              case 15:\n                _context.t1 = _context.sent;\n              case 16:\n                pagingContainerNode = _context.t1;\n                pagingContainerH = pagingContainerNode ? pagingContainerNode[0].height : 0;\n                scrollViewH = scrollViewNode ? scrollViewNode[0].height : 0;\n                _this5.insideOfPaging = pagingContainerH < scrollViewH;\n                if (_this5.hideNoMoreInside) {\n                  _this5.showLoadingMore = !_this5.insideOfPaging;\n                }\n                _this5._updateInsideOfPaging();\n              case 22:\n                _context.next = 29;\n                break;\n              case 24:\n                _context.prev = 24;\n                _context.t2 = _context[\"catch\"](0);\n                _this5.insideOfPaging = !totalData.length;\n                if (_this5.hideNoMoreInside) {\n                  _this5.showLoadingMore = !_this5.insideOfPaging;\n                }\n                _this5._updateInsideOfPaging();\n              case 29:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 24]]);\n      }))();\n    },\n    //是否要展示上拉加载更多view\n    _showLoadingMore: function _showLoadingMore(type) {\n      if (!this.showLoadingMoreWhenReload && (!(this.loadingStatus === _zPagingEnum.default.More.Default ? this.nShowBottom : true) || !this.realTotalData.length)) return false;\n      if ((!this.showLoadingMoreWhenReload || this.isUserPullDown || this.loadingStatus !== _zPagingEnum.default.More.Loading) && !this.showLoadingMore || !this.loadingMoreEnabled && (!this.showLoadingMoreWhenReload || this.isUserPullDown || this.loadingStatus !== _zPagingEnum.default.More.Loading) || this.refresherOnly) {\n        return false;\n      }\n      if (this.useChatRecordMode && type !== 'Loading') return false;\n      if (!this.$slots) return false;\n      if (type === 'Custom') {\n        return this.showDefaultLoadingMoreText && !(this.loadingStatus === _zPagingEnum.default.More.NoMore && !this.showLoadingMoreNoMoreView);\n      }\n      var res = this.loadingStatus === _zPagingEnum.default.More[type] && this.$slots[\"loadingMore\".concat(type)] && (type === 'NoMore' ? this.showLoadingMoreNoMoreView : true);\n      if (res) {\n        if (!this.isIos) {\n          this.nLoadingMoreFixedHeight = false;\n        }\n      }\n      return res;\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy9tb2R1bGVzL2xvYWQtbW9yZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImxvYWRpbmdNb3JlQ3VzdG9tU3R5bGUiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInUiLCJnYyIsImxvYWRpbmdNb3JlVGl0bGVDdXN0b21TdHlsZSIsImxvYWRpbmdNb3JlTG9hZGluZ0ljb25DdXN0b21TdHlsZSIsImxvYWRpbmdNb3JlTG9hZGluZ0ljb25UeXBlIiwiU3RyaW5nIiwibG9hZGluZ01vcmVMb2FkaW5nSWNvbkN1c3RvbUltYWdlIiwibG9hZGluZ01vcmVMb2FkaW5nQW5pbWF0ZWQiLCJCb29sZWFuIiwibG9hZGluZ01vcmVFbmFibGVkIiwidG9Cb3R0b21Mb2FkaW5nTW9yZUVuYWJsZWQiLCJsb2FkaW5nTW9yZURlZmF1bHRBc0xvYWRpbmciLCJsb2FkaW5nTW9yZURlZmF1bHRUZXh0IiwibG9hZGluZ01vcmVMb2FkaW5nVGV4dCIsImxvYWRpbmdNb3JlTm9Nb3JlVGV4dCIsImxvYWRpbmdNb3JlRmFpbFRleHQiLCJoaWRlTm9Nb3JlSW5zaWRlIiwiaGlkZU5vTW9yZUJ5TGltaXQiLCJOdW1iZXIiLCJzaG93RGVmYXVsdExvYWRpbmdNb3JlVGV4dCIsInNob3dMb2FkaW5nTW9yZU5vTW9yZVZpZXciLCJzaG93TG9hZGluZ01vcmVOb01vcmVMaW5lIiwibG9hZGluZ01vcmVOb01vcmVMaW5lQ3VzdG9tU3R5bGUiLCJpbnNpZGVNb3JlIiwibG93ZXJUaHJlc2hvbGQiLCJkYXRhIiwiTSIsIkVudW0iLCJNb3JlIiwibG9hZGluZ1N0YXR1cyIsIkRlZmF1bHQiLCJsb2FkaW5nU3RhdHVzQWZ0ZXJSZW5kZXIiLCJsb2FkaW5nTW9yZVRpbWVTdGFtcCIsImxvYWRpbmdNb3JlRGVmYXVsdFNsb3QiLCJzaG93TG9hZGluZ01vcmUiLCJjdXN0b21Ob01vcmUiLCJjb21wdXRlZCIsInpMb2FkTW9yZUNvbmZpZyIsInN0YXR1cyIsImRlZmF1bHRBc0xvYWRpbmciLCJkZWZhdWx0VGhlbWVTdHlsZSIsImZpbmFsTG9hZGluZ01vcmVUaGVtZVN0eWxlIiwiY3VzdG9tU3R5bGUiLCJ0aXRsZUN1c3RvbVN0eWxlIiwiaWNvbkN1c3RvbVN0eWxlIiwibG9hZGluZ0ljb25UeXBlIiwibG9hZGluZ0ljb25DdXN0b21JbWFnZSIsImxvYWRpbmdBbmltYXRlZCIsInNob3dOb01vcmVMaW5lIiwibm9Nb3JlTGluZUN1c3RvbVN0eWxlIiwiZGVmYXVsdFRleHQiLCJmaW5hbExvYWRpbmdNb3JlRGVmYXVsdFRleHQiLCJsb2FkaW5nVGV4dCIsImZpbmFsTG9hZGluZ01vcmVMb2FkaW5nVGV4dCIsIm5vTW9yZVRleHQiLCJmaW5hbExvYWRpbmdNb3JlTm9Nb3JlVGV4dCIsImZhaWxUZXh0IiwiZmluYWxMb2FkaW5nTW9yZUZhaWxUZXh0IiwiaGlkZUNvbnRlbnQiLCJsaXN0UmVuZGVyaW5nIiwibG9hZGluZ01vcmVUaGVtZVN0eWxlIiwibGVuZ3RoIiwic2hvd0xvYWRpbmdNb3JlRGVmYXVsdCIsIl9zaG93TG9hZGluZ01vcmUiLCJzaG93TG9hZGluZ01vcmVMb2FkaW5nIiwic2hvd0xvYWRpbmdNb3JlTm9Nb3JlIiwic2hvd0xvYWRpbmdNb3JlRmFpbCIsInNob3dMb2FkaW5nTW9yZUN1c3RvbSIsIm1ldGhvZHMiLCJwYWdlUmVhY2hCb3R0b20iLCJ1c2VDaGF0UmVjb3JkTW9kZSIsIl9vbkxvYWRpbmdNb3JlIiwiZG9Mb2FkTW9yZSIsIl9jaGVja1Njcm9sbGVkVG9Cb3R0b20iLCJzY3JvbGxEaWZmIiwiY2hlY2tlZCIsImNhY2hlU2Nyb2xsTm9kZUhlaWdodCIsIl9nZXROb2RlQ2xpZW50UmVjdCIsInRoZW4iLCJyZXMiLCJwYWdlU2Nyb2xsTm9kZUhlaWdodCIsImhlaWdodCIsImZpbmFsTG93ZXJUaHJlc2hvbGQiLCJkZWxheSIsIm9sZFNjcm9sbFRvcCIsInNjcm9sbFRvcCIsIm5ld1Njcm9sbERpZmYiLCJzY3JvbGxIZWlnaHQiLCJmcm9tIiwic2Nyb2xsVG9Cb3R0b21Cb3VuY2VFbmFibGVkIiwic2Nyb2xsRW5hYmxlIiwiJG5leHRUaWNrIiwiJGVtaXQiLCJyZWZyZXNoZXJPbmx5IiwiRmFpbCIsImxvYWRpbmciLCJfZG9Mb2FkaW5nTW9yZSIsInBhZ2VObyIsImRlZmF1bHRQYWdlTm8iLCJOb01vcmUiLCJfc3RhcnRMb2FkaW5nIiwiaXNMb2NhbFBhZ2luZyIsIl9sb2NhbFBhZ2luZ1F1ZXJ5TGlzdCIsImRlZmF1bHRQYWdlU2l6ZSIsImxvY2FsUGFnaW5nTG9hZGluZ1RpbWUiLCJjb21wbGV0ZUJ5VG90YWwiLCJ0b3RhbExvY2FsUGFnaW5nTGlzdCIsIl9lbWl0UXVlcnkiLCJRdWVyeUZyb20iLCJMb2FkaW5nTW9yZSIsIl9jYWxsTXlQYXJlbnRRdWVyeSIsImxvYWRpbmdUeXBlIiwiTG9hZGluZ1R5cGUiLCJfcHJlQ2hlY2tTaG93Tm9Nb3JlSW5zaWRlIiwibmV3VmFsIiwic2Nyb2xsVmlld05vZGUiLCJwYWdpbmdDb250YWluZXJOb2RlIiwiaW5zaWRlT2ZQYWdpbmciLCJfY2hlY2tTaG93Tm9Nb3JlSW5zaWRlIiwidG90YWxEYXRhIiwib2xkU2Nyb2xsVmlld05vZGUiLCJvbGRQYWdpbmdDb250YWluZXJOb2RlIiwidXNlUGFnZVNjcm9sbCIsInNjcm9sbFZpZXdUb3RhbEgiLCJ0b3AiLCJ3aW5kb3dIZWlnaHQiLCJfdXBkYXRlSW5zaWRlT2ZQYWdpbmciLCJwYWdpbmdDb250YWluZXJIIiwic2Nyb2xsVmlld0giLCJzaG93TG9hZGluZ01vcmVXaGVuUmVsb2FkIiwiblNob3dCb3R0b20iLCJyZWFsVG90YWxEYXRhIiwiaXNVc2VyUHVsbERvd24iLCJMb2FkaW5nIiwiJHNsb3RzIiwiaXNJb3MiLCJuTG9hZGluZ01vcmVGaXhlZEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUZBO0FBQUEsZ0JBSWU7RUFDZEEsS0FBSyxFQUFFO0lBQ047SUFDQUMsc0JBQXNCLEVBQUU7TUFDdkJDLElBQUksRUFBRUMsTUFBTTtNQUNaQyxPQUFPLEVBQUUsb0JBQVc7UUFDbkIsT0FBT0MscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFDO01BQzFDO0lBQ0QsQ0FBQztJQUNEO0lBQ0FDLDJCQUEyQixFQUFFO01BQzVCTCxJQUFJLEVBQUVDLE1BQU07TUFDWkMsT0FBTyxFQUFFLG9CQUFXO1FBQ25CLE9BQU9DLHFCQUFDLENBQUNDLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUMvQztJQUNELENBQUM7SUFDRDtJQUNBRSxpQ0FBaUMsRUFBRTtNQUNsQ04sSUFBSSxFQUFFQyxNQUFNO01BQ1pDLE9BQU8sRUFBRSxvQkFBVztRQUNuQixPQUFPQyxxQkFBQyxDQUFDQyxFQUFFLENBQUMsbUNBQW1DLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDckQ7SUFDRCxDQUFDO0lBQ0Q7SUFDQUcsMEJBQTBCLEVBQUU7TUFDM0JQLElBQUksRUFBRVEsTUFBTTtNQUNaTixPQUFPLEVBQUVDLHFCQUFDLENBQUNDLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxRQUFRO0lBQ3JELENBQUM7SUFDRDtJQUNBSyxpQ0FBaUMsRUFBRTtNQUNsQ1QsSUFBSSxFQUFFUSxNQUFNO01BQ1pOLE9BQU8sRUFBRUMscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEVBQUU7SUFDdEQsQ0FBQztJQUNEO0lBQ0FNLDBCQUEwQixFQUFFO01BQzNCVixJQUFJLEVBQUVXLE9BQU87TUFDYlQsT0FBTyxFQUFFQyxxQkFBQyxDQUFDQyxFQUFFLENBQUMsNEJBQTRCLEVBQUUsSUFBSTtJQUNqRCxDQUFDO0lBQ0Q7SUFDQVEsa0JBQWtCLEVBQUU7TUFDbkJaLElBQUksRUFBRVcsT0FBTztNQUNiVCxPQUFPLEVBQUVDLHFCQUFDLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJO0lBQ3pDLENBQUM7SUFDRDtJQUNBUywwQkFBMEIsRUFBRTtNQUMzQmIsSUFBSSxFQUFFVyxPQUFPO01BQ2JULE9BQU8sRUFBRUMscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLDRCQUE0QixFQUFFLElBQUk7SUFDakQsQ0FBQztJQUNEO0lBQ0FVLDJCQUEyQixFQUFFO01BQzVCZCxJQUFJLEVBQUUsQ0FBQ1csT0FBTyxDQUFDO01BQ2ZULE9BQU8sRUFBRUMscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEtBQUs7SUFDbkQsQ0FBQztJQUNEO0lBQ0FXLHNCQUFzQixFQUFFO01BQ3ZCZixJQUFJLEVBQUUsQ0FBQ1EsTUFBTSxFQUFFUCxNQUFNLENBQUM7TUFDdEJDLE9BQU8sRUFBRUMscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLHdCQUF3QixFQUFFLElBQUk7SUFDN0MsQ0FBQztJQUNEO0lBQ0FZLHNCQUFzQixFQUFFO01BQ3ZCaEIsSUFBSSxFQUFFLENBQUNRLE1BQU0sRUFBRVAsTUFBTSxDQUFDO01BQ3RCQyxPQUFPLEVBQUVDLHFCQUFDLENBQUNDLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJO0lBQzdDLENBQUM7SUFDRDtJQUNBYSxxQkFBcUIsRUFBRTtNQUN0QmpCLElBQUksRUFBRSxDQUFDUSxNQUFNLEVBQUVQLE1BQU0sQ0FBQztNQUN0QkMsT0FBTyxFQUFFQyxxQkFBQyxDQUFDQyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsSUFBSTtJQUM1QyxDQUFDO0lBQ0Q7SUFDQWMsbUJBQW1CLEVBQUU7TUFDcEJsQixJQUFJLEVBQUUsQ0FBQ1EsTUFBTSxFQUFFUCxNQUFNLENBQUM7TUFDdEJDLE9BQU8sRUFBRUMscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLHFCQUFxQixFQUFFLElBQUk7SUFDMUMsQ0FBQztJQUNEO0lBQ0FlLGdCQUFnQixFQUFFO01BQ2pCbkIsSUFBSSxFQUFFVyxPQUFPO01BQ2JULE9BQU8sRUFBRUMscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUs7SUFDeEMsQ0FBQztJQUNEO0lBQ0FnQixpQkFBaUIsRUFBRTtNQUNsQnBCLElBQUksRUFBRXFCLE1BQU07TUFDWm5CLE9BQU8sRUFBRUMscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNEO0lBQ0FrQiwwQkFBMEIsRUFBRTtNQUMzQnRCLElBQUksRUFBRVcsT0FBTztNQUNiVCxPQUFPLEVBQUVDLHFCQUFDLENBQUNDLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJO0lBQ2pELENBQUM7SUFDRDtJQUNBbUIseUJBQXlCLEVBQUU7TUFDMUJ2QixJQUFJLEVBQUVXLE9BQU87TUFDYlQsT0FBTyxFQUFFQyxxQkFBQyxDQUFDQyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsSUFBSTtJQUNoRCxDQUFDO0lBQ0Q7SUFDQW9CLHlCQUF5QixFQUFFO01BQzFCeEIsSUFBSSxFQUFFVyxPQUFPO01BQ2JULE9BQU8sRUFBRUMscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLDJCQUEyQixFQUFFLElBQUk7SUFDaEQsQ0FBQztJQUNEO0lBQ0FxQixnQ0FBZ0MsRUFBRTtNQUNqQ3pCLElBQUksRUFBRUMsTUFBTTtNQUNaQyxPQUFPLEVBQUUsb0JBQVc7UUFDbkIsT0FBT0MscUJBQUMsQ0FBQ0MsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLENBQUMsQ0FBQyxDQUFDO01BQ3BEO0lBQ0QsQ0FBQztJQUNEO0lBQ0FzQixVQUFVLEVBQUU7TUFDWDFCLElBQUksRUFBRVcsT0FBTztNQUNiVCxPQUFPLEVBQUVDLHFCQUFDLENBQUNDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsS0FBSztJQUNsQyxDQUFDO0lBQ0Q7SUFDQXVCLGNBQWMsRUFBRTtNQUNmM0IsSUFBSSxFQUFFLENBQUNxQixNQUFNLEVBQUViLE1BQU0sQ0FBQztNQUN0Qk4sT0FBTyxFQUFFQyxxQkFBQyxDQUFDQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsUUFBUTtJQUN6QztFQUNELENBQUM7RUFDRHdCLElBQUksa0JBQUc7SUFDTixPQUFPO01BQ05DLENBQUMsRUFBRUMsb0JBQUksQ0FBQ0MsSUFBSTtNQUNaO01BQ0FDLGFBQWEsRUFBRUYsb0JBQUksQ0FBQ0MsSUFBSSxDQUFDRSxPQUFPO01BQ2hDQyx3QkFBd0IsRUFBRUosb0JBQUksQ0FBQ0MsSUFBSSxDQUFDRSxPQUFPO01BQzNDRSxvQkFBb0IsRUFBRSxDQUFDO01BQ3ZCQyxzQkFBc0IsRUFBRSxJQUFJO01BQzVCQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsWUFBWSxFQUFFLENBQUM7SUFDaEIsQ0FBQztFQUNGLENBQUM7RUFDREMsUUFBUSxFQUFFO0lBQ1RDLGVBQWUsNkJBQUc7TUFDakIsT0FBTztRQUNOQyxNQUFNLEVBQUUsSUFBSSxDQUFDUCx3QkFBd0I7UUFDckNRLGdCQUFnQixFQUFFLElBQUksQ0FBQzVCLDJCQUEyQjtRQUNsRDZCLGlCQUFpQixFQUFFLElBQUksQ0FBQ0MsMEJBQTBCO1FBQ2xEQyxXQUFXLEVBQUUsSUFBSSxDQUFDOUMsc0JBQXNCO1FBQ3hDK0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDekMsMkJBQTJCO1FBQ2xEMEMsZUFBZSxFQUFFLElBQUksQ0FBQ3pDLGlDQUFpQztRQUN2RDBDLGVBQWUsRUFBRSxJQUFJLENBQUN6QywwQkFBMEI7UUFDaEQwQyxzQkFBc0IsRUFBRSxJQUFJLENBQUN4QyxpQ0FBaUM7UUFDOUR5QyxlQUFlLEVBQUUsSUFBSSxDQUFDeEMsMEJBQTBCO1FBQ2hEeUMsY0FBYyxFQUFFLElBQUksQ0FBQzNCLHlCQUF5QjtRQUM5QzRCLHFCQUFxQixFQUFFLElBQUksQ0FBQzNCLGdDQUFnQztRQUM1RDRCLFdBQVcsRUFBRSxJQUFJLENBQUNDLDJCQUEyQjtRQUM3Q0MsV0FBVyxFQUFFLElBQUksQ0FBQ0MsMkJBQTJCO1FBQzdDQyxVQUFVLEVBQUUsSUFBSSxDQUFDQywwQkFBMEI7UUFDM0NDLFFBQVEsRUFBRSxJQUFJLENBQUNDLHdCQUF3QjtRQUN2Q0MsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDL0MsMkJBQTJCLElBQUksSUFBSSxDQUFDZ0Q7TUFDeEQsQ0FBQztJQUNGLENBQUM7SUFDRGxCLDBCQUEwQix3Q0FBRztNQUM1QixPQUFPLElBQUksQ0FBQ21CLHFCQUFxQixDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDRCxxQkFBcUIsR0FBRyxJQUFJLENBQUNwQixpQkFBaUI7SUFDL0YsQ0FBQztJQUNEc0Isc0JBQXNCLG9DQUFHO01BQ3hCLE9BQU8sSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNEQyxzQkFBc0Isb0NBQUc7TUFDeEIsT0FBTyxJQUFJLENBQUNELGdCQUFnQixDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBQ0RFLHFCQUFxQixtQ0FBRztNQUN2QixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFDREcsbUJBQW1CLGlDQUFHO01BQ3JCLE9BQU8sSUFBSSxDQUFDSCxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQUNESSxxQkFBcUIsbUNBQUc7TUFDdkIsT0FBTyxJQUFJLENBQUNKLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUN2QztFQUNELENBQUM7RUFDREssT0FBTyxFQUFFO0lBQ1I7SUFDQUMsZUFBZSw2QkFBRztNQUNqQixDQUFDLElBQUksQ0FBQ0MsaUJBQWlCLElBQUksSUFBSSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQzNELENBQUM7SUFDRDtJQUNBQyxVQUFVLHNCQUFDM0UsSUFBSSxFQUFFO01BQ2hCLElBQUksQ0FBQzBFLGNBQWMsQ0FBQzFFLElBQUksQ0FBQztJQUMxQixDQUFDO0lBQ0Q7SUFDQTRFLHNCQUFzQixrQ0FBQ0MsVUFBVSxFQUFtQjtNQUFBO01BQUEsSUFBakJDLE9BQU8sdUVBQUcsS0FBSztNQUNqRCxJQUFJLElBQUksQ0FBQ0MscUJBQXFCLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDdEMsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO1VBQ3hELElBQUlBLEdBQUcsRUFBRTtZQUNSLElBQU1DLG9CQUFvQixHQUFHRCxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNFLE1BQU07WUFDMUMsS0FBSSxDQUFDTCxxQkFBcUIsR0FBR0ksb0JBQW9CO1lBQ2pELElBQUlOLFVBQVUsR0FBR00sb0JBQW9CLElBQUksS0FBSSxDQUFDRSxtQkFBbUIsRUFBRTtjQUNsRSxLQUFJLENBQUNYLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFDaEM7VUFDRDtRQUNELENBQUMsQ0FBQztNQUNILENBQUMsTUFBTTtRQUNOLElBQUlHLFVBQVUsR0FBRyxJQUFJLENBQUNFLHFCQUFxQixJQUFJLElBQUksQ0FBQ00sbUJBQW1CLEVBQUU7VUFDeEUsSUFBSSxDQUFDWCxjQUFjLENBQUMsVUFBVSxDQUFDO1FBQ2hDLENBQUMsTUFBTSxJQUFJRyxVQUFVLEdBQUcsSUFBSSxDQUFDRSxxQkFBcUIsSUFBSSxHQUFHLElBQUksQ0FBQ0QsT0FBTyxFQUFFO1VBQ3RFM0UscUJBQUMsQ0FBQ21GLEtBQUssQ0FBQyxZQUFNO1lBQ2IsS0FBSSxDQUFDTixrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7Y0FDcEUsS0FBSSxDQUFDSyxZQUFZLEdBQUdMLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ00sU0FBUztjQUNwQyxJQUFNQyxhQUFhLEdBQUdQLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsWUFBWSxHQUFHLEtBQUksQ0FBQ0gsWUFBWTtjQUM3RCxLQUFJLENBQUNYLHNCQUFzQixDQUFDYSxhQUFhLEVBQUUsSUFBSSxDQUFDO1lBQ2pELENBQUMsQ0FBQztVQUNILENBQUMsRUFBRSxHQUFHLEVBQUUsNEJBQTRCLENBQUM7UUFDdEM7TUFDRDtJQUNELENBQUM7SUFDRDtJQUNBZixjQUFjLDRCQUFpQjtNQUFBO01BQUEsSUFBaEJpQixJQUFJLHVFQUFHLE9BQU87TUFDNUIsSUFBSUEsSUFBSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQ0MsMkJBQTJCLElBQUksSUFBSSxDQUFDQyxZQUFZLEVBQUU7UUFDbEYsSUFBSSxDQUFDQSxZQUFZLEdBQUcsS0FBSztRQUN6QixJQUFJLENBQUNDLFNBQVMsQ0FBQyxZQUFNO1VBQ3BCLE1BQUksQ0FBQ0QsWUFBWSxHQUFHLElBQUk7UUFDekIsQ0FBQyxDQUFDO01BQ0g7TUFDQSxJQUFJLENBQUNFLEtBQUssQ0FBQyxlQUFlLEVBQUVKLElBQUksQ0FBQztNQUNqQyxJQUFJQSxJQUFJLEtBQUssVUFBVSxLQUFLLENBQUMsSUFBSSxDQUFDOUUsMEJBQTBCLElBQUksSUFBSSxDQUFDNEQsaUJBQWlCLENBQUMsRUFBRTtNQUN6RixJQUFJLElBQUksQ0FBQ3VCLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQ3BGLGtCQUFrQixJQUFJLEVBQUUsSUFBSSxDQUFDb0IsYUFBYSxLQUFLRixvQkFBSSxDQUFDQyxJQUFJLENBQUNFLE9BQU8sSUFBSSxJQUFJLENBQUNELGFBQWEsS0FBS0Ysb0JBQUksQ0FBQ0MsSUFBSSxDQUFDa0UsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDQyxPQUFPLEVBQUU7TUFVNUosSUFBSSxDQUFDQyxjQUFjLEVBQUU7SUFDdEIsQ0FBQztJQUNEO0lBQ0FBLGNBQWMsNEJBQUc7TUFBQTtNQUNoQixJQUFJLElBQUksQ0FBQ0MsTUFBTSxJQUFJLElBQUksQ0FBQ0MsYUFBYSxJQUFJLElBQUksQ0FBQ3JFLGFBQWEsS0FBS0Ysb0JBQUksQ0FBQ0MsSUFBSSxDQUFDdUUsTUFBTSxFQUFFO1FBQ2pGLElBQUksQ0FBQ0YsTUFBTSxFQUFHO1FBQ2QsSUFBSSxDQUFDRyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDQyxhQUFhLEVBQUU7VUFDdkIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNMLE1BQU0sRUFBRSxJQUFJLENBQUNNLGVBQWUsRUFBRSxJQUFJLENBQUNDLHNCQUFzQixFQUFFLFVBQUF6QixHQUFHLEVBQUk7WUFDakcsTUFBSSxDQUFDMEIsZUFBZSxDQUFDMUIsR0FBRyxFQUFFLE1BQUksQ0FBQzJCLG9CQUFvQixDQUFDN0MsTUFBTSxDQUFDO1VBQzVELENBQUMsQ0FBQztRQUNILENBQUMsTUFBTTtVQUNOLElBQUksQ0FBQzhDLFVBQVUsQ0FBQyxJQUFJLENBQUNWLE1BQU0sRUFBRSxJQUFJLENBQUNNLGVBQWUsRUFBRTVFLG9CQUFJLENBQUNpRixTQUFTLENBQUNDLFdBQVcsQ0FBQztVQUM5RSxJQUFJLENBQUNDLGtCQUFrQixFQUFFO1FBQzFCO1FBQ0EsSUFBSSxDQUFDQyxXQUFXLEdBQUdwRixvQkFBSSxDQUFDcUYsV0FBVyxDQUFDSCxXQUFXO01BQ2hEO0lBQ0QsQ0FBQztJQUNEO0lBQ0FJLHlCQUF5QixxQ0FBQ0MsTUFBTSxFQUFFQyxjQUFjLEVBQUVDLG1CQUFtQixFQUFFO01BQUE7TUFDdEUsSUFBSSxJQUFJLENBQUN2RixhQUFhLEtBQUtGLG9CQUFJLENBQUNDLElBQUksQ0FBQ3VFLE1BQU0sSUFBSSxJQUFJLENBQUNsRixpQkFBaUIsR0FBRyxDQUFDLElBQUlpRyxNQUFNLENBQUNyRCxNQUFNLEVBQUU7UUFDM0YsSUFBSSxDQUFDM0IsZUFBZSxHQUFHZ0YsTUFBTSxDQUFDckQsTUFBTSxHQUFHLElBQUksQ0FBQzVDLGlCQUFpQjtNQUM5RCxDQUFDLE1BQU0sSUFBSyxJQUFJLENBQUNZLGFBQWEsS0FBS0Ysb0JBQUksQ0FBQ0MsSUFBSSxDQUFDdUUsTUFBTSxJQUFJLElBQUksQ0FBQ25GLGdCQUFnQixJQUFJa0csTUFBTSxDQUFDckQsTUFBTSxJQUFNLElBQUksQ0FBQ3RDLFVBQVUsSUFBSSxJQUFJLENBQUM4RixjQUFjLEtBQUssS0FBSyxJQUFJSCxNQUFNLENBQUNyRCxNQUFPLEVBQUU7UUFDdEssSUFBSSxDQUFDOEIsU0FBUyxDQUFDLFlBQU07VUFDcEIsTUFBSSxDQUFDMkIsc0JBQXNCLENBQUNKLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxtQkFBbUIsQ0FBQztRQUN6RSxDQUFDLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQzdGLFVBQVUsSUFBSSxJQUFJLENBQUM4RixjQUFjLEtBQUssS0FBSyxJQUFJSCxNQUFNLENBQUNyRCxNQUFNLEVBQUU7VUFDdEUsSUFBSSxDQUFDM0IsZUFBZSxHQUFHZ0YsTUFBTSxDQUFDckQsTUFBTTtRQUNyQztNQUNELENBQUMsTUFBTTtRQUNOLElBQUksQ0FBQzNCLGVBQWUsR0FBR2dGLE1BQU0sQ0FBQ3JELE1BQU07TUFDckM7SUFDRCxDQUFDO0lBQ0Q7SUFDTXlELHNCQUFzQixrQ0FBQ0MsU0FBUyxFQUFFQyxpQkFBaUIsRUFBRUMsc0JBQXNCLEVBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxjQUUxREQsaUJBQWlCO2dCQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BQVUsTUFBSSxDQUFDM0Msa0JBQWtCLENBQUMsaUJBQWlCLENBQUM7Y0FBQTtnQkFBQTtjQUFBO2dCQUF0RnNDLGNBQWM7Z0JBQUEsS0FDaEIsTUFBSSxDQUFDTyxhQUFhO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUNyQixJQUFJUCxjQUFjLEVBQUU7a0JBQ2JRLGdCQUFnQixHQUFHUixjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUNTLEdBQUcsR0FBR1QsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDbEMsTUFBTTtrQkFDekUsTUFBSSxDQUFDb0MsY0FBYyxHQUFHTSxnQkFBZ0IsR0FBRyxNQUFJLENBQUNFLFlBQVk7a0JBQzFELElBQUksTUFBSSxDQUFDN0csZ0JBQWdCLEVBQUU7b0JBQzFCLE1BQUksQ0FBQ2tCLGVBQWUsR0FBRyxDQUFDLE1BQUksQ0FBQ21GLGNBQWM7a0JBQzVDO2tCQUNBLE1BQUksQ0FBQ1MscUJBQXFCLEVBQUU7Z0JBQzdCO2dCQUFDO2dCQUFBO2NBQUE7Z0JBQUEsY0FFMkJMLHNCQUFzQjtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUFVLE1BQUksQ0FBQzVDLGtCQUFrQixDQUFDLDhCQUE4QixDQUFDO2NBQUE7Z0JBQUE7Y0FBQTtnQkFBN0d1QyxtQkFBbUI7Z0JBQ25CVyxnQkFBZ0IsR0FBR1gsbUJBQW1CLEdBQUdBLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDbkMsTUFBTSxHQUFHLENBQUM7Z0JBQzFFK0MsV0FBVyxHQUFHYixjQUFjLEdBQUdBLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2xDLE1BQU0sR0FBRyxDQUFDO2dCQUNqRSxNQUFJLENBQUNvQyxjQUFjLEdBQUdVLGdCQUFnQixHQUFHQyxXQUFXO2dCQUNwRCxJQUFJLE1BQUksQ0FBQ2hILGdCQUFnQixFQUFFO2tCQUMxQixNQUFJLENBQUNrQixlQUFlLEdBQUcsQ0FBQyxNQUFJLENBQUNtRixjQUFjO2dCQUM1QztnQkFDQSxNQUFJLENBQUNTLHFCQUFxQixFQUFFO2NBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFHOUIsTUFBSSxDQUFDVCxjQUFjLEdBQUcsQ0FBQ0UsU0FBUyxDQUFDMUQsTUFBTTtnQkFDdkMsSUFBSSxNQUFJLENBQUM3QyxnQkFBZ0IsRUFBRTtrQkFDMUIsTUFBSSxDQUFDa0IsZUFBZSxHQUFHLENBQUMsTUFBSSxDQUFDbUYsY0FBYztnQkFDNUM7Z0JBQ0EsTUFBSSxDQUFDUyxxQkFBcUIsRUFBRTtjQUFDO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUUvQixDQUFDO0lBQ0Q7SUFDQS9ELGdCQUFnQiw0QkFBQ2xFLElBQUksRUFBRTtNQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDb0kseUJBQXlCLEtBQUssRUFBRSxJQUFJLENBQUNwRyxhQUFhLEtBQUtGLG9CQUFJLENBQUNDLElBQUksQ0FBQ0UsT0FBTyxHQUFHLElBQUksQ0FBQ29HLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQ0MsYUFBYSxDQUFDdEUsTUFBTSxDQUFDLEVBQUUsT0FBTyxLQUFLO01BQzFKLElBQUssQ0FBQyxDQUFDLElBQUksQ0FBQ29FLHlCQUF5QixJQUFJLElBQUksQ0FBQ0csY0FBYyxJQUFJLElBQUksQ0FBQ3ZHLGFBQWEsS0FBS0Ysb0JBQUksQ0FBQ0MsSUFBSSxDQUFDeUcsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDbkcsZUFBZSxJQUNqSSxDQUFDLElBQUksQ0FBQ3pCLGtCQUFrQixLQUFLLENBQUMsSUFBSSxDQUFDd0gseUJBQXlCLElBQUksSUFBSSxDQUFDRyxjQUFjLElBQUksSUFBSSxDQUFDdkcsYUFBYSxLQUFLRixvQkFBSSxDQUFDQyxJQUFJLENBQUN5RyxPQUFPLENBQUUsSUFBSSxJQUFJLENBQUN4QyxhQUFhLEVBQUU7UUFDekosT0FBTyxLQUFLO01BQ2I7TUFDQSxJQUFJLElBQUksQ0FBQ3ZCLGlCQUFpQixJQUFJekUsSUFBSSxLQUFLLFNBQVMsRUFBRSxPQUFPLEtBQUs7TUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQ3lJLE1BQU0sRUFBRSxPQUFPLEtBQUs7TUFDOUIsSUFBSXpJLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDdEIsT0FBTyxJQUFJLENBQUNzQiwwQkFBMEIsSUFBSSxFQUFFLElBQUksQ0FBQ1UsYUFBYSxLQUFLRixvQkFBSSxDQUFDQyxJQUFJLENBQUN1RSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMvRSx5QkFBeUIsQ0FBQztNQUN4SDtNQUNBLElBQU0yRCxHQUFHLEdBQUcsSUFBSSxDQUFDbEQsYUFBYSxLQUFLRixvQkFBSSxDQUFDQyxJQUFJLENBQUMvQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUN5SSxNQUFNLHNCQUFlekksSUFBSSxFQUFHLEtBQUtBLElBQUksS0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDdUIseUJBQXlCLEdBQUcsSUFBSSxDQUFDO01BQ3RKLElBQUkyRCxHQUFHLEVBQUU7UUFFUixJQUFJLENBQUMsSUFBSSxDQUFDd0QsS0FBSyxFQUFFO1VBQ2hCLElBQUksQ0FBQ0MsdUJBQXVCLEdBQUcsS0FBSztRQUNyQztNQUVEO01BQ0EsT0FBT3pELEdBQUc7SUFDWDtFQUNEO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6IjkxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3otcGFnaW5nXea7muWKqOWIsOW6lemDqOWKoOi9veabtOWkmuaooeWdl1xuaW1wb3J0IHUgZnJvbSAnLi4vLi96LXBhZ2luZy11dGlscydcbmltcG9ydCBFbnVtIGZyb20gJy4uLy4vei1wYWdpbmctZW51bSdcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczoge1xuXHRcdC8v6Ieq5a6a5LmJ5bqV6YOo5Yqg6L295pu05aSa5qC35byPXG5cdFx0bG9hZGluZ01vcmVDdXN0b21TdHlsZToge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB1LmdjKCdsb2FkaW5nTW9yZUN1c3RvbVN0eWxlJywge30pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnlupXpg6jliqDovb3mm7TlpJrmloflrZfmoLflvI9cblx0XHRsb2FkaW5nTW9yZVRpdGxlQ3VzdG9tU3R5bGU6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdS5nYygnbG9hZGluZ01vcmVUaXRsZUN1c3RvbVN0eWxlJywge30pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnlupXpg6jliqDovb3mm7TlpJrliqDovb3kuK3liqjnlLvmoLflvI9cblx0XHRsb2FkaW5nTW9yZUxvYWRpbmdJY29uQ3VzdG9tU3R5bGU6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdS5nYygnbG9hZGluZ01vcmVMb2FkaW5nSWNvbkN1c3RvbVN0eWxlJywge30pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/oh6rlrprkuYnlupXpg6jliqDovb3mm7TlpJrliqDovb3kuK3liqjnlLvlm77moIfnsbvlnovvvIzlj6/pgIlmbG93ZXLmiJZjaXJjbGXvvIzpu5jorqTkuLpmbG93ZXJcblx0XHRsb2FkaW5nTW9yZUxvYWRpbmdJY29uVHlwZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnbG9hZGluZ01vcmVMb2FkaW5nSWNvblR5cGUnLCAnZmxvd2VyJylcblx0XHR9LFxuXHRcdC8v6Ieq5a6a5LmJ5bqV6YOo5Yqg6L295pu05aSa5Yqg6L295Lit5Yqo55S75Zu+5qCH5Zu+54mHXG5cdFx0bG9hZGluZ01vcmVMb2FkaW5nSWNvbkN1c3RvbUltYWdlOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdsb2FkaW5nTW9yZUxvYWRpbmdJY29uQ3VzdG9tSW1hZ2UnLCAnJylcblx0XHR9LFxuXHRcdC8v5bqV6YOo5Yqg6L295pu05aSa5Yqg6L295Litdmlld+aYr+WQpuWxleekuuaXi+i9rOWKqOeUu++8jOm7mOiupOS4uuaYr1xuXHRcdGxvYWRpbmdNb3JlTG9hZGluZ0FuaW1hdGVkOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnbG9hZGluZ01vcmVMb2FkaW5nQW5pbWF0ZWQnLCB0cnVlKVxuXHRcdH0sXG5cdFx0Ly/mmK/lkKblkK/nlKjliqDovb3mm7TlpJrmlbDmja4o5ZCr5ruR5Yqo5Yiw5bqV6YOo5Yqg6L295pu05aSa5pWw5o2u5ZKM54K55Ye75Yqg6L295pu05aSa5pWw5o2uKe+8jOm7mOiupOS4uuaYr1xuXHRcdGxvYWRpbmdNb3JlRW5hYmxlZDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2xvYWRpbmdNb3JlRW5hYmxlZCcsIHRydWUpXG5cdFx0fSxcblx0XHQvL+aYr+WQpuWQr+eUqOa7keWKqOWIsOW6lemDqOWKoOi9veabtOWkmuaVsOaNru+8jOm7mOiupOS4uuaYr1xuXHRcdHRvQm90dG9tTG9hZGluZ01vcmVFbmFibGVkOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygndG9Cb3R0b21Mb2FkaW5nTW9yZUVuYWJsZWQnLCB0cnVlKVxuXHRcdH0sXG5cdFx0Ly/mu5HliqjliLDlupXpg6jnirbmgIHkuLrpu5jorqTnirbmgIHml7bvvIzku6XliqDovb3kuK3nmoTnirbmgIHlsZXnpLrvvIzpu5jorqTkuLrlkKbjgILoi6Xorr7nva7kuLrmmK/vvIzlj6/pgb/lhY3mu5rliqjliLDlupXpg6jnnIvliLDpu5jorqTnirbmgIHnhLblkI7nq4vliLvlj5jkuLrliqDovb3kuK3nirbmgIHnmoTpl67popjvvIzkvYbliIbpobXmlbDph4/mnKrotoXov4fkuIDlsY/ml7bvvIzkuI3kvJrmmL7npLrjgJDngrnlh7vliqDovb3mm7TlpJrjgJFcblx0XHRsb2FkaW5nTW9yZURlZmF1bHRBc0xvYWRpbmc6IHtcblx0XHRcdHR5cGU6IFtCb29sZWFuXSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2xvYWRpbmdNb3JlRGVmYXVsdEFzTG9hZGluZycsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/mu5HliqjliLDlupXpg6hcIum7mOiupFwi5paH5a2X77yM6buY6K6k5Li644CQ54K55Ye75Yqg6L295pu05aSa44CRXG5cdFx0bG9hZGluZ01vcmVEZWZhdWx0VGV4dDoge1xuXHRcdFx0dHlwZTogW1N0cmluZywgT2JqZWN0XSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2xvYWRpbmdNb3JlRGVmYXVsdFRleHQnLCBudWxsKVxuXHRcdH0sXG5cdFx0Ly/mu5HliqjliLDlupXpg6hcIuWKoOi9veS4rVwi5paH5a2X77yM6buY6K6k5Li644CQ5q2j5Zyo5Yqg6L29Li4u44CRXG5cdFx0bG9hZGluZ01vcmVMb2FkaW5nVGV4dDoge1xuXHRcdFx0dHlwZTogW1N0cmluZywgT2JqZWN0XSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2xvYWRpbmdNb3JlTG9hZGluZ1RleHQnLCBudWxsKVxuXHRcdH0sXG5cdFx0Ly/mu5HliqjliLDlupXpg6hcIuayoeacieabtOWkmlwi5paH5a2X77yM6buY6K6k5Li644CQ5rKh5pyJ5pu05aSa5LqG44CRXG5cdFx0bG9hZGluZ01vcmVOb01vcmVUZXh0OiB7XG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnbG9hZGluZ01vcmVOb01vcmVUZXh0JywgbnVsbClcblx0XHR9LFxuXHRcdC8v5ruR5Yqo5Yiw5bqV6YOoXCLliqDovb3lpLHotKVcIuaWh+Wtl++8jOm7mOiupOS4uuOAkOWKoOi9veWksei0pe+8jOeCueWHu+mHjeaWsOWKoOi9veOAkVxuXHRcdGxvYWRpbmdNb3JlRmFpbFRleHQ6IHtcblx0XHRcdHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdsb2FkaW5nTW9yZUZhaWxUZXh0JywgbnVsbClcblx0XHR9LFxuXHRcdC8v5b2T5rKh5pyJ5pu05aSa5pWw5o2u5LiU5YiG6aG15YaF5a655pyq6LaF5Ye6ei1wYWdpbmfml7bmmK/lkKbpmpDol4/msqHmnInmm7TlpJrmlbDmja7nmoR2aWV377yM6buY6K6k5Li65ZCmXG5cdFx0aGlkZU5vTW9yZUluc2lkZToge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2hpZGVOb01vcmVJbnNpZGUnLCBmYWxzZSlcblx0XHR9LFxuXHRcdC8v5b2T5rKh5pyJ5pu05aSa5pWw5o2u5LiU5YiG6aG15pWw57uE6ZW/5bqm5bCR5LqO6L+Z5Liq5YC85pe277yM6ZqQ6JeP5rKh5pyJ5pu05aSa5pWw5o2u55qEdmlld++8jOm7mOiupOS4ujDvvIzku6PooajkuI3pmZDliLbjgIJcblx0XHRoaWRlTm9Nb3JlQnlMaW1pdDoge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnaGlkZU5vTW9yZUJ5TGltaXQnLCAwKVxuXHRcdH0sXG5cdFx0Ly/mmK/lkKbmmL7npLrpu5jorqTnmoTliqDovb3mm7TlpJp0ZXh077yM6buY6K6k5Li65pivXG5cdFx0c2hvd0RlZmF1bHRMb2FkaW5nTW9yZVRleHQ6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdzaG93RGVmYXVsdExvYWRpbmdNb3JlVGV4dCcsIHRydWUpXG5cdFx0fSxcblx0XHQvL+aYr+WQpuaYvuekuuayoeacieabtOWkmuaVsOaNrueahHZpZXdcblx0XHRzaG93TG9hZGluZ01vcmVOb01vcmVWaWV3OiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnc2hvd0xvYWRpbmdNb3JlTm9Nb3JlVmlldycsIHRydWUpXG5cdFx0fSxcblx0XHQvL+aYr+WQpuaYvuekuuayoeacieabtOWkmuaVsOaNrueahOWIhuWJsue6v++8jOm7mOiupOS4uuaYr1xuXHRcdHNob3dMb2FkaW5nTW9yZU5vTW9yZUxpbmU6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdzaG93TG9hZGluZ01vcmVOb01vcmVMaW5lJywgdHJ1ZSlcblx0XHR9LFxuXHRcdC8v6Ieq5a6a5LmJ5bqV6YOo5rKh5pyJ5pu05aSa5pWw5o2u55qE5YiG5Ymy57q/5qC35byPXG5cdFx0bG9hZGluZ01vcmVOb01vcmVMaW5lQ3VzdG9tU3R5bGU6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdS5nYygnbG9hZGluZ01vcmVOb01vcmVMaW5lQ3VzdG9tU3R5bGUnLCB7fSk7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Ly/lvZPliIbpobXmnKrmu6HkuIDlsY/ml7bvvIzmmK/lkKboh6rliqjliqDovb3mm7TlpJrvvIzpu5jorqTkuLrlkKYobnZ1ZeaXoOaViClcblx0XHRpbnNpZGVNb3JlOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnaW5zaWRlTW9yZScsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/ot53lupXpg6gv5Y+z6L655aSa6L+c5pe277yI5Y2V5L2NcHjvvInvvIzop6blj5Egc2Nyb2xsdG9sb3dlciDkuovku7bvvIzpu5jorqTkuLoxMDBycHhcblx0XHRsb3dlclRocmVzaG9sZDoge1xuXHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2xvd2VyVGhyZXNob2xkJywgJzEwMHJweCcpXG5cdFx0fSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0TTogRW51bS5Nb3JlLFxuXHRcdFx0Ly/lupXpg6jliqDovb3mm7TlpJrnirbmgIFcblx0XHRcdGxvYWRpbmdTdGF0dXM6IEVudW0uTW9yZS5EZWZhdWx0LFxuXHRcdFx0bG9hZGluZ1N0YXR1c0FmdGVyUmVuZGVyOiBFbnVtLk1vcmUuRGVmYXVsdCxcblx0XHRcdGxvYWRpbmdNb3JlVGltZVN0YW1wOiAwLFxuXHRcdFx0bG9hZGluZ01vcmVEZWZhdWx0U2xvdDogbnVsbCxcblx0XHRcdHNob3dMb2FkaW5nTW9yZTogZmFsc2UsXG5cdFx0XHRjdXN0b21Ob01vcmU6IC0xLFxuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHR6TG9hZE1vcmVDb25maWcoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGF0dXM6IHRoaXMubG9hZGluZ1N0YXR1c0FmdGVyUmVuZGVyLFxuXHRcdFx0XHRkZWZhdWx0QXNMb2FkaW5nOiB0aGlzLmxvYWRpbmdNb3JlRGVmYXVsdEFzTG9hZGluZyxcblx0XHRcdFx0ZGVmYXVsdFRoZW1lU3R5bGU6IHRoaXMuZmluYWxMb2FkaW5nTW9yZVRoZW1lU3R5bGUsXG5cdFx0XHRcdGN1c3RvbVN0eWxlOiB0aGlzLmxvYWRpbmdNb3JlQ3VzdG9tU3R5bGUsXG5cdFx0XHRcdHRpdGxlQ3VzdG9tU3R5bGU6IHRoaXMubG9hZGluZ01vcmVUaXRsZUN1c3RvbVN0eWxlLFxuXHRcdFx0XHRpY29uQ3VzdG9tU3R5bGU6IHRoaXMubG9hZGluZ01vcmVMb2FkaW5nSWNvbkN1c3RvbVN0eWxlLFxuXHRcdFx0XHRsb2FkaW5nSWNvblR5cGU6IHRoaXMubG9hZGluZ01vcmVMb2FkaW5nSWNvblR5cGUsXG5cdFx0XHRcdGxvYWRpbmdJY29uQ3VzdG9tSW1hZ2U6IHRoaXMubG9hZGluZ01vcmVMb2FkaW5nSWNvbkN1c3RvbUltYWdlLFxuXHRcdFx0XHRsb2FkaW5nQW5pbWF0ZWQ6IHRoaXMubG9hZGluZ01vcmVMb2FkaW5nQW5pbWF0ZWQsXG5cdFx0XHRcdHNob3dOb01vcmVMaW5lOiB0aGlzLnNob3dMb2FkaW5nTW9yZU5vTW9yZUxpbmUsXG5cdFx0XHRcdG5vTW9yZUxpbmVDdXN0b21TdHlsZTogdGhpcy5sb2FkaW5nTW9yZU5vTW9yZUxpbmVDdXN0b21TdHlsZSxcblx0XHRcdFx0ZGVmYXVsdFRleHQ6IHRoaXMuZmluYWxMb2FkaW5nTW9yZURlZmF1bHRUZXh0LFxuXHRcdFx0XHRsb2FkaW5nVGV4dDogdGhpcy5maW5hbExvYWRpbmdNb3JlTG9hZGluZ1RleHQsXG5cdFx0XHRcdG5vTW9yZVRleHQ6IHRoaXMuZmluYWxMb2FkaW5nTW9yZU5vTW9yZVRleHQsXG5cdFx0XHRcdGZhaWxUZXh0OiB0aGlzLmZpbmFsTG9hZGluZ01vcmVGYWlsVGV4dCxcblx0XHRcdFx0aGlkZUNvbnRlbnQ6ICF0aGlzLmxvYWRpbmdNb3JlRGVmYXVsdEFzTG9hZGluZyAmJiB0aGlzLmxpc3RSZW5kZXJpbmcsXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0ZmluYWxMb2FkaW5nTW9yZVRoZW1lU3R5bGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5sb2FkaW5nTW9yZVRoZW1lU3R5bGUubGVuZ3RoID8gdGhpcy5sb2FkaW5nTW9yZVRoZW1lU3R5bGUgOiB0aGlzLmRlZmF1bHRUaGVtZVN0eWxlO1xuXHRcdH0sXG5cdFx0c2hvd0xvYWRpbmdNb3JlRGVmYXVsdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLl9zaG93TG9hZGluZ01vcmUoJ0RlZmF1bHQnKTtcblx0XHR9LFxuXHRcdHNob3dMb2FkaW5nTW9yZUxvYWRpbmcoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fc2hvd0xvYWRpbmdNb3JlKCdMb2FkaW5nJyk7XG5cdFx0fSxcblx0XHRzaG93TG9hZGluZ01vcmVOb01vcmUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fc2hvd0xvYWRpbmdNb3JlKCdOb01vcmUnKTtcblx0XHR9LFxuXHRcdHNob3dMb2FkaW5nTW9yZUZhaWwoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fc2hvd0xvYWRpbmdNb3JlKCdGYWlsJyk7XG5cdFx0fSxcblx0XHRzaG93TG9hZGluZ01vcmVDdXN0b20oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fc2hvd0xvYWRpbmdNb3JlKCdDdXN0b20nKTtcblx0XHR9XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHQvL+mhtemdoua7muWKqOWIsOW6lemDqOaXtumAmuefpXotcGFnaW5n6L+b6KGM6L+b5LiA5q2l5aSE55CGXG5cdFx0cGFnZVJlYWNoQm90dG9tKCkge1xuXHRcdFx0IXRoaXMudXNlQ2hhdFJlY29yZE1vZGUgJiYgdGhpcy5fb25Mb2FkaW5nTW9yZSgndG9Cb3R0b20nKTtcblx0XHR9LFxuXHRcdC8v5omL5Yqo6Kem5Y+R5LiK5ouJ5Yqg6L295pu05aSaKOmdnuW/hemhu++8jOWPr+S+neaNruWFt+S9k+mcgOaxguS9v+eUqClcblx0XHRkb0xvYWRNb3JlKHR5cGUpIHtcblx0XHRcdHRoaXMuX29uTG9hZGluZ01vcmUodHlwZSk7XG5cdFx0fSxcblx0XHQvL+mAmui/h0BzY3JvbGzkuovku7bmo4DmtYvmmK/lkKbmu5rliqjliLDkuoblupXpg6hcblx0XHRfY2hlY2tTY3JvbGxlZFRvQm90dG9tKHNjcm9sbERpZmYsIGNoZWNrZWQgPSBmYWxzZSkge1xuXHRcdFx0aWYgKHRoaXMuY2FjaGVTY3JvbGxOb2RlSGVpZ2h0ID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnLnpwLXNjcm9sbC12aWV3JykudGhlbigocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgcGFnZVNjcm9sbE5vZGVIZWlnaHQgPSByZXNbMF0uaGVpZ2h0O1xuXHRcdFx0XHRcdFx0dGhpcy5jYWNoZVNjcm9sbE5vZGVIZWlnaHQgPSBwYWdlU2Nyb2xsTm9kZUhlaWdodDtcblx0XHRcdFx0XHRcdGlmIChzY3JvbGxEaWZmIC0gcGFnZVNjcm9sbE5vZGVIZWlnaHQgPD0gdGhpcy5maW5hbExvd2VyVGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX29uTG9hZGluZ01vcmUoJ3RvQm90dG9tJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChzY3JvbGxEaWZmIC0gdGhpcy5jYWNoZVNjcm9sbE5vZGVIZWlnaHQgPD0gdGhpcy5maW5hbExvd2VyVGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0dGhpcy5fb25Mb2FkaW5nTW9yZSgndG9Cb3R0b20nKTtcblx0XHRcdFx0fSBlbHNlIGlmIChzY3JvbGxEaWZmIC0gdGhpcy5jYWNoZVNjcm9sbE5vZGVIZWlnaHQgPD0gNTAwICYmICFjaGVja2VkKSB7XG5cdFx0XHRcdFx0dS5kZWxheSgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnLnpwLXNjcm9sbC12aWV3JywgdHJ1ZSwgdHJ1ZSkudGhlbigocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMub2xkU2Nyb2xsVG9wID0gcmVzWzBdLnNjcm9sbFRvcDtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3U2Nyb2xsRGlmZiA9IHJlc1swXS5zY3JvbGxIZWlnaHQgLSB0aGlzLm9sZFNjcm9sbFRvcDtcblx0XHRcdFx0XHRcdFx0dGhpcy5fY2hlY2tTY3JvbGxlZFRvQm90dG9tKG5ld1Njcm9sbERpZmYsIHRydWUpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9LCAxNTAsICdjaGVja1Njcm9sbGVkVG9Cb3R0b21EZWxheScpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8v6Kem5Y+R5Yqg6L295pu05aSa5pe26LCD55SoLGZyb206MC3mu5HliqjliLDlupXpg6jop6blj5HvvJsxLeeCueWHu+WKoOi9veabtOWkmuinpuWPkVxuXHRcdF9vbkxvYWRpbmdNb3JlKGZyb20gPSAnY2xpY2snKSB7XG5cdFx0XHRpZiAoZnJvbSA9PT0gJ3RvQm90dG9tJyAmJiAhdGhpcy5zY3JvbGxUb0JvdHRvbUJvdW5jZUVuYWJsZWQgJiYgdGhpcy5zY3JvbGxFbmFibGUpIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxFbmFibGUgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsRW5hYmxlID0gdHJ1ZTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdHRoaXMuJGVtaXQoJ3Njcm9sbHRvbG93ZXInLCBmcm9tKTtcblx0XHRcdGlmIChmcm9tID09PSAndG9Cb3R0b20nICYmICghdGhpcy50b0JvdHRvbUxvYWRpbmdNb3JlRW5hYmxlZCB8fCB0aGlzLnVzZUNoYXRSZWNvcmRNb2RlKSkgcmV0dXJuO1xuXHRcdFx0aWYgKHRoaXMucmVmcmVzaGVyT25seSB8fCAhdGhpcy5sb2FkaW5nTW9yZUVuYWJsZWQgfHwgISh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IEVudW0uTW9yZS5EZWZhdWx0IHx8IHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gRW51bS5Nb3JlLkZhaWwpIHx8IHRoaXMubG9hZGluZykgcmV0dXJuO1xuXG5cblxuXG5cblxuXG5cblxuXHRcdFx0dGhpcy5fZG9Mb2FkaW5nTW9yZSgpO1xuXHRcdH0sXG5cdFx0Ly/lpITnkIblvIDlp4vliqDovb3mm7TlpJpcblx0XHRfZG9Mb2FkaW5nTW9yZSgpIHtcblx0XHRcdGlmICh0aGlzLnBhZ2VObyA+PSB0aGlzLmRlZmF1bHRQYWdlTm8gJiYgdGhpcy5sb2FkaW5nU3RhdHVzICE9PSBFbnVtLk1vcmUuTm9Nb3JlKSB7XG5cdFx0XHRcdHRoaXMucGFnZU5vICsrO1xuXHRcdFx0XHR0aGlzLl9zdGFydExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRpZiAodGhpcy5pc0xvY2FsUGFnaW5nKSB7XG5cdFx0XHRcdFx0dGhpcy5fbG9jYWxQYWdpbmdRdWVyeUxpc3QodGhpcy5wYWdlTm8sIHRoaXMuZGVmYXVsdFBhZ2VTaXplLCB0aGlzLmxvY2FsUGFnaW5nTG9hZGluZ1RpbWUsIHJlcyA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbXBsZXRlQnlUb3RhbChyZXMsIHRoaXMudG90YWxMb2NhbFBhZ2luZ0xpc3QubGVuZ3RoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX2VtaXRRdWVyeSh0aGlzLnBhZ2VObywgdGhpcy5kZWZhdWx0UGFnZVNpemUsIEVudW0uUXVlcnlGcm9tLkxvYWRpbmdNb3JlKTtcblx0XHRcdFx0XHR0aGlzLl9jYWxsTXlQYXJlbnRRdWVyeSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubG9hZGluZ1R5cGUgPSBFbnVtLkxvYWRpbmdUeXBlLkxvYWRpbmdNb3JlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8o6aKE5aSE55CGKeWIpOaWreW9k+ayoeacieabtOWkmuaVsOaNruS4lOWIhumhteWGheWuueacqui2heWHunotcGFnaW5n5pe25piv5ZCm5pi+56S65rKh5pyJ5pu05aSa5pWw5o2u55qEdmlld1xuXHRcdF9wcmVDaGVja1Nob3dOb01vcmVJbnNpZGUobmV3VmFsLCBzY3JvbGxWaWV3Tm9kZSwgcGFnaW5nQ29udGFpbmVyTm9kZSkge1xuXHRcdFx0aWYgKHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gRW51bS5Nb3JlLk5vTW9yZSAmJiB0aGlzLmhpZGVOb01vcmVCeUxpbWl0ID4gMCAmJiBuZXdWYWwubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMuc2hvd0xvYWRpbmdNb3JlID0gbmV3VmFsLmxlbmd0aCA+IHRoaXMuaGlkZU5vTW9yZUJ5TGltaXQ7XG5cdFx0XHR9IGVsc2UgaWYgKCh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IEVudW0uTW9yZS5Ob01vcmUgJiYgdGhpcy5oaWRlTm9Nb3JlSW5zaWRlICYmIG5ld1ZhbC5sZW5ndGgpIHx8ICh0aGlzLmluc2lkZU1vcmUgJiYgdGhpcy5pbnNpZGVPZlBhZ2luZyAhPT0gZmFsc2UgJiYgbmV3VmFsLmxlbmd0aCkpIHtcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuX2NoZWNrU2hvd05vTW9yZUluc2lkZShuZXdWYWwsIHNjcm9sbFZpZXdOb2RlLCBwYWdpbmdDb250YWluZXJOb2RlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0aWYgKHRoaXMuaW5zaWRlTW9yZSAmJiB0aGlzLmluc2lkZU9mUGFnaW5nICE9PSBmYWxzZSAmJiBuZXdWYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGhpcy5zaG93TG9hZGluZ01vcmUgPSBuZXdWYWwubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNob3dMb2FkaW5nTW9yZSA9IG5ld1ZhbC5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+WIpOaWreW9k+ayoeacieabtOWkmuaVsOaNruS4lOWIhumhteWGheWuueacqui2heWHunotcGFnaW5n5pe25piv5ZCm5pi+56S65rKh5pyJ5pu05aSa5pWw5o2u55qEdmlld1xuXHRcdGFzeW5jIF9jaGVja1Nob3dOb01vcmVJbnNpZGUodG90YWxEYXRhLCBvbGRTY3JvbGxWaWV3Tm9kZSwgb2xkUGFnaW5nQ29udGFpbmVyTm9kZSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3Qgc2Nyb2xsVmlld05vZGUgPSBvbGRTY3JvbGxWaWV3Tm9kZSB8fCBhd2FpdCB0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnLnpwLXNjcm9sbC12aWV3Jyk7XG5cdFx0XHRcdGlmICh0aGlzLnVzZVBhZ2VTY3JvbGwpIHtcblx0XHRcdFx0XHRpZiAoc2Nyb2xsVmlld05vZGUpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHNjcm9sbFZpZXdUb3RhbEggPSBzY3JvbGxWaWV3Tm9kZVswXS50b3AgKyBzY3JvbGxWaWV3Tm9kZVswXS5oZWlnaHQ7XG5cdFx0XHRcdFx0XHR0aGlzLmluc2lkZU9mUGFnaW5nID0gc2Nyb2xsVmlld1RvdGFsSCA8IHRoaXMud2luZG93SGVpZ2h0O1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaGlkZU5vTW9yZUluc2lkZSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3dMb2FkaW5nTW9yZSA9ICF0aGlzLmluc2lkZU9mUGFnaW5nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5fdXBkYXRlSW5zaWRlT2ZQYWdpbmcoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgcGFnaW5nQ29udGFpbmVyTm9kZSA9IG9sZFBhZ2luZ0NvbnRhaW5lck5vZGUgfHwgYXdhaXQgdGhpcy5fZ2V0Tm9kZUNsaWVudFJlY3QoJy56cC1wYWdpbmctY29udGFpbmVyLWNvbnRlbnQnKTtcblx0XHRcdFx0XHRjb25zdCBwYWdpbmdDb250YWluZXJIID0gcGFnaW5nQ29udGFpbmVyTm9kZSA/IHBhZ2luZ0NvbnRhaW5lck5vZGVbMF0uaGVpZ2h0IDogMDtcblx0XHRcdFx0XHRjb25zdCBzY3JvbGxWaWV3SCA9IHNjcm9sbFZpZXdOb2RlID8gc2Nyb2xsVmlld05vZGVbMF0uaGVpZ2h0IDogMDtcblx0XHRcdFx0XHR0aGlzLmluc2lkZU9mUGFnaW5nID0gcGFnaW5nQ29udGFpbmVySCA8IHNjcm9sbFZpZXdIO1xuXHRcdFx0XHRcdGlmICh0aGlzLmhpZGVOb01vcmVJbnNpZGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0xvYWRpbmdNb3JlID0gIXRoaXMuaW5zaWRlT2ZQYWdpbmc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX3VwZGF0ZUluc2lkZU9mUGFnaW5nKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0dGhpcy5pbnNpZGVPZlBhZ2luZyA9ICF0b3RhbERhdGEubGVuZ3RoO1xuXHRcdFx0XHRpZiAodGhpcy5oaWRlTm9Nb3JlSW5zaWRlKSB7XG5cdFx0XHRcdFx0dGhpcy5zaG93TG9hZGluZ01vcmUgPSAhdGhpcy5pbnNpZGVPZlBhZ2luZztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl91cGRhdGVJbnNpZGVPZlBhZ2luZygpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/mmK/lkKbopoHlsZXnpLrkuIrmi4nliqDovb3mm7TlpJp2aWV3XG5cdFx0X3Nob3dMb2FkaW5nTW9yZSh0eXBlKSB7XG5cdFx0XHRpZiAoIXRoaXMuc2hvd0xvYWRpbmdNb3JlV2hlblJlbG9hZCAmJiAoISh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IEVudW0uTW9yZS5EZWZhdWx0ID8gdGhpcy5uU2hvd0JvdHRvbSA6IHRydWUpIHx8ICF0aGlzLnJlYWxUb3RhbERhdGEubGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0aWYgKCgoIXRoaXMuc2hvd0xvYWRpbmdNb3JlV2hlblJlbG9hZCB8fCB0aGlzLmlzVXNlclB1bGxEb3duIHx8IHRoaXMubG9hZGluZ1N0YXR1cyAhPT0gRW51bS5Nb3JlLkxvYWRpbmcpICYmICF0aGlzLnNob3dMb2FkaW5nTW9yZSkgfHwgXG5cdFx0XHQoIXRoaXMubG9hZGluZ01vcmVFbmFibGVkICYmICghdGhpcy5zaG93TG9hZGluZ01vcmVXaGVuUmVsb2FkIHx8IHRoaXMuaXNVc2VyUHVsbERvd24gfHwgdGhpcy5sb2FkaW5nU3RhdHVzICE9PSBFbnVtLk1vcmUuTG9hZGluZykpIHx8IHRoaXMucmVmcmVzaGVyT25seSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy51c2VDaGF0UmVjb3JkTW9kZSAmJiB0eXBlICE9PSAnTG9hZGluZycpIHJldHVybiBmYWxzZTtcblx0XHRcdGlmICghdGhpcy4kc2xvdHMpIHJldHVybiBmYWxzZTtcblx0XHRcdGlmICh0eXBlID09PSAnQ3VzdG9tJykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaG93RGVmYXVsdExvYWRpbmdNb3JlVGV4dCAmJiAhKHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gRW51bS5Nb3JlLk5vTW9yZSAmJiAhdGhpcy5zaG93TG9hZGluZ01vcmVOb01vcmVWaWV3KTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlcyA9IHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gRW51bS5Nb3JlW3R5cGVdICYmIHRoaXMuJHNsb3RzW2Bsb2FkaW5nTW9yZSR7dHlwZX1gXSAmJiAodHlwZSA9PT0gJ05vTW9yZScgPyB0aGlzLnNob3dMb2FkaW5nTW9yZU5vTW9yZVZpZXcgOiB0cnVlKTtcblx0XHRcdGlmIChyZXMpIHtcblxuXHRcdFx0XHRpZiAoIXRoaXMuaXNJb3MpIHtcblx0XHRcdFx0XHR0aGlzLm5Mb2FkaW5nTW9yZUZpeGVkSGVpZ2h0ID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///91\n");

/***/ }),
/* 92 */
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/modules/loading.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! .././z-paging-utils */ 47));\nvar _zPagingEnum = _interopRequireDefault(__webpack_require__(/*! .././z-paging-enum */ 57));\n// [z-paging]loading相关模块\nvar _default = {\n  props: {\n    //第一次加载后自动隐藏loading slot，默认为是\n    autoHideLoadingAfterFirstLoaded: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('autoHideLoadingAfterFirstLoaded', true)\n    },\n    //loading slot是否铺满屏幕并固定，默认为否\n    loadingFullFixed: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('loadingFullFixed', false)\n    },\n    //是否自动显示系统Loading：即uni.showLoading，若开启则将在刷新列表时(调用reload、refresh时)显示，下拉刷新和滚动到底部加载更多不会显示，默认为false。\n    autoShowSystemLoading: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('autoShowSystemLoading', false)\n    },\n    //显示系统Loading时是否显示透明蒙层，防止触摸穿透，默认为是(H5、App、微信小程序、百度小程序有效)\n    systemLoadingMask: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('systemLoadingMask', true)\n    },\n    //显示系统Loading时显示的文字，默认为\"加载中\"\n    systemLoadingText: {\n      type: [String, Object],\n      default: _zPagingUtils.default.gc('systemLoadingText', null)\n    }\n  },\n  data: function data() {\n    return {\n      loading: false,\n      loadingForNow: false\n    };\n  },\n  watch: {\n    loadingStatus: function loadingStatus(newVal) {\n      var _this = this;\n      this.$emit('loadingStatusChange', newVal);\n      this.$nextTick(function () {\n        _this.loadingStatusAfterRender = newVal;\n      });\n      if (this.useChatRecordMode) {\n        if (this.pageNo === this.defaultPageNo && newVal === _zPagingEnum.default.More.NoMore) {\n          this.nIsFirstPageAndNoMore = true;\n          return;\n        }\n      }\n      this.nIsFirstPageAndNoMore = false;\n    },\n    loading: function loading(newVal) {\n      if (newVal) {\n        this.loadingForNow = newVal;\n      }\n    }\n  },\n  computed: {\n    showLoading: function showLoading() {\n      if (this.firstPageLoaded || !this.loading || !this.loadingForNow) return false;\n      if (this.finalShowSystemLoading) {\n        uni.showLoading({\n          title: this.finalSystemLoadingText,\n          mask: this.systemLoadingMask\n        });\n      }\n      return this.autoHideLoadingAfterFirstLoaded ? this.fromEmptyViewReload ? true : !this.pagingLoaded : this.loadingType === _zPagingEnum.default.LoadingType.Refresher;\n    },\n    finalShowSystemLoading: function finalShowSystemLoading() {\n      return this.autoShowSystemLoading && this.loadingType === _zPagingEnum.default.LoadingType.Refresher;\n    }\n  },\n  methods: {\n    //处理开始加载更多状态\n    _startLoading: function _startLoading() {\n      var isReload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      if (this.showLoadingMoreWhenReload && !this.isUserPullDown || !isReload) {\n        this.loadingStatus = _zPagingEnum.default.More.Loading;\n      }\n      this.loading = true;\n    },\n    //停止系统loading和refresh\n    _endSystemLoadingAndRefresh: function _endSystemLoadingAndRefresh() {\n      this.finalShowSystemLoading && uni.hideLoading();\n      !this.useCustomRefresher && uni.stopPullDownRefresh();\n      this.usePageScroll && uni.stopPullDownRefresh();\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy9tb2R1bGVzL2xvYWRpbmcuanMiXSwibmFtZXMiOlsicHJvcHMiLCJhdXRvSGlkZUxvYWRpbmdBZnRlckZpcnN0TG9hZGVkIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidSIsImdjIiwibG9hZGluZ0Z1bGxGaXhlZCIsImF1dG9TaG93U3lzdGVtTG9hZGluZyIsInN5c3RlbUxvYWRpbmdNYXNrIiwic3lzdGVtTG9hZGluZ1RleHQiLCJTdHJpbmciLCJPYmplY3QiLCJkYXRhIiwibG9hZGluZyIsImxvYWRpbmdGb3JOb3ciLCJ3YXRjaCIsImxvYWRpbmdTdGF0dXMiLCJuZXdWYWwiLCIkZW1pdCIsIiRuZXh0VGljayIsImxvYWRpbmdTdGF0dXNBZnRlclJlbmRlciIsInVzZUNoYXRSZWNvcmRNb2RlIiwicGFnZU5vIiwiZGVmYXVsdFBhZ2VObyIsIkVudW0iLCJNb3JlIiwiTm9Nb3JlIiwibklzRmlyc3RQYWdlQW5kTm9Nb3JlIiwiY29tcHV0ZWQiLCJzaG93TG9hZGluZyIsImZpcnN0UGFnZUxvYWRlZCIsImZpbmFsU2hvd1N5c3RlbUxvYWRpbmciLCJ1bmkiLCJ0aXRsZSIsImZpbmFsU3lzdGVtTG9hZGluZ1RleHQiLCJtYXNrIiwiZnJvbUVtcHR5Vmlld1JlbG9hZCIsInBhZ2luZ0xvYWRlZCIsImxvYWRpbmdUeXBlIiwiTG9hZGluZ1R5cGUiLCJSZWZyZXNoZXIiLCJtZXRob2RzIiwiX3N0YXJ0TG9hZGluZyIsImlzUmVsb2FkIiwic2hvd0xvYWRpbmdNb3JlV2hlblJlbG9hZCIsImlzVXNlclB1bGxEb3duIiwiTG9hZGluZyIsIl9lbmRTeXN0ZW1Mb2FkaW5nQW5kUmVmcmVzaCIsImhpZGVMb2FkaW5nIiwidXNlQ3VzdG9tUmVmcmVzaGVyIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInVzZVBhZ2VTY3JvbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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QyxhQUFhLDJCQUFtQjtNQUFBLElBQWxCQyxRQUFRLHVFQUFHLEtBQUs7TUFDN0IsSUFBSyxJQUFJLENBQUNDLHlCQUF5QixJQUFJLENBQUMsSUFBSSxDQUFDQyxjQUFjLElBQUssQ0FBQ0YsUUFBUSxFQUFFO1FBQzFFLElBQUksQ0FBQzNCLGFBQWEsR0FBR1Esb0JBQUksQ0FBQ0MsSUFBSSxDQUFDcUIsT0FBTztNQUN2QztNQUNBLElBQUksQ0FBQ2pDLE9BQU8sR0FBRyxJQUFJO0lBQ3BCLENBQUM7SUFDRDtJQUNBa0MsMkJBQTJCLHlDQUFFO01BQzVCLElBQUksQ0FBQ2hCLHNCQUFzQixJQUFJQyxHQUFHLENBQUNnQixXQUFXLEVBQUU7TUFDaEQsQ0FBQyxJQUFJLENBQUNDLGtCQUFrQixJQUFJakIsR0FBRyxDQUFDa0IsbUJBQW1CLEVBQUU7TUFFckQsSUFBSSxDQUFDQyxhQUFhLElBQUluQixHQUFHLENBQUNrQixtQkFBbUIsRUFBRTtJQUVoRDtFQUNEO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6IjkyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3otcGFnaW5nXWxvYWRpbmfnm7jlhbPmqKHlnZdcbmltcG9ydCB1IGZyb20gJy4uLy4vei1wYWdpbmctdXRpbHMnXG5pbXBvcnQgRW51bSBmcm9tICcuLi8uL3otcGFnaW5nLWVudW0nXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IHtcblx0XHQvL+esrOS4gOasoeWKoOi9veWQjuiHquWKqOmakOiXj2xvYWRpbmcgc2xvdO+8jOm7mOiupOS4uuaYr1xuXHRcdGF1dG9IaWRlTG9hZGluZ0FmdGVyRmlyc3RMb2FkZWQ6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdhdXRvSGlkZUxvYWRpbmdBZnRlckZpcnN0TG9hZGVkJywgdHJ1ZSlcblx0XHR9LFxuXHRcdC8vbG9hZGluZyBzbG905piv5ZCm6ZO65ruh5bGP5bmV5bm25Zu65a6a77yM6buY6K6k5Li65ZCmXG5cdFx0bG9hZGluZ0Z1bGxGaXhlZDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2xvYWRpbmdGdWxsRml4ZWQnLCBmYWxzZSlcblx0XHR9LFxuXHRcdC8v5piv5ZCm6Ieq5Yqo5pi+56S657O757ufTG9hZGluZ++8muWNs3VuaS5zaG93TG9hZGluZ++8jOiLpeW8gOWQr+WImeWwhuWcqOWIt+aWsOWIl+ihqOaXtijosIPnlKhyZWxvYWTjgIFyZWZyZXNo5pe2KeaYvuekuu+8jOS4i+aLieWIt+aWsOWSjOa7muWKqOWIsOW6lemDqOWKoOi9veabtOWkmuS4jeS8muaYvuekuu+8jOm7mOiupOS4umZhbHNl44CCXG5cdFx0YXV0b1Nob3dTeXN0ZW1Mb2FkaW5nOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnYXV0b1Nob3dTeXN0ZW1Mb2FkaW5nJywgZmFsc2UpXG5cdFx0fSxcblx0XHQvL+aYvuekuuezu+e7n0xvYWRpbmfml7bmmK/lkKbmmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI/vvIzpu5jorqTkuLrmmK8oSDXjgIFBcHDjgIHlvq7kv6HlsI/nqIvluo/jgIHnmb7luqblsI/nqIvluo/mnInmlYgpXG5cdFx0c3lzdGVtTG9hZGluZ01hc2s6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdzeXN0ZW1Mb2FkaW5nTWFzaycsIHRydWUpXG5cdFx0fSxcblx0XHQvL+aYvuekuuezu+e7n0xvYWRpbmfml7bmmL7npLrnmoTmloflrZfvvIzpu5jorqTkuLpcIuWKoOi9veS4rVwiXG5cdFx0c3lzdGVtTG9hZGluZ1RleHQ6IHtcblx0XHRcdHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdzeXN0ZW1Mb2FkaW5nVGV4dCcsIG51bGwpXG5cdFx0fSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRsb2FkaW5nRm9yTm93OiBmYWxzZSxcblx0XHR9XG5cdH0sXG5cdHdhdGNoOiB7XG5cdFx0bG9hZGluZ1N0YXR1cyhuZXdWYWwpIHtcblx0XHRcdHRoaXMuJGVtaXQoJ2xvYWRpbmdTdGF0dXNDaGFuZ2UnLCBuZXdWYWwpO1xuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmxvYWRpbmdTdGF0dXNBZnRlclJlbmRlciA9IG5ld1ZhbDtcblx0XHRcdH0pXG5cblx0XHRcdGlmICh0aGlzLnVzZUNoYXRSZWNvcmRNb2RlKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhZ2VObyA9PT0gdGhpcy5kZWZhdWx0UGFnZU5vICYmIG5ld1ZhbCA9PT0gRW51bS5Nb3JlLk5vTW9yZSkge1xuXHRcdFx0XHRcdHRoaXMubklzRmlyc3RQYWdlQW5kTm9Nb3JlID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubklzRmlyc3RQYWdlQW5kTm9Nb3JlID0gZmFsc2U7XG5cblx0XHR9LFxuXHRcdGxvYWRpbmcobmV3VmFsKXtcblx0XHRcdGlmIChuZXdWYWwpIHtcblx0XHRcdFx0dGhpcy5sb2FkaW5nRm9yTm93ID0gbmV3VmFsO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0c2hvd0xvYWRpbmcoKSB7XG5cdFx0XHRpZiAodGhpcy5maXJzdFBhZ2VMb2FkZWQgfHwgIXRoaXMubG9hZGluZyB8fCAhdGhpcy5sb2FkaW5nRm9yTm93KSByZXR1cm4gZmFsc2U7XG5cdFx0XHRpZiAodGhpcy5maW5hbFNob3dTeXN0ZW1Mb2FkaW5nKXtcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcblx0XHRcdFx0XHR0aXRsZTogdGhpcy5maW5hbFN5c3RlbUxvYWRpbmdUZXh0LFxuXHRcdFx0XHRcdG1hc2s6IHRoaXMuc3lzdGVtTG9hZGluZ01hc2tcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLmF1dG9IaWRlTG9hZGluZ0FmdGVyRmlyc3RMb2FkZWQgPyAodGhpcy5mcm9tRW1wdHlWaWV3UmVsb2FkID8gdHJ1ZSA6ICF0aGlzLnBhZ2luZ0xvYWRlZCkgOiB0aGlzLmxvYWRpbmdUeXBlID09PSBFbnVtLkxvYWRpbmdUeXBlLlJlZnJlc2hlcjtcblx0XHR9LFxuXHRcdGZpbmFsU2hvd1N5c3RlbUxvYWRpbmcoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hdXRvU2hvd1N5c3RlbUxvYWRpbmcgJiYgdGhpcy5sb2FkaW5nVHlwZSA9PT0gRW51bS5Mb2FkaW5nVHlwZS5SZWZyZXNoZXI7XG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Ly/lpITnkIblvIDlp4vliqDovb3mm7TlpJrnirbmgIFcblx0XHRfc3RhcnRMb2FkaW5nKGlzUmVsb2FkID0gZmFsc2UpIHtcblx0XHRcdGlmICgodGhpcy5zaG93TG9hZGluZ01vcmVXaGVuUmVsb2FkICYmICF0aGlzLmlzVXNlclB1bGxEb3duKSB8fCAhaXNSZWxvYWQpIHtcblx0XHRcdFx0dGhpcy5sb2FkaW5nU3RhdHVzID0gRW51bS5Nb3JlLkxvYWRpbmc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXHRcdH0sXG5cdFx0Ly/lgZzmraLns7vnu59sb2FkaW5n5ZKMcmVmcmVzaFxuXHRcdF9lbmRTeXN0ZW1Mb2FkaW5nQW5kUmVmcmVzaCgpe1xuXHRcdFx0dGhpcy5maW5hbFNob3dTeXN0ZW1Mb2FkaW5nICYmIHVuaS5oaWRlTG9hZGluZygpO1xuXHRcdFx0IXRoaXMudXNlQ3VzdG9tUmVmcmVzaGVyICYmIHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XG5cblx0XHRcdHRoaXMudXNlUGFnZVNjcm9sbCAmJiB1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xuXG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///92\n");

/***/ }),
/* 93 */
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/modules/scroller.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 43));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 45));\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! .././z-paging-utils */ 47));\nvar _zPagingEnum = _interopRequireDefault(__webpack_require__(/*! .././z-paging-enum */ 57));\n// [z-paging]scroll相关模块\n\nvar weexDom = weex.requireModule('dom');\nvar _default = {\n  props: {\n    //使用页面滚动，默认为否，当设置为是时则使用页面的滚动而非此组件内部的scroll-view的滚动，使用页面滚动时z-paging无需设置确定的高度且对于长列表展示性能更高，但配置会略微繁琐\n    usePageScroll: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('usePageScroll', false)\n    },\n    //是否可以滚动，使用内置scroll-view和nvue时有效，默认为是\n    scrollable: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('scrollable', true)\n    },\n    //控制是否出现滚动条，默认为是\n    showScrollbar: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('showScrollbar', true)\n    },\n    //是否允许横向滚动，默认为否\n    scrollX: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('scrollX', false)\n    },\n    //iOS设备上滚动到顶部时是否允许回弹效果，默认为否。关闭回弹效果后可使滚动到顶部与下拉刷新更连贯，但是有吸顶view时滚动到顶部时可能出现抖动。\n    scrollToTopBounceEnabled: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('scrollToTopBounceEnabled', false)\n    },\n    //iOS设备上滚动到底部时是否允许回弹效果，默认为是。\n    scrollToBottomBounceEnabled: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('scrollToBottomBounceEnabled', true)\n    },\n    //在设置滚动条位置时使用动画过渡，默认为否\n    scrollWithAnimation: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('scrollWithAnimation', false)\n    },\n    //值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素\n    scrollIntoView: {\n      type: String,\n      default: _zPagingUtils.default.gc('scrollIntoView', '')\n    }\n  },\n  data: function data() {\n    return {\n      scrollTop: 0,\n      oldScrollTop: 0,\n      scrollViewStyle: {},\n      scrollViewContainerStyle: {},\n      scrollViewInStyle: {},\n      pageScrollTop: -1,\n      scrollEnable: true,\n      privateScrollWithAnimation: -1,\n      cacheScrollNodeHeight: -1\n    };\n  },\n  watch: {\n    oldScrollTop: function oldScrollTop(newVal) {\n      !this.usePageScroll && this._scrollTopChange(newVal, false);\n    },\n    pageScrollTop: function pageScrollTop(newVal) {\n      this.usePageScroll && this._scrollTopChange(newVal, true);\n    },\n    usePageScroll: {\n      handler: function handler(newVal) {\n        this.loaded && this.autoHeight && this._setAutoHeight(!newVal);\n      },\n      immediate: true\n    },\n    finalScrollTop: function finalScrollTop(newVal) {\n      if (!this.useChatRecordMode) {\n        this.renderPropScrollTop = newVal < 6 ? 0 : 10;\n      }\n    }\n  },\n  computed: {\n    finalScrollWithAnimation: function finalScrollWithAnimation() {\n      if (this.privateScrollWithAnimation !== -1) {\n        var scrollWithAnimation = this.privateScrollWithAnimation === 1;\n        this.privateScrollWithAnimation = -1;\n        return scrollWithAnimation;\n      }\n      return this.scrollWithAnimation;\n    },\n    finalScrollViewStyle: function finalScrollViewStyle() {\n      if (this.superContentZIndex != 1) {\n        this.scrollViewStyle['z-index'] = this.superContentZIndex;\n        this.scrollViewStyle['position'] = 'relative';\n      }\n      return this.scrollViewStyle;\n    },\n    finalScrollTop: function finalScrollTop() {\n      return this.usePageScroll ? this.pageScrollTop : this.oldScrollTop;\n    },\n    finalIsOldWebView: function finalIsOldWebView() {\n      return this.isOldWebView && !this.usePageScroll;\n    }\n  },\n  methods: {\n    //滚动到顶部，animate为是否展示滚动动画，默认为是\n    scrollToTop: function scrollToTop(animate) {\n      var _this = this;\n      var checkReverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      if (checkReverse && this.useChatRecordMode) {\n        if (!this.nIsFirstPageAndNoMore) {\n          this.scrollToBottom(animate, false);\n          return;\n        }\n      }\n      this.$nextTick(function () {\n        _this._scrollToTop(animate, false);\n        if (_this.nvueFastScroll && animate) {\n          _zPagingUtils.default.delay(function () {\n            _this._scrollToTop(false, false);\n          });\n        }\n      });\n    },\n    //滚动到底部，animate为是否展示滚动动画，默认为是\n    scrollToBottom: function scrollToBottom(animate) {\n      var _this2 = this;\n      var checkReverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      if (checkReverse && this.useChatRecordMode) {\n        if (!this.nIsFirstPageAndNoMore) {\n          this.scrollToTop(animate, false);\n          return;\n        }\n      }\n      this.$nextTick(function () {\n        _this2._scrollToBottom(animate);\n        if (_this2.nvueFastScroll && animate) {\n          _zPagingUtils.default.delay(function () {\n            _this2._scrollToBottom(false);\n          });\n        }\n      });\n    },\n    //滚动到指定view(vue中有效)。sel为需要滚动的view的id值，不包含\"#\"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否\n    scrollIntoViewById: function scrollIntoViewById(sel, offset, animate) {\n      this._scrollIntoView(sel, offset, animate);\n    },\n    //滚动到指定view(vue中有效)。nodeTop为需要滚动的view的top值(通过uni.createSelectorQuery()获取)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否\n    scrollIntoViewByNodeTop: function scrollIntoViewByNodeTop(nodeTop, offset, animate) {\n      var _this3 = this;\n      this.scrollTop = this.oldScrollTop;\n      this.$nextTick(function () {\n        _this3._scrollIntoViewByNodeTop(nodeTop, offset, animate);\n      });\n    },\n    //滚动到指定位置(vue中有效)。y为与顶部的距离，单位为px；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否\n    scrollToY: function scrollToY(y, offset, animate) {\n      var _this4 = this;\n      this.scrollTop = this.oldScrollTop;\n      this.$nextTick(function () {\n        _this4._scrollToY(y, offset, animate);\n      });\n    },\n    //滚动到指定view(nvue中有效)。index为需要滚动的view的index(第几个)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否\n    scrollIntoViewByIndex: function scrollIntoViewByIndex(index, offset, animate) {\n      this._scrollIntoView(index, offset, animate);\n    },\n    //滚动到指定view(nvue中有效)。view为需要滚动的view(通过`this.$refs.xxx`获取)，不包含\"#\"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否\n    scrollIntoViewByView: function scrollIntoViewByView(view, offset, animate) {\n      this._scrollIntoView(view, offset, animate);\n    },\n    //当使用页面滚动并且自定义下拉刷新时，请在页面的onPageScroll中调用此方法，告知z-paging当前的pageScrollTop，否则会导致在任意位置都可以下拉刷新\n    updatePageScrollTop: function updatePageScrollTop(value) {\n      this.pageScrollTop = value;\n    },\n    //当使用页面滚动并且设置了slot=\"top\"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot=\"top\"的view高度动态改变时，在其高度需要更新时调用此方法\n    updatePageScrollTopHeight: function updatePageScrollTopHeight() {\n      this._updatePageScrollTopOrBottomHeight('top');\n    },\n    //当使用页面滚动并且设置了slot=\"bottom\"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot=\"bottom\"的view高度动态改变时，在其高度需要更新时调用此方法\n    updatePageScrollBottomHeight: function updatePageScrollBottomHeight() {\n      this._updatePageScrollTopOrBottomHeight('bottom');\n    },\n    //更新slot=\"left\"和slot=\"right\"宽度，当slot=\"left\"或slot=\"right\"宽度动态改变时调用\n    updateLeftAndRightWidth: function updateLeftAndRightWidth() {\n      var _this5 = this;\n      if (!this.finalIsOldWebView) return;\n      this.$nextTick(function () {\n        return _this5._updateLeftAndRightWidth(_this5.scrollViewContainerStyle, 'zp-page');\n      });\n    },\n    //更新z-paging内置scroll-view的scrollTop\n    updateScrollViewScrollTop: function updateScrollViewScrollTop(scrollTop) {\n      var _this6 = this;\n      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      this.privateScrollWithAnimation = animate ? 1 : 0;\n      this.scrollTop = this.oldScrollTop;\n      this.$nextTick(function () {\n        _this6.scrollTop = scrollTop;\n        _this6.oldScrollTop = _this6.scrollTop;\n      });\n    },\n    //当滚动到顶部时\n    _onScrollToUpper: function _onScrollToUpper() {\n      var _this7 = this;\n      this.$emit('scrolltoupper');\n      this.$emit('scrollTopChange', 0);\n      this.$nextTick(function () {\n        _this7.oldScrollTop = 0;\n      });\n      if (!this.useChatRecordMode || this.loadingStatus === _zPagingEnum.default.More.NoMore) return;\n      this._onLoadingMore('click');\n    },\n    //当滚动到底部时\n    _onScrollToLower: function _onScrollToLower(e) {\n      (!e.detail || !e.detail.direction || e.detail.direction === 'bottom') && this._onLoadingMore('toBottom');\n    },\n    //滚动到顶部\n    _scrollToTop: function _scrollToTop() {\n      var _this8 = this;\n      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      var isPrivate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      var el = this.$refs['zp-n-list-top-tag'];\n      if (this.usePageScroll) {\n        this._getNodeClientRect('zp-page-scroll-top', false).then(function (node) {\n          var nodeHeight = node ? node[0].height : 0;\n          weexDom.scrollToElement(el, {\n            offset: -nodeHeight,\n            animated: animate\n          });\n        });\n      } else {\n        if (!this.isIos && this.nvueListIs === 'scroller') {\n          this._getNodeClientRect('zp-n-refresh-container', false).then(function (node) {\n            var nodeHeight = node ? node[0].height : 0;\n            weexDom.scrollToElement(el, {\n              offset: -nodeHeight,\n              animated: animate\n            });\n          });\n        } else {\n          weexDom.scrollToElement(el, {\n            offset: 0,\n            animated: animate\n          });\n        }\n      }\n      return;\n      if (this.usePageScroll) {\n        this.$nextTick(function () {\n          uni.pageScrollTo({\n            scrollTop: 0,\n            duration: animate ? 100 : 0\n          });\n        });\n        return;\n      }\n      this.privateScrollWithAnimation = animate ? 1 : 0;\n      this.scrollTop = this.oldScrollTop;\n      this.$nextTick(function () {\n        _this8.scrollTop = 0;\n        _this8.oldScrollTop = _this8.scrollTop;\n      });\n    },\n    //滚动到底部\n    _scrollToBottom: function _scrollToBottom() {\n      var _arguments = arguments,\n        _this9 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var animate, el, pagingContainerNode, scrollViewNode, pagingContainerH, scrollViewH;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                animate = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : true;\n                el = _this9.$refs['zp-n-list-bottom-tag'];\n                if (el) {\n                  weexDom.scrollToElement(el, {\n                    offset: 0,\n                    animated: animate\n                  });\n                } else {\n                  _zPagingUtils.default.consoleErr('滚动到底部失败，因为您设置了hideNvueBottomTag为true');\n                }\n                return _context.abrupt(\"return\");\n              case 7:\n                _context.prev = 7;\n                _this9.privateScrollWithAnimation = animate ? 1 : 0;\n                _context.next = 11;\n                return _this9._getNodeClientRect('.zp-paging-container');\n              case 11:\n                pagingContainerNode = _context.sent;\n                _context.next = 14;\n                return _this9._getNodeClientRect('.zp-scroll-view');\n              case 14:\n                scrollViewNode = _context.sent;\n                pagingContainerH = pagingContainerNode ? pagingContainerNode[0].height : 0;\n                scrollViewH = scrollViewNode ? scrollViewNode[0].height : 0;\n                if (pagingContainerH > scrollViewH) {\n                  _this9.scrollTop = _this9.oldScrollTop;\n                  _this9.$nextTick(function () {\n                    _this9.scrollTop = pagingContainerH - scrollViewH + _this9.virtualPlaceholderTopHeight;\n                    _this9.oldScrollTop = _this9.scrollTop;\n                  });\n                }\n                _context.next = 22;\n                break;\n              case 20:\n                _context.prev = 20;\n                _context.t0 = _context[\"catch\"](7);\n              case 22:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[7, 20]]);\n      }))();\n    },\n    //滚动到指定view\n    _scrollIntoView: function _scrollIntoView(sel) {\n      var _this10 = this;\n      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var animate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var finishCallback = arguments.length > 3 ? arguments[3] : undefined;\n      try {\n        this.scrollTop = this.oldScrollTop;\n        this.$nextTick(function () {\n          var refs = _this10.$parent.$refs;\n          if (!refs) return;\n          var dataType = Object.prototype.toString.call(sel);\n          var el = null;\n          if (dataType === '[object Number]') {\n            var els = refs[\"z-paging-\".concat(sel)];\n            el = els ? els[0] : null;\n          } else if (dataType === '[object Array]') {\n            el = sel[0];\n          } else {\n            el = sel;\n          }\n          if (el) {\n            weexDom.scrollToElement(el, {\n              offset: -offset,\n              animated: animate\n            });\n          } else {\n            _zPagingUtils.default.consoleErr('在nvue中滚动到指定位置，cell必须设置 :ref=\"`z-paging-${index}`\"');\n          }\n          return;\n          _this10._getNodeClientRect('#' + sel.replace('#', ''), _this10.$parent).then(function (node) {\n            if (node) {\n              var nodeTop = node[0].top;\n              _this10._scrollIntoViewByNodeTop(nodeTop, offset, animate);\n              finishCallback && finishCallback();\n            }\n          });\n        });\n      } catch (e) {}\n    },\n    //通过nodeTop滚动到指定view\n    _scrollIntoViewByNodeTop: function _scrollIntoViewByNodeTop(nodeTop) {\n      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var animate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      this._scrollToY(nodeTop, offset, animate, true);\n    },\n    //滚动到指定位置\n    _scrollToY: function _scrollToY(y) {\n      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var animate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var addScrollTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n      this.privateScrollWithAnimation = animate ? 1 : 0;\n      if (this.usePageScroll) {\n        uni.pageScrollTo({\n          scrollTop: y - offset,\n          duration: animate ? 100 : 0\n        });\n      } else {\n        if (addScrollTop) {\n          y += this.oldScrollTop;\n        }\n        this.scrollTop = y - offset;\n        this.oldScrollTop = this.scrollTop;\n      }\n    },\n    //scroll-view滚动中\n    _scroll: function _scroll(e) {\n      this.$emit('scroll', e);\n      var scrollTop = e.detail.scrollTop;\n      this.oldScrollTop = scrollTop;\n      var scrollDiff = e.detail.scrollHeight - this.oldScrollTop;\n      !this.isIos && this._checkScrolledToBottom(scrollDiff);\n    },\n    //检测scrollView是否要铺满屏幕\n    _doCheckScrollViewShouldFullHeight: function _doCheckScrollViewShouldFullHeight(totalData) {\n      if (this.autoFullHeight && this.usePageScroll && this.isTotalChangeFromAddData) {\n        this._preCheckShowNoMoreInside(totalData);\n      } else {\n        this._preCheckShowNoMoreInside(totalData);\n      }\n    },\n    //检测z-paging是否要全屏覆盖(当使用页面滚动并且不满全屏时，默认z-paging需要铺满全屏，避免数据过少时内部的empty-view无法正确展示)\n    _checkScrollViewShouldFullHeight: function _checkScrollViewShouldFullHeight(callback) {\n      var _this11 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var scrollViewNode, pagingContainerNode, scrollViewHeight, scrollViewTop;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                _context2.next = 3;\n                return _this11._getNodeClientRect('.zp-scroll-view');\n              case 3:\n                scrollViewNode = _context2.sent;\n                _context2.next = 6;\n                return _this11._getNodeClientRect('.zp-paging-container-content');\n              case 6:\n                pagingContainerNode = _context2.sent;\n                if (!(!scrollViewNode || !pagingContainerNode)) {\n                  _context2.next = 9;\n                  break;\n                }\n                return _context2.abrupt(\"return\");\n              case 9:\n                scrollViewHeight = pagingContainerNode[0].height;\n                scrollViewTop = scrollViewNode[0].top;\n                if (_this11.isAddedData && scrollViewHeight + scrollViewTop <= _this11.windowHeight) {\n                  _this11._setAutoHeight(true, scrollViewNode);\n                  callback(scrollViewNode, pagingContainerNode);\n                } else {\n                  _this11._setAutoHeight(false);\n                  callback(null, null);\n                }\n                _context2.next = 17;\n                break;\n              case 14:\n                _context2.prev = 14;\n                _context2.t0 = _context2[\"catch\"](0);\n                callback(null, null);\n              case 17:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 14]]);\n      }))();\n    },\n    //scrollTop改变时触发\n    _scrollTopChange: function _scrollTopChange(newVal, isPageScrollTop) {\n      this.$emit('scrollTopChange', newVal);\n      this.$emit('update:scrollTop', newVal);\n      this._checkShouldShowBackToTop(newVal);\n      var scrollTop = this.isIos ? newVal > 5 ? 6 : 0 : newVal;\n      if (isPageScrollTop) {\n        this.wxsPageScrollTop = scrollTop;\n      } else {\n        this.wxsScrollTop = scrollTop;\n      }\n    },\n    //更新使用页面滚动时slot=\"top\"或\"bottom\"插入view的高度\n    _updatePageScrollTopOrBottomHeight: function _updatePageScrollTopOrBottomHeight(type) {\n      var _this12 = this;\n      this._doCheckScrollViewShouldFullHeight(this.realTotalData);\n      var node = \".zp-page-\".concat(type);\n      var marginText = \"margin\".concat(type.slice(0, 1).toUpperCase() + type.slice(1));\n      var safeAreaInsetBottomAdd = this.safeAreaInsetBottom;\n      this.$nextTick(function () {\n        var delayTime = 0;\n        delayTime = 50;\n        _zPagingUtils.default.delay(function () {\n          _this12._getNodeClientRect(node).then(function (res) {\n            if (res) {\n              var pageScrollNodeHeight = res[0].height;\n              if (type === 'bottom') {\n                if (safeAreaInsetBottomAdd) {\n                  pageScrollNodeHeight += _this12.safeAreaBottom;\n                }\n              } else {\n                _this12.cacheTopHeight = pageScrollNodeHeight;\n              }\n              _this12.$set(_this12.scrollViewStyle, marginText, \"\".concat(pageScrollNodeHeight, \"px\"));\n            } else if (safeAreaInsetBottomAdd) {\n              _this12.$set(_this12.scrollViewStyle, marginText, \"\".concat(_this12.safeAreaBottom, \"px\"));\n            }\n          });\n        }, delayTime);\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy9tb2R1bGVzL3Njcm9sbGVyLmpzIl0sIm5hbWVzIjpbIndlZXhEb20iLCJ3ZWV4IiwicmVxdWlyZU1vZHVsZSIsInByb3BzIiwidXNlUGFnZVNjcm9sbCIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInUiLCJnYyIsInNjcm9sbGFibGUiLCJzaG93U2Nyb2xsYmFyIiwic2Nyb2xsWCIsInNjcm9sbFRvVG9wQm91bmNlRW5hYmxlZCIsInNjcm9sbFRvQm90dG9tQm91bmNlRW5hYmxlZCIsInNjcm9sbFdpdGhBbmltYXRpb24iLCJzY3JvbGxJbnRvVmlldyIsIlN0cmluZyIsImRhdGEiLCJzY3JvbGxUb3AiLCJvbGRTY3JvbGxUb3AiLCJzY3JvbGxWaWV3U3R5bGUiLCJzY3JvbGxWaWV3Q29udGFpbmVyU3R5bGUiLCJzY3JvbGxWaWV3SW5TdHlsZSIsInBhZ2VTY3JvbGxUb3AiLCJzY3JvbGxFbmFibGUiLCJwcml2YXRlU2Nyb2xsV2l0aEFuaW1hdGlvbiIsImNhY2hlU2Nyb2xsTm9kZUhlaWdodCIsIndhdGNoIiwibmV3VmFsIiwiX3Njcm9sbFRvcENoYW5nZSIsImhhbmRsZXIiLCJsb2FkZWQiLCJhdXRvSGVpZ2h0IiwiX3NldEF1dG9IZWlnaHQiLCJpbW1lZGlhdGUiLCJmaW5hbFNjcm9sbFRvcCIsInVzZUNoYXRSZWNvcmRNb2RlIiwicmVuZGVyUHJvcFNjcm9sbFRvcCIsImNvbXB1dGVkIiwiZmluYWxTY3JvbGxXaXRoQW5pbWF0aW9uIiwiZmluYWxTY3JvbGxWaWV3U3R5bGUiLCJzdXBlckNvbnRlbnRaSW5kZXgiLCJmaW5hbElzT2xkV2ViVmlldyIsImlzT2xkV2ViVmlldyIsIm1ldGhvZHMiLCJzY3JvbGxUb1RvcCIsImFuaW1hdGUiLCJjaGVja1JldmVyc2UiLCJuSXNGaXJzdFBhZ2VBbmROb01vcmUiLCJzY3JvbGxUb0JvdHRvbSIsIiRuZXh0VGljayIsIl9zY3JvbGxUb1RvcCIsIm52dWVGYXN0U2Nyb2xsIiwiZGVsYXkiLCJfc2Nyb2xsVG9Cb3R0b20iLCJzY3JvbGxJbnRvVmlld0J5SWQiLCJzZWwiLCJvZmZzZXQiLCJfc2Nyb2xsSW50b1ZpZXciLCJzY3JvbGxJbnRvVmlld0J5Tm9kZVRvcCIsIm5vZGVUb3AiLCJfc2Nyb2xsSW50b1ZpZXdCeU5vZGVUb3AiLCJzY3JvbGxUb1kiLCJ5IiwiX3Njcm9sbFRvWSIsInNjcm9sbEludG9WaWV3QnlJbmRleCIsImluZGV4Iiwic2Nyb2xsSW50b1ZpZXdCeVZpZXciLCJ2aWV3IiwidXBkYXRlUGFnZVNjcm9sbFRvcCIsInZhbHVlIiwidXBkYXRlUGFnZVNjcm9sbFRvcEhlaWdodCIsIl91cGRhdGVQYWdlU2Nyb2xsVG9wT3JCb3R0b21IZWlnaHQiLCJ1cGRhdGVQYWdlU2Nyb2xsQm90dG9tSGVpZ2h0IiwidXBkYXRlTGVmdEFuZFJpZ2h0V2lkdGgiLCJfdXBkYXRlTGVmdEFuZFJpZ2h0V2lkdGgiLCJ1cGRhdGVTY3JvbGxWaWV3U2Nyb2xsVG9wIiwiX29uU2Nyb2xsVG9VcHBlciIsIiRlbWl0IiwibG9hZGluZ1N0YXR1cyIsIkVudW0iLCJNb3JlIiwiTm9Nb3JlIiwiX29uTG9hZGluZ01vcmUiLCJfb25TY3JvbGxUb0xvd2VyIiwiZSIsImRldGFpbCIsImRpcmVjdGlvbiIsImlzUHJpdmF0ZSIsImVsIiwiJHJlZnMiLCJfZ2V0Tm9kZUNsaWVudFJlY3QiLCJ0aGVuIiwibm9kZSIsIm5vZGVIZWlnaHQiLCJoZWlnaHQiLCJzY3JvbGxUb0VsZW1lbnQiLCJhbmltYXRlZCIsImlzSW9zIiwibnZ1ZUxpc3RJcyIsInVuaSIsInBhZ2VTY3JvbGxUbyIsImR1cmF0aW9uIiwiY29uc29sZUVyciIsInBhZ2luZ0NvbnRhaW5lck5vZGUiLCJzY3JvbGxWaWV3Tm9kZSIsInBhZ2luZ0NvbnRhaW5lckgiLCJzY3JvbGxWaWV3SCIsInZpcnR1YWxQbGFjZWhvbGRlclRvcEhlaWdodCIsImZpbmlzaENhbGxiYWNrIiwicmVmcyIsIiRwYXJlbnQiLCJkYXRhVHlwZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImVscyIsInJlcGxhY2UiLCJ0b3AiLCJhZGRTY3JvbGxUb3AiLCJfc2Nyb2xsIiwic2Nyb2xsRGlmZiIsInNjcm9sbEhlaWdodCIsIl9jaGVja1Njcm9sbGVkVG9Cb3R0b20iLCJfZG9DaGVja1Njcm9sbFZpZXdTaG91bGRGdWxsSGVpZ2h0IiwidG90YWxEYXRhIiwiYXV0b0Z1bGxIZWlnaHQiLCJpc1RvdGFsQ2hhbmdlRnJvbUFkZERhdGEiLCJfcHJlQ2hlY2tTaG93Tm9Nb3JlSW5zaWRlIiwiX2NoZWNrU2Nyb2xsVmlld1Nob3VsZEZ1bGxIZWlnaHQiLCJjYWxsYmFjayIsInNjcm9sbFZpZXdIZWlnaHQiLCJzY3JvbGxWaWV3VG9wIiwiaXNBZGRlZERhdGEiLCJ3aW5kb3dIZWlnaHQiLCJpc1BhZ2VTY3JvbGxUb3AiLCJfY2hlY2tTaG91bGRTaG93QmFja1RvVG9wIiwid3hzUGFnZVNjcm9sbFRvcCIsInd4c1Njcm9sbFRvcCIsInJlYWxUb3RhbERhdGEiLCJtYXJnaW5UZXh0Iiwic2xpY2UiLCJ0b1VwcGVyQ2FzZSIsInNhZmVBcmVhSW5zZXRCb3R0b21BZGQiLCJzYWZlQXJlYUluc2V0Qm90dG9tIiwiZGVsYXlUaW1lIiwicmVzIiwicGFnZVNjcm9sbE5vZGVIZWlnaHQiLCJzYWZlQXJlYUJvdHRvbSIsImNhY2hlVG9wSGVpZ2h0IiwiJHNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUZBOztBQUtBLElBQU1BLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQUMsZUFHM0I7RUFDZEMsS0FBSyxFQUFFO0lBQ047SUFDQUMsYUFBYSxFQUFFO01BQ2RDLElBQUksRUFBRUMsT0FBTztNQUNiQyxPQUFPLEVBQUVDLHFCQUFDLENBQUNDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsS0FBSztJQUNyQyxDQUFDO0lBQ0Q7SUFDQUMsVUFB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akJBLFNBQVMsR0FBRyxFQUFFO1FBRWQzSSxxQkFBQyxDQUFDOEMsS0FBSyxDQUFDLFlBQU07VUFDYixPQUFJLENBQUNzQyxrQkFBa0IsQ0FBQ0UsSUFBSSxDQUFDLENBQUNELElBQUksQ0FBQyxVQUFDdUQsR0FBRyxFQUFLO1lBQzNDLElBQUlBLEdBQUcsRUFBRTtjQUNSLElBQUlDLG9CQUFvQixHQUFHRCxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNwRCxNQUFNO2NBQ3hDLElBQUkzRixJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUN0QixJQUFJNEksc0JBQXNCLEVBQUU7a0JBQzNCSSxvQkFBb0IsSUFBSSxPQUFJLENBQUNDLGNBQWM7Z0JBQzVDO2NBQ0QsQ0FBQyxNQUFNO2dCQUNOLE9BQUksQ0FBQ0MsY0FBYyxHQUFHRixvQkFBb0I7Y0FDM0M7Y0FDQSxPQUFJLENBQUNHLElBQUksQ0FBQyxPQUFJLENBQUNuSSxlQUFlLEVBQUV5SCxVQUFVLFlBQUtPLG9CQUFvQixRQUFLO1lBQ3pFLENBQUMsTUFBTSxJQUFJSixzQkFBc0IsRUFBRTtjQUNsQyxPQUFJLENBQUNPLElBQUksQ0FBQyxPQUFJLENBQUNuSSxlQUFlLEVBQUV5SCxVQUFVLFlBQUssT0FBSSxDQUFDUSxjQUFjLFFBQUs7WUFDeEU7VUFDRCxDQUFDLENBQUM7UUFDSCxDQUFDLEVBQUVILFNBQVMsQ0FBQztNQUNkLENBQUMsQ0FBQztJQUNIO0VBQ0Q7QUFDRCxDQUFDO0FBQUEiLCJmaWxlIjoiOTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbei1wYWdpbmddc2Nyb2xs55u45YWz5qih5Z2XXG5pbXBvcnQgdSBmcm9tICcuLi8uL3otcGFnaW5nLXV0aWxzJ1xuaW1wb3J0IEVudW0gZnJvbSAnLi4vLi96LXBhZ2luZy1lbnVtJ1xuXG5cbmNvbnN0IHdlZXhEb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IHtcblx0XHQvL+S9v+eUqOmhtemdoua7muWKqO+8jOm7mOiupOS4uuWQpu+8jOW9k+iuvue9ruS4uuaYr+aXtuWImeS9v+eUqOmhtemdoueahOa7muWKqOiAjOmdnuatpOe7hOS7tuWGhemDqOeahHNjcm9sbC12aWV355qE5rua5Yqo77yM5L2/55So6aG16Z2i5rua5Yqo5pe2ei1wYWdpbmfml6DpnIDorr7nva7noa7lrprnmoTpq5jluqbkuJTlr7nkuo7plb/liJfooajlsZXnpLrmgKfog73mm7Tpq5jvvIzkvYbphY3nva7kvJrnlaXlvq7nuYHnkJBcblx0XHR1c2VQYWdlU2Nyb2xsOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygndXNlUGFnZVNjcm9sbCcsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/mmK/lkKblj6/ku6Xmu5rliqjvvIzkvb/nlKjlhoXnva5zY3JvbGwtdmlld+WSjG52dWXml7bmnInmlYjvvIzpu5jorqTkuLrmmK9cblx0XHRzY3JvbGxhYmxlOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnc2Nyb2xsYWJsZScsIHRydWUpXG5cdFx0fSxcblx0XHQvL+aOp+WItuaYr+WQpuWHuueOsOa7muWKqOadoe+8jOm7mOiupOS4uuaYr1xuXHRcdHNob3dTY3JvbGxiYXI6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdzaG93U2Nyb2xsYmFyJywgdHJ1ZSlcblx0XHR9LFxuXHRcdC8v5piv5ZCm5YWB6K645qiq5ZCR5rua5Yqo77yM6buY6K6k5Li65ZCmXG5cdFx0c2Nyb2xsWDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3Njcm9sbFgnLCBmYWxzZSlcblx0XHR9LFxuXHRcdC8vaU9T6K6+5aSH5LiK5rua5Yqo5Yiw6aG26YOo5pe25piv5ZCm5YWB6K645Zue5by55pWI5p6c77yM6buY6K6k5Li65ZCm44CC5YWz6Zet5Zue5by55pWI5p6c5ZCO5Y+v5L2/5rua5Yqo5Yiw6aG26YOo5LiO5LiL5ouJ5Yi35paw5pu06L+e6LSv77yM5L2G5piv5pyJ5ZC46aG2dmlld+aXtua7muWKqOWIsOmhtumDqOaXtuWPr+iDveWHuueOsOaKluWKqOOAglxuXHRcdHNjcm9sbFRvVG9wQm91bmNlRW5hYmxlZDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3Njcm9sbFRvVG9wQm91bmNlRW5hYmxlZCcsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly9pT1Porr7lpIfkuIrmu5rliqjliLDlupXpg6jml7bmmK/lkKblhYHorrjlm57lvLnmlYjmnpzvvIzpu5jorqTkuLrmmK/jgIJcblx0XHRzY3JvbGxUb0JvdHRvbUJvdW5jZUVuYWJsZWQ6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdzY3JvbGxUb0JvdHRvbUJvdW5jZUVuYWJsZWQnLCB0cnVlKVxuXHRcdH0sXG5cdFx0Ly/lnKjorr7nva7mu5rliqjmnaHkvY3nva7ml7bkvb/nlKjliqjnlLvov4fmuKHvvIzpu5jorqTkuLrlkKZcblx0XHRzY3JvbGxXaXRoQW5pbWF0aW9uOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnc2Nyb2xsV2l0aEFuaW1hdGlvbicsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/lgLzlupTkuLrmn5DlrZDlhYPntKBpZO+8iGlk5LiN6IO95Lul5pWw5a2X5byA5aS077yJ44CC6K6+572u5ZOq5Liq5pa55ZCR5Y+v5rua5Yqo77yM5YiZ5Zyo5ZOq5Liq5pa55ZCR5rua5Yqo5Yiw6K+l5YWD57SgXG5cdFx0c2Nyb2xsSW50b1ZpZXc6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3Njcm9sbEludG9WaWV3JywgJycpXG5cdFx0fSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2Nyb2xsVG9wOiAwLFxuXHRcdFx0b2xkU2Nyb2xsVG9wOiAwLFxuXHRcdFx0c2Nyb2xsVmlld1N0eWxlOiB7fSxcblx0XHRcdHNjcm9sbFZpZXdDb250YWluZXJTdHlsZToge30sXG5cdFx0XHRzY3JvbGxWaWV3SW5TdHlsZToge30sXG5cdFx0XHRwYWdlU2Nyb2xsVG9wOiAtMSxcblx0XHRcdHNjcm9sbEVuYWJsZTogdHJ1ZSxcblx0XHRcdHByaXZhdGVTY3JvbGxXaXRoQW5pbWF0aW9uOiAtMSxcblx0XHRcdGNhY2hlU2Nyb2xsTm9kZUhlaWdodDogLTFcblx0XHR9XG5cdH0sXG5cdHdhdGNoOiB7XG5cdFx0b2xkU2Nyb2xsVG9wKG5ld1ZhbCkge1xuXHRcdFx0IXRoaXMudXNlUGFnZVNjcm9sbCAmJiB0aGlzLl9zY3JvbGxUb3BDaGFuZ2UobmV3VmFsLGZhbHNlKTtcblx0XHR9LFxuXHRcdHBhZ2VTY3JvbGxUb3AobmV3VmFsKSB7XG5cdFx0XHR0aGlzLnVzZVBhZ2VTY3JvbGwgJiYgdGhpcy5fc2Nyb2xsVG9wQ2hhbmdlKG5ld1ZhbCx0cnVlKTtcblx0XHR9LFxuXHRcdHVzZVBhZ2VTY3JvbGw6IHtcblx0XHRcdGhhbmRsZXIobmV3VmFsKSB7XG5cdFx0XHRcdHRoaXMubG9hZGVkICYmIHRoaXMuYXV0b0hlaWdodCAmJiB0aGlzLl9zZXRBdXRvSGVpZ2h0KCFuZXdWYWwpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cdFx0XHR9LFxuXHRcdFx0aW1tZWRpYXRlOiB0cnVlXG5cdFx0fSxcblx0XHRmaW5hbFNjcm9sbFRvcChuZXdWYWwpIHtcblx0XHRcdGlmICghdGhpcy51c2VDaGF0UmVjb3JkTW9kZSkge1xuXHRcdFx0XHR0aGlzLnJlbmRlclByb3BTY3JvbGxUb3AgPSBuZXdWYWwgPCA2ID8gMCA6IDEwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0ZmluYWxTY3JvbGxXaXRoQW5pbWF0aW9uKCkge1xuXHRcdFx0aWYgKHRoaXMucHJpdmF0ZVNjcm9sbFdpdGhBbmltYXRpb24gIT09IC0xKSB7XG5cdFx0XHRcdGNvbnN0IHNjcm9sbFdpdGhBbmltYXRpb24gPSB0aGlzLnByaXZhdGVTY3JvbGxXaXRoQW5pbWF0aW9uID09PSAxO1xuXHRcdFx0XHR0aGlzLnByaXZhdGVTY3JvbGxXaXRoQW5pbWF0aW9uID0gLTE7XG5cdFx0XHRcdHJldHVybiBzY3JvbGxXaXRoQW5pbWF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuc2Nyb2xsV2l0aEFuaW1hdGlvbjtcblx0XHR9LFxuXHRcdGZpbmFsU2Nyb2xsVmlld1N0eWxlKCkge1xuXHRcdFx0aWYgKHRoaXMuc3VwZXJDb250ZW50WkluZGV4ICE9IDEpIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxWaWV3U3R5bGVbJ3otaW5kZXgnXSA9IHRoaXMuc3VwZXJDb250ZW50WkluZGV4O1xuXHRcdFx0XHR0aGlzLnNjcm9sbFZpZXdTdHlsZVsncG9zaXRpb24nXSA9ICdyZWxhdGl2ZSc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5zY3JvbGxWaWV3U3R5bGU7XG5cdFx0fSxcblx0XHRmaW5hbFNjcm9sbFRvcCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnVzZVBhZ2VTY3JvbGwgPyB0aGlzLnBhZ2VTY3JvbGxUb3AgOiB0aGlzLm9sZFNjcm9sbFRvcDtcblx0XHR9LFxuXHRcdGZpbmFsSXNPbGRXZWJWaWV3KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaXNPbGRXZWJWaWV3ICYmICF0aGlzLnVzZVBhZ2VTY3JvbGw7XG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Ly/mu5rliqjliLDpobbpg6jvvIxhbmltYXRl5Li65piv5ZCm5bGV56S65rua5Yqo5Yqo55S777yM6buY6K6k5Li65pivXG5cdFx0c2Nyb2xsVG9Ub3AoYW5pbWF0ZSwgY2hlY2tSZXZlcnNlID0gdHJ1ZSkge1xuXG5cdFx0XHRpZiAoY2hlY2tSZXZlcnNlICYmIHRoaXMudXNlQ2hhdFJlY29yZE1vZGUpIHtcblx0XHRcdFx0aWYgKCF0aGlzLm5Jc0ZpcnN0UGFnZUFuZE5vTW9yZSkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oYW5pbWF0ZSwgZmFsc2UpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX3Njcm9sbFRvVG9wKGFuaW1hdGUsIGZhbHNlKTtcblxuXHRcdFx0XHRpZiAodGhpcy5udnVlRmFzdFNjcm9sbCAmJiBhbmltYXRlKSB7XG5cdFx0XHRcdFx0dS5kZWxheSgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zY3JvbGxUb1RvcChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvL+a7muWKqOWIsOW6lemDqO+8jGFuaW1hdGXkuLrmmK/lkKblsZXnpLrmu5rliqjliqjnlLvvvIzpu5jorqTkuLrmmK9cblx0XHRzY3JvbGxUb0JvdHRvbShhbmltYXRlLCBjaGVja1JldmVyc2UgPSB0cnVlKSB7XG5cblx0XHRcdGlmIChjaGVja1JldmVyc2UgJiYgdGhpcy51c2VDaGF0UmVjb3JkTW9kZSkge1xuXHRcdFx0XHRpZiAoIXRoaXMubklzRmlyc3RQYWdlQW5kTm9Nb3JlKSB7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxUb1RvcChhbmltYXRlLCBmYWxzZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0dGhpcy5fc2Nyb2xsVG9Cb3R0b20oYW5pbWF0ZSk7XG5cblx0XHRcdFx0aWYgKHRoaXMubnZ1ZUZhc3RTY3JvbGwgJiYgYW5pbWF0ZSkge1xuXHRcdFx0XHRcdHUuZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5fc2Nyb2xsVG9Cb3R0b20oZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvL+a7muWKqOWIsOaMh+WumnZpZXcodnVl5Lit5pyJ5pWIKeOAgnNlbOS4uumcgOimgea7muWKqOeahHZpZXfnmoRpZOWAvO+8jOS4jeWMheWQq1wiI1wi77ybb2Zmc2V05Li65YGP56e76YeP77yM5Y2V5L2N5Li6cHjvvJthbmltYXRl5Li65piv5ZCm5bGV56S65rua5Yqo5Yqo55S777yM6buY6K6k5Li65ZCmXG5cdFx0c2Nyb2xsSW50b1ZpZXdCeUlkKHNlbCwgb2Zmc2V0LCBhbmltYXRlKSB7XG5cdFx0XHR0aGlzLl9zY3JvbGxJbnRvVmlldyhzZWwsIG9mZnNldCwgYW5pbWF0ZSk7XG5cdFx0fSxcblx0XHQvL+a7muWKqOWIsOaMh+WumnZpZXcodnVl5Lit5pyJ5pWIKeOAgm5vZGVUb3DkuLrpnIDopoHmu5rliqjnmoR2aWV355qEdG9w5YC8KOmAmui/h3VuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCnojrflj5Yp77ybb2Zmc2V05Li65YGP56e76YeP77yM5Y2V5L2N5Li6cHjvvJthbmltYXRl5Li65piv5ZCm5bGV56S65rua5Yqo5Yqo55S777yM6buY6K6k5Li65ZCmXG5cdFx0c2Nyb2xsSW50b1ZpZXdCeU5vZGVUb3Aobm9kZVRvcCwgb2Zmc2V0LCBhbmltYXRlKSB7XG5cdFx0XHR0aGlzLnNjcm9sbFRvcCA9IHRoaXMub2xkU2Nyb2xsVG9wO1xuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9zY3JvbGxJbnRvVmlld0J5Tm9kZVRvcChub2RlVG9wLCBvZmZzZXQsIGFuaW1hdGUpO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8v5rua5Yqo5Yiw5oyH5a6a5L2N572uKHZ1ZeS4reacieaViCnjgIJ55Li65LiO6aG26YOo55qE6Led56a777yM5Y2V5L2N5Li6cHjvvJtvZmZzZXTkuLrlgY/np7vph4/vvIzljZXkvY3kuLpweO+8m2FuaW1hdGXkuLrmmK/lkKblsZXnpLrmu5rliqjliqjnlLvvvIzpu5jorqTkuLrlkKZcblx0XHRzY3JvbGxUb1koeSwgb2Zmc2V0LCBhbmltYXRlKSB7XG5cdFx0XHR0aGlzLnNjcm9sbFRvcCA9IHRoaXMub2xkU2Nyb2xsVG9wO1xuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9zY3JvbGxUb1koeSwgb2Zmc2V0LCBhbmltYXRlKTtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvL+a7muWKqOWIsOaMh+WumnZpZXcobnZ1ZeS4reacieaViCnjgIJpbmRleOS4uumcgOimgea7muWKqOeahHZpZXfnmoRpbmRleCjnrKzlh6DkuKop77ybb2Zmc2V05Li65YGP56e76YeP77yM5Y2V5L2N5Li6cHjvvJthbmltYXRl5Li65piv5ZCm5bGV56S65rua5Yqo5Yqo55S777yM6buY6K6k5Li65ZCmXG5cdFx0c2Nyb2xsSW50b1ZpZXdCeUluZGV4KGluZGV4LCBvZmZzZXQsIGFuaW1hdGUpIHtcblx0XHRcdHRoaXMuX3Njcm9sbEludG9WaWV3KGluZGV4LCBvZmZzZXQsIGFuaW1hdGUpO1xuXHRcdH0sXG5cdFx0Ly/mu5rliqjliLDmjIflrpp2aWV3KG52dWXkuK3mnInmlYgp44CCdmlld+S4uumcgOimgea7muWKqOeahHZpZXco6YCa6L+HYHRoaXMuJHJlZnMueHh4YOiOt+WPlinvvIzkuI3ljIXlkKtcIiNcIu+8m29mZnNldOS4uuWBj+enu+mHj++8jOWNleS9jeS4unB477ybYW5pbWF0ZeS4uuaYr+WQpuWxleekuua7muWKqOWKqOeUu++8jOm7mOiupOS4uuWQplxuXHRcdHNjcm9sbEludG9WaWV3QnlWaWV3KHZpZXcsIG9mZnNldCwgYW5pbWF0ZSkge1xuXHRcdFx0dGhpcy5fc2Nyb2xsSW50b1ZpZXcodmlldywgb2Zmc2V0LCBhbmltYXRlKTtcblx0XHR9LFxuXHRcdC8v5b2T5L2/55So6aG16Z2i5rua5Yqo5bm25LiU6Ieq5a6a5LmJ5LiL5ouJ5Yi35paw5pe277yM6K+35Zyo6aG16Z2i55qEb25QYWdlU2Nyb2xs5Lit6LCD55So5q2k5pa55rOV77yM5ZGK55+lei1wYWdpbmflvZPliY3nmoRwYWdlU2Nyb2xsVG9w77yM5ZCm5YiZ5Lya5a+86Ie05Zyo5Lu75oSP5L2N572u6YO95Y+v5Lul5LiL5ouJ5Yi35pawXG5cdFx0dXBkYXRlUGFnZVNjcm9sbFRvcCh2YWx1ZSkge1xuXHRcdFx0dGhpcy5wYWdlU2Nyb2xsVG9wID0gdmFsdWU7XG5cdFx0fSxcblx0XHQvL+W9k+S9v+eUqOmhtemdoua7muWKqOW5tuS4lOiuvue9ruS6hnNsb3Q9XCJ0b3BcIuaXtu+8jOm7mOiupOWIneasoeWKoOi9veS8muiHquWKqOiOt+WPluWFtumrmOW6pu+8jOW5tuS9v+WGhemDqOWuueWZqOS4i+enu++8jOW9k3Nsb3Q9XCJ0b3BcIueahHZpZXfpq5jluqbliqjmgIHmlLnlj5jml7bvvIzlnKjlhbbpq5jluqbpnIDopoHmm7TmlrDml7bosIPnlKjmraTmlrnms5Vcblx0XHR1cGRhdGVQYWdlU2Nyb2xsVG9wSGVpZ2h0KCkge1xuXHRcdFx0dGhpcy5fdXBkYXRlUGFnZVNjcm9sbFRvcE9yQm90dG9tSGVpZ2h0KCd0b3AnKTtcblx0XHR9LFxuXHRcdC8v5b2T5L2/55So6aG16Z2i5rua5Yqo5bm25LiU6K6+572u5LqGc2xvdD1cImJvdHRvbVwi5pe277yM6buY6K6k5Yid5qyh5Yqg6L295Lya6Ieq5Yqo6I635Y+W5YW26auY5bqm77yM5bm25L2/5YaF6YOo5a655Zmo5LiL56e777yM5b2Tc2xvdD1cImJvdHRvbVwi55qEdmlld+mrmOW6puWKqOaAgeaUueWPmOaXtu+8jOWcqOWFtumrmOW6pumcgOimgeabtOaWsOaXtuiwg+eUqOatpOaWueazlVxuXHRcdHVwZGF0ZVBhZ2VTY3JvbGxCb3R0b21IZWlnaHQoKSB7XG5cdFx0XHR0aGlzLl91cGRhdGVQYWdlU2Nyb2xsVG9wT3JCb3R0b21IZWlnaHQoJ2JvdHRvbScpO1xuXHRcdH0sXG5cdFx0Ly/mm7TmlrBzbG90PVwibGVmdFwi5ZKMc2xvdD1cInJpZ2h0XCLlrr3luqbvvIzlvZNzbG90PVwibGVmdFwi5oiWc2xvdD1cInJpZ2h0XCLlrr3luqbliqjmgIHmlLnlj5jml7bosIPnlKhcblx0XHR1cGRhdGVMZWZ0QW5kUmlnaHRXaWR0aCgpIHtcblx0XHRcdGlmICghdGhpcy5maW5hbElzT2xkV2ViVmlldykgcmV0dXJuO1xuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy5fdXBkYXRlTGVmdEFuZFJpZ2h0V2lkdGgodGhpcy5zY3JvbGxWaWV3Q29udGFpbmVyU3R5bGUsICd6cC1wYWdlJykpO1xuXHRcdH0sXG5cdFx0Ly/mm7TmlrB6LXBhZ2luZ+WGhee9rnNjcm9sbC12aWV355qEc2Nyb2xsVG9wXG5cdFx0dXBkYXRlU2Nyb2xsVmlld1Njcm9sbFRvcChzY3JvbGxUb3AsIGFuaW1hdGUgPSB0cnVlKSB7XG5cdFx0XHR0aGlzLnByaXZhdGVTY3JvbGxXaXRoQW5pbWF0aW9uID0gYW5pbWF0ZSA/IDEgOiAwO1xuXHRcdFx0dGhpcy5zY3JvbGxUb3AgPSB0aGlzLm9sZFNjcm9sbFRvcDtcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cdFx0XHRcdHRoaXMub2xkU2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxUb3A7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdFxuXHRcdC8v5b2T5rua5Yqo5Yiw6aG26YOo5pe2XG5cdFx0X29uU2Nyb2xsVG9VcHBlcigpIHtcblx0XHRcdHRoaXMuJGVtaXQoJ3Njcm9sbHRvdXBwZXInKTtcblx0XHRcdHRoaXMuJGVtaXQoJ3Njcm9sbFRvcENoYW5nZScsIDApO1xuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9sZFNjcm9sbFRvcCA9IDA7XG5cdFx0XHR9KVxuXHRcdFx0aWYgKCF0aGlzLnVzZUNoYXRSZWNvcmRNb2RlIHx8IHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gRW51bS5Nb3JlLk5vTW9yZSkgcmV0dXJuO1xuXHRcdFx0dGhpcy5fb25Mb2FkaW5nTW9yZSgnY2xpY2snKTtcblx0XHR9LFxuXHRcdC8v5b2T5rua5Yqo5Yiw5bqV6YOo5pe2XG5cdFx0X29uU2Nyb2xsVG9Mb3dlcihlKSB7XG5cdFx0XHQoIWUuZGV0YWlsIHx8ICFlLmRldGFpbC5kaXJlY3Rpb24gfHwgZS5kZXRhaWwuZGlyZWN0aW9uID09PSAnYm90dG9tJykgJiYgdGhpcy5fb25Mb2FkaW5nTW9yZSgndG9Cb3R0b20nKVxuXHRcdH0sXG5cdFx0Ly/mu5rliqjliLDpobbpg6hcblx0XHRfc2Nyb2xsVG9Ub3AoYW5pbWF0ZSA9IHRydWUsIGlzUHJpdmF0ZSA9IHRydWUpIHtcblxuXHRcdFx0Y29uc3QgZWwgPSB0aGlzLiRyZWZzWyd6cC1uLWxpc3QtdG9wLXRhZyddO1xuXHRcdFx0aWYgKHRoaXMudXNlUGFnZVNjcm9sbCkge1xuXHRcdFx0XHR0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnenAtcGFnZS1zY3JvbGwtdG9wJywgZmFsc2UpLnRoZW4obm9kZSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgbm9kZUhlaWdodCA9IG5vZGUgPyBub2RlWzBdLmhlaWdodCA6IDA7XG5cdFx0XHRcdFx0d2VleERvbS5zY3JvbGxUb0VsZW1lbnQoZWwsIHtcblx0XHRcdFx0XHRcdG9mZnNldDogLW5vZGVIZWlnaHQsXG5cdFx0XHRcdFx0XHRhbmltYXRlZDogYW5pbWF0ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghdGhpcy5pc0lvcyAmJiB0aGlzLm52dWVMaXN0SXMgPT09ICdzY3JvbGxlcicpIHtcblx0XHRcdFx0XHR0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnenAtbi1yZWZyZXNoLWNvbnRhaW5lcicsIGZhbHNlKS50aGVuKG5vZGUgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgbm9kZUhlaWdodCA9IG5vZGUgPyBub2RlWzBdLmhlaWdodCA6IDA7XG5cdFx0XHRcdFx0XHR3ZWV4RG9tLnNjcm9sbFRvRWxlbWVudChlbCwge1xuXHRcdFx0XHRcdFx0XHRvZmZzZXQ6IC1ub2RlSGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRhbmltYXRlZDogYW5pbWF0ZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d2VleERvbS5zY3JvbGxUb0VsZW1lbnQoZWwsIHtcblx0XHRcdFx0XHRcdG9mZnNldDogMCxcblx0XHRcdFx0XHRcdGFuaW1hdGVkOiBhbmltYXRlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYgKHRoaXMudXNlUGFnZVNjcm9sbCkge1xuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0dW5pLnBhZ2VTY3JvbGxUbyh7XG5cdFx0XHRcdFx0XHRzY3JvbGxUb3A6IDAsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogYW5pbWF0ZSA/IDEwMCA6IDAsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnByaXZhdGVTY3JvbGxXaXRoQW5pbWF0aW9uID0gYW5pbWF0ZSA/IDEgOiAwO1xuXHRcdFx0dGhpcy5zY3JvbGxUb3AgPSB0aGlzLm9sZFNjcm9sbFRvcDtcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zY3JvbGxUb3AgPSAwO1xuXHRcdFx0XHR0aGlzLm9sZFNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsVG9wO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvL+a7muWKqOWIsOW6lemDqFxuXHRcdGFzeW5jIF9zY3JvbGxUb0JvdHRvbShhbmltYXRlID0gdHJ1ZSkge1xuXG5cdFx0XHRjb25zdCBlbCA9IHRoaXMuJHJlZnNbJ3pwLW4tbGlzdC1ib3R0b20tdGFnJ107XG5cdFx0XHRpZiAoZWwpIHtcblx0XHRcdFx0d2VleERvbS5zY3JvbGxUb0VsZW1lbnQoZWwsIHtcblx0XHRcdFx0XHRvZmZzZXQ6IDAsXG5cdFx0XHRcdFx0YW5pbWF0ZWQ6IGFuaW1hdGVcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR1LmNvbnNvbGVFcnIoJ+a7muWKqOWIsOW6lemDqOWksei0pe+8jOWboOS4uuaCqOiuvue9ruS6hmhpZGVOdnVlQm90dG9tVGFn5Li6dHJ1ZScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiAodGhpcy51c2VQYWdlU2Nyb2xsKSB7XG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHR1bmkucGFnZVNjcm9sbFRvKHtcblx0XHRcdFx0XHRcdHNjcm9sbFRvcDogTnVtYmVyLk1BWF9WQUxVRSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiBhbmltYXRlID8gMTAwIDogMCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMucHJpdmF0ZVNjcm9sbFdpdGhBbmltYXRpb24gPSBhbmltYXRlID8gMSA6IDA7XG5cdFx0XHRcdGNvbnN0IHBhZ2luZ0NvbnRhaW5lck5vZGUgPSBhd2FpdCB0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnLnpwLXBhZ2luZy1jb250YWluZXInKTtcblx0XHRcdFx0Y29uc3Qgc2Nyb2xsVmlld05vZGUgPSBhd2FpdCB0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnLnpwLXNjcm9sbC12aWV3Jyk7XG5cdFx0XHRcdGNvbnN0IHBhZ2luZ0NvbnRhaW5lckggPSBwYWdpbmdDb250YWluZXJOb2RlID8gcGFnaW5nQ29udGFpbmVyTm9kZVswXS5oZWlnaHQgOiAwO1xuXHRcdFx0XHRjb25zdCBzY3JvbGxWaWV3SCA9IHNjcm9sbFZpZXdOb2RlID8gc2Nyb2xsVmlld05vZGVbMF0uaGVpZ2h0IDogMDtcblx0XHRcdFx0aWYgKHBhZ2luZ0NvbnRhaW5lckggPiBzY3JvbGxWaWV3SCkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5vbGRTY3JvbGxUb3A7XG5cdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5zY3JvbGxUb3AgPSBwYWdpbmdDb250YWluZXJIIC0gc2Nyb2xsVmlld0ggKyB0aGlzLnZpcnR1YWxQbGFjZWhvbGRlclRvcEhlaWdodDtcblx0XHRcdFx0XHRcdHRoaXMub2xkU2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxUb3A7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0fSxcblx0XHQvL+a7muWKqOWIsOaMh+WumnZpZXdcblx0XHRfc2Nyb2xsSW50b1ZpZXcoc2VsLCBvZmZzZXQgPSAwLCBhbmltYXRlID0gZmFsc2UsIGZpbmlzaENhbGxiYWNrKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbFRvcCA9IHRoaXMub2xkU2Nyb2xsVG9wO1xuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCByZWZzID0gdGhpcy4kcGFyZW50LiRyZWZzO1xuXHRcdFx0XHRcdGlmICghcmVmcykgcmV0dXJuO1xuXHRcdFx0XHRcdGNvbnN0IGRhdGFUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNlbCk7XG5cdFx0XHRcdFx0bGV0IGVsID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoZGF0YVR5cGUgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBlbHMgPSByZWZzW2B6LXBhZ2luZy0ke3NlbH1gXTtcblx0XHRcdFx0XHRcdGVsID0gZWxzID8gZWxzWzBdIDogbnVsbDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGRhdGFUeXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG5cdFx0XHRcdFx0XHRlbCA9IHNlbFswXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWwgPSBzZWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChlbCkge1xuXHRcdFx0XHRcdFx0d2VleERvbS5zY3JvbGxUb0VsZW1lbnQoZWwsIHtcblx0XHRcdFx0XHRcdFx0b2Zmc2V0OiAtb2Zmc2V0LFxuXHRcdFx0XHRcdFx0XHRhbmltYXRlZDogYW5pbWF0ZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHUuY29uc29sZUVycign5ZyobnZ1ZeS4rea7muWKqOWIsOaMh+WumuS9jee9ru+8jGNlbGzlv4Xpobvorr7nva4gOnJlZj1cImB6LXBhZ2luZy0ke2luZGV4fWBcIicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHR0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnIycgKyBzZWwucmVwbGFjZSgnIycsICcnKSwgdGhpcy4kcGFyZW50KS50aGVuKChub2RlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAobm9kZSkge1xuXHRcdFx0XHRcdFx0XHRsZXQgbm9kZVRvcCA9IG5vZGVbMF0udG9wO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9zY3JvbGxJbnRvVmlld0J5Tm9kZVRvcChub2RlVG9wLCBvZmZzZXQsIGFuaW1hdGUpO1xuXHRcdFx0XHRcdFx0XHRmaW5pc2hDYWxsYmFjayAmJiBmaW5pc2hDYWxsYmFjaygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0fSxcblx0XHQvL+mAmui/h25vZGVUb3Dmu5rliqjliLDmjIflrpp2aWV3XG5cdFx0X3Njcm9sbEludG9WaWV3QnlOb2RlVG9wKG5vZGVUb3AsIG9mZnNldCA9IDAsIGFuaW1hdGUgPSBmYWxzZSkge1xuXHRcdFx0dGhpcy5fc2Nyb2xsVG9ZKG5vZGVUb3AsIG9mZnNldCwgYW5pbWF0ZSwgdHJ1ZSk7XG5cdFx0fSxcblx0XHQvL+a7muWKqOWIsOaMh+WumuS9jee9rlxuXHRcdF9zY3JvbGxUb1koeSwgb2Zmc2V0ID0gMCwgYW5pbWF0ZSA9IGZhbHNlLCBhZGRTY3JvbGxUb3AgPSBmYWxzZSkge1xuXHRcdFx0dGhpcy5wcml2YXRlU2Nyb2xsV2l0aEFuaW1hdGlvbiA9IGFuaW1hdGUgPyAxIDogMDtcblx0XHRcdGlmICh0aGlzLnVzZVBhZ2VTY3JvbGwpIHtcblx0XHRcdFx0dW5pLnBhZ2VTY3JvbGxUbyh7XG5cdFx0XHRcdFx0c2Nyb2xsVG9wOiB5IC0gb2Zmc2V0LFxuXHRcdFx0XHRcdGR1cmF0aW9uOiBhbmltYXRlID8gMTAwIDogMFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKGFkZFNjcm9sbFRvcCl7XG5cdFx0XHRcdCAgIHkgKz0gdGhpcy5vbGRTY3JvbGxUb3A7IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2Nyb2xsVG9wID0geSAtIG9mZnNldDtcblx0XHRcdFx0dGhpcy5vbGRTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFRvcDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vc2Nyb2xsLXZpZXfmu5rliqjkuK1cblx0XHRfc2Nyb2xsKGUpIHtcblx0XHRcdHRoaXMuJGVtaXQoJ3Njcm9sbCcsIGUpO1xuXHRcdFx0Y29uc3Qgc2Nyb2xsVG9wID0gZS5kZXRhaWwuc2Nyb2xsVG9wO1xuXG5cblxuXHRcdFx0dGhpcy5vbGRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cdFx0XHRjb25zdCBzY3JvbGxEaWZmID0gZS5kZXRhaWwuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5vbGRTY3JvbGxUb3A7XG5cdFx0XHQhdGhpcy5pc0lvcyAmJiB0aGlzLl9jaGVja1Njcm9sbGVkVG9Cb3R0b20oc2Nyb2xsRGlmZik7XG5cdFx0fSxcblx0XHQvL+ajgOa1i3Njcm9sbFZpZXfmmK/lkKbopoHpk7rmu6HlsY/luZVcblx0XHRfZG9DaGVja1Njcm9sbFZpZXdTaG91bGRGdWxsSGVpZ2h0KHRvdGFsRGF0YSkge1xuXHRcdFx0aWYgKHRoaXMuYXV0b0Z1bGxIZWlnaHQgJiYgdGhpcy51c2VQYWdlU2Nyb2xsICYmIHRoaXMuaXNUb3RhbENoYW5nZUZyb21BZGREYXRhKSB7XG5cblxuXG5cblxuXG5cblxuXHRcdFx0XHR0aGlzLl9wcmVDaGVja1Nob3dOb01vcmVJbnNpZGUodG90YWxEYXRhKVxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9wcmVDaGVja1Nob3dOb01vcmVJbnNpZGUodG90YWxEYXRhKVxuXHRcdFx0fSBcblx0XHR9LFxuXHRcdC8v5qOA5rWLei1wYWdpbmfmmK/lkKbopoHlhajlsY/opobnm5Yo5b2T5L2/55So6aG16Z2i5rua5Yqo5bm25LiU5LiN5ruh5YWo5bGP5pe277yM6buY6K6kei1wYWdpbmfpnIDopoHpk7rmu6HlhajlsY/vvIzpgb/lhY3mlbDmja7ov4flsJHml7blhoXpg6jnmoRlbXB0eS12aWV35peg5rOV5q2j56Gu5bGV56S6KVxuXHRcdGFzeW5jIF9jaGVja1Njcm9sbFZpZXdTaG91bGRGdWxsSGVpZ2h0KGNhbGxiYWNrKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBzY3JvbGxWaWV3Tm9kZSA9IGF3YWl0IHRoaXMuX2dldE5vZGVDbGllbnRSZWN0KCcuenAtc2Nyb2xsLXZpZXcnKTtcblx0XHRcdFx0Y29uc3QgcGFnaW5nQ29udGFpbmVyTm9kZSA9IGF3YWl0IHRoaXMuX2dldE5vZGVDbGllbnRSZWN0KCcuenAtcGFnaW5nLWNvbnRhaW5lci1jb250ZW50Jyk7XG5cdFx0XHRcdGlmICghc2Nyb2xsVmlld05vZGUgfHwgIXBhZ2luZ0NvbnRhaW5lck5vZGUpIHJldHVybjtcblx0XHRcdFx0Y29uc3Qgc2Nyb2xsVmlld0hlaWdodCA9IHBhZ2luZ0NvbnRhaW5lck5vZGVbMF0uaGVpZ2h0O1xuXHRcdFx0XHRjb25zdCBzY3JvbGxWaWV3VG9wID0gc2Nyb2xsVmlld05vZGVbMF0udG9wO1xuXHRcdFx0XHRpZiAodGhpcy5pc0FkZGVkRGF0YSAmJiBzY3JvbGxWaWV3SGVpZ2h0ICsgc2Nyb2xsVmlld1RvcCA8PSB0aGlzLndpbmRvd0hlaWdodCkge1xuXHRcdFx0XHRcdHRoaXMuX3NldEF1dG9IZWlnaHQodHJ1ZSwgc2Nyb2xsVmlld05vZGUpO1xuXHRcdFx0XHRcdGNhbGxiYWNrKHNjcm9sbFZpZXdOb2RlLCBwYWdpbmdDb250YWluZXJOb2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9zZXRBdXRvSGVpZ2h0KGZhbHNlKTtcblx0XHRcdFx0XHRjYWxsYmFjayhudWxsLCBudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjYWxsYmFjayhudWxsLCBudWxsKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vc2Nyb2xsVG9w5pS55Y+Y5pe26Kem5Y+RXG5cdFx0X3Njcm9sbFRvcENoYW5nZShuZXdWYWwsIGlzUGFnZVNjcm9sbFRvcCl7XG5cdFx0XHR0aGlzLiRlbWl0KCdzY3JvbGxUb3BDaGFuZ2UnLCBuZXdWYWwpO1xuXHRcdFx0dGhpcy4kZW1pdCgndXBkYXRlOnNjcm9sbFRvcCcsIG5ld1ZhbCk7XG5cdFx0XHR0aGlzLl9jaGVja1Nob3VsZFNob3dCYWNrVG9Ub3AobmV3VmFsKTtcblx0XHRcdGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuaXNJb3MgPyAobmV3VmFsID4gNSA/IDYgOiAwKSA6IG5ld1ZhbDtcblx0XHRcdGlmIChpc1BhZ2VTY3JvbGxUb3ApIHtcblx0XHRcdFx0dGhpcy53eHNQYWdlU2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy53eHNTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+abtOaWsOS9v+eUqOmhtemdoua7muWKqOaXtnNsb3Q9XCJ0b3BcIuaIllwiYm90dG9tXCLmj5LlhaV2aWV355qE6auY5bqmXG5cdFx0X3VwZGF0ZVBhZ2VTY3JvbGxUb3BPckJvdHRvbUhlaWdodCh0eXBlKSB7XG5cblxuXG5cdFx0XHR0aGlzLl9kb0NoZWNrU2Nyb2xsVmlld1Nob3VsZEZ1bGxIZWlnaHQodGhpcy5yZWFsVG90YWxEYXRhKTtcblx0XHRcdGNvbnN0IG5vZGUgPSBgLnpwLXBhZ2UtJHt0eXBlfWA7XG5cdFx0XHRjb25zdCBtYXJnaW5UZXh0ID0gYG1hcmdpbiR7dHlwZS5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpfWA7XG5cdFx0XHRsZXQgc2FmZUFyZWFJbnNldEJvdHRvbUFkZCA9IHRoaXMuc2FmZUFyZWFJbnNldEJvdHRvbTtcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0bGV0IGRlbGF5VGltZSA9IDA7XG5cblx0XHRcdFx0ZGVsYXlUaW1lID0gNTA7XG5cblx0XHRcdFx0dS5kZWxheSgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fZ2V0Tm9kZUNsaWVudFJlY3Qobm9kZSkudGhlbigocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocmVzKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBwYWdlU2Nyb2xsTm9kZUhlaWdodCA9IHJlc1swXS5oZWlnaHQ7XG5cdFx0XHRcdFx0XHRcdGlmICh0eXBlID09PSAnYm90dG9tJykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChzYWZlQXJlYUluc2V0Qm90dG9tQWRkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYWdlU2Nyb2xsTm9kZUhlaWdodCArPSB0aGlzLnNhZmVBcmVhQm90dG9tO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmNhY2hlVG9wSGVpZ2h0ID0gcGFnZVNjcm9sbE5vZGVIZWlnaHQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuc2Nyb2xsVmlld1N0eWxlLCBtYXJnaW5UZXh0LCBgJHtwYWdlU2Nyb2xsTm9kZUhlaWdodH1weGApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChzYWZlQXJlYUluc2V0Qm90dG9tQWRkKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLnNjcm9sbFZpZXdTdHlsZSwgbWFyZ2luVGV4dCwgYCR7dGhpcy5zYWZlQXJlYUJvdHRvbX1weGApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LCBkZWxheVRpbWUpXG5cdFx0XHR9KVxuXHRcdH0sXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///93\n");

/***/ }),
/* 94 */
/*!************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/modules/back-to-top.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! .././z-paging-utils */ 47));\n// [z-paging]点击返回顶部view模块\nvar _default2 = {\n  props: {\n    //自动显示点击返回顶部按钮，默认为否\n    autoShowBackToTop: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('autoShowBackToTop', false)\n    },\n    //点击返回顶部按钮显示/隐藏的阈值(滚动距离)，单位为px，默认为400rpx\n    backToTopThreshold: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('backToTopThreshold', '400rpx')\n    },\n    //点击返回顶部按钮的自定义图片地址，默认使用z-paging内置的图片\n    backToTopImg: {\n      type: String,\n      default: _zPagingUtils.default.gc('backToTopImg', '')\n    },\n    //点击返回顶部按钮返回到顶部时是否展示过渡动画，默认为是\n    backToTopWithAnimate: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('backToTopWithAnimate', true)\n    },\n    //点击返回顶部按钮与底部的距离，注意添加单位px或rpx，默认为160rpx\n    backToTopBottom: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('backToTopBottom', '160rpx')\n    },\n    //点击返回顶部按钮的自定义样式\n    backToTopStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('backToTopStyle', {});\n      }\n    },\n    //iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向，默认为是\n    enableBackToTop: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('enableBackToTop', true)\n    }\n  },\n  data: function data() {\n    return {\n      backToTopClass: 'zp-back-to-top zp-back-to-top-hide',\n      lastBackToTopShowTime: 0,\n      showBackToTopClass: false\n    };\n  },\n  computed: {\n    finalEnableBackToTop: function finalEnableBackToTop() {\n      return this.usePageScroll ? false : this.enableBackToTop;\n    },\n    finalBackToTopThreshold: function finalBackToTopThreshold() {\n      return _zPagingUtils.default.convertToPx(this.backToTopThreshold);\n    },\n    finalBackToTopStyle: function finalBackToTopStyle() {\n      var backToTopStyle = this.backToTopStyle;\n      if (!backToTopStyle.bottom) {\n        backToTopStyle.bottom = this.windowBottom + _zPagingUtils.default.convertToPx(this.backToTopBottom) + 'px';\n      }\n      if (!backToTopStyle.position) {\n        backToTopStyle.position = this.usePageScroll ? 'fixed' : 'absolute';\n      }\n      return backToTopStyle;\n    }\n  },\n  methods: {\n    //点击返回顶部\n    _backToTopClick: function _backToTopClick() {\n      !this.backToTopWithAnimate && this._checkShouldShowBackToTop(0);\n      this.scrollToTop(this.backToTopWithAnimate);\n    },\n    //判断是否要显示返回顶部按钮\n    _checkShouldShowBackToTop: function _checkShouldShowBackToTop(scrollTop) {\n      var _this = this;\n      if (!this.autoShowBackToTop) {\n        this.showBackToTopClass = false;\n        return;\n      }\n      if (scrollTop > this.finalBackToTopThreshold) {\n        if (!this.showBackToTopClass) {\n          this.showBackToTopClass = true;\n          this.lastBackToTopShowTime = new Date().getTime();\n          _zPagingUtils.default.delay(function () {\n            _this.backToTopClass = 'zp-back-to-top zp-back-to-top-show';\n          }, 300);\n        }\n      } else {\n        if (this.showBackToTopClass) {\n          this.backToTopClass = 'zp-back-to-top zp-back-to-top-hide';\n          _zPagingUtils.default.delay(function () {\n            _this.showBackToTopClass = false;\n          }, new Date().getTime() - this.lastBackToTopShowTime < 500 ? 0 : 300);\n        }\n      }\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy9tb2R1bGVzL2JhY2stdG8tdG9wLmpzIl0sIm5hbWVzIjpbInByb3BzIiwiYXV0b1Nob3dCYWNrVG9Ub3AiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ1IiwiZ2MiLCJiYWNrVG9Ub3BUaHJlc2hvbGQiLCJOdW1iZXIiLCJTdHJpbmciLCJiYWNrVG9Ub3BJbWciLCJiYWNrVG9Ub3BXaXRoQW5pbWF0ZSIsImJhY2tUb1RvcEJvdHRvbSIsImJhY2tUb1RvcFN0eWxlIiwiT2JqZWN0IiwiZW5hYmxlQmFja1RvVG9wIiwiZGF0YSIsImJhY2tUb1RvcENsYXNzIiwibGFzdEJhY2tUb1RvcFNob3dUaW1lIiwic2hvd0JhY2tUb1RvcENsYXNzIiwiY29tcHV0ZWQiLCJmaW5hbEVuYWJsZUJhY2tUb1RvcCIsInVzZVBhZ2VTY3JvbGwiLCJmaW5hbEJhY2tUb1RvcFRocmVzaG9sZCIsImNvbnZlcnRUb1B4IiwiZmluYWxCYWNrVG9Ub3BTdHlsZSIsImJvdHRvbSIsIndpbmRvd0JvdHRvbSIsInBvc2l0aW9uIiwibWV0aG9kcyIsIl9iYWNrVG9Ub3BDbGljayIsIl9jaGVja1Nob3VsZFNob3dCYWNrVG9Ub3AiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvcCIsIkRhdGUiLCJnZXRUaW1lIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQURBO0FBQUEsZ0JBR2U7RUFDZEEsS0FBSyxFQUFFO0lBQ047SUFDQUMsaUJBQWlCLEVBQUU7TUFDbEJDLElBQUksRUFBRUMsT0FBTztNQUNiQyxPQUFPLEVBQUVDLHFCQUFDLENBQUNDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLO0lBQ3pDLENBQUM7SUFDRDtJQUNBQyxrQkFBa0IsRUFBRTtNQUNuQkwsSUFBSSxFQUFFLENBQUNNLE1BQU0sRUFBRUMsTUFBTSxDQUFDO01BQ3RCTCxPQUFPLEVBQUVDLHFCQUFD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LENBQUMrQixLQUFLLENBQUMsWUFBTTtZQUNiLEtBQUksQ0FBQ25CLGNBQWMsR0FBRyxvQ0FBb0M7VUFDM0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNSO01BQ0QsQ0FBQyxNQUFNO1FBQ04sSUFBSSxJQUFJLENBQUNFLGtCQUFrQixFQUFFO1VBQzVCLElBQUksQ0FBQ0YsY0FBYyxHQUFHLG9DQUFvQztVQUMxRFoscUJBQUMsQ0FBQytCLEtBQUssQ0FBQyxZQUFNO1lBQ2IsS0FBSSxDQUFDakIsa0JBQWtCLEdBQUcsS0FBSztVQUNoQyxDQUFDLEVBQUUsSUFBSWUsSUFBSSxFQUFFLENBQUNDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQ2pCLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RFO01BQ0Q7SUFDRDtFQUNEO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6Ijk0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3otcGFnaW5nXeeCueWHu+i/lOWbnumhtumDqHZpZXfmqKHlnZdcclxuaW1wb3J0IHUgZnJvbSAnLi4vLi96LXBhZ2luZy11dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRwcm9wczoge1xyXG5cdFx0Ly/oh6rliqjmmL7npLrngrnlh7vov5Tlm57pobbpg6jmjInpkq7vvIzpu5jorqTkuLrlkKZcclxuXHRcdGF1dG9TaG93QmFja1RvVG9wOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2F1dG9TaG93QmFja1RvVG9wJywgZmFsc2UpXHJcblx0XHR9LFxyXG5cdFx0Ly/ngrnlh7vov5Tlm57pobbpg6jmjInpkq7mmL7npLov6ZqQ6JeP55qE6ZiI5YC8KOa7muWKqOi3neemuynvvIzljZXkvY3kuLpweO+8jOm7mOiupOS4ujQwMHJweFxyXG5cdFx0YmFja1RvVG9wVGhyZXNob2xkOiB7XHJcblx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2JhY2tUb1RvcFRocmVzaG9sZCcsICc0MDBycHgnKVxyXG5cdFx0fSxcclxuXHRcdC8v54K55Ye76L+U5Zue6aG26YOo5oyJ6ZKu55qE6Ieq5a6a5LmJ5Zu+54mH5Zyw5Z2A77yM6buY6K6k5L2/55Soei1wYWdpbmflhoXnva7nmoTlm77niYdcclxuXHRcdGJhY2tUb1RvcEltZzoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2JhY2tUb1RvcEltZycsICcnKVxyXG5cdFx0fSxcclxuXHRcdC8v54K55Ye76L+U5Zue6aG26YOo5oyJ6ZKu6L+U5Zue5Yiw6aG26YOo5pe25piv5ZCm5bGV56S66L+H5rih5Yqo55S777yM6buY6K6k5Li65pivXHJcblx0XHRiYWNrVG9Ub3BXaXRoQW5pbWF0ZToge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdiYWNrVG9Ub3BXaXRoQW5pbWF0ZScsIHRydWUpXHJcblx0XHR9LFxyXG5cdFx0Ly/ngrnlh7vov5Tlm57pobbpg6jmjInpkq7kuI7lupXpg6jnmoTot53nprvvvIzms6jmhI/mt7vliqDljZXkvY1weOaIlnJweO+8jOm7mOiupOS4ujE2MHJweFxyXG5cdFx0YmFja1RvVG9wQm90dG9tOiB7XHJcblx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2JhY2tUb1RvcEJvdHRvbScsICcxNjBycHgnKVxyXG5cdFx0fSxcclxuXHRcdC8v54K55Ye76L+U5Zue6aG26YOo5oyJ6ZKu55qE6Ieq5a6a5LmJ5qC35byPXHJcblx0XHRiYWNrVG9Ub3BTdHlsZToge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiB1LmdjKCdiYWNrVG9Ub3BTdHlsZScsIHt9KTtcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHQvL2lPU+eCueWHu+mhtumDqOeKtuaAgeagj+OAgeWuieWNk+WPjOWHu+agh+mimOagj+aXtu+8jOa7muWKqOadoei/lOWbnumhtumDqO+8jOWPquaUr+aMgeerluWQke+8jOm7mOiupOS4uuaYr1xyXG5cdFx0ZW5hYmxlQmFja1RvVG9wOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2VuYWJsZUJhY2tUb1RvcCcsIHRydWUpXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGJhY2tUb1RvcENsYXNzOiAnenAtYmFjay10by10b3AgenAtYmFjay10by10b3AtaGlkZScsXHJcblx0XHRcdGxhc3RCYWNrVG9Ub3BTaG93VGltZTogMCxcclxuXHRcdFx0c2hvd0JhY2tUb1RvcENsYXNzOiBmYWxzZSxcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRmaW5hbEVuYWJsZUJhY2tUb1RvcCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudXNlUGFnZVNjcm9sbCA/IGZhbHNlIDogdGhpcy5lbmFibGVCYWNrVG9Ub3A7XHJcblx0XHR9LFxyXG5cdFx0ZmluYWxCYWNrVG9Ub3BUaHJlc2hvbGQoKSB7XHJcblx0XHRcdHJldHVybiB1LmNvbnZlcnRUb1B4KHRoaXMuYmFja1RvVG9wVGhyZXNob2xkKTtcclxuXHRcdH0sXHJcblx0XHRmaW5hbEJhY2tUb1RvcFN0eWxlKCkge1xyXG5cdFx0XHRjb25zdCBiYWNrVG9Ub3BTdHlsZSA9IHRoaXMuYmFja1RvVG9wU3R5bGU7XHJcblx0XHRcdGlmICghYmFja1RvVG9wU3R5bGUuYm90dG9tKSB7XHJcblx0XHRcdFx0YmFja1RvVG9wU3R5bGUuYm90dG9tID0gdGhpcy53aW5kb3dCb3R0b20gKyB1LmNvbnZlcnRUb1B4KHRoaXMuYmFja1RvVG9wQm90dG9tKSArICdweCc7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoIWJhY2tUb1RvcFN0eWxlLnBvc2l0aW9uKXtcclxuXHRcdFx0XHRiYWNrVG9Ub3BTdHlsZS5wb3NpdGlvbiA9IHRoaXMudXNlUGFnZVNjcm9sbCA/ICdmaXhlZCc6ICdhYnNvbHV0ZSc7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGJhY2tUb1RvcFN0eWxlO1xyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8v54K55Ye76L+U5Zue6aG26YOoXHJcblx0XHRfYmFja1RvVG9wQ2xpY2soKSB7XHJcblx0XHRcdCF0aGlzLmJhY2tUb1RvcFdpdGhBbmltYXRlICYmIHRoaXMuX2NoZWNrU2hvdWxkU2hvd0JhY2tUb1RvcCgwKTtcclxuXHRcdFx0dGhpcy5zY3JvbGxUb1RvcCh0aGlzLmJhY2tUb1RvcFdpdGhBbmltYXRlKTtcclxuXHRcdH0sXHJcblx0XHQvL+WIpOaWreaYr+WQpuimgeaYvuekuui/lOWbnumhtumDqOaMiemSrlxyXG5cdFx0X2NoZWNrU2hvdWxkU2hvd0JhY2tUb1RvcChzY3JvbGxUb3ApIHtcclxuXHRcdFx0aWYgKCF0aGlzLmF1dG9TaG93QmFja1RvVG9wKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93QmFja1RvVG9wQ2xhc3MgPSBmYWxzZTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHNjcm9sbFRvcCA+IHRoaXMuZmluYWxCYWNrVG9Ub3BUaHJlc2hvbGQpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuc2hvd0JhY2tUb1RvcENsYXNzKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dCYWNrVG9Ub3BDbGFzcyA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmxhc3RCYWNrVG9Ub3BTaG93VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHRcdFx0dS5kZWxheSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYmFja1RvVG9wQ2xhc3MgPSAnenAtYmFjay10by10b3AgenAtYmFjay10by10b3Atc2hvdyc7XHJcblx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLnNob3dCYWNrVG9Ub3BDbGFzcykge1xyXG5cdFx0XHRcdFx0dGhpcy5iYWNrVG9Ub3BDbGFzcyA9ICd6cC1iYWNrLXRvLXRvcCB6cC1iYWNrLXRvLXRvcC1oaWRlJztcclxuXHRcdFx0XHRcdHUuZGVsYXkoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dCYWNrVG9Ub3BDbGFzcyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSwgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmxhc3RCYWNrVG9Ub3BTaG93VGltZSA8IDUwMCA/IDAgOiAzMDApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///94\n");

/***/ }),
/* 95 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/js/modules/virtual-list.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 43));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 45));\nvar _zPagingUtils = _interopRequireDefault(__webpack_require__(/*! .././z-paging-utils */ 47));\nvar _zPagingConstant = _interopRequireDefault(__webpack_require__(/*! .././z-paging-constant */ 46));\nvar _zPagingEnum = _interopRequireDefault(__webpack_require__(/*! .././z-paging-enum */ 57));\n// [z-paging]虚拟列表模块\nvar _default2 = {\n  props: {\n    //是否使用虚拟列表，默认为否\n    useVirtualList: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('useVirtualList', false)\n    },\n    //在使用虚拟列表时，是否使用兼容模式，默认为否\n    useCompatibilityMode: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('useCompatibilityMode', false)\n    },\n    //使用兼容模式时传递的附加数据\n    extraData: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('extraData', {});\n      }\n    },\n    //是否在z-paging内部循环渲染列表(内置列表)，默认为否。若use-virtual-list为true，则此项恒为true\n    useInnerList: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('useInnerList', false)\n    },\n    //强制关闭inner-list，默认为false，如果为true将强制关闭innerList，适用于开启了虚拟列表后需要强制关闭inner-list的情况\n    forceCloseInnerList: {\n      type: Boolean,\n      default: _zPagingUtils.default.gc('forceCloseInnerList', false)\n    },\n    //内置列表cell的key名称，仅nvue有效，在nvue中开启use-inner-list时必须填此项\n    cellKeyName: {\n      type: String,\n      default: _zPagingUtils.default.gc('cellKeyName', '')\n    },\n    //innerList样式\n    innerListStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('innerListStyle', {});\n      }\n    },\n    //innerCell样式\n    innerCellStyle: {\n      type: Object,\n      default: function _default() {\n        return _zPagingUtils.default.gc('innerCellStyle', {});\n      }\n    },\n    //预加载的列表可视范围(列表高度)页数，默认为7，即预加载当前页及上下各7页的cell。此数值越大，则虚拟列表中加载的dom越多，内存消耗越大(会维持在一个稳定值)，但增加预加载页面数量可缓解快速滚动短暂白屏问题\n    preloadPage: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('preloadPage', 7),\n      validator: function validator(value) {\n        if (value <= 0) _zPagingUtils.default.consoleErr('preload-page必须大于0！');\n        return value > 0;\n      }\n    },\n    //虚拟列表cell高度模式，默认为fixed，也就是每个cell高度完全相同，将以第一个cell高度为准进行计算。可选值【dynamic】，即代表高度是动态非固定的，【dynamic】性能低于【fixed】。\n    cellHeightMode: {\n      type: String,\n      default: _zPagingUtils.default.gc('cellHeightMode', _zPagingEnum.default.CellHeightMode.Fixed)\n    },\n    //虚拟列表列数，默认为1。常用于每行有多列的情况，例如每行有2列数据，需要将此值设置为2\n    virtualListCol: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('virtualListCol', 1)\n    },\n    //虚拟列表scroll取样帧率，默认为80，过低容易出现白屏问题，过高容易出现卡顿问题\n    virtualScrollFps: {\n      type: [Number, String],\n      default: _zPagingUtils.default.gc('virtualScrollFps', 80)\n    }\n  },\n  data: function data() {\n    return {\n      virtualListKey: _zPagingUtils.default.getInstanceId(),\n      virtualPageHeight: 0,\n      virtualCellHeight: 0,\n      virtualScrollTimeStamp: 0,\n      virtualList: [],\n      virtualPlaceholderTopHeight: 0,\n      virtualPlaceholderBottomHeight: 0,\n      virtualTopRangeIndex: 0,\n      virtualBottomRangeIndex: 0,\n      lastVirtualTopRangeIndex: 0,\n      lastVirtualBottomRangeIndex: 0,\n      virtualHeightCacheList: [],\n      getCellHeightRetryCount: {\n        fixed: 0,\n        dynamic: 0\n      },\n      pagingOrgTop: -1,\n      updateVirtualListFromDataChange: false\n    };\n  },\n  watch: {\n    realTotalData: function realTotalData(newVal) {},\n    virtualList: function virtualList(newVal) {\n      this.$emit('update:virtualList', newVal);\n      this.$emit('virtualListChange', newVal);\n    }\n  },\n  computed: {\n    finalUseVirtualList: function finalUseVirtualList() {\n      if (this.useVirtualList && this.usePageScroll) {\n        _zPagingUtils.default.consoleErr('使用页面滚动时，开启虚拟列表无效！');\n      }\n      return this.useVirtualList && !this.usePageScroll;\n    },\n    finalUseInnerList: function finalUseInnerList() {\n      return this.useInnerList || this.finalUseVirtualList && !this.forceCloseInnerList;\n    },\n    finalCellKeyName: function finalCellKeyName() {\n      if (this.finalUseVirtualList && !this.cellKeyName.length) {\n        _zPagingUtils.default.consoleErr('在nvue中开启use-virtual-list必须设置cell-key-name，否则将可能导致列表渲染错误！');\n      }\n      return this.cellKeyName;\n    },\n    finalVirtualPageHeight: function finalVirtualPageHeight() {\n      return this.virtualPageHeight > 0 ? this.virtualPageHeight : this.windowHeight;\n    },\n    virtualRangePageHeight: function virtualRangePageHeight() {\n      return this.finalVirtualPageHeight * this.preloadPage;\n    },\n    virtualScrollDisTimeStamp: function virtualScrollDisTimeStamp() {\n      return 1000 / this.virtualScrollFps;\n    }\n  },\n  methods: {\n    //在使用动态高度虚拟列表时，手动更新指定cell的缓存高度(当cell高度在初始化之后再次改变时调用)，index代表需要更新的cell在列表中的位置，从0开始\n    didUpdateVirtualListCell: function didUpdateVirtualListCell(index) {\n      var _this = this;\n      if (this.cellHeightMode !== _zPagingEnum.default.CellHeightMode.Dynamic) return;\n      var currentNode = this.virtualHeightCacheList[index];\n      this._getNodeClientRect(\"#zp-id-\".concat(index), this.finalUseInnerList).then(function (cellNode) {\n        var cellNodeHeight = cellNode ? cellNode[0].height : 0;\n        var heightDis = cellNodeHeight - currentNode.height;\n        currentNode.height = cellNodeHeight;\n        currentNode.totalHeight = currentNode.lastHeight + cellNodeHeight;\n        for (var i = index + 1; i < _this.virtualHeightCacheList.length; i++) {\n          var thisNode = _this.virtualHeightCacheList[i];\n          if (i === index + 1) {\n            thisNode.lastHeight = cellNodeHeight;\n          }\n          thisNode.totalHeight += heightDis;\n        }\n      });\n    },\n    //在使用动态高度虚拟列表时，若删除了列表数组中的某个item，需要调用此方法以更新高度缓存数组，index代表需要更新的cell在列表中的位置，从0开始\n    didDeleteVirtualListCell: function didDeleteVirtualListCell(index) {\n      if (this.cellHeightMode !== _zPagingEnum.default.CellHeightMode.Dynamic) return;\n      var currentNode = this.virtualHeightCacheList[index];\n      for (var i = index + 1; i < this.virtualHeightCacheList.length; i++) {\n        var thisNode = this.virtualHeightCacheList[i];\n        if (i === index + 1) {\n          thisNode.lastHeight = currentNode.lastHeight;\n        }\n        thisNode.totalHeight -= currentNode.height;\n      }\n      this.virtualHeightCacheList.splice(index, 1);\n    },\n    //初始化虚拟列表\n    _virtualListInit: function _virtualListInit() {\n      var _this2 = this;\n      this.$nextTick(function () {\n        _zPagingUtils.default.delay(function () {\n          _this2._getNodeClientRect('.zp-scroll-view').then(function (node) {\n            if (node) {\n              _this2.pagingOrgTop = node[0].top;\n              _this2.virtualPageHeight = node[0].height;\n            }\n          });\n        });\n      });\n    },\n    //cellHeightMode为fixed时获取第一个cell高度\n    _updateFixedCellHeight: function _updateFixedCellHeight() {\n      var _this3 = this;\n      this.$nextTick(function () {\n        _zPagingUtils.default.delay(function () {\n          _this3._getNodeClientRect(\"#zp-id-\".concat(0), _this3.finalUseInnerList).then(function (cellNode) {\n            if (!cellNode) {\n              if (_this3.getCellHeightRetryCount.fixed > 10) return;\n              _this3.getCellHeightRetryCount.fixed++;\n              _this3._updateFixedCellHeight();\n            } else {\n              _this3.virtualCellHeight = cellNode[0].height;\n              _this3._updateVirtualScroll(_this3.oldScrollTop);\n            }\n          });\n        }, _zPagingConstant.default.delayTime, 'updateFixedCellHeightDelay');\n      });\n    },\n    //cellHeightMode为dynamic时获取每个cell高度\n    _updateDynamicCellHeight: function _updateDynamicCellHeight(list) {\n      var _this4 = this;\n      this.$nextTick(function () {\n        _zPagingUtils.default.delay( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n          var i, item, cellNode, currentHeight, lastHeightCache, lastHeight;\n          return _regenerator.default.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  i = 0;\n                case 1:\n                  if (!(i < list.length)) {\n                    _context.next = 20;\n                    break;\n                  }\n                  item = list[i];\n                  _context.next = 5;\n                  return _this4._getNodeClientRect(\"#zp-id-\".concat(item[_zPagingConstant.default.listCellIndexKey]), _this4.finalUseInnerList);\n                case 5:\n                  cellNode = _context.sent;\n                  currentHeight = cellNode ? cellNode[0].height : 0;\n                  if (cellNode) {\n                    _context.next = 14;\n                    break;\n                  }\n                  _this4.virtualHeightCacheList = _this4.virtualHeightCacheList.slice(-i);\n                  if (!(_this4.getCellHeightRetryCount.dynamic > 10)) {\n                    _context.next = 11;\n                    break;\n                  }\n                  return _context.abrupt(\"return\");\n                case 11:\n                  _this4.getCellHeightRetryCount.dynamic++;\n                  _this4._updateDynamicCellHeight(list);\n                  return _context.abrupt(\"break\", 20);\n                case 14:\n                  lastHeightCache = _this4.virtualHeightCacheList.length ? _this4.virtualHeightCacheList.slice(-1)[0] : null;\n                  lastHeight = lastHeightCache ? lastHeightCache.totalHeight : 0;\n                  _this4.virtualHeightCacheList.push({\n                    height: currentHeight,\n                    lastHeight: lastHeight,\n                    totalHeight: lastHeight + currentHeight\n                  });\n                case 17:\n                  i++;\n                  _context.next = 1;\n                  break;\n                case 20:\n                  _this4._updateVirtualScroll(_this4.oldScrollTop);\n                case 21:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        })), _zPagingConstant.default.delayTime, 'updateDynamicCellHeightDelay');\n      });\n    },\n    //设置cellItem的index\n    _setCellIndex: function _setCellIndex(list, isFirstPage) {\n      var lastItemIndex = 0;\n      if (!isFirstPage) {\n        lastItemIndex = this.realTotalData.length;\n        var lastItem = this.realTotalData.length ? this.realTotalData.slice(-1)[0] : null;\n        if (lastItem && lastItem[_zPagingConstant.default.listCellIndexKey] !== undefined) {\n          lastItemIndex = lastItem[_zPagingConstant.default.listCellIndexKey] + 1;\n        }\n      } else {\n        this._resetDynamicListState();\n      }\n      for (var i = 0; i < list.length; i++) {\n        var item = list[i];\n        if (!item || Object.prototype.toString.call(item) !== '[object Object]') {\n          item = {\n            item: item\n          };\n        }\n        item[_zPagingConstant.default.listCellIndexKey] = lastItemIndex + i;\n        item[_zPagingConstant.default.listCellIndexUniqueKey] = \"\".concat(this.virtualListKey, \"-\").concat(item[_zPagingConstant.default.listCellIndexKey]);\n        list[i] = item;\n      }\n      this.getCellHeightRetryCount.dynamic = 0;\n      this.cellHeightMode === _zPagingEnum.default.CellHeightMode.Dynamic && this._updateDynamicCellHeight(list);\n    },\n    //更新scroll滚动\n    _updateVirtualScroll: function _updateVirtualScroll(scrollTop) {\n      var scrollDiff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var currentTimeStamp = _zPagingUtils.default.getTime();\n      scrollTop === 0 && this._resetTopRange();\n      if (scrollTop !== 0 && this.virtualScrollTimeStamp && currentTimeStamp - this.virtualScrollTimeStamp <= this.virtualScrollDisTimeStamp) {\n        return;\n      }\n      this.virtualScrollTimeStamp = currentTimeStamp;\n      var scrollIndex = 0;\n      var cellHeightMode = this.cellHeightMode;\n      if (cellHeightMode === _zPagingEnum.default.CellHeightMode.Fixed) {\n        scrollIndex = parseInt(scrollTop / this.virtualCellHeight) || 0;\n        this._updateFixedTopRangeIndex(scrollIndex);\n        this._updateFixedBottomRangeIndex(scrollIndex);\n      } else if (cellHeightMode === _zPagingEnum.default.CellHeightMode.Dynamic) {\n        var scrollDirection = scrollDiff > 0 ? 'top' : 'bottom';\n        var rangePageHeight = this.virtualRangePageHeight;\n        var topRangePageOffset = scrollTop - rangePageHeight;\n        var bottomRangePageOffset = scrollTop + this.finalVirtualPageHeight + rangePageHeight;\n        var virtualBottomRangeIndex = 0;\n        var virtualPlaceholderBottomHeight = 0;\n        var reachedLimitBottom = false;\n        var heightCacheList = this.virtualHeightCacheList;\n        var lastHeightCache = !!heightCacheList ? heightCacheList.slice(-1)[0] : null;\n        var startTopRangeIndex = this.virtualTopRangeIndex;\n        if (scrollDirection === 'bottom') {\n          for (var i = startTopRangeIndex; i < heightCacheList.length; i++) {\n            var heightCacheItem = heightCacheList[i];\n            if (heightCacheItem && heightCacheItem.totalHeight > topRangePageOffset) {\n              this.virtualTopRangeIndex = i;\n              this.virtualPlaceholderTopHeight = heightCacheItem.lastHeight;\n              break;\n            }\n          }\n        } else {\n          var topRangeMatched = false;\n          for (var _i = startTopRangeIndex; _i >= 0; _i--) {\n            var _heightCacheItem = heightCacheList[_i];\n            if (_heightCacheItem && _heightCacheItem.totalHeight < topRangePageOffset) {\n              this.virtualTopRangeIndex = _i;\n              this.virtualPlaceholderTopHeight = _heightCacheItem.lastHeight;\n              topRangeMatched = true;\n              break;\n            }\n          }\n          !topRangeMatched && this._resetTopRange();\n        }\n        for (var _i2 = this.virtualTopRangeIndex; _i2 < heightCacheList.length; _i2++) {\n          var _heightCacheItem2 = heightCacheList[_i2];\n          if (_heightCacheItem2 && _heightCacheItem2.totalHeight > bottomRangePageOffset) {\n            virtualBottomRangeIndex = _i2;\n            virtualPlaceholderBottomHeight = lastHeightCache.totalHeight - _heightCacheItem2.totalHeight;\n            reachedLimitBottom = true;\n            break;\n          }\n        }\n        if (!reachedLimitBottom || this.virtualBottomRangeIndex === 0) {\n          this.virtualBottomRangeIndex = this.realTotalData.length ? this.realTotalData.length - 1 : this.pageSize;\n          this.virtualPlaceholderBottomHeight = 0;\n        } else {\n          this.virtualBottomRangeIndex = virtualBottomRangeIndex;\n          this.virtualPlaceholderBottomHeight = virtualPlaceholderBottomHeight;\n        }\n        this._updateVirtualList();\n      }\n    },\n    //更新fixedCell模式下topRangeIndex&placeholderTopHeight\n    _updateFixedTopRangeIndex: function _updateFixedTopRangeIndex(scrollIndex) {\n      var virtualTopRangeIndex = this.virtualCellHeight === 0 ? 0 : scrollIndex - parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) * this.preloadPage;\n      virtualTopRangeIndex *= this.virtualListCol;\n      virtualTopRangeIndex = Math.max(0, virtualTopRangeIndex);\n      this.virtualTopRangeIndex = virtualTopRangeIndex;\n      this.virtualPlaceholderTopHeight = virtualTopRangeIndex / this.virtualListCol * this.virtualCellHeight;\n    },\n    //更新fixedCell模式下bottomRangeIndex&placeholderBottomHeight\n    _updateFixedBottomRangeIndex: function _updateFixedBottomRangeIndex(scrollIndex) {\n      var virtualBottomRangeIndex = this.virtualCellHeight === 0 ? this.pageSize : scrollIndex + parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) * (this.preloadPage + 1);\n      virtualBottomRangeIndex *= this.virtualListCol;\n      virtualBottomRangeIndex = Math.min(this.realTotalData.length, virtualBottomRangeIndex);\n      this.virtualBottomRangeIndex = virtualBottomRangeIndex;\n      this.virtualPlaceholderBottomHeight = (this.realTotalData.length - virtualBottomRangeIndex) * this.virtualCellHeight / this.virtualListCol;\n      this._updateVirtualList();\n    },\n    //更新virtualList\n    _updateVirtualList: function _updateVirtualList() {\n      var shouldUpdateList = this.updateVirtualListFromDataChange || this.lastVirtualTopRangeIndex !== this.virtualTopRangeIndex || this.lastVirtualBottomRangeIndex !== this.virtualBottomRangeIndex;\n      if (shouldUpdateList) {\n        this.updateVirtualListFromDataChange = false;\n        this.lastVirtualTopRangeIndex = this.virtualTopRangeIndex;\n        this.lastVirtualBottomRangeIndex = this.virtualBottomRangeIndex;\n        this.virtualList = this.realTotalData.slice(this.virtualTopRangeIndex, this.virtualBottomRangeIndex + 1);\n      }\n    },\n    //重置动态cell模式下的高度缓存数据、虚拟列表和滚动状态\n    _resetDynamicListState: function _resetDynamicListState() {\n      var resetVirtualList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      this.virtualHeightCacheList = [];\n      if (resetVirtualList) {\n        this.virtualList = [];\n      }\n      this.virtualTopRangeIndex = 0;\n      this.virtualPlaceholderTopHeight = 0;\n    },\n    //重置topRangeIndex和placeholderTopHeight\n    _resetTopRange: function _resetTopRange() {\n      this.virtualTopRangeIndex = 0;\n      this.virtualPlaceholderTopHeight = 0;\n      this._updateVirtualList();\n    },\n    //检测虚拟列表当前滚动位置，如发现滚动位置不正确则重新计算虚拟列表相关参数(为解决在App中可能出现的长时间进入后台后打开App白屏的问题)\n    _checkVirtualListScroll: function _checkVirtualListScroll() {\n      var _this5 = this;\n      if (this.finalUseVirtualList) {\n        this.$nextTick(function () {\n          _this5._getNodeClientRect('.zp-paging-touch-view').then(function (node) {\n            var currentTop = node ? node[0].top : 0;\n            if (!node || currentTop === _this5.pagingOrgTop && _this5.virtualPlaceholderTopHeight !== 0) {\n              _this5._updateVirtualScroll(0);\n            }\n          });\n        });\n      }\n    },\n    //处理使用内置列表时点击了cell事件\n    _innerCellClick: function _innerCellClick(item, index) {\n      this.$emit('innerCellClick', item, index);\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvei1wYWdpbmcvY29tcG9uZW50cy96LXBhZ2luZy9qcy9tb2R1bGVzL3ZpcnR1YWwtbGlzdC5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInVzZVZpcnR1YWxMaXN0IiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidSIsImdjIiwidXNlQ29tcGF0aWJpbGl0eU1vZGUiLCJleHRyYURhdGEiLCJPYmplY3QiLCJ1c2VJbm5lckxpc3QiLCJmb3JjZUNsb3NlSW5uZXJMaXN0IiwiY2VsbEtleU5hbWUiLCJTdHJpbmciLCJpbm5lckxpc3RTdHlsZSIsImlubmVyQ2VsbFN0eWxlIiwicHJlbG9hZFBhZ2UiLCJOdW1iZXIiLCJ2YWxpZGF0b3IiLCJ2YWx1ZSIsImNvbnNvbGVFcnIiLCJjZWxsSGVpZ2h0TW9kZSIsIkVudW0iLCJDZWxsSGVpZ2h0TW9kZSIsIkZpeGVkIiwidmlydHVhbExpc3RDb2wiLCJ2aXJ0dWFsU2Nyb2xsRnBzIiwiZGF0YSIsInZpcnR1YWxMaXN0S2V5IiwiZ2V0SW5zdGFuY2VJZCIsInZpcnR1YWxQYWdlSGVpZ2h0IiwidmlydHVhbENlbGxIZWlnaHQiLCJ2aXJ0dWFsU2Nyb2xsVGltZVN0YW1wIiwidmlydHVhbExpc3QiLCJ2aXJ0dWFsUGxhY2Vob2xkZXJUb3BIZWlnaHQiLCJ2aXJ0dWFsUGxhY2Vob2xkZXJCb3R0b21IZWlnaHQiLCJ2aXJ0dWFsVG9wUmFuZ2VJbmRleCIsInZpcnR1YWxCb3R0b21SYW5nZUluZGV4IiwibGFzdFZpcnR1YWxUb3BSYW5nZUluZGV4IiwibGFzdFZpcnR1YWxCb3R0b21SYW5nZUluZGV4IiwidmlydHVhbEhlaWdodENhY2hlTGlzdCIsImdldENlbGxIZWlnaHRSZXRyeUNvdW50IiwiZml4ZWQiLCJkeW5hbWljIiwicGFnaW5nT3JnVG9wIiwidXBkYXRlVmlydHVhbExpc3RGcm9tRGF0YUNoYW5nZSIsIndhdGNoIiwicmVhbFRvdGFsRGF0YSIsIm5ld1ZhbCIsIiRlbWl0IiwiY29tcHV0ZWQiLCJmaW5hbFVzZVZpcnR1YWxMaXN0IiwidXNlUGFnZVNjcm9sbCIsImZpbmFsVXNlSW5uZXJMaXN0IiwiZmluYWxDZWxsS2V5TmFtZSIsImxlbmd0aCIsImZpbmFsVmlydHVhbFBhZ2VIZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJ2aXJ0dWFsUmFuZ2VQYWdlSGVpZ2h0IiwidmlydHVhbFNjcm9sbERpc1RpbWVTdGFtcCIsIm1ldGhvZHMiLCJkaWRVcGRhdGVWaXJ0dWFsTGlzdENlbGwiLCJpbmRleCIsIkR5bmFtaWMiLCJjdXJyZW50Tm9kZSIsIl9nZXROb2RlQ2xpZW50UmVjdCIsInRoZW4iLCJjZWxsTm9kZSIsImNlbGxOb2RlSGVpZ2h0IiwiaGVpZ2h0IiwiaGVpZ2h0RGlzIiwidG90YWxIZWlnaHQiLCJsYXN0SGVpZ2h0IiwiaSIsInRoaXNOb2RlIiwiZGlkRGVsZXRlVmlydHVhbExpc3RDZWxsIiwic3BsaWNlIiwiX3ZpcnR1YWxMaXN0SW5pdCIsIiRuZXh0VGljayIsImRlbGF5Iiwibm9kZSIsInRvcCIsIl91cGRhdGVGaXhlZENlbGxIZWlnaHQiLCJfdXBkYXRlVmlydHVhbFNjcm9sbCIsIm9sZFNjcm9sbFRvcCIsImMiLCJkZWxheVRpbWUiLCJfdXBkYXRlRHluYW1pY0NlbGxIZWlnaHQiLCJsaXN0IiwiaXRlbSIsImxpc3RDZWxsSW5kZXhLZXkiLCJjdXJyZW50SGVpZ2h0Iiwic2xpY2UiLCJsYXN0SGVpZ2h0Q2FjaGUiLCJwdXNoIiwiX3NldENlbGxJbmRleCIsImlzRmlyc3RQYWdlIiwibGFzdEl0ZW1JbmRleCIsImxhc3RJdGVtIiwidW5kZWZpbmVkIiwiX3Jlc2V0RHluYW1pY0xpc3RTdGF0ZSIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImxpc3RDZWxsSW5kZXhVbmlxdWVLZXkiLCJzY3JvbGxUb3AiLCJzY3JvbGxEaWZmIiwiY3VycmVudFRpbWVTdGFtcCIsImdldFRpbWUiLCJfcmVzZXRUb3BSYW5nZSIsInNjcm9sbEluZGV4IiwicGFyc2VJbnQiLCJfdXBkYXRlRml4ZWRUb3BSYW5nZUluZGV4IiwiX3VwZGF0ZUZpeGVkQm90dG9tUmFuZ2VJbmRleCIsInNjcm9sbERpcmVjdGlvbiIsInJhbmdlUGFnZUhlaWdodCIsInRvcFJhbmdlUGFnZU9mZnNldCIsImJvdHRvbVJhbmdlUGFnZU9mZnNldCIsInJlYWNoZWRMaW1pdEJvdHRvbSIsImhlaWdodENhY2hlTGlzdCIsInN0YXJ0VG9wUmFuZ2VJbmRleCIsImhlaWdodENhY2hlSXRlbSIsInRvcFJhbmdlTWF0Y2hlZCIsInBhZ2VTaXplIiwiX3VwZGF0ZVZpcnR1YWxMaXN0IiwiTWF0aCIsIm1heCIsIm1pbiIsInNob3VsZFVwZGF0ZUxpc3QiLCJyZXNldFZpcnR1YWxMaXN0IiwiX2NoZWNrVmlydHVhbExpc3RTY3JvbGwiLCJjdXJyZW50VG9wIiwiX2lubmVyQ2VsbENsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBLGdCQUtlO0VBQ2RBLEtBQUssRUFBRTtJQUNOO0lBQ0FDLGNBQWMsRUFBRTtNQUNmQyxJQUFJLEVBQUVDLE9BQU87TUFDYkMsT0FBTyxFQUFFQyxxQkFBQyxDQUFDQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsS0FBSztJQUN0QyxDQUFDO0lBQ0Q7SUFDQUMsb0JBQW9CLEVBQUU7TUFDckJMLElBQUksRUFBRUMsT0FBTztNQUNiQyxPQUFPLEVBQUVDLHFCQUFDLENBQUNDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLO0lBQzVDLENBQUM7SUFDRDtJQUNBRSxTQUFTLEVBQUU7TUFDVk4sSUFBSSxFQUFFTyxNQUFNO01BQ1pMLE9BQU8sRUFBRSxvQkFBVztRQUNuQixPQUFPQyxxQkFBQyxDQUFDQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO01BQzdCO0lBQ0QsQ0FBQztJQUNEO0lBQ0FJLFlBQVksRUFBRTtNQUNiUixJQUFJLEVBQUVDLE9BQU87TUFDYkMsT0FBTyxFQUFFQyxxQkFBQyxDQUFDQyxFQUFFLENBQUMsY0FB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QUksQ0FBQzBGLGtCQUFrQixFQUFFO0lBQzFCLENBQUM7SUFDRDtJQUNBTSx1QkFBdUIscUNBQUc7TUFBQTtNQUN6QixJQUFJLElBQUksQ0FBQy9FLG1CQUFtQixFQUFFO1FBQzdCLElBQUksQ0FBQzJCLFNBQVMsQ0FBQyxZQUFNO1VBQ3BCLE1BQUksQ0FBQ2Isa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUFjLElBQUksRUFBSTtZQUM3RCxJQUFNbUQsVUFBVSxHQUFHbkQsSUFBSSxHQUFHQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUcsR0FBRyxDQUFDO1lBQ3pDLElBQUksQ0FBQ0QsSUFBSSxJQUFLbUQsVUFBVSxLQUFLLE1BQUksQ0FBQ3ZGLFlBQVksSUFBSSxNQUFJLENBQUNWLDJCQUEyQixLQUFLLENBQUUsRUFBRTtjQUMxRixNQUFJLENBQUNpRCxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFDN0I7VUFDRCxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUM7TUFDSDtJQUNELENBQUM7SUFDRDtJQUNBaUQsZUFBZSwyQkFBQzNDLElBQUksRUFBRTNCLEtBQUssRUFBRTtNQUM1QixJQUFJLENBQUNiLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRXdDLElBQUksRUFBRTNCLEtBQUssQ0FBQztJQUMxQztFQUNEO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6Ijk1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3otcGFnaW5nXeiZmuaLn+WIl+ihqOaooeWdl1xuaW1wb3J0IHUgZnJvbSAnLi4vLi96LXBhZ2luZy11dGlscydcbmltcG9ydCBjIGZyb20gJy4uLy4vei1wYWdpbmctY29uc3RhbnQnXG5pbXBvcnQgRW51bSBmcm9tICcuLi8uL3otcGFnaW5nLWVudW0nXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IHtcblx0XHQvL+aYr+WQpuS9v+eUqOiZmuaLn+WIl+ihqO+8jOm7mOiupOS4uuWQplxuXHRcdHVzZVZpcnR1YWxMaXN0OiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygndXNlVmlydHVhbExpc3QnLCBmYWxzZSlcblx0XHR9LFxuXHRcdC8v5Zyo5L2/55So6Jma5ouf5YiX6KGo5pe277yM5piv5ZCm5L2/55So5YW85a655qih5byP77yM6buY6K6k5Li65ZCmXG5cdFx0dXNlQ29tcGF0aWJpbGl0eU1vZGU6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCd1c2VDb21wYXRpYmlsaXR5TW9kZScsIGZhbHNlKVxuXHRcdH0sXG5cdFx0Ly/kvb/nlKjlhbzlrrnmqKHlvI/ml7bkvKDpgJLnmoTpmYTliqDmlbDmja5cblx0XHRleHRyYURhdGE6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdS5nYygnZXh0cmFEYXRhJywge30pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/mmK/lkKblnKh6LXBhZ2luZ+WGhemDqOW+queOr+a4suafk+WIl+ihqCjlhoXnva7liJfooagp77yM6buY6K6k5Li65ZCm44CC6IuldXNlLXZpcnR1YWwtbGlzdOS4unRydWXvvIzliJnmraTpobnmgZLkuLp0cnVlXG5cdFx0dXNlSW5uZXJMaXN0OiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygndXNlSW5uZXJMaXN0JywgZmFsc2UpXG5cdFx0fSxcblx0XHQvL+W8uuWItuWFs+mXrWlubmVyLWxpc3TvvIzpu5jorqTkuLpmYWxzZe+8jOWmguaenOS4unRydWXlsIblvLrliLblhbPpl61pbm5lckxpc3TvvIzpgILnlKjkuo7lvIDlkK/kuobomZrmi5/liJfooajlkI7pnIDopoHlvLrliLblhbPpl61pbm5lci1saXN055qE5oOF5Ya1XG5cdFx0Zm9yY2VDbG9zZUlubmVyTGlzdDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ2ZvcmNlQ2xvc2VJbm5lckxpc3QnLCBmYWxzZSlcblx0XHR9LFxuXHRcdC8v5YaF572u5YiX6KGoY2VsbOeahGtleeWQjeensO+8jOS7hW52dWXmnInmlYjvvIzlnKhudnVl5Lit5byA5ZCvdXNlLWlubmVyLWxpc3Tml7blv4XpobvloavmraTpoblcblx0XHRjZWxsS2V5TmFtZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnY2VsbEtleU5hbWUnLCAnJylcblx0XHR9LFxuXHRcdC8vaW5uZXJMaXN05qC35byPXG5cdFx0aW5uZXJMaXN0U3R5bGU6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdS5nYygnaW5uZXJMaXN0U3R5bGUnLCB7fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL2lubmVyQ2VsbOagt+W8j1xuXHRcdGlubmVyQ2VsbFN0eWxlOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHUuZ2MoJ2lubmVyQ2VsbFN0eWxlJywge30pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/pooTliqDovb3nmoTliJfooajlj6/op4bojIPlm7Qo5YiX6KGo6auY5bqmKemhteaVsO+8jOm7mOiupOS4ujfvvIzljbPpooTliqDovb3lvZPliY3pobXlj4rkuIrkuIvlkIQ36aG155qEY2VsbOOAguatpOaVsOWAvOi2iuWkp++8jOWImeiZmuaLn+WIl+ihqOS4reWKoOi9veeahGRvbei2iuWkmu+8jOWGheWtmOa2iOiAl+i2iuWkpyjkvJrnu7TmjIHlnKjkuIDkuKrnqLPlrprlgLwp77yM5L2G5aKe5Yqg6aKE5Yqg6L296aG16Z2i5pWw6YeP5Y+v57yT6Kej5b+r6YCf5rua5Yqo55+t5pqC55m95bGP6Zeu6aKYXG5cdFx0cHJlbG9hZFBhZ2U6IHtcblx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRkZWZhdWx0OiB1LmdjKCdwcmVsb2FkUGFnZScsIDcpLFxuXHRcdFx0dmFsaWRhdG9yOiAodmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKHZhbHVlIDw9IDApIHUuY29uc29sZUVycigncHJlbG9hZC1wYWdl5b+F6aG75aSn5LqOMO+8gScpO1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPiAwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/omZrmi5/liJfooahjZWxs6auY5bqm5qih5byP77yM6buY6K6k5Li6Zml4ZWTvvIzkuZ/lsLHmmK/mr4/kuKpjZWxs6auY5bqm5a6M5YWo55u45ZCM77yM5bCG5Lul56ys5LiA5LiqY2VsbOmrmOW6puS4uuWHhui/m+ihjOiuoeeul+OAguWPr+mAieWAvOOAkGR5bmFtaWPjgJHvvIzljbPku6Pooajpq5jluqbmmK/liqjmgIHpnZ7lm7rlrprnmoTvvIzjgJBkeW5hbWlj44CR5oCn6IO95L2O5LqO44CQZml4ZWTjgJHjgIJcblx0XHRjZWxsSGVpZ2h0TW9kZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygnY2VsbEhlaWdodE1vZGUnLCBFbnVtLkNlbGxIZWlnaHRNb2RlLkZpeGVkKVxuXHRcdH0sXG5cdFx0Ly/omZrmi5/liJfooajliJfmlbDvvIzpu5jorqTkuLox44CC5bi455So5LqO5q+P6KGM5pyJ5aSa5YiX55qE5oOF5Ya177yM5L6L5aaC5q+P6KGM5pyJMuWIl+aVsOaNru+8jOmcgOimgeWwhuatpOWAvOiuvue9ruS4ujJcblx0XHR2aXJ0dWFsTGlzdENvbDoge1xuXHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdGRlZmF1bHQ6IHUuZ2MoJ3ZpcnR1YWxMaXN0Q29sJywgMSlcblx0XHR9LFxuXHRcdC8v6Jma5ouf5YiX6KGoc2Nyb2xs5Y+W5qC35bin546H77yM6buY6K6k5Li6ODDvvIzov4fkvY7lrrnmmJPlh7rnjrDnmb3lsY/pl67popjvvIzov4fpq5jlrrnmmJPlh7rnjrDljaHpob/pl67pophcblx0XHR2aXJ0dWFsU2Nyb2xsRnBzOiB7XG5cdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0ZGVmYXVsdDogdS5nYygndmlydHVhbFNjcm9sbEZwcycsIDgwKVxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZpcnR1YWxMaXN0S2V5OiB1LmdldEluc3RhbmNlSWQoKSxcblx0XHRcdHZpcnR1YWxQYWdlSGVpZ2h0OiAwLFxuXHRcdFx0dmlydHVhbENlbGxIZWlnaHQ6IDAsXG5cdFx0XHR2aXJ0dWFsU2Nyb2xsVGltZVN0YW1wOiAwLFxuXHRcdFx0XG5cdFx0XHR2aXJ0dWFsTGlzdDogW10sXG5cdFx0XHR2aXJ0dWFsUGxhY2Vob2xkZXJUb3BIZWlnaHQ6IDAsXG5cdFx0XHR2aXJ0dWFsUGxhY2Vob2xkZXJCb3R0b21IZWlnaHQ6IDAsXG5cdFx0XHR2aXJ0dWFsVG9wUmFuZ2VJbmRleDogMCxcblx0XHRcdHZpcnR1YWxCb3R0b21SYW5nZUluZGV4OiAwLFxuXHRcdFx0bGFzdFZpcnR1YWxUb3BSYW5nZUluZGV4OiAwLFxuXHRcdFx0bGFzdFZpcnR1YWxCb3R0b21SYW5nZUluZGV4OiAwLFxuXHRcdFx0XG5cdFx0XHR2aXJ0dWFsSGVpZ2h0Q2FjaGVMaXN0OiBbXSxcblx0XHRcdFxuXHRcdFx0Z2V0Q2VsbEhlaWdodFJldHJ5Q291bnQ6IHtcblx0XHRcdFx0Zml4ZWQ6IDAsXG5cdFx0XHRcdGR5bmFtaWM6IDBcblx0XHRcdH0sXG5cdFx0XHRwYWdpbmdPcmdUb3A6IC0xLFxuXHRcdFx0dXBkYXRlVmlydHVhbExpc3RGcm9tRGF0YUNoYW5nZTogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdHdhdGNoOiB7XG5cdFx0cmVhbFRvdGFsRGF0YShuZXdWYWwpIHtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cdFx0fSxcblx0XHR2aXJ0dWFsTGlzdChuZXdWYWwpe1xuXHRcdFx0dGhpcy4kZW1pdCgndXBkYXRlOnZpcnR1YWxMaXN0JywgbmV3VmFsKTtcblx0XHRcdHRoaXMuJGVtaXQoJ3ZpcnR1YWxMaXN0Q2hhbmdlJywgbmV3VmFsKTtcblx0XHR9XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0ZmluYWxVc2VWaXJ0dWFsTGlzdCgpIHtcblx0XHRcdGlmICh0aGlzLnVzZVZpcnR1YWxMaXN0ICYmIHRoaXMudXNlUGFnZVNjcm9sbCl7XG5cdFx0XHRcdHUuY29uc29sZUVycign5L2/55So6aG16Z2i5rua5Yqo5pe277yM5byA5ZCv6Jma5ouf5YiX6KGo5peg5pWI77yBJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy51c2VWaXJ0dWFsTGlzdCAmJiAhdGhpcy51c2VQYWdlU2Nyb2xsO1xuXHRcdH0sXG5cdFx0ZmluYWxVc2VJbm5lckxpc3QoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy51c2VJbm5lckxpc3QgfHwgKHRoaXMuZmluYWxVc2VWaXJ0dWFsTGlzdCAmJiAhdGhpcy5mb3JjZUNsb3NlSW5uZXJMaXN0KTtcblx0XHR9LFxuXHRcdGZpbmFsQ2VsbEtleU5hbWUoKSB7XG5cblx0XHRcdGlmICh0aGlzLmZpbmFsVXNlVmlydHVhbExpc3QgJiYgIXRoaXMuY2VsbEtleU5hbWUubGVuZ3RoKXtcblx0XHRcdFx0dS5jb25zb2xlRXJyKCflnKhudnVl5Lit5byA5ZCvdXNlLXZpcnR1YWwtbGlzdOW/hemhu+iuvue9rmNlbGwta2V5LW5hbWXvvIzlkKbliJnlsIblj6/og73lr7zoh7TliJfooajmuLLmn5PplJnor6/vvIEnKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuY2VsbEtleU5hbWU7XG5cdFx0fSxcblx0XHRmaW5hbFZpcnR1YWxQYWdlSGVpZ2h0KCl7XG5cdFx0XHRyZXR1cm4gdGhpcy52aXJ0dWFsUGFnZUhlaWdodCA+IDAgPyB0aGlzLnZpcnR1YWxQYWdlSGVpZ2h0IDogdGhpcy53aW5kb3dIZWlnaHQ7XG5cdFx0fSxcblx0XHR2aXJ0dWFsUmFuZ2VQYWdlSGVpZ2h0KCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5maW5hbFZpcnR1YWxQYWdlSGVpZ2h0ICogdGhpcy5wcmVsb2FkUGFnZTtcblx0XHR9LFxuXHRcdHZpcnR1YWxTY3JvbGxEaXNUaW1lU3RhbXAoKSB7XG5cdFx0XHRyZXR1cm4gMTAwMCAvIHRoaXMudmlydHVhbFNjcm9sbEZwcztcblx0XHR9LFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Ly/lnKjkvb/nlKjliqjmgIHpq5jluqbomZrmi5/liJfooajml7bvvIzmiYvliqjmm7TmlrDmjIflrppjZWxs55qE57yT5a2Y6auY5bqmKOW9k2NlbGzpq5jluqblnKjliJ3lp4vljJbkuYvlkI7lho3mrKHmlLnlj5jml7bosIPnlKgp77yMaW5kZXjku6PooajpnIDopoHmm7TmlrDnmoRjZWxs5Zyo5YiX6KGo5Lit55qE5L2N572u77yM5LuOMOW8gOWni1xuXHRcdGRpZFVwZGF0ZVZpcnR1YWxMaXN0Q2VsbChpbmRleCkge1xuXHRcdFx0aWYgKHRoaXMuY2VsbEhlaWdodE1vZGUgIT09IEVudW0uQ2VsbEhlaWdodE1vZGUuRHluYW1pYykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY3VycmVudE5vZGUgPSB0aGlzLnZpcnR1YWxIZWlnaHRDYWNoZUxpc3RbaW5kZXhdO1xuXHRcdFx0dGhpcy5fZ2V0Tm9kZUNsaWVudFJlY3QoYCN6cC1pZC0ke2luZGV4fWAsIHRoaXMuZmluYWxVc2VJbm5lckxpc3QpLnRoZW4oY2VsbE5vZGUgPT4ge1xuXHRcdFx0XHRjb25zdCBjZWxsTm9kZUhlaWdodCA9IGNlbGxOb2RlID8gY2VsbE5vZGVbMF0uaGVpZ2h0IDogMDtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGhlaWdodERpcyA9IGNlbGxOb2RlSGVpZ2h0IC0gY3VycmVudE5vZGUuaGVpZ2h0O1xuXHRcdFx0XHRjdXJyZW50Tm9kZS5oZWlnaHQgPSBjZWxsTm9kZUhlaWdodDtcblx0XHRcdFx0Y3VycmVudE5vZGUudG90YWxIZWlnaHQgPSBjdXJyZW50Tm9kZS5sYXN0SGVpZ2h0ICsgY2VsbE5vZGVIZWlnaHQ7XG5cdFx0XHRcdFxuXHRcdFx0XHRmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgdGhpcy52aXJ0dWFsSGVpZ2h0Q2FjaGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGhpc05vZGUgPSB0aGlzLnZpcnR1YWxIZWlnaHRDYWNoZUxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKGkgPT09IGluZGV4ICsgMSkge1xuXHRcdFx0XHRcdFx0dGhpc05vZGUubGFzdEhlaWdodCA9IGNlbGxOb2RlSGVpZ2h0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzTm9kZS50b3RhbEhlaWdodCArPSBoZWlnaHREaXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0Ly/lnKjkvb/nlKjliqjmgIHpq5jluqbomZrmi5/liJfooajml7bvvIzoi6XliKDpmaTkuobliJfooajmlbDnu4TkuK3nmoTmn5DkuKppdGVt77yM6ZyA6KaB6LCD55So5q2k5pa55rOV5Lul5pu05paw6auY5bqm57yT5a2Y5pWw57uE77yMaW5kZXjku6PooajpnIDopoHmm7TmlrDnmoRjZWxs5Zyo5YiX6KGo5Lit55qE5L2N572u77yM5LuOMOW8gOWni1xuXHRcdGRpZERlbGV0ZVZpcnR1YWxMaXN0Q2VsbChpbmRleCkge1xuXHRcdFx0aWYgKHRoaXMuY2VsbEhlaWdodE1vZGUgIT09IEVudW0uQ2VsbEhlaWdodE1vZGUuRHluYW1pYykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY3VycmVudE5vZGUgPSB0aGlzLnZpcnR1YWxIZWlnaHRDYWNoZUxpc3RbaW5kZXhdO1xuXHRcdFx0Zm9yIChsZXQgaSA9IGluZGV4ICsgMTsgaSA8IHRoaXMudmlydHVhbEhlaWdodENhY2hlTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCB0aGlzTm9kZSA9IHRoaXMudmlydHVhbEhlaWdodENhY2hlTGlzdFtpXTtcblx0XHRcdFx0aWYgKGkgPT09IGluZGV4ICsgMSkge1xuXHRcdFx0XHRcdHRoaXNOb2RlLmxhc3RIZWlnaHQgPSBjdXJyZW50Tm9kZS5sYXN0SGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXNOb2RlLnRvdGFsSGVpZ2h0IC09IGN1cnJlbnROb2RlLmhlaWdodDtcblx0XHRcdH1cblx0XHRcdHRoaXMudmlydHVhbEhlaWdodENhY2hlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH0sXG5cdFx0Ly/liJ3lp4vljJbomZrmi5/liJfooahcblx0XHRfdmlydHVhbExpc3RJbml0KCkge1xuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHR1LmRlbGF5KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLl9nZXROb2RlQ2xpZW50UmVjdCgnLnpwLXNjcm9sbC12aWV3JykudGhlbihub2RlID0+IHtcblx0XHRcdFx0XHRcdGlmIChub2RlKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMucGFnaW5nT3JnVG9wID0gbm9kZVswXS50b3A7XG5cdFx0XHRcdFx0XHRcdHRoaXMudmlydHVhbFBhZ2VIZWlnaHQgPSBub2RlWzBdLmhlaWdodDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly9jZWxsSGVpZ2h0TW9kZeS4umZpeGVk5pe26I635Y+W56ys5LiA5LiqY2VsbOmrmOW6plxuXHRcdF91cGRhdGVGaXhlZENlbGxIZWlnaHQoKSB7XG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdHUuZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuX2dldE5vZGVDbGllbnRSZWN0KGAjenAtaWQtJHswfWAsdGhpcy5maW5hbFVzZUlubmVyTGlzdCkudGhlbihjZWxsTm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIWNlbGxOb2RlKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmdldENlbGxIZWlnaHRSZXRyeUNvdW50LmZpeGVkID4gMTApIHJldHVybjtcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRDZWxsSGVpZ2h0UmV0cnlDb3VudC5maXhlZCArKztcblx0XHRcdFx0XHRcdFx0dGhpcy5fdXBkYXRlRml4ZWRDZWxsSGVpZ2h0KCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZpcnR1YWxDZWxsSGVpZ2h0ID0gY2VsbE5vZGVbMF0uaGVpZ2h0O1xuXHRcdFx0XHRcdFx0XHR0aGlzLl91cGRhdGVWaXJ0dWFsU2Nyb2xsKHRoaXMub2xkU2Nyb2xsVG9wKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgYy5kZWxheVRpbWUsICd1cGRhdGVGaXhlZENlbGxIZWlnaHREZWxheScpO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vY2VsbEhlaWdodE1vZGXkuLpkeW5hbWlj5pe26I635Y+W5q+P5LiqY2VsbOmrmOW6plxuXHRcdF91cGRhdGVEeW5hbWljQ2VsbEhlaWdodChsaXN0KSB7XG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdHUuZGVsYXkoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSBsaXN0W2ldO1xuXHRcdFx0XHRcdFx0Y29uc3QgY2VsbE5vZGUgPSBhd2FpdCB0aGlzLl9nZXROb2RlQ2xpZW50UmVjdChgI3pwLWlkLSR7aXRlbVtjLmxpc3RDZWxsSW5kZXhLZXldfWAsIHRoaXMuZmluYWxVc2VJbm5lckxpc3QpO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudEhlaWdodCA9IGNlbGxOb2RlID8gY2VsbE5vZGVbMF0uaGVpZ2h0IDogMDtcblx0XHRcdFx0XHRcdGlmICghY2VsbE5vZGUpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy52aXJ0dWFsSGVpZ2h0Q2FjaGVMaXN0ID0gdGhpcy52aXJ0dWFsSGVpZ2h0Q2FjaGVMaXN0LnNsaWNlKC1pKTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZ2V0Q2VsbEhlaWdodFJldHJ5Q291bnQuZHluYW1pYyA+IDEwKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0Q2VsbEhlaWdodFJldHJ5Q291bnQuZHluYW1pYyArKztcblx0XHRcdFx0XHRcdFx0dGhpcy5fdXBkYXRlRHluYW1pY0NlbGxIZWlnaHQobGlzdCk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc3QgbGFzdEhlaWdodENhY2hlID0gdGhpcy52aXJ0dWFsSGVpZ2h0Q2FjaGVMaXN0Lmxlbmd0aCA/IHRoaXMudmlydHVhbEhlaWdodENhY2hlTGlzdC5zbGljZSgtMSlbMF0gOiBudWxsO1xuXHRcdFx0XHRcdFx0Y29uc3QgbGFzdEhlaWdodCA9IGxhc3RIZWlnaHRDYWNoZSA/IGxhc3RIZWlnaHRDYWNoZS50b3RhbEhlaWdodCA6IDA7XG5cdFx0XHRcdFx0XHR0aGlzLnZpcnR1YWxIZWlnaHRDYWNoZUxpc3QucHVzaCh7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogY3VycmVudEhlaWdodCxcblx0XHRcdFx0XHRcdFx0bGFzdEhlaWdodCxcblx0XHRcdFx0XHRcdFx0dG90YWxIZWlnaHQ6IGxhc3RIZWlnaHQgKyBjdXJyZW50SGVpZ2h0XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fdXBkYXRlVmlydHVhbFNjcm9sbCh0aGlzLm9sZFNjcm9sbFRvcCk7XG5cdFx0XHRcdH0sIGMuZGVsYXlUaW1lLCAndXBkYXRlRHluYW1pY0NlbGxIZWlnaHREZWxheScpXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly/orr7nva5jZWxsSXRlbeeahGluZGV4XG5cdFx0X3NldENlbGxJbmRleChsaXN0LCBpc0ZpcnN0UGFnZSkge1xuXHRcdFx0bGV0IGxhc3RJdGVtSW5kZXggPSAwO1xuXHRcdFx0aWYgKCFpc0ZpcnN0UGFnZSkge1xuXHRcdFx0XHRsYXN0SXRlbUluZGV4ID0gdGhpcy5yZWFsVG90YWxEYXRhLmxlbmd0aDtcblx0XHRcdFx0Y29uc3QgbGFzdEl0ZW0gPSB0aGlzLnJlYWxUb3RhbERhdGEubGVuZ3RoID8gdGhpcy5yZWFsVG90YWxEYXRhLnNsaWNlKC0xKVswXSA6IG51bGw7XG5cdFx0XHRcdGlmIChsYXN0SXRlbSAmJiBsYXN0SXRlbVtjLmxpc3RDZWxsSW5kZXhLZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRsYXN0SXRlbUluZGV4ID0gbGFzdEl0ZW1bYy5saXN0Q2VsbEluZGV4S2V5XSArIDE7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XHRcdFx0XG5cdFx0XHRcdHRoaXMuX3Jlc2V0RHluYW1pY0xpc3RTdGF0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBpdGVtID0gbGlzdFtpXTtcblx0XHRcdFx0aWYgKCFpdGVtIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRcdFx0XHRpdGVtID0geyBpdGVtIH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbVtjLmxpc3RDZWxsSW5kZXhLZXldID0gbGFzdEl0ZW1JbmRleCArIGk7XG5cdFx0XHRcdGl0ZW1bYy5saXN0Q2VsbEluZGV4VW5pcXVlS2V5XSA9IGAke3RoaXMudmlydHVhbExpc3RLZXl9LSR7aXRlbVtjLmxpc3RDZWxsSW5kZXhLZXldfWA7XG5cdFx0XHRcdGxpc3RbaV0gPSBpdGVtO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5nZXRDZWxsSGVpZ2h0UmV0cnlDb3VudC5keW5hbWljID0gMDtcblx0XHRcdHRoaXMuY2VsbEhlaWdodE1vZGUgPT09IEVudW0uQ2VsbEhlaWdodE1vZGUuRHluYW1pYyAmJiB0aGlzLl91cGRhdGVEeW5hbWljQ2VsbEhlaWdodChsaXN0KTtcblx0XHR9LFxuXHRcdC8v5pu05pawc2Nyb2xs5rua5YqoXG5cdFx0X3VwZGF0ZVZpcnR1YWxTY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxEaWZmID0gMCkge1xuXHRcdFx0Y29uc3QgY3VycmVudFRpbWVTdGFtcCA9IHUuZ2V0VGltZSgpO1xuXHRcdFx0c2Nyb2xsVG9wID09PSAwICYmIHRoaXMuX3Jlc2V0VG9wUmFuZ2UoKTtcblx0XHRcdGlmIChzY3JvbGxUb3AgIT09IDAgJiYgdGhpcy52aXJ0dWFsU2Nyb2xsVGltZVN0YW1wICYmIGN1cnJlbnRUaW1lU3RhbXAgLSB0aGlzLnZpcnR1YWxTY3JvbGxUaW1lU3RhbXAgPD0gdGhpcy52aXJ0dWFsU2Nyb2xsRGlzVGltZVN0YW1wKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMudmlydHVhbFNjcm9sbFRpbWVTdGFtcCA9IGN1cnJlbnRUaW1lU3RhbXA7XG5cdFx0XHRcblx0XHRcdGxldCBzY3JvbGxJbmRleCA9IDA7XG5cdFx0XHRjb25zdCBjZWxsSGVpZ2h0TW9kZSA9IHRoaXMuY2VsbEhlaWdodE1vZGU7XG5cdFx0XHRpZiAoY2VsbEhlaWdodE1vZGUgPT09IEVudW0uQ2VsbEhlaWdodE1vZGUuRml4ZWQpIHtcblx0XHRcdFx0c2Nyb2xsSW5kZXggPSBwYXJzZUludChzY3JvbGxUb3AgLyB0aGlzLnZpcnR1YWxDZWxsSGVpZ2h0KSB8fCAwO1xuXHRcdFx0XHR0aGlzLl91cGRhdGVGaXhlZFRvcFJhbmdlSW5kZXgoc2Nyb2xsSW5kZXgpO1xuXHRcdFx0XHR0aGlzLl91cGRhdGVGaXhlZEJvdHRvbVJhbmdlSW5kZXgoc2Nyb2xsSW5kZXgpO1xuXHRcdFx0fSBlbHNlIGlmKGNlbGxIZWlnaHRNb2RlID09PSBFbnVtLkNlbGxIZWlnaHRNb2RlLkR5bmFtaWMpIHtcblx0XHRcdFx0Y29uc3Qgc2Nyb2xsRGlyZWN0aW9uID0gc2Nyb2xsRGlmZiA+IDAgPyAndG9wJyA6ICdib3R0b20nO1xuXHRcdFx0XHRjb25zdCByYW5nZVBhZ2VIZWlnaHQgPSB0aGlzLnZpcnR1YWxSYW5nZVBhZ2VIZWlnaHQ7XG5cdFx0XHRcdGNvbnN0IHRvcFJhbmdlUGFnZU9mZnNldCA9IHNjcm9sbFRvcCAtIHJhbmdlUGFnZUhlaWdodDtcblx0XHRcdFx0Y29uc3QgYm90dG9tUmFuZ2VQYWdlT2Zmc2V0ID0gc2Nyb2xsVG9wICsgdGhpcy5maW5hbFZpcnR1YWxQYWdlSGVpZ2h0ICsgcmFuZ2VQYWdlSGVpZ2h0O1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHZpcnR1YWxCb3R0b21SYW5nZUluZGV4ID0gMDtcblx0XHRcdFx0bGV0IHZpcnR1YWxQbGFjZWhvbGRlckJvdHRvbUhlaWdodCA9IDA7XG5cdFx0XHRcdGxldCByZWFjaGVkTGltaXRCb3R0b20gPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgaGVpZ2h0Q2FjaGVMaXN0ID0gdGhpcy52aXJ0dWFsSGVpZ2h0Q2FjaGVMaXN0O1xuXHRcdFx0XHRjb25zdCBsYXN0SGVpZ2h0Q2FjaGUgPSAhIWhlaWdodENhY2hlTGlzdCA/IGhlaWdodENhY2hlTGlzdC5zbGljZSgtMSlbMF0gOiBudWxsO1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHN0YXJ0VG9wUmFuZ2VJbmRleCA9IHRoaXMudmlydHVhbFRvcFJhbmdlSW5kZXg7XG5cdFx0XHRcdGlmIChzY3JvbGxEaXJlY3Rpb24gPT09ICdib3R0b20nKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IHN0YXJ0VG9wUmFuZ2VJbmRleDsgaSA8IGhlaWdodENhY2hlTGlzdC5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdFx0XHRjb25zdCBoZWlnaHRDYWNoZUl0ZW0gPSBoZWlnaHRDYWNoZUxpc3RbaV07XG5cdFx0XHRcdFx0XHRpZiAoaGVpZ2h0Q2FjaGVJdGVtICYmIGhlaWdodENhY2hlSXRlbS50b3RhbEhlaWdodCA+IHRvcFJhbmdlUGFnZU9mZnNldCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZpcnR1YWxUb3BSYW5nZUluZGV4ID0gaTtcblx0XHRcdFx0XHRcdFx0dGhpcy52aXJ0dWFsUGxhY2Vob2xkZXJUb3BIZWlnaHQgPSBoZWlnaHRDYWNoZUl0ZW0ubGFzdEhlaWdodDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCB0b3BSYW5nZU1hdGNoZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gc3RhcnRUb3BSYW5nZUluZGV4OyBpID49IDA7IGktLSl7XG5cdFx0XHRcdFx0XHRjb25zdCBoZWlnaHRDYWNoZUl0ZW0gPSBoZWlnaHRDYWNoZUxpc3RbaV07XG5cdFx0XHRcdFx0XHRpZiAoaGVpZ2h0Q2FjaGVJdGVtICYmIGhlaWdodENhY2hlSXRlbS50b3RhbEhlaWdodCA8IHRvcFJhbmdlUGFnZU9mZnNldCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZpcnR1YWxUb3BSYW5nZUluZGV4ID0gaTtcblx0XHRcdFx0XHRcdFx0dGhpcy52aXJ0dWFsUGxhY2Vob2xkZXJUb3BIZWlnaHQgPSBoZWlnaHRDYWNoZUl0ZW0ubGFzdEhlaWdodDtcblx0XHRcdFx0XHRcdFx0dG9wUmFuZ2VNYXRjaGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCF0b3BSYW5nZU1hdGNoZWQgJiYgdGhpcy5fcmVzZXRUb3BSYW5nZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAobGV0IGkgPSB0aGlzLnZpcnR1YWxUb3BSYW5nZUluZGV4OyBpIDwgaGVpZ2h0Q2FjaGVMaXN0Lmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRjb25zdCBoZWlnaHRDYWNoZUl0ZW0gPSBoZWlnaHRDYWNoZUxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKGhlaWdodENhY2hlSXRlbSAmJiBoZWlnaHRDYWNoZUl0ZW0udG90YWxIZWlnaHQgPiBib3R0b21SYW5nZVBhZ2VPZmZzZXQpIHtcblx0XHRcdFx0XHRcdHZpcnR1YWxCb3R0b21SYW5nZUluZGV4ID0gaTtcblx0XHRcdFx0XHRcdHZpcnR1YWxQbGFjZWhvbGRlckJvdHRvbUhlaWdodCA9IGxhc3RIZWlnaHRDYWNoZS50b3RhbEhlaWdodCAtIGhlaWdodENhY2hlSXRlbS50b3RhbEhlaWdodDtcblx0XHRcdFx0XHRcdHJlYWNoZWRMaW1pdEJvdHRvbSA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFyZWFjaGVkTGltaXRCb3R0b20gfHwgdGhpcy52aXJ0dWFsQm90dG9tUmFuZ2VJbmRleCA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMudmlydHVhbEJvdHRvbVJhbmdlSW5kZXggPSB0aGlzLnJlYWxUb3RhbERhdGEubGVuZ3RoID8gdGhpcy5yZWFsVG90YWxEYXRhLmxlbmd0aCAtIDEgOiB0aGlzLnBhZ2VTaXplO1xuXHRcdFx0XHRcdHRoaXMudmlydHVhbFBsYWNlaG9sZGVyQm90dG9tSGVpZ2h0ID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnZpcnR1YWxCb3R0b21SYW5nZUluZGV4ID0gdmlydHVhbEJvdHRvbVJhbmdlSW5kZXg7XG5cdFx0XHRcdFx0dGhpcy52aXJ0dWFsUGxhY2Vob2xkZXJCb3R0b21IZWlnaHQgPSB2aXJ0dWFsUGxhY2Vob2xkZXJCb3R0b21IZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fdXBkYXRlVmlydHVhbExpc3QoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8v5pu05pawZml4ZWRDZWxs5qih5byP5LiLdG9wUmFuZ2VJbmRleCZwbGFjZWhvbGRlclRvcEhlaWdodFxuXHRcdF91cGRhdGVGaXhlZFRvcFJhbmdlSW5kZXgoc2Nyb2xsSW5kZXgpIHtcblx0XHRcdGxldCB2aXJ0dWFsVG9wUmFuZ2VJbmRleCA9IHRoaXMudmlydHVhbENlbGxIZWlnaHQgPT09IDAgPyAwIDogc2Nyb2xsSW5kZXggLSBwYXJzZUludCh0aGlzLmZpbmFsVmlydHVhbFBhZ2VIZWlnaHQgLyB0aGlzLnZpcnR1YWxDZWxsSGVpZ2h0KSAqIHRoaXMucHJlbG9hZFBhZ2U7XG5cdFx0XHR2aXJ0dWFsVG9wUmFuZ2VJbmRleCAqPSB0aGlzLnZpcnR1YWxMaXN0Q29sO1xuXHRcdFx0dmlydHVhbFRvcFJhbmdlSW5kZXggPSBNYXRoLm1heCgwLCB2aXJ0dWFsVG9wUmFuZ2VJbmRleCk7XG5cdFx0XHR0aGlzLnZpcnR1YWxUb3BSYW5nZUluZGV4ID0gdmlydHVhbFRvcFJhbmdlSW5kZXg7XG5cdFx0XHR0aGlzLnZpcnR1YWxQbGFjZWhvbGRlclRvcEhlaWdodCA9ICh2aXJ0dWFsVG9wUmFuZ2VJbmRleCAvIHRoaXMudmlydHVhbExpc3RDb2wpICogdGhpcy52aXJ0dWFsQ2VsbEhlaWdodDtcblx0XHR9LFxuXHRcdC8v5pu05pawZml4ZWRDZWxs5qih5byP5LiLYm90dG9tUmFuZ2VJbmRleCZwbGFjZWhvbGRlckJvdHRvbUhlaWdodFxuXHRcdF91cGRhdGVGaXhlZEJvdHRvbVJhbmdlSW5kZXgoc2Nyb2xsSW5kZXgpIHtcblx0XHRcdGxldCB2aXJ0dWFsQm90dG9tUmFuZ2VJbmRleCA9IHRoaXMudmlydHVhbENlbGxIZWlnaHQgPT09IDAgPyB0aGlzLnBhZ2VTaXplIDogc2Nyb2xsSW5kZXggKyBwYXJzZUludCh0aGlzLmZpbmFsVmlydHVhbFBhZ2VIZWlnaHQgLyB0aGlzLnZpcnR1YWxDZWxsSGVpZ2h0KSAqICh0aGlzLnByZWxvYWRQYWdlICsgMSk7XG5cdFx0XHR2aXJ0dWFsQm90dG9tUmFuZ2VJbmRleCAqPSB0aGlzLnZpcnR1YWxMaXN0Q29sO1xuXHRcdFx0dmlydHVhbEJvdHRvbVJhbmdlSW5kZXggPSBNYXRoLm1pbih0aGlzLnJlYWxUb3RhbERhdGEubGVuZ3RoLCB2aXJ0dWFsQm90dG9tUmFuZ2VJbmRleCk7XG5cdFx0XHR0aGlzLnZpcnR1YWxCb3R0b21SYW5nZUluZGV4ID0gdmlydHVhbEJvdHRvbVJhbmdlSW5kZXg7XG5cdFx0XHR0aGlzLnZpcnR1YWxQbGFjZWhvbGRlckJvdHRvbUhlaWdodCA9ICh0aGlzLnJlYWxUb3RhbERhdGEubGVuZ3RoIC0gdmlydHVhbEJvdHRvbVJhbmdlSW5kZXgpICogdGhpcy52aXJ0dWFsQ2VsbEhlaWdodCAvIHRoaXMudmlydHVhbExpc3RDb2w7XG5cdFx0XHR0aGlzLl91cGRhdGVWaXJ0dWFsTGlzdCgpO1xuXHRcdH0sXG5cdFx0Ly/mm7TmlrB2aXJ0dWFsTGlzdFxuXHRcdF91cGRhdGVWaXJ0dWFsTGlzdCgpIHtcblx0XHRcdGNvbnN0IHNob3VsZFVwZGF0ZUxpc3QgPSB0aGlzLnVwZGF0ZVZpcnR1YWxMaXN0RnJvbURhdGFDaGFuZ2UgfHwgKHRoaXMubGFzdFZpcnR1YWxUb3BSYW5nZUluZGV4ICE9PSB0aGlzLnZpcnR1YWxUb3BSYW5nZUluZGV4IHx8IHRoaXMubGFzdFZpcnR1YWxCb3R0b21SYW5nZUluZGV4ICE9PSB0aGlzLnZpcnR1YWxCb3R0b21SYW5nZUluZGV4KTtcblx0XHRcdGlmIChzaG91bGRVcGRhdGVMaXN0KSB7XG5cdFx0XHRcdHRoaXMudXBkYXRlVmlydHVhbExpc3RGcm9tRGF0YUNoYW5nZSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmxhc3RWaXJ0dWFsVG9wUmFuZ2VJbmRleCA9ICB0aGlzLnZpcnR1YWxUb3BSYW5nZUluZGV4O1xuXHRcdFx0XHR0aGlzLmxhc3RWaXJ0dWFsQm90dG9tUmFuZ2VJbmRleCA9IHRoaXMudmlydHVhbEJvdHRvbVJhbmdlSW5kZXg7XG5cdFx0XHRcdHRoaXMudmlydHVhbExpc3QgPSB0aGlzLnJlYWxUb3RhbERhdGEuc2xpY2UodGhpcy52aXJ0dWFsVG9wUmFuZ2VJbmRleCwgdGhpcy52aXJ0dWFsQm90dG9tUmFuZ2VJbmRleCArIDEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/ph43nva7liqjmgIFjZWxs5qih5byP5LiL55qE6auY5bqm57yT5a2Y5pWw5o2u44CB6Jma5ouf5YiX6KGo5ZKM5rua5Yqo54q25oCBXG5cdFx0X3Jlc2V0RHluYW1pY0xpc3RTdGF0ZShyZXNldFZpcnR1YWxMaXN0ID0gZmFsc2UpIHtcblx0XHRcdHRoaXMudmlydHVhbEhlaWdodENhY2hlTGlzdCA9IFtdO1xuXHRcdFx0aWYgKHJlc2V0VmlydHVhbExpc3QpIHtcblx0XHRcdFx0dGhpcy52aXJ0dWFsTGlzdCA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy52aXJ0dWFsVG9wUmFuZ2VJbmRleCA9IDA7XG5cdFx0XHR0aGlzLnZpcnR1YWxQbGFjZWhvbGRlclRvcEhlaWdodCA9IDA7XG5cdFx0fSxcblx0XHQvL+mHjee9rnRvcFJhbmdlSW5kZXjlkoxwbGFjZWhvbGRlclRvcEhlaWdodFxuXHRcdF9yZXNldFRvcFJhbmdlKCkge1xuXHRcdFx0dGhpcy52aXJ0dWFsVG9wUmFuZ2VJbmRleCA9IDA7XG5cdFx0XHR0aGlzLnZpcnR1YWxQbGFjZWhvbGRlclRvcEhlaWdodCA9IDA7XG5cdFx0XHR0aGlzLl91cGRhdGVWaXJ0dWFsTGlzdCgpO1xuXHRcdH0sXG5cdFx0Ly/mo4DmtYvomZrmi5/liJfooajlvZPliY3mu5rliqjkvY3nva7vvIzlpoLlj5HnjrDmu5rliqjkvY3nva7kuI3mraPnoa7liJnph43mlrDorqHnrpfomZrmi5/liJfooajnm7jlhbPlj4LmlbAo5Li66Kej5Yaz5ZyoQXBw5Lit5Y+v6IO95Ye6546w55qE6ZW/5pe26Ze06L+b5YWl5ZCO5Y+w5ZCO5omT5byAQXBw55m95bGP55qE6Zeu6aKYKVxuXHRcdF9jaGVja1ZpcnR1YWxMaXN0U2Nyb2xsKCkge1xuXHRcdFx0aWYgKHRoaXMuZmluYWxVc2VWaXJ0dWFsTGlzdCkge1xuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fZ2V0Tm9kZUNsaWVudFJlY3QoJy56cC1wYWdpbmctdG91Y2gtdmlldycpLnRoZW4obm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50VG9wID0gbm9kZSA/IG5vZGVbMF0udG9wIDogMDtcblx0XHRcdFx0XHRcdGlmICghbm9kZSB8fCAoY3VycmVudFRvcCA9PT0gdGhpcy5wYWdpbmdPcmdUb3AgJiYgdGhpcy52aXJ0dWFsUGxhY2Vob2xkZXJUb3BIZWlnaHQgIT09IDApKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3VwZGF0ZVZpcnR1YWxTY3JvbGwoMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+WkhOeQhuS9v+eUqOWGhee9ruWIl+ihqOaXtueCueWHu+S6hmNlbGzkuovku7Zcblx0XHRfaW5uZXJDZWxsQ2xpY2soaXRlbSwgaW5kZXgpIHtcblx0XHRcdHRoaXMuJGVtaXQoJ2lubmVyQ2VsbENsaWNrJywgaXRlbSwgaW5kZXgpO1xuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///95\n");

/***/ }),
/* 96 */
/*!********************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/z-paging.vue?vue&type=style&index=0&id=0f887f1e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_vue_vue_type_style_index_0_id_0f887f1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-paging.vue?vue&type=style&index=0&id=0f887f1e&scoped=true&lang=css& */ 97);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_vue_vue_type_style_index_0_id_0f887f1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_vue_vue_type_style_index_0_id_0f887f1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_vue_vue_type_style_index_0_id_0f887f1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_vue_vue_type_style_index_0_id_0f887f1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_paging_vue_vue_type_style_index_0_id_0f887f1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 97 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/uni_modules/z-paging/components/z-paging/z-paging.vue?vue&type=style&index=0&id=0f887f1e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".z-paging-content": {
    "": {
      "position": [
        "relative",
        0,
        0,
        1
      ],
      "flexDirection": [
        "column",
        0,
        0,
        1
      ]
    }
  },
  ".z-paging-content-fixed": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        2
      ],
      "top": [
        0,
        0,
        0,
        2
      ],
      "left": [
        0,
        0,
        0,
        2
      ],
      "bottom": [
        0,
        0,
        0,
        2
      ],
      "right": [
        0,
        0,
        0,
        2
      ]
    }
  },
  ".zp-loading-fixed": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        2
      ],
      "top": [
        0,
        0,
        0,
        2
      ],
      "left": [
        0,
        0,
        0,
        2
      ],
      "bottom": [
        0,
        0,
        0,
        2
      ],
      "right": [
        0,
        0,
        0,
        2
      ],
      "zIndex": [
        9999,
        0,
        0,
        25
      ]
    }
  },
  ".zp-page-top": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        3
      ],
      "left": [
        0,
        0,
        0,
        3
      ],
      "right": [
        0,
        0,
        0,
        3
      ],
      "zIndex": [
        999,
        0,
        0,
        3
      ]
    }
  },
  ".zp-page-bottom": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        3
      ],
      "left": [
        0,
        0,
        0,
        3
      ],
      "right": [
        0,
        0,
        0,
        3
      ],
      "zIndex": [
        999,
        0,
        0,
        3
      ]
    }
  },
  ".zp-scroll-view-super": {
    "": {
      "flex": [
        1,
        0,
        0,
        5
      ],
      "position": [
        "relative",
        0,
        0,
        5
      ]
    }
  },
  ".zp-view-super": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        6
      ]
    }
  },
  ".zp-custom-refresher-container": {
    "": {
      "overflow": [
        "hidden",
        0,
        0,
        7
      ],
      "flexDirection": [
        "row",
        0,
        0,
        18
      ],
      "justifyContent": [
        "center",
        0,
        0,
        18
      ],
      "alignItems": [
        "center",
        0,
        0,
        18
      ]
    }
  },
  ".zp-scroll-view-container": {
    "": {
      "position": [
        "relative",
        0,
        0,
        8
      ]
    }
  },
  ".zp-scroll-view": {
    "": {
      "position": [
        "relative",
        0,
        0,
        8
      ]
    }
  },
  ".zp-right": {
    "": {
      "right": [
        0,
        0,
        0,
        10
      ]
    }
  },
  ".zp-scroll-view-absolute": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        11
      ],
      "top": [
        0,
        0,
        0,
        11
      ],
      "left": [
        0,
        0,
        0,
        11
      ]
    }
  },
  ".zp-paging-touch-view": {
    "": {
      "width": [
        100,
        0,
        0,
        12
      ],
      "height": [
        100,
        0,
        0,
        12
      ],
      "position": [
        "relative",
        0,
        0,
        12
      ]
    }
  },
  ".zp-fixed-bac-view": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        13
      ],
      "width": [
        100,
        0,
        0,
        13
      ],
      "top": [
        0,
        0,
        0,
        13
      ],
      "left": [
        0,
        0,
        0,
        13
      ],
      "height": [
        "200",
        0,
        0,
        13
      ]
    }
  },
  ".zp-paging-main": {
    "": {
      "height": [
        100,
        0,
        0,
        14
      ],
      "flexDirection": [
        "column",
        0,
        0,
        14
      ]
    }
  },
  ".zp-paging-container": {
    "": {
      "flex": [
        1,
        0,
        0,
        15
      ],
      "position": [
        "relative",
        0,
        0,
        15
      ],
      "flexDirection": [
        "column",
        0,
        0,
        15
      ]
    }
  },
  ".zp-chat-record-loading-container": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ],
      "justifyContent": [
        "center",
        0,
        0,
        16
      ],
      "height": [
        "60rpx",
        0,
        0,
        16
      ],
      "fontSize": [
        "26rpx",
        0,
        0,
        16
      ]
    }
  },
  ".zp-chat-record-loading-custom-image": {
    "": {
      "width": [
        "35rpx",
        0,
        0,
        17
      ],
      "height": [
        "35rpx",
        0,
        0,
        17
      ]
    }
  },
  ".zp-back-to-top": {
    "": {
      "width": [
        "76rpx",
        0,
        0,
        19
      ],
      "height": [
        "76rpx",
        0,
        0,
        19
      ],
      "zIndex": [
        999,
        0,
        0,
        19
      ],
      "position": [
        "absolute",
        0,
        0,
        19
      ],
      "bottom": [
        "0rpx",
        0,
        0,
        19
      ],
      "right": [
        "25rpx",
        0,
        0,
        19
      ],
      "transitionDuration": [
        300,
        0,
        0,
        19
      ],
      "transitionProperty": [
        "opacity",
        0,
        0,
        19
      ]
    }
  },
  ".zp-back-to-top-show": {
    "": {
      "opacity": [
        1,
        0,
        0,
        20
      ]
    }
  },
  ".zp-back-to-top-hide": {
    "": {
      "opacity": [
        0,
        0,
        0,
        21
      ]
    }
  },
  ".zp-back-to-top-img": {
    "": {
      "flex": [
        1,
        0,
        0,
        22
      ],
      "zIndex": [
        999,
        0,
        0,
        22
      ]
    }
  },
  ".zp-empty-view": {
    "": {
      "height": [
        100,
        0,
        0,
        23
      ],
      "flex": [
        1,
        0,
        0,
        23
      ]
    }
  },
  ".zp-empty-view-center": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        24
      ],
      "alignItems": [
        "center",
        0,
        0,
        24
      ],
      "justifyContent": [
        "center",
        0,
        0,
        24
      ]
    }
  },
  ".zp-safe-area-inset-bottom": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        26
      ]
    }
  },
  ".zp-n-refresh-container": {
    "": {
      "justifyContent": [
        "center",
        0,
        0,
        27
      ],
      "width": [
        "750rpx",
        0,
        0,
        27
      ]
    }
  },
  ".zp-n-list-container": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        28
      ],
      "flex": [
        1,
        0,
        0,
        28
      ]
    }
  },
  ".zp-line-loading-image": {
    "": {
      "marginRight": [
        "8rpx",
        0,
        0,
        30
      ],
      "width": [
        "28rpx",
        0,
        0,
        30
      ],
      "height": [
        "28rpx",
        0,
        0,
        30
      ],
      "color": [
        "#666666",
        0,
        0,
        30
      ]
    }
  },
  ".zp-loading-image-ios": {
    "": {
      "width": [
        "20",
        0,
        0,
        31
      ],
      "height": [
        "20",
        0,
        0,
        31
      ]
    }
  },
  ".zp-loading-image-android": {
    "": {
      "width": [
        "32rpx",
        0,
        0,
        32
      ],
      "height": [
        "32rpx",
        0,
        0,
        32
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 98 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 99);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSthLENBQWdCLDJkQUFHLEVBQUMiLCJmaWxlIjoiOTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///98\n");

/***/ }),
/* 99 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 43));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 45));\nvar _chatItem2 = _interopRequireDefault(__webpack_require__(/*! @/compoents/chat-item/chat-item.vue */ 100));\nvar _index = __webpack_require__(/*! ./index.js */ 107);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar dom = weex.requireModule('dom');\nvar _default = {\n  components: {\n    chatItem: _chatItem2.default\n  },\n  data: function data() {\n    return {\n      dataList: [],\n      cellStyle: {},\n      pageSumHeight: 0,\n      visibleHeight: 0,\n      isDragging: false,\n      contentY: 0,\n      scrollBoxOpacity: 0,\n      sendBoxStyle: {\n        height: '60px'\n      },\n      loadDataStatus: false,\n      // 数据是否加载完毕(主要用于解决下拉时数据加载完毕后就会执行一次滚动事件，但这个事件我需要屏蔽，因为对我所做的业务造成影响)\n      isDataCompleteLoading: false // 分页数据是否加载完毕\n    };\n  },\n  onReady: function onReady() {\n    var _this = this;\n    uni.getSystemInfo({\n      success: function success(res) {\n        _this.visibleHeight = res.windowHeight - parseInt(_this.sendBoxStyle.height);\n        __f__(\"log\", _this.visibleHeight, \" at pages/index/index.nvue:61\"); // 页面总高度\n      }\n    });\n  },\n\n  computed: {\n    scrollBoxStyle: function scrollBoxStyle() {\n      return {\n        height: this.visibleHeight * (this.visibleHeight / this.pageSumHeight) + 'px',\n        bottom: this.visibleHeight * (this.contentY / this.pageSumHeight) + 'px',\n        opacity: this.scrollBoxOpacity\n      };\n    }\n  },\n  methods: {\n    // 处于滚动状态\n    scrollEVENT: function scrollEVENT(e) {\n      var height = e.contentSize.height,\n        y = e.contentOffset.y;\n      /*\n      \t处于数据加载中时不监听滚动,加载完成数据时才能监听滚动\n      \t因为数据加载完成时updataScorllBoxData函数会触发滚动效果来改变滚动条的样式\n      \t滚动条样式只允许通过updataScorllBoxData函数进行改变\n      */\n      var pageSumHeight = this.pageSumHeight;\n      var c = height - pageSumHeight;\n      if (c < 300 && c !== 0 && !this.isDataCompleteLoading) return;\n      this.isDragging = true;\n      this.scrollBoxOpacity = 1;\n      this.contentY = Math.abs(y);\n      if (pageSumHeight !== height) this.pageSumHeight = height;\n    },\n    cellStyleChange: function cellStyleChange(cellStyle) {\n      this.cellStyle = cellStyle;\n    },\n    updataScorllBoxData: function updataScorllBoxData() {\n      var _this2 = this;\n      this.$nextTick( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var _chatItem, _yield$recentlyItem, scrollChatItem, chatItemIndex;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!_this2.isDragging) {\n                  _context.next = 4;\n                  break;\n                }\n                __f__(\"log\", '不滚动', \" at pages/index/index.nvue:104\");\n                _context.next = 11;\n                break;\n              case 4:\n                // 滚动到最近的chatItem元素附近\n                _chatItem = _this2.$refs.chatItem;\n                _context.next = 7;\n                return (0, _index.recentlyItem)(_chatItem);\n              case 7:\n                _yield$recentlyItem = _context.sent;\n                scrollChatItem = _yield$recentlyItem.scrollChatItem;\n                chatItemIndex = _yield$recentlyItem.chatItemIndex;\n                if (chatItemIndex !== 0) {\n                  dom.scrollToElement(scrollChatItem, {\n                    offset: -10\n                  });\n                }\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      })));\n    },\n    queryList: function queryList(page, pageSize) {\n      var _this3 = this;\n      setTimeout( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _this3.isDragging = false;\n                _this3.loadDataStatus = true;\n                _context2.next = 4;\n                return _this3.$refs.paging.complete([{\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄1',\n                  content: '消息1',\n                  isMe: false\n                }, {\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄2',\n                  content: '消息2',\n                  isMe: true\n                }, {\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄3',\n                  content: '消息3',\n                  isMe: false\n                }, {\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄4',\n                  content: '消息4',\n                  isMe: true\n                }, {\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄4',\n                  content: '消息4',\n                  isMe: true\n                }, {\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄4',\n                  content: '消息4',\n                  isMe: true\n                }, {\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄4',\n                  content: '消息4',\n                  isMe: true\n                }, {\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄4',\n                  content: '消息4',\n                  isMe: true\n                }, {\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄4',\n                  content: '消息4',\n                  isMe: true\n                }, {\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄4',\n                  content: '消息4',\n                  isMe: true\n                }, {\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄4',\n                  content: '消息4',\n                  isMe: true\n                }, {\n                  time: '',\n                  icon: '/static/logo.png',\n                  name: '大雄4',\n                  content: '消息4',\n                  isMe: true\n                }]);\n              case 4:\n                _this3.loadDataStatus = false;\n                _this3.updataScorllBoxData();\n              case 6:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      })), 1000);\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiY2hhdEl0ZW0iLCJkYXRhIiwiZGF0YUxpc3QiLCJjZWxsU3R5bGUiLCJwYWdlU3VtSGVpZ2h0IiwidmlzaWJsZUhlaWdodCIsImlzRHJhZ2dpbmciLCJjb250ZW50WSIsInNjcm9sbEJveE9wYWNpdHkiLCJzZW5kQm94U3R5bGUiLCJoZWlnaHQiLCJsb2FkRGF0YVN0YXR1cyIsImlzRGF0YUNvbXBsZXRlTG9hZGluZyIsIm9uUmVhZHkiLCJ1bmkiLCJzdWNjZXNzIiwiY29tcHV0ZWQiLCJzY3JvbGxCb3hTdHlsZSIsImJvdHRvbSIsIm9wYWNpdHkiLCJtZXRob2RzIiwic2Nyb2xsRVZFTlQiLCJlIiwiY29udGVudFNpemUiLCJ5IiwiY29udGVudE9mZnNldCIsImNlbGxTdHlsZUNoYW5nZSIsInVwZGF0YVNjb3JsbEJveERhdGEiLCJzY3JvbGxDaGF0SXRlbSIsImNoYXRJdGVtSW5kZXgiLCJkb20iLCJvZmZzZXQiLCJxdWVyeUxpc3QiLCJzZXRUaW1lb3V0IiwidGltZSIsImljb24iLCJuYW1lIiwiY29udGVudCIsImlzTWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQStCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQUEsZUFDQTtFQUNBQTtJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7TUFDQTtNQUNBQztNQUFBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUFBO0lBQ0FDO01BQ0FDO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTs7RUFDQUM7SUFDQUM7TUFDQTtRQUNBUDtRQUNBUTtRQUNBQztNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0FDO01BQ0EsSUFFQVgsU0FLQVksRUFOQUMsWUFDQWI7UUFHQWMsSUFFQUYsRUFIQUcsY0FDQUQ7TUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBRTtNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxLQUNBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUNBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBRUE7Z0JBQ0EzQjtnQkFBQTtnQkFBQSxPQUlBO2NBQUE7Z0JBQUE7Z0JBRkE0QjtnQkFDQUM7Z0JBRUE7a0JBQ0FDO29CQUNBQztrQkFDQTtnQkFDQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDQUVBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBQztRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNBO2dCQUNBO2dCQUFBO2dCQUFBLE9BQ0E7a0JBQ0FDO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2tCQUNBQztnQkFDQTtrQkFDQUo7a0JBQ0FDO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2dCQUNBO2tCQUNBSjtrQkFDQUM7a0JBQ0FDO2tCQUNBQztrQkFDQUM7Z0JBQ0E7a0JBQ0FKO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2tCQUNBQztnQkFDQTtrQkFDQUo7a0JBQ0FDO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2dCQUNBO2tCQUNBSjtrQkFDQUM7a0JBQ0FDO2tCQUNBQztrQkFDQUM7Z0JBQ0E7a0JBQ0FKO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2tCQUNBQztnQkFDQTtrQkFDQUo7a0JBQ0FDO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2dCQUNBO2tCQUNBSjtrQkFDQUM7a0JBQ0FDO2tCQUNBQztrQkFDQUM7Z0JBQ0E7a0JBQ0FKO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2tCQUNBQztnQkFDQTtrQkFDQUo7a0JBQ0FDO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2dCQUNBO2tCQUNBSjtrQkFDQUM7a0JBQ0FDO2tCQUNBQztrQkFDQUM7Z0JBQ0E7Y0FBQTtnQkFDQTtnQkFDQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiOTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8ei1wYWdpbmcgcmVmPVwicGFnaW5nXCIgQHNjcm9sbD1cInNjcm9sbEVWRU5UXCIgOmxvd2VyLXRocmVzaG9sZD1cIjM4MFwiIDpudnVlLWJvdW5jZT1cImZhbHNlXCIgdXNlLWNoYXQtcmVjb3JkLW1vZGVcclxuXHRcdFx0di1tb2RlbD1cImRhdGFMaXN0XCIgQGNlbGxTdHlsZUNoYW5nZT1cImNlbGxTdHlsZUNoYW5nZVwiIEBxdWVyeT1cInF1ZXJ5TGlzdFwiPlxyXG5cclxuXHRcdFx0PGNlbGwgY2xhc3M9XCJpdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gZGF0YUxpc3RcIiA6c3R5bGU9XCJjZWxsU3R5bGVcIiA6a2V5PVwiaXRlbS5uYW1lXCJcclxuXHRcdFx0XHQ6cmVmPVwiYHotcGFnaW5nLSR7aW5kZXh9YFwiPlxyXG5cdFx0XHRcdDxjaGF0SXRlbSA6aXRlbT1cIml0ZW1cIiByZWY9XCJjaGF0SXRlbVwiPjwvY2hhdEl0ZW0+XHJcblx0XHRcdDwvY2VsbD5cclxuXHJcblx0XHRcdDx0ZW1wbGF0ZSAjYm90dG9tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VuZEJveFdyYXBcIiA6c3R5bGU9XCJzZW5kQm94U3R5bGVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VuZEJveFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJtZXNzZ2VCb3hcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZW5kQnRuXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiA0MHJweDtjb2xvcjogI2ZmYztcIj7lj5HpgIE8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHJcblx0XHQ8L3otcGFnaW5nPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzY3JvbGxCb3hXcmFwXCIgOnN0eWxlPVwie2hlaWdodDp2aXNpYmxlSGVpZ2h0ICsgJ3B4J31cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzY3JvbGxCb3hcIiA6c3R5bGU9XCJzY3JvbGxCb3hTdHlsZVwiPlxyXG5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgY2hhdEl0ZW0gZnJvbSBcIkAvY29tcG9lbnRzL2NoYXQtaXRlbS9jaGF0LWl0ZW0udnVlXCJcclxuXHRpbXBvcnQge1xyXG5cdFx0cmVjZW50bHlJdGVtXHJcblx0fSBmcm9tIFwiLi9pbmRleC5qc1wiXHJcblx0Y29uc3QgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKVxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Y2hhdEl0ZW1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGFMaXN0OiBbXSxcclxuXHRcdFx0XHRjZWxsU3R5bGU6IHt9LFxyXG5cdFx0XHRcdHBhZ2VTdW1IZWlnaHQ6IDAsXHJcblx0XHRcdFx0dmlzaWJsZUhlaWdodDogMCxcclxuXHRcdFx0XHRpc0RyYWdnaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRjb250ZW50WTogMCxcclxuXHRcdFx0XHRzY3JvbGxCb3hPcGFjaXR5OiAwLFxyXG5cdFx0XHRcdHNlbmRCb3hTdHlsZToge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAnNjBweCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGxvYWREYXRhU3RhdHVzOiBmYWxzZSwgLy8g5pWw5o2u5piv5ZCm5Yqg6L295a6M5q+VKOS4u+imgeeUqOS6juino+WGs+S4i+aLieaXtuaVsOaNruWKoOi9veWujOavleWQjuWwseS8muaJp+ihjOS4gOasoea7muWKqOS6i+S7tu+8jOS9hui/meS4quS6i+S7tuaIkemcgOimgeWxj+iUve+8jOWboOS4uuWvueaIkeaJgOWBmueahOS4muWKoemAoOaIkOW9seWTjSlcclxuXHRcdFx0XHRpc0RhdGFDb21wbGV0ZUxvYWRpbmc6IGZhbHNlLCAvLyDliIbpobXmlbDmja7mmK/lkKbliqDovb3lrozmr5VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnZpc2libGVIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0IC0gcGFyc2VJbnQodGhpcy5zZW5kQm94U3R5bGUuaGVpZ2h0KVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy52aXNpYmxlSGVpZ2h0KTsgLy8g6aG16Z2i5oC76auY5bqmXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRzY3JvbGxCb3hTdHlsZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLnZpc2libGVIZWlnaHQgKiAodGhpcy52aXNpYmxlSGVpZ2h0IC8gdGhpcy5wYWdlU3VtSGVpZ2h0KSArICdweCcsXHJcblx0XHRcdFx0XHRib3R0b206IHRoaXMudmlzaWJsZUhlaWdodCAqICh0aGlzLmNvbnRlbnRZIC8gdGhpcy5wYWdlU3VtSGVpZ2h0KSArICdweCcsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiB0aGlzLnNjcm9sbEJveE9wYWNpdHlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDlpITkuo7mu5rliqjnirbmgIFcclxuXHRcdFx0c2Nyb2xsRVZFTlQoZSkge1xyXG5cdFx0XHRcdGNvbnN0IHtcclxuXHRcdFx0XHRcdGNvbnRlbnRTaXplOiB7XHJcblx0XHRcdFx0XHRcdGhlaWdodFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnRPZmZzZXQ6IHtcclxuXHRcdFx0XHRcdFx0eVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9ID0gZVxyXG5cdFx0XHRcdC8qXHJcblx0XHRcdFx0XHTlpITkuo7mlbDmja7liqDovb3kuK3ml7bkuI3nm5HlkKzmu5rliqgs5Yqg6L295a6M5oiQ5pWw5o2u5pe25omN6IO955uR5ZCs5rua5YqoXHJcblx0XHRcdFx0XHTlm6DkuLrmlbDmja7liqDovb3lrozmiJDml7Z1cGRhdGFTY29ybGxCb3hEYXRh5Ye95pWw5Lya6Kem5Y+R5rua5Yqo5pWI5p6c5p2l5pS55Y+Y5rua5Yqo5p2h55qE5qC35byPXHJcblx0XHRcdFx0XHTmu5rliqjmnaHmoLflvI/lj6rlhYHorrjpgJrov4d1cGRhdGFTY29ybGxCb3hEYXRh5Ye95pWw6L+b6KGM5pS55Y+YXHJcblx0XHRcdFx0Ki9cclxuXHRcdFx0XHRjb25zdCBwYWdlU3VtSGVpZ2h0ID0gdGhpcy5wYWdlU3VtSGVpZ2h0XHJcblx0XHRcdFx0Y29uc3QgYyA9IGhlaWdodCAtIHBhZ2VTdW1IZWlnaHRcclxuXHRcdFx0XHRpZiAoYyA8IDMwMCAmJiBjICE9PSAwICYmICF0aGlzLmlzRGF0YUNvbXBsZXRlTG9hZGluZykgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsQm94T3BhY2l0eSA9IDFcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnRZID0gTWF0aC5hYnMoeSlcclxuXHRcdFx0XHRpZiAocGFnZVN1bUhlaWdodCAhPT0gaGVpZ2h0KSB0aGlzLnBhZ2VTdW1IZWlnaHQgPSBoZWlnaHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2VsbFN0eWxlQ2hhbmdlKGNlbGxTdHlsZSkge1xyXG5cdFx0XHRcdHRoaXMuY2VsbFN0eWxlID0gY2VsbFN0eWxlXHJcblx0XHRcdH0sXHJcblx0XHRcdHVwZGF0YVNjb3JsbEJveERhdGEoKSB7XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5LiN5rua5YqoJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDmu5rliqjliLDmnIDov5HnmoRjaGF0SXRlbeWFg+e0oOmZhOi/kVxyXG5cdFx0XHRcdFx0XHRjb25zdCBjaGF0SXRlbSA9IHRoaXMuJHJlZnMuY2hhdEl0ZW1cclxuXHRcdFx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbENoYXRJdGVtLFxyXG5cdFx0XHRcdFx0XHRcdGNoYXRJdGVtSW5kZXhcclxuXHRcdFx0XHRcdFx0fSA9IGF3YWl0IHJlY2VudGx5SXRlbShjaGF0SXRlbSlcclxuXHRcdFx0XHRcdFx0aWYgKGNoYXRJdGVtSW5kZXggIT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRkb20uc2Nyb2xsVG9FbGVtZW50KHNjcm9sbENoYXRJdGVtLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ6IC0xMCxcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0cXVlcnlMaXN0KHBhZ2UsIHBhZ2VTaXplKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5sb2FkRGF0YVN0YXR1cyA9IHRydWVcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMuJHJlZnMucGFnaW5nLmNvbXBsZXRlKFt7XHJcblx0XHRcdFx0XHRcdHRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnL3N0YXRpYy9sb2dvLnBuZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICflpKfpm4QxJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJ+a2iOaBrzEnLFxyXG5cdFx0XHRcdFx0XHRpc01lOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHR0aW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJy9zdGF0aWMvbG9nby5wbmcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5aSn6ZuEMicsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmtojmga8yJyxcclxuXHRcdFx0XHRcdFx0aXNNZTogdHJ1ZVxyXG5cdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHR0aW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJy9zdGF0aWMvbG9nby5wbmcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5aSn6ZuEMycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmtojmga8zJyxcclxuXHRcdFx0XHRcdFx0aXNNZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGltZTogJycsXHJcblx0XHRcdFx0XHRcdGljb246ICcvc3RhdGljL2xvZ28ucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+Wkp+mbhDQnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5raI5oGvNCcsXHJcblx0XHRcdFx0XHRcdGlzTWU6IHRydWVcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGltZTogJycsXHJcblx0XHRcdFx0XHRcdGljb246ICcvc3RhdGljL2xvZ28ucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+Wkp+mbhDQnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5raI5oGvNCcsXHJcblx0XHRcdFx0XHRcdGlzTWU6IHRydWVcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGltZTogJycsXHJcblx0XHRcdFx0XHRcdGljb246ICcvc3RhdGljL2xvZ28ucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+Wkp+mbhDQnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5raI5oGvNCcsXHJcblx0XHRcdFx0XHRcdGlzTWU6IHRydWVcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGltZTogJycsXHJcblx0XHRcdFx0XHRcdGljb246ICcvc3RhdGljL2xvZ28ucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+Wkp+mbhDQnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5raI5oGvNCcsXHJcblx0XHRcdFx0XHRcdGlzTWU6IHRydWVcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGltZTogJycsXHJcblx0XHRcdFx0XHRcdGljb246ICcvc3RhdGljL2xvZ28ucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+Wkp+mbhDQnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5raI5oGvNCcsXHJcblx0XHRcdFx0XHRcdGlzTWU6IHRydWVcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGltZTogJycsXHJcblx0XHRcdFx0XHRcdGljb246ICcvc3RhdGljL2xvZ28ucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+Wkp+mbhDQnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5raI5oGvNCcsXHJcblx0XHRcdFx0XHRcdGlzTWU6IHRydWVcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGltZTogJycsXHJcblx0XHRcdFx0XHRcdGljb246ICcvc3RhdGljL2xvZ28ucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+Wkp+mbhDQnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5raI5oGvNCcsXHJcblx0XHRcdFx0XHRcdGlzTWU6IHRydWVcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGltZTogJycsXHJcblx0XHRcdFx0XHRcdGljb246ICcvc3RhdGljL2xvZ28ucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+Wkp+mbhDQnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5raI5oGvNCcsXHJcblx0XHRcdFx0XHRcdGlzTWU6IHRydWVcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGltZTogJycsXHJcblx0XHRcdFx0XHRcdGljb246ICcvc3RhdGljL2xvZ28ucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+Wkp+mbhDQnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5raI5oGvNCcsXHJcblx0XHRcdFx0XHRcdGlzTWU6IHRydWVcclxuXHRcdFx0XHRcdH1dKTtcclxuXHRcdFx0XHRcdHRoaXMubG9hZERhdGFTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGFTY29ybGxCb3hEYXRhKClcclxuXHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC5jb250ZW50IHtcclxuXHRcdGZsZXg6IDE7XHJcblxyXG5cdFx0LnNjcm9sbEJveFdyYXAge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0XHQuc2Nyb2xsQm94IHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0b3BhY2l0eTogMDtcclxuXHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0d2lkdGg6IDEwcnB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBycHggMTBycHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuc2VuZEJveFdyYXAge1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxuXHJcblx0XHRcdC5zZW5kQm94IHtcclxuXHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdFx0cGFkZGluZzogMTBycHg7XHJcblxyXG5cdFx0XHRcdC5tZXNzZ2VCb3gge1xyXG5cdFx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRib3JkZXI6IDJycHggc29saWQgI2NjYztcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiA2MHJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5zZW5kQnRuIHtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdG1hcmdpbjogMTBycHg7XHJcblx0XHRcdFx0d2lkdGg6IDE2MHJweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzMHJweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTIzLCAyNTQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///99\n");

/***/ }),
/* 100 */
/*!***************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/compoents/chat-item/chat-item.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chat_item_vue_vue_type_template_id_a2a03908_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-item.vue?vue&type=template&id=a2a03908&scoped=true& */ 101);\n/* harmony import */ var _chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-item.vue?vue&type=script&lang=js& */ 103);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chat-item.vue?vue&type=style&index=0&id=a2a03908&scoped=true&lang=css& */ 105).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chat-item.vue?vue&type=style&index=0&id=a2a03908&scoped=true&lang=css& */ 105).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chat_item_vue_vue_type_template_id_a2a03908_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chat_item_vue_vue_type_template_id_a2a03908_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"a2a03908\",\n  \"37c95e9c\",\n  false,\n  _chat_item_vue_vue_type_template_id_a2a03908_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"compoents/chat-item/chat-item.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1GQUEwRTtBQUM5SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUZBQTBFO0FBQ25JOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NoYXQtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTJhMDM5MDgmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jaGF0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGF0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vY2hhdC1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWEyYTAzOTA4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9jaGF0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTJhMDM5MDgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTJhMDM5MDhcIixcbiAgXCIzN2M5NWU5Y1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb2VudHMvY2hhdC1pdGVtL2NoYXQtaXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///100\n");

/***/ }),
/* 101 */
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/compoents/chat-item/chat-item.vue?vue&type=template&id=a2a03908&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_template_id_a2a03908_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat-item.vue?vue&type=template&id=a2a03908&scoped=true& */ 102);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_template_id_a2a03908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_template_id_a2a03908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_template_id_a2a03908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_template_id_a2a03908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 102 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/compoents/chat-item/chat-item.vue?vue&type=template&id=a2a03908&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["chat-item"] }, [
    _vm.item.time && _vm.item.time.length
      ? _c(
          "u-text",
          {
            staticClass: ["chat-time"],
            appendAsTree: true,
            attrs: { append: "tree" },
          },
          [_vm._v(_vm._s(_vm.item.time))]
        )
      : _vm._e(),
    _c(
      "view",
      { class: { "chat-container": true, "chat-location-me": _vm.item.isMe } },
      [
        _c(
          "view",
          { staticClass: ["chat-icon-container"] },
          [
            _c("u-image", {
              staticClass: ["chat-icon"],
              attrs: { src: _vm.item.icon, mode: "aspectFill" },
            }),
          ],
          1
        ),
        _c("view", { staticClass: ["chat-content-container"] }, [
          _c(
            "u-text",
            {
              class: {
                "chat-user-name": true,
                "chat-location-me": _vm.item.isMe,
              },
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v(_vm._s(_vm.item.name))]
          ),
          _c(
            "view",
            {
              class: {
                "chat-text-container": true,
                "chat-text-container-me": _vm.item.isMe,
              },
            },
            [
              _c(
                "u-text",
                {
                  class: { "char-text": true, "char-text-me": _vm.item.isMe },
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v(_vm._s(_vm.item.content))]
              ),
            ]
          ),
        ]),
      ]
    ),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 103 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/compoents/chat-item/chat-item.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat-item.vue?vue&type=script&lang=js& */ 104);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVhLENBQWdCLG1kQUFHLEVBQUMiLCJmaWxlIjoiMTAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYXQtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGF0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///103\n");

/***/ }),
/* 104 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/compoents/chat-item/chat-item.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 = {\n  name: \"chat-item\",\n  props: {\n    item: {\n      type: Object,\n      default: function _default() {\n        return {\n          time: '',\n          icon: '',\n          name: '',\n          content: '',\n          isMe: false\n        };\n      }\n    }\n  },\n  data: function data() {\n    return {};\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9lbnRzL2NoYXQtaXRlbS9jaGF0LWl0ZW0udnVlIl0sIm5hbWVzIjpbIm5hbWUiLCJwcm9wcyIsIml0ZW0iLCJ0eXBlIiwiZGVmYXVsdCIsInRpbWUiLCJpY29uIiwiY29udGVudCIsImlzTWUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkF3QkE7RUFDQUE7RUFDQUM7SUFDQUM7TUFDQUM7TUFDQUM7UUFDQTtVQUNBQztVQUNBQztVQUNBTjtVQUNBTztVQUNBQztRQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0EsUUFFQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIxMDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIHotcGFnaW5n6IGK5aSpaXRlbSAtLT5cblxuPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImNoYXQtaXRlbVwiPlxuXHRcdDx0ZXh0IGNsYXNzPVwiY2hhdC10aW1lXCIgdi1pZj1cIml0ZW0udGltZSYmaXRlbS50aW1lLmxlbmd0aFwiPlxuXHRcdFx0e3tpdGVtLnRpbWV9fVxuXHRcdDwvdGV4dD5cblx0XHQ8dmlldyA6Y2xhc3M9XCJ7J2NoYXQtY29udGFpbmVyJzp0cnVlLCdjaGF0LWxvY2F0aW9uLW1lJzppdGVtLmlzTWV9XCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNoYXQtaWNvbi1jb250YWluZXJcIj5cblx0XHRcdFx0PGltYWdlIGNsYXNzPVwiY2hhdC1pY29uXCIgOnNyYz1cIml0ZW0uaWNvblwiIG1vZGU9XCJhc3BlY3RGaWxsXCIgLz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdC1jb250ZW50LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJ7J2NoYXQtdXNlci1uYW1lJzp0cnVlLCdjaGF0LWxvY2F0aW9uLW1lJzppdGVtLmlzTWV9XCI+XG5cdFx0XHRcdFx0e3tpdGVtLm5hbWV9fVxuXHRcdFx0XHQ8L3RleHQ+XG5cdFx0XHRcdDx2aWV3IDpjbGFzcz1cInsnY2hhdC10ZXh0LWNvbnRhaW5lcic6dHJ1ZSwnY2hhdC10ZXh0LWNvbnRhaW5lci1tZSc6aXRlbS5pc01lfVwiPlxuXHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cInsnY2hhci10ZXh0Jzp0cnVlLCdjaGFyLXRleHQtbWUnOml0ZW0uaXNNZX1cIj57e2l0ZW0uY29udGVudH19PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTpcImNoYXQtaXRlbVwiLFxuXHRcdHByb3BzOiB7XG5cdFx0XHRpdGVtOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHRpbWU6ICcnLFxuXHRcdFx0XHRcdFx0aWNvbjogJycsXG5cdFx0XHRcdFx0XHRuYW1lOiAnJyxcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxuXHRcdFx0XHRcdFx0aXNNZTogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcblx0XHRcdH07XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblx0LmNoYXQtaXRlbXtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0cGFkZGluZzogMjBycHg7XG5cdH1cblx0LmNoYXQtdGltZXtcblx0XHRwYWRkaW5nOiA0cnB4IDBycHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMjJycHg7XG5cdFx0Y29sb3I6ICNhYWFhYWE7XG5cdH1cblx0LmNoYXQtY29udGFpbmVye1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxuXHQuY2hhdC1sb2NhdGlvbi1tZXtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdH1cblx0LmNoYXQtaWNvbi1jb250YWluZXJ7XG5cdFx0bWFyZ2luLXRvcDogMTJycHg7XG5cdH1cblx0LmNoYXQtaWNvbntcblx0XHR3aWR0aDogODBycHg7XG5cdFx0aGVpZ2h0OiA4MHJweDtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcblx0fVxuXHQuY2hhdC1jb250ZW50LWNvbnRhaW5lcntcblx0XHRtYXJnaW46IDBycHggMTVycHg7XG5cdH1cblx0LmNoYXQtdXNlci1uYW1le1xuXHRcdGZvbnQtc2l6ZTogMjZycHg7XG5cdFx0Y29sb3I6ICM4ODg4ODg7XG5cdH1cblx0LmNoYXQtdGV4dC1jb250YWluZXJ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcblx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xuXHRcdHBhZGRpbmc6IDEwcnB4IDE1cnB4O1xuXHRcdG1hcmdpbi10b3A6IDEwcnB4O1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRtYXgtd2lkdGg6IDUwMHJweDtcblx0XHQvKiAjZW5kaWYgKi9cblx0fVxuXHQuY2hhdC10ZXh0LWNvbnRhaW5lci1tZXtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGO1xuXHR9XG5cdC5jaGFyLXRleHR7XG5cdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xuXHRcdG1heC13aWR0aDogNTAwcnB4O1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cdC5jaGFyLXRleHQtbWV7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHR9XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///104\n");

/***/ }),
/* 105 */
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/compoents/chat-item/chat-item.vue?vue&type=style&index=0&id=a2a03908&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_id_a2a03908_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat-item.vue?vue&type=style&index=0&id=a2a03908&scoped=true&lang=css& */ 106);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_id_a2a03908_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_id_a2a03908_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_id_a2a03908_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_id_a2a03908_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_id_a2a03908_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 106 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/compoents/chat-item/chat-item.vue?vue&type=style&index=0&id=a2a03908&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".chat-item": {
    "": {
      "display": [
        "flex",
        0,
        0,
        0
      ],
      "flexDirection": [
        "column",
        0,
        0,
        0
      ],
      "paddingTop": [
        "20rpx",
        0,
        0,
        0
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        0
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        0
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        0
      ]
    }
  },
  ".chat-time": {
    "": {
      "paddingTop": [
        "4rpx",
        0,
        0,
        1
      ],
      "paddingRight": [
        "0rpx",
        0,
        0,
        1
      ],
      "paddingBottom": [
        "4rpx",
        0,
        0,
        1
      ],
      "paddingLeft": [
        "0rpx",
        0,
        0,
        1
      ],
      "textAlign": [
        "center",
        0,
        0,
        1
      ],
      "fontSize": [
        "22rpx",
        0,
        0,
        1
      ],
      "color": [
        "#aaaaaa",
        0,
        0,
        1
      ]
    }
  },
  ".chat-container": {
    "": {
      "display": [
        "flex",
        0,
        0,
        2
      ],
      "flexDirection": [
        "row",
        0,
        0,
        2
      ]
    }
  },
  ".chat-location-me": {
    "": {
      "flexDirection": [
        "row-reverse",
        0,
        0,
        3
      ],
      "textAlign": [
        "right",
        0,
        0,
        3
      ]
    }
  },
  ".chat-icon-container": {
    "": {
      "marginTop": [
        "12rpx",
        0,
        0,
        4
      ]
    }
  },
  ".chat-icon": {
    "": {
      "width": [
        "80rpx",
        0,
        0,
        5
      ],
      "height": [
        "80rpx",
        0,
        0,
        5
      ],
      "borderRadius": [
        50,
        0,
        0,
        5
      ],
      "backgroundColor": [
        "#eeeeee",
        0,
        0,
        5
      ]
    }
  },
  ".chat-content-container": {
    "": {
      "marginTop": [
        "0rpx",
        0,
        0,
        6
      ],
      "marginRight": [
        "15rpx",
        0,
        0,
        6
      ],
      "marginBottom": [
        "0rpx",
        0,
        0,
        6
      ],
      "marginLeft": [
        "15rpx",
        0,
        0,
        6
      ]
    }
  },
  ".chat-user-name": {
    "": {
      "fontSize": [
        "26rpx",
        0,
        0,
        7
      ],
      "color": [
        "#888888",
        0,
        0,
        7
      ]
    }
  },
  ".chat-text-container": {
    "": {
      "backgroundColor": [
        "#f1f1f1",
        0,
        0,
        8
      ],
      "borderRadius": [
        "8rpx",
        0,
        0,
        8
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        8
      ],
      "paddingRight": [
        "15rpx",
        0,
        0,
        8
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        8
      ],
      "paddingLeft": [
        "15rpx",
        0,
        0,
        8
      ],
      "marginTop": [
        "10rpx",
        0,
        0,
        8
      ]
    }
  },
  ".chat-text-container-me": {
    "": {
      "backgroundColor": [
        "#007AFF",
        0,
        0,
        9
      ]
    }
  },
  ".char-text": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        10
      ],
      "maxWidth": [
        "500rpx",
        0,
        0,
        10
      ]
    }
  },
  ".char-text-me": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        11
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 107 */
/*!**************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/pages/index/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.recentlyItem = recentlyItem;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 43));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 45));\nvar dom = weex.requireModule('dom');\n// 查找最近的chatItem元素\nfunction recentlyItem(_x) {\n  return _recentlyItem.apply(this, arguments);\n}\nfunction _recentlyItem() {\n  _recentlyItem = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(chatItem) {\n    var max, chatItemIndex, arr, i, item, top;\n    return _regenerator.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            max = null;\n            chatItemIndex = null;\n            arr = [];\n            i = 0;\n          case 4:\n            if (!(i < chatItem.length)) {\n              _context.next = 13;\n              break;\n            }\n            item = chatItem[i];\n            _context.next = 8;\n            return getTopValueAsync(item);\n          case 8:\n            top = _context.sent;\n            arr.push(top);\n          case 10:\n            i++;\n            _context.next = 4;\n            break;\n          case 13:\n            max = Math.max.apply(Math, arr);\n            chatItemIndex = arr.findIndex(function (item) {\n              return item === max;\n            });\n            return _context.abrupt(\"return\", {\n              scrollChatItem: chatItem[chatItemIndex],\n              chatItemIndex: chatItemIndex\n            });\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _recentlyItem.apply(this, arguments);\n}\nfunction getTopValueAsync(item) {\n  return new Promise(function (resolve) {\n    dom.getComponentRect(item, function (_ref) {\n      var top = _ref.size.top;\n      resolve(top);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiZG9tIiwid2VleCIsInJlcXVpcmVNb2R1bGUiLCJyZWNlbnRseUl0ZW0iLCJjaGF0SXRlbSIsIm1heCIsImNoYXRJdGVtSW5kZXgiLCJhcnIiLCJpIiwibGVuZ3RoIiwiaXRlbSIsImdldFRvcFZhbHVlQXN5bmMiLCJ0b3AiLCJwdXNoIiwiTWF0aCIsImZpbmRJbmRleCIsInNjcm9sbENoYXRJdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJnZXRDb21wb25lbnRSZWN0Iiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsR0FBRyxHQUFHQyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDckM7QUFBQSxTQUNlQyxZQUFZO0VBQUE7QUFBQTtBQUFBO0VBQUEsd0ZBQTNCLGlCQUE0QkMsUUFBUTtJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFDL0JDLEdBQUcsR0FBRyxJQUFJO1lBQ1ZDLGFBQWEsR0FBRyxJQUFJO1lBQ3BCQyxHQUFHLEdBQUcsRUFBRTtZQUVIQyxDQUFDLEdBQUcsQ0FBQztVQUFBO1lBQUEsTUFBRUEsQ0FBQyxHQUFHSixRQUFRLENBQUNLLE1BQU07Y0FBQTtjQUFBO1lBQUE7WUFDNUJDLElBQUksR0FBR04sUUFBUSxDQUFDSSxDQUFDLENBQUM7WUFBQTtZQUFBLE9BQ05HLGdCQUFnQixDQUFDRCxJQUFJLENBQUM7VUFBQTtZQUFsQ0UsR0FBRztZQUNUTCxHQUFHLENBQUNNLElBQUksQ0FBQ0QsR0FBRyxDQUFDO1VBQUM7WUFIc0JKLENBQUMsRUFBRTtZQUFBO1lBQUE7VUFBQTtZQU14Q0gsR0FBRyxHQUFHUyxJQUFJLENBQUNULEdBQUcsT0FBUlMsSUFBSSxFQUFRUCxHQUFHLENBQUM7WUFDdEJELGFBQWEsR0FBR0MsR0FBRyxDQUFDUSxTQUFTLENBQUMsVUFBQUwsSUFBSTtjQUFBLE9BQUlBLElBQUksS0FBS0wsR0FBRztZQUFBLEVBQUM7WUFBQSxpQ0FDNUM7Y0FDTlcsY0FBYyxFQUFFWixRQUFRLENBQUNFLGFBQWEsQ0FBQztjQUN2Q0EsYUFBYSxFQUFiQTtZQUNELENBQUM7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUNEO0VBQUE7QUFBQTtBQUVELFNBQVNLLGdCQUFnQixDQUFDRCxJQUFJLEVBQUU7RUFDL0IsT0FBTyxJQUFJTyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFLO0lBQy9CbEIsR0FBRyxDQUFDbUIsZ0JBQWdCLENBQUNULElBQUksRUFBRSxnQkFJckI7TUFBQSxJQUZKRSxHQUFHLFFBREpRLElBQUksQ0FDSFIsR0FBRztNQUdKTSxPQUFPLENBQUNOLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztBQUNIIiwiZmlsZSI6IjEwNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJylcclxuLy8g5p+l5om+5pyA6L+R55qEY2hhdEl0ZW3lhYPntKBcclxuYXN5bmMgZnVuY3Rpb24gcmVjZW50bHlJdGVtKGNoYXRJdGVtKSB7XHJcblx0bGV0IG1heCA9IG51bGw7XHJcblx0bGV0IGNoYXRJdGVtSW5kZXggPSBudWxsO1xyXG5cdGxldCBhcnIgPSBbXVxyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNoYXRJdGVtLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBpdGVtID0gY2hhdEl0ZW1baV07XHJcblx0XHRjb25zdCB0b3AgPSBhd2FpdCBnZXRUb3BWYWx1ZUFzeW5jKGl0ZW0pO1xyXG5cdFx0YXJyLnB1c2godG9wKTtcclxuXHR9XHJcblxyXG5cdG1heCA9IE1hdGgubWF4KC4uLmFycilcclxuXHRjaGF0SXRlbUluZGV4ID0gYXJyLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IG1heClcclxuXHRyZXR1cm4ge1xyXG5cdFx0c2Nyb2xsQ2hhdEl0ZW06IGNoYXRJdGVtW2NoYXRJdGVtSW5kZXhdLFxyXG5cdFx0Y2hhdEl0ZW1JbmRleFxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9wVmFsdWVBc3luYyhpdGVtKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblx0XHRkb20uZ2V0Q29tcG9uZW50UmVjdChpdGVtLCAoe1xyXG5cdFx0XHRzaXplOiB7XHJcblx0XHRcdFx0dG9wXHJcblx0XHRcdH1cclxuXHRcdH0pID0+IHtcclxuXHRcdFx0cmVzb2x2ZSh0b3ApO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0cmVjZW50bHlJdGVtXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///107\n");

/***/ }),
/* 108 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/pages/index/index.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 109);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 109 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/nvue测试2/pages/index/index.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".content": {
    "": {
      "flex": [
        1,
        0,
        0,
        16
      ]
    }
  },
  ".scrollBoxWrap": {
    ".content ": {
      "position": [
        "relative",
        0,
        1,
        17
      ]
    }
  },
  ".scrollBox": {
    ".content .scrollBoxWrap ": {
      "position": [
        "absolute",
        0,
        2,
        18
      ],
      "opacity": [
        0,
        0,
        2,
        18
      ],
      "bottom": [
        0,
        0,
        2,
        18
      ],
      "right": [
        0,
        0,
        2,
        18
      ],
      "width": [
        "10rpx",
        0,
        2,
        18
      ],
      "backgroundColor": [
        "#cccccc",
        0,
        2,
        18
      ],
      "borderTopLeftRadius": [
        "10rpx",
        0,
        2,
        18
      ],
      "borderTopRightRadius": [
        "10rpx",
        0,
        2,
        18
      ],
      "borderBottomRightRadius": [
        "10rpx",
        0,
        2,
        18
      ],
      "borderBottomLeftRadius": [
        "10rpx",
        0,
        2,
        18
      ]
    }
  },
  ".sendBoxWrap": {
    ".content ": {
      "flexDirection": [
        "row",
        0,
        1,
        19
      ],
      "backgroundColor": [
        "#FFEBCD",
        0,
        1,
        19
      ]
    }
  },
  ".sendBox": {
    ".content .sendBoxWrap ": {
      "flex": [
        1,
        0,
        2,
        20
      ],
      "flexDirection": [
        "row",
        0,
        2,
        20
      ],
      "paddingTop": [
        "10rpx",
        0,
        2,
        20
      ],
      "paddingRight": [
        "10rpx",
        0,
        2,
        20
      ],
      "paddingBottom": [
        "10rpx",
        0,
        2,
        20
      ],
      "paddingLeft": [
        "10rpx",
        0,
        2,
        20
      ]
    }
  },
  ".messgeBox": {
    ".content .sendBoxWrap .sendBox ": {
      "flex": [
        1,
        0,
        3,
        21
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        3,
        21
      ],
      "borderWidth": [
        "2rpx",
        0,
        3,
        21
      ],
      "borderStyle": [
        "solid",
        0,
        3,
        21
      ],
      "borderColor": [
        "#cccccc",
        0,
        3,
        21
      ],
      "borderRadius": [
        "10rpx",
        0,
        3,
        21
      ],
      "fontSize": [
        "60rpx",
        0,
        3,
        21
      ]
    }
  },
  ".sendBtn": {
    ".content .sendBoxWrap ": {
      "justifyContent": [
        "center",
        0,
        2,
        22
      ],
      "alignItems": [
        "center",
        0,
        2,
        22
      ],
      "marginTop": [
        "10rpx",
        0,
        2,
        22
      ],
      "marginRight": [
        "10rpx",
        0,
        2,
        22
      ],
      "marginBottom": [
        "10rpx",
        0,
        2,
        22
      ],
      "marginLeft": [
        "10rpx",
        0,
        2,
        22
      ],
      "width": [
        "160rpx",
        0,
        2,
        22
      ],
      "borderRadius": [
        "30rpx",
        0,
        2,
        22
      ],
      "backgroundColor": [
        "#007bfe",
        0,
        2,
        22
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);