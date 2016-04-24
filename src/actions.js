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
    setPaletColor(tree, color) {
        assert(is.string(color));
        assert(color.match(/^#[\dabcdef]{6}$/));
        tree.set(["palet", "color"], color);
    },
    setTriangleFillColor(tree, indexInner, indexOuter, color) {
        assert(is.integer(indexInner));
        assert(is.integer(indexOuter));
        assert(is.string(color));
        assert(color.match(/^#[\dabcdef]{6}$/));
        tree.set(["triangles", indexInner, indexOuter, "color"], color);
    }
};
