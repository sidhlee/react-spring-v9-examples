import styled from 'styled-components';
import { a } from 'react-spring';

const StyledTrees = styled('div')`
  width: 100%;
  height: 100vh;
  color: var(--text-main);
  fill: var(--text-main);
`;

const StyledTree = styled('div')`
  fill: white;
  padding-top: 0.25em;
  overflow: hidden;
`;

const iconStyles = {
  width: '1rem',
  height: '1rem',
  verticalAlign: 'middle',
  marginRight: '.5em',
  cursor: 'pointer',
};

const Subtrees = styled(a.div)`
  will-change: opacity, height, transform;
  margin-left: 1em;
  padding-left: 0.5em;
  border-left: 1px dashed var(--text-secondary);
`;

export { StyledTrees, StyledTree, iconStyles, Subtrees };
