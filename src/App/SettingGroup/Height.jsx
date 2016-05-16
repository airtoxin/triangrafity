import React from "react";
import {branch} from "baobab-react/higher-order";
import {Slider} from "rebass";
import actions from "../../actions";

export function Height(props) {
    return (
        <div>
            <Slider
                value={props.height}
                min={1}
                max={100}
                onChange={(e) => props.dispatch(actions.setGridHeight, +e.target.value)}
                fill={true}
                label={"Grid height = " + props.height}
                name="height"
            />
        </div>
    );
};

export default branch({
    height: ["grid", "height"]
}, Height);
