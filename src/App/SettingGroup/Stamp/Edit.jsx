import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Button} from "rebass";
import actions from "../../../actions";

export class Edit extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.handleRegistClick.bind(this)}>Edit</Button>
                <Button onClick={this.handleDeleteClick.bind(this)}>Delete</Button>
                {this.props.stampMode === "edit" ? <Button onClick={this.handleDoneClick.bind(this)}>Done</Button> : null}
            </div>
        );
    }

    handleRegistClick() {
        this.props.actions.setStampMode("edit");
    }

    handleDeleteClick() {
        this.props.actions.deleteStamps();
    }

    handleDoneClick() {
        this.props.actions.moveEditingStampsToStamps();
        this.props.actions.setStampMode("active");
    }
}

export default branch(Edit, {
    actions,
    cursors: {
        stampMode: ["stamp", "mode"]
    }
});
