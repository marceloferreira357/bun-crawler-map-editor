import { motion } from "framer-motion";
import { useCallback } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";
import { cn } from "../common/utils";

type ToastProps = {
  t: string | number;
  message: string;
  error?: boolean;
};

function Toast({ t, message, error = false }: ToastProps) {
  const handleOnClick = useCallback(() => toast.dismiss(t), [t, message]);

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center text-bright-gray shadow-md rounded-md p-4 gap-2",
        error ? "bg-red-400" : "bg-philippine-gray"
      )}
    >
      {message}
      <motion.button
        whileHover={{ opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        onClick={handleOnClick}
        className="text-xl opacity-80"
      >
        <IoClose />
      </motion.button>
    </div>
  );
}

export default Toast;
