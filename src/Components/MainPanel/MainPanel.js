import React from "react";
import "../../App.css";
import styles from "./mainPanel.module.css";
import styled from "styled-components";
import MainPanelHeader from "./MainPanelHeader";
import MainPanelList from "./MainPanelList";

function MainPanel() {
  return (
    <div className={styles.StyledMainPanel}>
      <MainPanelHeader />
      <MainPanelList />
    </div>
  );
}

export default MainPanel;
