import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Slider} from "rebass";
import actions from "../../actions";

export class Height extends Component {
    render() {
        return (
            <div>
                <Slider
                    value={this.props.height}
                    min={1}
                    max={100}
                    onChange={this.handleClick.bind(this)}
                    fill={true}
                    label={"Grid height = " + this.props.height}
                    name="height"
                />
            </div>
        );
    }

    handleClick(e) {
        this.props.dispatch(actions.setGridHeight, +e.target.value);
    }
}

export default branch({
    height: ["grid", "height"]
}, Height);
