import React, {Component} from "react";
import PropTypes from "baobab-react/prop-types";
import {branch} from "baobab-react/higher-order";
import ReactTriangle, {TriangleGenerator} from "react-triangle";
import actions from "../../actions";

export class Triangle extends Component {
    constructor(props) {
        super(props);
        this.state = {paletteColorindex: props.paletteColorindex};
    }

    render() {
        const fillingColor = this.getFillingColor();
        const strokeColor = this.props.guideVisiblity ? this.props.guideColor : fillingColor;
        return (
            <ReactTriangle
                {...this.props}
                fill={fillingColor}
                style={{stroke: strokeColor, strokeWidth: 1}}
                onMouseDown={this.handleMouseDown.bind(this)}
                onMouseEnter={this.handleMouseEnter.bind(this)}
            />
        );
    }

    getFillingColor() {
        return !this.state.paletteColorindex && this.state.paletteColorindex !== 0 ?
            this.props.backgroundColors[this.props.backgroundColorIndex] :
            this.props.palettes[this.props.paletteIndex].colors[this.state.paletteColorindex];
    }

    paintTriangle() {
        if (this.props.stampEnabled) return;
        this.setState({paletteColorindex: this.props.brushColorIndex});
    }

    handleMouseDown() {
        this.paintTriangle();
    }

    handleMouseEnter(e) {
        if (e.buttons === 1) { // mouse enter with left clicked
            this.paintTriangle();
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
        stampEnabled: ["stamp", "enabled"]
    }
});
