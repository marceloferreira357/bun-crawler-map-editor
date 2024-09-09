import { useCallback } from "react";
import { BiSolidFileImport } from "react-icons/bi";
import useMapStore from "../../../stores/useMapStore";
import Button from "../../Button";
import { importMap } from "./importMapButtonUtils";

function ImportMapButton() {
  const { setMap, setMapName, setWidth, setHeight } = useMapStore(
    (state) => state
  );

  const handleFileChange = useCallback(
    (ev: unknown) => {
      const event = ev as React.ChangeEvent<HTMLInputElement>;
      event.preventDefault();
      importMap(event, setMap, setMapName, setWidth, setHeight);
    },
    [setMap, setMapName, setWidth, setHeight]
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
