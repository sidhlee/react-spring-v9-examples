import React, { useRef, useState, useEffect } from 'react';
import { useSpring } from 'react-spring';
import { X, Plus } from 'react-feather';

import {
  Expander,
  Inverter,
  MenuWrapper,
  MenuItems,
  CloseBtn,
  ExpandBtn,
} from './styles';
import { usePrevious } from '../../hooks';

// Inspired by:
// https://developers.google.com/web/updates/2017/03/performant-expand-and-collapse#a_more_advanced_version_circular_reveals

let render = 0;

const ExpandingMenuButton = () => {
  const expandedRef = useRef<HTMLDivElement>(null!);
  const collapsedRef = useRef<HTMLButtonElement>(null!);

  const [open, setOpen] = useState(false);
  const [
    { collapsedWidth, collapsedHeight, expandedWidth, expandedHeight },
    setRect,
  ] = useState({
    collapsedWidth: 0,
    collapsedHeight: 0,
    expandedWidth: 0,
    expandedHeight: 0,
  });

  // to prevent animation on mount
  const prevCollapsedWidth = usePrevious(collapsedWidth);

  const collapsedRadius = collapsedWidth / 2;

  // The expanded circle will actually be more than enough to cover the menu wrapper
  // because transformOrigin is at the center of the button instead of top left corner of the menu
  const expandedRadius = Math.sqrt(expandedWidth ** 2 + expandedHeight ** 2);

  const { width, height, scale, transformOrigin, opacity, rotate } = useSpring({
    to: {
      width: collapsedWidth,
      height: collapsedWidth,
      // scale of collapsedRadius to the expandedRadius
      scale: open ? expandedRadius / collapsedRadius : 1,
      // '/ 2' so that the expander scales from the center of the button
      // Without it, scaling will push the expander out to the top left
      transformOrigin: `${collapsedWidth / 2}px ${collapsedHeight / 2}px`,
      opacity: open ? 0 : 1,
      rotate: open ? 0 : -180,
    },
    immediate: prevCollapsedWidth === 0, // prevents animation on mount
  });

  console.log(render++);

  useEffect(
    () => {
      // If measuring elements are mounted
      if (expandedRef && collapsedRef) {
        // this will update state EVERY TIME even if all values inside the passing object
        // stays the same because React diffs BY REFERENCE.
        setRect({
          collapsedWidth: collapsedRef.current.offsetWidth,
          collapsedHeight: collapsedRef.current.offsetHeight,
          expandedWidth: expandedRef.current.offsetWidth,
          expandedHeight: expandedRef.current.offsetHeight,
        });
      }
      // 'open' in dep list will cause unnecessary rerender whenever open value changes
      // because react will update the state with new object (with same values)
    },
    [
      /* open */
    ]
  );

  return (
    <Expander style={{ width, height, scale, transformOrigin }}>
      <Inverter
        style={{
          scale: scale.to((v) => 1 / v),
          transformOrigin,
        }}
      >
        <MenuWrapper
          ref={expandedRef}
          style={{ opacity: opacity.to((v) => 1 - v) }}
        >
          <MenuItems>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
          </MenuItems>
          <CloseBtn onClick={() => setOpen(false)}>
            <X />
          </CloseBtn>
        </MenuWrapper>
        <ExpandBtn
          ref={collapsedRef}
          onClick={() => setOpen(true)}
          style={{ opacity, rotate }}
        >
          <Plus />
        </ExpandBtn>
      </Inverter>
    </Expander>
  );
};

export default ExpandingMenuButton;
