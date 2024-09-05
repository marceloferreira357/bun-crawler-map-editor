import { useCallback } from "react";
import { BiSolidCamera } from "react-icons/bi";
import { showToast } from "../../../common/utils";
import useMapStore from "../../../stores/useMapStore";
import Button from "../../Button";
import { generateScreenshot } from "./screenshotButtonUtils";

function ScreenshotButton() {
  const { mapRef, mapName, zoom, setGeneratingScreenshot } = useMapStore(
    (state) => state
  );

  const handleOnClick = useCallback(
    async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): Promise<void> => {
      event.preventDefault();
      if (mapRef?.current) {
        try {
          setGeneratingScreenshot(true);
          await generateScreenshot(mapRef, mapName);
          showToast({ message: `Screenshot saved as ${mapName}.png` });
        } catch (error: unknown) {
          showToast({
            message: (error as Error)?.message ?? (error as string),
            error: true,
          });
        } finally {
          setGeneratingScreenshot(false);
        }
      }
    },
    [mapRef, mapName, zoom]
  );

  return (
    <Button onClick={handleOnClick}>
      <BiSolidCamera size={"24px"} />
    </Button>
  );
}

export default ScreenshotButton;
