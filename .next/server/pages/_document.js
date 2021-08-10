(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/head-manager.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/head-manager.js ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/request-idle-callback.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/request-idle-callback.js ***!
  \************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/script.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/script.js ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/request-idle-callback.js");

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR

  const {
    updateScripts,
    scripts
  } = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([(0, _extends2.default)({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/pages/_document.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/pages/_document.js ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/server.js"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/server/htmlescape.js");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/script.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map(file => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, ["strategy"]);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var _buildManifest$lowPri;

  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/server/htmlescape.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/server/htmlescape.js ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \***************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}

/***/ }),

/***/ "./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/server.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/server.js ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = flushToReact;
exports.flushToHTML = flushToHTML;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _style = __webpack_require__(/*! ./style */ "./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function flushToReact(options) {
  if (options === void 0) {
    options = {};
  }

  return (0, _style.flush)().map(function (args) {
    var id = args[0];
    var css = args[1];
    return _react["default"].createElement('style', {
      id: "__" + id,
      // Avoid warnings upon render with a key
      key: "__" + id,
      nonce: options.nonce ? options.nonce : undefined,
      dangerouslySetInnerHTML: {
        __html: css
      }
    });
  });
}

function flushToHTML(options) {
  if (options === void 0) {
    options = {};
  }

  return (0, _style.flush)().reduce(function (html, args) {
    var id = args[0];
    var css = args[1];
    html += "<style id=\"__" + id + "\"" + (options.nonce ? " nonce=\"" + options.nonce + "\"" : '') + ">" + css + "</style>";
    return html;
  }, '');
}

/***/ }),

/***/ "./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/style.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/style.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle = /*#__PURE__*/function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./.yarn/cache/string-hash-npm-1.1.3-3cb8892e7c-104b8667a5.zip/node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry = /*#__PURE__*/function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/server.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/server.js ***!
  \**************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/server */ "./.yarn/__virtual__/styled-jsx-virtual-ecd0c9fa72/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/server.js")


/***/ }),

/***/ "./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/extends.js":
/*!************************************************************************************************************************!*\
  !*** ./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/extends.js ***!
  \************************************************************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************************************************************************!*\
  !*** ./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./.yarn/cache/object-assign-npm-4.1.1-1004ad6dec-fcc6e4ea8c.zip/node_modules/object-assign/index.js":
/*!***********************************************************************************************************!*\
  !*** ./.yarn/cache/object-assign-npm-4.1.1-1004ad6dec-fcc6e4ea8c.zip/node_modules/object-assign/index.js ***!
  \***********************************************************************************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/checkPropTypes.js":
/*!***************************************************************************************************************!*\
  !*** ./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************************************************************************!*\
  !*** ./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./.yarn/cache/object-assign-npm-4.1.1-1004ad6dec-fcc6e4ea8c.zip/node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js":
/*!******************************************************************************************************!*\
  !*** ./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js ***!
  \******************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************************************************************************!*\
  !*** ./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/cjs/react-is.development.js":
/*!**********************************************************************************************************************!*\
  !*** ./.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/cjs/react-is.development.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/index.js":
/*!***************************************************************************************************!*\
  !*** ./.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/index.js ***!
  \***************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./.yarn/cache/string-hash-npm-1.1.3-3cb8892e7c-104b8667a5.zip/node_modules/string-hash/index.js":
/*!*******************************************************************************************************!*\
  !*** ./.yarn/cache/string-hash-npm-1.1.3-3cb8892e7c-104b8667a5.zip/node_modules/string-hash/index.js ***!
  \*******************************************************************************************************/
/***/ (function(module) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./.yarn/__virtual__/next-virtual-29009529af/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/pages/_document.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtMjkwMDk1MjlhZi8wL2NhY2hlL25leHQtbnBtLTExLjAuMS1jNDBiYzdmMzgwLWM2YjQ3NDdmMWEuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2hlYWQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtMjkwMDk1MjlhZi8wL2NhY2hlL25leHQtbnBtLTExLjAuMS1jNDBiYzdmMzgwLWM2YjQ3NDdmMWEuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtMjkwMDk1MjlhZi8wL2NhY2hlL25leHQtbnBtLTExLjAuMS1jNDBiYzdmMzgwLWM2YjQ3NDdmMWEuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtMjkwMDk1MjlhZi8wL2NhY2hlL25leHQtbnBtLTExLjAuMS1jNDBiYzdmMzgwLWM2YjQ3NDdmMWEuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovL215LWFwcC8uLy55YXJuL19fdmlydHVhbF9fL25leHQtdmlydHVhbC0yOTAwOTUyOWFmLzAvY2FjaGUvbmV4dC1ucG0tMTEuMC4xLWM0MGJjN2YzODAtYzZiNDc0N2YxYS56aXAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZWQtanN4LXZpcnR1YWwtZWNkMGM5ZmE3Mi8wL2NhY2hlL3N0eWxlZC1qc3gtbnBtLTMuMy4yLWU2ZDljYTEzZjQtNzRhMTI5ZGVlNy56aXAvbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9saWIvc3R5bGVzaGVldC5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZWQtanN4LXZpcnR1YWwtZWNkMGM5ZmE3Mi8wL2NhY2hlL3N0eWxlZC1qc3gtbnBtLTMuMy4yLWU2ZDljYTEzZjQtNzRhMTI5ZGVlNy56aXAvbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGVkLWpzeC12aXJ0dWFsLWVjZDBjOWZhNzIvMC9jYWNoZS9zdHlsZWQtanN4LW5wbS0zLjMuMi1lNmQ5Y2ExM2Y0LTc0YTEyOWRlZTcuemlwL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGVkLWpzeC12aXJ0dWFsLWVjZDBjOWZhNzIvMC9jYWNoZS9zdHlsZWQtanN4LW5wbS0zLjMuMi1lNmQ5Y2ExM2Y0LTc0YTEyOWRlZTcuemlwL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGVzaGVldC1yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZWQtanN4LXZpcnR1YWwtZWNkMGM5ZmE3Mi8wL2NhY2hlL3N0eWxlZC1qc3gtbnBtLTMuMy4yLWU2ZDljYTEzZjQtNzRhMTI5ZGVlNy56aXAvbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvc2VydmVyLmpzIiwid2VicGFjazovL215LWFwcC8uLy55YXJuL2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjEyLjUtYjNlZGI4ZWU4ZS02NDk2NGEwZmQxLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL215LWFwcC8uLy55YXJuL2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjEyLjUtYjNlZGI4ZWU4ZS02NDk2NGEwZmQxLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vLnlhcm4vY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMTIuNS1iM2VkYjhlZThlLTY0OTY0YTBmZDEuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vLnlhcm4vY2FjaGUvb2JqZWN0LWFzc2lnbi1ucG0tNC4xLjEtMTAwNGFkNmRlYy1mY2M2ZTRlYThjLnppcC9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi8ueWFybi9jYWNoZS9wcm9wLXR5cGVzLW5wbS0xNS43LjItZDdhMDRmMjI3NC01ZWVmODJmZGRhLnppcC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi8ueWFybi9jYWNoZS9wcm9wLXR5cGVzLW5wbS0xNS43LjItZDdhMDRmMjI3NC01ZWVmODJmZGRhLnppcC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi8ueWFybi9jYWNoZS9wcm9wLXR5cGVzLW5wbS0xNS43LjItZDdhMDRmMjI3NC01ZWVmODJmZGRhLnppcC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi8ueWFybi9jYWNoZS9wcm9wLXR5cGVzLW5wbS0xNS43LjItZDdhMDRmMjI3NC01ZWVmODJmZGRhLnppcC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vLnlhcm4vY2FjaGUvcmVhY3QtaXMtbnBtLTE2LjEzLjEtYTliOTM4MmI0Zi1mN2ExOWFjMzQ5LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL215LWFwcC8uLy55YXJuL2NhY2hlL3JlYWN0LWlzLW5wbS0xNi4xMy4xLWE5YjkzODJiNGYtZjdhMTlhYzM0OS56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL215LWFwcC8uLy55YXJuL2NhY2hlL3N0cmluZy1oYXNoLW5wbS0xLjEuMy0zY2I4ODkyZTdjLTEwNGI4NjY3YTUuemlwL25vZGVfbW9kdWxlcy9zdHJpbmctaGFzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJpbml0SGVhZE1hbmFnZXIiLCJET01BdHRyaWJ1dGVOYW1lcyIsImFjY2VwdENoYXJzZXQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwiaHR0cEVxdWl2Iiwibm9Nb2R1bGUiLCJyZWFjdEVsZW1lbnRUb0RPTSIsInR5cGUiLCJwcm9wcyIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicCIsImhhc093blByb3BlcnR5IiwidW5kZWZpbmVkIiwiYXR0ciIsInRvTG93ZXJDYXNlIiwic2V0QXR0cmlidXRlIiwiY2hpbGRyZW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImlubmVySFRNTCIsIl9faHRtbCIsInRleHRDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsInVwZGF0ZUVsZW1lbnRzIiwiY29tcG9uZW50cyIsImhlYWRFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVhZENvdW50RWwiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImVycm9yIiwiaGVhZENvdW50IiwiTnVtYmVyIiwiY29udGVudCIsIm9sZFRhZ3MiLCJpIiwiaiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ0YWdOYW1lIiwicHVzaCIsIm5ld1RhZ3MiLCJtYXAiLCJmaWx0ZXIiLCJuZXdUYWciLCJrIiwibGVuIiwibGVuZ3RoIiwib2xkVGFnIiwiaXNFcXVhbE5vZGUiLCJzcGxpY2UiLCJmb3JFYWNoIiwidCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImluc2VydEJlZm9yZSIsInRvU3RyaW5nIiwidXBkYXRlUHJvbWlzZSIsIm1vdW50ZWRJbnN0YW5jZXMiLCJTZXQiLCJ1cGRhdGVIZWFkIiwiaGVhZCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJ0YWdzIiwiaCIsImhyZWYiLCJ0aXRsZUNvbXBvbmVudCIsInRpdGxlIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiaW5pdFNjcmlwdExvYWRlciIsIl9leHRlbmRzMiIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiIsIl9yZWFjdCIsIl9oZWFkTWFuYWdlckNvbnRleHQiLCJfaGVhZE1hbmFnZXIiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIlNjcmlwdENhY2hlIiwiTWFwIiwiTG9hZENhY2hlIiwiaWdub3JlUHJvcHMiLCJsb2FkU2NyaXB0Iiwic3JjIiwib25Mb2FkIiwib25FcnJvciIsImNhY2hlS2V5IiwiaGFzIiwiYWRkIiwiZ2V0IiwibG9hZFByb21pc2UiLCJyZWplY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FsbCIsInNldCIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsImluY2x1ZGVzIiwiYm9keSIsImFwcGVuZENoaWxkIiwiaGFuZGxlQ2xpZW50U2NyaXB0TG9hZCIsInN0cmF0ZWd5Iiwid2luZG93IiwibG9hZExhenlTY3JpcHQiLCJyZWFkeVN0YXRlIiwic2NyaXB0TG9hZGVySXRlbXMiLCJTY3JpcHQiLCJyZXN0UHJvcHMiLCJkZWZhdWx0IiwidXBkYXRlU2NyaXB0cyIsInNjcmlwdHMiLCJ1c2VDb250ZXh0IiwiSGVhZE1hbmFnZXJDb250ZXh0IiwidXNlRWZmZWN0IiwiYmVmb3JlSW50ZXJhY3RpdmUiLCJjb25jYXQiLCJfZGVmYXVsdCIsIkh0bWwiLCJNYWluIiwiX3Byb3BUeXBlcyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3NlcnZlciIsIl9jb25zdGFudHMiLCJfZG9jdW1lbnRDb250ZXh0IiwiX3V0aWxzIiwiRG9jdW1lbnRDb250ZXh0IiwiRG9jdW1lbnRJbml0aWFsUHJvcHMiLCJEb2N1bWVudFByb3BzIiwiX2dldFBhZ2VGaWxlcyIsIl91dGlsczIiLCJfaHRtbGVzY2FwZSIsIl9zY3JpcHQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJvYmoiLCJfX2VzTW9kdWxlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJkZXNjIiwiZ2V0RG9jdW1lbnRGaWxlcyIsImJ1aWxkTWFuaWZlc3QiLCJwYXRobmFtZSIsImluQW1wTW9kZSIsInNoYXJlZEZpbGVzIiwiZ2V0UGFnZUZpbGVzIiwicGFnZUZpbGVzIiwiYWxsRmlsZXMiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJjb250ZXh0IiwiYXNzZXRQcmVmaXgiLCJkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyIsImRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nIiwicG9seWZpbGxGaWxlcyIsInBvbHlmaWxsIiwiZW5kc1dpdGgiLCJkZWZlciIsIm5vbmNlIiwiY3Jvc3NPcmlnaW4iLCJwcm9jZXNzIiwiZ2V0UHJlTmV4dFNjcmlwdHMiLCJzY3JpcHRMb2FkZXIiLCJmaWxlIiwic2NyaXB0UHJvcHMiLCJhc3NpZ24iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwiZ2V0RHluYW1pY0NodW5rcyIsImZpbGVzIiwiZHluYW1pY0ltcG9ydHMiLCJpc0RldmVsb3BtZW50IiwiYXN5bmMiLCJlbmNvZGVVUkkiLCJnZXRTY3JpcHRzIiwiX2J1aWxkTWFuaWZlc3QkbG93UHJpIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImxvd1ByaW9yaXR5RmlsZXMiLCJEb2N1bWVudCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImVuaGFuY2VBcHAiLCJBcHAiLCJodG1sIiwicmVuZGVyUGFnZSIsInN0eWxlcyIsInJlbmRlckRvY3VtZW50IiwiRG9jdW1lbnRDb21wb25lbnQiLCJQcm92aWRlciIsInJlbmRlciIsIkhlYWQiLCJOZXh0U2NyaXB0IiwiZG9jQ29tcG9uZW50c1JlbmRlcmVkIiwibG9jYWxlIiwibGFuZyIsImFtcCIsImNvbnN0cnVjdG9yIiwiYXJncyIsImdldENzc0xpbmtzIiwiY3NzRmlsZXMiLCJmIiwidW5tYW5nZWRGaWxlcyIsImR5bmFtaWNDc3NGaWxlcyIsImZyb20iLCJleGlzdGluZyIsImNzc0xpbmtFbGVtZW50cyIsImlzU2hhcmVkRmlsZSIsInJlbCIsImFzIiwiaXNVbm1hbmFnZWRGaWxlIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJCb29sZWFuIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMiLCJmaWx0ZXJlZENoaWxkcmVuIiwiQ2hpbGRyZW4iLCJjaGlsZCIsIl9fTkVYVF9EQVRBX18iLCJtYWtlU3R5bGVzaGVldEluZXJ0Iiwibm9kZSIsImMiLCJPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMiLCJzb21lIiwidXJsIiwic3RhcnRzV2l0aCIsIm5ld1Byb3BzIiwiY2xvbmVFbGVtZW50IiwiX3RoaXMkcHJvcHMkbm9uY2UiLCJfdGhpcyRwcm9wcyRub25jZTIiLCJhbXBQYXRoIiwiaHlicmlkQW1wIiwiY2Fub25pY2FsQmFzZSIsImRhbmdlcm91c0FzUGF0aCIsImhlYWRUYWdzIiwidW5zdGFibGVfcnVudGltZUpTIiwidW5zdGFibGVfSnNQcmVsb2FkIiwiZGlzYWJsZVJ1bnRpbWVKUyIsImRpc2FibGVKc1ByZWxvYWQiLCJjc3NQcmVsb2FkcyIsIm90aGVySGVhZEVsZW1lbnRzIiwidG9BcnJheSIsIl9jaGlsZCRwcm9wcyIsImlzUmVhY3RIZWxtZXQiLCJfY2hpbGQkcHJvcHMyIiwid2FybiIsIm5hbWUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsImluZGV4T2YiLCJrZXlzIiwicHJvcCIsInBhZ2UiLCJjdXJTdHlsZXMiLCJoYXNTdHlsZXMiLCJfZWwkcHJvcHMiLCJfZWwkcHJvcHMkZGFuZ2Vyb3VzbHkiLCJGcmFnbWVudCIsImNvdW50IiwiY2xlYW5BbXBQYXRoIiwic3R5bGUiLCJyZXBsYWNlIiwiZ2V0QW1wUGF0aCIsImNvbnRleHRUeXBlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJnZXRJbmxpbmVTY3JpcHRTb3VyY2UiLCJkb2N1bWVudFByb3BzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJodG1sRXNjYXBlSnNvblN0cmluZyIsImVyciIsIm1lc3NhZ2UiLCJFcnJvciIsImFtcERldkZpbGVzIiwiZGV2RmlsZXMiLCJzYWZhcmlOb21vZHVsZUZpeCIsImFzUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFhOztBQUFBQSxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsZUFBQSxHQUFnQkMsZUFBaEI7QUFBZ0NELHlCQUFBLEdBQTBCLEtBQUssQ0FBL0I7QUFBaUMsTUFBTUUsaUJBQWlCLEdBQUM7QUFBQ0MsZUFBYSxFQUFDLGdCQUFmO0FBQWdDQyxXQUFTLEVBQUMsT0FBMUM7QUFBa0RDLFNBQU8sRUFBQyxLQUExRDtBQUFnRUMsV0FBUyxFQUFDLFlBQTFFO0FBQXVGQyxVQUFRLEVBQUM7QUFBaEcsQ0FBeEI7QUFBb0lQLHlCQUFBLEdBQTBCRSxpQkFBMUI7O0FBQTRDLFNBQVNNLGlCQUFULENBQTJCO0FBQUNDLE1BQUQ7QUFBTUM7QUFBTixDQUEzQixFQUF3QztBQUFDLFFBQU1DLEVBQUUsR0FBQ0MsUUFBUSxDQUFDQyxhQUFULENBQXVCSixJQUF2QixDQUFUOztBQUFzQyxPQUFJLE1BQU1LLENBQVYsSUFBZUosS0FBZixFQUFxQjtBQUFDLFFBQUcsQ0FBQ0EsS0FBSyxDQUFDSyxjQUFOLENBQXFCRCxDQUFyQixDQUFKLEVBQTRCO0FBQVMsUUFBR0EsQ0FBQyxLQUFHLFVBQUosSUFBZ0JBLENBQUMsS0FBRyx5QkFBdkIsRUFBaUQsU0FBdkYsQ0FBZ0c7O0FBQzFkLFFBQUdKLEtBQUssQ0FBQ0ksQ0FBRCxDQUFMLEtBQVdFLFNBQWQsRUFBd0I7QUFBUyxVQUFNQyxJQUFJLEdBQUNm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QUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixDQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QyxnQkFBZ0IsbUJBQU8sQ0FBQyw2R0FBVTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsbUpBQTJCO0FBQ3RELENBQUMsTUFBTSxFQUlOOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1osY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDcExhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsMkxBQXlEO0FBQzNEOzs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2hCQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9aW5pdEhlYWRNYW5hZ2VyO2V4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXM9dm9pZCAwO2NvbnN0IERPTUF0dHJpYnV0ZU5hbWVzPXthY2NlcHRDaGFyc2V0OidhY2NlcHQtY2hhcnNldCcsY2xhc3NOYW1lOidjbGFzcycsaHRtbEZvcjonZm9yJyxodHRwRXF1aXY6J2h0dHAtZXF1aXYnLG5vTW9kdWxlOidub01vZHVsZSd9O2V4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXM9RE9NQXR0cmlidXRlTmFtZXM7ZnVuY3Rpb24gcmVhY3RFbGVtZW50VG9ET00oe3R5cGUscHJvcHN9KXtjb25zdCBlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO2Zvcihjb25zdCBwIGluIHByb3BzKXtpZighcHJvcHMuaGFzT3duUHJvcGVydHkocCkpY29udGludWU7aWYocD09PSdjaGlsZHJlbid8fHA9PT0nZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKWNvbnRpbnVlOy8vIHdlIGRvbid0IHJlbmRlciB1bmRlZmluZWQgcHJvcHMgdG8gdGhlIERPTVxuaWYocHJvcHNbcF09PT11bmRlZmluZWQpY29udGludWU7Y29uc3QgYXR0cj1ET01BdHRyaWJ1dGVOYW1lc1twXXx8cC50b0xvd2VyQ2FzZSgpO2lmKHR5cGU9PT0nc2NyaXB0JyYmKGF0dHI9PT0nYXN5bmMnfHxhdHRyPT09J2RlZmVyJ3x8YXR0cj09PSdub01vZHVsZScpKXs7ZWxbYXR0cl09ISFwcm9wc1twXTt9ZWxzZXtlbC5zZXRBdHRyaWJ1dGUoYXR0cixwcm9wc1twXSk7fX1jb25zdHtjaGlsZHJlbixkYW5nZXJvdXNseVNldElubmVySFRNTH09cHJvcHM7aWYoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2VsLmlubmVySFRNTD1kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx8fCcnO31lbHNlIGlmKGNoaWxkcmVuKXtlbC50ZXh0Q29udGVudD10eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJz9jaGlsZHJlbjpBcnJheS5pc0FycmF5KGNoaWxkcmVuKT9jaGlsZHJlbi5qb2luKCcnKTonJzt9cmV0dXJuIGVsO31mdW5jdGlvbiB1cGRhdGVFbGVtZW50cyh0eXBlLGNvbXBvbmVudHMpe2NvbnN0IGhlYWRFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO2NvbnN0IGhlYWRDb3VudEVsPWhlYWRFbC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9bmV4dC1oZWFkLWNvdW50XScpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighaGVhZENvdW50RWwpe2NvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6IG5leHQtaGVhZC1jb3VudCBpcyBtaXNzaW5nLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWhlYWQtY291bnQtbWlzc2luZycpO3JldHVybjt9fWNvbnN0IGhlYWRDb3VudD1OdW1iZXIoaGVhZENvdW50RWwuY29udGVudCk7Y29uc3Qgb2xkVGFncz1bXTtmb3IobGV0IGk9MCxqPWhlYWRDb3VudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7aTxoZWFkQ291bnQ7aSsrLGo9ai5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKXtpZihqLnRhZ05hbWUudG9Mb3dlckNhc2UoKT09PXR5cGUpe29sZFRhZ3MucHVzaChqKTt9fWNvbnN0IG5ld1RhZ3M9Y29tcG9uZW50cy5tYXAocmVhY3RFbGVtZW50VG9ET00pLmZpbHRlcihuZXdUYWc9Pntmb3IobGV0IGs9MCxsZW49b2xkVGFncy5sZW5ndGg7azxsZW47aysrKXtjb25zdCBvbGRUYWc9b2xkVGFnc1trXTtpZihvbGRUYWcuaXNFcXVhbE5vZGUobmV3VGFnKSl7b2xkVGFncy5zcGxpY2UoaywxKTtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9KTtvbGRUYWdzLmZvckVhY2godD0+dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpKTtuZXdUYWdzLmZvckVhY2godD0+aGVhZEVsLmluc2VydEJlZm9yZSh0LGhlYWRDb3VudEVsKSk7aGVhZENvdW50RWwuY29udGVudD0oaGVhZENvdW50LW9sZFRhZ3MubGVuZ3RoK25ld1RhZ3MubGVuZ3RoKS50b1N0cmluZygpO31mdW5jdGlvbiBpbml0SGVhZE1hbmFnZXIoKXtsZXQgdXBkYXRlUHJvbWlzZT1udWxsO3JldHVybnttb3VudGVkSW5zdGFuY2VzOm5ldyBTZXQoKSx1cGRhdGVIZWFkOmhlYWQ9Pntjb25zdCBwcm9taXNlPXVwZGF0ZVByb21pc2U9UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+e2lmKHByb21pc2UhPT11cGRhdGVQcm9taXNlKXJldHVybjt1cGRhdGVQcm9taXNlPW51bGw7Y29uc3QgdGFncz17fTtoZWFkLmZvckVhY2goaD0+e2lmKC8vIElmIHRoZSBmb250IHRhZyBpcyBsb2FkZWQgb25seSBvbiBjbGllbnQgbmF2aWdhdGlvblxuLy8gaXQgd29uJ3QgYmUgaW5saW5lZC4gSW4gdGhpcyBjYXNlIHJldmVydCB0byB0aGUgb3JpZ2luYWwgYmVoYXZpb3JcbmgudHlwZT09PSdsaW5rJyYmaC5wcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSYmIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHN0eWxlW2RhdGEtaHJlZj1cIiR7aC5wcm9wc1snZGF0YS1ocmVmJ119XCJdYCkpe2gucHJvcHMuaHJlZj1oLnByb3BzWydkYXRhLWhyZWYnXTtoLnByb3BzWydkYXRhLWhyZWYnXT11bmRlZmluZWQ7fWNvbnN0IGNvbXBvbmVudHM9dGFnc1toLnR5cGVdfHxbXTtjb21wb25lbnRzLnB1c2goaCk7dGFnc1toLnR5cGVdPWNvbXBvbmVudHM7fSk7Y29uc3QgdGl0bGVDb21wb25lbnQ9dGFncy50aXRsZT90YWdzLnRpdGxlWzBdOm51bGw7bGV0IHRpdGxlPScnO2lmKHRpdGxlQ29tcG9uZW50KXtjb25zdHtjaGlsZHJlbn09dGl0bGVDb21wb25lbnQucHJvcHM7dGl0bGU9dHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZyc/Y2hpbGRyZW46QXJyYXkuaXNBcnJheShjaGlsZHJlbik/Y2hpbGRyZW4uam9pbignJyk6Jyc7fWlmKHRpdGxlIT09ZG9jdW1lbnQudGl0bGUpZG9jdW1lbnQudGl0bGU9dGl0bGU7WydtZXRhJywnYmFzZScsJ2xpbmsnLCdzdHlsZScsJ3NjcmlwdCddLmZvckVhY2godHlwZT0+e3VwZGF0ZUVsZW1lbnRzKHR5cGUsdGFnc1t0eXBlXXx8W10pO30pO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQtbWFuYWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmluaXRTY3JpcHRMb2FkZXI9aW5pdFNjcmlwdExvYWRlcjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9oZWFkTWFuYWdlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTt2YXIgX2hlYWRNYW5hZ2VyPXJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlclwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IFNjcmlwdENhY2hlPW5ldyBNYXAoKTtjb25zdCBMb2FkQ2FjaGU9bmV3IFNldCgpO2NvbnN0IGlnbm9yZVByb3BzPVsnb25Mb2FkJywnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLCdjaGlsZHJlbicsJ29uRXJyb3InLCdzdHJhdGVneSddO2NvbnN0IGxvYWRTY3JpcHQ9cHJvcHM9Pntjb25zdHtzcmMsaWQsb25Mb2FkPSgpPT57fSxkYW5nZXJvdXNseVNldElubmVySFRNTCxjaGlsZHJlbj0nJyxvbkVycm9yfT1wcm9wcztjb25zdCBjYWNoZUtleT1pZHx8c3JjO2lmKFNjcmlwdENhY2hlLmhhcyhzcmMpKXtpZighTG9hZENhY2hlLmhhcyhjYWNoZUtleSkpe0xvYWRDYWNoZS5hZGQoY2FjaGVLZXkpOy8vIEV4ZWN1dGUgb25Mb2FkIHNpbmNlIHRoZSBzY3JpcHQgbG9hZGluZyBoYXMgYmVndW5cblNjcmlwdENhY2hlLmdldChzcmMpLnRoZW4ob25Mb2FkLG9uRXJyb3IpO31yZXR1cm47fWNvbnN0IGVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO2NvbnN0IGxvYWRQcm9taXNlPW5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyxmdW5jdGlvbigpe3Jlc29sdmUoKTtpZihvbkxvYWQpe29uTG9hZC5jYWxsKHRoaXMpO319KTtlbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsZnVuY3Rpb24oKXtyZWplY3QoKTtpZihvbkVycm9yKXtvbkVycm9yKCk7fX0pO30pO2lmKHNyYyl7U2NyaXB0Q2FjaGUuc2V0KHNyYyxsb2FkUHJvbWlzZSk7TG9hZENhY2hlLmFkZChjYWNoZUtleSk7fWlmKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtlbC5pbm5lckhUTUw9ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfHwnJzt9ZWxzZSBpZihjaGlsZHJlbil7ZWwudGV4dENvbnRlbnQ9dHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZyc/Y2hpbGRyZW46QXJyYXkuaXNBcnJheShjaGlsZHJlbik/Y2hpbGRyZW4uam9pbignJyk6Jyc7fWVsc2UgaWYoc3JjKXtlbC5zcmM9c3JjO31mb3IoY29uc3Rbayx2YWx1ZV1vZiBPYmplY3QuZW50cmllcyhwcm9wcykpe2lmKHZhbHVlPT09dW5kZWZpbmVkfHxpZ25vcmVQcm9wcy5pbmNsdWRlcyhrKSl7Y29udGludWU7fWNvbnN0IGF0dHI9X2hlYWRNYW5hZ2VyLkRPTUF0dHJpYnV0ZU5hbWVzW2tdfHxrLnRvTG93ZXJDYXNlKCk7ZWwuc2V0QXR0cmlidXRlKGF0dHIsdmFsdWUpO31kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTt9O2Z1bmN0aW9uIGhhbmRsZUNsaWVudFNjcmlwdExvYWQocHJvcHMpe2NvbnN0e3N0cmF0ZWd5PSdhZnRlckludGVyYWN0aXZlJ309cHJvcHM7aWYoc3RyYXRlZ3k9PT0nYWZ0ZXJJbnRlcmFjdGl2ZScpe2xvYWRTY3JpcHQocHJvcHMpO31lbHNlIGlmKHN0cmF0ZWd5PT09J2xhenlPbmxvYWQnKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO30pO319ZnVuY3Rpb24gbG9hZExhenlTY3JpcHQocHJvcHMpe2lmKGRvY3VtZW50LnJlYWR5U3RhdGU9PT0nY29tcGxldGUnKXsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO31lbHNle3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5sb2FkU2NyaXB0KHByb3BzKSk7fSk7fX1mdW5jdGlvbiBpbml0U2NyaXB0TG9hZGVyKHNjcmlwdExvYWRlckl0ZW1zKXtzY3JpcHRMb2FkZXJJdGVtcy5mb3JFYWNoKGhhbmRsZUNsaWVudFNjcmlwdExvYWQpO31mdW5jdGlvbiBTY3JpcHQocHJvcHMpe2NvbnN0e3NyYz0nJyxvbkxvYWQ9KCk9Pnt9LHN0cmF0ZWd5PSdhZnRlckludGVyYWN0aXZlJyxvbkVycm9yfT1wcm9wcyxyZXN0UHJvcHM9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKHByb3BzLFtcInNyY1wiLFwib25Mb2FkXCIsXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiLFwic3RyYXRlZ3lcIixcIm9uRXJyb3JcIl0pOy8vIENvbnRleHQgaXMgYXZhaWxhYmxlIG9ubHkgZHVyaW5nIFNTUlxuY29uc3R7dXBkYXRlU2NyaXB0cyxzY3JpcHRzfT0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2hlYWRNYW5hZ2VyQ29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoc3RyYXRlZ3k9PT0nYWZ0ZXJJbnRlcmFjdGl2ZScpe2xvYWRTY3JpcHQocHJvcHMpO31lbHNlIGlmKHN0cmF0ZWd5PT09J2xhenlPbmxvYWQnKXtsb2FkTGF6eVNjcmlwdChwcm9wcyk7fX0sW3Byb3BzLHN0cmF0ZWd5XSk7aWYoc3RyYXRlZ3k9PT0nYmVmb3JlSW50ZXJhY3RpdmUnKXtpZih1cGRhdGVTY3JpcHRzKXtzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlPShzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlfHxbXSkuY29uY2F0KFsoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3NyYyxvbkxvYWQsb25FcnJvcn0scmVzdFByb3BzKV0pO3VwZGF0ZVNjcmlwdHMoc2NyaXB0cyk7fX1yZXR1cm4gbnVsbDt9dmFyIF9kZWZhdWx0PVNjcmlwdDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JpcHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5IdG1sPUh0bWw7ZXhwb3J0cy5NYWluPU1haW47ZXhwb3J0cy5OZXh0U2NyaXB0PWV4cG9ydHMuSGVhZD1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcHJvcFR5cGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3NlcnZlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKSk7dmFyIF9jb25zdGFudHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHNcIik7dmFyIF9kb2N1bWVudENvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0XCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkRvY3VtZW50Q29udGV4dD1fdXRpbHMuRG9jdW1lbnRDb250ZXh0O2V4cG9ydHMuRG9jdW1lbnRJbml0aWFsUHJvcHM9X3V0aWxzLkRvY3VtZW50SW5pdGlhbFByb3BzO2V4cG9ydHMuRG9jdW1lbnRQcm9wcz1fdXRpbHMuRG9jdW1lbnRQcm9wczt2YXIgX2dldFBhZ2VGaWxlcz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzXCIpO3ZhciBfdXRpbHMyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHNcIik7dmFyIF9odG1sZXNjYXBlPXJlcXVpcmUoXCIuLi9zZXJ2ZXIvaHRtbGVzY2FwZVwiKTt2YXIgX3NjcmlwdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGllbnQvc2NyaXB0XCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhidWlsZE1hbmlmZXN0LHBhdGhuYW1lLGluQW1wTW9kZSl7Y29uc3Qgc2hhcmVkRmlsZXM9KDAsX2dldFBhZ2VGaWxlcy5nZXRQYWdlRmlsZXMpKGJ1aWxkTWFuaWZlc3QsJy9fYXBwJyk7Y29uc3QgcGFnZUZpbGVzPWluQW1wTW9kZT9bXTooMCxfZ2V0UGFnZUZpbGVzLmdldFBhZ2VGaWxlcykoYnVpbGRNYW5pZmVzdCxwYXRobmFtZSk7cmV0dXJue3NoYXJlZEZpbGVzLHBhZ2VGaWxlcyxhbGxGaWxlczpbLi4ubmV3IFNldChbLi4uc2hhcmVkRmlsZXMsLi4ucGFnZUZpbGVzXSldfTt9ZnVuY3Rpb24gZ2V0UG9seWZpbGxTY3JpcHRzKGNvbnRleHQscHJvcHMpey8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG5jb25zdHthc3NldFByZWZpeCxidWlsZE1hbmlmZXN0LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfT1jb250ZXh0O3JldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMuZmlsdGVyKHBvbHlmaWxsPT5wb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykmJiFwb2x5ZmlsbC5lbmRzV2l0aCgnLm1vZHVsZS5qcycpKS5tYXAocG9seWZpbGw9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpwb2x5ZmlsbCxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sbm9Nb2R1bGU6dHJ1ZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfSkpO31mdW5jdGlvbiBnZXRQcmVOZXh0U2NyaXB0cyhjb250ZXh0LHByb3BzKXtjb25zdHtzY3JpcHRMb2FkZXIsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PWNvbnRleHQ7cmV0dXJuKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZXx8W10pLm1hcChmaWxlPT57Y29uc3R7c3RyYXRlZ3ksLi4uc2NyaXB0UHJvcHN9PWZpbGU7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHt9LHNjcmlwdFByb3BzLHtkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk7fSk7fWZ1bmN0aW9uIGdldER5bmFtaWNDaHVua3MoY29udGV4dCxwcm9wcyxmaWxlcyl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXgsaXNEZXZlbG9wbWVudCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309Y29udGV4dDtyZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKGZpbGU9PntpZighZmlsZS5lbmRzV2l0aCgnLmpzJyl8fGZpbGVzLmFsbEZpbGVzLmluY2x1ZGVzKGZpbGUpKXJldHVybiBudWxsO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOiFpc0RldmVsb3BtZW50JiZkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsa2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KTt9KTt9ZnVuY3Rpb24gZ2V0U2NyaXB0cyhjb250ZXh0LHByb3BzLGZpbGVzKXt2YXIgX2J1aWxkTWFuaWZlc3QkbG93UHJpO2NvbnN0e2Fzc2V0UHJlZml4LGJ1aWxkTWFuaWZlc3QsaXNEZXZlbG9wbWVudCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309Y29udGV4dDtjb25zdCBub3JtYWxTY3JpcHRzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7Y29uc3QgbG93UHJpb3JpdHlTY3JpcHRzPShfYnVpbGRNYW5pZmVzdCRsb3dQcmk9YnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzKT09bnVsbD92b2lkIDA6X2J1aWxkTWFuaWZlc3QkbG93UHJpLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7cmV0dXJuWy4uLm5vcm1hbFNjcmlwdHMsLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoZmlsZT0+e3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLG5vbmNlOnByb3BzLm5vbmNlLGFzeW5jOiFpc0RldmVsb3BtZW50JiZkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KTt9KTt9LyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50ey8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL3N0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KXtjb25zdCBlbmhhbmNlQXBwPUFwcD0+e3JldHVybiBwcm9wcz0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwLHByb3BzKTt9O2NvbnN0e2h0bWwsaGVhZH09YXdhaXQgY3R4LnJlbmRlclBhZ2Uoe2VuaGFuY2VBcHB9KTtjb25zdCBzdHlsZXM9Wy4uLigwLF9zZXJ2ZXIuZGVmYXVsdCkoKV07cmV0dXJue2h0bWwsaGVhZCxzdHlsZXN9O31zdGF0aWMgcmVuZGVyRG9jdW1lbnQoRG9jdW1lbnRDb21wb25lbnQscHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0LlByb3ZpZGVyLHt2YWx1ZTpwcm9wc30sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRG9jdW1lbnRDb21wb25lbnQscHJvcHMpKTt9cmVuZGVyKCl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSHRtbCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEhlYWQsbnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNYWluLG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5leHRTY3JpcHQsbnVsbCkpKTt9fWV4cG9ydHMuZGVmYXVsdD1Eb2N1bWVudDtmdW5jdGlvbiBIdG1sKHByb3BzKXtjb25zdHtpbkFtcE1vZGUsZG9jQ29tcG9uZW50c1JlbmRlcmVkLGxvY2FsZX09KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0KTtkb2NDb21wb25lbnRzUmVuZGVyZWQuSHRtbD10cnVlO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLE9iamVjdC5hc3NpZ24oe30scHJvcHMse2xhbmc6cHJvcHMubGFuZ3x8bG9jYWxlfHx1bmRlZmluZWQsYW1wOmluQW1wTW9kZT8nJzp1bmRlZmluZWQsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGUmJnByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nPycnOnVuZGVmaW5lZH0pKTt9Y2xhc3MgSGVhZCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9Z2V0Q3NzTGlua3MoZmlsZXMpe2NvbnN0e2Fzc2V0UHJlZml4LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLGR5bmFtaWNJbXBvcnRzfT10aGlzLmNvbnRleHQ7Y29uc3QgY3NzRmlsZXM9ZmlsZXMuYWxsRmlsZXMuZmlsdGVyKGY9PmYuZW5kc1dpdGgoJy5jc3MnKSk7Y29uc3Qgc2hhcmVkRmlsZXM9bmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcyk7Ly8gVW5tYW5hZ2VkIGZpbGVzIGFyZSBDU1MgZmlsZXMgdGhhdCB3aWxsIGJlIGhhbmRsZWQgZGlyZWN0bHkgYnkgdGhlXG4vLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxubGV0IHVubWFuZ2VkRmlsZXM9bmV3IFNldChbXSk7bGV0IGR5bmFtaWNDc3NGaWxlcz1BcnJheS5mcm9tKG5ldyBTZXQoZHluYW1pY0ltcG9ydHMuZmlsdGVyKGZpbGU9PmZpbGUuZW5kc1dpdGgoJy5jc3MnKSkpKTtpZihkeW5hbWljQ3NzRmlsZXMubGVuZ3RoKXtjb25zdCBleGlzdGluZz1uZXcgU2V0KGNzc0ZpbGVzKTtkeW5hbWljQ3NzRmlsZXM9ZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihmPT4hKGV4aXN0aW5nLmhhcyhmKXx8c2hhcmVkRmlsZXMuaGFzKGYpKSk7dW5tYW5nZWRGaWxlcz1uZXcgU2V0KGR5bmFtaWNDc3NGaWxlcyk7Y3NzRmlsZXMucHVzaCguLi5keW5hbWljQ3NzRmlsZXMpO31sZXQgY3NzTGlua0VsZW1lbnRzPVtdO2Nzc0ZpbGVzLmZvckVhY2goZmlsZT0+e2NvbnN0IGlzU2hhcmVkRmlsZT1zaGFyZWRGaWxlcy5oYXMoZmlsZSk7aWYoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1Mpe2Nzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6YCR7ZmlsZX0tcHJlbG9hZGAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGFzOlwic3R5bGVcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpO31jb25zdCBpc1VubWFuYWdlZEZpbGU9dW5tYW5nZWRGaWxlcy5oYXMoZmlsZSk7Y3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpmaWxlLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwic3R5bGVzaGVldFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFwiZGF0YS1uLWdcIjppc1VubWFuYWdlZEZpbGU/dW5kZWZpbmVkOmlzU2hhcmVkRmlsZT8nJzp1bmRlZmluZWQsXCJkYXRhLW4tcFwiOmlzVW5tYW5hZ2VkRmlsZT91bmRlZmluZWQ6aXNTaGFyZWRGaWxlP3VuZGVmaW5lZDonJ30pKTt9KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcmJnByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyl7Y3NzTGlua0VsZW1lbnRzPXRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjc3NMaW5rRWxlbWVudHMpO31yZXR1cm4gY3NzTGlua0VsZW1lbnRzLmxlbmd0aD09PTA/bnVsbDpjc3NMaW5rRWxlbWVudHM7fWdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXgsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKGZpbGU9PntpZighZmlsZS5lbmRzV2l0aCgnLmpzJykpe3JldHVybiBudWxsO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGtleTpmaWxlLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pO30pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuLmZpbHRlcihCb29sZWFuKTt9Z2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyl7Y29uc3R7YXNzZXRQcmVmaXgsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsc2NyaXB0TG9hZGVyfT10aGlzLmNvbnRleHQ7Y29uc3QgcHJlbG9hZEZpbGVzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmaWxlPT57cmV0dXJuIGZpbGUuZW5kc1dpdGgoJy5qcycpO30pO3JldHVyblsuLi4oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlfHxbXSkubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZS5zcmMsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpmaWxlLnNyYyxhczpcInNjcmlwdFwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSksLi4ucHJlbG9hZEZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGFzOlwic2NyaXB0XCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pKV07fWdldER5bmFtaWNDaHVua3MoZmlsZXMpe3JldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzLGZpbGVzKTt9Z2V0UHJlTmV4dFNjcmlwdHMoKXtyZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMpO31nZXRTY3JpcHRzKGZpbGVzKXtyZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyxmaWxlcyk7fWdldFBvbHlmaWxsU2NyaXB0cygpe3JldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMpO31oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKXtjb25zdHtzY3JpcHRMb2FkZXJ9PXRoaXMuY29udGV4dDtjb25zdCBzY3JpcHRMb2FkZXJJdGVtcz1bXTtjb25zdCBmaWx0ZXJlZENoaWxkcmVuPVtdO19yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sY2hpbGQ9PntpZihjaGlsZC50eXBlPT09X3NjcmlwdC5kZWZhdWx0KXtpZihjaGlsZC5wcm9wcy5zdHJhdGVneT09PSdiZWZvcmVJbnRlcmFjdGl2ZScpe3NjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZT0oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlfHxbXSkuY29uY2F0KFt7Li4uY2hpbGQucHJvcHN9XSk7cmV0dXJuO31lbHNlIGlmKFsnbGF6eU9ubG9hZCcsJ2FmdGVySW50ZXJhY3RpdmUnXS5pbmNsdWRlcyhjaGlsZC5wcm9wcy5zdHJhdGVneSkpe3NjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpO3JldHVybjt9fWZpbHRlcmVkQ2hpbGRyZW4ucHVzaChjaGlsZCk7fSk7dGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18uc2NyaXB0TG9hZGVyPXNjcmlwdExvYWRlckl0ZW1zO3JldHVybiBmaWx0ZXJlZENoaWxkcmVuO31tYWtlU3R5bGVzaGVldEluZXJ0KG5vZGUpe3JldHVybiBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAobm9kZSxjPT57aWYoYy50eXBlPT09J2xpbmsnJiZjLnByb3BzWydocmVmJ10mJl9jb25zdGFudHMuT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHt1cmx9KT0+Yy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSkpe2NvbnN0IG5ld1Byb3BzPXsuLi4oYy5wcm9wc3x8e30pfTtuZXdQcm9wc1snZGF0YS1ocmVmJ109bmV3UHJvcHNbJ2hyZWYnXTtuZXdQcm9wc1snaHJlZiddPXVuZGVmaW5lZDtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsbmV3UHJvcHMpO31lbHNlIGlmKGMucHJvcHMmJmMucHJvcHNbJ2NoaWxkcmVuJ10pe2MucHJvcHNbJ2NoaWxkcmVuJ109dGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pO31yZXR1cm4gYzt9KTt9cmVuZGVyKCl7dmFyIF90aGlzJHByb3BzJG5vbmNlLF90aGlzJHByb3BzJG5vbmNlMjtjb25zdHtzdHlsZXMsYW1wUGF0aCxpbkFtcE1vZGUsaHlicmlkQW1wLGNhbm9uaWNhbEJhc2UsX19ORVhUX0RBVEFfXyxkYW5nZXJvdXNBc1BhdGgsaGVhZFRhZ3MsdW5zdGFibGVfcnVudGltZUpTLHVuc3RhYmxlX0pzUHJlbG9hZCxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309dGhpcy5jb250ZXh0O2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7Y29uc3QgZGlzYWJsZUpzUHJlbG9hZD11bnN0YWJsZV9Kc1ByZWxvYWQ9PT1mYWxzZXx8IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nO3RoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZD10cnVlO2xldHtoZWFkfT10aGlzLmNvbnRleHQ7bGV0IGNzc1ByZWxvYWRzPVtdO2xldCBvdGhlckhlYWRFbGVtZW50cz1bXTtpZihoZWFkKXtoZWFkLmZvckVhY2goYz0+e2lmKGMmJmMudHlwZT09PSdsaW5rJyYmYy5wcm9wc1sncmVsJ109PT0ncHJlbG9hZCcmJmMucHJvcHNbJ2FzJ109PT0nc3R5bGUnKXtjc3NQcmVsb2Fkcy5wdXNoKGMpO31lbHNle2MmJm90aGVySGVhZEVsZW1lbnRzLnB1c2goYyk7fX0pO2hlYWQ9Y3NzUHJlbG9hZHMuY29uY2F0KG90aGVySGVhZEVsZW1lbnRzKTt9bGV0IGNoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikuZmlsdGVyKEJvb2xlYW4pOy8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjaGlsZHJlbj1fcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sY2hpbGQ9Pnt2YXIgX2NoaWxkJHByb3BzO2NvbnN0IGlzUmVhY3RIZWxtZXQ9Y2hpbGQ9PW51bGw/dm9pZCAwOihfY2hpbGQkcHJvcHM9Y2hpbGQucHJvcHMpPT1udWxsP3ZvaWQgMDpfY2hpbGQkcHJvcHNbJ2RhdGEtcmVhY3QtaGVsbWV0J107aWYoIWlzUmVhY3RIZWxtZXQpe3ZhciBfY2hpbGQkcHJvcHMyO2lmKChjaGlsZD09bnVsbD92b2lkIDA6Y2hpbGQudHlwZSk9PT0ndGl0bGUnKXtjb25zb2xlLndhcm4oXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXRpdGxlXCIpO31lbHNlIGlmKChjaGlsZD09bnVsbD92b2lkIDA6Y2hpbGQudHlwZSk9PT0nbWV0YScmJihjaGlsZD09bnVsbD92b2lkIDA6KF9jaGlsZCRwcm9wczI9Y2hpbGQucHJvcHMpPT1udWxsP3ZvaWQgMDpfY2hpbGQkcHJvcHMyLm5hbWUpPT09J3ZpZXdwb3J0Jyl7Y29uc29sZS53YXJuKFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIik7fX1yZXR1cm4gY2hpbGQ7fSk7aWYodGhpcy5wcm9wcy5jcm9zc09yaWdpbiljb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcmJnByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyYmIWluQW1wTW9kZSl7Y2hpbGRyZW49dGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKTt9Y2hpbGRyZW49dGhpcy5oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKTtsZXQgaGFzQW1waHRtbFJlbD1mYWxzZTtsZXQgaGFzQ2Fub25pY2FsUmVsPWZhbHNlOy8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbmhlYWQ9X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWR8fFtdLGNoaWxkPT57aWYoIWNoaWxkKXJldHVybiBjaGlsZDtjb25zdHt0eXBlLHByb3BzfT1jaGlsZDtpZihpbkFtcE1vZGUpe2xldCBiYWRQcm9wPScnO2lmKHR5cGU9PT0nbWV0YScmJnByb3BzLm5hbWU9PT0ndmlld3BvcnQnKXtiYWRQcm9wPSduYW1lPVwidmlld3BvcnRcIic7fWVsc2UgaWYodHlwZT09PSdsaW5rJyYmcHJvcHMucmVsPT09J2Nhbm9uaWNhbCcpe2hhc0Nhbm9uaWNhbFJlbD10cnVlO31lbHNlIGlmKHR5cGU9PT0nc2NyaXB0Jyl7Ly8gb25seSBibG9jayBpZlxuLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4vLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuaWYocHJvcHMuc3JjJiZwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpPC0xfHxwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCYmKCFwcm9wcy50eXBlfHxwcm9wcy50eXBlPT09J3RleHQvamF2YXNjcmlwdCcpKXtiYWRQcm9wPSc8c2NyaXB0JztPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChwcm9wPT57YmFkUHJvcCs9YCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImA7fSk7YmFkUHJvcCs9Jy8+Jzt9fWlmKGJhZFByb3Ape2NvbnNvbGUud2FybihgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NvbmZsaWN0aW5nLWFtcC10YWdgKTtyZXR1cm4gbnVsbDt9fWVsc2V7Ly8gbm9uLWFtcCBtb2RlXG5pZih0eXBlPT09J2xpbmsnJiZwcm9wcy5yZWw9PT0nYW1waHRtbCcpe2hhc0FtcGh0bWxSZWw9dHJ1ZTt9fXJldHVybiBjaGlsZDt9KTsvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbmNvbnN0IGN1clN0eWxlcz1BcnJheS5pc0FycmF5KHN0eWxlcyk/c3R5bGVzOltdO2lmKGluQW1wTW9kZSYmc3R5bGVzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcyYmLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5BcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbikpe2NvbnN0IGhhc1N0eWxlcz1lbD0+e3ZhciBfZWwkcHJvcHMsX2VsJHByb3BzJGRhbmdlcm91c2x5O3JldHVybiBlbD09bnVsbD92b2lkIDA6KF9lbCRwcm9wcz1lbC5wcm9wcyk9PW51bGw/dm9pZCAwOihfZWwkcHJvcHMkZGFuZ2Vyb3VzbHk9X2VsJHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKT09bnVsbD92b2lkIDA6X2VsJHByb3BzJGRhbmdlcm91c2x5Ll9faHRtbDt9Oy8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQ9PntpZihBcnJheS5pc0FycmF5KGNoaWxkKSl7Y2hpbGQuZm9yRWFjaChlbD0+aGFzU3R5bGVzKGVsKSYmY3VyU3R5bGVzLnB1c2goZWwpKTt9ZWxzZSBpZihoYXNTdHlsZXMoY2hpbGQpKXtjdXJTdHlsZXMucHVzaChjaGlsZCk7fX0pO31jb25zdCBmaWxlcz1nZXREb2N1bWVudEZpbGVzKHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsaW5BbXBNb2RlKTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhlYWRcIix0aGlzLnByb3BzLHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50JiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6dHJ1ZSxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZT8ndHJ1ZSc6dW5kZWZpbmVkLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpub25lfWB9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjp0cnVlLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlPyd0cnVlJzp1bmRlZmluZWR9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXtkaXNwbGF5OmJsb2NrfWB9fSkpKSxjaGlsZHJlbixwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwibmV4dC1mb250LXByZWNvbm5lY3RcIn0pLGhlYWQsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWhlYWQtY291bnRcIixjb250ZW50Ol9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGhlYWR8fFtdKS50b1N0cmluZygpfSksaW5BbXBNb2RlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwidmlld3BvcnRcIixjb250ZW50Olwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIn0pLCFoYXNDYW5vbmljYWxSZWwmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJjYW5vbmljYWxcIixocmVmOmNhbm9uaWNhbEJhc2UrKDAsX3V0aWxzMi5jbGVhbkFtcFBhdGgpKGRhbmdlcm91c0FzUGF0aCl9KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGFzOlwic2NyaXB0XCIsaHJlZjpcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJ9KSxzdHlsZXMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtY3VzdG9tXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmN1clN0eWxlcy5tYXAoc3R5bGU9PnN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCkuam9pbignJykucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csJycpLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCcnKX19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YH19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YH19KSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6dHJ1ZSxzcmM6XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wifSkpLCFpbkFtcE1vZGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWhhc0FtcGh0bWxSZWwmJmh5YnJpZEFtcCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcImFtcGh0bWxcIixocmVmOmNhbm9uaWNhbEJhc2UrZ2V0QW1wUGF0aChhbXBQYXRoLGRhbmdlcm91c0FzUGF0aCl9KSwhcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyksIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7XCJkYXRhLW4tY3NzXCI6KF90aGlzJHByb3BzJG5vbmNlPXRoaXMucHJvcHMubm9uY2UpIT1udWxsP190aGlzJHByb3BzJG5vbmNlOicnfSkscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0lNQUdFUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWltYWdlLXByZWxvYWRcIn0pLCFkaXNhYmxlUnVudGltZUpTJiYhZGlzYWJsZUpzUHJlbG9hZCYmdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpLCFkaXNhYmxlUnVudGltZUpTJiYhZGlzYWJsZUpzUHJlbG9hZCYmdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpLCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0U2NyaXB0cyhmaWxlcykscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmdGhpcy5nZXRDc3NMaW5rcyhmaWxlcykscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtcImRhdGEtbi1jc3NcIjooX3RoaXMkcHJvcHMkbm9uY2UyPXRoaXMucHJvcHMubm9uY2UpIT1udWxsP190aGlzJHByb3BzJG5vbmNlMjonJ30pLHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50JiYvKiNfX1BVUkVfXyovIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbi8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7aWQ6XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIn0pLHN0eWxlc3x8bnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQse30sLi4uKGhlYWRUYWdzfHxbXSkpKTt9fWV4cG9ydHMuSGVhZD1IZWFkO0hlYWQuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7SGVhZC5wcm9wVHlwZXM9e25vbmNlOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsY3Jvc3NPcmlnaW46X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ307ZnVuY3Rpb24gTWFpbigpe2NvbnN0e2luQW1wTW9kZSxodG1sLGRvY0NvbXBvbmVudHNSZW5kZXJlZH09KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0KTtkb2NDb21wb25lbnRzUmVuZGVyZWQuTWFpbj10cnVlO2lmKGluQW1wTW9kZSlyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLF9jb25zdGFudHMuQU1QX1JFTkRFUl9UQVJHRVQpO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOlwiX19uZXh0XCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpodG1sfX0pO31jbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXREeW5hbWljQ2h1bmtzKGZpbGVzKXtyZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyxmaWxlcyk7fWdldFByZU5leHRTY3JpcHRzKCl7cmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9Z2V0U2NyaXB0cyhmaWxlcyl7cmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMsZmlsZXMpO31nZXRQb2x5ZmlsbFNjcmlwdHMoKXtyZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9c3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShkb2N1bWVudFByb3BzKXtjb25zdHtfX05FWFRfREFUQV9ffT1kb2N1bWVudFByb3BzO3RyeXtjb25zdCBkYXRhPUpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pO3JldHVybigwLF9odG1sZXNjYXBlLmh0bWxFc2NhcGVKc29uU3RyaW5nKShkYXRhKTt9Y2F0Y2goZXJyKXtpZihlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSl7dGhyb3cgbmV3IEVycm9yKGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jaXJjdWxhci1zdHJ1Y3R1cmVgKTt9dGhyb3cgZXJyO319cmVuZGVyKCl7Y29uc3R7YXNzZXRQcmVmaXgsaW5BbXBNb2RlLGJ1aWxkTWFuaWZlc3QsdW5zdGFibGVfcnVudGltZUpTLGRvY0NvbXBvbmVudHNSZW5kZXJlZCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309dGhpcy5jb250ZXh0O2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7ZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQ9dHJ1ZTtpZihpbkFtcE1vZGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nKXtyZXR1cm4gbnVsbDt9Y29uc3QgYW1wRGV2RmlsZXM9Wy4uLmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMsLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXNdO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsZGlzYWJsZVJ1bnRpbWVKUz9udWxsOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2lkOlwiX19ORVhUX0RBVEFfX1wiLHR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KX0sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSksYW1wRGV2RmlsZXMubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSkpKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9Y29uc3QgZmlsZXM9Z2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCx0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLGluQW1wTW9kZSk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwhZGlzYWJsZVJ1bnRpbWVKUyYmYnVpbGRNYW5pZmVzdC5kZXZGaWxlcz9idWlsZE1hbmlmZXN0LmRldkZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk6bnVsbCxkaXNhYmxlUnVudGltZUpTP251bGw6LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7aWQ6XCJfX05FWFRfREFUQV9fXCIsdHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpfX0pLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSxkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSxkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFNjcmlwdHMoZmlsZXMpKTt9fWV4cG9ydHMuTmV4dFNjcmlwdD1OZXh0U2NyaXB0O05leHRTY3JpcHQuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7TmV4dFNjcmlwdC5wcm9wVHlwZXM9e25vbmNlOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsY3Jvc3NPcmlnaW46X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ307TmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeD0nIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnO2Z1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aCxhc1BhdGgpe3JldHVybiBhbXBQYXRofHxgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKT8nJic6Jz8nfWFtcD0xYDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZG9jdW1lbnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGVzY2FwZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qXG5CYXNlZCBvbiBHbGFtb3IncyBzaGVldFxuaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2Jsb2IvNjY3YjQ4MGQzMWIzNzIxYTkwNTAyMWIyNmUxMjkwY2U5MmNhMjg3OS9zcmMvc2hlZXQuanNcbiovXG52YXIgaXNQcm9kID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbnZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuXG52YXIgU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIG5hbWUgPSBfcmVmJG5hbWUgPT09IHZvaWQgMCA/ICdzdHlsZXNoZWV0JyA6IF9yZWYkbmFtZSxcbiAgICAgICAgX3JlZiRvcHRpbWl6ZUZvclNwZWVkID0gX3JlZi5vcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBvcHRpbWl6ZUZvclNwZWVkID0gX3JlZiRvcHRpbWl6ZUZvclNwZWVkID09PSB2b2lkIDAgPyBpc1Byb2QgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIF9yZWYkaXNCcm93c2VyID0gX3JlZi5pc0Jyb3dzZXIsXG4gICAgICAgIGlzQnJvd3NlciA9IF9yZWYkaXNCcm93c2VyID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA6IF9yZWYkaXNCcm93c2VyO1xuXG4gICAgaW52YXJpYW50KGlzU3RyaW5nKG5hbWUpLCAnYG5hbWVgIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID0gXCIjXCIgKyBuYW1lICsgXCItZGVsZXRlZC1ydWxlX19fX3t9XCI7XG4gICAgaW52YXJpYW50KHR5cGVvZiBvcHRpbWl6ZUZvclNwZWVkID09PSAnYm9vbGVhbicsICdgb3B0aW1pemVGb3JTcGVlZGAgbXVzdCBiZSBhIGJvb2xlYW4nKTtcbiAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gb3B0aW1pemVGb3JTcGVlZDtcbiAgICB0aGlzLl9pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdGFncyA9IFtdO1xuICAgIHRoaXMuX2luamVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcnVsZXNDb3VudCA9IDA7XG4gICAgdmFyIG5vZGUgPSB0aGlzLl9pc0Jyb3dzZXIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cImNzcC1ub25jZVwiXScpO1xuICAgIHRoaXMuX25vbmNlID0gbm9kZSA/IG5vZGUuZ2V0QXR0cmlidXRlKCdjb250ZW50JykgOiBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXRPcHRpbWl6ZUZvclNwZWVkID0gZnVuY3Rpb24gc2V0T3B0aW1pemVGb3JTcGVlZChib29sKSB7XG4gICAgaW52YXJpYW50KHR5cGVvZiBib29sID09PSAnYm9vbGVhbicsICdgc2V0T3B0aW1pemVGb3JTcGVlZGAgYWNjZXB0cyBhIGJvb2xlYW4nKTtcbiAgICBpbnZhcmlhbnQodGhpcy5fcnVsZXNDb3VudCA9PT0gMCwgJ29wdGltaXplRm9yU3BlZWQgY2Fubm90IGJlIHdoZW4gcnVsZXMgaGF2ZSBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQnKTtcbiAgICB0aGlzLmZsdXNoKCk7XG4gICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IGJvb2w7XG4gICAgdGhpcy5pbmplY3QoKTtcbiAgfTtcblxuICBfcHJvdG8uaXNPcHRpbWl6ZUZvclNwZWVkID0gZnVuY3Rpb24gaXNPcHRpbWl6ZUZvclNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkO1xuICB9O1xuXG4gIF9wcm90by5pbmplY3QgPSBmdW5jdGlvbiBpbmplY3QoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGludmFyaWFudCghdGhpcy5faW5qZWN0ZWQsICdzaGVldCBhbHJlYWR5IGluamVjdGVkJyk7XG4gICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX2lzQnJvd3NlciAmJiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICB0aGlzLl90YWdzWzBdID0gdGhpcy5tYWtlU3R5bGVUYWcodGhpcy5fbmFtZSk7XG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gJ2luc2VydFJ1bGUnIGluIHRoaXMuZ2V0U2hlZXQoKTtcblxuICAgICAgaWYgKCF0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICAgIGlmICghaXNQcm9kKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdTdHlsZVNoZWV0OiBvcHRpbWl6ZUZvclNwZWVkIG1vZGUgbm90IHN1cHBvcnRlZCBmYWxsaW5nIGJhY2sgdG8gc3RhbmRhcmQgbW9kZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB7XG4gICAgICBjc3NSdWxlczogW10sXG4gICAgICBpbnNlcnRSdWxlOiBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgX3RoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzW2luZGV4XSA9IHtcbiAgICAgICAgICAgIGNzc1RleHQ6IHJ1bGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGNzc1RleHQ6IHJ1bGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH0sXG4gICAgICBkZWxldGVSdWxlOiBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XG4gICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlc1tpbmRleF0gPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldFNoZWV0Rm9yVGFnID0gZnVuY3Rpb24gZ2V0U2hlZXRGb3JUYWcodGFnKSB7XG4gICAgaWYgKHRhZy5zaGVldCkge1xuICAgICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFNoZWV0ID0gZnVuY3Rpb24gZ2V0U2hlZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2hlZXRGb3JUYWcodGhpcy5fdGFnc1t0aGlzLl90YWdzLmxlbmd0aCAtIDFdKTtcbiAgfTtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSwgaW5kZXgpIHtcbiAgICBpbnZhcmlhbnQoaXNTdHJpbmcocnVsZSksICdgaW5zZXJ0UnVsZWAgYWNjZXB0cyBvbmx5IHN0cmluZ3MnKTtcblxuICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpbmRleCA9IHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKTtcblxuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5kZXggPSBzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICB9IC8vIHRoaXMgd2VpcmRuZXNzIGZvciBwZXJmLCBhbmQgY2hyb21lJ3Mgd2VpcmQgYnVnXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZVNoZWV0OiBpbGxlZ2FsIHJ1bGU6IFxcblxcblwiICsgcnVsZSArIFwiXFxuXFxuU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8yMDAwNzk5MiBmb3IgbW9yZSBpbmZvXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSB0aGlzLl90YWdzW2luZGV4XTtcblxuICAgICAgdGhpcy5fdGFncy5wdXNoKHRoaXMubWFrZVN0eWxlVGFnKHRoaXMuX25hbWUsIHJ1bGUsIGluc2VydGlvblBvaW50KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3J1bGVzQ291bnQrKztcbiAgfTtcblxuICBfcHJvdG8ucmVwbGFjZVJ1bGUgPSBmdW5jdGlvbiByZXBsYWNlUnVsZShpbmRleCwgcnVsZSkge1xuICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkIHx8ICF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuX2lzQnJvd3NlciA/IHRoaXMuZ2V0U2hlZXQoKSA6IHRoaXMuX3NlcnZlclNoZWV0O1xuXG4gICAgICBpZiAoIXJ1bGUudHJpbSgpKSB7XG4gICAgICAgIHJ1bGUgPSB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNoZWV0LmNzc1J1bGVzW2luZGV4XSkge1xuICAgICAgICAvLyBAVEJEIFNob3VsZCB3ZSB0aHJvdyBhbiBlcnJvcj9cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuXG4gICAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoIWlzUHJvZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlU2hlZXQ6IGlsbGVnYWwgcnVsZTogXFxuXFxuXCIgKyBydWxlICsgXCJcXG5cXG5TZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzIwMDA3OTkyIGZvciBtb3JlIGluZm9cIik7XG4gICAgICAgIH0gLy8gSW4gb3JkZXIgdG8gcHJlc2VydmUgdGhlIGluZGljZXMgd2UgaW5zZXJ0IGEgZGVsZXRlUnVsZVBsYWNlaG9sZGVyXG5cblxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHRoaXMuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXIsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRhZyA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xuICAgICAgaW52YXJpYW50KHRhZywgXCJvbGQgcnVsZSBhdCBpbmRleCBgXCIgKyBpbmRleCArIFwiYCBub3QgZm91bmRcIik7XG4gICAgICB0YWcudGV4dENvbnRlbnQgPSBydWxlO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfTtcblxuICBfcHJvdG8uZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgdGhpcy5yZXBsYWNlUnVsZShpbmRleCwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGFnID0gdGhpcy5fdGFnc1tpbmRleF07XG4gICAgICBpbnZhcmlhbnQodGFnLCBcInJ1bGUgYXQgaW5kZXggYFwiICsgaW5kZXggKyBcImAgbm90IGZvdW5kXCIpO1xuICAgICAgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIHRoaXMuX3RhZ3NbaW5kZXhdID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy5faW5qZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9ydWxlc0NvdW50ID0gMDtcblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3RhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiB0YWcgJiYgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl90YWdzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNpbXBsZXIgb24gc2VydmVyXG4gICAgICB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcyA9IFtdO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY3NzUnVsZXMgPSBmdW5jdGlvbiBjc3NSdWxlcygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3RhZ3MucmVkdWNlKGZ1bmN0aW9uIChydWxlcywgdGFnKSB7XG4gICAgICBpZiAodGFnKSB7XG4gICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChfdGhpczIuZ2V0U2hlZXRGb3JUYWcodGFnKS5jc3NSdWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICByZXR1cm4gcnVsZS5jc3NUZXh0ID09PSBfdGhpczIuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXIgPyBudWxsIDogcnVsZTtcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcnVsZXMucHVzaChudWxsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH0sIFtdKTtcbiAgfTtcblxuICBfcHJvdG8ubWFrZVN0eWxlVGFnID0gZnVuY3Rpb24gbWFrZVN0eWxlVGFnKG5hbWUsIGNzc1N0cmluZywgcmVsYXRpdmVUb1RhZykge1xuICAgIGlmIChjc3NTdHJpbmcpIHtcbiAgICAgIGludmFyaWFudChpc1N0cmluZyhjc3NTdHJpbmcpLCAnbWFrZVN0eWxlVGFnIGFjY2VwcyBvbmx5IHN0cmluZ3MgYXMgc2Vjb25kIHBhcmFtZXRlcicpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGlmICh0aGlzLl9ub25jZSkgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCB0aGlzLl9ub25jZSk7XG4gICAgdGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsgbmFtZSwgJycpO1xuXG4gICAgaWYgKGNzc1N0cmluZykge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzc1N0cmluZykpO1xuICAgIH1cblxuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuXG4gICAgaWYgKHJlbGF0aXZlVG9UYWcpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHRhZywgcmVsYXRpdmVUb1RhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQodGFnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFnO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZVNoZWV0LCBbe1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0eWxlU2hlZXQ7XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHlsZVNoZWV0OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZmx1c2hUb1JlYWN0O1xuZXhwb3J0cy5mbHVzaFRvSFRNTCA9IGZsdXNoVG9IVE1MO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3N0eWxlID0gcmVxdWlyZShcIi4vc3R5bGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBmbHVzaFRvUmVhY3Qob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3R5bGUuZmx1c2gpKCkubWFwKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgdmFyIGlkID0gYXJnc1swXTtcbiAgICB2YXIgY3NzID0gYXJnc1sxXTtcbiAgICByZXR1cm4gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KCdzdHlsZScsIHtcbiAgICAgIGlkOiBcIl9fXCIgKyBpZCxcbiAgICAgIC8vIEF2b2lkIHdhcm5pbmdzIHVwb24gcmVuZGVyIHdpdGggYSBrZXlcbiAgICAgIGtleTogXCJfX1wiICsgaWQsXG4gICAgICBub25jZTogb3B0aW9ucy5ub25jZSA/IG9wdGlvbnMubm9uY2UgOiB1bmRlZmluZWQsXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICBfX2h0bWw6IGNzc1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmx1c2hUb0hUTUwob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3R5bGUuZmx1c2gpKCkucmVkdWNlKGZ1bmN0aW9uIChodG1sLCBhcmdzKSB7XG4gICAgdmFyIGlkID0gYXJnc1swXTtcbiAgICB2YXIgY3NzID0gYXJnc1sxXTtcbiAgICBodG1sICs9IFwiPHN0eWxlIGlkPVxcXCJfX1wiICsgaWQgKyBcIlxcXCJcIiArIChvcHRpb25zLm5vbmNlID8gXCIgbm9uY2U9XFxcIlwiICsgb3B0aW9ucy5ub25jZSArIFwiXFxcIlwiIDogJycpICsgXCI+XCIgKyBjc3MgKyBcIjwvc3R5bGU+XCI7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH0sICcnKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZmx1c2ggPSBmbHVzaDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3N0eWxlc2hlZXRSZWdpc3RyeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3R5bGVzaGVldC1yZWdpc3RyeVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHN0eWxlU2hlZXRSZWdpc3RyeSA9IG5ldyBfc3R5bGVzaGVldFJlZ2lzdHJ5W1wiZGVmYXVsdFwiXSgpO1xuXG52YXIgSlNYU3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSlNYU3R5bGUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEpTWFN0eWxlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMucHJldlByb3BzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgSlNYU3R5bGUuZHluYW1pYyA9IGZ1bmN0aW9uIGR5bmFtaWMoaW5mbykge1xuICAgIHJldHVybiBpbmZvLm1hcChmdW5jdGlvbiAodGFnSW5mbykge1xuICAgICAgdmFyIGJhc2VJZCA9IHRhZ0luZm9bMF07XG4gICAgICB2YXIgcHJvcHMgPSB0YWdJbmZvWzFdO1xuICAgICAgcmV0dXJuIHN0eWxlU2hlZXRSZWdpc3RyeS5jb21wdXRlSWQoYmFzZUlkLCBwcm9wcyk7XG4gICAgfSkuam9pbignICcpO1xuICB9IC8vIHByb2JhYmx5IGZhc3RlciB0aGFuIFB1cmVDb21wb25lbnQgKHNoYWxsb3dFcXVhbClcbiAgO1xuXG4gIHZhciBfcHJvdG8gPSBKU1hTdHlsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShvdGhlclByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaWQgIT09IG90aGVyUHJvcHMuaWQgfHwgLy8gV2UgZG8gdGhpcyBjaGVjayBiZWNhdXNlIGBkeW5hbWljYCBpcyBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIHVuZGVmaW5lZC5cbiAgICAvLyBUaGVzZSBhcmUgdGhlIGNvbXB1dGVkIHZhbHVlcyBmb3IgZHluYW1pYyBzdHlsZXMuXG4gICAgU3RyaW5nKHRoaXMucHJvcHMuZHluYW1pYykgIT09IFN0cmluZyhvdGhlclByb3BzLmR5bmFtaWMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5yZW1vdmUodGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCB0byBtYWtlIHRoZSBzaWRlIGVmZmVjdCBhc3luYyBzYWZlIGluIHRoZSBcInJlbmRlclwiIHBoYXNlLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vemVpdC9zdHlsZWQtanN4L3B1bGwvNDg0XG4gICAgaWYgKHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKHRoaXMucHJldlByb3BzKSkge1xuICAgICAgLy8gVXBkYXRlc1xuICAgICAgaWYgKHRoaXMucHJldlByb3BzLmlkKSB7XG4gICAgICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5yZW1vdmUodGhpcy5wcmV2UHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZVNoZWV0UmVnaXN0cnkuYWRkKHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5wcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBKU1hTdHlsZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSlNYU3R5bGU7XG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICB2YXIgY3NzUnVsZXMgPSBzdHlsZVNoZWV0UmVnaXN0cnkuY3NzUnVsZXMoKTtcbiAgc3R5bGVTaGVldFJlZ2lzdHJ5LmZsdXNoKCk7XG4gIHJldHVybiBjc3NSdWxlcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3N0cmluZ0hhc2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHJpbmctaGFzaFwiKSk7XG5cbnZhciBfc3R5bGVzaGVldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3N0eWxlc2hlZXRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIHNhbml0aXplID0gZnVuY3Rpb24gc2FuaXRpemUocnVsZSkge1xuICByZXR1cm4gcnVsZS5yZXBsYWNlKC9cXC9zdHlsZS9naSwgJ1xcXFwvc3R5bGUnKTtcbn07XG5cbnZhciBTdHlsZVNoZWV0UmVnaXN0cnkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0UmVnaXN0cnkoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJHN0eWxlU2hlZXQgPSBfcmVmLnN0eWxlU2hlZXQsXG4gICAgICAgIHN0eWxlU2hlZXQgPSBfcmVmJHN0eWxlU2hlZXQgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJHN0eWxlU2hlZXQsXG4gICAgICAgIF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYub3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIF9yZWYkaXNCcm93c2VyID0gX3JlZi5pc0Jyb3dzZXIsXG4gICAgICAgIGlzQnJvd3NlciA9IF9yZWYkaXNCcm93c2VyID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA6IF9yZWYkaXNCcm93c2VyO1xuXG4gICAgdGhpcy5fc2hlZXQgPSBzdHlsZVNoZWV0IHx8IG5ldyBfc3R5bGVzaGVldFtcImRlZmF1bHRcIl0oe1xuICAgICAgbmFtZTogJ3N0eWxlZC1qc3gnLFxuICAgICAgb3B0aW1pemVGb3JTcGVlZDogb3B0aW1pemVGb3JTcGVlZFxuICAgIH0pO1xuXG4gICAgdGhpcy5fc2hlZXQuaW5qZWN0KCk7XG5cbiAgICBpZiAoc3R5bGVTaGVldCAmJiB0eXBlb2Ygb3B0aW1pemVGb3JTcGVlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9zaGVldC5zZXRPcHRpbWl6ZUZvclNwZWVkKG9wdGltaXplRm9yU3BlZWQpO1xuXG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gdGhpcy5fc2hlZXQuaXNPcHRpbWl6ZUZvclNwZWVkKCk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNCcm93c2VyO1xuICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faW5kaWNlcyA9IHt9O1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IHt9O1xuICAgIHRoaXMuY29tcHV0ZUlkID0gdGhpcy5jcmVhdGVDb21wdXRlSWQoKTtcbiAgICB0aGlzLmNvbXB1dGVTZWxlY3RvciA9IHRoaXMuY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldFJlZ2lzdHJ5LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHByb3BzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSBBcnJheS5pc0FycmF5KHByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgdGhpcy5fc2hlZXQuc2V0T3B0aW1pemVGb3JTcGVlZCh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKTtcblxuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IHRoaXMuX3NoZWV0LmlzT3B0aW1pemVGb3JTcGVlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgIXRoaXMuX2Zyb21TZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB0aGlzLnNlbGVjdEZyb21TZXJ2ZXIoKTtcbiAgICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IE9iamVjdC5rZXlzKHRoaXMuX2Zyb21TZXJ2ZXIpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB0YWdOYW1lKSB7XG4gICAgICAgIGFjY1t0YWdOYW1lXSA9IDA7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJGdldElkQW5kUnVsZXMgPSB0aGlzLmdldElkQW5kUnVsZXMocHJvcHMpLFxuICAgICAgICBzdHlsZUlkID0gX3RoaXMkZ2V0SWRBbmRSdWxlcy5zdHlsZUlkLFxuICAgICAgICBydWxlcyA9IF90aGlzJGdldElkQW5kUnVsZXMucnVsZXM7IC8vIERlZHVwaW5nOiBqdXN0IGluY3JlYXNlIHRoZSBpbnN0YW5jZXMgY291bnQuXG5cblxuICAgIGlmIChzdHlsZUlkIGluIHRoaXMuX2luc3RhbmNlc0NvdW50cykge1xuICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdICs9IDE7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluZGljZXMgPSBydWxlcy5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fc2hlZXQuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9KSAvLyBGaWx0ZXIgb3V0IGludmFsaWQgcnVsZXNcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICE9PSAtMTtcbiAgICB9KTtcbiAgICB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdID0gaW5kaWNlcztcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gPSAxO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRnZXRJZEFuZFJ1bGVzMiA9IHRoaXMuZ2V0SWRBbmRSdWxlcyhwcm9wcyksXG4gICAgICAgIHN0eWxlSWQgPSBfdGhpcyRnZXRJZEFuZFJ1bGVzMi5zdHlsZUlkO1xuXG4gICAgaW52YXJpYW50KHN0eWxlSWQgaW4gdGhpcy5faW5zdGFuY2VzQ291bnRzLCBcInN0eWxlSWQ6IGBcIiArIHN0eWxlSWQgKyBcImAgbm90IGZvdW5kXCIpO1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSAtPSAxO1xuXG4gICAgaWYgKHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSA8IDEpIHtcbiAgICAgIHZhciB0YWdGcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciAmJiB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuXG4gICAgICBpZiAodGFnRnJvbVNlcnZlcikge1xuICAgICAgICB0YWdGcm9tU2VydmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnRnJvbVNlcnZlcik7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5kaWNlc1tzdHlsZUlkXS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX3NoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGUgdGhpcy5faW5kaWNlc1tzdHlsZUlkXTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShwcm9wcywgbmV4dFByb3BzKSB7XG4gICAgdGhpcy5hZGQobmV4dFByb3BzKTtcbiAgICB0aGlzLnJlbW92ZShwcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy5fc2hlZXQuZmx1c2goKTtcblxuICAgIHRoaXMuX3NoZWV0LmluamVjdCgpO1xuXG4gICAgdGhpcy5fZnJvbVNlcnZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pbmRpY2VzID0ge307XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0ge307XG4gICAgdGhpcy5jb21wdXRlSWQgPSB0aGlzLmNyZWF0ZUNvbXB1dGVJZCgpO1xuICAgIHRoaXMuY29tcHV0ZVNlbGVjdG9yID0gdGhpcy5jcmVhdGVDb21wdXRlU2VsZWN0b3IoKTtcbiAgfTtcblxuICBfcHJvdG8uY3NzUnVsZXMgPSBmdW5jdGlvbiBjc3NSdWxlcygpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBmcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciA/IE9iamVjdC5rZXlzKHRoaXMuX2Zyb21TZXJ2ZXIpLm1hcChmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF1dO1xuICAgIH0pIDogW107XG5cbiAgICB2YXIgY3NzUnVsZXMgPSB0aGlzLl9zaGVldC5jc3NSdWxlcygpO1xuXG4gICAgcmV0dXJuIGZyb21TZXJ2ZXIuY29uY2F0KE9iamVjdC5rZXlzKHRoaXMuX2luZGljZXMpLm1hcChmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2luZGljZXNbc3R5bGVJZF0ubWFwKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gY3NzUnVsZXNbaW5kZXhdLmNzc1RleHQ7XG4gICAgICB9KS5qb2luKF90aGlzMy5fb3B0aW1pemVGb3JTcGVlZCA/ICcnIDogJ1xcbicpXTtcbiAgICB9KSAvLyBmaWx0ZXIgb3V0IGVtcHR5IHJ1bGVzXG4gICAgLmZpbHRlcihmdW5jdGlvbiAocnVsZSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4ocnVsZVsxXSk7XG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBjcmVhdGVDb21wdXRlSWRcbiAgICpcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgYW5kIG1lbW9pemUgYSBqc3ggaWQgZnJvbSBhIGJhc2VkSWQgYW5kIG9wdGlvbmFsbHkgcHJvcHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZUNvbXB1dGVJZCA9IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVJZCgpIHtcbiAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJhc2VJZCwgcHJvcHMpIHtcbiAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIFwianN4LVwiICsgYmFzZUlkO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcHNUb1N0cmluZyA9IFN0cmluZyhwcm9wcyk7XG4gICAgICB2YXIga2V5ID0gYmFzZUlkICsgcHJvcHNUb1N0cmluZzsgLy8gcmV0dXJuIGBqc3gtJHtoYXNoU3RyaW5nKGAke2Jhc2VJZH0tJHtwcm9wc1RvU3RyaW5nfWApfWBcblxuICAgICAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBcImpzeC1cIiArICgwLCBfc3RyaW5nSGFzaFtcImRlZmF1bHRcIl0pKGJhc2VJZCArIFwiLVwiICsgcHJvcHNUb1N0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWNoZVtrZXldO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIGNyZWF0ZUNvbXB1dGVTZWxlY3RvclxuICAgKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBhbmQgbWVtb2l6ZSBkeW5hbWljIHNlbGVjdG9ycy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlQ29tcHV0ZVNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCkge1xuICAgIGlmIChzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAgPT09IHZvaWQgMCkge1xuICAgICAgc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwID0gL19fanN4LXN0eWxlLWR5bmFtaWMtc2VsZWN0b3IvZztcbiAgICB9XG5cbiAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlkLCBjc3MpIHtcbiAgICAgIC8vIFNhbml0aXplIFNTUi1lZCBDU1MuXG4gICAgICAvLyBDbGllbnQgc2lkZSBjb2RlIGRvZXNuJ3QgbmVlZCB0byBiZSBzYW5pdGl6ZWQgc2luY2Ugd2UgdXNlXG4gICAgICAvLyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSAoZGV2KSBhbmQgdGhlIENTU09NIGFwaSBzaGVldC5pbnNlcnRSdWxlIChwcm9kKS5cbiAgICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICAgIGNzcyA9IHNhbml0aXplKGNzcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpZGNzcyA9IGlkICsgY3NzO1xuXG4gICAgICBpZiAoIWNhY2hlW2lkY3NzXSkge1xuICAgICAgICBjYWNoZVtpZGNzc10gPSBjc3MucmVwbGFjZShzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAsIGlkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlW2lkY3NzXTtcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRJZEFuZFJ1bGVzID0gZnVuY3Rpb24gZ2V0SWRBbmRSdWxlcyhwcm9wcykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGNzcyA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBkeW5hbWljID0gcHJvcHMuZHluYW1pYyxcbiAgICAgICAgaWQgPSBwcm9wcy5pZDtcblxuICAgIGlmIChkeW5hbWljKSB7XG4gICAgICB2YXIgc3R5bGVJZCA9IHRoaXMuY29tcHV0ZUlkKGlkLCBkeW5hbWljKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0eWxlSWQ6IHN0eWxlSWQsXG4gICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGNzcykgPyBjc3MubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5jb21wdXRlU2VsZWN0b3Ioc3R5bGVJZCwgcnVsZSk7XG4gICAgICAgIH0pIDogW3RoaXMuY29tcHV0ZVNlbGVjdG9yKHN0eWxlSWQsIGNzcyldXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdHlsZUlkOiB0aGlzLmNvbXB1dGVJZChpZCksXG4gICAgICBydWxlczogQXJyYXkuaXNBcnJheShjc3MpID8gY3NzIDogW2Nzc11cbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBzZWxlY3RGcm9tU2VydmVyXG4gICAqXG4gICAqIENvbGxlY3RzIHN0eWxlIHRhZ3MgZnJvbSB0aGUgZG9jdW1lbnQgd2l0aCBpZCBfX2pzeC1YWFhcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2VsZWN0RnJvbVNlcnZlciA9IGZ1bmN0aW9uIHNlbGVjdEZyb21TZXJ2ZXIoKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cIl9fanN4LVwiXScpKTtcbiAgICByZXR1cm4gZWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGVsZW1lbnQpIHtcbiAgICAgIHZhciBpZCA9IGVsZW1lbnQuaWQuc2xpY2UoMik7XG4gICAgICBhY2NbaWRdID0gZWxlbWVudDtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0UmVnaXN0cnk7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU3R5bGVTaGVldFJlZ2lzdHJ5O1xuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3R5bGVTaGVldFJlZ2lzdHJ5OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zZXJ2ZXInKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gIHZhciBoYXNoID0gNTM4MSxcbiAgICAgIGkgICAgPSBzdHIubGVuZ3RoO1xuXG4gIHdoaWxlKGkpIHtcbiAgICBoYXNoID0gKGhhc2ggKiAzMykgXiBzdHIuY2hhckNvZGVBdCgtLWkpO1xuICB9XG5cbiAgLyogSmF2YVNjcmlwdCBkb2VzIGJpdHdpc2Ugb3BlcmF0aW9ucyAobGlrZSBYT1IsIGFib3ZlKSBvbiAzMi1iaXQgc2lnbmVkXG4gICAqIGludGVnZXJzLiBTaW5jZSB3ZSB3YW50IHRoZSByZXN1bHRzIHRvIGJlIGFsd2F5cyBwb3NpdGl2ZSwgY29udmVydCB0aGVcbiAgICogc2lnbmVkIGludCB0byBhbiB1bnNpZ25lZCBieSBkb2luZyBhbiB1bnNpZ25lZCBiaXRzaGlmdC4gKi9cbiAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9