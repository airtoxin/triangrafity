import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Slider} from "rebass";
import actions from "../../actions";

export class Size extends Component {
    render() {
        return (
            <div>
                <Slider
                    value={this.props.size}
                    min={1}
                    max={100}
                    onChange={this.handleClick.bind(this)}
                    fill={true}
                    label={"Triangle size = " + this.props.size}
                    name="size"
                />
            </div>
        );
    }

    handleClick(e) {
        this.props.actions.setOriginalTriangleSize(+e.target.value);
    }
}

export default branch(Size, {
    actions,
    cursors: {
        size: ["originalTriangle", "size"]
    }
});
