import React, { useState } from "react";
import { validate } from "../API/spacexdata";
import { signIn, signOut } from "../Actions";
import { connect } from "react-redux";
import { useHistory } from "react-router";

const Login = (props) => {
  let history = useHistory();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const validateuser = async () => {
    const response = await validate.get();
    response.data.map((user) => {
      if (user.name === username && user.password === password) {
        props.signIn(user.role);
        history.push("/Home");
      } else {
        seterror("invalid username and password");
      }
    });
    return "";
  };

  return (
    <div className="loginpage">
      <div>
        <label>Username</label>
        <input
          placeholder="Enter Username"
          value={username}
          type="text"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          placeholder="Enter Password"
          value={password}
          type="text"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
      </div>
      <div style={{ color: "red" }}>{error}</div>
      <div>
        <button
          type="button"
          onClick={() => {
            validateuser();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.logindetails.isSignedIn,
  };
};
export default connect(mapStateToProps, { signIn, signOut })(Login);
