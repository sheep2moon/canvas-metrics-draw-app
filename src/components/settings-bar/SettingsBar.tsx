import React, { useState } from "react";
import { useOptionsStore } from "../../zustand/optionsStore";
import RoundedButton from "../common/RoundedButton";
import Tooltip from "../common/Tooltip";
import { MdGrid4X4 } from "react-icons/md";
import { RiRulerLine } from "react-icons/ri";
import { BsSquare } from "react-icons/bs";

type Setting = "gridSize" | "scale";

const SettingsBar = () => {
    const { gridSize, setGridSize, scale, setScale } = useOptionsStore(store => store);
    const [openedSetting, setOpenedSetting] = useState<Setting | "">();
    const handleOpenSetting = (settingName: Setting) => {
        if (openedSetting === settingName) {
            setOpenedSetting("");
        } else setOpenedSetting(settingName);
    };

    const handleGridSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGridSize(parseInt(e.target.value));
    };
    const handleGridSizeUp = () => setGridSize(gridSize + 1);
    const handleGridSizeDown = () => setGridSize(gridSize - 1);

    const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setScale(parseFloat(e.target.value));
    };
    const handleScaleUp = () => setScale(scale + 1);
    const handleScaleDown = () => setScale(scale - 1);

    return (
        <div className="z-20 fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <div className="relative">
                <Tooltip disabled={openedSetting === "gridSize"} content="Rozmiar siatki" direction="right">
                    <RoundedButton className="" onClick={() => handleOpenSetting("gridSize")}>
                        <MdGrid4X4 />
                    </RoundedButton>
                </Tooltip>
                <SettingControlsContainer isOpen={openedSetting === "gridSize"}>
                    <input onChange={handleGridSizeChange} value={gridSize} className="text-xl w-16 h-16 border-stone-500 rounded-md shadow-sm shadow-stone-700 disabled:bg-slate-100 text-center" type="number" />
                    <div className="flex flex-col font-bold bg-slate-100 gap-1">
                        <button className="px-3 py-2 shadow-sm shadow-stone-600 rounded-md" onClick={handleGridSizeUp}>
                            +
                        </button>
                        <button className="px-3 py-2 shadow-sm shadow-stone-600 rounded-md" onClick={handleGridSizeDown}>
                            -
                        </button>
                    </div>
                </SettingControlsContainer>
            </div>
            <div className="relative">
                <Tooltip disabled={openedSetting === "scale"} content="Skala" direction="right">
                    <RoundedButton className="" onClick={() => handleOpenSetting("scale")}>
                        <RiRulerLine />
                    </RoundedButton>
                </Tooltip>
                <SettingControlsContainer isOpen={openedSetting === "scale"}>
                    <div className="flex items-center h-12 bg-slate-100 p-1">
                        <div className="flex items-center gap-2 px-2  h-full text-center align-middle text">
                            <BsSquare />
                            <span>=</span>
                        </div>
                        <input className="text-xl w-16 border-stone-500 rounded-md border-b-4  text-center" step={0.1} type="number" value={scale} onChange={handleScaleChange} />
                    </div>
                    <div className="flex flex-col font-bold bg-slate-100 gap-1">
                        <button className="px-3 py-2 shadow-sm shadow-stone-600 rounded-md" onClick={handleScaleUp}>
                            +
                        </button>
                        <button className="px-3 py-2 shadow-sm shadow-stone-600 rounded-md" onClick={handleScaleDown}>
                            -
                        </button>
                    </div>
                </SettingControlsContainer>
            </div>
        </div>
    );
};

export default SettingsBar;

const SettingControlsContainer = ({ children, isOpen }: { children: React.ReactNode; isOpen: boolean }) => {
    return <div className="flex items-center gap-2 absolute left-full top-1/2 -translate-y-1/2 translate-x-2">{isOpen && children}</div>;
};
