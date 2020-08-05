import styled from 'styled-components';
import { animated } from 'react-spring';

export const Main = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #676767;
`;

type ContainerProps = {
  top?: boolean;
  position?: 'center' | 'start' | 'end';
};

export const Container = styled('div')<ContainerProps>`
  position: fixed;
  z-index: 1000;
  margin: 0 auto;
  width: auto;
  top: ${(props) => (props.top ? '30px' : 'unset')};
  bottom: ${(props) => (props.top ? 'unset' : '30px')};
  left: 30px;
  right: 30px;
  display: flex;
  flex-direction: ${(props) => (props.top ? 'column-reverse' : 'column')};
  pointer-events: none;
  align-items: ${(props) =>
    props.position === 'center' ? 'center' : `flex-${props.position || 'end'}`};
  @media (max-width: 860px) {
    align-items: center;
  }
`;

export const Message = styled(animated.div)`
  position: relative;
  width: 40ch;
  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Content = styled('div')<{ canClose?: boolean }>`
  cursor: auto;
  position: relative;
  color: white;
  background: #445159;
  opacity: 0.9;
  padding: 12px 22px;
  font-size: 1em;
  display: grid;
  grid-template-columns: ${(props) =>
    props.canClose === false ? '1fr' : '1fr auto'};
  grid-gap: 10px;
`;

export const Button = styled('button')`
  cursor: pointer;
  pointer-events: all;
  outline: none;
  border: none;
  align-self: flex-end;
  margin: 0;
  padding: 0;
  background: transparent;
  padding-bottom: 14px;
  color: rgba(255, 255, 255, 0.5);
  :hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Life = styled(animated.div)<{ top?: boolean }>`
  position: absolute;
  background-image: linear-gradient(130deg, #00b4e6, #00f0e0);
  height: 5px;
  left: 0px;
  bottom: ${(props) => (props.top ? '10px' : '0')};
`;
