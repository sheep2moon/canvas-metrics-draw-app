import React from "react";
import RoundedButton from "../common/RoundedButton";
import { BsFillEraserFill } from "react-icons/bs";
import Tooltip from "../common/Tooltip";

const Actionbar = () => {
    return (
        <div className="z-20 fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <Tooltip content="Clear all" direction="left">
                <RoundedButton className="">
                    <BsFillEraserFill />
                </RoundedButton>
            </Tooltip>
        </div>
    );
};

export default Actionbar;
