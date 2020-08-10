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
};

const SlideText = ({ children }: SlideTextProps) => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null!);

  const styles = useSpring({
    from: {
      height: 0,
      width: 0,
    },
    height: ref.current && open ? ref.current.offsetHeight : 16,
    width: ref.current && open ? ref.current.offsetWidth : 16,
  });

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <StyledSlideText style={styles}>
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
