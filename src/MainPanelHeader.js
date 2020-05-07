import React, { useState } from "react";
import styled from "styled-components";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { setSortCriteria } from "./redux/actions";

const StyledHeader = styled.div`
  display: inline-block;
  height: 10%;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: "row";
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
  color: gray;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const MainPanelHeader = () => {
  const dispatch = useDispatch();
  const [buttonClicked, setButtonClicked] = useState(1);

  return (
    <StyledHeader>
      <h2>Trending</h2>
      <Container>
        <Button
          style={{ margin: 5 }}
          variant="outlined"
          color="default"
          startIcon={<WhatshotIcon />}
          className={cx(buttonClicked === 1 ? "btn-clicked" : "")}
          onClick={() => {
            dispatch(setSortCriteria("Hot"));
            setButtonClicked(1);
          }}
        >
          Hot
        </Button>
        <Button
          style={{ margin: 5 }}
          variant="outlined"
          color="default"
          startIcon={<CalendarTodayIcon />}
          className={cx(buttonClicked === 2 ? "btn-clicked" : "")}
          onClick={() => {
            dispatch(setSortCriteria("Latest"));
            setButtonClicked(2);
          }}
        >
          Latest
        </Button>
        <Button
          style={{ margin: 5 }}
          variant="outlined"
          color="default"
          startIcon={<VisibilityIcon />}
          className={cx(buttonClicked === 3 ? "btn-clicked" : "")}
          onClick={() => {
            dispatch(setSortCriteria("Hot"));
            setButtonClicked(3);
          }}
        >
          Most Viewed
        </Button>
      </Container>
    </StyledHeader>
  );
};

export default MainPanelHeader;
