import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

import { useMeasure, usePrevious } from '../../hooks';
import { Frame, Title, toggle, Content } from './treesStyles';
import { MinusSquareIcon, PlusSquareIcon, CloseSquareIcon } from './icons';

type TreeProps = {
  defaultOpen?: boolean;
  children?: React.ReactNode;
  name: string | React.ReactNode;
  style?: React.CSSProperties;
};

const Tree = ({ defaultOpen = false, children, name, style }: TreeProps) => {
  const [open, set] = useState(defaultOpen);
  const previous = usePrevious(open);

  const [bind, { height: viewHeight }] = useMeasure();

  const { height, opacity, transform } = useSpring({
    from: { opacity: 0, height: 0, transform: `translate3d(20px,0,0)` },
    to: {
      opacity: 1,
      height: open ? viewHeight : 0,
      transform: `translate3d(0,0,0)`,
    },
  });

  const Icon = children
    ? open
      ? MinusSquareIcon
      : PlusSquareIcon
    : CloseSquareIcon;

  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.4 }}
        onClick={() => set(!open)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: open && previous ? 'auto' : height,
        }}
      >
        <animated.div style={{ transform }} {...bind}>
          {children}
        </animated.div>
      </Content>
    </Frame>
  );
};

export default Tree;
