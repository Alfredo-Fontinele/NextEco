import React from "react";

type ButtonType = "primary" | "secondary" | "navbar";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    typeStyle?: ButtonType;
    text: string;
}

export default function Button({ typeStyle, text, ...rest }: IButtonProps) {
    return (
        <>
            <button
                className={`bg-${
                    typeStyle === "primary"
                        ? "grey_1"
                        : typeStyle === "secondary"
                        ? "green_2"
                        : "grey_2"
                } `}
                {...rest}
            >
                {text}
            </button>
        </>
    );
}
