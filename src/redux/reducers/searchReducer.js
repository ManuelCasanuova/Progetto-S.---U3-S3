import { UPDATE_SEARCH_TERM } from "../actions";

const initialState = {
  search: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      console.log("search aggiornato:", action.payload);
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
