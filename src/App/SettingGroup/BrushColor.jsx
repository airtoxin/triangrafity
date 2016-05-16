import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Palette from "./Palette/index.jsx";
import actions from "../../actions";

export function BrushColor(props) {
    const handleClick = (index) => {
        props.dispatch(actions.setBrushColorIndex, index);
    };
    const baseColorStyle = {
        width: "20px",
        height: "20px",
        margin: "5px"
    };
    const colors = props.palettes[props.paletteIndex].colors.map((color, i) => {
        const colorStyle = Object.assign(
            {backgroundColor: color, border: props.colorIndex === i ? "solid 1px red" : "none"},
            baseColorStyle
        );
        return (
            <div
                key={i}
                style={colorStyle}
                onClick={() => handleClick(i)}
                onTouchTap={() => handleClick(i)}
            ></div>
        );
    });

    return (
        <div style={{position: "relative", zIndex: 100000}}>
            <label>Brush color</label>
            <div style={{display: "flex", backgroundColor: "rgba(255,255,255,0.2)"}}>
                {colors}
                <i
                    className="fa fa-eraser"
                    aria-hidden="true"
                    onClick={() => handleClick(null)}
                    style={Object.assign({marginTop: "6px"}, baseColorStyle, {border: props.colorIndex === null ? "solid 1px red" : "none"})}
                ></i>
            </div>
            <Palette />
        </div>
    );
};

export default branch({
    palettes: ["palettes"],
    paletteIndex: ["palette", "selectingPaletteIndex"],
    colorIndex: ["brush", "selectingColorIndex"]
}, BrushColor);
