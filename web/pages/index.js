import { Container, Sommaire, ResultsTitle, WelcomeText, SearchInput } from "../src/components";
import { Grid, Intro, Themes, Branches, Resultats, Search } from "../src/Grid";

import fuseFilterItems from "../src/filterItems";
import Result from "../src/Result";
import NoResultForm from "../src/NoResultForm";

import faqData from "../data/faq.json";

// extract unique sorted keys from given array
const extractKeys = (arr, key) => {
  const keys = Object.keys(arr.reduce((a, c) => ({ ...a, [c[key]]: true }), {}));
  keys.sort();
  return keys;
};

const sortByKey = (key, a, b) => {
  if (a[key] > b[key]) {
    return 1;
  } else if (a[key] < b[key]) {
    return -1;
  }
  return 0;
};

// custom sort results
const resultSorter = isThemeFiltered => (a, b) => {
  const key = isThemeFiltered ? "branche" : "theme";
  return sortByKey(key, a, b);
};

export default class extends React.Component {
  state = {
    theme: null,
    branche: null,
    query: null
  };

  // load data
  static async getInitialProps({ req }) {
    return { faq: faqData };
  }

  // user clicked some menu; toggle filters
  updateSelection = (key, value) => {
    if (this.state[key] === value) {
      this.setState({ branche: null, theme: null, query: null });
    } else {
      var key2 = key === "branche" ? "theme" : "branche";
      this.setState({ [key]: value, [key2]: null, query: null });
    }
  };

  getResults = () => {
    // compute results
    const { faq } = this.props;
    const { theme, branche, query } = this.state;
    const hasSelection = theme || branche;
    const isCurrentTheme = entry => !hasSelection || (entry.theme && entry.theme === theme);
    const isCurrentBranche = entry => !hasSelection || (entry.branche && entry.branche === branche);
    const results = faq.filter(entry => isCurrentTheme(entry) || isCurrentBranche(entry));
    const queryResults = (query && fuseFilterItems(results, query.trim())) || results || [];
    queryResults.sort(resultSorter(!!theme));
    return queryResults;
  };

  updateQuery = query =>
    this.setState({
      query,
      branche: null,
      theme: null
    });

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
          <Branches className="bloc--branches">
            <Sommaire
              title="Branches"
              selected={this.state.branche}
              entries={branches}
              onClick={entry => this.updateSelection("branche", entry)}
            />
          </Branches>
          <Themes className="bloc--themes">
            <Sommaire
              title="Thèmes"
              selected={this.state.theme}
              entries={themes}
              onClick={entry => this.updateSelection("theme", entry)}
            />
          </Themes>
          <Search>
            <SearchInput
              className="input--search"
              placeholder="ex: durée du travail pour un cuisinier"
              minLength={2}
              value={this.state.query || ""}
              debounceTimeout={300}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </Search>
          <ResultsTitle className="bloc--results-title" style={{ gridArea: "infos" }}>
            {resultsTitle}
          </ResultsTitle>
          <Resultats className="bloc--resultats">
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
