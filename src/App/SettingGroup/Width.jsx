import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Slider} from "rebass";
import actions from "../../actions";

export function Width(props) {
    return (
        <div>
            <Slider
                value={props.width}
                min={1}
                max={100}
                onChange={(e) => props.dispatch(actions.setGridWidth, +e.target.value)}
                fill={true}
                label={"Grid width = " + props.width}
                name="width"
            />
        </div>
    );
};

export default branch({
    width: ["grid", "width"]
}, Width);
