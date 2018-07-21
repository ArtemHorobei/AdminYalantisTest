import App from 'components/App';
import { Provider } from 'react-redux';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
    it('renders without crashing', () => {
        const component = shallow(
            <Provider store={{}}>
                <App />
            </Provider>);
        expect(component).toMatchSnapshot();
    });
});
