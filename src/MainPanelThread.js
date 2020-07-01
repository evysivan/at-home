import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useDispatch } from "react-redux";
import { voteUp, voteDown, setPost } from "./redux/actions";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import helped1 from "./assets/helped/helped1.png";
import HelpIcon from "@material-ui/icons/Help";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledItem = styled.div`
  background-color: rgba(255, 255, 255, 1);
  min-height: 100px;
  padding: 10px;
  box-sizing: border-box;
  margin: 20px 0;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledItemBla = styled.div`
  background-color: rgba(255, 255, 255, 1);
  min-height: 100px;
  padding: 10px;
  box-sizing: border-box;
  margin: 20px 0;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: "20%";
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const StyledItemRight = styled.div`
  background-color: rgba(255, 255, 255, 1);
  min-height: 100px;
  padding: 10px;
  box-sizing: border-box;
  margin: 20px 0;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

const StyledSpan = styled.span`
  color: rgba(0, 0, 0, 0.6);
  margin-right: 10px;
`;

const BodyContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border-radius: 10px;
  padding: 5px;
  height: 30%;
  width: 100%;
  direction: rtl;
`;

const MainPanelThread = ({ item, style }) => {
  const dispatch = useDispatch();

  return (
    <StyledContainer>
      <StyledItemBla width={20}>
        {item.thumbnail && (
          <img
            className="thread-thumbnail"
            src={item.thumbnail}
            width={80}
            height={80}
            alt="thumbnail"
          />
        )}
      </StyledItemBla>
      <StyledItem width={style ? style.width : "100%"}>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p>
              <StyledSpan>User: </StyledSpan>
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
              <StyledSpan>Room: </StyledSpan>
              <span style={{ textDecoration: "underline" }}>
                {item.room.title}
              </span>
            </div>
          </div>
          <BodyContainer>
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
          </BodyContainer>
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
      </StyledItem>
      <StyledItemRight width={20}>
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
      </StyledItemRight>
    </StyledContainer>
  );
};

export default MainPanelThread;
