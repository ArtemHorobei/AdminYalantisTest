import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';
import HeaderWraper from 'components/Header';
import React from 'react';

describe('Header', () => {
    it('renders shallow without crashing', () => {
        const component = shallow(<HeaderWraper />);
        expect(component).toMatchSnapshot();
    });
    it('renders with active tab preview page', () => {
        const component = mount(
            <BrowserRouter>
                <Header location={ { pathname: '/' } }/>
            </BrowserRouter>
        );
        expect(component.find('a.it-header-link.active').text()).toEqual('Preview Page');
    });
    it('renders with active tab admin page', () => {
        const component = mount(
            <BrowserRouter>
                <Header location={ { pathname: '/admin' } }/>
            </BrowserRouter>
        );
        expect(component.find('a.it-header-link.active').text()).toEqual('Admin Page');
    });
});
