import Header from 'components/Header';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Header', () => {
    it('renders shallow without crashing', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });
    it('renders mount without crashing', () => {
        const props = { location: { pathname: '/' } };
        const component = mount(
            <BrowserRouter>
                <Header {...props} />
            </BrowserRouter>
        );
        expect(component).toMatchSnapshot();
    });
});
