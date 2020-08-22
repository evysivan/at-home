import React from "react";
import styles from "./mainPanel.module.css";
import styled from "styled-components";
import Post from "../Post/Post";
import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";
import { getAllPosts, getAllRoomPosts } from "../../redux/selectors";

const MainPanelList = ({ room }) => {
  const subscribedPosts = useSelector(getAllPosts);
  const allPosts = useSelector(getAllRoomPosts);

  const posts = room ? allPosts : subscribedPosts;

  console.log(posts);

  return (
    <div className={styles.MainPanelList_StyledContainer}>
      {posts.map((post) => (
        <div key={post.id}>
          <Post item={post} />
        </div>
      ))}
    </div>
  );
};

export default MainPanelList;
