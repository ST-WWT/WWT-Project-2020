import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div id="login">
      <h1 className="title">Login</h1>
      <div className="form">
            <div className="box">
                <h1>Username</h1>
                <input autocomplete="off" id="username" type="text"/>
            </div>
            <div className="box">
                <h1>Password</h1>
                <input id="password" type="password"/>
            </div>
        <br/>
        <Link to="/">
            <input value="Login" type="submit"/>
        </Link>
      </div>
    </div>
  );
};

export default Login;