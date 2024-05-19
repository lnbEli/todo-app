"use strict";
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["main"],{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! img/delete_forever.png */ "./src/img/delete_forever.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  font-family: Roboto;
}

:root {
  --main-projects-color: rgb(229, 243, 246);
  --main-projects-color-hover: rgb(193, 233, 242);
  --main-projects-color-delete: red;
  --main-projects-color-add-todo: invert(6%) sepia(90%) saturate(7146%)
    hue-rotate(248deg) brightness(136%) contrast(146%);
  --main-todos-color: rgb(235, 243, 245);
  --main-todos-color-hover: rgb(193, 233, 242);
  --main-projects-todos-box-shadow: 4px 4px 10px 1px rgba(6, 6, 6, 0.2);
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto Regular"), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 200;
}

body {
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  min-height: 650px;
}

.main-body {
  display: grid;
  grid-template-rows: minmax(50px, 1fr) 4fr;
  background-color: white;
  width: 98%;
  height: 95%;
  border-radius: 5px;
  overflow: auto;
  min-height: fit-content;
}

.top {
  border: 3px rgb(60, 59, 59) solid;
  grid-row: 1/2;
  background-color: rgb(203, 246, 254);
}

.logo {
  height: 100%;
  width: auto;
}

.bottom {
  border: 3px rgb(2, 2, 2) solid;
  grid-row: 2/3;
  display: grid;
  /* Add with JS when using three columns */
  grid-template-columns: 1fr 1fr 1fr;
  /* Add with JS when using two columns */
  /* grid-template-columns: 1fr 1fr; */
}

.left,
.center {
  display: grid;
  gap: 10px;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  min-width: max-content;
}

.left {
  grid-auto-rows: 28%;
}

.center {
  grid-auto-rows: 22%;
}

.right {
  overflow: scroll;
  padding: 10px;
  min-width: min-content;
}

.new-todo-div {
  min-width: fit-content;
  padding: 0 5px 0 5px;
}

.project {
  background-color: var(--main-projects-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: max-content;
  box-shadow: var(--main-projects-todos-box-shadow);
  border: 1px solid rgb(204, 204, 204);
  padding: 0 6px 0 6px;
}
.project-refresh:hover {
  background-color: var(--main-projects-color-hover);
}

.project-refresh-selected {
  background-color: var(--main-projects-color-hover);
}

.project-delete:hover {
  color: var(--main-projects-color-delete);
  cursor: url(${___CSS_LOADER_URL_REPLACEMENT_1___}), pointer;
}

.add-pointer:hover,
.add-project:hover {
  filter: var(--main-projects-color-add-todo);
}

.add-project-form ul {
  list-style: none;
}

.add-project-form li {
  padding-top: 5px;
}

.project-buttons-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-buttons-form input {
  width: 50%;
  cursor: pointer;
}

.todo {
  border: 1px solid rgb(204, 204, 204);
  border-radius: 8px;
  background-color: var(--main-todos-color);
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
  box-shadow: var(--main-projects-todos-box-shadow);
}

.todo-priority-low {
  border-right: 10px rgb(79, 168, 34) solid;
}
.todo-priority-medium {
  border-right: 10px rgb(241, 163, 39) solid;
}
.todo-priority-high {
  border-right: 10px rgb(239, 65, 42) solid;
}

.todo:hover {
  background-color: var(--main-todos-color-hover);
}

.todo-selected {
  background-color: var(--main-todos-color-hover);
}

.todo-btns {
  display: flex;
  align-items: center;
}

.todo-btns > span,
.completed-label {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
}

/* .todo-btns > span {
  padding-left: 80px;
} */

h5 {
  padding-bottom: 4px;
}

.bin {
  margin-left: 10px;
}

.selected-todo {
  border-radius: 8px;
  border: 1px solid rgb(204, 204, 204);
  height: 100%;
  box-shadow: var(--main-projects-todos-box-shadow);
  background-color: var(--main-todos-color);
}

h5 + p {
  font-size: 0.7rem;
}

.todo-details-list {
  padding: 15px;
  list-style: none;
}

.selected-todo > h3 {
  padding: 15px 0 0 15px;
}

.todo-detail-list-item {
  padding-bottom: 15px;
}

.todo-notes > p {
  color: rgb(0, 0, 2);
  max-height: 100px;
  overflow: auto;
}

img {
  width: 30px;
}

.add-todo-form-list {
  list-style: none;
  border-left: rgb(208, 207, 207) 1px solid;
  border-right: rgb(208, 207, 207) 1px solid;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 5px 1px 10px 1px rgba(6, 6, 6, 0.2);
  background-color: rgb(233, 244, 246);
}

.add-todo-form-list > * {
  width: 200px;
}

textarea {
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.add-todo-form-notes-list {
  padding: 15px;
  list-style: none;
  box-shadow: var(--main-projects-todos-box-shadow);
  border-left: rgb(208, 207, 207) 1px solid;
  border-right: rgb(208, 207, 207) 1px solid;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.add-todo-form-notes-list > li {
  padding-top: 20px;
}

textarea {
  border: 1px solid rgb(216, 214, 214);
  border-radius: 5px;
}

.add-todo-form-submit-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.submit {
  width: 15%;
  min-width: 50px;
}

.add-todo,
.add-project,
.project-refresh,
.todo,
.bin,
.add-pointer {
  cursor: pointer;
}

label {
  display: block;
  font-size: 1em;
}
.center-add-todo-div {
  justify-self: center;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center-add-todo-button {
  padding: 10px;
  cursor: pointer;
}

.project-delete {
  align-self: flex-end;
  padding-right: 2px;
}

input,
select {
  border-radius: 4px;
  border: 1px solid grey;
}

input {
  padding: 1px 4px 1px 4px;
}

.todo-detail-list-item > p,
.todo-detail-list-item > p > select,
.todo-detail-list-item > p > input {
  color: grey;
}

.detailed-todo-priority-low {
  box-shadow: 4px 4px 10px 1px rgba(79, 168, 34, 0.5);
}
.detailed-todo-priority-medium {
  box-shadow: 4px 4px 10px 1px rgba(241, 163, 39, 0.5);
}
.detailed-todo-priority-high {
  box-shadow: 4px 4px 10px 1px rgb(239, 65, 42, 0.5);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  font-family: Roboto;\n}\n\n:root {\n  --main-projects-color: rgb(229, 243, 246);\n  --main-projects-color-hover: rgb(193, 233, 242);\n  --main-projects-color-delete: red;\n  --main-projects-color-add-todo: invert(6%) sepia(90%) saturate(7146%)\n    hue-rotate(248deg) brightness(136%) contrast(146%);\n  --main-todos-color: rgb(235, 243, 245);\n  --main-todos-color-hover: rgb(193, 233, 242);\n  --main-projects-todos-box-shadow: 4px 4px 10px 1px rgba(6, 6, 6, 0.2);\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), url(\"Roboto-Regular.ttf\");\n  font-weight: 200;\n}\n\nbody {\n  background-color: grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  min-height: 650px;\n}\n\n.main-body {\n  display: grid;\n  grid-template-rows: minmax(50px, 1fr) 4fr;\n  background-color: white;\n  width: 98%;\n  height: 95%;\n  border-radius: 5px;\n  overflow: auto;\n  min-height: fit-content;\n}\n\n.top {\n  border: 3px rgb(60, 59, 59) solid;\n  grid-row: 1/2;\n  background-color: rgb(203, 246, 254);\n}\n\n.logo {\n  height: 100%;\n  width: auto;\n}\n\n.bottom {\n  border: 3px rgb(2, 2, 2) solid;\n  grid-row: 2/3;\n  display: grid;\n  /* Add with JS when using three columns */\n  grid-template-columns: 1fr 1fr 1fr;\n  /* Add with JS when using two columns */\n  /* grid-template-columns: 1fr 1fr; */\n}\n\n.left,\n.center {\n  display: grid;\n  gap: 10px;\n  padding: 10px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  min-width: max-content;\n}\n\n.left {\n  grid-auto-rows: 28%;\n}\n\n.center {\n  grid-auto-rows: 22%;\n}\n\n.right {\n  overflow: scroll;\n  padding: 10px;\n  min-width: min-content;\n}\n\n.new-todo-div {\n  min-width: fit-content;\n  padding: 0 5px 0 5px;\n}\n\n.project {\n  background-color: var(--main-projects-color);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  min-width: max-content;\n  box-shadow: var(--main-projects-todos-box-shadow);\n  border: 1px solid rgb(204, 204, 204);\n  padding: 0 6px 0 6px;\n}\n.project-refresh:hover {\n  background-color: var(--main-projects-color-hover);\n}\n\n.project-refresh-selected {\n  background-color: var(--main-projects-color-hover);\n}\n\n.project-delete:hover {\n  color: var(--main-projects-color-delete);\n  cursor: url(\"img/delete_forever.png\"), pointer;\n}\n\n.add-pointer:hover,\n.add-project:hover {\n  filter: var(--main-projects-color-add-todo);\n}\n\n.add-project-form ul {\n  list-style: none;\n}\n\n.add-project-form li {\n  padding-top: 5px;\n}\n\n.project-buttons-form {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-buttons-form input {\n  width: 50%;\n  cursor: pointer;\n}\n\n.todo {\n  border: 1px solid rgb(204, 204, 204);\n  border-radius: 8px;\n  background-color: var(--main-todos-color);\n  display: flex;\n  align-items: center;\n  padding: 15px;\n  justify-content: space-between;\n  box-shadow: var(--main-projects-todos-box-shadow);\n}\n\n.todo-priority-low {\n  border-right: 10px rgb(79, 168, 34) solid;\n}\n.todo-priority-medium {\n  border-right: 10px rgb(241, 163, 39) solid;\n}\n.todo-priority-high {\n  border-right: 10px rgb(239, 65, 42) solid;\n}\n\n.todo:hover {\n  background-color: var(--main-todos-color-hover);\n}\n\n.todo-selected {\n  background-color: var(--main-todos-color-hover);\n}\n\n.todo-btns {\n  display: flex;\n  align-items: center;\n}\n\n.todo-btns > span,\n.completed-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 5px;\n}\n\n/* .todo-btns > span {\n  padding-left: 80px;\n} */\n\nh5 {\n  padding-bottom: 4px;\n}\n\n.bin {\n  margin-left: 10px;\n}\n\n.selected-todo {\n  border-radius: 8px;\n  border: 1px solid rgb(204, 204, 204);\n  height: 100%;\n  box-shadow: var(--main-projects-todos-box-shadow);\n  background-color: var(--main-todos-color);\n}\n\nh5 + p {\n  font-size: 0.7rem;\n}\n\n.todo-details-list {\n  padding: 15px;\n  list-style: none;\n}\n\n.selected-todo > h3 {\n  padding: 15px 0 0 15px;\n}\n\n.todo-detail-list-item {\n  padding-bottom: 15px;\n}\n\n.todo-notes > p {\n  color: rgb(0, 0, 2);\n  max-height: 100px;\n  overflow: auto;\n}\n\nimg {\n  width: 30px;\n}\n\n.add-todo-form-list {\n  list-style: none;\n  border-left: rgb(208, 207, 207) 1px solid;\n  border-right: rgb(208, 207, 207) 1px solid;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 15px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  box-shadow: 5px 1px 10px 1px rgba(6, 6, 6, 0.2);\n  background-color: rgb(233, 244, 246);\n}\n\n.add-todo-form-list > * {\n  width: 200px;\n}\n\ntextarea {\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.add-todo-form-notes-list {\n  padding: 15px;\n  list-style: none;\n  box-shadow: var(--main-projects-todos-box-shadow);\n  border-left: rgb(208, 207, 207) 1px solid;\n  border-right: rgb(208, 207, 207) 1px solid;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.add-todo-form-notes-list > li {\n  padding-top: 20px;\n}\n\ntextarea {\n  border: 1px solid rgb(216, 214, 214);\n  border-radius: 5px;\n}\n\n.add-todo-form-submit-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.submit {\n  width: 15%;\n  min-width: 50px;\n}\n\n.add-todo,\n.add-project,\n.project-refresh,\n.todo,\n.bin,\n.add-pointer {\n  cursor: pointer;\n}\n\nlabel {\n  display: block;\n  font-size: 1em;\n}\n.center-add-todo-div {\n  justify-self: center;\n  align-self: flex-start;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.center-add-todo-button {\n  padding: 10px;\n  cursor: pointer;\n}\n\n.project-delete {\n  align-self: flex-end;\n  padding-right: 2px;\n}\n\ninput,\nselect {\n  border-radius: 4px;\n  border: 1px solid grey;\n}\n\ninput {\n  padding: 1px 4px 1px 4px;\n}\n\n.todo-detail-list-item > p,\n.todo-detail-list-item > p > select,\n.todo-detail-list-item > p > input {\n  color: grey;\n}\n\n.detailed-todo-priority-low {\n  box-shadow: 4px 4px 10px 1px rgba(79, 168, 34, 0.5);\n}\n.detailed-todo-priority-medium {\n  box-shadow: 4px 4px 10px 1px rgba(241, 163, 39, 0.5);\n}\n.detailed-todo-priority-high {\n  box-shadow: 4px 4px 10px 1px rgb(239, 65, 42, 0.5);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/application.js":
/*!****************************!*\
  !*** ./src/application.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _toCamelCase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toCamelCase.js */ "./src/toCamelCase.js");



class App {
  constructor() {
    this.projects = {
      defaultProject: new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](
        "Default Project",
        "Location for lonely Todos"
      ),
    };
    this.numberOfProjects = 1;
  }

  addProject(name, description) {
    const camelCaseName = (0,_toCamelCase_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
    //check if project name already exists
    if (this.projects[camelCaseName]) {
      console.log("Error, Name Already Exists");
    } else {
      //add new project
      const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, description);
      this.numberOfProjects++;
      this.projects[camelCaseName] = project;
    }
  }

  removeProject(name) {
    delete this.projects[(0,_toCamelCase_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name)];
  }
}


/***/ }),

/***/ "./src/createCenterColumnAddTodoHtmlButtonElement.js":
/*!***********************************************************!*\
  !*** ./src/createCenterColumnAddTodoHtmlButtonElement.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCenterColumnAddTodoHtmlButtonElement)
/* harmony export */ });
function createCenterColumnAddTodoHtmlButtonElement(project) {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const image = document.createElement("img");

  div.classList.add("center-add-todo-div");
  h2.textContent = "Add New Todo";

  image.classList.add("center-add-todo-button");
  image.dataset.project = project;
  image.src = "./img/addNote.png";
  image.alt = "add-todo";
  image.title = "Click to add new todo";

  div.appendChild(h2);
  div.appendChild(image);

  return div;
}


/***/ }),

/***/ "./src/createProjectFormHtmlElement.js":
/*!*********************************************!*\
  !*** ./src/createProjectFormHtmlElement.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectFormHtmlElement)
/* harmony export */ });
function createProjectFormHtmlElement() {
  const div = document.createElement("div");
  const form = document.createElement("form");
  const ul = document.createElement("ul");
  const liName = document.createElement("li");
  const liDescription = document.createElement("li");
  const liButtons = document.createElement("li");
  const labelName = document.createElement("label");
  const labelDescription = document.createElement("label");
  const h4Name = document.createElement("h4");
  const h4Description = document.createElement("h4");
  const inputName = document.createElement("input");
  const inputDescription = document.createElement("input");
  const inputButtonSubmit = document.createElement("input");
  const inputButtonClose = document.createElement("input");

  //Set attributes and classes of Elements
  div.classList.add("project");
  div.classList.add("new-project-div");
  form.classList.add("add-project-form");
  h4Name.textContent = "New Project Name:";
  h4Description.textContent = "Description:";
  labelName.htmlFor = "project-name-form-id";
  labelDescription.htmlFor = "project-description-form-id";
  inputName.classList.add("project-name-form");
  inputName.id = "project-name-form-id";
  inputName.setAttribute("type", "text");
  inputName.required = true;
  inputName.maxLength = "15";
  inputDescription.classList.add("project-description-form");
  inputDescription.id = "project-description-form-id";
  inputDescription.required = true;
  inputDescription.maxLength = "24";
  inputDescription.setAttribute("type", "text");
  liButtons.classList.add("project-buttons-form");
  inputButtonSubmit.classList.add("submit-project-button-form");
  inputButtonSubmit.setAttribute("type", "submit");
  inputButtonSubmit.setAttribute("value", "create");
  inputButtonClose.classList.add("close-project-button-form");
  inputButtonClose.setAttribute("type", "button");
  inputButtonClose.setAttribute("value", "close");

  //Create DOM structure
  div.appendChild(form);
  form.appendChild(ul);
  form.appendChild(ul);

  ul.appendChild(liName);
  liName.appendChild(labelName);
  labelName.appendChild(h4Name);
  liName.appendChild(inputName);

  ul.appendChild(liDescription);
  liDescription.appendChild(labelDescription);
  labelDescription.appendChild(h4Description);
  liDescription.appendChild(inputDescription);

  ul.appendChild(liButtons);
  liButtons.appendChild(inputButtonSubmit);
  liButtons.appendChild(inputButtonClose);

  return div;
}


/***/ }),

/***/ "./src/createProjectHtmlElement.js":
/*!*****************************************!*\
  !*** ./src/createProjectHtmlElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectHtmlElement)
/* harmony export */ });
function createProjectHtmlElement(name, description) {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const paragraph = document.createElement("p");
  const image = document.createElement("img");
  const span = document.createElement("span");
  div.classList.add("project");
  div.classList.add("project-refresh");
  h2.textContent = name;
  paragraph.textContent = description;
  image.classList.add("add-pointer");
  image.src = "./img/addNote.png";
  image.alt = "add-todo";
  image.title = "Click to add new todo";
  span.textContent = "✖";
  span.classList.add("project-delete");
  if (name === "Default Project") {
    span.style.visibility = "hidden";
  }
  div.appendChild(span);
  div.appendChild(h2);
  div.appendChild(paragraph);
  div.appendChild(image);

  return div;
}


/***/ }),

/***/ "./src/createProjectTabHtmlElement.js":
/*!********************************************!*\
  !*** ./src/createProjectTabHtmlElement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectTabHtmlElement)
/* harmony export */ });
function createProjectTabHtmlElement() {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const image = document.createElement("img");

  div.classList.add("project");
  div.classList.add("new-project-tab");
  h2.textContent = "Add New Project";

  image.classList.add("add-project");
  image.classList.add("new-project-button-tab");
  image.src = "./img/addLibrary.png";
  image.alt = "add-project";
  image.title = "Click to add new project";

  div.appendChild(h2);
  div.appendChild(image);

  return div;
}


/***/ }),

/***/ "./src/createTodoDetailedHtmlElement.js":
/*!**********************************************!*\
  !*** ./src/createTodoDetailedHtmlElement.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoDetailedHtmlElement)
/* harmony export */ });
function createTodoDetailedHtmlElement(
  name,
  description,
  dueDate,
  priority,
  notes,
  completed,
  dataSetIndex,
  dataSetProject
) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const ul = document.createElement("ul");
  const liDescription = document.createElement("li");
  const liDueDate = document.createElement("li");
  const liPriority = document.createElement("li");
  const liCompleted = document.createElement("li");
  const liNotes = document.createElement("li");
  const h4Description = document.createElement("h4");
  const h4DueDate = document.createElement("h4");
  const h4Priority = document.createElement("h4");
  const h4Completed = document.createElement("h4");
  const h4Notes = document.createElement("h4");
  const paragraphDescription = document.createElement("p");
  const paragraphDueDate = document.createElement("p");
  const paragraphPriority = document.createElement("p");
  const paragraphCompleted = document.createElement("p");
  const paragraphNotes = document.createElement("p");
  const input = document.createElement("input");
  const selectPriority = document.createElement("select");
  const selectCompleted = document.createElement("select");
  const optionLow = document.createElement("option");
  const optionMedium = document.createElement("option");
  const optionHigh = document.createElement("option");
  const optionYes = document.createElement("option");
  const optionNo = document.createElement("option");

  //Set attributes and classes of Elements
  div.classList.add("selected-todo");
  div.dataset.index = dataSetIndex;
  div.dataset.project = dataSetProject;
  h3.textContent = name;
  ul.classList.add("todo-details-list");
  liDescription.classList.add("todo-detail-list-item");
  h4Description.textContent = "Description:";
  paragraphDescription.textContent = description;
  liDueDate.classList.add("todo-detail-list-item");
  h4DueDate.textContent = "Due Date:";
  input.classList.add("due-date");
  input.setAttribute("type", "date");
  input.setAttribute("value", dueDate);
  liPriority.classList.add("todo-detail-list-item");
  h4Priority.textContent = "Priority:";
  selectPriority.setAttribute("id", "priority-select");

  optionLow.textContent = "Low";
  optionLow.setAttribute("value", "low");
  optionMedium.textContent = "Medium";
  optionMedium.setAttribute("value", "medium");
  optionHigh.textContent = "High";
  optionHigh.setAttribute("value", "high");

  if (priority === "high") {
    optionHigh.selected = "selected";
  } else if (priority === "medium") {
    optionMedium.selected = "selected";
  } else if (priority === "low") {
    optionLow.selected = "selected";
  } else {
    console.log("Error, check spelling");
  }

  liCompleted.classList.add("todo-detail-list-item");
  h4Completed.textContent = "Completed:";
  selectCompleted.setAttribute("id", "yes-no-select");
  optionYes.textContent = "Yes";
  optionYes.setAttribute("value", "yes");
  optionNo.textContent = "No";
  optionNo.setAttribute("value", "no");
  completed
    ? (optionYes.selected = "selected")
    : (optionNo.selected = "selected");
  liNotes.classList.add("todo-notes");
  liNotes.classList.add("todo-detail-list-item");
  h4Notes.textContent = "Notes:";
  paragraphNotes.setAttribute("contenteditable", "true");
  paragraphNotes.classList.add("notes-deatiled-todo");
  paragraphNotes.textContent = notes;

  //Create DOM structure
  div.appendChild(h3);
  div.appendChild(ul);
  ul.appendChild(liDescription);
  liDescription.appendChild(h4Description);
  liDescription.appendChild(paragraphDescription);
  ul.appendChild(liDueDate);
  liDueDate.appendChild(h4DueDate);
  liDueDate.appendChild(paragraphDueDate);
  paragraphDueDate.appendChild(input);
  ul.appendChild(liPriority);
  liPriority.appendChild(h4Priority);
  liPriority.appendChild(paragraphPriority);
  paragraphPriority.appendChild(selectPriority);
  selectPriority.appendChild(optionLow);
  selectPriority.appendChild(optionMedium);
  selectPriority.appendChild(optionHigh);
  ul.appendChild(liCompleted);
  liCompleted.appendChild(h4Completed);
  liCompleted.appendChild(paragraphCompleted);
  paragraphCompleted.appendChild(selectCompleted);
  selectCompleted.appendChild(optionYes);
  selectCompleted.appendChild(optionNo);
  ul.appendChild(liNotes);
  liNotes.appendChild(h4Notes);
  liNotes.appendChild(paragraphNotes);

  return div;
}


/***/ }),

/***/ "./src/createTodoFormHtmlElement.js":
/*!******************************************!*\
  !*** ./src/createTodoFormHtmlElement.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoFormHtmlElement)
/* harmony export */ });
function createTodoFormHtmlElement(project) {
  const div = document.createElement("div");

  const form = document.createElement("form");

  const ul = document.createElement("ul");

  const ulNotes = document.createElement("ul");

  const liName = document.createElement("li");
  const liDescription = document.createElement("li");
  const liDueDate = document.createElement("li");
  const liPriority = document.createElement("li");
  const liCompleted = document.createElement("li");
  const liNotes = document.createElement("li");
  const liButtons = document.createElement("li");

  const h4Name = document.createElement("h4");
  const h4Description = document.createElement("h4");
  const h4DueDate = document.createElement("h4");
  const h4Priority = document.createElement("h4");
  const h4Completed = document.createElement("h4");
  const h4Notes = document.createElement("h4");

  const labelName = document.createElement("label");
  const labelDescription = document.createElement("label");
  const labelDueDate = document.createElement("label");
  const labelPriority = document.createElement("label");
  const labelCompleted = document.createElement("label");
  const labelNotes = document.createElement("label");

  const paragraphName = document.createElement("p");
  const paragraphDescription = document.createElement("p");
  const paragraphDueDate = document.createElement("p");
  const paragraphPriority = document.createElement("p");
  const paragraphCompleted = document.createElement("p");
  const paragraphNotes = document.createElement("p");

  const inputName = document.createElement("input");
  const inputDescription = document.createElement("input");
  const inputDueDate = document.createElement("input");
  const inputButtonSubmit = document.createElement("input");
  const inputButtonClose = document.createElement("input");

  const selectPriority = document.createElement("select");
  const selectCompleted = document.createElement("select");

  const optionLow = document.createElement("option");
  const optionMedium = document.createElement("option");
  const optionHigh = document.createElement("option");
  const optionYes = document.createElement("option");
  const optionNo = document.createElement("option");

  const textArea = document.createElement("textarea");

  //Set attributes and classes of Elements
  div.classList.add("new-todo-div");
  div.dataset.project = project;
  form.classList.add("add-todo-form");
  ul.classList.add("add-todo-form-list");

  h4Name.textContent = "Todo Name:";
  labelName.htmlFor = "todo-name-form-id";
  inputName.setAttribute("type", "text");
  inputName.classList.add("todo-name-form");
  inputName.id = "todo-name-form-id";
  inputName.required = true;
  inputName.minLength = "4";
  inputName.maxLength = "20";

  h4Description.textContent = "Description:";
  labelDescription.htmlFor = "todo-description-form-id";
  inputDescription.setAttribute("type", "text");
  inputDescription.classList.add("todo-description-form");
  inputDescription.id = "todo-description-form-id";
  inputDescription.required = true;
  inputDescription.minLength = "15";
  inputDescription.maxLength = "50";

  h4DueDate.textContent = "Due Date:";
  labelDueDate.htmlFor = "todo-date-form-id";
  inputDueDate.setAttribute("type", "date");
  inputDueDate.classList.add("todo-date-form");
  inputDueDate.id = "todo-date-form-id";

  h4Priority.textContent = "Priority:";
  labelPriority.htmlFor = "todo-priority-form-id";
  selectPriority.setAttribute("id", "priority-select");
  selectPriority.classList.add("todo-priority-form");
  selectPriority.id = "todo-priority-form-id";

  optionLow.textContent = "Low";
  optionLow.setAttribute("value", "low");
  optionMedium.textContent = "Medium";
  optionMedium.setAttribute("value", "medium");
  optionMedium.selected = "selected";
  optionHigh.textContent = "High";
  optionHigh.setAttribute("value", "high");

  h4Completed.textContent = "Completed:";
  labelCompleted.htmlFor = "todo-completed-form-id";
  selectCompleted.setAttribute("id", "yes-no-select");
  selectCompleted.classList.add("todo-completed-form");
  selectCompleted.id = "todo-completed-form-id";

  optionYes.textContent = "Yes";
  optionYes.setAttribute("value", "yes");
  optionNo.textContent = "No";
  optionNo.setAttribute("value", "no");
  optionNo.selected = "selected";

  ulNotes.classList.add("add-todo-form-notes-list");
  h4Notes.textContent = "Notes:";
  labelNotes.htmlFor = "todo-notes-form-id";
  textArea.setAttribute("rows", "10");
  textArea.classList.add("todo-notes-form");
  textArea.id = "todo-notes-form-id";

  liButtons.classList.add("add-todo-form-submit-button");
  inputButtonSubmit.classList.add("submit-todo");
  inputButtonSubmit.classList.add("submit");
  inputButtonSubmit.setAttribute("type", "submit");
  inputButtonSubmit.setAttribute("value", "Create");
  inputButtonClose.classList.add("submit");
  inputButtonClose.classList.add("close-todo");
  inputButtonClose.setAttribute("type", "button");
  inputButtonClose.setAttribute("value", "Close");

  //Create DOM structure
  div.appendChild(form);
  form.appendChild(ul);
  form.appendChild(ulNotes);

  ul.appendChild(liName);
  liName.appendChild(labelName);
  labelName.appendChild(h4Name);
  liName.appendChild(paragraphName);
  paragraphName.appendChild(inputName);

  ul.appendChild(liDescription);
  liDescription.appendChild(labelDescription);
  labelDescription.appendChild(h4Description);
  liDescription.appendChild(paragraphDescription);
  paragraphDescription.appendChild(inputDescription);

  ul.appendChild(liDueDate);
  liDueDate.appendChild(labelDueDate);
  labelDueDate.appendChild(h4DueDate);
  liDueDate.appendChild(paragraphDueDate);
  paragraphDueDate.appendChild(inputDueDate);

  ul.appendChild(liPriority);
  liPriority.appendChild(labelPriority);
  labelPriority.appendChild(h4Priority);
  liPriority.appendChild(paragraphPriority);
  paragraphPriority.appendChild(selectPriority);
  selectPriority.appendChild(optionLow);
  selectPriority.appendChild(optionMedium);
  selectPriority.appendChild(optionHigh);

  ul.appendChild(liCompleted);
  liCompleted.appendChild(labelCompleted);
  labelCompleted.appendChild(h4Completed);
  liCompleted.appendChild(paragraphCompleted);
  paragraphCompleted.appendChild(selectCompleted);
  selectCompleted.appendChild(optionYes);
  selectCompleted.appendChild(optionNo);

  ulNotes.appendChild(liNotes);
  liNotes.appendChild(labelNotes);
  labelNotes.appendChild(h4Notes);
  liNotes.appendChild(paragraphNotes);
  paragraphNotes.appendChild(textArea);

  ulNotes.appendChild(liButtons);
  liButtons.appendChild(inputButtonSubmit);
  liButtons.appendChild(inputButtonClose);

  return div;
}


/***/ }),

/***/ "./src/createTodoHtmlElement.js":
/*!**************************************!*\
  !*** ./src/createTodoHtmlElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoHtmlElement)
/* harmony export */ });


function createTodoHtmlElement(
  name,
  completed,
  due,
  dataSetIndex,
  dataSetProject
) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const h5Completed = document.createElement("h5");
  const h5Due = document.createElement("h5");
  const spanOuter = document.createElement("span");
  const spanInnerOne = document.createElement("span");
  const spanInnerTwo = document.createElement("span");
  const paragraph = document.createElement("p");
  const label = document.createElement("label");
  const input = document.createElement("input");
  // const dateFormatted = format(parseISO(due), "dd/MM/yy");

  div.classList.add("todo");
  div.setAttribute("data-index", dataSetIndex);
  div.setAttribute("data-project", dataSetProject);
  h3.textContent = name;
  spanOuter.classList.add("todo-btns");
  label.classList.add("completed-label");
  h5Completed.textContent = "Completed";
  input.setAttribute("id", `checkbox-${dataSetIndex}`);
  input.setAttribute("type", "checkbox");
  input.classList.add("checkbox");
  completed ? (input.checked = true) : (input.checked = false);
  h5Due.textContent = "Due Date";
  paragraph.textContent = due;
  spanInnerTwo.classList.add("bin");
  spanInnerTwo.textContent = "🗑";

  div.appendChild(h3);
  div.appendChild(spanOuter);
  spanOuter.appendChild(label);
  label.appendChild(h5Completed);
  label.appendChild(input);
  spanOuter.appendChild(spanInnerOne);
  spanInnerOne.appendChild(h5Due);
  spanInnerOne.appendChild(paragraph);
  spanOuter.appendChild(spanInnerTwo);

  return div;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application.js */ "./src/application.js");
/* harmony import */ var _createTodoHtmlElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodoHtmlElement.js */ "./src/createTodoHtmlElement.js");
/* harmony import */ var _createProjectHtmlElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProjectHtmlElement.js */ "./src/createProjectHtmlElement.js");
/* harmony import */ var _createTodoDetailedHtmlElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTodoDetailedHtmlElement.js */ "./src/createTodoDetailedHtmlElement.js");
/* harmony import */ var _createTodoFormHtmlElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTodoFormHtmlElement.js */ "./src/createTodoFormHtmlElement.js");
/* harmony import */ var _createProjectFormHtmlElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createProjectFormHtmlElement.js */ "./src/createProjectFormHtmlElement.js");
/* harmony import */ var _createProjectTabHtmlElement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createProjectTabHtmlElement.js */ "./src/createProjectTabHtmlElement.js");
/* harmony import */ var _sampleProjectsData_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sampleProjectsData.js */ "./src/sampleProjectsData.js");
/* harmony import */ var _toCamelCase_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toCamelCase.js */ "./src/toCamelCase.js");
/* harmony import */ var _createCenterColumnAddTodoHtmlButtonElement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createCenterColumnAddTodoHtmlButtonElement */ "./src/createCenterColumnAddTodoHtmlButtonElement.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storageAvailable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./storageAvailable.js */ "./src/storageAvailable.js");














const todoApp = new _application_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const leftColumn = document.querySelector(".left");
const centerColumn = document.querySelector(".center");
const rightColumn = document.querySelector(".right");
const bottom = document.querySelector(".bottom");

//start up
function init() {
  getAnyAvailableLocalStorage();
  leftColumn.appendChild((0,_createProjectTabHtmlElement_js__WEBPACK_IMPORTED_MODULE_7__["default"])());
  addEventListenerAddProjectButton();
  populateProjectsDom();
  populateTodosDom("defaultProject");
  changeColorOfFirstProjectAndTodo();
  populateTodoDetailsDom("defaultProject", 0);
}
init();

function openAddTodoForm(project) {
  bottom.appendChild((0,_createTodoFormHtmlElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(project));
  removeCenterColumnAddTodoButton();
  addEventListenerToTodoFormButtons();
  setTwoColumnLayout();
  disableAddTodoButtons();
  disableAddProjectButton();
}

function submitTodo(e) {
  const name = document.querySelector(".todo-name-form");
  const description = document.querySelector(".todo-description-form");
  const todoFormElement = document.querySelector(".new-todo-div");
  const project = todoFormElement.dataset.project;
  console.log(project);
  const lastTodoIndex = todoApp.projects[project].todos.length - 1;

  if ((name.value === "") | (description.value === "")) {
    return;
  } else {
    e.preventDefault();
    submitTodoValues();
    todoFormElement.remove();
    setThreeColumnLayout();
    populateTodosDom(project);
    changeColorOfLastAddedTodoDom();
    populateTodoDetailsDom(project, lastTodoIndex + 1);
    enableAddTodoButtons();
    enableAddProjectButton();
  }
}

function closeTodo(e) {
  e.preventDefault();
  const todoFormElement = document.querySelector(".new-todo-div");
  const project = todoFormElement.dataset.project;
  todoFormElement.remove();
  setThreeColumnLayout();
  populateTodosDom(project);
  enableAddTodoButtons();
  enableAddProjectButton();
}

function addProject() {
  const addProjectTab = document.querySelector(".new-project-tab");
  addProjectTab.remove();
  leftColumn.prepend((0,_createProjectFormHtmlElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])());
  addEventListenerNewProjectButtons();
  disableAddTodoButtons();
}

function createProject(e) {
  const addProjectName = document.querySelector(".project-name-form");
  const addProjectDescription = document.querySelector(
    ".project-description-form"
  );

  if (addProjectName.value !== "" && addProjectDescription.value !== "") {
    e.preventDefault();
    todoApp.addProject(addProjectName.value, addProjectDescription.value);
    addCenterColumnAddTodoButton((0,_toCamelCase_js__WEBPACK_IMPORTED_MODULE_9__["default"])(addProjectName.value));
    addProjectName.value = "";
    addProjectDescription.value = "";
    setToLocalStorage();
    populateProjectsDom();
    closeProject();
    changeColorOfLastAddedProjectDom();
  } else {
    return;
  }
}

function closeProject() {
  const addProjectForm = document.querySelector(".new-project-div");
  addProjectForm.remove();
  leftColumn.prepend((0,_createProjectTabHtmlElement_js__WEBPACK_IMPORTED_MODULE_7__["default"])());
  addEventListenerAddProjectButton();
  enableAddTodoButtons();
}

//Add EventListeners to buttons functions
function addEventListenerToTodoFormButtons() {
  const submitTodoButton = document.querySelector(".submit-todo");
  const closeTodoButton = document.querySelector(".close-todo");
  closeTodoButton.addEventListener("click", closeTodo);
  submitTodoButton.addEventListener("click", submitTodo);
}

function addEventListenerToAddTodoButtons() {
  const addTodoButton = document.querySelectorAll(".add-pointer");
  addTodoButton.forEach((element) => {
    element.addEventListener("click", () => {
      const project = (0,_toCamelCase_js__WEBPACK_IMPORTED_MODULE_9__["default"])(
        element.parentElement.children[1].textContent
      );
      openAddTodoForm(project);
    });
  });
}

function addEventListenerNewProjectButtons() {
  const createProjectButton = document.querySelector(
    ".submit-project-button-form"
  );
  const closeProjectButton = document.querySelector(
    ".close-project-button-form"
  );
  createProjectButton.addEventListener("click", createProject);
  closeProjectButton.addEventListener("click", closeProject);
}

function addEventListenerAddProjectButton() {
  const addProjectButton = document.querySelector(".new-project-button-tab");
  addProjectButton.addEventListener("click", addProject);
}

function addEventListenerPopulateProjectTodos() {
  const projectsDom = document.querySelectorAll(".project-refresh");
  projectsDom.forEach((project) => {
    project.addEventListener("click", () => {
      const selectedProject = (0,_toCamelCase_js__WEBPACK_IMPORTED_MODULE_9__["default"])(project.children[1].textContent);
      toggleHoverColorProjects(project);
      populateTodosDom(selectedProject);
      changeColorOfSelectedTodoDom();
      populateTodoDetailsDom(selectedProject, 0);
    });
  });
}

function addEventListenerPopulateTodoDetails() {
  const todosDom = document.querySelectorAll(".todo");
  todosDom.forEach((todo) => {
    todo.addEventListener("click", () => {
      const selectedtodoIndex = Number(todo.dataset.index);
      const currentProject = todo.dataset.project;
      populateTodoDetailsDom(currentProject, selectedtodoIndex);
      toggleHoverColorTodos(todo);
    });
  });
}

function addEventListenerToDeleteTodoButtons() {
  const deleteButtons = document.querySelectorAll(".bin");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      //stops event bubbling
      e.stopPropagation();
      const currentProject = button.parentElement.parentElement.dataset.project;
      const todoIndex = button.parentElement.parentElement.dataset.index;
      todoApp.projects[currentProject].todos.splice(todoIndex, 1);
      setToLocalStorage();
      populateTodosDom(currentProject);
      populateTodoDetailsDom(currentProject, Math.max(0, todoIndex - 1));
      changeColorOfLastAddedTodoDom();
    });
  });
}

function addEventListenerToDeleteProjectButtons() {
  const deleteButtons = document.querySelectorAll(".project-delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      //stops event bubbling
      e.stopPropagation();
      const currentProject = (0,_toCamelCase_js__WEBPACK_IMPORTED_MODULE_9__["default"])(
        button.parentElement.querySelector("h2").textContent
      );
      delete todoApp.projects[currentProject];
      setToLocalStorage();
      populateProjectsDom();
      const approxFirstProjectInProjects = Object.keys(todoApp.projects)[0];
      populateTodosDom(approxFirstProjectInProjects);
      populateTodoDetailsDom(approxFirstProjectInProjects, 0);
      changeColorOfFirstProjectAndTodo();
    });
  });
}

function addEventListenerToCenterAddTodoButton() {
  const addTodoButton = document.querySelector(".center-add-todo-button");
  const currentProject = addTodoButton.dataset.project;

  addTodoButton.addEventListener("click", () => {
    openAddTodoForm(currentProject);
  });
}

function addEventListenerToCompletedTodoCheckbox() {
  const completedCheckboxes = document.querySelectorAll(".checkbox");
  completedCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      const currentProject =
        checkbox.parentElement.parentElement.parentElement.dataset.project;
      const todoIndex = Number(
        checkbox.parentElement.parentElement.parentElement.dataset.index
      );
      const todo = todoApp.projects[currentProject].todos[todoIndex];

      todo.completed ? (todo.completed = false) : (todo.completed = true);
      setToLocalStorage();
    });
  });
}

function addEventListenerToDetailedTodo() {
  const dueDateInput = document.querySelector(".due-date");
  const selectedTodo = document.querySelector(".selected-todo");
  const currentProject = selectedTodo.dataset.project;
  const todoIndex = selectedTodo.dataset.index;
  const todo = todoApp.projects[currentProject].todos[todoIndex];
  const completedInput = document.getElementById("yes-no-select");
  const priorityInput = document.getElementById("priority-select");
  const notesInput = document.querySelector(".notes-deatiled-todo");

  //eventListeners
  dueDateInput.addEventListener("change", () => {
    todo.dueDate = dueDateInput.value;
    populateTodosDom(currentProject);
    populateTodoDetailsDom(currentProject, todoIndex);
    changeColorOfTodo(todoIndex);
    setToLocalStorage();
  });

  completedInput.addEventListener("change", () => {
    completedInput.value === "yes"
      ? (todo.completed = true)
      : (todo.completed = false);
    populateTodosDom(currentProject);
    populateTodoDetailsDom(currentProject, todoIndex);
    changeColorOfTodo(todoIndex);
    setToLocalStorage();
  });

  priorityInput.addEventListener("change", () => {
    todo.priority = priorityInput.value;
    populateTodosDom(currentProject);
    populateTodoDetailsDom(currentProject, todoIndex);
    changeColorOfTodo(todoIndex);
    setToLocalStorage();
  });

  notesInput.addEventListener("focusout", () => {
    todo.notes = notesInput.textContent;
    setToLocalStorage();
  });
}

function removeAllProjectsDom() {
  const projectsNode = document.querySelectorAll(".project-refresh");
  projectsNode.forEach((element) => {
    element.remove();
  });
}

function removeAllTodosDom() {
  const todoNode = document.querySelectorAll(".todo");
  todoNode.forEach((element) => {
    element.remove();
  });
}

function removeTodoDetailsDom() {
  const todoDetail = document.querySelector(".selected-todo");
  if (todoDetail) {
    todoDetail.remove();
  }
}

//function to create project in DOM
function populateProjectsDom() {
  removeAllProjectsDom();
  const projects = Object.values(todoApp.projects);

  projects.forEach((project) => {
    leftColumn.appendChild(
      (0,_createProjectHtmlElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(project.name, project.description)
    );
  });
  addEventListenerToAddTodoButtons();
  addEventListenerPopulateProjectTodos();
  addEventListenerToDeleteProjectButtons();
  removeTodoDetailsDom();
  removeAllTodosDom();
}

function populateTodosDom(project) {
  removeAllTodosDom();
  const todoColumn = document.querySelector(".center");
  const todosArray = todoApp.projects[project].todos;
  if (todosArray.length <= 0 && centerColumn.children.length <= 0) {
    addCenterColumnAddTodoButton(project);
  } else if (todosArray.length <= 0 && centerColumn.children.length === 1) {
    return;
  } else {
    let dataSetIndex = 0;
    todosArray.forEach((todo) => {
      todoColumn.appendChild(
        (0,_createTodoHtmlElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
          todo.name,
          todo.completed,
          todo.dueDate,
          dataSetIndex,
          project
        )
      );
      dataSetIndex++;
    });

    addEventListenerPopulateTodoDetails();
    addEventListenerToDeleteTodoButtons();
    addEventListenerToCompletedTodoCheckbox();
    removeCenterColumnAddTodoButton();
    addPriorityColorToTodos();
  }
}

function disableAddTodoButtons() {
  const addTodoButton = document.querySelectorAll(".project-refresh");
  addTodoButton.forEach((button) => {
    button.style.pointerEvents = "none";
  });
}

function enableAddTodoButtons() {
  const addTodoButton = document.querySelectorAll(".project-refresh");
  addTodoButton.forEach((button) => {
    button.style.pointerEvents = "auto";
  });
}

function disableAddProjectButton() {
  const addProjectButton = document.querySelector(".new-project-button-tab");
  addProjectButton.style.pointerEvents = "none";
}

function enableAddProjectButton() {
  const addProjectButton = document.querySelector(".new-project-button-tab");
  addProjectButton.style.pointerEvents = "auto";
}

function submitTodoValues() {
  const name = document.querySelector(".todo-name-form");
  const description = document.querySelector(".todo-description-form");
  const dueDate = document.querySelector(".todo-date-form");
  const priority = document.querySelector(".todo-priority-form");
  const completed = document.querySelector(".todo-completed-form");
  const notes = document.querySelector(".todo-notes-form");
  const project = document.querySelector(".new-todo-div").dataset.project;

  todoApp.projects[project].addTodo(
    name.value,
    description.value,
    dueDate.value,
    priority.value,
    notes.value,
    completed.value
  );

  setToLocalStorage();
}

function populateTodoDetailsDom(project, todoIndex) {
  const selectedTodo = todoApp.projects[project].todos[todoIndex];
  removeTodoDetailsDom();
  if (selectedTodo) {
    rightColumn.appendChild(
      (0,_createTodoDetailedHtmlElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
        selectedTodo.name,
        selectedTodo.description,
        selectedTodo.dueDate,
        selectedTodo.priority,
        selectedTodo.notes,
        selectedTodo.completed,
        todoIndex,
        project
      )
    );
    addEventListenerToDetailedTodo();
    addPriorityColorToDetailedTodo();
  }
}

function setThreeColumnLayout() {
  centerColumn.style.display = "grid";
  rightColumn.style.display = "block";
  bottom.style.gridTemplateColumns = "1fr 1fr 1fr";
}

function setTwoColumnLayout() {
  bottom.style.gridTemplateColumns = "1fr 1fr";
  centerColumn.style.display = "none";
  rightColumn.style.display = "none";
}

function addCenterColumnAddTodoButton(project) {
  centerColumn.style.gridAutoRows = "100%";
  centerColumn.appendChild((0,_createCenterColumnAddTodoHtmlButtonElement__WEBPACK_IMPORTED_MODULE_10__["default"])(project));
  addEventListenerToCenterAddTodoButton();
}

function removeCenterColumnAddTodoButton() {
  centerColumn.style.gridAutoRows = "22%";
  const centerAddTodoButton = document.querySelector(".center-add-todo-div");
  if (centerAddTodoButton) {
    centerAddTodoButton.remove();
  }
}

function setToLocalStorage() {
  const currentProjectsJSON = JSON.stringify(todoApp.projects);
  localStorage.setItem("projects", currentProjectsJSON);
}

function getLocalStorage() {
  const localStorageProjectsJSON = localStorage.getItem("projects");
  const projects = JSON.parse(localStorageProjectsJSON);
  for (let project in projects) {
    Object.setPrototypeOf(projects[project], _project_js__WEBPACK_IMPORTED_MODULE_11__["default"].prototype);
  }
  return projects;
}

function getAnyAvailableLocalStorage() {
  if ((0,_storageAvailable_js__WEBPACK_IMPORTED_MODULE_12__["default"])("localStorage")) {
    if (getLocalStorage() === null) {
      (0,_sampleProjectsData_js__WEBPACK_IMPORTED_MODULE_8__["default"])(todoApp);
    } else {
      todoApp.projects = getLocalStorage();
    }
  } else {
    console.log("Local storage not available");
  }
}

//Function to change colour of currently selected todos and projects.

function toggleHoverColorProjects(projectElement) {
  const projectsDom = document.querySelectorAll(".project-refresh");
  projectsDom.forEach((element) => {
    element.classList.remove("project-refresh-selected");
  });
  projectElement.classList.add("project-refresh-selected");
}

function changeColorOfLastAddedProjectDom() {
  const projectsDom = document.querySelectorAll(".project-refresh");
  const lastProject = projectsDom[projectsDom.length - 1];

  if (lastProject) {
    lastProject.classList.add("project-refresh-selected");
  }
}

function toggleHoverColorTodos(todoElement) {
  const todosDom = document.querySelectorAll(".todo");
  todosDom.forEach((element) => {
    element.classList.remove("todo-selected");
  });
  todoElement.classList.add("todo-selected");
}

function changeColorOfSelectedTodoDom() {
  const firstTodoDom = document.querySelector(".todo");
  if (firstTodoDom) {
    firstTodoDom.classList.add("todo-selected");
  }
}

function changeColorOfLastAddedTodoDom() {
  const todosDom = document.querySelectorAll(".todo");
  const lastTodo = todosDom[todosDom.length - 1];

  if (lastTodo) {
    lastTodo.classList.add("todo-selected");
  }
}

function changeColorOfFirstProjectAndTodo() {
  const firstProject = document.querySelector(".project-refresh");
  firstProject.classList.add("project-refresh-selected");
  const firstTodo = document.querySelector(".todo");
  firstTodo.classList.add("todo-selected");
}

function changeColorOfTodo(todoIndex) {
  const todosDom = document.querySelectorAll(".todo");
  const selectedTodo = todosDom[todoIndex];
  selectedTodo.classList.add("todo-selected");
}

function addPriorityColorToTodos() {
  const todosDom = document.querySelectorAll(".todo");
  todosDom.forEach((todo) => {
    const projectName = todo.dataset.project;
    const priority =
      todoApp.projects[projectName].todos[todo.dataset.index].priority;
    todo.classList.add(`todo-priority-${priority}`);
  });
}

function addPriorityColorToDetailedTodo() {
  const detailedTodoDom = document.querySelector(".selected-todo");
  console.log(detailedTodoDom);
  const projectName = detailedTodoDom.dataset.project;
  const todoIndex = detailedTodoDom.dataset.index;
  const priority = todoApp.projects[projectName].todos[todoIndex].priority;
  detailedTodoDom.classList.add(`detailed-todo-priority-${priority}`);
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.todos = [];
    this.completedPercentage = 0;
  }

  addTodo(name, description, dueDate, priority, notes, completed) {
    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
      name,
      description,
      dueDate,
      priority,
      notes,
      completed
    );
    this.todos.push(todo);
  }

  //not used
  removeTodo(name) {
    const selectedTodoIndex = this.todos.findIndex((i) => i.name === name);
    this.todos.splice(selectedTodoIndex, 1);
  }
}


/***/ }),

/***/ "./src/sampleProjectsData.js":
/*!***********************************!*\
  !*** ./src/sampleProjectsData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sampleProjectsData)
/* harmony export */ });
function sampleProjectsData(todoApp) {
  todoApp.addProject("Project One", "My First Project");

  todoApp.projects.projectOne.addTodo(
    "Goodbye Note",
    "Terrible task",
    "2018-07-22",
    "medium",
    "Notes are boring",
    false
  );

  todoApp.projects.projectOne.addTodo(
    "Must do!",
    "Amazing task",
    "2012-07-02",
    "low",
    "Notes are the best",
    false
  );

  todoApp.projects.projectOne.addTodo(
    "Welcome",
    "task",
    "2015-05-02",
    "low",
    "notes are boring",
    true
  );
  todoApp.projects.defaultProject.addTodo(
    "Feedback?",
    "Would be appreciated",
    "2018-11-24",
    "low",
    "Notes are awesome",
    false
  );

  todoApp.projects.defaultProject.addTodo(
    "My second note",
    "Amazing Default",
    "2016-02-24",
    "high",
    "Notes are OK",
    true
  );

  todoApp.projects.defaultProject.addTodo(
    "My third note",
    "taskish",
    "2018-09-21",
    "low",
    "notes are hmmm",
    true
  );
}


/***/ }),

/***/ "./src/storageAvailable.js":
/*!*********************************!*\
  !*** ./src/storageAvailable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}


/***/ }),

/***/ "./src/toCamelCase.js":
/*!****************************!*\
  !*** ./src/toCamelCase.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toCamelCase)
/* harmony export */ });
function toCamelCase(str) {
  let answer = str.toLowerCase();
  return answer
    .split(" ")
    .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(
    name,
    description,
    dueDate,
    priority,
    notes = null,
    completed = false
  ) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed;
  }
  //not used
  changePriority(level) {
    this.priority = level;
  }
  //not used
  completed() {
    this.completed = true;
  }
}


/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/img/delete_forever.png":
/*!************************************!*\
  !*** ./src/img/delete_forever.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "731ccc9ea336568dbd77.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXFDO0FBQ2pGLDRDQUE0QywySEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxtQ0FBbUM7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFh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QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JIZTtBQUNmOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25McUQ7O0FBRXRDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxhQUFhO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERxQjtBQUNjO0FBQzRCO0FBQ007QUFDVTtBQUNSO0FBQ007QUFDRjtBQUNsQjtBQUNkO0FBQzJEO0FBQ25FO0FBQ2tCOztBQUVyRCxvQkFBb0IsdURBQUc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJFQUEyQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix5RUFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNEVBQTRCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyREFBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyRUFBMkI7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkRBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkRBQVc7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSx3RUFBd0I7QUFDOUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFxQjtBQUM3QjtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jcmVhdGVDZW50ZXJDb2x1bW5BZGRUb2RvSHRtbEJ1dHRvbkVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY3JlYXRlUHJvamVjdEZvcm1IdG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jcmVhdGVQcm9qZWN0SHRtbEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY3JlYXRlUHJvamVjdFRhYkh0bWxFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NyZWF0ZVRvZG9EZXRhaWxlZEh0bWxFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NyZWF0ZVRvZG9Gb3JtSHRtbEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY3JlYXRlVG9kb0h0bWxFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc2FtcGxlUHJvamVjdHNEYXRhLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0b3JhZ2VBdmFpbGFibGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9DYW1lbENhc2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1nL2RlbGV0ZV9mb3JldmVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbjpyb290IHtcbiAgLS1tYWluLXByb2plY3RzLWNvbG9yOiByZ2IoMjI5LCAyNDMsIDI0Nik7XG4gIC0tbWFpbi1wcm9qZWN0cy1jb2xvci1ob3ZlcjogcmdiKDE5MywgMjMzLCAyNDIpO1xuICAtLW1haW4tcHJvamVjdHMtY29sb3ItZGVsZXRlOiByZWQ7XG4gIC0tbWFpbi1wcm9qZWN0cy1jb2xvci1hZGQtdG9kbzogaW52ZXJ0KDYlKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDcxNDYlKVxuICAgIGh1ZS1yb3RhdGUoMjQ4ZGVnKSBicmlnaHRuZXNzKDEzNiUpIGNvbnRyYXN0KDE0NiUpO1xuICAtLW1haW4tdG9kb3MtY29sb3I6IHJnYigyMzUsIDI0MywgMjQ1KTtcbiAgLS1tYWluLXRvZG9zLWNvbG9yLWhvdmVyOiByZ2IoMTkzLCAyMzMsIDI0Mik7XG4gIC0tbWFpbi1wcm9qZWN0cy10b2Rvcy1ib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMXB4IHJnYmEoNiwgNiwgNiwgMC4yKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBSZWd1bGFyXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiA2NTBweDtcbn1cblxuLm1haW4tYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDUwcHgsIDFmcikgNGZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDk4JTtcbiAgaGVpZ2h0OiA5NSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4udG9wIHtcbiAgYm9yZGVyOiAzcHggcmdiKDYwLCA1OSwgNTkpIHNvbGlkO1xuICBncmlkLXJvdzogMS8yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyNDYsIDI1NCk7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmJvdHRvbSB7XG4gIGJvcmRlcjogM3B4IHJnYigyLCAyLCAyKSBzb2xpZDtcbiAgZ3JpZC1yb3c6IDIvMztcbiAgZGlzcGxheTogZ3JpZDtcbiAgLyogQWRkIHdpdGggSlMgd2hlbiB1c2luZyB0aHJlZSBjb2x1bW5zICovXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIC8qIEFkZCB3aXRoIEpTIHdoZW4gdXNpbmcgdHdvIGNvbHVtbnMgKi9cbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAqL1xufVxuXG4ubGVmdCxcbi5jZW50ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLmxlZnQge1xuICBncmlkLWF1dG8tcm93czogMjglO1xufVxuXG4uY2VudGVyIHtcbiAgZ3JpZC1hdXRvLXJvd3M6IDIyJTtcbn1cblxuLnJpZ2h0IHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLm5ldy10b2RvLWRpdiB7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xufVxuXG4ucHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcHJvamVjdHMtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xuICBib3gtc2hhZG93OiB2YXIoLS1tYWluLXByb2plY3RzLXRvZG9zLWJveC1zaGFkb3cpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDQsIDIwNCk7XG4gIHBhZGRpbmc6IDAgNnB4IDAgNnB4O1xufVxuLnByb2plY3QtcmVmcmVzaDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcHJvamVjdHMtY29sb3ItaG92ZXIpO1xufVxuXG4ucHJvamVjdC1yZWZyZXNoLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1wcm9qZWN0cy1jb2xvci1ob3Zlcik7XG59XG5cbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXByb2plY3RzLWNvbG9yLWRlbGV0ZSk7XG4gIGN1cnNvcjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pLCBwb2ludGVyO1xufVxuXG4uYWRkLXBvaW50ZXI6aG92ZXIsXG4uYWRkLXByb2plY3Q6aG92ZXIge1xuICBmaWx0ZXI6IHZhcigtLW1haW4tcHJvamVjdHMtY29sb3ItYWRkLXRvZG8pO1xufVxuXG4uYWRkLXByb2plY3QtZm9ybSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5hZGQtcHJvamVjdC1mb3JtIGxpIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnByb2plY3QtYnV0dG9ucy1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC1idXR0b25zLWZvcm0gaW5wdXQge1xuICB3aWR0aDogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2RvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tdG9kb3MtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tcHJvamVjdHMtdG9kb3MtYm94LXNoYWRvdyk7XG59XG5cbi50b2RvLXByaW9yaXR5LWxvdyB7XG4gIGJvcmRlci1yaWdodDogMTBweCByZ2IoNzksIDE2OCwgMzQpIHNvbGlkO1xufVxuLnRvZG8tcHJpb3JpdHktbWVkaXVtIHtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHJnYigyNDEsIDE2MywgMzkpIHNvbGlkO1xufVxuLnRvZG8tcHJpb3JpdHktaGlnaCB7XG4gIGJvcmRlci1yaWdodDogMTBweCByZ2IoMjM5LCA2NSwgNDIpIHNvbGlkO1xufVxuXG4udG9kbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tdG9kb3MtY29sb3ItaG92ZXIpO1xufVxuXG4udG9kby1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tdG9kb3MtY29sb3ItaG92ZXIpO1xufVxuXG4udG9kby1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG8tYnRucyA+IHNwYW4sXG4uY29tcGxldGVkLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLyogLnRvZG8tYnRucyA+IHNwYW4ge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59ICovXG5cbmg1IHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLmJpbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc2VsZWN0ZWQtdG9kbyB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tcHJvamVjdHMtdG9kb3MtYm94LXNoYWRvdyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tdG9kb3MtY29sb3IpO1xufVxuXG5oNSArIHAge1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLnRvZG8tZGV0YWlscy1saXN0IHtcbiAgcGFkZGluZzogMTVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnNlbGVjdGVkLXRvZG8gPiBoMyB7XG4gIHBhZGRpbmc6IDE1cHggMCAwIDE1cHg7XG59XG5cbi50b2RvLWRldGFpbC1saXN0LWl0ZW0ge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLnRvZG8tbm90ZXMgPiBwIHtcbiAgY29sb3I6IHJnYigwLCAwLCAyKTtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5pbWcge1xuICB3aWR0aDogMzBweDtcbn1cblxuLmFkZC10b2RvLWZvcm0tbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiByZ2IoMjA4LCAyMDcsIDIwNykgMXB4IHNvbGlkO1xuICBib3JkZXItcmlnaHQ6IHJnYigyMDgsIDIwNywgMjA3KSAxcHggc29saWQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3gtc2hhZG93OiA1cHggMXB4IDEwcHggMXB4IHJnYmEoNiwgNiwgNiwgMC4yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjQ0LCAyNDYpO1xufVxuXG4uYWRkLXRvZG8tZm9ybS1saXN0ID4gKiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxudGV4dGFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYWRkLXRvZG8tZm9ybS1ub3Rlcy1saXN0IHtcbiAgcGFkZGluZzogMTVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1wcm9qZWN0cy10b2Rvcy1ib3gtc2hhZG93KTtcbiAgYm9yZGVyLWxlZnQ6IHJnYigyMDgsIDIwNywgMjA3KSAxcHggc29saWQ7XG4gIGJvcmRlci1yaWdodDogcmdiKDIwOCwgMjA3LCAyMDcpIDFweCBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4uYWRkLXRvZG8tZm9ybS1ub3Rlcy1saXN0ID4gbGkge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxudGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE2LCAyMTQsIDIxNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmFkZC10b2RvLWZvcm0tc3VibWl0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN1Ym1pdCB7XG4gIHdpZHRoOiAxNSU7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cblxuLmFkZC10b2RvLFxuLmFkZC1wcm9qZWN0LFxuLnByb2plY3QtcmVmcmVzaCxcbi50b2RvLFxuLmJpbixcbi5hZGQtcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxZW07XG59XG4uY2VudGVyLWFkZC10b2RvLWRpdiB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jZW50ZXItYWRkLXRvZG8tYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1kZWxldGUge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nOiAxcHggNHB4IDFweCA0cHg7XG59XG5cbi50b2RvLWRldGFpbC1saXN0LWl0ZW0gPiBwLFxuLnRvZG8tZGV0YWlsLWxpc3QtaXRlbSA+IHAgPiBzZWxlY3QsXG4udG9kby1kZXRhaWwtbGlzdC1pdGVtID4gcCA+IGlucHV0IHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5kZXRhaWxlZC10b2RvLXByaW9yaXR5LWxvdyB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAxcHggcmdiYSg3OSwgMTY4LCAzNCwgMC41KTtcbn1cbi5kZXRhaWxlZC10b2RvLXByaW9yaXR5LW1lZGl1bSB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAxcHggcmdiYSgyNDEsIDE2MywgMzksIDAuNSk7XG59XG4uZGV0YWlsZWQtdG9kby1wcmlvcml0eS1oaWdoIHtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDFweCByZ2IoMjM5LCA2NSwgNDIsIDAuNSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNU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Q0FBMEM7RUFDMUMsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsK0NBQStDO0VBQy9DLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELHlDQUF5QztFQUN6QywwQ0FBMEM7RUFDMUMsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBOzs7Ozs7RUFNRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7QUFDQTtFQUNFLG9EQUFvRDtBQUN0RDtBQUNBO0VBQ0Usa0RBQWtEO0FBQ3BEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1wcm9qZWN0cy1jb2xvcjogcmdiKDIyOSwgMjQzLCAyNDYpO1xcbiAgLS1tYWluLXByb2plY3RzLWNvbG9yLWhvdmVyOiByZ2IoMTkzLCAyMzMsIDI0Mik7XFxuICAtLW1haW4tcHJvamVjdHMtY29sb3ItZGVsZXRlOiByZWQ7XFxuICAtLW1haW4tcHJvamVjdHMtY29sb3ItYWRkLXRvZG86IGludmVydCg2JSkgc2VwaWEoOTAlKSBzYXR1cmF0ZSg3MTQ2JSlcXG4gICAgaHVlLXJvdGF0ZSgyNDhkZWcpIGJyaWdodG5lc3MoMTM2JSkgY29udHJhc3QoMTQ2JSk7XFxuICAtLW1haW4tdG9kb3MtY29sb3I6IHJnYigyMzUsIDI0MywgMjQ1KTtcXG4gIC0tbWFpbi10b2Rvcy1jb2xvci1ob3ZlcjogcmdiKDE5MywgMjMzLCAyNDIpO1xcbiAgLS1tYWluLXByb2plY3RzLXRvZG9zLWJveC1zaGFkb3c6IDRweCA0cHggMTBweCAxcHggcmdiYSg2LCA2LCA2LCAwLjIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogbG9jYWwoXFxcIlJvYm90byBSZWd1bGFyXFxcIiksIHVybChcXFwiUm9ib3RvLVJlZ3VsYXIudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDY1MHB4O1xcbn1cXG5cXG4ubWFpbi1ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCg1MHB4LCAxZnIpIDRmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDk4JTtcXG4gIGhlaWdodDogOTUlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnRvcCB7XFxuICBib3JkZXI6IDNweCByZ2IoNjAsIDU5LCA1OSkgc29saWQ7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMywgMjQ2LCAyNTQpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmJvdHRvbSB7XFxuICBib3JkZXI6IDNweCByZ2IoMiwgMiwgMikgc29saWQ7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIEFkZCB3aXRoIEpTIHdoZW4gdXNpbmcgdGhyZWUgY29sdW1ucyAqL1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIC8qIEFkZCB3aXRoIEpTIHdoZW4gdXNpbmcgdHdvIGNvbHVtbnMgKi9cXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgKi9cXG59XFxuXFxuLmxlZnQsXFxuLmNlbnRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ubGVmdCB7XFxuICBncmlkLWF1dG8tcm93czogMjglO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gIGdyaWQtYXV0by1yb3dzOiAyMiU7XFxufVxcblxcbi5yaWdodCB7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5uZXctdG9kby1kaXYge1xcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXByb2plY3RzLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tcHJvamVjdHMtdG9kb3MtYm94LXNoYWRvdyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDQsIDIwNCk7XFxuICBwYWRkaW5nOiAwIDZweCAwIDZweDtcXG59XFxuLnByb2plY3QtcmVmcmVzaDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXByb2plY3RzLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLnByb2plY3QtcmVmcmVzaC1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXByb2plY3RzLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXByb2plY3RzLWNvbG9yLWRlbGV0ZSk7XFxuICBjdXJzb3I6IHVybChcXFwiaW1nL2RlbGV0ZV9mb3JldmVyLnBuZ1xcXCIpLCBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXBvaW50ZXI6aG92ZXIsXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGZpbHRlcjogdmFyKC0tbWFpbi1wcm9qZWN0cy1jb2xvci1hZGQtdG9kbyk7XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIGxpIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucy1mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tdG9kb3MtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1wcm9qZWN0cy10b2Rvcy1ib3gtc2hhZG93KTtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHktbG93IHtcXG4gIGJvcmRlci1yaWdodDogMTBweCByZ2IoNzksIDE2OCwgMzQpIHNvbGlkO1xcbn1cXG4udG9kby1wcmlvcml0eS1tZWRpdW0ge1xcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHJnYigyNDEsIDE2MywgMzkpIHNvbGlkO1xcbn1cXG4udG9kby1wcmlvcml0eS1oaWdoIHtcXG4gIGJvcmRlci1yaWdodDogMTBweCByZ2IoMjM5LCA2NSwgNDIpIHNvbGlkO1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXRvZG9zLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLnRvZG8tc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi10b2Rvcy1jb2xvci1ob3Zlcik7XFxufVxcblxcbi50b2RvLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWJ0bnMgPiBzcGFuLFxcbi5jb21wbGV0ZWQtbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi8qIC50b2RvLWJ0bnMgPiBzcGFuIHtcXG4gIHBhZGRpbmctbGVmdDogODBweDtcXG59ICovXFxuXFxuaDUge1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLmJpbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1wcm9qZWN0cy10b2Rvcy1ib3gtc2hhZG93KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tdG9kb3MtY29sb3IpO1xcbn1cXG5cXG5oNSArIHAge1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi50b2RvLWRldGFpbHMtbGlzdCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8gPiBoMyB7XFxuICBwYWRkaW5nOiAxNXB4IDAgMCAxNXB4O1xcbn1cXG5cXG4udG9kby1kZXRhaWwtbGlzdC1pdGVtIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4udG9kby1ub3RlcyA+IHAge1xcbiAgY29sb3I6IHJnYigwLCAwLCAyKTtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0tbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IHJnYigyMDgsIDIwNywgMjA3KSAxcHggc29saWQ7XFxuICBib3JkZXItcmlnaHQ6IHJnYigyMDgsIDIwNywgMjA3KSAxcHggc29saWQ7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm94LXNoYWRvdzogNXB4IDFweCAxMHB4IDFweCByZ2JhKDYsIDYsIDYsIDAuMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyNDQsIDI0Nik7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtLWxpc3QgPiAqIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0tbm90ZXMtbGlzdCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tcHJvamVjdHMtdG9kb3MtYm94LXNoYWRvdyk7XFxuICBib3JkZXItbGVmdDogcmdiKDIwOCwgMjA3LCAyMDcpIDFweCBzb2xpZDtcXG4gIGJvcmRlci1yaWdodDogcmdiKDIwOCwgMjA3LCAyMDcpIDFweCBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtLW5vdGVzLWxpc3QgPiBsaSB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjE0LCAyMTQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybS1zdWJtaXQtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gIHdpZHRoOiAxNSU7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxufVxcblxcbi5hZGQtdG9kbyxcXG4uYWRkLXByb2plY3QsXFxuLnByb2plY3QtcmVmcmVzaCxcXG4udG9kbyxcXG4uYmluLFxcbi5hZGQtcG9pbnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5jZW50ZXItYWRkLXRvZG8tZGl2IHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jZW50ZXItYWRkLXRvZG8tYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbmlucHV0IHtcXG4gIHBhZGRpbmc6IDFweCA0cHggMXB4IDRweDtcXG59XFxuXFxuLnRvZG8tZGV0YWlsLWxpc3QtaXRlbSA+IHAsXFxuLnRvZG8tZGV0YWlsLWxpc3QtaXRlbSA+IHAgPiBzZWxlY3QsXFxuLnRvZG8tZGV0YWlsLWxpc3QtaXRlbSA+IHAgPiBpbnB1dCB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmRldGFpbGVkLXRvZG8tcHJpb3JpdHktbG93IHtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAxcHggcmdiYSg3OSwgMTY4LCAzNCwgMC41KTtcXG59XFxuLmRldGFpbGVkLXRvZG8tcHJpb3JpdHktbWVkaXVtIHtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAxcHggcmdiYSgyNDEsIDE2MywgMzksIDAuNSk7XFxufVxcbi5kZXRhaWxlZC10b2RvLXByaW9yaXR5LWhpZ2gge1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDFweCByZ2IoMjM5LCA2NSwgNDIsIDAuNSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB0b0NhbWVsQ2FzZSBmcm9tIFwiLi90b0NhbWVsQ2FzZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0ge1xuICAgICAgZGVmYXVsdFByb2plY3Q6IG5ldyBQcm9qZWN0KFxuICAgICAgICBcIkRlZmF1bHQgUHJvamVjdFwiLFxuICAgICAgICBcIkxvY2F0aW9uIGZvciBsb25lbHkgVG9kb3NcIlxuICAgICAgKSxcbiAgICB9O1xuICAgIHRoaXMubnVtYmVyT2ZQcm9qZWN0cyA9IDE7XG4gIH1cblxuICBhZGRQcm9qZWN0KG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgY2FtZWxDYXNlTmFtZSA9IHRvQ2FtZWxDYXNlKG5hbWUpO1xuICAgIC8vY2hlY2sgaWYgcHJvamVjdCBuYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgaWYgKHRoaXMucHJvamVjdHNbY2FtZWxDYXNlTmFtZV0pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IsIE5hbWUgQWxyZWFkeSBFeGlzdHNcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vYWRkIG5ldyBwcm9qZWN0XG4gICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZGVzY3JpcHRpb24pO1xuICAgICAgdGhpcy5udW1iZXJPZlByb2plY3RzKys7XG4gICAgICB0aGlzLnByb2plY3RzW2NhbWVsQ2FzZU5hbWVdID0gcHJvamVjdDtcbiAgICB9XG4gIH1cblxuICByZW1vdmVQcm9qZWN0KG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wcm9qZWN0c1t0b0NhbWVsQ2FzZShuYW1lKV07XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNlbnRlckNvbHVtbkFkZFRvZG9IdG1sQnV0dG9uRWxlbWVudChwcm9qZWN0KSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXItYWRkLXRvZG8tZGl2XCIpO1xuICBoMi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUb2RvXCI7XG5cbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImNlbnRlci1hZGQtdG9kby1idXR0b25cIik7XG4gIGltYWdlLmRhdGFzZXQucHJvamVjdCA9IHByb2plY3Q7XG4gIGltYWdlLnNyYyA9IFwiLi9pbWcvYWRkTm90ZS5wbmdcIjtcbiAgaW1hZ2UuYWx0ID0gXCJhZGQtdG9kb1wiO1xuICBpbWFnZS50aXRsZSA9IFwiQ2xpY2sgdG8gYWRkIG5ldyB0b2RvXCI7XG5cbiAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgZGl2LmFwcGVuZENoaWxkKGltYWdlKTtcblxuICByZXR1cm4gZGl2O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm1IdG1sRWxlbWVudCgpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgbGlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsaURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsaUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgbGFiZWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgaDROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCBoNERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGlucHV0QnV0dG9uU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBpbnB1dEJ1dHRvbkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIC8vU2V0IGF0dHJpYnV0ZXMgYW5kIGNsYXNzZXMgb2YgRWxlbWVudHNcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LWRpdlwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtZm9ybVwiKTtcbiAgaDROYW1lLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBOYW1lOlwiO1xuICBoNERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgbGFiZWxOYW1lLmh0bWxGb3IgPSBcInByb2plY3QtbmFtZS1mb3JtLWlkXCI7XG4gIGxhYmVsRGVzY3JpcHRpb24uaHRtbEZvciA9IFwicHJvamVjdC1kZXNjcmlwdGlvbi1mb3JtLWlkXCI7XG4gIGlucHV0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWZvcm1cIik7XG4gIGlucHV0TmFtZS5pZCA9IFwicHJvamVjdC1uYW1lLWZvcm0taWRcIjtcbiAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBpbnB1dE5hbWUucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dE5hbWUubWF4TGVuZ3RoID0gXCIxNVwiO1xuICBpbnB1dERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uLWZvcm1cIik7XG4gIGlucHV0RGVzY3JpcHRpb24uaWQgPSBcInByb2plY3QtZGVzY3JpcHRpb24tZm9ybS1pZFwiO1xuICBpbnB1dERlc2NyaXB0aW9uLnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXREZXNjcmlwdGlvbi5tYXhMZW5ndGggPSBcIjI0XCI7XG4gIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGxpQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25zLWZvcm1cIik7XG4gIGlucHV0QnV0dG9uU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtcHJvamVjdC1idXR0b24tZm9ybVwiKTtcbiAgaW5wdXRCdXR0b25TdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgaW5wdXRCdXR0b25TdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJjcmVhdGVcIik7XG4gIGlucHV0QnV0dG9uQ2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlLXByb2plY3QtYnV0dG9uLWZvcm1cIik7XG4gIGlucHV0QnV0dG9uQ2xvc2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgaW5wdXRCdXR0b25DbG9zZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImNsb3NlXCIpO1xuXG4gIC8vQ3JlYXRlIERPTSBzdHJ1Y3R1cmVcbiAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICBmb3JtLmFwcGVuZENoaWxkKHVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgdWwuYXBwZW5kQ2hpbGQobGlOYW1lKTtcbiAgbGlOYW1lLmFwcGVuZENoaWxkKGxhYmVsTmFtZSk7XG4gIGxhYmVsTmFtZS5hcHBlbmRDaGlsZChoNE5hbWUpO1xuICBsaU5hbWUuYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcblxuICB1bC5hcHBlbmRDaGlsZChsaURlc2NyaXB0aW9uKTtcbiAgbGlEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChsYWJlbERlc2NyaXB0aW9uKTtcbiAgbGFiZWxEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChoNERlc2NyaXB0aW9uKTtcbiAgbGlEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICB1bC5hcHBlbmRDaGlsZChsaUJ1dHRvbnMpO1xuICBsaUJ1dHRvbnMuYXBwZW5kQ2hpbGQoaW5wdXRCdXR0b25TdWJtaXQpO1xuICBsaUJ1dHRvbnMuYXBwZW5kQ2hpbGQoaW5wdXRCdXR0b25DbG9zZSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RIdG1sRWxlbWVudChuYW1lLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1yZWZyZXNoXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWRkLXBvaW50ZXJcIik7XG4gIGltYWdlLnNyYyA9IFwiLi9pbWcvYWRkTm90ZS5wbmdcIjtcbiAgaW1hZ2UuYWx0ID0gXCJhZGQtdG9kb1wiO1xuICBpbWFnZS50aXRsZSA9IFwiQ2xpY2sgdG8gYWRkIG5ldyB0b2RvXCI7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBcIuKcllwiO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlbGV0ZVwiKTtcbiAgaWYgKG5hbWUgPT09IFwiRGVmYXVsdCBQcm9qZWN0XCIpIHtcbiAgICBzcGFuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICB9XG4gIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgZGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUYWJIdG1sRWxlbWVudCgpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtdGFiXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBQcm9qZWN0XCI7XG5cbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0XCIpO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtYnV0dG9uLXRhYlwiKTtcbiAgaW1hZ2Uuc3JjID0gXCIuL2ltZy9hZGRMaWJyYXJ5LnBuZ1wiO1xuICBpbWFnZS5hbHQgPSBcImFkZC1wcm9qZWN0XCI7XG4gIGltYWdlLnRpdGxlID0gXCJDbGljayB0byBhZGQgbmV3IHByb2plY3RcIjtcblxuICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIHJldHVybiBkaXY7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvRGV0YWlsZWRIdG1sRWxlbWVudChcbiAgbmFtZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBub3RlcyxcbiAgY29tcGxldGVkLFxuICBkYXRhU2V0SW5kZXgsXG4gIGRhdGFTZXRQcm9qZWN0XG4pIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBsaURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsaUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGxpUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGxpQ29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsaU5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBoNERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCBoNER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGNvbnN0IGg0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGNvbnN0IGg0Q29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCBoNE5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCBwYXJhZ3JhcGhEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwYXJhZ3JhcGhEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHBhcmFncmFwaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHBhcmFncmFwaENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwYXJhZ3JhcGhOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBzZWxlY3RDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBjb25zdCBvcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBjb25zdCBvcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3Qgb3B0aW9uWWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3Qgb3B0aW9uTm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gIC8vU2V0IGF0dHJpYnV0ZXMgYW5kIGNsYXNzZXMgb2YgRWxlbWVudHNcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC10b2RvXCIpO1xuICBkaXYuZGF0YXNldC5pbmRleCA9IGRhdGFTZXRJbmRleDtcbiAgZGl2LmRhdGFzZXQucHJvamVjdCA9IGRhdGFTZXRQcm9qZWN0O1xuICBoMy50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbHMtbGlzdFwiKTtcbiAgbGlEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXRhaWwtbGlzdC1pdGVtXCIpO1xuICBoNERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgcGFyYWdyYXBoRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgbGlEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbC1saXN0LWl0ZW1cIik7XG4gIGg0RHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGR1ZURhdGUpO1xuICBsaVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbC1saXN0LWl0ZW1cIik7XG4gIGg0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5LXNlbGVjdFwiKTtcblxuICBvcHRpb25Mb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICBvcHRpb25Mb3cuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsb3dcIik7XG4gIG9wdGlvbk1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gIG9wdGlvbk1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1lZGl1bVwiKTtcbiAgb3B0aW9uSGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICBvcHRpb25IaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKTtcblxuICBpZiAocHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgb3B0aW9uSGlnaC5zZWxlY3RlZCA9IFwic2VsZWN0ZWRcIjtcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgIG9wdGlvbk1lZGl1bS5zZWxlY3RlZCA9IFwic2VsZWN0ZWRcIjtcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgIG9wdGlvbkxvdy5zZWxlY3RlZCA9IFwic2VsZWN0ZWRcIjtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yLCBjaGVjayBzcGVsbGluZ1wiKTtcbiAgfVxuXG4gIGxpQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbC1saXN0LWl0ZW1cIik7XG4gIGg0Q29tcGxldGVkLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWQ6XCI7XG4gIHNlbGVjdENvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInllcy1uby1zZWxlY3RcIik7XG4gIG9wdGlvblllcy50ZXh0Q29udGVudCA9IFwiWWVzXCI7XG4gIG9wdGlvblllcy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInllc1wiKTtcbiAgb3B0aW9uTm8udGV4dENvbnRlbnQgPSBcIk5vXCI7XG4gIG9wdGlvbk5vLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibm9cIik7XG4gIGNvbXBsZXRlZFxuICAgID8gKG9wdGlvblllcy5zZWxlY3RlZCA9IFwic2VsZWN0ZWRcIilcbiAgICA6IChvcHRpb25Oby5zZWxlY3RlZCA9IFwic2VsZWN0ZWRcIik7XG4gIGxpTm90ZXMuY2xhc3NMaXN0LmFkZChcInRvZG8tbm90ZXNcIik7XG4gIGxpTm90ZXMuY2xhc3NMaXN0LmFkZChcInRvZG8tZGV0YWlsLWxpc3QtaXRlbVwiKTtcbiAgaDROb3Rlcy50ZXh0Q29udGVudCA9IFwiTm90ZXM6XCI7XG4gIHBhcmFncmFwaE5vdGVzLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gIHBhcmFncmFwaE5vdGVzLmNsYXNzTGlzdC5hZGQoXCJub3Rlcy1kZWF0aWxlZC10b2RvXCIpO1xuICBwYXJhZ3JhcGhOb3Rlcy50ZXh0Q29udGVudCA9IG5vdGVzO1xuXG4gIC8vQ3JlYXRlIERPTSBzdHJ1Y3R1cmVcbiAgZGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgZGl2LmFwcGVuZENoaWxkKHVsKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGlEZXNjcmlwdGlvbik7XG4gIGxpRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaDREZXNjcmlwdGlvbik7XG4gIGxpRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocGFyYWdyYXBoRGVzY3JpcHRpb24pO1xuICB1bC5hcHBlbmRDaGlsZChsaUR1ZURhdGUpO1xuICBsaUR1ZURhdGUuYXBwZW5kQ2hpbGQoaDREdWVEYXRlKTtcbiAgbGlEdWVEYXRlLmFwcGVuZENoaWxkKHBhcmFncmFwaER1ZURhdGUpO1xuICBwYXJhZ3JhcGhEdWVEYXRlLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgdWwuYXBwZW5kQ2hpbGQobGlQcmlvcml0eSk7XG4gIGxpUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaDRQcmlvcml0eSk7XG4gIGxpUHJpb3JpdHkuYXBwZW5kQ2hpbGQocGFyYWdyYXBoUHJpb3JpdHkpO1xuICBwYXJhZ3JhcGhQcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eSk7XG4gIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkxvdyk7XG4gIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbk1lZGl1bSk7XG4gIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkhpZ2gpO1xuICB1bC5hcHBlbmRDaGlsZChsaUNvbXBsZXRlZCk7XG4gIGxpQ29tcGxldGVkLmFwcGVuZENoaWxkKGg0Q29tcGxldGVkKTtcbiAgbGlDb21wbGV0ZWQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoQ29tcGxldGVkKTtcbiAgcGFyYWdyYXBoQ29tcGxldGVkLmFwcGVuZENoaWxkKHNlbGVjdENvbXBsZXRlZCk7XG4gIHNlbGVjdENvbXBsZXRlZC5hcHBlbmRDaGlsZChvcHRpb25ZZXMpO1xuICBzZWxlY3RDb21wbGV0ZWQuYXBwZW5kQ2hpbGQob3B0aW9uTm8pO1xuICB1bC5hcHBlbmRDaGlsZChsaU5vdGVzKTtcbiAgbGlOb3Rlcy5hcHBlbmRDaGlsZChoNE5vdGVzKTtcbiAgbGlOb3Rlcy5hcHBlbmRDaGlsZChwYXJhZ3JhcGhOb3Rlcyk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9Gb3JtSHRtbEVsZW1lbnQocHJvamVjdCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICBjb25zdCB1bE5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIGNvbnN0IGxpTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbGlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbGlEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsaVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsaUNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbGlOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbGlCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbnN0IGg0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY29uc3QgaDREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY29uc3QgaDREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCBoNFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCBoNENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY29uc3QgaDROb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcblxuICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGxhYmVsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGxhYmVsRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgbGFiZWxDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGxhYmVsTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbiAgY29uc3QgcGFyYWdyYXBoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwYXJhZ3JhcGhEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwYXJhZ3JhcGhEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHBhcmFncmFwaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHBhcmFncmFwaENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwYXJhZ3JhcGhOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBpbnB1dEJ1dHRvblN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgaW5wdXRCdXR0b25DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBjb25zdCBzZWxlY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IHNlbGVjdENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cbiAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3Qgb3B0aW9uTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3Qgb3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IG9wdGlvblllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IG9wdGlvbk5vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblxuICAvL1NldCBhdHRyaWJ1dGVzIGFuZCBjbGFzc2VzIG9mIEVsZW1lbnRzXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3LXRvZG8tZGl2XCIpO1xuICBkaXYuZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdDtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvZG8tZm9ybVwiKTtcbiAgdWwuY2xhc3NMaXN0LmFkZChcImFkZC10b2RvLWZvcm0tbGlzdFwiKTtcblxuICBoNE5hbWUudGV4dENvbnRlbnQgPSBcIlRvZG8gTmFtZTpcIjtcbiAgbGFiZWxOYW1lLmh0bWxGb3IgPSBcInRvZG8tbmFtZS1mb3JtLWlkXCI7XG4gIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgaW5wdXROYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hbWUtZm9ybVwiKTtcbiAgaW5wdXROYW1lLmlkID0gXCJ0b2RvLW5hbWUtZm9ybS1pZFwiO1xuICBpbnB1dE5hbWUucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dE5hbWUubWluTGVuZ3RoID0gXCI0XCI7XG4gIGlucHV0TmFtZS5tYXhMZW5ndGggPSBcIjIwXCI7XG5cbiAgaDREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gIGxhYmVsRGVzY3JpcHRpb24uaHRtbEZvciA9IFwidG9kby1kZXNjcmlwdGlvbi1mb3JtLWlkXCI7XG4gIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGlucHV0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY3JpcHRpb24tZm9ybVwiKTtcbiAgaW5wdXREZXNjcmlwdGlvbi5pZCA9IFwidG9kby1kZXNjcmlwdGlvbi1mb3JtLWlkXCI7XG4gIGlucHV0RGVzY3JpcHRpb24ucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dERlc2NyaXB0aW9uLm1pbkxlbmd0aCA9IFwiMTVcIjtcbiAgaW5wdXREZXNjcmlwdGlvbi5tYXhMZW5ndGggPSBcIjUwXCI7XG5cbiAgaDREdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgbGFiZWxEdWVEYXRlLmh0bWxGb3IgPSBcInRvZG8tZGF0ZS1mb3JtLWlkXCI7XG4gIGlucHV0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgaW5wdXREdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGUtZm9ybVwiKTtcbiAgaW5wdXREdWVEYXRlLmlkID0gXCJ0b2RvLWRhdGUtZm9ybS1pZFwiO1xuXG4gIGg0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICBsYWJlbFByaW9yaXR5Lmh0bWxGb3IgPSBcInRvZG8tcHJpb3JpdHktZm9ybS1pZFwiO1xuICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5LXNlbGVjdFwiKTtcbiAgc2VsZWN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHktZm9ybVwiKTtcbiAgc2VsZWN0UHJpb3JpdHkuaWQgPSBcInRvZG8tcHJpb3JpdHktZm9ybS1pZFwiO1xuXG4gIG9wdGlvbkxvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIG9wdGlvbkxvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKTtcbiAgb3B0aW9uTWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgb3B0aW9uTWVkaXVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibWVkaXVtXCIpO1xuICBvcHRpb25NZWRpdW0uc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCI7XG4gIG9wdGlvbkhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgb3B0aW9uSGlnaC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhpZ2hcIik7XG5cbiAgaDRDb21wbGV0ZWQudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlZDpcIjtcbiAgbGFiZWxDb21wbGV0ZWQuaHRtbEZvciA9IFwidG9kby1jb21wbGV0ZWQtZm9ybS1pZFwiO1xuICBzZWxlY3RDb21wbGV0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ5ZXMtbm8tc2VsZWN0XCIpO1xuICBzZWxlY3RDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZChcInRvZG8tY29tcGxldGVkLWZvcm1cIik7XG4gIHNlbGVjdENvbXBsZXRlZC5pZCA9IFwidG9kby1jb21wbGV0ZWQtZm9ybS1pZFwiO1xuXG4gIG9wdGlvblllcy50ZXh0Q29udGVudCA9IFwiWWVzXCI7XG4gIG9wdGlvblllcy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInllc1wiKTtcbiAgb3B0aW9uTm8udGV4dENvbnRlbnQgPSBcIk5vXCI7XG4gIG9wdGlvbk5vLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibm9cIik7XG4gIG9wdGlvbk5vLnNlbGVjdGVkID0gXCJzZWxlY3RlZFwiO1xuXG4gIHVsTm90ZXMuY2xhc3NMaXN0LmFkZChcImFkZC10b2RvLWZvcm0tbm90ZXMtbGlzdFwiKTtcbiAgaDROb3Rlcy50ZXh0Q29udGVudCA9IFwiTm90ZXM6XCI7XG4gIGxhYmVsTm90ZXMuaHRtbEZvciA9IFwidG9kby1ub3Rlcy1mb3JtLWlkXCI7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCIxMFwiKTtcbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChcInRvZG8tbm90ZXMtZm9ybVwiKTtcbiAgdGV4dEFyZWEuaWQgPSBcInRvZG8tbm90ZXMtZm9ybS1pZFwiO1xuXG4gIGxpQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvZG8tZm9ybS1zdWJtaXQtYnV0dG9uXCIpO1xuICBpbnB1dEJ1dHRvblN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRvZG9cIik7XG4gIGlucHV0QnV0dG9uU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRcIik7XG4gIGlucHV0QnV0dG9uU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGlucHV0QnV0dG9uU3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQ3JlYXRlXCIpO1xuICBpbnB1dEJ1dHRvbkNsb3NlLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRcIik7XG4gIGlucHV0QnV0dG9uQ2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlLXRvZG9cIik7XG4gIGlucHV0QnV0dG9uQ2xvc2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgaW5wdXRCdXR0b25DbG9zZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkNsb3NlXCIpO1xuXG4gIC8vQ3JlYXRlIERPTSBzdHJ1Y3R1cmVcbiAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICBmb3JtLmFwcGVuZENoaWxkKHVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh1bE5vdGVzKTtcblxuICB1bC5hcHBlbmRDaGlsZChsaU5hbWUpO1xuICBsaU5hbWUuYXBwZW5kQ2hpbGQobGFiZWxOYW1lKTtcbiAgbGFiZWxOYW1lLmFwcGVuZENoaWxkKGg0TmFtZSk7XG4gIGxpTmFtZS5hcHBlbmRDaGlsZChwYXJhZ3JhcGhOYW1lKTtcbiAgcGFyYWdyYXBoTmFtZS5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xuXG4gIHVsLmFwcGVuZENoaWxkKGxpRGVzY3JpcHRpb24pO1xuICBsaURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGxhYmVsRGVzY3JpcHRpb24pO1xuICBsYWJlbERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGg0RGVzY3JpcHRpb24pO1xuICBsaURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHBhcmFncmFwaERlc2NyaXB0aW9uKTtcbiAgcGFyYWdyYXBoRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG5cbiAgdWwuYXBwZW5kQ2hpbGQobGlEdWVEYXRlKTtcbiAgbGlEdWVEYXRlLmFwcGVuZENoaWxkKGxhYmVsRHVlRGF0ZSk7XG4gIGxhYmVsRHVlRGF0ZS5hcHBlbmRDaGlsZChoNER1ZURhdGUpO1xuICBsaUR1ZURhdGUuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRHVlRGF0ZSk7XG4gIHBhcmFncmFwaER1ZURhdGUuYXBwZW5kQ2hpbGQoaW5wdXREdWVEYXRlKTtcblxuICB1bC5hcHBlbmRDaGlsZChsaVByaW9yaXR5KTtcbiAgbGlQcmlvcml0eS5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5KTtcbiAgbGFiZWxQcmlvcml0eS5hcHBlbmRDaGlsZChoNFByaW9yaXR5KTtcbiAgbGlQcmlvcml0eS5hcHBlbmRDaGlsZChwYXJhZ3JhcGhQcmlvcml0eSk7XG4gIHBhcmFncmFwaFByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KTtcbiAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uTG93KTtcbiAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uTWVkaXVtKTtcbiAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uSGlnaCk7XG5cbiAgdWwuYXBwZW5kQ2hpbGQobGlDb21wbGV0ZWQpO1xuICBsaUNvbXBsZXRlZC5hcHBlbmRDaGlsZChsYWJlbENvbXBsZXRlZCk7XG4gIGxhYmVsQ29tcGxldGVkLmFwcGVuZENoaWxkKGg0Q29tcGxldGVkKTtcbiAgbGlDb21wbGV0ZWQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoQ29tcGxldGVkKTtcbiAgcGFyYWdyYXBoQ29tcGxldGVkLmFwcGVuZENoaWxkKHNlbGVjdENvbXBsZXRlZCk7XG4gIHNlbGVjdENvbXBsZXRlZC5hcHBlbmRDaGlsZChvcHRpb25ZZXMpO1xuICBzZWxlY3RDb21wbGV0ZWQuYXBwZW5kQ2hpbGQob3B0aW9uTm8pO1xuXG4gIHVsTm90ZXMuYXBwZW5kQ2hpbGQobGlOb3Rlcyk7XG4gIGxpTm90ZXMuYXBwZW5kQ2hpbGQobGFiZWxOb3Rlcyk7XG4gIGxhYmVsTm90ZXMuYXBwZW5kQ2hpbGQoaDROb3Rlcyk7XG4gIGxpTm90ZXMuYXBwZW5kQ2hpbGQocGFyYWdyYXBoTm90ZXMpO1xuICBwYXJhZ3JhcGhOb3Rlcy5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG5cbiAgdWxOb3Rlcy5hcHBlbmRDaGlsZChsaUJ1dHRvbnMpO1xuICBsaUJ1dHRvbnMuYXBwZW5kQ2hpbGQoaW5wdXRCdXR0b25TdWJtaXQpO1xuICBsaUJ1dHRvbnMuYXBwZW5kQ2hpbGQoaW5wdXRCdXR0b25DbG9zZSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cbiIsImltcG9ydCB7IGlzVmFsaWQsIGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kb0h0bWxFbGVtZW50KFxuICBuYW1lLFxuICBjb21wbGV0ZWQsXG4gIGR1ZSxcbiAgZGF0YVNldEluZGV4LFxuICBkYXRhU2V0UHJvamVjdFxuKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBoNUNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgY29uc3QgaDVEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gIGNvbnN0IHNwYW5PdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBzcGFuSW5uZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3Qgc3BhbklubmVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIC8vIGNvbnN0IGRhdGVGb3JtYXR0ZWQgPSBmb3JtYXQocGFyc2VJU08oZHVlKSwgXCJkZC9NTS95eVwiKTtcblxuICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGRhdGFTZXRJbmRleCk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgZGF0YVNldFByb2plY3QpO1xuICBoMy50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHNwYW5PdXRlci5jbGFzc0xpc3QuYWRkKFwidG9kby1idG5zXCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkLWxhYmVsXCIpO1xuICBoNUNvbXBsZXRlZC50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkXCI7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGBjaGVja2JveC0ke2RhdGFTZXRJbmRleH1gKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gIGNvbXBsZXRlZCA/IChpbnB1dC5jaGVja2VkID0gdHJ1ZSkgOiAoaW5wdXQuY2hlY2tlZCA9IGZhbHNlKTtcbiAgaDVEdWUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGR1ZTtcbiAgc3BhbklubmVyVHdvLmNsYXNzTGlzdC5hZGQoXCJiaW5cIik7XG4gIHNwYW5Jbm5lclR3by50ZXh0Q29udGVudCA9IFwi8J+XkVwiO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChoMyk7XG4gIGRpdi5hcHBlbmRDaGlsZChzcGFuT3V0ZXIpO1xuICBzcGFuT3V0ZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBsYWJlbC5hcHBlbmRDaGlsZChoNUNvbXBsZXRlZCk7XG4gIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgc3Bhbk91dGVyLmFwcGVuZENoaWxkKHNwYW5Jbm5lck9uZSk7XG4gIHNwYW5Jbm5lck9uZS5hcHBlbmRDaGlsZChoNUR1ZSk7XG4gIHNwYW5Jbm5lck9uZS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICBzcGFuT3V0ZXIuYXBwZW5kQ2hpbGQoc3BhbklubmVyVHdvKTtcblxuICByZXR1cm4gZGl2O1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwbGljYXRpb24uanNcIjtcbmltcG9ydCBjcmVhdGVUb2RvSHRtbEVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlVG9kb0h0bWxFbGVtZW50LmpzXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdEh0bWxFbGVtZW50IGZyb20gXCIuL2NyZWF0ZVByb2plY3RIdG1sRWxlbWVudC5qc1wiO1xuaW1wb3J0IGNyZWF0ZVRvZG9EZXRhaWxlZEh0bWxFbGVtZW50IGZyb20gXCIuL2NyZWF0ZVRvZG9EZXRhaWxlZEh0bWxFbGVtZW50LmpzXCI7XG5pbXBvcnQgY3JlYXRlVG9kb0Zvcm1IdG1sRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVUb2RvRm9ybUh0bWxFbGVtZW50LmpzXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdEZvcm1IdG1sRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0Rm9ybUh0bWxFbGVtZW50LmpzXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdFRhYkh0bWxFbGVtZW50IGZyb20gXCIuL2NyZWF0ZVByb2plY3RUYWJIdG1sRWxlbWVudC5qc1wiO1xuaW1wb3J0IHNhbXBsZVByb2plY3RzRGF0YSBmcm9tIFwiLi9zYW1wbGVQcm9qZWN0c0RhdGEuanNcIjtcbmltcG9ydCB0b0NhbWVsQ2FzZSBmcm9tIFwiLi90b0NhbWVsQ2FzZS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUNlbnRlckNvbHVtbkFkZFRvZG9IdG1sQnV0dG9uRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVDZW50ZXJDb2x1bW5BZGRUb2RvSHRtbEJ1dHRvbkVsZW1lbnRcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBzdG9yYWdlQXZhaWxhYmxlIGZyb20gXCIuL3N0b3JhZ2VBdmFpbGFibGUuanNcIjtcblxuY29uc3QgdG9kb0FwcCA9IG5ldyBBcHAoKTtcbmNvbnN0IGxlZnRDb2x1bW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRcIik7XG5jb25zdCBjZW50ZXJDb2x1bW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbnRlclwiKTtcbmNvbnN0IHJpZ2h0Q29sdW1uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodFwiKTtcbmNvbnN0IGJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tXCIpO1xuXG4vL3N0YXJ0IHVwXG5mdW5jdGlvbiBpbml0KCkge1xuICBnZXRBbnlBdmFpbGFibGVMb2NhbFN0b3JhZ2UoKTtcbiAgbGVmdENvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0VGFiSHRtbEVsZW1lbnQoKSk7XG4gIGFkZEV2ZW50TGlzdGVuZXJBZGRQcm9qZWN0QnV0dG9uKCk7XG4gIHBvcHVsYXRlUHJvamVjdHNEb20oKTtcbiAgcG9wdWxhdGVUb2Rvc0RvbShcImRlZmF1bHRQcm9qZWN0XCIpO1xuICBjaGFuZ2VDb2xvck9mRmlyc3RQcm9qZWN0QW5kVG9kbygpO1xuICBwb3B1bGF0ZVRvZG9EZXRhaWxzRG9tKFwiZGVmYXVsdFByb2plY3RcIiwgMCk7XG59XG5pbml0KCk7XG5cbmZ1bmN0aW9uIG9wZW5BZGRUb2RvRm9ybShwcm9qZWN0KSB7XG4gIGJvdHRvbS5hcHBlbmRDaGlsZChjcmVhdGVUb2RvRm9ybUh0bWxFbGVtZW50KHByb2plY3QpKTtcbiAgcmVtb3ZlQ2VudGVyQ29sdW1uQWRkVG9kb0J1dHRvbigpO1xuICBhZGRFdmVudExpc3RlbmVyVG9Ub2RvRm9ybUJ1dHRvbnMoKTtcbiAgc2V0VHdvQ29sdW1uTGF5b3V0KCk7XG4gIGRpc2FibGVBZGRUb2RvQnV0dG9ucygpO1xuICBkaXNhYmxlQWRkUHJvamVjdEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRUb2RvKGUpIHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1uYW1lLWZvcm1cIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc2NyaXB0aW9uLWZvcm1cIik7XG4gIGNvbnN0IHRvZG9Gb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0ID0gdG9kb0Zvcm1FbGVtZW50LmRhdGFzZXQucHJvamVjdDtcbiAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gIGNvbnN0IGxhc3RUb2RvSW5kZXggPSB0b2RvQXBwLnByb2plY3RzW3Byb2plY3RdLnRvZG9zLmxlbmd0aCAtIDE7XG5cbiAgaWYgKChuYW1lLnZhbHVlID09PSBcIlwiKSB8IChkZXNjcmlwdGlvbi52YWx1ZSA9PT0gXCJcIikpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN1Ym1pdFRvZG9WYWx1ZXMoKTtcbiAgICB0b2RvRm9ybUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgc2V0VGhyZWVDb2x1bW5MYXlvdXQoKTtcbiAgICBwb3B1bGF0ZVRvZG9zRG9tKHByb2plY3QpO1xuICAgIGNoYW5nZUNvbG9yT2ZMYXN0QWRkZWRUb2RvRG9tKCk7XG4gICAgcG9wdWxhdGVUb2RvRGV0YWlsc0RvbShwcm9qZWN0LCBsYXN0VG9kb0luZGV4ICsgMSk7XG4gICAgZW5hYmxlQWRkVG9kb0J1dHRvbnMoKTtcbiAgICBlbmFibGVBZGRQcm9qZWN0QnV0dG9uKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VUb2RvKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0b2RvRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLWRpdlwiKTtcbiAgY29uc3QgcHJvamVjdCA9IHRvZG9Gb3JtRWxlbWVudC5kYXRhc2V0LnByb2plY3Q7XG4gIHRvZG9Gb3JtRWxlbWVudC5yZW1vdmUoKTtcbiAgc2V0VGhyZWVDb2x1bW5MYXlvdXQoKTtcbiAgcG9wdWxhdGVUb2Rvc0RvbShwcm9qZWN0KTtcbiAgZW5hYmxlQWRkVG9kb0J1dHRvbnMoKTtcbiAgZW5hYmxlQWRkUHJvamVjdEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICBjb25zdCBhZGRQcm9qZWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC10YWJcIik7XG4gIGFkZFByb2plY3RUYWIucmVtb3ZlKCk7XG4gIGxlZnRDb2x1bW4ucHJlcGVuZChjcmVhdGVQcm9qZWN0Rm9ybUh0bWxFbGVtZW50KCkpO1xuICBhZGRFdmVudExpc3RlbmVyTmV3UHJvamVjdEJ1dHRvbnMoKTtcbiAgZGlzYWJsZUFkZFRvZG9CdXR0b25zKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZSkge1xuICBjb25zdCBhZGRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lLWZvcm1cIik7XG4gIGNvbnN0IGFkZFByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIucHJvamVjdC1kZXNjcmlwdGlvbi1mb3JtXCJcbiAgKTtcblxuICBpZiAoYWRkUHJvamVjdE5hbWUudmFsdWUgIT09IFwiXCIgJiYgYWRkUHJvamVjdERlc2NyaXB0aW9uLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZG9BcHAuYWRkUHJvamVjdChhZGRQcm9qZWN0TmFtZS52YWx1ZSwgYWRkUHJvamVjdERlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICBhZGRDZW50ZXJDb2x1bW5BZGRUb2RvQnV0dG9uKHRvQ2FtZWxDYXNlKGFkZFByb2plY3ROYW1lLnZhbHVlKSk7XG4gICAgYWRkUHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIGFkZFByb2plY3REZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgc2V0VG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICBwb3B1bGF0ZVByb2plY3RzRG9tKCk7XG4gICAgY2xvc2VQcm9qZWN0KCk7XG4gICAgY2hhbmdlQ29sb3JPZkxhc3RBZGRlZFByb2plY3REb20oKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0KCkge1xuICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtZGl2XCIpO1xuICBhZGRQcm9qZWN0Rm9ybS5yZW1vdmUoKTtcbiAgbGVmdENvbHVtbi5wcmVwZW5kKGNyZWF0ZVByb2plY3RUYWJIdG1sRWxlbWVudCgpKTtcbiAgYWRkRXZlbnRMaXN0ZW5lckFkZFByb2plY3RCdXR0b24oKTtcbiAgZW5hYmxlQWRkVG9kb0J1dHRvbnMoKTtcbn1cblxuLy9BZGQgRXZlbnRMaXN0ZW5lcnMgdG8gYnV0dG9ucyBmdW5jdGlvbnNcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb1RvZG9Gb3JtQnV0dG9ucygpIHtcbiAgY29uc3Qgc3VibWl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LXRvZG9cIik7XG4gIGNvbnN0IGNsb3NlVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtdG9kb1wiKTtcbiAgY2xvc2VUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRvZG8pO1xuICBzdWJtaXRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUb2RvKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvQWRkVG9kb0J1dHRvbnMoKSB7XG4gIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC1wb2ludGVyXCIpO1xuICBhZGRUb2RvQnV0dG9uLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gdG9DYW1lbENhc2UoXG4gICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS50ZXh0Q29udGVudFxuICAgICAgKTtcbiAgICAgIG9wZW5BZGRUb2RvRm9ybShwcm9qZWN0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJOZXdQcm9qZWN0QnV0dG9ucygpIHtcbiAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuc3VibWl0LXByb2plY3QtYnV0dG9uLWZvcm1cIlxuICApO1xuICBjb25zdCBjbG9zZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNsb3NlLXByb2plY3QtYnV0dG9uLWZvcm1cIlxuICApO1xuICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0KTtcbiAgY2xvc2VQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyQWRkUHJvamVjdEJ1dHRvbigpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtYnV0dG9uLXRhYlwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJQb3B1bGF0ZVByb2plY3RUb2RvcygpIHtcbiAgY29uc3QgcHJvamVjdHNEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtcmVmcmVzaFwiKTtcbiAgcHJvamVjdHNEb20uZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHRvQ2FtZWxDYXNlKHByb2plY3QuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQpO1xuICAgICAgdG9nZ2xlSG92ZXJDb2xvclByb2plY3RzKHByb2plY3QpO1xuICAgICAgcG9wdWxhdGVUb2Rvc0RvbShzZWxlY3RlZFByb2plY3QpO1xuICAgICAgY2hhbmdlQ29sb3JPZlNlbGVjdGVkVG9kb0RvbSgpO1xuICAgICAgcG9wdWxhdGVUb2RvRGV0YWlsc0RvbShzZWxlY3RlZFByb2plY3QsIDApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclBvcHVsYXRlVG9kb0RldGFpbHMoKSB7XG4gIGNvbnN0IHRvZG9zRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvXCIpO1xuICB0b2Rvc0RvbS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgdG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWR0b2RvSW5kZXggPSBOdW1iZXIodG9kby5kYXRhc2V0LmluZGV4KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdG9kby5kYXRhc2V0LnByb2plY3Q7XG4gICAgICBwb3B1bGF0ZVRvZG9EZXRhaWxzRG9tKGN1cnJlbnRQcm9qZWN0LCBzZWxlY3RlZHRvZG9JbmRleCk7XG4gICAgICB0b2dnbGVIb3ZlckNvbG9yVG9kb3ModG9kbyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9EZWxldGVUb2RvQnV0dG9ucygpIHtcbiAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmluXCIpO1xuICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIC8vc3RvcHMgZXZlbnQgYnViYmxpbmdcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0O1xuICAgICAgY29uc3QgdG9kb0luZGV4ID0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICAgICAgdG9kb0FwcC5wcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgICBzZXRUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgcG9wdWxhdGVUb2Rvc0RvbShjdXJyZW50UHJvamVjdCk7XG4gICAgICBwb3B1bGF0ZVRvZG9EZXRhaWxzRG9tKGN1cnJlbnRQcm9qZWN0LCBNYXRoLm1heCgwLCB0b2RvSW5kZXggLSAxKSk7XG4gICAgICBjaGFuZ2VDb2xvck9mTGFzdEFkZGVkVG9kb0RvbSgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvRGVsZXRlUHJvamVjdEJ1dHRvbnMoKSB7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGVsZXRlXCIpO1xuICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIC8vc3RvcHMgZXZlbnQgYnViYmxpbmdcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHRvQ2FtZWxDYXNlKFxuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnRcbiAgICAgICk7XG4gICAgICBkZWxldGUgdG9kb0FwcC5wcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XG4gICAgICBzZXRUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgcG9wdWxhdGVQcm9qZWN0c0RvbSgpO1xuICAgICAgY29uc3QgYXBwcm94Rmlyc3RQcm9qZWN0SW5Qcm9qZWN0cyA9IE9iamVjdC5rZXlzKHRvZG9BcHAucHJvamVjdHMpWzBdO1xuICAgICAgcG9wdWxhdGVUb2Rvc0RvbShhcHByb3hGaXJzdFByb2plY3RJblByb2plY3RzKTtcbiAgICAgIHBvcHVsYXRlVG9kb0RldGFpbHNEb20oYXBwcm94Rmlyc3RQcm9qZWN0SW5Qcm9qZWN0cywgMCk7XG4gICAgICBjaGFuZ2VDb2xvck9mRmlyc3RQcm9qZWN0QW5kVG9kbygpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvQ2VudGVyQWRkVG9kb0J1dHRvbigpIHtcbiAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2VudGVyLWFkZC10b2RvLWJ1dHRvblwiKTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBhZGRUb2RvQnV0dG9uLmRhdGFzZXQucHJvamVjdDtcblxuICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3BlbkFkZFRvZG9Gb3JtKGN1cnJlbnRQcm9qZWN0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb0NvbXBsZXRlZFRvZG9DaGVja2JveCgpIHtcbiAgY29uc3QgY29tcGxldGVkQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tib3hcIik7XG4gIGNvbXBsZXRlZENoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPVxuICAgICAgICBjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3Q7XG4gICAgICBjb25zdCB0b2RvSW5kZXggPSBOdW1iZXIoXG4gICAgICAgIGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXhcbiAgICAgICk7XG4gICAgICBjb25zdCB0b2RvID0gdG9kb0FwcC5wcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udG9kb3NbdG9kb0luZGV4XTtcblxuICAgICAgdG9kby5jb21wbGV0ZWQgPyAodG9kby5jb21wbGV0ZWQgPSBmYWxzZSkgOiAodG9kby5jb21wbGV0ZWQgPSB0cnVlKTtcbiAgICAgIHNldFRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9EZXRhaWxlZFRvZG8oKSB7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlLWRhdGVcIik7XG4gIGNvbnN0IHNlbGVjdGVkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWQtdG9kb1wiKTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBzZWxlY3RlZFRvZG8uZGF0YXNldC5wcm9qZWN0O1xuICBjb25zdCB0b2RvSW5kZXggPSBzZWxlY3RlZFRvZG8uZGF0YXNldC5pbmRleDtcbiAgY29uc3QgdG9kbyA9IHRvZG9BcHAucHJvamVjdHNbY3VycmVudFByb2plY3RdLnRvZG9zW3RvZG9JbmRleF07XG4gIGNvbnN0IGNvbXBsZXRlZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZXMtbm8tc2VsZWN0XCIpO1xuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1zZWxlY3RcIik7XG4gIGNvbnN0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzLWRlYXRpbGVkLXRvZG9cIik7XG5cbiAgLy9ldmVudExpc3RlbmVyc1xuICBkdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgdG9kby5kdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgIHBvcHVsYXRlVG9kb3NEb20oY3VycmVudFByb2plY3QpO1xuICAgIHBvcHVsYXRlVG9kb0RldGFpbHNEb20oY3VycmVudFByb2plY3QsIHRvZG9JbmRleCk7XG4gICAgY2hhbmdlQ29sb3JPZlRvZG8odG9kb0luZGV4KTtcbiAgICBzZXRUb0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcblxuICBjb21wbGV0ZWRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICBjb21wbGV0ZWRJbnB1dC52YWx1ZSA9PT0gXCJ5ZXNcIlxuICAgICAgPyAodG9kby5jb21wbGV0ZWQgPSB0cnVlKVxuICAgICAgOiAodG9kby5jb21wbGV0ZWQgPSBmYWxzZSk7XG4gICAgcG9wdWxhdGVUb2Rvc0RvbShjdXJyZW50UHJvamVjdCk7XG4gICAgcG9wdWxhdGVUb2RvRGV0YWlsc0RvbShjdXJyZW50UHJvamVjdCwgdG9kb0luZGV4KTtcbiAgICBjaGFuZ2VDb2xvck9mVG9kbyh0b2RvSW5kZXgpO1xuICAgIHNldFRvTG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xuXG4gIHByaW9yaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG4gICAgcG9wdWxhdGVUb2Rvc0RvbShjdXJyZW50UHJvamVjdCk7XG4gICAgcG9wdWxhdGVUb2RvRGV0YWlsc0RvbShjdXJyZW50UHJvamVjdCwgdG9kb0luZGV4KTtcbiAgICBjaGFuZ2VDb2xvck9mVG9kbyh0b2RvSW5kZXgpO1xuICAgIHNldFRvTG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xuXG4gIG5vdGVzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcbiAgICB0b2RvLm5vdGVzID0gbm90ZXNJbnB1dC50ZXh0Q29udGVudDtcbiAgICBzZXRUb0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsUHJvamVjdHNEb20oKSB7XG4gIGNvbnN0IHByb2plY3RzTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1yZWZyZXNoXCIpO1xuICBwcm9qZWN0c05vZGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxUb2Rvc0RvbSgpIHtcbiAgY29uc3QgdG9kb05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9cIik7XG4gIHRvZG9Ob2RlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kb0RldGFpbHNEb20oKSB7XG4gIGNvbnN0IHRvZG9EZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkLXRvZG9cIik7XG4gIGlmICh0b2RvRGV0YWlsKSB7XG4gICAgdG9kb0RldGFpbC5yZW1vdmUoKTtcbiAgfVxufVxuXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBwcm9qZWN0IGluIERPTVxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0c0RvbSgpIHtcbiAgcmVtb3ZlQWxsUHJvamVjdHNEb20oKTtcbiAgY29uc3QgcHJvamVjdHMgPSBPYmplY3QudmFsdWVzKHRvZG9BcHAucHJvamVjdHMpO1xuXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBsZWZ0Q29sdW1uLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlUHJvamVjdEh0bWxFbGVtZW50KHByb2plY3QubmFtZSwgcHJvamVjdC5kZXNjcmlwdGlvbilcbiAgICApO1xuICB9KTtcbiAgYWRkRXZlbnRMaXN0ZW5lclRvQWRkVG9kb0J1dHRvbnMoKTtcbiAgYWRkRXZlbnRMaXN0ZW5lclBvcHVsYXRlUHJvamVjdFRvZG9zKCk7XG4gIGFkZEV2ZW50TGlzdGVuZXJUb0RlbGV0ZVByb2plY3RCdXR0b25zKCk7XG4gIHJlbW92ZVRvZG9EZXRhaWxzRG9tKCk7XG4gIHJlbW92ZUFsbFRvZG9zRG9tKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVG9kb3NEb20ocHJvamVjdCkge1xuICByZW1vdmVBbGxUb2Rvc0RvbSgpO1xuICBjb25zdCB0b2RvQ29sdW1uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZW50ZXJcIik7XG4gIGNvbnN0IHRvZG9zQXJyYXkgPSB0b2RvQXBwLnByb2plY3RzW3Byb2plY3RdLnRvZG9zO1xuICBpZiAodG9kb3NBcnJheS5sZW5ndGggPD0gMCAmJiBjZW50ZXJDb2x1bW4uY2hpbGRyZW4ubGVuZ3RoIDw9IDApIHtcbiAgICBhZGRDZW50ZXJDb2x1bW5BZGRUb2RvQnV0dG9uKHByb2plY3QpO1xuICB9IGVsc2UgaWYgKHRvZG9zQXJyYXkubGVuZ3RoIDw9IDAgJiYgY2VudGVyQ29sdW1uLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZGF0YVNldEluZGV4ID0gMDtcbiAgICB0b2Rvc0FycmF5LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRvZG9Db2x1bW4uYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVRvZG9IdG1sRWxlbWVudChcbiAgICAgICAgICB0b2RvLm5hbWUsXG4gICAgICAgICAgdG9kby5jb21wbGV0ZWQsXG4gICAgICAgICAgdG9kby5kdWVEYXRlLFxuICAgICAgICAgIGRhdGFTZXRJbmRleCxcbiAgICAgICAgICBwcm9qZWN0XG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBkYXRhU2V0SW5kZXgrKztcbiAgICB9KTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJQb3B1bGF0ZVRvZG9EZXRhaWxzKCk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvRGVsZXRlVG9kb0J1dHRvbnMoKTtcbiAgICBhZGRFdmVudExpc3RlbmVyVG9Db21wbGV0ZWRUb2RvQ2hlY2tib3goKTtcbiAgICByZW1vdmVDZW50ZXJDb2x1bW5BZGRUb2RvQnV0dG9uKCk7XG4gICAgYWRkUHJpb3JpdHlDb2xvclRvVG9kb3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlQWRkVG9kb0J1dHRvbnMoKSB7XG4gIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtcmVmcmVzaFwiKTtcbiAgYWRkVG9kb0J1dHRvbi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQWRkVG9kb0J1dHRvbnMoKSB7XG4gIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtcmVmcmVzaFwiKTtcbiAgYWRkVG9kb0J1dHRvbi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUFkZFByb2plY3RCdXR0b24oKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LWJ1dHRvbi10YWJcIik7XG4gIGFkZFByb2plY3RCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBlbmFibGVBZGRQcm9qZWN0QnV0dG9uKCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b24tdGFiXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbn1cblxuZnVuY3Rpb24gc3VibWl0VG9kb1ZhbHVlcygpIHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1uYW1lLWZvcm1cIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc2NyaXB0aW9uLWZvcm1cIik7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGF0ZS1mb3JtXCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wcmlvcml0eS1mb3JtXCIpO1xuICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29tcGxldGVkLWZvcm1cIik7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLW5vdGVzLWZvcm1cIik7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLWRpdlwiKS5kYXRhc2V0LnByb2plY3Q7XG5cbiAgdG9kb0FwcC5wcm9qZWN0c1twcm9qZWN0XS5hZGRUb2RvKFxuICAgIG5hbWUudmFsdWUsXG4gICAgZGVzY3JpcHRpb24udmFsdWUsXG4gICAgZHVlRGF0ZS52YWx1ZSxcbiAgICBwcmlvcml0eS52YWx1ZSxcbiAgICBub3Rlcy52YWx1ZSxcbiAgICBjb21wbGV0ZWQudmFsdWVcbiAgKTtcblxuICBzZXRUb0xvY2FsU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVRvZG9EZXRhaWxzRG9tKHByb2plY3QsIHRvZG9JbmRleCkge1xuICBjb25zdCBzZWxlY3RlZFRvZG8gPSB0b2RvQXBwLnByb2plY3RzW3Byb2plY3RdLnRvZG9zW3RvZG9JbmRleF07XG4gIHJlbW92ZVRvZG9EZXRhaWxzRG9tKCk7XG4gIGlmIChzZWxlY3RlZFRvZG8pIHtcbiAgICByaWdodENvbHVtbi5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZVRvZG9EZXRhaWxlZEh0bWxFbGVtZW50KFxuICAgICAgICBzZWxlY3RlZFRvZG8ubmFtZSxcbiAgICAgICAgc2VsZWN0ZWRUb2RvLmRlc2NyaXB0aW9uLFxuICAgICAgICBzZWxlY3RlZFRvZG8uZHVlRGF0ZSxcbiAgICAgICAgc2VsZWN0ZWRUb2RvLnByaW9yaXR5LFxuICAgICAgICBzZWxlY3RlZFRvZG8ubm90ZXMsXG4gICAgICAgIHNlbGVjdGVkVG9kby5jb21wbGV0ZWQsXG4gICAgICAgIHRvZG9JbmRleCxcbiAgICAgICAgcHJvamVjdFxuICAgICAgKVxuICAgICk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvRGV0YWlsZWRUb2RvKCk7XG4gICAgYWRkUHJpb3JpdHlDb2xvclRvRGV0YWlsZWRUb2RvKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VGhyZWVDb2x1bW5MYXlvdXQoKSB7XG4gIGNlbnRlckNvbHVtbi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gIHJpZ2h0Q29sdW1uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGJvdHRvbS5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIxZnIgMWZyIDFmclwiO1xufVxuXG5mdW5jdGlvbiBzZXRUd29Db2x1bW5MYXlvdXQoKSB7XG4gIGJvdHRvbS5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIxZnIgMWZyXCI7XG4gIGNlbnRlckNvbHVtbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHJpZ2h0Q29sdW1uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gYWRkQ2VudGVyQ29sdW1uQWRkVG9kb0J1dHRvbihwcm9qZWN0KSB7XG4gIGNlbnRlckNvbHVtbi5zdHlsZS5ncmlkQXV0b1Jvd3MgPSBcIjEwMCVcIjtcbiAgY2VudGVyQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUNlbnRlckNvbHVtbkFkZFRvZG9IdG1sQnV0dG9uRWxlbWVudChwcm9qZWN0KSk7XG4gIGFkZEV2ZW50TGlzdGVuZXJUb0NlbnRlckFkZFRvZG9CdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2VudGVyQ29sdW1uQWRkVG9kb0J1dHRvbigpIHtcbiAgY2VudGVyQ29sdW1uLnN0eWxlLmdyaWRBdXRvUm93cyA9IFwiMjIlXCI7XG4gIGNvbnN0IGNlbnRlckFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbnRlci1hZGQtdG9kby1kaXZcIik7XG4gIGlmIChjZW50ZXJBZGRUb2RvQnV0dG9uKSB7XG4gICAgY2VudGVyQWRkVG9kb0J1dHRvbi5yZW1vdmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUb0xvY2FsU3RvcmFnZSgpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3RzSlNPTiA9IEpTT04uc3RyaW5naWZ5KHRvZG9BcHAucHJvamVjdHMpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIGN1cnJlbnRQcm9qZWN0c0pTT04pO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKSB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VQcm9qZWN0c0pTT04pO1xuICBmb3IgKGxldCBwcm9qZWN0IGluIHByb2plY3RzKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb2plY3RzW3Byb2plY3RdLCBQcm9qZWN0LnByb3RvdHlwZSk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBnZXRBbnlBdmFpbGFibGVMb2NhbFN0b3JhZ2UoKSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgaWYgKGdldExvY2FsU3RvcmFnZSgpID09PSBudWxsKSB7XG4gICAgICBzYW1wbGVQcm9qZWN0c0RhdGEodG9kb0FwcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9BcHAucHJvamVjdHMgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJMb2NhbCBzdG9yYWdlIG5vdCBhdmFpbGFibGVcIik7XG4gIH1cbn1cblxuLy9GdW5jdGlvbiB0byBjaGFuZ2UgY29sb3VyIG9mIGN1cnJlbnRseSBzZWxlY3RlZCB0b2RvcyBhbmQgcHJvamVjdHMuXG5cbmZ1bmN0aW9uIHRvZ2dsZUhvdmVyQ29sb3JQcm9qZWN0cyhwcm9qZWN0RWxlbWVudCkge1xuICBjb25zdCBwcm9qZWN0c0RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1yZWZyZXNoXCIpO1xuICBwcm9qZWN0c0RvbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC1yZWZyZXNoLXNlbGVjdGVkXCIpO1xuICB9KTtcbiAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcmVmcmVzaC1zZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ29sb3JPZkxhc3RBZGRlZFByb2plY3REb20oKSB7XG4gIGNvbnN0IHByb2plY3RzRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LXJlZnJlc2hcIik7XG4gIGNvbnN0IGxhc3RQcm9qZWN0ID0gcHJvamVjdHNEb21bcHJvamVjdHNEb20ubGVuZ3RoIC0gMV07XG5cbiAgaWYgKGxhc3RQcm9qZWN0KSB7XG4gICAgbGFzdFByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcmVmcmVzaC1zZWxlY3RlZFwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVIb3ZlckNvbG9yVG9kb3ModG9kb0VsZW1lbnQpIHtcbiAgY29uc3QgdG9kb3NEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9cIik7XG4gIHRvZG9zRG9tLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2RvLXNlbGVjdGVkXCIpO1xuICB9KTtcbiAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tc2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbG9yT2ZTZWxlY3RlZFRvZG9Eb20oKSB7XG4gIGNvbnN0IGZpcnN0VG9kb0RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb1wiKTtcbiAgaWYgKGZpcnN0VG9kb0RvbSkge1xuICAgIGZpcnN0VG9kb0RvbS5jbGFzc0xpc3QuYWRkKFwidG9kby1zZWxlY3RlZFwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb2xvck9mTGFzdEFkZGVkVG9kb0RvbSgpIHtcbiAgY29uc3QgdG9kb3NEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9cIik7XG4gIGNvbnN0IGxhc3RUb2RvID0gdG9kb3NEb21bdG9kb3NEb20ubGVuZ3RoIC0gMV07XG5cbiAgaWYgKGxhc3RUb2RvKSB7XG4gICAgbGFzdFRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tc2VsZWN0ZWRcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlQ29sb3JPZkZpcnN0UHJvamVjdEFuZFRvZG8oKSB7XG4gIGNvbnN0IGZpcnN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1yZWZyZXNoXCIpO1xuICBmaXJzdFByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcmVmcmVzaC1zZWxlY3RlZFwiKTtcbiAgY29uc3QgZmlyc3RUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvXCIpO1xuICBmaXJzdFRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tc2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbG9yT2ZUb2RvKHRvZG9JbmRleCkge1xuICBjb25zdCB0b2Rvc0RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb1wiKTtcbiAgY29uc3Qgc2VsZWN0ZWRUb2RvID0gdG9kb3NEb21bdG9kb0luZGV4XTtcbiAgc2VsZWN0ZWRUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBhZGRQcmlvcml0eUNvbG9yVG9Ub2RvcygpIHtcbiAgY29uc3QgdG9kb3NEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9cIik7XG4gIHRvZG9zRG9tLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHRvZG8uZGF0YXNldC5wcm9qZWN0O1xuICAgIGNvbnN0IHByaW9yaXR5ID1cbiAgICAgIHRvZG9BcHAucHJvamVjdHNbcHJvamVjdE5hbWVdLnRvZG9zW3RvZG8uZGF0YXNldC5pbmRleF0ucHJpb3JpdHk7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKGB0b2RvLXByaW9yaXR5LSR7cHJpb3JpdHl9YCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcmlvcml0eUNvbG9yVG9EZXRhaWxlZFRvZG8oKSB7XG4gIGNvbnN0IGRldGFpbGVkVG9kb0RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWQtdG9kb1wiKTtcbiAgY29uc29sZS5sb2coZGV0YWlsZWRUb2RvRG9tKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkZXRhaWxlZFRvZG9Eb20uZGF0YXNldC5wcm9qZWN0O1xuICBjb25zdCB0b2RvSW5kZXggPSBkZXRhaWxlZFRvZG9Eb20uZGF0YXNldC5pbmRleDtcbiAgY29uc3QgcHJpb3JpdHkgPSB0b2RvQXBwLnByb2plY3RzW3Byb2plY3ROYW1lXS50b2Rvc1t0b2RvSW5kZXhdLnByaW9yaXR5O1xuICBkZXRhaWxlZFRvZG9Eb20uY2xhc3NMaXN0LmFkZChgZGV0YWlsZWQtdG9kby1wcmlvcml0eS0ke3ByaW9yaXR5fWApO1xufVxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gICAgdGhpcy5jb21wbGV0ZWRQZXJjZW50YWdlID0gMDtcbiAgfVxuXG4gIGFkZFRvZG8obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY29tcGxldGVkKSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKFxuICAgICAgbmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgbm90ZXMsXG4gICAgICBjb21wbGV0ZWRcbiAgICApO1xuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgfVxuXG4gIC8vbm90IHVzZWRcbiAgcmVtb3ZlVG9kbyhuYW1lKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUb2RvSW5kZXggPSB0aGlzLnRvZG9zLmZpbmRJbmRleCgoaSkgPT4gaS5uYW1lID09PSBuYW1lKTtcbiAgICB0aGlzLnRvZG9zLnNwbGljZShzZWxlY3RlZFRvZG9JbmRleCwgMSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhbXBsZVByb2plY3RzRGF0YSh0b2RvQXBwKSB7XG4gIHRvZG9BcHAuYWRkUHJvamVjdChcIlByb2plY3QgT25lXCIsIFwiTXkgRmlyc3QgUHJvamVjdFwiKTtcblxuICB0b2RvQXBwLnByb2plY3RzLnByb2plY3RPbmUuYWRkVG9kbyhcbiAgICBcIkdvb2RieWUgTm90ZVwiLFxuICAgIFwiVGVycmlibGUgdGFza1wiLFxuICAgIFwiMjAxOC0wNy0yMlwiLFxuICAgIFwibWVkaXVtXCIsXG4gICAgXCJOb3RlcyBhcmUgYm9yaW5nXCIsXG4gICAgZmFsc2VcbiAgKTtcblxuICB0b2RvQXBwLnByb2plY3RzLnByb2plY3RPbmUuYWRkVG9kbyhcbiAgICBcIk11c3QgZG8hXCIsXG4gICAgXCJBbWF6aW5nIHRhc2tcIixcbiAgICBcIjIwMTItMDctMDJcIixcbiAgICBcImxvd1wiLFxuICAgIFwiTm90ZXMgYXJlIHRoZSBiZXN0XCIsXG4gICAgZmFsc2VcbiAgKTtcblxuICB0b2RvQXBwLnByb2plY3RzLnByb2plY3RPbmUuYWRkVG9kbyhcbiAgICBcIldlbGNvbWVcIixcbiAgICBcInRhc2tcIixcbiAgICBcIjIwMTUtMDUtMDJcIixcbiAgICBcImxvd1wiLFxuICAgIFwibm90ZXMgYXJlIGJvcmluZ1wiLFxuICAgIHRydWVcbiAgKTtcbiAgdG9kb0FwcC5wcm9qZWN0cy5kZWZhdWx0UHJvamVjdC5hZGRUb2RvKFxuICAgIFwiRmVlZGJhY2s/XCIsXG4gICAgXCJXb3VsZCBiZSBhcHByZWNpYXRlZFwiLFxuICAgIFwiMjAxOC0xMS0yNFwiLFxuICAgIFwibG93XCIsXG4gICAgXCJOb3RlcyBhcmUgYXdlc29tZVwiLFxuICAgIGZhbHNlXG4gICk7XG5cbiAgdG9kb0FwcC5wcm9qZWN0cy5kZWZhdWx0UHJvamVjdC5hZGRUb2RvKFxuICAgIFwiTXkgc2Vjb25kIG5vdGVcIixcbiAgICBcIkFtYXppbmcgRGVmYXVsdFwiLFxuICAgIFwiMjAxNi0wMi0yNFwiLFxuICAgIFwiaGlnaFwiLFxuICAgIFwiTm90ZXMgYXJlIE9LXCIsXG4gICAgdHJ1ZVxuICApO1xuXG4gIHRvZG9BcHAucHJvamVjdHMuZGVmYXVsdFByb2plY3QuYWRkVG9kbyhcbiAgICBcIk15IHRoaXJkIG5vdGVcIixcbiAgICBcInRhc2tpc2hcIixcbiAgICBcIjIwMTgtMDktMjFcIixcbiAgICBcImxvd1wiLFxuICAgIFwibm90ZXMgYXJlIGhtbW1cIixcbiAgICB0cnVlXG4gICk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICBzdG9yYWdlICYmXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cikge1xuICBsZXQgYW5zd2VyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBhbnN3ZXJcbiAgICAuc3BsaXQoXCIgXCIpXG4gICAgLnJlZHVjZSgocywgYykgPT4gcyArIChjLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYy5zbGljZSgxKSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIG5hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyA9IG51bGwsXG4gICAgY29tcGxldGVkID0gZmFsc2VcbiAgKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB9XG4gIC8vbm90IHVzZWRcbiAgY2hhbmdlUHJpb3JpdHkobGV2ZWwpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gbGV2ZWw7XG4gIH1cbiAgLy9ub3QgdXNlZFxuICBjb21wbGV0ZWQoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=