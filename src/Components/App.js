import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
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
