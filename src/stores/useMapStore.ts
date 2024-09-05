import { create } from "zustand";

const useMapStore = create<{
  scale: number;
  width: number;
  height: number;
  showGrid: boolean;
  mapName: string;
  zoom: number;
  mapRef: React.RefObject<HTMLDivElement> | undefined;
  generatingScreenshot: boolean;
  setShowGrid: (showGrid: boolean) => void;
  setMapName: (mapName: string) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setZoom: (zoom: number) => void;
  setMapRef: (mapRef: React.RefObject<HTMLDivElement> | undefined) => void;
  setGeneratingScreenshot: (generatingScreenshot: boolean) => void;
}>((set) => ({
  scale: 3,
  width: 800,
  height: 600,
  showGrid: true,
  mapName: "untitled_map",
  zoom: 1,
  mapRef: undefined,
  generatingScreenshot: false,
  setShowGrid: (showGrid: boolean) => set((state) => ({ ...state, showGrid })),
  setMapName: (mapName: string) => set((state) => ({ ...state, mapName })),
  setWidth: (width: number) => set((state) => ({ ...state, width })),
  setHeight: (height: number) => set((state) => ({ ...state, height })),
  setZoom: (zoom: number) => set((state) => ({ ...state, zoom })),
  setMapRef: (mapRef: React.RefObject<HTMLDivElement> | undefined) =>
    set((state) => ({ ...state, mapRef })),
  setGeneratingScreenshot: (generatingScreenshot: boolean) =>
    set((state) => ({ ...state, generatingScreenshot })),
}));

export default useMapStore;
