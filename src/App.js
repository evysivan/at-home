import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./Components/Home/Home";
import { Login } from "./api/auth";
import { getIsLoading } from "./redux/selectors";
import {
  setUser,
  setLoading,
  dbAddRooms,
  dbAddPosts,
  dbAddComments,
} from "./redux/actions";
import Loading from "./Components/Loading";

import { getCollectionDB } from "./api/firebaseAPI";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const initializeUser = (user) => {
    dispatch(setUser(user));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getCollectionDB("rooms", (rooms) => dispatch(dbAddRooms(rooms)));
    getCollectionDB("posts", (posts) => dispatch(dbAddPosts(posts)));
    getCollectionDB("comments", (comments) =>
      dispatch(dbAddComments(comments))
    );
  }, []);

  useEffect(() => {
    const unsubscribeAuth = Login(initializeUser);
  }, []);

  return isLoading ? <Loading /> : <Home />;
}

export default App;
