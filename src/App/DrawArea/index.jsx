import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import FullScreen from "./FullScreen.jsx";
import Triangles from "./Triangles/index.jsx";

export class DrawArea extends Component {
    render() {
        return (
            <FullScreen>
                <Triangles />
            </FullScreen>
        );
    }
}

export default branch(DrawArea, {});
