import React from "react";
import { useOptionsStore } from "../../zustand/optionsStore";
import RoundedButton from "../common/RoundedButton";
import Tooltip from "../common/Tooltip";
import { MdGrid4X4 } from "react-icons/md";

const SettingsBar = () => {
    const { gridSize, setGridSize } = useOptionsStore(store => store);

    const handleGridSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGridSize(parseInt(e.target.value));
    };
    const handleGridSizeUp = () => setGridSize(gridSize + 1);
    const handleGridSizeDown = () => setGridSize(gridSize - 1);

    return (
        <div className="z-20 fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <div className="relative">
                <Tooltip content="Clear all" direction="right">
                    <RoundedButton className="">
                        <MdGrid4X4 />
                    </RoundedButton>
                </Tooltip>
                <div className="flex items-center gap-2 absolute left-full top-1/2 -translate-y-1/2 translate-x-2">
                    <input onChange={handleGridSizeChange} value={gridSize} className="text-xl w-16 h-16 border-stone-500 rounded-md shadow-sm shadow-stone-700 disabled:bg-slate-100 text-center" type="number" />
                    <div className="flex flex-col font-bold bg-slate-100 gap-1">
                        <button className="px-3 py-2 shadow-sm shadow-stone-600 rounded-md" onClick={handleGridSizeUp}>
                            +
                        </button>
                        <button className="px-3 py-2 shadow-sm shadow-stone-600 rounded-md" onClick={handleGridSizeDown}>
                            -
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsBar;
