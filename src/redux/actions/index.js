export const SELECT_TRACK = "SELECT_TRACK";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

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
