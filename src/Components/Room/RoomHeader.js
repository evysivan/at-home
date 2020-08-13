import React from "react";
import styles from "./room.module.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { getAllSubscribedRooms } from "../../redux/selectors";
import {
  addRoomSubscription,
  removeRoomSubscription,
} from "../../redux/actions";

function RoomHeader({ title, id }) {
  const subscriptions = useSelector(getAllSubscribedRooms);
  const dispatch = useDispatch();

  const isRoomSubscribed = subscriptions.includes(id);

  return (
    <div className={styles.StyledRoomHeader}>
      <h1 className={styles.RoomHeader_Title}>{title}</h1>
      <Button
        className={styles.RoomHeader_Button}
        variant="contained"
        color="default"
        startIcon={<AddIcon />}
        onClick={() => {
          if (isRoomSubscribed) dispatch(removeRoomSubscription(id));
          else {
            dispatch(addRoomSubscription(id));
          }
        }}
      >
        {isRoomSubscribed ? "Unsubscribe" : "Subscribe"}
      </Button>
    </div>
  );
}

export default RoomHeader;
