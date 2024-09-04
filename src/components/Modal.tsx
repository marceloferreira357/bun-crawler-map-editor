import { AnimatePresence, motion } from "framer-motion";
import { useCallback } from "react";
import { zIndex } from "../common/constants";

type ModalProps = {
  children: React.ReactNode;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ show, setShow, children }: ModalProps) {
  const handleOnClose = useCallback(() => {
    setShow(false);
  }, [show]);

  const handleOnChildrenClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      event.preventDefault();
      event.stopPropagation();
    },
    []
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="fixed top-0 left-0 flex flex-row items-center justify-center w-[100dvw] h-[100dvh] backdrop-blur-sm bg-dark-liver/30"
          style={{
            zIndex: zIndex.modal,
          }}
          onClick={handleOnClose}
        >
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: [0, 1.2, 1],
            }}
            exit={{
              scale: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="flex flex-col p-4 rounded-md bg-sonic-silver shrink-0 shadow-md"
            onClick={handleOnChildrenClick}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
