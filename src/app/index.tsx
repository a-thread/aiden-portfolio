import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/home-page";
import Portfolio from "./components/portfolio/portfolio-page";
import Resume from "./components/resume/resume-page";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function App() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
            <Route component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
