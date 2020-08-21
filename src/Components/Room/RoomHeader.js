import React from "react";
import styles from "./room.module.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { getAllSubscribedRooms, getUser } from "../../redux/selectors";
import {
  subscribeUserToRoom,
  unsubscribeUserToRoom,
} from "../../api/userCollection";

function RoomHeader({ title, id }) {
  const subscriptions = useSelector(getAllSubscribedRooms);
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const isRoomSubscribed =
    subscriptions.filter((room) => room.id == id).length > 0;

  return (
    <div className={styles.StyledRoomHeader}>
      <h1 className={styles.RoomHeader_Title}>{title}</h1>
      <Button
        className={styles.RoomHeader_Button}
        variant="contained"
        color="default"
        startIcon={<AddIcon />}
        onClick={() => {
          if (isRoomSubscribed) unsubscribeUserToRoom(user, id);
          else {
            subscribeUserToRoom(user, id);
          }
        }}
      >
        {isRoomSubscribed ? "Unsubscribe" : "Subscribe"}
      </Button>
    </div>
  );
}

export default RoomHeader;
