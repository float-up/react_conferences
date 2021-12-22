import React from "react";
import {IProgram} from "../types/interfaces";

interface IProps {
    confInfo: IProgram;
}

export const ConferenceCard: React.FC<IProps> = props => {

    const {
        confInfo
    } = props;

    return (
        <div className="card grey lighten-5">
            <div className="card-content black-text">
                <span className="card-title">{confInfo.title}</span>
                <br/>
                <p className="card-lector">{confInfo.lector}</p>
                <br/>
                <p className="card-level">{confInfo.type.level} / {confInfo.type.lang}</p>
            </div>
        </div>
    )
}

