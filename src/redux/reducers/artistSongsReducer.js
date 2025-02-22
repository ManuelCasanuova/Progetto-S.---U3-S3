import { SET_ARTIST_SONG } from "../actions";

const initialState = {
  artistSongs: [],
};

const artistSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST_SONG:
      return {
        ...state,
        artistSongs: action.payload,
      };
    default:
      return state;
  }
};

export default artistSongsReducer;
