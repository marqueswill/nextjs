"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuPage; },\n/* harmony export */   showMenu: function() { return /* binding */ showMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n// export const getServerSideProps: GetServerSideProps<{\n//   restaurantMenu: Menu;\n// }> = async (context) => {\n//   const { restaurant_id } = context.query;\n//   const res = await fetch(``);\n//   const restaurantMenu = await res.json();\n//   return { props: { restaurantMenu } };\n// };\nfunction showMenu(restaurantMenu) {\n    let categories = Array.from(restaurantMenu.data.keys());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: category.name\n            }, index, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n// export default function MenuPage({\n//   restaurantMenu,\n// }: InferGetServerSidePropsType<typeof getServerSideProps>) {\n//   const router = useRouter();\n//   return (\n//     <div className=\"menu\">\n//       <h1>Cardápio</h1>\n//       showMenu()\n//     </div>\n//   );\n// }\nfunction MenuPage() {\n    let menuExemplo = {\n        id: 1,\n        data: new Map([\n            [\n                {\n                    id: 1,\n                    name: \"Beverages\"\n                },\n                [\n                    {\n                        id: 1,\n                        name: \"Coffee\",\n                        description: \"Hot brewed coffee\",\n                        price: 2.5,\n                        discount: 0\n                    },\n                    {\n                        id: 2,\n                        name: \"Tea\",\n                        description: \"Hot brewed tea\",\n                        price: 2.0,\n                        discount: 0\n                    }\n                ]\n            ],\n            [\n                {\n                    id: 2,\n                    name: \"Pastries\"\n                },\n                [\n                    {\n                        id: 3,\n                        name: \"Croissant\",\n                        description: \"Freshly baked croissant\",\n                        price: 3.5,\n                        discount: 0.1\n                    },\n                    {\n                        id: 4,\n                        name: \"Muffin\",\n                        description: \"Blueberry muffin\",\n                        price: 2.5,\n                        discount: 0\n                    }\n                ]\n            ]\n        ])\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"menu\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Card\\xe1pio\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/index.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            showMenu(menuExemplo)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/index.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_c = MenuPage;\nvar _c;\n$RefreshReg$(_c, \"MenuPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBcUJBLHdEQUF3RDtBQUN4RCwwQkFBMEI7QUFDMUIsNEJBQTRCO0FBQzVCLDZDQUE2QztBQUM3QyxpQ0FBaUM7QUFDakMsNkNBQTZDO0FBQzdDLDBDQUEwQztBQUMxQyxLQUFLO0FBRUUsU0FBU0EsU0FBU0MsY0FBb0I7SUFDM0MsSUFBSUMsYUFBYUMsTUFBTUMsSUFBSSxDQUFDSCxlQUFlSSxJQUFJLENBQUNDLElBQUk7SUFFcEQscUJBQ0UsOERBQUNDO2tCQUNFTCxXQUFXTSxHQUFHLENBQUMsQ0FBQ0MsVUFBVUMsc0JBQ3pCLDhEQUFDQzswQkFBZ0JGLFNBQVNHLElBQUk7ZUFBckJGOzs7Ozs7Ozs7O0FBSWpCO0FBRUEscUNBQXFDO0FBQ3JDLG9CQUFvQjtBQUNwQiwrREFBK0Q7QUFDL0QsZ0NBQWdDO0FBRWhDLGFBQWE7QUFDYiw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsT0FBTztBQUNQLElBQUk7QUFFVyxTQUFTRztJQUN0QixJQUFJQyxjQUFvQjtRQUN0QkMsSUFBSTtRQUNKVixNQUFNLElBQUlXLElBQXlCO1lBQ2pDO2dCQUNFO29CQUFFRCxJQUFJO29CQUFHSCxNQUFNO2dCQUFZO2dCQUMzQjtvQkFDRTt3QkFDRUcsSUFBSTt3QkFDSkgsTUFBTTt3QkFDTkssYUFBYTt3QkFDYkMsT0FBTzt3QkFDUEMsVUFBVTtvQkFDWjtvQkFDQTt3QkFDRUosSUFBSTt3QkFDSkgsTUFBTTt3QkFDTkssYUFBYTt3QkFDYkMsT0FBTzt3QkFDUEMsVUFBVTtvQkFDWjtpQkFDRDthQUNGO1lBQ0Q7Z0JBQ0U7b0JBQUVKLElBQUk7b0JBQUdILE1BQU07Z0JBQVc7Z0JBQzFCO29CQUNFO3dCQUNFRyxJQUFJO3dCQUNKSCxNQUFNO3dCQUNOSyxhQUFhO3dCQUNiQyxPQUFPO3dCQUNQQyxVQUFVO29CQUNaO29CQUNBO3dCQUNFSixJQUFJO3dCQUNKSCxNQUFNO3dCQUNOSyxhQUFhO3dCQUNiQyxPQUFPO3dCQUNQQyxVQUFVO29CQUNaO2lCQUNEO2FBQ0Y7U0FDRjtJQUNIO0lBRUEscUJBQ0UsOERBQUNaO1FBQUlhLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hyQixTQUFTYzs7Ozs7OztBQUdoQjtLQW5Ed0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxudHlwZSBQcm9kdWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIGRpc2NvdW50OiBudW1iZXI7XG59O1xuXG50eXBlIENhdGVnb3J5ID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59O1xuXG50eXBlIE1lbnUgPSB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGE6IE1hcDxDYXRlZ29yeSwgUHJvZHVjdFtdPjtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczx7XG4vLyAgIHJlc3RhdXJhbnRNZW51OiBNZW51O1xuLy8gfT4gPSBhc3luYyAoY29udGV4dCkgPT4ge1xuLy8gICBjb25zdCB7IHJlc3RhdXJhbnRfaWQgfSA9IGNvbnRleHQucXVlcnk7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBgKTtcbi8vICAgY29uc3QgcmVzdGF1cmFudE1lbnUgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICByZXR1cm4geyBwcm9wczogeyByZXN0YXVyYW50TWVudSB9IH07XG4vLyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd01lbnUocmVzdGF1cmFudE1lbnU6IE1lbnUpIHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBBcnJheS5mcm9tKHJlc3RhdXJhbnRNZW51LmRhdGEua2V5cygpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgICAgICA8aDIga2V5PXtpbmRleH0+e2NhdGVnb3J5Lm5hbWV9PC9oMj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51UGFnZSh7XG4vLyAgIHJlc3RhdXJhbnRNZW51LFxuLy8gfTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSB7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4vLyAgICAgICA8aDE+Q2FyZMOhcGlvPC9oMT5cbi8vICAgICAgIHNob3dNZW51KClcbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudVBhZ2UoKSB7XG4gIGxldCBtZW51RXhlbXBsbzogTWVudSA9IHtcbiAgICBpZDogMSxcbiAgICBkYXRhOiBuZXcgTWFwPENhdGVnb3J5LCBQcm9kdWN0W10+KFtcbiAgICAgIFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJCZXZlcmFnZXNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiBcIkNvZmZlZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSG90IGJyZXdlZCBjb2ZmZWVcIixcbiAgICAgICAgICAgIHByaWNlOiAyLjUsXG4gICAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgbmFtZTogXCJUZWFcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkhvdCBicmV3ZWQgdGVhXCIsXG4gICAgICAgICAgICBwcmljZTogMi4wLFxuICAgICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgaWQ6IDIsIG5hbWU6IFwiUGFzdHJpZXNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBuYW1lOiBcIkNyb2lzc2FudFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRnJlc2hseSBiYWtlZCBjcm9pc3NhbnRcIixcbiAgICAgICAgICAgIHByaWNlOiAzLjUsXG4gICAgICAgICAgICBkaXNjb3VudDogMC4xLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBuYW1lOiBcIk11ZmZpblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQmx1ZWJlcnJ5IG11ZmZpblwiLFxuICAgICAgICAgICAgcHJpY2U6IDIuNSxcbiAgICAgICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgIF0pLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICA8aDE+Q2FyZMOhcGlvPC9oMT5cbiAgICAgIHtzaG93TWVudShtZW51RXhlbXBsbyl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJzaG93TWVudSIsInJlc3RhdXJhbnRNZW51IiwiY2F0ZWdvcmllcyIsIkFycmF5IiwiZnJvbSIsImRhdGEiLCJrZXlzIiwiZGl2IiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsImgyIiwibmFtZSIsIk1lbnVQYWdlIiwibWVudUV4ZW1wbG8iLCJpZCIsIk1hcCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJkaXNjb3VudCIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});