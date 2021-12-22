import React from "react";

interface IProps {
    text: string;
    type?: string;
    checked?: boolean;
    onChange: (text: string) => void;
}


export const Checkbox: React.FC<IProps> = props => {

    const {
        text,
        onChange,
        checked
    } = props;

    return (
        <label className="checkbox">
            <input id="indeterminate-checkbox" type="checkbox" checked={checked} onChange={() => onChange(text)} />
            <span>{text}</span>
        </label>
    )
}


