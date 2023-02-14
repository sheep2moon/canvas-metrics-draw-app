import create from "zustand";

type CanvasStore = {
    selectedTool: Tool;
    elements: CanvasElement[];
    selectTool: (newTool: Tool) => void;
    addElement: (newElement: CanvasElement) => void;
    clearElements: () => void;
};

export const useCanvasStore = create<CanvasStore>(set => ({
    selectedTool: "line",
    elements: [],
    addElement: newElement => set(state => ({ ...state, elements: [...state.elements, newElement] })),
    selectTool: newTool => set(state => ({ ...state, selectedTool: newTool })),
    clearElements: () => set(state => ({ ...state, elements: [] }))
}));
