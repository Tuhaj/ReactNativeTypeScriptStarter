import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { Hello } from "../Hello"

it("renders correctly with defaults", () => {
    const button = renderer.create(<Hello name="World" enthusiasmLevel={2} />).toJSON()
    expect(button).toMatchSnapshot()
})

it('renders the correct text when no enthusiasm level is given', () => {
    const hello = shallow(<Hello name='Piotr' enthusiasmLevel={2} />);
    expect(hello.find(Text).text()).toEqual('Hello Piotr!')
});
