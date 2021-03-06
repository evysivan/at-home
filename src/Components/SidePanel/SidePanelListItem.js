import React from "react";
import styles from "./sidePanel.module.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Redirect } from "react-router-dom";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { setRoom } from "../../redux/actions";
import { getCurrentRoom, getUser } from "../../redux/selectors";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeRoom } from "../../api/roomsCollection";
import { unsubscribeUserToRoom } from "../../api/userCollection";

const SidePanelListItem = ({ room }) => {
  const dispatch = useDispatch();
  const currentRoom = useSelector(getCurrentRoom);
  const user = useSelector(getUser);
  const currentRoomId = currentRoom.id;

  const isCurrentRoom = currentRoomId === room.id;

  return (
    <Link to="/room">
      <li
        className={styles.SidePanelListItem_LiContainer}
        style={{
          backgroundColor: isCurrentRoom
            ? "rgba(0,0,0,0.3)"
            : "rgba(0,0,0,0.1)",
        }}
      >
        <div className={styles.SidePanelListItem_Container}>
          <Button
            className={styles.SidePanelListItem_Button}
            onClick={() => {
              dispatch(setRoom(room));
            }}
          >
            {room.title}
          </Button>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => {
              unsubscribeUserToRoom(user, room.id);
              removeRoom(room.id);
              if (currentRoomId == room.id) {
                dispatch(setRoom(""));
              }
            }}
          >
            <DeleteIcon style={{ color: "white" }} fontSize="inherit" />
          </IconButton>
        </div>
      </li>
    </Link>
  );
};

export default SidePanelListItem;
