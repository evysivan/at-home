import React from "react";
import styles from "./post.module.css";
import PostThumbnail from "./PostThumbnail";
import PostDetails from "./PostDetails";
import PostLeftPanel from "./PostLeftPanel";

const Post = ({ item, style }) => {
  return (
    <div className={styles.Post_Container}>
      <PostLeftPanel item={item} />
      <PostDetails item={item} />
      <PostThumbnail item={item} style={style} />
    </div>
  );
};

export default Post;
