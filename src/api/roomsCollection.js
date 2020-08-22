import * as firebase from "firebase";

const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

const roomSchema = {
  title: "",
  subscribedUsers: [],
};

const getRoomRefs = async (subscribedUsersSnapshot) => {
  const subscribedUsers = subscribedUsersSnapshot.docs.map((user) =>
    user.data()
  );

  const subscribedUsersWithUsersRef = subscribedUsers.map(async (user) => ({
    userRef: await db.collection("users").doc(user.userRef).get(),
  }));
  const subscribedUsersWithUsers = await Promise.all(
    subscribedUsersWithUsersRef
  );

  return subscribedUsersWithUsers.map((user) => ({
    userRef: user.userRef.data(),
  }));
};

export const getAllRoomsWithSubscribedUsers = async () => {
  const snapshot = await db.collection("rooms").get();
  const roomWithRefs = snapshot.docs.map(async (doc) => ({
    ...doc.data(),
    subscribedUsers: await getRoomRefs(
      await doc.ref.collection("subscribedUsers").get()
    ),
  }));
  const rooms = await Promise.all(roomWithRefs);
  return rooms;
};

export const getAllRooms = async () => {
  const snapshot = await db.collection("rooms").get();
  const rooms = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(rooms);
  return rooms;
};

export const getRoom = async (id) => {
  const snapshot = await db.collection("rooms").doc(id).get();
  return snapshot.data();
};

export const addRoom = (title) => {
  db.collection("rooms")
    .add({
      title,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

export const removeRoom = (docId) => {
  db.collection("rooms")
    .doc(docId)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};
