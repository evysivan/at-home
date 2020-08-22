import React, { useState, useEffect } from "react";
import styles from "./sidePanel.module.css";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { addRoom } from "../../api/roomsCollection";

function SidePanelAddRoom() {
  const [roomName, setRoomName] = useState("");

  return (
    <div className={styles.SidePanelAddRoom_Container}>
      <p className={styles.SidePanelHeader_StyledHeader}>ADD ROOM</p>
      <div className={styles.SidePanelAddRoom_Form}>
        <TextField
          style={{ width: "100%" }}
          id="standard-basic"
          label="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <IconButton aria-label="addRoom" onClick={() => addRoom(roomName)}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SidePanelAddRoom;
