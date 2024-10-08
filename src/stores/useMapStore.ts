import { create } from "zustand";
import { MapTileEditor, MapTileVariant } from "../common/types";

const useMapStore = create<{
  scale: number;
  width: number;
  height: number;
  showGrid: boolean;
  mapName: string;
  zoom: number;
  mapRef: React.RefObject<HTMLDivElement> | undefined;
  generatingScreenshot: boolean;
  isInEditorMode: boolean;
  isInEraserMode: boolean;
  selectedMapTile: MapTileVariant | undefined;
  tiles: MapTileEditor[];
  isModalOpen: boolean;
  setShowGrid: (showGrid: boolean) => void;
  setMapName: (mapName: string) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setZoom: (zoom: number) => void;
  setMapRef: (mapRef: React.RefObject<HTMLDivElement> | undefined) => void;
  setGeneratingScreenshot: (generatingScreenshot: boolean) => void;
  setTiles: (tiles: MapTileEditor[]) => void;
  setIsInEditorMode: (isInEditorMode: boolean) => void;
  setIsInEraserMode: (isInEraserMode: boolean) => void;
  setSelectedMapTile: (selectedMapTile: MapTileVariant | undefined) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
}>((set) => ({
  scale: 3,
  width: 800,
  height: 600,
  showGrid: true,
  mapName: "untitled_map",
  zoom: 1,
  mapRef: undefined,
  generatingScreenshot: false,
  isInEditorMode: false,
  isInEraserMode: false,
  selectedMapTile: undefined,
  tiles: [],
  isModalOpen: false,
  setShowGrid: (showGrid: boolean) => set((state) => ({ ...state, showGrid })),
  setMapName: (mapName: string) => set((state) => ({ ...state, mapName })),
  setWidth: (width: number) => set((state) => ({ ...state, width })),
  setHeight: (height: number) => set((state) => ({ ...state, height })),
  setZoom: (zoom: number) => set((state) => ({ ...state, zoom })),
  setMapRef: (mapRef: React.RefObject<HTMLDivElement> | undefined) =>
    set((state) => ({ ...state, mapRef })),
  setGeneratingScreenshot: (generatingScreenshot: boolean) =>
    set((state) => ({ ...state, generatingScreenshot })),
  setTiles: (tiles: MapTileEditor[]) => set((state) => ({ ...state, tiles })),
  setIsInEditorMode: (isInEditorMode: boolean) =>
    set((state) => ({ ...state, isInEditorMode })),
  setIsInEraserMode: (isInEraserMode: boolean) =>
    set((state) => ({ ...state, isInEraserMode })),
  setSelectedMapTile: (selectedMapTile: MapTileVariant | undefined) =>
    set((state) => ({ ...state, selectedMapTile })),
  setIsModalOpen: (isModalOpen: boolean) =>
    set((state) => ({ ...state, isModalOpen })),
}));

export default useMapStore;
