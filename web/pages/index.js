import styled from "styled-components";

import { Sommaire, Results, ResultsTitle, WelcomeText, SearchInput } from "../src/components";
import fuseFilterItems from "../src/filterItems";
import Result from "../src/Result";
import NoResultForm from "../src/NoResultForm";
import SendMessage from "../src/SendMessage";

import faqData from "../data/faq.json";

// extract unique sorted keys from given array
const extractKeys = (arr, key) => {
  const keys = Object.keys(arr.reduce((a, c) => ({ ...a, [c[key]]: true }), {}));
  keys.sort();
  return keys;
};

// CSS grid layouts
const layout = `
  "intro intro"
  "search infos"
  "themes resultats"
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

const Grid = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
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

const Intro = styled.div`grid-area: intro;`;

const Themes = styled.div`grid-area: themes;`;

const Branches = styled.div`grid-area: branches;`;

const Resultats = styled.div`
  grid-area: resultats;
  grid-row: 3 / span 4;
  @media only screen and (max-width: 700px) {
    grid-row: auto;
  }
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

const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  @media only screen and (max-width: 700px) {
    padding: 10px;
  }
`;

export default class extends React.Component {
  state = {
    theme: null,
    branche: null,
    query: null
  };

  static async getInitialProps({ req }) {
    return { faq: faqData };
  }

  updateSelection = (key, value) => {
    if (this.state[key] === value) {
      this.setState({ branche: null, theme: null, query: null });
    } else {
      var key2 = key === "branche" ? "theme" : "branche";
      this.setState({ [key]: value, [key2]: null, query: null });
    }
  };

  getResults = () => {
    // const NO CACHE
    const { faq } = this.props;
    const hasSelection = this.state.theme || this.state.branche;
    const isCurrentTheme = entry => !hasSelection || (entry.theme && entry.theme === this.state.theme);
    const isCurrentBranche = entry => !hasSelection || (entry.branche && entry.branche === this.state.branche);
    const results = faq.filter(x => isCurrentTheme(x) || isCurrentBranche(x));
    const queryResults = (this.state.query && fuseFilterItems(results, this.state.query.trim())) || results || [];
    queryResults.sort(resultSorter(!!this.state.theme));
    return queryResults;
  };

  updateQuery = query =>
    this.setState({
      query,
      branche: null,
      theme: null
    });

  onKeyDown = e => {
    this.debouncedUpdateQuery(e.target.value);
  };

  render() {
    const { faq } = this.props;
    const branches = extractKeys(faq, "branche");
    const themes = extractKeys(faq, "theme");
    const results = this.getResults();
    const resultsTitle =
      (this.state.theme ||
        this.state.branche ||
        (this.state.query && `recherche de "${this.state.query}"`) ||
        "Toutes les questions") + ` : ${results.length} résultat${results.length > 1 ? "s" : ""}`;

    return (
      <Container>
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
          <div style={{ gridArea: "search" }}>
            <SearchInput
              placeholder="ex: durée du travail pour un cuisinier"
              minLength={2}
              value={this.state.query || ""}
              debounceTimeout={300}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
          <ResultsTitle style={{ gridArea: "infos" }}>{resultsTitle}</ResultsTitle>
          <Resultats>
            {results.map((res, i) => (
              <Result
                query={this.state.query}
                style={{ marginBottom: 10 }}
                showBranche={!this.state.branche}
                showTheme={!this.state.theme}
                key={res.reponse + i}
                {...res}
              />
            ))}
            {!results.length && <NoResultForm />}
          </Resultats>
        </Grid>
      </Container>
    );
  }
}
