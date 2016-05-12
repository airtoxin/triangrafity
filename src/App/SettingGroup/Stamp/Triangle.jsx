import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import ReactTriangle from "react-triangle";

export class Triangle extends Component {
    constructor(props) {
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);

        this.state = {
            colorIndex: null
        };
    }

    render() {
        const fill = this.state.colorIndex === null ?
            "" : this.props.palettes[this.props.paletteIndex].colors[this.state.colorIndex];
        return (<ReactTriangle
            {...this.props}
            fill={fill}
            onMouseDown={this.handleMouseDown}
            onMouseEnter={this.handleMouseEnter}
        />);
    }

    handleMouseDown() {
        this.setState({colorIndex: this.props.colorIndex});
    }

    handleMouseEnter(e) {
        if (e.buttons === 1) { // mouse enter with left clicked
            this.setState({colorIndex: this.props.colorIndex});
        }
    }
}

export default branch({
    palettes: ["palettes"],
    paletteIndex: ["palette", "selectingPaletteIndex"],
    colorIndex: ["brush", "selectingColorIndex"]
}, Triangle);
