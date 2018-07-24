import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import PreviewPage from 'components/PreviewPage/PreviewPage';
import PreviewPageContainer from 'components/PreviewPage/';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../../../src/store';

describe('PreviewPage', () => {
    let propsFunc = null;
    beforeEach(() => {
        propsFunc = {
            requestGetImage: jest.fn(() => Promise.resolve()),
        };
    });
    it('renders shallow without crashing', () => {
        const component = shallow(
            <Provider store={store}>
                <BrowserRouter>
                    <PreviewPageContainer {...propsFunc} />
                </BrowserRouter>
            </Provider>);
        expect(component.find('PreviewPage')).toMatchSnapshot();
    });
    it('renders mount with 5 images', () => {
        const component = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <PreviewPageContainer {...propsFunc} />
                </BrowserRouter>
            </Provider>);
        expect(component.find('ImageBlock').length).toBe(5);
    });
    it('renders mount without images', () => {
        const component = mount(
            <BrowserRouter>
                <PreviewPage images={[]} {...propsFunc} />
            </BrowserRouter>);
        expect(component.find('ImageBlock').length).toBe(0);
    });
});
