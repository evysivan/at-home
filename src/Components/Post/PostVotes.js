import React from "react";
import styles from "./post.module.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CachedIcon from "@material-ui/icons/Cached";
import DetailsIcon from "@material-ui/icons/Details";

function PostVotes({ item }) {
  return (
    <div className={styles.PostDetails_Votes} width={20}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <HelpOutlineIcon className={styles.PostSelect_ItemIcons} />
        <p style={{ marginLeft: 5 }}>Helpful: {item.helped}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CachedIcon className={styles.PostSelect_ItemIcons} />
        <p style={{ marginLeft: 5 }}>Comprehensive: {item.comprehensive}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <DetailsIcon className={styles.PostSelect_ItemIcons} />
        <p style={{ marginLeft: 5 }}>Detailed: {item.detailed}</p>
      </div>
    </div>
  );
}

export default PostVotes;
