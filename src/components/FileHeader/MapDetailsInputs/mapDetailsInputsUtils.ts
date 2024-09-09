import { FieldError, FieldErrors, FieldValues } from "react-hook-form";

export const validateAndSetValue = async (
  trigger: (
    name?: string | string[] | readonly string[] | undefined,
    options?:
      | Partial<{
          shouldFocus: boolean;
        }>
      | undefined
  ) => Promise<boolean>,
  field: string,
  setter: (value: number) => void,
  value: any
) => {
  if (value) {
    const isValid = await trigger(field);
    if (isValid) {
      setter(Number(value));
    }
  }
};

export const validateAndSetMapName = async (
  trigger: (
    name?: string | string[] | readonly string[] | undefined,
    options?:
      | Partial<{
          shouldFocus: boolean;
        }>
      | undefined
  ) => Promise<boolean>,
  setMapName: (mapName: string) => void,
  formMapName: any
) => {
  const isValid = await trigger("mapName");
  if (isValid) {
    setMapName(formMapName);
  }
};

export const getError = (
  field: string,
  value: any,
  errors: FieldErrors<FieldValues>
) => {
  return (value?.length < 1 || errors[field]) as FieldError | undefined;
};
