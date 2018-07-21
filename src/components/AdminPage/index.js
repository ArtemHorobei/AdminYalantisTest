import { connect } from 'react-redux';
import AdminPage from './AdminPage.jsx';
import { requestAddImage, requestEditImage, requestDeleteImage } from '../../actions/actions';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    images: PropTypes.array.isRequired,
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
        requestAddImage: (file, tooltipText) => dispatch(requestAddImage(file, tooltipText)),
        requestEditImage: data => dispatch(requestEditImage(data)),
        requestDeleteImage: id => dispatch(requestDeleteImage(id)),
    };
};

AdminPageContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
