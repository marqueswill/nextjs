"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/restaurant/menu",{

/***/ "./src/pages/restaurant/menu/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/restaurant/menu/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ MenuPage; },\n/* harmony export */   showMenu: function() { return /* binding */ showMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __N_SSP = true;\nfunction showMenu(restaurantMenu) {\n    let categories = Array.from(restaurantMenu.data.keys());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: category.name\n            }, index, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/restaurant/menu/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/restaurant/menu/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n// export default function MenuPage({\n//   restaurantMenu,\n// }: InferGetServerSidePropsType<typeof getServerSideProps>) {\n//   const router = useRouter();\n//   return (\n//     <div className=\"menu\">\n//       <h1>Cardápio</h1>\n//       showMenu()\n//     </div>\n//   );\n// }\nfunction MenuPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"menu\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Card\\xe1pio\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/restaurant/menu/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            \"showMenu()\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/restaurant/menu/index.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_c = MenuPage;\nvar _c;\n$RefreshReg$(_c, \"MenuPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9tZW51L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBOEJPLFNBQVNBLFNBQVNDLGNBQW1CO0lBQzFDLElBQUlDLGFBQWFDLE1BQU1DLElBQUksQ0FBQ0gsZUFBZUksSUFBSSxDQUFDQyxJQUFJO0lBRXBELHFCQUNFLDhEQUFDQztrQkFDRUwsV0FBV00sR0FBRyxDQUFDLENBQUNDLFVBQVVDLHNCQUN6Qiw4REFBQ0M7MEJBQWdCRixTQUFTRyxJQUFJO2VBQXJCRjs7Ozs7Ozs7OztBQUlqQjtBQUdBLHFDQUFxQztBQUNyQyxvQkFBb0I7QUFDcEIsK0RBQStEO0FBQy9ELGdDQUFnQztBQUVoQyxhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLE9BQU87QUFDUCxJQUFJO0FBRVcsU0FBU0c7SUFDckIscUJBQ0MsOERBQUNOO1FBQUlPLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7O1lBQWE7Ozs7Ozs7QUFJdkI7S0FQd0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXN0YXVyYW50L21lbnUvaW5kZXgudHN4P2Q5NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbnR5cGUgUHJvZHVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBkaXNjb3VudDogbnVtYmVyO1xufTtcblxudHlwZSBDYXRlZ29yeSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxudHlwZSBNZW51ID0ge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBNYXA8Q2F0ZWdvcnksIFByb2R1Y3RbXT47XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8e1xuICByZXN0YXVyYW50TWVudTogTWVudTtcbn0+ID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyByZXN0YXVyYW50X2lkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgYCk7XG4gIGNvbnN0IHJlc3RhdXJhbnRNZW51ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcmVzdGF1cmFudE1lbnUgfSB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNZW51KHJlc3RhdXJhbnRNZW51Ok1lbnUpIHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBBcnJheS5mcm9tKHJlc3RhdXJhbnRNZW51LmRhdGEua2V5cygpKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgIDxoMiBrZXk9e2luZGV4fT57Y2F0ZWdvcnkubmFtZX08L2gyPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudVBhZ2Uoe1xuLy8gICByZXN0YXVyYW50TWVudSxcbi8vIH06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuLy8gICAgICAgPGgxPkNhcmTDoXBpbzwvaDE+XG4vLyAgICAgICBzaG93TWVudSgpXG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVQYWdlKCl7XG4gICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgPGgxPkNhcmTDoXBpbzwvaDE+XG4gICAgICBzaG93TWVudSgpXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic2hvd01lbnUiLCJyZXN0YXVyYW50TWVudSIsImNhdGVnb3JpZXMiLCJBcnJheSIsImZyb20iLCJkYXRhIiwia2V5cyIsImRpdiIsIm1hcCIsImNhdGVnb3J5IiwiaW5kZXgiLCJoMiIsIm5hbWUiLCJNZW51UGFnZSIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/restaurant/menu/index.tsx\n"));

/***/ })

});