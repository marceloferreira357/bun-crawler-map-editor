import Input from "../Input";
import ButtonContainer from "./ButtonContainer";
import ExportMapButton from "./ExportMapButton";
import ImportMapButton from "./ImportMapButton";
import InputContainer from "./InputContainer";

function FileHeader() {
  return (
    <div className="flex flex-row w-full h-12 bg-philippine-gray shrink-0 shadow-md  items-center justify-between px-2">
      <div className="flex flex-row items-center gap-4">
        <InputContainer label="Name" width={256}>
          <Input />
        </InputContainer>
        <InputContainer label="Width" width={128}>
          <Input />
        </InputContainer>
        <InputContainer label="Height" width={128}>
          <Input />
        </InputContainer>
      </div>
      <div className="flex flex-row items-center gap-4">
        <ButtonContainer label="Export">
          <ExportMapButton />
        </ButtonContainer>
        <ButtonContainer label="Import">
          <ImportMapButton />
        </ButtonContainer>
      </div>
    </div>
  );
}

export default FileHeader;
