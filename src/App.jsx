import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import { MyMNA, MNA, Party, Bill, MNAAbout, MNADetail } from "./pages";
import BillDetail from "./components/BillDetail";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="mt-4 container">
          <Switch>
            <Route exact path="/" />
            <Route path="/mymna" component={MyMNA} />
            <Route path="/mna/:mnaId" component={MNADetail} />
            <Route path="/mna" component={MNA} />
            <Route path="/party" component={Party} />
            <Route path="/bill/:billId" component={BillDetail} />
            <Route path="/bill" component={Bill} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
