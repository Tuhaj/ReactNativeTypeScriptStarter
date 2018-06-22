"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reactotron_react_native_1 = __importDefault(require("reactotron-react-native"));
const redux_1 = require("redux");
const reducers_1 = require("./reducers");
require("./ReactotronConfig");
exports.configureStore = () => {
    if (__DEV__) {
        return reactotron_react_native_1.default.createStore(reducers_1.enthusiasm, redux_1.applyMiddleware());
    }
    else {
        return redux_1.createStore(reducers_1.enthusiasm);
    }
};
//# sourceMappingURL=configureStore.js.map