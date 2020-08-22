import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { SignIn } from "../api/auth";
import { setUser } from "../redux/actions";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import styles from "./authentication.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

function Login({ setShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await SignIn(email, password);
        setLoading(false);

        if (response.isError) setError(response.message);
        else {
          dispatch(setUser(response));
          history.push("/");
        }
      }}
      className={styles.Auth_LoginContainer}
    >
      <p>LOGIN</p>
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
