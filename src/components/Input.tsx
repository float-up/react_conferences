import React, {useContext} from "react";
import ConfsStore from "../store/ConfsStore";
import {observer} from 'mobx-react-lite';

interface IProps {
    placeholder?: string;
    onChange: (event: string) => void;
}

const Input: React.FC<IProps> = props => {

    const confsStore = useContext(ConfsStore);

    const {
        filterInput,
    } = confsStore

    const {
        placeholder,
        onChange
    } = props;

    return (
        <div>
            <input
                type="text"
                className="inputFilter"
                value={filterInput}
                placeholder={placeholder}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    )
}

export default observer(Input);
