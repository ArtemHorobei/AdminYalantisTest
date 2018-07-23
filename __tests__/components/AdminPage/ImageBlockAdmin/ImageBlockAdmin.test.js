import { shallow, mount } from 'enzyme';
import ImageBlockAdmin from 'components/AdminPage/ImageBlockAdmin';
import mockData from '../../../../src/sagas/mockData';
import React from 'react';

describe('ImageBlockAdmin', () => {
    let propsFunc = null;
    beforeEach(() => {
        propsFunc = {
            requestDeleteImage: jest.fn(() => Promise.resolve()),
            requestEditImage: jest.fn(() => Promise.resolve()),
        };
    });
    it('renders shallow without crashing', () => {
        const component = shallow(<ImageBlockAdmin image={ mockData[0] } { ...propsFunc } />);
        expect(component).toMatchSnapshot();
    });
    it('renders shallow without crashing', () => {
        const component = mount(<ImageBlockAdmin image={ mockData[0] } { ...propsFunc } />);
        expect(component.find('.it-image-block-admin-wrap').length).toBe(1);
    });
    it('renders shallow without crashing', () => {
        const component = mount(<ImageBlockAdmin image={ mockData[0] } { ...propsFunc } />);
        component.setState({ isEdit: true });
        component.find('textarea');
    });
    it('click delete file', () => {
        const component = mount(<ImageBlockAdmin image={ mockData[0] } {...propsFunc} />);
        const buttonCancel = component.find('button.it-image-block-button.delete');
        buttonCancel.simulate('click');
        expect(propsFunc.requestDeleteImage).toHaveBeenCalledTimes(1);
    });
    it('change state of isEdit', () => {
        const component = mount(<ImageBlockAdmin image={ mockData[0] } {...propsFunc} />);
        const buttonEdit = component.find('button.it-image-block-button.edit');
        buttonEdit.simulate('click');
        expect(component.state('isEdit')).toEqual(true);
    });
    it('change value of textarea', () => {
        const component = mount(<ImageBlockAdmin image={ mockData[0] } {...propsFunc} />);
        component.setState({ isEdit: true });
        const textarea = component.find('textarea');
        textarea.simulate('change', {target: {value: 'My new value'}});
        expect(component.state('tooltipText')).toEqual('My new value');
    });
    it('click send file', () => {
        const component = mount(<ImageBlockAdmin image={ mockData[0] } {...propsFunc} />);
        component.setState({ isEdit: true, tooltipText: 'someTooltip' });
        const buttonSave = component.find('button.it-image-block-button.edit');
        buttonSave.simulate('click');
        expect(propsFunc.requestEditImage).toHaveBeenCalledTimes(1);
    });
});
