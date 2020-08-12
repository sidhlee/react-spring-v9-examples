import React, { useState, useRef, useEffect } from 'react';
import { useSpring } from 'react-spring';
import { ArrowUpRight, ArrowDownLeft } from 'react-feather';

import {
  SlideTextContainer,
  StyledSlideText,
  SlideTextButton,
} from './carousel-styles';
import { useMeasure } from '../../hooks';

type SlideTextProps = {
  children: React.ReactNode;
  slideId: string;
};

const SlideText = ({ children, slideId }: SlideTextProps) => {
  const [open, setOpen] = useState(true);
  const [bind, { width, height, left, top }] = useMeasure();
  const paddedHeight = height + 2 * top;
  const paddedWidth = width + 2 * left;

  const style = useSpring({
    height: open ? paddedHeight : 16,
    width: open ? paddedWidth : 16,
    config: {
      tension: 200,
    },
  });

  // open text AFTER the ref component is rendered
  useEffect(() => {
    console.log('[SlideText] effect - open text');
    setOpen(true);
  }, []);

  console.log('[SlideText] for', slideId);
  return (
    <StyledSlideText style={style}>
      <SlideTextContainer {...bind}>
        <SlideTextButton onClick={() => setOpen(!open)}>
          {open ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
        </SlideTextButton>
        {children}
      </SlideTextContainer>
    </StyledSlideText>
  );
};

export default SlideText;
