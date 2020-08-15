import * as AT from "./action-types";
import mockThreads from "../mockThreads";
import mockRooms from "../roomMock";
import mockComments from "../mockComments";
import _ from "lodash";

const initialState = {
  isLoading: true,
  currentRoom: "",
  currentPost: "",
  rooms: [],
  threads: [],
  comments: [],
  threadsSort: "Hot",
  subscribedRooms: [],
  searchTerm: "",
  user: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case AT.SET_ROOM:
      return {
        ...state,
        currentRoom: action.payload,
      };
    case AT.VOTE_UP:
      return {
        ...state,
        threads: state.threads.map((thread) => {
          if (thread.id === action.payload)
            return { ...thread, votes: thread.votes + 1 };
          return thread;
        }),
      };
    case AT.VOTE_DOWN:
      return {
        ...state,
        threads: state.threads.map((thread) => {
          if (thread.id === action.payload)
            return { ...thread, votes: thread.votes - 1 };
          return thread;
        }),
      };
    case AT.SORT_THREADS_CRITERIA:
      //   let threads = state.threads;

      //   if (action.criteria === "Hot" || action.criteria === "Viewed") {
      //     threads = state.threads.sort((a, b) => (a.votes > b.votes ? -1 : 1));
      //   } else if (action.criteria === "Latest") {
      //     threads = state.threads.sort((a, b) =>
      //       a.details.time > b.details.time ? -1 : 1
      //     );
      //   }

      return {
        ...state,
        threadsSort: action.criteria,
        // threads,
      };
    case AT.ADD_SUBSCRIPTION:
      return {
        ...state,
        subscribedRooms: [...state.subscribedRooms, action.roomId],
      };
    case AT.REMOVE_SUBSCRIPTION:
      return {
        ...state,
        subscribedRooms: state.subscribedRooms.filter(
          (item) => item !== action.roomId
        ),
      };
    case AT.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case AT.SET_POST:
      return {
        ...state,
        currentPost: action.currentPost,
      };
    case AT.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case AT.DB_ADD_ROOMS:
      const stateRooms = state.rooms;
      console.log([].concat(state.rooms, action.rooms));

      return {
        ...state,
        rooms: action.rooms,
      };
    case AT.DB_ADD_POSTS:
      return {
        ...state,
        threads: [...state.threads, ...action.posts],
      };
    case AT.DB_ADD_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, ...action.comments],
      };
    default:
      return state;
  }
};

export default rootReducer;
