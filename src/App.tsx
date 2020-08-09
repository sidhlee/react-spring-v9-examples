import React from 'react';

import Navigation from './Navigation';
import { GlobalStyle } from './styles';
import MessageHub from './examples/messageHub/MessageHub';
import { Switch, Route } from 'react-router-dom';
import Trees from './examples/trees/Trees';
import Navbar from './examples/dropdownMenu/Navbar';
import Carousel from './examples/carousel/Carousel';

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* invoke children fn passing in addItem fn to be stored in ref */}
      <Switch>
        <Route path="/" exact>
          <Navigation />
        </Route>
        <Route path="/message-hub">
          <MessageHub />
        </Route>
        <Route path="/trees">
          <Trees />
        </Route>
        <Route path="/dropdown-menu">
          <Navbar />
        </Route>
        <Route path="/carousel">
          <Carousel />
        </Route>
      </Switch>
    </>
  );
};

export default App;
