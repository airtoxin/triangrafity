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
            direction: "left",
            color: "#000000"
        },
        showGrid: false,
        gridColor: "#878787"
    },
    triangles: [], // depend settings.triangle
    palette: {
        color: "#ffffff"
    }
});

// initialize board size to full screen size
tree.select("settings", "board").set({
    width: Math.ceil(window.innerWidth / tree.get("settings", "triangle", "size") * (["up", "down"].includes(tree.get("settings", "triangle", "direction")) ? 2 : 1)),
    height: Math.ceil(window.innerHeight / tree.get("settings", "triangle", "size") * (["left", "right"].includes(tree.get("settings", "triangle", "direction")) ? 2 : 1))
});

// initialize tree triangles.
const updateTriangles = (currentTriangles, settings) => {
    const gen = new TriangleGenerator(settings.triangle);
    return Array.from(Array(settings.board.height).keys()).map((cy) => {
        const currentRow = currentTriangles[cy] || [];
        return Array.from(Array(settings.board.width).keys()).map((cx) => {
            const currentTriangle = currentRow[cx] || {};
            const newTriangle = gen.byCoord(cx, cy);
            return Object.assign(
                {},
                currentTriangle,
                newTriangle,
                {color: currentTriangle.color || newTriangle.color}
            );
        });
    });
};
const settingsCursor = tree.select("settings");
const trianglesCursor = tree.select("triangles");
trianglesCursor.set(updateTriangles(trianglesCursor.get(), settingsCursor.get()));
settingsCursor.on("update", (e) => trianglesCursor.set(updateTriangles(trianglesCursor.get(), e.target.get())));

export default tree;
