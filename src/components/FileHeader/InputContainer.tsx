type InputContainerProps = {
  label: string;
  children: React.ReactNode;
  width: React.CSSProperties["width"];
};

function InputContainer({ label, children, width }: InputContainerProps) {
  return (
    <div
      className="flex flex-row items-center gap-2"
      style={{
        width,
      }}
    >
      <span>{label}</span>
      {children}
    </div>
  );
}

export default InputContainer;
