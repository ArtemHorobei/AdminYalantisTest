import config from './config.json';
import axios from 'axios';

const apiPrefix = config[process.env.NODE_ENV].apiPrefix + config.versionApi;

export const requestGetImages = () => {
    return axios.get(`${apiPrefix}${config.images.getImages}`).then((res) => {
        return res;
    });
};

export const requestAddImage = () => {
    return axios.post(`${apiPrefix}${config.images.addImage}`).then((res) => {
        return res;
    });
};

export const requestEditImage = () => {
    return axios.put(`${apiPrefix}${config.images.editImage}`).then((res) => {
        return res;
    });
};

export const requestDeleteImage = () => {
    return axios.delete(`${apiPrefix}${config.images.deleteImage}`).then((res) => {
        return res;
    });
};
