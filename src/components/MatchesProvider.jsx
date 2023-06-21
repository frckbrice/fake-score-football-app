import { useReducer, useCallback, useContext } from "react";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import MatchContext from "./MatchContext";
import { Set as set } from "./useLocalStorage";

const defaultMatchState = {
  matches: [],
};

const matchReducer = (state, action) => {
  //*ADD
  if (action.type === "ADD") {
    console.log("%cin Context Match  before ADD func", "color:red");
    state.matches.push(action.match);
    const matches = [...state.matches];
    console.log(
      "%cin Context Match  before ADD func the matches is ",
      "color:red",
      matches
    );
    set(matches, matches);
    toast.success(`Match added successfully`);
    return matches;
  }

  console.log("%cOut of ADD func the matches is ", "color:red", state.matches);

  //*REMOVE
  if (action.type === "REMOVE") {
    const existingMatch = state.matches?.find(
      (match) => match.id === action.id
    );
    if (existingMatch) {
      state.matches = state.matches?.filter((match) => match.id !== action.id);
    }
    const matches = [...state.matches];
    set(matches, matches);
    toast.success(`Match removed successfully`);
    return matches;
  }

  //*UPDATE/EDIT
  if (action.type === "UPDATE") {
    const existingMatch = state.matches?.find(
      (item) => item.id === action.payload.id
    );
    let matches;
    if (existingMatch) {
      const updatedMatches = state.matches?.filter(
        (match) => match.id !== existingMatch.id
      );
      matches = [...updatedMatches, action.payload.match];
      set(matches, matches);
      toast.success(`Match successfully added`);
      return matches;
    }
    matches = [...state.matches];
    set(matches, matches);
    toast.success(`Match already exist`);
    return matches;
  }

  if (action.type === "CLEAR") {
    state.matches = [];
    const matches = state.matches;
    set(matches, matches);
    toast.success(`All Match cleared successfully`);
    return matches;
  }
  if (action.type === "CONFIRMED") {
    const updateMatches = state.matches?.map((match) =>
      match.id === action.id ? { ...match, confirmed: !match.confirmed } : match
    );
    const matches = [...updateMatches];
    set(matches, matches);
    toast.success(`All Match cleared successfully`);
    return matches;
  }
};

const MatchesContextProvider = ({ children }) => {
  const [matchesState, dispatchMatch] = useReducer(
    matchReducer,
    defaultMatchState
  );

  const addMatchHandler = (match) => {
    dispatchMatch({ type: "ADD", match: match });
  };

  const removeMatchHandler = (id) => {
    dispatchMatch({ type: "REMOVE", id: id });
  };

  const updateMatchHandler = (id, match) => {
    dispatchMatch({ type: "UPDATE", payload: { id, match } });
  };

  const getScoreHandler = (id) => {
    dispatchMatch({ type: "SCORE", id: id });
  };

  const clearAllHandler = () => {
    dispatchMatch({ type: "CLEAR" });
  };

  const toggleMatchconfirmHandler = (id) => {
    dispatchMatch({ type: "CONFIRMED", id: id });
  };

  const values = {
    matches: matchesState.matches,
    addMatch: addMatchHandler,
    removeMatch: removeMatchHandler,
    getScore: getScoreHandler,
    changeMatch: updateMatchHandler,
    clearAll: clearAllHandler,
    toggleMatchconfirm: toggleMatchconfirmHandler,
  };

  return (
    <MatchContext.Provider value={values}>{children}</MatchContext.Provider>
  );
};

MatchesContextProvider.propTypes = {
  addMatch: PropTypes.func,
  removeMatch: PropTypes.func,
  updateMatch: PropTypes.func,
  addMatchHandler: PropTypes.func,
  removeMatchHandler: PropTypes.func,
  id: PropTypes.string,
};

export default MatchesContextProvider;
