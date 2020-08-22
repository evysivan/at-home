import React from "react";
import styles from "./post.module.css";

function Comment({ comment, user, style }) {
  return (
    <div className={styles.StyledComment} style={style}>
      <p style={{ textDecoration: "underline" }}>{user}</p>
      <p>{comment.content}</p>
    </div>
  );
}

export default Comment;
