import React, { useEffect, useState } from "react";
import styles from "./post.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentPost,
  getAllPosts,
  getAllComments,
} from "../../redux/selectors";
import { setCommentsOfPost } from "../../redux/actions";
import Post from "./Post";
import Comment from "./Comment";
import Loading from "../Loading";
import { getAllCommentsFromPost } from "../../api/commentsCollection";

function PostPage() {
  const dispatch = useDispatch();
  const postId = useSelector(getCurrentPost);
  const posts = useSelector(getAllPosts);
  const comments = useSelector(getAllComments);
  const [loading, setLoading] = useState(true);

  const currentPost = posts.filter((post) => post.id === postId)[0];
  console.log(currentPost);

  useEffect(() => {
    (async () => {
      dispatch(setCommentsOfPost(await getAllCommentsFromPost(postId)));
      setLoading(false);
    })();
  }, []);
  console.log(comments);
  if (loading) return <Loading />;

  return (
    <div className={styles.PostPage_container}>
      {currentPost && postId && <Post item={currentPost} />}
      <div className={styles.PostPage_CommentContainer}>
        {comments ? (
          comments.map((comment) => (
            <>
              <Comment comment={comment} user={comment.author.name} />
              {comment.subComments
                ? comment.subComments.map((subComment) => (
                    <Comment
                      style={{ width: "70%", alignSelf: "flex-end" }}
                      comment={subComment}
                      user={subComment.author.name}
                    />
                  ))
                : null}
            </>
          ))
        ) : (
          <p>No comments yet...</p>
        )}
      </div>
    </div>
  );
}

export default PostPage;
