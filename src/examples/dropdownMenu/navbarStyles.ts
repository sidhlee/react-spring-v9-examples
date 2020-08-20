import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const StyledNavbar = styled('nav')`
  height: var(--nav-height);
  background-color: var(--navbar-bg);
  padding: 0 1rem;
  border-bottom: var(--border);
`;

const NavItems = styled('ul')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 100%;
  height: 100%;
`;

const StyledNavItem = styled('li')`
  width: calc(var(--nav-height) * 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const iconButton = css`
  --size: calc(var(--nav-height) * 0.66);
  width: var(--size);
  height: var(--size);
  background-color: var(--border-color);
  border-radius: 50%;
  margin: 2px;
  display: flex; /* center svg icons inside links */
  justify-content: center;
  align-items: center;
  overflow: hidden;

  svg {
    --size: 20px;
    fill: var(--text-main);
    height: var(--size);
    width: var(--size);
  }
`;

const NavIcon = styled('button')`
  ${iconButton}
  transition: filter var(--transition-duration);
  &:hover {
    filter: brightness(1.2);
  }
`;

const StyledDropdownMenu = styled(animated.div)`
  position: absolute;
  top: calc(var(--nav-height) - 2px);
  transform: translateX(-45%);
  background-color: var(--navbar-bg);
  padding: 1rem;
  border: var(--border);
  border-radius: var(--border-radius);
  width: 250px;
  overflow: hidden;
  height: auto;
`;

const StyledMainMenu = styled('ul')``;

const StyledDropdownItem = styled('li')`
  border-radius: var(--border-radius);
  transition: background var(--transition-duration);
  &:hover {
    background-color: #525357;
  }
  button {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.25em;
    span {
      ${iconButton}
      margin-right: 0.5em;
      &:last-of-type {
        margin-left: auto;
        margin-right: 0;
      }
    }
    h2 {
      margin: 0;
    }
  }
`;

export {
  StyledNavbar,
  NavItems,
  StyledNavItem,
  NavIcon,
  StyledDropdownMenu,
  StyledMainMenu,
  StyledDropdownItem,
};
