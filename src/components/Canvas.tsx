import React, { useEffect, useRef } from "react";
import { drawElement } from "../helpers/drawElement";
import { useCanvasStore } from "../zustand/canvasStore";
import { useOptionsStore } from "../zustand/optionsStore";

type CanvasProps = {
    canvasWidth: number;
    canvasHeight: number;
};

const Canvas = ({ canvasWidth, canvasHeight }: CanvasProps) => {
    const canvasRef = useRef<null | HTMLCanvasElement>(null);
    const { elements, addElement } = useCanvasStore(store => store);
    const { gridSize, scale } = useOptionsStore(store => store);

    const drawGrid = (ctx: CanvasRenderingContext2D) => {
        const h_lines = Math.ceil(window.innerWidth / gridSize);
        const v_lines = Math.ceil(window.innerHeight / gridSize);
        ctx.strokeStyle = "#777";
        for (let x = 0; x < h_lines; x++) {
            ctx.moveTo(x * gridSize, 0);
            ctx.lineTo(x * gridSize, canvasHeight);
        }
        for (let y = 0; y < v_lines; y++) {
            ctx.moveTo(0, y * gridSize);
            ctx.lineTo(canvasWidth, y * gridSize);
        }
        ctx.stroke();
        // ctx.lineWidth = 1;
    };

    const draw = () => {
        const canvas = canvasRef?.current;
        if (canvas) {
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            const context = canvas.getContext("2d");

            if (context) {
                drawGrid(context);

                console.log(elements);

                elements.forEach(element => {
                    drawElement(context, element, gridSize, scale);
                });
            }
        }
    };

    const handleMouseUp = () => {};
    const handleMouseDown = () => {};
    const handleMouseMove = () => {};

    // On window resize
    useEffect(() => {
        draw();
    }, [canvasWidth, canvasHeight, elements, gridSize, scale]);

    return <canvas onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} ref={canvasRef} />;
};

export default Canvas;
