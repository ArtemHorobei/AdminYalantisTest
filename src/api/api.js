import axios from 'axios';
import Cookies from 'js-cookie';

export const requestGetImages = () => {
    const cookieHeaders = Cookies.get('session');
    return axios.get('http://localhost:3002/api/v1/posts', { headers: JSON.parse(cookieHeaders) }).then((res) => {
        return res;
    });
};

export const requestAddImages = () => {
    const cookieHeaders = Cookies.get('session');
    return axios.post('http://localhost:3002/api/v1/posts', { title: 'Title', content: 'Content' }, { headers: JSON.parse(cookieHeaders) }).then((res) => {
        return res;
    });
};
