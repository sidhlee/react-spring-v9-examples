import React from 'react';

import { GlobalStyle } from './styles';
import MessageHub from './examples/MessageHub';
import { Switch, Route, NavLink } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li>
      <NavLink to="message-hub">Message Hub</NavLink>
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
      </Switch>
    </>
  );
};

export default App;
