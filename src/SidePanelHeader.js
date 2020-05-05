import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: inline-block;
  height: 20%;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 10px;
  color: gray;
`;

const SidePanelHeader = () => {
  return (
    <StyledHeader>
      <h2>Your rooms</h2>
    </StyledHeader>
  );
};

export default SidePanelHeader;
