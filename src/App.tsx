import React, { Suspense, lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Navigation from './Navigation';
import { GlobalStyle, HomeLink } from './styles';

const MessageHub = lazy(() => import('./examples/messageHub/MessageHub'));
const Trees = lazy(() => import('./examples/trees/Trees'));
const Navbar = lazy(() => import('./examples/dropdownMenu/Navbar'));
const Carousel = lazy(() => import('./examples/carousel/Carousel'));
const DraggableList = lazy(() =>
  import('./examples/draggableList/DraggableList')
);

const App = () => {
  const location = useLocation();
  const transition = useTransition(location, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });
  return (
    <>
      <GlobalStyle />
      <HomeLink to="/">ReactSpring</HomeLink>
      {transition((style, location) => (
        <Suspense fallback={<div>Loading...</div>}>
          <animated.div
            style={{
              ...style,
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          >
            <Switch location={location}>
              <Route path="/" exact>
                <Navigation />
              </Route>
              <Route path="/message-hub" component={MessageHub} />
              <Route path="/trees" component={Trees} />
              <Route path="/dropdown-menu" component={Navbar} />
              <Route path="/carousel" component={Carousel} />
              <Route path="/draggable-list" component={DraggableList} />
            </Switch>
          </animated.div>
        </Suspense>
      ))}
    </>
  );
};

export default App;
