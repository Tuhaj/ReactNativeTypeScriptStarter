"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducers_1 = require("./reducers");
var initialState = {
    enthusiasmLevel: 1,
    name: 'React Native and Web!',
};
exports.configureStoreWeb = function () {
    return redux_1.createStore(reducers_1.enthusiasm, initialState);
};
