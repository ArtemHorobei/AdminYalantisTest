import { connect } from 'react-redux';
import AdminPage from './AdminPage.jsx';
import { requestGetImages, requestAddImage, requestEditImage, requestDeleteImage } from '../../actions/actions';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    images: PropTypes.array.isRequired,
    requestGetImages: PropTypes.func.isRequired,
    requestAddImage: PropTypes.func.isRequired,
    requestDeleteImage: PropTypes.func.isRequired,
    requestEditImage: PropTypes.func.isRequired,
};

const AdminPageContainer = props => <AdminPage {...props}/>;

const mapStateToProps = () => {
    return state => {
        return {
            images: state.images
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestGetImages: () => dispatch(requestGetImages()),
        requestAddImage: data => dispatch(requestAddImage(data)),
        requestEditImage: data => dispatch(requestEditImage(data)),
        requestDeleteImage: data => dispatch(requestDeleteImage(data)),
    };
};

AdminPageContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
