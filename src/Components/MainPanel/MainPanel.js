import React from "react";
import "../../App.css";
import "./mainPanel.css";
import styled from "styled-components";
import MainPanelHeader from "./MainPanelHeader";
import MainPanelList from "./MainPanelList";

function MainPanel() {
  return (
    <div className="StyledMainPanel">
      <MainPanelHeader />
      <MainPanelList />
    </div>
  );
}

export default MainPanel;
