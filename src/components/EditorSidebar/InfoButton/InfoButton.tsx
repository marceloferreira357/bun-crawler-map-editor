import { useCallback, useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import Button from "../../Button";
import InfoModal from "./InfoModal";

function InfoButton() {
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setShowInfoModal(true);
    },
    [setShowInfoModal, showInfoModal]
  );

  return (
    <>
      <Button onClick={handleOnClick}>
        <AiFillInfoCircle size={"24px"} />
      </Button>
      <InfoModal show={showInfoModal} setShow={setShowInfoModal} />
    </>
  );
}

export default InfoButton;
