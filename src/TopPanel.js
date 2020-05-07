import React from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import { useSelector } from "react-redux";
import { getAllThreads } from "./redux/selectors";

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
  const threads = useSelector(getAllThreads);

  return (
    <StyledTopPanel>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} className="logo" alt="logo" />
        <Autocomplete
          id="combo-box-demo"
          options={threads}
          getOptionLabel={(option) => option.details.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search" variant="outlined" />
          )}
        />
      </div>
      <div>
        <IconButton color="default" aria-label="">
          <EmailIcon />
        </IconButton>
        <IconButton color="default" aria-label="">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="default" aria-label="">
          <PersonIcon />
        </IconButton>
      </div>
    </StyledTopPanel>
  );
}

export default TopPanel;
