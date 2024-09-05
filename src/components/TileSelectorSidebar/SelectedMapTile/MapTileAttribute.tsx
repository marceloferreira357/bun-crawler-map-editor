import { mapTileDefaultAttributes } from "../../../common/constants";
import { PixelSize } from "../../../common/types";
import useMapStore from "../../../stores/useMapStore";

type ParentKey = "size" | "zIndex";
type ChildKey = keyof PixelSize;

type MapTileAttributeProps = {
  title: string;
  value?: string;
  parent?: ParentKey;
  child?: ChildKey;
};

function MapTileAttribute({
  title,
  value,
  parent,
  child,
}: MapTileAttributeProps) {
  const { selectedMapTile } = useMapStore((state) => state);

  if (!selectedMapTile) return null;

  const parentValue =
    !value && parent
      ? mapTileDefaultAttributes[selectedMapTile][parent]
      : undefined;

  return (
    <span>
      <span className="font-medium">{title}:</span>{" "}
      {value ? (
        <span>{value}</span>
      ) : parent === "size" && child ? (
        <span>{(parentValue as PixelSize)[child]}</span>
      ) : (
        <span>{parentValue as number}</span>
      )}
    </span>
  );
}

export default MapTileAttribute;
