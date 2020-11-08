import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import { HOME_PATH, RESUME_PATH, PORTFOLIO_PATH } from "./utils/pathNames";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME_PATH} component={Home} />
        <Route exact path={PORTFOLIO_PATH} component={Portfolio} />
        <Route exact path={RESUME_PATH} component={Resume} />
        <Route component={Home} />
      </Switch>

    </Router>
  );
}

export default App;
