"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickToAction = exports.Result = exports.Sommaire = exports.RightAlign = exports.SubmitButton = exports.Textarea = exports.Block = exports.ResultsTitle = exports.Results = exports.Reponse = exports.Question = exports.Contexte = exports.SommaireEntry = exports.SommaireEntries = exports.SommaireTitle = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  font-weight: bold;\n  font-size: 1.8em;\n  margin-bottom: 10px;\n"], ["\n  font-weight: bold;\n  font-size: 1.8em;\n  margin-bottom: 10px;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["margin: 0 20px;"], ["margin: 0 20px;"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  cursor: pointer;\n  line-height: 2em;\n  &::before {\n    content: \"\u25B6\";\n    margin-right: 5px;\n    color: #ddd;\n  }\n  &:hover {\n    &::before {\n      color: black;\n    }\n  }\n\n  ", ";\n"], ["\n  cursor: pointer;\n  line-height: 2em;\n  &::before {\n    content: \"\u25B6\";\n    margin-right: 5px;\n    color: #ddd;\n  }\n  &:hover {\n    &::before {\n      color: black;\n    }\n  }\n\n  ", ";\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 1.3em;\n  font-weight: bold;\n"], ["\n  font-size: 1.3em;\n  font-weight: bold;\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 1.2em;\n  font-weight: bold;\n  margin: 10px 0;\n  line-height: 1.5em;\n  border-left: 1px solid silver;\n  padding-left: 20px;\n  padding-right: 20px;\n"], ["\n  font-size: 1.2em;\n  font-weight: bold;\n  margin: 10px 0;\n  line-height: 1.5em;\n  border-left: 1px solid silver;\n  padding-left: 20px;\n  padding-right: 20px;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 1.1em;\n  line-height: 1.4em;\n  text-align: justify;\n"], ["\n  font-size: 1.1em;\n  line-height: 1.4em;\n  text-align: justify;\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)([""], [""]),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(["\n  text-align: center;\n  font-size: 1.6em;\n  font-weight: bold;\n"], ["\n  text-align: center;\n  font-size: 1.6em;\n  font-weight: bold;\n"]),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(["\n  padding: 20px;\n  position: relative;\n  margin: 10px;\n  background: #fafafa;\n  border: 1px solid silver;\n  color: black;\n  border-radius: 3px;\n"], ["\n  padding: 20px;\n  position: relative;\n  margin: 10px;\n  background: #fafafa;\n  border: 1px solid silver;\n  color: black;\n  border-radius: 3px;\n"]),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(["\n  border: 1px solid silver;\n  font-size: 1em;\n  width: 100%;\n  box-sizing: border-box;\n  height: 40px;\n  padding: 5px;\n  margin-top: 10px;\n  resizable: false;\n  outline: none;\n"], ["\n  border: 1px solid silver;\n  font-size: 1em;\n  width: 100%;\n  box-sizing: border-box;\n  height: 40px;\n  padding: 5px;\n  margin-top: 10px;\n  resizable: false;\n  outline: none;\n"]),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(["\n  background: #00419c;\n  color: white;\n  border: 1px solid silver;\n  font-size: 1em;\n  padding: 5px;\n  position: relative;\n  right: 0;\n  outline: none;\n  :hover {\n    background: #0056cf;\n  }\n  :active {\n    background: #0061e9;\n  }\n"], ["\n  background: #00419c;\n  color: white;\n  border: 1px solid silver;\n  font-size: 1em;\n  padding: 5px;\n  position: relative;\n  right: 0;\n  outline: none;\n  :hover {\n    background: #0056cf;\n  }\n  :active {\n    background: #0061e9;\n  }\n"]),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(["\n  text-align: right;\n  width: 100%;\n"], ["\n  text-align: right;\n  width: 100%;\n"]);

var SommaireTitle = exports.SommaireTitle = _styledComponents2.default.div(_templateObject);

var SommaireEntries = exports.SommaireEntries = _styledComponents2.default.div(_templateObject2);

var SommaireEntry = exports.SommaireEntry = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.selected ? "\n    font-weight: bold;\n     &::before {\n      color: black;\n    }\n    " : "";
});

var Contexte = exports.Contexte = _styledComponents2.default.div(_templateObject4);

var Question = exports.Question = _styledComponents2.default.div(_templateObject5);

var Reponse = exports.Reponse = _styledComponents2.default.div(_templateObject6);

var Results = exports.Results = _styledComponents2.default.div(_templateObject7);
var ResultsTitle = exports.ResultsTitle = _styledComponents2.default.div(_templateObject8);

var Block = exports.Block = _styledComponents2.default.div(_templateObject9);

var Textarea = exports.Textarea = _styledComponents2.default.textarea(_templateObject10);

var SubmitButton = exports.SubmitButton = _styledComponents2.default.button(_templateObject11);

var RightAlign = exports.RightAlign = _styledComponents2.default.div(_templateObject12);

var capitalize = function capitalize(string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.substring(1);
};

var Sommaire = exports.Sommaire = function Sommaire(_ref) {
  var title = _ref.title,
      selected = _ref.selected,
      entries = _ref.entries,
      _onClick = _ref.onClick;
  return _react2.default.createElement(Block, null, _react2.default.createElement(SommaireTitle, null, title), _react2.default.createElement(SommaireEntries, null, entries.map(function (entry) {
    return _react2.default.createElement(SommaireEntry, { selected: selected === entry, key: entry, onClick: function onClick() {
        return _onClick(entry);
      } }, capitalize(entry));
  })));
};

var Result = exports.Result = function Result(_ref2) {
  var showTheme = _ref2.showTheme,
      showBranche = _ref2.showBranche,
      question = _ref2.question,
      reponse = _ref2.reponse,
      theme = _ref2.theme,
      branche = _ref2.branche;
  return _react2.default.createElement(Block, null, _react2.default.createElement(Contexte, null, "\u25B6 ", showTheme && theme, showTheme && showBranche && " / ", showBranche && branche), _react2.default.createElement(Question, null, question), _react2.default.createElement(Reponse, { dangerouslySetInnerHTML: { __html: reponse } }));
};

var ClickToAction = exports.ClickToAction = function ClickToAction() {
  return _react2.default.createElement(Block, { style: { padding: "10px 20px" } }, _react2.default.createElement(Textarea, { placeholder: "Posez votre question", defaultValue: "" }), _react2.default.createElement(RightAlign, null, _react2.default.createElement(SubmitButton, null, "Envoyer")));
};