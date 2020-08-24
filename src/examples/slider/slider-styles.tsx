import styled from 'styled-components';
import { a } from 'react-spring';
import { CheckCircle, Trash } from 'react-feather';

export const SliderContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
export const SliderBack = styled(a.div)`
  position: relative;
  width: 15rem;
  height: 5rem;
  border-radius: var(--border-radius);
  display: grid;
  align-items: center;
  padding: 0 1.5em;
`;

export const SliderFront = styled(a.div)`
  cursor: -webkit-grab;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: var(--text-main);
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: monospace;
  background-color: var(--primary);
  display: grid;
  place-items: center;
  border-radius: var(--border-radius);
`;

export const SliderIcon = styled(a.span)`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background-color: white;
  display: grid;
  place-items: center;
`;

export const CheckIcon = styled(CheckCircle)``;
export const TrashIcon = styled(Trash)``;
