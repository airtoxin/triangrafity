import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Checkbox from "rc-checkbox";
import actions from "../../actions";

export class ShowGrid extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            showGrid: prop.strokeColor !== prop.fillColor,
            lineColor: "#878787"
        };
    }

    render() {
        return (
            <div>
                <p>Show grid</p>
                <Checkbox value={this.state.showGrid} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }

    handleChange(e) {
        const checked = e.target.checked;
        this.props.actions.setTrianglesStrokeColor(checked ? this.state.lineColor : this.props.fillColor);
    }
}

export default branch(ShowGrid, {
    actions,
    cursors: {
        fillColor: ["settings", "triangle", "color"],
        strokeColor: ["settings", "triangle", "strokeColor"]
    }
});