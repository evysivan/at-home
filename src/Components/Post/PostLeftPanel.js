import React from "react";
import styles from "./post.module.css";
import PostThumbnail from "./PostThumbnail";
import PostVotes from "./PostVotes";
import { timeDiffToday } from "../../utils";

function PostLeftPanel({ item }) {
  return (
    <div className={styles.Post_LeftPanel}>
      <div className={styles.PostLeftPanel_TopDetails}>
        <p className={styles.PostLeftPanel_User}>
          <span>Posted By: </span>
          <br />
          <span className={styles.PostLeftPanel_UserName}>
            {item.author.name}
          </span>
        </p>
        <div className={styles.PostLeftPanel_TimeDiff}>
          <span style={{ marginRight: 10 }}>{timeDiffToday(item.time)}</span>
        </div>
      </div>
      <div className={styles.PostLeftPanel_BottomDetails}>
        <p>160 Viewed</p>
        <p>20 Commented</p>
        <p>2 Shared</p>
      </div>
    </div>
  );
}

export default PostLeftPanel;
