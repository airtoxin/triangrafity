import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Button, Overlay} from "rebass";
import {TriangleGenerator} from "react-triangle";
import Triangle from "./Triangle.jsx";
import actions from "../../../actions";

export class EditModal extends Component {
    constructor(props) {
        super(props);
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }

    render() {
        const generator = new TriangleGenerator({
            x: 250,
            y:250,
            size: 50,
            direction:"right",
            style: {strokeWidth: "1px", stroke: "gray"}
        });
        const Triangles = [
                                    [0,-7],[1,-7],
                            [-1,-6],[0,-6],[1,-6],[2,-6],
                    [-2,-5],[-1,-5],[0,-5],[1,-5],[2,-5],[3,-5],
            [-3,-4],[-2,-4],[-1,-4],[0,-4],[1,-4],[2,-4],[3,-4],[4,-4],
            [-3,-3],[-2,-3],[-1,-3],[0,-3],[1,-3],[2,-3],[3,-3],[4,-3],
            [-3,-2],[-2,-2],[-1,-2],[0,-2],[1,-2],[2,-2],[3,-2],[4,-2],
            [-3,-1],[-2,-1],[-1,-1],[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],
            [-3, 0],[-2, 0],[-1, 0],[0, 0],[1, 0],[2, 0],[3, 0],[4, 0],
            [-3, 1],[-2, 1],[-1, 1],[0, 1],[1, 1],[2, 1],[3, 1],[4, 1],
            [-3, 2],[-2, 2],[-1, 2],[0, 2],[1, 2],[2, 2],[3, 2],[4, 2],
            [-3, 3],[-2, 3],[-1, 3],[0, 3],[1, 3],[2, 3],[3, 3],[4, 3],
            [-3, 4],[-2, 4],[-1, 4],[0, 4],[1, 4],[2, 4],[3, 4],[4, 4],
                    [-2, 5],[-1, 5],[0, 5],[1, 5],[2, 5],[3, 5],
                            [-1, 6],[0, 6],[1, 6],[2, 6],
                                    [0, 7],[1, 7]
        ].map(([x, y]) => {
            const props = generator.byCoord(x, y);
            const key = `x${x}y${y}`;
            return <Triangle key={key} ref={key} {...props} originalX={x} originalY={y} />;
        });

        return (
            <Overlay dark={false} open={this.props.stampMode === "edit"}>
                <svg width="500px" height="500px">{Triangles}</svg>
                <Button onClick={this.handleCloseClick}>Close</Button>
            </Overlay>
        );
    }

    handleCloseClick() {
        let tx, ty;
        let coords = [];
        for (const refKey of Object.keys(this.refs)) {
            const decorated = this.refs[refKey].getDecoratedComponentInstance();
            if (decorated.state.color) {
                const {originalX: x, originalY: y} = decorated.props;
                if (tx === void(0)) {
                    tx = x;
                    ty = y;
                }
                coords.push([x - tx, y - ty]);
            }
        }
        console.log("@coords", coords);

        this.props.dispatch(actions.moveEditingStampsToStamps);
        this.props.dispatch(actions.setStampMode, "active");
    }
}

export default branch({
    stampMode: ["stamp", "mode"],
    originalTriangle: ["originalTriangle"]
}, EditModal);
