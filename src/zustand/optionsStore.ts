import create from "zustand";

type OptionsStore = {
    gridSize: number;
    scale: number;
    setScale: (s: number) => void;
    setGridSize: (s: number) => void;
};

export const useOptionsStore = create<OptionsStore>(set => ({
    gridSize: 16,
    scale: 1,
    setScale: newScale => set(state => ({ ...state, scale: newScale })),
    setGridSize: newSize => set(state => ({ ...state, gridSize: newSize }))
}));
