import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
const storageRef = storage.ref();
// export const getRoomsDB = async (addRoomsToStore) => {
//   await db.collection("rooms").onSnapshot((snapshot) => {
//     let addedRooms = [];
//     snapshot.docChanges().forEach((change) => {
//       if (change.type === "added") {
//         const room = change.doc.data();
//         addedRooms.push({ id: change.doc.ref.id, ...room });
//       }
//       if (change.type === "modified") {
//         console.log("Modified city: ", change.doc.data());
//       }
//       if (change.type === "removed") {
//         console.log("Removed city: ", change.doc.data());
//       }
//     });
//     addRoomsToStore(addedRooms);
//   });

const getRoomRef = async (docData) => {
  const docRef = await docData.room.get();

  return { roomId: docRef.id, ...docRef.data() };
};
const getUserRef = async (docData) => {
  const docRef = await docData.author.get();

  return docRef.data();
};

export const getCollectionDB = async (collectionName, addCollectionToStore) => {
  await db.collection(collectionName).onSnapshot((snapshot) => {
    let addedDocuments = [];
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === "added") {
        const docData = await change.doc.data();
        if (collectionName == "posts") {
          console.log("so why", docData.image);
          addedDocuments.push({
            ...docData,
            id: change.doc.ref.id,
            room: await getRoomRef(docData),
            author: await getUserRef(docData),
            time: docData.time.toDate(),
            thumbnail: await storageRef.child("jpg.png").getDownloadURL(),
            image: await storageRef.child("jpg.png").getDownloadURL(),
          });
        } else if (collectionName === "comments") {
          if (docData.time && docData.author) {
            addedDocuments.push({
              ...docData,
              authout: getUserRef(docData),
              id: change.doc.ref.id,
              time: docData.time.toDate(),
            });
          }
        } else {
          addedDocuments.push({ id: change.doc.ref.id, ...docData });
        }
      }
      if (change.type === "modified") {
        console.log("Modified doc: ", change.doc.data());
      }
      if (change.type === "removed") {
        console.log("Removed doc: ", change.doc.data());
      }
    });
    addCollectionToStore(addedDocuments);
  });
};

export const addPost = async (
  currentRoomId,
  title = "bla",
  content = "bla"
) => {
  var userId = await auth.currentUser.uid;
  console.log(await db.collection("users").doc(userId).id);

  db.collection("posts")
    .add({
      author: await db.collection("users").doc(userId),
      title,
      content,
      room: await db.doc("rooms/" + currentRoomId),
      time: new Date(),
      comprehensive: 0,
      detailed: 0,
      helped: 0,
      image: "",
    })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
};
