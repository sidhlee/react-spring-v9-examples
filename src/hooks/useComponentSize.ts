import { useState, useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

function getSize(el: HTMLDivElement | null) {
  if (
    el &&
    typeof el === 'object' &&
    'offsetWidth' in el &&
    'offsetHeight' in el
  ) {
    return {
      width: el.offsetWidth,
      height: el.offsetHeight,
    };
  }
  return {
    width: 0,
    height: 0,
  };
}

export function useComponentSize(ref: React.RefObject<HTMLDivElement | null>) {
  const [componentSize, setComponentSize] = useState(getSize(ref.current));

  /**
   * update componentSize
   */

  const el = ref.current;
  useLayoutEffect(() => {
    const handleResize = () => {
      console.log('resize!!!!!!!!!');
      if (el) {
        setComponentSize(getSize(el));
      }
    };
    console.log('layoutEffect');
    if (!el) {
      console.log('no element');
      return;
    }
    console.log('handle resize');
    handleResize(); // update size
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(el);

    return () => {
      // just passing resizeObserver.disconnect does not work...(why?)
      resizeObserver.disconnect();
    };
  }, [el]);

  return componentSize;
}
