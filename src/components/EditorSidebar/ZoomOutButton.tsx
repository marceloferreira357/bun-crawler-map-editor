import { useCallback } from "react";
import { TbZoomOutFilled } from "react-icons/tb";
import useMapStore from "../../stores/useMapStore";
import Button from "../Button";

function ZoomOutButton() {
  const { zoom, setZoom } = useMapStore((state) => state);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      const newZoom = zoom - 0.1;
      if (newZoom > 0.1) {
        setZoom(newZoom);
      }
    },
    [zoom]
  );

  return (
    <Button onClick={handleOnClick}>
      <TbZoomOutFilled size={"24px"} />
    </Button>
  );
}

export default ZoomOutButton;
