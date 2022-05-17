import React from 'react';
import { Switch, Route } from 'react-router';
import Game from './Pages/Game';
import Login from './Pages/Login';

export default function App() {
  return (
    <Switch>
      <Route path="/game" component={ Game } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}
