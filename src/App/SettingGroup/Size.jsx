import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Slider} from "rebass";
import actions from "../../actions";

export function Size(props) {
    return (
        <div>
            <Slider
                value={props.size}
                min={1}
                max={100}
                onChange={(e) => props.dispatch(actions.setOriginalTriangleSize, +e.target.value)}
                fill={true}
                label={"Triangle size = " + props.size}
                name="size"
            />
        </div>
    );
};

export default branch({
    size: ["originalTriangle", "size"]
}, Size);
