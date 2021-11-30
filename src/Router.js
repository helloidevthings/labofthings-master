import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Lab from './pages/lab';
import Animations from './pages/lab/Animations';
import ButtonSlider from './pages/lab/ButtonSlider';
import Howdy from './pages/lab/Howdy';
import Typography from './pages/lab/Typography';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/button-slider" component={ButtonSlider} />
      <Route path="/animations" component={Animations} />
      <Route path="/howdy" component={Howdy} />
      <Route path="/typography" component={Typography} />
      <Route path="/lab" component={Lab} />
    </Switch>
  </BrowserRouter>
);

export default Router;
