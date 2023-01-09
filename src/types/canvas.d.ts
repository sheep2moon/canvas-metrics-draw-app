type Position = {
    x: number;
    y: number;
};
type Tool = "pencil" | "line" | "rectangle";
type CanvasElement = {
    type: Tool;
    startPosition: { x: number; y: number };
    endPosition: { x: number; y: number };
};
