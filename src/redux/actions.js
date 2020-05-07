import * as AT from "./action-types";

export const setRoom = (room) => ({
  type: AT.SET_ROOM,
  payload: room,
});
export const voteUp = (threadId) => ({
  type: AT.VOTE_UP,
  payload: threadId,
});
export const voteDown = (threadId) => ({
  type: AT.VOTE_DOWN,
  payload: threadId,
});
export const setSortCriteria = (criteria) => ({
  type: AT.SORT_THREADS_CRITERIA,
  criteria,
});
