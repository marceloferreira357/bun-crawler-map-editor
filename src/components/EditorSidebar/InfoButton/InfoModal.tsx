import { useCallback } from "react";
import Button from "../../Button";
import Modal from "../../Modal";
import Sprite from "../../Sprite";

type InfoModalProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function InfoModal({ show, setShow }: InfoModalProps) {
  const handleOnClose = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setShow(false);
    },
    [show]
  );

  return (
    <Modal show={show} setShow={setShow}>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="w-[calc(16px*5)] h-[calc(16px*5)]">
          <Sprite
            src={new URL("favicon.png", import.meta.env.VITE_PUBLIC_ADDRESS)}
            scale={5}
            size={{ width: 16, height: 16 }}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-semibold">Bun Crawler Map Editor</span>
          <span>version: {import.meta.env.VITE_RELEASE_VERSION}</span>
        </div>
        <span>Copyright &copy; 2024-{new Date().getFullYear()}</span>
        <Button onClick={handleOnClose}>Close</Button>
      </div>
    </Modal>
  );
}

export default InfoModal;
