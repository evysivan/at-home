import React, { useState } from "react";
import "./mainPanel.css";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { setSortCriteria } from "../../redux/actions";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AddPostPanel from "../Post/AddPostPanel";

const MainPanelHeader = () => {
  const dispatch = useDispatch();
  const [buttonClicked, setButtonClicked] = useState(1);
  const commonButtonProps = {
    style: { margin: 5 },
    variant: "outlined",
    color: "default",
  };

  return (
    <div className="MainPanelHeader_StyledHeader">
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <AddPostPanel />
        <div className="MainPanelHeader_Container">
          <Button
            {...commonButtonProps}
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
            {...commonButtonProps}
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
            {...commonButtonProps}
            startIcon={<VisibilityIcon />}
            className={cx(buttonClicked === 3 ? "btn-clicked" : "")}
            onClick={() => {
              dispatch(setSortCriteria("Hot"));
              setButtonClicked(3);
            }}
          >
            Most Viewed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainPanelHeader;
