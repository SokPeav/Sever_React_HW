import React from "react";
import Auth from "./Auth";
import { useHistory, useLocation } from "react-router-dom";

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    Auth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <h1 style={{ padding: "50px" }} className="text-danger font-weight-bold ">
        You must log in to view the page at {from.pathname} page{" "}
      </h1>

      <button
        className="btn btn-success shadow text-justify text-center"
        onClick={login}
      >
        Log in
      </button>
    </div>
  );
}
export default LoginPage;
