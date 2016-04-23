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
    setAlignDirection(tree, direction) {
        assert(["row", "col"].includes(direction));
        tree.set(["settings", "board", "direction"], direction);
    },
    setTriangleSize(tree, size) {
        assert(is.integer(size));
        tree.set(["settings", "triangle", "size"], size);
    },
    setPaletColor(tree, color) {
        assert(is.string(color));
        assert(color.match(/^#[\dabcdef]{6}$/));
        tree.set(["palet", "color"], color);
    }
};
