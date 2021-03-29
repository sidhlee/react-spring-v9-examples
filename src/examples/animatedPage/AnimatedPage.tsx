import React, { useRef } from 'react';
import {
  useSpring,
  useChain,
  a,
  SpringHandle,
  UnknownProps,
} from 'react-spring';
import { Menu } from 'react-feather';
import { StyledAnimatedPage } from './AnimatedPageStyles';
import image from '../carousel/images/20190902_185638.jpg';
import { Link } from 'react-router-dom';

const AnimatedPage: React.FC = () => {
  const heightSpringRef = useRef<SpringHandle<UnknownProps>>(null);
  const { height } = useSpring({
    from: {
      height: '0%',
    },
    to: {
      height: '80%',
    },
    ref: heightSpringRef,
  });

  const widthSpringRef = useRef<SpringHandle<UnknownProps>>(null);
  const { width } = useSpring({
    from: {
      width: '100%',
    },
    to: {
      width: '80%',
    },
    ref: widthSpringRef,
  });

  const sliderSpringRef = useRef<SpringHandle<UnknownProps>>(null);
  const { x } = useSpring({
    from: {
      x: '-100%',
    },
    to: {
      x: '0%',
    },
    ref: sliderSpringRef,
  });

  const logoSpringRef = useRef<SpringHandle<UnknownProps>>(null);
  const logoSpring = useSpring({
    from: {
      opacity: 0,
      x: '25%',
    },
    to: {
      opacity: 1,
      x: '0%',
    },
    ref: logoSpringRef,
  });

  // at 0.5s - animate height, at 1s - animate width
  useChain(
    [heightSpringRef, widthSpringRef, sliderSpringRef, logoSpringRef],
    [0.5, 0.9, 1.3, 1.3]
  );

  const AnimatedLink = a(Link);

  return (
    <StyledAnimatedPage>
      <header>
        <nav>
          <AnimatedLink
            id="logo"
            to="/animated-page"
            style={{ ...logoSpring } as any}
          >
            <h3>Click to restart</h3>
          </AnimatedLink>
          <button className="menu-btn">
            <span>
              <Menu />
            </span>
          </button>
        </nav>
        <section>
          <a.div className="hero" style={{ height, width }}>
            <img src={image} alt="" />
            <h1>Sequential Page Animation</h1>
          </a.div>
        </section>
      </header>

      <a.div className="slider" style={{ x }}></a.div>
    </StyledAnimatedPage>
  );
};

export default AnimatedPage;
