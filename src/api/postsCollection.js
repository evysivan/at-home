import * as firebase from "firebase";

const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

export const postSchema = {
  title: "",
  content: "",
  author: "", // reference
  room: "", //reference
  time: "", //Date
  file: "", //Storage Reference
  thumbnail: "", // Storage Reference
  comprehensive: 0,
  helped: 0,
  detailed: 0,
};

// TO-DO: doc changes, only last 30ish (by time)
// Getting real time data
// export const getAllPosts = () => {
//   return db.collection("posts").onSnapshot((snapshot) => {
//     return snapshot.docs.map((doc) => doc.data());
//   });
// };

const getPostRefData = async (post) => {
  const authorRef = await db.collection("users").doc(post.author).get();
  const roomRef = await db.collection("rooms").doc(post.room).get();

  return {
    ...post,
    author: authorRef.data(),
    room: { id: roomRef.id, ...roomRef.data() },
    time: post.time.toDate(),
  };
};

export const getAllPosts = async () => {
  const snapshot = await db.collection("posts").get();
  const postsWithRefs = snapshot.docs.map((doc) => doc.data());
  const posts = Promise.all(postsWithRefs.map((post) => getPostRefData(post)));
  return posts;
};

export const getPost = async (id) => {
  return await (await db.collection("posts").doc(`${id}`).get()).data();
};

export const subscribeAllPostsByRoomID = async (roomID, setPosts) => {
  const snapshot = await db
    .collection("posts")
    .where("room", "==", roomID)
    .onSnapshot(async (snapshot) => {
      const postsWithRefs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const posts = await Promise.all(
        postsWithRefs.map((post) => getPostRefData(post))
      );
      setPosts(posts);
    });
};
export const getAllPostsByRoomID = async (roomID) => {
  const snapshot = await db
    .collection("posts")
    .where("room", "==", roomID)
    .get();
  const postsWithRefs = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  const posts = await Promise.all(
    postsWithRefs.map((post) => getPostRefData(post))
  );
  return posts;
};

export const getAllPostsFromSubscribedRooms = async (userUID, setPosts) => {
  db.collection("users")
    .doc(userUID)
    .collection("subscribedRooms")
    .onSnapshot(async function (snapshot) {
      const subscribedRoomsIds = snapshot.docs.map((doc) => doc.id);
      setPosts(await getAllPostsFromSubscribedRoomsByIds(subscribedRoomsIds));
    });
};
export const getAllPostsFromSubscribedRoomsByIds = async (subscribedRooms) => {
  let posts = [];

  await subscribedRooms.map(async (roomID) => {
    const postsByRoom = await getAllPostsByRoomID(roomID);
    posts.push(...postsByRoom);
  });
  console.log(posts);
  return posts;
};

export const addPost = (roomID, user, title, content) => {
  db.collection("posts")
    .add({
      title,
      content,
      author: user.uid, // reference
      room: roomID, //reference
      time: new Date(), //Date
      filePath: "", //Storage Reference
      thumbnailPath: "",
      comprehensive: 0,
      helped: 0,
      detailed: 0,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

export const updatePost = (docId, updatedPost) => {
  var docRef = db.collection("posts").doc(docId);

  return docRef
    .update(updatedPost)
    .then(function () {
      console.log("Document successfully updated!");
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};

export const removePost = (docId) => {
  db.collection("posts")
    .doc(docId)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};

export const getPostFile = async (filePath) => {
  return await storageRef.child(filePath).getDownloadURL();
};
