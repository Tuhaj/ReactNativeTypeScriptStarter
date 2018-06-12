import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; //https://github.com/airbnb/enzyme/tree/enzyme-adapter-react-16%401.1.1 required for React 16

Enzyme.configure({ adapter: new Adapter() });

// this code will run before All tests in GIVEN file
beforeAll(() => {
});

afterAll(() => {});

// this code will run before each of the test in GIVEN file
beforeEach(() => {});

afterEach(() => {});
