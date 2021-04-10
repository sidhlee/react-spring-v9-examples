import React, { useState } from 'react';
import styled from 'styled-components';
import LiquidWave from './textEffects/LiquidWave';

const StyledAnimatedText = styled.div`
  header {
    max-width: 600px;
    margin: 3rem auto;
    text-align: center;
    input {
      width: 100%;
      text-align: center;
    }
  }

  main {
    padding: 0 2rem;
  }
`;

const AnimatedText: React.FC = () => {
  const [text, setText] = useState('Animate!');

  return (
    <StyledAnimatedText>
      <header>
        <h1>Animated Text</h1>
        <form>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </header>
      <main>
        <LiquidWave text={text} />
      </main>
    </StyledAnimatedText>
  );
};

export default AnimatedText;
