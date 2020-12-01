import React, { useState, useRef } from 'react';
import { useTransition, animated } from 'react-spring';

import { ActiveMenu } from './types';
import { StyledDropdownMenu } from './navbarStyles';

import MainMenu from './MainMenu';
import SettingsMenu from './SettingsMenu';
import FoodsMenu from './FoodsMenu';

type DropdownMenuProps = {};

const DropdownMenu = (props: DropdownMenuProps) => {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>('main');

  const [menuHeight, setMenuHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null!);

  const MENUS = {
    main: <MainMenu setActiveMenu={setActiveMenu} />,
    settings: <SettingsMenu setActiveMenu={setActiveMenu} />,
    foods: <FoodsMenu setActiveMenu={setActiveMenu} />,
  };

  const transition = useTransition(activeMenu, {
    key: (item) => item,
    initial: {
      transform: 'translate3d(0%,0,0)',
      // just leave the height out, and it will jump right into "enter"
    },
    from: {
      // If going back to main menu, slide in from the left.
      transform: `translate3d(${activeMenu === 'main' ? '-110%' : '110%'},0,0)`,
      height: menuHeight,
    },
    enter: (item) => async (next, cancel) => {
      await next({
        transform: 'translate3d(0%,0,0)',
        height: ref.current.offsetHeight,
      });
      // update height so that we can use it as "from" height
      // as we transition into other menus
      setMenuHeight(ref.current.offsetHeight);
    },
    leave: {
      transform: `translate3d(${activeMenu === 'main' ? '-110%' : '110%'},0,0)`,
      height: 'auto',
    },
  });

  return (
    <>
      {transition(({ height, ...style }, activeMenu, t) => (
        <StyledDropdownMenu style={{ height }}>
          <animated.div
            style={{
              ...style,
              position: 'absolute',
              padding: 'inherit',
              left: 0,
              top: 0,
              width: '100%',
            }}
            key={t.key}
            ref={ref}
          >
            {MENUS[activeMenu]}
          </animated.div>
        </StyledDropdownMenu>
      ))}
    </>
  );
};

export default DropdownMenu;
