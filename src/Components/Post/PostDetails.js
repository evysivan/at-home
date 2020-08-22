import React from "react";
import "./post.module.css";

import { useDispatch } from "react-redux";
import { voteUp, voteDown, setPost } from "../../redux/actions";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import CommentIcon from "@material-ui/icons/Comment";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PostVotes from "./PostVotes";
import { removePost } from "../../api/postsCollection";

import styles from "./post.module.css";

import PostSelect from "./PostSelect";

function PostDetails({ item, style }) {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.PostDetails_Container}
      style={{ width: style ? style.width : "100%" }}
    >
      <div style={{ width: "100%" }}>
        <div className={styles.PostDetails_Header}>
          <p>
            <span className={styles.Post_StyledSpan}>Room: </span>
            <span style={{ textDecoration: "underline" }}>
              {item.room.title}
            </span>
          </p>
          <div>
            <Button>Edit</Button>
            <Button onClick={() => removePost(item.id)}>Delete</Button>
          </div>
        </div>
        <div className={styles.PostDetails_BottomContainer}>
          <div className={styles.PostDetails_Title}>
            <Link to="/post" onClick={() => dispatch(setPost(item.id))}>
              <h2 style={{ fontSize: style ? style.fontSize : 25 }}>
                {item.title}
              </h2>
            </Link>
          </div>
          <div className={styles.Post_BodyContainer}>
            {typeof item.content === "string" ? (
              <p>{item.content}</p>
            ) : (
              item.content
            )}
            {item.image && (
              <img className="thread-image" src={item.image} alt="image" />
            )}
          </div>
        </div>
        <PostVotes item={item} />
        <div className={styles.PostDetails_Actions}>
          <PostSelect item={item} />
          <div>
            <Button startIcon={<ShareIcon style={{ color: "#6fc7ed" }} />}>
              Share
            </Button>
            <Link to="/post" onClick={() => dispatch(setPost(item.id))}>
              <Button startIcon={<CommentIcon style={{ color: "#e3546e" }} />}>
                Comment
              </Button>
              <Button startIcon={<BookmarkIcon style={{ color: "#dbde45" }} />}>
                Save
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
