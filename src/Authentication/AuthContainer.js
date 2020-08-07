import React, { useState } from "react";
import styles from "./auth.styles";

import Login from "./Login";
import Register from "./Register";

function AuthContainer(props) {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "auto 0",
        alignSelf: "center",
        width: "30vw",
        height: "50vh",
        borderRadius: "10px",
        boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.15)",
        boxSizing: "border-box",
        padding: "10px",
      }}
    >
      {showRegister ? (
        <Register />
      ) : (
        <Login setShowRegister={setShowRegister} />
      )}
    </div>
  );
}

export default AuthContainer;
