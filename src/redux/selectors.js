//**==========Rooms============*/
export const getCurrentRoom = (state) => state.currentRoom;
export const getAllRooms = (state) => state.rooms;
export const getAllSubscribedRooms = (state) => state.subscribedRooms;

export const getSortedPosts = (state) => {
  if (state.postsSort === "Hot" || state.postsSort === "Viewed") {
    return state.posts.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  } else if (state.postsSort === "Latest") {
    return state.posts.sort((a, b) => (a.time > b.time ? -1 : 1));
  }
  return state.posts;
};
//**==========Posts============*/
export const getAllPosts = (state) => state.posts;
export const getAllRoomPosts = (state) => {
  let posts = [...state.posts];
  // if (state.postsSort === "Hot" || state.postsSort === "Viewed") {
  //   posts = posts.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  // } else if (state.postsSort === "Latest") {
  //   posts = posts.sort((a, b) => (a.time > b.time ? 1 : -1));
  // }
  if (state.currentRoom === "") return posts;
  return posts.filter((post) => post.room.id === state.currentRoom.id);
};
export const getPostsSortCriteria = (state) => state.postsSort;
export const getCurrentPost = (state) => state.currentPost;

export const getAllSubscribedRoomPosts = (state) => {
  const subscriptions = state.subscribedRooms;
  let posts = [...state.posts];
  if (state.postsSort === "Hot" || state.postsSort === "Viewed") {
    posts = posts.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  } else if (state.postsSort === "Latest") {
    posts = posts.sort((a, b) => (a.time > b.time ? 1 : -1));
  }

  const subscribedPosts = posts.filter((post) =>
    subscriptions.includes(post.room.roomId)
  );

  if (state.currentRoom === "") return subscribedPosts;
  return subscribedPosts.filter(
    (post) => post.room.roomId === state.currentRoom
  );
};

//**==========Search============*/
export const getSearchTerm = (state) => state.searchTerm;

//**==========Comments============*/
export const getAllComments = (state) => state.comments;

//**==========Authentication============*/
export const getUser = (state) => state.user;

//**==========Loading============*/
export const getIsLoading = (state) => state.isLoading;
