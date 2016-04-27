import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import actions from "../../actions";

export class BackgroundColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [props.color, "#ffffff", "#978456"],
            selectingColorIndex: 0
        };
    }

    render() {
        const colors = this.state.colors.map((color, i) => {
            return (
                <div
                    key={i}
                    style={{
                        width: "20px",
                        height: "20px",
                        margin: "5px",
                        backgroundColor: color,
                        border: this.state.selectingColorIndex === i ? "solid 1px red" : "none"
                    }}
                    onClick={() => this.handleClick(color, i)}
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

    handleClick(color, i) {
        this.setState({selectingColorIndex: i});
        this.props.actions.setBackgroundColor(color);
    }
}

export default branch(BackgroundColor, {
    actions,
    cursors: {
        color: ["settings", "board", "backgroundColor"]
    }
});
