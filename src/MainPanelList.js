import React from "react";
import styled from "styled-components";
import MainPanelThread from "./MainPanelThread";
import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";
import {
  getAllSubscribedRoomThreads,
  getAllRoomThreads,
} from "./redux/selectors";

const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 10px;
`;

const MainPanelList = ({ room }) => {
  const subscribedThreads = useSelector(getAllSubscribedRoomThreads);
  const allThreads = useSelector(getAllRoomThreads);
  console.log(room);

  const threads = room ? allThreads : subscribedThreads;

  return (
    <StyledContainer>
      {threads.map((item) => (
        <div key={item.id}>
          <MainPanelThread item={item} />
          <Divider />
        </div>
      ))}
    </StyledContainer>
  );
};

export default MainPanelList;
