import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const gridMain = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 13.5em 3em 9em;
`;

export const CarouselContainer = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCarousel = styled('div')`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  max-height: 700px;
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
  background: var(--alpha-black);
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

export const Button = styled('button')`
  color: var(--alpha-white);
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
    color: var(--alpha-white-light);
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
    background: var(--alpha-black);
  }
`;

export const StyledSlideNav = styled('nav')`
  z-index: 200;

  grid-column: 1 / -1;
  grid-row: 3;
  justify-self: center;
  ul {
    display: flex;
    li {
      margin: 0 1em;
      filter: drop-shadow(0 0 5px var(--alpha-black));
      button {
        --size: 0.8rem;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background: var(--alpha-white);
        &:hover {
          background: var(--alpha-white-light));
          filter: none;
        }
        &.active {
          transform: scale(1.2);
          background: var(--alpha-white-light);
        }
        &:focus,
        &.active {
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
        }
        transition: all 0.3s;
      }
    }
  }
`;

export const StyledControls = styled('div')`
  grid-row: 4;
  grid-column: 2;
  align-self: start;
  justify-self: center;

  display: flex;
  align-items: flex-start;

  background: var(--alpha-black);
  border-radius: var(--border-radius);
  z-index: 200;
`;

export const StyledProgressBar = styled('div')<{ progress: number }>`
  width: ${(props) => props.progress * 100 + '%'};
  height: 5px;
  grid-row: 4;
  grid-column: 1 / -1;
  background: var(--alpha-white);
  z-index: 100;
  align-self: end;
  margin-bottom: 1rem;
`;
