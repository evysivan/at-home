import React from "react";
import styles from "./post.module.css";

function PostThumbnail({ item }) {
  return (
    <div className={styles.Post_Thumbnail} width={20}>
      {item.thumbnail && (
        <img
          className="thread-thumbnail"
          src={item.thumbnail}
          width={80}
          height={80}
          alt="thumbnail"
        />
      )}
    </div>
  );
}

export default PostThumbnail;
