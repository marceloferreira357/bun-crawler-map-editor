import { useMemo } from "react";
import useMapStore from "../../stores/useMapStore";
import Grid from "./Grid";

function Map() {
  const { scale, width, height } = useMapStore((state) => state);

  const { gridSize, cols, rows } = useMemo(() => {
    const gridSize = 16 * scale; // size of each square in pixels
    const cols = Math.floor(width / gridSize + 1);
    const rows = Math.floor(height / gridSize + 1);

    return {
      gridSize,
      cols,
      rows,
    };
  }, [scale, width, height]);

  return (
    <div className="flex flex-row w-[calc(100dvw-448px)] h-full overflow-auto bg-dark-liver shrink-0 p-2">
      <div
        className="relative"
        style={{
          minWidth: width,
          minHeight: height,
        }}
      >
        <Grid gridSize={gridSize} cols={cols} rows={rows} />
      </div>
    </div>
  );
}

export default Map;
