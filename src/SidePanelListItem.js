import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const LiContainer = styled.li`
  color: rgba(0, 0, 0, 0.6);
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SidePanelListItem = ({ title }) => {
  return (
    <LiContainer>
      <Container>
        <Button>
          <p>{title}</p>
        </Button>
        <IconButton aria-label="delete" size="small">
          <MoreVertIcon fontSize="inherit" />
        </IconButton>
      </Container>
    </LiContainer>
  );
};

export default SidePanelListItem;
