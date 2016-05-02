import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import {Dropdown, Arrow, DropdownMenu} from "rebass";
import Menu from "./Menu.jsx";
import actions from "../../../actions";

export default class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {
        return (
            <div>
                <Dropdown>
                    <div onClick={this.handleClick.bind(this)}>
                        Palette
                        <Arrow direction="down"/>
                    </div>

                    <DropdownMenu
                        open={this.state.open}
                        onDismiss={this.handleDismiss.bind(this)}
                        right={true}
                    >
                        <Menu dismiss={this.handleDismiss.bind(this)}/>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }

    handleClick() {
        this.setState({open: true});
    }

    handleDismiss() {
        this.setState({open: false});
    }
}
