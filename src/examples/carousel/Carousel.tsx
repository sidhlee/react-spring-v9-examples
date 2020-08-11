import React, { useEffect } from 'react';

import { CarouselStateProvider, useCarousel } from './carousel-context';
import { StyledCarousel, CarouselContainer } from './carousel-styles';

import Slides from './Slides';
import Controls from './Controls';
import SlideNav from './SlideNav';
import ProgressBar from './ProgressBar';

const DURATION = 3000;

const Carousel = () => {
  const [{ currentIndex, isPlaying }, dispatch] = useCarousel();

  useEffect(() => {
    if (isPlaying) {
      const id = setTimeout(() => {
        dispatch({ type: 'progress' });
      }, DURATION);
      return () => clearTimeout(id);
    }
  }, [isPlaying, dispatch, currentIndex]); // dispatch never changes

  return (
    <CarouselContainer>
      <StyledCarousel>
        <Slides />
        <SlideNav />
        <Controls />
        <ProgressBar key={currentIndex} duration={DURATION} />
      </StyledCarousel>
    </CarouselContainer>
  );
};

export default () => (
  <CarouselStateProvider>
    <Carousel />
  </CarouselStateProvider>
);
