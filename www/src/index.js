import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "@duffle-bag/css";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

import HomePage from "./pages/HomePage";
import DocsPage from "./pages/DocsPage";
import ButtonDocs from "./pages/css-docs/buttons";
import CardDocs from "./pages/css-docs/cards";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/docs" component={DocsPage} />
      <Route exact path="/docs/button" component={ButtonDocs} />
      <Route exact path="/docs/card" component={CardDocs} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
