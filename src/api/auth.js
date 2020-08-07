import { auth } from "./firebaseAPI";

export const createUser = async (email, password) => {
  console.log(email, password);
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    return user;
  } catch (e) {
    console.log(e);
  }
};
