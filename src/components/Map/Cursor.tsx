import { BsCursorFill } from "react-icons/bs";
import { Vector2 } from "../../common/types";

type CursorProps = {
  position: Vector2;
};

function Cursor({ position }: CursorProps) {
  return (
    <div
      className="fixed z-[5] text-xl pointer-events-none"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: `scaleX(-1)`,
      }}
    >
      <BsCursorFill />
    </div>
  );
}

export default Cursor;
