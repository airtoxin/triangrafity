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
            height: 10
        },
        triangle: {
            x: 0,
            y: 0,
            size: 50,
            direction: "up",
            color: "#000000",
            strokeColor: "#000000"
        }
    },
    triangles: [], // depend settings.triangle
    palet: {
        color: "#ffffff"
    }
});

// initialize board size to full screen size
tree.select("settings", "board").set({
    width: Math.ceil(window.innerWidth / tree.select("settings", "triangle", "size").get() * 2),
    height: Math.ceil(window.innerHeight / tree.select("settings", "triangle", "size").get())
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
        mergeWith(
            updateTriangles(e.target.get()),
            trianglesCursor.get(),
            (newTrianglesRow, prevTrianglesRow) => mergeWith(
                newTrianglesRow,
                prevTrianglesRow.slice(0, newTrianglesRow.length),
                (newTriangle, prevTriangle) => {
                    // triangle states are set by user so use user overrided previous triangle value
                    // but strokeColor is set from grobal 'Show grid' option so use new value
                    const merged = merge(newTriangle, prevTriangle, {strokeColor: newTriangle.strokeColor});
                    return merged;
                }
            )
        )
    );
});

export default tree;
