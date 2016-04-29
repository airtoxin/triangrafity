import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {saveSvgAsPng} from "save-svg-as-png";

export default class SaveAsImage extends Component {
    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Save as png</button>
        );
    }

    handleClick() {
        saveSvgAsPng(document.getElementById("svg"), "diagram.png");
    }
}
