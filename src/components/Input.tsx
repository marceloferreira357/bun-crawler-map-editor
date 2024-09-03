import { motion } from "framer-motion";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

function Input({ value, onChange }: InputProps) {
  return (
    <motion.div
      whileHover={{
        opacity: 1,
      }}
      className="bg-dark-liver py-1 px-2 rounded-md w-full h-fit opacity-80"
    >
      <input
        value={value}
        onChange={onChange}
        className="bg-transparent text-bright-gray w-full text-sm outline-none"
      />
    </motion.div>
  );
}

export default Input;
