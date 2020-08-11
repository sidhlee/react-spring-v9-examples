import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import { GlobalStyle, HomeLink } from './styles';

const MessageHub = lazy(() => import('./examples/messageHub/MessageHub'));
const Trees = lazy(() => import('./examples/trees/Trees'));
const Navbar = lazy(() => import('./examples/dropdownMenu/Navbar'));
const Carousel = lazy(() => import('./examples/carousel/Carousel'));

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HomeLink to="/">ReactSpring</HomeLink>
      {/* invoke children fn passing in addItem fn to be stored in ref */}
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <Navigation />
          </Route>
          <Route path="/message-hub" component={MessageHub} />
          <Route path="/trees" component={Trees} />
          <Route path="/dropdown-menu" component={Navbar} />
          <Route path="/carousel" component={Carousel} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
