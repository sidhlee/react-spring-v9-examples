import React from 'react';

import { ActiveMenu } from './types';
import { StyledDropdownItem } from './navbarStyles';

type DropdownItemProps = {
  children: React.ReactNode | string;
  goToMenu?: ActiveMenu;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  go?: () => void;
  style?: React.CSSProperties;
};

const DropdownItem = ({
  children,
  leftIcon,
  rightIcon,
  go,
  goToMenu,
}: DropdownItemProps) => {
  return (
    <StyledDropdownItem>
      <button type="button" onClick={go}>
        <span>{leftIcon}</span>
        {children}
        <span style={{ display: !rightIcon ? 'none' : 'flex' }}>
          {rightIcon}
        </span>
      </button>
    </StyledDropdownItem>
  );
};

export default DropdownItem;
