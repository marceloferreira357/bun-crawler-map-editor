import { create } from "zustand";

const useMapStore = create<{
  scale: number;
  width: number;
  height: number;
  showGrid: boolean;
  mapName: string;
  setShowGrid: (showGrid: boolean) => void;
  setMapName: (mapName: string) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
}>((set) => ({
  scale: 3,
  width: 800,
  height: 600,
  showGrid: true,
  mapName: "untitled_map",
  setShowGrid: (showGrid: boolean) => set((state) => ({ ...state, showGrid })),
  setMapName: (mapName: string) => set((state) => ({ ...state, mapName })),
  setWidth: (width: number) => set((state) => ({ ...state, width })),
  setHeight: (height: number) => set((state) => ({ ...state, height })),
}));

export default useMapStore;
