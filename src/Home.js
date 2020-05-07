import React from "react";
import "./App.css";
import TopPanel from "./TopPanel";
import SidePanel from "./SidePanel";
import MainPanel from "./MainPanel";
import styled from "styled-components";
import bg2 from "./assets/2.jpg";
import bg3 from "./assets/3.png";

const StyledHome = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${bg3});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* purple gradient */
  background: linear-gradient(160deg, #1d2b64, #f8cdda);
  /* horizon gradient */
  /* background: linear-gradient(160deg, #003973, #e5e5be); */
`;

const StyledContainer = styled.div`
  background-image: url("assets/2.jpg");
  position: relative;
  overflow: auto;
  height: 100%;
  width: 90vw;
  align-self: center;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
`;

function Home() {
  return (
    <StyledHome>
      <TopPanel />
      <StyledContainer>
        <SidePanel />
        <MainPanel />
      </StyledContainer>
    </StyledHome>
  );
}

export default Home;
