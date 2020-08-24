import React from 'react';
import { useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import {
  SliderContainer,
  SliderFront,
  SliderIcon,
  SliderBack,
  CheckIcon,
  TrashIcon,
} from './slider-styles';

type SliderProps = {};

const Slider = (props: SliderProps) => {
  const [{ x, bg, size, justifySelf }, setSpring] = useSpring(() => ({
    x: 0,
    bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
    size: 1,
    justifySelf: 'end',
    immediate: false,
  }));
  const bind = useDrag(({ down, movement }) => {
    // delta = [x, y]
    console.log(movement);
    setSpring({
      x: down ? movement[0] : 0,
      bg: `linear-gradient(120deg, ${
        movement[0] < 0 ? '#f093fb 0%, #f5576c' : '#96fbc4 0%, #f9f586'
      } 100%)`,
      size: down ? 1.1 : 1,
      justifySelf: movement[0] < 0 ? 'end' : 'start',
      immediate: (key) => down && key === 'x',
    });
  });

  return (
    <SliderContainer>
      <SliderBack {...bind()} style={{ background: bg }}>
        <SliderIcon
          style={{
            transform: x.to({
              map: Math.abs, // filter applied to input value
              range: [50, 300], // input range
              output: ['scale(0.5)', 'scale(1)'],
              extrapolate: 'clamp', // default: extend
            }),
            justifySelf,
          }}
          // TODO: render icon accordingly
          children={justifySelf.get() === 'end' ? <TrashIcon /> : <CheckIcon />}
        />
        <SliderFront style={{ x, scale: size }}>Slide</SliderFront>
      </SliderBack>
    </SliderContainer>
  );
};

export default Slider;
