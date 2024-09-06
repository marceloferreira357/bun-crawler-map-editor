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

export const isCursorVisible = (
  mapContainerRef: React.RefObject<HTMLDivElement>,
  event: MouseEvent
) => {
  const rect = mapContainerRef.current!.getBoundingClientRect();

  const scrollbarSize = 10;

  const hasVerticalScrollbar =
    mapContainerRef.current!.scrollHeight > rect.height;
  const hasHorizontalScrollbar =
    mapContainerRef.current!.scrollWidth > rect.width;

  const adjustedRect = {
    left: rect.left,
    top: rect.top,
    right: hasVerticalScrollbar ? rect.right - scrollbarSize : rect.right,
    bottom: hasHorizontalScrollbar ? rect.bottom - scrollbarSize : rect.bottom,
  };

  const isInBounds =
    event.clientX >= adjustedRect.left &&
    event.clientX <= adjustedRect.right - 1 &&
    event.clientY >= adjustedRect.top &&
    event.clientY <= adjustedRect.bottom - 1;

  return isInBounds;
};
