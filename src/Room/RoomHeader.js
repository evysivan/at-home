import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { getAllSubscribedRooms } from "../redux/selectors";
import { addRoomSubscription, removeRoomSubscription } from "../redux/actions";

const StyledRoomHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  min-height: 50px;
  padding: 10px;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
`;

function RoomHeader({ title, id }) {
  const subscriptions = useSelector(getAllSubscribedRooms);
  const dispatch = useDispatch();

  const isRoomSubscribed = subscriptions.includes(id);

  return (
    <StyledRoomHeader>
      <h1>{title}</h1>
      <Button
        style={{ margin: 5 }}
        variant="outlined"
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
    </StyledRoomHeader>
  );
}

export default RoomHeader;
