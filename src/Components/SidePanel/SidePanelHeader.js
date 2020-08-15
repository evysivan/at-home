import React from "react";
import "../../App.css";
import styles from "./sidePanel.module.css";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setRoom } from "../../redux/actions";
import Button from "@material-ui/core/Button";
import bg from "../../assets/sidePanelHeaderBG.jpg";

const SidePanelHeader = ({ isItems }) => {
  const dispatch = useDispatch();

  return (
    <p className={styles.SidePanelHeader_StyledHeader}>
      {isItems ? "Subscribed rooms" : "No Subscribed Rooms Yet"}
    </p>
  );
};

export default SidePanelHeader;
