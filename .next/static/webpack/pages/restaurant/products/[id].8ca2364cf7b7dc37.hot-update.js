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

/***/ "./src/components/Card.tsx":
/*!*********************************!*\
  !*** ./src/components/Card.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Card.module.css */ \"./src/styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// \n// export default function Card({produto}: {produto:Product}) {\n//   return (\n//     <div className={styles.card}>\n//       <img src={produto.image} alt={produto.name} className={styles.img} />\n//       <div className={styles.info}>\n//         <h1 className={styles.nome}>{produto.name}</h1>\n//         <p className={styles.descricao}>{produto.ingredients}</p>\n//       </div>\n//       <h2 className={styles.preco}>R$ {produto.price}</h2>\n//     </div>\n//   );\n// }\nfunction Card(param) {\n    let { produto } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().nome),\n                        children: produto.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/components/Card.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().descricao),\n                        children: produto.descricao\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/components/Card.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().ingredientes),\n                        children: produto.ingredientes.join()\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/components/Card.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/components/Card.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().preco),\n                children: [\n                    \"R$ \",\n                    produto.preco\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/components/Card.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/listas-trainee/nextjs/src/components/Card.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFHOUMsR0FBRztBQUNILCtEQUErRDtBQUMvRCxhQUFhO0FBQ2Isb0NBQW9DO0FBQ3BDLDhFQUE4RTtBQUM5RSxzQ0FBc0M7QUFDdEMsMERBQTBEO0FBQzFELG9FQUFvRTtBQUNwRSxlQUFlO0FBQ2YsNkRBQTZEO0FBQzdELGFBQWE7QUFDYixPQUFPO0FBQ1AsSUFBSTtBQUVXLFNBQVNDLEtBQUssS0FBNEI7UUFBNUIsRUFBQ0MsT0FBTyxFQUFvQixHQUE1QjtJQUMzQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV0oscUVBQVc7OzBCQUV6Qiw4REFBQ0c7Z0JBQUlDLFdBQVdKLHFFQUFXOztrQ0FDekIsOERBQUNPO3dCQUFHSCxXQUFXSixxRUFBVztrQ0FBR0UsUUFBUU8sSUFBSTs7Ozs7O2tDQUN6Qyw4REFBQ0M7d0JBQUVOLFdBQVdKLDBFQUFnQjtrQ0FBR0UsUUFBUVMsU0FBUzs7Ozs7O2tDQUNsRCw4REFBQ0Q7d0JBQUVOLFdBQVdKLDZFQUFtQjtrQ0FBR0UsUUFBUVUsWUFBWSxDQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs7MEJBRS9ELDhEQUFDQztnQkFBR1YsV0FBV0osc0VBQVk7O29CQUFFO29CQUFJRSxRQUFRYSxLQUFLOzs7Ozs7Ozs7Ozs7O0FBR3BEO0tBWndCZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkLnRzeD9iNWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XG5cbi8vIFxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7cHJvZHV0b306IHtwcm9kdXRvOlByb2R1Y3R9KSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbi8vICAgICAgIDxpbWcgc3JjPXtwcm9kdXRvLmltYWdlfSBhbHQ9e3Byb2R1dG8ubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSAvPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbi8vICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm5vbWV9Pntwcm9kdXRvLm5hbWV9PC9oMT5cbi8vICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpY2FvfT57cHJvZHV0by5pbmdyZWRpZW50c308L3A+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5wcmVjb30+UiQge3Byb2R1dG8ucHJpY2V9PC9oMj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7cHJvZHV0b306IHtwcm9kdXRvOlByb2R1Y3R9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIHsvKiA8aW1nIHNyYz17cHJvZHV0by5pbWFnZX0gYWx0PXtwcm9kdXRvLm5hbWV9IGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubm9tZX0+e3Byb2R1dG8ubmFtZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmljYW99Pntwcm9kdXRvLmRlc2NyaWNhb308L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmluZ3JlZGllbnRlc30+e3Byb2R1dG8uaW5ncmVkaWVudGVzLmpvaW4oKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5wcmVjb30+UiQge3Byb2R1dG8ucHJlY299PC9oMj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiQ2FyZCIsInByb2R1dG8iLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiaW5mbyIsImgxIiwibm9tZSIsIm5hbWUiLCJwIiwiZGVzY3JpY2FvIiwiaW5ncmVkaWVudGVzIiwiam9pbiIsImgyIiwicHJlY28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Card.tsx\n"));

/***/ })

});