import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./Components/Home/Home";
import { Login } from "./api/auth";
import { getIsLoading } from "./redux/selectors";
import { setUser, setLoading } from "./redux/actions";
import Loading from "./Components/Loading";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const initializeApp = (user) => {
    dispatch(setUser(user));
    dispatch(setLoading(false));
  };

  useEffect(() => Login(initializeApp), []);

  return isLoading ? <Loading /> : <Home />;
}

export default App;
