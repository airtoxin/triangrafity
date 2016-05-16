import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import ReactDom from "react-dom";
import {whyDidYouUpdate} from "why-did-you-update";
import {root} from "baobab-react/higher-order";
import tree from "./state";
import App from "./App/index.jsx";

injectTapEventPlugin();

if (process.env.NODE_ENV !== "production") {
    // whyDidYouUpdate(React);
}

const Rooted = root(tree, App);
ReactDom.render(
    <Rooted />,
    document.getElementById("app")
);
