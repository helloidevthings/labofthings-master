import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Lab from './pages/lab';
import Animations from './pages/lab/Animations';
import CSSAnimations from './pages/lab/CSSAnimations';
import ButtonSlider from './pages/lab/ButtonSlider';
import Howdy from './pages/lab/Howdy';
import Typography from './pages/lab/Typography';
import HolidayHappyHour1 from './pages/lab/HolidayHappyHour1';
import HolidayHappyHour2 from './pages/lab/HolidayHappyHour2';
import StyleGuide from './pages/lab/StyleGuide';
import StyleGuideBlog from './pages/lab/StyleGuideBlog';
import Xan from './pages/lab/DnD/Xan';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/button-slider" component={ButtonSlider} />
      <Route path="/animations" component={Animations} />
      <Route path="/css-animations" component={CSSAnimations} />
      <Route path="/howdy" component={Howdy} />
      <Route path="/typography" component={Typography} />
      <Route path="/onlineparty" component={HolidayHappyHour1} />
      <Route path="/giftexchange" component={HolidayHappyHour2} />
      <Route path="/xan" component={Xan} />
      <Route path="/StyleGuide" component={StyleGuide} />
      <Route path="/StyleGuideBlog" component={StyleGuideBlog} />
      <Route path="/lab" component={Lab} />
    </Switch>
  </BrowserRouter>
);

export default Router;
