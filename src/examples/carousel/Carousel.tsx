import React from 'react';
import Slides from './Slides';
import { CarouselStateProvider } from './carousel-context';
import Controls from './Controls';
import { StyledCarousel } from './carousel-styles';

type CarouselProps = {};

const Carousel = (props: CarouselProps) => {
  return (
    <StyledCarousel>
      <CarouselStateProvider>
        <Slides />
        <Controls />
      </CarouselStateProvider>
    </StyledCarousel>
  );
};

export default Carousel;
