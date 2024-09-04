export const calculateMapSize = (
  scale: number,
  zoom: number,
  width: number,
  height: number
) => {
  const baseGridSize = 16; // Base size of each square in pixels
  const gridSize = baseGridSize * scale * zoom; // Adjusted grid size
  const cols = Math.ceil(width / gridSize); // Calculate number of columns
  const rows = Math.ceil(height / gridSize); // Calculate number of rows

  const containerWidth = width * zoom; // Adjust container width for zoom
  const containerHeight = height * zoom; // Adjust container height for zoom

  return {
    gridSize,
    cols,
    rows,
    containerWidth,
    containerHeight,
  };
};
