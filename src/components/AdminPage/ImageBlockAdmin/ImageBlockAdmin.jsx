import './ImageBlockAdmin.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    image: PropTypes.object.isRequired,
    requestDeleteImages: PropTypes.func.isRequired,
    requestEditImages: PropTypes.func.isRequired,
};

class ImageBlockAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            tooltipText: this.props.image.tooltip
        }
    }
    handleInputTextarea = (e) => {
        this.setState({tooltipText: e.target.value});
    };
    handleClickDelete = () => {
        this.props.requestDeleteImages(this.props.image.id);
    };
    toggleEditState = () => {
        this.setState({ isEdit: !this.state.isEdit })
    };
    handleClickSave = () => {
        const editData = {
            id: this.props.image.id,
            tooltip: this.state.tooltipText,
        };
        this.props.requestEditImages(editData);
        this.setState({ isEdit: !this.state.isEdit })
    };
    render () {
        const editTooltipContent = this.state.isEdit ?
                <textarea
                    type="text"
                    rows="10"
                    placeholder="Tooltip"
                    value={this.state.tooltipText}
                    onChange={this.handleInputTextarea}
                    className="it-image-block-admin-textarea"/> :
                this.props.image.tooltip && <div style={{ marginBottom: '15px' }}>{this.props.image.tooltip}</div>;
        return (
            <div className="it-image-block-admin-wrap">
                <div className="it-image-block-content">
                    <img
                        src={this.props.image.link}
                        className="it-image-block-item"
                        alt="imageBlockItem"
                    />
                    {editTooltipContent}
                    <div className="it-image-block-buttons-wrap">
                        {this.state.isEdit ?
                            <button
                                className="it-image-block-button edit"
                                onClick={this.handleClickSave}
                                >
                                save
                                </button> :
                            <React.Fragment>
                                <button
                                    className="it-image-block-button edit"
                                    onClick={this.toggleEditState}
                                >
                                    edit
                                </button>
                                <button
                                    className="it-image-block-button delete"
                                    onClick={this.handleClickDelete}
                                >
                                    delete
                                </button>
                            </React.Fragment>
                        }

                    </div>
                </div>
            </div>
        );
    }
}

ImageBlockAdmin.propTypes = propTypes;

export default ImageBlockAdmin;