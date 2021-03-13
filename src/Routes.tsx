import * as React from 'react';
import {FunctionComponent, ReactElement} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Employee from './components/Employee';
import Staff from './components/Staff';

const Routes: FunctionComponent<{}> = (): ReactElement => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/employee" component={Employee} />
    <Route path="/staff" component={Staff} />
  </Switch>
);

export default Routes;
