webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ti_le_Desktop_Ram_order_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_ti_le_Desktop_Ram_order_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_ti_le_Desktop_Ram_order_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_ti_le_Desktop_Ram_order_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_ti_le_Desktop_Ram_order_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_purchase_page_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/purchase_page.js */ "./src/components/purchase_page.js");
/* harmony import */ var _components_page_header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page_header.js */ "./src/components/page_header.js");
/* harmony import */ var _components_product_list_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product_list.js */ "./src/components/product_list.js");





var _jsxFileName = "/Users/ti_le/Desktop/Ram/order-app/src/App.js";






var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_ti_le_Desktop_Ram_order_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_Users_ti_le_Desktop_Ram_order_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_Users_ti_le_Desktop_Ram_order_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ti_le_Desktop_Ram_order_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {
      books: [],
      promo: []
    };
    return _this;
  }

  Object(_Users_ti_le_Desktop_Ram_order_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "itemsFetch",
    value: function itemsFetch() {
      var _this2 = this;

      fetch('http://jst.edchavez.com/api/inventory/getInventory/').then(function (results) {
        return results.json();
      }).then(function (data) {
        _this2.setState({
          books: data
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.itemsFetch();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_page_header_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_purchase_page_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_product_list_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        products: this.state.books,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.da372588b0b71e33a369.hot-update.js.map