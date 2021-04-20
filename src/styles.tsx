import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  :root {
    --text-main: #eee;
    --text-secondary: #bbb;
    --text-inverse: #333;
    --primary: rgb(54, 54, 69);
    --secondary: #8fa5b6;
    --accent: rgb(255, 109, 109);
    --gray: rgba(54, 54, 69, 0.05);
    --alpha-black: rgba(0,0,0,0.5);
    --alpha-white: rgba(255, 255, 255, 0.6);
    --alpha-white-light: rgba(255, 255, 255, 0.8);
    --bg: #151616;
    --navbar-bg: #242526;
    --nav-height: 60px;
    --border-color: #474a4d;
    --border: 1px solid var(--border-color);
    --border-radius: 5px;
    --transition-duration: 0.3s;

    --box-shadow: 3px 3px 5px hsla(0, 0%, 0%, 0.2);
  }

  html {
  box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }


  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    user-select: none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--bg);
    color: var(--text-main);
  }
  html,
  body,
  div,
  a,
  i,
  button,
  select,
  option,
  optgroup,
  hr,
  br {
    user-select: none;
    cursor: default;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a,
button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: var(--text-secondary);
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.3);
  }
}

button {
  font: inherit;
  background: transparent;
  border: none;
  color: var(--text-main);
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.3);
  }
  &:focus {
    outline: thin dotted;
  }
}

img {
  max-width: 100%;
}
// makes it easier to control things
h1,
h2,
h3
 {
margin: 0
}

p {
  margin-top: 1em;
}

span {
  display: inline-block;
}

code {
  background-color: rgba(27,31,35,.7);
  border-radius: 5px;
  font-size: 100%;
  margin: 0;
  padding: .2em .4em;
  color: var(--accent);
}

input {
  font-size: 1.2rem;
  padding: .5em 1em;
  border-radius: var(--border-radius);
}


`;

export const HomeLink = styled(Link)`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 2rem;
  font-weight: bold;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
`;
