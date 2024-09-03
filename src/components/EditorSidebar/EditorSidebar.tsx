import ButtonsContainer from "./ButtonsContainer";
import CursorButton from "./CursorButton";
import EraserButton from "./EraserButton";
import GridButton from "./GridButton";
import InfoButton from "./InfoButton";
import ScreenshotButton from "./ScreenShotButton";
import ZoomInButton from "./ZoomInButton";
import ZoomOutButton from "./ZoomOutButton";

function EditorSidebar() {
  return (
    <div className="flex flex-col w-16 h-full bg-sonic-silver shrink-0 py-2 items-center justify-between">
      <ButtonsContainer>
        <CursorButton />
        <EraserButton />
        <ScreenshotButton />
      </ButtonsContainer>
      <ButtonsContainer>
        <GridButton />
        <ZoomInButton />
        <ZoomOutButton />
      </ButtonsContainer>
      <ButtonsContainer>
        <InfoButton />
      </ButtonsContainer>
    </div>
  );
}

export default EditorSidebar;
