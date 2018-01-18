const fs = require("fs");
const toFlatHtml = require("./scripts/toFlatHtml");
const toJson = require("./scripts/toJson");

//const markdown = require("./index.md");
const markdown = fs.readFileSync("./index.md").toString();

const json = toJson(markdown);
const html = toFlatHtml(markdown);

module.exports = {
  json,
  html
};

// log basic HTML
//console.log(html);

// log JSON data
console.log(json);
