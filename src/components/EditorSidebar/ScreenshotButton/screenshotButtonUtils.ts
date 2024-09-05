import html2canvas from "html2canvas";

export const generateScreenshot = async (
  mapRef: React.RefObject<HTMLDivElement>,
  mapName: string
) => {
  // Temporarily remove zoom before taking the screenshot
  const mapElement = mapRef.current!;
  const originalTransform = mapElement.style.transform;

  mapElement.style.transform = "none"; // Remove the zoom scaling

  const canvas = await html2canvas(mapElement);

  // Restore the original zoom
  mapElement.style.transform = originalTransform;

  const imgData = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = imgData;
  link.download = `${mapName}.png`;
  link.click();
};
