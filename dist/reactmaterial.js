(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MUIBase = function (_React$Component) {
  _inherits(MUIBase, _React$Component);

  function MUIBase(props) {
    _classCallCheck(this, MUIBase);

    var _this = _possibleConstructorReturn(this, (MUIBase.__proto__ || Object.getPrototypeOf(MUIBase)).call(this, props));

    _this.state = {
      data: null
    };

    return _this;
  }

  _createClass(MUIBase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.injectMui();
    }
  }, {
    key: 'injectMui',
    value: function injectMui() {
      var _this2 = this;

      // Check if mui instantiated
      return new Promise(function (resolve, reject) {
        if (undefined === window.mdc) {
          _this2.doInject('https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js', 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css', 'https://fonts.googleapis.com/icon?family=Material+Icons').then(function () {

            resolve();
          });
        } else {
          resolve();
        }
      }).catch(function (err) {
        reject(err);
      });
    }
  }, {
    key: 'doInject',
    value: function doInject(src, link1, link2) {

      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.async = true;
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', function () {
          return reject('Error loading script.');
        });
        script.addEventListener('abort', function () {
          return reject('Script loading aborted.');
        });
        document.head.appendChild(script);

        var l1 = document.createElement('link');
        l1.rel = 'stylesheet';
        l1.href = link1;
        document.head.appendChild(l1);

        var l2 = document.createElement('link');
        l2.rel = 'stylesheet';
        l2.href = link2;
        document.head.appendChild(l2);
      });
    }
  }, {
    key: 'getStyle',
    value: function getStyle(props) {
      return undefined === this.props.style ? {} : this.props.style;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('span', null);
    }
  }]);

  return MUIBase;
}(_react2.default.Component);

exports.default = MUIBase;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Theme = function (_MUIBase) {
  _inherits(Theme, _MUIBase);

  function Theme(props) {
    _classCallCheck(this, Theme);

    return _possibleConstructorReturn(this, (Theme.__proto__ || Object.getPrototypeOf(Theme)).call(this, props));
  }

  /**
   * Set up theme.  SUpported properties
   * 
   * primaryColor -> mdc-theme-primary
   */


  _createClass(Theme, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('will inject theme!!!!!!!!');
      var styleNode = document.createElement('style');

      styleNode.type = "text/css";
      styleNode.id = 'reactMaterialTheme';

      var bodyStyle = 'body { margin: 0px; min-height: 100%; }';
      var primaryStyle = undefined === this.props.primaryColor ? '' : ':root { --mdc-theme-primary: ' + this.props.primaryColor + ';}';
      var secondaryStyle = undefined === this.props.secondaryColor ? '' : ':root { --mdc-theme-secondary: ' + this.props.secondaryColor + ';}';

      var style = bodyStyle + ' ' + primaryStyle + ' ' + secondaryStyle;
      console.log(style);
      if (!!(window.attachEvent && !window.opera)) {
        styleNode.styleSheet.cssText = style;
      } else {
        var styleText = document.createTextNode(style);
        styleNode.appendChild(styleText);
      }

      document.getElementsByTagName('head')[0].appendChild(styleNode);
      var obj = document.getElementById('reactMaterialTheme').innerHTML;
      console.log(obj);
      //obj.innerHTML = ':root { --mdc-theme-primary: #ff8000;}';
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('span', null);
    }
  }]);

  return Theme;
}(_MUIBase3.default);

exports.default = Theme;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * AppBar
 * 
 * Props:
 * title
 * 
 * 
 */
var AppBar = function (_MUIBase) {
  _inherits(AppBar, _MUIBase);

  function AppBar(props) {
    _classCallCheck(this, AppBar);

    var _this = _possibleConstructorReturn(this, (AppBar.__proto__ || Object.getPrototypeOf(AppBar)).call(this, props));

    _this.state = {
      data: null
    };

    return _this;
  }

  _createClass(AppBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.injectMui().then(function () {

        _this2.setState({ render: true });
      }).catch(function (err) {
        alert('injection error ' + err);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return AppBar;
}(_MUIBase3.default);

exports.default = AppBar;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Button
 * 
 * Props:
 * id: idToBeUsed
 * raised: true | false.  Default is false
 * style={styleObject}
 */

var Button = function (_MUIBase) {
  _inherits(Button, _MUIBase);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.state = {
      data: null
    };

    return _this;
  }

  _createClass(Button, [{
    key: 'onClick',
    value: function onClick() {
      if (this.props.onClick) {
        this.props.onClick();
      }
    }
  }, {
    key: 'adjustLineheight',
    value: function adjustLineheight(pros) {}
  }, {
    key: 'render',
    value: function render() {

      var className = undefined === this.props.raised || !this.props.raised ? 'mdc-button' : 'mdc-button mdc-button--raised';
      if (undefined !== this.props.type) {
        if (this.props.type.trim() === 'secondary') {
          className += ' mdc-theme--secondary-bg mdc-theme--text-primary-on-secondary ';
        } else if (this.props.type.trim() === 'flat') {
          className += ' problem    ';
        } else {
          className += ' mdc-theme--primary-bg mdc-theme--text-primary-on-secondary ';
        }
      } else {
        className += '  ';
      }

      console.log(className);

      var children = [];
      var childArray = [];

      if (Array.isArray(this.props.children)) {
        childArray = this.props.children;
      } else {
        childArray.push(this.props.children);
      }

      childArray.map(function (child, index) {
        if (undefined === child.props) {

          //child,props.style.lineHeight = '36px';

          children.push(child);
          return;
        }

        var classNames = undefined === child.props.className ? '' : child.props.className;
        if (classNames.toLowerCase().indexOf('button__icon') > 0) {
          var childStyle = undefined === child.props.style ? {} : child.props.style;
          childStyle.lineHeight = '36px';
          children.push(_react2.default.cloneElement(child, { key: index, style: childStyle }));
        } else {
          children.push(_react2.default.cloneElement(child, { key: index }));
        }
      });

      /*
      this.props.children.map((child, index) => {
        let classNames = undefined === child.props.className ? '' : child.props.classNames;
        if (classNames.toLowerCase().indexOf('button__icon') > 0) {
          let childStyle = undefined === child.props.style ? {} : child.props.style;
          childStyle.lineHeight = '36px';
          children.push(React.cloneElement(child, { key: index, style: childStyle }));
        } else {
          children.push(React.cloneElement(child, { key: index }));
        }
      });
      */
      var style = this.getStyle(this.props);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { disabled: this.props.disabled, className: className, id: this.props.id,
            onClick: this.onClick.bind(this),
            style: this.getStyle(this.props) },
          children
        )
      );
    }
  }]);

  return Button;
}(_MUIBase3.default);

exports.default = Button;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Button
 * 
 * Props:
 * id: idToBeUsed
 * raised: true | false.  Default is false
 * style={styleObject}
 */

var Drawer = function (_MUIBase) {
  _inherits(Drawer, _MUIBase);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _this.state = {
      forceTemporary: window.innerWidth < 760 ? true : false
    };

    return _this;
  }

  _createClass(Drawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.injectMui().then(function () {
        console.log('adding event listner....');
        window.addEventListener('resize', _this2.doResize.bind(_this2));
        //<a href="#" className="mdc-toolbar__menu-icon rm-menu"><i className="material-icons">menu</i></a>
        var type = undefined === _this2.props.type ? '' : _this2.props.type;
        if (type.toLowerCase() === 'temporary') {
          var menu = document.querySelector('.rm-menu-container');
          if (menu === null) {
            console.log('hmm no menu? ');
            return;
          } else {
            console.log('we have a menu container..');
            menu.innerHTML = '<a href="#" class="mdc-toolbar__menu-icon rm-menu"><i class="material-icons">menu</i></a>';
          }
        }

        var drawerEl = document.querySelector('.mdc-temporary-drawer');
        if (drawerEl === null) {
          console.log('no drawer');
          return;
        }

        console.log(drawerEl);
        var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
        var drawer = new MDCTemporaryDrawer(drawerEl);
        document.querySelector('.rm-menu').addEventListener('click', function () {
          drawer.open = true;
        });
        drawerEl.addEventListener('MDCTemporaryDrawer:open', function () {
          console.log('Received MDCTemporaryDrawer:open');
        });
        drawerEl.addEventListener('MDCTemporaryDrawer:close', function () {
          console.log('Received MDCTemporaryDrawer:close');
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.doResize);
    }
  }, {
    key: 'doConstructTempDrawer',
    value: function doConstructTempDrawer() {}
  }, {
    key: 'doResize',
    value: function doResize() {
      if (this._resizing) {
        return;
      }
      this._resizing = true;
      var menu = document.querySelector('.rm-menu-container');
      //    console.log('Resize.  Width: ' + window.innerWidth + ' Height: ' + window.innerHeight);
      if (window.innerWidth < 760) {
        // turn drawer into temporary drawer
        this.setState({ forceTemporary: true });

        if (menu === null) {

          return;
        } else {
          //        console.log('we have a menu container..');
          menu.innerHTML = '<a href="#" class="mdc-toolbar__menu-icon rm-menu"><i class="material-icons">menu</i></a>';
        }
      } else {
        menu.innerHTML = '';
        this.setState({ forceTemporary: false });
      }
      this._resizing = false;
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (this.props.onClick) {
        this.props.onClick();
      }
    }
  }, {
    key: 'getDrawer',
    value: function getDrawer() {
      var type = undefined === this.props.type ? '' : this.props.type;
      if (this.state.forceTemporary) {
        console.log('force!!!!!');
        type = 'temporary';
      }
      if (type.toLowerCase() === 'temporary') {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'aside',
            { className: 'mdc-temporary-drawer ' },
            _react2.default.createElement(
              'nav',
              { className: 'mdc-temporary-drawer__drawer rm-menu' },
              _react2.default.createElement(
                'header',
                { className: 'mdc-temporary-drawer__header' },
                _react2.default.createElement(
                  'div',
                  { className: 'mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary ' },
                  _react2.default.createElement(
                    'h1',
                    { className: 'mdc-typography--display1' },
                    this.props.title
                  )
                )
              ),
              _react2.default.createElement(
                'nav',
                { className: 'mdc-temporary-drawer__content mdc-list-group' },
                this.props.children
              )
            )
          )
        );
      } else if (type.toLowerCase() === 'permanent') {
        if (this.props.aboveToolbar) {} else {
          return (
            // default to below toolbar
            _react2.default.createElement(
              'div',
              { style: { minHeight: '100%', float: 'left' } },
              _react2.default.createElement(
                'nav',
                { style: { height: '100%' }, className: 'mdc-permanent-drawer' },
                this.props.children
              )
            )
          );
        }
      } else {
        return _react2.default.createElement(
          'div',
          null,
          'Drawer type not specified.  Must be one of \'temporary\' or \'permanent\''
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.getDrawer();
    }
  }]);

  return Drawer;
}(_MUIBase3.default);

exports.default = Drawer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menus = function (_MUIBase) {
  _inherits(Menus, _MUIBase);

  function Menus(props) {
    _classCallCheck(this, Menus);

    var _this = _possibleConstructorReturn(this, (Menus.__proto__ || Object.getPrototypeOf(Menus)).call(this, props));

    _this.state = {
      data: null
    };

    return _this;
  }

  _createClass(Menus, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.injectMui().then(function () {
        var menuEl = document.querySelector('#' + _this2.props.id);
        var menu = new mdc.menu.MDCSimpleMenu(menuEl);
        var toggle = document.querySelector('#' + _this2.props.trigger);

        toggle.addEventListener('click', function () {
          menu.open = !menu.open;
        });

        menuEl.addEventListener('MDCSimpleMenu:selected', function (evt) {
          var detail = evt.detail;
          // alert(detail.item.textContent.trim() + '" at index ' + detail.index);
          _this2.props.onSelect(detail.index, detail.item.textContent.trim());
        });
      }).catch(function (err) {
        alert('injection error ' + err.stack);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'mdc-simple-menu', style: { position: 'absolute' }, tabIndex: '-1', id: this.props.id },
          this.props.children
        )
      );
    }
  }]);

  return Menus;
}(_MUIBase3.default);

exports.default = Menus;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TextField
 * 
 * Props:
 * id: idToBeUsed
 * placeholder=Placeholder (Hint text)
 * type = text | password
 * label = SomeValue
 * style={styleObject}
 */
var TextField = function (_MUIBase) {
  _inherits(TextField, _MUIBase);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.state = {
      data: null
    };

    return _this;
  }

  _createClass(TextField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.injectMui().then(function () {

        var tfRoot = document.querySelectorAll('.mdc-textfield');
        console.log(tfRoot.length);
        for (var i = 0; i < tfRoot.length; i++) {
          var tf = tfRoot[i];
          new mdc.textfield.MDCTextfield(tf);
        }

        //var helptext = document.querySelector('.mdc-textfield-helptext');
        //var tf = new mdc.textfield.MDCTextfield(helptext);

        //document.getElementById('required').addEventListener('change', function (evt) {
        //  var target = evt.target;
        //  helptext.querySelector('.mdc-textfield__input').required = target.checked;
        //});
        /*
        document.getElementById('use-helptext').addEventListener('change', function (evt) {
        var target = evt.target;
        tf.helptextElement = target.checked ? helptext : null;
        helptext.style.display = target.checked ? 'block' : 'none';
        document.getElementById('persistent-help-text').disabled = !target.checked;
        document.getElementById('helptext-as-validation').disabled = !target.checked;
        });
        document.getElementById('persistent-help-text').addEventListener('change', function (evt) {
        var target = evt.target;
        helptext.classList[target.checked ? 'add' : 'remove'](
          'mdc-textfield-helptext--persistent'
        );
        });
        document.getElementById('helptext-as-validation').addEventListener('change', function (evt) {
        var target = evt.target;
        helptext.classList[target.checked ? 'add' : 'remove'](
          'mdc-textfield-helptext--validation-msg'
        );
        });
        */
      }).catch(function (err) {
        alert('injection error ' + err);
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      if (this.props.onChange) {
        this.props.onChange(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'mdc-textfield' },
        _react2.default.createElement('input', { onChange: this.onChange.bind(this), style: this.getStyle(this.props), type: this.props.type, id: this.props.id, className: 'mdc-textfield__input' }),
        _react2.default.createElement(
          'label',
          { className: 'mdc-textfield__label', htmlFor: this.props.id },
          this.props.placeholder
        ),
        _react2.default.createElement('div', { className: 'mdc-textfield__bottom-line' })
      );
    }
  }]);

  return TextField;
}(_MUIBase3.default);

exports.default = TextField;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Button
 * 
 * Props:
 * id: idToBeUsed
 * raised: true | false.  Default is false
 * style={styleObject}
 */

var Toolbar = function (_MUIBase) {
  _inherits(Toolbar, _MUIBase);

  function Toolbar(props) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));

    _this.state = {
      data: null
    };

    return _this;
  }

  _createClass(Toolbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.injectMui().then(function () {
        // if FIXED Header
        if (_this2.props.fixed) {
          var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
          toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
        } else {
          document.querySelector('.mdc-toolbar-fixed-adjust').style.display = 'none';
        }
      }).catch(function (err) {
        alert('injection error ' + err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = 'mdc-toolbar';
      if (this.props.fixed) {
        className += ' mdc-toolbar--fixed';
      }

      return _react2.default.createElement(
        'div',
        { style: this.getStyle(this.props) },
        _react2.default.createElement(
          'header',
          { className: className },
          _react2.default.createElement(
            'div',
            { className: 'mdc-toolbar__row' },
            _react2.default.createElement(
              'section',
              { style: { alignItems: 'center' }, className: 'mdc-toolbar__section mdc-toolbar__section--align-start' },
              _react2.default.createElement('span', { className: 'catalog-back rm-menu-container' }),
              _react2.default.createElement(
                'span',
                { className: 'mdc-toolbar__title catalog-title' },
                this.props.title
              ),
              _react2.default.createElement(
                'section',
                { className: 'mdc-toolbar__section mdc-toolbar__section--align-end', role: 'toolbar' },
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'material-icons mdc-toolbar__icon', 'aria-label': 'Settings', alt: 'Settings' },
                  'settings'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'material-icons mdc-toolbar__icon', 'aria-label': 'Download', alt: 'Download' },
                  'file_download'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'material-icons mdc-toolbar__icon', 'aria-label': 'Print this page', alt: 'Print this page' },
                  'print'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'material-icons mdc-toolbar__icon', 'aria-label': 'Bookmark this page', alt: 'Bookmark this page' },
                  'bookmark'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'main',
          { className: 'mdc-toolbar-fixed-adjust' },
          _react2.default.createElement('span', null)
        )
      );
    }
  }]);

  return Toolbar;
}(_MUIBase3.default);

exports.default = Toolbar;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(4);

var _Button2 = _interopRequireDefault(_Button);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Button
 * 
 * Props:
 * id: idToBeUsed
 * raised: true | false.  Default is false
 * style={styleObject}
 */

var Card = function (_MUIBase) {
  _inherits(Card, _MUIBase);

  function Card(props) {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
  }

  /**
   * We support 2 types of cards.  Horizontal and Vertical.
   * 
   * Return what the caller wants.
   */


  _createClass(Card, [{
    key: 'getCardMarkup',
    value: function getCardMarkup() {

      var headerStyle = undefined === this.props.headerStyle ? '' : this.props.headerStyle;
      var orientation = undefined === this.props.orientation ? 'vertical' : this.props.orientation;
      var style = undefined === this.props.style ? '' : this.props.style;
      if (this.props.shadow) {
        style.boxShadow = '1px 10px 50px 0px rgba(138,133,138,1)';
      }

      if (orientation.toLowerCase() === 'horizontal') {
        var image = undefined === this.props.image ? '' : this.props.image;
        var imagePosition = undefined === this.props.imagePosition ? 'right' : this.props.imagePosition;
        //1px 10px 50px 0px rgba(138,133,138,1) if props.shadow is true
        if (imagePosition.toLowerCase() === 'left') {
          return _react2.default.createElement(
            'div',
            { style: style },
            _react2.default.createElement(
              'div',
              { className: 'mdc-card ' },
              _react2.default.createElement(
                'div',
                { className: 'mdc-card__horizontal-block' },
                _react2.default.createElement('img', { className: 'mdc-card__media-item', src: image, style: { textAlign: 'right' } }),
                _react2.default.createElement(
                  'section',
                  { className: 'mdc-card__primary' },
                  _react2.default.createElement(
                    'h1',
                    { className: 'mdc-card__title mdc-card__title--large' },
                    this.props.title
                  ),
                  _react2.default.createElement(
                    'h2',
                    { className: 'mdc-card__subtitle' },
                    this.props.subtitle
                  )
                )
              ),
              _react2.default.createElement(
                'section',
                { className: 'mdc-card__actions' },
                this.props.children
              )
            )
          );
        } else {
          return _react2.default.createElement(
            'div',
            { style: style },
            _react2.default.createElement(
              'div',
              { className: 'mdc-card ' },
              _react2.default.createElement(
                'div',
                { className: 'mdc-card__horizontal-block' },
                _react2.default.createElement(
                  'section',
                  { className: 'mdc-card__primary' },
                  _react2.default.createElement(
                    'h1',
                    { className: 'mdc-card__title mdc-card__title--large' },
                    this.props.title
                  ),
                  _react2.default.createElement(
                    'h2',
                    { className: 'mdc-card__subtitle' },
                    this.props.subtitle
                  )
                ),
                _react2.default.createElement('img', { className: 'mdc-card__media-item', src: image })
              ),
              _react2.default.createElement(
                'section',
                { className: 'mdc-card__actions' },
                this.props.children
              )
            )
          );
        }
      } else {
        // Vertical card
        return _react2.default.createElement(
          'div',
          { style: style },
          _react2.default.createElement(
            'div',
            { className: 'mdc-card ' },
            _react2.default.createElement('section', { style: headerStyle }),
            _react2.default.createElement(
              'section',
              { className: 'mdc-card__primary' },
              _react2.default.createElement(
                'h1',
                { className: 'mdc-card__title mdc-card__title--large' },
                this.props.title
              ),
              _react2.default.createElement(
                'h2',
                { className: 'mdc-card__subtitle' },
                this.props.subtitle
              )
            ),
            _react2.default.createElement(
              'section',
              { className: 'mdc-card__actions' },
              this.props.children
            )
          )
        );
      }
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (this.props.onClick) {
        this.props.onClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.getCardMarkup();
    }
  }]);

  return Card;
}(_MUIBase3.default);

Card.propTypes = {
  children: function children(props, propName, componentName) {
    var prop = props[propName];

    var error = null;
    _react2.default.Children.forEach(prop, function (child) {

      if (child.type !== _Button2.default) {
        error = new Error('`' + componentName + '` children should be of type `Button`.');
      }
    });
    return error;
  }
};

exports.default = Card;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Checkbox
 * 
 * Props:
 * 
 */

var Checkbox = function (_MUIBase) {
  _inherits(Checkbox, _MUIBase);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));
  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'mdc-form-field' },
        _react2.default.createElement(
          'div',
          { className: 'mdc-checkbox' },
          _react2.default.createElement('input', { type: 'checkbox',
            checked: this.props.isChecked,
            id: this.props.id,

            onClick: function onClick(event) {
              _this2.props.onClick(event, _this2.props.id, !_this2.props.isChecked);
            },
            className: 'mdc-checkbox__native-control' }),
          _react2.default.createElement(
            'div',
            { className: 'mdc-checkbox__background' },
            _react2.default.createElement(
              'svg',
              { className: 'mdc-checkbox__checkmark',
                viewBox: '0 0 24 24' },
              _react2.default.createElement('path', { className: 'mdc-checkbox__checkmark__path',
                fill: 'none',
                stroke: 'white',
                d: 'M1.73,12.91 8.1,19.28 22.79,4.59' })
            ),
            _react2.default.createElement('div', { className: 'mdc-checkbox__mixedmark' })
          )
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: this.props.is },
          this.props.label
        )
      );
    }
  }]);

  return Checkbox;
}(_MUIBase3.default);

exports.default = Checkbox;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Colourizer = function () {
  function Colourizer() {
    _classCallCheck(this, Colourizer);
  }

  _createClass(Colourizer, null, [{
    key: 'colourize',
    value: function colourize(element) {

      return _react2.default.createElement(
        'span',
        { style: { color: '#222' } },
        element
      );
    }
  }]);

  return Colourizer;
}();

exports.default = Colourizer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Dialog
 * 
 * Props:
 * id: idToBeUsed
 * title: Title
 * body: Body text
 * buttons: An array of button objects that are placed in the dialogue footer
 * style={styleObject}
 */

var Dialog = function (_MUIBase) {
  _inherits(Dialog, _MUIBase);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this._dialog = null;
    _this._show = false;

    _this.state = {
      id: props.id
    };

    return _this;
  }

  _createClass(Dialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.injectMui().then(function () {
        //
      }).catch(function (err) {
        alert('injection error ' + err);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ id: nextProps.id, show: nextProps.show });
      this._show = nextProps.show;
    }

    /**
     * Show the dialog?  Or not?
     */

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      var _this2 = this;

      if (!this._show) {
        return false;
      }

      if (this._dialog === null) {
        this._dialog = new mdc.dialog.MDCDialog(document.getElementById(this.state.id));
      }

      this._dialog.listen('MDCDialog:accept', function () {
        if (_this2._dialog === null) {
          return false;
        }
        _this2._dialog.close();
        _this2._dialog = null;
        _this2._show = false;
        _this2.props.onAccept();
        return false;
      });
      this._dialog.listen('MDCDialog:cancel', function () {
        if (_this2._dialog === null) {
          return false;
        }
        _this2._dialog.close();
        _this2._dialog = null;
        _this2._show = false;
        _this2.props.onCancel();
        return false;
      });

      if (this._show) {
        this._dialog.show();
      }

      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'aside',
          { id: this.props.id,
            className: 'mdc-dialog',
            role: 'alertdialog',
            'aria-hidden': 'true',
            'aria-labelledby': 'mdc-dialog-default-label',
            'aria-describedby': 'mdc-dialog-default-description' },
          _react2.default.createElement(
            'div',
            { className: 'mdc-dialog__surface' },
            _react2.default.createElement(
              'header',
              { className: 'mdc-dialog__header' },
              _react2.default.createElement(
                'h2',
                { id: 'mdc-dialog-default-label', className: 'mdc-dialog__header__title' },
                this.props.title
              )
            ),
            _react2.default.createElement(
              'section',
              { id: 'mdc-dialog-default-description', className: 'mdc-dialog__body' },
              this.props.body
            ),
            _react2.default.createElement(
              'footer',
              { className: 'mdc-dialog__footer' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel' },
                this.props.declineText
              ),
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'mdc-button mdc-dialog__footer__button mdc-button--raised mdc-dialog__footer__button--accept' },
                this.props.acceptText
              )
            )
          ),
          _react2.default.createElement('div', { className: 'mdc-dialog__backdrop' })
        )
      );
    }
  }]);

  return Dialog;
}(_MUIBase3.default);

exports.default = Dialog;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_MUIBase) {
  _inherits(Grid, _MUIBase);

  function Grid(props) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

    _this.state = {
      data: null
    };

    return _this;
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      //mdc-layout-grid__cell--span-4
      var children = [];
      this.props.children.map(function (child, index) {
        var classNames = undefined === child.props.className ? '' : child.props.className;
        classNames += ' mdc-layout-grid__cell ';
        classNames += undefined === child.props.span ? '' : ' mdc-layout-grid__cell--span-' + child.props.span + ' ';
        children.push(_react2.default.cloneElement(child, { key: index, className: classNames }));
      });

      return _react2.default.createElement(
        'div',
        { className: 'mdc-layout-grid' },
        _react2.default.createElement(
          'div',
          { className: 'mdc-layout-grid__inner' },
          children
        )
      );
    }
  }]);

  return Grid;
}(_MUIBase3.default);

exports.default = Grid;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Switch
 * 
 * Props:
 * 
 */

var List = function (_MUIBase) {
  _inherits(List, _MUIBase);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this._snackbar = null;
    _this._show = false;

    return _this;
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { style: this.getStyle(), className: 'mdc-list' },
        this.props.children
      );
    }
  }]);

  return List;
}(_MUIBase3.default);

exports.default = List;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ListItem
 * 
 * Props:
 * 
 */

var ListItem = function (_MUIBase) {
  _inherits(ListItem, _MUIBase);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));
  }

  //mdc-list-item__start-detail  and mdc-list-item__end-detail

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var className = undefined === this.props.align ? 'mdc-list-item__start-detail' : 'mdc-list-item mdc-list-item mdc-list-item__' + this.props.align.toLowerCase() + '-detail';
      console.log('class is: ' + className);
      return _react2.default.createElement(
        'li',
        { style: this.getStyle(), className: 'mdc-list-item' },
        this.props.children
      );
    }
  }]);

  return ListItem;
}(_MUIBase3.default);

exports.default = ListItem;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Checkbox
 * 
 * Props:
 * 
 */

var Progress = function (_MUIBase) {
  _inherits(Progress, _MUIBase);

  function Progress(props) {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));
  }

  _createClass(Progress, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.injectMui().then(function () {

        _this2.setState({ update: true });
      }).catch(function (err) {
        alert('injection error ' + err);
      });
    }

    /**
     * TODO do I need to detach existing bars?
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var determinates = document.querySelectorAll('.mdc-linear-progress');
      for (var i = 0, determinate; determinate = determinates[i]; i++) {
        console.log(determinate.classList);
        if (determinate.classList.contains('indeterminate')) {
          console.log('no value to be set)');
          continue;
        }
        var linearProgress = mdc.linearProgress.MDCLinearProgress.attachTo(determinate);
        linearProgress.progress = this.props.value;
        if (determinate.dataset.buffer) {
          linearProgress.buffer = 0.75;
        }
      }
    }

    //background-color: var(--mdc-theme-secondary,#ff4081);

  }, {
    key: 'render',
    value: function render() {
      var className = '';
      console.log('in progress render..');
      if (undefined === this.props.type) {
        return _react2.default.createElement(
          'span',
          null,
          'You must supply a type property for this progress bar'
        );
      } else if (this.props.type === 'determinate') {
        className = 'mdc-linear-progress';
      } else if (this.props.type === 'indeterminate') {
        className = 'mdc-linear-progress mdc-linear-progress--indeterminate';
      } else {
        return _react2.default.createElement(
          'span',
          null,
          'Invalid progress bar type (or none) supplied.'
        );
      }

      if (undefined !== this.props.reverse) {
        className += ' ' + (this.props.reverse ? 'mdc-linear-progress--reversed' : '');
      }

      if (undefined !== this.props.color) {
        className += ' ' + (this.props.color === 'secondary' ? 'mdc-linear-progress--accent' : '');
      }
      console.log(className);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: this.props.id, style: this.getStyle(this.props), role: 'progressbar', className: className },
          _react2.default.createElement('div', { className: 'mdc-linear-progress__buffering-dots' }),
          _react2.default.createElement('div', { className: 'mdc-linear-progress__buffer' }),
          _react2.default.createElement(
            'div',
            { className: 'mdc-linear-progress__bar mdc-linear-progress__primary-bar' },
            _react2.default.createElement('span', { style: { backgroundColor: 'rrrred' }, className: 'mdc-linear-progress__bar-inner' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'mdc-linear-progress__bar mdc-linear-progress__secondary-bar' },
            _react2.default.createElement('span', { className: 'mdc-linear-progress__bar-inner' })
          )
        )
      );
    }
  }]);

  return Progress;
}(_MUIBase3.default);

exports.default = Progress;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Switch
 * 
 * Props:
 * 
 */

var Radio = function (_MUIBase) {
  _inherits(Radio, _MUIBase);

  function Radio(props) {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));
  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  _createClass(Radio, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('render!!!');
      return _react2.default.createElement(
        'div',
        { className: 'mdc-form-field' },
        _react2.default.createElement(
          'div',
          { className: 'mdc-radio' },
          _react2.default.createElement('input', { className: 'mdc-radio__native-control', value: this.props.value, type: 'radio', id: this.props.id, name: this.props.name, checked: this.props.isChecked,

            onClick: function onClick(event) {
              _this2.props.onClick(event, _this2.props.id, _this2.props.name, _this2.props.value);
            }
          }),
          _react2.default.createElement(
            'div',
            { className: 'mdc-radio__background ' },
            _react2.default.createElement('div', { className: 'mdc-radio__outer-circle ' }),
            _react2.default.createElement('div', { className: 'mdc-radio__inner-circle ' })
          )
        ),
        _react2.default.createElement(
          'label',
          { id: "label_" + this.props.id, htmlFor: this.props.id },
          this.props.label
        )
      );
    }
  }]);

  return Radio;
}(_MUIBase3.default);

exports.default = Radio;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Checkbox
 * 
 * Props:
 * 
 */

var Select = function (_MUIBase) {
  _inherits(Select, _MUIBase);

  function Select(props) {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));
  }

  _createClass(Select, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.injectMui().then(function () {
        var MDCSelect = mdc.select.MDCSelect;
        var select = new MDCSelect(document.querySelector('.mdc-select'));
        select.listen('MDCSelect:change', function () {
          _this2.props.onClick(select.selectedIndex, select.value);
        });
      });
    }

    //background-color: var(--mdc-theme-secondary,#ff4081);

  }, {
    key: 'render',
    value: function render() {

      this.props.options.map(function (option, index) {
        console.log(option.label + ' ' + option.value + '' + option.enabled);
      });

      return _react2.default.createElement(
        'div',
        { className: 'mdc-form-field' },
        _react2.default.createElement(
          'div',
          { id: 'hero-js-select', className: 'mdc-select', role: 'listbox', tabIndex: '0' },
          _react2.default.createElement(
            'span',
            { className: 'mdc-select__selected-text' },
            this.props.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'mdc-simple-menu mdc-select__menu' },
            _react2.default.createElement(
              'ul',
              { className: 'mdc-list mdc-simple-menu__items' },
              _react2.default.createElement(
                'li',
                { className: 'mdc-list-item', 'aria-disabled': true, role: 'option' },
                this.props.title
              ),
              this.props.options.map(function (option, index) {
                return _react2.default.createElement(
                  'li',
                  { key: index, tabIndex: '0', className: 'mdc-list-item', role: 'option', 'aria-disabled': !option.enabled },
                  option.value
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Select;
}(_MUIBase3.default);

exports.default = Select;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Checkbox
 * 
 * Props:
 * 
 */

var Slider = function (_MUIBase) {
  _inherits(Slider, _MUIBase);

  function Slider(props) {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.injectMui().then(function () {

        _this2.setState({ update: true });
      }).catch(function (err) {
        alert('injection error ' + err);
      });
    }
  }, {
    key: 'componentDidUnMount',
    value: function componentDidUnMount() {
      this._continuousSliderEl == null;
      console.log('slider unmount!!!');
    }

    /**
     * TODO do I need to detach existing bars?
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this._continuousSliderEl != null) {
        return;
      }

      this._continuousSliderEl = document.getElementById('continuous-mdc-slider');
      if (this._continuousSliderEl === null) {
        return;
      }

      //alert( continuousSliderEl );
      this._continuousSlider = new mdc.slider.MDCSlider(this._continuousSliderEl);

      this._continuousSlider.listen('MDCSlider:change', this.changeEvent.bind(this));
      this._continuousSlider.listen('MDCSlider:input', this.inputEvent.bind(this));

      //continuousSlider.listen('MDCSlider:change', function () {
      //  console.log( 'change value from slider is: ' +  continuousSlider.value );
      //});
    }
  }, {
    key: 'changeEvent',
    value: function changeEvent() {
      if (this.props.onChange) {
        this.props.onChange(this._continuousSlider.value);
      }
    }
  }, {
    key: 'inputEvent',
    value: function inputEvent() {
      if (this.props.onInput) {
        this.props.onInput(this._continuousSlider.value);
      }
    }

    //background-color: var(--mdc-theme-secondary,#ff4081);

  }, {
    key: 'render',
    value: function render() {

      if (undefined === this.props.min) {
        return _react2.default.createElement(
          'span',
          null,
          'Min is undefined'
        );
      }

      if (undefined === this.props.max) {
        return _react2.default.createElement(
          'span',
          null,
          'Max is undefined'
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'continuous-mdc-slider', className: 'mdc-slider', tabIndex: '0', role: 'slider',
            'aria-valuemin': this.props.min, 'aria-valuemax': this.props.max, 'aria-valuenow': this.props.value,
            'aria-label': 'Select Value' },
          _react2.default.createElement(
            'div',
            { className: 'mdc-slider__track-container' },
            _react2.default.createElement('div', { className: 'mdc-slider__track' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'mdc-slider__thumb-container' },
            _react2.default.createElement(
              'svg',
              { className: 'mdc-slider__thumb', width: '21', height: '21' },
              _react2.default.createElement('circle', { cx: '10.5', cy: '10.5', r: '7.875' })
            ),
            _react2.default.createElement('div', { className: 'mdc-slider__focus-ring' })
          )
        )
      );
    }
  }]);

  return Slider;
}(_MUIBase3.default);

exports.default = Slider;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Switch
 * 
 * Props:
 * 
 */

var Snackbar = function (_MUIBase) {
  _inherits(Snackbar, _MUIBase);

  function Snackbar(props) {
    _classCallCheck(this, Snackbar);

    var _this = _possibleConstructorReturn(this, (Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call(this, props));

    _this._snackbar = null;
    _this._show = false;

    return _this;
  }

  _createClass(Snackbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.injectMui().then(function () {
        var MDCSnackbar = mdc.snackbar.MDCSnackbar;
        _this2._snackbar = new MDCSnackbar(document.getElementById('mdc-js-snackbar'));
        // this.show();
      }).catch(function (err) {
        alert('injection error ' + err);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ id: nextProps.id, show: nextProps.show });
      this._show = nextProps.show;
      console.log('cwrp: ' + this._show);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {

      if (!this._show) {
        return false;
      } else {

        this.show();
        return true;
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var _this3 = this;

      this._snackbar.dismissesOnAction = undefined === this.props.dismissOnAction ? true : this.props.dismissOnAction;
      var data = {
        message: this.props.message,
        actionOnBottom: undefined === this.props.actionOnBottom ? false : this.props.actionOnBottom, //multilineInput.checked,
        multiline: undefined === this.props.multiline ? false : this.props.multiline, //multilineInput.checked,
        timeout: undefined === this.props.timeout ? 2750 : this.props.timeout
      };
      if (true) {
        data.actionText = this.props.actionText;
        data.actionHandler = function () {
          console.log(data);
          if (undefined !== _this3.props.onClick) {
            _this3.props.onClick();
          }
        };
      }
      this._snackbar.show(data);
    }

    //mdc-snackbar--align-start
    //

  }, {
    key: 'render',
    value: function render() {
      var position = '';
      if (undefined !== this.props.position) {
        if (this.props.position.toLowerCase() === 'left') {
          position = 'mdc-snackbar--align-start';
        }
      }
      return _react2.default.createElement(
        'div',
        { id: 'mdc-js-snackbar',
          className: "mdc-snackbar " + position,
          'aria-live': 'assertive',
          'aria-atomic': 'true',
          'aria-hidden': 'true' },
        _react2.default.createElement('div', { className: 'mdc-snackbar__text' }),
        _react2.default.createElement(
          'div',
          { className: 'mdc-snackbar__action-wrapper' },
          _react2.default.createElement('button', { type: 'button', className: 'mdc-snackbar__action-button' })
        )
      );
    }
  }]);

  return Snackbar;
}(_MUIBase3.default);

exports.default = Snackbar;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Switch
 * 
 * Props:
 * 
 */

var Switch = function (_MUIBase) {
  _inherits(Switch, _MUIBase);

  function Switch(props) {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));
  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  _createClass(Switch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'mdc-switch' },
          _react2.default.createElement('input', { type: 'checkbox',
            id: this.props.id,
            checked: this.props.isChecked ? this.props.isChecked : false,
            className: 'mdc-switch__native-control',
            onChange: function onChange(event) {
              _this2.props.onClick(event.target.checked, _this2.props.value);
            },
            value: this.props.value,

            disabled: this.props.disabled
          }),
          _react2.default.createElement(
            'div',
            { className: 'mdc-switch__background ' },
            _react2.default.createElement('div', { className: 'mdc-switch__knob mdc-theme--background' })
          )
        ),
        '\xA0',
        _react2.default.createElement(
          'label',
          { htmlFor: this.props.id, className: 'mdc-switch-label' },
          this.props.label
        )
      );
    }
  }]);

  return Switch;
}(_MUIBase3.default);

exports.default = Switch;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Menus = __webpack_require__(6);

var _Menus2 = _interopRequireDefault(_Menus);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _Theme = __webpack_require__(2);

var _Theme2 = _interopRequireDefault(_Theme);

var _HeaderEx = __webpack_require__(25);

var _HeaderEx2 = _interopRequireDefault(_HeaderEx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Examples


var TabDetail = function (_React$Component) {
  _inherits(TabDetail, _React$Component);

  function TabDetail(props) {
    _classCallCheck(this, TabDetail);

    return _possibleConstructorReturn(this, (TabDetail.__proto__ || Object.getPrototypeOf(TabDetail)).call(this, props));
  }

  _createClass(TabDetail, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return TabDetail;
}(_react2.default.Component);

exports.default = TabDetail;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_MUIBase) {
  _inherits(Tabs, _MUIBase);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = {
      data: null
    };

    return _this;
  }

  _createClass(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.injectMui().then(function () {
        setTimeout(function () {

          console.log('Will get selector: ' + '#' + _this2.props.id);
          var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#' + _this2.props.id));
          //var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBarScroller(document.querySelector('#' + this.props.id));
          console.log(dynamicTabBar);
          var panels = document.querySelector('#' + _this2.props.panelsId);
          console.log('panels is: ' + panels);
          console.log(panels);
          console.log(panels.children.length);
          for (var i = 0; i < panels.children.length; i++) {
            var panel = panels.children[i];
            if (!panel.classList.contains('active')) {
              panel.style.display = 'none';
            }
          }

          dynamicTabBar.tabs.forEach(function (tab) {
            tab.preventDefaultOnClick = true;
          });

          function updatePanel(self, index) {
            console.log(panels);
            console.log('qs... ' + panels.querySelector('.mdc-panel'));

            var activePanel = panels.querySelector('.mdc-panel.active');
            console.log('ap... ' + activePanel);
            if (activePanel) {
              activePanel.classList.remove('active');
              activePanel.style.display = 'none';
            }
            var newActivePanel = panels.querySelector('.mdc-panel:nth-child(' + (index + 1) + ')');
            console.log('nap... ' + newActivePanel);
            console.log(newActivePanel);
            if (newActivePanel) {
              newActivePanel.style.display = 'block';
              newActivePanel.classList.add('active');
            }
          }

          var self = _this2;
          dynamicTabBar.listen('MDCTabBar:change', function (_ref) {
            var tabs = _ref.detail;

            var nthChildIndex = tabs.activeTabIndex;
            console.log('child index..' + nthChildIndex);
            updatePanel(self, nthChildIndex);
            //updateDot(nthChildIndex);
          });

          // scrollable?
          if (_this2.props.scroll) {
            window.tabBarScroller = new mdc.tabs.MDCTabBarScroller(document.querySelector('#' + _this2.props.id));
            window.tabBarScroller.layout();
            window.tabBarScroller.tabBar.layout();
          }

          _this2.setState({ render: true });
        }, 200);
      }).catch(function (err) {
        alert('injection error ' + err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // <nav id="scrollable-tab-bar" className="mdc-tab-bar mdc-tab-bar-scroller__scroll-frame__tabs">
      var className = this.props.scroll ? 'mdc-tab-bar-scroller__scroll-frame__tabs' : 'mdc-tab-bar mdc-tab-bar--indicator-accent';
      var scrollPre = '';
      var scrollPost = '';
      var tabContent = _react2.default.createElement(
        'nav',
        { id: this.props.id, style: { textAlign: 'left' }, className: className, role: 'tablist' },
        this.props.children,
        _react2.default.createElement('span', { className: 'mdc-tab-bar__indicator' })
      );

      if (this.props.scroll) {
        className = 'mdc-tab-bar mdc-tab-bar-scroller__scroll-frame__tabs';
        // need extra divs for scrolling

        var scrollContent = _react2.default.createElement(
          'div',
          { id: this.props.id, className: 'mdc-tab-bar-scroller' },
          _react2.default.createElement(
            'div',
            { className: 'mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back' },
            _react2.default.createElement(
              'a',
              { className: 'mdc-tab-bar-scroller__indicator__inner material-icons', href: '#', 'aria-label': 'scroll back button' },
              'navigate_before'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'mdc-tab-bar-scroller__scroll-frame' },
            _react2.default.createElement(
              'nav',
              { id: this.props.id, style: { textAlign: 'left' }, className: className, role: 'tablist' },
              this.props.children,
              _react2.default.createElement('span', { className: 'mdc-tab-bar__indicator' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward' },
            _react2.default.createElement(
              'a',
              { className: 'mdc-tab-bar-scroller__indicator__inner material-icons', href: '#', 'aria-label': 'scroll forward button' },
              'navigate_next'
            )
          )
        );

        tabContent = scrollContent;
      }

      return _react2.default.createElement(
        'div',
        null,
        tabContent
      );
    }
  }]);

  return Tabs;
}(_MUIBase3.default);

exports.default = Tabs;

/*
<div id="tab-bar-scroller" className="mdc-tab-bar-scroller">
            <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back">
              <a className="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll back button">
                navigate_before
              </a>
            </div>
            <div className="mdc-tab-bar-scroller__scroll-frame">
              <nav id="scrollable-tab-bar" className="mdc-tab-bar mdc-tab-bar-scroller__scroll-frame__tabs">
                <a className="mdc-tab mdc-tab--active" href="#one">Item One</a>
                <a className="mdc-tab" href="#two">Item Two</a>
                <a className="mdc-tab" href="#three">Item Three</a>
                <a className="mdc-tab" href="#four">Item Four</a>
                <a className="mdc-tab" href="#five">Item Five</a>
                <a className="mdc-tab" href="#six">Item Six</a>
                <a className="mdc-tab" href="#seven">Item Seven</a>
                <a className="mdc-tab" href="#eight">Item Eight</a>
                <a className="mdc-tab" href="#nine">Item Nine</a>
                <span className="mdc-tab-bar__indicator"></span>
              </nav>
            </div>
            <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
              <a className="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll forward button">
                navigate_next
              </a>
            </div>
          </div>



*/

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MUIBase2 = __webpack_require__(1);

var _MUIBase3 = _interopRequireDefault(_MUIBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Switch
 * 
 * Props:
 * 
 */

var Typography = function (_MUIBase) {
  _inherits(Typography, _MUIBase);

  function Typography(props) {
    _classCallCheck(this, Typography);

    return _possibleConstructorReturn(this, (Typography.__proto__ || Object.getPrototypeOf(Typography)).call(this, props));
  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  _createClass(Typography, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'span',
        { style: this.props.style, className: 'mdc-typography--' + this.props.font },
        this.props.children
      );
    }
  }]);

  return Typography;
}(_MUIBase3.default);

exports.default = Typography;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__(3);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Drawer = __webpack_require__(5);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Theme = __webpack_require__(2);

var _Theme2 = _interopRequireDefault(_Theme);

var _Toolbar = __webpack_require__(8);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderEx = function (_React$Component) {
  _inherits(HeaderEx, _React$Component);

  function HeaderEx(props) {
    _classCallCheck(this, HeaderEx);

    return _possibleConstructorReturn(this, (HeaderEx.__proto__ || Object.getPrototypeOf(HeaderEx)).call(this, props));
  }

  _createClass(HeaderEx, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _AppBar2.default,
          null,
          _react2.default.createElement(
            _Toolbar2.default,
            { title: 'ReactMaterial v 0.1 Examples' },
            _react2.default.createElement(
              'a',
              { href: '#', className: 'material-icons mdc-toolbar__icon', 'aria-label': 'Settings', alt: 'Settings' },
              'settings'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'material-icons mdc-toolbar__icon', 'aria-label': 'Download', alt: 'Download' },
              'file_download'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'material-icons mdc-toolbar__icon', 'aria-label': 'Print this page', alt: 'Print this page' },
              'print'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'material-icons mdc-toolbar__icon', 'aria-label': 'Bookmark this page', alt: 'Bookmark this page' },
              'bookmark'
            )
          ),
          _react2.default.createElement(
            _Drawer2.default,
            { title: 'My drawer menu', type: 'temporary' },
            _react2.default.createElement(
              'div',
              { className: 'mdc-list' },
              _react2.default.createElement(
                'a',
                { className: 'mdc-list-item mdc-temporary-drawer--selected', href: '#' },
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                  'inbox'
                ),
                'Inbox - updated2'
              ),
              _react2.default.createElement(
                'a',
                { className: 'mdc-list-item', href: '#' },
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                  'star'
                ),
                'Star'
              ),
              _react2.default.createElement(
                'a',
                { className: 'mdc-list-item', href: '#' },
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                  'send'
                ),
                'Sent Mail'
              ),
              _react2.default.createElement(
                'a',
                { className: 'mdc-list-item', href: '#' },
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                  'drafts'
                ),
                'Drafts'
              )
            ),
            _react2.default.createElement('hr', { className: 'mdc-list-divider' }),
            _react2.default.createElement(
              'div',
              { className: 'mdc-list' },
              _react2.default.createElement(
                'a',
                { className: 'mdc-list-item', href: '#' },
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                  'email'
                ),
                'All Mail'
              ),
              _react2.default.createElement(
                'a',
                { className: 'mdc-list-item', href: '#' },
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                  'delete'
                ),
                'Trash'
              ),
              _react2.default.createElement(
                'a',
                { className: 'mdc-list-item', href: '#' },
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                  'report'
                ),
                'Spam'
              )
            )
          )
        )
      );
    }
  }]);

  return HeaderEx;
}(_react2.default.Component);

exports.default = HeaderEx;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AppBar = __webpack_require__(3).default;
exports.AppBar = AppBar;

var Button = __webpack_require__(4).default;
exports.Button = Button;

var Card = __webpack_require__(9).default;
exports.Card = Card;

var Checkbox = __webpack_require__(10).default;
exports.Checkbox = Checkbox;

var Colourizer = __webpack_require__(11).default;
exports.Colourizer = Colourizer;

var Dialog = __webpack_require__(12).default;
exports.Dialog = Dialog;

var Drawer = __webpack_require__(5).default;
exports.Drawer = Drawer;

var Grid = __webpack_require__(13).default;
exports.Grid = Grid;

var List = __webpack_require__(14).default;
exports.List = List;

var ListItem = __webpack_require__(15).default;
exports.ListItem = ListItem;

var Menus = __webpack_require__(6).default;
exports.Menus = Menus;

var Progress = __webpack_require__(16).default;
exports.Progress = Progress;

var Radio = __webpack_require__(17).default;
exports.Radio = Radio;

var Select = __webpack_require__(18).default;
exports.Select = Select;

var Slider = __webpack_require__(19).default;
exports.Slider = Slider;

var Snackbar = __webpack_require__(20).default;
exports.Snackbar = Snackbar;

var Switch = __webpack_require__(21).default;
exports.Switch = Switch;

var TabDetail = __webpack_require__(22).default;
exports.TabDetail = TabDetail;

var Tabs = __webpack_require__(23).default;
exports.Tabs = Tabs;

var TextField = __webpack_require__(7).default;
exports.TextField = TextField;

var Theme = __webpack_require__(2).default;
exports.Theme = Theme;

var Toolbar = __webpack_require__(8).default;
exports.Toolbar = Toolbar;

var Typography = __webpack_require__(24).default;
exports.Typography = Typography;

/***/ })
/******/ ]);
});