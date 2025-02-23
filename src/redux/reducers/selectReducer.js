import { SELECT_TRACK } from "../actions";

const initialState = {
  selectedTrack: null,
};

const selectedTrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TRACK:
      return {
        ...state,
        selectedTrack: action.payload,
      };
    default:
      return state;
  }
};

export default selectedTrackReducer;
