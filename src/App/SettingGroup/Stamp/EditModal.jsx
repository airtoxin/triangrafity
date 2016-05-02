import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Button, Overlay} from "rebass";
import Triangles from "../../Triangles/index.jsx";
import actions from "../../../actions";

export class EditModal extends Component {
    render() {
        return (
            <Overlay dark={false} open={this.props.stampMode === "edit"}>
                <Triangles idName="edit-svg" width={10} height={10} />
                <Button onClick={this.handleCloseClick.bind(this)}>Close</Button>
            </Overlay>
        );
    }

    handleCloseClick() {
        this.props.actions.moveEditingStampsToStamps();
        this.props.actions.setStampMode("active");
    }
}

export default branch(EditModal, {
    actions,
    cursors: {
        stampMode: ["stamp", "mode"]
    }
});
