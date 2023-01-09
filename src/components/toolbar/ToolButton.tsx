import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { ToolItem } from ".";
import { useAppStore } from "../../zustand/appStore";

type ToolButtonProps = ToolItem;

const ToolButton = ({ id, tooltip, icon }: ToolButtonProps) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const { selectedTool, selectTool } = useAppStore(store => store);

    useEffect(() => {
        console.log(selectedTool, id);
    }, [selectedTool]);

    return (
        <div className="relative">
            {isTooltipVisible && <div className="whitespace-nowrap bg-slate-100 absolute h-8 -top-10 flex items-center p-2 rounded-sm shadow-sm shadow-black/40 text-lg left-1/2 w-fit -translate-x-1/2">{tooltip}</div>}
            <button
                onClick={() => selectTool(id)}
                onMouseEnter={() => setIsTooltipVisible(true)}
                onMouseLeave={() => setIsTooltipVisible(false)}
                className={clsx("w-16 h-16 bg-slate-100 shadow-slate-700 shadow-md rounded-full flex items-center justify-center text-3xl", { "bg-slate-300": selectedTool === id })}
            >
                {icon}
            </button>
        </div>
    );
};

export default ToolButton;
