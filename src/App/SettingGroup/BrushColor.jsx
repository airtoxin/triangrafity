import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Palette from "./Palette/index.jsx";
import actions from "../../actions";

export class BrushColor extends Component {
    render() {
        const colors = this.props.palettes[this.props.paletteIndex].colors.map((color, i) => {
            const colorStyle = {
                width: "20px",
                height: "20px",
                margin: "5px",
                backgroundColor: color,
                border: this.props.colorIndex === i ? "solid 1px red" : "none"
            };
            return (
                <div
                    key={i}
                    style={colorStyle}
                    onClick={() => this.handleClick(i)}
                ></div>
            );
        });

        return (
            <div>
                <label>Brush color</label>
                <div style={{display: "flex", backgroundColor: "rgba(255,255,255,0.2)"}}>
                    {colors}
                    <i
                        className="fa fa-eraser"
                        aria-hidden="true"
                        onClick={() => this.handleClick(null)}
                        style={{marginTop: "6px"}}
                    ></i>
                </div>
                <Palette />
            </div>
        );
    }

    handleClick(index) {
        this.props.actions.setBrushColorIndex(index);
    }
}

export default branch(BrushColor, {
    actions,
    cursors: {
        palettes: ["palettes"],
        paletteIndex: ["palette", "selectingPaletteIndex"],
        colorIndex: ["brush", "selectingColorIndex"]
    }
});
