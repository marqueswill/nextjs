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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuPage; },\n/* harmony export */   showMenu: function() { return /* binding */ showMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n// export const getServerSideProps: GetServerSideProps<{\n//   restaurantMenu: Menu;\n// }> = async (context) => {\n//   const { restaurant_id } = context.query;\n//   const res = await fetch(``);\n//   const restaurantMenu = await res.json();\n//   return { props: { restaurantMenu } };\n// };\nfunction showMenu(restaurantMenu) {\n    let categories = Array.from(restaurantMenu.data.keys());\n    let menuDiv = [];\n    let categoryDiv = [];\n    for(let i = 0; i < categories.length; i++){\n        // categoryElements.push(<h2 key={i}>{categories[i].name}</h2>);\n        for (let product of restaurantMenu.data[categories[i]]){\n            categoryDiv.push(toCard(product));\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/restaurant/menu/index.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n// export default function MenuPage({\n//   restaurantMenu,\n// }: InferGetServerSidePropsType<typeof getServerSideProps>) {\n//   const router = useRouter();\n//   return (\n//     <div className=\"menu\">\n//       <h1>Cardápio</h1>\n//       showMenu()\n//     </div>\n//   );\n// }\nfunction MenuPage() {\n    let menuExemplo = {\n        id: 1,\n        data: new Map([\n            [\n                {\n                    id: 1,\n                    name: \"Beverages\"\n                },\n                [\n                    {\n                        id: 1,\n                        name: \"Coffee\",\n                        description: \"Hot brewed coffee\",\n                        price: 2.5,\n                        discount: 0\n                    },\n                    {\n                        id: 2,\n                        name: \"Tea\",\n                        description: \"Hot brewed tea\",\n                        price: 2.0,\n                        discount: 0\n                    }\n                ]\n            ],\n            [\n                {\n                    id: 2,\n                    name: \"Pastries\"\n                },\n                [\n                    {\n                        id: 3,\n                        name: \"Croissant\",\n                        description: \"Freshly baked croissant\",\n                        price: 3.5,\n                        discount: 0.1\n                    },\n                    {\n                        id: 4,\n                        name: \"Muffin\",\n                        description: \"Blueberry muffin\",\n                        price: 2.5,\n                        discount: 0\n                    }\n                ]\n            ]\n        ])\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"menu\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Card\\xe1pio\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/restaurant/menu/index.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            showMenu(menuExemplo)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4\\xba SEMESTRE/Struct/listas-trainee/lista-react-nextjs/src/pages/restaurant/menu/index.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_c = MenuPage;\nvar _c;\n$RefreshReg$(_c, \"MenuPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9tZW51L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQXFCQSx3REFBd0Q7QUFDeEQsMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1Qiw2Q0FBNkM7QUFDN0MsaUNBQWlDO0FBQ2pDLDZDQUE2QztBQUM3QywwQ0FBMEM7QUFDMUMsS0FBSztBQUVFLFNBQVNBLFNBQVNDLGNBQW9CO0lBQzNDLElBQUlDLGFBQWFDLE1BQU1DLElBQUksQ0FBQ0gsZUFBZUksSUFBSSxDQUFDQyxJQUFJO0lBQ3BELElBQUlDLFVBQVUsRUFBRTtJQUNoQixJQUFJQyxjQUFjLEVBQUU7SUFFcEIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlQLFdBQVdRLE1BQU0sRUFBRUQsSUFBSztRQUMxQyxnRUFBZ0U7UUFDaEUsS0FBSyxJQUFJRSxXQUFXVixlQUFlSSxJQUFJLENBQUNILFVBQVUsQ0FBQ08sRUFBRSxDQUFDLENBQUM7WUFDckRELFlBQVlJLElBQUksQ0FBQ0MsT0FBT0Y7UUFDMUI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRzs7Ozs7QUFJTDtBQUdBLHFDQUFxQztBQUNyQyxvQkFBb0I7QUFDcEIsK0RBQStEO0FBQy9ELGdDQUFnQztBQUVoQyxhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLE9BQU87QUFDUCxJQUFJO0FBRVcsU0FBU0M7SUFDdEIsSUFBSUMsY0FBb0I7UUFDdEJDLElBQUk7UUFDSlosTUFBTSxJQUFJYSxJQUF5QjtZQUNqQztnQkFDRTtvQkFBRUQsSUFBSTtvQkFBR0UsTUFBTTtnQkFBWTtnQkFDM0I7b0JBQ0U7d0JBQ0VGLElBQUk7d0JBQ0pFLE1BQU07d0JBQ05DLGFBQWE7d0JBQ2JDLE9BQU87d0JBQ1BDLFVBQVU7b0JBQ1o7b0JBQ0E7d0JBQ0VMLElBQUk7d0JBQ0pFLE1BQU07d0JBQ05DLGFBQWE7d0JBQ2JDLE9BQU87d0JBQ1BDLFVBQVU7b0JBQ1o7aUJBQ0Q7YUFDRjtZQUNEO2dCQUNFO29CQUFFTCxJQUFJO29CQUFHRSxNQUFNO2dCQUFXO2dCQUMxQjtvQkFDRTt3QkFDRUYsSUFBSTt3QkFDSkUsTUFBTTt3QkFDTkMsYUFBYTt3QkFDYkMsT0FBTzt3QkFDUEMsVUFBVTtvQkFDWjtvQkFDQTt3QkFDRUwsSUFBSTt3QkFDSkUsTUFBTTt3QkFDTkMsYUFBYTt3QkFDYkMsT0FBTzt3QkFDUEMsVUFBVTtvQkFDWjtpQkFDRDthQUNGO1NBQ0Y7SUFDSDtJQUVBLHFCQUNFLDhEQUFDUjtRQUFJUyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIeEIsU0FBU2dCOzs7Ozs7O0FBR2hCO0tBbkR3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Jlc3RhdXJhbnQvbWVudS9pbmRleC50c3g/ZDk1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxudHlwZSBQcm9kdWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIGRpc2NvdW50OiBudW1iZXI7XG59O1xuXG50eXBlIENhdGVnb3J5ID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59O1xuXG50eXBlIE1lbnUgPSB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGE6IE1hcDxDYXRlZ29yeSwgUHJvZHVjdFtdPjtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczx7XG4vLyAgIHJlc3RhdXJhbnRNZW51OiBNZW51O1xuLy8gfT4gPSBhc3luYyAoY29udGV4dCkgPT4ge1xuLy8gICBjb25zdCB7IHJlc3RhdXJhbnRfaWQgfSA9IGNvbnRleHQucXVlcnk7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBgKTtcbi8vICAgY29uc3QgcmVzdGF1cmFudE1lbnUgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICByZXR1cm4geyBwcm9wczogeyByZXN0YXVyYW50TWVudSB9IH07XG4vLyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd01lbnUocmVzdGF1cmFudE1lbnU6IE1lbnUpIHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBBcnJheS5mcm9tKHJlc3RhdXJhbnRNZW51LmRhdGEua2V5cygpKTtcbiAgbGV0IG1lbnVEaXYgPSBbXTtcbiAgbGV0IGNhdGVnb3J5RGl2ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gY2F0ZWdvcnlFbGVtZW50cy5wdXNoKDxoMiBrZXk9e2l9PntjYXRlZ29yaWVzW2ldLm5hbWV9PC9oMj4pO1xuICAgIGZvciAobGV0IHByb2R1Y3Qgb2YgcmVzdGF1cmFudE1lbnUuZGF0YVtjYXRlZ29yaWVzW2ldXSl7XG4gICAgICBjYXRlZ29yeURpdi5wdXNoKHRvQ2FyZChwcm9kdWN0KSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVQYWdlKHtcbi8vICAgcmVzdGF1cmFudE1lbnUsXG4vLyB9OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFNlcnZlclNpZGVQcm9wcz4pIHtcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbi8vICAgICAgIDxoMT5DYXJkw6FwaW88L2gxPlxuLy8gICAgICAgc2hvd01lbnUoKVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51UGFnZSgpIHtcbiAgbGV0IG1lbnVFeGVtcGxvOiBNZW51ID0ge1xuICAgIGlkOiAxLFxuICAgIGRhdGE6IG5ldyBNYXA8Q2F0ZWdvcnksIFByb2R1Y3RbXT4oW1xuICAgICAgW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIkJldmVyYWdlc1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5hbWU6IFwiQ29mZmVlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJIb3QgYnJld2VkIGNvZmZlZVwiLFxuICAgICAgICAgICAgcHJpY2U6IDIuNSxcbiAgICAgICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBuYW1lOiBcIlRlYVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSG90IGJyZXdlZCB0ZWFcIixcbiAgICAgICAgICAgIHByaWNlOiAyLjAsXG4gICAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBpZDogMiwgbmFtZTogXCJQYXN0cmllc1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JvaXNzYW50XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGcmVzaGx5IGJha2VkIGNyb2lzc2FudFwiLFxuICAgICAgICAgICAgcHJpY2U6IDMuNSxcbiAgICAgICAgICAgIGRpc2NvdW50OiAwLjEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIG5hbWU6IFwiTXVmZmluXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJCbHVlYmVycnkgbXVmZmluXCIsXG4gICAgICAgICAgICBwcmljZTogMi41LFxuICAgICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgXSksXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgIDxoMT5DYXJkw6FwaW88L2gxPlxuICAgICAge3Nob3dNZW51KG1lbnVFeGVtcGxvKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbInNob3dNZW51IiwicmVzdGF1cmFudE1lbnUiLCJjYXRlZ29yaWVzIiwiQXJyYXkiLCJmcm9tIiwiZGF0YSIsImtleXMiLCJtZW51RGl2IiwiY2F0ZWdvcnlEaXYiLCJpIiwibGVuZ3RoIiwicHJvZHVjdCIsInB1c2giLCJ0b0NhcmQiLCJkaXYiLCJNZW51UGFnZSIsIm1lbnVFeGVtcGxvIiwiaWQiLCJNYXAiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImRpc2NvdW50IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/restaurant/menu/index.tsx\n"));

/***/ })

});