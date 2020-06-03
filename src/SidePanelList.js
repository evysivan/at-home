import React from "react";
import styled from "styled-components";
import SidePanelListItem from "./SidePanelListItem";
import { useSelector } from "react-redux";
import { getAllSubscribedRooms, getAllRooms } from "./redux/selectors";
import Divider from "@material-ui/core/Divider";

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  list-style-type: none;
  box-sizing: border-box;
`;

const SidePanelList = () => {
  const subscriptions = useSelector(getAllSubscribedRooms);
  const rooms = useSelector(getAllRooms);

  const subscribedRooms = rooms.filter((room) =>
    subscriptions.includes(room.id)
  );

  return (
    <StyledList>
      {subscribedRooms.map((room) => (
        <>
          <SidePanelListItem room={room} />
          <Divider className="side-list-divider" />
        </>
      ))}
    </StyledList>
  );
};

export default SidePanelList;
