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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuPage; },\n/* harmony export */   showMenu: function() { return /* binding */ showMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n// export const getServerSideProps: GetServerSideProps<{\n//   restaurantMenu: Menu;\n// }> = async (context) => {\n//   const { restaurant_id } = context.query;\n//   const res = await fetch(``);\n//   const restaurantMenu = await res.json();\n//   return { props: { restaurantMenu } };\n// };\nfunction showMenu(restaurantMenu) {\n    let categories = Array.from(restaurantMenu.data.keys());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: category.name\n            }, index, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/restaurant/menu/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/restaurant/menu/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n// export default function MenuPage({\n//   restaurantMenu,\n// }: InferGetServerSidePropsType<typeof getServerSideProps>) {\n//   const router = useRouter();\n//   return (\n//     <div className=\"menu\">\n//       <h1>Cardápio</h1>\n//       showMenu()\n//     </div>\n//   );\n// }\nfunction MenuPage() {\n    const menuExemplo = {\n        id: 1,\n        data: new Map([\n            [\n                {\n                    id: 1,\n                    name: \"Beverages\"\n                },\n                [\n                    {\n                        id: 1,\n                        name: \"Coffee\",\n                        description: \"Hot brewed coffee\",\n                        price: 2.5,\n                        discount: 0\n                    },\n                    {\n                        id: 2,\n                        name: \"Tea\",\n                        description: \"Hot brewed tea\",\n                        price: 2.0,\n                        discount: 0\n                    }\n                ]\n            ],\n            [\n                {\n                    id: 2,\n                    name: \"Pastries\"\n                },\n                [\n                    {\n                        id: 3,\n                        name: \"Croissant\",\n                        description: \"Freshly baked croissant\",\n                        price: 3.5,\n                        discount: 0.1\n                    },\n                    {\n                        id: 4,\n                        name: \"Muffin\",\n                        description: \"Blueberry muffin\",\n                        price: 2.5,\n                        discount: 0\n                    }\n                ]\n            ]\n        ])\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"menu\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Card\\xe1pio\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/restaurant/menu/index.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            showMenu(menuExemplo)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/restaurant/menu/index.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, this);\n}\n_c = MenuPage;\nvar _c;\n$RefreshReg$(_c, \"MenuPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9tZW51L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQXFCQSx3REFBd0Q7QUFDeEQsMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1Qiw2Q0FBNkM7QUFDN0MsaUNBQWlDO0FBQ2pDLDZDQUE2QztBQUM3QywwQ0FBMEM7QUFDMUMsS0FBSztBQUVFLFNBQVNBLFNBQVNDLGNBQW9CO0lBQzNDLElBQUlDLGFBQWFDLE1BQU1DLElBQUksQ0FBQ0gsZUFBZUksSUFBSSxDQUFDQyxJQUFJO0lBRXBELHFCQUNFLDhEQUFDQztrQkFDRUwsV0FBV00sR0FBRyxDQUFDLENBQUNDLFVBQVVDLHNCQUN6Qiw4REFBQ0M7MEJBQWdCRixTQUFTRyxJQUFJO2VBQXJCRjs7Ozs7Ozs7OztBQUlqQjtBQUdBLHFDQUFxQztBQUNyQyxvQkFBb0I7QUFDcEIsK0RBQStEO0FBQy9ELGdDQUFnQztBQUVoQyxhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLE9BQU87QUFDUCxJQUFJO0FBRVcsU0FBU0c7SUFDdEIsTUFBTUMsY0FBb0I7UUFDeEJDLElBQUk7UUFDSlYsTUFBTSxJQUFJVyxJQUF5QjtZQUNqQztnQkFDRTtvQkFBRUQsSUFBSTtvQkFBR0gsTUFBTTtnQkFBWTtnQkFDM0I7b0JBQ0U7d0JBQ0VHLElBQUk7d0JBQ0pILE1BQU07d0JBQ05LLGFBQWE7d0JBQ2JDLE9BQU87d0JBQ1BDLFVBQVU7b0JBQ1o7b0JBQ0E7d0JBQ0VKLElBQUk7d0JBQ0pILE1BQU07d0JBQ05LLGFBQWE7d0JBQ2JDLE9BQU87d0JBQ1BDLFVBQVU7b0JBQ1o7aUJBQ0Q7YUFDRjtZQUNEO2dCQUNFO29CQUFFSixJQUFJO29CQUFHSCxNQUFNO2dCQUFXO2dCQUMxQjtvQkFDRTt3QkFDRUcsSUFBSTt3QkFDSkgsTUFBTTt3QkFDTkssYUFBYTt3QkFDYkMsT0FBTzt3QkFDUEMsVUFBVTtvQkFDWjtvQkFDQTt3QkFDRUosSUFBSTt3QkFDSkgsTUFBTTt3QkFDTkssYUFBYTt3QkFDYkMsT0FBTzt3QkFDUEMsVUFBVTtvQkFDWjtpQkFDRDthQUNGO1NBQ0Y7SUFDSDtJQUVBLHFCQUNFLDhEQUFDWjtRQUFJYSxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIckIsU0FBU2M7Ozs7Ozs7QUFHaEI7S0FuRHdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9tZW51L2luZGV4LnRzeD9kOTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG50eXBlIFByb2R1Y3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgZGlzY291bnQ6IG51bWJlcjtcbn07XG5cbnR5cGUgQ2F0ZWdvcnkgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbnR5cGUgTWVudSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgZGF0YTogTWFwPENhdGVnb3J5LCBQcm9kdWN0W10+O1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPHtcbi8vICAgcmVzdGF1cmFudE1lbnU6IE1lbnU7XG4vLyB9PiA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgIGNvbnN0IHsgcmVzdGF1cmFudF9pZCB9ID0gY29udGV4dC5xdWVyeTtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGApO1xuLy8gICBjb25zdCByZXN0YXVyYW50TWVudSA9IGF3YWl0IHJlcy5qc29uKCk7XG4vLyAgIHJldHVybiB7IHByb3BzOiB7IHJlc3RhdXJhbnRNZW51IH0gfTtcbi8vIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVudShyZXN0YXVyYW50TWVudTogTWVudSkge1xuICBsZXQgY2F0ZWdvcmllcyA9IEFycmF5LmZyb20ocmVzdGF1cmFudE1lbnUuZGF0YS5rZXlzKCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgIDxoMiBrZXk9e2luZGV4fT57Y2F0ZWdvcnkubmFtZX08L2gyPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudVBhZ2Uoe1xuLy8gICByZXN0YXVyYW50TWVudSxcbi8vIH06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuLy8gICAgICAgPGgxPkNhcmTDoXBpbzwvaDE+XG4vLyAgICAgICBzaG93TWVudSgpXG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVQYWdlKCkge1xuICBjb25zdCBtZW51RXhlbXBsbzogTWVudSA9IHtcbiAgICBpZDogMSxcbiAgICBkYXRhOiBuZXcgTWFwPENhdGVnb3J5LCBQcm9kdWN0W10+KFtcbiAgICAgIFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJCZXZlcmFnZXNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiBcIkNvZmZlZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSG90IGJyZXdlZCBjb2ZmZWVcIixcbiAgICAgICAgICAgIHByaWNlOiAyLjUsXG4gICAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgbmFtZTogXCJUZWFcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkhvdCBicmV3ZWQgdGVhXCIsXG4gICAgICAgICAgICBwcmljZTogMi4wLFxuICAgICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgaWQ6IDIsIG5hbWU6IFwiUGFzdHJpZXNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBuYW1lOiBcIkNyb2lzc2FudFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRnJlc2hseSBiYWtlZCBjcm9pc3NhbnRcIixcbiAgICAgICAgICAgIHByaWNlOiAzLjUsXG4gICAgICAgICAgICBkaXNjb3VudDogMC4xLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBuYW1lOiBcIk11ZmZpblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQmx1ZWJlcnJ5IG11ZmZpblwiLFxuICAgICAgICAgICAgcHJpY2U6IDIuNSxcbiAgICAgICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgIF0pLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICA8aDE+Q2FyZMOhcGlvPC9oMT5cbiAgICAgIHtzaG93TWVudShtZW51RXhlbXBsbyl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJzaG93TWVudSIsInJlc3RhdXJhbnRNZW51IiwiY2F0ZWdvcmllcyIsIkFycmF5IiwiZnJvbSIsImRhdGEiLCJrZXlzIiwiZGl2IiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsImgyIiwibmFtZSIsIk1lbnVQYWdlIiwibWVudUV4ZW1wbG8iLCJpZCIsIk1hcCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJkaXNjb3VudCIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/restaurant/menu/index.tsx\n"));

/***/ })

});