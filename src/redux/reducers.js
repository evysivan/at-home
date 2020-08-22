import * as AT from "./action-types";
import _ from "lodash";

const initialState = {
  isLoading: true,
  currentRoom: "",
  currentPost: "",
  rooms: [],
  posts: [],
  comments: [],
  postsSort: "Hot",
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
        posts: state.posts.map((thread) => {
          if (thread.id === action.payload)
            return { ...thread, votes: thread.votes + 1 };
          return thread;
        }),
      };
    case AT.VOTE_DOWN:
      return {
        ...state,
        posts: state.posts.map((thread) => {
          if (thread.id === action.payload)
            return { ...thread, votes: thread.votes - 1 };
          return thread;
        }),
      };
    case AT.SORT_POSTS_CRITERIA:
      return {
        ...state,
        postsSort: action.criteria,
      };
    case AT.SET_USER_SUBSCRIPTIONS:
      return {
        ...state,
        subscribedRooms: action.subscribedRooms,
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
      return {
        ...state,
        rooms: action.rooms,
      };
    case AT.DB_ADD_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case AT.SET_POSTS_FROM_SUBSCRIBED_ROOMS:
      return {
        ...state,
        posts: action.posts,
      };
    case AT.SET_COMMENTS_OF_POST:
      return {
        ...state,
        comments: action.comments,
      };

    default:
      return state;
  }
};

export default rootReducer;
