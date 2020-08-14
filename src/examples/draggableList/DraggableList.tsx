import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp';
import move from 'lodash-move';

import { useSprings, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { StyledDraggableList } from './draggable-list-styles';

type Order = number[];

const ITEM_HEIGHT = 100;

const controller = (
  order: Order,
  down?: boolean,
  originalIndex?: number,
  currIndex?: number,
  y?: number
) => (index: number) =>
  // mousedown && passed index equals to the
  down && originalIndex && currIndex && y && index === originalIndex
    ? {
        y: currIndex * ITEM_HEIGHT + y,
        scale: 1.1,
        zIndex: 1,
        shadow: 15,
        // prevents animation if true
        // prevent animating zIndex and y from animating towards the new value
        immediate: (key: string) => key === 'y' || key === 'zIndex',
      }
    : {
        y: order.indexOf(index) * ITEM_HEIGHT,
        scale: 1,
        zIndex: 0,
        shadow: 1,
        immediate: false,
      };

const items = [
  'Create a ref to store the order of the items.',
  'Declare spring and setSpring by calling useSpring with the number of item and controller function.',
  'Call useDrag with handler which will get passed a gesture state. Assign returned bind function to a variable',
  'Inside handler function, use args attribute to access the index passed through the bind function.',
  'Calculate current index of the dragged item and current row that the item is dragged to',
  'Create a new order based on the current index and current row.',
  'Call setSpring passing new spring value based on the new order, original/current index and gesture state(down/y)',
  'map springs into animated.div',
];

const DraggableList = () => {
  const order = useRef(items.map((_, i) => i)).current;
  const [springs, setSprings] = useSprings(items.length, controller(order));

  const bind = useDrag(({ args: [originalIndex], down, movement: [, y] }) => {
    const currIndex = order.indexOf(originalIndex);
    const currRow = clamp(
      Math.round((currIndex * ITEM_HEIGHT + y) / 100),
      0,
      items.length - 1
    );
    const newOrder = move(order, currIndex, currRow);
    setSprings(controller(newOrder, down, originalIndex, currIndex, y));
  });

  return (
    <StyledDraggableList height={items.length * ITEM_HEIGHT}>
      <h2>Creating draggable list with React Spring</h2>
      <p>Drag the following items so that they are in correct order.</p>
      {springs.map(({ zIndex, scale, y, shadow }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.to(
              (s) => `0px ${s}px ${2 * s}px 0px rgba(0,0,0,0.15)`
            ),
            // v9 shorthand prop for transform (x, y, z, rotate, scale, ..)
            y,
            scale,
          }}
        >
          {items[i]}
        </animated.div>
      ))}
    </StyledDraggableList>
  );
};

export default DraggableList;
