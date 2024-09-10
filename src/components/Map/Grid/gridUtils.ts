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
  tiles: MapTileEditor[],
  zoom: number
) => {
  const { x, y } = getPosition(index, cols, gridSize);

  const { zIndex } = mapTileDefaultAttributes[selectedMapTile!];

  // Adjust the position for the zoom level
  const adjustedX = x / zoom;
  const adjustedY = y / zoom;

  const existingTileIndex = tiles.findIndex(
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
  };

  const updatedMap =
    existingTileIndex !== -1
      ? tiles.map((tile, idx) => (idx === existingTileIndex ? newTile : tile))
      : tiles.concat(newTile);

  return updatedMap;
};

const positionsAreEqual = (
  pos1: { x: number; y: number },
  pos2: { x: number; y: number },
  tolerance: number = 0.01 // Adjust the tolerance for zoom-related precision
) => {
  return (
    Math.abs(pos1.x - pos2.x) < tolerance &&
    Math.abs(pos1.y - pos2.y) < tolerance
  );
};

export const eraseMapTile = (
  index: number,
  cols: number,
  gridSize: number,
  tiles: MapTileEditor[],
  zoom: number
): MapTileEditor[] => {
  // Calculate the position without zoom
  const { x, y } = getPosition(index, cols, gridSize);

  // Adjust the position for the zoom level without rounding yet
  const adjustedX = x / zoom;
  const adjustedY = y / zoom;

  const overlappingTiles = tiles.filter((tile) =>
    positionsAreEqual(
      {
        x: tile.position!.x, // Compare the unrounded position here
        y: tile.position!.y,
      },
      { x: adjustedX, y: adjustedY },
      0.1 // Increase tolerance to handle zoom adjustments
    )
  );

  if (overlappingTiles.length > 1) {
    const maxZIndex = Math.max(
      ...overlappingTiles.map((tile) => tile.zIndex! as number)
    );

    return tiles.filter(
      (tile) =>
        !positionsAreEqual(
          {
            x: tile.position!.x,
            y: tile.position!.y,
          },
          { x: adjustedX, y: adjustedY },
          0.1
        ) || tile.zIndex! !== maxZIndex
    );
  }

  return tiles.filter(
    (tile) =>
      !positionsAreEqual(
        {
          x: tile.position!.x,
          y: tile.position!.y,
        },
        { x: adjustedX, y: adjustedY },
        0.1
      )
  );
};
