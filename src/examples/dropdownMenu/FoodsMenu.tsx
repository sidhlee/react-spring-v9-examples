import React from 'react';

import { ActiveMenu } from './types';

import DropdownItem from './DropdownItem';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';

type FoodsMenuProps = {
  setActiveMenu: React.Dispatch<React.SetStateAction<ActiveMenu>>;
};

const FoodsMenu = ({ setActiveMenu }: FoodsMenuProps) => {
  return (
    <ul>
      <DropdownItem
        goToMenu="main"
        go={() => setActiveMenu('main')}
        leftIcon={<ArrowIcon />}
      >
        <h2>Foods</h2>
      </DropdownItem>
      <DropdownItem leftIcon="🥑">Avocado</DropdownItem>
      <DropdownItem leftIcon="🌯">Burrito</DropdownItem>
      <DropdownItem leftIcon="🍕">Pizza</DropdownItem>
      <DropdownItem leftIcon="🥗">Salad</DropdownItem>
      <DropdownItem leftIcon="🍣">Sushi</DropdownItem>
      <DropdownItem leftIcon="🍜">Ramen</DropdownItem>
      <DropdownItem leftIcon="🍰">Cake</DropdownItem>
    </ul>
  );
};

export default FoodsMenu;
