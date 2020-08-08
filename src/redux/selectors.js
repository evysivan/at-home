//**==========Rooms============*/
export const getCurrentRoom = (state) => state.currentRoom;
export const getAllRooms = (state) => state.rooms;
export const getAllSubscribedRooms = (state) => state.subscribedRooms;
export const getCurrentRoomDetails = (state) => {
  if (state.currentRoom) {
    return state.rooms[
      state.rooms.findIndex((room) => room.id === state.currentRoom)
    ];
  }
  return {};
};
export const getAllSubscribedRoomThreads = (state) => {
  const subscriptions = state.subscribedRooms;
  let threads = [...state.threads];
  if (state.threadsSort === "Hot" || state.threadsSort === "Viewed") {
    threads = threads.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  } else if (state.threadsSort === "Latest") {
    threads = threads.sort((a, b) =>
      a.details.time > b.details.time ? 1 : -1
    );
  }

  const subscribedThreads = threads.filter((thread) =>
    subscriptions.includes(thread.room.roomId)
  );

  if (state.currentRoom === "") return subscribedThreads;
  return subscribedThreads.filter(
    (thread) => thread.room.roomId === state.currentRoom
  );
};
export const getSortedThreads = (state) => {
  if (state.threadsSort === "Hot" || state.threadsSort === "Viewed") {
    return state.threads.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  } else if (state.threadsSort === "Latest") {
    return state.threads.sort((a, b) =>
      a.details.time > b.details.time ? -1 : 1
    );
  }
  return state.threads;
};
//**==========Posts============*/
export const getAllThreads = (state) => state.threads;
export const getAllRoomThreads = (state) => {
  let threads = [...state.threads];
  if (state.threadsSort === "Hot" || state.threadsSort === "Viewed") {
    threads = threads.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  } else if (state.threadsSort === "Latest") {
    threads = threads.sort((a, b) =>
      a.details.time > b.details.time ? 1 : -1
    );
  }
  if (state.currentRoom === "") return threads;
  return threads.filter((thread) => thread.room.roomId === state.currentRoom);
};
export const getThreadsSortCriteria = (state) => state.threadsSort;
export const getCurrentPost = (state) => state.currentPost;

//**==========Search============*/
export const getSearchTerm = (state) => state.searchTerm;

//**==========Comments============*/
export const getAllComments = (state) => state.comments;

//**==========Authentication============*/
export const getUser = (state) => state.user;

//**==========Loading============*/
export const getIsLoading = (state) => state.isLoading;
