import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const SearchInput = styled(DebounceInput)`
  font-size: 1em;
  padding: 10px 5px;
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

export const SommaireEntries = styled.div`margin: 0;`;

export const SommaireEntry = styled.div`
  cursor: pointer;
  line-height: 2em;
  overflow: hidden;
  height: 2em;
  text-overflow: ellipsis;
  white-space: nowrap;
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

export const ResultsTitle = styled.div`
  text-align: center;
  font-size: 1.6em;
  line-height: 2em;
`;

export const Block = styled.div`
  padding: 20px;
  background: #fafafa;
  border: 1px solid silver;
  color: black;
  border-radius: 2px;
  box-sizing: border-box;
  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 700px) {
    padding: 10px;
  }
`;

const capitalize = string => {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.substring(1);
};

export const WelcomeText = () => (
  <Block style={{ padding: "10px 30px", textAlign: "center" }}>
    <h2>Bienvenue sur la F.A.Q. du code du travail</h2>
    <p style={{ fontSize: "1.2em", lineHeight: "1.5em" }}>
      55 réponses aux questions les plus fréquemment posées
    </p>
  </Block>
);

export const Sommaire = ({ title, selected, entries, onClick }) => (
  <Block style={{ padding: 10 }}>
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
