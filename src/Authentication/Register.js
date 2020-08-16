import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Registered from "./Registered";

import { createUser } from "../api/auth";

function Register({ setShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showRegistered, setShowRegistered] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      {showRegistered ? (
        <Registered />
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);

            const response = await createUser(email, password);
            setLoading(false);

            if (response.isError) setError(response.message);
            else {
              setShowRegistered(true);
              dispatch(setUser(response));
            }
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
    </div>
  );
}

export default Register;
