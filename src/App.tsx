import EditorSidebar from "./components/EditorSidebar";
import FileHeader from "./components/FileHeader";
import Map from "./components/Map";
import TileSelectorSidebar from "./components/TileSelectorSidebar";

function App() {
  return (
    <div className="flex flex-col w-[100dvw] h-[100dvh] text-white">
      <FileHeader />
      <div className="flex flex-row w-full h-[calc(100dvh-48px)]">
        <EditorSidebar />
        <Map />
        <TileSelectorSidebar />
      </div>
    </div>
  );
}

export default App;
