import assert from "power-assert";
import is from "is";
import React, {Component} from "react";
import PropTypes from "baobab-react/prop-types";
import {branch} from "baobab-react/higher-order";
import ReactTriangle from "react-triangle";
import actions from "../../../actions";

export class Triangle extends Component {
    constructor(props) {
        super(props);
        assert(is.number(props.x));
        assert(is.number(props.y));
        assert(is.number(props.size));
        assert(["up", "down", "left", "right"].includes(props.direction));
        assert(is.number(props.keyi));
        assert(is.number(props.keyj));
    }

    render() {
        return (
            <ReactTriangle
                x={this.props.x}
                y={this.props.y}
                size={this.props.size}
                direction={this.props.direction}
                fill={this.props.color}
                style={{stroke: this.props.strokeColor, strokeWidth: 1}}
                onClick={this.handleClick.bind(this)}
            />
        );
    }

    handleClick() {
        this.props.actions.setTriangleFillColor(this.props.keyi, this.props.keyj, this.props.drawingColor);
    }
}
Triangle.contextTypes = {
    cursors: PropTypes.cursors
};

export default branch(Triangle, {
    actions,
    cursors: {
        drawingColor: ["palet", "color"]
    }
});
