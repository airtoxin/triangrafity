import React from "react";
import {branch} from "baobab-react/higher-order";
import {Button} from "rebass";
import EditModal from "./EditModal.jsx";
import actions from "../../../actions";

export function Edit(props) {
    return (
        <div>
            <Button onClick={() => props.dispatch(actions.setStampMode, "edit")}>Edit</Button>
            <EditModal />
        </div>
    );
};

export default branch({}, Edit);
