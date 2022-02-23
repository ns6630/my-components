import React, { useCallback, useRef } from "react";

export type Callback<T> = (e: React.MouseEvent<T>) => void;

export default function useDoubleClick<T>(
  clickHandler: Callback<T>,
  doubleClickHandler: Callback<T>,
  delay = 200
) {
  const clickTime = useRef<number | null>(null);
  return useCallback(
    (e: React.MouseEvent<T>) => {
      const now = new Date().getTime();
      if (clickTime.current && now - clickTime.current <= delay) {
        doubleClickHandler(e);
      } else {
        clickTime.current = now;
        clickHandler(e);
      }
    },
    [clickHandler, doubleClickHandler, delay]
  );
}
