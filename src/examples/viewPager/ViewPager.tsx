import React, { useRef } from 'react';
import { useSprings } from 'react-spring';

import { clamp } from '../../utils';
import { pages } from './pages';
import { Main, Container, StyledViewPager, Page } from './view-pager-styles';
import { useDrag } from 'react-use-gesture';

type ViewPagerProps = {};

const ViewPager = (props: ViewPagerProps) => {
  // we're not using state because react-spring does NOT need to re-render to animate things
  // we just need to call the updater function inside useDrag function
  const index = useRef(0);
  const ref = useRef<HTMLDivElement>(null!);

  const [springs, setSprings] = useSprings(pages.length, (i) => ({
    // avoid animation on initial render
    to: {
      // undefined makes more sense than 0
      x: i * ref.current?.offsetWidth || undefined, // position each page using the array index
      display: i === 0 ? 'block' : 'none',
      scale: 1,
    },
  }));

  const bind = useDrag(
    // distance === abs(xDir)
    ({ down, movement: [xDelta], direction: [xDir], distance, cancel }) => {
      const draggedOverHalfTheContainer =
        down && distance > ref.current.offsetWidth / 2;
      const draggedRight = xDir > 0;

      // if dragged over the half of the container, update the current index
      if (draggedOverHalfTheContainer && cancel) {
        cancel(); // interrupt gesture! (cancel could be undefined)

        // update the current index ref based on the gesture state
        index.current = clamp(
          index.current + (draggedRight ? -1 : 1),
          0,
          pages.length - 1
        );
      }
      // update the animation
      setSprings((i) => {
        // If gesture is received but not dragged left or right, only render the current page.
        if (xDir === 0 && xDelta === 0) {
          return { display: index.current === i ? 'block' : 'none' };
        }

        // If the page is not adjacent to the current page, hide it.
        const notAdjacentIndex = i < index.current - 1 || i > index.current + 1;
        if (notAdjacentIndex) {
          return { display: 'none' };
        }

        // position each page relative to the current index (+ currently dragged x-distance)
        const x =
          (i - index.current) * ref.current.offsetWidth + (down ? xDelta : 0);

        // scales down the pages as they are dragged away from the center
        const dragProgress = distance / (ref.current.offsetWidth / 2);
        const scale = down ? 1 - 0.25 * dragProgress : 1;

        // To prevent the next page (to the right of the current one) from
        // animating its translateX value and running from x = 0 to its place
        const isNext = draggedRight
          ? i === index.current - 1
          : i === index.current + 1;

        return {
          x,
          scale,
          display: 'block',
          immediate: isNext, // next page will snap to its place without animation
        };
      });
    }
  );

  return (
    <Main>
      <Container ref={ref}>
        {springs.map(({ x, display, scale }, i) => (
          <StyledViewPager key={i} {...bind()} style={{ display, x }}>
            <Page style={{ scale, backgroundImage: `url(${pages[i]})` }} />
          </StyledViewPager>
        ))}
      </Container>
    </Main>
  );
};

export default ViewPager;
