import { useCallback } from "react";
import { BiSolidFileExport } from "react-icons/bi";
import { showToast } from "../../../common/utils";
import useMapStore from "../../../stores/useMapStore";
import Button from "../../Button";
import { exportMap } from "./exportMapButtonUtils";

function ExportMapButton() {
  const { tiles, mapName, width, height } = useMapStore((state) => state);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      try {
        exportMap(mapName, width, height, tiles);
        showToast({ message: `Map saved as ${mapName}.json` });
      } catch (error: unknown) {
        showToast({
          message: (error as Error)?.message ?? (error as string),
          error: true,
        });
      }
    },
    [mapName, width, height, tiles]
  );

  return (
    <Button onClick={handleOnClick}>
      <BiSolidFileExport size={"24px"} />
    </Button>
  );
}

export default ExportMapButton;
