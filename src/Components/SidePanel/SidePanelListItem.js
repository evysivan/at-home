import React from "react";
import "./sidePanel.css";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { setRoom } from "../../redux/actions";
import { getCurrentRoom } from "../../redux/selectors";
import { Link } from "react-router-dom";

const SidePanelListItem = ({ room }) => {
  const dispatch = useDispatch();
  const currentRoom = useSelector(getCurrentRoom);

  const isCurrentRoom = currentRoom === room.id;

  return (
    <Link to="/room">
      <li className="SidePanelListItem_LiContainer" style={{ backgroundColor: isCurrentRoom ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)" }}>
        <div className="SidePanelListItem_Container">
          <Button
            style={{ width: "100%" }}
            onClick={() => {
              dispatch(setRoom(room.id));
            }}
          >
            <p>{room.title}</p>
          </Button>
          <IconButton aria-label="delete" size="small">
            <MoreVertIcon fontSize="inherit" />
          </IconButton>
        </div>
      </li>
    </Link>
  );
};

export default SidePanelListItem;
