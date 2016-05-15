import React from "react";
import {Button} from "rebass";
import {saveSvgAsPng} from "save-svg-as-png";

export default () => {
    return (
        <Button
            onClick={() => saveSvgAsPng(document.getElementById("main-svg"), "diagram.png")}
            rounded={true}
            big={false}
        >Save as png</Button>
    );
};
