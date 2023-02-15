export const drawElement = (context: CanvasRenderingContext2D, element: CanvasElement, gridSize: number, scale: number) => {
    context.beginPath();
    if (element.type === "line") {
        const diffX = element.endPosition.x - element.startPosition.x;
        const diffY = element.endPosition.y - element.startPosition.y;
        const centerX = element.startPosition.x + diffX / 2;
        const centerY = element.startPosition.y + diffY / 2;
        const lineLenght = ((Math.sqrt(Math.pow(element.endPosition.x - element.startPosition.x, 2) + Math.pow(element.endPosition.y - element.startPosition.y, 2)) / gridSize) * scale).toFixed(2);

        context.font = "16px serif";
        context.fillText(lineLenght.toString(), centerX + 6, centerY - 6);

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
