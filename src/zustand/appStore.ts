import create from "zustand";

type AppStore = {
    selectedTool: Tool;
    elements: CanvasElement[];
    selectTool: (newTool: Tool) => void;
    addElement: (newElement: CanvasElement) => void;
};

export const useAppStore = create<AppStore>(set => ({
    selectedTool: "line",
    elements: [],
    addElement: newElement => set(state => ({ ...state, elements: [...state.elements, newElement] })),
    selectTool: newTool => set(state => ({ ...state, selectedTool: newTool }))
}));
