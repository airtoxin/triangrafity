import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import ReactDom from "react-dom";
import {root} from "baobab-react/higher-order";
import tree from "./state";
import App from "./App/index.jsx";

injectTapEventPlugin();

const Rooted = root(App, tree);
ReactDom.render(
    <Rooted />,
    document.getElementById("app")
);
