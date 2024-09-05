import ButtonContainer from "./ButtonContainer";
import ExportMapButton from "./ExportMapButton";
import ImportMapButton from "./ImportMapButton";
import MapDetailsInputs from "./MapDetailsInputs/MapDetailsInputs";
import ResetMapButton from "./ResetMapButton/ResetMapButton";

function FileHeader() {
  return (
    <div className="flex flex-row w-full h-12 bg-philippine-gray shrink-0 shadow-md  items-center justify-between px-2">
      <div className="flex flex-row items-center gap-4">
        <MapDetailsInputs />
      </div>
      <div className="flex flex-row items-center gap-4">
        <ButtonContainer label="Reset">
          <ResetMapButton />
        </ButtonContainer>
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
