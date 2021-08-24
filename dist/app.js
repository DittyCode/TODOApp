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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://src/./src/scss/style.scss?");

/***/ }),

/***/ "./src/components/addTodoItem.js":
/*!***************************************!*\
  !*** ./src/components/addTodoItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./src/components/error.js\");\n/* harmony import */ var _deleteTodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTodoItem */ \"./src/components/deleteTodoItem.js\");\n/* harmony import */ var _todoItemsLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItemsLeft */ \"./src/components/todoItemsLeft.js\");\n/* harmony import */ var _statusTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statusTodo */ \"./src/components/statusTodo.js\");\n\r\n\r\n\r\n\r\n\r\nconst renderTodoItem = ({ value }) => {\r\n\tconst todoTemplate = document\r\n\t\t.querySelector('#todoTemplate')\r\n\t\t.content.cloneNode(true);\r\n\tconst todoItem = document.createElement('div');\r\n\ttodoItem.classList.add('todo');\r\n\ttodoItem.dataset.complete = 'no';\r\n\r\n\ttodoItem.appendChild(todoTemplate);\r\n\r\n\ttodoItem.querySelector('.todo__item-value').innerText = value;\r\n\r\n\ttodoItem\r\n\t\t.querySelector('.todo__btn')\r\n\t\t.addEventListener('click', e => (0,_statusTodo__WEBPACK_IMPORTED_MODULE_3__.changeTodoStatus)(e));\r\n\r\n\ttodoItem\r\n\t\t.querySelector('.todo__delete')\r\n\t\t.addEventListener('click', e => (0,_deleteTodoItem__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(e));\r\n\r\n\treturn todoItem;\r\n};\r\n\r\nconst clearInput = todoInput => {\r\n\ttodoInput.value = '';\r\n};\r\n\r\nconst addTodo = e => {\r\n\tconst todoContainer = document.querySelector('[data-todoContainer]');\r\n\tconst todoInput = document.querySelector('[data-todoInput]');\r\n\ttodoInput.value ? (0,_error__WEBPACK_IMPORTED_MODULE_0__.hideError)() : (0,_error__WEBPACK_IMPORTED_MODULE_0__.showError)();\r\n\tif (!(0,_error__WEBPACK_IMPORTED_MODULE_0__.isErrorActive)()) {\r\n\t\tconst todoItem = renderTodoItem(todoInput);\r\n\t\tclearInput(todoInput);\r\n\t\ttodoContainer.prepend(todoItem);\r\n\t\t(0,_todoItemsLeft__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/addTodoItem.js?");

/***/ }),

/***/ "./src/components/deleteTodoItem.js":
/*!******************************************!*\
  !*** ./src/components/deleteTodoItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo)\n/* harmony export */ });\n/* harmony import */ var _todoItemsLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemsLeft */ \"./src/components/todoItemsLeft.js\");\n\r\n\r\nconst deleteTodo = ({ target }) => {\r\n\tconst todoContainer = document.querySelector('[data-todoContainer]');\r\n\ttarget.closest('.todo').remove();\r\n\t(0,_todoItemsLeft__WEBPACK_IMPORTED_MODULE_0__.itemsLeft)(todoContainer);\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/deleteTodoItem.js?");

/***/ }),

/***/ "./src/components/error.js":
/*!*********************************!*\
  !*** ./src/components/error.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showError\": () => (/* binding */ showError),\n/* harmony export */   \"hideError\": () => (/* binding */ hideError),\n/* harmony export */   \"isErrorActive\": () => (/* binding */ isErrorActive)\n/* harmony export */ });\nconst error = document.querySelector('[data-error]');\r\nconst showError = () => {\r\n\terror.classList.add('show');\r\n};\r\nconst hideError = () => {\r\n\terror.classList.remove('show');\r\n};\r\nconst isErrorActive = () => {\r\n\treturn error.classList.contains('show');\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/error.js?");

/***/ }),

/***/ "./src/components/filterTodos.js":
/*!***************************************!*\
  !*** ./src/components/filterTodos.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterTodoItems\": () => (/* binding */ filterTodoItems),\n/* harmony export */   \"clearCompletedTodos\": () => (/* binding */ clearCompletedTodos)\n/* harmony export */ });\n/* harmony import */ var _todoItemsLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemsLeft */ \"./src/components/todoItemsLeft.js\");\n\r\n\r\nconst filterTodoItems = ({ target }) => {\r\n\tconst todos = [...document.querySelectorAll('.todo')];\r\n\tconst status = {\r\n\t\tall: ['yes', 'no'],\r\n\t\tactive: ['no'],\r\n\t\tcompleted: ['yes'],\r\n\t};\r\n\ttodos.forEach(todo => {\r\n\t\tif (status[target.dataset.filter].includes(todo.dataset.complete)) {\r\n\t\t\ttodo.style.setProperty('display', '');\r\n\t\t} else {\r\n\t\t\ttodo.style.setProperty('display', 'none');\r\n\t\t}\r\n\t});\r\n};\r\n\r\nconst clearCompletedTodos = () => {\r\n\tconst todos = [...document.querySelectorAll('.todo')];\r\n\ttodos.forEach(todo => {\r\n\t\tif (todo.dataset.complete === 'yes') todo.remove();\r\n\t});\r\n\t(0,_todoItemsLeft__WEBPACK_IMPORTED_MODULE_0__.itemsLeft)();\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/filterTodos.js?");

/***/ }),

/***/ "./src/components/statusTodo.js":
/*!**************************************!*\
  !*** ./src/components/statusTodo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTodoStatus\": () => (/* binding */ changeTodoStatus)\n/* harmony export */ });\n/* harmony import */ var _todoItemsLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemsLeft */ \"./src/components/todoItemsLeft.js\");\n\r\n\r\nconst renderStatusImage = todoStatus => {\r\n\tconst todoItem = todoStatus.closest('.todo');\r\n\tif (!todoStatus.children.length) {\r\n\t\ttodoStatus.innerHTML = `\r\n        <img\r\n\t\t\t\t\tclass=\"todo__btn-img\"\r\n\t\t\t\t\tsrc=\"./images/icon-check.svg\"\r\n\t\t\t\t\talt=\"dark theme icon\"\r\n\t\t\t\t/>\r\n        `;\r\n\t\ttodoItem.dataset.complete = 'yes';\r\n\t\ttodoItem.querySelector('.todo__item-value').classList.add('complete');\r\n\t} else {\r\n\t\ttodoStatus.innerHTML = '';\r\n\t\ttodoItem.dataset.complete = 'no';\r\n\t\ttodoItem.querySelector('.todo__item-value').classList.remove('complete');\r\n\t}\r\n};\r\n\r\nconst changeTodoStatus = ({ target }) => {\r\n\trenderStatusImage(target);\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/statusTodo.js?");

/***/ }),

/***/ "./src/components/theme.js":
/*!*********************************!*\
  !*** ./src/components/theme.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTheme\": () => (/* binding */ changeTheme)\n/* harmony export */ });\nconst changeThemeImage = target => {\r\n\tconst actualImage = target.getAttribute('src');\r\n\tif (actualImage === './images/icon-sun.svg') {\r\n\t\ttarget.setAttribute('src', './images/icon-moon.svg');\r\n\t} else {\r\n\t\ttarget.setAttribute('src', './images/icon-sun.svg');\r\n\t}\r\n};\r\n\r\nconst changeTheme = ({ target }) => {\r\n\tchangeThemeImage(target);\r\n\tlet themeData = document.body.dataset.theme;\r\n\r\n\tif (themeData === 'light') {\r\n\t\tthemeData = 'dark';\r\n\t\tlocalStorage.setItem('theme', 'dark');\r\n\t} else {\r\n\t\tthemeData = 'light';\r\n\t\tlocalStorage.setItem('theme', 'light');\r\n\t}\r\n\tdocument.body.dataset.theme = themeData;\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/theme.js?");

/***/ }),

/***/ "./src/components/todoItemsLeft.js":
/*!*****************************************!*\
  !*** ./src/components/todoItemsLeft.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemsLeft\": () => (/* binding */ itemsLeft)\n/* harmony export */ });\nconst itemsLeft = () => {\r\n\tconst todoContainer = document.querySelector('[data-todoContainer]');\r\n\tconst items = document.querySelector('[data-items]');\r\n\r\n\tconst left = todoContainer.children.length || 1;\r\n\r\n\titems.innerHTML = left - 1;\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/todoItemsLeft.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _components_addTodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/addTodoItem */ \"./src/components/addTodoItem.js\");\n/* harmony import */ var _components_filterTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filterTodos */ \"./src/components/filterTodos.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/theme */ \"./src/components/theme.js\");\n\r\n\r\n\r\n\r\n\r\n(function () {\r\n\tconst todoForm = document.querySelector('[data-todoForm]');\r\n\tconst filterButtons = document.querySelectorAll('.other__filters-btn');\r\n\tconst clearCompleted = document.querySelector('[data-clearComplete]');\r\n\tconst theme = document.querySelector('[data-themeBtn]');\r\n\r\n\tdocument.body.dataset.theme = localStorage.getItem('theme');\r\n\r\n\ttheme.addEventListener('click', e => (0,_components_theme__WEBPACK_IMPORTED_MODULE_3__.changeTheme)(e));\r\n\r\n\tclearCompleted.addEventListener('click', _components_filterTodos__WEBPACK_IMPORTED_MODULE_2__.clearCompletedTodos);\r\n\r\n\tfilterButtons.forEach(button => {\r\n\t\tbutton.addEventListener('click', e => (0,_components_filterTodos__WEBPACK_IMPORTED_MODULE_2__.filterTodoItems)(e));\r\n\t});\r\n\r\n\ttodoForm.addEventListener('submit', e => {\r\n\t\te.preventDefault();\r\n\t\t(0,_components_addTodoItem__WEBPACK_IMPORTED_MODULE_1__.addTodo)(e);\r\n\t});\r\n})();\r\n\n\n//# sourceURL=webpack://src/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;