import React from 'react';
import styled from 'styled-components';
import TextCard from '../TextCard';

const StyledSmoothSlide = styled('div')``;

type SmoothSlideProps = {
  letters: string[];
};

const SmoothSlide: React.FC<SmoothSlideProps> = ({ letters }) => {
  return (
    <TextCard>
      <StyledSmoothSlide>{letters}</StyledSmoothSlide>
    </TextCard>
  );
};

export default SmoothSlide;
