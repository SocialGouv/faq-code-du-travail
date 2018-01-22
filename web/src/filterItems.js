import Fuse from "fuse.js";
import memoized from "fast-memoize";

const DEFAULT_FUSE_OPTIONS = {
  shouldSort: true,
  tokenize: true,
  matchAllTokens: true,
  findAllMatches: true,
  threshold: 0.3,
  //verbose: true,
  location: 0,
  distance: 10,
  //maxPatternLength: 32,
  minMatchCharLength: 1,
  // keys: ["question", "reponse", "branche", "theme"]
  keys: [
    {
      name: "question",
      weight: 0.3
    },
    {
      name: "reponse",
      weight: 0.2
    },
    {
      name: "branche",
      weight: 0.3
    },
    {
      name: "theme",
      weight: 0.3
    }
  ]
};

const getInstance = memoized((items, fuseOptions) => {
  const options = Object.assign({}, DEFAULT_FUSE_OPTIONS, fuseOptions);
  return new Fuse(items, options);
});

export function filterItems(items, query, fuseOptions = {}) {
  const options = Object.assign({}, DEFAULT_FUSE_OPTIONS, fuseOptions);
  const fuse = getInstance(items, options);
  if (!query) {
    return [];
  }
  const results = fuse.search(query);
  return results;
}

export default filterItems;
