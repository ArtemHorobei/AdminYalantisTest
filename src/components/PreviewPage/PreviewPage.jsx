import './PreviewPage.scss';
import ImageBlock from './ImageBlock';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    images: PropTypes.array.isRequired,
};

const PreviewPage = ({ images }) => {
    const content = images.length > 0 ?
        images.map(item => {
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
};

PreviewPage.propTypes = propTypes;

export default PreviewPage;
