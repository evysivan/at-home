import React from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import { useSelector, useDispatch } from "react-redux";
import { getAllRooms, getAllSubscribedRooms } from "./redux/selectors";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./assets/logo.png";
import {
  setRoom,
  addRoomSubscription,
  removeRoomSubscription,
} from "./redux/actions";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const StyledTopPanel = styled.div`
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

function TopPanel() {
  const rooms = useSelector(getAllRooms);
  const subscriptions = useSelector(getAllSubscribedRooms);

  const dispatch = useDispatch();

  const isRoomSubscribed = (id) => {
    if (subscriptions.includes(id)) return true;
    return false;
  };

  return (
    <StyledTopPanel>
      <Link to="/" onClick={() => dispatch(setRoom(""))}>
        <img
          src={logo}
          style={{ width: "60px", height: "60px" }}
          className="logo"
          alt="logo"
        />
      </Link>
      <Autocomplete
        id="combo-box-demo"
        options={rooms && rooms.length > 0 ? rooms : []}
        getOptionLabel={(option) => option.title}
        renderOption={(option) => (
          <Link to="/room">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onClick={() => {
                dispatch(setRoom(option.id));
              }}
            >
              <p style={{ flex: 1 }}>{option.title}</p>
              <Button
                style={{ margin: 5 }}
                variant="outlined"
                color="default"
                startIcon={<AddIcon />}
                onClick={() => {
                  if (isRoomSubscribed(option.id))
                    dispatch(removeRoomSubscription(option.id));
                  else {
                    dispatch(addRoomSubscription(option.id));
                  }
                }}
              >
                {isRoomSubscribed(option.id) ? "Unsubscribe" : "Subscribe"}
              </Button>
            </div>
          </Link>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Search" variant="outlined" />
        )}
      />
      <div>
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
