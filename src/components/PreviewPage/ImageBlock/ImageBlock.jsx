import './ImageBlock.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';

const propTypes = {
    image: PropTypes.object.isRequired,
};

class ImageBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { isTooltip: false }
    }
    handleMouseEnter = () => {
        this.userPreviewTimer = setTimeout(() => {
            this.setState({ isTooltip: true});
        }, 300);
    };
    handleMouseLeave = () => {
        clearInterval(this.userPreviewTimer);
        this.userPreviewTimer = null;
        this.setState({ isTooltip: false});
    };
    render () {
        return (
            <div className="it-image-block-wrap">
                <div className="it-image-block-content" onMouseLeave={this.handleMouseLeave}>
                    {
                        this.props.image.tooltip && (
                            <svg
                                onMouseEnter={this.handleMouseEnter}
                                fill="#fff"
                                className="it-image-block-info-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                            </svg>
                        )
                    }
                    <img
                        src={this.props.image.link}
                        className="it-image-block-item"
                        alt="imageBlockItem"
                    />
                    {
                        this.state.isTooltip &&
                            <Tooltip
                                text={this.props.image.tooltip}
                                onMouseLeave={this.handleMouseLeave}
                                position={{top: 25, left: 30}}
                            />
                    }
                </div>
            </div>
        );
    }
}

ImageBlock.propTypes = propTypes;

export default ImageBlock;
