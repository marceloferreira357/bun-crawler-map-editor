import { mapTileDefaultAttributes } from "../../../common/constants";
import { MapTileEditor, MapTileVariant } from "../../../common/types";

const getPosition = (index: number, cols: number, gridSize: number) => {
  const column = index % cols;
  const row = Math.floor(index / cols);

  // Adjust the position calculation for zoom
  const x = column * gridSize;
  const y = row * gridSize;

  return { x, y };
};

export const addMapTile = (
  selectedMapTile: MapTileVariant,
  index: number,
  cols: number,
  gridSize: number,
  map: MapTileEditor[],
  zoom: number
) => {
  const { x, y } = getPosition(index, cols, gridSize);

  const { zIndex, size } = mapTileDefaultAttributes[selectedMapTile!];

  // Adjust the position for the zoom level
  const adjustedX = x / zoom;
  const adjustedY = y / zoom;

  const existingTileIndex = map.findIndex(
    (tile) =>
      tile.position?.x === adjustedX &&
      tile.position?.y === adjustedY &&
      tile.zIndex === zIndex
  );

  const newTile = {
    variant: selectedMapTile,
    position: {
      x: adjustedX,
      y: adjustedY,
    },
    zIndex,
    size,
  };

  const updatedMap =
    existingTileIndex !== -1
      ? map.map((tile, idx) => (idx === existingTileIndex ? newTile : tile))
      : map.concat(newTile);

  return updatedMap;
};

const positionsAreEqual = (
  pos1: { x: number; y: number },
  pos2: { x: number; y: number }
) => {
  const tolerance = 0.01;

  return (
    Math.abs(pos1.x - pos2.x) < tolerance &&
    Math.abs(pos1.y - pos2.y) < tolerance
  );
};

export const eraseMapTile = (
  index: number,
  cols: number,
  gridSize: number,
  map: MapTileEditor[],
  zoom: number
): MapTileEditor[] => {
  // Calculate the position without zoom
  const { x, y } = getPosition(index, cols, gridSize);

  // Adjust the position for the zoom level, and round for precision
  const adjustedX = Math.round(x / zoom);
  const adjustedY = Math.round(y / zoom);

  // Find tiles with the same position (rounded)
  const overlappingTiles = map.filter((tile) =>
    positionsAreEqual(
      {
        x: Math.round(tile.position!.x * zoom),
        y: Math.round(tile.position!.y * zoom),
      },
      { x: adjustedX, y: adjustedY }
    )
  );

  // If there are overlapping tiles, remove the one with the greater zIndex
  if (overlappingTiles.length > 1) {
    const maxZIndex = Math.max(
      ...overlappingTiles.map((tile) => tile.zIndex! as number)
    );

    // Return the map excluding the tile with the greater zIndex
    return map.filter(
      (tile) =>
        !positionsAreEqual(
          {
            x: Math.round(tile.position!.x * zoom),
            y: Math.round(tile.position!.y * zoom),
          },
          { x: adjustedX, y: adjustedY }
        ) || tile.zIndex! !== maxZIndex
    );
  }

  // If no overlapping tiles or only one tile, return the map excluding that tile
  return map.filter(
    (tile) =>
      !positionsAreEqual(
        {
          x: Math.round(tile.position!.x * zoom),
          y: Math.round(tile.position!.y * zoom),
        },
        { x: adjustedX, y: adjustedY }
      )
  );
};
