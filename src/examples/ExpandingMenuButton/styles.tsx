import styled from 'styled-components';
import { a } from 'react-spring';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Inner = styled(a.div)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  overflow: hidden;
  will-change: transform;
`;

export const InnerInverter = styled(a.div)`
  will-change: transform;
`;

export const Content = styled(a.div)`
  position: absolute;
`;

export const Menu = styled.ul`
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
