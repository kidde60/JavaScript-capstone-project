/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Inter', sans-serif;\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: rgb(108, 148, 0);\\r\\n}\\r\\n\\r\\n.header {\\r\\n  padding: 10px 5%;\\r\\n  background-color: rgb(20, 20, 20);\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  height: 25px;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n  gap: 3rem;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  padding: 5% 5%;\\r\\n  background-color: lightgray;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(4, 1fr);\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\n.card-item {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  border: 3px solid rgb(108, 148, 0);\\r\\n  border-radius: 8px;\\r\\n  background-color: rgb(108, 148, 0);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.card-item img {\\r\\n  width: 100%;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.card-text {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  padding: 3%;\\r\\n}\\r\\n\\r\\nhr {\\r\\n  border-top: 1px solid darkgray;\\r\\n  border-bottom: none;\\r\\n}\\r\\n\\r\\n.card-item hr {\\r\\n  border-top: 1px solid lightgray;\\r\\n  border-bottom: none;\\r\\n}\\r\\n\\r\\n.show-title {\\r\\n  width: 65%;\\r\\n}\\r\\n\\r\\n.title-and-likes {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  padding: 2% 8%;\\r\\n  width: fit-content;\\r\\n  border: 1px solid white;\\r\\n  border-radius: 2px;\\r\\n  color: white;\\r\\n  background-color: transparent;\\r\\n  font-size: inherit;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  width: 70vw;\\r\\n  margin: 10px auto;\\r\\n  background: grey;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.closeBtn {\\r\\n  font-size: 30px;\\r\\n  padding: 10px;\\r\\n  background: grey;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  gap: 20px;\\r\\n  background-color: rgb(20, 20, 20);\\r\\n  color: white;\\r\\n  padding: 4%;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.modal img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 0.8rem;\\r\\n}\\r\\n\\r\\n.modal-content h4 {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.modal-title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.modal-title a:hover {\\r\\n  color: darkgreen;\\r\\n}\\r\\n\\r\\n.modal-sub-title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\n.genres {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\n.genres li {\\r\\n  background-color: rgb(108, 148, 0);\\r\\n  padding: 3px 10px;\\r\\n  width: fit-content;\\r\\n  border-radius: 20px;\\r\\n  font-size: 0.8rem;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.all-comments {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 5px;\\r\\n  border: 1px solid gray;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.display-comments li {\\r\\n  padding: 4px 10px;\\r\\n  margin-bottom: 4px;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  font-size: inherit;\\r\\n  padding: 5px;\\r\\n  border: 1px solid gray;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n.form button {\\r\\n  padding: 10px 10px;\\r\\n  width: 100px;\\r\\n  border: none;\\r\\n  border-radius: 2px;\\r\\n  color: white;\\r\\n  background-color: rgb(108, 148, 0);\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  cursor: pointer;\\r\\n  color: rgb(108, 148, 0);\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.fa-star {\\r\\n  color: orange;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: rgb(20, 20, 20);\\r\\n  color: white;\\r\\n  padding: 30px 5%;\\r\\n  font-size: 0.8rem;\\r\\n}\\r\\n\\r\\n/* Mobile */\\r\\n@media (max-width: 768px) {\\r\\n  .logo {\\r\\n    height: 20px;\\r\\n  }\\r\\n\\r\\n  .nav-list {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 2rem;\\r\\n  }\\r\\n\\r\\n  .show-title {\\r\\n    width: 75%;\\r\\n  }\\r\\n\\r\\n  .comment-btn {\\r\\n    padding: 2% 8%;\\r\\n    width: fit-content;\\r\\n    border: 1px solid white;\\r\\n    border-radius: 2px;\\r\\n    color: white;\\r\\n    background-color: transparent;\\r\\n    font-size: inherit;\\r\\n  }\\r\\n\\r\\n  button:hover {\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  .modal-container {\\r\\n    position: fixed;\\r\\n    z-index: 100;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    bottom: 0;\\r\\n    overflow: auto;\\r\\n    padding: 6%;\\r\\n    background-color: rgba(0, 0, 0, 0.822);\\r\\n  }\\r\\n\\r\\n  .modal {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 2%;\\r\\n  }\\r\\n\\r\\n  .fa-times {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .modal img {\\r\\n    width: 100%;\\r\\n    margin-bottom: 2%;\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    text-align: center;\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* eslint-disable no-use-before-define */\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  displayMovie();\r\n});\r\n\r\n//   Home page\r\nconst movieApi = async () => {\r\n  const fetchResult = await fetch('https://api.tvmaze.com/shows');\r\n  const ShowResult = await fetchResult.json();\r\n  return ShowResult.slice(2, 15);\r\n};\r\n\r\nwindow.onload = movieApi();\r\n\r\nconst contCount = (array) => array.length;\r\n\r\nconst displayMovie = async () => {\r\n  const Movies = await movieApi();\r\n  const fetchLikes = await fetchLikeApi();\r\n\r\n  const movieLength = document.querySelector('.movie-number');\r\n  movieLength.innerText = `Movies(${contCount(Movies)})`;\r\n\r\n  Movies.forEach((card) => {\r\n    const cardLikes = fetchLikes.find((like) => like.item_id === card.id);\r\n    const { id } = card;\r\n\r\n    let liveCount = +cardLikes?.likes;\r\n\r\n    const Container = document.querySelector('.modal-container');\r\n    const listItem = document.createElement('div');\r\n\r\n    listItem.innerHTML = '';\r\n    listItem.innerHTML = `<div>\r\n                          <img src=${card.image.original} alt=${card.name}>\r\n                        </div>\r\n                        <a href=\"${card.officialSite}\" class=\"movie-title\">${card.name}</a>\r\n                        <div class=\"movie-info\">\r\n                          <p>${card.weight}mb</p>\r\n                          <i class=\"fa fa-heart\"  aria-hidden=\"true\"></i>\r\n                          <p class = \"totalLikes\">${liveCount} likes</p>\r\n                        </div>\r\n                        <button id = ${id} class = \"commentBtn\">Comments</button>`;\r\n\r\n    const likeBtn = listItem.querySelectorAll('.fa-heart');\r\n    likeBtn.forEach((button) => {\r\n      button.addEventListener('click', (btn) => {\r\n        const liveCountElement = listItem.getElementsByClassName('totalLikes')[0];\r\n        liveCount += 1;\r\n        liveCountElement.innerHTML = `${liveCount} likes`;\r\n        submitNewLike(id);\r\n        btn.disabled = true;\r\n        button.style.color = 'red';\r\n      });\r\n    });\r\n\r\n    // cardUL.appendChild(cardLI);\r\n    Container.appendChild(listItem);\r\n\r\n    const totalLikes = document.querySelectorAll('.totalLikes');\r\n    totalLikes.forEach((like) => {\r\n      if (like.innerText === 'undefined likes') {\r\n        like.innerText = '0 like';\r\n      } else if (like.innerText === '1 likes') {\r\n        like.innerText = '1 like';\r\n      }\r\n    });\r\n  });\r\n};\r\n// likes\r\nconst tvId = 'MjgCDPvMKfBMbwFq4McF';\r\n\r\nconst fetchLikeApi = async () => {\r\n  const getLikeResult = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${tvId}/likes`).then((res) => res.json());\r\n  return getLikeResult;\r\n};\r\n\r\nconst submitNewLike = async (id) => {\r\n  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${tvId}/likes`, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n// popup\r\n\r\nconst postComments = async (id, name, com) => {\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4va6c4ouZmpzSETsANV3/comments', {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: name,\r\n      comment: com,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\nconst getComments = async (id) => {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4va6c4ouZmpzSETsANV3/comments?item_id=${id}`).then((res) => res.json());\r\n  return response;\r\n};\r\n\r\ndocument.addEventListener('click', async (e) => {\r\n  if (!e.target.matches('.commentBtn')) {\r\n    return;\r\n  }\r\n  const { id } = e.target;\r\n  const comList = await getComments(id);\r\n  const MoveInfo = await getData(id);\r\n  await display(MoveInfo, id, comList);\r\n  const container = document.querySelector('.modal-container');\r\n  container.style.display = 'none';\r\n\r\n  displayCom(comList);\r\n});\r\n\r\n// class Popup {\r\nconst getData = async (id) => {\r\n  const movieInfo = await fetch(`https://api.tvmaze.com/shows/${id}`).then((result) => result.json());\r\n  return movieInfo;\r\n};\r\n\r\nconst countComments = (number) => number.length;\r\n\r\nconst display = async (movieInfo, id, comList) => {\r\n  const movie = await movieInfo;\r\n  const array = await comList;\r\n  const popup = document.querySelector('.popup');\r\n  popup.innerHTML = `\r\n      <div class=\"description\">\r\n      <button type=\"button\" class=\"closeBtn\">X</button>\r\n        <div>\r\n          <a href=\"${movie.network.officialSite}\"><img src=\"${movie.image.medium}\" class = \"image\" id = \"movie-img\" alt=\"\"></a>\r\n          <div class = \"summary-tag\">\r\n          <h1>${movie.name}</h1>\r\n          ${movie.summary}\r\n        </div>\r\n        <div>\r\n        <h3 class = \"class-heading\"> All Comments (${countComments(array)})</h3>\r\n        <ul class =\"display-comments\">\r\n        </ul>\r\n      </div>\r\n            <div class =\"form\" >\r\n            <h2> Add a comment </h2>\r\n              <label for=\"fname\">Name:</label><br>\r\n              <input type=\"text\" id=\"fname\" name=\"fname\" placeholder = \"Enter your name\"><br><br>\r\n              <label for=\"comment\">Comment:</label><br>\r\n              <textarea name=\"comment\" id=\"comment\" cols=\"20\" rows=\"3\" placeholder = \"Enter comment\"></textarea>\r\n              <button id = ${id} class= \"submit\" type=\"submit\"> Submit</button>\r\n            </div>\r\n          \r\n        </div>\r\n        \r\n      </div>\r\n      \r\n        \r\n      </ul>`;\r\n\r\n  const close = document.querySelector('.closeBtn');\r\n  close.addEventListener('click', () => {\r\n    document.querySelector('.modal-container').style.display = 'grid';\r\n    document.querySelector('.popup').style.display = 'none';\r\n  });\r\n};\r\n\r\nconst displayCom = async (MoveInfo) => {\r\n  const commentList = document.querySelector('.display-comments');\r\n  commentList.innerHTML = '';\r\n  const array = await MoveInfo;\r\n  array.forEach((item) => {\r\n    commentList.innerHTML += `<li class = \"listCom\">${item.username}: ${item.comment} <br> :${item.creation_date.slice(-5, -1)}</li>`;\r\n  });\r\n};\r\n\r\ndocument.addEventListener('click', async (e) => {\r\n  if (!e.target.matches('.submit')) {\r\n    return;\r\n  }\r\n  e.preventDefault();\r\n  const name = document.getElementById('fname').value;\r\n  const com = document.getElementById('comment').value;\r\n  const { id } = e.target;\r\n  await postComments(id, name, com);\r\n  const comList = await getComments(id);\r\n  displayCom(comList);\r\n});\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;