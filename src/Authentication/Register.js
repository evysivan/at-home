import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Registered from "./Registered";
import styles from "./authentication.module.css";

import { createUser } from "../api/auth";

function Register({ setShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showRegistered, setShowRegistered] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {showRegistered ? (
        <Registered />
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);

            const response = await createUser(email, password, name);
            setLoading(false);
            console.log(response);
            if (response.isError) setError(response.message);
            else {
              setShowRegistered(true);
              dispatch(setUser(response));
            }
          }}
          className={styles.Auth_RegisterContainer}
        >
          <p>REGISTER</p>

          <div>
            <TextField
              style={{ width: "100%", marginLeft: "0" }}
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowRegister(false)}
            >
              Go to Login
            </Button>
          </div>
        </form>
      )}
    </>
  );
}

export default Register;
