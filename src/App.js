import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const user = useSelector(getUser);
  const subscribedRooms = useSelector(getAllSubscribedRooms);

  const initializeUser = (user) => {
    console.log(user);
    dispatch(setUser(user));
    setLoading(false);
  };
  useEffect(() => {
    const unsubscribeAuth = Login(initializeUser);

    return () => unsubscribeAuth();
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
      setLoading(false);
    });
  }, [subscribedRooms]);

  return loading ? <Loading /> : <Home />;
}

export default App;
