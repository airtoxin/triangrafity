export default {
    setBoardWidth(tree, width) {
        tree.set(["settings", "board", "width"], width);
    },
    setBoardHeight(tree, height) {
        tree.set(["settings", "board", "height"], height);
    },
    setTriangleSize(tree, size) {
        tree.set(["settings", "triangle", "size"], size);
    },
    setPaletteColor(tree, color) {
        tree.set(["palette", "color"], color);
    },
    setTriangleFillColor(tree, indexInner, indexOuter, color) {
        tree.set(["triangles", indexInner, indexOuter, "color"], color);
        tree.set(["triangles", indexInner, indexOuter, "strokeColor"], color);
    },
    setGridVisiblity(tree, visiblity) {
        tree.set(["settings", "showGrid"], visiblity);
    }
};
