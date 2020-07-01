import React from "react";
import { useSelector } from "react-redux";
import RoomHeader from "./RoomHeader";
import { getCurrentRoomDetails } from "../redux/selectors";
import MainPanelList from "../MainPanelList";

function Room(props) {
  const room = useSelector(getCurrentRoomDetails);

  return (
    <div style={{ flex: 0.8, overflow: "hidden" }}>
      <RoomHeader title={room.title} id={room.id} />
      <MainPanelList room={true} />
    </div>
  );
}

export default Room;
