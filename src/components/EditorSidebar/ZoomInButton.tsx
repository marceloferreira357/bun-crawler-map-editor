import { useCallback } from "react";
import { TbZoomInFilled } from "react-icons/tb";
import useMapStore from "../../stores/useMapStore";
import Button from "../Button";

function ZoomInButton() {
  const { zoom, setZoom } = useMapStore((state) => state);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setZoom(zoom + 0.1);
    },
    [setZoom, zoom]
  );

  return (
    <Button onClick={handleOnClick}>
      <TbZoomInFilled size={"24px"} />
    </Button>
  );
}

export default ZoomInButton;
