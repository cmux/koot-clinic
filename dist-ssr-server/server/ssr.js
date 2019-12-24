/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"ssr": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/includes/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./logs/tmp/config/full.1577169530377.js":
/*!***********************************************!*\
  !*** ./logs/tmp/config/full.1577169530377.js ***!
  \***********************************************/
/*! exports provided: name, type, template, router, redux, client, server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redux", function() { return redux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
// 核心代码中引用的配置文件
var name = "Koot Clinic";
var type = "react";
var template = "./src/index.ejs";
var router = __webpack_require__(/*! ../../../src/routes */ "./src/routes/index.js").default;
var redux = {
  "store": __webpack_require__(/*! ../../../src/store */ "./src/store/index.js").default,
  "syncCookie": true
};
var client = {};
var server =  true ? {
  "renderCache": false,
  "proxyRequestOrigin": {
    "protocol": "http"
  },
  "inject": __webpack_require__(/*! ../../../src/index.inject.js */ "./src/index.inject.js").default,
  "before": __webpack_require__(/*! ../../../src/server/before */ "./src/server/before.ts").default
} : undefined;

/***/ }),

/***/ "./node_modules/history/lib/Actions.js":
/*!*********************************************!*\
  !*** ./node_modules/history/lib/Actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Indicates that navigation was caused by a call to history.push.
 */

var PUSH = exports.PUSH = 'PUSH';
/**
 * Indicates that navigation was caused by a call to history.replace.
 */

var REPLACE = exports.REPLACE = 'REPLACE';
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */

var POP = exports.POP = 'POP';

/***/ }),

/***/ "./node_modules/history/lib/AsyncUtils.js":
/*!************************************************!*\
  !*** ./node_modules/history/lib/AsyncUtils.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var isSync = false,
      hasNext = false,
      doneArgs = void 0;

  var done = function done() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    isDone = true;

    if (isSync) {
      // Iterate instead of recursing if possible.
      doneArgs = args;
      return;
    }

    callback.apply(undefined, args);
  };

  var next = function next() {
    if (isDone) return;
    hasNext = true;
    if (isSync) return; // Iterate instead of recursing if possible.

    isSync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work(currentTurn++, next, done);
    }

    isSync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(undefined, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  };

  next();
};

/***/ }),

/***/ "./node_modules/history/lib/LocationUtils.js":
/*!***************************************************!*\
  !*** ./node_modules/history/lib/LocationUtils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;
exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
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

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createQuery = exports.createQuery = function createQuery(props) {
  return _extends(Object.create(null), props);
};

var createLocation = exports.createLocation = function createLocation() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Actions.POP;
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;
   true ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : undefined;
  var pathname = object.pathname || '/';
  var search = object.search || '';
  var hash = object.hash || '';
  var state = object.state;
  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
};

var isDate = function isDate(object) {
  return Object.prototype.toString.call(object) === '[object Date]';
};

var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
  if (a === b) return true;
  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);
  if (typeofA !== typeofB) return false;
  !(typeofA !== 'function') ?  true ? (0, _invariant2.default)(false, 'You must not store functions in location state') : undefined : void 0; // Not the same object, but same type.

  if (typeofA === 'object') {
    !!(isDate(a) && isDate(b)) ?  true ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : undefined : void 0;

    if (!Array.isArray(a)) {
      var keysofA = Object.keys(a);
      var keysofB = Object.keys(b);
      return keysofA.length === keysofB.length && keysofA.every(function (key) {
        return statesAreEqual(a[key], b[key]);
      });
    }

    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return statesAreEqual(item, b[index]);
    });
  } // All other serializable types (string, number, boolean)
  // should be strict equal.


  return false;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.key === b.key && // a.action === b.action && // Different action !== location change.
  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/lib/PathUtils.js":
/*!***********************************************!*\
  !*** ./node_modules/history/lib/PathUtils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
  var _parsePath = parsePath(path),
      pathname = _parsePath.pathname,
      search = _parsePath.search,
      hash = _parsePath.hash;

  return createPath({
    pathname: pathname,
    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
    hash: hash
  });
};

var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
  var _parsePath2 = parsePath(path),
      pathname = _parsePath2.pathname,
      search = _parsePath2.search,
      hash = _parsePath2.hash;

  return createPath({
    pathname: pathname,
    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
      return prefix === '?' ? prefix : suffix;
    }),
    hash: hash
  });
};

var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
  var _parsePath3 = parsePath(path),
      search = _parsePath3.search;

  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
  return match && match[1];
};

var extractPath = function extractPath(string) {
  var match = string.match(/^(https?:)?\/\/[^\/]*/);
  return match == null ? string : string.substring(match[0].length);
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';
   true ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : undefined;
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';
  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  if (location == null || typeof location === 'string') return location;
  var basename = location.basename,
      pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = (basename || '') + pathname;
  if (search && search !== '?') path += search;
  if (hash) path += hash;
  return path;
};

/***/ }),

/***/ "./node_modules/history/lib/createHistory.js":
/*!***************************************************!*\
  !*** ./node_modules/history/lib/createHistory.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/history/lib/AsyncUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _runTransitionHook = __webpack_require__(/*! ./runTransitionHook */ "./node_modules/history/lib/runTransitionHook.js");

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createHistory = function createHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getCurrentLocation = options.getCurrentLocation,
      getUserConfirmation = options.getUserConfirmation,
      pushLocation = options.pushLocation,
      replaceLocation = options.replaceLocation,
      go = options.go,
      keyLength = options.keyLength;
  var currentLocation = void 0;
  var pendingLocation = void 0;
  var beforeListeners = [];
  var listeners = [];
  var allKeys = [];

  var getCurrentIndex = function getCurrentIndex() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);
    if (currentLocation) return allKeys.indexOf(currentLocation.key);
    return -1;
  };

  var updateLocation = function updateLocation(nextLocation) {
    var currentIndex = getCurrentIndex();
    currentLocation = nextLocation;

    if (currentLocation.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
    } else if (currentLocation.action === _Actions.REPLACE) {
      allKeys[currentIndex] = currentLocation.key;
    }

    listeners.forEach(function (listener) {
      return listener(currentLocation);
    });
  };

  var listenBefore = function listenBefore(listener) {
    beforeListeners.push(listener);
    return function () {
      return beforeListeners = beforeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var listen = function listen(listener) {
    listeners.push(listener);
    return function () {
      return listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
        return result != null ? done(result) : next();
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          return callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  };

  var transitionTo = function transitionTo(nextLocation) {
    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

    pendingLocation = nextLocation;
    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

      pendingLocation = null;

      if (ok) {
        // Treat PUSH to same path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = (0, _PathUtils.createPath)(currentLocation);
          var nextPath = (0, _PathUtils.createPath)(nextLocation);
          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (nextLocation.action === _Actions.POP) {
          updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.PUSH) {
          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.REPLACE) {
          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
        }
      } else if (currentLocation && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(currentLocation.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);
        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
      }
    });
  };

  var push = function push(input) {
    return transitionTo(createLocation(input, _Actions.PUSH));
  };

  var replace = function replace(input) {
    return transitionTo(createLocation(input, _Actions.REPLACE));
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength || 6);
  };

  var createHref = function createHref(location) {
    return (0, _PathUtils.createPath)(location);
  };

  var createLocation = function createLocation(location, action) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : createKey();
    return (0, _LocationUtils.createLocation)(location, action, key);
  };

  return {
    getCurrentLocation: getCurrentLocation,
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: _PathUtils.createPath,
    createHref: createHref,
    createLocation: createLocation
  };
};

exports.default = createHistory;

/***/ }),

/***/ "./node_modules/history/lib/createMemoryHistory.js":
/*!*********************************************************!*\
  !*** ./node_modules/history/lib/createMemoryHistory.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
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

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _createHistory = __webpack_require__(/*! ./createHistory */ "./node_modules/history/lib/createHistory.js");

var _createHistory2 = _interopRequireDefault(_createHistory);

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createStateStorage = function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
};

var createMemoryHistory = function createMemoryHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (Array.isArray(options)) {
    options = {
      entries: options
    };
  } else if (typeof options === 'string') {
    options = {
      entries: [options]
    };
  }

  var getCurrentLocation = function getCurrentLocation() {
    var entry = entries[current];
    var path = (0, _PathUtils.createPath)(entry);
    var key = void 0,
        state = void 0;

    if (entry.key) {
      key = entry.key;
      state = readState(key);
    }

    var init = (0, _PathUtils.parsePath)(path);
    return (0, _LocationUtils.createLocation)(_extends({}, init, {
      state: state
    }), undefined, key);
  };

  var canGo = function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  };

  var go = function go(n) {
    if (!n) return;

    if (!canGo(n)) {
       true ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : undefined;
      return;
    }

    current += n;
    var currentLocation = getCurrentLocation(); // Change action to POP

    history.transitionTo(_extends({}, currentLocation, {
      action: _Actions.POP
    }));
  };

  var pushLocation = function pushLocation(location) {
    current += 1;
    if (current < entries.length) entries.splice(current);
    entries.push(location);
    saveState(location.key, location.state);
  };

  var replaceLocation = function replaceLocation(location) {
    entries[current] = location;
    saveState(location.key, location.state);
  };

  var history = (0, _createHistory2.default)(_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: go
  }));
  var _options = options,
      entries = _options.entries,
      current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    return (0, _LocationUtils.createLocation)(entry);
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ?  true ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : undefined : void 0;
  }

  var storage = createStateStorage(entries);

  var saveState = function saveState(key, state) {
    return storage[key] = state;
  };

  var readState = function readState(key) {
    return storage[key];
  };

  return _extends({}, history, {
    canGo: canGo
  });
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "./node_modules/history/lib/runTransitionHook.js":
/*!*******************************************************!*\
  !*** ./node_modules/history/lib/runTransitionHook.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var runTransitionHook = function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
     true ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : undefined;
  }
};

exports.default = runTransitionHook;

/***/ }),

/***/ "./node_modules/history/lib/useBasename.js":
/*!*************************************************!*\
  !*** ./node_modules/history/lib/useBasename.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
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

var _runTransitionHook = __webpack_require__(/*! ./runTransitionHook */ "./node_modules/history/lib/runTransitionHook.js");

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var useBasename = function useBasename(createHistory) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var history = createHistory(options);
    var basename = options.basename;

    var addBasename = function addBasename(location) {
      if (!location) return location;

      if (basename && location.basename == null) {
        if (location.pathname.toLowerCase().indexOf(basename.toLowerCase()) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;
          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    };

    var prependBasename = function prependBasename(location) {
      if (!basename) return location;
      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
      var pname = object.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;
      return _extends({}, object, {
        pathname: pathname
      });
    }; // Override all read methods with basename-aware versions.


    var getCurrentLocation = function getCurrentLocation() {
      return addBasename(history.getCurrentLocation());
    };

    var listenBefore = function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
      });
    };

    var listen = function listen(listener) {
      return history.listen(function (location) {
        return listener(addBasename(location));
      });
    }; // Override all write methods with basename-aware versions.


    var push = function push(location) {
      return history.push(prependBasename(location));
    };

    var replace = function replace(location) {
      return history.replace(prependBasename(location));
    };

    var createPath = function createPath(location) {
      return history.createPath(prependBasename(location));
    };

    var createHref = function createHref(location) {
      return history.createHref(prependBasename(location));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    };

    return _extends({}, history, {
      getCurrentLocation: getCurrentLocation,
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

exports.default = useBasename;

/***/ }),

/***/ "./node_modules/history/lib/useQueries.js":
/*!************************************************!*\
  !*** ./node_modules/history/lib/useQueries.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
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

var _queryString = __webpack_require__(/*! query-string */ "query-string");

var _runTransitionHook = __webpack_require__(/*! ./runTransitionHook */ "./node_modules/history/lib/runTransitionHook.js");

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var defaultStringifyQuery = function defaultStringifyQuery(query) {
  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
};

var defaultParseQueryString = _queryString.parse;
/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */

var useQueries = function useQueries(createHistory) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var history = createHistory(options);
    var stringifyQuery = options.stringifyQuery,
        parseQueryString = options.parseQueryString;
    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;
    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    var decodeQuery = function decodeQuery(location) {
      if (!location) return location;
      if (location.query == null) location.query = parseQueryString(location.search.substring(1));
      return location;
    };

    var encodeQuery = function encodeQuery(location, query) {
      if (query == null) return location;
      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
      var queryString = stringifyQuery(query);
      var search = queryString ? '?' + queryString : '';
      return _extends({}, object, {
        search: search
      });
    }; // Override all read methods with query-aware versions.


    var getCurrentLocation = function getCurrentLocation() {
      return decodeQuery(history.getCurrentLocation());
    };

    var listenBefore = function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
      });
    };

    var listen = function listen(listener) {
      return history.listen(function (location) {
        return listener(decodeQuery(location));
      });
    }; // Override all write methods with query-aware versions.


    var push = function push(location) {
      return history.push(encodeQuery(location, location.query));
    };

    var replace = function replace(location) {
      return history.replace(encodeQuery(location, location.query));
    };

    var createPath = function createPath(location) {
      return history.createPath(encodeQuery(location, location.query));
    };

    var createHref = function createHref(location) {
      return history.createHref(encodeQuery(location, location.query));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));
      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);
      return decodeQuery(newLocation);
    };

    return _extends({}, history, {
      getCurrentLocation: getCurrentLocation,
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

exports.default = useQueries;

/***/ }),

/***/ "./node_modules/koot-redux/index.js":
/*!******************************************!*\
  !*** ./node_modules/koot-redux/index.js ***!
  \******************************************/
/*! exports provided: createReduxModuleStore, kootCreateReduxModuleStore, applyMiddleware, compose, bindActionCreators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./node_modules/koot-redux/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReduxModuleStore", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["createReduxModuleStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kootCreateReduxModuleStore", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["kootCreateReduxModuleStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"]; });



/***/ }),

/***/ "./node_modules/koot-redux/lib/action.middleware.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot-redux/lib/action.middleware.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/koot-redux/lib/utils.js");


var commitHandler = function commitHandler(next) {
  return function (action, payload) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(action)) {
      return next({
        type: action,
        payload: payload
      });
    }

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isObject"])(action) && action.type) {
      return next(action);
    }

    throw new Error("commit first argument should be string or object: {type: 'string', ...}");
  };
};
/**
 * actionMiddleware 创建函数
 *
 * @param  {Object} moduleInstance [description]
 * @return {[type]}                [description]
 */


var createActionMiddleware = function createActionMiddleware(moduleInstance) {
  /**
   * 中间件主体函数
   *
   * @param  {[type]} store [description]
   * @return {[type]}       [description]
   */
  var actionMiddleware = function actionMiddleware(api) {
    return function (next) {
      return function (action, payload) {
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(action)) {
          var getState = api.getState,
              dispatch = api.dispatch;
          var actions = moduleInstance.getActionsByAction(action);
          var promiseArray = actions.map(function (_ref) {
            var actionFn = _ref.actionFn,
                moduleState = _ref.moduleState;
            var commitAPI = {
              state: moduleState,
              rootState: getState(),
              commit: commitHandler(next),
              dispatch: dispatch
            };
            var res = actionFn(commitAPI, payload);
            return Promise.resolve(res);
          });

          if (promiseArray.length === 1) {
            return promiseArray[0];
          }

          return Promise.all(promiseArray);
        } // 直接触发reducer


        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isObject"])(action) && action.type) {
          return next(action);
        }

        throw new Error("dispatch first argument should be string or object: {type: 'string', ...}");
      };
    };
  };

  return actionMiddleware;
};

/* harmony default export */ __webpack_exports__["default"] = (createActionMiddleware);

/***/ }),

/***/ "./node_modules/koot-redux/lib/createReduxModuleStore.js":
/*!***************************************************************!*\
  !*** ./node_modules/koot-redux/lib/createReduxModuleStore.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux-module.js */ "./node_modules/koot-redux/lib/redux-module.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/koot-redux/lib/utils.js");
/* harmony import */ var _action_middleware_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.middleware.js */ "./node_modules/koot-redux/lib/action.middleware.js");




/**
 * 创建一个 redux-module-store
 *
 * @param  {[type]} module         [description]
 * @param  {[type]} preloadedState [description]
 * @param  {[type]} enhancer       [description]
 * @return {[type]}                [description]
 */

var createReduxModuleStore = function createReduxModuleStore(module, preloadedState, enhancer) {
  // 处理传入参数
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  } // 判断 module 是否为 Object


  if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isObject"])(module)) {
    throw new Error('Expected the module to be a Object.');
  } // 初始化
  // 将对应的数据模型 module 实例化为 reduxModule 对象


  var moduleInstance = new _redux_module_js__WEBPACK_IMPORTED_MODULE_1__["default"](module, 'root', preloadedState); // 拿到处理后的 rootReducer 函数

  var rootReducer = moduleInstance.createReducer();
  var actionMiddleware = Object(_action_middleware_js__WEBPACK_IMPORTED_MODULE_3__["default"])(moduleInstance);
  var reduxModuleEnhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(actionMiddleware); // 合并 enhancer 和 redux-module 集成 actionMiddleware

  if (enhancer !== undefined) {
    // compose 原有的 applyMiddleware 或者 enhancer
    // 并保证 actionMiddleware 在第一位
    enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(reduxModuleEnhancer, enhancer);
  } else {
    enhancer = reduxModuleEnhancer;
  } // 创建原生 redux store
  // createStore(reducer, [preloadedState], enhancer)


  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, preloadedState, enhancer);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (createReduxModuleStore);

/***/ }),

/***/ "./node_modules/koot-redux/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/koot-redux/lib/index.js ***!
  \**********************************************/
/*! exports provided: applyMiddleware, compose, bindActionCreators, createReduxModuleStore, kootCreateReduxModuleStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return redux__WEBPACK_IMPORTED_MODULE_0__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"]; });

/* harmony import */ var _createReduxModuleStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReduxModuleStore */ "./node_modules/koot-redux/lib/createReduxModuleStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReduxModuleStore", function() { return _createReduxModuleStore__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _kootCreateReduxModuleStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kootCreateReduxModuleStore */ "./node_modules/koot-redux/lib/kootCreateReduxModuleStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kootCreateReduxModuleStore", function() { return _kootCreateReduxModuleStore__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./node_modules/koot-redux/lib/kootCreateReduxModuleStore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koot-redux/lib/kootCreateReduxModuleStore.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return kootCreateReduxModuleStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _createReduxModuleStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createReduxModuleStore */ "./node_modules/koot-redux/lib/createReduxModuleStore.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/koot-redux/lib/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * 创建一个 redux-module-store, 并注入koot的依赖
 *
 * @param  {[type]} module         [description]
 * @param  {[type]} preloadedState [description]
 * @param  {[type]} enhancer       [description]
 * @return {[type]}                [description]
 */

function kootCreateReduxModuleStore(module, preloadedState, enhancer) {
  // 处理传入参数
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  } // 判断 module 是否为 Object


  if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isObject"])(module)) {
    throw new Error('Expected the module to be a Object.');
  }

  module.state = _objectSpread({}, module.state, {}, koot__WEBPACK_IMPORTED_MODULE_1__["reduxForCreateStore"].reducers);

  if (enhancer) {
    enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, _toConsumableArray(koot__WEBPACK_IMPORTED_MODULE_1__["reduxForCreateStore"].middlewares)), enhancer);
  }

  return Object(_createReduxModuleStore__WEBPACK_IMPORTED_MODULE_2__["default"])(module, preloadedState, enhancer);
}

/***/ }),

/***/ "./node_modules/koot-redux/lib/redux-module.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot-redux/lib/redux-module.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/koot-redux/lib/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * 模块化管理 redux
 *
 */

var ReduxModule =
/*#__PURE__*/
function () {
  function ReduxModule(module, moduleName, preloadedState) {
    _classCallCheck(this, ReduxModule);

    var state = module.state,
        reducers = module.reducers,
        actions = module.actions,
        modules = module.modules; //

    this.__module__ = module; //

    this.__moduleName = moduleName; //

    this.__reducers = reducers || {}; //

    this.__state = state || {}; //

    this.__initState = state || {}; //

    this.__actions = actions || {}; //

    this.__modules = modules || {}; //

    this.__children = {}; //

    this.__external_reducers = this.getExternalModuleReducers(this.__state);
    this.initState(preloadedState);
  }

  _createClass(ReduxModule, [{
    key: "initState",
    value: function initState(preloadedState) {
      var _this = this;

      var modules = this.__modules; // 合并preloadedState到state

      if (preloadedState) {
        Object.keys(preloadedState).forEach(function (itemKey) {
          if (!modules || !modules[itemKey]) {
            _this.__state[itemKey] = preloadedState[itemKey];
          }
        });
      } // 实例化所有子模块并存储在 __children 下
      // this.__children[key] = new ReduxModule(modules[key])


      if (Object.keys(modules).length) {
        Object.keys(modules).forEach(function (moduleName) {
          var moduleItem = modules[moduleName];
          var preloadedStateItem;

          if (preloadedState && preloadedState[moduleName]) {
            preloadedStateItem = preloadedState[moduleName];
          }

          _this.__children[moduleName] = new ReduxModule(moduleItem, moduleName, preloadedStateItem);
        });
      }
    }
    /**
     * 处理当前 state 树上定义的外部注入进来的 reducer
     *
     * @param  {[type]} obj  [description]
     * @return {[Array]}     [外部注入进来的reducer的 “特殊对象” 集合]
     */

  }, {
    key: "getExternalModuleReducers",
    value: function getExternalModuleReducers(obj) {
      var _this2 = this;

      var result = [];
      Object.keys(obj).forEach(function (key) {
        var item = obj[key];
        var path = [];

        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(item)) {
          path.push(key);
          result.push({
            path: path,
            reducer: item
          });
        }

        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isObject"])(item)) {
          var res = _this2.getExternalModuleReducers(item);

          result = result.concat(res);
        }
      });
      return result;
    }
    /**
     * [currentExternalReducerHandler description]
     *
     * @param  {[type]} moduleState [description]
     * @param  {[type]} action      [description]
     * @return {[type]}             [description]
     */

  }, {
    key: "currentExternalReducerHandler",
    value: function currentExternalReducerHandler(moduleState, action) {
      var externalReducers = this.__external_reducers;
      var finalState = moduleState || {};
      externalReducers.forEach(function (item) {
        var path = item.path,
            reducer = item.reducer;
        var currentState = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getDataByPath"])(finalState, path);
        var resultState = reducer(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(currentState) ? undefined : currentState, action);
        var resultModuleState = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["setDataByPath"])(finalState, path, resultState);
        finalState = _objectSpread({}, finalState, {}, resultModuleState);
      });
      return finalState;
    }
  }, {
    key: "getActionsByAction",
    value: function getActionsByAction(action) {
      var _this3 = this;

      var result = [];

      if (this.__actions && this.__actions[action]) {
        result.push({
          actionFn: this.__actions[action],
          moduleState: this.__state,
          moduleName: this.__moduleName
        });
      }

      var childrenModuleNames = Object.keys(this.__children);

      if (childrenModuleNames.length) {
        childrenModuleNames.forEach(function (name) {
          var res = _this3.__children[name].getActionsByAction(action);

          result = result.concat(res);
        });
      }

      return result;
    }
    /**
     * 当前类 reducer 的创建函数
     *
     * 函数内为当前 module 的局部 state
     * 形式如下：
     *  ( moduleState, action ) => ( newModuleState )
     *
     * @return {[type]} [description]
     */

  }, {
    key: "createReducer",
    value: function createReducer() {
      var _this4 = this;

      return function () {
        var moduleState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.__initState;
        var action = arguments.length > 1 ? arguments[1] : undefined;
        var type = action.type,
            payload = action.payload;
        var reducerHandler = _this4.__reducers[type];
        var finalState;

        if (reducerHandler) {
          // 执行当前 module 的 reducer
          var moduleStateResult = reducerHandler(moduleState, payload);
          finalState = _objectSpread({}, moduleStateResult);
          _this4.__state = finalState;
        } else {
          // 把 action 和对应的 state 传给 子元素的 reducer
          var childrenModuleNames = Object.keys(_this4.__children);

          if (childrenModuleNames.length) {
            var childrenFinalState;
            childrenModuleNames.forEach(function (childrenModuleName) {
              var childrenModuleItem = _this4.__children[childrenModuleName]; // 执行所有模块的 reducer

              var result = childrenModuleItem.createReducer()(moduleState[childrenModuleName], action);

              if (result !== moduleState[childrenModuleName]) {
                if (!childrenFinalState) {
                  childrenFinalState = {};
                }

                childrenFinalState[childrenModuleName] = result;
              }
            });
            finalState = _objectSpread({}, moduleState, {}, childrenFinalState);
          }
        } // 执行当前 module 里引入的外部 reducer
        // 不论执行结果如何都合并入 finalState


        if (_this4.__external_reducers && _this4.__external_reducers.length > 0) {
          var externalStateResult = _this4.currentExternalReducerHandler(_this4.__state, action);

          finalState = _objectSpread({}, finalState, {}, externalStateResult);
          _this4.__state = _objectSpread({}, _this4.__state, {}, externalStateResult);
        }

        return finalState || moduleState;
      };
    }
  }]);

  return ReduxModule;
}();

/* harmony default export */ __webpack_exports__["default"] = (ReduxModule);

/***/ }),

/***/ "./node_modules/koot-redux/lib/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/koot-redux/lib/utils.js ***!
  \**********************************************/
/*! exports provided: typeOf, isObject, isString, isFunction, getDataByPath, setDataByPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return typeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataByPath", function() { return getDataByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataByPath", function() { return setDataByPath; });
var typeOf = function typeOf(data) {
  return Object.prototype.toString.call(data);
};
/**
 * 判断数据是否为对象类型
 *
 * @param  {[type]} _data [description]
 * @return {[type]}       [description]
 */

var isObject = function isObject(data) {
  return typeOf(data) === '[object Object]';
};
/**
 * 判断数据是否为字符串类型
 *
 * @param  {[type]} _data [description]
 * @return {[type]}       [description]
 */

var isString = function isString(data) {
  return typeOf(data) === '[object String]';
};
/**
 * 判断数据是否为function
 *
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */

var isFunction = function isFunction(data) {
  return typeOf(data) === '[object Function]';
};
/**
 * [getDataByPath description]
 * @param  {[type]} obj  [description]
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */

function getDataByPath(obj, path) {
  var result = Object.assign({}, obj);

  for (var index = 0; index < path.length; index++) {
    var p = path[index];
    result = result[p];

    if (!result) {
      return result;
    }
  }

  return result;
}
/**
 * [setDataByPath description]
 * @param {[type]} obj   [description]
 * @param {[type]} path  [description]
 * @param {[type]} value [description]
 */

function setDataByPath(obj, path, value) {
  var result = Object.assign({}, obj);
  var reference = result;

  for (var index = 0; index < path.length; index++) {
    var p = path[index];

    if (index === path.length - 1) {
      reference[p] = value;
    } else {
      reference = reference[p];
    }

    if (!reference) {
      return undefined;
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/koot/React/client-session-store.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/React/client-session-store.js ***!
  \*********************************************************/
/*! exports provided: save, addEventHandlerOnPageUnload, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventHandlerOnPageUnload", function() { return addEventHandlerOnPageUnload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./node_modules/koot/index.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_filter_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/filter-state */ "./node_modules/koot/libs/filter-state.js");
/* harmony import */ var _libs_filter_state__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_libs_filter_state__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var configSessionStore = JSON.parse("false");
/** @type {Boolean} 当前是否可以/允许使用 sessionStore */

var able = function () {
  if (true) return false;
  if (!window.sessionStorage) return false;
  if (!configSessionStore) return false;
  if (configSessionStore === true) return true;
  if (configSessionStore === 'all') return true;
  return Boolean(_typeof(configSessionStore) === 'object' && !Array.isArray(configSessionStore));
}();
/**
 * 保存当前 state 到 sessionStorage
 * @void
 */


var save = function save() {
  if (!able) return;
  /** @type {Object} 排除掉黑名单内的项目后的 state 对象 */

  var state = _libs_filter_state__WEBPACK_IMPORTED_MODULE_4___default()(___WEBPACK_IMPORTED_MODULE_2__["store"].getState());
  var saveState = {};

  if (configSessionStore === true || configSessionStore === 'all') {
    saveState = state;
  } else if (_typeof(configSessionStore) === 'object' && !Array.isArray(configSessionStore)) {
    // 根据配置对象存储
    var parse = function parse(obj) {
      var accumulatedKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      Object.keys(obj).forEach(function (key) {
        var currentAccumulatedKey = accumulatedKey + "[".concat(JSON.stringify(key), "]");

        if (_typeof(obj[key]) === 'object') {
          parse(obj[key], currentAccumulatedKey);
        } else if (obj[key] === true) {
          var value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(state, currentAccumulatedKey);
          if (typeof value !== 'undefined') lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(saveState, currentAccumulatedKey, value);
        }
      });
    };

    parse(configSessionStore); // console.log(configSessionStore, state, saveState);
  }

  sessionStorage.setItem(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__["sessionStoreKey"], JSON.stringify(saveState));
  return;
};
/**
 * 向 window.onunload 添加事件：保存 state
 * @void
 */

var addEventHandlerOnPageUnload = function addEventHandlerOnPageUnload() {
  if (!able) return;
  window.addEventListener('unload', save);
  return;
};
/**
 * 从 sessionStorage 中读取 state
 * @returns {Object} 存储的 state
 */

var load = function load() {
  if (!able) return {};
  return JSON.parse(sessionStorage.getItem(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__["sessionStoreKey"]) || '{}');
};

/***/ }),

/***/ "./node_modules/koot/React/client-update-page-info.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/client-update-page-info.js ***!
  \************************************************************/
/*! exports provided: default, getInjectedMetaTags, markInited */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedMetaTags", function() { return getInjectedMetaTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markInited", function() { return markInited; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @typedef Pageinfo
 * @type {Object}
 * @property {string} [title] 标题
 * @property {Array<Object.<string, string>>} [metas] meta 标签信息，需要形式为 `{[name]: value}` 对象的数组
 */
// import isEqual from 'lodash/isEqual';

/**
 * 当前已注入的 meta 标签
 * @type {Array<HTMLElement>}
 */
var injectedMetaTags; // meta 标签区域结尾的 HTML 注释代码

var nodeCommentEnd;
var inited = false;
/** @type {Pageinfo} */

var infoToChange = {
  title: '',
  metas: []
};
var changeTimeout = undefined;
/**
 * _仅限客户端_
 *
 * 更新页面信息
 * @module
 * @param {string} title 新的标题
 * @param {Array<Object.<string, string>>} metas meta 标签信息，需要形式为 `{[name]: value}` 对象的数组
 */

/* harmony default export */ __webpack_exports__["default"] = (function (title) {
  var metas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (true) return;

  if ( true && !inited) {
    setTimeout(function () {
      inited = true;
    });
    return;
  } // 判断 & 追加即将修改的内容

  /*
  // 如果新 meta 不存在于已有的 meta 列表，添加
  metas.forEach(metaNew => {
      if (!infoToChange.metas.length) infoToChange.metas.push(metaNew);
      if (
          !infoToChange.metas.every(metaExist => {
              console.log(metaNew, metaExist, isEqual(metaNew, metaExist));
              return isEqual(metaNew, metaExist);
          })
      ) {
          console.log('PUSH');
          infoToChange.metas.push(metaNew);
      }
  });
  */
  // 如果当前没有信息，设为当前信息


  if (!infoToChange.title && (!Array.isArray(infoToChange.metas) || !infoToChange.metas.length)) {
    infoToChange.title = title;
    infoToChange.metas = metas;
  }

  if (changeTimeout) return;
  changeTimeout = setTimeout(function () {
    doUpdate();
    infoToChange.title = '';
    infoToChange.metas = [];
    changeTimeout = undefined;
  });
}); //

var doUpdate = function doUpdate() {
  var title = infoToChange.title,
      metas = infoToChange.metas; // 替换页面标题

  document.title = title; // 替换 metas

  var head = document.getElementsByTagName('head')[0];
  getInjectedMetaTags().forEach(function (el) {
    return head.removeChild(el);
  });
  injectedMetaTags.forEach(function (el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  });
  injectedMetaTags = metas.filter(function (meta) {
    return _typeof(meta) === 'object';
  }).map(function (meta) {
    var el = document.createElement('meta');

    for (var key in meta) {
      el.setAttribute(key, meta[key]);
    } // el.setAttribute(__KOOT_INJECT_ATTRIBUTE_NAME__, '')


    if (nodeCommentEnd) {
      head.insertBefore(el, nodeCommentEnd);
    } else {
      head.appendChild(el);
    }

    return el;
  });
}; //

/**
 * 获取当前已注入的 meta 标签
 * @returns {Array<HTMLElement>}
 */


var getInjectedMetaTags = function getInjectedMetaTags() {
  if (!Array.isArray(injectedMetaTags)) {
    var head = document.getElementsByTagName('head')[0];
    injectedMetaTags = []; // 移除所有在 KOOT_METAS 里的 meta 标签
    // 采用 DOM 操作的初衷：如果使用 innerHTML 的字符串替换方法，浏览器可能会全局重新渲染一次，造成“闪屏”

    var childNodes = head.childNodes;
    var meetStart = false;
    var meetEnd = false;
    var i = 0;

    while (!meetEnd && childNodes[i] instanceof Node) {
      var node = childNodes[i];

      if (node.nodeType === Node.COMMENT_NODE) {
        if (node.nodeValue === "koot-inject-metas-start") meetStart = true;

        if (node.nodeValue === "koot-inject-metas-end") {
          meetEnd = true;
          nodeCommentEnd = node;
        }
      } else if (meetStart && node.nodeType === Node.ELEMENT_NODE && node.tagName === 'META') {
        injectedMetaTags.push(node);
      }

      i++;
    }
  }

  return injectedMetaTags;
};
/** _仅针对客户端_ 标记已初始化 */

var markInited = function markInited() {
  inited = true;
};

/***/ }),

/***/ "./node_modules/koot/React/component-extender.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/React/component-extender.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./node_modules/koot/index.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _get_render_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-render-props */ "./node_modules/koot/React/get-render-props.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./node_modules/koot/React/styles.js");
/* harmony import */ var _client_update_page_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-update-page-info */ "./node_modules/koot/React/client-update-page-info.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_is_render_safe__WEBPACK_IMPORTED_MODULE_9__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global __KOOT_SSR__:false */

 // import { hot } from 'react-hot-loader'
// import PropTypes from 'prop-types'



 //





 //
// 是否已挂载了组件

var everMounted = false; // const defaultPageInfo = {
//     title: '',
//     metas: []
// }

var styleMap = {};
/**
 * @type {Number}
 * _开发环境_
 * _服务器_
 * 使用该高阶组件的次数
 */

var devSSRConnectIndex = 0;
/**
 * 获取数据
 * @callback callbackFetchData
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @param {Function} dispatch Redux dispatch
 * @returns {Promise}
 */

/**
 * 判断数据是否准备好
 * @callback callbackCheckLoaded
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @returns {boolean}
 */

/**
 * 获取页面信息
 * @callback callbackGetPageInfo
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @returns {Object}
 */

/**
 * 获取同构数据的执行方法
 * @param {Object} store
 * @param {Object} props renderProps
 * @returns {Promise}
 */

var doFetchData = function doFetchData(store, renderProps, dataFetch) {
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return new Promise(function (resolve) {
    return resolve(result);
  });
  var result = dataFetch(store.getState(), renderProps, store.dispatch); // if (result === true) {
  //     isDataPreloaded = true
  //     return new Promise(resolve => resolve())
  // }

  if (Array.isArray(result)) return Promise.all(result);
  if (result instanceof Promise) return result;
  return new Promise(function (resolve) {
    return resolve(result);
  });
};
/**
 * 更新页面信息
 * @param {Object} store
 * @param {Object} props renderProps
 * @returns {Object} infos
 * @returns {String} infos.title
 * @returns {Array} infos.metas
 */


var doPageinfo = function doPageinfo(store, props, pageinfo) {
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return {};
  var defaultPageInfo = {
    title: '',
    metas: []
  };
  if (typeof pageinfo !== 'function' && _typeof(pageinfo) !== 'object') return defaultPageInfo;
  var state = store.getState();

  var infos = function () {
    if (_typeof(pageinfo) === 'object') return pageinfo;
    var infos = pageinfo(state, props);
    if (_typeof(infos) !== 'object') return defaultPageInfo;
    return infos;
  }();

  var _infos$title = infos.title,
      title = _infos$title === void 0 ? defaultPageInfo.title : _infos$title,
      _infos$metas = infos.metas,
      metas = _infos$metas === void 0 ? defaultPageInfo.metas : _infos$metas;

  if (state.localeId) {
    if (!metas.some(function (meta) {
      if (meta.name === 'koot-locale-id') {
        meta.content = state.localeId;
        return true;
      }

      return false;
    })) {
      metas.push({
        name: 'koot-locale-id',
        content: state.localeId
      });
    }
  }

  return {
    title: title,
    metas: metas
  };
}; // console.log((typeof store === 'undefined' ? `\x1b[31m×\x1b[0m` : `\x1b[32m√\x1b[0m`) + ' store in [HOC] extend')

/**
 * 高阶组件/组件装饰器：组件扩展
 * @param {Object} options 选项
 * @param {boolean|Function} [options.connect] react-redux 的 connect() 的参数。如果为 true，表示使用 connect()，但不连接任何数据
 * @param {Object|callbackGetPageInfo} [options.pageinfo]
 * @param {Object} [options.data] 同构数据相关
 * @param {callbackFetchData} [options.data.fetch]
 * @param {callbackCheckLoaded} [options.data.check]
 * @param {Object} [options.styles] 组件 CSS 结果
 * @returns {Function} 封装好的 React 组件
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (WrappedComponent) {
    // console.log((typeof store === 'undefined' ? `\x1b[31m×\x1b[0m` : `\x1b[32m√\x1b[0m`) + ' store in [HOC] extend run')
    var _options$connect = options.connect,
        _connect = _options$connect === void 0 ? false : _options$connect,
        pageinfo = options.pageinfo,
        _options$data = options.data;

    _options$data = _options$data === void 0 ? {} : _options$data;
    var _dataFetch = _options$data.fetch,
        dataCheck = _options$data.check,
        dataResetWhenUnmount = _options$data.resetWhenUnmount,
        _styles = options.styles,
        _options$ssr = options.ssr,
        ssr = _options$ssr === void 0 ? true : _options$ssr; // console.log('extend hoc run', { name, LocaleId })
    // 样式相关

    /** @type {Object} 经过 koot-css-loader 处理后的 css 文件的结果对象 */

    var styles = (!Array.isArray(_styles) ? [_styles] : _styles).filter(function (obj) {
      return _typeof(obj) === 'object' && typeof obj.wrapper === 'string';
    });
    /** @type {boolean} 是否有上述结果对象 */

    var hasStyles = Array.isArray(styles) && styles.length > 0; // console.log({ ttt, hasStyles, styles })

    /** @type {boolean} 是否有 pageinfo 对象 */

    var hasPageinfo = typeof pageinfo === 'function' || _typeof(pageinfo) === 'object'; // 同构数据相关

    /** @type {boolean} 同构数据是否已经获取成功 */
    // let isDataPreloaded = false

    /** @type {Function} 获取同构数据 */

    var dataFetch = typeof options.data === 'function' || Array.isArray(options.data) ? options.data : typeof _dataFetch === 'function' || Array.isArray(_dataFetch) ? _dataFetch : undefined; // 装饰组件

    var KootReactComponent =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(KootReactComponent, _React$Component);

      _createClass(KootReactComponent, [{
        key: "clientUpdatePageInfo",
        //
        // static contextType = StyleMapContext
        //
        value: function clientUpdatePageInfo(to) {
          if (true) return;
          if (!hasPageinfo) return;

          var _ref = typeof to === 'function' ? doPageinfo(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), to) : to || doPageinfo(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), pageinfo),
              title = _ref.title,
              metas = _ref.metas;

          Object(_client_update_page_info__WEBPACK_IMPORTED_MODULE_7__["default"])(title, metas);
        } //

      }]);

      //
      function KootReactComponent(props
      /*, context*/
      ) {
        var _this;

        _classCallCheck(this, KootReactComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(KootReactComponent).call(this, props
        /*, context*/
        ));
        /**
         * _服务器端_
         * 将组件注册到同构渲染对象中
         */

        _defineProperty(_assertThisInitialized(_this), "state", {
          loaded: typeof dataCheck === 'function' ? dataCheck(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])().getState(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(_this.props)) : undefined
        });

        _defineProperty(_assertThisInitialized(_this), "mounted", false);

        _defineProperty(_assertThisInitialized(_this), "kootClassNames", []);

        if (true) {
          var SSR =  false ? undefined : __KOOT_SSR__;

          if (SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__["needConnectComponents"]]) {
            if (false) {}

            var _SSR$connectedCompone = SSR.connectedComponents,
                connectedComponents = _SSR$connectedCompone === void 0 ? [] : _SSR$connectedCompone;
            connectedComponents.unshift(KootComponent);
          }
        }

        if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return _possibleConstructorReturn(_this);

        if (hasStyles) {
          _this.kootClassNames = styles.map(function (obj) {
            return obj.wrapper;
          });
          Object(_styles__WEBPACK_IMPORTED_MODULE_6__["append"])(_this.getStyleMap(), styles); // console.log('----------')
          // console.log('styles', styles)
          // console.log('theStyles', theStyles)
          // console.log('this.classNameWrapper', this.classNameWrapper)
          // console.log('----------')
        }

        return _this;
      }
      /**
       * 获取 styleMap
       * - 服务器端: 返回全局常量中的对照表
       * - 客户端: 直接返回本文件内的 styleMap
       */


      _createClass(KootReactComponent, [{
        key: "getStyleMap",
        value: function getStyleMap()
        /*context*/
        {
          // console.log('extend', { LocaleId })
          if (true) {
            if (false) {}
            if ((typeof __KOOT_SSR__ === "undefined" ? "undefined" : _typeof(__KOOT_SSR__)) === 'object') return __KOOT_SSR__.styleMap;
          }

          return styleMap; // return context
        } //

      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          // if (
          //     typeof prevProps.location === 'object' &&
          //     typeof this.props.location === 'object' &&
          //     prevProps.location.pathname !== this.props.location.pathname
          // )
          this.clientUpdatePageInfo();
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.mounted = true;

          if (!this.state.loaded && typeof dataFetch !== 'undefined') {
            doFetchData(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), dataFetch).then(function () {
              if (!_this2.mounted) return;

              _this2.setState({
                loaded: true
              });
            });
          }

          this.clientUpdatePageInfo();

          if (hasPageinfo && this.mounted) {
            setTimeout(function () {
              if (_this2 && _this2.mounted) {
                _this2.clientUpdatePageInfo();
              }
            }, 500);
          }

          if (everMounted) {} else {
            everMounted = true;
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this3 = this;

          this.mounted = false;

          if (hasStyles) {
            Object(_styles__WEBPACK_IMPORTED_MODULE_6__["remove"])(this.getStyleMap(), styles);
          }

          if (_typeof(dataResetWhenUnmount) === 'object') {
            setTimeout(function () {
              _this3.props.dispatch({
                type: _redux__WEBPACK_IMPORTED_MODULE_8__["RESET_CERTAIN_STATE"],
                data: dataResetWhenUnmount
              });
            });
          }
        } //

      }, {
        key: "render",
        value: function render() {
          // console.log('styles', styles)
          // console.log('this', this)
          // console.log('this.kootClassNames', this.kootClassNames)
          // console.log('this.props.className', this.props.className)
          if (true) {
            if (ssr === false) return null;
            if (ssr !== true) return ssr;
          }

          if (false) {}

          var props = Object.assign({}, this.props, {
            className: this.kootClassNames.concat(this.props.className).join(' ').trim(),
            'data-class-name': this.kootClassNames.join(' ').trim()
          });
          if (hasPageinfo) props.updatePageinfo = this.clientUpdatePageInfo.bind(this); // if (__SERVER__) console.log('extender this.state.loaded', this.state.loaded)

          if (typeof dataFetch !== 'undefined' && typeof dataCheck === 'function') props.loaded = this.state.loaded;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
        }
      }]);

      return KootReactComponent;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

    _defineProperty(KootReactComponent, "onServerRenderHtmlExtend", function (_ref3) {
      var store = _ref3.store,
          _ref3$renderProps = _ref3.renderProps,
          renderProps = _ref3$renderProps === void 0 ? {} : _ref3$renderProps;

      var _doPageinfo = doPageinfo(store, Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromServerProps"])(renderProps), pageinfo),
          title = _doPageinfo.title,
          metas = _doPageinfo.metas;

      return {
        title: title,
        metas: metas
      };
    });

    if (typeof dataFetch !== 'undefined') {
      KootReactComponent.onServerRenderStoreExtend = function (_ref2) {
        var store = _ref2.store,
            renderProps = _ref2.renderProps;
        if (typeof dataFetch === 'undefined') return new Promise(function (resolve) {
          return resolve();
        }); // console.log('onServerRenderStoreExtend')

        return doFetchData(store, Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromServerProps"])(renderProps), dataFetch);
      };
    } // if (_hot && __DEV__ && __CLIENT__) {
    //     const { hot, setConfig } = require('react-hot-loader')
    //     setConfig({ logLevel: 'debug' })
    //     KootComponent = hot(module)(KootComponent)
    // }
    // console.log(WrappedComponent);


    var KootComponent = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(KootReactComponent, WrappedComponent); // if (typeof styles === 'object' &&
    //     typeof styles.wrapper === 'string'
    // ) {
    //     KootComponent = ImportStyle(styles)(KootComponent)
    // }

    if (_connect === true) {
      KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function () {
        return {};
      })(KootComponent);
    } else if (typeof _connect === 'function') {
      KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_connect)(KootComponent);
    } else if (Array.isArray(_connect)) {
      KootComponent = react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"].apply(void 0, _toConsumableArray(_connect))(KootComponent);
    }

    return KootComponent;
  };
});

/***/ }),

/***/ "./node_modules/koot/React/get-render-props.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot/React/get-render-props.js ***!
  \*****************************************************/
/*! exports provided: fromServerProps, fromComponentProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromServerProps", function() { return fromServerProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromComponentProps", function() { return fromComponentProps; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 基于 serverProps 返回同构 props
 * @param {Object} serverProps 
 * @return {Object}
 */
var fromServerProps = function fromServerProps() {
  var serverProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // console.log(' ')
  // console.log('----------')
  // console.log(serverProps)
  // console.log('----------')
  // console.log(' ')
  return _objectSpread({}, serverProps);
};
/**
 * 基于组件 props 返回同构 props
 * @param {Object} componentProps 
 * @return {Object}
 */


var fromComponentProps = function fromComponentProps() {
  var componentProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // console.log(' ')
  // console.log('----------')
  // console.log(componentProps)
  // console.log('----------')
  // console.log(' ')
  return _objectSpread({}, componentProps);
};



/***/ }),

/***/ "./node_modules/koot/React/history.js":
/*!********************************************!*\
  !*** ./node_modules/koot/React/history.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __KOOT_CLIENT_REQUIRE_CREATE_HISTORY__ */ "./node_modules/history/lib/createMemoryHistory.js");
/* harmony import */ var _KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history/lib/PathUtils */ "./node_modules/history/lib/PathUtils.js");
/* harmony import */ var history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import history from "__KOOT_CLIENT_REQUIRE_HISTORY__"



/**
 * History Enhancer: use basename
 * 
 * Original useBasename enhancer from history also override all read methods
 * `getCurrentLocation` `listenBefore` `listen`
 * But as Diablohu tested, when read methods overrided, if the route matched used async method to get component, would fail
 * that rendering blank page and no route match event fired
 * So we only overrid write methods here. And modify the first level path in routes object to `:localeId`
 * 
 * @param {Function} createHistory
 * @returns {Object} History
 */

var kootUseBasename = function kootUseBasename(createHistory) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var history = createHistory(options);
    var basename = options.basename;

    var addBasename = function addBasename(location) {
      if (!location) return location;

      if (basename && location.basename == null) {
        if (location.pathname.toLowerCase().indexOf(basename.toLowerCase()) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;
          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    };

    var prependBasename = function prependBasename(location) {
      if (!basename) return location;
      var object = typeof location === 'string' ? Object(history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__["parsePath"])(location) : location;
      var pname = object.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : "".concat(basename, "/");
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;
      return _objectSpread({}, object, {
        pathname: pathname
      });
    }; // Override all write methods with basename-aware versions.


    var push = function push(location) {
      return history.push(prependBasename(location));
    };

    var replace = function replace(location) {
      return history.replace(prependBasename(location));
    };

    var createPath = function createPath(location) {
      return history.createPath(prependBasename(location));
    };

    var createHref = function createHref(location) {
      return history.createHref(prependBasename(location));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    };

    return _objectSpread({}, history, {
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

var historyClient;

var history = function () {
  if (false) { var historyConfig, initialState; }

  if (true) {
    return undefined;
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (history);

/***/ }),

/***/ "./node_modules/koot/React/inject/_cache-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/React/inject/_cache-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * inject 缓存键值
 */
module.exports = {
  styles: 'STYLES',
  scriptsRunFirst: 'SCRIPTS_RUN_FIRST',
  scriptsInBody: 'SCRIPTS_IN_BODY',
  uriServiceWorker: 'URI_SERVICE_WORKER'
};

/***/ }),

/***/ "./node_modules/koot/React/inject/htmlLang.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/inject/htmlLang.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 注入: html 标签上的 lang 属性
 * @param {String} localeId 当前语种 ID
 * @returns {String}
 */
module.exports = function (localeId) {
  return localeId ? " lang=\"".concat(localeId, "\"") : '';
};

/***/ }),

/***/ "./node_modules/koot/React/inject/is-need-inject-critical.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koot/React/inject/is-need-inject-critical.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 检查 template 是否需要自动添加针对 critical 的注入
 * @param {String} template
 * @returns {Object}
 */
module.exports = function () {
  var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    styles: !/(content|pathname)\(['"]critical\.css['"]\)/.test(template),
    scripts: !/(content|pathname)\(['"]critical\.js['"]\)/.test(template)
  };
};

/***/ }),

/***/ "./node_modules/koot/React/inject/metas.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/React/inject/metas.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var _require = __webpack_require__(/*! ../../defaults/dev-request-uri */ "./node_modules/koot/defaults/dev-request-uri.js"),
    dll = _require.dll;
/**
 * 注入: meta 标签 HTML 代码
 * @param {Object} options
 * @param {String} [options.metaHtml]
 * @param {String} [options.localeId]
 * @param {Object} [options.compilation]
 * @returns {String}
 */


module.exports = function (_ref) {
  var _ref$metaHtml = _ref.metaHtml,
      metaHtml = _ref$metaHtml === void 0 ? '' : _ref$metaHtml;
  var r = getDevExtra();

  if (false) { var _require2, _KOOT_INJECT_METAS_START__, _KOOT_INJECT_METAS_END__; } else {
    r += "<!--".concat("koot-inject-metas-start", "-->").concat(metaHtml, "<!--").concat("koot-inject-metas-end", "-->");
  }

  return r;
};
/**
 * [开发环境] 额外内容
 */


var getDevExtra = function getDevExtra() {
  if (true) return ''; // 判断是否存在 dll 文件，如果存在，在此引入

  var fileDllClient = process.env.KOOT_DEV_DLL_FILE_CLIENT;
  if (fileDllClient && fs.existsSync(fileDllClient)) return "<script type=\"text/javascript\" src=\"".concat(dll, "\"></script>");
  return '';
};

/***/ }),

/***/ "./node_modules/koot/React/inject/scripts.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/React/inject/scripts.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var _require = __webpack_require__(/*! ../../defaults/before-build */ "./node_modules/koot/defaults/before-build.js"),
    chunkNameClientRunFirst = _require.chunkNameClientRunFirst,
    scriptTagEntryAttributeName = _require.scriptTagEntryAttributeName,
    thresholdScriptRunFirst = _require.thresholdScriptRunFirst;

var defaultEntrypoints = __webpack_require__(/*! ../../defaults/entrypoints */ "./node_modules/koot/defaults/entrypoints.js");

var readClientFile = __webpack_require__(/*! ../../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

var getClientFilePath = __webpack_require__(/*! ../../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");

var getSSRStateString = __webpack_require__(/*! ../../libs/get-ssr-state-string */ "./node_modules/koot/libs/get-ssr-state-string.js");

var _require2 = __webpack_require__(/*! ./_cache-keys */ "./node_modules/koot/React/inject/_cache-keys.js"),
    scriptsRunFirst = _require2.scriptsRunFirst,
    scriptsInBody = _require2.scriptsInBody,
    uriServiceWorker = _require2.uriServiceWorker;
/**
 * 注入: JavaScript 代码
 * @param {Object} options
 * @param {Boolean} [options.needInjectCritical]
 * @param {Object} [options.injectCache]
 * @param {Object} [options.entrypoints]
 * @param {String} [options.localeId]
 * @param {String} [options.reduxHtml]
 * @param {Object} [options.compilation]
 * @param {Object} [options.SSRState]
 * @returns {String}
 */


module.exports = function (_ref) {
  var needInjectCritical = _ref.needInjectCritical,
      injectCache = _ref.injectCache,
      entrypoints = _ref.entrypoints,
      localeId = _ref.localeId,
      reduxHtml = _ref.reduxHtml,
      _ref$SSRState = _ref.SSRState,
      SSRState = _ref$SSRState === void 0 ? {} : _ref$SSRState,
      compilation = _ref.compilation;
  var ENV = "prod";
  var isDev = Boolean(ENV === 'dev' ||  true && false); // const isProd = !isDev;

  if (isDev || typeof injectCache[scriptsRunFirst] === 'undefined') {
    var filename = "".concat(chunkNameClientRunFirst, ".js");
    var name = '*run-first';

    if (isDev) {
      injectCache[scriptsRunFirst] = combineFilePaths(name, filename, localeId);
    } else {
      var content = scriptTagsFromContent(name, filename, localeId, compilation);

      if (content.length > thresholdScriptRunFirst) {
        injectCache[scriptsRunFirst] = combineFilePaths(name, filename, localeId);
      } else {
        injectCache[scriptsRunFirst] = content;
      }
    }
  }

  if (isDev || typeof injectCache[scriptsInBody] === 'undefined') {
    var r = ''; // 入口: critical

    if (needInjectCritical && Array.isArray(entrypoints.critical)) {
      r += entrypoints.critical.filter(function (file) {
        return path.extname(file) === '.js';
      }).map(function (file) {
        if (isDev) {
          // return `<script type="text/javascript" src="${getClientFilePath(true, file)}"></script>`;
          return combineFilePaths('critical', true, file);
        }

        return scriptTagsFromContent('critical', true, file);
      }).join('');
    } // 其他默认入口
    // console.log('defaultEntrypoints', defaultEntrypoints)
    // console.log('entrypoints', entrypoints)


    defaultEntrypoints.forEach(function (key) {
      if (Array.isArray(entrypoints[key])) {
        r += entrypoints[key].filter(function (file) {
          return /\.(js|jsx|mjs|ejs)$/.test(file);
        }).map(function (file) {
          // console.log(file)
          // if (isDev)
          // return `<script type="text/javascript" src="${getClientFilePath(true, file)}" defer></script>`
          // return `<script type="text/javascript" src="${getClientFilePath(
          //     true,
          //     file
          // )}" defer></script>`;
          return combineFilePaths(key, true, file);
        }).join('');
      }
    }); // 如果设置了 PWA 自动注册 Service-Worker，在此注册

    var pwaAuto =  true ? JSON.parse("true") : undefined; // console.log({
    //     pwaAuto,
    //     'injectCache[uriServiceWorker]': injectCache[uriServiceWorker]
    // });

    if (pwaAuto && ( false || typeof injectCache[uriServiceWorker] === 'string')) {
      r += "<script id=\"__koot-pwa-register-sw\" type=\"text/javascript\">"; // if (isProd) {

      r += "if ('serviceWorker' in navigator) {" + "window.addEventListener('load', function() {" + // + `navigator.serviceWorker.register("${injectCache[uriServiceWorker]}?koot=${process.env.KOOT_VERSION}",`
      "navigator.serviceWorker.register(\"".concat(injectCache[uriServiceWorker] || JSON.parse("\"/service-worker.js\""), "?koot=0.12\",") + "{scope: '/'}" + ")" + ".catch(err => {console.log('\uD83D\uDC69\u200D\uD83D\uDCBB Service Worker SUPPORTED. ERROR', err)})" + "});" + "}else{console.log('\uD83D\uDC69\u200D\uD83D\uDCBB Service Worker not supported!')}"; // } else if (isDev) {
      //     r += `console.log('👩‍💻 No Service Worker for DEV mode.')`;
      // }

      r += "</script>";
    }

    injectCache[scriptsInBody] = r;
  }

  return "<script type=\"text/javascript\">" + (reduxHtml ? reduxHtml : "window.__REDUX_STATE__ = {};") + "window.__KOOT_LOCALEID__ = \"".concat(SSRState.localeId || '', "\";") + "window.__KOOT_SSR_STATE__ = ".concat(getSSRStateString(SSRState), ";") + "</script>" + // getClientRunFirstJS(localeId, compilation) +
  injectCache[scriptsRunFirst] + injectCache[scriptsInBody];
};
/**
 * 返回引用地址的 script 标签
 * 如果有多个结果，会返回包含多个标签的 HTML 结果
 * @param {string} name 入口名/标识符
 * @param {...any} args `utils/get-client-file-path` 对应的参数
 * @returns {String} 整合的 HTML 结果
 */


var combineFilePaths = function combineFilePaths(name) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var pathnames = getClientFilePath.apply(void 0, args);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];
  return pathnames.map(function (pathname) {
    return "<script type=\"text/javascript\" src=\"".concat(pathname, "\" defer ").concat(scriptTagEntryAttributeName, "=\"").concat(name, "\"></script>");
  }).join('');
};
/**
 * 返回 script 标签，标签内容为源代码字符串
 * 如果有多个结果，会返回包含多个标签的 HTML 结果
 * @param {string} name 入口名/标识符
 * @param {...any} args `utils/read-client-file` 对应的参数
 * @returns {String} 整合的 HTML 结果
 */


var scriptTagsFromContent = function scriptTagsFromContent(name) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return "<script type=\"text/javascript\" ".concat(scriptTagEntryAttributeName, "=\"").concat(name, "\">").concat(readClientFile.apply(void 0, args), "</script>");
};

/***/ }),

/***/ "./node_modules/koot/React/inject/styles.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/React/inject/styles.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../../defaults/before-build */ "./node_modules/koot/defaults/before-build.js"),
    chunkNameExtractCss = _require.chunkNameExtractCss,
    chunkNameExtractCssForImport = _require.chunkNameExtractCssForImport,
    styleTagGlobalAttributeName = _require.styleTagGlobalAttributeName,
    thresholdStylesExtracted = _require.thresholdStylesExtracted;

var readClientFile = __webpack_require__(/*! ../../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

var getClientFilePath = __webpack_require__(/*! ../../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");

var _require2 = __webpack_require__(/*! ./_cache-keys */ "./node_modules/koot/React/inject/_cache-keys.js"),
    styles = _require2.styles;
/**
 * 注入: CSS 代码
 * @param {Object} options
 * @param {Boolean} [options.needInjectCritical]
 * @param {Object} [options.injectCache]
 * @param {String} [options.stylesHtml]
 * @param {String} [options.localeId]
 * @param {Object} [options.filemap]
 * @param {String} [options.compilation]
 * @returns {String}
 */


module.exports = function (_ref) {
  var injectCache = _ref.injectCache,
      stylesHtml = _ref.stylesHtml,
      localeId = _ref.localeId,
      compilation = _ref.compilation;

  if (typeof injectCache[styles] === 'undefined') {
    injectCache[styles] = getExtracted(localeId, compilation);

    if (false) {}
  } // if (needInjectCritical && typeof filemap['critical.css'] === 'string') {
  //     injectCache.styles += getCritical()
  // }


  return (injectCache[styles] || '') + stylesHtml;
}; // const getCritical = () => {
//     if (process.env.WEBPACK_BUILD_ENV === 'dev') {
//         return `<link id="__koot-critical-styles" media="all" rel="stylesheet" href="${getClientFilePath('critical.css')}" />`
//     }
//     return `<style id="__koot-critical-styles" type="text/css">${readClientFile('critical.css')}</style>`
// }


var getExtracted = function getExtracted(localeId, compilation) {
  var filename = "".concat(chunkNameExtractCss, ".css");

  if (false) {}

  var content = readClientFile(filename, localeId, compilation); // 如果内容大于 50k

  if (content.length > thresholdStylesExtracted) {
    if (false) {} else {
      return combineFilePaths(filename, localeId);
    } // return `<link id="__koot-extracted-styles" media="all" rel="stylesheet" href="${
    //     process.env.WEBPACK_BUILD_TYPE === 'spa'
    //         ? getClientFilePath(
    //               `${chunkNameExtractCssForImport}.css`,
    //               localeId
    //           )
    //         : getClientFilePath(filename, localeId)
    // }" />`;

  }

  return "<style id=\"__koot-extracted-styles\" type=\"text/css\" ".concat(styleTagGlobalAttributeName, ">").concat(content, "</style>");
}; // const functionNameLinkOnLoad = '__KOOT_GLOBAL_STYLE_ON_LOAD__';

/**
 * 返回 link 标签
 * 如果有多个结果，会返回包含多个标签的 HTML 结果
 * @param {...any} args `utils/get-client-file-path` 对应的参数
 * @returns {String} 整合的 HTML 结果
 */


var combineFilePaths = function combineFilePaths() {
  var pathnames = getClientFilePath.apply(void 0, arguments);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];
  return pathnames.map(function (pathname) {
    return "<link id=\"__koot-extracted-styles\" media=\"all\" rel=\"stylesheet\" href=\"".concat(pathname, "\" ").concat(styleTagGlobalAttributeName, " />");
  }).join('');
};

/***/ }),

/***/ "./node_modules/koot/React/is-render-safe.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/React/is-render-safe.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global __KOOT_SSR__:false */
var _require = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js"),
    needConnectComponents = _require.needConnectComponents;
/**
 * 当前执行和渲染有关的操作是否安全
 * - 客户端: 永远安全
 * - 服务器端: SSR `dataToStore` 之前不安全，之后安全
 * @returns {boolean}
 */


module.exports = function () {
  if (true) {
    var SSR =  false ? undefined : __KOOT_SSR__;
    if (SSR[needConnectComponents]) return false;
    return true;
  }

  return true;
};

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actionType.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actionType.js ***!
  \*****************************************************************/
/*! exports provided: LOCATION_UPDATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_UPDATE", function() { return LOCATION_UPDATE; });
var LOCATION_UPDATE = '@@KOOT@@LOCATION_UPDATE';

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actions.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actions.js ***!
  \**************************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");

function update(location) {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"],
    location: location
  };
}

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/api.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/api.js ***!
  \**********************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions.js */ "./node_modules/koot/React/realtime-location/actions.js");

var update = function update(location) {
  return function (dispatch) {
    return dispatch(_actions_js__WEBPACK_IMPORTED_MODULE_0__["update"](location));
  };
};

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/index.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/index.js ***!
  \************************************************************/
/*! exports provided: LOCATION_UPDATE, reducer, update, REALTIME_LOCATION_REDUCER_NAME, actionUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REALTIME_LOCATION_REDUCER_NAME", function() { return REALTIME_LOCATION_REDUCER_NAME; });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCATION_UPDATE", function() { return _actionType__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"]; });

/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/koot/React/realtime-location/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/koot/React/realtime-location/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["update"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/koot/React/realtime-location/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionUpdate", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["update"]; });





var REALTIME_LOCATION_REDUCER_NAME = 'realtimeLocation';


/***/ }),

/***/ "./node_modules/koot/React/realtime-location/reducer.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/reducer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType.js */ "./node_modules/koot/React/realtime-location/actionType.js");

var initialState = {};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionType_js__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"]:
      return action.location;
  }

  return state;
});

/***/ }),

/***/ "./node_modules/koot/React/redux.js":
/*!******************************************!*\
  !*** ./node_modules/koot/React/redux.js ***!
  \******************************************/
/*! exports provided: RESET_CERTAIN_STATE, reducers, initialState, middlewares, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CERTAIN_STATE", function() { return RESET_CERTAIN_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middlewares", function() { return middlewares; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _realtime_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime-location */ "./node_modules/koot/React/realtime-location/index.js");
/* harmony import */ var _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReactApp/server/redux */ "./node_modules/koot/ReactApp/server/redux.js");
/* harmony import */ var _i18n_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n/redux */ "./node_modules/koot/i18n/redux/index.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./history */ "./node_modules/koot/React/history.js");
/* harmony import */ var _client_session_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-session-store */ "./node_modules/koot/React/client-session-store.js");
var _reducers;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import history from "__KOOT_CLIENT_REQUIRE_HISTORY__"


 // const getHistory = () => {
//     if (__SPA__) {
//         return require('react-router/lib/hashHistory')
//     }
//     return require('react-router/lib/browserHistory')
// }

/******************************************************************************
 * ┌─┐┌─┐┌┐┌┌─┐┌┬┐┌─┐┌┐┌┌┬┐┌─┐
 * │  │ ││││└─┐ │ ├─┤│││ │ └─┐
 * └─┘└─┘┘└┘└─┘ ┴ ┴ ┴┘└┘ ┴ └─┘
 *****************************************************************************/

var RESET_CERTAIN_STATE = '@@KOOT@@RESET_CERTAIN_STATE';
/******************************************************************************
 * ┌─┐┌─┐┌─┐┌─┐┌┐┌┌┬┐┬┌─┐┬  ┌─┐
 * ├┤ └─┐└─┐├┤ │││ │ │├─┤│  └─┐
 * └─┘└─┘└─┘└─┘┘└┘ ┴ ┴┴ ┴┴─┘└─┘
 *****************************************************************************/

/**
 * @type {Array}
 */

var reducers = (_reducers = {
  // 路由状态扩展
  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerReducer"]
}, _defineProperty(_reducers, _realtime_location__WEBPACK_IMPORTED_MODULE_4__["REALTIME_LOCATION_REDUCER_NAME"], _realtime_location__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _defineProperty(_reducers, _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__["SERVER_REDUCER_NAME"], _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__["serverReducer"]), _reducers);

if (_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default()()) {
  reducers.localeId = _i18n_redux__WEBPACK_IMPORTED_MODULE_6__["reducerLocaleId"]; // reducers.locales = i18nReducerLocales
}
/**
 * @type {Object}
 */


var initialState = function () {
  if (false) {}
  if (true) return {};
}();
/**
 * @type {Array}
 */

var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, Object(react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(_history__WEBPACK_IMPORTED_MODULE_8__["default"])]; // const enhancerClientModifyState = createStore => (
//     reducer,
//     preloadedState,
//     enhancer
// ) => {
//     const store = createStore(reducer, preloadedState, enhancer);
//     console.log({ store, state: store.getState() });
//     return store;
// };
// const rootReducerClientResetCertainState = (state, action) => {
//     const reset = (data, prefix = '') => {
//         for (const [key, value] of Object.entries(data)) {
//             const newKey = prefix ? `${prefix}.${key}` : key;
//             if (
//                 typeof value === 'object' &&
//                 typeof state[key] === 'object' &&
//                 !Array.isArray(state[key])
//             ) {
//                 return reset(value, newKey);
//             } else if (value === true) {
//                 console.log(newKey);
//             }
//         }
//     };
//     if (
//         __CLIENT__ &&
//         action.type === RESET_CERTAIN_STATE &&
//         typeof action.data === 'object'
//     ) {
//         reset(action.data);
//     }
// };

/**
 * 创建 redux store
 * - _注_: 与 redux 提供的 `createStore` 方法略有不同，仅需提供项目所用的 reducer 对象和中间件列表，**不需要**初始 state 对象
 * @param {Object|Function} appReducers 项目使用的 reducer，可为 `ReducersMapObject` (形式为 Object 的列表)，也可以为 `Reducer` (reducer 函数)
 * @param {Function[]} appMiddlewares 项目的中间件列表
 * @param {Function[]} appEnhancers 项目的 store 增强函数 (enhancer) 列表
 * @returns {Object} redux store
 */

var createStore = function createStore(appReducer) {
  var appMiddlewares = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var appEnhancers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  // const toCompose = [
  //     reduxApplyMiddleware(...middlewares.concat(appMiddlewares))
  // ];
  // if (__CLIENT__) toCompose.push(enhancerClientModifyState);
  var projectReducer = function () {
    if (typeof appReducer === 'function') {
      var kootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_objectSpread({}, reducers));
      return function (state, action) {
        var _sliceStateForReducer = sliceStateForReducers(state),
            appState = _sliceStateForReducer.appState,
            kootState = _sliceStateForReducer.kootState;

        return _objectSpread({}, appReducer(appState, action), {}, kootReducer(kootState, action));
      };
    } else if (_typeof(appReducer) === 'object' && !Array.isArray(appReducer)) {
      return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_objectSpread({}, appReducer, {}, reducers));
    }

    return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_objectSpread({}, reducers));
  }();

  if (!Array.isArray(appEnhancers) && appEnhancers) appEnhancers = [appEnhancers];else if (!appEnhancers) appEnhancers = [];
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(projectReducer, initialState, redux__WEBPACK_IMPORTED_MODULE_1__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, _toConsumableArray(middlewares.concat(appMiddlewares)))].concat(_toConsumableArray(appEnhancers))));
};
/******************************************************************************
 * ┬ ┬┌─┐┬  ┌─┐┌─┐┬─┐┌─┐
 * ├─┤├┤ │  ├─┘├┤ ├┬┘└─┐
 * ┴ ┴└─┘┴─┘┴  └─┘┴└─└─┘
 *****************************************************************************/

/**
 * 将当前 state 拆分为 _appState_ 和 _kootState_
 * @param {Object} state
 * @returns {Object} { appState, kootState }
 */

var sliceStateForReducers = function sliceStateForReducers(state) {
  var appState = {};
  var kootState = {};
  var keysForKootReducer = Object.keys(reducers);
  Object.keys(state).forEach(function (key) {
    if (keysForKootReducer.includes(key)) {
      kootState[key] = state[key];
    } else {
      appState[key] = state[key];
    }
  });
  return {
    appState: appState,
    kootState: kootState
  };
};

/***/ }),

/***/ "./node_modules/koot/React/redux/reset-store.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/React/redux/reset-store.js ***!
  \******************************************************/
/*! exports provided: defaultKeysToPreserve, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultKeysToPreserve", function() { return defaultKeysToPreserve; });
/**
 * 重置 store，清空所有 state
 * @param {Object} store
 * @param {string[]} [keysToPreserve]
 */
var resetStore = function resetStore(store) {
  var keysToPreserve = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultKeysToPreserve;
  var state = store.getState();
  Object.keys(state).filter(function (key) {
    return !keysToPreserve.includes(key);
  }).forEach(function (key) {
    state[key] = undefined;
    delete state[key];
  }); // 触发所有 reducer 的初始化

  store.dispatch({
    type: '@@KOOT@@STATE_RESET_REDUCER_INIT'
  });
  return store;
};
/** @type {Array} 需要保留（不需要进行删除操作）的 redux store state 属性名 */


var defaultKeysToPreserve = ['localeId', 'locales' // 'server'
];
/* harmony default export */ __webpack_exports__["default"] = (resetStore);

/***/ }),

/***/ "./node_modules/koot/React/render-template.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/render-template.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ejs = __webpack_require__(/*! ejs */ "ejs");

var readClientFile = __webpack_require__(/*! ../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

var getClientFilePath = __webpack_require__(/*! ../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");
/**
 * 渲染 ejs 模板
 * @param {Object} options
 * @param {String} options.template ejs 模板内容
 * @param {Object} [options.inject={}] 注入对象
 * @param {Object} [options.state] 当前 Redux state。也可以传入 Redux store
 * @param {Object} [options.compilation] webpack compilation
 * @returns {String}
 */


module.exports = function (_ref) {
  var _ref$template = _ref.template,
      template = _ref$template === void 0 ? DEFAULT_TEMPLATE : _ref$template,
      _ref$inject = _ref.inject,
      inject = _ref$inject === void 0 ? {} : _ref$inject,
      store = _ref.store,
      state = _ref.state,
      compilation = _ref.compilation,
      ctx = _ref.ctx;
  if (_typeof(state) !== 'object' && _typeof(store) === 'object' && typeof store.getState === 'function') state = store.getState();else if (_typeof(state) === 'object' && typeof state.getState === 'function') state = state.getState();

  try {
    for (var key in inject) {
      if (typeof inject[key] === 'function') inject[key] = inject[key](template, state, ctx);
    }
  } catch (e) {
    console.log(e);
  } // 开发环境: 将 content('critical.js') 转为 pathname() 方式


  if (false) {} // console.log(template)

  var localeId = _typeof(state) === 'object' ? state.localeId : undefined;
  return ejs.render(template, {
    inject: inject,
    content: function content(filename) {
      return readClientFile(filename, localeId, compilation);
    },
    pathname: function pathname(filename) {
      return getClientFilePath(filename, localeId);
    }
  }, {});
};

var DEFAULT_TEMPLATE = "<!DOCTYPE html>\n<html>\n\n<head<%- inject.htmlLang %>>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\">\n\n    <title><%= inject.title %></title>\n\n    <base target=\"_self\">\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"format-detection\" content=\"telephone=no,email=no,address=no\">\n    <meta name=\"format-detection\" content=\"email=no\">\n    <meta name=\"format-detection\" content=\"address=no\">\n    <meta name=\"format-detection\" content=\"telephone=no\">\n    <meta name=\"HandheldFriendly\" content=\"true\">\n    <meta name=\"mobile-web-app-capable\" content=\"yes\">\n\n    <link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\">\n\n    <!-- IE/Edge/Multi-engine -->\n    <meta name=\"renderer\" content=\"webkit\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n\n    <!-- iOS Safari -->\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">\n\n    <!-- Customize -->\n    <meta name=\"theme-color\" content=\"#0092f5\" />\n\n    <%- inject.metas %>\n    <%- inject.styles %>\n</head>\n\n<body class=\"koot-system\">\n    <div id=\"root\"><%- inject.react %></div>\n    <script type=\"text/javascript\"><%- content('critical.js') %></script>\n    <%- inject.scripts %>\n</body>\n\n</html>";

/***/ }),

/***/ "./node_modules/koot/React/route-check.js":
/*!************************************************!*\
  !*** ./node_modules/koot/React/route-check.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 检查下一个路由状态和当前客户端的 location 是否一致。多用于针对基于路由代码拆分的当前路由检测。
 * @param {Object} nextState `react-router` 传入的下一个路由状态对象
 * @param {Boolean} [isAlwaysTrue=false] 是否默认为 `true`
 * @returns {Boolean}
 */
module.exports = function (nextState, isAlwaysTrue) {
  if (isAlwaysTrue || typeof location === 'undefined' || true || false) return true;
  var next = nextState.location.pathname;
  var curr = location.pathname;
  if (next.substr(0, 1) !== '/') next = '/' + next;
  if (curr.substr(0, 1) !== '/') curr = '/' + curr;
  return Boolean(next === curr);
};

/***/ }),

/***/ "./node_modules/koot/React/styles.js":
/*!*******************************************!*\
  !*** ./node_modules/koot/React/styles.js ***!
  \*******************************************/
/*! exports provided: checkAndWriteIntoHead, append, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAndWriteIntoHead", function() { return checkAndWriteIntoHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// import React from 'react'

/**
 * 生成 StyleMapContext
 */
// export const createStyleMapContext = () => {
//     return React.createContext({})
// }
// export let StyleMapContext = createStyleMapContext()

/**
 * 将样式表写入到 head 标签内
 * @param {Object} styleMap
 */
var checkAndWriteIntoHead = function checkAndWriteIntoHead() {
  var styleMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (_typeof(styleMap) !== 'object') return;
  Object.keys(styleMap).forEach(function (wrapper) {
    var style = styleMap[wrapper];
    var el = document.querySelector("style[".concat("data-koot-module", "=").concat(wrapper, "]"));

    if (style.count > 0) {
      // 配置样式
      if (!el && style.css !== '') {
        var styleTag = document.createElement('style');
        styleTag.innerHTML = style.css; // styleTag.setAttribute('id', wrapper);

        styleTag.setAttribute("data-koot-module", wrapper);
        document.getElementsByTagName('head')[0].appendChild(styleTag);
      }
    } else {
      // 移除样式
      if (el) {
        el.remove();
      }
    }
  });
}; // const getStyleMap = (passedMap) => {
//     if (__CLIENT__)
//         return passedMap
//     if (typeof __KOOT_SSR__ === 'object') {
//         // console.log({ LocaleId })
//         return __KOOT_SSR__.styleMap.get(LocaleId)
//     }
//     return passedMap
// }

/**
 * 追加样式
 * @param {Object} styleMap
 * @param {Object|Array} style
 */

var append = function append() {
  var styleMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var style = arguments.length > 1 ? arguments[1] : undefined;
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(function (theStyle) {
    return append(styleMap, theStyle);
  });
  if (_typeof(style) !== 'object') return;

  if (!styleMap[style.wrapper]) {
    styleMap[style.wrapper] = {
      css: style.css,
      count: 1
    };
  } else {
    styleMap[style.wrapper].count++;
  }

  if (false) {}
};
/**
 * 移除样式
 * @param {Object} styleMap
 * @param {*} style
 */

var remove = function remove() {
  var styleMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var style = arguments.length > 1 ? arguments[1] : undefined;
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(function (theStyle) {
    return remove(theStyle);
  });
  if (_typeof(style) !== 'object') return;

  if (styleMap[style.wrapper]) {
    styleMap[style.wrapper].count--;
  }
}; // export const idDivStylesContainer = '__KOOT_ISOMORPHIC_STYLES_CONTAINER__'
// /**
//  * 分析 HTML 代码，解析已有样式表，将其从 HTML 代码中移除，并返回可以直接写入到 head 标签内的样式表代码
//  * @param {String} html
//  * @returns {String} htmlStyles
//  */
// export const parseHtmlForStyles = (html) => {
//     const matches = html.match(new RegExp(`<div id="${idDivStylesContainer}">(.*?)</div>`, 'm'))
//     if (
//         !matches ||
//         typeof matches !== 'object' ||
//         typeof matches.index === 'undefined' ||
//         typeof matches[1] === 'undefined'
//     )
//         return {
//             html,
//             htmlStyles: ''
//         }
//     return {
//         html: html.substr(0, matches.index),
//         htmlStyles: matches[1]
//     }
// }
// /**
//  * React 组件: 样式表内容容器
//  */
// export class StylesContainer extends React.Component {
//     static contextType = StyleMapContext
//     render() {
//         return (
//             <div
//                 id={idDivStylesContainer}
//                 dangerouslySetInnerHTML={{
//                     __html: Object.keys(this.context)
//                         .filter(id => !!this.context[id].css)
//                         .map(id => `<style id="${id}">${this.context[id].css}</style>`)
//                         .join('')
//                 }}
//             />
//         )
//     }
// }

/***/ }),

/***/ "./node_modules/koot/React/validate-inject.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/validate-inject.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var injectHtmlLang = __webpack_require__(/*! ./inject/htmlLang */ "./node_modules/koot/React/inject/htmlLang.js");

var injectMetas = __webpack_require__(/*! ./inject/metas */ "./node_modules/koot/React/inject/metas.js");

var injectStyles = __webpack_require__(/*! ./inject/styles */ "./node_modules/koot/React/inject/styles.js");

var injectScripts = __webpack_require__(/*! ./inject/scripts */ "./node_modules/koot/React/inject/scripts.js");
/**
 * 生成 ejs 使用的模板替换对象
 * @param {Object} options 当前设置
 * @param {Object} [options.injectCache={}] 静态注入对象/当前语言的静态注入缓存对象
 * @param {Object} [options.filemap={}] (当前语言的) 文件名对应表
 * @param {Object} [options.entrypoints={}] (当前语言的) 入口表
 * @param {String} [localeId] 当前语种 ID
 * @param {String} [title] 页面标题
 * @param {String} [metaHtml] meta 标签 HTML 代码
 * @param {String} [reactHtml] 已处理完毕的 React 同构结果 HTML 代码
 * @param {String} [stylesHtml] 已处理完毕的样式结果 HTML 代码
 * @param {String} [reduxHtml] 已处理完毕的 redux store 结果 HTML 代码
 * @param {Object} [SSRState] SSR 状态对象
 * @param {Object} [needInjectCritical] 是否需要自动注入 critical 内容
 * @param {Boolean} [needInjectCritical.styles=false]
 * @param {Boolean} [needInjectCritical.scripts=false]
 * @returns {Object}
 */


module.exports = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$injectCache = options.injectCache,
      injectCache = _options$injectCache === void 0 ? {} : _options$injectCache,
      _options$filemap = options.filemap,
      filemap = _options$filemap === void 0 ? {} : _options$filemap,
      _options$entrypoints = options.entrypoints,
      entrypoints = _options$entrypoints === void 0 ? {} : _options$entrypoints,
      compilation = options.compilation,
      localeId = options.localeId,
      title = options.title,
      metaHtml = options.metaHtml,
      reactHtml = options.reactHtml,
      stylesHtml = options.stylesHtml,
      reduxHtml = options.reduxHtml,
      SSRState = options.SSRState,
      _options$needInjectCr = options.needInjectCritical,
      needInjectCritical = _options$needInjectCr === void 0 ? {
    styles: false,
    scripts: false
  } : _options$needInjectCr;
  return {
    htmlLang: injectHtmlLang(localeId),
    title: title,
    metas: injectMetas({
      metaHtml: metaHtml,
      localeId: localeId,
      compilation: compilation
    }),
    styles: injectStyles({
      needInjectCritical: needInjectCritical.styles,
      injectCache: injectCache,
      filemap: filemap,
      stylesHtml: stylesHtml,
      localeId: localeId,
      compilation: compilation
    }),
    react: reactHtml,
    scripts: injectScripts({
      needInjectCritical: needInjectCritical.scripts,
      injectCache: injectCache,
      entrypoints: entrypoints,
      localeId: localeId,
      reduxHtml: reduxHtml,
      SSRState: SSRState,
      compilation: compilation
    })
  };
};

/***/ }),

/***/ "./node_modules/koot/React/validate/redux-config.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/React/validate/redux-config.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux */ "./node_modules/koot/React/redux.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



/**
 * 验证 Redux 配置
 * 
 * @param {Object} kootConfigRedux Koot 配置项: `redux`
 * @returns {Object} reduxConfig
 */

var validateReduxConfig = function validateReduxConfig() {
  var kootConfigRedux = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _kootConfigRedux$sync = kootConfigRedux.syncCookie,
      syncCookie = _kootConfigRedux$sync === void 0 ? true : _kootConfigRedux$sync;
  var reduxConfig = {
    syncCookie: syncCookie
  };

  if (typeof kootConfigRedux.store === 'undefined') {
    var _kootConfigRedux$comb = kootConfigRedux.combineReducers,
        theReducers = _kootConfigRedux$comb === void 0 ? {} : _kootConfigRedux$comb;
    Object.keys(_redux__WEBPACK_IMPORTED_MODULE_1__["reducers"]).forEach(function (reducerName) {
      theReducers[reducerName] = _redux__WEBPACK_IMPORTED_MODULE_1__["reducers"][reducerName];
    });

    reduxConfig.factoryStore = function () {
      return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(theReducers), _redux__WEBPACK_IMPORTED_MODULE_1__["initialState"], redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, _toConsumableArray(_redux__WEBPACK_IMPORTED_MODULE_1__["middlewares"])));
    };
  } else if (typeof kootConfigRedux.store === 'function') {
    reduxConfig.factoryStore = kootConfigRedux.store;
  } else if (_typeof(kootConfigRedux.store) === 'object') {
    reduxConfig.store = kootConfigRedux.store;
  }

  return reduxConfig;
};

/* harmony default export */ __webpack_exports__["default"] = (validateReduxConfig);

/***/ }),

/***/ "./node_modules/koot/React/validate/router-config.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/React/validate/router-config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/error-msg */ "./node_modules/koot/libs/error-msg.js");
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_validte_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../i18n/validte-routes */ "./node_modules/koot/i18n/validte-routes.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * 验证 `react-router` 配置
 * 
 * @param {Object} kootConfigRouter Koot 配置项: `router`
 * @returns {Object} 路由配置对象，可直接供 `react-router` 使用
 */

var validateRouterConfig = function validateRouterConfig(kootConfigRouter) {
  var config = typeof kootConfigRouter === 'function' ? kootConfigRouter() : kootConfigRouter;
  if (_typeof(config) !== 'object') throw new Error(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default()('VALIDATE_ROUTER_CONFIG', 'no router config or router object invalid'));

  var _ref = function () {
    if (Array.isArray(config)) {
      return {
        childRoutes: _toConsumableArray(config)
      };
    }

    return config;
  }(),
      routes = _extends({}, _ref);

  if (!routes.path) {
    routes.path = '/';
  }

  handleIndexRoute(routes);
  Object(_i18n_validte_routes__WEBPACK_IMPORTED_MODULE_1__["default"])(routes);
  return routes;
};

/* harmony default export */ __webpack_exports__["default"] = (validateRouterConfig);
/**
 * 处理默认路由
 * @param {any} route
 */

var handleIndexRoute = function handleIndexRoute(route) {
  if (route && (!route.childRoutes || !route.childRoutes.length)) {
    return;
  }

  route.childRoutes = route.childRoutes.filter(function (child) {
    // eslint-disable-line
    if (child.isIndex) {
      /* istanbul ignore next */
      if (false) {}
      /* istanbul ignore else */


      if (!route.indexRoute) {
        delete child.path; // eslint-disable-line

        route.indexRoute = child; // eslint-disable-line

        return false;
      }
    }

    return true;
  });
  route.childRoutes.forEach(handleIndexRoute);
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/action-types.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/action-types.js ***!
  \****************************************************/
/*! exports provided: CHANGE_LANGUAGE, GET_ORIGIN_URL, TELL_CLIENT_URL, SYNC_COOKIE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LANGUAGE", function() { return CHANGE_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ORIGIN_URL", function() { return GET_ORIGIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TELL_CLIENT_URL", function() { return TELL_CLIENT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_COOKIE", function() { return SYNC_COOKIE; });
var CHANGE_LANGUAGE = '@@KOOT@@CHANGE_LANGUAGE';
var GET_ORIGIN_URL = '@@KOOT@@GET_ORIGIN_URL';
var TELL_CLIENT_URL = '@@KOOT@@TELL_CLIENT_URL';
var SYNC_COOKIE = '@@KOOT@@SYNC_COOKIE';
/* harmony default export */ __webpack_exports__["default"] = ({
  CHANGE_LANGUAGE: CHANGE_LANGUAGE,
  GET_ORIGIN_URL: GET_ORIGIN_URL,
  TELL_CLIENT_URL: TELL_CLIENT_URL,
  SYNC_COOKIE: SYNC_COOKIE
});

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global __KOOT_SSR__:false */
var getSSRStateString = __webpack_require__(/*! ../../../../libs/get-ssr-state-string */ "./node_modules/koot/libs/get-ssr-state-string.js");
/** @type {String} 同步数据到 store 的静态方法名 */


var LIFECYCLE_DATA_TO_STORE = 'onServerRenderStoreExtend';
/** @type {String} 扩展 HTML 信息的静态方法名 */

var LIFECYCLE_HTML_EXTEND = 'onServerRenderHtmlExtend';
/**
 * 执行匹配到的组件的静态生命周期方法
 * @async
 * @param {Object} options
 * @param {Object} store Redux store 对象
 * @param {Object} renderProps 路由 `match` 结果中的属性对象，其内包含匹配到的组件的信息
 * @param {Object} ctx Koa context
 */

var executeComponentLifecycle = async function executeComponentLifecycle(_ref) {
  var store = _ref.store,
      renderProps = _ref.renderProps,
      ctx = _ref.ctx;

  /** @type {Array} 需要执行的异步方法 */
  var tasks = [];
  /**
   * @type {Function}
   * @async
   * 扩展 HTML 信息需要执行的方法
   * 仅执行匹配到的最深层组件对应的方法
   */

  var extendHtmlTasks = [];

  var extractDataToStoreTask = function extractDataToStoreTask(component) {
    if (!component) return;

    if (typeof component[LIFECYCLE_DATA_TO_STORE] === 'function') {
      var thisTask = component[LIFECYCLE_DATA_TO_STORE]({
        store: store,
        renderProps: renderProps,
        ctx: ctx
      }); // component[LIFECYCLE_DATA_TO_STORE] = undefined

      if (Array.isArray(thisTask)) {
        tasks = tasks.concat(thisTask);
      } else if (thisTask instanceof Promise || thisTask.then) {
        tasks.push(thisTask);
      } else if (typeof thisTask === 'function') {
        tasks.push(new Promise(async function (resolve) {
          await thisTask();
          resolve();
        }));
      }
    } else if (component.WrappedComponent) {
      extractDataToStoreTask(component.WrappedComponent);
    }
  };

  var extracHtmlExtendTask = function extracHtmlExtendTask(component) {
    if (!component) return;

    if (typeof component[LIFECYCLE_HTML_EXTEND] === 'function') {
      extendHtmlTasks.push(component[LIFECYCLE_HTML_EXTEND]); // component[LIFECYCLE_HTML_EXTEND] = undefined
    } else if (component.WrappedComponent) {
      extracHtmlExtendTask(component.WrappedComponent);
    }
  };
  /** @type {Array} 使用 extend 高阶组件的组件 */


  var connectedComponents = function () {
    var _ref2 =  false ? undefined : __KOOT_SSR__,
        _ref2$connectedCompon = _ref2.connectedComponents,
        connectedComponents = _ref2$connectedCompon === void 0 ? [] : _ref2$connectedCompon;

    if (false) { var renderPropsComponents; }

    return connectedComponents;
  }(); // console.log('\n\n==========');
  // console.log({ connectedComponents });
  // console.log({ connectedComponents, renderProps });
  // console.log('==========\n\n');
  // 添加各项任务


  connectedComponents.forEach(function (component) {
    extractDataToStoreTask(component);
    extracHtmlExtendTask(component);
  }); // 旧代码
  // for (const component of renderProps.components) {
  //     /**
  //      * @type {Component}
  //      * 当前组件
  //      * component.WrappedComponent 是 redux 装饰的外壳
  //      */
  //     // const thisComponent = component && component.WrappedComponent ? component.WrappedComponent : component
  //     // extractDataToStoreTask(component)
  // }
  // 等待所有异步方法执行完毕

  await Promise.all(tasks); // 扩展 HTML 相关信息

  var result = {
    title: "Koot Clinic" || false,
    metaHtml: '',
    reduxHtml: "window.__REDUX_STATE__ = ".concat(getSSRStateString(store.getState()), ";")
  };
  extendHtmlTasks.some(function (task) {
    if (typeof task === 'function') {
      var _task = task({
        store: store,
        renderProps: renderProps,
        ctx: ctx
      }),
          thisTitle = _task.title,
          thisMetas = _task.metas;

      var hasTitle = !!thisTitle;
      var hasMeta = Array.isArray(thisMetas) && thisMetas.length;
      if (hasTitle) result.title = thisTitle;
      if (hasMeta) result.metaHtml = thisMetas.map(function (meta) {
        return '<meta' + Object.keys(meta).map(function (key) {
          return " ".concat(key, "=\"").concat(meta[key], "\"");
        }).join('') + '>';
      }).join('');
      if (hasTitle || hasMeta) return true;
    }

    return false;
  });
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (executeComponentLifecycle);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js":
/*!********************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _React_redux_reset_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../React/redux/reset-store */ "./node_modules/koot/React/redux/reset-store.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * 通过 redux 配置，初始化并获取 redux store 对象
 *
 * - 若提供产生 store 的方法 (`factoryStore`): 生成 store
 * - 若提供自生成的 store (`store`): 尝试清空 state 并触发一次所有 reducer 的初始化
 *
 * 每次访问请求时，需要生成全新的干净的 redux store，不可复用
 *
 * @param {Object} reduxConfig Redux，以下内容选其一
 * @param {Function} [reduxConfig.factoryStore] 生成 Redux Store 的方法
 * @param {Object} [reduxConfig.store] Redux Store 对象
 * @returns {Object} store
 */

var initStore = function initStore() {
  var reduxConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = reduxConfig.store,
      factoryStore = reduxConfig.factoryStore;

  if (typeof factoryStore === 'function') {
    return factoryStore();
  }

  if (_typeof(store) === 'object') {
    return Object(_React_redux_reset_store__WEBPACK_IMPORTED_MODULE_0__["default"])(store);
  }

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (initStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_0__);


var afterDataToStore = async function afterDataToStore(_ref) {
  var store = _ref.store,
      ctx = _ref.ctx,
      localeId = _ref.localeId,
      callback = _ref.callback;
  if (false) {}
  if (typeof callback === 'function') await callback({
    ctx: ctx,
    store: store,
    localeId: localeId
  });
};

/* harmony default export */ __webpack_exports__["default"] = (afterDataToStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_0__);


var beforeDataToStore = async function beforeDataToStore(_ref) {
  var ctx = _ref.ctx,
      store = _ref.store,
      localeId = _ref.localeId,
      callback = _ref.callback;
  if (false) {}
  if (false) {}
  if (typeof callback === 'function') await callback({
    ctx: ctx,
    store: store,
    localeId: localeId
  });
};

/* harmony default export */ __webpack_exports__["default"] = (beforeDataToStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_0__);


var beforePreRender = async function beforePreRender(_ref) {
  var ctx = _ref.ctx,
      store = _ref.store,
      localeId = _ref.localeId,
      callback = _ref.callback;
  if (false) {}
  if (typeof callback === 'function') await callback({
    ctx: ctx,
    store: store,
    localeId: localeId
  });
};

/* harmony default export */ __webpack_exports__["default"] = (beforePreRender);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony import */ var _i18n_server_use_router_redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../i18n/server/use-router-redirect */ "./node_modules/koot/i18n/server/use-router-redirect.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_2__);
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import isI18nEnabled from '../../../../../i18n/is-enabled'



var beforeRouterMatch = async function beforeRouterMatch(_ref) {
  var store = _ref.store,
      ctx = _ref.ctx,
      syncCookie = _ref.syncCookie,
      callback = _ref.callback;
  // 如果 i18n URL 使用 router 方式同时判定需要跳转，此时进行处理
  var needRedirect = Object(_i18n_server_use_router_redirect__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx);
  if (needRedirect) return needRedirect; // 告诉前端，当前的url是啥

  store.dispatch({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["TELL_CLIENT_URL"],
    data: ctx.originTrue
  }); // 把http请求带来的cookie同步到ssr的初始化redux state里
  // server.cookie 获取
  // 配置信息在koot.config.js里
  // redux.syncCookie = ['token', 'sid'] | 'token' | false

  if (syncCookie) {
    var cookies = syncCookie;

    if (cookies === true) {
      store.dispatch({
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"],
        data: ctx.headers.cookie || ''
      });
    } else {
      var data = {};

      if (cookies === 'all') {
        var theCookies = ctx.headers.cookie || '';
        theCookies.split(';').forEach(function (str) {
          var crumbs = str.split('=');

          if (crumbs.length > 1) {
            var _crumbs = _toArray(crumbs),
                key = _crumbs[0],
                values = _crumbs.slice(1);

            data[key.trim()] = values.join('=').trim();
          }
        });
      } else {
        if (typeof cookies === 'string') cookies = [cookies];

        if (Array.isArray(cookies)) {
          // 获取需要的cookie值
          cookies.forEach(function (c) {
            data[c] = ctx.cookies.get(c);
          });
        }
      } // 同步到state中


      store.dispatch({
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"],
        data: data
      });
    } // console.log({
    //     syncCookie,
    //     cookies: ctx.headers.cookie,
    //     server: store.getState().server
    // });

  }

  if (false) {}
  if (typeof callback === 'function') await callback({
    store: store,
    ctx: ctx
  });
};

/* harmony default export */ __webpack_exports__["default"] = (beforeRouterMatch);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/redux.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/redux.js ***!
  \****************************************************/
/*! exports provided: CHANGE_LANGUAGE, TELL_CLIENT_URL, SYNC_COOKIE, SERVER_REDUCER_NAME, serverReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_REDUCER_NAME", function() { return SERVER_REDUCER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverReducer", function() { return serverReducer; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LANGUAGE", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LANGUAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TELL_CLIENT_URL", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["TELL_CLIENT_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SYNC_COOKIE", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"]; });

// TODO: change to one action type , like: CHANGE_BASE_INFO


var SERVER_REDUCER_NAME = 'server';
var serverReducer = function serverReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lang: 'en',
    origin: ''
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LANGUAGE"]:
      return Object.assign({}, state, {
        lang: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["TELL_CLIENT_URL"]:
      return Object.assign({}, state, {
        origin: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"]:
      return Object.assign({}, state, {
        cookie: action.data
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/root-isomorphic.jsx":
/*!***************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/root-isomorphic.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router/lib/RouterContext */ "./node_modules/react-router/lib/RouterContext.js");
/* harmony import */ var react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* global
    __KOOT_SSR__:false
*/


 // import { idDivStylesContainer, StyleMapContext } from '../../React/styles'

var Root = function Root(_ref) {
  var store = _ref.store,
      props = _objectWithoutProperties(_ref, ["store"]);

  // console.log('Root', {
  //     'in __KOOT_SSR__': __KOOT_SSR__.LocaleId
  // })
  // console.log('Root render Store', typeof Store === 'undefined' ? undefined : Store)
  return (// <StyleMapContext.Provider value={{}}>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2___default.a, props)) // <StylesContainer />
    // </StyleMapContext.Provider>

  );
};

/* harmony default export */ __webpack_exports__["default"] = (Root);
/**
 * React 组件: 样式表内容容器
 */
// const StylesContainer = () =>
//     <div
//         id={idDivStylesContainer}
//         dangerouslySetInnerHTML={{
//             __html: Object.keys(__KOOT_SSR__.styleMap)
//                 .filter(id => !!__KOOT_SSR__.styleMap[id].css)
//                 .map(id => `<style id="${id}">${__KOOT_SSR__.styleMap[id].css}</style>`)
//                 .join('')
//         }}
//     />
// let e = Root
// if (__DEV__) {
//     const { hot, setConfig } = require('react-hot-loader')
//     setConfig({ logLevel: 'debug' })
//     e = hot(module)(Root)
// }
// export default e

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/ssr.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/ssr.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_lib_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router/lib/match */ "./node_modules/react-router/lib/match.js");
/* harmony import */ var react_router_lib_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_lib_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router/lib/useRouterHistory */ "./node_modules/react-router/lib/useRouterHistory.js");
/* harmony import */ var react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history/lib/createMemoryHistory */ "./node_modules/history/lib/createMemoryHistory.js");
/* harmony import */ var history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __KOOT_PROJECT_CONFIG_FULL_PATHNAME__ */ "./logs/tmp/config/full.1577169530377.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ */ "./node_modules/koot/index.js");
/* harmony import */ var _root_isomorphic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./root-isomorphic */ "./node_modules/koot/ReactApp/server/root-isomorphic.jsx");
/* harmony import */ var _defaults_webpack_dev_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../defaults/webpack-dev-server */ "./node_modules/koot/defaults/webpack-dev-server.js");
/* harmony import */ var _defaults_webpack_dev_server__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_defaults_webpack_dev_server__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony import */ var _React_validate_router_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../React/validate/router-config */ "./node_modules/koot/React/validate/router-config.js");
/* harmony import */ var _React_validate_inject__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../React/validate-inject */ "./node_modules/koot/React/validate-inject.js");
/* harmony import */ var _React_validate_inject__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_React_validate_inject__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _React_validate_redux_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../React/validate/redux-config */ "./node_modules/koot/React/validate/redux-config.js");
/* harmony import */ var _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../React/inject/is-need-inject-critical */ "./node_modules/koot/React/inject/is-need-inject-critical.js");
/* harmony import */ var _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _React_render_template__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../React/render-template */ "./node_modules/koot/React/render-template.js");
/* harmony import */ var _React_render_template__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_React_render_template__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _React_redux_reset_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../React/redux/reset-store */ "./node_modules/koot/React/redux/reset-store.js");
/* harmony import */ var _React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../React/inject/_cache-keys */ "./node_modules/koot/React/inject/_cache-keys.js");
/* harmony import */ var _React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_router_match__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-router-match */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_pre_render__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-pre-render */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_data_to_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-data-to-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_after_data_to_store__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/after-data-to-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js");
/* harmony import */ var _middlewares_isomorphic_execute_components_lifecycle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./middlewares/isomorphic/execute-components-lifecycle */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js");
/* harmony import */ var _middlewares_isomorphic_init_store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./middlewares/isomorphic/init-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js");
/* harmony import */ var _i18n_onServerRender__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../i18n/onServerRender */ "./node_modules/koot/i18n/onServerRender/index.js");
/* harmony import */ var _i18n_server_generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../i18n/server/generate-html-redirect-metas */ "./node_modules/koot/i18n/server/generate-html-redirect-metas.js");
/* harmony import */ var _i18n_server_get_ssr_state__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../i18n/server/get-ssr-state */ "./node_modules/koot/i18n/server/get-ssr-state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* global
    __KOOT_SSR_SET_STORE__:false,
    __KOOT_SSR_SET_HISTORY__:false,
    __KOOT_LOCALEID__:false,
    __KOOT_SSR__:false
*/






























var ssr = async function ssr() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$LocaleId = options.LocaleId,
      LocaleId = _options$LocaleId === void 0 ?  false ? undefined : __KOOT_LOCALEID__ : _options$LocaleId,
      _options$SSR = options.SSR,
      SSR = _options$SSR === void 0 ?  false ? undefined : __KOOT_SSR__ : _options$SSR;
  var ctx = SSR.ctx;
  /** @type {string} 本次请求的 URL */

  var url = ctx.path + ctx.search; // ========================================================================

  var _kootConfig$redux = _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_7__["redux"],
      reduxConfigRaw = _kootConfig$redux === void 0 ? {} : _kootConfig$redux;
  var reduxConfig = await Object(_React_validate_redux_config__WEBPACK_IMPORTED_MODULE_15__["default"])(reduxConfigRaw); // 生成/清理 Store
  // console.log('\x1b[36m⚑\x1b[0m' + ' Store created')

  var Store = Object(_middlewares_isomorphic_init_store__WEBPACK_IMPORTED_MODULE_25__["default"])(reduxConfig); // 生成 History

  var historyConfig = {
    basename: LocaleId && "undefined" === 'router' ? "/".concat(LocaleId) : '/'
  };
  /* eslint-disable react-hooks/rules-of-hooks */

  var memoryHistory = react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_4___default()(function () {
    return history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_5___default()(url);
  })(historyConfig);
  /* eslint-enable react-hooks/rules-of-hooks */

  /** @type {Object} 已生成的 History 实例 */

  var History = Object(react_router_redux__WEBPACK_IMPORTED_MODULE_6__["syncHistoryWithStore"])(memoryHistory, Store);
  var syncCookie = reduxConfig.syncCookie;

  if (false) {} else {
    __KOOT_SSR_SET_STORE__(Store);

    __KOOT_SSR_SET_HISTORY__(History);

    Object(___WEBPACK_IMPORTED_MODULE_8__["resetStore"])();
    Object(___WEBPACK_IMPORTED_MODULE_8__["resetHistory"])();
  } // ========================================================================
  // console.log({
  //     LocaleId,
  //     Store,
  //     History,
  //     SSR
  // })

  /** @type {Boolean} i18n 是否启用 */


  var i18nEnabled = Boolean(LocaleId);
  var thisTemplateInjectCache = SSR.thisTemplateInjectCache,
      thisEntrypoints = SSR.thisEntrypoints,
      thisFilemap = SSR.thisFilemap,
      styleMap = SSR.styleMap,
      template = SSR.template,
      templateInject = SSR.templateInject,
      _SSR$proxyRequestOrig = SSR.proxyRequestOrigin,
      proxyRequestOrigin = _SSR$proxyRequestOrig === void 0 ? {} : _SSR$proxyRequestOrig,
      ssrComplete = SSR.ssrComplete;
  ctx.originTrue = proxyRequestOrigin.protocol ? ctx.origin.replace(/^http:\/\//, "".concat(proxyRequestOrigin.protocol, "://")) : ctx.origin;
  ctx.hrefTrue = proxyRequestOrigin.protocol ? ctx.href.replace(/^http:\/\//, "".concat(proxyRequestOrigin.protocol, "://")) : ctx.href;

  var _ref = await initConfig(i18nEnabled),
      lifecycle = _ref.lifecycle,
      routes = _ref.routerConfig; // 渲染生命周期: beforeRouterMatch


  await Object(_middlewares_isomorphic_lifecycle_before_router_match__WEBPACK_IMPORTED_MODULE_20__["default"])({
    ctx: ctx,
    store: Store,
    syncCookie: syncCookie,
    callback: lifecycle.beforeRouterMatch
  });

  if (LocaleId) {
    Store.dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_12__["CHANGE_LANGUAGE"],
      data: LocaleId
    });
    Object(_i18n_onServerRender__WEBPACK_IMPORTED_MODULE_26__["default"])({
      store: Store
    });
  } // 进行路由匹配


  var _ref2 = await new Promise(function (resolve, reject) {
    react_router_lib_match__WEBPACK_IMPORTED_MODULE_3___default()({
      history: History,
      routes: routes,
      location: url
    }, function (error, redirectLocation, renderProps) {
      if (error) return reject(error);
      resolve({
        redirectLocation: redirectLocation,
        renderProps: renderProps
      });
    });
  }),
      redirectLocation = _ref2.redirectLocation,
      renderProps = _ref2.renderProps; // 如果需要重定向，派发 ctx.redirect / 302


  if (redirectLocation) {
    ssrComplete({
      redirect: redirectLocation.pathname + redirectLocation.search
    });
    return;
  } // 如果没有匹配，终止本中间件流程，执行其他中间件
  // 表示 react 不应处理该请求


  if (!renderProps) {
    ssrComplete({
      next: true
    });
    return;
  } // 强制更新 store: state.routing.locationBeforeTransitions


  var state = Store.getState();
  var currentPathname = state.routing.locationBeforeTransitions.pathname;
  if (currentPathname.split(0, 1) !== '/') Object.assign(Store.getState().routing.locationBeforeTransitions, {
    pathname: ctx.path // search: ctx.search

  }); // 渲染生命周期: beforePreRender

  await Object(_middlewares_isomorphic_lifecycle_before_pre_render__WEBPACK_IMPORTED_MODULE_21__["default"])({
    ctx: ctx,
    store: Store,
    localeId: LocaleId,
    callback: lifecycle.beforePreRender
  }); // 确定当前访问匹配到的组件

  SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_11__["needConnectComponents"]] = true;
  SSR.connectedComponents = [];

  try {
    Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_root_isomorphic__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
      store: Store
    }, renderProps)));
  } catch (e) {}

  SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_11__["needConnectComponents"]] = false; // 重置 state

  Object(_React_redux_reset_store__WEBPACK_IMPORTED_MODULE_18__["default"])(Store, [].concat(_toConsumableArray(_React_redux_reset_store__WEBPACK_IMPORTED_MODULE_18__["defaultKeysToPreserve"]), ['server', 'routing'])); // 渲染生命周期: beforeDataToStore

  await Object(_middlewares_isomorphic_lifecycle_before_data_to_store__WEBPACK_IMPORTED_MODULE_22__["default"])({
    ctx: ctx,
    store: Store,
    localeId: LocaleId,
    callback: lifecycle.beforeDataToStore
  }); // 执行所有匹配到的组件的自定义的静态生命周期

  var _ref3 = await Object(_middlewares_isomorphic_execute_components_lifecycle__WEBPACK_IMPORTED_MODULE_24__["default"])({
    store: Store,
    renderProps: renderProps,
    ctx: ctx
  }),
      title = _ref3.title,
      metaHtml = _ref3.metaHtml,
      reduxHtml = _ref3.reduxHtml; // 渲染生命周期: afterDataToStore


  await Object(_middlewares_isomorphic_lifecycle_after_data_to_store__WEBPACK_IMPORTED_MODULE_23__["default"])({
    ctx: ctx,
    store: Store,
    localeId: LocaleId,
    callback: lifecycle.afterDataToStore
  }); // SSR

  var reactHtml = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_root_isomorphic__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
    store: Store
  }, renderProps))); // console.log({
  //     // __KOOT_SSR__,
  //     // thisTemplateInjectCache,
  //     // thisEntrypoints, thisFilemap,
  //     thisStyleMap,
  //     // templateInject,
  //     // proxyRequestOrigin,
  // })
  // const stylesHtml = Object.keys(thisStyleMap)
  //     .filter(id => typeof thisStyleMap[id].css === 'string')
  //     .map(id => `<style id="${id}">${thisStyleMap[id].css}</style>`)
  //     .join('')

  var stylesHtml = Object.keys(styleMap).filter(function (id) {
    return typeof styleMap[id].css === 'string' && styleMap[id].css !== '';
  }).map(function (id) {
    return "<style ".concat("data-koot-module", "=\"").concat(id, "\">").concat(styleMap[id].css, "</style>");
  }).join(''); // console.log('result thisStyleMap', thisStyleMap)
  // 渲染 EJS 模板

  var inject = _React_validate_inject__WEBPACK_IMPORTED_MODULE_14___default()({
    injectCache: thisTemplateInjectCache,
    filemap: thisFilemap,
    entrypoints: thisEntrypoints,
    localeId: LocaleId,
    title: title,
    metaHtml: metaHtml,
    reactHtml: reactHtml,
    stylesHtml: stylesHtml,
    reduxHtml: reduxHtml,
    SSRState: _objectSpread({}, Object(_i18n_server_get_ssr_state__WEBPACK_IMPORTED_MODULE_28__["default"])()),
    needInjectCritical: _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_16___default()(template)
  });

  if (LocaleId) {
    // i18n 启用时: 添加其他语种页面跳转信息的 meta 标签
    inject.metas += Object(_i18n_server_generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_27__["default"])({
      ctx: ctx,
      proxyRequestOrigin: proxyRequestOrigin,
      localeId: LocaleId
    });
  }
  /** @type {String} HTML 结果 */


  var body = _React_render_template__WEBPACK_IMPORTED_MODULE_17___default()({
    template: template,
    inject: Object.assign(_objectSpread({}, inject, {}, templateInject)),
    store: Store,
    ctx: ctx
  }); // 结果写入缓存

  if (false) { var origin, k, _i, _Object$values; } // React SSR


  ssrComplete({
    body: body
  });
};
/**
 * 初始化 SSR 配置
 * @param {*} i18nEnabled
 */


var initConfig = async function initConfig(i18nEnabled) {
  var LocaleId =  false ? undefined : __KOOT_LOCALEID__;
  var _kootConfig$server = _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_7__["server"],
      serverConfig = _kootConfig$server === void 0 ? {} : _kootConfig$server;
  var config = {}; // 决定路由配置 (每次请求需重新生成)

  config.routerConfig = await Object(_React_validate_router_config__WEBPACK_IMPORTED_MODULE_13__["default"])(_KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_7__["router"]);
  if (typeof i18nEnabled === 'undefined') i18nEnabled = Boolean(LocaleId);
  config.lifecycle = {};

  if (typeof serverConfig.onRender === 'function') {
    config.lifecycle.beforeDataToStore = serverConfig.onRender;
  } else if (_typeof(serverConfig.onRender) === 'object') {
    Object.keys(serverConfig.onRender).forEach(function (key) {
      config.lifecycle[key] = serverConfig.onRender[key];
    });
  }

  return config;
};

if (true) ssr().catch(function (err) {
  __KOOT_SSR__.ssrComplete({
    error: err
  });

  console.error(err);
  throw err;
});
/* harmony default export */ __webpack_exports__["default"] = (ssr);

/***/ }),

/***/ "./node_modules/koot/defaults/before-build.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/defaults/before-build.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Webpack 打包相关的常量，包括：
 * - 文件名
 * - 代码中使用的临时常量名
 * - `koot.config.js` 的属性名
 * - 其他代码中用到的常量名
 */
module.exports = {
  // 处理项目配置相关
  keyFileProjectConfigTempFull: '__FILE_PROJECT_CONFIG_TEMP_FULL__',
  keyFileProjectConfigTempPortionServer: '__FILE_PROJECT_CONFIG_TEMP_PORTION_SERVER__',
  keyFileProjectConfigTempPortionClient: '__FILE_PROJECT_CONFIG_TEMP_PORTION_CLIENT__',
  keyFileProjectConfigTempPortionOtherClient: '__FILE_PROJECT_CONFIG_TEMP_PORTION_OTHER_CLIENT__',
  keyKootBaseVersion: '__KOOT_BASE_VERSION__',
  dirConfigTemp: 'logs/tmp/config',
  filenameProjectConfigTempFull: 'full.*.js',
  filenameProjectConfigTempPortionServer: 'portion.server.*.js',
  filenameProjectConfigTempPortionClient: 'portion.client.*.js',
  filenameProjectConfigTempPortionOtherClient: 'portion.client-other.*.js',
  propertiesToExtract: [['name', ''], ['type', 'react'], ['template', ''], ['templateInject', ''], ['routes', ''], ['historyType', ''], ['store', ''], ['cookiesToStore', ''], ['client', {}], ['server', {}]],
  typesSPA: ['spa', 'reactspa', 'react-spa'],
  // 打包 DLL 相关
  keyConfigBuildDll: '__BUILD_DLL__',
  filenameDll: '.dll.js',
  filenameDllManifest: '.dll.manifest.json',
  dirDll: 'dev-dll',
  // 其他项目配置项名
  keyConfigQuiet: '__QUIET__',
  keyConfigOutputPathShouldBe: '__OUTPUT_PATH_SHOULD_BE__',
  keyConfigWebpackSPATemplateInject: '__SPA_TEMPLATE_INJECT__',
  keyConfigClientAssetsPublicPath: '__CLIENT_ASSETS_PUBLIC_PATH__',
  keyConfigClientServiceWorkerPathname: '__CLIENT_SERVICE_WORKER_PATHNAME__',
  WEBPACK_OUTPUT_PATH: '__WEBPACK_OUTPUT_PATH',
  CLIENT_ROOT_PATH: '__CLIENT_ROOT_PATH',
  // 自定义 chunk
  chunkNameExtractCss: '__KOOT__EXTRACT__CSS__',
  chunkNameExtractCssForImport: '__KOOT__EXTRACT__CSS__NO__PUBLIC__PATH__',
  chunkNameClientRunFirst: '__KOOT__CLIENT__RUN__FIRST__',
  // [开发环境] 临时文件名
  filenameWebpackDevServerPortTemp: '.dev_webpack-dev-server_port',
  filenameBuilding: '.koot-building',
  filenameBuildFail: '.koot-build-fail',
  filenameSPATemplateInjectJS: '.spa-template-inject.LOCALEID.js',
  // [生产环境] 文件名
  filenameCurrentBundle: '.koot-current',
  // 标签属性
  styleTagGlobalAttributeName: 'data-koot-global',
  styleTagModuleAttributeName: 'data-koot-module',
  scriptTagEntryAttributeName: 'data-koot-entry',
  // 模板中的一些判断阈值

  /**
   * @type {number} 全局 CSS 抽出总结果文件尺寸阈值
   * - 如果超过这个值，会采用 <link> 引用的方式
   * - 如果小于等于这个值，直接将文件内容写入 HTML
   */
  thresholdStylesExtracted: 50 * 1000,

  /**
   * @type {number} run-first 入口的文件尺寸阈值
   * - 如果超过这个值，会采用 <script> 引用的方式
   * - 如果小于等于这个值，直接将文件内容写入 HTML
   */
  thresholdScriptRunFirst: 10 * 1000
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines-server.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/defaults/defines-server.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =  false ? undefined : {
  needConnectComponents: '__NEED_CONNECT_COMPONENTS__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/defaults/defines.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  __KOOT_INJECT_ATTRIBUTE_NAME__: 'koot-inject',
  __KOOT_INJECT_METAS_START__: 'koot-inject-metas-start',
  __KOOT_INJECT_METAS_END__: 'koot-inject-metas-end',
  // hl 这个参数名是参考了Instargram
  changeLocaleQueryKey: 'hl',
  sessionStoreKey: '__KOOT_SESSION_STORE__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/dev-request-uri.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/defaults/dev-request-uri.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * [开发环境] 特殊的请求 URI
 */
module.exports = {
  dll: '/__koot_dev_dll',
  serviceWorker: "/__KOOT_DEV_SERVICE_WORKER.".concat( true ? encodeURIComponent("Koot Clinic") : undefined, ".js")
};

/***/ }),

/***/ "./node_modules/koot/defaults/entrypoints.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/defaults/entrypoints.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 默认的入口
 * 
 * @module koot/defaults/entrypoints
 */
module.exports = ['client'];

/***/ }),

/***/ "./node_modules/koot/defaults/webpack-dev-server.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/defaults/webpack-dev-server.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  publicPathPrefix: '__koot_webpack_dev_server__',
  entryClientHMR: 'webpack-dev-server-client',
  serviceWorkerFilename: '__KOOT_DEV_SERVICE_WORKER__.js',
  hmrOptions: {// multiStep: true,
    // fullBuildTimeout: process.env.WEBPACK_BUILD_TYPE === 'spa' ? 500 : undefined,
    // requestTimeout: process.env.WEBPACK_BUILD_TYPE === 'spa' ? undefined : 1000
  }
};

/***/ }),

/***/ "./node_modules/koot/i18n/action-types.js":
/*!************************************************!*\
  !*** ./node_modules/koot/i18n/action-types.js ***!
  \************************************************/
/*! exports provided: I18N_INIT, I18N_SET_LOCALES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_INIT", function() { return I18N_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_SET_LOCALES", function() { return I18N_SET_LOCALES; });
var I18N_INIT = '@@KOOT@@I18N_INIT';
var I18N_SET_LOCALES = '@@KOOT@@I18N_SET_LOCALES';

/***/ }),

/***/ "./node_modules/koot/i18n/get-language-list-from-state.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/i18n/get-language-list-from-state.js ***!
  \****************************************************************/
/*! exports provided: getLanguagelistFromState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguagelistFromState", function() { return getLanguagelistFromState; });
/**
 * 从当前的 Redux state 中获取语言列表字符串
 * 如果 uri search 中存在 fb_locale，将该值放在第一位
 * 
 * @param {object} state 当前的 Redux state
 * 
 * @returns {string} 语言列表，使用分号(;)分割
 */
var getLanguagelistFromState = function getLanguagelistFromState(_ref) {
  var _ref$server = _ref.server,
      server = _ref$server === void 0 ? {} : _ref$server,
      routing = _ref.routing;
  var fb_locale = routing && routing.locationBeforeTransitions && routing.locationBeforeTransitions.query ? routing.locationBeforeTransitions.query.fb_locale : null;
  var lang = server.lang;
  if (fb_locale) lang = fb_locale + ';' + lang;
  return lang || '';
};
/* harmony default export */ __webpack_exports__["default"] = (getLanguagelistFromState);

/***/ }),

/***/ "./node_modules/koot/i18n/get-locales-config.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/i18n/get-locales-config.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

var locales;
/**
 * 获取 i18n 配置数组
 * @returns {Array}
 */

module.exports = function () {
  if (!Array.isArray(locales)) {
    if (isI18nEnabled()) {
      locales = JSON.parse("[[\"zh\",{},\"/Users/dream/Desktop/liebao/koot-clinic/src/locales/zh.json\",\"./locales/zh.json\"]]") || [];
    } else {
      locales = [];
    }
  }

  return locales;
};

/***/ }),

/***/ "./node_modules/koot/i18n/get-type.js":
/*!********************************************!*\
  !*** ./node_modules/koot/i18n/get-type.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/**
 * 获取当前多语言配置类型
 * @returns {String}
 */


module.exports = function () {
  return isI18nEnabled() ? JSON.parse("\"default\"") || 'default' : undefined;
};

/***/ }),

/***/ "./node_modules/koot/i18n/is-enabled.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/is-enabled.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 检查当前项目是否开启多语言支持
 * @returns {Boolean}
 */
var isI18nEnabled = function isI18nEnabled() {
  if (!JSON.parse("true")) return false;
  return true;
};

module.exports = isI18nEnabled;

/***/ }),

/***/ "./node_modules/koot/i18n/locale-ids.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/locale-ids.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getLocalesConfig = __webpack_require__(/*! ./get-locales-config */ "./node_modules/koot/i18n/get-locales-config.js");

var result;
/**
 * 获取 i18n 语种列表
 * @returns {Array}
 */

module.exports = function () {
  if (!Array.isArray(result)) {
    result = getLocalesConfig();
    result = result.map(function (l) {
      return l[0];
    });
    if (!result.length) result = [''];
  }

  return result;
}();

/***/ }),

/***/ "./node_modules/koot/i18n/locales.js":
/*!*******************************************!*\
  !*** ./node_modules/koot/i18n/locales.js ***!
  \*******************************************/
/*! exports provided: locales, setLocales, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocales", function() { return setLocales; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global __KOOT_SSR__:false, __KOOT_SSR_STATE__:false */
var __devLocales = {};
/**
 * 根据当前环境，返回语言包对象的引用
 * - 客户端: 当前语种的语言包对象 (仅当多语言类型为 `store` 时)
 * - 服务器端: 所有语种语言包合集对象
 * @returns {Object}
 */

var getLocalesObject = function getLocalesObject() {
  if (true) {
    if (false) {} else if ((typeof __KOOT_SSR__ === "undefined" ? "undefined" : _typeof(__KOOT_SSR__)) === 'object') return __KOOT_SSR__.locales;
  }

  if (false) {}

  return false;
};
/**
 * @type {Object}
 * 语言包对象
 * - 客户端: 当前语种的语言包对象 (仅当多语言类型为 `store` 时)
 * - 服务器端: 所有语种语言包合集对象
 */


var locales = function () {
  return getLocalesObject() || {};
}();
var setLocales = function setLocales() {
  var newLocales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // const obj = getLocalesObject()
  if (locales) Object.assign(locales, newLocales); // console.log({ newLocales, obj, locales, 'global.__KOOT_SSR__': global.__KOOT_SSR__ })

  return locales;
};
/* harmony default export */ __webpack_exports__["default"] = (locales);

/***/ }),

/***/ "./node_modules/koot/i18n/onServerRender/index.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/i18n/onServerRender/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux */ "./node_modules/koot/i18n/redux/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var store = _ref.store;
  // console.log(1)
  if (_typeof(store) !== 'object' && typeof store.getState !== 'function') return;
  store.dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_0__["actionInit"])(store.getState())); // if (JSON.parse(process.env.KOOT_I18N_TYPE) === 'store')
  //     store.dispatch(actionLocales(store.getState()))
  // console.log(2)
});

/***/ }),

/***/ "./node_modules/koot/i18n/parse-language-list.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/i18n/parse-language-list.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 根据输入的语言列表字符串，返回语言列表array
 * 
 * @param {string} langList 语言列表字符串，eg: zh-CN,zh;q=0.8,en;q=0.6
 * 
 * @returns {array} 语言列表
 */
/* harmony default export */ __webpack_exports__["default"] = (function (langList) {
  return langList.split(',').map(function (value) {
    return value.split(';')[0];
  });
});

/***/ }),

/***/ "./node_modules/koot/i18n/parse-locale-id.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/i18n/parse-locale-id.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parse_language_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-language-list */ "./node_modules/koot/i18n/parse-language-list.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_1__);


/**
 * 检查单项，如果和availableLocales内的项目有匹配，返回匹配，否则返回null
 * @param {string} input 检查项
 * @returns 匹配的 localeId 或 null
 */

var checkItem = function checkItem(input) {
  var id; // input = input.toLowerCase().replace(/_/g, '-')

  _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.some(function (_localeId) {
    if (_localeId == input) id = _localeId;
    return id;
  });

  var parseSeg = function parseSeg(id, localeId, str) {
    if (id) return id;
    var seg = localeId.split(str);

    if (!id) {
      _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.some(function (_localeId) {
        if (_localeId == seg[0] + '-' + seg[seg.length - 1]) id = _localeId;
        return id;
      });
    }

    if (!id) {
      _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.some(function (_localeId) {
        if (_localeId == seg[0]) id = _localeId;
        return id;
      });
    }

    return id || null;
  };

  id = parseSeg(id, input, '-');
  return id || null;
};
/**
 * 根据输入内容返回availableLocales内匹配的语言包ID(localeId)
 * 如果没有匹配，返回availableLocales的第一项
 * 注：仅为返回，没有赋值操作
 * 
 * @param {string|array} input 
 * 
 * @returns 匹配的语言包ID localeId 或 availableLocaleIds[0]
 */


var parseLocaleId = function parseLocaleId(input) {
  // 检查是否包含分号，如果是，按语言列表处理为array
  // eg: zh-CN,zh;q=0.8,en;q=0.6
  if (typeof input === 'string' && input.indexOf(';') > -1) input = Object(_parse_language_list__WEBPACK_IMPORTED_MODULE_0__["default"])(input); // 检查是否为array

  if (Array.isArray(input)) {
    var id;
    input.some(function (thisId) {
      id = checkItem(thisId);
      return id;
    });
    return id || _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];
  } else if (!input && typeof navigator !== 'undefined') return parseLocaleId(navigator.languages || navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0]);else if (input) return checkItem(input) || _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];

  return _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];
};

/* harmony default export */ __webpack_exports__["default"] = (parseLocaleId);

/***/ }),

/***/ "./node_modules/koot/i18n/redux/index.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/i18n/redux/index.js ***!
  \***********************************************/
/*! exports provided: reducerLocaleId, actionInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerLocaleId", function() { return reducerLocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionInit", function() { return actionInit; });
/* harmony import */ var _parse_language_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parse-language-list */ "./node_modules/koot/i18n/parse-language-list.js");
/* harmony import */ var _get_language_list_from_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-language-list-from-state */ "./node_modules/koot/i18n/get-language-list-from-state.js");
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse-locale-id */ "./node_modules/koot/i18n/parse-locale-id.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/i18n/action-types.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



 // import locales from '../locales'


/**
 * Redux reducer: 初始化 localeId
 * 
 * @param {*} state 
 * @param {*} action
 * 
 * @returns {*} state
 */

var reducerLocaleId = function reducerLocaleId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_3__["I18N_INIT"]:
      return action.localeId;
  }

  return state;
}; // /**
//  * Redux reducer: 初始化 locales
//  * 
//  * @param {*} state 
//  * @param {*} action
//  * 
//  * @returns {*} state
//  */
// export const reducerLocales = (state = {}, action) => {
//     switch (action.type) {
//         case I18N_SET_LOCALES:
//             return Object.assign({}, state, action.locales)
//     }
//     return state
// }

/**
 * Redux action: 初始化
 * 
 * @param {Object} state 
 * @returns {Object}
 */

var actionInit = function actionInit(state) {
  // setLocaleId(localeId)
  var localeId =  true ? init(Object(_parse_language_list__WEBPACK_IMPORTED_MODULE_0__["default"])(_typeof(state) === 'object' ? Object(_get_language_list_from_state__WEBPACK_IMPORTED_MODULE_1__["default"])(state) : state), state.localeId) : undefined; // setLocaleId(localeId)

  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_3__["I18N_INIT"],
    localeId: '' + localeId
  };
}; // /**
//  * Redux action: 设置语言包内容对象
//  * 
//  * @returns {Object}
//  */
// export const actionLocales = (state) => {
//     return {
//         type: I18N_SET_LOCALES,
//         locales: locales[state.localeId]
//     }
// }

/**
 * 服务器环境：根据语言列表，初始化i18n，获得并赋值 localeId
 * 
 * @param {array|string} langList 语言列表
 * 
 * @returns (如果已初始化)locales[localeId]
 */

var init = function init() {
  var langList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var localeId = arguments.length > 1 ? arguments[1] : undefined;

  if (true) {
    // console.log(locales[localeId])
    if (typeof langList === 'string') if (langList.indexOf(';') > -1) langList = Object(_parse_language_list__WEBPACK_IMPORTED_MODULE_0__["default"])(langList);else return init([langList], localeId);
    var parsed = Object(_parse_locale_id__WEBPACK_IMPORTED_MODULE_2__["default"])(langList); // if (parsed) setLocaleId(parsed)
    // else setLocaleId(localeId)

    if (parsed) return parsed;
    return localeId; // if (locales[localeId]) return locales[localeId]
  }
};

/***/ }),

/***/ "./node_modules/koot/i18n/server/generate-html-redirect-metas.js":
/*!***********************************************************************!*\
  !*** ./node_modules/koot/i18n/server/generate-html-redirect-metas.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__);



/**
 * 生成用以声明该页面其他语种 URL 的 meta 标签的 HTML 代码
 * @param {Object} options 
 * @param {Object} options.ctx 
 * @param {Object} options.proxyRequestOrigin Koot 配置: server.proxyRequestOrigin
 * @param {String} options.localeId 当前语种
 * @returns {String} HTML 代码
 */

var generateHtmlRedirectMetas = function generateHtmlRedirectMetas(_ref) {
  var ctx = _ref.ctx,
      localeId = _ref.localeId;
  if (!_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2___default()()) return ''; // let { href, origin } = ctx
  // if (typeof proxyRequestOrigin.protocol === 'string') {
  //     origin = origin.replace(/^http:\/\//, `${proxyRequestOrigin.protocol}://`)
  //     href = href.replace(/^http:\/\//, `${proxyRequestOrigin.protocol}://`)
  // }

  var href = ctx.hrefTrue,
      origin = ctx.originTrue;
  var isUseRouter = "undefined" === 'router';
  var html = _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a //getLocaleIds()
  .filter(function (thisLocaleId) {
    return thisLocaleId !== localeId;
  }).map(function (l) {
    var thisHref = '';

    if (isUseRouter) {
      thisHref = origin + href.replace(new RegExp("^".concat(origin)), '').replace(new RegExp("^".concat(localeId)), l).replace(new RegExp("^/".concat(localeId)), '/' + l);
    } else {
      thisHref = function () {
        if (ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]] === '') {
          return href.replace(new RegExp("".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=")), "".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=").concat(l));
        }

        if (typeof ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]] === 'string') return href.replace(new RegExp("".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=[a-zA-Z-_]+")), "".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=").concat(l));
        return href + (ctx.querystring ? "&" : href.substr(href.length - 1) === '?' ? '' : "?") + "".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=").concat(l);
      }();
    }

    if (false) {}
    return "<link rel=\"alternate\" hreflang=\"".concat(l, "\" href=\"").concat(thisHref, "\" />");
  }).join('');

  if (isUseRouter) {
    html += "<base href=\"/".concat(localeId, "\">");
  }

  return html;
};

/* harmony default export */ __webpack_exports__["default"] = (generateHtmlRedirectMetas);

/***/ }),

/***/ "./node_modules/koot/i18n/server/get-lang-from-ctx.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/i18n/server/get-lang-from-ctx.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse-locale-id */ "./node_modules/koot/i18n/parse-locale-id.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../set-cookie */ "./node_modules/koot/i18n/set-cookie.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_set_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_4__);
// import cookie from 'cookie'





/**
 * 根据 KOA Context 获取语种ID
 * @param {Object} ctx KOA Context
 * @returns {String} 匹配到的或当前项目默认语种ID
 */

var getLangFromCtx = function getLangFromCtx(ctx) {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_4___default()()) return ''; // const localeIds = getLocaleIds()
  // 根据项目设置，从 URL 中抽取语种 ID

  if (false) { var pathname; } else {
    if (ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]]) {
      if (_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.includes(ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]])) return ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]];
      ctx.redirect(ctx.url.replace(new RegExp("(\\?|&)".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=(.+)$")), '').replace(new RegExp("(\\?|&)".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=(.+)&")), ''));
      return _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];
    }
  } // 如果上一步没有结果，从 COOKIE 中获取
  // const cookies = cookie.parse(ctx.request.header.cookie || '')
  // if (cookies[process.env.KOOT_I18N_COOKIE_KEY] && cookies[process.env.KOOT_I18N_COOKIE_KEY] !== 'null')
  //     return cookies[process.env.KOOT_I18N_COOKIE_KEY]


  var cookieValue = ctx.cookies.get("spLocaleId");

  if (cookieValue && _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.includes(cookieValue)) {
    return cookieValue;
  } // console.log('ctx.cookies.get(process.env.KOOT_I18N_COOKIE_KEY)', cookieValue)
  // 如果上一步没有结果，从请求 headers 中获取


  if (ctx.header['accept-language']) {
    // const acceptLanguage = ctx.header['accept-language']
    // const acceptLanguages = acceptLanguage.split(',').map(str => str.split(';')[0])
    // console.log('acceptLanguage', acceptLanguage)
    // console.log('acceptLanguages', acceptLanguages)
    // console.log('parsed locale id', parseLocaleId(acceptLanguage))
    var localeId = Object(_parse_locale_id__WEBPACK_IMPORTED_MODULE_2__["default"])(ctx.header['accept-language']);
    if (localeId) return setLocale(localeId, ctx);
  } // 如果上一步没有结果，返回项目默认语种


  return setLocale(_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0], ctx);
};

/* harmony default export */ __webpack_exports__["default"] = (getLangFromCtx);
/**
 * 服务器环境: 设置 cookie
 * @param {*} localeId 
 */

var setLocale = function setLocale(localeId, ctx) {
  _set_cookie__WEBPACK_IMPORTED_MODULE_3___default()(localeId, ctx);
  return localeId;
};

/***/ }),

/***/ "./node_modules/koot/i18n/server/get-ssr-state.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/i18n/server/get-ssr-state.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global __KOOT_SSR__:false */

/**
 * 返回多语言相关的 SSR 状态
 * @returns {Object}
 */
var getSSRState = function getSSRState() {
  if (false) {}
  if (false) {}
  if ((typeof __KOOT_SSR__ === "undefined" ? "undefined" : _typeof(__KOOT_SSR__)) !== 'object') return {};
  return {
    localeId: __KOOT_SSR__.LocaleId,
    locales: JSON.parse("\"default\"") === 'store' ? __KOOT_SSR__.locales[__KOOT_SSR__.LocaleId] || {} : {}
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getSSRState);

/***/ }),

/***/ "./node_modules/koot/i18n/server/use-router-redirect.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/i18n/server/use-router-redirect.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_lang_from_ctx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-lang-from-ctx */ "./node_modules/koot/i18n/server/get-lang-from-ctx.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../set-cookie */ "./node_modules/koot/i18n/set-cookie.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_set_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_3__);




/**
 * URL 使用 router 方式时，在同构中间件流程的匹配 react 路由之前，检查是否需要跳转
 * 如果需要跳转，此时发送跳转请求
 * @param {Object} ctx 
 * @returns {Boolean} 是否进行跳转
 */

var useRouterRedirect = function useRouterRedirect(ctx) {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_3___default()()) return false;
  if (true) return false;
  var pathname = ctx.path;
  if (pathname.substr(0, 1) === '/') pathname = pathname.substr(1);
  pathname = pathname.split('/');

  if (!_locale_ids__WEBPACK_IMPORTED_MODULE_0___default.a.includes(pathname[0])) {
    var localeId = Object(_get_lang_from_ctx__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx); // console.log('lang', lang)
    // console.log('pathname', pathname)

    pathname.unshift(localeId);
    pathname = '/' + pathname.join('/'); // 生成跳转后的地址

    var newpath = ctx.originTrue + ctx.hrefTrue.replace(new RegExp("^".concat(ctx.originTrue)), '').replace(new RegExp("^".concat(ctx.path)), pathname); // console.log('newpath', newpath)

    _set_cookie__WEBPACK_IMPORTED_MODULE_2___default()(localeId, ctx);
    return ctx.redirect(newpath);
  }

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (useRouterRedirect);

/***/ }),

/***/ "./node_modules/koot/i18n/set-cookie.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/set-cookie.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 设置 cookie
 * @param {String} localeId
 * @param {Object} ctx Koa context
 */
module.exports = function (localeId, ctx) {
  var maxDate = 365;
  var options = {};

  if (typeof process.env.KOOT_I18N_COOKIE_DOMAIN === 'string' && process.env.KOOT_I18N_COOKIE_DOMAIN) {
    options.domain = process.env.KOOT_I18N_COOKIE_DOMAIN;
  }

  if (false) {}

  if (true) {// TODO: set cookie on server
    // console.log('ctx.host', ctx.host)
    // console.log('ctx.hostname', ctx.hostname)
    // console.log(process.env.KOOT_I18N_COOKIE_KEY, localeId, { domain: ctx.hostname, ...options })
    // ctx.cookies.set(process.env.KOOT_I18N_COOKIE_KEY, localeId, {
    //     domain: ctx.hostname,
    //     maxAge: maxDate * 24 * 60 * 60 * 1000,
    //     signed: false,
    //     ...options
    // })
  }
};

/***/ }),

/***/ "./node_modules/koot/i18n/translate.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/i18n/translate.js ***!
  \*********************************************/
/*! exports provided: l, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return l; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "./node_modules/koot/index.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales */ "./node_modules/koot/i18n/locales.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var l = function () {
  if (true) {
    if (false) {} // console.log({ locales })


    if (_typeof(_locales__WEBPACK_IMPORTED_MODULE_2__["default"]) === 'object') return _locales__WEBPACK_IMPORTED_MODULE_2__["default"][___WEBPACK_IMPORTED_MODULE_1__["localeId"]];
    return {};
  }

  if (JSON.parse("\"default\"") === 'store') return _locales__WEBPACK_IMPORTED_MODULE_2__["default"];
  return false;
}();
/**
 * 翻译文本
 * 语言包中源文本中的 ${replaceKey} 表示此处需要替换，replaceKey 就是传入的 obj 中对应的值
 *
 * @param {string} key 要翻译的文本 Key
 * @param {*object} obj 文本内对应的替换内容
 *
 * @returns {string} 翻译的文本；如果语言包中没有对应的项，返回 key
 */

var translate = function translate() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var key = '';
  var str;
  var options = {};
  var keys = [];
  if (false) {}
  args.forEach(function (value, index) {
    // 如果最后一个参数是 Object，表示为选项
    if (index === args.length - 1 && _typeof(value) === 'object' && !Array.isArray(value)) {
      options = value;
      return;
    }

    if (typeof value === 'string' && value.includes('.')) {
      value.split('.').forEach(function (value) {
        return keys.push(value);
      });
      return;
    }

    keys.push(value);
  });
  var length = keys.length;

  if (args.length === 1 && _typeof(args[0]) === 'object') {
    /**
     * ! 如果只有一个 arg 且为 Object，直接返回该 Object
     */
    return args[0];
  }

  if (_typeof(keys[0]) === 'object') {
    /**
     * 第一个值为 Object，通常是客户端情况，后续值依次取前一个 Object 内对应的值
     */
    key = keys[0];
    var hasUnmatched = false;

    for (var i = 1; i < length; i++) {
      // const value = get(key, keys[i]);
      var value = key[keys[i]]; // console.log(key, value);

      if (typeof value === 'undefined') {
        hasUnmatched = true;
        break;
      } else {
        key = value;
      } // if (typeof key[keys[i]] !== 'undefined') key = key[keys[i]];

    }

    if (hasUnmatched) key = keys[length - 1];
  } else if (length === 1) {
    key = keys[0];
  } else {
    for (var _i = 0; _i < length; _i++) {
      if (_typeof(l) === 'object') {
        if (keys[_i] !== '') key += "[".concat(JSON.stringify(keys[_i]), "]");
      } else {
        key += (_i ? '.' : '') + keys[_i];
      }
    }
  } // console.log(key);
  // if (__CLIENT__) {
  //     // console.log(localeId)
  //     console.log(localeId, keys, length, key, l);
  // }


  if (typeof l === 'undefined') {
    str = key;
  } else if (_typeof(l) === 'object') {
    // str = l && typeof l[key] !== 'undefined' ? l[key] : undefined;
    str = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(l, key);
  } // const localeId = _self.curLocaleId
  // if (typeof str === 'undefined' && typeof l === 'object') {
  //     try {
  //         str = get(l, key);
  //         // str = eval('l.' + key);
  //     } catch (e) {}
  // }


  if (typeof str === 'undefined') str = key;
  if (typeof str === 'string') return str.replace(/\$\{([^}]+)\}/g, function (match, p) {
    return typeof options[p] === 'undefined' ? p : options[p];
  });
  return str;
};

/* harmony default export */ __webpack_exports__["default"] = (translate);

/***/ }),

/***/ "./node_modules/koot/i18n/validte-routes.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/i18n/validte-routes.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 根据当前项目配置，对路由对象进行改造
 * @param {Object} routes 
 * @returns {Object} routes
 */

var validateRoutes = function validateRoutes() {
  var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_0___default()()) return routes;

  if (false) {}

  return routes;
};

/* harmony default export */ __webpack_exports__["default"] = (validateRoutes);

/***/ }),

/***/ "./node_modules/koot/index.js":
/*!************************************!*\
  !*** ./node_modules/koot/index.js ***!
  \************************************/
/*! exports provided: createStore, reduxForCreateStore, extend, getLocaleId, resetLocaleId, localeId, getStore, resetStore, store, getHistory, resetHistory, history, getCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduxForCreateStore", function() { return reduxForCreateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocaleId", function() { return getLocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLocaleId", function() { return resetLocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeId", function() { return localeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetStore", function() { return resetStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistory", function() { return getHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetHistory", function() { return resetHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCache", function() { return getCache; });
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React/is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_React_is_render_safe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _React_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./React/redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __KOOT_HOC_EXTEND__ */ "./node_modules/koot/React/component-extender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_2__["default"]; });

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* global
    __KOOT_SSR__: false,
    __KOOT_STORE__: false,
    __KOOT_HISTORY__: false,
    __KOOT_LOCALEID__: false,
*/
 // ============================================================================

/**
 * 手动创建 Redux Store 时需要的相关对象
 * @type {Object}
 */



var createStore = _React_redux__WEBPACK_IMPORTED_MODULE_1__["createStore"],
    reduxForCreateStore = _objectWithoutProperties(_React_redux__WEBPACK_IMPORTED_MODULE_1__, ["createStore"]);


/**
 * 通用的高阶组件/方法的装饰器
 * @type {Function}
 */

 // ============================================================================

var getLocaleId = function getLocaleId() {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_LOCALEID__ === 'undefined') return '';
    return __KOOT_LOCALEID__ || '';
  }
};
var resetLocaleId = function resetLocaleId() {
  return localeId = getLocaleId();
};
var localeId = function () {
  return getLocaleId();
}(); // ============================================================================

var getStore = function getStore() {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_STORE__ === 'undefined') return '';
    return __KOOT_STORE__;
  }
};
var resetStore = function resetStore() {
  return store = getStore();
};
var store = function () {
  return getStore();
}(); // ============================================================================

var getHistory = function getHistory() {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_HISTORY__ === 'undefined') return '';
    return __KOOT_HISTORY__;
  }
};
var resetHistory = function resetHistory() {
  return history = getHistory();
};
var history = function () {
  return getHistory();
}(); // ============================================================================

var getCache = function getCache(localeId) {
  if (!_React_is_render_safe__WEBPACK_IMPORTED_MODULE_0___default()()) return {};

  if (false) {}

  if (true) {
    var SSR =  false ? undefined : __KOOT_SSR__;
    var cache = SSR.globalCache;
    if (!cache) return {};
    if (localeId === true) return cache.get(getLocaleId());
    if (localeId) return cache.get(localeId) || {};
    return cache.get('__');
  }
}; // ============================================================================

if (false) {}

/***/ }),

/***/ "./node_modules/koot/libs/error-msg.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/libs/error-msg.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 生成错误信息
 * @param {String} msg
 * @returns {String}
 */
var errorMsg = function errorMsg(type, msg) {
  if (typeof type === 'string' && typeof msg === 'string') return "".concat(type, "::").concat(msg);
  return type;
};

module.exports = errorMsg;

/***/ }),

/***/ "./node_modules/koot/libs/filter-state.js":
/*!************************************************!*\
  !*** ./node_modules/koot/libs/filter-state.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var itemsBlacklist = ['localeId', 'realtimeLocation', 'routing', 'server'];
/**
 * 过滤 state，将黑名单内的项目删除，并返回过滤后的 state
 *
 * 黑名单中包括：
 * - `localeId`
 * - `realtimeLocation`
 * - `routing`
 * - `server`
 *
 * @param {Object} state
 * @returns {Object}
 */

var filter = function filter(oldState) {
  return itemsBlacklist.reduce(function (state, item) {
    var _ = state[item],
        rest = _objectWithoutProperties(state, [item].map(_toPropertyKey));

    return rest;
  }, oldState);
};

module.exports = filter;

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dev-tmp.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dev-tmp.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getCwd = __webpack_require__(/*! ../utils/get-cwd */ "./node_modules/koot/utils/get-cwd.js");
/**
 * _仅针对开发环境_ 获取开发环境临时目录
 * @param {String} [cwd]
 * @param {String} [type]
 * @returns {String} 如果提供 `type`，则返回对应类型的目录
 */


module.exports = function () {
  var cwd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getCwd();
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return path.resolve(cwd, 'logs/dev', type ? ".".concat(type) : '');
};

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public-foldername.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public-foldername.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取客户端打包结果 public 目录名
 * @returns {String}
 */
module.exports = function () {
  return  false ? undefined : "public";
};

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getDirDistPublicFoldername = __webpack_require__(/*! ./get-dir-dist-public-foldername */ "./node_modules/koot/libs/get-dir-dist-public-foldername.js");
/**
 * 获取打包结果基础目录
 * 最终的打包目录是该目录下的 includes (默认情况)
 * @param {String} dist 打包结果目录
 * @param {Number} bundleVersionsKeep 
 * @returns {String}
 */


module.exports = function (dist, bundleVersionsKeep) {
  if (!result) {
    var base = path.resolve(dist, getDirDistPublicFoldername());

    if (true) {
      // console.log({
      //     result,
      //     base,
      //     'process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER': process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER
      // })
      result = path.resolve(base, "koot-1577169530400");
    } else {}
  }

  return result;
};

var result;

/***/ }),

/***/ "./node_modules/koot/libs/get-log-msg.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/libs/get-log-msg.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var chalk = __webpack_require__(/*! chalk */ "chalk");
/**
 * 生成 log 消息内容
 * @variation 只提供内容
 * @param {String} content 内容
 */

/**
* 生成 log 消息内容
* @variation 提供标记和内容
* @param {String|Boolean} [mark=""] 标记
* @param {String} content 内容
*/

/**
* 生成 log 消息内容
* @variation 提供标记、类型和内容
* @param {String|Boolean} [mark=""] 标记
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/


var generateLogMsg = function generateLogMsg(mark, type, content) {
  if (typeof mark !== 'undefined' && typeof type === 'undefined' && typeof content === 'undefined') return generateLogMsg('', '', mark);
  if (typeof type !== 'undefined' && typeof content === 'undefined') return generateLogMsg(mark, '', type);
  var markColor = 'cyan';
  if (mark === false) mark = '';

  switch (mark.toLowerCase()) {
    case '×':
    case 'x':
    case 'x ':
    case 'error':
      {
        mark = '× ';
        markColor = 'redBright';
        break;
      }

    case 'success':
      {
        mark = '√ ';
        markColor = 'green';
        break;
      }

    case 'cb':
    case 'callback':
      {
        mark = '⚑ ';
        markColor = 'cyan';
        break;
      }

    case 'warning':
      {
        mark = '! ';
        markColor = 'yellowBright';
        break;
      }

    case '':
      {
        break;
      }

    default:
      {
        mark = '  ';
      }
  }

  var typeColor = function () {
    switch (type) {
      default:
        return 'yellowBright';
    }
  }();

  return (mark === '' ? '' : chalk[markColor](mark)) + chalk[typeColor]("[koot".concat(type ? "/".concat(type) : '', "] ")) + content;
};

module.exports = generateLogMsg;

/***/ }),

/***/ "./node_modules/koot/libs/get-ssr-state-string.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/libs/get-ssr-state-string.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 输出 SSR 时需要的 state 字符串形式结果
 * @param {Object} state
 * @returns {string}
 */
var getSSRStateString = function getSSRStateString() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return "JSON.parse(" + "decodeURIComponent(\"".concat(encodeURIComponent(JSON.stringify(state)), "\"))");
};

module.exports = getSSRStateString;

/***/ }),

/***/ "./node_modules/koot/libs/log.js":
/*!***************************************!*\
  !*** ./node_modules/koot/libs/log.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-console */

/**
 * 命令行 Log
 * @variation 1
 * @param {String} content 内容
 */

/**
* 命令行 Log
* @variation 2
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/

/**
* 命令行 Log
* @variation 3
* @param {String} [mark=""] 标记
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/
module.exports = function () {
  console.log(__webpack_require__(/*! ./get-log-msg */ "./node_modules/koot/libs/get-log-msg.js").apply(void 0, arguments));
};

/***/ }),

/***/ "./node_modules/koot/utils/generate-filemap-from-compilation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/koot/utils/generate-filemap-from-compilation.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var path = __webpack_require__(/*! path */ "path");
/**
 * 从 Webpack compilation 数据中生成文件对应表 (Filemap)
 * @param {Object} compilation 
 * @param {String} [dirRelative] 
 * @returns {Object} 文件对应表 (Filemap)
 */


module.exports = function (compilation, dirRelative) {
  if (_typeof(compilation) !== 'object') return undefined;
  var filemap = {};
  var stats = compilation.getStats();

  var _loop = function _loop(id) {
    var o = stats.compilation.chunks[id];
    if (typeof o.name === 'undefined' || o.name === null) return "continue";

    if (Array.isArray(o.files)) {
      o.files.filter(function (filename) {
        return !/\.(js|css)\.map$/i.test(filename);
      }).forEach(function (filename) {
        var extname = path.extname(filename);
        var file = o.name + extname;
        if (typeof filemap[file] !== 'string') filemap[file] =  false ? undefined : (dirRelative ? dirRelative + '/' : '') + filename;
      });
    }
  };

  for (var id in stats.compilation.chunks) {
    var _ret = _loop(id);

    if (_ret === "continue") continue;
  }

  return filemap;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap-path.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap-path.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

var getDirDevTmp = __webpack_require__(/*! ../libs/get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");
/**
 * 获取打包文件对应表 (chunkmap) 的文件路径
 * @param {string} [dist] 打包结果目录，默认为项目指定的路径
 * @returns {string}
 */


module.exports = function () {
  var dist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDistPath();
  if (false) {}
  return path.resolve(dist, '.public-chunkmap.json');
};

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var getIsI18nEnabled = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

var getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

var getChunkmapPath = __webpack_require__(/*! ./get-chunkmap-path */ "./node_modules/koot/utils/get-chunkmap-path.js");

var getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

var cachedChunkmap;
/**
 * 获取打包文件对应表 (chunkmap)
 *
 * @param {String} [localeId] 当前语言，默认为当前语言 (i18n开启时) 或未指定 (i18n未开启时)
 * @param {Boolean} [getFullResult = false] 仅 i18n 开启时：获取 chunkmap 全文，而非当前语言的片段
 * @returns {Object}
 */

var getChunkmap = function getChunkmap(localeId) {
  var getFullResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (localeId === true) return getChunkmap(getFullResult || undefined, true);
  var isI18nEnabled = getIsI18nEnabled();

  if (isI18nEnabled && typeof localeId === 'undefined') {
    try {
      localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
    } catch (e) {}
  }

  var i18nType = getI18nType();
  var isI18nDefault = isI18nEnabled && i18nType === 'default';

  var chunkmap = function () {
    if (cachedChunkmap) return cachedChunkmap;
    var chunkmap;
    if (_typeof(global.chunkmap) === 'object') chunkmap = global.chunkmap;

    try {
      chunkmap = JSON.parse("{\".zh\":{\".public\":\"public/koot-1577169530400/\",\".entrypoints\":{\"commons\":[\"public/koot-1577169530400/includes/chunk.1b292c31853c22e5622c.js\",\"public/koot-1577169530400/includes/entry.f328fa745904bfa32745.js\"],\"critical\":[\"public/koot-1577169530400/includes/extract.5.9eb0110f38931bbeedf6.css\",\"public/koot-1577169530400/includes/entry.9eb0110f38931bbeedf6.js\"],\"client\":[\"public/koot-1577169530400/includes/chunk.1b292c31853c22e5622c.js\",\"public/koot-1577169530400/includes/entry.7facb70f30181afb9ba2.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/koot-1577169530400/includes/chunk.1b292c31853c22e5622c.js\",\"public/koot-1577169530400/includes/entry.56b255076d99b8101781.js\"]},\".files\":{\"koot-clinic.js\":\"public/koot-1577169530400/includes/chunk.1b292c31853c22e5622c.js\",\"PageResult.js\":\"public/koot-1577169530400/includes/chunk.7866a40a63132c803250.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/koot-1577169530400/includes/entry.56b255076d99b8101781.js\",\"client.js\":\"public/koot-1577169530400/includes/entry.7facb70f30181afb9ba2.js\",\"commons.js\":\"public/koot-1577169530400/includes/entry.f328fa745904bfa32745.js\",\"critical.css\":\"public/koot-1577169530400/includes/extract.5.9eb0110f38931bbeedf6.css\",\"critical.js\":\"public/koot-1577169530400/includes/entry.9eb0110f38931bbeedf6.js\",\"vendors~PageResult.js\":\"public/koot-1577169530400/includes/chunk.8c0f7e7742819a6d8074.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/koot-1577169530400/includes/extract.all.e1e59a32ee0db39e793c44525afaafee.small.css\"},\"service-worker\":[\"public/koot-1577169530400/service-worker.zh.js\"]}}");
    } catch (e) {
      chunkmap = false;
    }

    if (_typeof(chunkmap) !== 'object' && typeof getDistPath() === 'string') {
      chunkmap = fs.readJsonSync(getChunkmapPath());
      if (process.env.WEBPACK_BUILD_STAGE === 'server') global.chunkmap = chunkmap;
    }

    if (true) cachedChunkmap = chunkmap;
    return chunkmap;
  }();

  if (_typeof(chunkmap) === 'object') {
    // let chunkmap = fs.readJsonSync(pathChunckmap)
    if (getFullResult) return chunkmap || {};
    if (isI18nEnabled && isI18nDefault) return chunkmap[".".concat(localeId)] || {};
  }

  return chunkmap || {};
};

module.exports = getChunkmap;

/***/ }),

/***/ "./node_modules/koot/utils/get-client-file-path.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/utils/get-client-file-path.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path");

var getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

var getPublicPath = __webpack_require__(/*! ./get-public-dir */ "./node_modules/koot/utils/get-public-dir.js");

var getChunkmap = __webpack_require__(/*! ./get-chunkmap */ "./node_modules/koot/utils/get-chunkmap.js");
/**
 * 获指定文件在客户端/取浏览器端中的可访问路径
 * @param {String} filename 要查找的文件的文件名。根据打包文件对应表 (chunkmap) 查询文件名和实际打包结果文件的对应关系
 * @param {String} [localeId] 当前语言
 * @param {Boolean} [isPathname = false] 如果标记为 true，表示提供的 filename 为确切的访问地址，无需查询对照表，直接返回结果
 * @returns {String|String[]} 浏览器环境中的访问路径、空字符串或包含所有可能结果的 Array
 */


var getFilePath = function getFilePath(filename, localeId) {
  var isPathname = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 如果第一个参数为 true，表示标记为 pathname
  if (filename === true) return getFilePath(localeId, isPathname || undefined, true);

  if (typeof localeId === 'undefined') {
    try {
      localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
    } catch (e) {}
  }

  var pathPublic = getPublicPath();
  var i18nType = getI18nType();
  var isI18nDefault = i18nType === 'default';
  var isDev =  false ||  true && false; // const localeId = 'zh'
  // 如果标记为 pathname，直接返回结果

  if (isPathname) return pathPublic + filename.replace(new RegExp('(^\\.\\/|^)public\\/' + ( true ? "".concat("koot-1577169530400", "\\/") : undefined)), '');
  var chunkmap = getChunkmap(localeId);
  var regPublicPath = chunkmap['.public'] ? new RegExp("(^\\.\\/|^)".concat(chunkmap['.public'])) : /(^\.\/|^)public\//;
  /**************************************************************************
   * ┌─┐┌─┐┌┬┐┌┬┐┌─┐┌┐┌  ┌─┐┬ ┬┌┐┌┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
   * │  │ ││││││││ ││││  ├┤ │ │││││   │ ││ ││││└─┐
   * └─┘└─┘┴ ┴┴ ┴└─┘┘└┘  └  └─┘┘└┘└─┘ ┴ ┴└─┘┘└┘└─┘
   *************************************************************************/

  /**
   * 返回可供客户端/浏览器端使用的访问地址
   * @param {String} pathname
   * @returns {String}
   */

  var getResultPathname = function getResultPathname(pathname) {
    return pathPublic + pathname.replace(regPublicPath, '');
  };
  /**************************************************************************
   * ┌┬┐┌─┐┌┐ ┬ ┬┌─┐
   *  ││├┤ ├┴┐│ ││ ┬
   * ─┴┘└─┘└─┘└─┘└─┘
   *************************************************************************/
  // console.log('----------')
  // console.log(filename)
  // console.log(chunkmap)
  // console.log(chunkmap['.files'])
  // console.log(chunkmap['.files'][filename])
  // console.log(regPublicPath)
  // console.log(pathPublic + chunkmap['.files'][filename].replace(regPublicPath, ''))
  // console.log({
  //     regPublicPath,
  //     'process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER': process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER
  // })
  // console.log('----------')

  /**************************************************************************
   * ┌─┐┬ ┬┌─┐┌─┐┬┌─   ┬   ┬─┐┌─┐┌┬┐┬─┐┬ ┬┌┐┌┌─┐
   * │  ├─┤├┤ │  ├┴┐  ┌┼─  ├┬┘├┤  │ ├┬┘│ ││││└─┐
   * └─┘┴ ┴└─┘└─┘┴ ┴  └┘   ┴└─└─┘ ┴ ┴└─└─┘┘└┘└─┘
   *************************************************************************/
  // 检查 `.files` 下是否有该文件名的直接对应
  // 如果有，直接返回该结果


  if (_typeof(chunkmap) === 'object' && _typeof(chunkmap['.files']) === 'object' && typeof chunkmap['.files'][filename] === 'string') {
    return getResultPathname(chunkmap['.files'][filename]);
  }

  if (isDev) {
    var prefix = pathPublic + (isI18nDefault ? localeId : '');
    if (_typeof(chunkmap['.files']) === 'object' && typeof chunkmap['.files'][filename] === 'string') return prefix + chunkmap['.files'][filename];
    return prefix + ".".concat(filename);
  }
  /** @type {String} 目标文件的扩展名 */


  var extname = path.extname(filename);
  /** @type {String} 目标文件的文件名（不包括扩展名） */

  var basename = path.basename(filename, extname); // 检查 `.entrypoints` 下是否有该文件的文件名对应（不包括扩展名）
  // 如果有，同时只有一个结果，返回该结果
  // 如果有，同时有多个结果，返回包含所有结果的 Array

  if (Array.isArray(chunkmap['.entrypoints'][basename])) {
    var files = chunkmap['.entrypoints'][basename].filter(function (file) {
      return path.extname(file) === extname;
    });
    if (files.length === 1) return getResultPathname(files[0]);else if (files.length) return files.map(function (file) {
      return getResultPathname(file);
    });
  } // 检查 chunkmap 第一级是否有包含该文件的文件名的对应（不包括扩展名）
  // 如果有，直接返回该结果


  if (_typeof(chunkmap) === 'object') {
    var result;

    if (Array.isArray(chunkmap[basename])) {
      chunkmap[basename].some(function (value) {
        if (path.extname(value) === extname) {
          result = value;
          return true;
        }

        return false;
      });
    }

    if (result) return getResultPathname(result);
  } // 如果没有找到 chunkmap 或是 chunkmap 中未找到目标项目，转为过滤文件形式


  if (fs.existsSync(path.resolve(pathPublic, filename))) {
    return '/' + filename;
  }

  console.warn("File not found:" + (isI18nDefault ? "[".concat(localeId, "] ") : '') + " ".concat(filename));
  return ''; // const segs = pathname.split('/').filter(seg => seg !== '/')
  // const file = segs.pop()
  // const dir = segs.length ? `${segs.join('/')}/` : ''
  // return `/${dir}${
  //     require('./filterTargetFile')(
  //         require('./readFilesInPath')(`./${distPathname}/public/${appName ? `${appName}/` : ''}${dir}`),
  //         file
  //     )}`
};

module.exports = getFilePath; // module.exports = (pathname, pathDist = 'dist') => {
//     if (__DEV__) {
//         return `http://localhost:${process.env.WEBPACK_DEV_SERVER_PORT || '3001'}/dist/${pathname}`
//     } else {
//         const segs = pathname.split('/').filter(seg => seg !== '/')
//         const file = segs.pop()
//         const dir = segs.length ? `${segs.join('/')}/` : ''
//         return `/${dir}${
//             require('./filterTargetFile')(
//                 require('./readFilesInPath')(`./${pathDist}/public/${dir}`),
//                 file
//             )}`
//     }
// }

/***/ }),

/***/ "./node_modules/koot/utils/get-cwd.js":
/*!********************************************!*\
  !*** ./node_modules/koot/utils/get-cwd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 获取运行目录
 * @returns {String}
 */
module.exports = function () {
  // console.log('process.env.KOOT_CWD', process.env.KOOT_CWD)
  // console.log('process.cwd()', process.cwd())
  return typeof process.env.KOOT_CWD === 'string' ? process.env.KOOT_CWD : process.cwd();
};

/***/ }),

/***/ "./node_modules/koot/utils/get-dist-path.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/utils/get-dist-path.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path");

var getCwd = __webpack_require__(/*! ./get-cwd */ "./node_modules/koot/utils/get-cwd.js");

var p;
/**
 * 获取打包结果路径
 * @returns {String} 打包结果路径 (硬盘绝对路径)
 */

module.exports = function () {
  // console.log('global.KOOT_DIST_DIR', global.KOOT_DIST_DIR)
  if (typeof p !== 'string') {
    p = typeof global.KOOT_DIST_DIR === 'string' ? global.KOOT_DIST_DIR : function () {
      var cwd = getCwd();
      var parent = path.resolve(cwd, '..');
      var result = path.resolve(cwd, "dist/dist-ssr-server");

      while (!fs.existsSync(result) && cwd !== parent) {
        cwd = parent;
        parent = path.resolve(cwd, '..');
        result = path.resolve(cwd, "dist/dist-ssr-server");
      }

      if (fs.existsSync(result)) return result;
      return path.resolve(cwd, "dist/dist-ssr-server");
    }();
  }

  return p;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-port.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/utils/get-port.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// require('./init-node-env')()

/**
 * 获取当前环境的服务器端口号
 * @param {Object|Number} port 
 * @param {String} [env=process.env.WEBPACK_BUILD_ENV] 
 * @returns {Number}
 */
module.exports = function (port) {
  var env = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "prod";
  var defaultPort = typeof process.env.SERVER_PORT === 'undefined' && "string" !== 'undefined' ? "8080" : process.env.SERVER_PORT;

  if (_typeof(port) === 'object') {
    if (!env) env = 'prod';
    if (typeof port[env] !== 'undefined') return port[env];
    return defaultPort;
  }

  if (typeof port !== 'undefined' && typeof port !== 'boolean') return port;
  return defaultPort;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-public-dir.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/utils/get-public-dir.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getWDSport = __webpack_require__(/*! ./get-webpack-dev-server-port */ "./node_modules/koot/utils/get-webpack-dev-server-port.js");
/**
 * 获取浏览器环境中的访问根路径
 * @returns {String} 浏览器环境中的访问根路径
 */


module.exports = function () {
  var isDev =  false ||  true && false;

  if (false) {}

  if (isDev) {
    var port = getWDSport();
    var origin = typeof global.koaCtxOrigin === 'string' ? global.koaCtxOrigin.split(':').slice(0, 2).join(':') : 'http://localhost';
    return "".concat(origin, ":").concat(port, "/dist/");
  }

  return '/';
};

/***/ }),

/***/ "./node_modules/koot/utils/get-webpack-dev-server-port.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/utils/get-webpack-dev-server-port.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取 webpack-dev-server 端口号
 * @returns {Number}
 */
module.exports = function () {
  // console.log('process.env.WEBPACK_DEV_SERVER_PORT', process.env.WEBPACK_DEV_SERVER_PORT)
  return "3001" || false;
};

/***/ }),

/***/ "./node_modules/koot/utils/read-client-file.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot/utils/read-client-file.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path");

var isUrl = __webpack_require__(/*! is-url */ "is-url");

var getFilePath = __webpack_require__(/*! ./get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");

var generateFilemap = __webpack_require__(/*! ./generate-filemap-from-compilation */ "./node_modules/koot/utils/generate-filemap-from-compilation.js");

var getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

var getPort = __webpack_require__(/*! ./get-port */ "./node_modules/koot/utils/get-port.js");

var getDirDistPublic = __webpack_require__(/*! ../libs/get-dir-dist-public */ "./node_modules/koot/libs/get-dir-dist-public.js");
/**
 * 读取目标客户端打包结果文件的内容
 * @param {String} filename 要查找的文件的文件名。根据打包文件对应表 (chunkmap) 查询文件名和实际打包结果文件的对应关系
 * @param {String} [localeId] 当前语言
 * @param {Object} [compilation] Webpack compilation 对象
 * @param {Boolean} [isPathname=false] 如果标记为 true，表示提供的 filename 为确切的访问地址，无需查询对照表，直接返回结果
 * @returns {String} 文件内容
 */


var readClientFile = function readClientFile(filename, localeId, compilation) {
  var isPathname = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // 如果第一个参数为 true，表示标记为 pathname
  if (filename === true) return readClientFile(localeId, compilation || undefined, isPathname || undefined, true); // 如果提供了 webpack compilation 数据，尝试从其中查询对应文件的最终内容并返回

  if (_typeof(compilation) === 'object') {
    var filemap = generateFilemap(compilation);

    if (_typeof(filemap) === 'object') {
      // console.log('\n' + filename)
      // console.log(`typeof filemap["${filename}"]`, typeof filemap[filename])
      // console.log(`typeof compilation.assets["${filemap[filename]}"]`, typeof compilation.assets[filemap[filename]])
      // for (let key in compilation) {
      //     console.log(key)
      // }
      if (typeof filemap[filename] === 'string' && typeof compilation.assets[filemap[filename]] !== 'undefined') {
        var asset = compilation.assets[filemap[filename]]; // console.log(filename, filemap[filename])
        // if (!asset._value) {
        //     console.log(asset)
        // }
        // console.log('typeof asset.source', typeof asset.source)

        if (typeof asset.source === 'function') return asset.source();
        if (typeof asset._value !== 'undefined') return asset._value;
        if (typeof asset._cachedSource !== 'undefined') return asset._cachedSource; // return '123'
      }
    }
  } // 在打包结果中寻找指定文件


  var pathnames = getFilePath(filename, localeId, isPathname);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];
  var results = pathnames.map(function (pathname) {
    if (isUrl(pathname)) {
      if (false) { var syncRequest; } else {
        return "<!-- The pathname for file '".concat(filename, "' is a URL. Rendering file content from URL can only be done in DEV mode. -->");
      }
    }

    if (false) {}

    return fs.readFileSync(path.resolve(getDirDistPublic(getDistPath()), pathname.replace(/^\//, '')), 'utf-8');
  });
  return results.join('\n\n');
};

module.exports = readClientFile;

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var _Symbol = root.Symbol;
module.exports = _Symbol;

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

module.exports = arrayMap;

/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */


var baseFor = createBaseFor();
module.exports = baseFor;

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());

    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */


function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

module.exports = baseSet;

/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
module.exports = baseSetToString;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }

  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

module.exports = createAssigner;

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

module.exports = createBaseFor;

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = _typeof(index);

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

module.exports = isIterateeCall;

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used to match property names within property paths. */


var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");
/** Used as the maximum memoize cache size. */


var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;

/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
module.exports = setToString;

/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");
/** Used to match property names within property paths. */


var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
module.exports = stringToPath;

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */


function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = MapCache;
module.exports = memoize;

/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */


var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
module.exports = merge;

/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");
/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */


function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */


function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),

/***/ "./node_modules/react-router/lib/AsyncUtils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router/lib/AsyncUtils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.loopAsync = loopAsync;
exports.mapAsync = mapAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = void 0;

  function done() {
    isDone = true;

    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(Array.prototype.slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;

    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}

function mapAsync(array, work, callback) {
  var length = array.length;
  var values = [];
  if (length === 0) return callback(null, values);
  var isDone = false,
      doneCount = 0;

  function done(index, error, value) {
    if (isDone) return;

    if (error) {
      isDone = true;
      callback(error);
    } else {
      values[index] = value;
      isDone = ++doneCount === length;
      if (isDone) callback(null, values);
    }
  }

  array.forEach(function (item, index) {
    work(item, index, function (error, value) {
      done(index, error, value);
    });
  });
}

/***/ }),

/***/ "./node_modules/react-router/lib/ContextUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/lib/ContextUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ContextProvider = ContextProvider;
exports.ContextSubscriber = ContextSubscriber;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // Works around issues with context updates failing to propagate.
// Caveat: the context value is expected to never change its identity.
// https://github.com/facebook/react/issues/2517
// https://github.com/reactjs/react-router/issues/470


var contextProviderShape = _propTypes2.default.shape({
  subscribe: _propTypes2.default.func.isRequired,
  eventIndex: _propTypes2.default.number.isRequired
});

function makeContextName(name) {
  return '@@contextSubscriber/' + name;
}

var prefixUnsafeLifecycleMethods = typeof _react2.default.forwardRef !== 'undefined';

function ContextProvider(name) {
  var _childContextTypes, _config;

  var contextName = makeContextName(name);
  var listenersKey = contextName + '/listeners';
  var eventIndexKey = contextName + '/eventIndex';
  var subscribeKey = contextName + '/subscribe';
  var config = (_config = {
    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),
    getChildContext: function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextName] = {
        eventIndex: this[eventIndexKey],
        subscribe: this[subscribeKey]
      }, _ref;
    },
    // this method will be updated to UNSAFE_componentWillMount below for React versions >= 16.3
    componentWillMount: function componentWillMount() {
      this[listenersKey] = [];
      this[eventIndexKey] = 0;
    },
    // this method will be updated to UNSAFE_componentWillReceiveProps below for React versions >= 16.3
    componentWillReceiveProps: function componentWillReceiveProps() {
      this[eventIndexKey]++;
    },
    componentDidUpdate: function componentDidUpdate() {
      var _this = this;

      this[listenersKey].forEach(function (listener) {
        return listener(_this[eventIndexKey]);
      });
    }
  }, _config[subscribeKey] = function (listener) {
    var _this2 = this; // No need to immediately call listener here.


    this[listenersKey].push(listener);
    return function () {
      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
        return item !== listener;
      });
    };
  }, _config);

  if (prefixUnsafeLifecycleMethods) {
    config.UNSAFE_componentWillMount = config.componentWillMount;
    config.UNSAFE_componentWillReceiveProps = config.componentWillReceiveProps;
    delete config.componentWillMount;
    delete config.componentWillReceiveProps;
  }

  return config;
}

function ContextSubscriber(name) {
  var _contextTypes, _config2;

  var contextName = makeContextName(name);
  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
  var handleContextUpdateKey = contextName + '/handleContextUpdate';
  var unsubscribeKey = contextName + '/unsubscribe';
  var config = (_config2 = {
    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),
    getInitialState: function getInitialState() {
      var _ref2;

      if (!this.context[contextName]) {
        return {};
      }

      return _ref2 = {}, _ref2[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref2;
    },
    componentDidMount: function componentDidMount() {
      if (!this.context[contextName]) {
        return;
      }

      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
    },
    // this method will be updated to UNSAFE_componentWillReceiveProps below for React versions >= 16.3
    componentWillReceiveProps: function componentWillReceiveProps() {
      var _setState;

      if (!this.context[contextName]) {
        return;
      }

      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
    },
    componentWillUnmount: function componentWillUnmount() {
      if (!this[unsubscribeKey]) {
        return;
      }

      this[unsubscribeKey]();
      this[unsubscribeKey] = null;
    }
  }, _config2[handleContextUpdateKey] = function (eventIndex) {
    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
      var _setState2;

      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
    }
  }, _config2);

  if (prefixUnsafeLifecycleMethods) {
    config.UNSAFE_componentWillReceiveProps = config.componentWillReceiveProps;
    delete config.componentWillReceiveProps;
  }

  return config;
}

/***/ }),

/***/ "./node_modules/react-router/lib/PatternUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/lib/PatternUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.compilePattern = compilePattern;
exports.matchPattern = matchPattern;
exports.getParamNames = getParamNames;
exports.getParams = getParams;
exports.formatPattern = formatPattern;

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];
  var match = void 0,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)|\\\(|\\\)/g;

  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '**') {
      regexpSource += '(.*)';
      paramNames.push('splat');
    } else if (match[0] === '*') {
      regexpSource += '(.*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    } else if (match[0] === '\\(') {
      regexpSource += '\\(';
    } else if (match[0] === '\\)') {
      regexpSource += '\\)';
    }

    tokens.push(match[0]);
    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = Object.create(null);

function compilePattern(pattern) {
  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);
  return CompiledPatternsCache[pattern];
}
/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 * - **             Consumes (greedy) all characters up to the next character
 *                  in the pattern, or to the end of the URL if there is none
 *
 *  The function calls callback(error, matched) when finished.
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */


function matchPattern(pattern, pathname) {
  // Ensure pattern starts with leading slash for consistency with pathname.
  if (pattern.charAt(0) !== '/') {
    pattern = '/' + pattern;
  }

  var _compilePattern2 = compilePattern(pattern),
      regexpSource = _compilePattern2.regexpSource,
      paramNames = _compilePattern2.paramNames,
      tokens = _compilePattern2.tokens;

  if (pattern.charAt(pattern.length - 1) !== '/') {
    regexpSource += '/?'; // Allow optional path separator at end.
  } // Special-case patterns like '*' for catch-all routes.


  if (tokens[tokens.length - 1] === '*') {
    regexpSource += '$';
  }

  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));

  if (match == null) {
    return null;
  }

  var matchedPath = match[0];
  var remainingPathname = pathname.substr(matchedPath.length);

  if (remainingPathname) {
    // Require that the match ends at a path separator, if we didn't match
    // the full path, so any remaining pathname is a new path segment.
    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
      return null;
    } // If there is a remaining pathname, treat the path separator as part of
    // the remaining pathname for properly continuing the match.


    remainingPathname = '/' + remainingPathname;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: match.slice(1).map(function (v) {
      return v && decodeURIComponent(v);
    })
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var match = matchPattern(pattern, pathname);

  if (!match) {
    return null;
  }

  var paramNames = match.paramNames,
      paramValues = match.paramValues;
  var params = {};
  paramNames.forEach(function (paramName, index) {
    params[paramName] = paramValues[index];
  });
  return params;
}
/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */


function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern),
      tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0,
      parenHistory = [];
  var token = void 0,
      paramName = void 0,
      paramValue = void 0;

  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*' || token === '**') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;
      !(paramValue != null || parenCount > 0) ?  true ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : undefined : void 0;
      if (paramValue != null) pathname += encodeURI(paramValue);
    } else if (token === '(') {
      parenHistory[parenCount] = '';
      parenCount += 1;
    } else if (token === ')') {
      var parenText = parenHistory.pop();
      parenCount -= 1;
      if (parenCount) parenHistory[parenCount - 1] += parenText;else pathname += parenText;
    } else if (token === '\\(') {
      pathname += '(';
    } else if (token === '\\)') {
      pathname += ')';
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];
      !(paramValue != null || parenCount > 0) ?  true ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : undefined : void 0;

      if (paramValue == null) {
        if (parenCount) {
          parenHistory[parenCount - 1] = '';
          var curTokenIdx = tokens.indexOf(token);
          var tokensSubset = tokens.slice(curTokenIdx, tokens.length);
          var nextParenIdx = -1;

          for (var _i = 0; _i < tokensSubset.length; _i++) {
            if (tokensSubset[_i] == ')') {
              nextParenIdx = _i;
              break;
            }
          }

          !(nextParenIdx > 0) ?  true ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren at segment "%s"', pattern, tokensSubset.join('')) : undefined : void 0; // jump to ending paren

          i = curTokenIdx + nextParenIdx - 1;
        }
      } else if (parenCount) parenHistory[parenCount - 1] += encodeURIComponent(paramValue);else pathname += encodeURIComponent(paramValue);
    } else {
      if (parenCount) parenHistory[parenCount - 1] += token;else pathname += token;
    }
  }

  !(parenCount <= 0) ?  true ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren', pattern) : undefined : void 0;
  return pathname.replace(/\/+/g, '/');
}

/***/ }),

/***/ "./node_modules/react-router/lib/PromiseUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/lib/PromiseUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isPromise = isPromise;

function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

/***/ }),

/***/ "./node_modules/react-router/lib/RouteUtils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router/lib/RouteUtils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
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

exports.isReactChildren = isReactChildren;
exports.createRouteFromReactElement = createRouteFromReactElement;
exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
exports.createRoutes = createRoutes;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isValidChild(object) {
  return object == null || _react2.default.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (route.children) {
    var childRoutes = createRoutesFromReactChildren(route.children, route);
    if (childRoutes.length) route.childRoutes = childRoutes;
    delete route.children;
  }

  return route;
}
/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router'
 *
 *   const routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */


function createRoutesFromReactChildren(children, parentRoute) {
  var routes = [];

  _react2.default.Children.forEach(children, function (element) {
    if (_react2.default.isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        var route = element.type.createRouteFromReactElement(element, parentRoute);
        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}
/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */


function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (routes && !Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}

/***/ }),

/***/ "./node_modules/react-router/lib/RouterContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router/lib/RouterContext.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _extends = Object.assign || function (target) {
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

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactIs = __webpack_require__(/*! react-is */ "react-is");

var _createReactClass = __webpack_require__(/*! create-react-class */ "create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _getRouteParams = __webpack_require__(/*! ./getRouteParams */ "./node_modules/react-router/lib/getRouteParams.js");

var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

var _ContextUtils = __webpack_require__(/*! ./ContextUtils */ "./node_modules/react-router/lib/ContextUtils.js");

var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ "./node_modules/react-router/lib/RouteUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * A <RouterContext> renders the component tree for a given router state
 * and sets the history object and the current location in context.
 */


var RouterContext = (0, _createReactClass2.default)({
  displayName: 'RouterContext',
  mixins: [(0, _ContextUtils.ContextProvider)('router')],
  propTypes: {
    router: _propTypes.object.isRequired,
    location: _propTypes.object.isRequired,
    routes: _propTypes.array.isRequired,
    params: _propTypes.object.isRequired,
    components: _propTypes.array.isRequired,
    createElement: _propTypes.func.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      createElement: _react2.default.createElement
    };
  },
  childContextTypes: {
    router: _propTypes.object.isRequired
  },
  getChildContext: function getChildContext() {
    return {
      router: this.props.router
    };
  },
  createElement: function createElement(component, props) {
    return component == null ? null : this.props.createElement(component, props);
  },
  render: function render() {
    var _this = this;

    var _props = this.props,
        location = _props.location,
        routes = _props.routes,
        params = _props.params,
        components = _props.components,
        router = _props.router;
    var element = null;

    if (components) {
      element = components.reduceRight(function (element, components, index) {
        if (components == null) return element; // Don't create new children; use the grandchildren.

        var route = routes[index];
        var routeParams = (0, _getRouteParams2.default)(route, params);
        var props = {
          location: location,
          params: params,
          route: route,
          router: router,
          routeParams: routeParams,
          routes: routes
        };

        if ((0, _RouteUtils.isReactChildren)(element)) {
          props.children = element;
        } else if (element) {
          for (var prop in element) {
            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
          }
        } // Handle components is object for { [name]: component } but not valid element
        // type of react, such as React.memo, React.lazy and so on.


        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object' && !(0, _reactIs.isValidElementType)(components)) {
          var elements = {};

          for (var key in components) {
            if (Object.prototype.hasOwnProperty.call(components, key)) {
              // Pass through the key as a prop to createElement to allow
              // custom createElement functions to know which named component
              // they're rendering, for e.g. matching up to fetched data.
              elements[key] = _this.createElement(components[key], _extends({
                key: key
              }, props));
            }
          }

          return elements;
        }

        return _this.createElement(components, props);
      }, element);
    }

    !(element === null || element === false || _react2.default.isValidElement(element)) ?  true ? (0, _invariant2.default)(false, 'The root route must render a single element') : undefined : void 0;
    return element;
  }
});
exports.default = RouterContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/RouterUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/lib/RouterUtils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
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

exports.createRouterObject = createRouterObject;
exports.assignRouterState = assignRouterState;

function createRouterObject(history, transitionManager, state) {
  var router = _extends({}, history, {
    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
    isActive: transitionManager.isActive
  });

  return assignRouterState(router, state);
}

function assignRouterState(router, _ref) {
  var location = _ref.location,
      params = _ref.params,
      routes = _ref.routes;
  router.location = location;
  router.params = params;
  router.routes = routes;
  return router;
}

/***/ }),

/***/ "./node_modules/react-router/lib/TransitionUtils.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router/lib/TransitionUtils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getTransitionUtils;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/react-router/lib/AsyncUtils.js");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var PendingHooks = function PendingHooks() {
  var _this = this;

  _classCallCheck(this, PendingHooks);

  this.hooks = [];

  this.add = function (hook) {
    return _this.hooks.push(hook);
  };

  this.remove = function (hook) {
    return _this.hooks = _this.hooks.filter(function (h) {
      return h !== hook;
    });
  };

  this.has = function (hook) {
    return _this.hooks.indexOf(hook) !== -1;
  };

  this.clear = function () {
    return _this.hooks = [];
  };
};

function getTransitionUtils() {
  var enterHooks = new PendingHooks();
  var changeHooks = new PendingHooks();

  function createTransitionHook(hook, route, asyncArity, pendingHooks) {
    var isSync = hook.length < asyncArity;

    var transitionHook = function transitionHook() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      hook.apply(route, args);

      if (isSync) {
        var callback = args[args.length - 1]; // Assume hook executes synchronously and
        // automatically call the callback.

        callback();
      }
    };

    pendingHooks.add(transitionHook);
    return transitionHook;
  }

  function getEnterHooks(routes) {
    return routes.reduce(function (hooks, route) {
      if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3, enterHooks));
      return hooks;
    }, []);
  }

  function getChangeHooks(routes) {
    return routes.reduce(function (hooks, route) {
      if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4, changeHooks));
      return hooks;
    }, []);
  }

  function runTransitionHooks(length, iter, callback) {
    if (!length) {
      callback();
      return;
    }

    var redirectInfo = void 0;

    function replace(location) {
      redirectInfo = location;
    }

    (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
      iter(index, replace, function (error) {
        if (error || redirectInfo) {
          done(error, redirectInfo); // No need to continue.
        } else {
          next();
        }
      });
    }, callback);
  }
  /**
   * Runs all onEnter hooks in the given array of routes in order
   * with onEnter(nextState, replace, callback) and calls
   * callback(error, redirectInfo) when finished. The first hook
   * to use replace short-circuits the loop.
   *
   * If a hook needs to run asynchronously, it may use the callback
   * function. However, doing so will cause the transition to pause,
   * which could lead to a non-responsive UI if the hook is slow.
   */


  function runEnterHooks(routes, nextState, callback) {
    enterHooks.clear();
    var hooks = getEnterHooks(routes);
    return runTransitionHooks(hooks.length, function (index, replace, next) {
      var wrappedNext = function wrappedNext() {
        if (enterHooks.has(hooks[index])) {
          next.apply(undefined, arguments);
          enterHooks.remove(hooks[index]);
        }
      };

      hooks[index](nextState, replace, wrappedNext);
    }, callback);
  }
  /**
   * Runs all onChange hooks in the given array of routes in order
   * with onChange(prevState, nextState, replace, callback) and calls
   * callback(error, redirectInfo) when finished. The first hook
   * to use replace short-circuits the loop.
   *
   * If a hook needs to run asynchronously, it may use the callback
   * function. However, doing so will cause the transition to pause,
   * which could lead to a non-responsive UI if the hook is slow.
   */


  function runChangeHooks(routes, state, nextState, callback) {
    changeHooks.clear();
    var hooks = getChangeHooks(routes);
    return runTransitionHooks(hooks.length, function (index, replace, next) {
      var wrappedNext = function wrappedNext() {
        if (changeHooks.has(hooks[index])) {
          next.apply(undefined, arguments);
          changeHooks.remove(hooks[index]);
        }
      };

      hooks[index](state, nextState, replace, wrappedNext);
    }, callback);
  }
  /**
   * Runs all onLeave hooks in the given array of routes in order.
   */


  function runLeaveHooks(routes, prevState) {
    for (var i = 0, len = routes.length; i < len; ++i) {
      if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
    }
  }

  return {
    runEnterHooks: runEnterHooks,
    runChangeHooks: runChangeHooks,
    runLeaveHooks: runLeaveHooks
  };
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/computeChangedRoutes.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router/lib/computeChangedRoutes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");

function routeParamsChanged(route, prevState, nextState) {
  if (!route.path) return false;
  var paramNames = (0, _PatternUtils.getParamNames)(route.path);
  return paramNames.some(function (paramName) {
    return prevState.params[paramName] !== nextState.params[paramName];
  });
}
/**
 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
 * the change from prevState to nextState. We leave routes if either
 * 1) they are not in the next state or 2) they are in the next state
 * but their params have changed (i.e. /users/123 => /users/456).
 *
 * leaveRoutes are ordered starting at the leaf route of the tree
 * we're leaving up to the common parent route. enterRoutes are ordered
 * from the top of the tree we're entering down to the leaf route.
 *
 * changeRoutes are any routes that didn't leave or enter during
 * the transition.
 */


function computeChangedRoutes(prevState, nextState) {
  var prevRoutes = prevState && prevState.routes;
  var nextRoutes = nextState.routes;
  var leaveRoutes = void 0,
      changeRoutes = void 0,
      enterRoutes = void 0;

  if (prevRoutes) {
    var parentIsLeaving = false;
    leaveRoutes = prevRoutes.filter(function (route) {
      if (parentIsLeaving) {
        return true;
      } else {
        var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
        if (isLeaving) parentIsLeaving = true;
        return isLeaving;
      }
    }); // onLeave hooks start at the leaf route.

    leaveRoutes.reverse();
    enterRoutes = [];
    changeRoutes = [];
    nextRoutes.forEach(function (route) {
      var isNew = prevRoutes.indexOf(route) === -1;
      var paramsChanged = leaveRoutes.indexOf(route) !== -1;
      if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
    });
  } else {
    leaveRoutes = [];
    changeRoutes = [];
    enterRoutes = nextRoutes;
  }

  return {
    leaveRoutes: leaveRoutes,
    changeRoutes: changeRoutes,
    enterRoutes: enterRoutes
  };
}

exports.default = computeChangedRoutes;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/createMemoryHistory.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-router/lib/createMemoryHistory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createMemoryHistory;

var _useQueries = __webpack_require__(/*! history/lib/useQueries */ "./node_modules/history/lib/useQueries.js");

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = __webpack_require__(/*! history/lib/useBasename */ "./node_modules/history/lib/useBasename.js");

var _useBasename2 = _interopRequireDefault(_useBasename);

var _createMemoryHistory = __webpack_require__(/*! history/lib/createMemoryHistory */ "./node_modules/history/lib/createMemoryHistory.js");

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createMemoryHistory(options) {
  // signatures and type checking differ between `useQueries` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  var memoryHistory = (0, _createMemoryHistory2.default)(options);

  var createHistory = function createHistory() {
    return memoryHistory;
  };

  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
  return history;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/createTransitionManager.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-router/lib/createTransitionManager.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
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

exports.default = createTransitionManager;

var _routerWarning = __webpack_require__(/*! ./routerWarning */ "./node_modules/react-router/lib/routerWarning.js");

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _computeChangedRoutes2 = __webpack_require__(/*! ./computeChangedRoutes */ "./node_modules/react-router/lib/computeChangedRoutes.js");

var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

var _TransitionUtils = __webpack_require__(/*! ./TransitionUtils */ "./node_modules/react-router/lib/TransitionUtils.js");

var _TransitionUtils2 = _interopRequireDefault(_TransitionUtils);

var _isActive2 = __webpack_require__(/*! ./isActive */ "./node_modules/react-router/lib/isActive.js");

var _isActive3 = _interopRequireDefault(_isActive2);

var _getComponents = __webpack_require__(/*! ./getComponents */ "./node_modules/react-router/lib/getComponents.js");

var _getComponents2 = _interopRequireDefault(_getComponents);

var _matchRoutes = __webpack_require__(/*! ./matchRoutes */ "./node_modules/react-router/lib/matchRoutes.js");

var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function hasAnyProperties(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
  }

  return false;
}

function createTransitionManager(history, routes) {
  var state = {};

  var _getTransitionUtils = (0, _TransitionUtils2.default)(),
      runEnterHooks = _getTransitionUtils.runEnterHooks,
      runChangeHooks = _getTransitionUtils.runChangeHooks,
      runLeaveHooks = _getTransitionUtils.runLeaveHooks; // Signature should be (location, indexOnly), but needs to support (path,
  // query, indexOnly)


  function isActive(location, indexOnly) {
    location = history.createLocation(location);
    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
  }

  var partialNextState = void 0;

  function match(location, callback) {
    if (partialNextState && partialNextState.location === location) {
      // Continue from where we left off.
      finishMatch(partialNextState, callback);
    } else {
      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
        if (error) {
          callback(error);
        } else if (nextState) {
          finishMatch(_extends({}, nextState, {
            location: location
          }), callback);
        } else {
          callback();
        }
      });
    }
  }

  function finishMatch(nextState, callback) {
    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState),
        leaveRoutes = _computeChangedRoutes.leaveRoutes,
        changeRoutes = _computeChangedRoutes.changeRoutes,
        enterRoutes = _computeChangedRoutes.enterRoutes;

    runLeaveHooks(leaveRoutes, state); // Tear down confirmation hooks for left routes

    leaveRoutes.filter(function (route) {
      return enterRoutes.indexOf(route) === -1;
    }).forEach(removeListenBeforeHooksForRoute); // change and enter hooks are run in series

    runChangeHooks(changeRoutes, state, nextState, function (error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);
      runEnterHooks(enterRoutes, nextState, finishEnterHooks);
    });

    function finishEnterHooks(error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo); // TODO: Fetch components after state is updated.

      (0, _getComponents2.default)(nextState, function (error, components) {
        if (error) {
          callback(error);
        } else {
          // TODO: Make match a pure function and have some other API
          // for "match and update state".
          callback(null, null, state = _extends({}, nextState, {
            components: components
          }));
        }
      });
    }

    function handleErrorOrRedirect(error, redirectInfo) {
      if (error) callback(error);else callback(null, redirectInfo);
    }
  }

  var RouteGuid = 1;

  function getRouteID(route) {
    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return route.__id__ || create && (route.__id__ = RouteGuid++);
  }

  var RouteHooks = Object.create(null);

  function getRouteHooksForRoutes(routes) {
    return routes.map(function (route) {
      return RouteHooks[getRouteID(route)];
    }).filter(function (hook) {
      return hook;
    });
  }

  function transitionHook(location, callback) {
    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
      if (nextState == null) {
        // TODO: We didn't actually match anything, but hang
        // onto error/nextState so we don't have to matchRoutes
        // again in the listen callback.
        callback();
        return;
      } // Cache some state here so we don't have to
      // matchRoutes() again in the listen callback.


      partialNextState = _extends({}, nextState, {
        location: location
      });
      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);
      var result = void 0;

      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
        // Passing the location arg here indicates to
        // the user that this is a transition hook.
        result = hooks[i](location);
      }

      callback(result);
    });
  }
  /* istanbul ignore next: untestable with Karma */


  function beforeUnloadHook() {
    // Synchronously check to see if any route hooks want
    // to prevent the current window/tab from closing.
    if (state.routes) {
      var hooks = getRouteHooksForRoutes(state.routes);
      var message = void 0;

      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
        // Passing no args indicates to the user that this is a
        // beforeunload hook. We don't know the next location.
        message = hooks[i]();
      }

      return message;
    }
  }

  var unlistenBefore = void 0,
      unlistenBeforeUnload = void 0;

  function removeListenBeforeHooksForRoute(route) {
    var routeID = getRouteID(route);

    if (!routeID) {
      return;
    }

    delete RouteHooks[routeID];

    if (!hasAnyProperties(RouteHooks)) {
      // teardown transition & beforeunload hooks
      if (unlistenBefore) {
        unlistenBefore();
        unlistenBefore = null;
      }

      if (unlistenBeforeUnload) {
        unlistenBeforeUnload();
        unlistenBeforeUnload = null;
      }
    }
  }
  /**
   * Registers the given hook function to run before leaving the given route.
   *
   * During a normal transition, the hook function receives the next location
   * as its only argument and can return either a prompt message (string) to show the user,
   * to make sure they want to leave the page; or `false`, to prevent the transition.
   * Any other return value will have no effect.
   *
   * During the beforeunload event (in browsers) the hook receives no arguments.
   * In this case it must return a prompt message to prevent the transition.
   *
   * Returns a function that may be used to unbind the listener.
   */


  function listenBeforeLeavingRoute(route, hook) {
    var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
    var routeID = getRouteID(route, true);
    RouteHooks[routeID] = hook;

    if (thereWereNoRouteHooks) {
      // setup transition & beforeunload hooks
      unlistenBefore = history.listenBefore(transitionHook);
      if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
    }

    return function () {
      removeListenBeforeHooksForRoute(route);
    };
  }
  /**
   * This is the API for stateful environments. As the location
   * changes, we update state and call the listener. We can also
   * gracefully handle errors and redirects.
   */


  function listen(listener) {
    function historyListener(location) {
      if (state.location === location) {
        listener(null, state);
      } else {
        match(location, function (error, redirectLocation, nextState) {
          if (error) {
            listener(error);
          } else if (redirectLocation) {
            history.replace(redirectLocation);
          } else if (nextState) {
            listener(null, nextState);
          } else {
             true ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
          }
        });
      }
    } // TODO: Only use a single history listener. Otherwise we'll end up with
    // multiple concurrent calls to match.
    // Set up the history listener first in case the initial match redirects.


    var unsubscribe = history.listen(historyListener);

    if (state.location) {
      // Picking up on a matchContext.
      listener(null, state);
    } else {
      historyListener(history.getCurrentLocation());
    }

    return unsubscribe;
  }

  return {
    isActive: isActive,
    match: match,
    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
    listen: listen
  };
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/getComponents.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router/lib/getComponents.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/react-router/lib/AsyncUtils.js");

var _PromiseUtils = __webpack_require__(/*! ./PromiseUtils */ "./node_modules/react-router/lib/PromiseUtils.js");

function getComponentsForRoute(nextState, route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components);
    return;
  }

  var getComponent = route.getComponent || route.getComponents;

  if (getComponent) {
    var componentReturn = getComponent.call(route, nextState, callback);
    if ((0, _PromiseUtils.isPromise)(componentReturn)) componentReturn.then(function (component) {
      return callback(null, component);
    }, callback);
  } else {
    callback();
  }
}
/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getComponents method.
 */


function getComponents(nextState, callback) {
  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
    getComponentsForRoute(nextState, route, callback);
  }, callback);
}

exports.default = getComponents;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/getRouteParams.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-router/lib/getRouteParams.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");
/**
 * Extracts an object of params the given route cares about from
 * the given params object.
 */


function getRouteParams(route, params) {
  var routeParams = {};
  if (!route.path) return routeParams;
  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
    if (Object.prototype.hasOwnProperty.call(params, p)) {
      routeParams[p] = params[p];
    }
  });
  return routeParams;
}

exports.default = getRouteParams;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/isActive.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router/lib/isActive.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

exports.default = isActive;

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");

function deepEqual(a, b) {
  if (a == b) return true;
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return deepEqual(item, b[index]);
    });
  }

  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
    for (var p in a) {
      if (!Object.prototype.hasOwnProperty.call(a, p)) {
        continue;
      }

      if (a[p] === undefined) {
        if (b[p] !== undefined) {
          return false;
        }
      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
        return false;
      } else if (!deepEqual(a[p], b[p])) {
        return false;
      }
    }

    return true;
  }

  return String(a) === String(b);
}
/**
 * Returns true if the current pathname matches the supplied one, net of
 * leading and trailing slash normalization. This is sufficient for an
 * indexOnly route match.
 */


function pathIsActive(pathname, currentPathname) {
  // Normalize leading slash for consistency. Leading slash on pathname has
  // already been normalized in isActive. See caveat there.
  if (currentPathname.charAt(0) !== '/') {
    currentPathname = '/' + currentPathname;
  } // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
  // `/foo` as active, but in this case, we would already have failed the
  // match.


  if (pathname.charAt(pathname.length - 1) !== '/') {
    pathname += '/';
  }

  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
    currentPathname += '/';
  }

  return currentPathname === pathname;
}
/**
 * Returns true if the given pathname matches the active routes and params.
 */


function routeIsActive(pathname, routes, params) {
  var remainingPathname = pathname,
      paramNames = [],
      paramValues = []; // for...of would work here but it's probably slower post-transpilation.

  for (var i = 0, len = routes.length; i < len; ++i) {
    var route = routes[i];
    var pattern = route.path || '';

    if (pattern.charAt(0) === '/') {
      remainingPathname = pathname;
      paramNames = [];
      paramValues = [];
    }

    if (remainingPathname !== null && pattern) {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);

      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }

      if (remainingPathname === '') {
        // We have an exact match on the route. Just check that all the params
        // match.
        // FIXME: This doesn't work on repeated params.
        return paramNames.every(function (paramName, index) {
          return String(paramValues[index]) === String(params[paramName]);
        });
      }
    }
  }

  return false;
}
/**
 * Returns true if all key/value pairs in the given query are
 * currently active.
 */


function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;
  if (query == null) return true;
  return deepEqual(query, activeQuery);
}
/**
 * Returns true if a <Link> to the given pathname/query combination is
 * currently active.
 */


function isActive(_ref, indexOnly, currentLocation, routes, params) {
  var pathname = _ref.pathname,
      query = _ref.query;
  if (currentLocation == null) return false; // TODO: This is a bit ugly. It keeps around support for treating pathnames
  // without preceding slashes as absolute paths, but possibly also works
  // around the same quirks with basenames as in matchRoutes.

  if (pathname.charAt(0) !== '/') {
    pathname = '/' + pathname;
  }

  if (!pathIsActive(pathname, currentLocation.pathname)) {
    // The path check is necessary and sufficient for indexOnly, but otherwise
    // we still need to check the routes.
    if (indexOnly || !routeIsActive(pathname, routes, params)) {
      return false;
    }
  }

  return queryIsActive(query, currentLocation.query);
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/match.js":
/*!************************************************!*\
  !*** ./node_modules/react-router/lib/match.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
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

var _Actions = __webpack_require__(/*! history/lib/Actions */ "./node_modules/history/lib/Actions.js");

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _createMemoryHistory = __webpack_require__(/*! ./createMemoryHistory */ "./node_modules/react-router/lib/createMemoryHistory.js");

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router/lib/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ "./node_modules/react-router/lib/RouteUtils.js");

var _RouterUtils = __webpack_require__(/*! ./RouterUtils */ "./node_modules/react-router/lib/RouterUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}
/**
 * A high-level API to be used for server-side rendering.
 *
 * This function matches a location to a set of routes and calls
 * callback(error, redirectLocation, renderProps) when finished.
 *
 * Note: You probably don't want to use this in a browser unless you're using
 * server-side rendering with async routes.
 */


function match(_ref, callback) {
  var history = _ref.history,
      routes = _ref.routes,
      location = _ref.location,
      options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

  !(history || location) ?  true ? (0, _invariant2.default)(false, 'match needs a history or a location') : undefined : void 0;
  history = history ? history : (0, _createMemoryHistory2.default)(options);
  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

  if (location) {
    // Allow match({ location: '/the/path', ... })
    location = history.createLocation(location);
  } else {
    location = history.getCurrentLocation();
  }

  transitionManager.match(location, function (error, redirectLocation, nextState) {
    var renderProps = void 0;

    if (nextState) {
      var router = (0, _RouterUtils.createRouterObject)(history, transitionManager, nextState);
      renderProps = _extends({}, nextState, {
        router: router,
        matchContext: {
          transitionManager: transitionManager,
          router: router
        }
      });
    }

    callback(error, redirectLocation && history.createLocation(redirectLocation, _Actions.REPLACE), renderProps);
  });
}

exports.default = match;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/matchRoutes.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/lib/matchRoutes.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
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

exports.default = matchRoutes;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/react-router/lib/AsyncUtils.js");

var _PromiseUtils = __webpack_require__(/*! ./PromiseUtils */ "./node_modules/react-router/lib/PromiseUtils.js");

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");

var _routerWarning = __webpack_require__(/*! ./routerWarning */ "./node_modules/react-router/lib/routerWarning.js");

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ "./node_modules/react-router/lib/RouteUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getChildRoutes(route, location, paramNames, paramValues, callback) {
  if (route.childRoutes) {
    return [null, route.childRoutes];
  }

  if (!route.getChildRoutes) {
    return [];
  }

  var sync = true,
      result = void 0;
  var partialNextState = {
    location: location,
    params: createParams(paramNames, paramValues)
  };
  var childRoutesReturn = route.getChildRoutes(partialNextState, function (error, childRoutes) {
    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);

    if (sync) {
      result = [error, childRoutes];
      return;
    }

    callback(error, childRoutes);
  });
  if ((0, _PromiseUtils.isPromise)(childRoutesReturn)) childRoutesReturn.then(function (childRoutes) {
    return callback(null, (0, _RouteUtils.createRoutes)(childRoutes));
  }, callback);
  sync = false;
  return result; // Might be undefined.
}

function getIndexRoute(route, location, paramNames, paramValues, callback) {
  if (route.indexRoute) {
    callback(null, route.indexRoute);
  } else if (route.getIndexRoute) {
    var partialNextState = {
      location: location,
      params: createParams(paramNames, paramValues)
    };
    var indexRoutesReturn = route.getIndexRoute(partialNextState, function (error, indexRoute) {
      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
    });
    if ((0, _PromiseUtils.isPromise)(indexRoutesReturn)) indexRoutesReturn.then(function (indexRoute) {
      return callback(null, (0, _RouteUtils.createRoutes)(indexRoute)[0]);
    }, callback);
  } else if (route.childRoutes || route.getChildRoutes) {
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
        return;
      }

      var pathless = childRoutes.filter(function (childRoute) {
        return !childRoute.path;
      });
      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
          if (error || indexRoute) {
            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
            done(error, routes);
          } else {
            next();
          }
        });
      }, function (err, routes) {
        callback(null, routes);
      });
    };

    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);

    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}

function assignParams(params, paramNames, paramValues) {
  return paramNames.reduce(function (params, paramName, index) {
    var paramValue = paramValues && paramValues[index];

    if (Array.isArray(params[paramName])) {
      params[paramName].push(paramValue);
    } else if (paramName in params) {
      params[paramName] = [params[paramName], paramValue];
    } else {
      params[paramName] = paramValue;
    }

    return params;
  }, params);
}

function createParams(paramNames, paramValues) {
  return assignParams({}, paramNames, paramValues);
}

function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
  var pattern = route.path || '';

  if (pattern.charAt(0) === '/') {
    remainingPathname = location.pathname;
    paramNames = [];
    paramValues = [];
  } // Only try to match the path if the route actually has a pattern, and if
  // we're not just searching for potential nested absolute paths.


  if (remainingPathname !== null && pattern) {
    try {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);

      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }
    } catch (error) {
      callback(error);
    } // By assumption, pattern is non-empty here, which is the prerequisite for
    // actually terminating a match.


    if (remainingPathname === '') {
      var match = {
        routes: [route],
        params: createParams(paramNames, paramValues)
      };
      getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
        if (error) {
          callback(error);
        } else {
          if (Array.isArray(indexRoute)) {
            var _match$routes;

             true ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
              return !route.path;
            }), 'Index routes should not have paths') : undefined;

            (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
          } else if (indexRoute) {
             true ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : undefined;
            match.routes.push(indexRoute);
          }

          callback(null, match);
        }
      });
      return;
    }
  }

  if (remainingPathname != null || route.childRoutes) {
    // Either a) this route matched at least some of the path or b)
    // we don't have to load this route's children asynchronously. In
    // either case continue checking for matches in the subtree.
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
      } else if (childRoutes) {
        // Check the child routes to see if any of them match.
        matchRoutes(childRoutes, location, function (error, match) {
          if (error) {
            callback(error);
          } else if (match) {
            // A child route matched! Augment the match and pass it up the stack.
            match.routes.unshift(route);
            callback(null, match);
          } else {
            callback();
          }
        }, remainingPathname, paramNames, paramValues);
      } else {
        callback();
      }
    };

    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);

    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}
/**
 * Asynchronously matches the given location to a set of routes and calls
 * callback(error, state) when finished. The state object will have the
 * following properties:
 *
 * - routes       An array of routes that matched, in hierarchical order
 * - params       An object of URL parameters
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getChildRoutes method.
 */


function matchRoutes(routes, location, callback, remainingPathname) {
  var paramNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var paramValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

  if (remainingPathname === undefined) {
    // TODO: This is a little bit ugly, but it works around a quirk in history
    // that strips the leading slash from pathnames when using basenames with
    // trailing slashes.
    if (location.pathname.charAt(0) !== '/') {
      location = _extends({}, location, {
        pathname: '/' + location.pathname
      });
    }

    remainingPathname = location.pathname;
  }

  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
      if (error || match) {
        done(error, match);
      } else {
        next();
      }
    });
  }, callback);
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/routerWarning.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router/lib/routerWarning.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = routerWarning;
exports._resetWarned = _resetWarned;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var warned = {};

function routerWarning(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  message = '[react-router] ' + message;

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
}

function _resetWarned() {
  warned = {};
}

/***/ }),

/***/ "./node_modules/react-router/lib/useRouterHistory.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-router/lib/useRouterHistory.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = useRouterHistory;

var _useQueries = __webpack_require__(/*! history/lib/useQueries */ "./node_modules/history/lib/useQueries.js");

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = __webpack_require__(/*! history/lib/useBasename */ "./node_modules/history/lib/useBasename.js");

var _useBasename2 = _interopRequireDefault(_useBasename);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function useRouterHistory(createHistory) {
  return function (options) {
    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
    return history;
  };
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src-api-server/config.js":
/*!**********************************!*\
  !*** ./src-api-server/config.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {/*
 * @Author:
 * @Date: 2019-12-10 15:16:39
 * @LastEditTime: 2019-12-13 12:41:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/src-api-server/config.js
 */
var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path"); // ============================================================================


var url =  false ? undefined : "http://clinic.cmcm.com";

var _fs$readJsonSync = fs.readJsonSync(path.resolve(__dirname, '../sh', "secret.".concat( false ? undefined : 'prod', ".json"))),
    sql_config = _fs$readJsonSync.sql_config,
    page_speed_api_key = _fs$readJsonSync.page_speed_api_key;

module.exports = {
  /** Koot Clinic 域名 */
  url: url,

  /** API 服务器端口 */
  port: process.env.KOOT_CLINIC_API_SERVER_PORT || ( false ? undefined // 开发环境
  : 8081),
  // 生产环境

  /** SQL 服务器相关设置 */
  sql_config: sql_config,

  /** PageSpeed Insights API Key */
  page_speed_api_key: page_speed_api_key,

  /** 结果存储路径，在使用数据库操作前临时采用 */
  dirResults: path.resolve(__dirname, '.results'),

  /** 计划任务自动执行时间间隔 */
  autoTaskTime: 7,

  /** 重新诊断时间间隔 */
  revertTaskTime: 1
};
/* WEBPACK VAR INJECTION */}.call(this, "src-api-server"))

/***/ }),

/***/ "./src/apis/history.ts":
/*!*****************************!*\
  !*** ./src/apis/history.ts ***!
  \*****************************/
/*! exports provided: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/request */ "./src/utils/request.ts");

var get = function get(domain) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])('get', {
    url: "/api/urlHistory?url=".concat(encodeURIComponent(domain))
  });
};

/***/ }),

/***/ "./src/apis/result.ts":
/*!****************************!*\
  !*** ./src/apis/result.ts ***!
  \****************************/
/*! exports provided: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/request */ "./src/utils/request.ts");

var get = function get(resultId) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])('get', {
    url: "/api/result?id=".concat(resultId)
  });
};

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "546fb7ffcdaf11c64045ea0ecfee6bb5.svg";

/***/ }),

/***/ "./src/components/center/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/center/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");


var Center = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: __webpack_require__(/*! ./index.module.less */ "./src/components/center/index.module.less")
})(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", props);
});
/* harmony default export */ __webpack_exports__["default"] = (Center);

/***/ }),

/***/ "./src/components/center/index.module.less":
/*!*************************************************!*\
  !*** ./src/components/center/index.module.less ***!
  \*************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'ffca8f';const css = '@-webkit-keyframes fade-in{.ffca8f 0%{opacity:0}.ffca8f to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.ffca8f 0%{opacity:0}.ffca8f to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.ffca8f .link-color-inherit{color:inherit;text-decoration:underline}.ffca8f html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.ffca8f .link-color-inherit:active,.ffca8f html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.ffca8f{width:100%;max-width:1280px;margin-left:auto;margin-right:auto;border-left:20px solid transparent;border-right:20px solid transparent}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/components/icon/index.jsx":
/*!***************************************!*\
  !*** ./src/components/icon/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Icon = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: __webpack_require__(/*! ./index.module.less */ "./src/components/icon/index.module.less")
})(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      id = _ref.id,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["className", "style", "id", "icon"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: className,
    style: style
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: '#icon-' + (id || icon)
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/components/icon/index.module.less":
/*!***********************************************!*\
  !*** ./src/components/icon/index.module.less ***!
  \***********************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'f6f9cd';const css = '@-webkit-keyframes fade-in{.f6f9cd 0%{opacity:0}.f6f9cd to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.f6f9cd 0%{opacity:0}.f6f9cd to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.f6f9cd .link-color-inherit{color:inherit;text-decoration:underline}.f6f9cd html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.f6f9cd .link-color-inherit:active,.f6f9cd html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.f6f9cd{display:inline-block;width:16px;height:16px;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:text-top}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/components/loaders/spinner/index.jsx":
/*!**************************************************!*\
  !*** ./src/components/loaders/spinner/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Spinner = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: __webpack_require__(/*! ./index.module.less */ "./src/components/loaders/spinner/index.module.less")
})(function (_ref) {
  var className = _ref.className,
      component = _ref.component,
      style = _ref.style,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["className", "component", "style", "size"]);

  var Component = component || 'span';
  if (size && _typeof(style) !== 'object') style = {};

  if (size) {
    var s = parseInt(size);
    style.width = "".concat(s, "px");
    style.height = "".concat(s, "px");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
    className: className,
    style: style
  }, props));
});
/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/components/loaders/spinner/index.module.less":
/*!**********************************************************!*\
  !*** ./src/components/loaders/spinner/index.module.less ***!
  \**********************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'a2a489';const css = '@-webkit-keyframes fade-in{.a2a489 0%{opacity:0}.a2a489 to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.a2a489 0%{opacity:0}.a2a489 to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.a2a489 .link-color-inherit{color:inherit;text-decoration:underline}.a2a489 html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.a2a489 .link-color-inherit:active,.a2a489 html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.a2a489{display:inline-block;width:64px;height:64px;vertical-align:middle;position:relative;-webkit-animation-duration:1s;animation-duration:1s}.a2a489:after,.a2a489:before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%}.a2a489:before{border-top:4px solid #00b0ff;z-index:2;-webkit-animation:inherit;animation:inherit;-webkit-animation-name:spinning;animation-name:spinning;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes spinning{.a2a489 0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.a2a489 to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinning{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.a2a489:after{border:2px solid #d0d9dd}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/components/markdown/index.module.less":
/*!***************************************************!*\
  !*** ./src/components/markdown/index.module.less ***!
  \***************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'c302c2';const css = '@-webkit-keyframes fade-in{.c302c2 0%{opacity:0}.c302c2 to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.c302c2 0%{opacity:0}.c302c2 to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.c302c2 .link-color-inherit{color:inherit;text-decoration:underline}.c302c2 html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.c302c2 .link-color-inherit:active,.c302c2 html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.c302c2{position:relative}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/components/markdown/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/markdown/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.less */ "./src/components/markdown/index.module.less");
var _dec, _class, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // ============================================================================

// Functional Component =======================================================
var Markdown = (_dec = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_3__["default"]
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Markdown, _React$PureComponent);

  function Markdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Markdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Markdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ContainerRef", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    return _this;
  }

  _createClass(Markdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.ContainerRef.current) {
        var links = this.ContainerRef.current.querySelectorAll('a[href*="//"]');

        for (var i = 0; i < links.length; i++) {
          links[i].setAttribute('target', '_blank');
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props.className,
        dangerouslySetInnerHTML: {
          __html: marked__WEBPACK_IMPORTED_MODULE_2___default()(this.props.source)
        },
        ref: this.ContainerRef
      });
    }
  }]);

  return Markdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent), _temp)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Markdown);

/***/ }),

/***/ "./src/constants/actions.ts":
/*!**********************************!*\
  !*** ./src/constants/actions.ts ***!
  \**********************************/
/*! exports provided: FETCH_RESULT, FETCH_HISTORY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RESULT", function() { return FETCH_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_HISTORY", function() { return FETCH_HISTORY; });
var FETCH_RESULT = 'FETCH_RESULT';
var FETCH_HISTORY = 'FETCH_HISTORY';

/***/ }),

/***/ "./src/constants/app.ts":
/*!******************************!*\
  !*** ./src/constants/app.ts ***!
  \******************************/
/*! exports provided: repo, url, pathnames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repo", function() { return repo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathnames", function() { return pathnames; });
var repo = 'https://github.com/cmux/koot-clinic';
var url = "https://clinic.cmcm.com";
var pathnames = {
  api: '/api',
  result: "/result"
};

/***/ }),

/***/ "./src/index.inject.js":
/*!*****************************!*\
  !*** ./src/index.inject.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global
    __SVG_ICON_PACK__:false
*/
/* harmony default export */ __webpack_exports__["default"] = ({
  performanceInfos: function performanceInfos() {
    return "<!-- rendered: ".concat(new Date().toISOString(), " -->");
  },
  svgIconPack: "<svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n<defs>\n<symbol id=\"icon-ruler\" viewBox=\"0 0 16 16\">\n<title>ruler</title>\n<path d=\"M4.489 14.503v-1.014h0.506v1.014h0.507v-1.014h0.508v1.014h0.476v-1.521h0.507v1.521h0.507v-1.014h0.507v1.014h0.476v-1.014h0.507v1.014h0.508v-1.521h0.507v1.521h0.507v-1.014h0.475v1.014h0.507v-1.014h0.508v1.014h0.507v-1.521h0.476v1.521h1.521v-12.505l-12.505 12.505h2.492zM12.506 6.792v5.682h-5.682l5.682-5.683z\"></path>\n</symbol>\n<symbol id=\"icon-tools\" viewBox=\"0 0 16 16\">\n<title>tools</title>\n<path d=\"M14.142 3.968c0.479 1.157 0.251 2.537-0.69 3.478-1.036 1.035-2.601 1.198-3.817 0.511l-0.88 0.96 0.627 0.63 0.375-0.375c0.191-0.192 0.502-0.192 0.694 0l3.041 3.072c0.192 0.191 0.192 0.502 0 0.694l-1.388 1.388c-0.191 0.192-0.502 0.192-0.694 0l-3.041-3.072c-0.192-0.191-0.192-0.502 0-0.694l0.342-0.342-0.598-0.6-4.205 4.595c-0.384 0.383-1.005 0.383-1.388 0l-0.347-0.347c-0.383-0.383-0.383-1.005 0-1.388l4.791-4.012-3.182-3.191-1.005-0-1.163-1.87 0.936-0.938 1.912 1.171 0.013 0.984 3.219 3.232 0.937-0.784c-0.915-1.248-0.82-3.006 0.308-4.134 0.936-0.936 2.309-1.169 3.463-0.698l-2.062 2.034 1.736 1.736 2.066-2.038zM3.325 12.967c-0.192-0.191-0.502-0.191-0.694 0s-0.192 0.502 0 0.694c0.192 0.191 0.502 0.191 0.694 0 0.192-0.193 0.192-0.503 0-0.694z\"></path>\n</symbol>\n<symbol id=\"icon-envelop2\" viewBox=\"0 0 16 16\">\n<title>envelop2</title>\n<path d=\"M14.998 3c0.001 0.001 0.001 0.001 0.002 0.002v9.996c-0.001 0.001-0.001 0.001-0.002 0.002h-13.996c-0.001-0.001-0.001-0.001-0.002-0.002v-9.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996zM15 2h-14c-0.55 0-1 0.45-1 1v10c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-10c0-0.55-0.45-1-1-1v0z\"></path>\n<path d=\"M5.831 9.773l-3 2.182c-0.1 0.073-0.216 0.108-0.33 0.108-0.174 0-0.345-0.080-0.455-0.232-0.183-0.251-0.127-0.603 0.124-0.786l3-2.182c0.251-0.183 0.603-0.127 0.786 0.124s0.127 0.603-0.124 0.786z\"></path>\n<path d=\"M13.955 11.831c-0.11 0.151-0.282 0.232-0.455 0.232-0.115 0-0.23-0.035-0.33-0.108l-3-2.182c-0.251-0.183-0.307-0.534-0.124-0.786s0.534-0.307 0.786-0.124l3 2.182c0.251 0.183 0.307 0.535 0.124 0.786z\"></path>\n<path d=\"M13.831 4.955l-5.5 4c-0.099 0.072-0.215 0.108-0.331 0.108s-0.232-0.036-0.331-0.108l-5.5-4c-0.251-0.183-0.307-0.534-0.124-0.786s0.535-0.307 0.786-0.124l5.169 3.759 5.169-3.759c0.251-0.183 0.603-0.127 0.786 0.124s0.127 0.603-0.124 0.786v0z\"></path>\n</symbol>\n<symbol id=\"icon-hour-glass3\" viewBox=\"0 0 16 16\">\n<title>hour-glass3</title>\n<path d=\"M5.939 9.532c-1.49 0.81-2.591 2.472-2.87 4.468h9.862c-0.279-1.996-1.379-3.658-2.87-4.468-1.061-0.754-1.061-1.116-1.061-1.532s0-0.778 1.061-1.532c1.49-0.81 2.591-2.472 2.87-4.468h-9.862c0.279 1.996 1.379 3.658 2.87 4.468 1.061 0.754 1.061 1.116 1.061 1.532s-0 0.778-1.061 1.532zM2 15h12v1h-12zM2 0h12v1h-12z\"></path>\n</symbol>\n<symbol id=\"icon-knife\" viewBox=\"0 0 16 16\">\n<title>knife</title>\n<path d=\"M13 10h-10c-1.657 0-3 1.343-3 3s1.343 3 3 3h10c1.657 0 3-1.343 3-3s-1.343-3-3-3zM3 14c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1z\"></path>\n<path d=\"M3 9h2.78l2.927-4.212c0.946-1.361 0.609-3.23-0.752-4.176l-5.909 8.503c0.306-0.075 0.625-0.115 0.954-0.115z\"></path>\n<path d=\"M13 8h-5.308l-0.692 0.996v0.004h6c1.144 0 2.177 0.483 2.907 1.255-0.331-1.296-1.507-2.255-2.907-2.255z\"></path>\n</symbol>\n<symbol id=\"icon-menu7\" viewBox=\"0 0 16 16\">\n<title>menu7</title>\n<path d=\"M1 3h14v2h-14v-2z\"></path>\n<path d=\"M1 7h14v2h-14v-2z\"></path>\n<path d=\"M1 11h14v2h-14v-2z\"></path>\n</symbol>\n<symbol id=\"icon-sphere\" viewBox=\"0 0 16 16\">\n<title>sphere</title>\n<path d=\"M7.5 1c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zM11.744 11c0.134-0.632 0.219-1.303 0.246-2h1.991c-0.052 0.691-0.213 1.361-0.479 2h-1.758zM3.256 6c-0.134 0.632-0.219 1.303-0.246 2h-1.991c0.052-0.691 0.213-1.361 0.479-2h1.758zM10.719 6c0.15 0.64 0.241 1.31 0.27 2h-2.989v-2h2.719zM8 5v-2.927c0.228 0.066 0.454 0.178 0.675 0.334 0.415 0.293 0.813 0.744 1.149 1.304 0.233 0.388 0.434 0.819 0.601 1.289h-2.426zM5.176 3.711c0.336-0.561 0.734-1.012 1.149-1.304 0.222-0.156 0.447-0.268 0.675-0.334v2.927h-2.426c0.168-0.47 0.369-0.901 0.601-1.289zM7 6v2h-2.989c0.029-0.69 0.12-1.36 0.27-2h2.719zM1.498 11c-0.266-0.639-0.427-1.309-0.479-2h1.991c0.028 0.697 0.112 1.368 0.246 2h-1.758zM4.011 9h2.989v2h-2.719c-0.15-0.64-0.241-1.31-0.27-2zM7 12v2.927c-0.228-0.066-0.454-0.178-0.675-0.334-0.415-0.293-0.813-0.744-1.149-1.304-0.233-0.388-0.434-0.819-0.602-1.289h2.426zM9.825 13.289c-0.336 0.561-0.734 1.012-1.149 1.304-0.222 0.156-0.447 0.268-0.675 0.334v-2.927h2.426c-0.168 0.47-0.369 0.901-0.602 1.289zM8 11v-2h2.989c-0.029 0.69-0.12 1.36-0.27 2h-2.719zM11.99 8c-0.028-0.697-0.112-1.368-0.246-2h1.758c0.267 0.639 0.427 1.309 0.479 2h-1.991zM12.979 5h-1.498c-0.291-0.918-0.693-1.723-1.177-2.366 0.665 0.318 1.267 0.744 1.792 1.27 0.336 0.336 0.631 0.702 0.883 1.096zM2.904 3.904c0.526-0.526 1.128-0.952 1.792-1.27-0.483 0.643-0.886 1.448-1.177 2.366h-1.498c0.252-0.394 0.547-0.761 0.883-1.096zM2.021 12h1.498c0.291 0.918 0.693 1.723 1.177 2.366-0.665-0.318-1.267-0.744-1.792-1.27-0.336-0.336-0.631-0.702-0.883-1.096zM12.096 13.096c-0.526 0.526-1.128 0.952-1.792 1.27 0.483-0.643 0.886-1.448 1.177-2.366h1.498c-0.252 0.394-0.547 0.761-0.883 1.096z\"></path>\n</symbol>\n<symbol id=\"icon-arrow-right3\" viewBox=\"0 0 16 16\">\n<title>arrow-right3</title>\n<path d=\"M5.5 0l-1.5 1.5 6.5 6.5-6.5 6.5 1.5 1.5 8-8-8-8z\"></path>\n</symbol>\n</defs>\n</svg>\n",
  resultLoading: function resultLoading(template, state, ctx) {
    if (/^\/result\/[^/]+?/.test(ctx.path) || /^\/result-new\/[^/]+?/.test(ctx.path)) {
      var icons = ['ruler', 'tools', 'knife'];
      return "<div id=\"__result-loader\">\n            <div class=\"icons\">\n            <div class=\"wrapper\">".concat(icons.concat(icons[0]).map(function (icon) {
        return "\n                <div class=\"icon\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                        <use xlink:href=\"#icon-".concat(icon, "\"></use>\n                    </svg>\n                </div>\n                ").replace(/\n/g, '').replace(/\s{2}/g, '');
      }).join(''), "\n                </div></div></div>");
    }

    return '';
  }
});

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koot_React_route_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koot/React/route-check */ "./node_modules/koot/React/route-check.js");
/* harmony import */ var koot_React_route_check__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koot_React_route_check__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/app */ "./src/constants/app.ts");
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @views/app */ "./src/views/app.tsx");
/* harmony import */ var _views_submit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @views/submit */ "./src/views/submit/index.tsx");




/**
 * @type {Object} 路由配置对象
 * 原则上支持任何与 `react-router` (v3) 兼容的对象
 * - 可使用 koot-router 提供的方法封装路由配置对象
 */

var routes = {
  path: '/',
  component: _views_app__WEBPACK_IMPORTED_MODULE_2__["default"],
  // 项目的根层组件
  indexRoute: {
    /**
     * 标准写法: 打包后，该组件会存在于核心包中
     * - 推荐小型项目或大型项目的小型页面使用
     */
    component: _views_submit__WEBPACK_IMPORTED_MODULE_3__["default"]
    /**
     * 代码分割写法: 打包后，该组件会存在于独立的 .js 文件中
     * - 推荐大型项目使用
     * - 推荐使用 koot 提供的 `routeCheck()` 方法保证路由组件的正确渲染 (详情请查阅文档)
     */
    // getComponent: (nextState, cb) => {
    //     import(
    //         /* webpackChunkName: "PageHome" */
    //         '@views/home'
    //     ).then(module => {
    //         if (routeCheck(nextState)) cb(null, module.default);
    //     });
    // }

  },
  childRoutes: [// {
  //     path: 'result/:resultId',
  //     getComponent: (nextState, cb) => {
  //         import(
  //             /* webpackChunkName: "PageStart" */
  //             '@views/result-old'
  //         ).then(module => {
  //             if (routeCheck(nextState)) cb(null, module.default);
  //         });
  //     }
  // },
  // {
  //     path: 'result/:resultId/:type',
  //     getComponent: (nextState, cb) => {
  //         import(
  //             /* webpackChunkName: "PageStart" */
  //             '@views/result-old'
  //         ).then(module => {
  //             if (routeCheck(nextState)) cb(null, module.default);
  //         });
  //     }
  // },
  {
    path: "".concat(_constants_app__WEBPACK_IMPORTED_MODULE_1__["pathnames"].result.substr(1), "/:resultId"),
    getComponent: function getComponent(nextState, cb) {
      Promise.resolve(/*! import() | PageResult */).then(__webpack_require__.bind(null, /*! @views/result */ "./src/views/result/index.tsx")).then(function (module) {
        if (koot_React_route_check__WEBPACK_IMPORTED_MODULE_0___default()(nextState)) cb(null, module.default);
      });
    },
    childRoutes: [{
      path: ':tab'
    }]
  }]
};

if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/server/before.ts":
/*!******************************!*\
  !*** ./src/server/before.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_better_http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-better-http-proxy */ "koa-better-http-proxy");
/* harmony import */ var koa_better_http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_better_http_proxy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-mount */ "koa-mount");
/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_mount__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constants/app */ "./src/constants/app.ts");
/* harmony import */ var _srcApiServer_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @srcApiServer/config */ "./src-api-server/config.js");
/* harmony import */ var _srcApiServer_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_srcApiServer_config__WEBPACK_IMPORTED_MODULE_4__);
/**
 * **服务器端生命周期**
 *
 * _创建 Koa 实例后、挂载任何中间件之前_
 */




 // import mock from './mock';
// import routes from './routes';

/* harmony default export */ __webpack_exports__["default"] = (async function (app) {
  // if (__DEV__) mock(app);
  // API 代理服务器 =========================================================
  var proxyApiServer = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();
  proxyApiServer.use(koa_better_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()("localhost:".concat(_srcApiServer_config__WEBPACK_IMPORTED_MODULE_4__["port"]), {}));
  proxyApiServer.use(async function () {});
  app.use(koa_mount__WEBPACK_IMPORTED_MODULE_2___default()(_constants_app__WEBPACK_IMPORTED_MODULE_3__["pathnames"].api, proxyApiServer)); // 挂载路由 ===============================================================
  // app.use(routes);
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koot_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koot-redux */ "./node_modules/koot-redux/index.js");
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _modules_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/result */ "./src/store/modules/result.js");
/* harmony import */ var _modules_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/history */ "./src/store/modules/history.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var middlewares;

  if (false) {}

  return Object(koot_redux__WEBPACK_IMPORTED_MODULE_0__["createReduxModuleStore"])({
    state: _objectSpread({}, koot__WEBPACK_IMPORTED_MODULE_1__["reduxForCreateStore"].reducers),
    reducers: {},
    actions: {},
    modules: {
      result: _modules_result__WEBPACK_IMPORTED_MODULE_2__["default"],
      history: _modules_history__WEBPACK_IMPORTED_MODULE_3__["default"]
    }
  }, koot__WEBPACK_IMPORTED_MODULE_1__["reduxForCreateStore"].initialState, middlewares);
});

/***/ }),

/***/ "./src/store/modules/history.js":
/*!**************************************!*\
  !*** ./src/store/modules/history.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/actions */ "./src/constants/actions.ts");
/* harmony import */ var _api_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/history */ "./src/apis/history.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var reducerUpdateByOrigin = '__HISTORY_UPDATE_BY_DOMAIN__';
/* harmony default export */ __webpack_exports__["default"] = ({
  state: {},
  reducers: _defineProperty({}, reducerUpdateByOrigin, function (state) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var list = payload.list,
        origin = payload.origin;
    if (list && origin) state[origin] = list;
    return state;
  }),
  actions: _defineProperty({}, _constants_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_HISTORY"], function (_ref) {
    var commit = _ref.commit,
        state = _ref.state;
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var origin = payload.origin;
    if (!origin) return; // 如果存在处理完毕的结果，直接返回

    if (_typeof(state[origin]) === 'object') return new Promise(function (resolve) {
      return resolve(state[origin]);
    });
    return Object(_api_history__WEBPACK_IMPORTED_MODULE_1__["get"])(origin).then(function (list) {
      return commit(reducerUpdateByOrigin, {
        list: list,
        origin: origin
      });
    });
  }),
  modules: {}
});

/***/ }),

/***/ "./src/store/modules/result.js":
/*!*************************************!*\
  !*** ./src/store/modules/result.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/actions */ "./src/constants/actions.ts");
/* harmony import */ var _api_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/result */ "./src/apis/result.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: your name
 * @Date: 2019-12-24 11:18:24
 * @LastEditTime: 2019-12-24 11:21:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/src/store/modules/result.js
 */


var reducerUpdateById = '__RESULT_UPDATE_BY_ID__';
/* harmony default export */ __webpack_exports__["default"] = ({
  state: {},
  reducers: _defineProperty({}, reducerUpdateById, function (state) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var result = payload.result,
        id = payload.id;
    if (result && id) state[id] = result;
    return state;
  }),
  actions: _defineProperty({}, _constants_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_RESULT"], function (_ref) {
    var commit = _ref.commit,
        state = _ref.state;
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var id = payload.id;
    if (!id) return; // 如果存在处理完毕的结果，直接返回

    if (_typeof(state[id]) === 'object') return new Promise(function (resolve) {
      return resolve(state[id]);
    });
    return Object(_api_result__WEBPACK_IMPORTED_MODULE_1__["get"])(id).then(function (result) {
      return commit(reducerUpdateById, {
        result: result,
        id: id
      });
    }).then(function (r) {
      return r.payload.result;
    });
  }),
  modules: {}
});

/***/ }),

/***/ "./src/utils/client/scroll-to.ts":
/*!***************************************!*\
  !*** ./src/utils/client/scroll-to.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 滚动至指定 Y 坐标或目标元素的位置
 */
var scrollTo = function scrollTo(YorElement) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = offset;

  if (typeof YorElement === 'number') {
    y += YorElement;
  } else if (YorElement instanceof Element) {
    var rect = YorElement.getBoundingClientRect();
    y += rect.top + window.pageYOffset;
  }

  doScroll(y);
};

/* harmony default export */ __webpack_exports__["default"] = (scrollTo); // ============================================================================

var doScroll = function doScroll(y) {
  if (typeof window.scroll === 'function') {
    try {
      window.scroll({
        top: y,
        left: 0,
        behavior: 'smooth'
      });
    } catch (e) {
      doScrollFallback(y);
    }
  } else {
    doScrollFallback(y);
  }
};

var doScrollFallback = function doScrollFallback(y) {
  window.scrollTo(0, y);
};

/***/ }),

/***/ "./src/utils/get-api.ts":
/*!******************************!*\
  !*** ./src/utils/get-api.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/app */ "./src/constants/app.ts");

/**
 * 获取完整的 API 地址
 * - 如果传入的地址以 `/api` 开头，直接返回
 */

function getApi(url) {
  if (url.includes('://')) return url;
  var uri = new RegExp("^".concat(_constants_app__WEBPACK_IMPORTED_MODULE_0__["pathnames"].api)).test(url) ? url : _constants_app__WEBPACK_IMPORTED_MODULE_0__["pathnames"].api + ((url || '').substr(0, 1) !== '/' ? '/' : '') + url;
  if (false) {}
  return "http://127.0.0.1:".concat( false ? undefined : process.env.SERVER_PORT).concat(uri);
}

/* harmony default export */ __webpack_exports__["default"] = (getApi);

/***/ }),

/***/ "./src/utils/get-description.ts":
/*!**************************************!*\
  !*** ./src/utils/get-description.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/** 生成完整的页面简介 */
/* harmony default export */ __webpack_exports__["default"] = (function (description) {
  var _des = __("description");

  if (description) return "".concat(description, " - ").concat(_des);
  return _des;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/utils/get-time-diff.ts":
/*!************************************!*\
  !*** ./src/utils/get-time-diff.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/**
 * 显示可读的目标时间到当前时间的差值，如“3天前”“10秒后”
 */
var getTimeDiff = function getTimeDiff(timestamp) {
  var t = timestamp instanceof Date ? timestamp : new Date(timestamp);
  var diff = Date.now() - t.valueOf();
  var seconds = diff / 1000;
  if (seconds < 60 && seconds >= 0) return __("time_diff.moment_ago");else if (seconds > -60 && seconds < -1) return __("time_diff.seconds_after", {
    second: '' + Math.floor(seconds)
  });else if (seconds >= -1 && seconds < 0) return __("time_diff.second_after", {
    second: '' + Math.floor(seconds)
  });
  var minutes = seconds / 60;
  if (minutes < 60 && minutes > 1) return __("time_diff.minutes_before", {
    minute: '' + Math.ceil(minutes)
  });else if (minutes <= 1 && minutes >= 0) return __("time_diff.minute_before", {
    minute: '' + Math.ceil(minutes)
  });else if (minutes > -60 && minutes < -1) return __("time_diff.minutes_after", {
    minute: '' + Math.floor(minutes)
  });else if (minutes >= -1 && minutes < 0) return __("time_diff.minute_after", {
    minute: '' + Math.floor(minutes)
  });
  var hours = minutes / 60;
  if (hours < 24 && hours > 1) return __("time_diff.hours_before", {
    hour: '' + Math.ceil(hours)
  });else if (hours <= 1 && hours >= 0) return __("time_diff.hour_before", {
    hour: '' + Math.ceil(hours)
  });else if (hours > -24 && hours < -1) return __("time_diff.hours_after", {
    hour: '' + Math.floor(hours)
  });else if (hours >= -1 && hours < 0) return __("time_diff.hour_after", {
    hour: '' + Math.floor(hours)
  });
  var days = hours / 24;
  if (days > 1) return __("time_diff.days_before", {
    day: '' + Math.ceil(days)
  });else if (days <= 1 && days >= 0) return __("time_diff.day_before", {
    day: '' + Math.ceil(days)
  });else if (days < -1) return __("time_diff.days_after", {
    day: '' + Math.floor(days)
  });else if (days >= -1 && days < 0) return __("time_diff.day_after", {
    day: '' + Math.floor(days)
  });
  return '' + diff;
};

/* harmony default export */ __webpack_exports__["default"] = (getTimeDiff);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/utils/get-title.ts":
/*!********************************!*\
  !*** ./src/utils/get-title.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 生成完整的页面标题
 * @param {String} title
 * @returns {String}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (pageTitle) {
  if (pageTitle) return "".concat(pageTitle, " - ").concat("Koot Clinic");
  return "Koot Clinic";
});

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_get_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/get-api */ "./src/utils/get-api.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function request() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config2 = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof config === 'string') {
    return request(_objectSpread({}, config2 || {}, {
      method: config
    }));
  }

  if (config.url) config.url = Object(_utils_get_api__WEBPACK_IMPORTED_MODULE_1__["default"])(config.url);
  return axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function (res) {
    if (res.status !== 200 || res.statusText !== 'OK') {
      var err = new Error('REQUEST_FAIL');
      Object.assign(err, {
        response: res
      });
      throw err;
    }

    return res.data;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (request);

/***/ }),

/***/ "./src/views/app.module.less":
/*!***********************************!*\
  !*** ./src/views/app.module.less ***!
  \***********************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'c302c2';const css = '@-webkit-keyframes fade-in{.c302c2 0%{opacity:0}.c302c2 to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.c302c2 0%{opacity:0}.c302c2 to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.c302c2 .link-color-inherit{color:inherit;text-decoration:underline}.c302c2 html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.c302c2 .link-color-inherit:active,.c302c2 html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.c302c2{position:relative}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/views/app.tsx":
/*!***************************!*\
  !*** ./src/views/app.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _app_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module.less */ "./src/views/app.module.less");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // const { wrapper: moduleClassName } = styles;
// ----------------------------------------------------------------------------

var App = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: _app_module_less__WEBPACK_IMPORTED_MODULE_2__["default"]
})(function (_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    id: "main",
    className: className,
    children: children
  });
});
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/views/result/aside/index.module.less":
/*!**************************************************!*\
  !*** ./src/views/result/aside/index.module.less ***!
  \**************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'd3d0f1';const css = '@-webkit-keyframes fade-in{.d3d0f1 0%{opacity:0}.d3d0f1 to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.d3d0f1 0%{opacity:0}.d3d0f1 to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.d3d0f1 .link-color-inherit{color:inherit;text-decoration:underline}.d3d0f1 html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.d3d0f1 .link-color-inherit:active,.d3d0f1 html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.d3d0f1{display:-webkit-flex;display:flex;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;position:fixed;top:0;left:0;z-index:100;width:255px;height:100%;overflow:hidden;overflow-y:auto;overscroll-behavior-y:contain;border-right:1px solid var(--root-border-color);background:var(--root-background-color)}@media only screen and (min-width:760px) and (max-width:1030px){.d3d0f1{width:24.75728155vw}}@media only screen and (max-width:759px){.d3d0f1{overflow-y:scroll;left:auto;right:0;-webkit-transform:translateX(100%);transform:translateX(100%);border-right:0;border-left:1px solid var(--root-border-color);opacity:.9999;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}}.d3d0f1-site{-webkit-flex:0;flex:0;text-align:center;margin:30px 0 0;padding:0 30px}.d3d0f1-site .icon{position:relative;display:inline-block;width:150px;max-width:100%;background:var(--root-background-color-deeper) no-repeat 50% 50%;background-size:contain;border-radius:10px;overflow:hidden;box-shadow:0 12px 12px -10px rgba(0,0,0,.25)}.d3d0f1-site .icon>.wrapper{position:relative;width:100%;height:0;padding-bottom:100%}.d3d0f1-site .icon .no-icon{position:absolute;top:50%;left:50%;margin-top:-37.5px;margin-left:-37.5px;width:75px;height:75px;fill:var(--root-content-color-lighter)}.d3d0f1-site .domain,.d3d0f1-site .name{display:block;overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;color:var(--root-text-main-color);font-weight:bolder;line-height:1.2;margin:10px auto 0 0}.d3d0f1-site .name{font-size:30px}.d3d0f1-site .domain{font-size:24px}.d3d0f1-site .name~.domain{color:var(--root-content-color-lighter);font-size:16px}.d3d0f1-options{-webkit-flex:1;flex:1;margin:30px 0 0}.d3d0f1-options .option{display:block;padding:10px 30px;font-weight:bolder;border-left:4px solid transparent;color:var(--root-content-color-lighter);transition-property:color,background-color,border-color}.d3d0f1-options .option.is-active{border-left-color:var(--root-accent-color);background-color:var(--root-background-color-deeper);color:var(--root-text-main-color);cursor:default}.d3d0f1-options .option.is-active:active,html.is-hover .d3d0f1-options .option.is-active:hover,html.is-hover .d3d0f1-options .option.is-active:hover:active{color:var(--root-text-main-color)}.d3d0f1-remaining{-webkit-flex:0;flex:0;margin:30px 0;padding:0 30px;color:var(--root-content-color-lighter)}.d3d0f1-remaining .time{display:block;color:var(--root-text-main-color)}.d3d0f1-controller-checkbox{position:absolute;top:-100%;left:-100%}.d3d0f1-controller-switch{position:static}.d3d0f1-controller-switch .mask,.d3d0f1-controller-switch .switch{display:none;position:fixed;top:0;right:0}@media only screen and (max-width:759px){.d3d0f1-controller-switch .mask,.d3d0f1-controller-switch .switch{display:block}}.d3d0f1-controller-switch .switch{z-index:101;width:50px;height:50px}.d3d0f1-controller-switch .switch .icon{position:absolute;top:50%;left:50%;margin-top:-15px;margin-left:-15px;width:30px;height:30px}.d3d0f1-controller-switch .mask{z-index:99;width:100%;height:100%;opacity:0;background:hsla(0,0%,98%,.75);pointer-events:none;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);overflow:auto;overscroll-behavior-y:contain;transition-property:opacity}@supports ((-webkit-backdrop-filter:saturate(180%) blur(20px)) or (backdrop-filter:saturate(180%) blur(20px))){.d3d0f1-controller-switch .mask{background:hsla(0,0%,98%,.1)}}.d3d0f1-controller-switch .mask:after{content:"";position:absolute;width:100%;height:110%}@media (prefers-color-scheme:dark){.d3d0f1-controller-switch .mask{background:rgba(33,33,33,.75)}@supports ((-webkit-backdrop-filter:saturate(180%) blur(20px)) or (backdrop-filter:saturate(180%) blur(20px))){.d3d0f1-controller-switch .mask{background:rgba(33,33,33,.1)}}}.d3d0f1-controller-checkbox:checked~.d3d0f1{-webkit-transform:none;transform:none}.d3d0f1-controller-checkbox:checked~.d3d0f1-controller-switch .mask{opacity:1;-webkit-animation:fade-in .2s ease-out;animation:fade-in .2s ease-out;pointer-events:all}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/views/result/aside/index.tsx":
/*!******************************************!*\
  !*** ./src/views/result/aside/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pretty_ms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pretty-ms */ "pretty-ms");
/* harmony import */ var pretty_ms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pretty_ms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! md5 */ "md5");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @constants/app */ "./src/constants/app.ts");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/icon */ "./src/components/icon/index.jsx");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../main */ "./src/views/result/main/index.tsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.less */ "./src/views/result/aside/index.module.less");
var _dec, _class, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










 // ============================================================================

var menuCheckboxId = md5__WEBPACK_IMPORTED_MODULE_5___default()('menuCheckboxId');
// Functional Component =======================================================
var Aside = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_9__["default"]
})(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var className = _ref.className,
      history = _ref.history,
      resultId = _ref.resultId;
  var domain = history.domain,
      nextScheduledTimestamp = history.nextScheduledTimestamp,
      _history$results = history.results,
      results = _history$results === void 0 ? [] : _history$results;
  var latestResultId = Array.isArray(results) && results.length ? results.sort(function (a, b) {
    return new Date(b.clinic.createTime).valueOf() - new Date(a.clinic.createTime).valueOf();
  })[0].clinic.everyQueryKey : undefined;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PhoneViewController, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Site, {
    domain: domain
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Options, {
    resultId: resultId,
    latestResultId: resultId !== latestResultId ? latestResultId : undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Remaining, {
    nextScheduledTimestamp: nextScheduledTimestamp
  })));
}));
/* harmony default export */ __webpack_exports__["default"] = (Aside); // ============================================================================

var Site = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref2) {
  var domain = _ref2.domain,
      icon = _ref2.icon,
      name = _ref2.name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_index_module_less__WEBPACK_IMPORTED_MODULE_9__["wrapper"], "-site")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon",
    style: {
      backgroundImage: icon ? "url(".concat(icon, ")") : undefined
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }), !icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "no-icon",
    icon: "sphere"
  })), !!name ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "name"
  }, name) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "domain"
  }, domain));
}); // ============================================================================

var Options = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref3) {
  var latestResultId = _ref3.latestResultId,
      resultId = _ref3.resultId;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_index_module_less__WEBPACK_IMPORTED_MODULE_9__["wrapper"], "-options")
  }, !!latestResultId ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    resultId: latestResultId
  }, __("views.result.aside_options.latest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    resultId: resultId
  }, __("views.result.aside_options.current"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    resultId: resultId
  }, __("views.result.aside_options.latest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    resultId: resultId,
    type: "history"
  }, __("views.result.aside_options.history")));
});
var Option = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  connect: function connect(state) {
    return {
      currentPathname: state.routing.locationBeforeTransitions.pathname
    };
  }
})(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref4) {
  var resultId = _ref4.resultId,
      type = _ref4.type,
      children = _ref4.children,
      currentPathname = _ref4.currentPathname;
  var Component = !!type ? react_router__WEBPACK_IMPORTED_MODULE_2__["Link"] : react_router__WEBPACK_IMPORTED_MODULE_2__["IndexLink"];
  var link = "".concat(_constants_app__WEBPACK_IMPORTED_MODULE_6__["pathnames"].result, "/").concat(resultId).concat(type ? "/".concat(type) : '');
  var result = new RegExp("^".concat(link, "/*(.*)")).exec(currentPathname || '');
  var isActive = !type && Array.isArray(result) && _main__WEBPACK_IMPORTED_MODULE_8__["tabs"].some(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 1),
        uri = _ref6[0];

    return uri === result[1];
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
    to: link,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(['option', {
      'is-active': isActive
    }]),
    activeClassName: "is-active"
  }, children);
})); // ============================================================================

var Remaining =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Remaining, _React$PureComponent);

  function Remaining(props) {
    var _this;

    _classCallCheck(this, Remaining);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Remaining).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "countdown", void 0);

    _this.state = {
      remaining: _this.getRemaining()
    };
    return _this;
  }

  _createClass(Remaining, [{
    key: "getRemaining",
    value: function getRemaining() {
      var nextScheduledTimestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.nextScheduledTimestamp;
      return nextScheduledTimestamp - Date.now();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.countdown = setInterval(function () {
        _this2.setState({
          remaining: _this2.getRemaining()
        });
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.countdown) clearInterval(this.countdown);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_index_module_less__WEBPACK_IMPORTED_MODULE_9__["wrapper"], "-remaining")
      }, __("views.result.next_scheduled_in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "time"
      }, pretty_ms__WEBPACK_IMPORTED_MODULE_3___default()(this.state.remaining, {
        secondsDecimalDigits: 0,
        unitCount: 2
      })));
    }
  }]);

  return Remaining;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent); // ============================================================================


var PhoneViewController = (_dec = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  connect: function connect(state) {
    return {
      pathname: state.routing.locationBeforeTransitions.pathname
    };
  },
  ssr: null
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(PhoneViewController, _React$PureComponent2);

  function PhoneViewController(props) {
    var _this3;

    _classCallCheck(this, PhoneViewController);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PhoneViewController).call(this, props));

    _defineProperty(_assertThisInitialized(_this3), "CheckboxRef", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _this3.state = {
      renderMask: false
    };
    _this3.labelOnClick = _this3.labelOnClick.bind(_assertThisInitialized(_this3));
    _this3.maskOnTransitionEnd = _this3.maskOnTransitionEnd.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(PhoneViewController, [{
    key: "labelOnClick",
    value: function labelOnClick() {
      var _this4 = this;

      setTimeout(function () {
        if (_this4.CheckboxRef && _this4.CheckboxRef.current && _this4.CheckboxRef.current.checked) _this4.setState({
          renderMask: true
        });
      }, 1);
    }
  }, {
    key: "maskOnTransitionEnd",
    value: function maskOnTransitionEnd(evt) {
      if (evt.nativeEvent.propertyName === 'opacity' && parseFloat(getComputedStyle(evt.currentTarget).opacity || '0') < 0.1) {
        this.setState({
          renderMask: false
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.pathname !== prevProps.pathname && this.CheckboxRef && this.CheckboxRef.current && this.CheckboxRef.current.checked) {
        this.CheckboxRef.current.checked = false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: menuCheckboxId,
        className: "".concat(_index_module_less__WEBPACK_IMPORTED_MODULE_9__["wrapper"], "-controller-checkbox"),
        type: "checkbox",
        defaultChecked: false,
        ref: this.CheckboxRef
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "".concat(_index_module_less__WEBPACK_IMPORTED_MODULE_9__["wrapper"], "-controller-switch"),
        htmlFor: menuCheckboxId,
        onClick: this.labelOnClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "switch"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: "menu7",
        className: "icon"
      })), this.state.renderMask && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mask",
        onTransitionEnd: this.maskOnTransitionEnd
      })));
    }
  }]);

  return PhoneViewController;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent), _temp)) || _class);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/result/index.module.less":
/*!********************************************!*\
  !*** ./src/views/result/index.module.less ***!
  \********************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'f2f27d';const css = '@-webkit-keyframes fade-in{.f2f27d 0%{opacity:0}.f2f27d to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.f2f27d 0%{opacity:0}.f2f27d to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.f2f27d .link-color-inherit{color:inherit;text-decoration:underline}.f2f27d html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.f2f27d .link-color-inherit:active,.f2f27d html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.f2f27d{position:relative;min-height:100vh;padding:0 0 0 255px}@media only screen and (min-width:760px) and (max-width:1030px){.f2f27d{padding-left:24.75728155vw}}@media only screen and (max-width:759px){.f2f27d{padding-left:0}}.f2f27d-loading{position:absolute;top:50vh;line-height:0;width:100%;text-align:center;font-size:30px;letter-spacing:.2em;color:var(--root-content-color-lighter);opacity:.5;pointer-events:none}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/views/result/index.tsx":
/*!************************************!*\
  !*** ./src/views/result/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var bind_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bind-event */ "bind-event");
/* harmony import */ var bind_event__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bind_event__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constants/actions */ "./src/constants/actions.ts");
/* harmony import */ var _utils_get_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/get-title */ "./src/utils/get-title.ts");
/* harmony import */ var _utils_get_description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/get-description */ "./src/utils/get-description.ts");
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aside */ "./src/views/result/aside/index.tsx");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main */ "./src/views/result/main/index.tsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.less */ "./src/views/result/index.module.less");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









 // ============================================================================

// ============================================================================
var getIdFromProps = function getIdFromProps(props) {
  var _props$routeParams = props.routeParams,
      routeParams = _props$routeParams === void 0 ? {} : _props$routeParams,
      _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params;
  return params.resultId || routeParams.resultId;
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


var dispatchFetchResult = function dispatchFetchResult(dispatch, id) {
  if (!id) new Error('NO ID');
  return dispatch(_constants_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_RESULT"], {
    id: id // eslint-disable-next-line @typescript-eslint/no-explicit-any

  }).then(function (r) {
    var origin = r.url;
    if (!origin) return;
    return dispatch(_constants_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_HISTORY"], {
      origin: origin
    });
  });
}; // Component Class ============================================================


var ViewResult = (_dec = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  connect: function connect(state, props) {
    var _ref = props.params || {},
        resultId = _ref.resultId;

    if (!resultId) return {};
    var result = state.result[resultId];
    if (!result) return {};
    var origin = result.url;
    var history = state.history[origin] || {};
    return {
      result: result,
      history: history
    };
  },
  pageinfo: function pageinfo(state, props) {
    return {
      title: Object(_utils_get_title__WEBPACK_IMPORTED_MODULE_4__["default"])("".concat(__("views.result.title"), " (").concat(props.params.resultId, ")")),
      metas: [{
        description: Object(_utils_get_description__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(__("views.result.description"), " (").concat(props.params.resultId, ")"))
      }]
    };
  },
  data: function data(state, renderProps, dispatch) {
    return dispatchFetchResult(dispatch, getIdFromProps(renderProps));
  },
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_8__["default"]
}), _dec(_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ViewResult, _React$PureComponent);

  function ViewResult(props) {
    var _this;

    _classCallCheck(this, ViewResult);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewResult).call(this, props));
    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(ViewResult, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _ref2 = prevProps.params || {},
          prevId = _ref2.resultId;

      var _ref3 = this.props.params || {},
          newId = _ref3.resultId;

      if (prevId !== newId) {
        this.setState({
          loading: true
        });
        dispatchFetchResult(this.props.dispatch, getIdFromProps(this.props));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var result = this.props.result;

      if (_typeof(result) === 'object') {
        // * 隐藏顶级 loader
        var loader = document.querySelector('#__result-loader');

        if (loader) {
          bind_event__WEBPACK_IMPORTED_MODULE_2___default()(loader, 'transitionend', function (evt) {
            if (evt.propertyName === 'opacity' && !evt.target.style.opacity) evt.target.parentNode.removeChild(evt.target);
          });
          loader.classList.add('die');
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          result = _this$props.result,
          history = _this$props.history,
          _this$props$params = _this$props.params,
          resultId = _this$props$params.resultId,
          _this$props$params$ta = _this$props$params.tab,
          tab = _this$props$params$ta === void 0 ? '' : _this$props$params$ta;
      if (!result || _typeof(result) !== 'object') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(this.props.className, "-loading")
      }, "LOADING..."); // if (__CLIENT__ && __DEV__) console.warn({ result, history });

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props.className
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aside__WEBPACK_IMPORTED_MODULE_6__["default"], {
        history: history,
        resultId: resultId
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main__WEBPACK_IMPORTED_MODULE_7__["default"], {
        history: history,
        resultId: resultId,
        result: result,
        tab: tab
      }));
    }
  }]);

  return ViewResult;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (ViewResult);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/result/main/empty/index.module.less":
/*!*******************************************************!*\
  !*** ./src/views/result/main/empty/index.module.less ***!
  \*******************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'aa01a5';const css = '@-webkit-keyframes fade-in{.aa01a5 0%{opacity:0}.aa01a5 to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.aa01a5 0%{opacity:0}.aa01a5 to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.aa01a5 .link-color-inherit{color:inherit;text-decoration:underline}.aa01a5 html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.aa01a5 .link-color-inherit:active,.aa01a5 html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.aa01a5{position:absolute;top:50%;line-height:0;width:100%;text-align:center;font-size:30px;letter-spacing:.2em;color:var(--root-content-color-lighter);opacity:.5;pointer-events:none}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/views/result/main/empty/index.tsx":
/*!***********************************************!*\
  !*** ./src/views/result/main/empty/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.less */ "./src/views/result/main/empty/index.module.less");


 // ============================================================================

// Functional Component =======================================================
var Empty = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_2__["default"]
})(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var className = _ref.className,
      text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, text || __("views.result.no_error"));
}));
/* harmony default export */ __webpack_exports__["default"] = (Empty);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/result/main/history/index.module.less":
/*!*********************************************************!*\
  !*** ./src/views/result/main/history/index.module.less ***!
  \*********************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'e22e3c';const css = '@-webkit-keyframes fade-in{.e22e3c 0%{opacity:0}.e22e3c to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.e22e3c 0%{opacity:0}.e22e3c to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.e22e3c .link-color-inherit{color:inherit;text-decoration:underline}.e22e3c html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.e22e3c .link-color-inherit:active,.e22e3c html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.e22e3c{position:relative;padding:30px;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:30px}.e22e3c .item{display:block;border:1px solid var(--root-border-color);border-radius:5px;padding:15px 20px;transition-property:border-color,background-color}.e22e3c .item .count,.e22e3c .item .diff{display:block;line-height:1.2}.e22e3c .item .diff{color:var(--root-text-main-color);font-size:20px;font-weight:bolder}.e22e3c .item .count{color:var(--root-content-color-lighter);margin-top:10px}html.is-hover .e22e3c .item:hover{background:var(--root-background-color-deeper);border-color:var(--root-accent-color)}.e22e3c .item:active,html.is-hover .e22e3c .item:hover:active{background:var(--root-background-color-lighter);border-color:var(--root-accent-color)}.e22e3c .item.is-active{pointer-events:none;background:var(--root-background-color-deeper);border-color:var(--root-accent-color)}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/views/result/main/history/index.tsx":
/*!*************************************************!*\
  !*** ./src/views/result/main/history/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constants/app */ "./src/constants/app.ts");
/* harmony import */ var _utils_get_time_diff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/get-time-diff */ "./src/utils/get-time-diff.ts");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.less */ "./src/views/result/main/history/index.module.less");





 // ============================================================================

// Functional Component =======================================================
var History = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_5__["default"]
})(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var className = _ref.className,
      history = _ref.history,
      currentId = _ref.currentId;
  var results = history.results;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, results.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      item: item,
      key: item.clinic.everyQueryKey
    });
  }));
}));
/* harmony default export */ __webpack_exports__["default"] = (History); // ============================================================================

var Item = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref2) {
  var _ref2$item = _ref2.item,
      clinic = _ref2$item.clinic,
      errors = _ref2$item.errors;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "item" // activeClassName="is-active"
    ,
    to: "".concat(_constants_app__WEBPACK_IMPORTED_MODULE_3__["pathnames"].result, "/").concat(clinic.everyQueryKey)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "diff"
  }, Object(_utils_get_time_diff__WEBPACK_IMPORTED_MODULE_4__["default"])(clinic.createTime)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "count"
  }, __("views.result.history_item.error_count", {
    count: '' + Object.values(errors).reduce(function (sum, currentErrorArr) {
      return sum + currentErrorArr.length;
    }, 0)
  })));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/result/main/index.module.less":
/*!*************************************************!*\
  !*** ./src/views/result/main/index.module.less ***!
  \*************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'aaa60f';const css = '@-webkit-keyframes fade-in{.aaa60f 0%{opacity:0}.aaa60f to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.aaa60f 0%{opacity:0}.aaa60f to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.aaa60f .link-color-inherit{color:inherit;text-decoration:underline}.aaa60f html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.aaa60f .link-color-inherit:active,.aaa60f html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.aaa60f{position:relative;z-index:1;display:-webkit-flex;display:flex;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;min-height:100vh}.aaa60f-header{padding-top:90px;position:relative;position:-webkit-sticky;position:sticky;top:-150px;background:var(--root-background-color);z-index:100;border-bottom:1px solid var(--root-border-color);-webkit-flex:0;flex:0}.aaa60f-header .title{padding:0 30px;font-size:30px;line-height:1;margin:0}.aaa60f-header .tabs{position:relative;margin-top:30px;margin-bottom:-1px;overflow:hidden;width:100%;height:50px}.aaa60f-header .tabs>.wrapper{overflow:hidden;overflow-x:scroll;display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;width:100%;padding:0 15px}.aaa60f-header .tabs .tab{position:relative;display:block;text-align:center;padding:0 15px;height:50px;line-height:50px;color:var(--root-content-color-lighter);white-space:nowrap}.aaa60f-header .tabs .tab .count{position:relative;font-size:12px;line-height:1em;display:inline-block;padding:2px 4px;background:var(--root-content-color-lighter);color:var(--root-background-color-lighter);border-radius:3px;margin-left:5px;font-weight:bolder;transition-property:background-color,opacity}.aaa60f-header .tabs .tab .count.is-zero{opacity:.5}.aaa60f-header .tabs .tab .count.is-not-zero{opacity:.65;background:var(--root-error-color)}.aaa60f-header .tabs .tab:last-child{border-right:30px solid transparent}@media only screen and (max-width:759px){.aaa60f-header .tabs .tab:last-child{border-right:30px solid transparent}}html.is-hover .aaa60f-header .tabs .tab:hover{color:var(--root-accent-color-hover)}html.is-hover .aaa60f-header .tabs .tab:hover .count.is-not-zero{opacity:1}.aaa60f-header .tabs .tab:active,html.is-hover .aaa60f-header .tabs .tab:hover:active{color:var(--root-accent-color-active)}.aaa60f-header .tabs .tab:active .count.is-not-zero,html.is-hover .aaa60f-header .tabs .tab:hover:active .count.is-not-zero{opacity:.35}.aaa60f-header .tabs .tab:after{content:"";position:absolute;bottom:-4px;left:10px;right:10px;z-index:-1;border:8px solid var(--root-accent-color);border-bottom:0;border-radius:100px;-webkit-transform:translateY(100%);transform:translateY(100%);transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.aaa60f-header .tabs .tab.is-active{color:var(--root-text-main-color);cursor:default}.aaa60f-header .tabs .tab.is-active .count{background:var(--root-error-color)}.aaa60f-header .tabs .tab.is-active .count.is-zero{background:var(--root-content-color-lighter)}.aaa60f-header .tabs .tab.is-active .count.is-not-zero{opacity:1}.aaa60f-header .tabs .tab.is-active:active,html.is-hover .aaa60f-header .tabs .tab.is-active:hover,html.is-hover .aaa60f-header .tabs .tab.is-active:hover:active{color:var(--root-text-main-color)}.aaa60f-header .tabs .tab.is-active:after{-webkit-transform:none;transform:none}.aaa60f-header.mod-history{top:-60px}.aaa60f-header.mod-history .title{padding-bottom:30px}.aaa60f-body{position:relative;z-index:1;-webkit-flex:1;flex:1;background:var(--root-background-color-lighter)}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/views/result/main/index.tsx":
/*!*****************************************!*\
  !*** ./src/views/result/main/index.tsx ***!
  \*****************************************/
/*! exports provided: tabs, HeaderRef, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRef", function() { return HeaderRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @constants/app */ "./src/constants/app.ts");
/* harmony import */ var _utils_get_time_diff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/get-time-diff */ "./src/utils/get-time-diff.ts");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history */ "./src/views/result/main/history/index.tsx");
/* harmony import */ var _psi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./psi */ "./src/views/result/main/psi/index.tsx");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table */ "./src/views/result/main/table/index.tsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.less */ "./src/views/result/main/index.module.less");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










 // ============================================================================

var tabs = [['', 'psi'], // ['', 'psi-loading'],
// ['psi-performance', 'psi-performance'],
// ['psi-best-practices', 'psi-best-practices'],
// ['psi-seo', 'psi-seo'],
['broken-request', 'broken request'], ['common-error', 'common error'], ['console-error', 'console error'], ['large-file', 'large file'], ['no-gzip', 'no gzip']];
var HeaderRef; // Functional Component =======================================================

var Main = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_9__["default"]
})(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var className = _ref.className,
      _ref$tab = _ref.tab,
      tab = _ref$tab === void 0 ? '' : _ref$tab,
      history = _ref.history,
      result = _ref.result,
      resultId = _ref.resultId;
  HeaderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var isHistory = tab === 'history';
  var currentTabArr = tabs.filter(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 1),
        uri = _ref3[0];

    return uri === tab;
  })[0] || [];
  var currentType = currentTabArr[1];
  var isPsi = /^psi((-.+)|$)/.test(currentType);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(["".concat(_index_module_less__WEBPACK_IMPORTED_MODULE_9__["wrapper"], "-header"), {
      'mod-history': isHistory
    }]),
    ref: HeaderRef
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title"
  }, isHistory ? __("views.result.aside_options.history") : __("views.result.history_title", {
    timediff: Object(_utils_get_time_diff__WEBPACK_IMPORTED_MODULE_5__["default"])(history.results.filter(function (item) {
      return item.clinic.everyQueryKey === resultId;
    })[0].clinic.createTime)
  })), !isHistory && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tabs"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, tabs.map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        uri = _ref5[0],
        type = _ref5[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
      key: uri,
      uri: uri,
      type: type,
      resultId: resultId,
      count: type === 'psi' ? undefined : (result.errors[type] || []).length
    });
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_index_module_less__WEBPACK_IMPORTED_MODULE_9__["wrapper"], "-body")
  }, isHistory ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_history__WEBPACK_IMPORTED_MODULE_6__["default"], {
    history: history,
    currentId: resultId
  }) : isPsi ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_psi__WEBPACK_IMPORTED_MODULE_7__["default"], {
    result: result.psi
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    errors: result.errors[currentType],
    type: currentType
  })));
}));
/* harmony default export */ __webpack_exports__["default"] = (Main); // ============================================================================

var Tab = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref6) {
  var resultId = _ref6.resultId,
      uri = _ref6.uri,
      type = _ref6.type,
      count = _ref6.count;
  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __("error_types", type), typeof count !== 'undefined' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(['count', {
      'is-zero': !count,
      'is-not-zero': !!count
    }])
  }, count));
  var props = {
    className: 'tab',
    activeClassName: 'is-active',
    to: "".concat(_constants_app__WEBPACK_IMPORTED_MODULE_4__["pathnames"].result, "/").concat(resultId).concat(uri ? "/".concat(uri) : ''),
    children: children
  };
  if (!uri) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["IndexLink"], props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Link"], props);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/result/main/psi/audits.module.less":
/*!******************************************************!*\
  !*** ./src/views/result/main/psi/audits.module.less ***!
  \******************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'dd0224';const css = '@-webkit-keyframes fade-in{.dd0224 0%{opacity:0}.dd0224 to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.dd0224 0%{opacity:0}.dd0224 to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.dd0224 .link-color-inherit{color:inherit;text-decoration:underline}.dd0224 html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.dd0224 .link-color-inherit:active,.dd0224 html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.dd0224>.title{color:var(--root-text-main-color);margin-top:1.5em;font-style:italic}.dd0224>.audits{display:grid;grid-template-columns:repeat(auto-fill,minmax(600px,1fr));grid-gap:0 30px}@media only screen and (max-width:759px){.dd0224>.audits{grid-template-columns:repeat(auto-fill,minmax(100%,1fr))}}.dd0224-audit{position:relative;margin:0;border-top:1px solid var(--root-border-color);padding-top:10px;padding-bottom:10px;padding-left:30px;color:var(--root-content-color-lighter)}@media only screen and (max-width:759px){.dd0224-audit{padding-left:0}}.dd0224-audit:before{content:"";position:absolute;width:12px;height:12px;top:15px;left:6px;background:var(--root-content-color-lighter)}.dd0224-audit>.title{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:flex-start;align-items:flex-start}@media only screen and (max-width:759px){.dd0224-audit>.title{padding-left:30px}}.dd0224-audit>.title .text{-webkit-flex:1;flex:1;color:var(--root-text-main-color);line-height:22px;display:block}.dd0224-audit>.title .value{display:inline-block;background:var(--root-content-color-lighter);font-size:12px;padding:4px 8px;line-height:14px;color:#fff;border-radius:4px;white-space:nowrap;text-shadow:0 1px 2px rgba(0,0,0,.5)}.dd0224-audit>.description{margin:.25em 0}.dd0224-audit>.toggle-details{position:relative;display:inline-block;margin:8px 0 10px;border:1px solid var(--root-border-color);background:var(--root-background-color);color:var(--root-content-color-lighter);font-size:smaller;line-height:24px;padding:0 10px;border-radius:4px;cursor:pointer;transition-property:color,border-color,background-color}html.is-hover .dd0224-audit>.toggle-details:hover{color:var(--root-content-color);background:var(--root-border-color)}.dd0224-audit>.toggle-details:active,html.is-hover .dd0224-audit>.toggle-details:hover:active{color:var(--root-content-color);background:var(--root-border-color);opacity:.5}.dd0224-audit>.toggle-details .icon{position:relative;display:inline-block;vertical-align:initial;width:14px;height:14px;top:2px;left:-4px;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.dd0224-audit>.toggle-details.is-active{color:var(--root-content-color);background:var(--root-border-color)}.dd0224-audit>.toggle-details.is-active .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.dd0224-audit>.details{margin-top:4px;margin-bottom:30px;border:1px solid var(--root-border-color);border-radius:5px;overflow:auto;max-height:calc(100vh - 290px);color:var(--root-content-color);background:var(--root-background-color)}@media only screen and (max-width:759px){.dd0224-audit>.details{max-height:calc(100vh - 230px)}}.dd0224-audit>.details.mod-unrecognized-details-type{background:var(--root-error-color);color:var(--root-background-color);padding:8px 10px}.dd0224-audit>.details .details-table{width:100%;border-spacing:0;border-collapse:collapse}.dd0224-audit>.details .details-table td{padding:8px 4px;font-size:12px;line-height:1.2}.dd0224-audit>.details .details-table td[data-type=bytes],.dd0224-audit>.details .details-table td[data-type=ms],.dd0224-audit>.details .details-table td[data-type=timespanMs]{text-align:right;width:6em}.dd0224-audit>.details .details-table td[data-type=code],.dd0224-audit>.details .details-table td[data-type=url]{min-width:6em;overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.dd0224-audit>.details .details-table td[data-type=thumbnail]{padding:0;width:100px}.dd0224-audit>.details .details-table td[data-type=thumbnail] img{display:block;width:100px;height:100px;object-fit:contain}.dd0224-audit>.details .details-table tbody tr td{border-top:1px solid var(--root-border-color)}.dd0224-audit>.details .details-table td:not(:first-child){border-left:1px solid var(--root-border-color)}.dd0224-audit>.details .details-table .error-unknown-type{background:var(--root-error-color);color:var(--root-background-color)}.dd0224-audit[data-grade=good]:before{border-radius:50%}.dd0224-audit[data-grade=good]:before,.dd0224-audit[data-grade=good]>.title .value{background-color:var(--root-grade-good-color)}.dd0224-audit[data-grade=average]:before{border-radius:2px}.dd0224-audit[data-grade=average]:before,.dd0224-audit[data-grade=average]>.title .value{background-color:var(--root-grade-average-color)}.dd0224-audit[data-grade=bad]:before{width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:0 solid transparent;border-bottom:12px solid transparent;border-bottom-color:var(--root-grade-bad-color);background:none transparent}.dd0224-audit[data-grade=bad]>.title .value{background-color:var(--root-grade-bad-color)}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/views/result/main/psi/audits.tsx":
/*!**********************************************!*\
  !*** ./src/views/result/main/psi/audits.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! filesize */ "filesize");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pretty_ms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-ms */ "pretty-ms");
/* harmony import */ var pretty_ms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pretty_ms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/markdown */ "./src/components/markdown/index.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/icon */ "./src/components/icon/index.jsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ */ "./src/views/result/main/psi/index.tsx");
/* harmony import */ var _audits_module_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audits.module.less */ "./src/views/result/main/psi/audits.module.less");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // ============================================================================

var Audits = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: _audits_module_less__WEBPACK_IMPORTED_MODULE_8__["default"]
})(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var group = _ref.group,
      className = _ref.className;
  var title = group.title,
      audits = group.audits;
  var ContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    ref: ContainerRef,
    "data-group": group.group
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "title"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "audits"
  }, audits.map(function (audit) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Audit, {
      key: audit.title,
      audit: audit
    });
  })));
}));
/* harmony default export */ __webpack_exports__["default"] = (Audits); // ============================================================================

var Audit =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Audit, _React$PureComponent);

  function Audit(props) {
    var _this;

    _classCallCheck(this, Audit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Audit).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "hasDetails", void 0);

    _defineProperty(_assertThisInitialized(_this), "hasWarnings", void 0);

    _defineProperty(_assertThisInitialized(_this), "detailsType", void 0);

    _defineProperty(_assertThisInitialized(_this), "DetailsToggleRef", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _this.state = {
      showDetails: false
    };
    var _this$props$audit = _this.props.audit,
        details = _this$props$audit.details,
        warnings = _this$props$audit.warnings;
    _this.hasDetails = _typeof(details) === 'object';
    _this.hasWarnings = Array.isArray(warnings) && warnings.length > 0;
    _this.detailsType = _this.hasDetails ? details.type === 'table' ? 'table' : details.type === 'opportunity' && Array.isArray(details.items) && Array.isArray(details.headings) ? 'opportunity-table' : 'unknown' : undefined;

    if (false) { var _console, unrecognized; }

    _this.toggleDetails = _this.toggleDetails.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Audit, [{
    key: "toggleDetails",
    value: function toggleDetails(evt) {
      var _this2 = this;

      evt.currentTarget.blur();
      this.setState(function (prevState) {
        return {
          showDetails: !prevState.showDetails
        };
      }, function () {
        if (_this2.state.showDetails && _this2.DetailsToggleRef.current) Object(___WEBPACK_IMPORTED_MODULE_7__["scrollTo"])(_this2.DetailsToggleRef.current);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$audit2 = this.props.audit,
          title = _this$props$audit2.title,
          score = _this$props$audit2.score,
          displayValue = _this$props$audit2.displayValue,
          description = _this$props$audit2.description,
          details = _this$props$audit2.details;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_audits_module_less__WEBPACK_IMPORTED_MODULE_8__["wrapper"], "-audit"),
        "data-grade": Object(___WEBPACK_IMPORTED_MODULE_7__["getGradeFromScore"])(score),
        "data-score": score
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text"
      }, title), displayValue && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "value"
      }, displayValue)), description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "description",
        source: description
      }), this.hasDetails && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(['toggle-details', {
          'is-active': this.state.showDetails
        }]),
        type: "button",
        onClick: this.toggleDetails,
        ref: this.DetailsToggleRef
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "arrow-right3",
        className: "icon"
      }), this.state.showDetails ? __("views.result.psi.button_hide_details") : __("views.result.psi.button_show_details")), this.state.showDetails && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(['details', {
          'mod-unrecognized-details-type': this.detailsType === 'unknown'
        }])
      }, this.detailsType === 'table' || this.detailsType === 'opportunity-table' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailsTable, {
        details: details
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __("views.result.psi.details_unkown_type", '0', {
        type: details.type || ''
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), __("views.result.psi.details_unkown_type", '1'))));
    }
  }]);

  return Audit;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent); // ============================================================================


var DetailsTable = function DetailsTable(_ref2) {
  var details = _ref2.details;
  var headings = details.headings,
      items = details.items;
  if (!Array.isArray(headings)) return null;
  if (!Array.isArray(items)) return null;
  if (false) {}
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "details-table"
  }, Array.isArray(headings) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, headings.map(function (_ref3, index) {
    var key = _ref3.key,
        label = _ref3.label,
        text = _ref3.text,
        valueType = _ref3.valueType,
        itemType = _ref3.itemType;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      key: index,
      "data-key": key,
      "data-type": valueType || itemType
    }, label || text);
  }))), Array.isArray(items) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: index
    }, headings.map(function (_ref4, index) {
      var key = _ref4.key,
          valueType = _ref4.valueType,
          itemType = _ref4.itemType;
      var type = valueType || itemType;
      var props = {
        key: index,
        'data-type': type
      };
      var content = item[key];

      switch (type) {
        case 'url':
          {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: content,
              target: "_blank",
              rel: "noopener noreferrer"
            }, content));
          }

        case 'bytes':
          {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", props, filesize__WEBPACK_IMPORTED_MODULE_3___default()(content || 0));
          }

        case 'ms':
        case 'timespanMs':
          {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", props, pretty_ms__WEBPACK_IMPORTED_MODULE_4___default()(content, {
              secondsDecimalDigits: 0
            }));
          }

        case 'text':
          {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", props, content);
          }

        case 'code':
          {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, content));
          }

        case 'thumbnail':
          {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: content,
              alt: content,
              loading: "lazy"
            }));
          }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", _extends({
        className: "error-unknown-type"
      }, props), __("views.result.psi.details_unkown_type", '0', {
        type: type || ''
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), __("views.result.psi.details_unkown_type", '1'));
    }));
  })));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/result/main/psi/category.tsx":
/*!************************************************!*\
  !*** ./src/views/result/main/psi/category.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/markdown */ "./src/components/markdown/index.tsx");
/* harmony import */ var _audits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audits */ "./src/views/result/main/psi/audits.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./src/views/result/main/psi/index.tsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.less */ "./src/views/result/main/psi/index.module.less");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // ============================================================================

var Body = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var result = _ref.result,
      category = _ref.category,
      score = _ref.score;
  var props = {
    className: "".concat(_index_module_less__WEBPACK_IMPORTED_MODULE_4__["wrapper"], "-category"),
    'data-category': category
  };

  if (category === 'OTHER_INFO') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "infos",
      source: __("views.result.psi.markdown_ending_msg")
    }));
  }

  ___WEBPACK_IMPORTED_MODULE_3__["BodyRefs"][category] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var grade = Object(___WEBPACK_IMPORTED_MODULE_3__["getGradeFromScore"])(score || 0);
  Object.assign(props, {
    ref: ___WEBPACK_IMPORTED_MODULE_3__["BodyRefs"][category],
    'data-grade': grade
  });

  if (category === 'loadingExperience') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "title"
    }, __("views.result.psi.loadingExperience")));
  }

  if (!result) return null;
  var lighthouseResult = result.lighthouseResult;
  var audits = lighthouseResult.audits,
      categories = lighthouseResult.categories,
      categoryGroups = lighthouseResult.categoryGroups;
  var _categories$category = categories[category],
      title = _categories$category.title,
      description = _categories$category.description,
      _categories$category$ = _categories$category.auditRefs,
      auditRefs = _categories$category$ === void 0 ? {} : _categories$category$;
  var auditGroups = {};
  var auditGroupsSorted = [];

  for (var _i = 0, _Object$values = Object.values(auditRefs); _i < _Object$values.length; _i++) {
    var audit = _Object$values[_i];

    var id = audit.id,
        weight = audit.weight,
        _audit$group = audit.group,
        _group = _audit$group === void 0 ? '.' : _audit$group;

    var thisAudit = audits[id];
    if (_group !== 'metrics' && typeof thisAudit.score === 'number' && thisAudit.score > 0.9 || thisAudit.scoreDisplayMode === 'notApplicable' || thisAudit.scoreDisplayMode === 'informative') continue;

    if (!auditGroups[_group]) {
      var _ref2 = categoryGroups[_group] || {},
          _ref2$title = _ref2.title,
          _title = _ref2$title === void 0 ? __("views.result.psi.group_other") : _ref2$title,
          _description = _ref2.description;

      auditGroups[_group] = {
        group: _group,
        title: _title,
        description: _description,
        audits: []
      };
      auditGroupsSorted.push(auditGroups[_group]);
    }

    auditGroups[_group].audits.push(_objectSpread({
      id: id,
      weight: weight
    }, thisAudit));
  }

  auditGroupsSorted.sort(function (a, b) {
    if (a.group === '.') return 1;
    if (b.group === '.') return -1;
    return 1;
  });

  if (auditGroupsSorted.length === 1 && auditGroupsSorted[0].group === '.') {
    auditGroupsSorted[0].title = undefined;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title"
  }, title), description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "description",
    source: description
  }), auditGroupsSorted.map(function (g) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_audits__WEBPACK_IMPORTED_MODULE_2__["default"], {
      group: g,
      key: g.group
    });
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Body);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/result/main/psi/index.module.less":
/*!*****************************************************!*\
  !*** ./src/views/result/main/psi/index.module.less ***!
  \*****************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'b54b2f';const css = '@-webkit-keyframes fade-in{.b54b2f 0%{opacity:0}.b54b2f to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.b54b2f 0%{opacity:0}.b54b2f to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.b54b2f .link-color-inherit{color:inherit;text-decoration:underline}.b54b2f html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.b54b2f .link-color-inherit:active,.b54b2f html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.b54b2f{position:relative}.b54b2f-switches{position:relative;position:-webkit-sticky;position:sticky;top:50px;background:var(--root-background-color-deeper);border-bottom:1px solid var(--root-border-color);z-index:100;padding:0 30px;box-shadow:0 0 10px rgba(0,0,0,.25)}@media only screen and (max-width:759px){.b54b2f-switches{padding:0;text-align:center}}.b54b2f-switches .switch{width:5em;text-align:center;position:relative;padding:50px 0 0;border:0;border-top:1em solid transparent;border-bottom:10px solid transparent;margin:0 1em 0 0;line-height:20px;display:inline-block;background:none transparent;color:var(--root-content-color-lighter);cursor:pointer;transition-property:color}@media only screen and (max-width:759px){.b54b2f-switches .switch{margin-right:5px}}.b54b2f-switches .switch .score{position:absolute;width:50px;height:50px;line-height:50px;top:0;left:50%;margin-left:-25px;background:#616161;color:#fff;border-radius:50%;font-size:20px;transition-property:opacity}.b54b2f-switches .switch .score[data-score=FAST],.b54b2f-switches .switch .score[data-score=GOOD]{background:#43a047}.b54b2f-switches .switch .score[data-score=AVERAGE]{background:#e67219}.b54b2f-switches .switch .score[data-score=BAD],.b54b2f-switches .switch .score[data-score=SLOW]{background:#d33131}.b54b2f-switches .switch .score.is-number{background:transparent;color:var(--root-content-color)}.b54b2f-switches .switch .score.is-number:after,.b54b2f-switches .switch .score.is-number:before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%}.b54b2f-switches .switch .score.is-number:before{z-index:-1;border:4px solid}.b54b2f-switches .switch .score.is-number:after{z-index:-2;background:var(--root-background-color-lighter);opacity:.35}.b54b2f-switches .switch .score.is-number[data-grade=good]{color:var(--root-grade-good-color-deeper)}.b54b2f-switches .switch .score.is-number[data-grade=good]:before{border-color:var(--root-grade-good-color)}.b54b2f-switches .switch .score.is-number[data-grade=good]:after{background:var(--root-grade-good-color)}.b54b2f-switches .switch .score.is-number[data-grade=average]{color:var(--root-grade-average-color-deeper)}.b54b2f-switches .switch .score.is-number[data-grade=average]:before{border-color:var(--root-grade-average-color)}.b54b2f-switches .switch .score.is-number[data-grade=average]:after{background:var(--root-grade-average-color)}.b54b2f-switches .switch .score.is-number[data-grade=bad]{color:var(--root-grade-bad-color-deeper)}.b54b2f-switches .switch .score.is-number[data-grade=bad]:before{border-color:var(--root-grade-bad-color)}.b54b2f-switches .switch .score.is-number[data-grade=bad]:after{background:var(--root-grade-bad-color)}.b54b2f-switches .switch .title{display:block;margin-top:10px}@media only screen and (max-width:759px){.b54b2f-switches .switch .title{font-size:smaller}}html.is-hover .b54b2f-switches .switch:hover{color:var(--root-text-main-color)}.b54b2f-switches .switch:active,html.is-hover .b54b2f-switches .switch:hover:active{color:var(--root-accent-color-active)}.b54b2f-switches .switch:active .score,html.is-hover .b54b2f-switches .switch:hover:active .score{opacity:.6}.b54b2f-category{margin:0 auto;padding:30px;border-top:4px solid var(--root-border-color);border-bottom:1px solid var(--root-border-color)}.b54b2f-category>.title{color:var(--root-text-main-color)}.b54b2f-category[data-grade=good]{border-top-color:var(--root-grade-good-color)}.b54b2f-category[data-grade=average]{border-top-color:var(--root-grade-average-color)}.b54b2f-category[data-grade=bad]{border-top-color:var(--root-grade-bad-color)}.b54b2f-category[data-category=OTHER_INFO]{background:var(--root-background-color)}.b54b2f-category a{color:inherit;text-decoration:underline}html.is-hover .b54b2f-category a:hover{color:#000;color:var(--root-accent-color-hover)}.b54b2f-category a:active,html.is-hover .b54b2f-category a:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/views/result/main/psi/index.tsx":
/*!*********************************************!*\
  !*** ./src/views/result/main/psi/index.tsx ***!
  \*********************************************/
/*! exports provided: BodyRefs, scrollTo, scrollToCategory, getGradeFromScore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyRefs", function() { return BodyRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToCategory", function() { return scrollToCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGradeFromScore", function() { return getGradeFromScore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _utils_client_scroll_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/client/scroll-to */ "./src/utils/client/scroll-to.ts");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../empty */ "./src/views/result/main/empty/index.tsx");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switch */ "./src/views/result/main/psi/switch.tsx");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category */ "./src/views/result/main/psi/category.tsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.less */ "./src/views/result/main/psi/index.module.less");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index */ "./src/views/result/main/index.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }








 // ============================================================================

var ContainerRef;
var SwitchContainerRef;
var BodyRefs = {};
var scrollTo = function scrollTo(el) {
  if (!el) return;
  var containerEl = ContainerRef.current;
  if (!containerEl) return;
  var headerEl = _index__WEBPACK_IMPORTED_MODULE_7__["HeaderRef"].current;
  if (!headerEl) return;
  var switchContainerEl = SwitchContainerRef.current;
  if (!switchContainerEl) return;
  var rect = el.getBoundingClientRect();
  var toY = rect.top + window.pageYOffset - (parseInt(getComputedStyle(containerEl).paddingTop || '0') + switchContainerEl.offsetHeight + headerEl.offsetHeight + parseInt(getComputedStyle(headerEl).top || '0') + parseInt(getComputedStyle(el).marginTop || '0'));
  Object(_utils_client_scroll_to__WEBPACK_IMPORTED_MODULE_2__["default"])(toY);
};
var scrollToCategory = function scrollToCategory(category) {
  var bodyEl = BodyRefs[category].current;
  if (!bodyEl) return;
  scrollTo(bodyEl);
};
var getGradeFromScore = function getGradeFromScore(score) {
  if (typeof score === 'number') {
    return score < 0.6 ? 'bad' : score < 0.85 ? 'average' : 'good';
  }

  if (typeof score === 'string') {
    switch (score.toLowerCase()) {
      case 'slow':
        return 'bad';

      case 'fast':
        return 'good';
    }

    return score.toLowerCase();
  }

  return 'unknown';
}; // ============================================================================

var Psi = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_6__["default"]
})(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var className = _ref.className,
      result = _ref.result;
  if (!result) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_empty__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: __("views.result.no_psi")
  });
  ContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  SwitchContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // if (__CLIENT__ && __DEV__) console.warn(result);

  var lighthouseResult = result.lighthouseResult;
  var _lighthouseResult$cat = lighthouseResult.categories,
      categories = _lighthouseResult$cat === void 0 ? {} : _lighthouseResult$cat;

  var allCategories = _toConsumableArray(Object.keys(categories)); // const [currentType, switchType] = useState(allCategories[0]);


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    ref: ContainerRef
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(className, "-switches"),
    ref: SwitchContainerRef
  }, allCategories.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: category,
      title: category === 'loadingExperience' ? __("views.result.psi.loadingExperience") : categories[category].title,
      key: category,
      score: category === 'loadingExperience' ? result.loadingExperience.overall_category : categories[category].score
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, allCategories.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_category__WEBPACK_IMPORTED_MODULE_5__["default"], {
      category: category,
      key: category,
      result: result,
      score: category === 'loadingExperience' ? result.loadingExperience.overall_category : categories[category].score
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_category__WEBPACK_IMPORTED_MODULE_5__["default"], {
    category: "OTHER_INFO"
  })));
}));
/* harmony default export */ __webpack_exports__["default"] = (Psi);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/result/main/psi/switch.tsx":
/*!**********************************************!*\
  !*** ./src/views/result/main/psi/switch.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./src/views/result/main/psi/index.tsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // ============================================================================

var Switch =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Switch, _React$PureComponent);

  function Switch(props) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Switch, [{
    key: "onClick",
    value: function onClick(evt) {
      evt.currentTarget.blur();
      Object(___WEBPACK_IMPORTED_MODULE_2__["scrollToCategory"])(this.props.category);
    }
  }, {
    key: "render",
    value: function render() {
      var isScoreNumber = typeof this.props.score === 'number';
      var grade = Object(___WEBPACK_IMPORTED_MODULE_2__["getGradeFromScore"])(this.props.score);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "switch",
        onClick: this.onClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['score', {
          'is-number': isScoreNumber
        }]),
        "data-score": this.props.score,
        "data-grade": grade
      }, isScoreNumber ? this.props.score * 100 : __("views.result.psi", this.props.score)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title"
      }, this.props.title));
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Switch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/result/main/table/index.module.less":
/*!*******************************************************!*\
  !*** ./src/views/result/main/table/index.module.less ***!
  \*******************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'a10a17';const css = '@-webkit-keyframes fade-in{.a10a17 0%{opacity:0}.a10a17 to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.a10a17 0%{opacity:0}.a10a17 to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.a10a17 .link-color-inherit{color:inherit;text-decoration:underline}.a10a17 html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.a10a17 .link-color-inherit:active,.a10a17 html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.a10a17{position:relative;padding-bottom:30px}.a10a17 .header,.a10a17 .item{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;position:relative;border-bottom:1px solid var(--root-border-color)}.a10a17 .header>:first-child,.a10a17 .header>[data-column],.a10a17 .item>:first-child,.a10a17 .item>[data-column]{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;align-items:center}.a10a17 .header>:first-child,.a10a17 .item>:first-child{-webkit-flex:1;flex:1;line-height:20px;padding:5px 8px 5px 30px}.a10a17 .header>[data-column],.a10a17 .item>[data-column]{-webkit-flex:0.1;flex:0.1;margin:0;font-size:12px;line-height:14px;border-left:1px solid var(--root-border-color);overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;padding:8px}.a10a17 .header>[data-column]:last-child,.a10a17 .item>[data-column]:last-child{padding-right:30px}.a10a17 .header>[data-column=contentLength],.a10a17 .item>[data-column=contentLength]{-webkit-flex-basis:6em;flex-basis:6em;-webkit-justify-content:flex-end;justify-content:flex-end}.a10a17 .header>[data-column=pageUrl],.a10a17 .header>[data-column=url],.a10a17 .item>[data-column=pageUrl],.a10a17 .item>[data-column=url]{-webkit-flex-basis:8em;flex-basis:8em}.a10a17 .header dl dt,.a10a17 .item dl dt{display:none}.a10a17 .header dl dd,.a10a17 .item dl dd{margin:0}.a10a17 .header{position:-webkit-sticky;position:sticky;z-index:5;background:var(--root-background-color-deeper);padding:8px 0;font-weight:bolder;top:50px;box-shadow:0 0 10px rgba(0,0,0,.25)}.a10a17 .item{word-break:break-all;overflow-wrap:break-word}.a10a17 .item:hover{z-index:2}.a10a17 .item:hover:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background:var(--root-background-color-deeper);z-index:-1;-webkit-animation:fade-in-to-half-opacity .1s ease-out;animation:fade-in-to-half-opacity .1s ease-out;border-radius:inherit;opacity:.5}.a10a17 .header+.item{border-top:4px solid var(--root-border-color)}@media only screen and (max-width:759px){.a10a17 .header{display:none}.a10a17 .item{display:block;margin:20px 30px 0;border:1px solid var(--root-border-color);padding:14px;border-radius:5px;box-shadow:0 5px 5px -3px rgba(0,0,0,.1);transition-property:box-shadow}.a10a17 .item>:first-child,.a10a17 .item>[data-column]{display:block}.a10a17 .item>:first-child{padding:0;font-size:1.2em;line-height:1.5}.a10a17 .item>[data-column]{border-left:0;position:relative;display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;margin:0;font-size:14px;line-height:1.5;padding:8px 0 0}.a10a17 .item>[data-column].is-empty,.a10a17 .item>[data-column]:after,.a10a17 .item>[data-column]:empty{display:none}.a10a17 .item>[data-column] dt{display:block;text-align:right;clear:left;-webkit-flex:0;flex:0;white-space:nowrap;margin:0 1em 0 0}.a10a17 .item>[data-column] dd{display:block;margin:0;-webkit-flex:1;flex:1}.a10a17 .item:first-child{margin-top:0}.a10a17 .item:hover{box-shadow:0 10px 10px -5px rgba(0,0,0,.15)}.a10a17 .item:hover:after{content:none}.a10a17 .item>:first-child+[data-column]{padding-top:30px}.a10a17 .item>:first-child+[data-column]:before{content:"";position:absolute;top:13px;left:-14px;right:-14px;height:1px;background:var(--root-border-color);-webkit-flex:none;flex:none}.a10a17 .header+.item{margin-top:30px}}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/views/result/main/table/index.tsx":
/*!***********************************************!*\
  !*** ./src/views/result/main/table/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! filesize */ "filesize");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../empty */ "./src/views/result/main/empty/index.tsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.less */ "./src/views/result/main/table/index.module.less");
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // ============================================================================

var getColumns = function getColumns(type) {
  if (type === 'no gzip') return ['url', 'contentLength'];
  if (type === 'console error') return ['message', 'url'];
  if (type === 'broken request') return ['url', 'pageUrl'];
  if (type === 'large file') return ['url', 'contentLength', 'pageUrl'];
  if (type === 'common error') return ['message'];
  return ['url'];
};

// Functional Component =======================================================
var Table = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_5__["default"]
})(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var className = _ref.className,
      errors = _ref.errors,
      type = _ref.type;
  if (!errors.length) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_empty__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  if (false) {}
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, getColumns(type).map(function (column, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cell",
      key: column,
      "data-column": index ? column : undefined
    }, __("views.result.table_columns", column));
  })), errors.map(function (error) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      error: error,
      key: error.id
    });
  }));
}));
/* harmony default export */ __webpack_exports__["default"] = (Table); // ============================================================================

var Item = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref2) {
  var error = _ref2.error;

  var getContent = function getContent(column) {
    if (!error[column]) return null;
    if (column === 'pageUrl' || column === 'url') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: error[column],
      target: "_blank",
      rel: "noopener noreferrer"
    }, error[column]);
    if (column === 'contentLength') return filesize__WEBPACK_IMPORTED_MODULE_2___default()(error.contentLength || 0);
    return error[column];
  };

  var _getColumns = getColumns(error.type || ''),
      _getColumns2 = _toArray(_getColumns),
      main = _getColumns2[0],
      columns = _getColumns2.slice(1);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main"
  }, main === 'message' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "msg"
  }, error.message) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: error.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, error.url)), columns.map(function (column) {
    var content = getContent(column);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['info', {
        'is-empty': !content
      }]),
      key: column,
      "data-column": column
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, __("views.result.table_columns", column)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, getContent(column)));
  }));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/submit/form.tsx":
/*!***********************************!*\
  !*** ./src/views/submit/form.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/icon */ "./src/components/icon/index.jsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.less */ "./src/views/submit/index.module.less");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 //

//

/**
 * 提交表单
 */
var Form = function Form(_ref) {
  var onSubmit = _ref.onSubmit;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "/api/diagnose",
    method: "get",
    onSubmit: onSubmit,
    className: "".concat(_index_module_less__WEBPACK_IMPORTED_MODULE_3__["wrapper"], "-form")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    label: __("views.submit.labels.url"),
    name: "url",
    type: "url",
    autoComplete: "url",
    icon: "sphere",
    placeholder: "https://...",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    label: __("views.submit.labels.email"),
    name: "email",
    type: "email",
    autoComplete: "email",
    icon: "envelop2",
    placeholder: "someone@web.site",
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit"
  }, __("views.submit.buttons.submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (Form); //

var inputClassName = "".concat(_index_module_less__WEBPACK_IMPORTED_MODULE_3__["wrapper"], "-input");

var Input = function Input(_ref2) {
  var className = _ref2.className,
      label = _ref2.label,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'text' : _ref2$type,
      icon = _ref2.icon,
      props = _objectWithoutProperties(_ref2, ["className", "label", "type", "icon"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([className, inputClassName])
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    className: "".concat(inputClassName, "-input"),
    type: type
  }, props)), icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: icon,
    className: "".concat(inputClassName, "-icon"),
    title: label
  }), label && !icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "".concat(inputClassName, "-label")
  }, label));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/submit/index.module.less":
/*!********************************************!*\
  !*** ./src/views/submit/index.module.less ***!
  \********************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony import */ var _Users_dream_Desktop_liebao_koot_clinic_src_assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _Users_dream_Desktop_liebao_koot_clinic_src_assets_logo_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dream_Desktop_liebao_koot_clinic_src_assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__);
const wrapper = 'a7a987';const css = '@-webkit-keyframes fade-in{.a7a987 0%{opacity:0}.a7a987 to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-to-half-opacity{.a7a987 0%{opacity:0}.a7a987 to{opacity:.5}}@keyframes fade-in-to-half-opacity{0%{opacity:0}to{opacity:.5}}.a7a987 .link-color-inherit{color:inherit;text-decoration:underline}.a7a987 html.is-hover .link-color-inherit:hover{color:#000;color:var(--root-accent-color-hover)}.a7a987 .link-color-inherit:active,.a7a987 html.is-hover .link-color-inherit:hover:active{color:#000;color:var(--root-accent-color-hover);opacity:.5}.a7a987{display:-webkit-flex;display:flex;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;width:100%;min-height:400px;height:100vh;font-size:15px;overflow-x:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#424242;background:radial-gradient(#0278b8 15%,transparent 16%) 0 0,radial-gradient(#0278b8 15%,transparent 16%) 8px 8px,radial-gradient(hsla(0,0%,100%,.1) 15%,transparent 20%) 0 1px,radial-gradient(hsla(0,0%,100%,.1) 15%,transparent 20%) 8px 9px;background-color:#0288d1;background-size:16px 16px}.a7a987>.wrapper{max-width:480px;position:relative;z-index:10}.a7a987 h1.logo{width:auto;height:100px;margin:0 auto 50px;color:transparent;background:url("' + _Users_dream_Desktop_liebao_koot_clinic_src_assets_logo_svg__WEBPACK_IMPORTED_MODULE_0___default.a + '") 50% 50% no-repeat;background-size:contain}.a7a987 .result-background{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1}.a7a987.mod-fail .result-background,.a7a987.mod-success .result-background{-webkit-animation:fade-in 1s linear;animation:fade-in 1s linear}.a7a987.mod-success .result-background{background:radial-gradient(#317c34 15%,transparent 16%) 0 0,radial-gradient(#317c34 15%,transparent 16%) 8px 8px,radial-gradient(hsla(0,0%,100%,.1) 15%,transparent 20%) 0 1px,radial-gradient(hsla(0,0%,100%,.1) 15%,transparent 20%) 8px 9px;background-color:#388e3c;background-size:16px 16px}.a7a987.mod-fail .result-background{background:radial-gradient(#b22424 15%,transparent 16%) 0 0,radial-gradient(#b22424 15%,transparent 16%) 8px 8px,radial-gradient(hsla(0,0%,100%,.1) 15%,transparent 20%) 0 1px,radial-gradient(hsla(0,0%,100%,.1) 15%,transparent 20%) 8px 9px;background-color:#c72929;background-size:16px 16px}.a7a987-form{display:block;border-radius:10px;overflow:hidden;position:relative}.a7a987-form>.body{position:relative;z-index:2;background:#fff}.a7a987-form button[type=submit]{display:block;width:100%;font-size:24px;margin:0;line-height:60px;color:#fff;text-decoration:none;padding:0 2em;border:2px solid #fff;border-top:0;border-radius:0 0 10px 10px;background:transparent;outline:0;box-shadow:inset 0 0 20px rgba(0,0,0,.15)}.a7a987-form button[type=submit]:active,.a7a987-form button[type=submit]:focus:not(:active),.a7a987-form button[type=submit]:hover{background:rgba(1,54,83,.25)}.a7a987-form button[type=submit]:active{background:rgba(0,21,32,.35)}.a7a987-input{display:block;position:relative}.a7a987-input .a7a987-input-icon{display:block;pointer-events:none;position:absolute;width:24px;height:24px;top:50%;margin:-12px 0 0 12px}.a7a987-input .a7a987-input-input{display:block;border:0;outline:0;font-size:24px;height:60px;padding:0 22px 0 46px;width:100%}.a7a987-input .a7a987-input-input::-webkit-input-placeholder{color:currentColor;opacity:.25;font-style:italic}.a7a987-input .a7a987-input-input::-moz-placeholder{color:currentColor;opacity:.25;font-style:italic}.a7a987-input .a7a987-input-input:-ms-input-placeholder{color:currentColor;opacity:.25;font-style:italic}.a7a987-input .a7a987-input-input:-moz-placeholder{color:currentColor;opacity:.25;font-style:italic}.a7a987-input .a7a987-input-input:hover:not(:focus){background:#f9f9f9}.a7a987-input .a7a987-input-input:focus{background:#edf8ff;color:#01579b}.a7a987-input .a7a987-input-input:focus~.a7a987-input-icon,.a7a987-input .a7a987-input-input:focus~.a7a987-input-label{color:#01579b}.a7a987-input+.a7a987-input{border-top:2px solid #e6e6e6}.a7a987-overlay{display:block;position:absolute;z-index:9999;top:150px;bottom:0;left:0;right:0;overflow:hidden;border-radius:10px}.a7a987-overlay .loader,.a7a987-overlay:after{left:50%;top:50%;position:absolute;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.a7a987-overlay:after{content:"";background:#fff;width:960px;height:960px;margin:-480px 0 0 -480px;border-radius:50%;box-shadow:0 0 100px rgba(0,0,0,.25);z-index:-1}.a7a987-overlay .loader{transition-property:opacity;width:100px;height:100px;margin:-50px 0 0 -50px;z-index:5;opacity:0;transition-duration:.5s}.a7a987-overlay .loader:before{-webkit-animation-duration:1s;animation-duration:1s}.a7a987-overlay .loader:after{display:none}.a7a987-overlay .result{position:absolute;display:block;top:50%;left:0;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-animation:fade-in .3s ease-out;animation:fade-in .3s ease-out;-webkit-animation-delay:.3s;animation-delay:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;padding-left:84px;border-left:40px solid transparent;border-right:40px solid transparent}.a7a987-overlay .result .icon{position:absolute;width:64px;height:64px;left:0;top:50%;margin-top:-32px}.a7a987-overlay .result .msg,.a7a987-overlay .result .title{display:block}.a7a987-overlay .result .title{margin-top:4px;margin-bottom:17px;font-size:24px;line-height:24px}.a7a987-overlay .result .msg{margin-top:0;font-size:15px;line-height:15px}.is-submitting .a7a987-overlay .loader{-webkit-animation:scale-in .325s linear;animation:scale-in .325s linear;opacity:1}.is-submitting .a7a987-overlay:after{-webkit-animation:scale-in .75s linear;animation:scale-in .75s linear}@-webkit-keyframes scale-in{.a7a987 0%{-webkit-transform:scale(0);transform:scale(0)}.a7a987 to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-in{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}.mod-success .a7a987-overlay .icon{fill:#4caf50}.mod-success .a7a987-overlay .title{color:#4caf50}.mod-fail .a7a987-overlay .icon{fill:#e53734}.mod-fail .a7a987-overlay .title{color:#e53734}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/views/submit/index.tsx":
/*!************************************!*\
  !*** ./src/views/submit/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_get_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/get-title */ "./src/utils/get-title.ts");
/* harmony import */ var _utils_get_description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/get-description */ "./src/utils/get-description.ts");
/* harmony import */ var _components_center__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/center */ "./src/components/center/index.jsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.less */ "./src/views/submit/index.module.less");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form */ "./src/views/submit/form.tsx");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overlay */ "./src/views/submit/overlay.tsx");
var _dec, _class, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 页面: 提交信息 (首页)
 */









 //

var ViewSubmit = (_dec = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  pageinfo: function pageinfo() {
    return {
      title: Object(_utils_get_title__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      metas: [{
        description: Object(_utils_get_description__WEBPACK_IMPORTED_MODULE_5__["default"])()
      }]
    };
  },
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_7__["default"]
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ViewSubmit, _React$Component);

  function ViewSubmit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ViewSubmit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ViewSubmit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      result: undefined,
      submitting: false
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (evt) {
      evt.preventDefault(); // 必要信息

      var $form = evt.target;
      var method = $form.getAttribute('method');
      var url = $form.getAttribute('action');
      var data = new FormData($form); // FormData -> params

      var params = {};
      data.forEach(function (value, key) {
        params[key] = value;
      }); // 提交

      var axiosConfig = {
        url: url !== null ? url : undefined,
        method: method,
        params: params
      };

      _this.setState({
        submitting: true
      }, function () {
        Promise.all([axios__WEBPACK_IMPORTED_MODULE_3___default()(axiosConfig), new Promise(function (resolve) {
          setTimeout(resolve, 1000);
        })]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              res = _ref2[0];

          // console.log({ $form, method, url, data, this: this, res });
          // 判断请求是否成功 & 获取请求结果
          if (!res || _typeof(res) !== 'object' || _typeof(res.data) !== 'object') {
            return _this.setState({
              submitting: false,
              result: false
            });
          }

          _this.setState({
            submitting: false,
            result: true
          });
        });
      }); //


      return false;
    });

    return _this;
  }

  _createClass(ViewSubmit, [{
    key: "render",
    value: function render() {
      var hasResult = Boolean(typeof this.state.result !== 'undefined');
      var isSubmittingOrHasResult = Boolean(this.state.submitting || hasResult);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([this.props.className, {
          'is-submitting': this.state.submitting,
          'mod-success': this.state.result === true,
          'mod-fail': this.state.result === false || typeof this.state.result === 'string'
        }])
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "logo"
      }, "Koot Clinic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSubmit: this.onSubmit
      }), isSubmittingOrHasResult && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_overlay__WEBPACK_IMPORTED_MODULE_9__["default"], {
        result: this.state.result
      })), hasResult && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "result-background"
      }));
    }
  }]);

  return ViewSubmit;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _temp)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (ViewSubmit);

/***/ }),

/***/ "./src/views/submit/overlay.tsx":
/*!**************************************!*\
  !*** ./src/views/submit/overlay.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/icon */ "./src/components/icon/index.jsx");
/* harmony import */ var _components_loaders_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/loaders/spinner */ "./src/components/loaders/spinner/index.jsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.less */ "./src/views/submit/index.module.less");





var Overlay = function Overlay(_ref) {
  var result = _ref.result;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_index_module_less__WEBPACK_IMPORTED_MODULE_3__["wrapper"], "-overlay")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loaders_spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "loader"
  }), typeof result !== 'undefined' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "result"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon",
    icon: "hour-glass3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title"
  }, __("views.submit.submit_success.title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "msg"
  }, __("views.submit.submit_success.msg"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Overlay);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./node_modules/koot/ReactApp/server/ssr.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dream/Desktop/liebao/koot-clinic/node_modules/koot/ReactApp/server/ssr.js */"./node_modules/koot/ReactApp/server/ssr.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "bind-event":
/*!*****************************!*\
  !*** external "bind-event" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bind-event");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "create-react-class":
/*!*************************************!*\
  !*** external "create-react-class" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("create-react-class");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),

/***/ "filesize":
/*!***************************!*\
  !*** external "filesize" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("filesize");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),

/***/ "is-url":
/*!*************************!*\
  !*** external "is-url" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is-url");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-better-http-proxy":
/*!****************************************!*\
  !*** external "koa-better-http-proxy" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-better-http-proxy");

/***/ }),

/***/ "koa-mount":
/*!****************************!*\
  !*** external "koa-mount" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-mount");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pretty-ms":
/*!****************************!*\
  !*** external "pretty-ms" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pretty-ms");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ })

/******/ });
//# sourceMappingURL=ssr.js.map