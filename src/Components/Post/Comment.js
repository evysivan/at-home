import React from "react";
import styles from "./post.module.css";

function Comment({ comment, user, indent }) {
  return (
    <div
      className={styles.StyledComment}
      style={{ marginRight: indent ? "60px" : "0" }}
    >
      <p>{user}</p>
      <p style={{ alignSelf: "flex-end" }}>{comment}</p>
    </div>
  );
}

export default Comment;
