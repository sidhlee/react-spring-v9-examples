import React, { Suspense, lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Navigation from './Navigation';
import { GlobalStyle, HomeLink } from './styles';

const MessageHub = lazy(() => import('./examples/messageHub/MessageHub'));
const Trees = lazy(() => import('./examples/trees/run2/Trees'));
const Navbar = lazy(() => import('./examples/dropdownMenu/Navbar'));
const Carousel = lazy(() => import('./examples/carousel/Carousel'));
const DraggableList = lazy(
  () => import('./examples/draggableList/DraggableList')
);
const Slider = lazy(() => import('./examples/slider/Slider'));
const FlipCard = lazy(() => import('./examples/flipCard/FlipCard'));
const ViewPager = lazy(() => import('./examples/viewPager/ViewPager'));
const ExpandingMenuButton = lazy(
  () => import('./examples/ExpandingMenuButton')
);
const AnimatedPage = lazy(() => import('./examples/animatedPage/AnimatedPage'));
const AnimatedText = lazy(() => import('./examples/animatedText/AnimatedText'));

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
            style={
              {
                ...style,
                // must be abs-positioned to cross fade between components
                // (otherwise entering comp would be rendered at the bottom of the exiting comp)
                position: 'absolute',
                width: '100%',
                height: '100%',
              } as any
            }
          >
            <Switch location={location}>
              <Route path="/" exact>
                <Navigation />
              </Route>
              <Route path="/message-hub" component={MessageHub} />
              <Route path="/trees" component={Trees} />
              <Route path="/dropdown-menu" component={Navbar} />
              <Route
                path="/expanding-menu-button"
                component={ExpandingMenuButton}
              />
              <Route path="/carousel" component={Carousel} />
              <Route path="/draggable-list" component={DraggableList} />
              <Route path="/slider" component={Slider} />
              <Route path="/flip-card" component={FlipCard} />
              <Route path="/view-pager" component={ViewPager} />
              <Route path="/animated-page" component={AnimatedPage} />
              <Route path="/animated-text" component={AnimatedText} />
            </Switch>
          </animated.div>
        </Suspense>
      ))}
    </>
  );
};

export default App;
