import { cn } from "../../common/utils";
import useMapStore from "../../stores/useMapStore";

type GridProps = {
  cols: number;
  rows: number;
  gridSize: number;
};

function Grid({ cols, rows, gridSize }: GridProps) {
  const { showGrid, width, height } = useMapStore((state) => state);

  return (
    <div
      className="absolute top-0 left-0 z-0 shadow-md rounded-md grid overflow-hidden"
      style={{
        width,
        height,
        gridTemplateColumns: `repeat(${cols}, ${gridSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${gridSize}px)`,
      }}
    >
      {Array.from({ length: cols * rows }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "bg-charleston-green border",
            showGrid ? "border-american-silver/10" : "border-transparent"
          )}
        />
      ))}
    </div>
  );
}

export default Grid;
