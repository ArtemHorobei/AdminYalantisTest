import { connect } from 'react-redux';
import { getImagesState } from '../../selectors/imagesSelectors';
import PreviewPage from './PreviewPage.jsx';
import { requestGetImages } from '../../actions/actions';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    images: PropTypes.array.isRequired,
    requestGetImage: PropTypes.func.isRequired,
};

const PreviewPageContainer = props => <PreviewPage {...props}/>;

const mapStateToProps = () => {
    return state => {
        return {
            images: getImagesState(state)
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestGetImage: () => dispatch(requestGetImages()),
    };
};

PreviewPageContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PreviewPageContainer);
