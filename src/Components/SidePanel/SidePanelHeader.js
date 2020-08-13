import React from "react";
import "../../App.css";
import styles from "./sidePanel.module.css";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setRoom } from "../../redux/actions";
import Button from "@material-ui/core/Button";
import bg from "../../assets/sidePanelHeaderBG.jpg";

const SidePanelHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.SidePanelHeader_StyledHeader}>
      <p style={{ margin: 0, color: "gray" }}>Subscribed rooms</p>
    </div>
  );
};

export default SidePanelHeader;
