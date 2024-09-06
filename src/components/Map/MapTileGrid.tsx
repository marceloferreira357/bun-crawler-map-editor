import { mapTileDefaultAttributes } from "../../common/constants";
import { MapTileEditor } from "../../common/types";
import useMapStore from "../../stores/useMapStore";
import MapTile from "../MapTile/MapTile";

type MapTileGrid = {
  mapTile: MapTileEditor;
};

function MapTileGrid({ mapTile }: MapTileGrid) {
  const { scale, zoom } = useMapStore((state) => state);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width:
          mapTileDefaultAttributes[mapTile.variant].size.width * scale * zoom,
        height:
          mapTileDefaultAttributes[mapTile.variant].size.height * scale * zoom,
        top: mapTile.position!.y * zoom,
        left: mapTile.position!.x * zoom,
      }}
    >
      <MapTile
        variant={mapTile.variant}
        position={{ x: 0, y: 0 }}
        zIndex={1}
        scale={scale * zoom}
      />
    </div>
  );
}

export default MapTileGrid;
