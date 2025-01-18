import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    // styles
    color?: string;
    rounded?: string;
    customClass?: string;
};

export default function Button({
    children,
    color,
    onClick,
    rounded,
    customClass,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${color ? color : "bg-gray-400"} text-white px-3 py-1 ${
                rounded ? `rounded-${rounded}` : "rounded-full"
            } bg-opacity-80 hover:bg-opacity-100 transition-all ${
                customClass && customClass
            }`}
        >
            {children}
        </button>
    );
}
