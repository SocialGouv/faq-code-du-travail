"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledCssGrid = require("styled-css-grid");

var _components = require("../src/components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var faqData = require("../data/faq.json");

// extract unique sorted keys from given array
var extractKeys = function extractKeys(arr, key) {
  var keys = (0, _keys2.default)(arr.reduce(function (a, c) {
    return (0, _extends3.default)({}, a, (0, _defineProperty3.default)({}, c[key], true));
  }, {}));
  keys.sort();
  return keys;
};

var sortByKey = function sortByKey(key, a, b) {
  if (a[key] > b[key]) {
    return 1;
  } else if (a[key] < b[key]) {
    return -1;
  }
  return 0;
};

var resultSorter = function resultSorter(isThemeFiltered) {
  return function (a, b) {
    var key = isThemeFiltered ? "branche" : "theme";
    return sortByKey(key, a, b);
  };
};

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      theme: null,
      branche: null
    }, _this.updateSelection = function (key, value) {
      if (_this.state[key] === value) {
        _this.setState({ branche: null, theme: null });
      } else {
        var _this$setState;

        var key2 = key === "branche" ? "theme" : "branche";
        _this.setState((_this$setState = {}, (0, _defineProperty3.default)(_this$setState, key, value), (0, _defineProperty3.default)(_this$setState, key2, null), _this$setState));
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var faq = this.props.faq;

      var hasSelection = this.state.theme || this.state.branche;
      var isCurrentTheme = function isCurrentTheme(entry) {
        return !hasSelection || entry.theme && entry.theme === _this2.state.theme;
      };
      var isCurrentBranche = function isCurrentBranche(entry) {
        return !hasSelection || entry.branche && entry.branche === _this2.state.branche;
      };
      var branches = extractKeys(faq, "branche");
      var themes = extractKeys(faq, "theme");
      var results = faq.filter(function (x) {
        return isCurrentTheme(x) || isCurrentBranche(x);
      });
      results.sort(resultSorter(!!this.state.theme));
      return _react2.default.createElement("div", null, _react2.default.createElement("h1", { style: { textAlign: "center" } }, "F.A.Q. Code du travail"), _react2.default.createElement(_styledCssGrid.Grid, { columns: "repeat(auto-fit,minmax(400px,1fr))", gap: "2px" }, _react2.default.createElement(_styledCssGrid.Cell, null, _react2.default.createElement(_components.Sommaire, {
        title: "Branches",
        selected: this.state.branche,
        entries: branches,
        onClick: function onClick(entry) {
          return _this2.updateSelection("branche", entry);
        }
      })), _react2.default.createElement(_styledCssGrid.Cell, null, _react2.default.createElement(_components.Sommaire, {
        title: "Th\xE8mes",
        selected: this.state.theme,
        entries: themes,
        onClick: function onClick(entry) {
          return _this2.updateSelection("theme", entry);
        }
      }), _react2.default.createElement(_components.ClickToAction, null))), _react2.default.createElement(_components.Results, null, _react2.default.createElement(_components.ResultsTitle, null, this.state.theme || this.state.branche), _react2.default.createElement(_components.ResultsTitle, null, results.length, " r\xE9sultat", results.length > 1 ? "s" : ""), results.map(function (res, i) {
        return _react2.default.createElement(_components.Result, (0, _extends3.default)({ showBranche: !_this2.state.branche, showTheme: !_this2.state.theme, key: res.reponse + i }, res));
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", { faq: faqData });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;