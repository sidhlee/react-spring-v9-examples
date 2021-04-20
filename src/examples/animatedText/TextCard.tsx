import React from 'react';
import styled from 'styled-components';

const StyledTextCard = styled('div')<{ bg: string; color: string }>`
  background-color: ${(props) => props.bg};
  flex: 1 1 auto;
  padding: 2rem;
  width: 100%;
  /* height: 12rem; */
  color: ${(props) => props.color};
  font-size: 1.5rem;
  border-radius: var(--border-radius);
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
