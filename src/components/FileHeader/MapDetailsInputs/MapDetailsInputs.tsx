import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import useMapStore from "../../../stores/useMapStore";
import Input from "../../Input";
import InputContainer from "./InputContainer";
import {
  getError,
  validateAndSetMapName,
  validateAndSetValue,
} from "./mapDetailsInputsUtils";

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
    validateAndSetValue(trigger, "width", setWidth, debouncedWidth);
    validateAndSetValue(trigger, "height", setHeight, debouncedHeight);
  }, [debouncedWidth, debouncedHeight, trigger, setWidth, setHeight]);

  useEffect(() => {
    validateAndSetMapName(trigger, setMapName, formMapName);
  }, [formMapName, trigger, setMapName]);

  return (
    <>
      <InputContainer label="Name" width={256}>
        <Input
          name="mapName"
          register={register("mapName")}
          error={errors?.mapName as FieldError | undefined}
        />
      </InputContainer>
      <InputContainer label="Width" width={128}>
        <Input
          name="width"
          register={register("width")}
          error={getError("width", formWidth, errors)}
        />
      </InputContainer>
      <InputContainer label="Height" width={128}>
        <Input
          name="height"
          register={register("height")}
          error={getError("height", formHeight, errors)}
        />
      </InputContainer>
    </>
  );
}

export default MapDetailsInputs;
