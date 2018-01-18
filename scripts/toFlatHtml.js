const unified = require("unified");
const markdown = require("remark-parse");
const toc = require("remark-toc");
const remark2rehype = require("remark-rehype");
const doc = require("rehype-document");
const format = require("rehype-format");
const slug = require("rehype-slug");
const html = require("rehype-stringify");
const wrap = require("rehype-wrap");

const toFlatHtml = text => {
  return unified()
    .use(markdown)
    .use(toc, { heading: "sommaire", maxDepth: 3 })
    .use(remark2rehype)
    .use(doc, {
      title: "FAQ",
      responsive: true,
      language: "fr",
      css: ["./style.css"]
    })
    .use(format)
    .use(slug)
    .use(wrap, { wrapper: "div.content" })
    .use(html)
    .processSync(text)
    .toString();
};

module.exports = toFlatHtml;
