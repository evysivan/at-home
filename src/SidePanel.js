import React from "react";
import "./App.css";
import styled from "styled-components";
import SidePanelHeader from "./SidePanelHeader";
import SidePanelList from "./SidePanelList";

const StyledSidePanel = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 100%;
  padding: 10px;
  flex: 0.2;
`;

const StyledContainer = styled.div`
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

function SidePanel() {
  return (
    <StyledSidePanel>
      <StyledContainer>
        <SidePanelHeader />
        <SidePanelList />
      </StyledContainer>
    </StyledSidePanel>
  );
}

export default SidePanel;
