import { motion } from "framer-motion";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { cn } from "../common/utils";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  register?: UseFormRegisterReturn;
  error?: FieldError | boolean;
};

function Input({ register, error, ...props }: InputProps) {
  return (
    <motion.div
      whileHover={{
        opacity: 1,
      }}
      className={cn(
        error ? "bg-red-600" : "bg-dark-liver",
        "py-1 px-2 rounded-md w-full h-fit opacity-80"
      )}
    >
      <input
        {...register}
        {...props}
        className="bg-transparent text-bright-gray w-full text-sm outline-none"
      />
    </motion.div>
  );
}

export default Input;
