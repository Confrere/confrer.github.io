webpackJsonp([22676092666560,60335399758886],{

/***/ "./node_modules/json-loader/index.js!./.cache/json/layout-index.json":
/***/ (function(module, exports) {

	module.exports = {"data":{"site":{"siteMetadata":{"siteName":"Confrere","footer":{"copyright":"Confrere AS © 2017","privacy":{"url":"http://www.iubenda.com/privacy-policy/8161398","text":"Privacy Policy"},"links":[{"url":"https://www.facebook.com/confrerevideo","text":"Facebook"},{"url":"https://twitter.com/confrere_video","text":"Twitter"},{"url":"https://www.instagram.com/confrere_video/","text":"Instagram"},{"url":"https://github.com/Confrer","text":"Github"}]}}},"allSitePage":{"edges":[{"node":{"path":"/dev-404-page/"}},{"node":{"path":"/404/"}},{"node":{"path":"/about/"}},{"node":{"path":"/"}},{"node":{"path":"/404.html"}}]}},"layoutContext":{}}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/ingvildindrebo/static-pages/confrere/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/ingvildindrebo/static-pages/confrere/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/ingvildindrebo/static-pages/confrere/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/Users/ingvildindrebo/static-pages/confrere/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/Users/ingvildindrebo/static-pages/confrere/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/ingvildindrebo/static-pages/confrere/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./.cache/layouts/index.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__("./src/layouts/index.tsx");
	
	var _index2 = _interopRequireDefault(_index);
	
	var _layoutIndex = __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/layout-index.json");
	
	var _layoutIndex2 = _interopRequireDefault(_layoutIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(_index2.default, _extends({}, props, _layoutIndex2.default));
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.object.assign.js");
	module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.object.create.js");
	var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.object.keys.js");
	module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
	module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.symbol.js");
	__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
	__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
	__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.observable.js");
	module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
	__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
	module.exports = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
	var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
	var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/library/modules/_to-absolute-index.js");
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
	var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
	var gOPS = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js");
	var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
	var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
	var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
	var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
	var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
	module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
	module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
	  return Object.defineProperty(__webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
	var descriptor = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
	var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__("./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
	var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
	var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
	var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
	var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
	var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
	var $iterCreate = __webpack_require__("./node_modules/core-js/library/modules/_iter-create.js");
	var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
	var getPrototypeOf = __webpack_require__("./node_modules/core-js/library/modules/_object-gpo.js");
	var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__("./node_modules/core-js/library/modules/_uid.js")('meta');
	var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
	var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
	var setDesc = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
	var gOPS = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js");
	var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
	var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
	var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
	var dPs = __webpack_require__("./node_modules/core-js/library/modules/_object-dps.js");
	var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");
	var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<'; var="" gt=">" ;="" iframedocument;="" iframe.style.display="none" __webpack_require__(".="" node_modules="" core-js="" library="" modules="" _html.js").appendchild(iframe);="" iframe.src="javascript:" eslint-disable-line="" no-script-url="" createdict="iframe.contentWindow.Object;" html.removechild(iframe);="" iframedocument="iframe.contentWindow.document;" iframedocument.open();="" iframedocument.write(lt="" +="" 'script'="" 'document.f="Object'" lt="" '="" script'="" gt);="" iframedocument.close();="" while="" (i--)="" delete="" createdict[prototype][enumbugkeys[i]];="" return="" createdict();="" };="" module.exports="Object.create" ||="" function="" create(o,="" properties)="" {="" result;="" if="" (o="" !="=" null)="" empty[prototype]="anObject(O);" result="new" empty();="" add="" "__proto__"="" for="" object.getprototypeof="" polyfill="" result[ie_proto]="O;" }="" else="" properties="==" undefined="" ?="" :="" dps(result,="" properties);="" ***="" }),="" ".="" _object-dp.js":="" (function(module,="" exports,="" __webpack_require__)="" anobject="__webpack_require__("./node_modules/core-js/library/modules/_an-object.js");" ie8_dom_define="__webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");" toprimitive="__webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");" dp="Object.defineProperty;" exports.f="__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js")" object.defineproperty="" defineproperty(o,="" p,="" attributes)="" anobject(o);="" p="toPrimitive(P," true);="" anobject(attributes);="" (ie8_dom_define)="" try="" dp(o,="" attributes);="" catch="" (e)="" *="" empty="" ('get'="" in="" attributes="" 'set'="" throw="" typeerror('accessors="" not="" supported!');="" ('value'="" o[p]="Attributes.value;" o;="" _object-dps.js":="" getkeys="__webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");" object.defineproperties="" defineproperties(o,="" keys="getKeys(Properties);" length="keys.length;" i="0;" p;="" (length=""> i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
	var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
	var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
	var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
	var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
	var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
	var gOPN = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
	var hiddenKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
	var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
	var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
	var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
	var arrayIndexOf = __webpack_require__("./node_modules/core-js/library/modules/_array-includes.js")(false);
	var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
	var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
	var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
	var fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
	var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__("./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
	var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
	var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('keys');
	var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
	var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
	var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
	var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
	var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
	var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
	var defineProperty = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('wks');
	var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
	var Symbol = __webpack_require__("./node_modules/core-js/library/modules/_global.js").Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__("./node_modules/core-js/library/modules/_add-to-unscopables.js");
	var step = __webpack_require__("./node_modules/core-js/library/modules/_iter-step.js");
	var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
	var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__("./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__("./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
	var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
	
	__webpack_require__("./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__("./node_modules/core-js/library/modules/_string-at.js")(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
	var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
	var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
	var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
	var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
	var META = __webpack_require__("./node_modules/core-js/library/modules/_meta.js").KEY;
	var $fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
	var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js");
	var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
	var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
	var wks = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");
	var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
	var wksDefine = __webpack_require__("./node_modules/core-js/library/modules/_wks-define.js");
	var enumKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-keys.js");
	var isArray = __webpack_require__("./node_modules/core-js/library/modules/_is-array.js");
	var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
	var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
	var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
	var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
	var _create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
	var gOPNExt = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn-ext.js");
	var $GOPD = __webpack_require__("./node_modules/core-js/library/modules/_object-gopd.js");
	var $DP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
	var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
	  __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__("./node_modules/core-js/library/modules/_library.js")) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.array.iterator.js");
	var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
	var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
	var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
	var TO_STRING_TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.navigateTo = undefined;
	
	var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/index.js");
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pathPrefix = "/"; /*global __PREFIX_PATHS__, __PATH_PREFIX__ */
	
	if (true) {
	  pathPrefix = ("/static-pages");
	}
	
	function normalizePath(path) {
	  return path.replace(/^\/\//g, "/");
	}
	
	var NavLinkPropTypes = {
	  activeClassName: _propTypes2.default.string,
	  activeStyle: _propTypes2.default.object,
	  exact: _propTypes2.default.bool,
	  strict: _propTypes2.default.bool,
	  isActive: _propTypes2.default.func,
	  location: _propTypes2.default.object
	};
	
	var GatsbyLink = function (_React$Component) {
	  (0, _inherits3.default)(GatsbyLink, _React$Component);
	
	  function GatsbyLink(props) {
	    (0, _classCallCheck3.default)(this, GatsbyLink);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));
	
	    _this.state = {
	      to: normalizePath(pathPrefix + props.to)
	    };
	    return _this;
	  }
	
	  GatsbyLink.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.to !== nextProps.to) {
	      this.setState({
	        to: normalizePath(pathPrefix + nextProps.to)
	      });
	      ___loader.enqueue(this.state.to);
	    }
	  };
	
	  GatsbyLink.prototype.componentDidMount = function componentDidMount() {
	    ___loader.enqueue(this.state.to);
	  };
	
	  GatsbyLink.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props,
	        onClick = _props.onClick,
	        rest = (0, _objectWithoutProperties3.default)(_props, ["onClick"]);
	
	    if ((0, _keys2.default)(NavLinkPropTypes).some(function (propName) {
	      return _this2.props[propName];
	    })) {
	      var El = _reactRouterDom.NavLink;
	    } else {
	      var El = _reactRouterDom.Link;
	    }
	
	    return _react2.default.createElement(El, (0, _extends3.default)({
	      onClick: function (_onClick) {
	        function onClick(_x) {
	          return _onClick.apply(this, arguments);
	        }
	
	        onClick.toString = function () {
	          return _onClick.toString();
	        };
	
	        return onClick;
	      }(function (e) {
	        onClick && onClick(e);
	        if (e.button === 0 && // ignore right clicks
	        !_this2.props.target && // let browser handle "target=_blank"
	        !e.defaultPrevented && // onClick prevented default
	        !e.metaKey && // ignore clicks with modifier keys...
	        !e.altKey && !e.ctrlKey && !e.shiftKey) {
	          // Is this link pointing to a hash on the same page? If so,
	          // just scroll there.
	          var pathname = _this2.state.to;
	          if (pathname.split("#").length > 1) {
	            pathname = pathname.split("#").slice(0, -1).join("");
	          }
	          if (pathname === window.location.pathname) {
	            var hashFragment = _this2.state.to.split("#").slice(1).join("#");
	            var element = document.getElementById(hashFragment);
	            if (element !== null) {
	              element.scrollIntoView();
	              return true;
	            }
	          }
	
	          // In production, make sure the necessary scripts are
	          // loaded before continuing.
	          if (true) {
	            e.preventDefault();
	            window.___navigateTo(_this2.state.to);
	          }
	        }
	      })
	    }, rest, {
	      to: this.state.to
	    }));
	  };
	
	  return GatsbyLink;
	}(_react2.default.Component);
	
	GatsbyLink.contextTypes = {
	  router: _propTypes2.default.object
	};
	
	exports.default = GatsbyLink;
	var navigateTo = exports.navigateTo = function navigateTo(pathname) {
	  window.___navigateTo(normalizePath(pathPrefix + pathname));
	};

/***/ }),

/***/ "./src/img/logo.svg":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/logo.e6a9145f.svg";

/***/ }),

/***/ "./src/layouts/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const gatsby_link_1 = __webpack_require__("./node_modules/gatsby-link/index.js");
	const Logo = __webpack_require__("./src/img/logo.svg");
	__webpack_require__("./src/layouts/layout.scss");
	class default_1 extends React.Component {
	    render() {
	        const menuElements = this.props.data.allSitePage.edges.filter(node => {
	            return !node.node.path.includes("404");
	        }).map(menuItem => {
	            return menuItem.node.path === "/" ? "" : menuItem.node.path.replace(/\//g, "");
	        });
	        const footer = this.props.data.site.siteMetadata.footer;
	        return React.createElement("div", null, React.createElement("header", null, React.createElement(gatsby_link_1.default, { to: "/", className: "logo" }, React.createElement("img", { src: Logo, alt: "Logo - confrere" })), React.createElement("nav", { className: "nav nav-font" }, React.createElement("ul", null, menuElements.map((el, index) => {
	            return React.createElement("li", { className: "menu-item", key: "menu-" + index }, React.createElement(gatsby_link_1.default, { to: el }, " ", el));
	        })))), React.createElement("main", null, this.props.children()), React.createElement("footer", null, React.createElement("main", { className: "container" }, React.createElement("div", null, React.createElement("p", null, footer.copyright), React.createElement("a", { href: footer.privacy.url }, footer.privacy.text)), React.createElement("div", null, React.createElement("ul", null, footer.links.map((link, index) => React.createElement("li", { key: index }, React.createElement("a", { href: link.url }, link.text))))))));
	    }
	}
	exports.default = default_1;
	exports.pageQuery = "** extracted graphql fragment **";

/***/ }),

/***/ "./src/layouts/layout.scss":
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ })

});
//# sourceMappingURL=component---src-layouts-index-tsx-a3a05e01c35f42a7437b.js.map</';>