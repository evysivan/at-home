import React from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";

import styled from "styled-components";
import logo from "./assets/logo.png";

const StyledTopPanel = styled.div`
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function TopPanel() {
  return (
    <StyledTopPanel>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} className="logo" alt="logo" />
        <TextField id="filled-basic" label="Search" variant="filled" />
      </div>
      <h3 className="top-panel-username">Hello Username!</h3>
    </StyledTopPanel>
  );
}

export default TopPanel;
