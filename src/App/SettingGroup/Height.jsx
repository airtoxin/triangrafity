import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Slider from "rc-slider";
import actions from "../../actions";

export class Height extends Component {
    render() {
        return (
            <div>
                <p>Grid height</p>
                <Slider value={this.props.height} min={1} max={100} onChange={this.props.actions.setGridHeight}/>
            </div>
        );
    }
}

export default branch(Height, {
    actions,
    cursors: {
        height: ["grid", "height"]
    }
});
