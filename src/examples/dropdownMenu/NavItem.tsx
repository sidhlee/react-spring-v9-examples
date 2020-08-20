import React, { useState } from 'react';
import { StyledNavItem, NavIcon } from './navbarStyles';

type NavItemProps = {
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

const NavItem = ({ icon, children }: NavItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavItem>
      <NavIcon onClick={() => setOpen(!open)}>{icon}</NavIcon>
      {open && children}
    </StyledNavItem>
  );
};

export default NavItem;
