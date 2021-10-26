webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Player.js":
/*!******************************!*\
  !*** ./components/Player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioPlayer */ \"./components/AudioPlayer.js\");\n/* harmony import */ var _styles_Player_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Player.module.css */ \"./styles/Player.module.css\");\n/* harmony import */ var _styles_Player_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Player_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/carlos.trujillo/Public/melocue-radio-client/components/Player.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      player = _useState[0],\n      setPlayer = _useState[1];\n\n  var changePlayer = function changePlayer() {\n    setPlayer(!player);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n      src: \"https://melocue.com/public/melocue/embed?theme=dark\",\n      frameborder: \"0\",\n      allowtransparency: \"true\",\n      style: \"width: 100%; min-height: 150px; border: 0;\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_AudioPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      cuePlay: player\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onClickCapture: changePlayer,\n      children: player ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaPauseCircle\"], {\n        className: _styles_Player_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.play\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaPlayCircle\"], {\n        className: _styles_Player_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.play\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Player, \"Depki2QqB7nMtfi9N6dlK1sMLsw=\");\n\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5ZXIuanM/ZmUyMCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsInBsYXllciIsInNldFBsYXllciIsImNoYW5nZVBsYXllciIsInBsYXllclN0eWxlcyIsInBsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEtBQUQsQ0FEcEI7QUFBQSxNQUNUQyxNQURTO0FBQUEsTUFDREMsU0FEQzs7QUFHaEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkQsYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLFNBQUcsRUFBQyxxREFBWjtBQUFrRSxpQkFBVyxFQUFDLEdBQTlFO0FBQWtGLHVCQUFpQixFQUFDLE1BQXBHO0FBQTJHLFdBQUssRUFBQztBQUFqSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxvREFBRDtBQUFhLGFBQU8sRUFBRUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBSyxvQkFBYyxFQUFFRSxZQUFyQjtBQUFBLGdCQUNHRixNQUFNLGdCQUNMLHFFQUFDLDREQUFEO0FBQWUsaUJBQVMsRUFBRUcsZ0VBQVksQ0FBQ0M7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURLLGdCQUdMLHFFQUFDLDJEQUFEO0FBQWMsaUJBQVMsRUFBRUQsZ0VBQVksQ0FBQ0M7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBLGtCQURGO0FBaUJEOztHQXhCUU4sTTs7S0FBQUEsTTtBQTBCTUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXllci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdWRpb1BsYXllciBmcm9tIFwiLi9BdWRpb1BsYXllclwiO1xuaW1wb3J0IHBsYXllclN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1BsYXllci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBGYVBsYXlDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEZhUGF1c2VDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFBsYXllcigpIHtcbiAgY29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjaGFuZ2VQbGF5ZXIgPSAoKSA9PiB7XG4gICAgc2V0UGxheWVyKCFwbGF5ZXIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9tZWxvY3VlLmNvbS9wdWJsaWMvbWVsb2N1ZS9lbWJlZD90aGVtZT1kYXJrXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgbWluLWhlaWdodDogMTUwcHg7IGJvcmRlcjogMDtcIj48L2lmcmFtZT5cbiAgICAgIDxBdWRpb1BsYXllciBjdWVQbGF5PXtwbGF5ZXJ9IC8+XG4gICAgICA8ZGl2IG9uQ2xpY2tDYXB0dXJlPXtjaGFuZ2VQbGF5ZXJ9PlxuICAgICAgICB7cGxheWVyID8gKFxuICAgICAgICAgIDxGYVBhdXNlQ2lyY2xlIGNsYXNzTmFtZT17cGxheWVyU3R5bGVzLnBsYXl9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZhUGxheUNpcmNsZSBjbGFzc05hbWU9e3BsYXllclN0eWxlcy5wbGF5fSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3BsYXllclN0eWxlcy5zb25nSW5mb30+XG4gICAgICAgIDxwPk5vdGhpbmcgRWxzZSBNYXR0ZXJzPC9wPlxuICAgICAgICA8cD5NZXRhbGxpY2E8L3A+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Player.js\n");

/***/ })

})