import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

import { useMeasure, usePrevious } from '../../hooks';
import { StyledTree, Title, iconStyles, Content } from './treesStyles';
import { MinusSquareIcon, PlusSquareIcon, CloseSquareIcon } from './icons';

type TreeProps = {
  defaultOpen?: boolean;
  children?: React.ReactNode;
  name: string | React.ReactNode;
  style?: React.CSSProperties;
};

const Tree = ({ defaultOpen = false, children, name, style }: TreeProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const previouslyOpen = usePrevious(open);

  const [bind, { height: viewHeight }] = useMeasure();

  const { height, opacity, transform } = useSpring({
    from: { opacity: 0, height: 0, transform: `translate3d(20px,0,0)` },
    to: {
      // fade out when closing
      opacity: open ? 1 : 0,
      height: open ? viewHeight : 0,
      // if not open, move back to the right
      transform: `translate3d(${open ? 0 : 20}px,0,0)`,
    },
  });

  const Icon = children
    ? open
      ? MinusSquareIcon
      : PlusSquareIcon
    : CloseSquareIcon;

  return (
    <StyledTree>
      <Icon
        style={{ ...iconStyles, opacity: children ? 1 : 0.4 }}
        onClick={() => setOpen(!open)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: open && previouslyOpen ? 'auto' : height,
        }}
      >
        <animated.div style={{ transform }} {...bind}>
          {children}
        </animated.div>
      </Content>
    </StyledTree>
  );
};

export default Tree;
