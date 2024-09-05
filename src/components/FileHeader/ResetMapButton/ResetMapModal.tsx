import { useCallback } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import useMapStore from "../../../stores/useMapStore";
import Button from "../../Button";
import Modal from "../../Modal";

type ResetMapModalProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function ResetMapModal({ show, setShow }: ResetMapModalProps) {
  const { setIsInEditorMode, setIsInEraserMode, setSelectedMapTile, setMap } =
    useMapStore((state) => state);

  const handleOnClickNo = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setShow(false);
    },
    [show]
  );

  const handleOnClickYes = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setIsInEditorMode(false);
      setIsInEraserMode(false);
      setSelectedMapTile(undefined);
      setMap([]);
      setShow(false);
    },
    [show]
  );

  return (
    <Modal show={show} setShow={setShow}>
      <div className="flex flex-col gap-4 items-center justify-center">
        <BsFillQuestionCircleFill size={64} />
        <div className="flex flex-col items-center justify-center w-[300px] text-center gap-2">
          <span className="text-xl">
            Are you sure you want to reset the map?
          </span>
          <span className="text-sm text-bright-gray/80">
            You're going to lose all your changes
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Button onClick={handleOnClickNo}>No</Button>
          <Button onClick={handleOnClickYes}>Yes</Button>
        </div>
      </div>
    </Modal>
  );
}

export default ResetMapModal;
