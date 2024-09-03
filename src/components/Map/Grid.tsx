import { memo } from "react";

type GridProps = {
  width: number;
  height: number;
  cols: number;
  rows: number;
  gridSize: number;
};

function Grid({ width, height, cols, rows, gridSize }: GridProps) {
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
          className="bg-charleston-green border border-american-silver/10"
        />
      ))}
    </div>
  );
}

export default memo(Grid);
