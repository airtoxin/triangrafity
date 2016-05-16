import React from "react";
import {branch} from "baobab-react/higher-order";
import {Switch} from "rebass";
import Edit from "./Edit.jsx";
import actions from "../../../actions";

export function Stamp(props) {
    const mode = props.stampMode !== "inactive" ? "inactive" : "active";
    const handleClick = () => {
        props.dispatch(actions.setStampMode, mode);
    };
    const inactiveStampMode = props.stampMode !== "inactive";

    return (
        <div>
            <label>Stamp mode</label>
            <Switch checked={inactiveStampMode} onClick={handleClick}/>
            {inactiveStampMode ? <Edit /> : null}
        </div>
    );
};

export default branch({
    stampMode: ["stamp", "mode"]
}, Stamp);
