"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const web_1 = __importDefault(require("../i18n/web"));
const constants_1 = require("../constants");
const Hello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }) => {
    let error = null;
    if ((enthusiasmLevel || 0) <= 0) {
        error = web_1.default.t('errorText');
    }
    const getExclamationMarks = '!'.repeat(enthusiasmLevel);
    return (react_1.default.createElement(react_native_1.View, { style: styles.root },
        react_1.default.createElement(react_native_1.Text, { testID: 'enthusiasm-level' },
            "Web: ",
            web_1.default.t('test')),
        error ? react_1.default.createElement(react_native_1.Text, { testID: 'error' }, error) : null,
        react_1.default.createElement(react_native_1.Text, { testID: 'hello', style: styles.greeting }, web_1.default.t('greeting') + ' ' + name + getExclamationMarks),
        react_1.default.createElement(react_native_1.Text, { style: styles.greeting, "data-test": 'header' }, 'Platform: ' + constants_1.platformText[react_native_1.Platform.OS]),
        react_1.default.createElement(react_native_1.View, { style: styles.buttons },
            react_1.default.createElement(react_native_1.View, { style: styles.button },
                react_1.default.createElement(react_native_1.Button, { title: "-", onPress: onDecrement, accessibilityLabel: "decrement", color: "#3355ee" })),
            react_1.default.createElement(react_native_1.View, { style: styles.button },
                react_1.default.createElement(react_native_1.Button, { title: "+", onPress: onIncrement, accessibilityLabel: "increment", color: "#dd5599" })))));
};
const styles = react_native_1.StyleSheet.create({
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
//# sourceMappingURL=Hello.web.js.map