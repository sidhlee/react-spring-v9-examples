import React from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './styles';
import MessageHub from './examples/messageHub/MessageHub';
import { Switch, Route, NavLink } from 'react-router-dom';
import Trees from './examples/trees/Trees';

const Navigation = styled(({ className }) => (
  <nav className={className}>
    <ul>
      <li>
        <NavLink to="message-hub">Message Hub</NavLink>
      </li>
      <li>
        <NavLink to="trees">Trees</NavLink>
      </li>
    </ul>
  </nav>
))`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    padding-bottom: 0.5em;
  }
`;

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
