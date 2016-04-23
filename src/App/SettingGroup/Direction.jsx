import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Radio from "rc-radio";
import actions from "../../actions";

export class Height extends Component {
    render() {
        return (
            <div>
                <p>Align direction</p>
                <label><Radio value="row" checked={this.props.direction === "row"} name="direction" onChange={(e) => this.props.actions.setAlignDirection(e.target.value)}/>Row</label>
                <label><Radio value="col" checked={this.props.direction === "col"} name="direction" onChange={(e) => this.props.actions.setAlignDirection(e.target.value)}/>Column</label>
            </div>
        );
    }
}

export default branch(Height, {
    actions,
    cursors: {
        direction: ["settings", "board", "direction"]
    }
});
