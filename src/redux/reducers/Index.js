import { TRACK_IMPORTATION } from "../actions";

const initialState = {
  content: [],
};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRACK_IMPORTATION:
      return {
        ...state,
        content: [action.payload],
      };
    default:
      return state;
  }
};

export default tracksReducer;
