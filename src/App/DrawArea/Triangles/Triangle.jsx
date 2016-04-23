import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import ReactTriangle from "react-triangle";

export class Triangle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fill: props.triangleColor,
            style: {
                stroke: props.triangleColor,
                strokeWidth: 1
            }
        };
    }

    render() {
        return (
            <ReactTriangle {...this.props} {...this.state} style={this.state.style}
                onClick={this.handleClick.bind(this)}
            />
        );
    }

    handleClick() {
        this.setState({
            fill: this.props.drawingColor,
            style: {
                stroke: this.props.drawingColor,
                strokeWidth: 1
            }
        });
    }
}

export default branch(Triangle, {
    cursors: {
        triangleColor: ["settings", "triangle", "color"],
        drawingColor: ["palet", "color"]
    }
});
