import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Contracts from './pages/Contracts';
import NewContracts from './pages/NewContracts';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/contracts" component={Contracts} />
        <Route path="/newcontracts" component={NewContracts} />
      </Switch>
    </BrowserRouter>
  );
}
