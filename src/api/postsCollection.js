const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();
var currentUserId = await auth.currentUser.uid;

const userSchema = {
  title: "",
  content: "",
  author: "", // reference
  room: "", //reference
  time: "", //Date
  file: "", //Storage Reference
  votes: {
    comprehensive: 0,
    helped: 0,
    detailed: 0,
  },
};

export const getAllPosts = () => {
  // get refereces data
};

export const getPost = () => {
  // get refereces data
};

export const getAllPostsFromSubscribedRooms = (subscribedRooms) => {};

export const addPost = () => {};

export const updatePost = () => {};

export const removePost = () => {};

export const removePost = () => {};

export const addVote = (type) => {};

export const removeVote = (type) => {};

export const getPostFile = (type) => {};
