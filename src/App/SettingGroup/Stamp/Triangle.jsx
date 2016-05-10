import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import ReactTriangle from "react-triangle";

export class Triangle extends Component {
    constructor(props) {
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);

        this.state = {
            color: null
        };
        this.color = null;
    }

    render() {
        return (<ReactTriangle
            {...this.props}
            fill={this.state.color}
            onMouseDown={this.handleMouseDown}
            onMouseEnter={this.handleMouseEnter}
        />);
    }

    handleMouseDown() {
        this.setState({color: "red"});
        this.color = "red";
    }

    handleMouseEnter() {
    }
}

export default branch({
}, Triangle);
