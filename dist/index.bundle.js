/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfirst_webpack_trial"] = self["webpackChunkfirst_webpack_trial"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/*import _ from 'lodash';\r\nimport './style.css';\r\n*/\r\n\r\nconst ToD = document.querySelector('.todo');\r\nconst tasks = [\r\n  {\r\n    description: 'Wash dishes',\r\n    completed: true,\r\n    index: 1,\r\n  },\r\n  {\r\n    description: 'Double-tap to edit',\r\n    completed: false,\r\n    index: 5,\r\n  },\r\n  {\r\n    description: 'Build ToDo list structure',\r\n    completed: true,\r\n    index: 2,\r\n  },\r\n  {\r\n    description: 'Manage all your list in one place',\r\n    completed: false,\r\n    index: 3,\r\n  },\r\n    {\r\n    description: 'Resync to cleasr out the old',\r\n    completed: false,\r\n    index: 4,\r\n  },\r\n  \r\n  {\r\n    description: 'Visit family',\r\n    completed: true,\r\n    index: 4,\r\n  },\r\n  {\r\n    description: 'Complete ToDo List project',\r\n    completed: false,\r\n    index: 8,\r\n  },\r\n  \r\n]\r\n\r\nconst todoTitle = document.createElement('ii');\r\nconst todoInstr = document.createElement('ii');\r\ntodoTitle.textContent = 'Today\\'s To Do';\r\ntodoInstr.textContent = 'Add to your list...';\r\ntodoTitle.classList.add('todoli');\r\ntodoInstr.classList.add('todoli')\r\ntodoInstr.style.fontStyle = 'italic'\r\nToD.append(todoTitle,todoInstr);\r\n\r\nfunction populateListItem() {\r\n  tasks.sort( function (a, b) {return a.index - b.index})\r\n  for (let i = 0; i < tasks.length; i += 1) {\r\n\r\n      const itemdiv = document.createElement('div');\r\n      const item = document.createElement('ii');\r\n      const checkbox = document.createElement('input');\r\n      item.textContent = tasks[i].description;\r\n      itemdiv.classList.add('todoli')\r\n      checkbox.type = 'checkbox';\r\n      checkbox.checked = tasks[i].completed;\r\n      itemdiv.append(checkbox,item)\r\n      checkbox.value = tasks[i].completed;\r\n      ToD.append(itemdiv)\r\n    }\r\n\r\n  }\r\n\r\nwindow.addEventListener('load', populateListItem);\n\n//# sourceURL=webpack://first-webpack-trial/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);