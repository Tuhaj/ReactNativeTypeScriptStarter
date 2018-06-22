"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants = __importStar(require("../shared/constants/index"));
function incrementEnthusiasm() {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}
exports.incrementEnthusiasm = incrementEnthusiasm;
function decrementEnthusiasm() {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}
exports.decrementEnthusiasm = decrementEnthusiasm;
//# sourceMappingURL=index.js.map