import React from "react";
import { useSelector } from "react-redux";
import RoomHeader from "./RoomHeader";
import { getCurrentRoomDetails } from "../../redux/selectors";
import MainPanelList from "../MainPanel/MainPanelList";
import RoomMainPanel from "./RoomMainPanel";
import styles from "./room.module.css";

function Room(props) {
  const room = useSelector(getCurrentRoomDetails);

  return (
    <div className={styles.Room_Container}>
      <RoomHeader title={room.title} id={room.id} />
      <RoomMainPanel room={true} />
    </div>
  );
}

export default Room;
