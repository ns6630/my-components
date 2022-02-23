import { useCallback, useRef } from "react";

export default function useThrottle(
  callback: (...args: any[]) => void,
  delay = 100
) {
  const throttled = useRef<boolean>(false);
  return useCallback(
    (...args: any[]) => {
      if (throttled.current) {
        return;
      } else {
        callback(...args);

        throttled.current = true;
        setTimeout(() => {
          throttled.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
}
