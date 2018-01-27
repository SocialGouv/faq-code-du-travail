import styled from "styled-components";
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
