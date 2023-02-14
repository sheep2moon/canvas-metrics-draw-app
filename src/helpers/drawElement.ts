export const drawElement = (context: CanvasRenderingContext2D, element: CanvasElement) => {
    context.beginPath();
    if (element.type === "line") {
        context.lineWidth = 3;
        context.moveTo(element.startPosition.x, element.startPosition.y);
        context.lineTo(element.endPosition.x, element.endPosition.y);
    } else if (element.type === "rectangle") {
        context.lineWidth = 3;
        const width = element.endPosition.x - element.startPosition.x;
        const height = element.endPosition.y - element.startPosition.y;
        context.rect(element.startPosition.x, element.startPosition.y, width, height);
    }
    context.stroke();
};
