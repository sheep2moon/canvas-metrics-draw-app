import React, { useEffect, useRef, useState } from "react";
import { drawElement } from "../helpers/drawElement";
import { toSnappedCoords } from "../helpers/snapToGrid";
import { useAppStore } from "../zustand/appStore";

const GRID_H = 16;
const GRID_V = 16;

type EffectCanvasProps = {
    canvasWidth: number;
    canvasHeight: number;
};

const EffectCanvas = ({ canvasWidth, canvasHeight }: EffectCanvasProps) => {
    const canvasRef = useRef<null | HTMLCanvasElement>(null);
    const [hoverPoint, setHoverPoint] = useState<{ x: null | number; y: null | number }>({ x: null, y: null });
    const [currentElement, setCurrentElement] = useState<CanvasElement | null>(null);
    const { addElement, selectedTool } = useAppStore(store => store);

    const handleMouseMove = (e: React.MouseEvent) => {
        const snappedCoords = toSnappedCoords(e.clientX, e.clientY, GRID_H, GRID_V);
        setHoverPoint(snappedCoords);
        if (currentElement) {
            setCurrentElement({ ...currentElement, endPosition: snappedCoords });
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        const snappedCoords = toSnappedCoords(e.clientX, e.clientY, GRID_H, GRID_V);

        setCurrentElement({ type: selectedTool, startPosition: snappedCoords, endPosition: snappedCoords });
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        const snappedCoords = toSnappedCoords(e.clientX, e.clientY, GRID_H, GRID_V);
        if (currentElement) {
            addElement({ ...currentElement, endPosition: snappedCoords });
            setCurrentElement(null);
        }
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
