import React, { useEffect, useRef } from "react";
import { drawElement } from "../helpers/drawElement";
import { useCanvasStore } from "../zustand/canvasStore";

const GRID_H = 16;
const GRID_V = 16;

type CanvasProps = {
    canvasWidth: number;
    canvasHeight: number;
};

const Canvas = ({ canvasWidth, canvasHeight }: CanvasProps) => {
    const canvasRef = useRef<null | HTMLCanvasElement>(null);
    const { elements, addElement } = useCanvasStore(store => store);

    const drawGrid = (ctx: CanvasRenderingContext2D) => {
        const h_lines = Math.floor(window.innerWidth / GRID_H);
        const v_lines = Math.floor(window.innerHeight / GRID_V);
        ctx.strokeStyle = "#777";
        for (let x = 0; x < h_lines; x++) {
            ctx.moveTo(x * GRID_H, 0);
            ctx.lineTo(x * GRID_H, canvasHeight);
        }
        for (let y = 0; y < v_lines; y++) {
            ctx.moveTo(0, y * GRID_V);
            ctx.lineTo(canvasWidth, y * GRID_V);
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
                    drawElement(context, element);
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
    }, [canvasWidth, canvasHeight, elements]);

    return <canvas onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} ref={canvasRef} />;
};

export default Canvas;
