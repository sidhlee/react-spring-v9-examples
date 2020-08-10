import React, { useState, useRef, useEffect } from 'react';
import { useSpring } from 'react-spring';
import { ArrowUpRight, ArrowDownLeft } from 'react-feather';

import {
  SlideTextContainer,
  StyledSlideText,
  SlideTextButton,
} from './carousel-styles';

type SlideTextProps = {
  children: React.ReactNode;
  slideId: string;
};

const SlideText = ({ children, slideId }: SlideTextProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);

  const style = useSpring({
    height: open ? ref.current.offsetHeight : 16,
    width: open ? ref.current.offsetWidth : 16,
  });

  // open text AFTER the ref component is rendered
  useEffect(() => {
    console.log('[SlideText] effect - open text');
    setOpen(true);
  }, []);

  console.log('[SlideText] for', slideId);
  return (
    <StyledSlideText style={style}>
      <SlideTextContainer ref={ref}>
        <SlideTextButton onClick={() => setOpen(!open)}>
          {open ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
        </SlideTextButton>
        {children}
      </SlideTextContainer>
    </StyledSlideText>
  );
};

export default SlideText;
