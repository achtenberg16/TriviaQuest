import React from 'react';
import { Switch, Route } from 'react-router';
import Feedback from '../Pages/Feedback';
import Game from '../Pages/Game';
import Login from '../Pages/Login';
import Ranking from '../Pages/Ranking';
import Settings from '../Pages/Settings';

function RoutesComponet() {
  return (
    <Switch>
      <Route path="/ranking" component={ Ranking } />
      <Route path="/settings" component={ Settings } />
      <Route path="/game" component={ Game } />
      <Route path="/feedback" component={ Feedback } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default RoutesComponet;
