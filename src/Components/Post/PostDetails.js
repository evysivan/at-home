import React from "react";
import "./post.module.css";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useDispatch } from "react-redux";
import { voteUp, voteDown, setPost } from "../../redux/actions";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import helped1 from "../../assets/helped/helped1.png";
import HelpIcon from "@material-ui/icons/Help";
import { timeDiffToday } from "../../utils";
import styles from "./post.module.css";
import PostThumbnail from "./PostThumbnail";
import PostVotes from "./PostVotes";
import PostSelect from "./PostSelect";

function PostDetails({ item, style }) {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.Post_StyledItem}
      style={{ width: style ? style.width : "100%" }}
    >
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p>
            <span className={styles.Post_StyledSpan}>User: </span>
            <span style={{ textDecoration: "underline", marginRight: 10 }}>
              {item.author.name}
            </span>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: 10 }}>{timeDiffToday(item.time)}s</span>
          </div>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link to="/post" onClick={() => dispatch(setPost(item.id))}>
            <h2 style={{ fontSize: style ? style.fontSize : 25 }}>
              {item.title}
            </h2>
          </Link>
          <div>
            <span className={styles.Post_StyledSpan}>Room: </span>
            <span style={{ textDecoration: "underline" }}>
              {item.room.title}
            </span>
          </div>
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
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <PostSelect item={item} />
          <Link to="/post" onClick={() => dispatch(setPost(item.id))}>
            <span>Comments</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
