import assert from "assert";
import is from "is";

export default {
    setBoardWidth(tree, width) {
        assert(is.integer(width));
        tree.set(["settings", "board", "width"], width);
    },
    setBoardHeight(tree, height) {
        assert(is.integer(height));
        tree.set(["settings", "board", "height"], height);
    },
    setTriangleSize(tree, size) {
        assert(is.integer(size));
        tree.set(["settings", "triangle", "size"], size);
    },
    setPaletteColor(tree, color) {
        assert(is.string(color));
        assert(color.match(/^#[\dabcdef]{6}$/));
        tree.set(["palette", "color"], color);
    },
    setTriangleFillColor(tree, indexInner, indexOuter, color) {
        assert(is.integer(indexInner));
        assert(is.integer(indexOuter));
        assert(is.string(color));
        assert(color.match(/^#[\dabcdef]{6}$/));
        tree.set(["triangles", indexInner, indexOuter, "color"], color);
        tree.set(["triangles", indexInner, indexOuter, "strokeColor"], color);
    },
    setTrianglesStrokeColor(tree, color) {
        assert(is.string(color));
        assert(color.match(/^#[\dabcdef]{6}$/));
        const triangles = tree.get("triangles");
        triangles.forEach((row, i) => {
            row.forEach((triangle, j) => {
                tree.set(["triangles", i, j, "strokeColor"], color);
            });
        });
    },
    resetTrianglesStrokeColor(tree) {
    const triangles = tree.get("triangles");
    triangles.forEach((row, i) => {
        row.forEach((triangle, j) => {
            tree.set(["triangles", i, j, "strokeColor"], triangle.color);
        });
    });
    }
};
