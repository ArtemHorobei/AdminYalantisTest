import './PreviewPage.scss';
import React, { Component } from 'react';
import ImageBlock from './ImageBlock';
import PropTypes from 'prop-types';

const propTypes = {
    images: PropTypes.array.isRequired,
    requestGetImage: PropTypes.func.isRequired,
};

class PreviewPage extends Component {
    render() {
        const content = this.props.images.length > 0 ?
            this.props.images.map(item => {
                return (
                    <ImageBlock
                        key={item.id}
                        image={item}
                    />
                );
            }) :
            <h1>There are no images</h1>;
        return (
            <div className="it-preview-page-wrap">
                <h1>Preview page</h1>
                <div className="it-preview-page-content">
                    {content}
                </div>
            </div>
        );
    }
}

PreviewPage.propTypes = propTypes;

export default PreviewPage;
