import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #191b21;
    --text-main: black;
    --primary: rgb(54, 54, 69);
    --secondary: #8fa5b6;
    --accent: rgb(255, 109, 109);
    --gray: rgba(54, 54, 69, 0.05);
    --bg: rgb(32, 32, 32);
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
    overflow: hidden;
    user-select: none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #f0f0f0;
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
  list-style: none;
}

a,
button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}
// makes it easier to control things
h1,
h2,
p {
  margin-top: 0;
  margin-bottom: 1em;
}
`;
