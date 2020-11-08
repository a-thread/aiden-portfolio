import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import { HOME_PATH, RESUME_PATH, PORTFOLIO_PATH} from "./pathNames";


function App() {
  return (
    <Router>
        <Route exact path={HOME_PATH} component={Home} />
        <Route exact path={PORTFOLIO_PATH} component={Portfolio} />
        <Route exact path={RESUME_PATH} component={Resume} />

    </Router>
  );
}

export default App;
