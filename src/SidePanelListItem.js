import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { setRoom } from "./redux/actions";
import { getCurrentRoom } from "./redux/selectors";
import { Link } from "react-router-dom";

const LiContainer = styled.li`
  color: rgba(0, 0, 0, 0.6);
  /* direction: rtl; */
  background-color: ${(props) =>
    props.isCurrentRoom ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"};
  margin: 10px;
  border-radius: 6px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SidePanelListItem = ({ room }) => {
  const dispatch = useDispatch();
  const currentRoom = useSelector(getCurrentRoom);

  const isCurrentRoom = currentRoom === room.id;

  return (
    <Link to="/room">
      <LiContainer isCurrentRoom={isCurrentRoom}>
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
