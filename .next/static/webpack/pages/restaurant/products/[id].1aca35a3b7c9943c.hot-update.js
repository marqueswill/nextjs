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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// import Card from \"@/components/Card\";\n// import ShowCategory from \"@/components/ShowCategory\";\n// import { Category, Product } from \"@/types/types\";\n// import { GetServerSideProps, InferGetServerSidePropsType } from \"next\";\n// import Link from \"next/link\";\n// import { useRouter } from \"next/router\";\n// export const getServerSideProps: GetServerSideProps<{\n//   produtos: [];\n// }> = async (context) => {\n//   const { id } = context.query;\n//   const res = await fetch(\n//     `https://raw.githubusercontent.com/EdPPF/dados-listaNext/blob/main/produtos/${id}.json`\n//   );\n//   console.log(res)\n//   const produtos = await res.json();\n//   return { props: { produtos } };\n// };\n// // async function getCategoryProducts(categoria: Category):Promise<Product[]> {\n// //   const res = await fetch(\n// //     `https://raw.githubusercontent.com/EdPPF/dados-listaNext/main/produtos/${categoria.id}.json`\n// //   );\n// //   if (!res.ok) {\n// //     throw new Error(\"Failed to fetch data\");\n// //   }\n// //   const produtos:Product[] = await res.json();\n// //   return produtos\n// // }\n// export default function CategoryPage({\n//   produtos,\n// }: InferGetServerSidePropsType<typeof getServerSideProps>) {\n//   const router = useRouter();\n//   return (\n//     <>\n//       <div className=\"menu\">\n//         <h1>{router.query.id}</h1>\n//         {produtos.map((produto: Product) => (\n//           <Card produto={produto} />\n//         ))}\n//       </div>\n//     </>\n//   );\n// }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9wcm9kdWN0cy9baWRdLnRzeCIsIm1hcHBpbmdzIjoiQUFBQSx3Q0FBd0M7QUFDeEMsd0RBQXdEO0FBQ3hELHFEQUFxRDtBQUNyRCwwRUFBMEU7QUFDMUUsZ0NBQWdDO0FBQ2hDLDJDQUEyQztBQUUzQyx3REFBd0Q7QUFDeEQsa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QixrQ0FBa0M7QUFDbEMsNkJBQTZCO0FBQzdCLDhGQUE4RjtBQUM5RixPQUFPO0FBQ1AscUJBQXFCO0FBQ3JCLHVDQUF1QztBQUN2QyxvQ0FBb0M7QUFDcEMsS0FBSztBQUVMLGtGQUFrRjtBQUNsRixnQ0FBZ0M7QUFDaEMsc0dBQXNHO0FBQ3RHLFVBQVU7QUFFVixzQkFBc0I7QUFDdEIsa0RBQWtEO0FBQ2xELFNBQVM7QUFFVCxvREFBb0Q7QUFDcEQsdUJBQXVCO0FBQ3ZCLE9BQU87QUFFUCx5Q0FBeUM7QUFDekMsY0FBYztBQUNkLCtEQUErRDtBQUMvRCxnQ0FBZ0M7QUFFaEMsYUFBYTtBQUNiLFNBQVM7QUFDVCwrQkFBK0I7QUFFL0IscUNBQXFDO0FBQ3JDLGdEQUFnRDtBQUNoRCx1Q0FBdUM7QUFDdkMsY0FBYztBQUNkLGVBQWU7QUFDZixVQUFVO0FBQ1YsT0FBTztBQUNQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Jlc3RhdXJhbnQvcHJvZHVjdHMvW2lkXS50c3g/YWMxMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0NhcmRcIjtcbi8vIGltcG9ydCBTaG93Q2F0ZWdvcnkgZnJvbSBcIkAvY29tcG9uZW50cy9TaG93Q2F0ZWdvcnlcIjtcbi8vIGltcG9ydCB7IENhdGVnb3J5LCBQcm9kdWN0IH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcbi8vIGltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlIH0gZnJvbSBcIm5leHRcIjtcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8e1xuLy8gICBwcm9kdXRvczogW107XG4vLyB9PiA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuLy8gICAgIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRWRQUEYvZGFkb3MtbGlzdGFOZXh0L2Jsb2IvbWFpbi9wcm9kdXRvcy8ke2lkfS5qc29uYFxuLy8gICApO1xuLy8gICBjb25zb2xlLmxvZyhyZXMpXG4vLyAgIGNvbnN0IHByb2R1dG9zID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHsgcHJvcHM6IHsgcHJvZHV0b3MgfSB9O1xuLy8gfTtcblxuLy8gLy8gYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcnlQcm9kdWN0cyhjYXRlZ29yaWE6IENhdGVnb3J5KTpQcm9taXNlPFByb2R1Y3RbXT4ge1xuLy8gLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbi8vIC8vICAgICBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VkUFBGL2RhZG9zLWxpc3RhTmV4dC9tYWluL3Byb2R1dG9zLyR7Y2F0ZWdvcmlhLmlkfS5qc29uYFxuLy8gLy8gICApO1xuXG4vLyAvLyAgIGlmICghcmVzLm9rKSB7XG4vLyAvLyAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIik7XG4vLyAvLyAgIH1cblxuLy8gLy8gICBjb25zdCBwcm9kdXRvczpQcm9kdWN0W10gPSBhd2FpdCByZXMuanNvbigpO1xuLy8gLy8gICByZXR1cm4gcHJvZHV0b3Ncbi8vIC8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlQYWdlKHtcbi8vICAgcHJvZHV0b3MsXG4vLyB9OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFNlcnZlclNpZGVQcm9wcz4pIHtcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIFxuLy8gICAgICAgICA8aDE+e3JvdXRlci5xdWVyeS5pZH08L2gxPlxuLy8gICAgICAgICB7cHJvZHV0b3MubWFwKChwcm9kdXRvOiBQcm9kdWN0KSA9PiAoXG4vLyAgICAgICAgICAgPENhcmQgcHJvZHV0bz17cHJvZHV0b30gLz5cbi8vICAgICAgICAgKSl9XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/restaurant/products/[id].tsx\n"));

/***/ })

});