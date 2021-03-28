import React from 'react';
import { useTransition } from 'react-spring';

import { useCarousel } from './carousel-context';
import { StyledSlides, StyledSlide } from './carousel-styles';
import SlideText from './SlideText';

type SlidesProps = {};

const Slides = (props: SlidesProps) => {
  const [{ slides, currentIndex, prevIndex, usedNav }] = useCarousel();
  const slide = slides[currentIndex];

  // don't pass slides here!
  // If you want to mount/unmount components one by one,
  // pass a single item.
  // Pass an array of items only if you want to animate
  // multiple components at once or sequentially.

  const transition = useTransition(slide, {
    from: {
      // When you compare number with null, null is coerced into 0!
      transform: getTranslate(
        slides.length,
        currentIndex,
        prevIndex,
        'from',
        usedNav
      ),
      opacity: 0.8,
    },
    enter: (s) => {
      console.log(`enter:`, s.id);
      return { transform: `translate3d(0%,0,0)`, opacity: 1 };
    },
    leave: (s) => {
      console.log('leave:', s.id);
      return {
        transform: getTranslate(
          slides.length,
          currentIndex,
          prevIndex,
          'leave',
          usedNav
        ),
        opacity: 0.5,
      };
    },
  });
  // TODO: why Slides renders one extra time at the end?
  console.log(
    '[Slides]',
    'currentIndex:',
    currentIndex,
    'prevIndex:',
    prevIndex
  );

  return (
    <StyledSlides>
      {transition((style, slide) => {
        return (
          <StyledSlide style={style as any} src={slide.src}>
            <SlideText slideId={slide.id}>
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
            </SlideText>
          </StyledSlide>
        );
      })}
    </StyledSlides>
  );
};

//TODO: simplify logic and improve API
function getTranslate(
  slidesLength: number,
  currentIndex: number,
  prevIndex: number,
  phase: 'from' | 'leave',
  usedNav: boolean
) {
  const nextClickedFromTail =
    !usedNav && currentIndex === 0 && prevIndex === slidesLength - 1;
  const prevClickedFromHead =
    !usedNav && currentIndex === slidesLength - 1 && prevIndex === 0;
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
