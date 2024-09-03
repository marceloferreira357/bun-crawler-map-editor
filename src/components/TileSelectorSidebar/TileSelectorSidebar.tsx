import { useMemo } from "react";
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
    <div className="flex flex-col w-96 h-full bg-sonic-silver shrink-0">
      <div className="relative bg-black/10 rounded-md ml-0.5 w-[calc(100%-4px)] h-[569px] mt-4">
        <div
          className="absolute top-2 left-2"
          style={{ transform: "scale(2.6)" }}
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
        </div>
      </div>
    </div>
  );
}

export default TileSelectorSidebar;
