import React from "react";
import { voteUp, voteDown, setPost } from "../../redux/actions";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch } from "react-redux";

import Select from "@material-ui/core/Select";
import ListItemText from "@material-ui/core/ListItemText";
import helped1 from "../../assets/helped/helped1.png";
import styles from "./post.module.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CachedIcon from "@material-ui/icons/Cached";
import DetailsIcon from "@material-ui/icons/Details";

function PostSelect({ item }) {
  const dispatch = useDispatch();

  return (
    <Select style={{ width: "200px" }}>
      <MenuItem
        value={1}
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => dispatch(voteUp(item.id))}
      >
        <HelpOutlineIcon />
        <ListItemText primary="This helped" style={{ margin: "8px" }} />
      </MenuItem>
      <MenuItem value={2}>
        <CachedIcon />
        <ListItemText primary="Comprehensive" style={{ margin: "8px" }} />
      </MenuItem>
      <MenuItem value={3}>
        <DetailsIcon />
        <ListItemText primary="Detailed" style={{ margin: "8px" }} />
      </MenuItem>
    </Select>
  );
}

export default PostSelect;
