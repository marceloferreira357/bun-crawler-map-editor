type ButtonContainerProps = {
  label: string;
  children: React.ReactNode;
};

function ButtonContainer({ label, children }: ButtonContainerProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <span>{label}</span>
      {children}
    </div>
  );
}

export default ButtonContainer;
