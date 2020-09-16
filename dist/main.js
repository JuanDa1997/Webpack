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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app/views/css/styles.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app/views/css/styles.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_covers_gif5_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/covers/gif5.gif */ "./src/app/views/assets/covers/gif5.gif");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_covers_gif5_gif__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #999898;\n}\n\n.sombra {\n  margin: auto;\n  margin-top: 50px;\n  display: flex;\n  justify-content: flex-start;\n  width: 410px;\n  height: 708px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.5));\n  border-radius: 10px;\n  background-color: #05cccc;\n}\n.sombra .player {\n  width: 400px;\n  height: 700px;\n  background-color: aqua;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 10px;\n}\n.sombra .player .contorno-video {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 360px;\n  height: 350px;\n  margin-top: 20px;\n  background-color: #272727;\n  border-radius: 10px;\n}\n.sombra .player .contorno-video .video {\n  bottom: 0;\n  width: 250px;\n  height: 230px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n}\n.sombra .player .controls {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 400px;\n}\n.sombra .player .controls .circulos {\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  align-items: center;\n  width: 80px;\n  height: 100px;\n}\n.sombra .player .controls .circulos .fila1 {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.sombra .player .controls .circulos .fila1 .play {\n  color: green;\n  text-align: center;\n  font-size: 30px;\n  width: 40px;\n  height: 40px;\n  background-color: black;\n  border-radius: 50px;\n  cursor: pointer;\n}\n.sombra .player .controls .circulos .fila2 {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.sombra .player .controls .circulos .fila2 .pause {\n  border-radius: 50px;\n  color: green;\n  text-align: center;\n  font-size: 30px;\n  width: 40px;\n  height: 40px;\n  background-color: black;\n  cursor: pointer;\n}\n.sombra .player .controls .flechas {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100px;\n  height: 90px;\n  margin-right: 140px;\n}\n.sombra .player .controls .flechas .fila1 {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.sombra .player .controls .flechas .fila1 .arriba {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.sombra .player .controls .flechas .fila2 {\n  width: 100%;\n  display: flex;\n  flex-direction: unset;\n  justify-content: center;\n  align-items: center;\n}\n.sombra .player .controls .flechas .fila2 .izquierda {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  cursor: pointer;\n}\n.sombra .player .controls .flechas .fila2 .centro {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n}\n.sombra .player .controls .flechas .fila2 .derecha {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  cursor: pointer;\n}\n.sombra .player .controls .flechas .fila3 {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.sombra .player .controls .flechas .fila3 .abajo {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.sombra .player .controls2 {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 150px;\n}\n.sombra .player .controls2 .fila1 {\n  width: 200px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.sombra .player .controls2 .fila1 .start {\n  border-radius: 30px;\n  width: 40px;\n  height: 15px;\n  background-color: black;\n}\n.sombra .player .controls2 .fila1 .pausa {\n  border-radius: 30px;\n  width: 40px;\n  height: 15px;\n  background-color: black;\n}\n.sombra .player .controls2 .fila2 {\n  width: 90%;\n  height: 80px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.sombra .player .controls2 .fila2 .audio {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n}\n.sombra .player .controls2 .fila2 .audio .fila1 {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  height: 10px;\n}\n.sombra .player .controls2 .fila2 .audio .fila1 .orificio {\n  width: 6px;\n  height: 6px;\n  border-radius: 50px;\n  background-color: black;\n}\n.sombra .player .controls2 .fila2 .audio .fila2 {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 75%;\n  height: 10px;\n}\n.sombra .player .controls2 .fila2 .audio .fila2 .orificio {\n  width: 6px;\n  height: 6px;\n  border-radius: 50px;\n  background-color: black;\n}\n\n/*# sourceMappingURL=index.css.map */\n", "",{"version":3,"sources":["webpack://src/app/views/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #999898;\n}\n\n.sombra {\n  margin: auto;\n  margin-top: 50px;\n  display: flex;\n  justify-content: flex-start;\n  width: 410px;\n  height: 708px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.5));\n  border-radius: 10px;\n  background-color: #05cccc;\n}\n.sombra .player {\n  width: 400px;\n  height: 700px;\n  background-color: aqua;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 10px;\n}\n.sombra .player .contorno-video {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 360px;\n  height: 350px;\n  margin-top: 20px;\n  background-color: #272727;\n  border-radius: 10px;\n}\n.sombra .player .contorno-video .video {\n  bottom: 0;\n  width: 250px;\n  height: 230px;\n  background-image: url(../assets/covers/gif5.gif);\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n}\n.sombra .player .controls {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 400px;\n}\n.sombra .player .controls .circulos {\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  align-items: center;\n  width: 80px;\n  height: 100px;\n}\n.sombra .player .controls .circulos .fila1 {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.sombra .player .controls .circulos .fila1 .play {\n  color: green;\n  text-align: center;\n  font-size: 30px;\n  width: 40px;\n  height: 40px;\n  background-color: black;\n  border-radius: 50px;\n  cursor: pointer;\n}\n.sombra .player .controls .circulos .fila2 {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.sombra .player .controls .circulos .fila2 .pause {\n  border-radius: 50px;\n  color: green;\n  text-align: center;\n  font-size: 30px;\n  width: 40px;\n  height: 40px;\n  background-color: black;\n  cursor: pointer;\n}\n.sombra .player .controls .flechas {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100px;\n  height: 90px;\n  margin-right: 140px;\n}\n.sombra .player .controls .flechas .fila1 {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.sombra .player .controls .flechas .fila1 .arriba {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.sombra .player .controls .flechas .fila2 {\n  width: 100%;\n  display: flex;\n  flex-direction: unset;\n  justify-content: center;\n  align-items: center;\n}\n.sombra .player .controls .flechas .fila2 .izquierda {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  cursor: pointer;\n}\n.sombra .player .controls .flechas .fila2 .centro {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n}\n.sombra .player .controls .flechas .fila2 .derecha {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  cursor: pointer;\n}\n.sombra .player .controls .flechas .fila3 {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.sombra .player .controls .flechas .fila3 .abajo {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.sombra .player .controls2 {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 150px;\n}\n.sombra .player .controls2 .fila1 {\n  width: 200px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.sombra .player .controls2 .fila1 .start {\n  border-radius: 30px;\n  width: 40px;\n  height: 15px;\n  background-color: black;\n}\n.sombra .player .controls2 .fila1 .pausa {\n  border-radius: 30px;\n  width: 40px;\n  height: 15px;\n  background-color: black;\n}\n.sombra .player .controls2 .fila2 {\n  width: 90%;\n  height: 80px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.sombra .player .controls2 .fila2 .audio {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n}\n.sombra .player .controls2 .fila2 .audio .fila1 {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  height: 10px;\n}\n.sombra .player .controls2 .fila2 .audio .fila1 .orificio {\n  width: 6px;\n  height: 6px;\n  border-radius: 50px;\n  background-color: black;\n}\n.sombra .player .controls2 .fila2 .audio .fila2 {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 75%;\n  height: 10px;\n}\n.sombra .player .controls2 .fila2 .audio .fila2 .orificio {\n  width: 6px;\n  height: 6px;\n  border-radius: 50px;\n  background-color: black;\n}\n\n/*# sourceMappingURL=index.css.map */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./output/app/views/js/AudioPlayer.js":
/*!********************************************!*\
  !*** ./output/app/views/js/AudioPlayer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioPlayer = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var AudioPlayer = /*#__PURE__*/function () {
  function AudioPlayer(domElement) {
    var _this = this;

    _classCallCheck(this, AudioPlayer);

    this.domElement = domElement;
    this.canciones = ["./assets/songs/songOne.mp3", "./assets/songs/songTwo.mp3", "./assets/songs/songThree.mp3", "./assets/songs/songFourth.mp3"];
    this.src = this.canciones;
    this.contador = 0; // this.audio = new Audio(this.src);

    this.audio = new Audio(this.src[0]);
    this.controls = {
      domElement: this.domElement.querySelector(".controls")
    };
    console.log(this.src);
    this.progress = this.domElement.querySelector(".video .progress");
    this.initControls(); // this.initProgressActions();

    this.audio.ontimeupdate = function () {
      _this.updateUI();
    };
  }

  _createClass(AudioPlayer, [{
    key: "initControls",
    value: function initControls() {
      this.controls.play = this.controls.domElement.querySelector(".circulos .play");
      this.controls.pause = this.controls.domElement.querySelector(".circulos .pause");
      this.controls.skip = this.controls.domElement.querySelector(".flechas .derecha");
      this.controls.leftSkip = this.controls.domElement.querySelector(".flechas .izquierda");

      if (this.controls.play) {
        this.initPlay(this.controls.play);
      }

      if (this.controls.pause) {
        this.initPlay(this.controls.pause);
      }

      if (this.controls.skip) {
        this.initPlay(this.controls.skip);
      }

      if (this.controls.leftSkip) {
        this.initPlay(this.controls.leftSkip);
      }
    }
  }, {
    key: "initPlay",
    value: function initPlay(domElement) {
      var _this2 = this;

      console.log("entro");

      domElement.onclick = function () {
        var icon = domElement.querySelector("i");
        console.log(icon);
        var isPlay = icon.classList.contains("play");
        var isPause = icon.classList.contains("pause");
        var isSkip = icon.classList.contains("derecha");
        var isLeftSkip = icon.classList.contains("izquierda");

        if (isPlay) {
          _this2.play();
        }

        if (isPause) {
          _this2.pause();
        }

        if (isSkip) {
          _this2.skip();

          ++_this2.contador;
          console.log(_this2.contador);

          _this2.skip(_this2.contador);
        }

        if (isLeftSkip) {
          _this2.skip();

          --_this2.contador;
          console.log(_this2.contador);

          _this2.skip(_this2.contador);
        }
      };
    } // initProgressActions(){
    //     const cover = this.domElement.querySelector(".video")
    //     cover.onclick = (e) => {
    //         const x = e.offsetX;
    //         const totalX = cover.clientWidth;
    //         const progress = x/totalX;
    //         this.setCurrentTime(progress)
    //     };
    // }

  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(progress) {
      this.audio.currentTime = this.audio.duration * progress;
    }
  }, {
    key: "updateUI",
    value: function updateUI() {
      var total = this.audio.duration;
      var current = this.audio.currentTime;
      var progress = current / total * 100;
      this.progress.style.width = "".concat(progress, "%");
    }
  }, {
    key: "play",
    value: function play() {
      this.audio.play().then()["catch"](function (err) {
        return console.log("Error al reproducir el archivo: ".concat(err));
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      this.audio.pause();
    }
  }, {
    key: "skip",
    value: function skip(contador) {
      if (contador == 0) {
        if (!contador) {
          this.pause();
        }

        var x = document.getElementsByClassName("video")[0];
        x.style.backgroundImage = "";
        this.play(this.audio = new Audio(this.src[0]));
      } else if (contador == 1) {
        if (contador) {
          this.pause();
        }

        var _x = document.getElementsByClassName("video")[0];
        _x.style.backgroundImage = "url(./assets/covers/gif4.gif)";
        this.play(this.audio = new Audio(this.src[1]));
      } else if (contador == 2) {
        if (contador) {
          this.pause();
        }

        var _x2 = document.getElementsByClassName("video")[0];
        _x2.style.backgroundImage = "url(./assets/covers/gif2.gif)";
        this.play(this.audio = new Audio(this.src[2]));
      } else if (contador == 3) {
        if (contador) {
          this.pause();
        }

        var _x3 = document.getElementsByClassName("video")[0];
        _x3.style.backgroundImage = "url(./assets/covers/gif3.gif)";
        this.play(this.audio = new Audio(this.src[3]));
      } else if (contador > 3) {
        alert("no hay más canciones en la cola");
      }
    }
  }]);

  return AudioPlayer;
}();

exports.AudioPlayer = AudioPlayer;

/***/ }),

/***/ "./output/app/views/js/main.js":
/*!*************************************!*\
  !*** ./output/app/views/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AudioPlayer = __webpack_require__(/*! ./AudioPlayer */ "./output/app/views/js/AudioPlayer.js");

var playersEl = document.querySelectorAll(".player");
var players = [];
playersEl.forEach(function (player) {
  players.push(new _AudioPlayer.AudioPlayer(player));
});

/***/ }),

/***/ "./src/app/views/app.ts":
/*!******************************!*\
  !*** ./src/app/views/app.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ "./src/app/views/css/styles.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);
var gameboy = __webpack_require__(/*! ./gameBoy.html */ "./src/app/views/gameBoy.html");

function component() {
    var element = document.createElement('div');
    // el caractér _ hace referencia a una biblioteca llamada lodash que será muy útil
    element.id = "contenedor";
    return element;
}
var contenedor = component();
var html = document.createRange().createContextualFragment(gameboy);
contenedor.appendChild(html);
document.body.appendChild(contenedor);


/***/ }),

/***/ "./src/app/views/assets/covers/gif2.gif":
/*!**********************************************!*\
  !*** ./src/app/views/assets/covers/gif2.gif ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/covers/gif2.gif");

/***/ }),

/***/ "./src/app/views/assets/covers/gif3.gif":
/*!**********************************************!*\
  !*** ./src/app/views/assets/covers/gif3.gif ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/covers/gif3.gif");

/***/ }),

/***/ "./src/app/views/assets/covers/gif4.gif":
/*!**********************************************!*\
  !*** ./src/app/views/assets/covers/gif4.gif ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/covers/gif4.gif");

/***/ }),

/***/ "./src/app/views/assets/covers/gif5.gif":
/*!**********************************************!*\
  !*** ./src/app/views/assets/covers/gif5.gif ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/covers/gif5.gif");

/***/ }),

/***/ "./src/app/views/assets/songs/songFourth.mp3":
/*!***************************************************!*\
  !*** ./src/app/views/assets/songs/songFourth.mp3 ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/songs/songFourth.mp3");

/***/ }),

/***/ "./src/app/views/assets/songs/songOne.mp3":
/*!************************************************!*\
  !*** ./src/app/views/assets/songs/songOne.mp3 ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/songs/songOne.mp3");

/***/ }),

/***/ "./src/app/views/assets/songs/songThree.mp3":
/*!**************************************************!*\
  !*** ./src/app/views/assets/songs/songThree.mp3 ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/songs/songThree.mp3");

/***/ }),

/***/ "./src/app/views/assets/songs/songTwo.mp3":
/*!************************************************!*\
  !*** ./src/app/views/assets/songs/songTwo.mp3 ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/songs/songTwo.mp3");

/***/ }),

/***/ "./src/app/views/css/styles.css":
/*!**************************************!*\
  !*** ./src/app/views/css/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/app/views/css/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/app/views/gameBoy.html":
/*!************************************!*\
  !*** ./src/app/views/gameBoy.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"sombra\">\r\n    <div class=\"player\" data-src=\"\">\r\n        <div class=\"contorno-video\">\r\n            <div class=\"video\">\r\n                <div class=\"progress\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"controls\">\r\n            <div class=\"circulos\">\r\n                <div class=\"fila1\">\r\n                    <div class=\"play\"><i class=\"play\"></i></div>\r\n                </div>\r\n                <div class=\"fila2\">\r\n                    <div class=\"pause\"><i class=\"pause\"></i></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"flechas\">\r\n                <div class=\"fila1\">\r\n                    <div class=\"arriba\"></div>\r\n                </div>\r\n                <div class=\"fila2\">\r\n                    <div class=\"izquierda\"><i class=\"izquierda\"></i></div>\r\n                    <div class=\"centro\"></div>\r\n                    <div class=\"derecha\"><i class=\"derecha\"></i></div>\r\n                </div>\r\n                <div class=\"fila3\">\r\n                    <div class=\"abajo\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"controls2\">\r\n            <div class=\"fila1\">\r\n                <div class=\"start\"></div>\r\n                <div class=\"pausa\"></div>\r\n            </div>\r\n            <div class=\"fila2\">\r\n                <div class=\"audio\">\r\n                    <div class=\"fila2\">\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n\r\n                    </div>\r\n                    <div class=\"fila1\">\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                    </div>\r\n                    <div class=\"fila1\">\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                    </div>\r\n                    <div class=\"fila1\">\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                    </div>\r\n                    <div class=\"fila1\">\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                    </div>\r\n                    <div class=\"fila1\">\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                    </div>\r\n                    <div class=\"fila2\">\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                        <div class=\"orificio\"></div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./app/views/app */ "./src/app/views/app.ts");
__webpack_require__(/*! ./app/views/css/styles.css */ "./src/app/views/css/styles.css");
__webpack_require__(/*! ../output/app/views/js/main */ "./output/app/views/js/main.js");
__webpack_require__(/*! ../output/app/views/js/AudioPlayer */ "./output/app/views/js/AudioPlayer.js");
__webpack_require__(/*! ./app/views/assets/covers/gif2.gif */ "./src/app/views/assets/covers/gif2.gif");
__webpack_require__(/*! ./app/views/assets/covers/gif3.gif */ "./src/app/views/assets/covers/gif3.gif");
__webpack_require__(/*! ./app/views/assets/covers/gif4.gif */ "./src/app/views/assets/covers/gif4.gif");
__webpack_require__(/*! ./app/views/assets/covers/gif5.gif */ "./src/app/views/assets/covers/gif5.gif");
__webpack_require__(/*! ./app/views/assets/songs/songFourth.mp3 */ "./src/app/views/assets/songs/songFourth.mp3");
__webpack_require__(/*! ./app/views/assets/songs/songOne.mp3 */ "./src/app/views/assets/songs/songOne.mp3");
__webpack_require__(/*! ./app/views/assets/songs/songThree.mp3 */ "./src/app/views/assets/songs/songThree.mp3");
__webpack_require__(/*! ./app/views/assets/songs/songTwo.mp3 */ "./src/app/views/assets/songs/songTwo.mp3");
// require('./app/views/css/styles.css');
// require('./app/views/css/index')
// require('../output/app/views/AudioPlayer')
// require('../output/app/views/main')


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC92aWV3cy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL291dHB1dC9hcHAvdmlld3MvanMvQXVkaW9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vb3V0cHV0L2FwcC92aWV3cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmlld3MvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmlld3MvYXNzZXRzL2NvdmVycy9naWYyLmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL2Fzc2V0cy9jb3ZlcnMvZ2lmMy5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC92aWV3cy9hc3NldHMvY292ZXJzL2dpZjQuZ2lmIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmlld3MvYXNzZXRzL2NvdmVycy9naWY1LmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL2Fzc2V0cy9zb25ncy9zb25nRm91cnRoLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL2Fzc2V0cy9zb25ncy9zb25nT25lLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL2Fzc2V0cy9zb25ncy9zb25nVGhyZWUubXAzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmlld3MvYXNzZXRzL3NvbmdzL3NvbmdUd28ubXAzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmlld3MvY3NzL3N0eWxlcy5jc3M/NjA1NCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL2dhbWVCb3kuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJBdWRpb1BsYXllciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJkb21FbGVtZW50IiwiX3RoaXMiLCJjYW5jaW9uZXMiLCJzcmMiLCJjb250YWRvciIsImF1ZGlvIiwiQXVkaW8iLCJjb250cm9scyIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwicHJvZ3Jlc3MiLCJpbml0Q29udHJvbHMiLCJvbnRpbWV1cGRhdGUiLCJ1cGRhdGVVSSIsInBsYXkiLCJwYXVzZSIsInNraXAiLCJsZWZ0U2tpcCIsImluaXRQbGF5IiwiX3RoaXMyIiwib25jbGljayIsImljb24iLCJpc1BsYXkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlzUGF1c2UiLCJpc1NraXAiLCJpc0xlZnRTa2lwIiwic2V0Q3VycmVudFRpbWUiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwidG90YWwiLCJjdXJyZW50Iiwic3R5bGUiLCJ3aWR0aCIsImNvbmNhdCIsInRoZW4iLCJlcnIiLCJ4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYmFja2dyb3VuZEltYWdlIiwiX3giLCJfeDIiLCJfeDMiLCJhbGVydCIsIl9BdWRpb1BsYXllciIsInJlcXVpcmUiLCJwbGF5ZXJzRWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGxh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Ozs7O0FDQXRFO0FBQWUsb0ZBQXVCLDZCQUE2QixFOzs7Ozs7Ozs7Ozs7QUNBbkU7QUFBZSxvRkFBdUIsK0JBQStCLEU7Ozs7Ozs7Ozs7OztBQ0FyRTtBQUFlLG9GQUF1Qiw2QkFBNkIsRTs7Ozs7Ozs7Ozs7QUNBbkUsVUFBVSxtQkFBTyxDQUFDLDRKQUFpRjtBQUNuRywwQkFBMEIsbUJBQU8sQ0FBQywySUFBZ0U7O0FBRWxHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQSxtQkFBTyxDQUFDLCtDQUFpQixDQUFDLENBQUM7QUFDM0IsbUJBQU8sQ0FBQyxrRUFBNEIsQ0FBQyxDQUFDO0FBQ3RDLG1CQUFPLENBQUMsa0VBQTZCLENBQUMsQ0FBQztBQUN2QyxtQkFBTyxDQUFDLGdGQUFvQyxDQUFDLENBQUM7QUFDOUMsbUJBQU8sQ0FBQyxrRkFBb0MsQ0FBQyxDQUFDO0FBQzlDLG1CQUFPLENBQUMsa0ZBQW9DLENBQUMsQ0FBQztBQUM5QyxtQkFBTyxDQUFDLGtGQUFvQyxDQUFDLENBQUM7QUFDOUMsbUJBQU8sQ0FBQyxrRkFBb0MsQ0FBQyxDQUFDO0FBQzlDLG1CQUFPLENBQUMsNEZBQXlDLENBQUMsQ0FBQztBQUNuRCxtQkFBTyxDQUFDLHNGQUFzQyxDQUFDLENBQUM7QUFDaEQsbUJBQU8sQ0FBQywwRkFBd0MsQ0FBQyxDQUFDO0FBQ2xELG1CQUFPLENBQUMsc0ZBQXNDLENBQUMsQ0FBQztBQUtoRCx5Q0FBeUM7QUFDekMsbUNBQW1DO0FBQ25DLDZDQUE2QztBQUM3QyxzQ0FBc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vYXNzZXRzL2NvdmVycy9naWY1LmdpZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTg5ODtcXG59XFxuXFxuLnNvbWJyYSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHdpZHRoOiA0MTBweDtcXG4gIGhlaWdodDogNzA4cHg7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1Y2NjYztcXG59XFxuLnNvbWJyYSAucGxheWVyIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250b3Juby12aWRlbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250b3Juby12aWRlbyAudmlkZW8ge1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyMzBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9scyAuY2lyY3Vsb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMgLmNpcmN1bG9zIC5maWxhMSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMgLmNpcmN1bG9zIC5maWxhMSAucGxheSB7XFxuICBjb2xvcjogZ3JlZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9scyAuY2lyY3Vsb3MgLmZpbGEyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzIC5jaXJjdWxvcyAuZmlsYTIgLnBhdXNlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBjb2xvcjogZ3JlZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzIC5mbGVjaGFzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNDBweDtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9scyAuZmxlY2hhcyAuZmlsYTEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzIC5mbGVjaGFzIC5maWxhMSAuYXJyaWJhIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzIC5mbGVjaGFzIC5maWxhMiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMgLmZsZWNoYXMgLmZpbGEyIC5penF1aWVyZGEge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9scyAuZmxlY2hhcyAuZmlsYTIgLmNlbnRybyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzIC5mbGVjaGFzIC5maWxhMiAuZGVyZWNoYSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMgLmZsZWNoYXMgLmZpbGEzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9scyAuZmxlY2hhcyAuZmlsYTMgLmFiYWpvIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9sczIgLmZpbGExIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMyIC5maWxhMSAuc3RhcnQge1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMyIC5maWxhMSAucGF1c2Ege1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMyIC5maWxhMiB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzMiAuZmlsYTIgLmF1ZGlvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMyIC5maWxhMiAuYXVkaW8gLmZpbGExIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9sczIgLmZpbGEyIC5hdWRpbyAuZmlsYTEgLm9yaWZpY2lvIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9sczIgLmZpbGEyIC5hdWRpbyAuZmlsYTIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMyIC5maWxhMiAuYXVkaW8gLmZpbGEyIC5vcmlmaWNpbyB7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2FwcC92aWV3cy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7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QUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQSxvQ0FBb0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5ODk4O1xcbn1cXG5cXG4uc29tYnJhIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDQxMHB4O1xcbiAgaGVpZ2h0OiA3MDhweDtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVjY2NjO1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA3MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRvcm5vLXZpZGVvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMzYwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRvcm5vLXZpZGVvIC52aWRlbyB7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDIzMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9jb3ZlcnMvZ2lmNS5naWYpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMgLmNpcmN1bG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzIC5jaXJjdWxvcyAuZmlsYTEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzIC5jaXJjdWxvcyAuZmlsYTEgLnBsYXkge1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMgLmNpcmN1bG9zIC5maWxhMiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9scyAuY2lyY3Vsb3MgLmZpbGEyIC5wYXVzZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9scyAuZmxlY2hhcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogOTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTQwcHg7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMgLmZsZWNoYXMgLmZpbGExIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9scyAuZmxlY2hhcyAuZmlsYTEgLmFycmliYSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9scyAuZmxlY2hhcyAuZmlsYTIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHVuc2V0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzIC5mbGVjaGFzIC5maWxhMiAuaXpxdWllcmRhIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMgLmZsZWNoYXMgLmZpbGEyIC5jZW50cm8ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9scyAuZmxlY2hhcyAuZmlsYTIgLmRlcmVjaGEge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzIC5mbGVjaGFzIC5maWxhMyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMgLmZsZWNoYXMgLmZpbGEzIC5hYmFqbyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9sczIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMyIC5maWxhMSB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzMiAuZmlsYTEgLnN0YXJ0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzMiAuZmlsYTEgLnBhdXNhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzMiAuZmlsYTIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNvbWJyYSAucGxheWVyIC5jb250cm9sczIgLmZpbGEyIC5hdWRpbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzMiAuZmlsYTIgLmF1ZGlvIC5maWxhMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMyIC5maWxhMiAuYXVkaW8gLmZpbGExIC5vcmlmaWNpbyB7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5zb21icmEgLnBsYXllciAuY29udHJvbHMyIC5maWxhMiAuYXVkaW8gLmZpbGEyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG4uc29tYnJhIC5wbGF5ZXIgLmNvbnRyb2xzMiAuZmlsYTIgLmF1ZGlvIC5maWxhMiAub3JpZmljaW8ge1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5jc3MubWFwICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5BdWRpb1BsYXllciA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgQXVkaW9QbGF5ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBdWRpb1BsYXllcihkb21FbGVtZW50KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb1BsYXllcik7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgIHRoaXMuY2FuY2lvbmVzID0gW1wiLi9hc3NldHMvc29uZ3Mvc29uZ09uZS5tcDNcIiwgXCIuL2Fzc2V0cy9zb25ncy9zb25nVHdvLm1wM1wiLCBcIi4vYXNzZXRzL3NvbmdzL3NvbmdUaHJlZS5tcDNcIiwgXCIuL2Fzc2V0cy9zb25ncy9zb25nRm91cnRoLm1wM1wiXTtcbiAgICB0aGlzLnNyYyA9IHRoaXMuY2FuY2lvbmVzO1xuICAgIHRoaXMuY29udGFkb3IgPSAwOyAvLyB0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvKHRoaXMuc3JjKTtcblxuICAgIHRoaXMuYXVkaW8gPSBuZXcgQXVkaW8odGhpcy5zcmNbMF0pO1xuICAgIHRoaXMuY29udHJvbHMgPSB7XG4gICAgICBkb21FbGVtZW50OiB0aGlzLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250cm9sc1wiKVxuICAgIH07XG4gICAgY29uc29sZS5sb2codGhpcy5zcmMpO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlbyAucHJvZ3Jlc3NcIik7XG4gICAgdGhpcy5pbml0Q29udHJvbHMoKTsgLy8gdGhpcy5pbml0UHJvZ3Jlc3NBY3Rpb25zKCk7XG5cbiAgICB0aGlzLmF1ZGlvLm9udGltZXVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnVwZGF0ZVVJKCk7XG4gICAgfTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBdWRpb1BsYXllciwgW3tcbiAgICBrZXk6IFwiaW5pdENvbnRyb2xzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRDb250cm9scygpIHtcbiAgICAgIHRoaXMuY29udHJvbHMucGxheSA9IHRoaXMuY29udHJvbHMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmN1bG9zIC5wbGF5XCIpO1xuICAgICAgdGhpcy5jb250cm9scy5wYXVzZSA9IHRoaXMuY29udHJvbHMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmN1bG9zIC5wYXVzZVwiKTtcbiAgICAgIHRoaXMuY29udHJvbHMuc2tpcCA9IHRoaXMuY29udHJvbHMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsZWNoYXMgLmRlcmVjaGFcIik7XG4gICAgICB0aGlzLmNvbnRyb2xzLmxlZnRTa2lwID0gdGhpcy5jb250cm9scy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmxlY2hhcyAuaXpxdWllcmRhXCIpO1xuXG4gICAgICBpZiAodGhpcy5jb250cm9scy5wbGF5KSB7XG4gICAgICAgIHRoaXMuaW5pdFBsYXkodGhpcy5jb250cm9scy5wbGF5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29udHJvbHMucGF1c2UpIHtcbiAgICAgICAgdGhpcy5pbml0UGxheSh0aGlzLmNvbnRyb2xzLnBhdXNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29udHJvbHMuc2tpcCkge1xuICAgICAgICB0aGlzLmluaXRQbGF5KHRoaXMuY29udHJvbHMuc2tpcCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbnRyb2xzLmxlZnRTa2lwKSB7XG4gICAgICAgIHRoaXMuaW5pdFBsYXkodGhpcy5jb250cm9scy5sZWZ0U2tpcCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluaXRQbGF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRQbGF5KGRvbUVsZW1lbnQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImVudHJvXCIpO1xuXG4gICAgICBkb21FbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpY29uID0gZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coaWNvbik7XG4gICAgICAgIHZhciBpc1BsYXkgPSBpY29uLmNsYXNzTGlzdC5jb250YWlucyhcInBsYXlcIik7XG4gICAgICAgIHZhciBpc1BhdXNlID0gaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJwYXVzZVwiKTtcbiAgICAgICAgdmFyIGlzU2tpcCA9IGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVyZWNoYVwiKTtcbiAgICAgICAgdmFyIGlzTGVmdFNraXAgPSBpY29uLmNsYXNzTGlzdC5jb250YWlucyhcIml6cXVpZXJkYVwiKTtcblxuICAgICAgICBpZiAoaXNQbGF5KSB7XG4gICAgICAgICAgX3RoaXMyLnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1BhdXNlKSB7XG4gICAgICAgICAgX3RoaXMyLnBhdXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTa2lwKSB7XG4gICAgICAgICAgX3RoaXMyLnNraXAoKTtcblxuICAgICAgICAgICsrX3RoaXMyLmNvbnRhZG9yO1xuICAgICAgICAgIGNvbnNvbGUubG9nKF90aGlzMi5jb250YWRvcik7XG5cbiAgICAgICAgICBfdGhpczIuc2tpcChfdGhpczIuY29udGFkb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTGVmdFNraXApIHtcbiAgICAgICAgICBfdGhpczIuc2tpcCgpO1xuXG4gICAgICAgICAgLS1fdGhpczIuY29udGFkb3I7XG4gICAgICAgICAgY29uc29sZS5sb2coX3RoaXMyLmNvbnRhZG9yKTtcblxuICAgICAgICAgIF90aGlzMi5za2lwKF90aGlzMi5jb250YWRvcik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSAvLyBpbml0UHJvZ3Jlc3NBY3Rpb25zKCl7XG4gICAgLy8gICAgIGNvbnN0IGNvdmVyID0gdGhpcy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9cIilcbiAgICAvLyAgICAgY292ZXIub25jbGljayA9IChlKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCB4ID0gZS5vZmZzZXRYO1xuICAgIC8vICAgICAgICAgY29uc3QgdG90YWxYID0gY292ZXIuY2xpZW50V2lkdGg7XG4gICAgLy8gICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHgvdG90YWxYO1xuICAgIC8vICAgICAgICAgdGhpcy5zZXRDdXJyZW50VGltZShwcm9ncmVzcylcbiAgICAvLyAgICAgfTtcbiAgICAvLyB9XG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRDdXJyZW50VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDdXJyZW50VGltZShwcm9ncmVzcykge1xuICAgICAgdGhpcy5hdWRpby5jdXJyZW50VGltZSA9IHRoaXMuYXVkaW8uZHVyYXRpb24gKiBwcm9ncmVzcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlVUlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlVUkoKSB7XG4gICAgICB2YXIgdG90YWwgPSB0aGlzLmF1ZGlvLmR1cmF0aW9uO1xuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmF1ZGlvLmN1cnJlbnRUaW1lO1xuICAgICAgdmFyIHByb2dyZXNzID0gY3VycmVudCAvIHRvdGFsICogMTAwO1xuICAgICAgdGhpcy5wcm9ncmVzcy5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KHByb2dyZXNzLCBcIiVcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBsYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHRoaXMuYXVkaW8ucGxheSgpLnRoZW4oKVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiRXJyb3IgYWwgcmVwcm9kdWNpciBlbCBhcmNoaXZvOiBcIi5jb25jYXQoZXJyKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGF1c2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICB0aGlzLmF1ZGlvLnBhdXNlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNraXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2tpcChjb250YWRvcikge1xuICAgICAgaWYgKGNvbnRhZG9yID09IDApIHtcbiAgICAgICAgaWYgKCFjb250YWRvcikge1xuICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInZpZGVvXCIpWzBdO1xuICAgICAgICB4LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCI7XG4gICAgICAgIHRoaXMucGxheSh0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvKHRoaXMuc3JjWzBdKSk7XG4gICAgICB9IGVsc2UgaWYgKGNvbnRhZG9yID09IDEpIHtcbiAgICAgICAgaWYgKGNvbnRhZG9yKSB7XG4gICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInZpZGVvXCIpWzBdO1xuICAgICAgICBfeC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCguL2Fzc2V0cy9jb3ZlcnMvZ2lmNC5naWYpXCI7XG4gICAgICAgIHRoaXMucGxheSh0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvKHRoaXMuc3JjWzFdKSk7XG4gICAgICB9IGVsc2UgaWYgKGNvbnRhZG9yID09IDIpIHtcbiAgICAgICAgaWYgKGNvbnRhZG9yKSB7XG4gICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF94MiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ2aWRlb1wiKVswXTtcbiAgICAgICAgX3gyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKC4vYXNzZXRzL2NvdmVycy9naWYyLmdpZilcIjtcbiAgICAgICAgdGhpcy5wbGF5KHRoaXMuYXVkaW8gPSBuZXcgQXVkaW8odGhpcy5zcmNbMl0pKTtcbiAgICAgIH0gZWxzZSBpZiAoY29udGFkb3IgPT0gMykge1xuICAgICAgICBpZiAoY29udGFkb3IpIHtcbiAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3gzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInZpZGVvXCIpWzBdO1xuICAgICAgICBfeDMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoLi9hc3NldHMvY292ZXJzL2dpZjMuZ2lmKVwiO1xuICAgICAgICB0aGlzLnBsYXkodGhpcy5hdWRpbyA9IG5ldyBBdWRpbyh0aGlzLnNyY1szXSkpO1xuICAgICAgfSBlbHNlIGlmIChjb250YWRvciA+IDMpIHtcbiAgICAgICAgYWxlcnQoXCJubyBoYXkgbcOhcyBjYW5jaW9uZXMgZW4gbGEgY29sYVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXVkaW9QbGF5ZXI7XG59KCk7XG5cbmV4cG9ydHMuQXVkaW9QbGF5ZXIgPSBBdWRpb1BsYXllcjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9BdWRpb1BsYXllciA9IHJlcXVpcmUoXCIuL0F1ZGlvUGxheWVyXCIpO1xuXG52YXIgcGxheWVyc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXJcIik7XG52YXIgcGxheWVycyA9IFtdO1xucGxheWVyc0VsLmZvckVhY2goZnVuY3Rpb24gKHBsYXllcikge1xuICBwbGF5ZXJzLnB1c2gobmV3IF9BdWRpb1BsYXllci5BdWRpb1BsYXllcihwbGF5ZXIpKTtcbn0pOyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuY29uc3QgZ2FtZWJveSA9IHJlcXVpcmUoJy4vZ2FtZUJveS5odG1sJyk7XHJcbmltcG9ydCAgJy4vY3NzL3N0eWxlcy5jc3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFxyXG4gICAgLy8gZWwgY2FyYWN0w6lyIF8gaGFjZSByZWZlcmVuY2lhIGEgdW5hIGJpYmxpb3RlY2EgbGxhbWFkYSBsb2Rhc2ggcXVlIHNlcsOhIG11eSDDunRpbFxyXG4gICAgZWxlbWVudC5pZCA9IFwiY29udGVuZWRvclwiO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5jb25zdCBjb250ZW5lZG9yID0gY29tcG9uZW50KCk7XHJcbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChnYW1lYm95KTtcclxuY29udGVuZWRvci5hcHBlbmRDaGlsZChodG1sKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW5lZG9yKTtcclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY292ZXJzL2dpZjIuZ2lmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9jb3ZlcnMvZ2lmMy5naWZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2NvdmVycy9naWY0LmdpZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY292ZXJzL2dpZjUuZ2lmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zb25ncy9zb25nRm91cnRoLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvc29uZ3Mvc29uZ09uZS5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3NvbmdzL3NvbmdUaHJlZS5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3NvbmdzL3NvbmdUd28ubXAzXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInNvbWJyYVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBsYXllclxcXCIgZGF0YS1zcmM9XFxcIlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250b3Juby12aWRlb1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzc1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xzXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaXJjdWxvc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbGExXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBsYXlcXFwiPjxpIGNsYXNzPVxcXCJwbGF5XFxcIj48L2k+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxhMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYXVzZVxcXCI+PGkgY2xhc3M9XFxcInBhdXNlXFxcIj48L2k+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZWNoYXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxhMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhcnJpYmFcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsYTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXpxdWllcmRhXFxcIj48aSBjbGFzcz1cXFwiaXpxdWllcmRhXFxcIj48L2k+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjZW50cm9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVyZWNoYVxcXCI+PGkgY2xhc3M9XFxcImRlcmVjaGFcXFwiPjwvaT48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbGEzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFiYWpvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xzMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsYTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGFydFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhdXNhXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxhMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImF1ZGlvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbGEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsYTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbGExXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxhMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsYTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbGExXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxhMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JpZmljaW9cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yaWZpY2lvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmlmaWNpb1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwicmVxdWlyZSgnLi9hcHAvdmlld3MvYXBwJyk7XHJcbnJlcXVpcmUoJy4vYXBwL3ZpZXdzL2Nzcy9zdHlsZXMuY3NzJyk7XHJcbnJlcXVpcmUoJy4uL291dHB1dC9hcHAvdmlld3MvanMvbWFpbicpO1xyXG5yZXF1aXJlKCcuLi9vdXRwdXQvYXBwL3ZpZXdzL2pzL0F1ZGlvUGxheWVyJyk7XHJcbnJlcXVpcmUoJy4vYXBwL3ZpZXdzL2Fzc2V0cy9jb3ZlcnMvZ2lmMi5naWYnKTtcclxucmVxdWlyZSgnLi9hcHAvdmlld3MvYXNzZXRzL2NvdmVycy9naWYzLmdpZicpO1xyXG5yZXF1aXJlKCcuL2FwcC92aWV3cy9hc3NldHMvY292ZXJzL2dpZjQuZ2lmJyk7XHJcbnJlcXVpcmUoJy4vYXBwL3ZpZXdzL2Fzc2V0cy9jb3ZlcnMvZ2lmNS5naWYnKTtcclxucmVxdWlyZSgnLi9hcHAvdmlld3MvYXNzZXRzL3NvbmdzL3NvbmdGb3VydGgubXAzJyk7XHJcbnJlcXVpcmUoJy4vYXBwL3ZpZXdzL2Fzc2V0cy9zb25ncy9zb25nT25lLm1wMycpO1xyXG5yZXF1aXJlKCcuL2FwcC92aWV3cy9hc3NldHMvc29uZ3Mvc29uZ1RocmVlLm1wMycpO1xyXG5yZXF1aXJlKCcuL2FwcC92aWV3cy9hc3NldHMvc29uZ3Mvc29uZ1R3by5tcDMnKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIHJlcXVpcmUoJy4vYXBwL3ZpZXdzL2Nzcy9zdHlsZXMuY3NzJyk7XHJcbi8vIHJlcXVpcmUoJy4vYXBwL3ZpZXdzL2Nzcy9pbmRleCcpXHJcbi8vIHJlcXVpcmUoJy4uL291dHB1dC9hcHAvdmlld3MvQXVkaW9QbGF5ZXInKVxyXG4vLyByZXF1aXJlKCcuLi9vdXRwdXQvYXBwL3ZpZXdzL21haW4nKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9