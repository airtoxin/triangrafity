import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Switch} from "rebass";
import actions from "../../../actions";

export class Stamp extends Component {
    render() {
        return (
            <div>
                <label>Stamp mode</label>
                <Switch checked={this.props.stampEnabled} onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }

    handleClick() {
        this.props.actions.setStampMode(!this.props.stampEnabled);
    }
}

export default branch(Stamp, {
    actions,
    cursors: {
        stampEnabled: ["stamp", "enabled"]
    }
});
