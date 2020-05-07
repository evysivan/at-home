import React from "react";
import styled from "styled-components";
import MainPanelThread from "./MainPanelThread";
import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";
import { getAllRoomThreads } from "./redux/selectors";

const StyledContainer = styled.div`
  box-sizing: border-box;
  direction: rtl;
  /* height: 100%; */
`;

const MainPanelList = () => {
  const threads = useSelector(getAllRoomThreads);

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
