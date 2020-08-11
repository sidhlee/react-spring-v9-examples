import React, { useState, useEffect } from 'react';
import { StyledProgressBar } from './carousel-styles';
import { useCarousel } from './carousel-context';

type ProgressBarProps = {
  duration: number;
};

const ProgressBar = ({ duration }: ProgressBarProps) => {
  const [{ isPlaying }] = useCarousel();
  const progress = useProgress(isPlaying, duration);
  return <StyledProgressBar progress={progress} />;
};

function useProgress(isPlaying: boolean, duration: number) {
  const [lapse, setLapse] = useState(0);
  useEffect(() => {
    if (!isPlaying) return;

    let startTime: number | null = null;
    let id: number;
    const req = () => {
      const now = performance.now();
      if (!startTime) startTime = now;
      const delta = now - startTime;
      setLapse(delta);

      if (delta < duration) {
        id = requestAnimationFrame(req);
      }
    };

    id = requestAnimationFrame(req);

    return () => void cancelAnimationFrame(id);
  }, [isPlaying, duration]);
  return lapse / duration;
}

export default ProgressBar;
