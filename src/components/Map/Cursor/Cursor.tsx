import { useMemo } from "react";
import { BsCursorFill, BsEraserFill } from "react-icons/bs";
import { mapTileDefaultAttributes } from "../../../common/constants";
import { Vector2 } from "../../../common/types";
import useMapStore from "../../../stores/useMapStore";
import MapTile from "../../MapTile/MapTile";
import AngleLeft from "./AngleLeft";

type CursorProps = {
  position: Vector2;
};

function Cursor({ position }: CursorProps) {
  const { isInEraserMode, isInEditorMode, selectedMapTile } = useMapStore(
    (state) => state
  );

  const { scale, width, height } = useMemo(
    () => ({
      scale: 2.5,
      width: selectedMapTile
        ? mapTileDefaultAttributes[selectedMapTile].size.width
        : 0,
      height: selectedMapTile
        ? mapTileDefaultAttributes[selectedMapTile].size.height
        : 0,
    }),
    [selectedMapTile]
  );

  return (
    <div
      className="fixed z-[5] text-xl pointer-events-none"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      {!isInEraserMode && !isInEditorMode && (
        <div
          style={{
            transform: `scaleX(-1)`,
          }}
        >
          <BsCursorFill />
        </div>
      )}
      {isInEraserMode && (
        <>
          <AngleLeft />
          <div className="absolute top-0.5 left-0.5 z-0">
            <BsEraserFill />
          </div>
        </>
      )}
      {isInEditorMode && (
        <>
          <AngleLeft />
          <div
            className="absolute top-0.5 z-0"
            style={{
              left: 7,
              width: width * scale,
              height: height * scale,
            }}
          >
            <MapTile variant={selectedMapTile!} zIndex={1} scale={scale} />
          </div>
        </>
      )}
    </div>
  );
}

export default Cursor;
