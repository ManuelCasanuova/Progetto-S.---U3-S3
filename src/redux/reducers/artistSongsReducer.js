const initialState = {
  artistSongs: [],
};

const artistSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARTIST_SONGS":
      return {
        ...state,
        artistSongs: action.payload,
      };
    default:
      return state;
  }
};

export default artistSongsReducer;
