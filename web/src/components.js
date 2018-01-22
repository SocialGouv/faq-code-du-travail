import styled from "styled-components";
import highlighter from "document-highlighter";
import { DebounceInput } from "react-debounce-input";

export const SearchInput = styled(DebounceInput)`
  font-size: 1.5em;
  padding: 10px 20px;
  text-align: center;
  border-radius: 3px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  max-width: 600px;
  display: block;
`;

export const SommaireTitle = styled.div`
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 10px;
  @media screen and (max-width: 700px) {
    font-size: 1.3em;
  }
`;

export const SommaireEntries = styled.div`margin: 0 20px;`;

export const SommaireEntry = styled.div`
  cursor: pointer;
  line-height: 2em;
  &::before {
    content: "▶";
    margin-right: 5px;
    color: #ddd;
  }
  &:hover {
    &::before {
      color: black;
    }
  }

  ${props =>
    props.selected
      ? `
    font-weight: bold;
     &::before {
      color: black;
    }
    `
      : ``};
`;

export const Contexte = styled.div`
  font-size: 1.3em;
  font-weight: bold;
`;

export const Question = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin: 10px 0;
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

export const Results = styled.div``;

export const ResultsTitle = styled.div`
  text-align: center;
  line-height: 1.5em;
  font-size: ${props => (props.small ? "1.2em" : "1.3em")};
  xfont-weight: bold;x
`;

export const Block = styled.div`
  padding: 20px;
  background: #fafafa;
  border: 1px solid silver;
  color: black;
  border-radius: 2px;
  height: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid silver;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  padding: 5px;
  margin-top: 10px;
  resizable: false;
  outline: none;
`;

export const SubmitButton = styled.button`
  background: #00419c;
  color: white;
  border: 1px solid silver;
  font-size: 1em;
  padding: 5px;
  position: relative;
  right: 0;
  outline: none;
  :hover {
    background: #0056cf;
  }
  :active {
    background: #0061e9;
  }
`;

export const RightAlign = styled.div`
  text-align: right;
  width: 100%;
`;

const capitalize = string => {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.substring(1);
};

export const WelcomeText = () => (
  <Block style={{ padding: "10px 30px" }}>
    <h2>Bienvenue sur la F.A.Q. du code du travail</h2>
    <p style={{ fontSize: "1.2em", lineHeight: "1.5em" }}>55 réponses aux questions les plus fréquemment posées</p>
  </Block>
);

export const Sommaire = ({ title, selected, entries, onClick }) => (
  <Block>
    <SommaireTitle>{title}</SommaireTitle>
    <SommaireEntries>
      {entries.map(entry => (
        <SommaireEntry selected={selected === entry} key={entry} onClick={() => onClick(entry)}>
          {capitalize(entry)}
        </SommaireEntry>
      ))}
    </SommaireEntries>
  </Block>
);

highlighter.defaultOptions.before = `<span style="background:yellow">`;
highlighter.defaultOptions.after = "</span>";
highlighter.defaultOptions.language = "fr";

const HightLightDiv = ({ text, query, style }) => (
  <div style={style} dangerouslySetInnerHTML={{ __html: highlighter.html(text || "", query).html }} />
);

export const Result = ({ style, showTheme, showBranche, question, reponse, theme, branche, query }) => {
  //console.log("highlighter.html(reponse, query)", highlighter.html(theme, query));
  return (
    <Block style={style}>
      <Contexte>
        {showTheme && <HightLightDiv text={`▶  Thème : ${theme}`} query={query} />}
        {showBranche && <HightLightDiv text={`▶  Branche : ${branche}`} query={query} />}
      </Contexte>
      <Question>{<HightLightDiv text={question} query={query} />}</Question>
      <Reponse>
        <HightLightDiv text={reponse} query={query} />
      </Reponse>
    </Block>
  );
};

export const SendMessage = () => (
  <Block style={{ padding: "10px 20px" }}>
    <Textarea placeholder="Posez votre question" defaultValue="" />
    <RightAlign>
      <SubmitButton>Envoyer</SubmitButton>
    </RightAlign>
  </Block>
);
