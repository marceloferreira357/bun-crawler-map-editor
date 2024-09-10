import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { BiSolidFileImport } from "react-icons/bi";
import useMapStore from "../../../stores/useMapStore";
import Button from "../../Button";
import { importMap } from "./importMapButtonUtils";

function ImportMapButton() {
  const { setValue } = useFormContext();

  const { setTiles, setMapName, setWidth, setHeight } = useMapStore(
    (state) => state
  );

  const handleFileChange = useCallback(
    (ev: unknown) => {
      const event = ev as React.ChangeEvent<HTMLInputElement>;
      event.preventDefault();
      importMap(event, setTiles, setMapName, setWidth, setHeight, setValue);
    },
    [setTiles, setMapName, setWidth, setHeight, setValue]
  );

  const handleClick = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = handleFileChange;
    input.click();
  }, [handleFileChange]);

  return (
    <Button onClick={handleClick}>
      <BiSolidFileImport size={"24px"} />
    </Button>
  );
}

export default ImportMapButton;
