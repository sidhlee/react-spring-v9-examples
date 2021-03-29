import styled from 'styled-components';

export const StyledAnimatedPage = styled.div`
  --color: #24211d;
  color: var(--color);
  section {
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;
    /* background: pink; */
    .hero {
      height: 0%;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      h1 {
        margin: 0;
        position: absolute;
        left: 0.5em;
        bottom: 0.5em;
        font-size: 5rem;
        color: white;
        z-index: 100;
        text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      }
    }
    &::after {
      content: '';
      background: rgba(0, 0, 0, 0.2);
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .slider {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #aac0cb, #344648);
  }

  nav {
    display: grid;
    grid-template-columns: 10% 1fr 1fr 10%;
    min-height: 10vh;
    align-items: center;
  }
  #logo {
    z-index: 500;
    grid-column: 2 / 3;
    font-size: 24;
    justify-self: start;
    h3 {
      color: var(--color);
      display: inline-block;
      margin-bottom: 0.5em;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: var(--color);
    }
  }
  .menu-btn {
    justify-self: end;
  }
`;
