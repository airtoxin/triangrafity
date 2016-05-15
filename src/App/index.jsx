import React from "react";
import SettingGroup from "./SettingGroup/index.jsx";
import Triangles from "./Triangles/index.jsx";

export default () => {
    return (
        <div>
            <SettingGroup />
            <Triangles idName="main-svg" />
        </div>
    );
};
