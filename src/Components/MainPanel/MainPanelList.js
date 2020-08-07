import React from "react";
import "./mainPanel.css";
import styled from "styled-components";
import Post from "../Post/Post";
import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";
import {
  getAllSubscribedRoomThreads,
  getAllRoomThreads,
} from "../../redux/selectors";

const MainPanelList = ({ room }) => {
  const subscribedThreads = useSelector(getAllSubscribedRoomThreads);
  const allThreads = useSelector(getAllRoomThreads);

  const threads = room ? allThreads : subscribedThreads;

  return (
    <div className="MainPanelList_StyledContainer">
      {threads.map((item) => (
        <div key={item.id}>
          <Post item={item} />
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default MainPanelList;
