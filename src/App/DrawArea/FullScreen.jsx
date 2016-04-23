import React, {Component} from "react";

const getDimensions = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
};

export default class FullScreen extends Component {
    constructor(props) {
        super(props);
        this.state = getDimensions();
    }

    handleResize() {
        this.setState(getDimensions());
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize.bind(this));
    }

    render() {
        return (
            <div style={this.state}>{this.props.children}</div>
        );
    }
}
