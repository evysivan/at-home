import React from "react";
import "./post.css";
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

const Post = ({ item, style }) => {
  const dispatch = useDispatch();

  return (
    <div className="Post_StyledContainer">
      <div className="Post_StyledItemBla" width={20}>
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
      <div className="Post_StyledItem" style={{ width: style ? style.width : "100%" }}>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p>
              <span className="Post_StyledSpan">User: </span>
              <span style={{ textDecoration: "underline", marginRight: 10 }}>
                {item.details.by}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: 10 }}>
                {item.details.time} hours ago
              </span>
              {/* <p>Votes: {item.votes}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton
          className="arrow-icon"
          color="default"
          aria-label="vote up"
          onClick={() => dispatch(voteUp(item.id))}
          >
          <ArrowDropUpIcon />
          </IconButton>
          <IconButton
          className="arrow-icon"
          color="default"
          aria-label="vote down"
          onClick={() => dispatch(voteDown(item.id))}
          >
          <ArrowDropDownIcon />
          </IconButton>
        </div> */}
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
                {item.details.title}
              </h2>
            </Link>
            <div>
              <span className="Post_StyledSpan">Room: </span>
              <span style={{ textDecoration: "underline" }}>
                {item.room.title}
              </span>
            </div>
          </div>
          <div className="Post_BodyContainer">
            {typeof item.details.body === "string" ? (
              <p>{item.details.body}</p>
            ) : (
                item.details.body
              )}
            {item.details.image && (
              <img
                className="thread-image"
                src={item.details.image}
                alt="image"
              />
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
            <Select style={{ width: "200px" }}>
              <MenuItem
                value={1}
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => dispatch(voteUp(item.id))}
              >
                <img
                  className="thread-thumbnail"
                  src={helped1}
                  width={30}
                  height={30}
                  alt="thumbnail"
                  style={{ marginRight: 10 }}
                />
                <ListItemText primary="This helped" />
              </MenuItem>
              <MenuItem value={2}>
                <img
                  className="thread-thumbnail"
                  src={helped1}
                  width={30}
                  height={30}
                  alt="thumbnail"
                  style={{ marginRight: 10 }}
                />
                <ListItemText primary="Comprehensive" />
              </MenuItem>
              <MenuItem value={3}>
                <img
                  className="thread-thumbnail"
                  src={helped1}
                  width={30}
                  height={30}
                  alt="thumbnail"
                  style={{ marginRight: 10 }}
                />
                <ListItemText primary="Detailed" />
              </MenuItem>
              <MenuItem value={4}>
                {/* <ListItemIcon>
                <ArrowDropDownIcon />
              </ListItemIcon> */}
                <img
                  className="thread-thumbnail"
                  src={helped1}
                  width={30}
                  height={30}
                  alt="thumbnail"
                  style={{ marginRight: 10 }}
                />
                <ListItemText primary="Easy to understand" />
              </MenuItem>
            </Select>
            <Link to="/post" onClick={() => dispatch(setPost(item.id))}>
              <span>Comments</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="Post_StyledItemRight" width={20}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <HelpIcon />
          <p style={{ marginLeft: 5 }}>Helpful: {item.votes}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <HelpIcon />
          <p style={{ marginLeft: 5 }}>Comprehensive: 100</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <HelpIcon />
          <p style={{ marginLeft: 5 }}>Detailed: 59</p>
        </div>
        {/* <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton
            className="arrow-icon"
            color="default"
            aria-label="vote up"
            onClick={() => dispatch(voteUp(item.id))}
          >
            <ArrowDropUpIcon />
          </IconButton>
          <IconButton
            className="arrow-icon"
            color="default"
            aria-label="vote down"
            onClick={() => dispatch(voteDown(item.id))}
          >
            <ArrowDropDownIcon />
          </IconButton>
        </div> */}
      </div>
    </div>
  );
};

export default Post;
