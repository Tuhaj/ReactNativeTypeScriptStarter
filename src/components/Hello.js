"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Hello = function (_a) {
    var name = _a.name, _b = _a.enthusiasmLevel, enthusiasmLevel = _b === void 0 ? 1 : _b, onIncrement = _a.onIncrement, onDecrement = _a.onDecrement;
    if ((enthusiasmLevel || 0) <= 0) {
        throw new Error("You could be a little more enthusiastic. :D");
    }
    var getExclamationMarks = function (numChars) { return Array(numChars + 1).join("!"); };
    return (react_1.default.createElement(react_native_1.View, { style: styles.root },
        react_1.default.createElement(react_native_1.Text, { style: styles.greeting, "data-test": 'header' }, 'Hello ' + name + getExclamationMarks(enthusiasmLevel)),
        react_1.default.createElement(react_native_1.View, { style: styles.buttons },
            react_1.default.createElement(react_native_1.View, { style: styles.button },
                react_1.default.createElement(react_native_1.Button, { title: "-", onPress: onDecrement, accessibilityLabel: "decrement", color: "red" })),
            react_1.default.createElement(react_native_1.View, { style: styles.button },
                react_1.default.createElement(react_native_1.Button, { title: "+", onPress: onIncrement, accessibilityLabel: "increment", color: "blue" })))));
};
var styles = react_native_1.StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center"
    },
    buttons: {
        flexDirection: "row",
        minHeight: 70,
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 5
    },
    button: {
        flex: 1,
        paddingVertical: 0
    },
    greeting: {
        color: "#999",
        fontWeight: "bold"
    }
});
exports.default = Hello;
