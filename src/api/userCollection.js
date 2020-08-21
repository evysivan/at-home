import * as firebase from "firebase";
import { getRoom } from "./roomsCollection";

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

const userSchema = {
  name: "",
  email: "",
  subscribedRooms: [], // array of ids
};

export const getUserByUid = async (userUID) => {
  const user = await db.collection("users").doc(userUID).get();
  return user.data();
};

export const getUserSubscribedRooms = async (subscribedRoomIds) => {
  const rooms = subscribedRoomIds.map(async (roomId) => {
    const room = await getRoom(roomId);
    return {
      id: roomId,
      room,
    };
  });

  return await Promise.all(rooms);
};

export const addUserToCollection = (user) => {
  if (!user) return;
  console.log(user);
  db.collection("users").doc(user.uid).set({
    name: user.name,
    email: user.email,
  });
};

export const subscribeUserToRoom = (user, roomId) => {
  try {
    db.collection("users")
      .doc(user.uid)
      .collection("subscribedRooms")
      .doc(roomId)
      .set({});
  } catch (error) {
    return error;
  }
};
