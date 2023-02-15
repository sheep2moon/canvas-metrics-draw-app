import create from "zustand";

type OptionsStore = {
    gridSize: number;
    setGridSize: (s: number) => void;
};

export const useOptionsStore = create<OptionsStore>(set => ({
    gridSize: 16,
    setGridSize: newSize => set(state => ({ ...state, gridSize: newSize }))
}));
