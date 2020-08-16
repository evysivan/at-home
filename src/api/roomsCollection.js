const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();
var currentUserId = await auth.currentUser.uid;

const roomSchema = {
  title: "",
};

export const getAlRooms = () => {
  // get refereces data
};

export const getRoom = (id) => {
  // get refereces data
};

export const getAllCommentsFromPosts = (posts) => {};

export const addComment = () => {};

export const updateComment = () => {};

export const removeComment = () => {};

export const addLike = (type) => {};

export const removeLike = (type) => {};

export const getCommentFile = (type) => {};
