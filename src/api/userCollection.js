const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();
var currentUserId = await auth.currentUser.uid;

const userSchema = {
  name: "",
  "subscribed-room": [],
};

export const getUser = () => {};

export const getUserById = (id) => {};

export const getUserSubscribedRooms = () => {};

export const getUserName = () => {};

export const addUser = () => {};
