import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {DropdownMenu} from "rebass";
import MenuItem from "./MenuItem.jsx";
import actions from "../../../actions";

export class Menu extends Component {
    render() {
        return (
            <div style={{
                width: "500px",
                height: "200px",
                backgroundColor: "#ffffff",
                overflow: "scroll"
            }}>
                {this.props.palettes.map((p, i) => (<MenuItem index={i} {...p} key={p.id} handleClick={this.props.dismiss}/>))}
            </div>
        );
    }
}

export default branch(Menu, {
    actions,
    cursors: {
        palettes: ["palettes"]
    }
});
