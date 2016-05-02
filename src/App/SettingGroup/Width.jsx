import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Slider} from "rebass";
import actions from "../../actions";

export class Width extends Component {
    render() {
        return (
            <div>
                <Slider
                    value={this.props.width}
                    min={1}
                    max={100}
                    onChange={this.handleClick.bind(this)}
                    fill={true}
                    label={"Grid width = " + this.props.width}
                    name="width"
                />
            </div>
        );
    }

    handleClick(e) {
        this.props.actions.setGridWidth(+e.target.value);
    }
}

export default branch(Width, {
    actions,
    cursors: {
        width: ["grid", "width"]
    }
});
