import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Login({ setShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <TextField
          style={{ width: "100%", marginLeft: "0" }}
          label="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          style={{ width: "100%", marginLeft: "0" }}
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div>
        <Button variant="contained" color="primary">
          Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowRegister(true)}
        >
          Register
        </Button>
      </div>
    </form>
  );
}

export default Login;
