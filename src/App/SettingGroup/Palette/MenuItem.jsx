import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Dropdown from "rc-dropdown";
import actions from "../../../actions";

export class MenuItem extends Component {
    render() {
        return (
            <div style={{height: "30px", width: "100%", display: "flex", flexFlow: "row no-wrap"}}>
                {this.props.colors.map((c, i) => {
                    return (<div key={i} style={{
                        width: "20px",
                        height: "20px",
                        margin: "5px",
                        backgroundColor: c
                    }}></div>);
                })}
                {this.props.name}
            </div>
        );
    }
}

export default branch(MenuItem, {
    actions,
    cursors: {
    }
});
