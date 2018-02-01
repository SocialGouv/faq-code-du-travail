import styled from "styled-components";
import highlighter from "document-highlighter";
import { Block } from "./components";

highlighter.defaultOptions.before = `<span style="background:yellow">`;
highlighter.defaultOptions.after = "</span>";
highlighter.defaultOptions.language = "fr";

export const Contexte = styled.div`
  font-size: 1.3em;
  font-weight: bold;
`;

export const Question = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin: 15x 0 20px 0;
  line-height: 1.5em;
  border-left: 1px solid silver;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Reponse = styled.div`
  font-size: 1.1em;
  line-height: 1.4em;
  text-align: justify;
`;

const HightLightDiv = ({ text, query, style }) => (
  <div style={style} dangerouslySetInnerHTML={{ __html: highlighter.html(text || "", query).html }} />
);

const Result = ({ style, showTheme, showBranche, question, reponse, theme, branche, query }) => {
  const categoryStyle = { margin: "10px 0", fontWeight: "normal", fontSize: "0.8em" };
  return (
    <Block style={style}>
      <Contexte>
        {showTheme && <HightLightDiv style={categoryStyle} text={`▶  <b>Thème :</b> ${theme}`} query={query} />}
        {showBranche && <HightLightDiv style={categoryStyle} text={`▶  <b>Branche :</b> ${branche}`} query={query} />}
      </Contexte>
      <Question>{<HightLightDiv text={question} query={query} />}</Question>
      <Reponse>
        <HightLightDiv text={reponse} query={query} />
      </Reponse>
    </Block>
  );
};

export default Result;
