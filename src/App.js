import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./Components/Home/Home";
import { Login } from "./api/auth";
import {
  getIsLoading,
  getUser,
  getAllSubscribedRooms,
} from "./redux/selectors";
import {
  setUser,
  setLoading,
  dbAddRooms,
  dbAddPosts,
  dbAddComments,
  setUserSubscribedRooms,
  setPostsFromSubscribedRooms,
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
  const subscribedRooms = useSelector(getAllSubscribedRooms);

  const initializeUser = (user) => {
    dispatch(setUser(user));
  };
  useEffect(() => {
    const unsubscribeAuth = Login(initializeUser);
  }, []);

  useEffect(() => {
    (async () => {
      dispatch(dbAddRooms(await roomsDB.getAllRooms()));
    })();
  }, []);

  useEffect(() => {
    if (!user) return;
    usersDB.getUserSubscribedRooms(user.uid, (rooms) => {
      dispatch(setUserSubscribedRooms(rooms));
    });
  }, [user]);

  useEffect(() => {
    if (!user || !subscribedRooms) return;
    postsDB.getAllPostsFromSubscribedRooms(user.uid, (posts) => {
      dispatch(setPostsFromSubscribedRooms(posts));
      dispatch(setLoading(false));
    });
  }, [subscribedRooms]);

  return isLoading ? <Loading /> : <Home />;
}

export default App;
