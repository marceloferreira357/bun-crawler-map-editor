import { useMemo } from "react";
import useMapStore from "../../stores/useMapStore";
import Grid from "./Grid";
import { calculateMapSize } from "./mapUtils";

function Map() {
  const { scale, width, height, zoom } = useMapStore((state) => state);

  const { gridSize, cols, rows, containerWidth, containerHeight } = useMemo(
    () => calculateMapSize(scale, zoom, width, height),
    [scale, width, height, zoom]
  );

  return (
    <div className="flex flex-row w-[calc(100dvw-448px)] h-full overflow-auto bg-dark-liver shrink-0 p-2">
      <div
        className="relative"
        style={{
          minWidth: containerWidth,
          minHeight: containerHeight,
          transform: `scale(${zoom})`,
          transformOrigin: "0 0",
        }}
      >
        <Grid gridSize={gridSize} cols={cols} rows={rows} />
      </div>
    </div>
  );
}

export default Map;
