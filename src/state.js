import {TriangleGenerator} from "react-triangle";
import Baobab from "baobab";

const tree = new Baobab({
    settings: {
        board: {
            width: null,
            height: null,
            backgroundColor: "#000000"
        },
        triangle: {
            x: 0,
            y: 0,
            size: 50,
            direction: "left",
            color: null
        },
        showGrid: false,
        gridColor: "#878787"
    },
    triangles: [], // depend settings.triangle
    brush: {
        color: "#ffffff"
    },
    palette: []
});

// initialize board size to full screen size
tree.select("settings", "board", "width").set(Math.ceil(window.innerWidth / tree.get("settings", "triangle", "size") * (["up", "down"].includes(tree.get("settings", "triangle", "direction")) ? 2 : 1)));
tree.select("settings", "board", "height").set(Math.ceil(window.innerHeight / tree.get("settings", "triangle", "size") * (["left", "right"].includes(tree.get("settings", "triangle", "direction")) ? 2 : 1)));

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
