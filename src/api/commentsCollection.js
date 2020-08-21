import * as firebase from "firebase";

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

const userSchema = {
  content: "",
  author: "", // reference string
  post: "", //reference string
  time: "", //Date
  likes: 0,
};
export const getSubComments = async (doc) => {
  const subCommentsRef = await doc.ref.collection("subComments").get();
  return subCommentsRef.docs.map((comment) => comment.data());
};

export const getAllComments = async () => {
  const commentsSnapshot = await db.collection("comments").get();
  const commentsRefs = commentsSnapshot.docs.map(async (doc) => ({
    ...doc.data(),
    subComments: await getSubComments(doc),
  }));
  const comments = await Promise.all(commentsRefs);
  return comments;
};

export const getComment = (id) => {
  // get refereces data
};

export const getAllCommentsFromPost = async (postsId) => {
  const commentsSnapshot = await db
    .collection("comments")
    .where("post", "==", postsId)
    .orderBy("time")
    .get();
  const commentsRefs = commentsSnapshot.docs.map(async (doc) => ({
    ...doc.data(),
    subComments: await getSubComments(doc),
  }));
  const comments = await Promise.all(commentsRefs);
  return comments;
};

export const addComment = (userUid, postUid, content = "") => {
  console.log("ok");
  db.collection("comments")
    .add({
      content,
      author: userUid, // reference string
      post: postUid, //reference string
      time: new Date(), //Date
      likes: 0,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

export const updateComment = (docId, updatedComment) => {
  var docRef = db.collection("comments").doc(docId);

  return docRef
    .update(updatedComment)
    .then(function () {
      console.log("Document successfully updated!");
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};

export const removeComment = (docId) => {
  db.collection("comments")
    .doc(docId)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};

export const addLike = (docId, likes) => {
  updateComment(docId, { likes: likes + 1 });
};

export const removeLike = (docId, likes) => {
  if (likes == 0) return;
  updateComment(docId, { likes: likes - 1 });
};
