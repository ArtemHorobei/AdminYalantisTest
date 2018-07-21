import { connect } from 'react-redux';
import AdminPage from './AdminPage.jsx';
import { requestAddImages, requestEditImages, requestDeleteImages } from '../../actions/actions';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    images: PropTypes.array.isRequired,
    requestAddImages: PropTypes.func.isRequired,
    requestDeleteImages: PropTypes.func.isRequired,
    requestEditImages: PropTypes.func.isRequired,
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
        requestAddImages: (file, tooltipText) => dispatch(requestAddImages(file, tooltipText)),
        requestEditImages: data => dispatch(requestEditImages(data)),
        requestDeleteImages: id => dispatch(requestDeleteImages(id)),
    };
};

AdminPageContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
