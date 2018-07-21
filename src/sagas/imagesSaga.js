import {
    call, put, takeLatest,
} from 'redux-saga/effects';
import {
    REQUEST_GET_IMAGES,
    REQUEST_ADD_IMAGES,
    REQUEST_DELETE_IMAGES,
    REQUEST_EDIT_IMAGES,
    receiveGetImages,
    receiveAddImages,
    receiveEditImages,
    receiveDeleteImages,
} from '../actions/actions';
import { requestGetImages, requestAddImages } from '../api/api';

function* getImagesSaga() {
    // try {
    //     const data = yield call(requestGetImages);
    //     if (data && data.headers) {
    //         yield put(receiveGetImages(data.data.data.posts));
    //     }
    // } catch (e) {
    //     console.log(e);
    // }
}

function* addImagesSaga(data) {
    const newDataImage = {
        id: Math.random().toString().split('.')[1],
        link: data.payload.file,
        tooltip: data.payload.tooltipText
    };
    yield put(receiveAddImages(newDataImage));
//     try {
//         const data = yield call(requestAddImages);
//         if (data && data.headers) {
//             yield put(receiveAddImages(data.data.post));
//         }
//     } catch (e) {
//         console.log(e);
//     }
}

function* editImagesSaga(data) {
    const editDataImage = {
        id: data.data.id,
        tooltip: data.data.tooltip
    };
    yield put(receiveEditImages(editDataImage));
//     try {
//         const data = yield call(requestAddImages);
//         if (data && data.headers) {
//             yield put(receiveAddImages(data.data.post));
//         }
//     } catch (e) {
//         console.log(e);
//     }
}

function* deleteImagesSaga(data) {
    yield put(receiveDeleteImages(data.id));
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
    yield takeLatest(REQUEST_ADD_IMAGES, addImagesSaga);
    yield takeLatest(REQUEST_EDIT_IMAGES, editImagesSaga);
    yield takeLatest(REQUEST_DELETE_IMAGES, deleteImagesSaga);
}
