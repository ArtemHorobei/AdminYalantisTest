import { shallow, mount } from 'enzyme';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../../../src/store';

describe('App', () => {
    it('renders shallow without crashing', () => {
        const component = shallow(<App />);
        expect(component.find('App')).toMatchSnapshot();
    });
    it('renders mount without crashing', () => {
        mount(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>);
    });
});
