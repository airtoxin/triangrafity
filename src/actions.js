export default {
    setGridWidth(tree, width) {
        tree.set(["grid", "width"], width);
    },
    setGridHeight(tree, height) {
        tree.set(["grid", "height"], height);
    },
    setOriginalTriangleSize(tree, size) {
        tree.set(["originalTriangle", "size"], size);
    },
    setBrushColorIndex(tree, index) {
        tree.set(["brush", "selectingColorIndex"], index);
    },
    setPaletteIndex(tree, index) {
        tree.set(["palette", "selectingPaletteIndex"], index);
    },
    setBackgroundColorIndex(tree, index) {
        tree.set(["backgroundColor", "selectingColorIndex"], index);
    },
    setGridVisiblity(tree, visiblity) {
        tree.set(["grid", "guideVisiblity"], visiblity);
    },
    setStampMode(tree, activity) {
        tree.set(["stamp", "enabled"], activity);
    }
};
