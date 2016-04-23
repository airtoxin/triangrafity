import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import ColorsPicker from "react-colors-picker";
import actions from "../../actions";

export class Color extends Component {
    render() {
        return (
            <div>
                <p>Painting color</p>
                <ColorsPicker color={this.props.color} onChange={(e) => this.handleChange(e.color)}/>
            </div>
        );
    }

    handleChange(color) {
        this.props.actions.setPaletColor(color);
    }
}

export default branch(Color, {
    actions,
    cursors: {
        color: ["palet", "color"]
    }
});
