import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Slider from "rc-slider";
import actions from "../../actions";

export class Width extends Component {
    render() {
        return (
            <div>
                <p>Board width</p>
                <Slider value={this.props.width} min={1} max={100} onChange={this.props.actions.setBoardWidth}/>
            </div>
        );
    }
}

export default branch(Width, {
    actions,
    cursors: {
        width: ["settings", "board", "width"]
    }
});
