import { useEffect, useMemo, useRef } from "react";
import useMapStore from "../../stores/useMapStore";
import Background from "./Background";
import GeneratingScreenshotMessage from "./GeneratingScreenshotMessage";
import Grid from "./Grid";
import { calculateMapSize } from "./mapUtils";

function Map() {
  const { scale, width, height, zoom, setMapRef, generatingScreenshot } =
    useMapStore((state) => state);

  const mapRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (mapRef?.current) {
      setMapRef(mapRef);
    }
  }, [mapRef]);

  return (
    <div className="flex flex-row w-[calc(100dvw-448px)] h-full overflow-auto bg-dark-liver shrink-0 p-2">
      <div
        className="relative"
        style={{
          minWidth: `${adjustedWidth}px`,
          minHeight: `${adjustedHeight}px`,
        }}
      >
        <Background
          containerWidth={containerWidth}
          containerHeight={containerHeight}
        />
        {generatingScreenshot && (
          <GeneratingScreenshotMessage
            containerWidth={containerWidth}
            containerHeight={containerHeight}
          />
        )}
        <div
          ref={mapRef}
          className="absolute top-0 left-0 overflow-hidden rounded-md"
          style={{
            width: `${containerWidth}px`,
            height: `${containerHeight}px`,
            transform: `scale(${zoom})`,
            transformOrigin: "0 0",
            zIndex: 1,
          }}
        >
          <Grid gridSize={gridSize} cols={cols} rows={rows} />
        </div>
      </div>
    </div>
  );
}

export default Map;
