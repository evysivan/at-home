import React from "react";
import "../../App.css";
import styles from "./sidePanel.module.css";
import SidePanelHeader from "./SidePanelHeader";
import SidePanelList from "./SidePanelList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRoom } from "../../redux/actions";
import logo from "../../assets/logo.png";

function SidePanel() {
  const dispatch = useDispatch();

  return (
    <div className={styles.StyledSidePanel}>
      <div className={styles.SidePanel_StyledContainer}>
        <div className={styles.SidePanel_HomeLogoContainer}>
          <Link to="/" onClick={() => dispatch(setRoom(""))}>
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
        <SidePanelHeader />
        <SidePanelList />
      </div>
    </div>
  );
}

export default SidePanel;
