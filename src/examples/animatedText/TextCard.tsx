import React from 'react';
import styled from 'styled-components';

const StyledTextCard = styled('div')<{ bg: string; color: string }>`
  position: relative;

  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 1rem;
  padding: 2rem;
  border-radius: var(--border-radius);
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: 1.5rem;
  text-align: center;

  .effect-title {
    position: absolute;
    top: 0;
    left: 0;
    h2 {
      font-family: monospace;
      font-size: 0.85rem;
      background: rgba(255, 0, 0, 0.3);
      padding: 0.5em 1em;
    }
  }
`;

type TextCardProps = {
  bg?: string;
  color?: string;
  effectName: string;
};

const TextCard: React.FC<TextCardProps> = ({
  children,
  effectName,
  bg = 'white',
  color = 'black',
}) => {
  return (
    <StyledTextCard bg={bg} color={color}>
      <div className="effect-title">
        <h2>{effectName}</h2>
      </div>
      {children}
    </StyledTextCard>
  );
};

export default TextCard;
