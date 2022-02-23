import { useCallback, useEffect, useRef } from "react";

export type Callback = (...args: any[]) => any;

export interface UseDebounceArgs<T> {
  callback: T;
  delay?: number;
}

export default function useDebounce<T extends Callback>({
  callback,
  delay = 500,
}: UseDebounceArgs<T>) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const timeout = useRef<number>();

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = window.setTimeout(
        () => callbackRef.current(...args),
        delay
      );
    },
    [delay]
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return debouncedCallback;
}
