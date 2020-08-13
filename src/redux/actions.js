import * as AT from "./action-types";

export const setRoom = (room) => ({
  type: AT.SET_ROOM,
  payload: room,
});
export const voteUp = (postId) => ({
  type: AT.VOTE_UP,
  payload: postId,
});
export const voteDown = (postId) => ({
  type: AT.VOTE_DOWN,
  payload: postId,
});
export const setSortCriteria = (criteria) => ({
  type: AT.SORT_THREADS_CRITERIA,
  criteria,
});
export const addRoomSubscription = (roomId) => ({
  type: AT.ADD_SUBSCRIPTION,
  roomId,
});
export const removeRoomSubscription = (roomId) => ({
  type: AT.REMOVE_SUBSCRIPTION,
  roomId,
});
export const setSearchTerm = (searchTerm) => ({
  type: AT.SET_SEARCH_TERM,
  searchTerm,
});
export const setPost = (currentPost) => ({
  type: AT.SET_POST,
  currentPost,
});
export const setUser = (user) => ({
  type: AT.SET_USER,
  user,
});
export const setLoading = (isLoading) => ({
  type: AT.SET_LOADING,
  isLoading,
});

//**=======DB=======*/
export const dbSetRooms = (rooms) => ({
  type: AT.DB_SET_ROOMS,
  rooms,
});
export const dbSetPosts = (posts) => ({
  type: AT.DB_SET_POSTS,
  posts,
});
export const dbSetComments = (comments) => ({
  type: AT.DB_SET_COMMENTS,
  comments,
});
