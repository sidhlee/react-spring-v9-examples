import React from 'react';
import Slides from './Slides';
import { CarouselStateProvider } from './carousel-context';
import Controls from './Controls';
import { StyledCarousel, CarouselContainer } from './carousel-styles';

type CarouselProps = {};

const Carousel = (props: CarouselProps) => {
  return (
    <CarouselContainer>
      <StyledCarousel>
        <CarouselStateProvider>
          <Slides />
          <Controls />
        </CarouselStateProvider>
      </StyledCarousel>
    </CarouselContainer>
  );
};

export default Carousel;
