import React from 'react';
import styled from 'styled-components';
import TextCard from './TextCard';

const StyledLiquidWave = styled('div')``;

type LiquidWaveProps = {
  text: string;
};

const LiquidWave: React.FC<LiquidWaveProps> = ({ text }) => {
  return (
    <StyledLiquidWave>
      <TextCard>{text}</TextCard>
    </StyledLiquidWave>
  );
};

export default LiquidWave;
