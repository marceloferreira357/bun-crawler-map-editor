import { motion } from "framer-motion";

type ButtonProps = { children: React.ReactNode } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Button({ children, onClick }: ButtonProps) {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      whileHover={{
        opacity: 1,
      }}
      className="flex flex-row gap-2 rounded-md px-2 py-1 outline-none bg-dark-liver opacity-80"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default Button;
