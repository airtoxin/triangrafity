import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Radio from "rc-radio";
import actions from "../../actions";

export class Direction extends Component {
    render() {
        return (
            <div>
                <p>Triangle direction</p>
                <label><Radio name="direction" value="up" onChange={this.handleChange.bind(this)} checked={this.props.direction === "up"} />△</label>
                <label><Radio name="direction" value="right" onChange={this.handleChange.bind(this)} checked={this.props.direction === "right"} />▷</label>
            </div>
        );
    }

    handleChange(e) {
        this.props.actions.setTriangleDirection(e.target.value);
    }
}

export default branch(Direction, {
    actions,
    cursors: {
        direction: ["settings", "triangle", "direction"]
    }
});
