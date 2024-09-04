export const calculateMapSize = (
  scale: number,
  zoom: number,
  width: number,
  height: number
) => {
  const baseGridSize = 16; // Base size of each square in pixels
  const gridSize = baseGridSize * scale; // Adjusted grid size (apply zoom later)

  const cols = Math.ceil(width / gridSize); // Calculate number of columns
  const rows = Math.ceil(height / gridSize); // Calculate number of rows

  const containerWidth = cols * gridSize * zoom; // Adjust container width for zoom
  const containerHeight = rows * gridSize * zoom; // Adjust container height for zoom

  return {
    gridSize: gridSize * zoom,
    cols,
    rows,
    containerWidth,
    containerHeight,
  };
};
