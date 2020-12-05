import styled from 'styled-components';
import { a } from 'react-spring';

export const Expander = styled(a.div)`
  position: absolute;
  top: 10vh;
  left: 50vw;
  border-radius: 50%;
  overflow: hidden;
  will-change: transform;
`;

/**
 * invert the scale transform of the expander
 * to keep the scale of the menu consistent.
 */
export const Inverter = styled(a.div)`
  will-change: transform;
`;

/**
 * Ref will be passed to measure the width and height
 */
export const MenuWrapper = styled(a.div)`
  position: absolute;
`;

export const MenuItems = styled.ul`
  min-width: 12rem;
  background: var(--border-color);
  padding: 1em 0;
  border-radius: vaR(--border-radius);
  li {
    width: 100%;
    padding: 1em 2em;
    transition: background-color 150ms ease;
    &:hover {
      background: var(--primary);
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  padding: 0.25em;
  color: var(--text-secondary);
  &:hover {
    color: var(--text-main);
  }
`;

export const ExpandBtn = styled(a.button)`
  position: absolute;
  top: 0;
  left: 0;
  width: 3rem;
  height: 3rem;
  background: var(--primary);
  padding: 0.75em;
  border-radius: 50%;
  outline: none;
  &:focus {
    outline: none; // prevent outline from rotating with the button
  }
`;
