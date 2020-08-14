import styled from 'styled-components';

export const StyledDraggableList = styled('div')<{ height: number }>`
  height: ${(props) => props.height};
`;
