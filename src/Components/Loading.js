import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import logo from "../assets/logo.png";
import styles from "./styles.module.css";

function Loading() {
  return (
    <div className={styles.Loading}>
      <img src={logo} className="logo" alt="logo" />
      <CircularProgress />
    </div>
  );
}

export default Loading;
