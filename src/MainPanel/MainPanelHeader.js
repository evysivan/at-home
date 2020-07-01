import React, { useState } from "react";
import styled from "styled-components";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { setSortCriteria } from "../redux/actions";
import Divider from "@material-ui/core/Divider";
import AddIcon from "@material-ui/icons/Add";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";

const StyledHeader = styled.div`
  display: inline-block;
  min-height: 10%;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
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
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <ExpansionPanel style={{ width: "50%" }}>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <p style={{ margin: 0 }}>Add Post</p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              style={{ width: "80%" }}
              id="standard-basic"
              label="Standard"
            />
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <input type="submit" />
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>{" "}
        <Container>
          <Button
            style={{ margin: 5 }}
            variant="outlined"
            color="default"
            startIcon={<ThumbUpIcon />}
            className={cx(buttonClicked === 1 ? "btn-clicked" : "")}
            onClick={() => {
              dispatch(setSortCriteria("Hot"));
              setButtonClicked(1);
            }}
          >
            Helpful
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
      </div>
    </StyledHeader>
  );
};

export default MainPanelHeader;
