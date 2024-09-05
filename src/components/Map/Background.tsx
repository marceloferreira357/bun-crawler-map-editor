import useMapStore from "../../stores/useMapStore";

type BackgroundProps = {
  containerWidth: number;
  containerHeight: number;
};

function Background({ containerWidth, containerHeight }: BackgroundProps) {
  const { zoom } = useMapStore((state) => state);

  return (
    <div
      className="absolute top-0 left-0 bg-charleston-green rounded-md shadow-md z-0"
      style={{
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
        transform: `scale(${zoom})`,
        transformOrigin: "0 0",
      }}
    />
  );
}

export default Background;
