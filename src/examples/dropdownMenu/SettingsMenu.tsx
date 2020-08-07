import React from 'react';
import DropdownItem from './DropdownItem';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';

import { ActiveMenu } from './types';

type SettingsMenuProps = {
  setActiveMenu: React.Dispatch<React.SetStateAction<ActiveMenu>>;
};

const SettingsMenu = ({ setActiveMenu }: SettingsMenuProps) => {
  return (
    <ul>
      <DropdownItem
        goToMenu="main"
        go={() => setActiveMenu('main')}
        leftIcon={<ArrowIcon />}
      >
        <h2>Settings</h2>
      </DropdownItem>
      <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
      <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
      <DropdownItem leftIcon={<BoltIcon />}>TypeScript</DropdownItem>
      <DropdownItem leftIcon={<BoltIcon />}>React</DropdownItem>
    </ul>
  );
};

export default SettingsMenu;
