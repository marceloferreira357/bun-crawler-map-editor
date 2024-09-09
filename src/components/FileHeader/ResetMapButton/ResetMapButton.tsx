import { useCallback, useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import Button from "../../Button";
import ResetMapModal from "./ResetMapModal";

function ResetMapButton() {
  const [showResetMapModal, setShowResetMapModal] = useState<boolean>(false);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setShowResetMapModal(true);
    },
    [setShowResetMapModal]
  );

  return (
    <>
      <Button onClick={handleOnClick}>
        <GrPowerReset size={"24px"} />
      </Button>
      <ResetMapModal show={showResetMapModal} setShow={setShowResetMapModal} />
    </>
  );
}

export default ResetMapButton;
