import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    padding-bottom: 0.5em;
    a {
      font-size: 1.2rem;
    }
  }
`;

type NavigationProps = {};

const Navigation = (props: NavigationProps) => {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <NavLink to="message-hub">Message Hub</NavLink>
        </li>
        <li>
          <NavLink to="trees">Trees</NavLink>
        </li>
        <li>
          <NavLink to="dropdown-menu">Dropdown Menu</NavLink>
        </li>
        <li>
          <NavLink to="carousel">Carousel</NavLink>
        </li>
        <li>
          <NavLink to="draggable-list">Draggable List</NavLink>
        </li>
        <li>
          <NavLink to="slider">Slider</NavLink>
        </li>
        <li>
          <NavLink to="flip-card">Flip Card</NavLink>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
