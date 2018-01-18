const unified = require("unified");
const markdown = require("remark-parse");
const remark2rehype = require("remark-rehype");
const stringify = require("rehype-stringify");
const toHTML = require("hast-util-to-html");

/*
  convert some markdown into json
  assume pre-defined markdown conventions
*/

const toJson = text => {
  const isTag = (type, depth = 1) => tag => tag.type === type && tag.depth === depth;

  const result = [];
  let lastQuestion = {};

  const pushQuestion = () => {
    if (lastQuestion.reponse) {
      if (lastQuestion.theme && lastQuestion.branche && lastQuestion.reponse) {
        result.push(lastQuestion);
      }

      lastQuestion = {
        reponse: "",
        theme: lastQuestion.theme,
        branche: lastQuestion.branche
      };
    }
  };

  const getContent = node => {
    content = node.value;
    node.children.forEach(child => {
      content += child.value || "";
    });
  };

  const tree = unified()
    .use(markdown)
    .parse(text);

  tree.children.forEach(item => {
    let theme, branche;
    if (isTag("heading", 2)(item)) {
      theme = item.children[0].value;
      if (theme === "Sommaire" || theme === "Introduction") {
        return;
      }
      pushQuestion();
      lastQuestion.theme = theme;
    } else if (isTag("heading", 3)(item)) {
      pushQuestion();
      branche = item.children[0].value;
      lastQuestion.branche = branche;
    } else if (isTag("heading", 4)(item)) {
      pushQuestion();
      title = item.children[0].value;
      lastQuestion.question = title;
    } else {
      unified()
        .use(remark2rehype)
        .use(stringify)
        .run(item, function(err, node, file) {
          lastQuestion.reponse += toHTML(node);
        });
    }
  });

  pushQuestion();

  return JSON.stringify(result, null, 2);
};

module.exports = toJson;
