import React from "react";
import styles from "./room.module.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PeopleIcon from "@material-ui/icons/People";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import EventIcon from "@material-ui/icons/Event";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "10px",
    fontSize: "18px",
    color: "gray",
  },
}));

function RoomRightPanel() {
  const classes = useStyles();

  return (
    <div className={styles.Room_RoomRightPanel}>
      <Button className={classes.button} startIcon={<PeopleIcon />}>
        Members
      </Button>
      <Button className={classes.button} startIcon={<FileCopyIcon />}>
        Files
      </Button>
      <Button className={classes.button} startIcon={<EventIcon />}>
        Events
      </Button>
    </div>
  );
}

export default RoomRightPanel;
