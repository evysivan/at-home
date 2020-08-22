import React from "react";
import styles from "./sidePanel.module.css";
import styled from "styled-components";
import SidePanelListItem from "./SidePanelListItem";
import { useSelector } from "react-redux";
import {
  getAllSubscribedRooms,
  getAllRooms,
  getUser,
} from "../../redux/selectors";
import Divider from "@material-ui/core/Divider";
import SidePanelHeader from "./SidePanelHeader";
import { getUserSubscribedRooms } from "../../api/userCollection";

const SidePanelList = () => {
  const subscriptions = useSelector(getAllSubscribedRooms);
  const rooms = useSelector(getAllRooms);
  const user = useSelector(getUser);

  const subscribedRooms = subscriptions;

  return (
    <>
      <SidePanelHeader isItems={subscribedRooms.length > 0} />
      <div className={styles.StyledList}>
        {subscribedRooms.map((room, index) => (
          <SidePanelListItem key={`${room}_${index}`} room={room} />
        ))}
      </div>
    </>
  );
};

export default SidePanelList;
