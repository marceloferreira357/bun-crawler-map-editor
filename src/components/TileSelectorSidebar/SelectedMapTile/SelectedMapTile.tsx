import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { mapTileDefaultAttributes } from "../../../common/constants";
import useMapStore from "../../../stores/useMapStore";
import MapTile from "../../MapTile/MapTile";
import MapTileAttribute from "./MapTileAttribute";

function SelectedMapTile() {
  const { selectedMapTile } = useMapStore((state) => state);

  const { scale, width, height } = useMemo(
    () => ({
      scale: 3,
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
    <div className="relative flex flex-row items-center bg-black/10 rounded-md w-[calc(100%-4px)] h-[150px] ml-0.5 p-2">
      <AnimatePresence>
        {selectedMapTile ? (
          <motion.div
            key={0}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              type: "keyframes",
              duration: 0.15,
            }}
            className="flex flex-row items-center justify-center gap-4"
          >
            <div
              style={{
                width: width * scale,
                height: height * scale,
              }}
            >
              <MapTile variant={selectedMapTile} zIndex={1} scale={scale} />
            </div>
            <div className="flex flex-col">
              <MapTileAttribute title="variant" value={selectedMapTile} />
              <MapTileAttribute title="width" parent="size" child="width" />
              <MapTileAttribute title="height" parent="size" child="height" />
              <MapTileAttribute
                title="zIndex"
                parent="zIndex" /* TODO: add the zIndex to all the map tiles */
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={1}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              type: "keyframes",
              duration: 0.15,
            }}
            className="absolute top-0 left-0 flex flex-row items-center justify-center w-full h-full z-[1]"
          >
            <span className="text-bright-gray/70 text-center">
              There's no map tile selected
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SelectedMapTile;
