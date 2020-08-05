import { useRef, useEffect } from 'react';

/**
 * Returns saved value from the last render
 * @param value
 */
export function usePrevious(value: any) {
  const ref = useRef<any | null>(null);
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}
