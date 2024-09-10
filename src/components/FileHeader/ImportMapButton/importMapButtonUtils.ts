import { FieldValues, UseFormSetValue } from "react-hook-form";
import { MapTileEditor } from "../../../common/types";
import { showToast } from "../../../common/utils";

export const importMap = (
  event: React.ChangeEvent<HTMLInputElement>,
  setTiles: (tiles: MapTileEditor[]) => void,
  setMapName: (mapName: string) => void,
  setWidth: (width: number) => void,
  setHeight: (height: number) => void,
  setValue: UseFormSetValue<FieldValues>
) => {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const importedData = JSON.parse(reader.result as string);
      const { tiles, mapName, width, height } = importedData;

      if (tiles && mapName) {
        setTiles(tiles);
        setMapName(mapName);
        setWidth(width);
        setHeight(height);
        setValue("mapName", mapName, { shouldValidate: true });
        setValue("width", String(width), { shouldValidate: true });
        setValue("height", String(height), { shouldValidate: true });
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
