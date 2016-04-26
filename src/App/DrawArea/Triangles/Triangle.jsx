import React, {Component} from "react";
import PropTypes from "baobab-react/prop-types";
import {branch} from "baobab-react/higher-order";
import ReactTriangle from "react-triangle";
import actions from "../../../actions";

export class Triangle extends Component {
    render() {
        const strokeColor = this.props.showGrid ? this.props.gridColor : this.props.color;
        return (
            <ReactTriangle
                x={this.props.x}
                y={this.props.y}
                size={this.props.size}
                direction={this.props.direction}
                fill={this.props.color}
                style={{stroke: strokeColor, strokeWidth: 1}}
                onMouseDown={this.handleMouseDown.bind(this)}
                onMouseEnter={this.handleMouseEnter.bind(this)}
            />
        );
    }

    shouldComponentUpdate({x, y, size, direction, color, showGrid}) {
        return color !== this.props.color ||
            x !== this.props.x ||
            y !== this.props.y ||
            size !== this.props.size ||
            direction !== this.props.direction ||
            showGrid !== this.props.showGrid;
    }

    handleMouseDown() {
        this.props.actions.setTriangleFillColor(this.props.i, this.props.j, this.props.drawingColor);
    }

    handleMouseEnter(e) {
        if (e.buttons === 1) { // mouse enter with left clicked
            this.props.actions.setTriangleFillColor(this.props.i, this.props.j, this.props.drawingColor);
        }
    }
}

export default branch(Triangle, {
    actions,
    cursors: {
        drawingColor: ["palette", "color"],
        showGrid: ["settings", "showGrid"],
        gridColor: ["settings", "gridColor"]
    }
});
