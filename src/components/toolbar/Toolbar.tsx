import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { BiRectangle, BiPencil } from "react-icons/bi";
import ToolButton from "./ToolButton";

export type ToolItem = {
    id: Tool;
    tooltip: string;
    icon: React.ReactNode;
};

const tools: ToolItem[] = [
    {
        id: "line",
        tooltip: "Add line",
        icon: <AiOutlineLine />
    },
    {
        id: "rectangle",
        tooltip: "Add rectangle",
        icon: <BiRectangle />
    },
    {
        id: "pencil",
        tooltip: "Draw",
        icon: <BiPencil />
    }
];

const Toolbar = () => {
    return (
        <div className="z-20 fixed bottom-1 left-1/2 -translate-x-1/2 flex gap-2 justify-center items-center">
            {tools.map(tool => (
                <ToolButton key={tool.id} {...tool} />
            ))}
        </div>
    );
};

export default Toolbar;
