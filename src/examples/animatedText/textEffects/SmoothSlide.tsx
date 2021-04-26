import React from 'react';
import styled from 'styled-components';
import { a, useTrail } from 'react-spring';
import TextCard from '../TextCard';

const StyledSmoothSlide = styled('h1')``;

type SmoothSlideProps = {
  letters: string[];
};

const SmoothSlide: React.FC<SmoothSlideProps> = ({ letters }) => {
  const trail = useTrail(letters.length, {
    config: { mass: 0.2, tension: 380, friction: 25 },
    from: {
      x: 40,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
  });
  return (
    <TextCard effectName={'SmoothSlide'}>
      <StyledSmoothSlide>
        {trail.map((style, i) => (
          <a.span key={i} className="letter" style={style as any}>
            {letters[i]}
          </a.span>
        ))}
      </StyledSmoothSlide>
    </TextCard>
  );
};

export default SmoothSlide;
