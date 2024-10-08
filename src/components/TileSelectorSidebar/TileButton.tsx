import { motion } from "framer-motion";
import { useCallback } from "react";
import { MapTileVariant, PixelSize, Vector2 } from "../../common/types";
import useMapStore from "../../stores/useMapStore";
import MapTile from "../MapTile/MapTile";

type TileButtonProps = {
  position: Vector2;
  size: PixelSize;
  variant: MapTileVariant;
};

function TileButton({ position, size, variant }: TileButtonProps) {
  const { setIsInEditorMode, setIsInEraserMode, setSelectedMapTile } =
    useMapStore((state) => state);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setIsInEditorMode(true);
      setIsInEraserMode(false);
      setSelectedMapTile(variant);
    },
    [
      position,
      size,
      variant,
      setIsInEditorMode,
      setIsInEraserMode,
      setSelectedMapTile,
    ]
  );

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        opacity: 1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="absolute opacity-80 bg-dark-liver outline-none"
      style={{
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
      }}
      onClick={handleOnClick}
    >
      <MapTile variant={variant} position={{ x: 0, y: 0 }} zIndex={-1} />
    </motion.button>
  );
}

export default TileButton;
