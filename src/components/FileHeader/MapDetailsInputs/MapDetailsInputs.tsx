import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { FieldError, useFormContext } from "react-hook-form";
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

  const mapNameError = errors?.mapName as FieldError | undefined;
  const widthError = (formWidth?.length < 1 || errors?.width) as
    | FieldError
    | undefined;
  const heightError = (formHeight?.length < 1 || errors?.height) as
    | FieldError
    | undefined;

  return (
    <>
      <InputContainer label="Name" width={256}>
        <Input
          name="mapName"
          register={register("mapName")}
          error={mapNameError}
        />
      </InputContainer>
      <InputContainer label="Width" width={128}>
        <Input name="width" register={register("width")} error={widthError} />
      </InputContainer>
      <InputContainer label="Height" width={128}>
        <Input
          name="height"
          register={register("height")}
          error={heightError}
        />
      </InputContainer>
    </>
  );
}

export default MapDetailsInputs;
