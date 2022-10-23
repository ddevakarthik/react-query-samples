import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { useIsFetching } from "@tanstack/react-query";

import QueryBasic from "./containers/QueryBasic";
import Query from "./containers/Query";
import QueryKeys from "./containers/QueryKeys";
import NetworkMode from "./containers/NetworkMode";
import ParallelQueries from "./containers/ParallelQueries";
import DependentQueries from "./containers/DependentQueries";
import RefetchQueries from "./RefetchQueries";

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
              <li className="nav-item">
                <NavLink to="/parallelqueries" className="nav-link">
                  {" "}
                  Parallel Queries
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dependentqueries" className="nav-link">
                  {" "}
                  Dependent Queries
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/refetchqueries" className="nav-link">
                  {" "}
                  Refetch Queries
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ backgroundColor: "yellow" }}>
        <GlobalFetchingIndicator />
      </div>
      <Routes>
        <Route path="/" element={<QueryBasic />}></Route>
        <Route path="/query" element={<Query />} />
        <Route path="/querykey" element={<QueryKeys />} />
        <Route path="/networkmode" element={<NetworkMode />} />
        <Route path="/parallelqueries" element={<ParallelQueries />} />
        <Route path="/dependentqueries" element={<DependentQueries />} />
        <Route path="/refetchqueries" element={<RefetchQueries />} />
      </Routes>
    </>
  );
};

export default App;

function GlobalFetchingIndicator() {
  const isFetching = useIsFetching();
  return isFetching ? <div>Fetching in progress...</div> : null;
}
