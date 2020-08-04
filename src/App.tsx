import React, { useRef } from 'react';
import { loremIpsum } from 'lorem-ipsum';

import { Main, GlobalStyle, Container } from './styles';
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
  const addItemRef = useRef<Function | null>(null);

  const handleMainClick = () => {
    if (typeof addItemRef.current === 'function') {
      addItemRef.current(loremIpsum());
    }
  };

  return (
    <Main className="main" onClick={handleMainClick}>
      <GlobalStyle />
      {/* invoke children fn passing in addItem fn to be stored in ref */}
      <Switch>
        <Route path="/" exact>
          <Navigation />
        </Route>
        <Route path="/message-hub">
          Click here to create notification
          <MessageHub children={(addItem) => (addItemRef.current = addItem)} />
        </Route>
      </Switch>
    </Main>
  );
};

export default App;
