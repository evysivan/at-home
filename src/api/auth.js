import { auth } from "./firebaseAPI";
import { addUserToCollection } from "./userCollection";

// // Login
export const Login = (initializeUser) => {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      initializeUser(user);
    } else {
      initializeUser(null);
    }
  });
};

// Sign Up
export const createUser = (email, password, name) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      addUserToCollection({ uid: userCredential.user.uid, name, email });
      return userCredential.user;
    })
    .catch((error) => ({
      isError: true,
      message: error.toString(),
      ...error,
    }));
};

// Sign Out
export const SignOut = () => {
  auth
    .signOut()
    .then(() => console.log("User signed out"))
    .catch((e) => console.log(e));
};

// Sign In
export const SignIn = (email, password) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((error) => ({ isError: true, ...error }));
};
