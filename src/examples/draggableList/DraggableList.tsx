import React, { useRef } from 'react';
import { useSprings, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { clamp } from 'lodash';
import move from 'lodash-move';

import { StyledDraggableList } from './draggable-list-styles';

type DraggableListProps = {};

const ITEM_HEIGHT = 100;

const items = 'fixed height draggable items'.split(' ');

const DraggableList = (props: DraggableListProps) => {
  // keep intermediate data in ref so we can immediately pass
  // updated data into another setters within the same render
  const orderRef = useRef(items.map((_, i) => i));
  const [springs, setSprings] = useSprings(items.length, (index) => ({
    y: index * ITEM_HEIGHT,
    scale: 1,
    zIndex: 0,
    shadow: 15,
    immediate: false,
  }));
  const bind = useDrag(({ args: [targetIndex], down, movement: [, y] }) => {
    const currIndex = orderRef.current.indexOf(targetIndex);
    const currY = ITEM_HEIGHT * currIndex;
    const newY = currY + y;
    const newRow = Math.round(newY / ITEM_HEIGHT);
    const newIndex = clamp(newRow, 0, items.length - 1);
    const newOrder = move(orderRef.current, currIndex, newIndex);

    setSprings((index) => {
      if (down && index === targetIndex) {
        return {
          y: newY,
          scale: 1.1,
          zIndex: 1,
          shadow: 15,
          // don't animate y and zIndex while dragging
          immediate: (key) => key === 'y' || key === 'zIndex',
        };
      } else {
        return {
          y: newOrder.indexOf(index) * ITEM_HEIGHT,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false,
        };
      }
    });
    // If not dragging, update the order
    if (!down) orderRef.current = newOrder;
  });
  return (
    <StyledDraggableList itemHeight={ITEM_HEIGHT} numItems={items.length}>
      <h1>Drag &amp; Drop</h1>
      <ul>
        {springs.map(({ shadow, ...styles }, i) => (
          <animated.li
            {...bind(i)}
            key={i}
            style={{
              ...styles,
              boxShadow: shadow.to(
                (s) => `0px ${s}px ${2 * s}px 0px rgba(0,0,0,0.15)`
              ),
            }}
            children={items[i]}
          />
        ))}
      </ul>
    </StyledDraggableList>
  );
};

export default DraggableList;
