import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Button} from "rebass";
import {saveSvgAsPng} from "save-svg-as-png";

export default class SaveAsImage extends Component {
    render() {
        return (
            <Button
                onClick={this.handleClick.bind(this)}
                rounded={true}
                big={false}
            >Save as png</Button>
        );
    }

    handleClick() {
        saveSvgAsPng(document.getElementById("main-svg"), "diagram.png");
    }
}
