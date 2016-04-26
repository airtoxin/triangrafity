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
        const Ts = this.props.triangles.map((row, i) => {
            return row.map((props, j) => {
                return (<Triangle {...props} key={`i${i}j${j}`} i={i} j={j}/>);
            })
        });
        return (
            <svg style={style}>{Ts}</svg>
        );
    }
}

export default branch(Triangles, {
    cursors: {
        triangles: ["triangles"]
    }
});
