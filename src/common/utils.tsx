import { ClassValue, clsx } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import Toast from "../components/Toast";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const showToast = ({
  message,
  error,
}: {
  message: string;
  error?: boolean;
}) => {
  toast.custom((t) => <Toast t={t} message={message} error={error} />);
};
