import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Switch} from "rebass";
import Edit from "./Edit.jsx";
import actions from "../../../actions";

export class Stamp extends Component {
    render() {
        const inactiveStampMode = this.props.stampMode !== "inactive";
        return (
            <div>
                <label>Stamp mode</label>
                <Switch checked={inactiveStampMode} onClick={this.handleClick.bind(this)}/>
                {inactiveStampMode ? <Edit /> : null}
            </div>
        );
    }

    handleClick() {
        const mode = this.props.stampMode !== "inactive" ? "inactive" : "active";
        this.props.dispatch(actions.setStampMode, mode);
    }
}

export default branch({
    stampMode: ["stamp", "mode"]
}, Stamp);
