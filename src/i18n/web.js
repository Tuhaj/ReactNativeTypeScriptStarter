"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_js_1 = __importDefault(require("i18n-js"));
const index_1 = __importDefault(require("./index"));
i18n_js_1.default.fallbacks = true;
i18n_js_1.default.translations = index_1.default;
exports.default = i18n_js_1.default;
//# sourceMappingURL=web.js.map