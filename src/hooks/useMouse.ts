import { useEffect, useState } from "react";
import useThrottle from "./useThrottle";

export default function useMouse(delay = 100) {
  const [cursorPos, setCursorPos] = useState({ x: -1, y: -1 });
  const callback = useThrottle((event: MouseEvent) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
  }, delay);

  useEffect(() => {
    const handleMove = callback;

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return cursorPos;
}
