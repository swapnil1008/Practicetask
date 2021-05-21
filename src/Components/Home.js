import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../Actions";
import DisplaySchema from "./DisplaySchema";
import SchemaList from "./SchemaList";
const Home = (props) => {
  let history = useHistory();
  const signOutCall = () => {
    props.signOut();
    history.push("/");
  };
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/Home" className="a">
              Home
            </Link>
          </li>
          <li>
            <span className="a">{props.role}</span>
          </li>
          <li style={{ float: "right", marginRight: "10px" }}>
            <button
              type="button"
              onClick={() => {
                signOutCall();
              }}
              className="a"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <SchemaList />
      <DisplaySchema />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    role: state.logindetails.role,
  };
};
export default connect(mapStateToProps, { signOut })(Home);
