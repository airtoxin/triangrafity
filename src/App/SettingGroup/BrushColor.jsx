import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Palette from "./Palette/index.jsx";
import actions from "../../actions";

export class BrushColor extends Component {
    render() {
        const baseColorStyle = {
            width: "20px",
            height: "20px",
            margin: "5px"
        };
        const colors = this.props.palettes[this.props.paletteIndex].colors.map((color, i) => {
            const colorStyle = Object.assign(
                {backgroundColor: color, border: this.props.colorIndex === i ? "solid 1px red" : "none"},
                baseColorStyle
            );
            return (
                <div
                    key={i}
                    style={colorStyle}
                    onClick={() => this.handleClick(i)}
                    onTouchTap={() => this.handleClick(i)}
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
                        onClick={() => this.handleClick(null)}
                        style={Object.assign({marginTop: "6px"}, baseColorStyle, {border: this.props.colorIndex === null ? "solid 1px red" : "none"})}
                    ></i>
                </div>
                <Palette />
            </div>
        );
    }

    handleClick(index) {
        this.props.dispatch(actions.setBrushColorIndex, index);
    }
}

export default branch({
    palettes: ["palettes"],
    paletteIndex: ["palette", "selectingPaletteIndex"],
    colorIndex: ["brush", "selectingColorIndex"]
}, BrushColor);
