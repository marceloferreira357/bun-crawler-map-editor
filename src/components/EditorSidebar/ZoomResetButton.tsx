import { useCallback } from "react";
import { TbZoomCancelFilled } from "react-icons/tb";
import useMapStore from "../../stores/useMapStore";
import Button from "../Button";

function ZoomResetButton() {
  const { zoom, setZoom } = useMapStore((state) => state);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setZoom(1);
    },
    [zoom]
  );

  return (
    <Button onClick={handleOnClick}>
      <TbZoomCancelFilled size={"24px"} />
    </Button>
  );
}

export default ZoomResetButton;
