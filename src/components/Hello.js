"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Hello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }) => {
    if ((enthusiasmLevel || 0) <= 0) {
        throw new Error("You could be a little more enthusiastic. :D");
    }
    const getExclamationMarks = (numChars) => Array(numChars + 1).join("!");
    const platformText = { ios: 'iOS', android: 'Android', web: 'Web' };
    return (<react_native_1.View style={styles.root}>
            <react_native_1.Text style={styles.greeting} data-test='header'>
                {'Hello ' + name + getExclamationMarks(enthusiasmLevel)}
            </react_native_1.Text>
            <react_native_1.Text style={styles.greeting} data-test='header'>
                {'Platform: ' + platformText[react_native_1.Platform.OS]}
            </react_native_1.Text>
            <react_native_1.View style={styles.buttons}>
                <react_native_1.View style={styles.button}>
                    <react_native_1.Button title="-" onPress={onDecrement} accessibilityLabel="decrement" color="red"/>
                </react_native_1.View>

                <react_native_1.View style={styles.button}>
                    <react_native_1.Button title="+" onPress={onIncrement} accessibilityLabel="increment" color="blue"/>
                </react_native_1.View>
            </react_native_1.View>
        </react_native_1.View>);
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
//# sourceMappingURL=Hello.js.map