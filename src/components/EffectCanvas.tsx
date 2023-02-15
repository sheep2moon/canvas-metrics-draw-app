import React, { useEffect, useRef, useState } from "react";
import { drawElement } from "../helpers/drawElement";
import { toSnappedCoords } from "../helpers/snapToGrid";
import { useCanvasStore } from "../zustand/canvasStore";
import { useOptionsStore } from "../zustand/optionsStore";

type EffectCanvasProps = {
    canvasWidth: number;
    canvasHeight: number;
};

const EffectCanvas = ({ canvasWidth, canvasHeight }: EffectCanvasProps) => {
    const canvasRef = useRef<null | HTMLCanvasElement>(null);
    const [hoverPoint, setHoverPoint] = useState<{ x: null | number; y: null | number }>({ x: null, y: null });
    const [currentElement, setCurrentElement] = useState<CanvasElement | null>(null);
    const { addElement, selectedTool } = useCanvasStore(store => store);
    const gridSize = useOptionsStore(store => store.gridSize);

    const handleMouseMove = (e: React.MouseEvent) => {
        const snappedCoords = toSnappedCoords(e.clientX, e.clientY, gridSize);
        setHoverPoint(snappedCoords);
        if (currentElement) {
            setCurrentElement({ ...currentElement, endPosition: snappedCoords });
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        const snappedCoords = toSnappedCoords(e.clientX, e.clientY, gridSize);

        setCurrentElement({ type: selectedTool, startPosition: snappedCoords, endPosition: snappedCoords });
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        const snappedCoords = toSnappedCoords(e.clientX, e.clientY, gridSize);
        if (currentElement && (currentElement.startPosition.x !== currentElement.endPosition.x || currentElement.startPosition.y !== currentElement.endPosition.y)) {
            console.log(currentElement);

            addElement({ ...currentElement, endPosition: snappedCoords });
        }
        setCurrentElement(null);
    };

    const handleMouseLeave = () => {
        setHoverPoint({ x: null, y: null });
    };

    const draw = () => {
        const canvas = canvasRef?.current;
        if (canvas) {
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            const context = canvas.getContext("2d");

            if (context) {
                if (hoverPoint.x && hoverPoint.y) {
                    context.beginPath();
                    context.arc(hoverPoint.x, hoverPoint.y, 4, 0, 2 * Math.PI, true);
                    context.fill();
                }
                if (currentElement) drawElement(context, currentElement);
            }
        }
    };

    useEffect(() => {
        draw();
    }, [hoverPoint, currentElement, canvasWidth, canvasHeight]);

    return <canvas className="z-10" onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={canvasRef} />;
};

export default EffectCanvas;
