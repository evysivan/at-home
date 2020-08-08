import React from "react";
import "../../App.css";
import "./top-panel.css";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import logo from "../../assets/logob.png";
import { setRoom } from "../../redux/actions";
import SearchPanel from "../Search/SearchPanel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import UserMenu from "./UserMenu";

function TopPanel() {
  const dispatch = useDispatch();

  return (
    <div className="StyledTopPanel">
      <Link to="/" onClick={() => dispatch(setRoom(""))}>
        <img src={logo} className="logo StyledImage" alt="logo" />
      </Link>
      <SearchPanel />
      <div className="TopPanel_IconsContainer">
        <IconButton color="default" aria-label="">
          <NotificationsIcon />
        </IconButton>
        <UserMenu />
      </div>
    </div>
  );
}

export default TopPanel;
