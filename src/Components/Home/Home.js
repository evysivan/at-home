import React from "react";
import "../../App.css";
import './home.css';
import TopPanel from "./TopPanel";
import SidePanel from "../SidePanel/SidePanel";
import MainPanel from "../MainPanel/MainPanel";
import styled from "styled-components";
import bg2 from "../../assets/2.jpg";
import bg3 from "../../assets/3.png";
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
import { StylesProvider } from "@material-ui/core";

const isUserAuthenticated = true;

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      isUserAuthenticated ? (
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

function Home() {
  //test
  return (
    <Router>
      <div className="StyledHome">
        <Switch>
          <Route path="/auth">
            <AuthContainer />
          </Route>
          <div className="StyledParentContainer">
            <TopPanel />
            <div className="Home_StyledContainer">
              <PrivateRoute path="/" exact>
                <SidePanel />
                <MainPanel />
              </PrivateRoute>
              <PrivateRoute path="/room">
                <SidePanel />
                <Room />
              </PrivateRoute>
              <PrivateRoute path="/search">
                <SearchPage />
              </PrivateRoute>
              <PrivateRoute path="/post" exact>
                <PostPage />
              </PrivateRoute>
            </div>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
