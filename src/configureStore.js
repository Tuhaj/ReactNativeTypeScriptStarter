"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var reactotron_react_native_1 = __importDefault(require("reactotron-react-native"));
var redux_1 = require("redux");
var reducers_1 = require("./reducers");
require("./ReactotronConfig");
var react_native_1 = require("react-native");
exports.configureStoreWeb = function () {
    if (__DEV__ && react_native_1.Platform.OS !== 'web') {
        return reactotron_react_native_1.default.createStore(reducers_1.enthusiasm, redux_1.applyMiddleware());
    }
    else {
        return redux_1.createStore(reducers_1.enthusiasm);
    }
};
