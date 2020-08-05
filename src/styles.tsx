import styled, { createGlobalStyle } from 'styled-components';
import { animated } from 'react-spring';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    user-select: none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #f0f0f0;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;
