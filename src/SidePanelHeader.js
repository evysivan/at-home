import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setRoom } from "./redux/actions";
import Button from "@material-ui/core/Button";
import bg from "./assets/sidePanelHeaderBG.jpg";

const StyledHeader = styled.div`
  display: inline-block;
  height: 20%;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  color: gray;
  direction: rtl;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
`;

const SidePanelHeader = () => {
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <h1 style={{ alignSelf: "flex-start", color: "black" }}>חדרים</h1>
      <Button
        style={{
          backgroundColor: "rgba(255,255,255,0.8)",
          fontSize: 20,
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.55)",
        }}
        onClick={() => dispatch(setRoom(""))}
      >
        הכל
      </Button>
    </StyledHeader>
  );
};

export default SidePanelHeader;
