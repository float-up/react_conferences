import React from "react";

interface IProps {
    text: string;
    disable?: boolean;
    onClick?: () => void;
}

export const Button: React.FC<IProps> = props => {

    const {
        text,
        onClick,
        disable
    } = props;

    return (
        <button className="waves-effect waves-light btn-large" disabled={disable} onClick={onClick}>{text}</button>
    )
}
