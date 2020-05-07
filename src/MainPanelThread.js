import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useDispatch } from "react-redux";
import { voteUp, voteDown } from "./redux/actions";

const StyledItem = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  min-height: 100px;
  padding: 10px;
  box-sizing: border-box;
  margin: 20px 0;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
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
`;

const MainPanelThread = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <StyledItem>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p>
          <StyledSpan>חדר: </StyledSpan>
          <span style={{ textDecoration: "underline" }}>{item.room.title}</span>
          <StyledSpan>משתמש: </StyledSpan>
          <span style={{ textDecoration: "underline" }}>{item.details.by}</span>
          <StyledSpan>לפני: </StyledSpan>
          <span style={{ textDecoration: "underline" }}>
            {item.details.time} שעות
          </span>
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p>הצבעות: {item.votes}</p>
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
          </div>
        </div>
      </div>
      <Divider />
      <h2>{item.details.title}</h2>
      <BodyContainer>
        <p>{item.details.body}</p>
        {item.details.image && (
          <img className="thread-image" src={item.details.image} alt="image" />
        )}
      </BodyContainer>
    </StyledItem>
  );
};

export default MainPanelThread;
