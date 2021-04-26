import React, { useState } from 'react';
import styled from 'styled-components';
import LiquidWave from './textEffects/LiquidWave';
import SmoothSlide from './textEffects/SmoothSlide';

const StyledAnimatedText = styled.div`
  header {
    max-width: 600px;
    margin: 3rem auto;
    text-align: center;
    form {
      display: flex;
      input {
        width: 100%;
        text-align: center;
      }
      button {
        background-color: var(--primary);
        font-weight: bold;
        padding: 0 2em;
        border-radius: var(--border-radius);
      }
    }
  }

  main {
    padding: 0 2rem;
    letter-spacing: 0.1rem;
    display: flex;
    span {
      // required for space inside div to be displayed
      white-space: pre-wrap;
    }
  }
`;

const AnimatedText: React.FC = () => {
  const [text, setText] = useState('Lorem Ipsum');
  const [key, setKey] = useState(0);

  const letters = text.split('');
  //.map((letter) => (letter === ' ' ? '' : letter));

  console.log(letters);

  // force rerender of main element
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setKey((k) => k + 1);
  };

  return (
    <StyledAnimatedText>
      <header>
        <h1>Animated Text</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Animate!</button>
        </form>
      </header>
      <main key={key}>
        <LiquidWave letters={letters} />
        <SmoothSlide letters={letters} />
      </main>
    </StyledAnimatedText>
  );
};

export default AnimatedText;
