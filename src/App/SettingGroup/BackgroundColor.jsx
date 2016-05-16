import React from "react";
import {branch} from "baobab-react/higher-order";
import actions from "../../actions";

export function BackgroundColor(props) {
    const colors = props.backgroundColors.map((color, i) => {
        const colorStyle = {
            width: "20px",
            height: "20px",
            margin: "5px",
            backgroundColor: color,
            border: props.colorIndex === i ? "solid 1px red" : "none"
        };
        return (
            <div
                key={i}
                style={colorStyle}
                onClick={() => props.dispatch(actions.setBackgroundColorIndex, i)}
            ></div>
        );
    });

    return (
        <div>
            <label>Background color</label>
            <div style={{display: "flex", backgroundColor: "rgba(255,255,255,0.2)"}}>{colors}</div>
        </div>
    );
};

export default branch({
    backgroundColors: ["backgroundColors"],
    colorIndex: ["backgroundColor", "selectingColorIndex"]
}, BackgroundColor);
