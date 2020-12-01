import React, { useRef, useState, useEffect } from 'react';
import { useSpring } from 'react-spring';
import { X, Plus } from 'react-feather';

import {
  Layout,
  Container,
  Inner,
  InnerInverter,
  Content,
  Menu,
  CloseBtn,
  ExpandBtn,
} from './styles';
import { usePrevious } from '../../hooks';

type ExpandingMenuButtonProps = {};

let render = 0;

const ExpandingMenuButton = (props: ExpandingMenuButtonProps) => {
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
  const expandedRadius = Math.sqrt(expandedWidth ** 2 + expandedHeight ** 2);
  // scale of collapsedRadius to the expandedRadius

  const { width, height, scale, transformOrigin, opacity, rotate } = useSpring({
    to: {
      width: collapsedWidth,
      height: collapsedWidth,
      scale: open ? expandedRadius / collapsedRadius : 1,
      transformOrigin: `${collapsedWidth / 2}px ${collapsedHeight / 2}px`,
      opacity: open ? 0 : 1,
      rotate: open ? 0 : -180,
    },
    immediate: prevCollapsedWidth === 0,
  });

  console.log(render++);

  useEffect(() => {
    if (expandedRef && collapsedRef) {
      setRect({
        collapsedWidth: collapsedRef.current.offsetWidth,
        collapsedHeight: collapsedRef.current.offsetHeight,
        expandedWidth: expandedRef.current.offsetWidth,
        expandedHeight: expandedRef.current.offsetHeight,
      });
    }
  }, [open]);

  return (
    <Layout>
      <Container style={{ width: expandedWidth, height: expandedHeight }}>
        <Inner style={{ width, height, scale, transformOrigin }}>
          <InnerInverter
            style={{
              scale: scale.to((v) => 1 / v),
              transformOrigin,
            }}
          >
            <Content
              ref={expandedRef}
              style={{ opacity: opacity.to((v) => 1 - v) }}
            >
              <Menu>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
              </Menu>
              <CloseBtn onClick={() => setOpen(false)}>
                <X />
              </CloseBtn>
            </Content>
            <ExpandBtn
              ref={collapsedRef}
              onClick={() => setOpen(true)}
              style={{ opacity, rotate }}
            >
              <Plus />
            </ExpandBtn>
          </InnerInverter>
        </Inner>
      </Container>
    </Layout>
  );
};

export default ExpandingMenuButton;
