import React, {Component} from "react";
import PropTypes from "baobab-react/prop-types";
import {branch} from "baobab-react/higher-order";
import ReactTriangle, {TriangleGenerator} from "react-triangle";
import actions from "../../actions";

export class Triangle extends Component {
    constructor(props) {
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);

        this.state = {
            paletteColorIndex: props.paletteColorIndex
        };
        this.refToPaint = (index) => this.setState({paletteColorIndex: index});
    }

    render() {
        const fillingColor = this.getFillingColor();
        const strokeColor = this.props.guideVisiblity ? this.props.guideColor : fillingColor;
        return (
            <ReactTriangle
                {...this.props}
                fill={fillingColor}
                style={{stroke: strokeColor, strokeWidth: 1}}
                onMouseDown={this.handleMouseDown}
                onMouseEnter={this.handleMouseEnter}
            />
        );
    }

    getFillingColor() {
        return !this.state.paletteColorIndex && this.state.paletteColorIndex !== 0 ?
            this.props.backgroundColors[this.props.backgroundColorIndex] :
            this.props.palettes[this.props.paletteIndex].colors[this.state.paletteColorIndex];
    }

    paintTriangle() {
        this.setState({paletteColorIndex: this.props.brushColorIndex});
    }

    handleMouseDown() {
        if (this.props.stampMode === "active") {
            this.props.handleStampClick(this.props.i, this.props.j);
        } else {
            this.paintTriangle();
        }
    }

    handleMouseEnter(e) {
        if (e.buttons === 1) { // mouse enter with left clicked
            if (this.props.stampMode === "active") {
                this.props.handleStampClick(this.props.i, this.props.j);
            } else {
                this.paintTriangle();
            }
        }
    }
}

export default branch(Triangle, {
    actions,
    cursors: {
        guideVisiblity: ["grid", "guideVisiblity"],
        guideColor: ["grid", "guideColor"],
        palettes: ["palettes"],
        paletteIndex: ["palette", "selectingPaletteIndex"],
        brushColorIndex: ["brush", "selectingColorIndex"],
        backgroundColors: ["backgroundColors"],
        backgroundColorIndex: ["backgroundColor", "selectingColorIndex"],
        stampMode: ["stamp", "mode"]
    }
});
