import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { getAllSubscribedRooms } from "../redux/selectors";
import {
  addRoomSubscription,
  removeRoomSubscription,
  setRoom,
} from "../redux/actions";
import { Link } from "react-router-dom";

function LineResult({ room }) {
  const { title, id } = room;
  const subscriptions = useSelector(getAllSubscribedRooms);

  const dispatch = useDispatch();

  const isRoomSubscribed = (id) => {
    if (subscriptions.includes(id)) return true;
    return false;
  };

  return (
    <Link style={{ width: "100%" }} to="/room">
      <Button
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
        onClick={() => {
          dispatch(setRoom(id));
        }}
      >
        <p>{title}</p>
        <Button
          style={{ margin: 5 }}
          variant="outlined"
          color="default"
          startIcon={<AddIcon />}
          onClick={() => {
            if (isRoomSubscribed(id)) dispatch(removeRoomSubscription(id));
            else {
              dispatch(addRoomSubscription(id));
            }
          }}
        >
          {isRoomSubscribed(id) ? "Unsubscribe" : "Subscribe"}
        </Button>
      </Button>
    </Link>
  );
}

export default LineResult;
