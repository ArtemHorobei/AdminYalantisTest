export const REQUEST_GET_IMAGES = 'REQUEST_GET_IMAGES';
export const RECEIVE_GET_IMAGES = 'RECEIVE_GET_IMAGES';
export const REQUEST_ADD_IMAGES = 'REQUEST_ADD_IMAGES';
export const RECEIVE_ADD_IMAGES = 'RECEIVE_ADD_IMAGES';
export const REQUEST_DELETE_IMAGES = 'REQUEST_DELETE_IMAGES';
export const RECEIVE_DELETE_IMAGES = 'RECEIVE_DELETE_IMAGES';
export const REQUEST_EDIT_IMAGES = 'REQUEST_EDIT_IMAGES';
export const RECEIVE_EDIT_IMAGES = 'RECEIVE_EDIT_IMAGES';

export const requestGetImages = () => ({ type: REQUEST_GET_IMAGES });
export const receiveGetImages = data => ({ type: RECEIVE_GET_IMAGES, data });

export const requestAddImages = (file, tooltipText) => ({ type: REQUEST_ADD_IMAGES, payload: {file, tooltipText} });
export const receiveAddImages = data => ({ type: RECEIVE_ADD_IMAGES, data });

export const requestDeleteImages = id => ({ type: REQUEST_DELETE_IMAGES, id });
export const receiveDeleteImages = data => ({ type: RECEIVE_DELETE_IMAGES, data });

export const requestEditImages = data => ({ type: REQUEST_EDIT_IMAGES, data });
export const receiveEditImages = data => ({ type: RECEIVE_EDIT_IMAGES, data });
