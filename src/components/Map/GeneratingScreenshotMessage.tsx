import useMapStore from "../../stores/useMapStore";
import Spinner from "../Spinner";

type GeneratingScreenshotMessageProps = {
  containerWidth: number;
  containerHeight: number;
};

function GeneratingScreenshotMessage({
  containerWidth,
  containerHeight,
}: GeneratingScreenshotMessageProps) {
  const { width, height, zoom } = useMapStore((state) => state);

  return (
    <div
      className="absolute top-0 left-0 flex flex-col items-center justify-center bg-charleston-green rounded-md overflow-hidden"
      style={{
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
        transform: `scale(${zoom})`,
        transformOrigin: "0 0",
        zIndex: 4,
      }}
    >
      <Spinner size={`${40 * zoom}`} />
      {width >= 50 && height >= 50 && (
        <span className="text-center">Generating screenshot</span>
      )}
    </div>
  );
}

export default GeneratingScreenshotMessage;
