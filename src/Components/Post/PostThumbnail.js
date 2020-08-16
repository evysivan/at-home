import React from "react";
import styles from "./post.module.css";

function PostThumbnail({ item }) {
  return (
    <div className={styles.Post_Thumbnail} width={20}>
      {item.thumbnail && (
        <img
          className={styles.Post_ThumbnailImage}
          src={item.thumbnail}
          alt="thumbnail"
        />
      )}
    </div>
  );
}

export default PostThumbnail;
