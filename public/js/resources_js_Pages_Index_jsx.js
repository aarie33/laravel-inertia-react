"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Index_jsx"],{

/***/ "./resources/js/Components/Modal/Confirm.jsx":
/*!***************************************************!*\
  !*** ./resources/js/Components/Modal/Confirm.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Confirm = function Confirm(props) {
  var open = props.open,
      title = props.title,
      desc = props.desc,
      type = props.type,
      action = props.action,
      onClose = props.onClose,
      onConfirm = props.onConfirm;
  return open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "fixed z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true"
  }, "\u200B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sm:flex sm:items-start"
  }, type == 'warning' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: "h-6 w-6 text-red-600",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }))) : null, type == 'success' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6 text-green-600",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }))) : null, type != 'warning' && type != 'success' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6 text-blue-600",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "text-lg leading-6 font-medium text-gray-900",
    id: "modal-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-sm text-gray-500"
  }, desc))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return onConfirm();
    },
    type: "button",
    className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm\n                ".concat(type == 'warning' ? 'bg-red-600' : null, "\n                ").concat(type == 'success' ? 'bg-green-600' : null, "\n                ").concat(type == 'info' ? 'bg-blue-600' : null)
  }, action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return onClose();
    },
    type: "button",
    className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
  }, "Cancel"))))) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Confirm);

/***/ }),

/***/ "./resources/js/Components/Table/FilterPanel.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/Components/Table/FilterPanel.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");



var FilterPanel = function FilterPanel(props) {
  var filters = props.filters,
      query = props.query,
      onInput = props.onInput,
      onClear = props.onClear;
  var show = false;
  var menu = null;
  var selected = {};
  var isFiltered = false;

  function filtered() {
    for (var i in filters) {
      var getFilter = get(query, filters[i].paramName);

      if (getFilter != null && getFilter != '') {
        selected[filters[i].paramName] = getFilter;
        return true;
      }
    }

    return false;
  }

  function checkFiltered() {
    for (var i in filters) {
      var getFilter = get(query, filters[i].paramName); // console.log('getFilter')
      // console.log(getFilter)

      if (getFilter != null) {
        isFiltered = true;
        return;
      }
    }

    isFiltered = false;
  }

  function get(object, key) {
    var _object$key;

    return (_object$key = object[key]) !== null && _object$key !== void 0 ? _object$key : null;
  } // watch reactivity
  // $: query, filtered()
  // $: selected, query, checkFiltered()
  // $: console.log(isFiltered)
  // $: selected, console.log('selected')
  // $: selected, console.log(selected)
  // $: console.log(query);


  checkFiltered();

  var handleOutsideClick = function handleOutsideClick(event) {
    if (show && !menu.contains(event.target)) {
      show = false;
    }
  };

  var handleEscape = function handleEscape(event) {
    if (show && event.key === 'Escape') {
      show = false;
    }
  }; // // add events when element is added to the DOM
  // document.addEventListener('click', handleOutsideClick, false);
  // document.addEventListener('keyup', handleEscape, false);
  // // remove events when element is removed from the DOM
  // return () => {
  //   document.removeEventListener('click', handleOutsideClick, false);
  //   document.removeEventListener('keyup', handleEscape, false);
  // };


  function setFilter(paramName) {
    var filter = {
      key: paramName,
      value: selected[paramName]
    };
    onInput(filter);
  }

  function clear() {
    selected = {};
    isFiltered = false;
    show = !show;
    onClear();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return show = !show;
    },
    className: "bg-white focus:border-blue-500 focus:shadow-solid flex items-center justify-center \n            h-9 w-9 rounded border border-gray-200 hover:border-blue-500\n          ".concat(isFiltered && "bg-blue-600", "\n          ").concat(isFiltered && "text-white")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    clipRule: "evenodd"
  }))), show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "origin-top-left absolute left-0 w-48 p-2 mt-1 bg-white rounded shadow-lg border border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-end",
    hidden: !isFiltered
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "cursor-pointer text-xs",
    onClick: function onClick() {
      return clear();
    }
  }, "clear")), filters.map(function (filter, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      key: index,
      className: "w-full p-2 mb-2 rounded border border-gray-200",
      value: selected[filter.paramName],
      oChange: function oChange(e) {
        return setFilter(filter.paramName);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: ""
    }, filter.label), filter.options.map(function (option) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "".concat(option.name)
      }, option.value);
    }));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterPanel);

/***/ }),

/***/ "./resources/js/Components/Table/Pagination.jsx":
/*!******************************************************!*\
  !*** ./resources/js/Components/Table/Pagination.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Pagination = function Pagination(props) {
  var links = props.links,
      query = props.query,
      perPageOptions = props.perPageOptions,
      from = props.from,
      to = props.to,
      total = props.total,
      showPerPage = props.showPerPage,
      justifyCenter = props.justifyCenter,
      onChangePerPage = props.onChangePerPage,
      onChangePage = props.onChangePage;

  function changeFilterPerPage(perPageOption) {
    onChangePerPage(perPageOption);
  }

  function changePage(mPage) {
    onChangePage(mPage);
  }

  function isPrev(link) {
    return link.label === '&laquo; Previous' || link.label === '&laquo; Sebelumnya' || link.label === 'Previous';
  }

  function isNext(link) {
    return link.label === 'Next &raquo;' || link.label === 'Berikutnya &raquo;' || link.label === 'Next';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sm:flex-1 sm:flex sm:items-center my-6\n      ".concat(justifyCenter ? 'sm:justify-center' : null, "\n      ").concat(!justifyCenter ? 'sm:justify-between' : null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, showPerPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-sm leading-5 text-gray-600 flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "mr-2 my-auto"
  }, "Per halaman : "), perPageOptions.map(function (perPageOption, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: index,
      className: "font-medium cursor-pointer mx-2 block text-center p-1 rounded-md\n                  ".concat(query.per_page == perPageOption ? "bg-blue-500 text-white" : "", "\n                  ").concat(index === 0 ? "ml-0" : ""),
      onClick: function onClick() {
        return changeFilterPerPage(perPageOption);
      }
    }, perPageOption);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "flex justify-center lg:justify-end"
  }, links.map(function (link, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index,
      className: "inline-block float-left ml-3 text-base"
    }, isPrev(link) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      onClick: function onClick() {
        return changePage(1);
      },
      className: "bg-blue-500 inline-block flex items-center justify-center h-8 w-8 rounded-md cursor-pointer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      className: "w-5 h-5 text-white",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M15 19l-7-7 7-7"
    }))), isNext(link) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      tabIndex: "0",
      className: "bg-blue-500 inline-block flex items-center justify-center h-8 w-8 rounded-md cursor-pointer",
      onClick: function onClick() {
        return changePage(index - 1);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      className: "w-5 h-5 text-white",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 5l7 7-7 7"
    }))), !isPrev(link) && !isNext(link) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "border border-gray-200 text-gray-500 font-bold hover:border-blue-500 hover:text-blue-500 \n                  text-md inline-block flex items-center justify-center h-8 w-8 rounded-md cursor-pointer bg-white\n                  ".concat(link.active ? 'bg-blue-500' : null, "\n                  ").concat(link.active ? 'text-white' : null, "\n                  ").concat(link.active ? 'hover:text-white' : null),
      onClick: function onClick() {
        return changePage(link.label);
      }
    }, link.label));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./resources/js/Components/Table/Search.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Components/Table/Search.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");



var Search = function Search(props) {
  var value = props.value,
      onInput = props.onInput;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    value: value
  }),
      data = _useForm.data,
      setData = _useForm.setData;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (value == '') {
      data.value = '';
    }

    console.log(data);
    console.log(value);
  }, [data, value]);

  function handleInput(val) {
    setData('value', val);
    setTimeout(function () {
      onInput(val);
    }, 300);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex w-full h-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: data.value,
    onChange: function onChange(e) {
      return handleInput(e.target.value);
    },
    className: "block form-input relative w-full focus:shadow-outline  h-9 px-2 rounded text-base border border-gray-200",
    type: "text",
    name: "search",
    placeholder: "Search\u2026"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./resources/js/Components/Table/TableHeaderColumn.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/Components/Table/TableHeaderColumn.jsx ***!
  \*************************************************************/
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

/***/ "./resources/js/Pages/Index.jsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/Index.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Components_Table_TableHeaderColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Table/TableHeaderColumn */ "./resources/js/Components/Table/TableHeaderColumn.jsx");
/* harmony import */ var _Components_Table_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Table/Pagination */ "./resources/js/Components/Table/Pagination.jsx");
/* harmony import */ var _Components_Table_FilterPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Table/FilterPanel */ "./resources/js/Components/Table/FilterPanel.jsx");
/* harmony import */ var _Components_Table_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Table/Search */ "./resources/js/Components/Table/Search.jsx");
/* harmony import */ var _Components_Modal_Confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Modal/Confirm */ "./resources/js/Components/Modal/Confirm.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Index = function Index(props) {
  var title = props.title,
      resources = props.resources,
      filters = props.filters,
      params = props.params;

  var query = _objectSpread(_objectSpread({}, params), {}, {
    search: params.search || '',
    page: resources.current_page,
    per_page: resources.per_page,
    sort: params.sort || 'name',
    order: params.order || 'asc'
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    showModal: false,
    selectedId: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

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

  function changePerPage(e) {
    query.per_page = e;
    handleQueryChange();
  }

  function changePage(e) {
    query.page = e;
    handleQueryChange();
  }

  function onSearch(e) {
    query.search = e;
    handleQueryChange();
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

  function handleToggleModal() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    setState({
      showModal: !state.showModal,
      selectedId: id
    });
  }

  function get(object, key) {
    var _object$key;

    return (_object$key = object[key]) !== null && _object$key !== void 0 ? _object$key : null;
  }

  function setFilter(filter) {
    if (filter.value == null || filter.value == '') {// delete query[filter.key]
    } else {
      query[filter.key] = filter.value;
    }

    handleQueryChange();
  }

  function clearFilter() {
    query = {
      search: query.search,
      page: query.page,
      per_page: query.per_page,
      sort: query.sort,
      order: query.order
    };
    handleQueryChange();
  }

  function confirmModal() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post("/users/".concat(state.selectedId), {
      _method: 'delete',
      preserveScroll: true,
      preserveState: true
    });
    handleToggleModal();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "px-40 py-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Modal_Confirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: state.showModal,
    title: "Delete User ?",
    desc: "Are you sure want to delete this user ?",
    type: "warning",
    action: "Delete",
    onClose: function onClose() {
      return handleToggleModal();
    },
    onConfirm: function onConfirm() {
      return confirmModal();
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "text-blue-700 mb-3"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-2 pt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-between flex-wrap sm:flex-no-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_FilterPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    filters: filters,
    query: query // onInput={(e) => setFilter(e)}
    // onClear={clearFilter()}

  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-grow ml-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_Search__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: query.search,
    onInput: function onInput(e) {
      return onSearch(e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: 'No',
    enableSorting: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: 'Nama',
    enableSorting: true,
    sortingKey: 'name',
    querySort: query.sort,
    queryOrder: query.order,
    onSort: sort
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: 'Phone',
    enableSorting: true,
    sortingKey: 'phone',
    querySort: query.sort,
    queryOrder: query.order,
    onSort: sort
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: 'Alamat',
    enableSorting: true,
    sortingKey: 'address',
    querySort: query.sort,
    queryOrder: query.order,
    onSort: sort
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: 'Status',
    enableSorting: true,
    sortingKey: 'is_active',
    querySort: query.sort,
    queryOrder: query.order,
    onSort: sort
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_TableHeaderColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit("/users/".concat(item.id, "/edit"), {
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
    colSpan: "6",
    className: "text-center py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-gray-500 text-sm italic"
  }, "Tidak ada data"))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Table_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
    links: resources.links,
    total: resources.total,
    perPageOptions: [10, 20, 50, 100],
    query: query,
    onChangePerPage: function onChangePerPage(e) {
      return changePerPage(e);
    },
    onChangePage: function onChangePage(e) {
      return changePage(e);
    }
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);