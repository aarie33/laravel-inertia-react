"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Index_js"],{

/***/ "./resources/js/Components/Table/TableHeaderColumn.js":
/*!************************************************************!*\
  !*** ./resources/js/Components/Table/TableHeaderColumn.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var TableHeaderColumn = function TableHeaderColumn(props) {
  var label = props.label,
      enableSorting = props.enableSorting,
      sortingKey = props.sortingKey,
      querySort = props.querySort,
      queryOrder = props.queryOrder,
      classes = props.classes,
      onSort = props.onSort;

  function handleSort() {
    onSort({
      key: sortingKey,
      order: queryOrder == 'desc' ? 'asc' : 'desc'
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "p-3 lg:font-bold lg:uppercase lg:text-base lg:table-cell text-xs text-gray-400 border-b border-gray-300 {classes}"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex item-center cursor-pointer",
    onClick: handleSort
  }, label, enableSorting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ml-2 flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: "7",
    height: "11",
    viewBox: "0 0 7 11",
    className: "fill-current stroke-current transform -rotate-90\n                ".concat(querySort == sortingKey && queryOrder == 'desc' ? 'text-gray-900' : 'text-gray-300'),
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.31595 5.5512C6.31523 5.67399 6.29017 5.79544 6.24219 5.90857C6.19422 6.0217 6.12428 6.12429 6.03638 6.21045L2.24317 9.89875C2.15475 9.98472 2.05018 10.0525 1.93543 10.0983C1.82068 10.144 1.698 10.1668 1.57439 10.1654C1.45078 10.1639 1.32866 10.1383 1.21501 10.0899C1.10136 10.0415 0.998397 9.97125 0.912005 9.88324C0.825613 9.79524 0.757482 9.69116 0.711503 9.57695C0.665523 9.46274 0.642596 9.34063 0.644029 9.21761C0.645462 9.09459 0.671227 8.97305 0.719854 8.85994C0.768481 8.74683 0.839018 8.64437 0.927436 8.5584L4.0661 5.52499L1.12091 2.4114C1.02602 2.32445 0.950176 2.21896 0.898116 2.10152C0.846056 1.98407 0.818903 1.8572 0.818355 1.72884C0.817806 1.60048 0.843874 1.47339 0.89493 1.35552C0.945985 1.23765 1.02093 1.13154 1.11507 1.04382C1.20922 0.956093 1.32054 0.888647 1.44207 0.845699C1.56361 0.802752 1.69274 0.785225 1.8214 0.794214C1.95005 0.803204 2.07547 0.838518 2.18979 0.897945C2.30412 0.957373 2.40489 1.03964 2.48582 1.13959L6.06086 4.9137C6.22415 5.08625 6.31536 5.31417 6.31595 5.5512Z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: "7",
    height: "11",
    viewBox: "0 0 7 11",
    className: "fill-current stroke-current transform rotate-90 \n                ".concat(querySort == sortingKey && queryOrder == 'asc' ? 'text-gray-900' : 'text-gray-300'),
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.31595 5.5512C6.31523 5.67399 6.29017 5.79544 6.24219 5.90857C6.19422 6.0217 6.12428 6.12429 6.03638 6.21045L2.24317 9.89875C2.15475 9.98472 2.05018 10.0525 1.93543 10.0983C1.82068 10.144 1.698 10.1668 1.57439 10.1654C1.45078 10.1639 1.32866 10.1383 1.21501 10.0899C1.10136 10.0415 0.998397 9.97125 0.912005 9.88324C0.825613 9.79524 0.757482 9.69116 0.711503 9.57695C0.665523 9.46274 0.642596 9.34063 0.644029 9.21761C0.645462 9.09459 0.671227 8.97305 0.719854 8.85994C0.768481 8.74683 0.839018 8.64437 0.927436 8.5584L4.0661 5.52499L1.12091 2.4114C1.02602 2.32445 0.950176 2.21896 0.898116 2.10152C0.846056 1.98407 0.818903 1.8572 0.818355 1.72884C0.817806 1.60048 0.843874 1.47339 0.89493 1.35552C0.945985 1.23765 1.02093 1.13154 1.11507 1.04382C1.20922 0.956093 1.32054 0.888647 1.44207 0.845699C1.56361 0.802752 1.69274 0.785225 1.8214 0.794214C1.95005 0.803204 2.07547 0.838518 2.18979 0.897945C2.30412 0.957373 2.40489 1.03964 2.48582 1.13959L6.06086 4.9137C6.22415 5.08625 6.31536 5.31417 6.31595 5.5512Z"
  }))) : ''));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableHeaderColumn);

/***/ }),

/***/ "./resources/js/Pages/Index.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Components_Table_TableHeaderColumn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Table/TableHeaderColumn.js */ "./resources/js/Components/Table/TableHeaderColumn.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Index = function Index(props) {
  // useEffect(() => {
  //   console.log('use effect')
  //   console.log(props)
  // });
  var title = props.title,
      resources = props.resources,
      filters = props.filters,
      params = props.params;

  var query = _objectSpread(_objectSpread({}, params), {}, {
    search: params.search || null,
    page: resources.current_page,
    per_page: resources.per_page,
    sort: params.sort || 'name',
    order: params.order || 'asc'
  });

  function rowNumber(index) {
    var newIndex = Number(index);
    return Number(query.page) * Number(query.per_page) - Number(query.per_page) + 1 + newIndex;
  }

  function handleQueryChange() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit(window.location.pathname, {
      data: query,
      replace: true,
      preserveScroll: true,
      preserveState: true
    });
  }

  function sort(e) {
    query.sort = e.key;
    query.order = e.order;
    handleQueryChange();
  }

  function clear() {
    query = {
      search: null,
      page: query.page,
      per_page: query.per_page,
      sort: query.sort,
      order: query.order
    };
    handleQueryChange();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "px-40 py-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "text-blue-700 mb-3"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-2 pt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-between flex-wrap sm:flex-no-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-grow ml-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "bg-white text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600 focus:text-blue-600 rounded mx-1 px-5 h-9 border border-gray-200",
    type: "button",
    onClick: clear
  }, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "bg-blue-500 hover:bg-blue-600 inline-block flex items-center h-9 px-2 rounded float-right text-white cursor-pointer",
    type: "button",
    onClick: function onClick() {
      return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit('/users/create', {
        preserveState: true
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
  })), "Tambah")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "overflow-visible"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "bg-white table-fixed shadow-md w-full rounded-lg text-base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: 'No',
    enableSorting: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: 'Nama',
    enableSorting: true,
    sortingKey: 'name',
    querySort: query.sort,
    queryOrder: query.order,
    onSort: sort
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: 'Phone',
    enableSorting: true,
    sortingKey: 'phone',
    querySort: query.sort,
    queryOrder: query.order,
    onSort: sort
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: 'Alamat',
    enableSorting: true,
    sortingKey: 'address',
    querySort: query.sort,
    queryOrder: query.order,
    onSort: sort
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: 'Status',
    enableSorting: true,
    sortingKey: 'is_active',
    querySort: query.sort,
    queryOrder: query.order,
    onSort: sort
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    enableSorting: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, resources.data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: item.id,
      className: "bg-white lg:hover:bg-gray-100 mb-10 lg:mb-0 border-b border-gray-200"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "px-3 cursor-pointer",
      onClick: function onClick() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit("/users/".concat(item.id), {
          preserveState: true
        });
      }
    }, rowNumber(index)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "px-3 cursor-pointer",
      onClick: function onClick() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit("/users/".concat(item.id), {
          preserveState: true
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "text-gray-500 text-xs"
    }, item.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "px-3 cursor-pointer",
      onClick: function onClick() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit("/users/".concat(item.id), {
          preserveState: true
        });
      }
    }, item.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "px-3 cursor-pointer",
      onClick: function onClick() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit("/users/".concat(item.id), {
          preserveState: true
        });
      }
    }, item.address || "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "px-3 cursor-pointer",
      onClick: function onClick() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit("/users/".concat(item.id), {
          preserveState: true
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "rounded-md text-white text-sm px-2 mb-2 \n                        ".concat(item.is_active == 1 ? 'bg-blue-500' : 'bg-gray-500')
    }, item.is_active_label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "w-full lg:w-auto pl-3 pb-1 pr-3 pt-2 lg:p-3 text-center block lg:table-cell relative lg:static"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "flex justify-end mb-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: " inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 h-8 w-8 rounded-md cursor-pointer ",
      onClick: function onClick() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit("/users/".concat(item.id), {
          preserveState: true
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      className: "fill-current text-white h-4 w-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M10 12a2 2 0 100-4 2 2 0 000 4z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      fillRule: "evenodd",
      d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
      clipRule: "evenodd"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: " inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 h-8 w-8 rounded-md mx-1 cursor-pointer ",
      onClick: function onClick() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit("/users/".concat(item.id), {
          undefined: undefined,
          preserveState: true
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      className: "fill-current text-white h-4 w-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: " inline-flex items-center justify-center bg-red-500 hover:bg-red-600 h-8 w-8 rounded-md cursor-pointer ",
      onClick: function onClick() {
        return handleToggleModal(item.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      className: "fill-current text-white h-4 w-4",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M6 7C5.447 7 5 7 5 7V20C5 21.104 5.896 22 7 22H17C18.104 22 19 21.104 19 20V7C19 7 18.553 7 18 7H6ZM10 19H8V10H10V19ZM16 19H14V10H16V19ZM16.618 4L15 2H9L7.382 4H3V6H8H16H21V4H16.618Z",
      fill: "currentColor"
    }))))));
  }), resources.data.length == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    colspan: "6",
    className: "text-center py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-gray-500 text-sm italic"
  }, "Tidak ada data"))) : null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);