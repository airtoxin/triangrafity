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
        const triangles = Array.from(Array(this.props.width || this.props.gridWidth).keys()).map((i) => {
            return Array.from(Array(this.props.height || this.props.gridHeight).keys()).map((j) => {
                const props = generator.byCoord(i, j);
                return (
                    <Triangle
                        {...props}
                        i={i}
                        j={j}
                        ref={`i${i}j${j}`}
                        handleStampClick={this.handleStampClick.bind(this)}
                    />
                );
            });
        });

        return (
            <svg id={this.props.idName} style={style}>{triangles}</svg>
        );
    }

    handleStampClick(i, j) {
        if (this.refs[`i${i}j${j}`].props.direction !== "left") return;
        const stampGrids = this.props.stampGrids;
        for (const stamp of stampGrids) {
            this.refs[`i${i + stamp.diffX}j${j + stamp.diffY}`].getDecoratedComponentInstance().refToPaint(stamp.paletteColorIndex);
        }
    }
}

export default branch({
    generatorTemplate: ["originalTriangle"],
    windowWidth: ["canvas", "width"],
    windowHeight: ["canvas", "height"],
    gridWidth: ["grid", "width"],
    gridHeight: ["grid", "height"],
    triangleSize: ["originalTriangle", "size"],
    stampOriginalDirection: ["stamp", "originalDirection"],
    stampGrids: ["stamp", "grids"]
}, Triangles);
