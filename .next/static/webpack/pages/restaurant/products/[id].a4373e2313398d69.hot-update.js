"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/restaurant/products/[id]",{

/***/ "./src/pages/restaurant/products/[id].tsx":
/*!************************************************!*\
  !*** ./src/pages/restaurant/products/[id].tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ CategoryPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction CategoryPage(param) {\n    let { produtos } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Categoria: \",\n                    router.query.id\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/pages/restaurant/products/[id].tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            produtos.map((produto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    produto: produto\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/pages/restaurant/products/[id].tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/pages/restaurant/products/[id].tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(CategoryPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CategoryPage;\nvar _c;\n$RefreshReg$(_c, \"CategoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9wcm9kdWN0cy9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUM7QUFJRzs7QUFhekIsU0FBU0UsYUFBYSxLQUVvQjtRQUZwQixFQUNuQ0MsUUFBUSxFQUMrQyxHQUZwQjs7SUFHbkMsTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNDOztvQkFBRztvQkFBWUYsT0FBT0csS0FBSyxDQUFDQyxFQUFFOzs7Ozs7O1lBQzlCTCxTQUFTTSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNWLHdEQUFJQTtvQkFBQ1UsU0FBU0E7Ozs7Ozs7Ozs7OztBQUl2QjtHQWJ3QlI7O1FBR1BELGtEQUFTQTs7O0tBSEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXN0YXVyYW50L3Byb2R1Y3RzL1tpZF0udHN4P2FjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgeyBDYXRlZ29yeSwgUHJvZHVjdCB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPHtcbiAgcHJvZHV0b3M6IFByb2R1Y3Q7XG59PiA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRWRQUEYvZGFkb3MtbGlzdGFOZXh0L21haW4vcHJ1ZHRvcy8xLmpzb25gXG4gICk7XG4gIGNvbnN0IHByb2R1dG9zID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHsgcHJvcHM6ICBwcm9kdXRvcyAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5UGFnZSh7XG4gIHByb2R1dG9zLFxufTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DYXRlZ29yaWE6IHtyb3V0ZXIucXVlcnkuaWR9PC9oMT5cbiAgICAgIHtwcm9kdXRvcy5tYXAoKHByb2R1dG86IFByb2R1Y3QpID0+IChcbiAgICAgICAgPENhcmQgcHJvZHV0bz17cHJvZHV0b30gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJ1c2VSb3V0ZXIiLCJDYXRlZ29yeVBhZ2UiLCJwcm9kdXRvcyIsInJvdXRlciIsImRpdiIsImgxIiwicXVlcnkiLCJpZCIsIm1hcCIsInByb2R1dG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/restaurant/products/[id].tsx\n"));

/***/ })

});