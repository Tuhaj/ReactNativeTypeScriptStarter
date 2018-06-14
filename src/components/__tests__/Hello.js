"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var enzyme_1 = require("enzyme");
var react_native_1 = require("react-native");
var Hello_1 = __importDefault(require("../Hello"));
it("renders correctly with defaults", function () {
    var button = react_test_renderer_1.default.create(react_1.default.createElement(Hello_1.default, { name: "World", enthusiasmLevel: 2 })).toJSON();
    expect(button).toMatchSnapshot();
});
it('renders the correct text when no enthusiasm level is given', function () {
    var wrapper = enzyme_1.shallow(react_1.default.createElement(Hello_1.default, { name: 'Piotr', enthusiasmLevel: 2 }));
    expect(wrapper.find('Text').length).toEqual(1);
    expect(wrapper.find(react_native_1.Text).children().text()).toEqual('Hello Piotr!!');
});
it('throws when the enthusiasm level is 0', function () {
    expect(function () {
        enzyme_1.shallow(react_1.default.createElement(Hello_1.default, { name: 'Daniel', enthusiasmLevel: 0 }));
    }).toThrow();
});
