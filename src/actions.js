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
    setStampMode(tree, mode) {
        tree.set(["stamp", "mode"], mode);
    },
    setStamps(tree, stamps) {
        tree.set(["stamp", "grids"], stamps);
    },
    moveEditingStampsToStamps(tree) {
        tree.set(["stamp", "originalDirection"], tree.get("tempStamp", "originalDirection"));
        tree.set(["tempStamp", "originalDirection"], null);

        tree.set(["tempStamp", "originalX"], null);
        tree.set(["tempStamp", "originalY"], null);

        tree.set(["stamp", "grids"], tree.get("tempStamp", "grids"));
        tree.set(["tempStamp", "grids"], []);
    },
    deleteStamps(tree) {
        tree.set(["stamp", "grids"], []);
    }
};
