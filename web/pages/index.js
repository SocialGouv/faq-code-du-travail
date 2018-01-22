//import { Grid, Cell } from "styled-css-grid";

import styled from "styled-components";
import { Sommaire, Results, ResultsTitle, Result, WelcomeText } from "../src/components";

const faqData = require("../data/faq.json");

// extract unique sorted keys from given array
const extractKeys = (arr, key) => {
  const keys = Object.keys(arr.reduce((a, c) => ({ ...a, [c[key]]: true }), {}));
  keys.sort();
  return keys;
};

// CSS grid layouts
const layout = `
  "intro branches"
  "themes branches"
  "resultats resultats"
`;

const layoutMobile = `
  "intro"
  "branches"
  "themes"
  "resultats"
`;

const Grid = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  width: 100%;
  height: auto;
  grid-template-areas: ${layout};
  @media only screen and (max-width: 700px) {
    grid-template-areas: ${layoutMobile};
  }
`;

const Intro = styled.div`
  text-align: center;
  grid-area: intro;
`;

const Themes = styled.div`grid-area: themes;`;

const Branches = styled.div`grid-area: branches;`;

const Resultats = styled.div`
  text-align: center;
  grid-area: resultats;
`;
const sortByKey = (key, a, b) => {
  if (a[key] > b[key]) {
    return 1;
  } else if (a[key] < b[key]) {
    return -1;
  }
  return 0;
};

const resultSorter = isThemeFiltered => (a, b) => {
  const key = isThemeFiltered ? "branche" : "theme";
  return sortByKey(key, a, b);
};

export default class extends React.Component {
  state = {
    theme: null,
    branche: null
  };

  static async getInitialProps({ req }) {
    return { faq: faqData };
  }

  updateSelection = (key, value) => {
    if (this.state[key] === value) {
      this.setState({ branche: null, theme: null });
    } else {
      var key2 = key === "branche" ? "theme" : "branche";
      this.setState({ [key]: value, [key2]: null });
    }
  };

  render() {
    const { faq } = this.props;
    const hasSelection = this.state.theme || this.state.branche;
    const isCurrentTheme = entry => !hasSelection || (entry.theme && entry.theme === this.state.theme);
    const isCurrentBranche = entry => !hasSelection || (entry.branche && entry.branche === this.state.branche);
    const branches = extractKeys(faq, "branche");
    const themes = extractKeys(faq, "theme");
    const results = faq.filter(x => isCurrentTheme(x) || isCurrentBranche(x));
    results.sort(resultSorter(!!this.state.theme));
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>F.A.Q. Code du travail</h1>
        <Grid>
          <Intro>
            <WelcomeText />
          </Intro>
          <Branches>
            <Sommaire
              title="Branches"
              selected={this.state.branche}
              entries={branches}
              onClick={entry => this.updateSelection("branche", entry)}
            />
          </Branches>
          <Themes>
            <Sommaire
              title="Thèmes"
              selected={this.state.theme}
              entries={themes}
              onClick={entry => this.updateSelection("theme", entry)}
            />
          </Themes>
        </Grid>
        <Results>
          <ResultsTitle>{this.state.theme || this.state.branche || "Toutes les questions"}</ResultsTitle>
          <ResultsTitle small>
            {results.length} résultat{results.length > 1 ? "s" : ""}
          </ResultsTitle>
          <br />
          <br />
          {results.map((res, i) => (
            <Result
              style={{ marginBottom: 10 }}
              showBranche={!this.state.branche}
              showTheme={!this.state.theme}
              key={res.reponse + i}
              {...res}
            />
          ))}
        </Results>
      </div>
    );
  }
}
