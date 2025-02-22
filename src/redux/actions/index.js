export const SELECT_TRACK = "SELECT_TRACK";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";
export const SET_ARTIST_SONG = "SET_ARTIST_SONG";

export const selectTrackAction = (track) => {
  return {
    type: SELECT_TRACK,
    payload: track,
  };
};

export const addToFavoritesAction = (track) => ({
  type: ADD_TO_FAVORITES,
  payload: track,
});

export const removeFromFavoritesAction = (trackId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: trackId,
});

export const searchReducerAction = (localSearch) => {
  console.log("SONO IL NOME DELL'ARTISTA", localSearch);
  return {
    type: UPDATE_SEARCH_TERM,
    payload: localSearch,
  };
};

export const setArtistSongAction = (localSearch) => {
  return async (dispatch) => {
    try {
      console.log(localSearch);
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${localSearch}`);

      if (response.ok) {
        const risultati = await response.json();
        console.log("Risultati", risultati);

        dispatch({
          type: SET_ARTIST_SONG,
          payload: risultati.data,
        });
        console.log("Risultati disp", risultati.data);
      } else {
        console.log("Errore nella risposta dell'API");
      }
    } catch (error) {
      console.log("Errore nella ricerca dell'artista:", error);
    }
  };
};
