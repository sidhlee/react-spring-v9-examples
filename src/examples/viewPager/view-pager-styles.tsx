import styled from 'styled-components';
import { a } from 'react-spring';

export const Main = styled('div')`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const Container = styled('div')`
  position: relative;
  width: 100%;
  max-width: 414px;
  height: 100%;
  max-height: 736px;
  overflow: hidden; // hide pages translated out of the container
`;

export const StyledViewPager = styled(a.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
`;

export const Page = styled(a.div)`
  cursor: grab;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* need abs-pos to stretch 100% of parent with min-height 100vh */
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
  /* v-offset h-offset blur spread color */
  box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
    0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
`;
