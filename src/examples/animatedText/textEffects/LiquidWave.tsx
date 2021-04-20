import { a, useTrail } from 'react-spring';
import React from 'react';
import styled from 'styled-components';
import TextCard from '../TextCard';

const StyledLiquidWave = styled.h1``;

type LiquidWaveProps = {
  letters: string[];
};

const LiquidWave: React.FC<LiquidWaveProps> = ({ letters }) => {
  const trail = useTrail(letters.length, {
    config: { mass: 1, tension: 400, friction: 25 },
    scale: 1,
    transformOrigin: '50% 100%',
    from: { scale: 0 },
  });

  return (
    <TextCard>
      <StyledLiquidWave>
        {trail.map((style, i) => (
          <a.span key={i} className="letter" style={style}>
            {letters[i]}
          </a.span>
        ))}
      </StyledLiquidWave>
    </TextCard>
  );
};

export default LiquidWave;
