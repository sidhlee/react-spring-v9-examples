import React, { useState } from 'react';
import { StyledNavItem, NavLinkIcon } from './navbarStyles';

type NavItemProps = {
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

const NavItem = ({ icon, children }: NavItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavItem>
      <NavLinkIcon to="#" onClick={() => setOpen(!open)}>
        {icon}
      </NavLinkIcon>
      {open && children}
    </StyledNavItem>
  );
};

export default NavItem;
