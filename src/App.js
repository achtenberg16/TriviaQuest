import React from 'react';
import { Switch, Route } from 'react-router';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}
