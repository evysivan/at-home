import React from "react";
import "../../App.css";
import "./sidePanel.css";
import styled from "styled-components";
import SidePanelHeader from "./SidePanelHeader";
import SidePanelList from "./SidePanelList";

function SidePanel() {
  return (
    <div className="StyledSidePanel">
      <div className="SidePanel_StyledContainer">
        <SidePanelHeader />
        <SidePanelList />
      </div>
    </div>
  );
}

export default SidePanel;
