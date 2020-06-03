import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch } from "react-redux";
import { setRoom } from "./redux/actions";
import { Link } from "react-router-dom";

const LiContainer = styled.li`
  color: rgba(0, 0, 0, 0.6);
  direction: rtl;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SidePanelListItem = ({ room }) => {
  const dispatch = useDispatch();

  return (
    <Link to="/room">
      <LiContainer>
        <Container>
          <Button
            style={{ width: "100%" }}
            onClick={() => {
              dispatch(setRoom(room.id));
            }}
          >
            <p>{room.title}</p>
          </Button>
          <IconButton aria-label="delete" size="small">
            <MoreVertIcon fontSize="inherit" />
          </IconButton>
        </Container>
      </LiContainer>
    </Link>
  );
};

export default SidePanelListItem;
