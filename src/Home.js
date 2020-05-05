import React from "react";
import "./App.css";
import TopPanel from "./TopPanel";
import SidePanel from "./SidePanel";
import MainPanel from "./MainPanel";
import styled from "styled-components";

const StyledHome = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lightgray;
`;

const StyledContainer = styled.div`
  position: relative;
  overflow: auto;
  height: 100%;
  width: 80vw;
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
