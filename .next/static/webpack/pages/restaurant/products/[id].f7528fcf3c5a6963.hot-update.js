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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ CategoryPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\n// async function getCategoryProducts(categoria: Category):Promise<Product[]> {\n//   const res = await fetch(\n//     `https://raw.githubusercontent.com/EdPPF/dados-listaNext/main/produtos/${categoria.id}.json`\n//   );\n//   if (!res.ok) {\n//     throw new Error(\"Failed to fetch data\");\n//   }\n//   const produtos:Product[] = await res.json();\n//   return produtos\n// }\nfunction CategoryPage(param) {\n    let { produtos } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"menu\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: router.query.id\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/pages/restaurant/products/[id].tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            produtos.map((produto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    produto: produto\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/pages/restaurant/products/[id].tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/pages/restaurant/products/[id].tsx\",\n        lineNumber: 37,\n        columnNumber: 7\n    }, this);\n}\n_s(CategoryPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CategoryPage;\nvar _c;\n$RefreshReg$(_c, \"CategoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9wcm9kdWN0cy9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUM7QUFHRzs7QUFjeEMsK0VBQStFO0FBQy9FLDZCQUE2QjtBQUM3QixtR0FBbUc7QUFDbkcsT0FBTztBQUVQLG1CQUFtQjtBQUNuQiwrQ0FBK0M7QUFDL0MsTUFBTTtBQUVOLGlEQUFpRDtBQUNqRCxvQkFBb0I7QUFDcEIsSUFBSTtBQUVXLFNBQVNFLGFBQWEsS0FFb0I7UUFGcEIsRUFDbkNDLFFBQVEsRUFDK0MsR0FGcEI7O0lBR25DLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNDOzBCQUFJSCxPQUFPSSxLQUFLLENBQUNDLEVBQUU7Ozs7OztZQUNuQk4sU0FBU08sR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDWCx3REFBSUE7b0JBQUNXLFNBQVNBOzs7Ozs7Ozs7Ozs7QUFJekI7R0Fkd0JUOztRQUdQRCxrREFBU0E7OztLQUhGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9wcm9kdWN0cy9baWRdLnRzeD9hYzExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPHtcbiAgcHJvZHV0b3M6YW55O1xufT4gPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9FZFBQRi9kYWRvcy1saXN0YU5leHQvYmxvYi9tYWluL3Byb2R1dG9zLyR7aWR9Lmpzb25gXG4gICk7XG4gIGNvbnNvbGUubG9nKHJlcylcbiAgY29uc3QgcHJvZHV0b3MgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4geyBwcm9wczogeyBwcm9kdXRvcyB9IH07XG59O1xuXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yeVByb2R1Y3RzKGNhdGVnb3JpYTogQ2F0ZWdvcnkpOlByb21pc2U8UHJvZHVjdFtdPiB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuLy8gICAgIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRWRQUEYvZGFkb3MtbGlzdGFOZXh0L21haW4vcHJvZHV0b3MvJHtjYXRlZ29yaWEuaWR9Lmpzb25gXG4vLyAgICk7XG5cbi8vICAgaWYgKCFyZXMub2spIHtcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YVwiKTtcbi8vICAgfVxuXG4vLyAgIGNvbnN0IHByb2R1dG9zOlByb2R1Y3RbXSA9IGF3YWl0IHJlcy5qc29uKCk7XG4vLyAgIHJldHVybiBwcm9kdXRvc1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeVBhZ2Uoe1xuICBwcm9kdXRvcyxcbn06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIFxuICAgICAgICA8aDE+e3JvdXRlci5xdWVyeS5pZH08L2gxPlxuICAgICAgICB7cHJvZHV0b3MubWFwKChwcm9kdXRvOiBQcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPENhcmQgcHJvZHV0bz17cHJvZHV0b30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwidXNlUm91dGVyIiwiQ2F0ZWdvcnlQYWdlIiwicHJvZHV0b3MiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInF1ZXJ5IiwiaWQiLCJtYXAiLCJwcm9kdXRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/restaurant/products/[id].tsx\n"));

/***/ })

});