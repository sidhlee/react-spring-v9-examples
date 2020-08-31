import React, { useRef } from 'react';
import { useSprings } from 'react-spring';

import { clamp } from '../../utils';
import { pages } from './pages';
import { StyledViewPager, Page } from './view-pager-styles';
import { useDrag } from 'react-use-gesture';

type ViewPagerProps = {};

const ViewPager = (props: ViewPagerProps) => {
  // we're not using state because react-spring does NOT need to re-render to animate things
  // we just need to call the updater function inside useDrag function
  const index = useRef(0);
  const [springs, set] = useSprings(pages.length, (i) => ({
    x: i * window.innerWidth, // position each page using the array index
    scale: 1,
    display: 'block',
  }));
  const bind = useDrag(
    // distance === abs(xDir)
    ({ down, movement: [xDelta], direction: [xDir], distance, cancel }) => {
      const draggedOverHalfTheScreen = down && distance > window.innerWidth / 2;

      // if dragged over the half of the viewport, update the current index
      if (draggedOverHalfTheScreen && cancel) {
        cancel(); // interrupt gesture! (cancel could be undefined)

        // update the current index ref based on the gesture state
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          pages.length - 1
        );
      }
      // update the animation
      set((i) => {
        const notAdjacentIndex = i < index.current - 1 || i > index.current + 1;
        if (notAdjacentIndex) {
          return { display: 'none' };
        }
        // position each page relative to the current index
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        // scales down as each page is dragged away from the center
        const scale = down ? 1 - distance / window.innerWidth / 2 : 1;

        return { x, scale, display: 'block' };
      });
    }
  );
  console.log(pages[0]);
  return (
    <>
      {springs.map(({ x, display, scale }, i) => (
        <StyledViewPager {...bind()} key={i} style={{ display, x }}>
          <Page style={{ scale, backgroundImage: `url(${pages[i]})` }} />
        </StyledViewPager>
      ))}
    </>
  );
};

export default ViewPager;
