import React, { useState } from 'react';
import { useSpring } from 'react-spring';

import { FlipCardContainer, CardFront, CardBack } from './flip-card-styles';

type FlipCardProps = {};

const FlipCard = (props: FlipCardProps) => {
  const [flipped, set] = useState(false);
  const { opacity, transform } = useSpring({
    opacity: flipped ? 0 : 1,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: {
      mass: 5,
      tension: 500,
      friction: 80,
    },
  });

  return (
    <FlipCardContainer onClick={() => set((s) => !s)}>
      <CardFront style={{ opacity, transform } as any} />
      <CardBack
        style={
          {
            opacity: opacity.to((o) => 1 - o),
            transform: transform.to((t) => `${t} rotateX(180deg)`),
          } as any
        }
      />
    </FlipCardContainer>
  );
};

export default FlipCard;
