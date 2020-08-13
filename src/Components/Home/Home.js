import React, { useEffect } from "react";
import "../../App.css";
import "./home.css";
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

const PrivateRoute = ({ children, ...rest }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

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

function Home() {
  return (
    <Router>
      <div className="StyledHome">
        <Switch>
          <Route path="/auth">
            <AuthContainer />
          </Route>
          <PrivateRoute path="/" exact>
            <div className="StyledParentContainer">
              <div className="Home_StyledContainer">
                <SidePanel />
                <div style={{ flex: 0.8 }}>
                  <TopPanel withSidePanel={true} />
                  <MainPanel />
                </div>
              </div>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/room">
            <div className="StyledParentContainer">
              <div className="Home_StyledContainer">
                <SidePanel />
                <div style={{ flex: 0.8 }}>
                  <TopPanel withSidePanel={true} />
                  <Room />
                </div>
              </div>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/search">
            <div className="StyledParentContainer">
              <TopPanel />
              <div className="Home_StyledContainer">
                <SearchPage />
              </div>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/post" exact>
            <div className="StyledParentContainer">
              <TopPanel />
              <div className="Home_StyledContainer">
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
