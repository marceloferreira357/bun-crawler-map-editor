import { useEffect, useState } from "react";
import { BaseMapTile, Tile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

type AnimatedMapTileProps = {
  tiles: Tile[];
} & Omit<BaseMapTile, "variant">;

function AnimatedMapTile({
  position,
  scale,
  zIndex,
  tiles,
}: AnimatedMapTileProps) {
  const [tileIndex, setTileIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTileIndex((prev) => (prev + 1) % tiles.length);
    }, 300);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <StaticMapTile
      tile={{
        x: tiles[tileIndex].x,
        y: tiles[tileIndex].y,
        width: tiles[tileIndex].width,
        height: tiles[tileIndex].height,
      }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default AnimatedMapTile;
