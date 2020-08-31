import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';

import { ReactComponent as PlusIcon } from './icons/plus-icon.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret-icon.svg';
import userImage from './47.jpg';

import { StyledNavbar, NavItems } from './navbarStyles';

import DropdownMenu from './DropdownMenu';

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
  // Only render when image is ready
  const [userImageReady, setUserImageReady] = useState(false);
  useEffect(() => {
    const img = new Image();
    // setting src triggers browser to download image
    img.src = userImage;
    img.onload = () => {
      setUserImageReady(true);
    };
  }, []);

  // userImageReady && (...) returns false when userImageReady has false value.
  return userImageReady ? (
    <StyledNavbar>
      <NavItems>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </NavItems>
    </StyledNavbar>
  ) : null;
};

export default Navbar;
