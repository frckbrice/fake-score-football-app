import { createContext } from "react";

const MatchContext = createContext({
  matches: [],
  getScore: () => {},
  toggleMatchconfirm: () => {},
  addMatch: () => {},
  removeMatch: () => {},
  changeMatch: () => {},
  clearAll: () => {},
});

export default MatchContext;
