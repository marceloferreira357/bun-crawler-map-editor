import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../../common/utils";
import useCursorPosition from "../../hooks/useCursorPosition";
import useMapStore from "../../stores/useMapStore";
import Background from "./Background";
import Cursor from "./Cursor/Cursor";
import GeneratingScreenshotMessage from "./GeneratingScreenshotMessage";
import Grid from "./Grid/Grid";
import MapTileGrid from "./MapTileGrid";
import { calculateMapSize, isCursorVisible } from "./mapUtils";

function Map() {
  const [isCursorInBounds, setIsCursorInBounds] = useState(false);

  const {
    scale,
    width,
    height,
    zoom,
    setMapRef,
    generatingScreenshot,
    isModalOpen,
    map,
  } = useMapStore((state) => state);

  const { x, y } = useCursorPosition();

  const mapRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const { gridSize, cols, rows, containerWidth, containerHeight } = useMemo(
    () => calculateMapSize(scale, zoom, width, height),
    [scale, zoom, width, height]
  );

  const { adjustedWidth, adjustedHeight } = useMemo(
    () => ({
      adjustedWidth: containerWidth * zoom,
      adjustedHeight: containerHeight * zoom,
    }),
    [containerWidth, containerHeight, zoom]
  );

  useEffect(() => {
    if (mapRef.current) {
      setMapRef(mapRef);
    }
  }, [mapRef, setMapRef]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (mapContainerRef.current) {
        setIsCursorInBounds(isCursorVisible(mapContainerRef, event));
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className={cn(
        "relative flex flex-row w-[calc(100dvw-448px)] h-full overflow-auto bg-dark-liver shrink-0 p-2",
        isCursorInBounds ? "cursor-none" : "cursor-default"
      )}
    >
      {isCursorInBounds && !isModalOpen && <Cursor position={{ x, y }} />}
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
          {map.map((mapTile, index) => (
            <MapTileGrid key={index} mapTile={mapTile} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Map;
