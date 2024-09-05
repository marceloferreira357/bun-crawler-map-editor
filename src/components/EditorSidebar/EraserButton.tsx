import { useCallback } from "react";
import { BsEraserFill } from "react-icons/bs";
import useMapStore from "../../stores/useMapStore";
import Button from "../Button";

function EraserButton() {
  const { setIsInEditorMode, setIsInEraserMode, setSelectedMapTile } =
    useMapStore((state) => state);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setIsInEditorMode(false);
      setIsInEraserMode(true);
      setSelectedMapTile(undefined);
    },
    []
  );

  return (
    <Button onClick={handleOnClick}>
      <BsEraserFill size={"24px"} />
    </Button>
  );
}

export default EraserButton;
