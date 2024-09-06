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

  // Adjust the position for the zoom level
  const adjustedX = x / zoom;
  const adjustedY = y / zoom;

  const existingTileIndex = map.findIndex(
    ({ position }) => position?.x === adjustedX && position?.y === adjustedY
  );

  const newTile = {
    variant: selectedMapTile,
    position: {
      x: adjustedX,
      y: adjustedY,
    },
    zIndex: 0,
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
) => {
  // Calculate the position without zoom
  const { x, y } = getPosition(index, cols, gridSize);

  // Adjust the position for the zoom level
  const adjustedX = x / zoom;
  const adjustedY = y / zoom;

  return map.filter(
    (tile) => !positionsAreEqual(tile.position!, { x: adjustedX, y: adjustedY })
  );
};
