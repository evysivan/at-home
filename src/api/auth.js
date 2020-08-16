import { auth } from "./firebaseAPI";

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
export const createUser = (email, password) => {
  console.log(email, password);
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((error) => ({ isError: true, ...error }));
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
