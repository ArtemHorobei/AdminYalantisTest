import { shallow, mount } from 'enzyme';
import ImageBlock from 'components/PreviewPage/ImageBlock';
import mockData from '../../../../src/sagas/mockData';
import React from 'react';

describe('ImageBlock', () => {
    it('renders shallow without crashing', () => {
        const component = shallow(<ImageBlock image={ mockData[0] } />);
        expect(component).toMatchSnapshot();
    });
    it('renders with tooltip', () => {
        const component = mount(<ImageBlock image={ mockData[0] }/>);
        expect(component.find('svg').length).toBe(1);
    });
    it('renders without tooltip', () => {
        const component = mount(<ImageBlock image={{}}/>);
        expect(component.find('svg').length).toBe(0);
    });
    it('renders when state isTooltip is true', () => {
        const component = mount(<ImageBlock image={ mockData[0] } />);
        component.setState({ isTooltip: true });
        expect(component.find('Tooltip').length).toBe(1);
    });
    it('renders when state isTooltip is false', () => {
        const component = mount(<ImageBlock image={ mockData[0] } />);
        component.setState({ isTooltip: false });
        expect(component.find('Tooltip').length).toBe(0);
    });
});
