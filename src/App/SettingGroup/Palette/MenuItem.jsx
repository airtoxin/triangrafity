import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Dropdown from "rc-dropdown";
import arrayEqual from "array-equal";
import actions from "../../../actions";

export class MenuItem extends Component {
    render() {
        const itemStyle = {
            height: "30px",
            width: "100%",
            border: this.props.index === this.props.paletteIndex ? "solid 1px red" : "none",
            display: "flex",
            flexFlow: "row no-wrap"
        };
        return (
            <div
                style={itemStyle}
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
        this.props.actions.setPaletteIndex(this.props.index);
    }
}

export default branch(MenuItem, {
    actions,
    cursors: {
        paletteIndex: ["palette", "selectingPaletteIndex"]
    }
});
