import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Palette from "./Palette/index.jsx";
import actions from "../../actions";

export class BrushColor extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            selectingColorIndex: 0
        };
    }

    componentDidMount() {
        const color = this.props.paletteColors[this.state.selectingColorIndex];
        this.props.actions.setBrushColor(color);
    }

    render() {
        const colors = this.props.paletteColors.map((color, i) => {
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
                <p>Brush color <Palette /></p>
                <div style={{display: "flex", backgroundColor: "rgba(255,255,255,0.2)"}}>
                    {colors}
                    <i
                        className="fa fa-eraser"
                        aria-hidden="true"
                        onClick={() => this.handleClick(null, this.state.selectingColorIndex)}
                        style={{marginTop: "6px"}}
                    ></i>
                </div>
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
        brushColor: ["brush", "color"],
        paletteColors: ["palette"]
    }
});
