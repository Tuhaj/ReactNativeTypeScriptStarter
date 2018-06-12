import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import Hello from "../Hello"

it("renders correctly with defaults", () => {
    const button = renderer.create(<Hello name="World" enthusiasmLevel={2} />).toJSON()
    expect(button).toMatchSnapshot()
})

it('renders the correct text when no enthusiasm level is given', () => {
    const wrapper = shallow(<Hello name='Piotr' enthusiasmLevel={2} />);
    expect(wrapper.find('Text').length).toEqual(1);
    expect(wrapper.find(Text).children().text()).toEqual('Hello Piotr!!')
});
