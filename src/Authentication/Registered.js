import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Registered() {
  return (
    <div className="Auth_Registered">
      <h3>You Registered!</h3>
      <Link to="/">
        <Button variant="contained" color="primary" type="submit">
          Go to Home Page
        </Button>
      </Link>
    </div>
  );
}

export default Registered;
