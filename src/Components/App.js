import React from "react";
import Login from "../Login/Login";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import DisplaySchema from "./DisplaySchema";
import SchemaList from "./SchemaList";
import Home from "./Home";
import Routes from "../Routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/"></Link>
      <Link to="/Home"></Link>
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default App;
