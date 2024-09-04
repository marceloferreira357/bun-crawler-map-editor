import { zodResolver } from "@hookform/resolvers/zod";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useMapStore from "../../../stores/useMapStore";
import Input from "../../Input";
import InputContainer from "./InputContainer";

function MapDetailsInputs() {
  const { mapName, setMapName, width, height, setWidth, setHeight } =
    useMapStore((state) => state);

  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useForm<{
    mapName: string;
    width: string;
    height: string;
  }>({
    defaultValues: {
      mapName,
      width: String(width),
      height: String(height),
    },
    resolver: zodResolver(
      z.object({
        mapName: z.string().min(1, "Map name is required"),
        width: z
          .string()
          .min(1, "Width is required")
          .regex(/^\d+$/, "Width must be a number"),
        height: z
          .string()
          .min(1, "Height is required")
          .regex(/^\d+$/, "Height must be a number"),
      })
    ),
  });

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
