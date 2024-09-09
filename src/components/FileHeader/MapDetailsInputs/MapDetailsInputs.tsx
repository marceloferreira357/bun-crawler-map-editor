import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import useMapStore from "../../../stores/useMapStore";
import Input from "../../Input";
import InputContainer from "./InputContainer";

function MapDetailsInputs() {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();

  const { setMapName, setWidth, setHeight } = useMapStore((state) => state);

  const formMapName = watch("mapName");
  const formWidth = watch("width");
  const formHeight = watch("height");

  const debouncedWidth = useDebounce(formWidth, 300);
  const debouncedHeight = useDebounce(formHeight, 300);

  useEffect(() => {
    if (debouncedWidth) {
      trigger("width").then((isValid) => {
        if (isValid) {
          setWidth(Number(debouncedWidth));
        }
      });
    }
  }, [debouncedWidth]);

  useEffect(() => {
    if (debouncedHeight) {
      trigger("height").then((isValid) => {
        if (isValid) {
          setHeight(Number(debouncedHeight));
        }
      });
    }
  }, [debouncedHeight]);

  useEffect(() => {
    trigger("mapName").then((isValid) => {
      if (isValid) {
        setMapName(formMapName);
      }
    });
  }, [formMapName]);

  return (
    <>
      <InputContainer label="Name" width={256}>
        <Input
          name="mapName"
          register={register("mapName")}
          error={errors?.mapName}
        />
      </InputContainer>
      <InputContainer label="Width" width={128}>
        <Input
          name="width"
          register={register("width")}
          error={formWidth?.length < 1 || errors?.width}
        />
      </InputContainer>
      <InputContainer label="Height" width={128}>
        <Input
          name="height"
          register={register("height")}
          error={formHeight?.length < 1 || errors?.height}
        />
      </InputContainer>
    </>
  );
}

export default MapDetailsInputs;
