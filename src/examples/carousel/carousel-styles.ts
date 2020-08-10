import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const gridMain = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 13.5em 3em 10em;
`;

export const StyledCarousel = styled('div')`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 700px;
  height: 100vh;
  overflow: hidden;
  ${gridMain};
`;

export const StyledSlides = styled('ul')``;

type StyledSlideProps = {
  src: string;
};

export const StyledSlide = styled(animated.li)<StyledSlideProps>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;

  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${gridMain}
`;

export const StyledSlideText = styled(animated.div)`
  color: var(--text-main);
  background: rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
`;

export const SlideTextContainer = styled('div')`
  overflow: hidden;
  padding: 1.5em 2em;
  width: 400px;
  max-width: 90vw;
`;

export const StyledControls = styled('div')`
  grid-row: 4;
  grid-column: 2;
  align-self: start;
  justify-self: center;

  display: flex;
  align-items: flex-start;

  background: rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius);
  z-index: 200;
`;

export const Button = styled('button')`
  color: rgba(255, 255, 255, 0.8);
  --size: 1em;
  width: var(--size);
  height: var(--size);
  font-size: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  transition: color 0.2s;
  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.05);
  }

  &:active {
    transition: none;
    transform: scale(1);
    filter: brightness(0.9);
  }
`;

export const SlideTextButton = styled('button')`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0;
  transition: background-color 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;
