import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Animations from './pages/lab/Animations';
import ButtonSlider from './pages/lab/ButtonSlider';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/button-slider" component={ButtonSlider} />
      <Route exact path="/animations" component={Animations} />
    </Switch>
  </BrowserRouter>
);

export default Router;
