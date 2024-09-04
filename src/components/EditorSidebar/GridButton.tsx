import { useCallback } from "react";
import { IoGrid } from "react-icons/io5";
import useMapStore from "../../stores/useMapStore";
import Button from "../Button";

function GridButton() {
  const { showGrid, setShowGrid } = useMapStore((state) => state);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setShowGrid(!showGrid);
    },
    [showGrid]
  );

  return (
    <Button onClick={handleOnClick}>
      <IoGrid size={"24px"} />
    </Button>
  );
}

export default GridButton;
