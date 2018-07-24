import { shallow, mount } from 'enzyme';
import AdminPageContainer from 'components/AdminPage';
import AdminPage from 'components/AdminPage/AdminPage';
import { BrowserRouter } from 'react-router-dom';
import mockData from '../../../src/sagas/mockData';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../../../src/store';

describe('AdminPage', () => {
    let propsFunc = null;
    beforeEach(() => {
        propsFunc = {
            requestGetImages: jest.fn(() => Promise.resolve()),
            requestAddImage: jest.fn(() => Promise.resolve()),
            requestDeleteImage: jest.fn(() => Promise.resolve()),
            requestEditImage: jest.fn(() => Promise.resolve()),
            requestGetImage: jest.fn(() => Promise.resolve()),
        };
    });
    it('renders mount without crashing', () => {
        const component = shallow(
            <Provider store={store}>
                <BrowserRouter>
                    <AdminPageContainer />
                </BrowserRouter>
            </Provider>
        );
        expect(component.find('AdminPage')).toMatchSnapshot();
    });
    it('renders mount with 5 images', () => {
        const component = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <AdminPageContainer {...propsFunc} />
                </BrowserRouter>
            </Provider>);
        expect(component.find('ImageBlockAdmin').length).toBe(5);
    });
    it('renders mount without images', () => {
        const component = mount(
            <BrowserRouter>
                <AdminPage images={[]} {...propsFunc} />
            </BrowserRouter>);
        expect(component.find('ImageBlockAdmin').length).toBe(0);
    });
    it('renders when state file is null', () => {
        const component = mount(<AdminPage images={ mockData } {...propsFunc} />);
        component.setState({ file: false });
        expect(component.find('textarea').length).toBe(0);
    });
    it('renders when state file is present', () => {
        const component = mount(<AdminPage images={ mockData } {...propsFunc} />);
        component.setState({ file: 'someFile' });
        expect(component.find('textarea').length).toBe(1);
    });
    it('click delete file', () => {
        const component = mount(<AdminPage images={ mockData } {...propsFunc} />);
        component.setState({ file: 'someFile' });
        const buttonCancel = component.find('button.it-admin-page-button-add-image.negative');
        buttonCancel.simulate('click');
        expect(component.state('file')).toEqual(null);
    });
    it('change value of textarea', () => {
        const component = mount(<AdminPage images={ mockData } {...propsFunc} />);
        component.setState({ file: 'someFile' });
        const textarea = component.find('textarea');
        textarea.simulate('change', {target: {value: 'My new value'}});
        expect(component.state('tooltipText')).toEqual('My new value');
    });
    it('click send file', () => {
        const component = mount(<AdminPage images={ mockData } {...propsFunc} />);
        component.setState({ file: 'someFile', tooltip: 'someTooltip' });
        const buttonCancel = component.find('button.it-admin-page-button-add-image.positive');
        buttonCancel.simulate('click');
        expect(component.state('file')).toEqual(null);
    });
    it('should change state if click load image', () => {
        const component = mount(<AdminPage images={ mockData } {...propsFunc} />);
        const inputImage = component.find('.invisible');
        const event = {
            target: {
                files: [{type: 'image/jpeg', name: 'base64file1', size: 30000}]
            }
        };
        inputImage.simulate('change', event);
        // expect(component.state('file')).toEqual('testFileReader');
    });
});
