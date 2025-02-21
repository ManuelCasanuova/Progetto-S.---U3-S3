export const SELECT_TRACK = "SELECT_TRACK";

export const selectTrackAction = (track) => {
  return {
    type: SELECT_TRACK,
    payload: track,
  };
};
