import React, { useEffect, useState } from "react";
import styles from "./room.module.css";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import {
  getAllPosts,
  getAllRoomPosts,
  getCurrentRoom,
} from "../../redux/selectors";
import AddPostPanel from "./AddPostPanel";
import { subscribeAllPostsByRoomID } from "../../api/postsCollection";

const RoomListPanel = ({ room }) => {
  const subscribedPosts = useSelector(getAllPosts);
  const allPosts = useSelector(getAllRoomPosts);
  const currentRoom = useSelector(getCurrentRoom);
  const [roomPosts, setRoomPosts] = useState(allPosts);

  useEffect(() => {
    if (!currentRoom) return;
    (async () => {
      subscribeAllPostsByRoomID(currentRoom.id, (rooms) =>
        setRoomPosts([...roomPosts, ...rooms])
      );
    })();
  }, [currentRoom]);

  const posts = room ? roomPosts : subscribedPosts;

  return (
    <div className={styles.Room_RoomListPanel}>
      <AddPostPanel />
      {posts.map((item) => (
        <Post item={item} key={item.id} />
      ))}
    </div>
  );
};

export default RoomListPanel;
