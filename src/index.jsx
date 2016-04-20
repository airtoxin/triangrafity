import React from "react";
import ReactDom from "react-dom";
import {root} from "baobab-react/higher-order";
import tree from "./state";
import App from "./App/index.jsx";

const Rooted = root(App, tree);
ReactDom.render(
    <Rooted />,
    document.getElementById("app")
);
