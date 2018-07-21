import {
    RECEIVE_GET_IMAGES,
    RECEIVE_ADD_IMAGE,
    RECEIVE_EDIT_IMAGE,
    RECEIVE_DELETE_IMAGE,
} from '../actions/actions';
import _ from 'lodash';
import mockInitialData from '../sagas/mockData';

const initialState = mockInitialData;

export default (state = initialState, { type, data }) => {
    switch (type) {
    case RECEIVE_GET_IMAGES:
        return data;
    case RECEIVE_ADD_IMAGE:
        return [data, ...state];
    case RECEIVE_EDIT_IMAGE:
        return _.map(state, item => item.id === data.id ? {...item, tooltip: data.tooltip} : item);
    case RECEIVE_DELETE_IMAGE:
        return _.filter(state, item => item.id !== data);
    default:
        return state;
    }
};
