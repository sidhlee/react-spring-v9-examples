import React from 'react';
import { useTransition } from 'react-spring';

import { useCarousel } from './carousel-context';
import { StyledSlides, StyledSlide } from './carousel-styles';
import SlideText from './SlideText';

type SlidesProps = {};

const Slides = (props: SlidesProps) => {
  const [{ slides, currentIndex, prevIndex }] = useCarousel();
  const slide = slides[currentIndex];

  // don't pass slides here!
  // If you want to mount/unmount components one by one,
  // pass a single item.
  // Pass an array of items only if you want to animate
  // multiple components at once or sequentially.

  const transition = useTransition(slide, {
    from: {
      // When you compare number with null, null is coerced into 0!
      transform: getTranslate(slides.length, currentIndex, prevIndex, 'from'),
      opacity: 0.5,
    },
    enter: {
      transform: `translate3d(0%,0,0)`,
      opacity: 1,
    },
    leave: {
      transform: getTranslate(slides.length, currentIndex, prevIndex, 'leave'),
      opacity: 0.5,
    },
  });

  console.log(currentIndex, prevIndex);

  return (
    <StyledSlides>
      {transition((style, slide) => {
        return (
          <StyledSlide style={style} src={slide.src}>
            <SlideText>
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
            </SlideText>
          </StyledSlide>
        );
      })}
    </StyledSlides>
  );
};

function getTranslate(
  slidesLength: number,
  currentIndex: number,
  prevIndex: number,
  phase: 'from' | 'leave'
) {
  const nextClickedFromTail =
    currentIndex === 0 && prevIndex === slidesLength - 1;
  const prevClickedFromHead =
    currentIndex === slidesLength - 1 && prevIndex === 0;
  const nextButtonClicked =
    nextClickedFromTail || (currentIndex > prevIndex && !prevClickedFromHead);
  const prevButtonClicked =
    prevClickedFromHead || (currentIndex < prevIndex && !nextClickedFromTail);

  if (nextButtonClicked)
    return `translate3d(${phase === 'from' ? '100%' : '-100%'},0,0)`;
  if (prevButtonClicked)
    return `translate3d(${phase === 'from' ? '-100%' : '100%'},0,0)`;
  return 'translate3d(0,0,0)';
}

export default Slides;
