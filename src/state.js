import assert from "power-assert";
import is from "is";
import {TriangleGenerator} from "react-triangle";
import Baobab from "baobab";
import merge from "lodash.merge";
import mergeWith from "lodash.mergewith";

const tree = new Baobab({
    settings: {
        board: {
            width: 10,
            height: 10,
            direction: "row"
        },
        triangle: {
            x: 0,
            y: 0,
            size: 50,
            direction: "up",
            color: "#000000"
        }
    },
    triangles: [], // depend settings.triangle
    palet: {
        color: "#ffffff"
    }
});

// initialize tree triangles.
const updateTriangles = (settings) => {
    assert(is.object(settings.triangle));
    assert(is.number(settings.triangle.x));
    assert(is.number(settings.triangle.y));
    assert(is.number(settings.triangle.size));
    assert(["up", "down", "left", "right"].includes(settings.triangle.direction));
    assert(is.object(settings.board));
    assert(is.number(settings.board.height));
    assert(is.number(settings.board.width));

    const gen = new TriangleGenerator(settings.triangle);
    return Array.from(Array(settings.board.height).keys()).map((cy, i) => {
        return Array.from(Array(settings.board.width).keys()).map((cx, j) => {
            const props = gen.byCoord(cx, cy);
            props.key = `i${i}j${j}`;
            props.keyi = i;
            props.keyj = j;
            return props;
        });
    });
};
const settingsCursor = tree.select("settings");
const trianglesCursor = tree.select("triangles");
trianglesCursor.set(updateTriangles(settingsCursor.get()));
settingsCursor.on("update", (e) => {
    trianglesCursor.set(
        mergeWith(updateTriangles(e.target.get()),
        trianglesCursor.get(),
        (o, s) => merge(o, s.slice(0, o.length))
    ));
});

export default tree;
