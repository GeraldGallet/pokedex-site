"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/hooks/pokemons/usePokemonProvider.tsx":
/*!***************************************************!*\
  !*** ./src/hooks/pokemons/usePokemonProvider.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useListPokemons: function() { return /* binding */ useListPokemons; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\nvar _s = $RefreshSig$();\n\n\nconst useListPokemons = (input)=>{\n    _s();\n    const [pokemons, setPokemons] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3001/pokemons\").then((data)=>{\n            const pokemons = data.data;\n            var _input_sort;\n            const sort = (_input_sort = input === null || input === void 0 ? void 0 : input.sort) !== null && _input_sort !== void 0 ? _input_sort : {\n                field: \"id\",\n                direction: \"asc\"\n            };\n            const sortedPokemons = pokemons.sort((p1, p2)=>{\n                if (sort.field === \"id\") {\n                    if (sort.direction === \"asc\") {\n                        return p1.id - p2.id;\n                    }\n                    return p2.id - p1.id;\n                }\n                if (sort.field === \"name\") {\n                    if (sort.direction === \"asc\") {\n                        return p1.name.localeCompare(p2.name);\n                    }\n                    return p2.name.localeCompare(p1.name);\n                }\n                return 0;\n            }).filter((param)=>{\n                let { name } = param;\n                return (input === null || input === void 0 ? void 0 : input.search) ? name.toLowerCase().includes(input.search.toLowerCase()) : true;\n            }).filter((param)=>{\n                let { types: pokemonTypes } = param;\n                var _input_types;\n                return (input === null || input === void 0 ? void 0 : (_input_types = input.types) === null || _input_types === void 0 ? void 0 : _input_types.length) ? pokemonTypes.some((type)=>input.types.includes(type)) : true;\n            });\n            setPokemons(sortedPokemons);\n        }).catch((err)=>{\n            console.error(err);\n            setPokemons([]);\n        });\n    }, [\n        input === null || input === void 0 ? void 0 : input.search,\n        input === null || input === void 0 ? void 0 : input.sort,\n        input === null || input === void 0 ? void 0 : input.types\n    ]);\n    return {\n        pokemons\n    };\n};\n_s(useListPokemons, \"HTV26hiVYObM9ZdttYFfm0Hoy8g=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9wb2tlbW9ucy91c2VQb2tlbW9uUHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBQ2xCO0FBU25CLE1BQU1HLGtCQUFrQixDQUFDQzs7SUFDOUIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFZLEVBQUU7SUFFdERELGdEQUFTQSxDQUFDO1FBQ1JFLDZDQUFLQSxDQUFDSyxHQUFHLENBQUMsa0NBQWtDQyxJQUFJLENBQUMsQ0FBQ0M7WUFDaEQsTUFBTUosV0FBV0ksS0FBS0EsSUFBSTtnQkFFYkw7WUFBYixNQUFNTSxPQUFPTixDQUFBQSxjQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9NLElBQUksY0FBWE4seUJBQUFBLGNBQWU7Z0JBQUVPLE9BQU87Z0JBQU1DLFdBQVc7WUFBTTtZQUU1RCxNQUFNQyxpQkFBaUIsU0FBd0JILElBQUksQ0FBQyxDQUFDSSxJQUFJQztnQkFDdkQsSUFBSUwsS0FBS0MsS0FBSyxLQUFLLE1BQU07b0JBQ3ZCLElBQUlELEtBQUtFLFNBQVMsS0FBSyxPQUFPO3dCQUM1QixPQUFPRSxHQUFHRSxFQUFFLEdBQUdELEdBQUdDLEVBQUU7b0JBQ3RCO29CQUVBLE9BQU9ELEdBQUdDLEVBQUUsR0FBR0YsR0FBR0UsRUFBRTtnQkFDdEI7Z0JBRUEsSUFBSU4sS0FBS0MsS0FBSyxLQUFLLFFBQVE7b0JBQ3pCLElBQUlELEtBQUtFLFNBQVMsS0FBSyxPQUFPO3dCQUM1QixPQUFPRSxHQUFHRyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0gsR0FBR0UsSUFBSTtvQkFDdEM7b0JBRUEsT0FBT0YsR0FBR0UsSUFBSSxDQUFDQyxhQUFhLENBQUNKLEdBQUdHLElBQUk7Z0JBQ3RDO2dCQUVBLE9BQU87WUFDVCxHQUNHRSxNQUFNLENBQ0w7b0JBQUMsRUFBRUYsSUFBSSxFQUFFO3VCQUFNYixDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9nQixNQUFNLElBQUdILEtBQUtJLFdBQVcsR0FBR0MsUUFBUSxDQUFDbEIsTUFBTWdCLE1BQU0sQ0FBQ0MsV0FBVyxNQUFNO1lBQUcsR0FFN0ZGLE1BQU0sQ0FDTDtvQkFBQyxFQUFFSSxPQUFPQyxZQUFZLEVBQUU7b0JBQU1wQjt1QkFBQUEsQ0FBQUEsa0JBQUFBLDZCQUFBQSxlQUFBQSxNQUFPbUIsS0FBSyxjQUFabkIsbUNBQUFBLGFBQWNxQixNQUFNLElBQUdELGFBQWFFLElBQUksQ0FBQyxDQUFDQyxPQUFTdkIsTUFBTW1CLEtBQUssQ0FBRUQsUUFBUSxDQUFDSyxTQUFTOztZQUdwSHJCLFlBQVlPO1FBQ2QsR0FBR2UsS0FBSyxDQUFDLENBQUNDO1lBQ1JDLFFBQVFDLEtBQUssQ0FBQ0Y7WUFDZHZCLFlBQVksRUFBRTtRQUNoQjtJQUVGLEdBQUc7UUFBQ0Ysa0JBQUFBLDRCQUFBQSxNQUFPZ0IsTUFBTTtRQUFFaEIsa0JBQUFBLDRCQUFBQSxNQUFPTSxJQUFJO1FBQUVOLGtCQUFBQSw0QkFBQUEsTUFBT21CLEtBQUs7S0FBQztJQUU3QyxPQUFPO1FBQUVsQjtJQUFTO0FBQ3BCLEVBQUU7R0E1Q1dGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy9wb2tlbW9ucy91c2VQb2tlbW9uUHJvdmlkZXIudHN4Pzk5MTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBQb2tlbW9uLCBQb2tlbW9uVHlwZSwgU29ydCB9IGZyb20gJ0AvdHlwZXMnO1xuXG50eXBlIExpc3RQb2tlbW9uc0lucHV0ID0ge1xuICBzZWFyY2g/OiBzdHJpbmdcbiAgc29ydD86IFNvcnRcbiAgdHlwZXM/OiBQb2tlbW9uVHlwZVtdXG59XG5cbmV4cG9ydCBjb25zdCB1c2VMaXN0UG9rZW1vbnMgPSAoaW5wdXQ/OiBMaXN0UG9rZW1vbnNJbnB1dCkgPT4ge1xuICBjb25zdCBbcG9rZW1vbnMsIHNldFBva2Vtb25zXSA9IHVzZVN0YXRlPFBva2Vtb25bXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvcG9rZW1vbnMnKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBwb2tlbW9ucyA9IGRhdGEuZGF0YVxuXG4gICAgICBjb25zdCBzb3J0ID0gaW5wdXQ/LnNvcnQgPz8geyBmaWVsZDogJ2lkJywgZGlyZWN0aW9uOiAnYXNjJyB9O1xuXG4gICAgICBjb25zdCBzb3J0ZWRQb2tlbW9ucyA9IChwb2tlbW9ucyBhcyBQb2tlbW9uW10pLnNvcnQoKHAxLCBwMikgPT4ge1xuICAgICAgICBpZiAoc29ydC5maWVsZCA9PT0gJ2lkJykge1xuICAgICAgICAgIGlmIChzb3J0LmRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgIHJldHVybiBwMS5pZCAtIHAyLmlkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwMi5pZCAtIHAxLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNvcnQuZmllbGQgPT09ICduYW1lJykge1xuICAgICAgICAgIGlmIChzb3J0LmRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgIHJldHVybiBwMS5uYW1lLmxvY2FsZUNvbXBhcmUocDIubmFtZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHAyLm5hbWUubG9jYWxlQ29tcGFyZShwMS5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoeyBuYW1lIH0pID0+IChpbnB1dD8uc2VhcmNoID8gbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0LnNlYXJjaC50b0xvd2VyQ2FzZSgpKSA6IHRydWUpLFxuICAgICAgICApXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKHsgdHlwZXM6IHBva2Vtb25UeXBlcyB9KSA9PiAoaW5wdXQ/LnR5cGVzPy5sZW5ndGggPyBwb2tlbW9uVHlwZXMuc29tZSgodHlwZSkgPT4gaW5wdXQudHlwZXMhLmluY2x1ZGVzKHR5cGUpKSA6IHRydWUpLFxuICAgICAgICApO1xuXG4gICAgICBzZXRQb2tlbW9ucyhzb3J0ZWRQb2tlbW9ucyk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgc2V0UG9rZW1vbnMoW10pXG4gICAgfSlcbiAgICBcbiAgfSwgW2lucHV0Py5zZWFyY2gsIGlucHV0Py5zb3J0LCBpbnB1dD8udHlwZXNdKTtcblxuICByZXR1cm4geyBwb2tlbW9ucyB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlTGlzdFBva2Vtb25zIiwiaW5wdXQiLCJwb2tlbW9ucyIsInNldFBva2Vtb25zIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJzb3J0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJzb3J0ZWRQb2tlbW9ucyIsInAxIiwicDIiLCJpZCIsIm5hbWUiLCJsb2NhbGVDb21wYXJlIiwiZmlsdGVyIiwic2VhcmNoIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInR5cGVzIiwicG9rZW1vblR5cGVzIiwibGVuZ3RoIiwic29tZSIsInR5cGUiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/pokemons/usePokemonProvider.tsx\n"));

/***/ })

});