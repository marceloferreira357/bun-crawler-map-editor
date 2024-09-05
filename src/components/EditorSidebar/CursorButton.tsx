import { useCallback } from "react";
import { BsCursorFill } from "react-icons/bs";
import useMapStore from "../../stores/useMapStore";
import Button from "../Button";

function CursorButton() {
  const { setIsInEditorMode, setIsInEraserMode, setSelectedMapTile } =
    useMapStore((state) => state);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setIsInEditorMode(false);
      setIsInEraserMode(false);
      setSelectedMapTile(undefined);
    },
    []
  );

  return (
    <Button onClick={handleOnClick}>
      <BsCursorFill size={"24px"} />
    </Button>
  );
}

export default CursorButton;
