import { useMemo } from "react";
import useMapStore from "../../stores/useMapStore";
import Grid from "./Grid";
import { calculateMapSize } from "./mapUtils";

function Map() {
  const { scale, width, height, zoom } = useMapStore((state) => state);

  const { gridSize, cols, rows, containerWidth, containerHeight } = useMemo(
    () => calculateMapSize(scale, zoom, width, height),
    [scale, zoom, width, height]
  );

  // Adjust outer container dimensions based on zoom level
  const { adjustedWidth, adjustedHeight } = useMemo(
    () => ({
      adjustedWidth: containerWidth * zoom,
      adjustedHeight: containerHeight * zoom,
    }),
    [containerWidth, containerHeight, zoom]
  );

  return (
    <div className="flex flex-row w-[calc(100dvw-448px)] h-full overflow-auto bg-dark-liver shrink-0 p-2">
      <div
        className="relative"
        style={{
          minWidth: `${adjustedWidth}px`,
          minHeight: `${adjustedHeight}px`,
        }}
      >
        <div
          className="absolute top-0 left-0"
          style={{
            width: `${containerWidth}px`,
            height: `${containerHeight}px`,
            transform: `scale(${zoom})`,
            transformOrigin: "0 0",
          }}
        >
          <Grid gridSize={gridSize} cols={cols} rows={rows} />
        </div>
      </div>
    </div>
  );
}

export default Map;
