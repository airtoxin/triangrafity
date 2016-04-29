import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import MenuItem from "./MenuItem.jsx";
import actions from "../../../actions";

export class Menu extends Component {
    render() {
        return (
            <div style={{
                width: "300px",
                height: "200px",
                backgroundColor: "#ffffff",
                overflow: "scroll"
            }}>
                {this.props.palettes.map((p, i) => (<MenuItem index={i} {...p} key={p.id}/>))}
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
