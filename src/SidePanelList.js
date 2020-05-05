import React from "react";
import styled from "styled-components";
import SidePanelListItem from "./SidePanelListItem";

const StyledList = styled.ol``;

const list = ["סטטיסטיקה", "מנהיגות יזמית", "אלגברה", "כימיה"];

const SidePanelList = () => {
  return (
    <StyledList>
      {list.map((item) => (
        <SidePanelListItem title={item} />
      ))}
    </StyledList>
  );
};

export default SidePanelList;
