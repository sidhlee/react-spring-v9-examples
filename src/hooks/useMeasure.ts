import { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

// ref is defined inside the hook, so if the component that calls useMeasure
// unmounts, we lose the ref with it.
export function useMeasure() {
  const ref = useRef<HTMLDivElement>(null);
  const [measure, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [resizeObserver] = useState(
    new ResizeObserver(([entry]: ResizeObserverEntry[]) =>
      set(entry.contentRect)
    )
  );
  useEffect(() => {
    console.log('measure effect', ref.current);
    if (ref.current) resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [resizeObserver]);

  return [{ ref }, measure] as const;
}
