import {
    RECEIVE_GET_IMAGES,
    RECEIVE_ADD_IMAGE,
    RECEIVE_DELETE_IMAGE,
    RECEIVE_EDIT_IMAGE
} from '../../src/actions/actions';
import mockData from '../../src/sagas/mockData';
import imagesReducer from '../../src/reducers/imagesReducer';

const newImage = { id: '1', link: 'link', tooltip: 'tooltip' };
const editImage = { id: '123456789', link: mockData[1].link, tooltip: 'newTooltip' };
const editImageEqual = mockData.map(item => item.id === editImage.id ? {...item, tooltip: editImage.tooltip} : item);
const deleteImageId = '1';

describe('images reducer', () => {
    it('should return the initial state', () => {
        expect(imagesReducer(undefined, [])).toEqual(mockData);
    });
    it('should return the comments if some action', () => {
        expect(imagesReducer(mockData, { type: RECEIVE_GET_IMAGES, data: mockData })).toEqual(mockData);
    });
    it('should return the comments if some action', () => {
        expect(imagesReducer(mockData, { type: RECEIVE_ADD_IMAGE, data: newImage })).toEqual([ { id: '1', link: 'link', tooltip: 'tooltip' }, ...mockData]);
    });
    it('should return the comments if some action', () => {
        imagesReducer(mockData, { type: 'RECEIVE_ADD_IMAGE', data: newImage });
        expect(imagesReducer(mockData, { type: RECEIVE_DELETE_IMAGE, payload: deleteImageId })).toEqual(mockData);
    });
    it('should return the comments if some action', () => {
        expect(imagesReducer(mockData, { type: RECEIVE_EDIT_IMAGE, data: editImage })).toEqual(editImageEqual);
    });
});
