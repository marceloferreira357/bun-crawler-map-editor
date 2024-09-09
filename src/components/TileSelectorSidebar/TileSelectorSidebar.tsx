import { useMemo } from "react";
import SelectedMapTile from "./SelectedMapTile/SelectedMapTile";
import TileButton from "./TileButton";
import {
  gap,
  tileVariants,
  variantSizes,
} from "./tileSelectorSidebarConstants";

function TileSelectorSidebar() {
  const { normalTiles, largeTiles } = useMemo(
    () => ({
      normalTiles: tileVariants.filter((variant) => !variantSizes[variant]),
      largeTiles: tileVariants.filter((variant) => variantSizes[variant]),
    }),
    [tileVariants]
  );

  return (
    <div className="flex flex-col w-96 h-full bg-sonic-silver shrink-0 gap-2 p-2">
      <div className="relative flex flex-col bg-black/10 rounded-md w-[calc(384px-20px)] h-3/4 overflow-y-auto">
        <div
          className="absolute top-2 left-[8px]"
          style={{ transform: "scale(2.4)" }}
        >
          {/* Render 16x16 tiles, 9 per line */}
          {normalTiles.map((variant, index) => (
            <TileButton
              key={variant}
              position={{
                y: Math.floor(index / 8) * (16 + gap),
                x: (index % 8) * (16 + gap),
              }}
              size={{
                width: 16,
                height: 16,
              }}
              variant={variant}
            />
          ))}

          {/* Render larger tiles on the next line */}
          {largeTiles.map((variant, index) => {
            const { width, height } = variantSizes[variant];
            const rowIndex = Math.floor(index / 4);
            const colIndex = index % 4;
            const startY = Math.ceil(normalTiles.length / 9) * (16 + gap) + 20; // 20px extra for spacing between rows
            return (
              <TileButton
                key={variant}
                position={{
                  y:
                    index === 4
                      ? startY + rowIndex * (height + 35)
                      : startY + rowIndex * (height + 2), // 2px for spacing
                  x:
                    index > 4 ? colIndex * (width + 6) : colIndex * (width + 4), // 4px for spacing
                }}
                size={{
                  width,
                  height,
                }}
                variant={variant}
              />
            );
          })}

          {/* spacer */}
          <div className="absolute top-52 left-0 w-4 h-2 pointer-events-none" />
        </div>
      </div>
      <SelectedMapTile />
    </div>
  );
}

export default TileSelectorSidebar;
