"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_i18n_1 = __importDefault(require("react-native-i18n"));
const index_1 = __importDefault(require("./index"));
react_native_i18n_1.default.fallbacks = true;
react_native_i18n_1.default.translations = index_1.default;
exports.default = react_native_i18n_1.default;
//# sourceMappingURL=mobile.js.map