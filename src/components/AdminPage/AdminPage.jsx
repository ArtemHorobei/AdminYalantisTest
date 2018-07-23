import './AdminPage.scss';
import React, { Component } from 'react';
import ImageBlockAdmin from './ImageBlockAdmin';
import PropTypes from 'prop-types';

const propTypes = {
    images: PropTypes.array.isRequired,
    requestGetImages: PropTypes.func.isRequired,
    requestAddImage: PropTypes.func.isRequired,
    requestDeleteImage: PropTypes.func.isRequired,
    requestEditImage: PropTypes.func.isRequired,
};

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            tooltipText: ''
        }
    }
    handleClickLoadFile = () => {
        this.inputHiddenLoad.click();
    };
    handleChangeLoadFile = (event) => {
        for (let i = 0; i < event.target.files.length; i++) {
            const file = event.target.files[i];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => this.setState({file: reader.result});
        }
    };
    handleClickDeleteFile = () => {
        this.inputHiddenLoad.value = '';
        this.setState({file: null, tooltipText: ''});
    };
    handleInputTextarea = (e) => {
        this.setState({tooltipText: e.target.value});
    };
    handleClickSendFile = () => {
        const { file, tooltipText } = this.state;
        this.props.requestAddImage({file, tooltipText});
        this.handleClickDeleteFile();
    };
    render() {
        const content = this.props.images.length > 0 ?
            this.props.images.map(item => {
                return (
                    <ImageBlockAdmin
                        requestEditImage={this.props.requestEditImage}
                        requestDeleteImage={this.props.requestDeleteImage}
                        key={item.id}
                        image={item}
                    />
                );
            }) :
            <h1>There are no images</h1>;
        return (
            <div className="it-admin-page-wrap">
                <h1>Admin page</h1>
                <div className="it-admin-page-add-image-wrap">
                    {this.state.file ?
                        <React.Fragment>
                            <img className="it-admin-page-new-image" src={this.state.file} alt="newImage"/>
                            <textarea
                                type="text"
                                rows="10"
                                placeholder="Tooltip"
                                value={this.state.tooltipText}
                                onChange={this.handleInputTextarea}
                                className="it-admin-page-textarea"/>
                            <div className="it-admin-page-buttons-wrap">
                                <button
                                    className="it-admin-page-button-add-image negative"
                                    onClick={this.handleClickDeleteFile}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="it-admin-page-button-add-image positive"
                                    onClick={this.handleClickSendFile}
                                >
                                    Create
                                </button>
                            </div>
                        </React.Fragment> :
                        <button
                            className="it-admin-page-button-add-image positive"
                            onClick={this.handleClickLoadFile}
                        >
                            Upload new image
                        </button>
                    }
                </div>
                <div className="it-admin-page-content">
                    {content}
                </div>
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    className="invisible"
                    ref={input => this.inputHiddenLoad = input}
                    onChange={this.handleChangeLoadFile}
                />
            </div>
        );
    }
}

AdminPage.propTypes = propTypes;

export default AdminPage;
