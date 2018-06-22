"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const enzyme_1 = require("enzyme");
const react_native_1 = require("react-native");
const Hello_1 = __importDefault(require("../Hello"));
const helloProps = {
    onDecrement: jest.fn,
    onIncrement: jest.fn,
};
it("renders correctly with defaults", () => {
    const button = react_test_renderer_1.default.create(react_1.default.createElement(Hello_1.default, Object.assign({ name: "World", enthusiasmLevel: 2 }, helloProps))).toJSON();
    expect(button).toMatchSnapshot();
});
it('renders the correct text when no enthusiasm level is given', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(Hello_1.default, Object.assign({ name: 'Piotr', enthusiasmLevel: 2 }, helloProps)));
    expect(wrapper.find('Text').length).toEqual(1);
    expect(wrapper.find(react_native_1.Text).children().text()).toEqual('Hello Piotr!!');
});
it('throws when the enthusiasm level is 0', () => {
    expect(() => {
        enzyme_1.shallow(react_1.default.createElement(Hello_1.default, Object.assign({ name: 'Daniel', enthusiasmLevel: 0 }, helloProps)));
    }).toThrow();
});
//# sourceMappingURL=Hello.js.map