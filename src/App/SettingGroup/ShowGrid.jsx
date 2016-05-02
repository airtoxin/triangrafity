import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Switch} from "rebass";
import actions from "../../actions";

const labelProps = {
    for: "gridVisiblity",
    className:"Label",
    style: {
        boxSizing: "border-box",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: 1
    }
};
export class ShowGrid extends Component {
    render() {
        return (
            <div>
                <label {...labelProps}>Show grid</label>
                <Switch checked={this.props.visiblity} onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }

    handleClick() {
        this.props.actions.setGridVisiblity(!this.props.visiblity);
    }
}

export default branch(ShowGrid, {
    actions,
    cursors: {
        visiblity: ["grid", "guideVisiblity"]
    }
});
