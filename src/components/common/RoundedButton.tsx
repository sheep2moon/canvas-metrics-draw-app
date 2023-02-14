import React from "react";

type RoundedButtonProps = {
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const RoundedButton: React.FC<RoundedButtonProps> = ({ children, className, ...rest }) => {
    return (
        <button className={"w-16 h-16 bg-slate-100 shadow-slate-700 shadow-md rounded-full flex items-center justify-center text-3xl " + className} {...rest}>
            {children}
        </button>
    );
};

export default RoundedButton;
