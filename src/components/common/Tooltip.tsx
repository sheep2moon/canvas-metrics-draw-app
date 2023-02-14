import clsx from "clsx";
import React, { useState } from "react";

type TooltipProps = {
    direction: "left" | "right" | "top" | "down";
    cooldown?: number;
    content: string | React.ReactNode;
    children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ content, direction, children }) => {
    const [active, setActive] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setActive(true);
    };
    const handleMouseLeave = () => {
        setActive(false);
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {active && (
                <div
                    className={clsx("absolute p-2 rounded-sm whitespace-nowrap bg-slate-100 shadow-sm shadow-stone-500", {
                        "top-full translate-y-2": direction === "down",
                        "top-2 -translate-y-full": direction === "top",
                        "-left-2 -translate-x-full top-1/2 -translate-y-1/2": direction === "left",
                        "right-2 translate-x-full top-1/2 -translate-y-1/2": direction === "right"
                    })}
                >
                    {content}
                </div>
            )}

            {children}
        </div>
    );
};

export default Tooltip;
