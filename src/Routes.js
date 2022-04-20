import React, { Fragment } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Tables } from "./pages/Tables";
import { Hero404 } from "./pages/Hero404";

import Sidebar from "./Sidebar";
import Header from "./pages/layouts/Header.js";
import './Route.scss';

const Routes = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <div className="content d-flex">
          <Sidebar />
          <div
              style={{
                flex: "1 1 auto",
                display: "flex",
                flexFlow: "column",
                height: "100vh",
                overflowY: "hidden",
              }}
            >
            

              <Route path="/play" render={() => <Dashboard/> } />
              <Route path="/tables" component={Tables} />
              <Route path="/hero404" component={Hero404} />
              <Redirect to="/play"/>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;