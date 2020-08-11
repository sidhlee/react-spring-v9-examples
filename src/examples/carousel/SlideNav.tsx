import React from 'react';

import { StyledSlideNav } from './carousel-styles';
import { useCarousel } from './carousel-context';

type SlideNavProps = {};

const SlideNav = (props: SlideNavProps) => {
  const [{ slides, currentIndex }, dispatch] = useCarousel();

  return (
    <StyledSlideNav>
      <ul>
        {slides.map((s, i) => (
          <li key={s.id}>
            <button
              className={currentIndex === i ? 'active' : undefined}
              onClick={() => dispatch({ type: 'goTo', payload: i })}
            />
          </li>
        ))}
      </ul>
    </StyledSlideNav>
  );
};

export default SlideNav;
