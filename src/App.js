import React from 'react';
import PlayersPage from "./pages/Players/PlayersPage";
import PointsPage from "./pages/Points/PointsPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
      <React.Fragment>
        <header>
          <div className="jumbotron">
            <h1 className="display-4">My Comunio</h1>
            <p className="lead">This is a simple app using ReactJS</p>
            <hr className="my-4"/>
            <a className="btn btn-primary btn-lg"
               href="https://getbootstrap.com/docs/4.4/components"
               role="button">Bootstrap components</a>
            <a className="btn btn-warning btn-lg"
               href="https://getbootstrap.com/docs/4.4/layout/grid/"
               role="button">Bootstrap grid</a>
          </div>
        </header>
        <div className="container-fluid">
          <BrowserRouter>
            <Switch>
              <Route path="/puntos" component={PointsPage}></Route>
              <Route path="/" component={PlayersPage}></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </React.Fragment>
  );
}

export default App;
