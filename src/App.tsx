import * as React from 'react';
import {FunctionComponent, ReactElement} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

const App: FunctionComponent<{}> = (): ReactElement => (
  <Router>
    <React.Fragment>
      <Routes />
    </React.Fragment>
  </Router>
);

export default App;
