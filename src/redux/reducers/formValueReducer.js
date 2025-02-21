import { UPDATE_SEARCH_TERM } from "../actions";

const initialState = {
  searchTerm: "",
};

const searchReducerAction = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducerAction;
