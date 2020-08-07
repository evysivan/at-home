import React from "react";
import "./post.css";
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
    (comment) => comment.threadId === postId
  );
  const currentThread = threads.filter((thread) => thread.id === postId)[0];

  return (
    <div className="PostPage_container">
      {currentThread && postId && (
        <Post item={currentThread} style={{ width: "80%" }} />
      )}
      <div style={{ width: "40%" }}>
        {relevantComments ? (
          relevantComments.map((comment) => (
            <Comment
              comment={comment.comment}
              user={comment.user}
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
