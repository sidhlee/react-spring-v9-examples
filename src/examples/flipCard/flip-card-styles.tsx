import styled, { css } from 'styled-components';
import { a } from 'react-spring';

export const FlipCardContainer = styled('div')`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cardCss = css`
  position: absolute;
  max-width: 400px;
  max-height: 400px;
  width: 90%;
  height: 50ch;
  cursor: pointer;
  will-change: transform, opacity;
  background-size: cover;
  border-radius: var(--border-radius);
`;

export const CardFront = styled(a.div)`
  ${cardCss}
  background-image: url(https://picsum.photos/id/130/500/500);
`;

export const CardBack = styled(a.div)`
  ${cardCss}
  background-image: url(https://picsum.photos/id/112/500/500);
`;
