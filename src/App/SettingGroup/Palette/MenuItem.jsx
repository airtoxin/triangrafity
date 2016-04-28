import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Dropdown from "rc-dropdown";
import arrayEqual from "array-equal";
import actions from "../../../actions";

export class MenuItem extends Component {
    render() {
        const selected = arrayEqual(this.props.paletteColors, this.props.colors);
        return (
            <div
                style={{
                    height: "30px",
                    width: "100%",
                    border: selected ? "solid 1px red" : "none",
                    display: "flex",
                    flexFlow: "row no-wrap"
                }}
                onClick={this.handleClick.bind(this)}
            >
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

    handleClick() {
        this.props.actions.setPalette(this.props.colors);
    }
}

export default branch(MenuItem, {
    actions,
    cursors: {
        paletteColors: ["palette"]
    }
});
