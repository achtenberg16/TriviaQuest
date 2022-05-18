import React from 'react';
import { Switch, Route } from 'react-router';
import Feedback from './Pages/Feedback';
import Game from './Pages/Game';
import Login from './Pages/Login';
import Settings from './Pages/Settings';

export default function App() {
  return (
    <Switch>
      <Route path="/settings" component={ Settings } />
      <Route path="/game" component={ Game } />
      <Route path="/feedback" component={ Feedback } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}
