import React, {Component} from "react";
import FullScreen from "./FullScreen.jsx";
import Triangles from "./Triangles/index.jsx";

export default class DrawArea extends Component {
    render() {
        return (
            <FullScreen>
                <Triangles />
            </FullScreen>
        );
    }
}
