import React from "react";
import Width from "./Width.jsx";
import Height from "./Height.jsx";
import Size from "./Size.jsx";
import BrushColor from "./BrushColor.jsx";
import Stamp from "./Stamp/index.jsx";
import BackgroundColor from "./BackgroundColor.jsx";
import ShowGrid from "./ShowGrid.jsx";
import SaveAsImage from "./SaveAsImage.jsx";

const style = {
    margin: "50px",
    position: "absolute",
    top: 0,
    right: 0,
    width: "200px",
    height: "500px",
    color: "white",
    backgroundColor: "gray"
};

export default () => {
    return (
        <div style={style}>
            <Width />
            <Height />
            <Size />
            <BrushColor />
            <Stamp />
            <BackgroundColor />
            <ShowGrid />
            <SaveAsImage />
        </div>
    );
};
