import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {TriangleGenerator} from "react-triangle";
import Triangle from "./Triangle.jsx";

const style = {
    width: "100%",
    height: "100%"
};

export class Triangles extends Component {
    render() {
        const gen = new TriangleGenerator({
            x: 0,
            y: 0,
            direction: "up",
            size: this.props.size
        });

        const Ts = Array.from(Array(this.props.height).keys()).map((cy) => {
            return Array.from(Array(this.props.width).keys()).map((cx) => {
                const props = gen.byCoord(cx, cy);
                return (<Triangle key={`x${cx}y${cy}`} {...props} />);
            });
        });
        return (
            <svg style={style}>{Ts}</svg>
        );
    }
}

export default branch(Triangles, {
    cursors: {
        width: ["settings", "board", "width"],
        height: ["settings", "board", "height"],
        size: ["settings", "triangle", "size"]
    }
});
