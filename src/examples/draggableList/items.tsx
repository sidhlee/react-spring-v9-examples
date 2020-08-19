import React from 'react';
import { Item } from './types';

// TODO: Use this data to render items with height: auto
export const initialItems: Item[] = [
  {
    id: 1,
    node: <p>Create a ref to store the order of the items.</p>,
    height: null,
  },
  {
    id: 2,
    node: (
      <p>
        Declare <code>[spring, setSpring]</code> by calling{' '}
        <code>useSpring</code> with the number of item and a function that
        returns props.
      </p>
    ),
    height: null,
  },
  {
    id: 3,
    node: (
      <p>
        Call <code>useDrag</code> with handler which will get passed a gesture
        state. Assign returned bind function to a variable
      </p>
    ),
    height: null,
  },
  {
    id: 4,
    node: (
      <p>
        Inside handler function, use args attribute to access the index passed
        through the bind function.
      </p>
    ),
    height: 0,
  },
  {
    id: 15,
    node: (
      <p>
        Calculate current index of the dragged item and current row that the
        item is dragged to
      </p>
    ),
    height: 0,
  },
  {
    id: 6,
    node: <p>Create a new order based on the current index and current row.</p>,
    height: 0,
  },
  {
    id: 7,
    node: (
      <p>
        Call <code>setSpring</code> passing new spring value based on the new
        order, original/current index and gesture state(<code>down</code>/
        <code>y</code>)
      </p>
    ),
    height: 0,
  },
  {
    id: 8,
    node: (
      <p>
        map springs into <code>animated.div</code>
      </p>
    ),
    height: 0,
  },
];
