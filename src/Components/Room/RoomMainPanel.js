import React from "react";
import RoomListPanel from "./RoomListPanel";
import RoomRightPanel from "./RoomRightPanel";
import styles from "./room.module.css";

function RoomMainPanel({ room }) {
  return (
    <div className={styles.Room_RoomMainPanel}>
      <RoomListPanel room={room} />
      <RoomRightPanel />
    </div>
  );
}

export default RoomMainPanel;
