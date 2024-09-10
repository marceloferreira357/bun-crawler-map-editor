import { useCallback } from "react";
import { cn } from "../../../common/utils";
import useMapStore from "../../../stores/useMapStore";
import { addMapTile, eraseMapTile } from "./gridUtils";

type GridProps = {
  cols: number;
  rows: number;
  gridSize: number;
};

function Grid({ cols, rows, gridSize }: GridProps) {
  const {
    showGrid,
    tiles,
    setTiles,
    selectedMapTile,
    isInEditorMode,
    isInEraserMode,
    zoom,
  } = useMapStore((state) => state);

  const gridStyle = {
    gridTemplateColumns: `repeat(${cols}, ${gridSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${gridSize}px)`,
  };

  const cellClassName = cn(
    "border",
    showGrid ? "border-american-silver/10" : "border-transparent"
  );

  const totalCells = cols * rows;

  const handleOnCellClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
      event.preventDefault();
      if (isInEditorMode) {
        setTiles(
          addMapTile(selectedMapTile!, index, cols, gridSize, tiles, zoom)
        );
      } else if (isInEraserMode) {
        setTiles(eraseMapTile(index, cols, gridSize, tiles, zoom));
      }
    },
    [
      isInEditorMode,
      isInEraserMode,
      selectedMapTile,
      cols,
      gridSize,
      tiles,
      setTiles,
    ]
  );

  return (
    <div
      className="absolute top-0 left-0 z-0 grid overflow-hidden"
      style={gridStyle}
    >
      {Array.from({ length: totalCells }).map((_, index) => (
        <div
          key={index}
          className={cellClassName}
          onClick={(event) => handleOnCellClick(event, index)}
        />
      ))}
    </div>
  );
}

export default Grid;
