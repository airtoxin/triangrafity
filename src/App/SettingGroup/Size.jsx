import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Slider from "rc-slider";
import actions from "../../actions";

export class Size extends Component {
    render() {
        return (
            <div>
                <p>Triangle size</p>
                <Slider value={this.props.size} min={1} max={300} onChange={this.props.actions.setTriangleSize}/>
            </div>
        );
    }
}

export default branch(Size, {
    actions,
    cursors: {
        size: ["settings", "triangle", "size"]
    }
});
