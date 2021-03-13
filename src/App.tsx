import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import SnackbarProvider from "react-simple-snackbar";

const App: FunctionComponent<{}> = (): ReactElement => (
  <Router>
    <React.Fragment>
      <SnackbarProvider>
        <Routes />
      </SnackbarProvider>
    </React.Fragment>
  </Router>
);

export default App;
