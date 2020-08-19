import styled from 'styled-components';

type StyledDraggableListProp = {
  itemHeight: number;
  numItems: number;
};

const MARGIN_BOTTOM = 10;

export const StyledDraggableList = styled('div')<StyledDraggableListProp>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(28, 30, 33);
  ul {
    position: relative;
    width: 300px;
    max-width: 90%;
    height: ${(props) => props.itemHeight * props.numItems + 'px'};
    margin: 0 auto;

    li {
      display: flex;
      align-items: center;
      &::before {
        --size: 2.5em;
        content: '';
        display: block;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;         
        margin-right: 1em;
        background-position: center;
        background-size: cover;
        filter: brightness(1.2);
      }
      &:nth-child(1)::before {
        background-image: url('https://placem.at/people?w=100&h=100&random=1&txt=0');
      }
      &:nth-child(2)::before {
        background-image: url('https://placem.at/people?w=100&h=100&random=2&txt=0');
      }
      &:nth-child(3)::before {
        background-image: url('https://placem.at/people?w=100&h=100&random=3&txt=0');
      }
      &:nth-child(4)::before {
        background-image: url('https://placem.at/people?w=100&h=100&random=4&txt=0');
      }
      position: absolute;
      width: 100%;
      height: ${(props) => props.itemHeight - MARGIN_BOTTOM + 'px'};
      text-transform: uppercase;
      line-height: 90px;
      padding-left: 1em;
      font-size: 1rem;
      border-radius: 5px;
      letter-spacing: 2px;      
      color: white;
      background: rgb(36,	37,	38	);
      box-shadow: 0 1px 2px rgba(0,0,0,0.8);

      transition: filter .6s ease;
      &:active {
        filter: brightness(1.3);
       }      
      }      
    }
  }
`;
