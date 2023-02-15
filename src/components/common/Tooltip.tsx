import clsx from "clsx";
import React, { useState } from "react";

type TooltipProps = {
    direction: "left" | "right" | "top" | "down";
    delay?: number;
    content: string | React.ReactNode;
    children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ content, direction, delay = 500, children }) => {
    const [active, setActive] = useState<boolean>(false);
    let delayTimer: ReturnType<typeof setTimeout>;

    const handleMouseEnter = () => {
        delayTimer = setTimeout(() => {
            setActive(true);
        }, delay);
    };
    const handleMouseLeave = () => {
        setActive(false);
        clearTimeout(delayTimer);
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {active && (
                <div
                    className={clsx("absolute font-semibold text-base p-2 rounded-sm whitespace-nowrap bg-slate-100 shadow-sm shadow-stone-500", {
                        "top-full translate-y-2": direction === "down",
                        "top-2 -translate-y-full": direction === "top",
                        "-left-2 -translate-x-full top-1/2 -translate-y-1/2": direction === "left",
                        "-right-2 translate-x-full top-1/2 -translate-y-1/2": direction === "right"
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
