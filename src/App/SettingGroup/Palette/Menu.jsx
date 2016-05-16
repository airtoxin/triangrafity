import React from "react";
import {branch} from "baobab-react/higher-order";
import {DropdownMenu} from "rebass";
import MenuItem from "./MenuItem.jsx";

export function Menu(props) {
    return (
        <div style={{
            width: "500px",
            height: "200px",
            backgroundColor: "#ffffff",
            overflow: "scroll"
        }}>
            {props.palettes.map((p, i) => (<MenuItem index={i} {...p} key={p.id} handleClick={props.dismiss}/>))}
        </div>
    );
};

export default branch({
    palettes: ["palettes"]
}, Menu);
