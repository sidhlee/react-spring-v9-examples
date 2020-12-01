import React, { useState } from 'react';
import { useSpring, a } from 'react-spring';

import { useMeasure } from '../../../hooks/useMeasure';
import { PlusSquare, MinusSquare, XSquare } from 'react-feather';
import { StyledTree, iconStyles, Subtrees } from './treesStyles';
import { usePrevious } from '../../../hooks';

type TreeProps = {
  children?: React.ReactNode;
  name?: string | React.ReactNode;
  style?: React.CSSProperties;
  defaultOpen?: boolean;
};

const Tree = ({ children, name, style, defaultOpen = false }: TreeProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const previouslyOpen = usePrevious(open);

  const { opacity, transform, height } = useSpring({
    // Removing 'from' prevents initial animation
    // from: {
    //   opacity: 0,
    //   transform: 'translate3d(20px, 0, 0)',
    //   // Cannot use scale because height of one node affects the position of other nodes
    //   // => we need page reflow to make changes in layout
    //   height: 0,
    // },
    to: {
      opacity: open ? 1 : 0,
      transform: `translate3d(${open ? 0 : 20}px, 0, 0)`,
      height: open ? viewHeight : 0,
    },
  });

  const Icon = children ? (open ? MinusSquare : PlusSquare) : XSquare;

  return (
    <StyledTree style={style}>
      <Icon style={{ ...iconStyles }} onClick={() => setOpen(!open)} />
      {name}
      <Subtrees
        style={{
          opacity,
          // will use 'auto' if it was previously open
          height: open && previouslyOpen ? 'auto' : height,
        }}
      >
        <a.div {...bind} style={{ transform }}>
          {children}
        </a.div>
      </Subtrees>
    </StyledTree>
  );
};

export default Tree;
