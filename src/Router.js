import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import ButtonSlider from './pages/lab/ButtonSlider';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/button-slider" component={ButtonSlider} />
    </Switch>
  </BrowserRouter>
);

export default Router;
