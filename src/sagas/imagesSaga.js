import { call, put, takeLatest } from 'redux-saga/effects';
import {
    REQUEST_GET_IMAGES,
    REQUEST_ADD_IMAGE,
    REQUEST_DELETE_IMAGE,
    REQUEST_EDIT_IMAGE,
    receiveGetImages,
    receiveAddImage,
    receiveEditImage,
    receiveDeleteImage,
} from '../actions/actions';
import {
    requestGetImages,
    requestAddImage,
    requestEditImage,
    requestDeleteImage
} from '../api/api';

function* getImagesSaga() {
    yield put(receiveGetImages());
    // try {
    //     const data = yield call(requestGetImages);
    //     if (data && data.headers) {
    //         yield put(receiveGetImages(data.data.data.posts));
    //     }
    // } catch (e) {
    //     console.log(e);
    // }
}

function* addImageSaga(data) {
    const newDataImage = {
        id: Math.random().toString().split('.')[1],
        link: data.payload.file,
        tooltip: data.payload.tooltipText
    };
    yield put(receiveAddImage(newDataImage));
//     try {
//         const data = yield call(requestAddImages);
//         if (data && data.headers) {
//             yield put(receiveAddImages(data.data.post));
//         }
//     } catch (e) {
//         console.log(e);
//     }
}

function* editImageSaga(data) {
    const editDataImage = {
        id: data.data.id,
        tooltip: data.data.tooltip
    };
    yield put(receiveEditImage(editDataImage));
//     try {
//         const data = yield call(requestAddImages);
//         if (data && data.headers) {
//             yield put(receiveAddImages(data.data.post));
//         }
//     } catch (e) {
//         console.log(e);
//     }
}

function* deleteImageSaga(data) {
    yield put(receiveDeleteImage(data.id));
//     try {
//         const data = yield call(requestAddImages);
//         if (data && data.headers) {
//             yield put(receiveAddImages(data.data.post));
//         }
//     } catch (e) {
//         console.log(e);
//     }
}

export default function* postsSaga() {
    yield takeLatest(REQUEST_GET_IMAGES, getImagesSaga);
    yield takeLatest(REQUEST_ADD_IMAGE, addImageSaga);
    yield takeLatest(REQUEST_EDIT_IMAGE, editImageSaga);
    yield takeLatest(REQUEST_DELETE_IMAGE, deleteImageSaga);
}
