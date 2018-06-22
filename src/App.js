"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Hello_1 = __importDefault(require("./containers/Hello"));
const configureStore_1 = require("./configureStore");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
;
class App extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_redux_1.Provider, { store: configureStore_1.configureStore() },
            react_1.default.createElement(react_native_1.View, { style: styles.container },
                react_1.default.createElement(Hello_1.default, null))));
    }
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
//# sourceMappingURL=App.js.map