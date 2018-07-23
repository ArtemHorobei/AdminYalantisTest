import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import store from '../../../src/store';
import { Provider } from 'react-redux';

describe('App', () => {
    it('renders shallow without crashing', () => {
        const component = shallow(
            <Provider store={store}>
                <App />
            </Provider>);
        expect(component).toMatchSnapshot();
    });
    it('renders mount without crashing', () => {
        const component = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>);
        expect(component).toMatchSnapshot();
    });
});
