"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pokedex/page",{

/***/ "(app-pages-browser)/./src/types/pokemon.type.ts":
/*!***********************************!*\
  !*** ./src/types/pokemon.type.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pokemonTypes: function() { return /* binding */ pokemonTypes; }\n/* harmony export */ });\nconst pokemonTypes = [\n    \"normal\",\n    \"fire\",\n    \"water\",\n    \"electric\",\n    \"grass\",\n    \"ice\",\n    \"fighting\",\n    \"poison\",\n    \"ground\",\n    \"flying\",\n    \"psychic\",\n    \"bug\",\n    \"rock\",\n    \"ghost\",\n    \"steel\",\n    \"dragon\",\n    \"dark\",\n    \"fairy\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy90eXBlcy9wb2tlbW9uLnR5cGUudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGVBQWU7SUFBQztJQUMzQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQVEsQ0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdHlwZXMvcG9rZW1vbi50eXBlLnRzP2VlZWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBva2Vtb25UeXBlcyA9IFsnbm9ybWFsJyxcbiAgJ2ZpcmUnLFxuICAnd2F0ZXInLFxuICAnZWxlY3RyaWMnLFxuICAnZ3Jhc3MnLFxuICAnaWNlJyxcbiAgJ2ZpZ2h0aW5nJyxcbiAgJ3BvaXNvbicsXG4gICdncm91bmQnLFxuICAnZmx5aW5nJyxcbiAgJ3BzeWNoaWMnLFxuICAnYnVnJyxcbiAgJ3JvY2snLFxuICAnZ2hvc3QnLFxuICAnc3RlZWwnLFxuICAnZHJhZ29uJyxcbiAgJ2RhcmsnLFxuICAnZmFpcnknXSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgUG9rZW1vblR5cGUgPSB0eXBlb2YgcG9rZW1vblR5cGVzW251bWJlcl1cblxuZXhwb3J0IHR5cGUgUG9rZW1vbklkID0gbnVtYmVyICYgeyBfX2JyYW5kOiAnUG9rZW1vbicgfVxuXG5leHBvcnQgdHlwZSBQb2tlbW9uID0ge1xuICBpZDogUG9rZW1vbklkXG4gIGlkZW50aWZpZXI6IG51bWJlclxuICBuYW1lOiBzdHJpbmdcbiAgdHlwZXM6IFBva2Vtb25UeXBlW11cbiAgZXZvbHZlcz86IFBva2Vtb25JZFxufVxuIl0sIm5hbWVzIjpbInBva2Vtb25UeXBlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/types/pokemon.type.ts\n"));

/***/ })

});