import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";

const StyledItem = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  min-height: 100px;
  padding: 10px;
  box-sizing: border-box;
  margin: 20px 0;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
`;

const StyledSpan = styled.span`
  color: darkgray;
  margin-left: 10px;
`;

const BodyContainer = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  padding: 5px;
  height: 30%;
  width: 100%;
`;

const MainPanelThread = ({ item }) => {
  return (
    <StyledItem>
      <p>
        <StyledSpan>room: </StyledSpan>
        {item.room}
        <StyledSpan>by: </StyledSpan>
        {item.details.by}
        <StyledSpan>time: </StyledSpan>
        {item.details.time}
      </p>
      <Divider />
      <h2>Title: {item.details.title}</h2>
      <BodyContainer>
        <p>Body: {item.details.body}</p>
      </BodyContainer>
    </StyledItem>
  );
};

export default MainPanelThread;
