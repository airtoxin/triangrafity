import {TriangleGenerator} from "react-triangle";
import palettes from "./palettes";
import Baobab from "baobab";

const tree = new Baobab({
    canvas: {
        width: 0,
        height: 0
    },
    grid: {
        direction: "col", // "row" or "col" // TODO
        width: 10, // num of triangle row length. initialize with originalTriangle.{x,y,size,direction},canvas.width
        height: 10, // num of triangles col length. initialize with originalTriangle.{x,y,size,direction},canvas.height
        guideVisiblity: false,
        guideColor: "#878787"
    },
    originalTriangle: {
        x: 0, // x-axis position (px)
        y: 0, // y-axis position (px)
        size: 50, // side length
        direction: "left", // "left","right","up" or "down". depends on grid.direction
        paletteColorIndex: null // null means not painted.
    },
    palettes, // [{id:0, name: "facebook", colors: ["#aaaaa",...]}] (colors.length === 5)
    palette: {
        selectingPaletteIndex: 0
    },
    brush: {
        selectingColorIndex: 0 // null is selecting eraser
    },
    backgroundColors: ["#000000", "#3E658B", "#A2DA36", "#FF6F3C", "#ffffff"],
    backgroundColor: {
        selectingColorIndex: 0
    },
    stamp: {
        mode: "inactive",
        originalDirection: null,
        originalX: null,
        originalY: null,
        grids: [
            // { diffX: 1, diffY: -3, paletteColorIndex: 2 },
        ]
    }
});

// set canvas.width
const setCanvasSize = () => {
    tree.set(["canvas", "width"], window.innerWidth);
    tree.set(["canvas", "height"], window.innerHeight);
};
window.addEventListener("resize", setCanvasSize());
setCanvasSize();

// initialize grid
const getGrid = () => {
    const canvas = tree.get("canvas");
    const triangleSize = tree.get("originalTriangle", "size");
    return {
        width: Math.floor(canvas.width / triangleSize),
        height: Math.floor(canvas.height / triangleSize * 2)
    };
};
tree.set(["grid", "width"], getGrid().width);
tree.set(["grid", "height"], getGrid().height);

export default tree;
