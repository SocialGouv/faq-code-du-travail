"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _document = require("next/dist/server/document.js");

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  * {\n    font-family:  \"Opensans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Verdana, sans-serif\n  }\n  body {\n    background: #00419c;\n    margin: 0;\n    padding: 0;\n  }\n  table {\n    padding: 0;\n    border-collapse: collapse;\n    min-width: 50vh;\n  }\n  table th {\n    padding: 3px;\n    border: 1px solid silver;\n    background: #eee;\n  }\n  table td {\n    padding: 3px;\n    border: 1px solid silver;\n  }\n"], ["\n  * {\n    font-family:  \"Opensans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Verdana, sans-serif\n  }\n  body {\n    background: #00419c;\n    margin: 0;\n    padding: 0;\n  }\n  table {\n    padding: 0;\n    border-collapse: collapse;\n    min-width: 50vh;\n  }\n  table th {\n    padding: 3px;\n    border: 1px solid silver;\n    background: #eee;\n  }\n  table td {\n    padding: 3px;\n    border: 1px solid silver;\n  }\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  color: white;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0;\n"], ["\n  color: white;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0;\n"]);

(0, _styledComponents.injectGlobal)(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2);

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("html", null, _react2.default.createElement(_document.Head, null, _react2.default.createElement("title", null, "F.A.Q. Code du travail"), _react2.default.createElement("link", { rel: "shortcut icon", type: "image/x-icon", href: "/static/assets/favicon.ico" }), this.props.styleTags), _react2.default.createElement("body", null, _react2.default.createElement(Container, null, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(App, props));
        };
      });
      var styleTags = sheet.getStyleElement();
      return (0, _extends3.default)({}, page, { styleTags: styleTags });
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;