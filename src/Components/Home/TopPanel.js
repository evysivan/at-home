import React from "react";
import "../../App.css";
import './home.css';
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import logo from "../../assets/logob.png";
import {
  setRoom,
} from "../../redux/actions";
import SearchPanel from "../Search/SearchPanel";

function TopPanel() {
  const dispatch = useDispatch();

  return (
    <div className="StyledTopPanel">
      <Link to="/" onClick={() => dispatch(setRoom(""))}>
        <img src={logo} className="logo StyledImage" alt="logo" />
      </Link>
      <SearchPanel />
      <div>
        <IconButton color="default" aria-label="">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="default" aria-label="">
          <PersonIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default TopPanel;
