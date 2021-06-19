import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Portfolio} />
        <Route component={Home} />
      </Switch>

    </Router>
  );
}

export default App;
