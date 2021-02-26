import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Landing from '../containers/Landing';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
    </Switch>
  );
}

export default Routes;
