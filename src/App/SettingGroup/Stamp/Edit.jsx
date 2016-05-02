import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Button} from "rebass";
import EditModal from "./EditModal.jsx";
import actions from "../../../actions";

export class Edit extends Component {    render() {
        return (
            <div>
                <Button onClick={this.handleEditClick.bind(this)}>Edit</Button>
                <EditModal />
            </div>
        );
    }

    handleEditClick() {
        this.props.actions.setStampMode("edit");
    }
}

export default branch(Edit, {
    actions,
    cursors: {
    }
});
