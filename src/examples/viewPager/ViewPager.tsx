import React, { useRef } from 'react';
import { useSprings } from 'react-spring';
import { Main, Container, StyledViewPager, Page } from './view-pager-styles';
import { pages } from './pages';
import { useDrag } from 'react-use-gesture';

type ViewPager2Props = {};

const ViewPager2 = (props: ViewPager2Props) => {
  const ref = useRef<HTMLDivElement>(null!);
  const index = useRef(0);

  const [springs, setSprings] = useSprings(pages.length, (i) => ({
    to: {
      x: i * ref.current?.offsetWidth || undefined,
      scale: 1,
      display: i === 0 ? 'block' : 'none',
    },
  }));

  const bind = useDrag(
    ({ down, direction: [xDir], movement: [xDelta], distance, cancel }) => {
      if (xDir === 0 && xDelta === 0) return;

      const draggedOverHalfTheContainer =
        down && distance > ref.current.offsetWidth / 2;
      const draggedLeft = xDir < 0;

      if (draggedOverHalfTheContainer && cancel) {
        cancel();
        const newIndex = index.current + (draggedLeft ? 1 : -1);
        index.current = Math.min(Math.max(newIndex, 0), pages.length - 1);
      }

      const flipProgress = distance / (ref.current.offsetWidth / 2);
      const scale = down ? 1 - 0.25 * flipProgress : 1;

      setSprings((i) => {
        // const notAdjacentPage = i < index.current - 1 || i > index.current + 1;
        // if (notAdjacentPage) {
        //   return { display: 'none' };
        // }

        // const nextToCurrent = draggedLeft
        //   ? i === index.current + 1
        //   : i === index.current - 1;

        return {
          x:
            (i - index.current) * ref.current.offsetWidth + (down ? xDelta : 0),
          display: 'block',
          scale,
          // immediate: nextToCurrent, => causes flickering of the next image
        };
      });
    }
  );

  return (
    <Main>
      <h2>Drag/Swipe the images</h2>
      <Container ref={ref}>
        {springs.map(({ x, scale, display }, i) => {
          return (
            <StyledViewPager {...bind()} key={i} style={{ x, display } as any}>
              <Page
                style={
                  {
                    backgroundImage: `url(${pages[i]})`,
                    scale,
                  } as any
                }
              />
            </StyledViewPager>
          );
        })}
      </Container>
    </Main>
  );
};

export default ViewPager2;
