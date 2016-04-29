import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import SettingGroup from "./SettingGroup/index.jsx";
import Triangles from "./Triangles/index.jsx";

export default class App extends Component {
    render() {
        return (
            <div>
                <SettingGroup />
                <Triangles />
            </div>
        );
    }
}
