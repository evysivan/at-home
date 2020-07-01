import React from "react";
import "./App.css";
import TopPanel from "./TopPanel";
import SidePanel from "./SidePanel";
import MainPanel from "./MainPanel/MainPanel";
import styled from "styled-components";
import bg2 from "./assets/2.jpg";
import bg3 from "./assets/3.png";
import Room from "./Room/Room";
import Search from "./Search/Search";
import Post from "./Post/Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledHome = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0,0,0,0.1);
  /* background-image: url(${bg3}); */
  /* background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */
  /* gray gradient */
  /* background: linear-gradient(160deg, #2c3e50, #bdc3c7);  */
  /* horizon gradient */
  /* background: linear-gradient(160deg, #003973, #e5e5be); 
  background: linear-gradient(
    160deg,
    #0f2027,
    #203a43,
    #2c5364 */
  /* ); black gradient */
  /* background: linear-gradient(
    160deg,
    #1f4037,
    #99f2c8 */
  /* ); harvey green gradient */
  
`;

const StyledContainer = styled.div`
  background-image: url("assets/2.jpg");
  position: relative;
  overflow: auto;
  height: 100%;
  width: 100vw;
  align-self: center;
  display: flex;
  flex-direction: row;
`;

function Home() {
  return (
    <Router>
      <StyledHome>
        <TopPanel />
        <StyledContainer>
          <Switch>
            <Route path="/room">
              <SidePanel />
              <Room />
            </Route>
            <Route path="/" exact>
              <SidePanel />
              <MainPanel />
            </Route>
            <Route path="/search" exact>
              <Search />
            </Route>
            <Route path="/post" exact>
              <Post />
            </Route>
          </Switch>
        </StyledContainer>
      </StyledHome>
    </Router>
  );
}

export default Home;
