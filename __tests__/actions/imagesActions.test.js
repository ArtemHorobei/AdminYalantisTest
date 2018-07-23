import * as imagesActions from '../../src/actions/actions';
import configureMockStore from 'redux-mock-store';
import mockData from '../../src/sagas/mockData';

const mockStore = configureMockStore();
const store = mockStore();

describe('async actions images', () => {
    beforeEach(() => {store.clearActions()});
    describe('request getImages', () => {
        it('should return images (success)', () => {
            const expectedActions = [
                { type: imagesActions.REQUEST_GET_IMAGES }
            ];
            store.dispatch(imagesActions.requestGetImages());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    describe('request addImages', () => {
        it('should return image (success)', () => {
            const expectedActions = [
                { type: imagesActions.REQUEST_ADD_IMAGE, data: { id: '1', link: 'link', tooltip: 'tooltip' } }
            ];
            store.dispatch(imagesActions.requestAddImage({ id: '1', link: 'link', tooltip: 'tooltip' }));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    describe('request deleteImages', () => {
        it('should return image (success)', () => {
            const expectedActions = [
                { type: imagesActions.REQUEST_DELETE_IMAGE, data: { id: '1' } }
            ];
            store.dispatch(imagesActions.requestDeleteImage({ id: '1' }));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    describe('request editImages', () => {
        it('should return image (success)', () => {
            const expectedActions = [
                { type: imagesActions.REQUEST_EDIT_IMAGE, data: { id: '1', tooltip: 'tooltip' } }
            ];
            store.dispatch(imagesActions.requestEditImage({ id: '1', tooltip: 'tooltip' }));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    describe('receive getImages', () => {
        it('should return images (success)', () => {
            const expectedActions = [
                { type: imagesActions.RECEIVE_GET_IMAGES, data: mockData }
            ];
            store.dispatch(imagesActions.receiveGetImages(mockData));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    describe('receive addImages', () => {
        it('should return image (success)', () => {
            const expectedActions = [
                { type: imagesActions.RECEIVE_ADD_IMAGE, data: { id: '1', link: 'link', tooltip: 'tooltip' } }
            ];
            store.dispatch(imagesActions.receiveAddImage({ id: '1', link: 'link', tooltip: 'tooltip' }));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    describe('receive deleteImages', () => {
        it('should return image (success)', () => {
            const expectedActions = [
                { type: imagesActions.RECEIVE_DELETE_IMAGE, data: { id: '1' } }
            ];
            store.dispatch(imagesActions.receiveDeleteImage({ id: '1' }));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    describe('receive editImages', () => {
        it('should return image (success)', () => {
            const expectedActions = [
                { type: imagesActions.RECEIVE_EDIT_IMAGE, data: { id: '1', tooltip: 'tooltip' } }
            ];
            store.dispatch(imagesActions.receiveEditImage({ id: '1', tooltip: 'tooltip' }));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
