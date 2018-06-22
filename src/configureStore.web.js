"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = require("./reducers");
exports.configureStore = () => {
    return redux_1.createStore(reducers_1.enthusiasm, redux_1.applyMiddleware());
};
//# sourceMappingURL=configureStore.web.js.map