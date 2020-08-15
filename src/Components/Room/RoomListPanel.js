import React from "react";
import styles from "./room.module.css";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import {
  getAllSubscribedRoomThreads,
  getAllRoomThreads,
  getCurrentRoom,
} from "../../redux/selectors";
import AddPostPanel from "./AddPostPanel";

const RoomListPanel = ({ room }) => {
  const subscribedThreads = useSelector(getAllSubscribedRoomThreads);
  const allThreads = useSelector(getAllRoomThreads);

  const threads = room ? allThreads : subscribedThreads;

  return (
    <div className={styles.Room_RoomListPanel}>
      <AddPostPanel />
      {threads.map((item) => (
        <Post item={item} key={item.id} />
      ))}
    </div>
  );
};

export default RoomListPanel;
