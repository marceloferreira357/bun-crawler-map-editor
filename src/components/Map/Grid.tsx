import React, { useMemo } from "react";
import { cn } from "../../common/utils";
import useMapStore from "../../stores/useMapStore";

type GridProps = {
  cols: number;
  rows: number;
  gridSize: number;
};

const Grid: React.FC<GridProps> = React.memo(({ cols, rows, gridSize }) => {
  const { showGrid } = useMapStore((state) => state);

  const gridStyle = useMemo(
    () => ({
      gridTemplateColumns: `repeat(${cols}, ${gridSize}px)`,
      gridTemplateRows: `repeat(${rows}, ${gridSize}px)`,
    }),
    [cols, rows, gridSize]
  );

  const cellClassName = useMemo(
    () =>
      cn(
        "bg-charleston-green border",
        showGrid ? "border-american-silver/10" : "border-transparent"
      ),
    [showGrid]
  );

  const totalCells = useMemo(() => cols * rows, [cols, rows]);

  return (
    <div
      className="absolute top-0 left-0 z-0 shadow-md rounded-md grid overflow-hidden"
      style={gridStyle}
    >
      {Array.from({ length: totalCells }).map((_, index) => (
        <div key={index} className={cellClassName} />
      ))}
    </div>
  );
});

export default Grid;
