import { toPng } from "html-to-image";

export const generateScreenshot = async (
  mapRef: React.RefObject<HTMLDivElement>,
  mapName: string
) => {
  const mapElement = mapRef.current!;

  if (!mapElement) {
    throw new Error("Map element not found.");
  }

  const dataUrl = await toPng(mapElement, {
    backgroundColor: "#000000",
    quality: 1,
    width: mapElement.offsetWidth,
    height: mapElement.offsetHeight,
  });

  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `${mapName}.png`;
  link.click();
};
