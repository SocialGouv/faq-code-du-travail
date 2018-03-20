import styled from "styled-components";

// CSS grid layouts
const layout = `
  " intro     intro  "
  " search    infos  "
  " themes  resultats"
  "branches resultats"
  "branches resultats"
`;

const layoutMobile = `
  "intro"
  "branches"
  "themes"
  "search"
  "infos"
  "resultats"
`;

export const Grid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 3fr;
  xgrid-auto-columns: 100%;
  height: auto;
  grid-template-areas: ${layout};
  @media only screen and (max-width: 700px) {
    grid-template-areas: ${layoutMobile};
    grid-template-columns: 1fr;
    font-size: 0.8em;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }
`;

export const Intro = styled.div`grid-area: intro;`;

export const Themes = styled.div`grid-area: themes;`;

export const Branches = styled.div`grid-area: branches;`;

export const Search = styled.div`grid-area: search;`;

export const Resultats = styled.div`
  grid-area: resultats;
  grid-row: 3 / span 4;
  @media only screen and (max-width: 700px) {
    grid-row: auto;
  }
`;
