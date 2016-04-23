import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Width from "./Width.jsx";
import Height from "./Height.jsx";
import Direction from "./Direction.jsx";

const style = {
    margin: "50px",
    position: "absolute",
    top: 0,
    right: 0,
    width: "200px",
    height: "500px"
};

export class SetingGroup extends Component {
    render() {
        return (
            <div style={style}>
                <Width />
                <Height />
                <Direction />
            </div>
        );
    }
}

export default branch(SetingGroup, {
    cursors: {

    }
});
