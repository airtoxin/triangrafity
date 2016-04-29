import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import actions from "../../actions";

export class BackgroundColor extends Component {
    render() {
        const colors = this.props.backgroundColors.map((color, i) => {
            const colorStyle = {
                width: "20px",
                height: "20px",
                margin: "5px",
                backgroundColor: color,
                border: this.props.colorIndex === i ? "solid 1px red" : "none"
            };
            return (
                <div
                    key={i}
                    style={colorStyle}
                    onClick={() => this.handleClick(i)}
                ></div>
            );
        });

        return (
            <div>
                <p>Background color</p>
                <div style={{display: "flex", backgroundColor: "rgba(255,255,255,0.2)"}}>{colors}</div>
            </div>
        );
    }

    handleClick(index) {
        this.props.actions.setBackgroundColorIndex(index);
    }
}

export default branch(BackgroundColor, {
    actions,
    cursors: {
        backgroundColors: ["backgroundColors"],
        colorIndex: ["backgroundColor", "selectingColorIndex"]
    }
});
