import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import SettingGroup from "./SettingGroup/index.jsx";
import DrawArea from "./DrawArea/index.jsx";

export class App extends Component {
    render() {
        return (
            <div>
                <SettingGroup />
                <DrawArea />
            </div>
        );
    }
}

export default branch(App, {});
