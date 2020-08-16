const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();
var currentUserId = await auth.currentUser.uid;

const userSchema = {
  content: "",
  author: "", // reference
  post: "", //reference
  time: "", //Date
  file: "", //Storage Reference
  likes: 0,
};

export const getAllComments = () => {
  // get refereces data
};

export const getComment = (id) => {
  // get refereces data
};

export const getAllCommentsFromPosts = (posts) => {};

export const addComment = () => {};

export const updateComment = () => {};

export const removeComment = () => {};

export const addLike = (type) => {};

export const removeLike = (type) => {};

export const getCommentFile = (type) => {};
