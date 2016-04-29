import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {TriangleGenerator} from "react-triangle";
import Triangle from "./Triangle.jsx";

export class Triangles extends Component {
    render() {
        const style = {
            width: this.props.windowWidth,
            height: this.props.windowHeight
        };
        const generator = new TriangleGenerator(this.props.generatorTemplate);
        const triangles = Array.from(Array(this.props.gridWidth).keys()).map((i) => {
            return Array.from(Array(this.props.gridHeight).keys()).map((j) => {
                const props = generator.byCoord(i, j);
                return (
                    <Triangle {...props} />
                );
            });
        });
        return (
            <svg style={style}>{triangles}</svg>
        );
    }
}

export default branch(Triangles, {
    cursors: {
        generatorTemplate: ["originalTriangle"],
        windowWidth: ["canvas", "width"],
        windowHeight: ["canvas", "height"],
        gridWidth: ["grid", "width"],
        gridHeight: ["grid", "height"],
        triangleSize: ["originalTriangle", "size"]
    }
});
