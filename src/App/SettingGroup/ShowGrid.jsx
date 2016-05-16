import React from "react";
import {branch} from "baobab-react/higher-order";
import {Switch} from "rebass";
import actions from "../../actions";

const labelProps = {
    for: "gridVisiblity",
    className:"Label",
    style: {
        boxSizing: "border-box",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: 1
    }
};
export function ShowGrid(props) {
    return (
        <div>
            <label {...labelProps}>Show grid</label>
            <Switch
                checked={props.visiblity}
                onClick={() => props.dispatch(actions.setGridVisiblity, !props.visiblity)}
            />
        </div>
    );
};

export default branch({
    visiblity: ["grid", "guideVisiblity"]
}, ShowGrid);
