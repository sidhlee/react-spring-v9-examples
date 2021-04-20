import React from 'react';
import styled from 'styled-components';

const StyledTextCard = styled('div')<{ bg: string; color: string }>`
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
`;

type TextCardProps = {
  bg?: string;
  color?: string;
};

const TextCard: React.FC<TextCardProps> = ({
  children,
  bg = 'white',
  color = 'black',
}) => {
  return (
    <StyledTextCard bg={bg} color={color}>
      {children}
    </StyledTextCard>
  );
};

export default TextCard;
