import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import QueryBasic from "./containers/QueryBasic";
import QueryKeys from "./containers/QueryKeys";
const App = () => {
  // let routes = (
  //   <Routes>
  //     <Route path="/" exact component={QueryBasic} />
  //     <Route path="/querykeys" component={QueryKeys} />
  //     {/* <Route path="*" component={NotFoundPage} /> */}
  //   </Routes>
  // );

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
                <NavLink to="/" exact className="nav-link">
                  {" "}
                  Query Basic
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/querykeys" className="nav-link">
                  {" "}
                  Query Keys
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<QueryBasic />}></Route>
        <Route path="/querykeys" element={<QueryKeys />} />
      </Routes>
    </>
  );
};

export default App;
