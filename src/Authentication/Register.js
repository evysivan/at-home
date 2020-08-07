import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { createUser } from "../api/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const user = await createUser(email, password);
        } catch (e) {
          setError(e.message);
        }
        setLoading(false);
      }}
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
      {isLoading ? <CircularProgress color="primary" /> : null}
      {error ? <p>{error}</p> : null}
      <div>
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </div>
    </form>
  );
}

export default Register;
