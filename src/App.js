import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import QueryBasic from "./containers/QueryBasic";
import Query from "./containers/Query";
import QueryKeys from "./containers/QueryKeys";
import NetworkMode from "./containers/NetworkMode";

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            {" "}
            React Query
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" exact="true" className="nav-link">
                  {" "}
                  React query
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/query" className="nav-link">
                  {" "}
                  Query
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/querykey" className="nav-link">
                  {" "}
                  Query Keys
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/networkmode" className="nav-link">
                  {" "}
                  Network Mode
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<QueryBasic />}></Route>
        <Route path="/query" element={<Query />} />
        <Route path="/querykey" element={<QueryKeys />} />
        <Route path="/networkmode" element={<NetworkMode />} />
      </Routes>
    </>
  );
};

export default App;
