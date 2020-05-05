import React from "react";
import styled from "styled-components";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import VisibilityIcon from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";

const StyledHeader = styled.div`
  display: inline-block;
  height: 10%;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
  color: gray;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainPanelHeader = () => {
  return (
    <StyledHeader>
      <Container>
        <h2>Trending</h2>
        <IconButton aria-label="delete" size="medium">
          <WhatshotIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="medium">
          <CalendarTodayIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="medium">
          <VisibilityIcon fontSize="inherit" />
        </IconButton>
      </Container>
    </StyledHeader>
  );
};

export default MainPanelHeader;
