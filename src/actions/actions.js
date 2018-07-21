export const REQUEST_GET_IMAGES = 'REQUEST_GET_IMAGES';
export const RECEIVE_GET_IMAGES = 'RECEIVE_GET_IMAGES';
export const REQUEST_ADD_IMAGE = 'REQUEST_ADD_IMAGE';
export const RECEIVE_ADD_IMAGE = 'RECEIVE_ADD_IMAGE';
export const REQUEST_DELETE_IMAGE = 'REQUEST_DELETE_IMAGE';
export const RECEIVE_DELETE_IMAGE = 'RECEIVE_DELETE_IMAGE';
export const REQUEST_EDIT_IMAGE = 'REQUEST_EDIT_IMAGE';
export const RECEIVE_EDIT_IMAGE = 'RECEIVE_EDIT_IMAGE';

export const requestGetImages = () => ({ type: REQUEST_GET_IMAGES });
export const receiveGetImages = data => ({ type: RECEIVE_GET_IMAGES, data });

export const requestAddImage = (file, tooltipText) => ({ type: REQUEST_ADD_IMAGE, payload: {file, tooltipText} });
export const receiveAddImage = data => ({ type: RECEIVE_ADD_IMAGE, data });

export const requestDeleteImage = id => ({ type: REQUEST_DELETE_IMAGE, id });
export const receiveDeleteImage = data => ({ type: RECEIVE_DELETE_IMAGE, data });

export const requestEditImage = data => ({ type: REQUEST_EDIT_IMAGE, data });
export const receiveEditImage = data => ({ type: RECEIVE_EDIT_IMAGE, data });
