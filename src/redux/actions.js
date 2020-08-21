import * as AT from "./action-types";

//**=======ROOMS=======*/
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
export const setSearchTerm = (searchTerm) => ({
  type: AT.SET_SEARCH_TERM,
  searchTerm,
});
export const setPost = (currentPost) => ({
  type: AT.SET_POST,
  currentPost,
});
//**=======USERS=======*/
export const setUser = (user) => ({
  type: AT.SET_USER,
  user,
});
export const setLoading = (isLoading) => ({
  type: AT.SET_LOADING,
  isLoading,
});

export const setUserSubscribedRooms = (subscribedRooms) => ({
  type: AT.SET_USER_SUBSCRIPTIONS,
  subscribedRooms,
});
//**=======DB=======*/
export const dbAddRooms = (rooms) => {
  return {
    type: AT.DB_ADD_ROOMS,
    rooms,
  };
};
export const dbAddPosts = (posts) => ({
  type: AT.DB_ADD_POSTS,
  posts,
});
export const dbAddComments = (comments) => ({
  type: AT.DB_ADD_COMMENTS,
  comments,
});
