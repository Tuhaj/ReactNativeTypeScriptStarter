import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Hello from "../Hello.web";

// this is a copy from hello.tsx
// TODO find a way to avoid repeating

const helloProps = {
    onDecrement: jest.fn,
    onIncrement: jest.fn,
};

it("renders correctly with defaults", () => {
    const button = renderer.create(<Hello name="World" enthusiasmLevel={2} {...helloProps}/>).toJSON();
    expect(button).toMatchSnapshot()
});


it('renders the correct text when no enthusiasm level is given', () => {
    const wrapper = shallow(<Hello name='Piotr' enthusiasmLevel={2} {...helloProps}/>);
    expect(wrapper.find('[testID="enthusiasm-level"]').length).toEqual(1);
    expect(wrapper.find('[testID="hello"]').children().text()).toEqual('Hello Piotr!!')
});


it('throws when the enthusiasm level is 0', () => {
    const wrapper = shallow(<Hello name='Daniel' enthusiasmLevel={0} {...helloProps}/>);
    expect(wrapper.find('[testID="error"]').exists()).toBe(true);
});
