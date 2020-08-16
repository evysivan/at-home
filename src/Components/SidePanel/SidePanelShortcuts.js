import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import EmailIcon from "@material-ui/icons/Email";
import styles from "./sidePanel.module.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "10px",
    fontSize: "18px",
    color: "gray",
  },
}));

function SidePanelShortcuts() {
  const classes = useStyles();
  return (
    <div className={styles.SidePanel_Shortcuts}>
      <Button className={classes.button} startIcon={<PersonIcon />}>
        PROFILE
      </Button>
      <Button className={classes.button} startIcon={<EmailIcon />}>
        INBOX
      </Button>
      <Button className={classes.button} startIcon={<SettingsIcon />}>
        SETTINGS
      </Button>
    </div>
  );
}

export default SidePanelShortcuts;
