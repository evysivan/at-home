import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { getAllSubscribedRooms, getUser } from "../../redux/selectors";
import { setRoom } from "../../redux/actions";
import {
  subscribeUserToRoom,
  unsubscribeUserToRoom,
} from "../../api/userCollection";
import { Link } from "react-router-dom";

function LineResult({ room }) {
  const { title, id } = room;
  const subscriptions = useSelector(getAllSubscribedRooms);
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const isRoomSubscribed = (id) => {
    if (subscriptions.filter((room) => room.id == id).length > 0) return true;
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
          dispatch(setRoom(room));
        }}
      >
        <p>{title}</p>
        <Button
          style={{ margin: 5 }}
          variant="outlined"
          color="default"
          startIcon={<AddIcon />}
          onClick={() => {
            if (isRoomSubscribed(id)) unsubscribeUserToRoom(user, id);
            else {
              subscribeUserToRoom(user, id);
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
