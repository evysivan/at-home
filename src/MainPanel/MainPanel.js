import React from "react";
import "../App.css";
import styled from "styled-components";
import MainPanelHeader from "./MainPanelHeader";
import MainPanelList from "../MainPanelList";

const StyledMainPanel = styled.div`
  box-sizing: border-box;
  flex: 0.8;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  height: 100%;
  padding: 10px;
`;

function MainPanel() {
  return (
    <StyledMainPanel>
      <MainPanelHeader />
      <MainPanelList />
    </StyledMainPanel>
  );
}

export default MainPanel;
