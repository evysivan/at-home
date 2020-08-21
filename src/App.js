import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./Components/Home/Home";
import { Login } from "./api/auth";
import { getIsLoading, getUser } from "./redux/selectors";
import {
  setUser,
  setLoading,
  dbAddRooms,
  dbAddPosts,
  dbAddComments,
} from "./redux/actions";
import Loading from "./Components/Loading";
import * as postsDB from "./api/postsCollection";
import * as roomsDB from "./api/roomsCollection";
import * as usersDB from "./api/userCollection";
import * as commentsDB from "./api/commentsCollection";

import { getCollectionDB } from "./api/firebaseAPI";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const user = useSelector(getUser);

  const initializeUser = (user) => {
    dispatch(setUser(user));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    (async () => {
      commentsDB.addComment(
        "zR9a361LknZ3fDoBSPOBYqb4L5p1",
        "h6RaLjrYb23ZaADztfmq"
      );
      console.log(
        await commentsDB.getAllCommentsFromPost("h6RaLjrYb23ZaADztfmq")
      );
      // if (user) {
      //   console.log(user.uid);
      //   console.log(usersDB.subscribeUserToRoom(user, "3PcMDlfqugDj6CkJQX3B"));
      // }
      // console.log(await usersDB.getCurrentUser("j8dJ2CMEzVMDIAqMGsG0QqLG1yG2"));
      // console.log(
      //   await usersDB.getUserSubscribedRooms(["3PcMDlfqugDj6CkJQX3B"])
      // );
    })();
    // getCollectionDB("rooms", (rooms) => dispatch(dbAddRooms(rooms)));
    // getCollectionDB("posts", (posts) => dispatch(dbAddPosts(posts)));
    // getCollectionDB("comments", (comments) =>
    //   dispatch(dbAddComments(comments))
    // );
  }, []);

  useEffect(() => {
    const unsubscribeAuth = Login(initializeUser);
  }, []);

  return isLoading ? <Loading /> : <Home />;
}

export default App;
