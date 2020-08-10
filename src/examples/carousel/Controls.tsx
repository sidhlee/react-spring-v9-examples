import React from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'react-feather';

import { StyledControls, Button } from './carousel-styles';
import { useCarousel } from './carousel-context';

type ControlsProps = {};

const Controls = (props: ControlsProps) => {
  const [{ isPlaying }, dispatch] = useCarousel();
  return (
    <StyledControls>
      {isPlaying ? (
        <Button onClick={() => dispatch({ type: 'pause' })}>
          <Pause size={40} />
        </Button>
      ) : (
        <Button onClick={() => dispatch({ type: 'play' })}>
          <Play size={40} />
        </Button>
      )}
      <Button onClick={() => dispatch({ type: 'prev' })}>
        <SkipBack size={40} />
      </Button>
      <Button onClick={() => dispatch({ type: 'next' })}>
        <SkipForward size={40} />
      </Button>
    </StyledControls>
  );
};

export default Controls;
