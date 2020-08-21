import React from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import AddIcon from "@material-ui/icons/Add";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import TextField from "@material-ui/core/TextField";
import styles from "./room.module.css";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import PhotoIcon from "@material-ui/icons/Photo";
import LinkIcon from "@material-ui/icons/Link";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { useSelector } from "react-redux";
import { getCurrentRoom } from "../../redux/selectors";
import { addPost } from "../../api/postsCollection";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  attachButton: {
    background: "linear-gradient(110deg, #d6d6d6 30%, #959595 90%)",
    boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.15)",
    color: "white",
    marginRight: "5px",
    "&:hover": {
      background: "linear-gradient(110deg, #c9c9c9 30%, #838383 90%)",
    },
  },
  sendButton: {
    background: "linear-gradient(110deg, #8fe0f2 30%, #5a9abd 90%)",
    boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.15)",
    color: "white",
    "&:hover": {
      background: "linear-gradient(110deg, #6fc6da 30%, #5395ba 90%)",
    },
  },
  photoButton: {
    background: "linear-gradient(110deg, #a8f186 30%, #76bb63 90%)",
    boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.15)",
    color: "white",
    marginRight: "5px",
    "&:hover": {
      background: "linear-gradient(110deg, #8fd071 30%, #65a653 90%)",
    },
  },
  linkButton: {
    background: "linear-gradient(110deg, #ff9cb8 30%, #b95256 90%)",
    boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.15)",
    color: "white",
    "&:hover": {
      background: "linear-gradient(110deg, #de7575 30%, #a64448 90%)",
    },
  },
  Actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "16px",
    backgroundColor: "rgb(248, 248, 248)",
    borderRadius: "5px",
  },
});

const AddPostPanel = () => {
  const classes = useStyles();
  const currentRoomId = useSelector(getCurrentRoom);

  return (
    <ExpansionPanel className={styles.RoomListPanel_AddPost}>
      <ExpansionPanelSummary
        expandIcon={<AddIcon />}
        aria-controls="panel1c-content"
        id="panel1c-header"
      >
        <p style={{ margin: 0, color: "gray", fontWeight: 600 }}>ADD POST</p>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField style={{ width: "20%" }} id="standard-basic" label="Title" />
        <TextField
          style={{ width: "80%" }}
          id="standard-basic"
          label="Content"
        />
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions className={classes.Actions}>
        <div>
          <IconButton aria-label="send" className={classes.attachButton}>
            <AttachFileIcon />
          </IconButton>
          <IconButton aria-label="send" className={classes.photoButton}>
            <PhotoIcon />
          </IconButton>
          <IconButton aria-label="send" className={classes.linkButton}>
            <LinkIcon />
          </IconButton>
        </div>
        <IconButton
          aria-label="send"
          className={classes.sendButton}
          onClick={() => addPost(currentRoomId)}
        >
          <SendIcon />
        </IconButton>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
};

export default AddPostPanel;
