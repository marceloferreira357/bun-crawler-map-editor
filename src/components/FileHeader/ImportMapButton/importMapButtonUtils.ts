import { MapTileEditor } from "../../../common/types";
import { showToast } from "../../../common/utils";

export const importMap = (
  event: React.ChangeEvent<HTMLInputElement>,
  setMap: (map: MapTileEditor[]) => void,
  setMapName: (mapName: string) => void,
  setWidth: (width: number) => void,
  setHeight: (height: number) => void
) => {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const importedData = JSON.parse(reader.result as string);
      const { map, mapName, width, height } = importedData;

      if (map && mapName) {
        setMap(map);
        setMapName(mapName);
        setWidth(width);
        setHeight(height);
        showToast({
          message: "Map imported successfully",
        });
      } else {
        showToast({
          message: "Invalid map data!",
          error: true,
        });
      }
    } catch (error: unknown) {
      showToast({
        message: "Error reading file! Please upload a valid JSON file.",
        error: true,
      });
    }
  };

  reader.readAsText(file);
};
