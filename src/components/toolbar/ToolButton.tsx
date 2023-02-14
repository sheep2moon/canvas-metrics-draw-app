import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { ToolItem } from "./Toolbar";
import RoundedButton from "../common/RoundedButton";
import { useCanvasStore } from "../../zustand/canvasStore";

type ToolButtonProps = ToolItem;

const ToolButton = ({ id, tooltip, icon }: ToolButtonProps) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const { selectedTool, selectTool } = useCanvasStore(store => store);

    useEffect(() => {
        console.log(selectedTool, id);
    }, [selectedTool]);

    return (
        <div className="relative">
            {isTooltipVisible && <div className="whitespace-nowrap bg-slate-100 absolute h-8 -top-10 flex items-center p-2 rounded-sm shadow-sm shadow-black/40 text-lg left-1/2 w-fit -translate-x-1/2">{tooltip}</div>}
            <RoundedButton onClick={() => selectTool(id)} onMouseEnter={() => setIsTooltipVisible(true)} onMouseLeave={() => setIsTooltipVisible(false)} className={clsx({ "bg-slate-300": selectedTool === id })}>
                {icon}
            </RoundedButton>
        </div>
    );
};

export default ToolButton;
