import React from "react";
import styles from "./post.module.css";
import PostThumbnail from "./PostThumbnail";
import PostVotes from "./PostVotes";
import PostDetails from "./PostDetails";

const Post = ({ item, style }) => {
  return (
    <div className={styles.Post_Container}>
      <PostThumbnail item={item} style={style} />
      <PostDetails item={item} />
      <PostVotes item={item} />
    </div>
  );
};

export default Post;
