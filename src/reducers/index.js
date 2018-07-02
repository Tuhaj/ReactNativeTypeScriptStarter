"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../shared/constants/index");
const initialState = {
    name: 'React Native + Web Starter',
    enthusiasmLevel: 1
};
function enthusiasm(state = initialState, action) {
    switch (action.type) {
        case index_1.INCREMENT_ENTHUSIASM:
            return Object.assign({}, state, { enthusiasmLevel: state.enthusiasmLevel + 1 });
        case index_1.DECREMENT_ENTHUSIASM:
            return Object.assign({}, state, { enthusiasmLevel: Math.max(0, state.enthusiasmLevel - 1) });
    }
    return state;
}
exports.enthusiasm = enthusiasm;
//# sourceMappingURL=index.js.map