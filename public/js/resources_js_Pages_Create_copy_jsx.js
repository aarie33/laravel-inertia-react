"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Create_copy_jsx"],{

/***/ "./resources/js/Components/Fields/ImageInput.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/Components/Fields/ImageInput.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ImageInput = function ImageInput(props) {
  var value = props.value,
      onInput = props.onInput;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    src: value
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var fileinput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var onFileSelected = function onFileSelected(e) {
    onInput(e.target.files[0]);
    var image = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = function (e) {
      setState({
        src: e.target.result
      });
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Upload Image", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-full flex flex-col border border-gray-200 p-2 rounded"
  }, state.src ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "cursor-pointer",
    onClick: function onClick() {
      fileinput.current.click();
    },
    src: state.src,
    alt: ""
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "cursor-pointer",
    onClick: function onClick() {
      fileinput.current.click();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-16 w-16 mx-auto text-blue-500",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
    clipRule: "evenodd"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "cursor-pointer mx-auto",
    onClick: function onClick() {
      fileinput.current.click();
    }
  }, "Choose Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "hidden",
    type: "file",
    accept: ".jpg, .jpeg, .png",
    onChange: function onChange(e) {
      return onFileSelected(e);
    },
    ref: fileinput
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageInput);

/***/ }),

/***/ "./resources/js/Pages/Create copy.jsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/Create copy.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Components_Fields_ImageInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Fields/ImageInput */ "./resources/js/Components/Fields/ImageInput.jsx");





var Create = function Create(props) {
  var title = props.title,
      errors = props.errors;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    avatar: ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      progress = _useForm.progress;

  function submit() {
    post('/users');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "px-40 py-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "text-blue-700 mb-3"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "my-2 bg-white rounded shadow p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grid grid-cols-2 gap-4 text-sm mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-span-1"
  }, "Name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "border border-gray-200 h-9 rounded w-full px-2",
    value: data.name,
    onChange: function onChange(e) {
      return setData('name', e.target.value);
    },
    placeholder: "Name"
  }), errors.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-xs text-red-500"
  }, errors.name) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-2"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    className: "border border-gray-200 h-9 rounded w-full px-2",
    value: data.email,
    onChange: function onChange(e) {
      return setData('email', e.target.value);
    },
    placeholder: "Email"
  }), errors.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-xs text-red-500"
  }, errors.email) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-2"
  }, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "phone",
    className: "border border-gray-200 h-9 rounded w-full px-2",
    value: data.phone,
    onChange: function onChange(e) {
      return setData('phone', e.target.value);
    },
    placeholder: "Phone"
  }), errors.phone ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-xs text-red-500"
  }, errors.phone) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-2"
  }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    value: data.address,
    onChange: function onChange(e) {
      return setData('address', e.target.value);
    },
    className: "border border-gray-200 w-full rounded px-2 py-1",
    rows: "7"
  }), errors.address ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-xs text-red-500"
  }, errors.address) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-span-1"
  }, "Gender", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    value: data.gender,
    onChange: function onChange(e) {
      return setData('gender', e.target.value);
    },
    className: "border border-gray-200 h-9 rounded w-full px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "MALE"
  }, "Male"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "FEMALE"
  }, "Female")), errors.gender ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-xs text-red-500"
  }, errors.gender) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Fields_ImageInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onInput: function onInput(e) {
      return setData('avatar', e);
    }
  }), errors.avatar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-xs text-red-500"
  }, errors.avatar) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-end w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: "/users"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: " bg-white hover:bg-blue-50 inline-block flex items-center h-9 px-4 rounded float-right cursor-pointer border border-gray-200 ",
    type: "button"
  }, "Kembali")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: " bg-blue-600 hover:bg-blue-700 inline-block flex items-center h-9 px-4 rounded float-right cursor-pointer ml-2 text-white ",
    onClick: submit
  }, progress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })) : '', "Submit"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Create);

/***/ })

}]);