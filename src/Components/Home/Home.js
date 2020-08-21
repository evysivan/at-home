import React, { useEffect } from "react";
import "../../App.css";
import styles from "./home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/selectors";
import TopPanel from "../TopPanel/TopPanel";
import SidePanel from "../SidePanel/SidePanel";
import MainPanel from "../MainPanel/MainPanel";
import Room from "../Room/Room";
import SearchPage from "../Search/SearchPage";
import PostPage from "../Post/PostPage";
import AuthContainer from "../../Authentication/AuthContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { dbSetRooms, dbSetPosts, dbSetComments } from "../../redux/actions";

import { getCollectionDB } from "../../api/firebaseAPI";
import { StylesContext } from "@material-ui/styles";

const PrivateRoute = ({ children, ...rest }) => {
  const user = useSelector(getUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const RedirectedRoute = ({ children, ...rest }) => {
  const user = useSelector(getUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !user ? (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

function Home() {
  return (
    <Router>
      <div className={styles.StyledHome}>
        <Switch>
          <RedirectedRoute path="/auth">
            <AuthContainer />
          </RedirectedRoute>
          <PrivateRoute path="/" exact>
            <div className={styles.StyledParentContainer}>
              <div className={styles.Home_StyledContainer}>
                <SidePanel />
                <div className={styles.Home_Container}>
                  <TopPanel withSidePanel={true} />
                  <MainPanel />
                </div>
              </div>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/room">
            <div className={styles.StyledParentContainer}>
              <div className={styles.Home_StyledContainer}>
                <SidePanel />
                <div className={styles.Home_Container}>
                  <TopPanel withSidePanel={true} />
                  <Room />
                </div>
              </div>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/search">
            <div className={styles.StyledParentContainer}>
              <TopPanel />
              <div className={styles.Home_StyledContainer}>
                <SearchPage />
              </div>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/post" exact>
            <div className={styles.StyledParentContainer}>
              <TopPanel />
              <div className={styles.Home_StyledContainer}>
                <PostPage />
              </div>
            </div>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
