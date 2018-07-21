import { connect } from 'react-redux';
import PreviewPage from './PreviewPage.jsx';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    images: PropTypes.array.isRequired,
};

const PreviewPageContainer = props => <PreviewPage {...props}/>;

const mapStateToProps = () => {
    return state => {
        return {
            images: state.images
        }
    }
};

PreviewPageContainer.propTypes = propTypes;

export default connect(mapStateToProps)(PreviewPageContainer);
