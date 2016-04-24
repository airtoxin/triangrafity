import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import palettes from "./palettes";
import actions from "../../actions";

export class Color extends Component {
    constructor(prop) {
        super(prop)
        this.palettes = palettes;
        this.state = {
            paletteIndex: Math.floor(Math.random() * palettes.length),
            paintingColorIndex: 0
        };
    }

    componentDidMount() {
        const color = this.palettes[this.state.paletteIndex].colors[this.state.paintingColorIndex];
        this.props.actions.setPaletteColor(color);
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
                        border: this.state.paintingColorIndex === i ? "solid 1px red" : "none"
                    }}
                    onClick={() => this.handleClick(color, i)}
                ></div>
            );
        });

        return (
            <div>
                <p>Painting color</p>
                <div style={{display: "flex", backgroundColor: "rgba(255,255,255,0.2)"}}>{colors}</div>
            </div>
        );
    }

    handleClick(color, i) {
        this.setState({paintingColorIndex: i});
        this.props.actions.setPaletteColor(color);
    }
}

export default branch(Color, {
    actions,
    cursors: {
        color: ["palette", "color"]
    }
});
