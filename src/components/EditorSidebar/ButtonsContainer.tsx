type ButtonsContainer = {
  children: React.ReactNode;
};

function ButtonsContainer({ children }: ButtonsContainer) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      {children}
    </div>
  );
}

export default ButtonsContainer;
