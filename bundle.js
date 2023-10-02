/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Method to create and render new element
const createNewElement = (getData) => {
  const ulTag = document.getElementById('score-data');

  while (ulTag.hasChildNodes()) {
    ulTag.removeChild(ulTag.firstChild);
  }

  for (let i = 0; i < getData.length; i += 1) {
    const liTag = document.createElement('li');
    liTag.innerHTML = `${getData[i].user}: ${getData[i].score}`;
    ulTag.appendChild(liTag);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewElement);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg.jpg */ "./images/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  box-sizing: border-box;
  margin: 0;
  padding: 0 !important;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: grey;
  background-blend-mode: multiply;
}

#logo {
  display: block;
  font-family: 'Pacifico', cursive;
  word-spacing: 0;
  font-weight: bolder;
  font-size: 1.5rem;
  text-decoration: none;
  font-style: oblique;
  color: #555;
}

nav {
  position: fixed;
  width: 100%;
}

.modal-overlay {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: fixed;
  top: 30%;
  left: 50%;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  height: auto;
  width: 20%;
  overflow-y: auto;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

h1,
h2 {
  margin-block-start: 0;
  margin-block-end: 0;
}

h1 {
  margin-left: 20px;
}

.navbar {
  width: 100%;
}

.container {
  padding: 10% 0;
}

.refresh,
.user-input {
  padding: 20px 0;
}

.scores {
  margin-right: 5rem;
}

ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  font-size: 1rem;
}

#games {
  position: relative;
}

.score-data {
  padding: 5px 0;
}

.pill {
  font-size: 20px;
  font-weight: bolder;
  padding: 10px 15px;
}

.pill-sm {
  position: absolute;
  left: 45%;
  top: 20px;
}

.all-games {
  position: absolute;
  left: 17%;
  top: 62px;
  width: 100px;
  text-align: left;
  padding: 12px 10px;
  font-size: 14px;
  box-shadow: 2px 2px 2px #888;
  background-color: #fff;
}

.all-games > div {
  text-transform: capitalize;
}

li {
  padding: 5px;
  text-transform: capitalize;
}

.score-data > li:nth-child(even) {
  background-color: #ddd;
  color: #242932;
}

.score-data > li:nth-child(odd) {
  background-color: #1c3050;
}

input[type='search'] {
  border: none;
  width: 100%;
}

input[type='search']:focus {
  outline: none;
}

.url-bar {
  width: 45%;
}

.add-game {
  border: 2px solid #707989;
  color: #707989;
  border-radius: 5px;
  margin-left: 50px;
  cursor: pointer;
  width: 100px;
  font-weight: 700;
}

.add-game:hover {
  border: 2px solid #fff;
  color: #fff;
}

.nav-btn {
  cursor: pointer;
  width: 90px;
}

.nav-link {
  color: #707989;
}

.nav-link:hover {
  color: #fff;
}

.b-none {
  border: none;
}

.capitalize {
  text-transform: capitalize;
}

.footer {
  padding: 20px 0;
}

.spc-btw {
  justify-content: space-between;
}

img {
  width: 30px;
  height: auto;
  background-color: #c1c1c1;
}

.search {
  border: 1px solid rgb(133, 133, 133);
  border-radius: 2px;
  background-color: #fff;
}

#close {
  float: right;
  cursor: pointer;
}

#new-game {
  height: 25px;
}

.modal-form {
  flex-direction: column;
  gap: 20px;
}

/* Utility classes */
.text-center {
  text-align: center;
}

.text-dark {
  color: #707989 !important;
}

.text-white {
  color: white;
}

.bg-charcoal {
  background-color: #242932;
}

.d-flex {
  display: flex;
}

.px-5 {
  padding: 0 5px;
}

.mx-8pc {
  margin: 0 8%;
}

.mx-5pc {
  margin: 0 5%;
}

.gap-20 {
  column-gap: 5%;
}

.p-5 {
  padding: 5px;
}

.pb-20 {
  padding-bottom: 20px;
}

.pb-50 {
  padding-bottom: 50px;
}

.pt-40 {
  padding-top: 40px;
}

.p-10 {
  padding: 10px;
}

.py-5 {
  padding-top: 5px;
  padding-bottom: 5px;
}

.py-20 {
  padding: 20px 0;
}

.px-16 {
  padding-left: 16px;
  padding-right: 16px;
}

.title {
  font-size: 48px;
}

.w-100pc {
  width: 100%;
}

.w-50pc,
.w-50pcx {
  width: 50%;
}

.fd-col {
  flex-direction: column;
}

.col-gap-10 {
  column-gap: 20px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-10 {
  margin-bottom: 10px;
}

.bg-white {
  background-color: #fff;
}

.bg-dark {
  background-color: #0d0c22;
}

.align-center {
  align-items: center;
}

.justify-cont-end {
  justify-content: end;
}

.box-shadow {
  box-shadow: 2px 2px 2px #888;
}

.font-18 {
  font-size: 18px;
  font-weight: 600;
}

.font-24 {
  font-size: 24px;
  font-weight: 700;
}

.navigation {
  flex-direction: row;
  align-content: center;
}

.md-show {
  display: flex;
}

.menu {
  display: none;
}

.hide {
  display: none;
}

.show {
  display: block;
}

.social-icon {
  font-size: 40px;
  margin-right: 5px;
}

a {
  text-decoration: none;
}

.leaderboard {
  border: 5px solid #ffffffe3;
  padding: 2rem;
  border-radius: 10px;
}

/* Media query for small screens */
@media only screen and (max-width: 768px) {
  .md-show {
    display: none;
  }

  .navigation {
    flex-direction: column;
    gap: 10px;
  }

  img {
    width: 20px;
  }

  h2 {
    font-size: 20px;
  }

  .title {
    font-size: 28px;
  }

  .url-bar {
    width: auto;
  }

  .search {
    width: 150px;
    align-self: flex-end;
  }

  .cta {
    flex-direction: column;
  }

  .w-50pc {
    width: 100%;
  }

  .scores {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .w-50pcx {
    width: auto;
  }

  .max-w-400,
  .refresh {
    max-width: 100%;
  }

  .menu {
    display: block;
  }

  .modal {
    width: 80%;
  }

  .container {
    padding-top: 40%;
    padding-bottom: 10%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@700&display=swap');\n\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0 !important;\n  background-image: url('../images/bg.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-color: grey;\n  background-blend-mode: multiply;\n}\n\n#logo {\n  display: block;\n  font-family: 'Pacifico', cursive;\n  word-spacing: 0;\n  font-weight: bolder;\n  font-size: 1.5rem;\n  text-decoration: none;\n  font-style: oblique;\n  color: #555;\n}\n\nnav {\n  position: fixed;\n  width: 100%;\n}\n\n.modal-overlay {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n  position: fixed;\n  top: 30%;\n  left: 50%;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 8px;\n  height: auto;\n  width: 20%;\n  overflow-y: auto;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\nh1,\nh2 {\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\nh1 {\n  margin-left: 20px;\n}\n\n.navbar {\n  width: 100%;\n}\n\n.container {\n  padding: 10% 0;\n}\n\n.refresh,\n.user-input {\n  padding: 20px 0;\n}\n\n.scores {\n  margin-right: 5rem;\n}\n\nul {\n  list-style-type: none;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  padding-inline-start: 0;\n  font-size: 1rem;\n}\n\n#games {\n  position: relative;\n}\n\n.score-data {\n  padding: 5px 0;\n}\n\n.pill {\n  font-size: 20px;\n  font-weight: bolder;\n  padding: 10px 15px;\n}\n\n.pill-sm {\n  position: absolute;\n  left: 45%;\n  top: 20px;\n}\n\n.all-games {\n  position: absolute;\n  left: 17%;\n  top: 62px;\n  width: 100px;\n  text-align: left;\n  padding: 12px 10px;\n  font-size: 14px;\n  box-shadow: 2px 2px 2px #888;\n  background-color: #fff;\n}\n\n.all-games > div {\n  text-transform: capitalize;\n}\n\nli {\n  padding: 5px;\n  text-transform: capitalize;\n}\n\n.score-data > li:nth-child(even) {\n  background-color: #ddd;\n  color: #242932;\n}\n\n.score-data > li:nth-child(odd) {\n  background-color: #1c3050;\n}\n\ninput[type='search'] {\n  border: none;\n  width: 100%;\n}\n\ninput[type='search']:focus {\n  outline: none;\n}\n\n.url-bar {\n  width: 45%;\n}\n\n.add-game {\n  border: 2px solid #707989;\n  color: #707989;\n  border-radius: 5px;\n  margin-left: 50px;\n  cursor: pointer;\n  width: 100px;\n  font-weight: 700;\n}\n\n.add-game:hover {\n  border: 2px solid #fff;\n  color: #fff;\n}\n\n.nav-btn {\n  cursor: pointer;\n  width: 90px;\n}\n\n.nav-link {\n  color: #707989;\n}\n\n.nav-link:hover {\n  color: #fff;\n}\n\n.b-none {\n  border: none;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.footer {\n  padding: 20px 0;\n}\n\n.spc-btw {\n  justify-content: space-between;\n}\n\nimg {\n  width: 30px;\n  height: auto;\n  background-color: #c1c1c1;\n}\n\n.search {\n  border: 1px solid rgb(133, 133, 133);\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n#close {\n  float: right;\n  cursor: pointer;\n}\n\n#new-game {\n  height: 25px;\n}\n\n.modal-form {\n  flex-direction: column;\n  gap: 20px;\n}\n\n/* Utility classes */\n.text-center {\n  text-align: center;\n}\n\n.text-dark {\n  color: #707989 !important;\n}\n\n.text-white {\n  color: white;\n}\n\n.bg-charcoal {\n  background-color: #242932;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.px-5 {\n  padding: 0 5px;\n}\n\n.mx-8pc {\n  margin: 0 8%;\n}\n\n.mx-5pc {\n  margin: 0 5%;\n}\n\n.gap-20 {\n  column-gap: 5%;\n}\n\n.p-5 {\n  padding: 5px;\n}\n\n.pb-20 {\n  padding-bottom: 20px;\n}\n\n.pb-50 {\n  padding-bottom: 50px;\n}\n\n.pt-40 {\n  padding-top: 40px;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.py-5 {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.py-20 {\n  padding: 20px 0;\n}\n\n.px-16 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.title {\n  font-size: 48px;\n}\n\n.w-100pc {\n  width: 100%;\n}\n\n.w-50pc,\n.w-50pcx {\n  width: 50%;\n}\n\n.fd-col {\n  flex-direction: column;\n}\n\n.col-gap-10 {\n  column-gap: 20px;\n}\n\n.mb-20 {\n  margin-bottom: 20px;\n}\n\n.mb-10 {\n  margin-bottom: 10px;\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.bg-dark {\n  background-color: #0d0c22;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.justify-cont-end {\n  justify-content: end;\n}\n\n.box-shadow {\n  box-shadow: 2px 2px 2px #888;\n}\n\n.font-18 {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.font-24 {\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.navigation {\n  flex-direction: row;\n  align-content: center;\n}\n\n.md-show {\n  display: flex;\n}\n\n.menu {\n  display: none;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.social-icon {\n  font-size: 40px;\n  margin-right: 5px;\n}\n\na {\n  text-decoration: none;\n}\n\n.leaderboard {\n  border: 5px solid #ffffffe3;\n  padding: 2rem;\n  border-radius: 10px;\n}\n\n/* Media query for small screens */\n@media only screen and (max-width: 768px) {\n  .md-show {\n    display: none;\n  }\n\n  .navigation {\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  img {\n    width: 20px;\n  }\n\n  h2 {\n    font-size: 20px;\n  }\n\n  .title {\n    font-size: 28px;\n  }\n\n  .url-bar {\n    width: auto;\n  }\n\n  .search {\n    width: 150px;\n    align-self: flex-end;\n  }\n\n  .cta {\n    flex-direction: column;\n  }\n\n  .w-50pc {\n    width: 100%;\n  }\n\n  .scores {\n    margin-right: 0;\n    margin-bottom: 20px;\n  }\n\n  .w-50pcx {\n    width: auto;\n  }\n\n  .max-w-400,\n  .refresh {\n    max-width: 100%;\n  }\n\n  .menu {\n    display: block;\n  }\n\n  .modal {\n    width: 80%;\n  }\n\n  .container {\n    padding-top: 40%;\n    padding-bottom: 10%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./images/bg.jpg":
/*!***********************!*\
  !*** ./images/bg.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebe980cf1e8b1552f6e8.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/render.js */ "./modules/render.js");



// Declare global variable
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('btn-refresh');
const gamesBtn = document.getElementById('games');
const closeBtn = document.getElementById('close');
const addGameBtn = document.getElementById('add-games');
const gameTab = document.getElementById('all-games');
const overlay = document.getElementById('overlay');
const addNewGameBtn = document.getElementById('add-new');
const gamesData = JSON.parse(localStorage.getItem('leaderboard')) || [];
const selectedGame = JSON.parse(localStorage.getItem('game-select')) || {};
const gameTitle = document.querySelectorAll('.game-title');
let apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PZpCHLRjH8Q2y1IfdufA/scores/';

// Get all users and their scores from the server
const getAllScores = async () => {
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();
  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__["default"])(res.result);
};

// Add user and their scores to the server
const addScore = async (data) => {
  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
};

// Load all games created and stored in the local storage
const existingGames = () => {
  gamesData.forEach((user) => {
    const divElement = document.createElement('div');
    divElement.classList.add('p-5');
    divElement.innerHTML = user.name;
    gameTab.appendChild(divElement);
  });
};

// Create API url
const createApiUrl = (gameName) => {
  gamesData.forEach((gameData) => {
    if (gameData.name === gameName) {
      apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameData.id}/scores/`;
    }
  });
};

const loadPickedGame = () => {
  gameTitle.forEach((gameElement) => {
    gameElement.innerHTML = selectedGame.name;
  });
  createApiUrl(selectedGame.name);
};

// Get user name and score
submitBtn.addEventListener('click', async () => {
  const username = document.getElementById('user-name');
  const score = document.getElementById('score');
  if (username.value && score.value) {
    const data = {
      user: username.value,
      score: Number(score.value),
    };
    await addScore(JSON.stringify(data));
    username.value = '';
    score.value = '';
  }
});

// Refresh button to get users and their scores
refreshBtn.addEventListener('click', () => {
  getAllScores();
});

// Hide and show add game form
gamesBtn.addEventListener('click', () => {
  if (gameTab.className.includes('hide')) {
    gameTab.classList.remove('hide');
    gameTab.classList.add('show');
  } else {
    gameTab.classList.remove('show');
    gameTab.classList.add('hide');
  }
});

// Save selected game to the local storage
gameTab.addEventListener('click', (e) => {
  gameTitle.forEach((gameElement) => {
    gameElement.innerHTML = e.target.innerHTML;
    selectedGame.name = e.target.innerHTML;
    localStorage.setItem('game-select', JSON.stringify(selectedGame));
  });
  createApiUrl(selectedGame.name);
});

// Show overlay
addGameBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
});

// Close button to hide overlay
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Add new game to the server
const addNewGame = async (data) => {
  const createUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const response = await fetch(createUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  const removePreStr = res.result.slice(14);
  const removeSufStr = removePreStr.slice(0, -7);
  data.id = removeSufStr;
  gamesData.push(data);
  localStorage.setItem('leaderboard', JSON.stringify(gamesData));
};

addNewGameBtn.addEventListener('click', async () => {
  const newGame = document.getElementById('new-game');
  if (newGame.value) {
    const data = {
      name: newGame.value,
    };
    await addNewGame(data);
    newGame.value = '';
  }
});

existingGames();
loadPickedGame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0EseUJBQXlCLGdCQUFnQixJQUFJLGlCQUFpQjtBQUM5RDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YvQjtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx3R0FBbUM7QUFDL0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4SUFBOEk7QUFDOUkseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FB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QUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWV0aG9kIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIG5ldyBlbGVtZW50XG5jb25zdCBjcmVhdGVOZXdFbGVtZW50ID0gKGdldERhdGEpID0+IHtcbiAgY29uc3QgdWxUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUtZGF0YScpO1xuXG4gIHdoaWxlICh1bFRhZy5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICB1bFRhZy5yZW1vdmVDaGlsZCh1bFRhZy5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0RGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGxpVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaVRhZy5pbm5lckhUTUwgPSBgJHtnZXREYXRhW2ldLnVzZXJ9OiAke2dldERhdGFbaV0uc2NvcmV9YDtcbiAgICB1bFRhZy5hcHBlbmRDaGlsZChsaVRhZyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5ld0VsZW1lbnQ7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhY2lmaWNvJmZhbWlseT1Qb3BwaW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG59XG5cbiNsb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xuICB3b3JkLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAyMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmgxLFxuaDIge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwJSAwO1xufVxuXG4ucmVmcmVzaCxcbi51c2VyLWlucHV0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4uc2NvcmVzIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4jZ2FtZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zY29yZS1kYXRhIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5waWxsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbi5waWxsLXNtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0NSU7XG4gIHRvcDogMjBweDtcbn1cblxuLmFsbC1nYW1lcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTclO1xuICB0b3A6IDYycHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTJweCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICM4ODg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5hbGwtZ2FtZXMgPiBkaXYge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxubGkge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uc2NvcmUtZGF0YSA+IGxpOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiAjMjQyOTMyO1xufVxuXG4uc2NvcmUtZGF0YSA+IGxpOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMzA1MDtcbn1cblxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi51cmwtYmFyIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLmFkZC1nYW1lIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzcwNzk4OTtcbiAgY29sb3I6ICM3MDc5ODk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWRkLWdhbWU6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdi1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogIzcwNzk4OTtcbn1cblxuLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5iLW5vbmUge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5zcGMtYnR3IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5pbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xufVxuXG4uc2VhcmNoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbiNjbG9zZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbmV3LWdhbWUge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5tb2RhbC1mb3JtIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4vKiBVdGlsaXR5IGNsYXNzZXMgKi9cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtZGFyayB7XG4gIGNvbG9yOiAjNzA3OTg5ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmctY2hhcmNvYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTMyO1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnB4LTUge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLm14LThwYyB7XG4gIG1hcmdpbjogMCA4JTtcbn1cblxuLm14LTVwYyB7XG4gIG1hcmdpbjogMCA1JTtcbn1cblxuLmdhcC0yMCB7XG4gIGNvbHVtbi1nYXA6IDUlO1xufVxuXG4ucC01IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucGItMjAge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnBiLTUwIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5wdC00MCB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4ucC0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5weS01IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnB5LTIwIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4ucHgtMTYge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLnctMTAwcGMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnctNTBwYyxcbi53LTUwcGN4IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmZkLWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb2wtZ2FwLTEwIHtcbiAgY29sdW1uLWdhcDogMjBweDtcbn1cblxuLm1iLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1iLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwYzIyO1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmp1c3RpZnktY29udC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAjODg4O1xufVxuXG4uZm9udC0xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZvbnQtMjQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubWQtc2hvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubGVhZGVyYm9hcmQge1xuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmZmZmZTM7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIE1lZGlhIHF1ZXJ5IGZvciBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tZC1zaG93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5hdmlnYXRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuXG4gIC51cmwtYmFyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIC5zZWFyY2gge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuXG4gIC5jdGEge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAudy01MHBjIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zY29yZXMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLnctNTBwY3gge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLm1heC13LTQwMCxcbiAgLnJlZnJlc2gge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5tb2RhbCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA0MCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIseURBQXlDO0VBQ3pDLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIs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O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBLGtDQUFrQztBQUNsQztFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFjaWZpY28mZmFtaWx5PVBvcHBpbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmcuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbn1cXG5cXG4jbG9nbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xcbiAgd29yZC1zcGFjaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG5uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb2RhbC1vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMjAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxMCUgMDtcXG59XFxuXFxuLnJlZnJlc2gsXFxuLnVzZXItaW5wdXQge1xcbiAgcGFkZGluZzogMjBweCAwO1xcbn1cXG5cXG4uc2NvcmVzIHtcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jZ2FtZXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2NvcmUtZGF0YSB7XFxuICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLnBpbGwge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG59XFxuXFxuLnBpbGwtc20ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNDUlO1xcbiAgdG9wOiAyMHB4O1xcbn1cXG5cXG4uYWxsLWdhbWVzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDE3JTtcXG4gIHRvcDogNjJweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxMnB4IDEwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAjODg4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmFsbC1nYW1lcyA+IGRpdiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxubGkge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5zY29yZS1kYXRhID4gbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBjb2xvcjogIzI0MjkzMjtcXG59XFxuXFxuLnNjb3JlLWRhdGEgPiBsaTpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMzMDUwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ106Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnVybC1iYXIge1xcbiAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLmFkZC1nYW1lIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MDc5ODk7XFxuICBjb2xvcjogIzcwNzk4OTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmFkZC1nYW1lOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi5uYXYtbGluayB7XFxuICBjb2xvcjogIzcwNzk4OTtcXG59XFxuXFxuLm5hdi1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYi1ub25lIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNhcGl0YWxpemUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMjBweCAwO1xcbn1cXG5cXG4uc3BjLWJ0dyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuI2Nsb3NlIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy1nYW1lIHtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLyogVXRpbGl0eSBjbGFzc2VzICovXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRleHQtZGFyayB7XFxuICBjb2xvcjogIzcwNzk4OSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGV4dC13aGl0ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5iZy1jaGFyY29hbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTMyO1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5weC01IHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4ubXgtOHBjIHtcXG4gIG1hcmdpbjogMCA4JTtcXG59XFxuXFxuLm14LTVwYyB7XFxuICBtYXJnaW46IDAgNSU7XFxufVxcblxcbi5nYXAtMjAge1xcbiAgY29sdW1uLWdhcDogNSU7XFxufVxcblxcbi5wLTUge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucGItMjAge1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wYi01MCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnB0LTQwIHtcXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHktNSB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnB5LTIwIHtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuXFxuLnB4LTE2IHtcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi53LTEwMHBjIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udy01MHBjLFxcbi53LTUwcGN4IHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5mZC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbC1nYXAtMTAge1xcbiAgY29sdW1uLWdhcDogMjBweDtcXG59XFxuXFxuLm1iLTIwIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tYi0xMCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJnLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMGMyMjtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jb250LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmJveC1zaGFkb3cge1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggIzg4ODtcXG59XFxuXFxuLmZvbnQtMTgge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvbnQtMjQge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1kLXNob3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zb2NpYWwtaWNvbiB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5sZWFkZXJib2FyZCB7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmZmZmZTM7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogTWVkaWEgcXVlcnkgZm9yIHNtYWxsIHNjcmVlbnMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubWQtc2hvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICB9XFxuXFxuICAudXJsLWJhciB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLnNlYXJjaCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuY3RhIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC53LTUwcGMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zY29yZXMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICAudy01MHBjeCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLm1heC13LTQwMCxcXG4gIC5yZWZyZXNoIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDQwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZU5ld0VsZW1lbnQgZnJvbSAnLi4vbW9kdWxlcy9yZW5kZXIuanMnO1xuXG4vLyBEZWNsYXJlIGdsb2JhbCB2YXJpYWJsZVxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xuY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcmVmcmVzaCcpO1xuY29uc3QgZ2FtZXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZXMnKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlJyk7XG5jb25zdCBhZGRHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1nYW1lcycpO1xuY29uc3QgZ2FtZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtZ2FtZXMnKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuY29uc3QgYWRkTmV3R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3Jyk7XG5jb25zdCBnYW1lc0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZWFkZXJib2FyZCcpKSB8fCBbXTtcbmNvbnN0IHNlbGVjdGVkR2FtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWUtc2VsZWN0JykpIHx8IHt9O1xuY29uc3QgZ2FtZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtdGl0bGUnKTtcbmxldCBhcGlVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvUFpwQ0hMUmpIOFEyeTFJZmR1ZkEvc2NvcmVzLyc7XG5cbi8vIEdldCBhbGwgdXNlcnMgYW5kIHRoZWlyIHNjb3JlcyBmcm9tIHRoZSBzZXJ2ZXJcbmNvbnN0IGdldEFsbFNjb3JlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY3JlYXRlTmV3RWxlbWVudChyZXMucmVzdWx0KTtcbn07XG5cbi8vIEFkZCB1c2VyIGFuZCB0aGVpciBzY29yZXMgdG8gdGhlIHNlcnZlclxuY29uc3QgYWRkU2NvcmUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBhd2FpdCBmZXRjaChhcGlVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogZGF0YSxcbiAgfSk7XG59O1xuXG4vLyBMb2FkIGFsbCBnYW1lcyBjcmVhdGVkIGFuZCBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbmNvbnN0IGV4aXN0aW5nR2FtZXMgPSAoKSA9PiB7XG4gIGdhbWVzRGF0YS5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgY29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncC01Jyk7XG4gICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSB1c2VyLm5hbWU7XG4gICAgZ2FtZVRhYi5hcHBlbmRDaGlsZChkaXZFbGVtZW50KTtcbiAgfSk7XG59O1xuXG4vLyBDcmVhdGUgQVBJIHVybFxuY29uc3QgY3JlYXRlQXBpVXJsID0gKGdhbWVOYW1lKSA9PiB7XG4gIGdhbWVzRGF0YS5mb3JFYWNoKChnYW1lRGF0YSkgPT4ge1xuICAgIGlmIChnYW1lRGF0YS5uYW1lID09PSBnYW1lTmFtZSkge1xuICAgICAgYXBpVXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzLyR7Z2FtZURhdGEuaWR9L3Njb3Jlcy9gO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBsb2FkUGlja2VkR2FtZSA9ICgpID0+IHtcbiAgZ2FtZVRpdGxlLmZvckVhY2goKGdhbWVFbGVtZW50KSA9PiB7XG4gICAgZ2FtZUVsZW1lbnQuaW5uZXJIVE1MID0gc2VsZWN0ZWRHYW1lLm5hbWU7XG4gIH0pO1xuICBjcmVhdGVBcGlVcmwoc2VsZWN0ZWRHYW1lLm5hbWUpO1xufTtcblxuLy8gR2V0IHVzZXIgbmFtZSBhbmQgc2NvcmVcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1uYW1lJyk7XG4gIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG4gIGlmICh1c2VybmFtZS52YWx1ZSAmJiBzY29yZS52YWx1ZSkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICB1c2VyOiB1c2VybmFtZS52YWx1ZSxcbiAgICAgIHNjb3JlOiBOdW1iZXIoc2NvcmUudmFsdWUpLFxuICAgIH07XG4gICAgYXdhaXQgYWRkU2NvcmUoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIHVzZXJuYW1lLnZhbHVlID0gJyc7XG4gICAgc2NvcmUudmFsdWUgPSAnJztcbiAgfVxufSk7XG5cbi8vIFJlZnJlc2ggYnV0dG9uIHRvIGdldCB1c2VycyBhbmQgdGhlaXIgc2NvcmVzXG5yZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnZXRBbGxTY29yZXMoKTtcbn0pO1xuXG4vLyBIaWRlIGFuZCBzaG93IGFkZCBnYW1lIGZvcm1cbmdhbWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoZ2FtZVRhYi5jbGFzc05hbWUuaW5jbHVkZXMoJ2hpZGUnKSkge1xuICAgIGdhbWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGdhbWVUYWIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICB9IGVsc2Uge1xuICAgIGdhbWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIGdhbWVUYWIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9XG59KTtcblxuLy8gU2F2ZSBzZWxlY3RlZCBnYW1lIHRvIHRoZSBsb2NhbCBzdG9yYWdlXG5nYW1lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZ2FtZVRpdGxlLmZvckVhY2goKGdhbWVFbGVtZW50KSA9PiB7XG4gICAgZ2FtZUVsZW1lbnQuaW5uZXJIVE1MID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgIHNlbGVjdGVkR2FtZS5uYW1lID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lLXNlbGVjdCcsIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkR2FtZSkpO1xuICB9KTtcbiAgY3JlYXRlQXBpVXJsKHNlbGVjdGVkR2FtZS5uYW1lKTtcbn0pO1xuXG4vLyBTaG93IG92ZXJsYXlcbmFkZEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59KTtcblxuLy8gQ2xvc2UgYnV0dG9uIHRvIGhpZGUgb3ZlcmxheVxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG4vLyBBZGQgbmV3IGdhbWUgdG8gdGhlIHNlcnZlclxuY29uc3QgYWRkTmV3R2FtZSA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy8nO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNyZWF0ZVVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgfSk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgcmVtb3ZlUHJlU3RyID0gcmVzLnJlc3VsdC5zbGljZSgxNCk7XG4gIGNvbnN0IHJlbW92ZVN1ZlN0ciA9IHJlbW92ZVByZVN0ci5zbGljZSgwLCAtNyk7XG4gIGRhdGEuaWQgPSByZW1vdmVTdWZTdHI7XG4gIGdhbWVzRGF0YS5wdXNoKGRhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGVhZGVyYm9hcmQnLCBKU09OLnN0cmluZ2lmeShnYW1lc0RhdGEpKTtcbn07XG5cbmFkZE5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG5ld0dhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWdhbWUnKTtcbiAgaWYgKG5ld0dhbWUudmFsdWUpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbmFtZTogbmV3R2FtZS52YWx1ZSxcbiAgICB9O1xuICAgIGF3YWl0IGFkZE5ld0dhbWUoZGF0YSk7XG4gICAgbmV3R2FtZS52YWx1ZSA9ICcnO1xuICB9XG59KTtcblxuZXhpc3RpbmdHYW1lcygpO1xubG9hZFBpY2tlZEdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=