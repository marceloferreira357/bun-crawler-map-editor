import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import useMapStore from "../../stores/useMapStore";
import ButtonContainer from "./ButtonContainer";
import ExportMapButton from "./ExportMapButton/ExportMapButton";
import ImportMapButton from "./ImportMapButton/ImportMapButton";
import MapDetailsInputs from "./MapDetailsInputs/MapDetailsInputs";
import ResetMapButton from "./ResetMapButton/ResetMapButton";

function FileHeader() {
  const { mapName, width, height } = useMapStore((state) => state);

  const methods = useForm<{
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

  return (
    <FormProvider {...methods}>
      <div className="flex flex-row w-full h-12 bg-philippine-gray shrink-0 shadow-md  items-center justify-between px-2">
        <div className="flex flex-row items-center gap-4">
          <MapDetailsInputs />
        </div>
        <div className="flex flex-row items-center gap-4">
          <ButtonContainer label="Reset">
            <ResetMapButton />
          </ButtonContainer>
          <ButtonContainer label="Export">
            <ExportMapButton />
          </ButtonContainer>
          <ButtonContainer label="Import">
            <ImportMapButton />
          </ButtonContainer>
        </div>
      </div>
    </FormProvider>
  );
}

export default FileHeader;
