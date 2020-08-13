import React from "react";
import styles from "./post.module.css";
import { useSelector } from "react-redux";
import {
  getCurrentPost,
  getAllThreads,
  getAllComments,
} from "../../redux/selectors";
import Post from "./Post";
import Comment from "./Comment";

function PostPage() {
  const postId = useSelector(getCurrentPost);
  const threads = useSelector(getAllThreads);
  const comments = useSelector(getAllComments);

  const relevantComments = comments.filter(
    (comment) => comment.postId === postId
  );
  const currentThread = threads.filter((thread) => thread.id === postId)[0];

  return (
    <div className={styles.PostPage_container}>
      {currentThread && postId && <Post item={currentThread} />}
      <div className={styles.PostPage_CommentContainer}>
        {relevantComments ? (
          relevantComments.map((comment) => (
            <Comment
              comment={comment.content}
              user={comment.author.name}
              indent={comment.indent}
            />
          ))
        ) : (
          <p>No comments yet...</p>
        )}
      </div>
    </div>
  );
}

export default PostPage;
