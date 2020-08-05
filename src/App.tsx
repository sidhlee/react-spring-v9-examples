import React from 'react';

import { GlobalStyle } from './styles';
import MessageHub from './examples/messageHub/MessageHub';
import { Switch, Route, NavLink } from 'react-router-dom';
import Trees from './examples/trees/Trees';

const Navigation = () => (
  <ul>
    <li>
      <NavLink to="message-hub">Message Hub</NavLink>
    </li>
    <li>
      <NavLink to="trees">Trees</NavLink>
    </li>
  </ul>
);

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
      </Switch>
    </>
  );
};

export default App;
