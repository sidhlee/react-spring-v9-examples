import React from 'react';

import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';

import DropdownItem from './DropdownItem';
import { ActiveMenu } from './types';

const Avatar = () => (
  <img
    src="https://placem.at/people"
    alt="user"
    style={{
      // To compensate for container padding
      width: '120%',
      height: '120%',
      color: 'transparent' /* hide alt text before image loads */,
    }}
  />
);

type MainMenuProps = {
  setActiveMenu: React.Dispatch<React.SetStateAction<ActiveMenu>>;
};

const MainMenu = ({ setActiveMenu }: MainMenuProps) => {
  return (
    <ul>
      <DropdownItem leftIcon={<Avatar />}>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={<CogIcon />}
        rightIcon={<ChevronIcon />}
        go={() => setActiveMenu('settings')}
        goToMenu="settings"
      >
        Settings
      </DropdownItem>
      <DropdownItem
        leftIcon="🍽"
        rightIcon={<ChevronIcon />}
        goToMenu="foods"
        go={() => setActiveMenu('foods')}
      >
        Foods
      </DropdownItem>
    </ul>
  );
};

export default MainMenu;
