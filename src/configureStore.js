"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducers_1 = require("./reducers");
// import Reactotron from 'reactotron-react-native'
// import {combineEpics, createEpicMiddleware} from 'redux-observable'
// const rootEpic = combineEpics();
// const epicMiddleware = createEpicMiddleware(rootEpic);
var initialState = {
    enthusiasmLevel: 1,
    name: 'Piotr Zientara',
};
exports.configureStore = function () {
    if (__DEV__) {
        return redux_1.createStore(reducers_1.enthusiasm, initialState);
    }
    else {
        return redux_1.createStore(reducers_1.enthusiasm, initialState);
    }
};
