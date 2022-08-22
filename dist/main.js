/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/lato-v23-latin/lato-v23-latin-regular.ttf */ "./src/fonts/lato-v23-latin/lato-v23-latin-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"Lato\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\r\n    font-weight: lighter;\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: \"Lato\";\r\n    color: white\r\n}\r\n\r\nhr {\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh1 {\r\n    font-weight: bold;\r\n    font-size: larger;\r\n}\r\n\r\n:root {\r\n    background: rgb(36, 41, 46);\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-rows: 1fr 6fr;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-areas:\r\n        \"title title\"\r\n        \"nav body\"\r\n    ;\r\n\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n.title {\r\n    grid-area: title;\r\n    background: rgb(35, 41, 44);\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center flex-start;\r\n    padding: 20px\r\n}\r\n\r\n.title>div,\r\n.title>div>span {\r\n    font-size: 36px;\r\n}\r\n\r\n.nav {\r\n    grid-area: nav;\r\n    background: rgb(29, 33, 37);\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center flex-start;\r\n    padding: 20px;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    gap: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.container,\r\n.container>span {\r\n    transition: 0.75s;\r\n}\r\n\r\n.container:hover,\r\n.container:hover>span {\r\n    color: rgb(0, 145, 200);\r\n    transform: scale(1.2);\r\n}\r\n\r\n.body {\r\n    grid-area: body;\r\n    background: rgb(36, 41, 46);\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    gap: 20px;\r\n    place-content: flex-start flex-start;\r\n    padding: 20px;\r\n}\r\n\r\nbutton {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    width: 200px;\r\n    height: 50px;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n    background: rgb(132, 17, 74);\r\n    border: 1px solid black;\r\n    color: white;\r\n    transition: .75s;\r\n}\r\n\r\nbutton:hover {\r\n    transform: scale(1.1);\r\n    background: rgb(0, 145, 200);\r\n    box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.75s);\r\n}\r\n\r\nbutton,\r\nbutton>span {\r\n    color: white;\r\n}\r\n\r\n.inboxContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n}\r\n\r\ninput {\r\n    background: rgb(36, 41, 46);\r\n    border: 1px solid rgb(132, 17, 74);\r\n    width: 100%;\r\n    height: 25px;\r\n    transition: 0.75s;\r\n    border-radius: 5px;\r\n    color: white;\r\n}\r\n\r\ninput:hover,\r\ninput:focus {\r\n    transform: scale(1.1);\r\n    background: rgb(0, 145, 200);\r\n    box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.75s);\r\n    outline-style: none;\r\n}\r\n\r\n.inputContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n}\r\n\r\n.taskContainer,\r\n.savedTaskContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n}\r\n\r\n.modal {\r\n    display: block;\r\n    /* Hidden by default */\r\n    position: fixed;\r\n    /* Stay in place */\r\n    z-index: 1;\r\n    /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    /* Full width */\r\n    height: 100%;\r\n    /* Full height */\r\n    overflow: auto;\r\n    /* Enable scroll if needed */\r\n    background-color: rgb(0, 0, 0);\r\n    /* Fallback color */\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: rgb(36, 41, 46);\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    margin: 15% auto;\r\n    /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid rgb(132, 17, 74);\r\n    min-width: 292px;\r\n    min-height: 183px;\r\n    max-width: 292px;\r\n    max-height: 183px;\r\n    color: white;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,0DAA2E;IAC3E,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,wBAAwB;IACxB,qBAAqB;IACrB,cAAc;IACd,oBAAoB;IACpB,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;;IAEd,qCAAqC;IACrC,mCAAmC;IACnC,mCAAmC;IACnC,kCAAkC;;IAElC,yBAAyB;IACzB,kCAAkC;;IAElC,oBAAoB;IACpB,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB;AACJ;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;IAC9B;;;IAGA;;IAEA,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC;AACJ;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,gCAAgC;IAChC,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,oCAAoC;IACpC,SAAS;IACT,gBAAgB;AACpB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;;IAEI,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,4BAA4B;IAC5B,YAAY;IACZ,YAAY;IACZ,SAAS;IACT,kBAAkB;IAClB,4BAA4B;IAC5B,uBAAuB;IACvB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,4BAA4B;IAC5B,oDAAoD;AACxD;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;AACxC;;AAEA;IACI,2BAA2B;IAC3B,kCAAkC;IAClC,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;;IAEI,qBAAqB;IACrB,4BAA4B;IAC5B,oDAAoD;IACpD,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;AACxC;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,OAAO;IACP,MAAM;IACN,WAAW;IACX,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,4BAA4B;IAC5B,8BAA8B;IAC9B,mBAAmB;IACnB,oCAAoC;IACpC,qBAAqB;AACzB;;AAEA,sBAAsB;AACtB;IACI,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,gBAAgB;IAChB,kCAAkC;IAClC,aAAa;IACb,kCAAkC;IAClC,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,SAAS;IACT,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: \"Lato\";\r\n    src: url(\"./fonts/lato-v23-latin/lato-v23-latin-regular.ttf\") format(\"ttf\");\r\n    font-weight: lighter;\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: \"Lato\";\r\n    color: white\r\n}\r\n\r\nhr {\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh1 {\r\n    font-weight: bold;\r\n    font-size: larger;\r\n}\r\n\r\n:root {\r\n    background: rgb(36, 41, 46);\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-rows: 1fr 6fr;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-areas:\r\n        \"title title\"\r\n        \"nav body\"\r\n    ;\r\n\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n.title {\r\n    grid-area: title;\r\n    background: rgb(35, 41, 44);\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center flex-start;\r\n    padding: 20px\r\n}\r\n\r\n.title>div,\r\n.title>div>span {\r\n    font-size: 36px;\r\n}\r\n\r\n.nav {\r\n    grid-area: nav;\r\n    background: rgb(29, 33, 37);\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center flex-start;\r\n    padding: 20px;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    gap: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.container,\r\n.container>span {\r\n    transition: 0.75s;\r\n}\r\n\r\n.container:hover,\r\n.container:hover>span {\r\n    color: rgb(0, 145, 200);\r\n    transform: scale(1.2);\r\n}\r\n\r\n.body {\r\n    grid-area: body;\r\n    background: rgb(36, 41, 46);\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    gap: 20px;\r\n    place-content: flex-start flex-start;\r\n    padding: 20px;\r\n}\r\n\r\nbutton {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    width: 200px;\r\n    height: 50px;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n    background: rgb(132, 17, 74);\r\n    border: 1px solid black;\r\n    color: white;\r\n    transition: .75s;\r\n}\r\n\r\nbutton:hover {\r\n    transform: scale(1.1);\r\n    background: rgb(0, 145, 200);\r\n    box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.75s);\r\n}\r\n\r\nbutton,\r\nbutton>span {\r\n    color: white;\r\n}\r\n\r\n.inboxContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n}\r\n\r\ninput {\r\n    background: rgb(36, 41, 46);\r\n    border: 1px solid rgb(132, 17, 74);\r\n    width: 100%;\r\n    height: 25px;\r\n    transition: 0.75s;\r\n    border-radius: 5px;\r\n    color: white;\r\n}\r\n\r\ninput:hover,\r\ninput:focus {\r\n    transform: scale(1.1);\r\n    background: rgb(0, 145, 200);\r\n    box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.75s);\r\n    outline-style: none;\r\n}\r\n\r\n.inputContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n}\r\n\r\n.taskContainer,\r\n.savedTaskContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n}\r\n\r\n.modal {\r\n    display: block;\r\n    /* Hidden by default */\r\n    position: fixed;\r\n    /* Stay in place */\r\n    z-index: 1;\r\n    /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    /* Full width */\r\n    height: 100%;\r\n    /* Full height */\r\n    overflow: auto;\r\n    /* Enable scroll if needed */\r\n    background-color: rgb(0, 0, 0);\r\n    /* Fallback color */\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: rgb(36, 41, 46);\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    margin: 15% auto;\r\n    /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid rgb(132, 17, 74);\r\n    min-width: 292px;\r\n    min-height: 183px;\r\n    max-width: 292px;\r\n    max-height: 183px;\r\n    color: white;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createBody.js":
/*!***************************!*\
  !*** ./src/createBody.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendTasksFromLocalStorage": () => (/* binding */ appendTasksFromLocalStorage),
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createDividerLine": () => (/* binding */ createDividerLine),
/* harmony export */   "getBody": () => (/* binding */ getBody),
/* harmony export */   "receiverFunction": () => (/* binding */ receiverFunction),
/* harmony export */   "sectionId": () => (/* binding */ sectionId),
/* harmony export */   "taskName": () => (/* binding */ taskName)
/* harmony export */ });
/* harmony import */ var _inboxLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inboxLogic.js */ "./src/inboxLogic.js");


let sectionId = "Inbox";

let taskName = "";

const getContent = () => {
    return document.getElementById("content");
}

const getBody = () => {
    return document.querySelector(".body");
}

function appendTasksFromLocalStorage(i, string) {
    const stringArray = string.split(",");
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("savedTaskContainer");
    taskContainer.setAttribute("id", i + "TC");

    taskContainer.innerHTML = "Title: " + stringArray[0] + '<br>' + '<br>' +
        "Task: " + stringArray[1] + '<br>' + '<br>' +
        "Due Date: " + stringArray[2];

    taskContainer.append(createButton("delete_forever", "Delete", _inboxLogic_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask, i, false), createDividerLine());

    getBody().append(taskContainer);
}

function receiverFunction(id) {
    // alert(id);
    sectionId = id;
    clearBody();
    appendToBody();
}

const createTitle = () => {
    const title = document.createElement("h1");
    title.innerHTML = sectionId;
    return title;
}

function clearBody() {
    while (getBody().firstChild)
        getBody().removeChild(getBody().firstChild);
}

const addIcon = (icon_name) => {
    const span = document.createElement("span");
    span.classList.add("material-icons");
    span.innerHTML = icon_name;
    return span;
}

const createInput = (input_type,
    id,
    listener_bool,
    listener_type,
    listener_function
) => {
    const input = document.createElement("input");
    input.type = input_type;
    input.required = true;
    input.setAttribute("id", id);

    if (listener_bool)
        input.addEventListener(listener_type, listener_function);

    return input;
}

const createLabel = (id) => {
    const label = document.createElement("label");
    label.setAttribute("id", id);
    label.for = taskName;
    label.innerHTML = taskName;
    return label;
}

const createInputContainer = (label, task, date, button) => {
    const container = document.createElement("div");
    container.classList.add("inputContainer");
    container.append(label, task, date, button);
    return container;
}

function closeModal() {
    if (document.getElementById("createTaskForm").reportValidity()) {
        document.querySelector(".modal").remove();
        addTask();
    }
}

function setTaskName() {
    taskName = this.value;
}

function createTaskModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    const form = document.createElement("form");
    form.setAttribute("id", "createTaskForm");
    form.append(
        "Please name your task...",
        createInput("text", "createTask", true, "input", setTaskName),
        createButton("check", "Create Task", closeModal, "closeModalButton", true)
    );

    modalContent.append(form);
    modal.appendChild(modalContent);
    getContent().append(modal);
}

const createButton = (icon, text, funct, id, submitButton) => {
    const button = document.createElement("button");
    button.setAttribute("id", id);
    if (submitButton)
        button.type = "submit";
    button.append(addIcon(icon));
    button.append(text);
    button.addEventListener("mousedown", funct);
    button.classList.add("button")
    return button;
}

const createDividerLine = () => {
    const dividerLine = document.createElement("hr");
    return dividerLine;
}

function addTask() {
    // alert("Add Task!");
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("id", taskName + "TC");
    taskContainer.classList.add("taskContainer");
    const form = document.createElement("form");
    form.setAttribute("id", taskName + "Form");
    form.append(createInputContainer(createLabel(taskName + "Label"), createInput("text", taskName + "Task", false, null, null), createInput("date", taskName + "Date", false, null, null), createButton("save", "Save", _inboxLogic_js__WEBPACK_IMPORTED_MODULE_0__.save, taskName, true)));
    taskContainer.append(form);
    getBody().append(taskContainer);
}

const createInboxObject = () => {
    const inboxContainer = document.createElement("div");
    inboxContainer.classList.add("inboxContainer");
    inboxContainer.append(createButton("add", "Add Task", createTaskModal, "addTaskButton", false));
    return inboxContainer;
}

function appendToBody() {
    if (sectionId === "Inbox")
        getBody().append(createTitle(), createInboxObject());
    else if (sectionId === "Today" || sectionId === "This Week")
        getBody().append(createTitle());

    (0,_inboxLogic_js__WEBPACK_IMPORTED_MODULE_0__.loadTasksFromLocalStorage)();
}

appendToBody();



/***/ }),

/***/ "./src/createGrid.js":
/*!***************************!*\
  !*** ./src/createGrid.js ***!
  \***************************/
/***/ (() => {

const getContent = () => {
    return document.getElementById("content");
}

const createContent = (grid_area) => {
    const content = document.createElement("div");
    content.classList.add(grid_area);
    return content;
}

function appendToContent() {
    getContent().append(createContent("title"));
    getContent().append(createContent("nav"));
    getContent().append(createContent("body"));
}

appendToContent();

/***/ }),

/***/ "./src/createNav.js":
/*!**************************!*\
  !*** ./src/createNav.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBody */ "./src/createBody.js");

const getNav = () => {
    return document.querySelector(".nav");
}

const addIcon = (icon_name) => {
    const span = document.createElement("span");
    span.classList.add("material-icons");
    span.innerHTML = icon_name;
    return span;
}

const addText = (text) => {
    const textNode = document.createTextNode(text);
    return textNode;
}

function listenerFunction() {
    // alert(this.getAttribute("id"));
    ;(0,_createBody__WEBPACK_IMPORTED_MODULE_0__.receiverFunction)(this.getAttribute("id"));
}

const addEvtListener = (element) => {
    element.addEventListener("mousedown", listenerFunction);
}

const createNavObject = (icon_name, text) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("id", text);
    addEvtListener(container);
    container.append(addIcon(icon_name), addText(text));
    return container;
}

const createDividerLine = () => {
    const dividerLine = document.createElement("hr");
    return dividerLine;
}

const createH1 = (text) => {
    const h1 = document.createElement("h1");
    h1.innerHTML = text;
    return h1;
}

function appendToNav() {
    getNav().append(createNavObject("inbox", "Inbox"));
    getNav().append(createNavObject("event", "Today"));
    getNav().append(createNavObject("date_range", "This Week"));
    getNav().append(createDividerLine());
}

appendToNav();

/***/ }),

/***/ "./src/createTitle.js":
/*!****************************!*\
  !*** ./src/createTitle.js ***!
  \****************************/
/***/ (() => {

const getTitle = () => {
    return document.querySelector(".title");
}

const addIcon = (icon_name) => {
    const span = document.createElement("span");
    span.classList.add("material-icons");
    span.innerHTML = icon_name;
    return span;
}

const addText = (text) => {
    const textNode = document.createTextNode(text);
    return textNode;
}

const createTitleObject = (icon_name, text) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.append(addIcon(icon_name), addText(text));
    return container;
}

function appendToTitle() {
    getTitle().append(createTitleObject("task_alt", "Todo List"));
}

appendToTitle();

/***/ }),

/***/ "./src/inboxLogic.js":
/*!***************************!*\
  !*** ./src/inboxLogic.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "loadTasksFromLocalStorage": () => (/* binding */ loadTasksFromLocalStorage),
/* harmony export */   "save": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _createBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBody.js */ "./src/createBody.js");


const tasks = [];
let numberOfLocalTasks = 0;

const task = {
    title: "",
    task: "",
    date: ""
}

const getIDByTasksLength = () => {
    return tasks.length - 1;
}

function addLocalStorageToTasks() {
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            const stringArray = localStorage.getItem(i).split(",");

            const tempTask = {
                title: "",
                task: "",
                date: ""
            }

            tempTask.title = stringArray[0];
            tempTask.task = stringArray[1];
            tempTask.date = stringArray[2];

            tasks.push(tempTask);
        }
        numberOfLocalTasks = tasks.length;
    }

}

function saveToLocalStorage() {
    localStorage.clear();

    for (let i = 0; i < tasks.length; i++)
        localStorage.setItem(i, tasks[i].title + "," + tasks[i].task + "," + tasks[i].date);

}

function pushTasks(task) {
    tasks.push(task);

    // console.table(task);

    saveToLocalStorage();
}

function spliceTasks(id) {
    tasks.splice(id, 1);
}

const getTasks = () => {
    return tasks;
}

const getNumberOfLocalTasks = () => {
    return numberOfLocalTasks;
}

function appendSavedTask(id, task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("savedTaskContainer");
    taskContainer.setAttribute("id", id + "TC");
    taskContainer.innerHTML = "Title: " + task.title + '<br>' + '<br>' +
        "Task: " + task.task + '<br>' + '<br>' +
        "Due Date: " + task.date;

    taskContainer.append((0,_createBody_js__WEBPACK_IMPORTED_MODULE_0__.createButton)("delete_forever", "Delete", deleteTask, id + "Delete", false), (0,_createBody_js__WEBPACK_IMPORTED_MODULE_0__.createDividerLine)());
    (0,_createBody_js__WEBPACK_IMPORTED_MODULE_0__.getBody)().append(taskContainer);
}

function save() {
    const form = document.getElementById(this.id + "Form");

    if (form.reportValidity()) {
        // alert(form.reportValidity());
        const newTask = Object.create(task);

        newTask.title = document.getElementById(this.id + "Label").textContent;
        newTask.task = document.getElementById(this.id + "Task").value;
        newTask.date = document.getElementById(this.id + "Date").value;

        pushTasks(newTask);
        deleteTC(this.id + "TC");
        appendSavedTask(getIDByTasksLength(), newTask);
    }
}

function deleteTC(id) {
    document.getElementById(id).remove();
}

function resetIDs() {
    const taskContainers = document.getElementsByClassName("savedTaskContainer");

    for (let i = getNumberOfLocalTasks(); i < getTasks().length; i++)
        taskContainers[i].setAttribute("id", i + "TC");

    saveToLocalStorage();
}

function deleteTask() {
    const stringArray = this.id.split("D");
    document.getElementById(stringArray[0] + "TC").remove();
    spliceTasks(stringArray[0]);
    resetIDs();
}

const checkTodayTask = (localStorageString) => {
    const stringArray = localStorageString.split(",");
    const dateArray = stringArray[2].split("-");

    let today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    if (parseInt(dateArray[0]) === parseInt(year) &&
        parseInt(dateArray[1] - 1) === parseInt(month) &&
        parseInt(dateArray[2]) === parseInt(day)
    )
        return true;
    else
        return false;
}

const checkWeekTask = (localStorageString) => {
    const stringArray = localStorageString.split(",");
    const dateArray = stringArray[2].split("-");

    let today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    if (parseInt(dateArray[0]) === parseInt(year) &&
        parseInt(dateArray[1] - 1) === parseInt(month) &&
        parseInt(dateArray[2]) <= parseInt(day + 6))
        return true;
    else
        return false;
}

function loadTasksFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        if (_createBody_js__WEBPACK_IMPORTED_MODULE_0__.sectionId === "Inbox")
            (0,_createBody_js__WEBPACK_IMPORTED_MODULE_0__.appendTasksFromLocalStorage)(i, localStorage.getItem(i))
        else if (_createBody_js__WEBPACK_IMPORTED_MODULE_0__.sectionId === "Today") {

            if (checkTodayTask(localStorage.getItem(i)))
                (0,_createBody_js__WEBPACK_IMPORTED_MODULE_0__.appendTasksFromLocalStorage)(i, localStorage.getItem(i));
        }
        else if (_createBody_js__WEBPACK_IMPORTED_MODULE_0__.sectionId === "This Week") {
            if (checkWeekTask(localStorage.getItem(i)))
                (0,_createBody_js__WEBPACK_IMPORTED_MODULE_0__.appendTasksFromLocalStorage)(i, localStorage.getItem(i));
        }
    }
}

// window.onload = localStorage.clear();
window.onload = addLocalStorageToTasks();



/***/ }),

/***/ "./src/fonts/lato-v23-latin/lato-v23-latin-regular.ttf":
/*!*************************************************************!*\
  !*** ./src/fonts/lato-v23-latin/lato-v23-latin-regular.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cf2315b218ab9f01217d.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createGrid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGrid.js */ "./src/createGrid.js");
/* harmony import */ var _createGrid_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_createGrid_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _createNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createNav.js */ "./src/createNav.js");
/* harmony import */ var _createTitle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTitle.js */ "./src/createTitle.js");
/* harmony import */ var _createTitle_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_createTitle_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _createBody_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBody.js */ "./src/createBody.js");
/* harmony import */ var _inboxLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inboxLogic */ "./src/inboxLogic.js");






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseU5BQXlOLGdEQUFJO0FBQzdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDREQUFZLGdFQUFnRSxpRUFBaUI7QUFDdEgsSUFBSSx1REFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsdUJBQXVCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0MsWUFBWSxxREFBUztBQUNyQixZQUFZLDJFQUEyQjtBQUN2QyxpQkFBaUIscURBQVM7QUFDMUI7QUFDQTtBQUNBLGdCQUFnQiwyRUFBMkI7QUFDM0M7QUFDQSxpQkFBaUIscURBQVM7QUFDMUI7QUFDQSxnQkFBZ0IsMkVBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3S0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNJO0FBQ0Q7QUFDRTtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3RfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3RfdG9kb19saXN0Ly4vc3JjL2NyZWF0ZUJvZHkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3QvLi9zcmMvY3JlYXRlR3JpZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG9fbGlzdC8uL3NyYy9jcmVhdGVOYXYuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3QvLi9zcmMvY3JlYXRlVGl0bGUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3QvLi9zcmMvaW5ib3hMb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3RfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3RfdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2xhdG8tdjIzLWxhdGluL2xhdG8tdjIzLWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLWljb25zIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cXHJcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgSUUuICovXFxyXFxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXHJcXG4gICAgY29sb3I6IHdoaXRlXFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgICAgXFxcInRpdGxlIHRpdGxlXFxcIlxcclxcbiAgICAgICAgXFxcIm5hdiBib2R5XFxcIlxcclxcbiAgICA7XFxyXFxuXFxyXFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDM1LCA0MSwgNDQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMjBweFxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGU+ZGl2LFxcclxcbi50aXRsZT5kaXY+c3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjksIDMzLCAzNyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lcixcXHJcXG4uY29udGFpbmVyPnNwYW4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lcjpob3ZlcixcXHJcXG4uY29udGFpbmVyOmhvdmVyPnNwYW4ge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keSB7XFxyXFxuICAgIGdyaWQtYXJlYTogYm9keTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTMyLCAxNywgNzQpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDE0NSwgMjAwLCAwLjc1cyk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5idXR0b24+c3BhbiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmluYm94Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpob3ZlcixcXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ1LCAyMDAsIDAuNzVzKTtcXHJcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250YWluZXIsXFxyXFxuLnNhdmVkVGFza0NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICAvKiBTaXQgb24gdG9wICovXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgICAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXHJcXG4gICAgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gICAgbWluLXdpZHRoOiAyOTJweDtcXHJcXG4gICAgbWluLWhlaWdodDogMTgzcHg7XFxyXFxuICAgIG1heC13aWR0aDogMjkycHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDE4M3B4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDBEQUEyRTtJQUMzRSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7O0lBRWQscUNBQXFDO0lBQ3JDLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsa0NBQWtDOztJQUVsQyx5QkFBeUI7SUFDekIsa0NBQWtDOztJQUVsQyxvQkFBb0I7SUFDcEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qjs7O0lBR0E7O0lBRUEsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQztBQUNKOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLG9EQUFvRDtBQUN4RDs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsb0RBQW9EO0lBQ3BELG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxxQkFBcUI7QUFDekI7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuL2ZvbnRzL2xhdG8tdjIzLWxhdGluL2xhdG8tdjIzLWxhdGluLXJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1pY29ucyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcblxcclxcbiAgICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxyXFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcclxcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZVxcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgIFxcXCJ0aXRsZSB0aXRsZVxcXCJcXHJcXG4gICAgICAgIFxcXCJuYXYgYm9keVxcXCJcXHJcXG4gICAgO1xcclxcblxcclxcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzNSwgNDEsIDQ0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHhcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlPmRpdixcXHJcXG4udGl0bGU+ZGl2PnNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDI5LCAzMywgMzcpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIsXFxyXFxuLmNvbnRhaW5lcj5zcGFuIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXI6aG92ZXIsXFxyXFxuLmNvbnRhaW5lcjpob3Zlcj5zcGFuIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHkge1xcclxcbiAgICBncmlkLWFyZWE6IGJvZHk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAxNDUsIDIwMCwgMC43NXMpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuYnV0dG9uPnNwYW4ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5pbmJveENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6aG92ZXIsXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDE0NSwgMjAwLCAwLjc1cyk7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGFpbmVyLFxcclxcbi5zYXZlZFRhc2tDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIC8qIFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiBGdWxsIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxyXFxufVxcclxcblxcclxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDQxLCA0Nik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxyXFxuICAgIC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICAgIG1pbi13aWR0aDogMjkycHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDE4M3B4O1xcclxcbiAgICBtYXgtd2lkdGg6IDI5MnB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxODNweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XHJcbiAgICBzYXZlLFxyXG4gICAgZGVsZXRlVGFzayxcclxuICAgIGxvYWRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2VcclxufSBmcm9tIFwiLi9pbmJveExvZ2ljLmpzXCI7XHJcblxyXG5sZXQgc2VjdGlvbklkID0gXCJJbmJveFwiO1xyXG5cclxubGV0IHRhc2tOYW1lID0gXCJcIjtcclxuXHJcbmNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG59XHJcblxyXG5jb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kVGFza3NGcm9tTG9jYWxTdG9yYWdlKGksIHN0cmluZykge1xyXG4gICAgY29uc3Qgc3RyaW5nQXJyYXkgPSBzdHJpbmcuc3BsaXQoXCIsXCIpO1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzYXZlZFRhc2tDb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGkgKyBcIlRDXCIpO1xyXG5cclxuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJUaXRsZTogXCIgKyBzdHJpbmdBcnJheVswXSArICc8YnI+JyArICc8YnI+JyArXHJcbiAgICAgICAgXCJUYXNrOiBcIiArIHN0cmluZ0FycmF5WzFdICsgJzxicj4nICsgJzxicj4nICtcclxuICAgICAgICBcIkR1ZSBEYXRlOiBcIiArIHN0cmluZ0FycmF5WzJdO1xyXG5cclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGNyZWF0ZUJ1dHRvbihcImRlbGV0ZV9mb3JldmVyXCIsIFwiRGVsZXRlXCIsIGRlbGV0ZVRhc2ssIGksIGZhbHNlKSwgY3JlYXRlRGl2aWRlckxpbmUoKSk7XHJcblxyXG4gICAgZ2V0Qm9keSgpLmFwcGVuZCh0YXNrQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVjZWl2ZXJGdW5jdGlvbihpZCkge1xyXG4gICAgLy8gYWxlcnQoaWQpO1xyXG4gICAgc2VjdGlvbklkID0gaWQ7XHJcbiAgICBjbGVhckJvZHkoKTtcclxuICAgIGFwcGVuZFRvQm9keSgpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUaXRsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gc2VjdGlvbklkO1xyXG4gICAgcmV0dXJuIHRpdGxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckJvZHkoKSB7XHJcbiAgICB3aGlsZSAoZ2V0Qm9keSgpLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgZ2V0Qm9keSgpLnJlbW92ZUNoaWxkKGdldEJvZHkoKS5maXJzdENoaWxkKTtcclxufVxyXG5cclxuY29uc3QgYWRkSWNvbiA9IChpY29uX25hbWUpID0+IHtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xyXG4gICAgc3Bhbi5pbm5lckhUTUwgPSBpY29uX25hbWU7XHJcbiAgICByZXR1cm4gc3BhbjtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlSW5wdXQgPSAoaW5wdXRfdHlwZSxcclxuICAgIGlkLFxyXG4gICAgbGlzdGVuZXJfYm9vbCxcclxuICAgIGxpc3RlbmVyX3R5cGUsXHJcbiAgICBsaXN0ZW5lcl9mdW5jdGlvblxyXG4pID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQudHlwZSA9IGlucHV0X3R5cGU7XHJcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XHJcblxyXG4gICAgaWYgKGxpc3RlbmVyX2Jvb2wpXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcl90eXBlLCBsaXN0ZW5lcl9mdW5jdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVMYWJlbCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XHJcbiAgICBsYWJlbC5mb3IgPSB0YXNrTmFtZTtcclxuICAgIGxhYmVsLmlubmVySFRNTCA9IHRhc2tOYW1lO1xyXG4gICAgcmV0dXJuIGxhYmVsO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVJbnB1dENvbnRhaW5lciA9IChsYWJlbCwgdGFzaywgZGF0ZSwgYnV0dG9uKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dENvbnRhaW5lclwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIHRhc2ssIGRhdGUsIGJ1dHRvbik7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlVGFza0Zvcm1cIikucmVwb3J0VmFsaWRpdHkoKSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgYWRkVGFzaygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUYXNrTmFtZSgpIHtcclxuICAgIHRhc2tOYW1lID0gdGhpcy52YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza01vZGFsKCkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xyXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjcmVhdGVUYXNrRm9ybVwiKTtcclxuICAgIGZvcm0uYXBwZW5kKFxyXG4gICAgICAgIFwiUGxlYXNlIG5hbWUgeW91ciB0YXNrLi4uXCIsXHJcbiAgICAgICAgY3JlYXRlSW5wdXQoXCJ0ZXh0XCIsIFwiY3JlYXRlVGFza1wiLCB0cnVlLCBcImlucHV0XCIsIHNldFRhc2tOYW1lKSxcclxuICAgICAgICBjcmVhdGVCdXR0b24oXCJjaGVja1wiLCBcIkNyZWF0ZSBUYXNrXCIsIGNsb3NlTW9kYWwsIFwiY2xvc2VNb2RhbEJ1dHRvblwiLCB0cnVlKVxyXG4gICAgKTtcclxuXHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kKGZvcm0pO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcclxuICAgIGdldENvbnRlbnQoKS5hcHBlbmQobW9kYWwpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVCdXR0b24gPSAoaWNvbiwgdGV4dCwgZnVuY3QsIGlkLCBzdWJtaXRCdXR0b24pID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xyXG4gICAgaWYgKHN1Ym1pdEJ1dHRvbilcclxuICAgICAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICBidXR0b24uYXBwZW5kKGFkZEljb24oaWNvbikpO1xyXG4gICAgYnV0dG9uLmFwcGVuZCh0ZXh0KTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0KTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVEaXZpZGVyTGluZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpdmlkZXJMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gICAgcmV0dXJuIGRpdmlkZXJMaW5lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xyXG4gICAgLy8gYWxlcnQoXCJBZGQgVGFzayFcIik7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFza05hbWUgKyBcIlRDXCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFza05hbWUgKyBcIkZvcm1cIik7XHJcbiAgICBmb3JtLmFwcGVuZChjcmVhdGVJbnB1dENvbnRhaW5lcihjcmVhdGVMYWJlbCh0YXNrTmFtZSArIFwiTGFiZWxcIiksIGNyZWF0ZUlucHV0KFwidGV4dFwiLCB0YXNrTmFtZSArIFwiVGFza1wiLCBmYWxzZSwgbnVsbCwgbnVsbCksIGNyZWF0ZUlucHV0KFwiZGF0ZVwiLCB0YXNrTmFtZSArIFwiRGF0ZVwiLCBmYWxzZSwgbnVsbCwgbnVsbCksIGNyZWF0ZUJ1dHRvbihcInNhdmVcIiwgXCJTYXZlXCIsIHNhdmUsIHRhc2tOYW1lLCB0cnVlKSkpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoZm9ybSk7XHJcbiAgICBnZXRCb2R5KCkuYXBwZW5kKHRhc2tDb250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVJbmJveE9iamVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGluYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGluYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmJveENvbnRhaW5lclwiKTtcclxuICAgIGluYm94Q29udGFpbmVyLmFwcGVuZChjcmVhdGVCdXR0b24oXCJhZGRcIiwgXCJBZGQgVGFza1wiLCBjcmVhdGVUYXNrTW9kYWwsIFwiYWRkVGFza0J1dHRvblwiLCBmYWxzZSkpO1xyXG4gICAgcmV0dXJuIGluYm94Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRUb0JvZHkoKSB7XHJcbiAgICBpZiAoc2VjdGlvbklkID09PSBcIkluYm94XCIpXHJcbiAgICAgICAgZ2V0Qm9keSgpLmFwcGVuZChjcmVhdGVUaXRsZSgpLCBjcmVhdGVJbmJveE9iamVjdCgpKTtcclxuICAgIGVsc2UgaWYgKHNlY3Rpb25JZCA9PT0gXCJUb2RheVwiIHx8IHNlY3Rpb25JZCA9PT0gXCJUaGlzIFdlZWtcIilcclxuICAgICAgICBnZXRCb2R5KCkuYXBwZW5kKGNyZWF0ZVRpdGxlKCkpO1xyXG5cclxuICAgIGxvYWRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxufVxyXG5cclxuYXBwZW5kVG9Cb2R5KCk7XHJcblxyXG5leHBvcnQge1xyXG4gICAgcmVjZWl2ZXJGdW5jdGlvbixcclxuICAgIGNyZWF0ZUJ1dHRvbixcclxuICAgIGNyZWF0ZURpdmlkZXJMaW5lLFxyXG4gICAgYXBwZW5kVGFza3NGcm9tTG9jYWxTdG9yYWdlLFxyXG4gICAgZ2V0Qm9keSwgc2VjdGlvbklkLCB0YXNrTmFtZVxyXG59OyIsImNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVDb250ZW50ID0gKGdyaWRfYXJlYSkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoZ3JpZF9hcmVhKTtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRUb0NvbnRlbnQoKSB7XHJcbiAgICBnZXRDb250ZW50KCkuYXBwZW5kKGNyZWF0ZUNvbnRlbnQoXCJ0aXRsZVwiKSk7XHJcbiAgICBnZXRDb250ZW50KCkuYXBwZW5kKGNyZWF0ZUNvbnRlbnQoXCJuYXZcIikpO1xyXG4gICAgZ2V0Q29udGVudCgpLmFwcGVuZChjcmVhdGVDb250ZW50KFwiYm9keVwiKSk7XHJcbn1cclxuXHJcbmFwcGVuZFRvQ29udGVudCgpOyIsImltcG9ydCB7IHJlY2VpdmVyRnVuY3Rpb24gfSBmcm9tIFwiLi9jcmVhdGVCb2R5XCI7XHJcbmNvbnN0IGdldE5hdiA9ICgpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxufVxyXG5cclxuY29uc3QgYWRkSWNvbiA9IChpY29uX25hbWUpID0+IHtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xyXG4gICAgc3Bhbi5pbm5lckhUTUwgPSBpY29uX25hbWU7XHJcbiAgICByZXR1cm4gc3BhbjtcclxufVxyXG5cclxuY29uc3QgYWRkVGV4dCA9ICh0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xyXG4gICAgcmV0dXJuIHRleHROb2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0ZW5lckZ1bmN0aW9uKCkge1xyXG4gICAgLy8gYWxlcnQodGhpcy5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk7XHJcbiAgICByZWNlaXZlckZ1bmN0aW9uKHRoaXMuZ2V0QXR0cmlidXRlKFwiaWRcIikpO1xyXG59XHJcblxyXG5jb25zdCBhZGRFdnRMaXN0ZW5lciA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbGlzdGVuZXJGdW5jdGlvbik7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZU5hdk9iamVjdCA9IChpY29uX25hbWUsIHRleHQpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0ZXh0KTtcclxuICAgIGFkZEV2dExpc3RlbmVyKGNvbnRhaW5lcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGFkZEljb24oaWNvbl9uYW1lKSwgYWRkVGV4dCh0ZXh0KSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVEaXZpZGVyTGluZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpdmlkZXJMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gICAgcmV0dXJuIGRpdmlkZXJMaW5lO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVIMSA9ICh0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGgxLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICByZXR1cm4gaDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFRvTmF2KCkge1xyXG4gICAgZ2V0TmF2KCkuYXBwZW5kKGNyZWF0ZU5hdk9iamVjdChcImluYm94XCIsIFwiSW5ib3hcIikpO1xyXG4gICAgZ2V0TmF2KCkuYXBwZW5kKGNyZWF0ZU5hdk9iamVjdChcImV2ZW50XCIsIFwiVG9kYXlcIikpO1xyXG4gICAgZ2V0TmF2KCkuYXBwZW5kKGNyZWF0ZU5hdk9iamVjdChcImRhdGVfcmFuZ2VcIiwgXCJUaGlzIFdlZWtcIikpO1xyXG4gICAgZ2V0TmF2KCkuYXBwZW5kKGNyZWF0ZURpdmlkZXJMaW5lKCkpO1xyXG59XHJcblxyXG5hcHBlbmRUb05hdigpOyIsImNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XHJcbn1cclxuXHJcbmNvbnN0IGFkZEljb24gPSAoaWNvbl9uYW1lKSA9PiB7XHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKTtcclxuICAgIHNwYW4uaW5uZXJIVE1MID0gaWNvbl9uYW1lO1xyXG4gICAgcmV0dXJuIHNwYW47XHJcbn1cclxuXHJcbmNvbnN0IGFkZFRleHQgPSAodGV4dCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcclxuICAgIHJldHVybiB0ZXh0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGl0bGVPYmplY3QgPSAoaWNvbl9uYW1lLCB0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGFkZEljb24oaWNvbl9uYW1lKSwgYWRkVGV4dCh0ZXh0KSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRUb1RpdGxlKCkge1xyXG4gICAgZ2V0VGl0bGUoKS5hcHBlbmQoY3JlYXRlVGl0bGVPYmplY3QoXCJ0YXNrX2FsdFwiLCBcIlRvZG8gTGlzdFwiKSk7XHJcbn1cclxuXHJcbmFwcGVuZFRvVGl0bGUoKTsiLCJpbXBvcnQge1xyXG4gICAgY3JlYXRlQnV0dG9uLFxyXG4gICAgY3JlYXRlRGl2aWRlckxpbmUsXHJcbiAgICBhcHBlbmRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UsXHJcbiAgICBnZXRCb2R5LFxyXG4gICAgc2VjdGlvbklkXHJcbn0gZnJvbSBcIi4vY3JlYXRlQm9keS5qc1wiO1xyXG5cclxuY29uc3QgdGFza3MgPSBbXTtcclxubGV0IG51bWJlck9mTG9jYWxUYXNrcyA9IDA7XHJcblxyXG5jb25zdCB0YXNrID0ge1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICB0YXNrOiBcIlwiLFxyXG4gICAgZGF0ZTogXCJcIlxyXG59XHJcblxyXG5jb25zdCBnZXRJREJ5VGFza3NMZW5ndGggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGFza3MubGVuZ3RoIC0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTG9jYWxTdG9yYWdlVG9UYXNrcygpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ0FycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSkuc3BsaXQoXCIsXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGVtcFRhc2sgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHRhc2s6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRlbXBUYXNrLnRpdGxlID0gc3RyaW5nQXJyYXlbMF07XHJcbiAgICAgICAgICAgIHRlbXBUYXNrLnRhc2sgPSBzdHJpbmdBcnJheVsxXTtcclxuICAgICAgICAgICAgdGVtcFRhc2suZGF0ZSA9IHN0cmluZ0FycmF5WzJdO1xyXG5cclxuICAgICAgICAgICAgdGFza3MucHVzaCh0ZW1wVGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG51bWJlck9mTG9jYWxUYXNrcyA9IHRhc2tzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaSwgdGFza3NbaV0udGl0bGUgKyBcIixcIiArIHRhc2tzW2ldLnRhc2sgKyBcIixcIiArIHRhc2tzW2ldLmRhdGUpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcHVzaFRhc2tzKHRhc2spIHtcclxuICAgIHRhc2tzLnB1c2godGFzayk7XHJcblxyXG4gICAgLy8gY29uc29sZS50YWJsZSh0YXNrKTtcclxuXHJcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BsaWNlVGFza3MoaWQpIHtcclxuICAgIHRhc2tzLnNwbGljZShpZCwgMSk7XHJcbn1cclxuXHJcbmNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRhc2tzO1xyXG59XHJcblxyXG5jb25zdCBnZXROdW1iZXJPZkxvY2FsVGFza3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbnVtYmVyT2ZMb2NhbFRhc2tzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRTYXZlZFRhc2soaWQsIHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2F2ZWRUYXNrQ29udGFpbmVyXCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCArIFwiVENcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiVGl0bGU6IFwiICsgdGFzay50aXRsZSArICc8YnI+JyArICc8YnI+JyArXHJcbiAgICAgICAgXCJUYXNrOiBcIiArIHRhc2sudGFzayArICc8YnI+JyArICc8YnI+JyArXHJcbiAgICAgICAgXCJEdWUgRGF0ZTogXCIgKyB0YXNrLmRhdGU7XHJcblxyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoY3JlYXRlQnV0dG9uKFwiZGVsZXRlX2ZvcmV2ZXJcIiwgXCJEZWxldGVcIiwgZGVsZXRlVGFzaywgaWQgKyBcIkRlbGV0ZVwiLCBmYWxzZSksIGNyZWF0ZURpdmlkZXJMaW5lKCkpO1xyXG4gICAgZ2V0Qm9keSgpLmFwcGVuZCh0YXNrQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgXCJGb3JtXCIpO1xyXG5cclxuICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KCkpIHtcclxuICAgICAgICAvLyBhbGVydChmb3JtLnJlcG9ydFZhbGlkaXR5KCkpO1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBPYmplY3QuY3JlYXRlKHRhc2spO1xyXG5cclxuICAgICAgICBuZXdUYXNrLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArIFwiTGFiZWxcIikudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgbmV3VGFzay50YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArIFwiVGFza1wiKS52YWx1ZTtcclxuICAgICAgICBuZXdUYXNrLmRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgXCJEYXRlXCIpLnZhbHVlO1xyXG5cclxuICAgICAgICBwdXNoVGFza3MobmV3VGFzayk7XHJcbiAgICAgICAgZGVsZXRlVEModGhpcy5pZCArIFwiVENcIik7XHJcbiAgICAgICAgYXBwZW5kU2F2ZWRUYXNrKGdldElEQnlUYXNrc0xlbmd0aCgpLCBuZXdUYXNrKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVEMoaWQpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5yZW1vdmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRJRHMoKSB7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzYXZlZFRhc2tDb250YWluZXJcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGdldE51bWJlck9mTG9jYWxUYXNrcygpOyBpIDwgZ2V0VGFza3MoKS5sZW5ndGg7IGkrKylcclxuICAgICAgICB0YXNrQ29udGFpbmVyc1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpICsgXCJUQ1wiKTtcclxuXHJcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGFzaygpIHtcclxuICAgIGNvbnN0IHN0cmluZ0FycmF5ID0gdGhpcy5pZC5zcGxpdChcIkRcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHJpbmdBcnJheVswXSArIFwiVENcIikucmVtb3ZlKCk7XHJcbiAgICBzcGxpY2VUYXNrcyhzdHJpbmdBcnJheVswXSk7XHJcbiAgICByZXNldElEcygpO1xyXG59XHJcblxyXG5jb25zdCBjaGVja1RvZGF5VGFzayA9IChsb2NhbFN0b3JhZ2VTdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHN0cmluZ0FycmF5ID0gbG9jYWxTdG9yYWdlU3RyaW5nLnNwbGl0KFwiLFwiKTtcclxuICAgIGNvbnN0IGRhdGVBcnJheSA9IHN0cmluZ0FycmF5WzJdLnNwbGl0KFwiLVwiKTtcclxuXHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZGF5ID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgbW9udGggPSB0b2RheS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgaWYgKHBhcnNlSW50KGRhdGVBcnJheVswXSkgPT09IHBhcnNlSW50KHllYXIpICYmXHJcbiAgICAgICAgcGFyc2VJbnQoZGF0ZUFycmF5WzFdIC0gMSkgPT09IHBhcnNlSW50KG1vbnRoKSAmJlxyXG4gICAgICAgIHBhcnNlSW50KGRhdGVBcnJheVsyXSkgPT09IHBhcnNlSW50KGRheSlcclxuICAgIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrV2Vla1Rhc2sgPSAobG9jYWxTdG9yYWdlU3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBzdHJpbmdBcnJheSA9IGxvY2FsU3RvcmFnZVN0cmluZy5zcGxpdChcIixcIik7XHJcbiAgICBjb25zdCBkYXRlQXJyYXkgPSBzdHJpbmdBcnJheVsyXS5zcGxpdChcIi1cIik7XHJcblxyXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGRheSA9IHRvZGF5LmdldERhdGUoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIGlmIChwYXJzZUludChkYXRlQXJyYXlbMF0pID09PSBwYXJzZUludCh5ZWFyKSAmJlxyXG4gICAgICAgIHBhcnNlSW50KGRhdGVBcnJheVsxXSAtIDEpID09PSBwYXJzZUludChtb250aCkgJiZcclxuICAgICAgICBwYXJzZUludChkYXRlQXJyYXlbMl0pIDw9IHBhcnNlSW50KGRheSArIDYpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHNlY3Rpb25JZCA9PT0gXCJJbmJveFwiKVxyXG4gICAgICAgICAgICBhcHBlbmRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoaSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSkpXHJcbiAgICAgICAgZWxzZSBpZiAoc2VjdGlvbklkID09PSBcIlRvZGF5XCIpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGVja1RvZGF5VGFzayhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpKSkpXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoaSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWN0aW9uSWQgPT09IFwiVGhpcyBXZWVrXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrV2Vla1Rhc2sobG9jYWxTdG9yYWdlLmdldEl0ZW0oaSkpKVxyXG4gICAgICAgICAgICAgICAgYXBwZW5kVGFza3NGcm9tTG9jYWxTdG9yYWdlKGksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHdpbmRvdy5vbmxvYWQgPSBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxud2luZG93Lm9ubG9hZCA9IGFkZExvY2FsU3RvcmFnZVRvVGFza3MoKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBzYXZlLFxyXG4gICAgZGVsZXRlVGFzayxcclxuICAgIGxvYWRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2VcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9jcmVhdGVHcmlkLmpzJztcclxuaW1wb3J0ICcuL2NyZWF0ZU5hdi5qcyc7XHJcbmltcG9ydCAnLi9jcmVhdGVUaXRsZS5qcyc7XHJcbmltcG9ydCAnLi9jcmVhdGVCb2R5LmpzJztcclxuaW1wb3J0ICcuL2luYm94TG9naWMnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==