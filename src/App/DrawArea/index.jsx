import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";

export class DrawArea extends Component {
    render() {
        return (<h1>yo</h1>);
    }
}

export default branch(DrawArea, {});
