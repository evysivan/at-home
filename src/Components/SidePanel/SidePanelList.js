import React from "react";
import styles from "./sidePanel.module.css";
import styled from "styled-components";
import SidePanelListItem from "./SidePanelListItem";
import { useSelector } from "react-redux";
import { getAllSubscribedRooms, getAllRooms } from "../../redux/selectors";
import Divider from "@material-ui/core/Divider";

const SidePanelList = () => {
  const subscriptions = useSelector(getAllSubscribedRooms);
  const rooms = useSelector(getAllRooms);

  const subscribedRooms = rooms.filter((room) =>
    subscriptions.includes(room.id)
  );

  return (
    <div className={styles.StyledList}>
      {subscribedRooms.map((room, index) => (
        <SidePanelListItem key={`${room}_${index}`} room={room} />
      ))}
    </div>
  );
};

export default SidePanelList;
