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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTodoItem\": () => (/* binding */ renderTodoItem),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./src/components/error.js\");\n/* harmony import */ var _deleteTodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTodoItem */ \"./src/components/deleteTodoItem.js\");\n/* harmony import */ var _todoItemsLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItemsLeft */ \"./src/components/todoItemsLeft.js\");\n/* harmony import */ var _statusTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statusTodo */ \"./src/components/statusTodo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ \"./src/components/storage.js\");\n/* harmony import */ var _dragable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dragable */ \"./src/components/dragable.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst clearInput = todoInput => {\r\n\ttodoInput.value = '';\r\n};\r\n\r\nconst renderTodoItem = (value, status) => {\r\n\tconst todoTemplate = document\r\n\t\t.querySelector('#todoTemplate')\r\n\t\t.content.cloneNode(true);\r\n\tconst todoItem = document.createElement('div');\r\n\ttodoItem.classList.add('todo', 'draggable');\r\n\ttodoItem.setAttribute('draggable', 'true');\r\n\ttodoItem.dataset.complete = status;\r\n\ttodoItem.appendChild(todoTemplate);\r\n\r\n\ttodoItem.querySelector('.todo__item-value').innerText = value;\r\n\r\n\tif (status === 'yes') {\r\n\t\tconst btn = todoItem.querySelector('.todo__btn');\r\n\t\t(0,_statusTodo__WEBPACK_IMPORTED_MODULE_3__.toggleItemClass)(btn, 'active');\r\n\t\t(0,_statusTodo__WEBPACK_IMPORTED_MODULE_3__.changeTodoStatusComplete)(btn);\r\n\t}\r\n\r\n\ttodoItem\r\n\t\t.querySelector('.todo__btn')\r\n\t\t.addEventListener('click', ({ target }) => {\r\n\t\t\t(0,_statusTodo__WEBPACK_IMPORTED_MODULE_3__.toggleItemClass)(target, 'active');\r\n\t\t\t(0,_storage__WEBPACK_IMPORTED_MODULE_4__.changeTodoStatusStorage)(target);\r\n\t\t\t(0,_statusTodo__WEBPACK_IMPORTED_MODULE_3__.changeTodoStatusComplete)(target);\r\n\t\t});\r\n\r\n\ttodoItem\r\n\t\t.querySelector('.todo__delete')\r\n\t\t.addEventListener('click', ({ target }) => {\r\n\t\t\t(0,_storage__WEBPACK_IMPORTED_MODULE_4__.deleteTodoFromStorage)(target);\r\n\t\t\t(0,_deleteTodoItem__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(target);\r\n\t\t});\r\n\r\n\t(0,_dragable__WEBPACK_IMPORTED_MODULE_5__.dragable)();\r\n\r\n\treturn todoItem;\r\n};\r\n\r\nconst addTodo = (todoValue, todoInput, status) => {\r\n\tconst todoContainer = document.querySelector('[data-todoContainer]');\r\n\ttodoValue ? (0,_error__WEBPACK_IMPORTED_MODULE_0__.hideError)() : (0,_error__WEBPACK_IMPORTED_MODULE_0__.showError)();\r\n\tif (!(0,_error__WEBPACK_IMPORTED_MODULE_0__.isErrorActive)()) {\r\n\t\ttodoContainer.append(renderTodoItem(todoValue, status));\r\n\t\t(0,_storage__WEBPACK_IMPORTED_MODULE_4__.addTodoToStorage)(todoValue, status);\r\n\t\tclearInput(todoInput);\r\n\t\t(0,_todoItemsLeft__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/addTodoItem.js?");

/***/ }),

/***/ "./src/components/deleteTodoItem.js":
/*!******************************************!*\
  !*** ./src/components/deleteTodoItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo)\n/* harmony export */ });\n/* harmony import */ var _todoItemsLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemsLeft */ \"./src/components/todoItemsLeft.js\");\n\r\n\r\nconst deleteTodo = target => {\r\n\ttarget.closest('.todo').style.setProperty('animation-name', 'remove');\r\n\tsetTimeout(() => {\r\n\t\ttarget.closest('.todo').remove();\r\n\t\t(0,_todoItemsLeft__WEBPACK_IMPORTED_MODULE_0__.itemsLeft)();\r\n\t}, 300);\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/deleteTodoItem.js?");

/***/ }),

/***/ "./src/components/dragable.js":
/*!************************************!*\
  !*** ./src/components/dragable.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragable\": () => (/* binding */ dragable)\n/* harmony export */ });\nfunction getDragAfterElement(container, y) {\r\n\tconst draggableElements = [\r\n\t\t...container.querySelectorAll('.draggable:not(.dragging)'),\r\n\t];\r\n\r\n\treturn draggableElements.reduce(\r\n\t\t(closest, child) => {\r\n\t\t\tconst box = child.getBoundingClientRect();\r\n\t\t\tconst offset = y - box.top - box.height / 2;\r\n\t\t\tif (offset < 0 && offset > closest.offset) {\r\n\t\t\t\treturn { offset: offset, element: child };\r\n\t\t\t} else {\r\n\t\t\t\treturn closest;\r\n\t\t\t}\r\n\t\t},\r\n\t\t{ offset: Number.NEGATIVE_INFINITY }\r\n\t).element;\r\n}\r\n\r\nconst dragable = () => {\r\n\tconst draggables = document.querySelectorAll('.draggable');\r\n\tconst container = document.querySelector('[data-todoContainer]');\r\n\tdraggables.forEach(draggable => {\r\n\t\tdraggable.addEventListener('dragstart', () => {\r\n\t\t\tdraggable.classList.add('dragging');\r\n\t\t});\r\n\r\n\t\tdraggable.addEventListener('dragend', () => {\r\n\t\t\tdraggable.classList.remove('dragging');\r\n\t\t});\r\n\t});\r\n\tcontainer.addEventListener('dragover', e => {\r\n\t\te.preventDefault();\r\n\t\tconst afterElement = getDragAfterElement(container, e.clientY);\r\n\t\tconst draggable = document.querySelector('.dragging');\r\n\t\tif (afterElement == null) {\r\n\t\t\tcontainer.appendChild(draggable);\r\n\t\t} else {\r\n\t\t\tcontainer.insertBefore(draggable, afterElement);\r\n\t\t}\r\n\t});\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/dragable.js?");

/***/ }),

/***/ "./src/components/error.js":
/*!*********************************!*\
  !*** ./src/components/error.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showError\": () => (/* binding */ showError),\n/* harmony export */   \"hideError\": () => (/* binding */ hideError),\n/* harmony export */   \"isErrorActive\": () => (/* binding */ isErrorActive)\n/* harmony export */ });\nconst error = document.querySelector('[data-error]');\r\n\r\nconst showError = () => {\r\n\terror.classList.add('show');\r\n};\r\nconst hideError = () => {\r\n\terror.classList.remove('show');\r\n};\r\nconst isErrorActive = () => {\r\n\treturn error.classList.contains('show');\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/error.js?");

/***/ }),

/***/ "./src/components/filterTodos.js":
/*!***************************************!*\
  !*** ./src/components/filterTodos.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterTodoItems\": () => (/* binding */ filterTodoItems),\n/* harmony export */   \"clearCompletedTodos\": () => (/* binding */ clearCompletedTodos)\n/* harmony export */ });\n/* harmony import */ var _deleteTodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTodoItem */ \"./src/components/deleteTodoItem.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/components/storage.js\");\n/* harmony import */ var _todoItemsLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItemsLeft */ \"./src/components/todoItemsLeft.js\");\n\r\n\r\n\r\n\r\nconst filterTodoItems = target => {\r\n\tconst todos = [...document.querySelectorAll('.todo')];\r\n\tconst targetFilter = target.dataset.filter;\r\n\tconst status = {\r\n\t\tall: ['yes', 'no'],\r\n\t\tactive: ['no'],\r\n\t\tcompleted: ['yes'],\r\n\t};\r\n\ttodos.forEach(todo => {\r\n\t\tconst {\r\n\t\t\tdataset: { complete: todoStatus },\r\n\t\t} = todo;\r\n\t\ttodo.style.setProperty(\r\n\t\t\t'display',\r\n\t\t\t`${status[targetFilter].includes(todoStatus) ? '' : 'none'}`\r\n\t\t);\r\n\t});\r\n\t(0,_todoItemsLeft__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();\r\n};\r\n\r\nconst clearCompletedTodos = () => {\r\n\tconst todos = [...document.querySelectorAll('.todo')];\r\n\ttodos.forEach(todo => {\r\n\t\tconst {\r\n\t\t\tdataset: { complete: todoStatus },\r\n\t\t} = todo;\r\n\r\n\t\tif (todoStatus === 'yes') {\r\n\t\t\t(0,_storage__WEBPACK_IMPORTED_MODULE_1__.deleteTodoFromStorage)(todo);\r\n\t\t\t(0,_deleteTodoItem__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(todo);\r\n\t\t}\r\n\t});\r\n\t(0,_todoItemsLeft__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/filterTodos.js?");

/***/ }),

/***/ "./src/components/statusTodo.js":
/*!**************************************!*\
  !*** ./src/components/statusTodo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changePressedBtnStatus\": () => (/* binding */ changePressedBtnStatus),\n/* harmony export */   \"toggleTodoBtnStatus\": () => (/* binding */ toggleTodoBtnStatus),\n/* harmony export */   \"toggleItemClass\": () => (/* binding */ toggleItemClass),\n/* harmony export */   \"changeTodoStatusComplete\": () => (/* binding */ changeTodoStatusComplete)\n/* harmony export */ });\nconst completeStatusImage = item => {\r\n\treturn (item.innerHTML = `\r\n\t\t<img\r\n\t\t\tclass=\"todo__btn-img\"\r\n\t\t\tsrc=\"./images/icon-check.svg\"\r\n\t\t\talt=\"icon todo complete\"\r\n\t\t/>\r\n\t`);\r\n};\r\nconst changePressedBtnStatus = target => {\r\n\tif (target.dataset.pressed === 'no') {\r\n\t\ttarget.dataset.pressed = 'yes';\r\n\t} else {\r\n\t\ttarget.dataset.pressed = 'no';\r\n\t}\r\n\treturn target.dataset.pressed;\r\n};\r\n\r\nconst toggleTodoBtnStatus = todoStatus => {\r\n\tchangePressedBtnStatus(todoStatus);\r\n\tconst {\r\n\t\tdataset: { pressed: status },\r\n\t} = todoStatus;\r\n\ttodoStatus.innerHTML = `${\r\n\t\tstatus === 'yes' ? completeStatusImage(todoStatus) : ''\r\n\t}`;\r\n\ttoggleItemClass(todoStatus, 'active');\r\n};\r\n\r\nconst toggleItemClass = (item, className) => {\r\n\treturn item.classList.toggle(className);\r\n};\r\n\r\nconst changeTodoStatusComplete = item => {\r\n\tconst todoItem = item.closest('.todo');\r\n\tconst todoValue = todoItem.querySelector('.todo__item-value');\r\n\tif (!item.children.length) {\r\n\t\tcompleteStatusImage(item);\r\n\t\ttodoItem.dataset.complete = 'yes';\r\n\t} else {\r\n\t\titem.innerHTML = '';\r\n\t\ttodoItem.dataset.complete = 'no';\r\n\t}\r\n\ttoggleItemClass(todoValue, 'complete');\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/statusTodo.js?");

/***/ }),

/***/ "./src/components/storage.js":
/*!***********************************!*\
  !*** ./src/components/storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoToStorage\": () => (/* binding */ addTodoToStorage),\n/* harmony export */   \"deleteTodoFromStorage\": () => (/* binding */ deleteTodoFromStorage),\n/* harmony export */   \"changeTodoStatusStorage\": () => (/* binding */ changeTodoStatusStorage)\n/* harmony export */ });\nconst addTodoToStorage = (value, status) => {\r\n\tconst todoStorage = JSON.parse(localStorage.getItem('todos')) || [];\r\n\ttodoStorage.push(`${value}:${status}`);\r\n\tlocalStorage.setItem('todos', JSON.stringify(todoStorage));\r\n};\r\n\r\nconst deleteTodoFromStorage = target => {\r\n\tconst todoStorage = JSON.parse(localStorage.getItem('todos'));\r\n\tconst closestItem = target\r\n\t\t.closest('.todo')\r\n\t\t.querySelector('.todo__item-value').innerHTML;\r\n\r\n\tconst storageValues = todoStorage.map(todo => todo.split(':')[0]);\r\n\r\n\ttodoStorage.splice(storageValues.indexOf(closestItem), 1); \r\n\tlocalStorage.setItem('todos', JSON.stringify(todoStorage));\r\n};\r\n\r\nconst changeTodoStatusStorage = target => {\r\n\tconst todoStorage = JSON.parse(localStorage.getItem('todos')) || [];\r\n\tconst closestItem = target\r\n\t\t.closest('.todo')\r\n\t\t.querySelector('.todo__item-value').innerHTML;\r\n\r\n\tconst storageValues = todoStorage.map(todo => todo.split(':'));\r\n\r\n\tconst status = {\r\n\t\tno: 'yes',\r\n\t\tyes: 'no',\r\n\t};\r\n\tstorageValues.forEach(value => {\r\n\t\tif (value[0] === closestItem) {\r\n\t\t\tvalue[1] = status[value[1]];\r\n\t\t}\r\n\t});\r\n\r\n\tconst newStorageValues = storageValues.map(value => value.join(':'));\r\n\r\n\tlocalStorage.setItem('todos', JSON.stringify(newStorageValues));\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/storage.js?");

/***/ }),

/***/ "./src/components/theme.js":
/*!*********************************!*\
  !*** ./src/components/theme.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTheme\": () => (/* binding */ changeTheme)\n/* harmony export */ });\nconst changeThemeImage = target => {\r\n\tconst actualImage = target.getAttribute('src');\r\n\r\n\tif (actualImage === './images/icon-sun.svg') {\r\n\t\ttarget.setAttribute('src', './images/icon-moon.svg');\r\n\t} else {\r\n\t\ttarget.setAttribute('src', './images/icon-sun.svg');\r\n\t}\r\n};\r\n\r\nconst changeTheme = ({ target }) => {\r\n\tchangeThemeImage(target);\r\n\tlet themeData = document.body.dataset.theme;\r\n\r\n\tif (themeData === 'light') {\r\n\t\tthemeData = 'dark';\r\n\t\tlocalStorage.setItem('theme', 'dark');\r\n\t} else {\r\n\t\tthemeData = 'light';\r\n\t\tlocalStorage.setItem('theme', 'light');\r\n\t}\r\n\tdocument.body.dataset.theme = themeData;\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/theme.js?");

/***/ }),

/***/ "./src/components/todoItemsLeft.js":
/*!*****************************************!*\
  !*** ./src/components/todoItemsLeft.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemsLeft\": () => (/* binding */ itemsLeft)\n/* harmony export */ });\nconst itemsLeft = () => {\r\n\tconst todoContainer = document.querySelector('[data-todoContainer]');\r\n\tconst items = document.querySelector('[data-items]');\r\n\tconst children = [...todoContainer.children]\r\n\t\t.map(child => {\r\n\t\t\tif (child.style.display != 'none') return child;\r\n\t\t})\r\n\t\t.filter(child => child !== undefined).length;\r\n\r\n\titems.innerHTML = children - 1;\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/components/todoItemsLeft.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _components_addTodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/addTodoItem */ \"./src/components/addTodoItem.js\");\n/* harmony import */ var _components_filterTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filterTodos */ \"./src/components/filterTodos.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/theme */ \"./src/components/theme.js\");\n/* harmony import */ var _components_todoItemsLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todoItemsLeft */ \"./src/components/todoItemsLeft.js\");\n/* harmony import */ var _components_statusTodo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/statusTodo */ \"./src/components/statusTodo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(function () {\r\n\tconst todoContainer = document.querySelector('[data-todoContainer]');\r\n\tconst todoForm = document.querySelector('[data-todoForm]');\r\n\tconst todoInput = document.querySelector('[data-todoInput]');\r\n\tconst filterButtons = document.querySelectorAll('.other__filters-btn');\r\n\tconst clearCompleted = document.querySelector('[data-clearComplete]');\r\n\tconst theme = document.querySelector('[data-themeBtn]');\r\n\tconst todoBtnComplete = document.querySelector('.form__btn');\r\n\tconst todos = JSON.parse(localStorage.getItem('todos')) || [];\r\n\r\n\ttodos.forEach(todo => {\r\n\t\tconst [todoValue, todoStatus] = todo.split(':');\r\n\t\ttodoContainer.append((0,_components_addTodoItem__WEBPACK_IMPORTED_MODULE_1__.renderTodoItem)(todoValue, todoStatus));\r\n\t});\r\n\r\n\tdocument.body.dataset.theme = localStorage.getItem('theme') || 'dark';\r\n\r\n\ttheme.addEventListener('click', e => (0,_components_theme__WEBPACK_IMPORTED_MODULE_3__.changeTheme)(e));\r\n\r\n\tclearCompleted.addEventListener('click', _components_filterTodos__WEBPACK_IMPORTED_MODULE_2__.clearCompletedTodos);\r\n\r\n\tfilterButtons.forEach(button => {\r\n\t\tbutton.addEventListener('click', ({ target }) => (0,_components_filterTodos__WEBPACK_IMPORTED_MODULE_2__.filterTodoItems)(target));\r\n\t});\r\n\r\n\ttodoBtnComplete.addEventListener('click', ({ target }) => {\r\n\t\t(0,_components_statusTodo__WEBPACK_IMPORTED_MODULE_5__.toggleTodoBtnStatus)(target);\r\n\t});\r\n\r\n\ttodoForm.addEventListener('submit', e => {\r\n\t\te.preventDefault();\r\n\t\tconst {\r\n\t\t\tdataset: { pressed: status },\r\n\t\t} = todoBtnComplete;\r\n\t\t(0,_components_addTodoItem__WEBPACK_IMPORTED_MODULE_1__.addTodo)(todoInput.value, todoInput, status);\r\n\t});\r\n\t(0,_components_todoItemsLeft__WEBPACK_IMPORTED_MODULE_4__.itemsLeft)();\r\n})();\r\n\n\n//# sourceURL=webpack://src/./src/index.js?");

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