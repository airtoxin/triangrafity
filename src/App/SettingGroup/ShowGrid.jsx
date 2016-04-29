import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Checkbox from "rc-checkbox";
import actions from "../../actions";

export class ShowGrid extends Component {
    render() {
        return (
            <div>
                <p>Show grid</p>
                <Checkbox value={this.props.visiblity} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }

    handleChange(e) {
        this.props.actions.setGridVisiblity(e.target.checked);
    }
}

export default branch(ShowGrid, {
    actions,
    cursors: {
        visiblity: ["grid", "guideVisiblity"]
    }
});
