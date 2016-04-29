import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Dropdown from "rc-dropdown";
import Menu from "./Menu.jsx";
import actions from "../../../actions";

export default class Palette extends Component {
    render() {
        return (
            <Dropdown trigger={["click"]} overlay={<Menu />} animation="slide-up">
                <i className="fa fa-paint-brush"></i>
            </Dropdown>
        );
    }
}
