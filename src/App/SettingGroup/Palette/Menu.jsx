import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import MenuItem from "./MenuItem.jsx";
import palettes from "../palettes";
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
                {palettes.map((p) => (<MenuItem {...p} key={p.id}/>))}
            </div>
        );
    }
}

export default branch(Menu, {
    actions,
    cursors: {
    }
});
