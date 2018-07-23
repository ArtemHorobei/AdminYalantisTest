import './Tooltip.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    position: PropTypes.shape({
        top: PropTypes.number,
        left: PropTypes.number,
    }).isRequired
};

class Tooltip extends Component {
    componentDidMount () {
        if (this.container) {
            if (document.documentElement.clientWidth - this.container.getBoundingClientRect().top < 900) {
                this.container.style.left = `${this.props.position.left}px`;
                this.container.style.top = `${this.props.position.top - this.container.clientHeight}px`;
            } else {
                this.container.style.left = `${this.props.position.left}px`;
                this.container.style.top = `${this.props.position.top}px`;
            }
        }
    }
    render () {
        return (
            <div
                className="it-tooltip-wrap"
                ref={(div) => this.container = div }
                onMouseLeave={this.props.onMouseLeave}
            >
                <div className="it-tooltip-content">
                    <div className="it-tooltip-text">{this.props.text}</div>
                    <div className="it-tooltip-buttons-wrap">
                        <button className="button positive">accept</button>
                        <button className="button negative">decline</button>
                    </div>
                </div>
            </div>
        );
    }
}

Tooltip.propTypes = propTypes;

export default Tooltip;
