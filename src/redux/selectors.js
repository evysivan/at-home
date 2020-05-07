export const getCurrentRoom = (state) => state.currentRoom;
export const getAllRooms = (state) => state.rooms;
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
