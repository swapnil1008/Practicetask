import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Login/Login";
const Routes = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Home">
        {props.isSignedIn ? <Home></Home> : <Redirect to="/" />}
      </Route>
    </Switch>
  );
};
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.logindetails.isSignedIn,
  };
};
export default connect(mapStateToProps)(Routes);
