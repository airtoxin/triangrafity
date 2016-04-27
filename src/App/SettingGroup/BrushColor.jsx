import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import palettes from "./palettes";
import actions from "../../actions";

export class BrushColor extends Component {
    constructor(prop) {
        super(prop)
        this.palettes = palettes;
        this.state = {
            paletteIndex: Math.floor(Math.random() * palettes.length),
            selectingColorIndex: 0
        };
    }

    componentDidMount() {
        const color = this.palettes[this.state.paletteIndex].colors[this.state.selectingColorIndex];
        this.props.actions.setBrushColor(color);
    }

    render() {
        const colors = this.palettes[this.state.paletteIndex].colors.map((color, i) => {
            return (
                <div
                    key={i}
                    style={{
                        width: "20px",
                        height: "20px",
                        margin: "5px",
                        backgroundColor: color,
                        border: this.state.selectingColorIndex === i ? "solid 1px red" : "none"
                    }}
                    onClick={() => this.handleClick(color, i)}
                ></div>
            );
        });

        return (
            <div>
                <p>Brush color</p>
                <div style={{display: "flex", backgroundColor: "rgba(255,255,255,0.2)"}}>{colors}</div>
            </div>
        );
    }

    handleClick(color, i) {
        this.setState({selectingColorIndex: i});
        this.props.actions.setBrushColor(color);
    }
}

export default branch(BrushColor, {
    actions,
    cursors: {
        brushColor: ["brush", "color"]
    }
});
