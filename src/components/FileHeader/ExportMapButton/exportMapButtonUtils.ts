import { MapTileEditor } from "../../../common/types";

export const exportMap = (
  mapName: string,
  width: number,
  height: number,
  map: MapTileEditor[]
) => {
  const mapData = JSON.stringify({ mapName, width, height, map }, null, 2);
  const blob = new Blob([mapData], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${mapName}.json`;
  document.body.appendChild(a);
  a.click();

  URL.revokeObjectURL(url);
  document.body.removeChild(a);
};
