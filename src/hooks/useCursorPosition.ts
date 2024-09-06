import { useEffect, useState } from "react";
import { Vector2 } from "../common/types";

const useCursorPosition = () => {
  const [position, setPosition] = useState<Vector2>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

export default useCursorPosition;
