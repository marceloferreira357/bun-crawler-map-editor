import Grid from "./Grid";

function Map() {
  // TODO: load this data from zustand
  const scale = 3;
  const gridSize = 16 * scale; // size of each square in pixels
  const width = 800; // width of the container
  const height = 600; // height of the container

  const cols = Math.floor(width / gridSize + 1);
  const rows = Math.floor(height / gridSize + 1);

  return (
    <div className="flex flex-row w-[calc(100dvw-448px)] h-full overflow-auto bg-dark-liver shrink-0 p-2">
      <div
        className="relative"
        style={{
          minWidth: width,
          minHeight: height,
        }}
      >
        <Grid
          gridSize={gridSize}
          width={width}
          height={height}
          cols={cols}
          rows={rows}
        />
      </div>
    </div>
  );
}

export default Map;
